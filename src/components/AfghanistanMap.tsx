import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo, useRef, useCallback, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, ArrowLeft, Users, Building2, FolderGit2, DollarSign, 
  ZoomIn, ZoomOut, Maximize2, MapPin, TrendingUp, Gem, Wheat, Zap,
  Activity, Layers, Eye, RotateCcw
} from "lucide-react";
import { provincesData, type ProvinceData } from "@/data/provinces";

const GlobeView = lazy(() => import("@/components/GlobeView").then(m => ({ default: m.GlobeView })));

const PROVINCE_NAME_LOCAL: Record<string, string> = {
  kabul: "کابل", herat: "هرات", balkh: "بلخ", kandahar: "کندهار", nangarhar: "ننگرهار",
  helmand: "هلمند", ghazni: "غزنی", kunduz: "کندز", baghlan: "بغلان", takhar: "تخار",
  badakhshan: "بدخشان", faryab: "فاریاب", jowzjan: "جوزجان", samangan: "سمنگان",
  "sar-e-pol": "سرپل", bamyan: "بامیان", parwan: "پروان", kapisa: "کاپیسا", wardak: "وردک",
  logar: "لوگر", paktya: "پکتیا", paktika: "پکتیکا", khost: "خوست", kunar: "کنر",
  laghman: "لغمان", nuristan: "نورستان", panjshir: "پنجشیر", daikundi: "دایکندی",
  ghor: "غور", badghis: "بادغیس", farah: "فراه", nimroz: "نیمروز", zabul: "زابل",
  uruzgan: "ارزگان",
};

const REGION_COLORS: Record<string, { fill: string; glow: string; border: string }> = {
  Central: { fill: "43 90% 50%", glow: "43 100% 65%", border: "43 100% 60%" },
  North: { fill: "200 80% 45%", glow: "200 100% 65%", border: "200 90% 55%" },
  South: { fill: "15 85% 50%", glow: "15 100% 65%", border: "15 90% 55%" },
  East: { fill: "140 70% 40%", glow: "140 90% 55%", border: "140 80% 50%" },
  West: { fill: "280 70% 50%", glow: "280 90% 65%", border: "280 80% 55%" },
};

const REGIONS = ["All", "Central", "North", "South", "East", "West"] as const;
type RegionFilter = (typeof REGIONS)[number];

const provinceNameAliases: Record<string, string> = {
  Ghanzi: "Ghazni", Daykundi: "Daikundi", Paktia: "Paktya", Panjsher: "Panjshir",
  Jawzjan: "Jowzjan", "Sari Pul": "Sar-e-Pol", Hirat: "Herat", Hilmand: "Helmand",
  "Maydan Wardak": "Wardak",
};

function getProvinceByShapeName(shapeName: string | undefined): ProvinceData | undefined {
  if (!shapeName) return undefined;
  const normalized = provinceNameAliases[shapeName] ?? shapeName;
  return provincesData.find((p) => p.name.toLowerCase() === normalized.toLowerCase());
}

interface GeoFeature {
  type: string;
  properties: { name?: string; shapeName?: string };
  geometry: { type: string; coordinates: number[][][] | number[][][][] };
}

interface GeoCollection {
  type: string;
  features: GeoFeature[];
}

function geoToSvgPath(feature: GeoFeature, project: (coord: [number, number]) => [number, number]): string {
  const geom = feature.geometry;
  const rings: number[][][] = geom.type === "Polygon"
    ? (geom.coordinates as number[][][])
    : (geom.coordinates as number[][][][]).flat();

  return rings.map(ring => {
    const points = ring.map(c => project([c[0], c[1]]));
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') + 'Z';
  }).join(' ');
}

function getCentroid(feature: GeoFeature): [number, number] {
  const geom = feature.geometry;
  const ring: number[][] = geom.type === "Polygon"
    ? (geom.coordinates as number[][][])[0]
    : (geom.coordinates as number[][][][])[0][0];
  let x = 0, y = 0;
  for (const c of ring) { x += c[0]; y += c[1]; }
  return [x / ring.length, y / ring.length];
}

// Animated particles along trade routes
const TradeRouteParticle = ({ from, to, delay, duration }: { from: [number, number]; to: [number, number]; delay: number; duration: number }) => {
  const midX = (from[0] + to[0]) / 2;
  const midY = Math.min(from[1], to[1]) - 30;
  return (
    <motion.circle
      r="2"
      fill="hsl(43 100% 75%)"
      filter="url(#particle-glow)"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <animateMotion
        dur={`${duration}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={`M${from[0]},${from[1]} Q${midX},${midY} ${to[0]},${to[1]}`}
      />
    </motion.circle>
  );
};

type MapLayer = "economic" | "resources" | "infrastructure";

export const AfghanistanMap = () => {
  const [selectedProvince, setSelectedProvince] = useState<ProvinceData | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [geojson, setGeojson] = useState<GeoCollection | null>(null);
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("All");
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [activeLayer, setActiveLayer] = useState<MapLayer>("economic");
  const [showLabels, setShowLabels] = useState(true);
  const [viewMode, setViewMode] = useState<"map" | "globe">("map");
  const svgRef = useRef<SVGSVGElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [time, setTime] = useState(0);

  // Ambient animation timer
  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("/maps/afghanistan-provinces.json")
      .then((r) => r.json())
      .then((data) => setGeojson(data as GeoCollection))
      .catch(() => setGeojson(null));
  }, []);

  const project = useCallback((coord: [number, number]): [number, number] => {
    const minLng = 60.4, maxLng = 75.0, minLat = 29.3, maxLat = 38.5;
    const width = 900, height = 600;
    const x = ((coord[0] - minLng) / (maxLng - minLng)) * width;
    const y = ((maxLat - coord[1]) / (maxLat - minLat)) * height;
    return [x, y];
  }, []);

  const { paths, centroids } = useMemo(() => {
    if (!geojson) return { paths: [], centroids: new Map<string, [number, number]>() };
    const paths: { id: string; d: string; province: ProvinceData | undefined; name: string }[] = [];
    const centroids = new Map<string, [number, number]>();

    for (const feature of geojson.features) {
      const name = feature.properties?.shapeName ?? feature.properties?.name ?? "";
      const province = getProvinceByShapeName(name);
      const d = geoToSvgPath(feature, project);
      const centroid = getCentroid(feature);
      const projected = project(centroid);
      paths.push({ id: province?.id ?? name, d, province, name });
      if (province) centroids.set(province.id, projected);
    }
    return { paths, centroids };
  }, [geojson, project]);

  // Zoom to province on click
  const zoomToProvince = useCallback((province: ProvinceData) => {
    setSelectedProvince(province);
    const centroid = centroids.get(province.id);
    if (centroid) {
      const targetZoom = 2.5;
      const targetPanX = -(centroid[0] - 450) * targetZoom * 0.5;
      const targetPanY = -(centroid[1] - 300) * targetZoom * 0.5;
      setZoom(targetZoom);
      setPan({ x: targetPanX, y: targetPanY });
    }
  }, [centroids]);


  const tradeRoutes = useMemo(() => {
    const routes: { from: [number, number]; to: [number, number]; type: string }[] = [];
    const majorHubs = ["kabul", "herat", "balkh", "kandahar", "nangarhar"];
    for (let i = 0; i < majorHubs.length; i++) {
      for (let j = i + 1; j < majorHubs.length; j++) {
        const a = centroids.get(majorHubs[i]);
        const b = centroids.get(majorHubs[j]);
        if (a && b) routes.push({ from: a, to: b, type: "major" });
      }
    }
    // Secondary connections
    const secondaryPairs = [
      ["kunduz", "takhar"], ["baghlan", "samangan"], ["faryab", "jowzjan"],
      ["helmand", "nimroz"], ["ghazni", "paktya"], ["bamyan", "daikundi"],
      ["parwan", "kapisa"], ["kunar", "laghman"], ["logar", "wardak"],
      ["paktika", "khost"], ["badghis", "ghor"], ["farah", "nimroz"],
    ];
    for (const [a, b] of secondaryPairs) {
      const pa = centroids.get(a);
      const pb = centroids.get(b);
      if (pa && pb) routes.push({ from: pa, to: pb, type: "secondary" });
    }
    return routes;
  }, [centroids]);

  // Connection lines between regional neighbors
  const connections = useMemo(() => {
    const conns: { from: [number, number]; to: [number, number] }[] = [];
    const byRegion = new Map<string, string[]>();
    for (const p of provincesData) {
      if (!centroids.has(p.id)) continue;
      const list = byRegion.get(p.region) ?? [];
      list.push(p.id);
      byRegion.set(p.region, list);
    }
    byRegion.forEach((ids) => {
      for (let i = 0; i < ids.length; i++) {
        const a = centroids.get(ids[i]);
        const b = centroids.get(ids[(i + 1) % ids.length]);
        if (a && b) conns.push({ from: a, to: b });
      }
    });
    return conns.slice(0, 50);
  }, [centroids]);

  const filteredProvinces = useMemo(
    () => regionFilter === "All" ? provincesData : provincesData.filter((p) => p.region === regionFilter),
    [regionFilter]
  );

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPanning(true);
    setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
  };
  const handleMouseUp = () => setIsPanning(false);

  const getRegionColor = (province: ProvinceData | undefined) => {
    if (!province) return REGION_COLORS.Central;
    return REGION_COLORS[province.region] ?? REGION_COLORS.Central;
  };

  const layerIcons = {
    economic: { icon: TrendingUp, label: "Economic" },
    resources: { icon: Gem, label: "Resources" },
    infrastructure: { icon: Layers, label: "Infrastructure" },
  };

  return (
    <section className="py-20 px-3 sm:px-4 lg:px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(220 22% 2%), hsl(220 20% 4%) 30%, hsl(220 18% 3%) 70%, hsl(220 22% 2%))" }}>
      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 4 + (i % 3), delay: i * 0.3, repeat: Infinity }}
          />
        ))}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full bg-primary/[0.03] blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[100px]" />
      </div>

      <div className="relative w-full max-w-[1700px] mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            animate={{ boxShadow: ["0 0 20px hsl(43 100% 65% / 0.1)", "0 0 40px hsl(43 100% 65% / 0.2)", "0 0 20px hsl(43 100% 65% / 0.1)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Live Investment Map</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-3 tracking-tight">
            Afghanistan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">Investment Network</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-3xl mx-auto">
            Real-time visualization of 34 provinces · Economic corridors · Resource distribution · Infrastructure development
          </p>
        </motion.header>

        <div className="flex flex-col xl:flex-row gap-5">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(165deg, hsl(220 25% 5%), hsl(220 22% 3%) 50%, hsl(220 20% 4%))",
              boxShadow: "0 0 100px hsl(43 100% 65% / 0.06), 0 30px 100px -20px hsl(0 0% 0% / 0.7), inset 0 1px 0 hsl(0 0% 100% / 0.03)",
              border: "1px solid hsl(43 100% 65% / 0.1)",
            }}
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
              background: "linear-gradient(135deg, hsl(43 100% 65% / 0.08) 0%, transparent 30%, transparent 70%, hsl(210 100% 68% / 0.05) 100%)",
            }} />

            {/* Subtle grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{ backgroundImage: "linear-gradient(hsl(43 100% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(43 100% 65%) 1px, transparent 1px)", backgroundSize: "50px 50px" }}
            />

            {/* Top toolbar */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
              {/* Layer toggles */}
              <div className="flex gap-1.5 p-1 rounded-xl bg-card/80 backdrop-blur-md border border-border/40">
                {(Object.entries(layerIcons) as [MapLayer, typeof layerIcons.economic][]).map(([key, { icon: Icon, label }]) => (
                  <button
                    key={key}
                    onClick={() => setActiveLayer(key)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeLayer === key
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="flex gap-1 p-1 rounded-xl bg-card/80 backdrop-blur-md border border-border/40">
                <button
                  onClick={() => setViewMode(v => v === "map" ? "globe" : "map")}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${viewMode === "globe" ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                  title={viewMode === "map" ? "Switch to 3D Globe" : "Switch to 2D Map"}
                >
                  {viewMode === "map" ? <Globe className="w-3.5 h-3.5" /> : <MapPin className="w-3.5 h-3.5" />}
                </button>
                <button onClick={() => setShowLabels(!showLabels)} className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${showLabels ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                  <Eye className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => setZoom(z => Math.min(z * 1.3, 4))} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => { setZoom(z => Math.max(z / 1.3, 0.8)); setPan({ x: 0, y: 0 }); }} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }} className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Region filter chips */}
            <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-card/80 backdrop-blur-md border border-border/40">
              {REGIONS.map((r) => {
                const color = r === "All" ? null : REGION_COLORS[r];
                return (
                  <button
                    key={r}
                    onClick={() => setRegionFilter(r)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      regionFilter === r
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {color && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `hsl(${color.fill})` }} />}
                    {r}
                  </button>
                );
              })}
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-4 right-4 z-20 grid grid-cols-2 gap-2">
              {[
                { val: "34", label: "Provinces", icon: MapPin },
                { val: "$75B", label: "Target", icon: DollarSign },
                { val: "1,000+", label: "Projects", icon: FolderGit2 },
                { val: "100%", label: "Coverage", icon: Globe },
              ].map(({ val, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/70 backdrop-blur-md border border-border/30">
                  <Icon className="w-3.5 h-3.5 text-primary/70" />
                  <div>
                    <p className="text-sm font-bold text-primary leading-none">{val}</p>
                    <p className="text-[9px] text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {viewMode === "globe" ? (
              <div className="relative w-full aspect-[3/2]">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-primary animate-pulse">Loading 3D Globe...</div>
                  </div>
                }>
                  <GlobeView />
                </Suspense>
              </div>
            ) : (
            <div
              className="relative w-full aspect-[3/2] cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <svg
                ref={svgRef}
                viewBox="0 0 900 600"
                className="w-full h-full"
                style={{ transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`, transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)" }}
              >
                {/* Keep all existing SVG defs and content - re-include from original */}
                <defs>
                  {Object.entries(REGION_COLORS).map(([region, colors]) => (
                    <linearGradient key={`grad-${region}`} id={`region-${region}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={`hsl(${colors.fill})`} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={`hsl(${colors.fill})`} stopOpacity="0.3" />
                    </linearGradient>
                  ))}
                  {Object.entries(REGION_COLORS).map(([region, colors]) => (
                    <linearGradient key={`grad-hover-${region}`} id={`region-hover-${region}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={`hsl(${colors.glow})`} stopOpacity="0.8" />
                      <stop offset="100%" stopColor={`hsl(${colors.fill})`} stopOpacity="0.5" />
                    </linearGradient>
                  ))}
                  {Object.entries(REGION_COLORS).map(([region, colors]) => (
                    <linearGradient key={`grad-sel-${region}`} id={`region-selected-${region}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={`hsl(${colors.glow})`} stopOpacity="1" />
                      <stop offset="100%" stopColor={`hsl(${colors.border})`} stopOpacity="0.8" />
                    </linearGradient>
                  ))}
                  
                  <filter id="glow-node">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="particle-glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="province-shadow">
                    <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="hsl(0 0% 0%)" floodOpacity="0.5" />
                  </filter>
                  <filter id="outer-glow">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <radialGradient id="hover-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(43 100% 75%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(43 100% 65%)" stopOpacity="0" />
                  </radialGradient>
                  {/* 3D topographic contour rings */}
                  <filter id="topo-blur">
                    <feGaussianBlur stdDeviation="1.5" />
                  </filter>
                  <filter id="depth-shadow">
                    <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="hsl(0 0% 0%)" floodOpacity="0.6" />
                  </filter>
                  <filter id="inner-shadow">
                    <feComponentTransfer in="SourceAlpha">
                      <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="3" />
                    <feOffset dx="1" dy="2" result="offsetblur" />
                    <feFlood floodColor="hsl(220 30% 10%)" floodOpacity="0.5" result="color" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                      <feMergeNode in="SourceGraphic" />
                      <feMergeNode />
                    </feMerge>
                  </filter>
                  <radialGradient id="radar-sweep" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(43 100% 70%)" stopOpacity="0.3" />
                    <stop offset="60%" stopColor="hsl(43 100% 65%)" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="hsl(43 100% 65%)" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="energy-beam" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(43 100% 75%)" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(43 100% 80%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(43 100% 75%)" stopOpacity="0" />
                  </linearGradient>
                  {/* Holographic scan line */}
                  <linearGradient id="scan-line" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(180 100% 70%)" stopOpacity="0" />
                    <stop offset="45%" stopColor="hsl(180 100% 80%)" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="hsl(180 100% 90%)" stopOpacity="0.8" />
                    <stop offset="55%" stopColor="hsl(180 100% 80%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(180 100% 70%)" stopOpacity="0" />
                  </linearGradient>
                  <filter id="neon-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodColor="hsl(180 100% 70%)" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge><feMergeNode in="glow" /><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="electric-glow">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feFlood floodColor="hsl(270 100% 70%)" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="glow" />
                    <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <radialGradient id="quantum-field" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(270 100% 80%)" stopOpacity="0.15" />
                    <stop offset="40%" stopColor="hsl(200 100% 70%)" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="data-pulse" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(160 100% 75%)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(160 100% 60%)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* === ULTRA 3D ELEMENTS === */}

                {/* ★ NEURAL NETWORK MESH — interconnected brain-like pattern */}
                <g opacity="0.07">
                  {Array.from({ length: 60 }, (_, i) => {
                    const ax = 20 + (i * 143) % 860;
                    const ay = 15 + (i * 89) % 570;
                    const bx = 20 + ((i + 7) * 143) % 860;
                    const by = 15 + ((i + 7) * 89) % 570;
                    return (
                      <line key={`nn-${i}`} x1={ax} y1={ay} x2={bx} y2={by} stroke="hsl(200 80% 70%)" strokeWidth="0.15" opacity="0.5">
                        <animate attributeName="opacity" values="0.1;0.6;0.1" dur={`${4 + (i % 5)}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
                      </line>
                    );
                  })}
                </g>

                {/* ★ LIDAR TERRAIN SCAN — horizontal sweep lines with depth */}
                <g opacity="0.06">
                  {Array.from({ length: 25 }, (_, i) => {
                    const y = i * 24;
                    const wave = Math.sin(i * 0.5) * 15;
                    return (
                      <path key={`lidar-${i}`}
                        d={`M0,${y} Q225,${y + wave} 450,${y} Q675,${y - wave} 900,${y}`}
                        fill="none" stroke="hsl(160 90% 65%)" strokeWidth="0.3" strokeDasharray="2 6">
                        <animate attributeName="stroke-dashoffset" from="0" to="16" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${5 + i % 4}s`} repeatCount="indefinite" />
                      </path>
                    );
                  })}
                </g>

                {/* ★ ORBITING SATELLITE RINGS around Kabul */}
                {centroids.get("kabul") && (() => {
                  const kp = centroids.get("kabul")!;
                  return (
                    <g>
                      {[0, 1, 2].map(orbit => (
                        <g key={`orbit-${orbit}`}>
                          <ellipse cx={kp[0]} cy={kp[1]} rx={100 + orbit * 40} ry={25 + orbit * 10} fill="none" stroke="hsl(43 80% 60%)" strokeWidth="0.3" strokeDasharray="3 6" opacity="0.08" transform={`rotate(${orbit * 30}, ${kp[0]}, ${kp[1]})`}>
                            <animate attributeName="opacity" values="0.04;0.12;0.04" dur={`${6 + orbit * 2}s`} repeatCount="indefinite" />
                          </ellipse>
                          {/* Satellite dot */}
                          <circle r="2.5" fill="hsl(43 100% 85%)" opacity="0.6" filter="url(#particle-glow)">
                            <animateMotion dur={`${5 + orbit * 2}s`} repeatCount="indefinite">
                              <mpath xlinkHref={`#orbit-path-${orbit}`} />
                            </animateMotion>
                          </circle>
                          <ellipse id={`orbit-path-${orbit}`} cx={kp[0]} cy={kp[1]} rx={100 + orbit * 40} ry={25 + orbit * 10} fill="none" stroke="none" transform={`rotate(${orbit * 30}, ${kp[0]}, ${kp[1]})`} />
                        </g>
                      ))}
                    </g>
                  );
                })()}

                {/* ★ PLASMA ENERGY CORES at all major hubs */}
                {["kabul", "herat", "balkh", "kandahar", "nangarhar"].map(id => {
                  const pos = centroids.get(id);
                  if (!pos) return null;
                  return (
                    <g key={`plasma-${id}`}>
                      {/* Multi-layer plasma rings */}
                      {[0, 1, 2, 3].map(ring => (
                        <circle key={ring} cx={pos[0]} cy={pos[1]} r={8 + ring * 6} fill="none"
                          stroke={ring % 2 === 0 ? "hsl(43 100% 75%)" : "hsl(200 100% 70%)"} strokeWidth="0.4" strokeDasharray={`${2 + ring} ${3 + ring}`} opacity={0.15 - ring * 0.03}>
                          <animateTransform attributeName="transform" type="rotate" from={`0 ${pos[0]} ${pos[1]}`} to={`${ring % 2 === 0 ? 360 : -360} ${pos[0]} ${pos[1]}`} dur={`${4 + ring * 1.5}s`} repeatCount="indefinite" />
                        </circle>
                      ))}
                      {/* Core glow */}
                      <circle cx={pos[0]} cy={pos[1]} r="4" fill="hsl(43 100% 85%)" opacity="0.08" filter="url(#glow-node)">
                        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </g>
                  );
                })}

                {/* ★ LIGHTNING / ELECTRIC ARCS between adjacent hubs */}
                {[["kabul", "nangarhar"], ["kabul", "balkh"], ["herat", "kandahar"], ["balkh", "kunduz"]].map(([a, b], i) => {
                  const pa = centroids.get(a);
                  const pb = centroids.get(b);
                  if (!pa || !pb) return null;
                  const mx = (pa[0] + pb[0]) / 2 + (i % 2 === 0 ? 20 : -20);
                  const my = (pa[1] + pb[1]) / 2 + (i % 2 === 0 ? -25 : 15);
                  const mx2 = (pa[0] + pb[0]) / 2 + (i % 2 === 0 ? -15 : 25);
                  const my2 = (pa[1] + pb[1]) / 2 + (i % 2 === 0 ? 15 : -20);
                  return (
                    <g key={`lightning-${i}`} opacity="0.08">
                      <path d={`M${pa[0]},${pa[1]} Q${mx},${my} ${pb[0]},${pb[1]}`} fill="none" stroke="hsl(180 100% 80%)" strokeWidth="0.8" filter="url(#neon-glow)">
                        <animate attributeName="opacity" values="0;0.5;0;0.3;0" dur={`${2 + i * 0.7}s`} repeatCount="indefinite" />
                      </path>
                      <path d={`M${pa[0]},${pa[1]} Q${mx2},${my2} ${pb[0]},${pb[1]}`} fill="none" stroke="hsl(270 80% 75%)" strokeWidth="0.5" filter="url(#electric-glow)">
                        <animate attributeName="opacity" values="0.3;0;0.4;0" dur={`${1.5 + i * 0.5}s`} begin="0.3s" repeatCount="indefinite" />
                      </path>
                    </g>
                  );
                })}

                {/* ★ MATRIX RAIN — digital data falling */}
                <g opacity="0.04">
                  {Array.from({ length: 15 }, (_, i) => {
                    const x = 30 + i * 60;
                    return (
                      <g key={`matrix-${i}`}>
                        {Array.from({ length: 4 }, (_, j) => (
                          <text key={j} x={x} y="0" fill="hsl(160 100% 70%)" fontSize="6" fontFamily="monospace" opacity="0.6">
                            {String.fromCharCode(0x30A0 + Math.floor(i * j * 7.3) % 96)}
                            <animateMotion dur={`${3 + j}s`} begin={`${j * 0.8 + i * 0.1}s`} repeatCount="indefinite" path={`M${x},${-10 - j * 20} L${x},${620}`} />
                            <animate attributeName="opacity" values="0;0.6;0" dur={`${3 + j}s`} begin={`${j * 0.8 + i * 0.1}s`} repeatCount="indefinite" />
                          </text>
                        ))}
                      </g>
                    );
                  })}
                </g>

                {/* ★ GRAVITATIONAL LENSING — curved space distortion rings */}
                <g opacity="0.04">
                  {["kabul", "herat", "kandahar"].map(id => {
                    const pos = centroids.get(id);
                    if (!pos) return null;
                    return (
                      <g key={`lens-${id}`}>
                        {[50, 70, 90, 110].map((r, ri) => (
                          <ellipse key={ri} cx={pos[0]} cy={pos[1]} rx={r} ry={r * 0.3} fill="none" stroke="hsl(270 60% 65%)" strokeWidth="0.25" strokeDasharray="1 5" transform={`rotate(${ri * 45}, ${pos[0]}, ${pos[1]})`}>
                            <animate attributeName="opacity" values="0.05;0.15;0.05" dur={`${8 + ri * 2}s`} repeatCount="indefinite" />
                            <animateTransform attributeName="transform" type="rotate" from={`${ri * 45} ${pos[0]} ${pos[1]}`} to={`${ri * 45 + 360} ${pos[0]} ${pos[1]}`} dur={`${30 + ri * 10}s`} repeatCount="indefinite" />
                          </ellipse>
                        ))}
                      </g>
                    );
                  })}
                </g>

                {/* Holographic scanning laser lines */}
                <g opacity="0.08">
                  {[0, 1, 2].map(i => (
                    <rect key={`scan-${i}`} x="0" y="0" width="900" height="8" fill="url(#scan-line)">
                      <animateTransform attributeName="transform" type="translate" values={`0,${-20 + i * 40};0,${620 + i * 40};0,${-20 + i * 40}`} dur={`${7 + i * 2}s`} repeatCount="indefinite" />
                    </rect>
                  ))}
                </g>

                {/* Electromagnetic field lines */}
                <g opacity="0.06">
                  {[150, 300, 450, 600, 750].map((x, i) => (
                    <path key={`em-${i}`} d={`M${x},0 Q${x + 60 * Math.sin(i)},300 ${x},600`} fill="none" stroke="hsl(270 80% 70%)" strokeWidth="0.5" strokeDasharray="4 8" filter="url(#electric-glow)">
                      <animate attributeName="stroke-dashoffset" from="0" to="24" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                    </path>
                  ))}
                </g>

                {/* Quantum dot network */}
                <g opacity="0.2">
                  {Array.from({ length: 40 }, (_, i) => {
                    const cx = 50 + (i * 97) % 800;
                    const cy = 30 + (i * 71) % 540;
                    return (
                      <g key={`qdot-${i}`}>
                        <circle cx={cx} cy={cy} r="1.2" fill={i % 2 === 0 ? "hsl(180 100% 80%)" : "hsl(270 80% 80%)"}>
                          <animate attributeName="opacity" values="0.2;0.8;0.2" dur={`${2 + (i % 4)}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
                          <animate attributeName="r" values="0.8;2.5;0.8" dur={`${2 + (i % 4)}s`} begin={`${i * 0.15}s`} repeatCount="indefinite" />
                        </circle>
                        {i % 3 === 0 && i + 3 < 40 && (
                          <line x1={cx} y1={cy} x2={50 + ((i + 3) * 97) % 800} y2={30 + ((i + 3) * 71) % 540} stroke="hsl(180 100% 70%)" strokeWidth="0.2" opacity="0.3">
                            <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
                          </line>
                        )}
                      </g>
                    );
                  })}
                </g>

                {/* Signal wave propagation rings from ALL hubs */}
                {["kabul", "herat", "balkh", "kandahar", "nangarhar", "kunduz", "ghazni", "bamyan", "badakhshan", "faryab", "helmand", "farah"].map(id => {
                  const pos = centroids.get(id);
                  if (!pos) return null;
                  return (
                    <g key={`signal-${id}`} opacity="0.08">
                      {[0, 1, 2, 3].map(wave => (
                        <circle key={wave} cx={pos[0]} cy={pos[1]} r="5" fill="none" stroke={wave % 2 === 0 ? "hsl(160 100% 70%)" : "hsl(43 100% 70%)"} strokeWidth="0.5">
                          <animate attributeName="r" values="5;60;5" dur="5s" begin={`${wave * 1.2}s`} repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.4;0;0.4" dur="5s" begin={`${wave * 1.2}s`} repeatCount="indefinite" />
                        </circle>
                      ))}
                    </g>
                  );
                })}

                {/* ★ CONSTELLATION LINES — connect distant provinces like star maps */}
                <g opacity="0.04">
                  {[
                    ["badakhshan", "nimroz"], ["faryab", "nangarhar"], ["helmand", "kunduz"],
                    ["bamyan", "khost"], ["ghor", "takhar"], ["farah", "kunar"],
                  ].map(([a, b], i) => {
                    const pa = centroids.get(a);
                    const pb = centroids.get(b);
                    if (!pa || !pb) return null;
                    return (
                      <line key={`const-${i}`} x1={pa[0]} y1={pa[1]} x2={pb[0]} y2={pb[1]} stroke="hsl(43 60% 60%)" strokeWidth="0.3" strokeDasharray="1 8">
                        <animate attributeName="opacity" values="0.02;0.1;0.02" dur={`${6 + i * 2}s`} repeatCount="indefinite" />
                      </line>
                    );
                  })}
                </g>

                {/* Data stream waterfall */}
                <g opacity="0.05">
                  {Array.from({ length: 12 }, (_, i) => {
                    const x = 50 + i * 72;
                    return (
                      <g key={`stream-${i}`}>
                        <line x1={x} y1="0" x2={x} y2="600" stroke="hsl(43 60% 50%)" strokeWidth="0.2" strokeDasharray="1 15" />
                        <circle r="1.5" fill={i % 2 === 0 ? "hsl(43 100% 80%)" : "hsl(180 100% 80%)"}>
                          <animateMotion dur={`${3 + i * 0.5}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" path={`M${x},0 L${x},600`} />
                          <animate attributeName="opacity" values="0;0.8;0" dur={`${3 + i * 0.5}s`} begin={`${i * 0.3}s`} repeatCount="indefinite" />
                        </circle>
                      </g>
                    );
                  })}
                </g>

                {/* Atmospheric depth fog */}
                <g opacity="0.04">
                  <ellipse cx="450" cy="300" rx="500" ry="350" fill="url(#quantum-field)" />
                  <ellipse cx="300" cy="200" rx="200" ry="150" fill="url(#data-pulse)">
                    <animate attributeName="opacity" values="0.03;0.08;0.03" dur="6s" repeatCount="indefinite" />
                  </ellipse>
                  <ellipse cx="650" cy="400" rx="180" ry="120" fill="url(#data-pulse)">
                    <animate attributeName="opacity" values="0.05;0.1;0.05" dur="8s" begin="2s" repeatCount="indefinite" />
                  </ellipse>
                </g>

                {/* ★ WORMHOLE PORTAL EFFECTS — swirling vortex at trade hub intersections */}
                {["kabul", "herat", "kandahar"].map(id => {
                  const pos = centroids.get(id);
                  if (!pos) return null;
                  return (
                    <g key={`wormhole-${id}`} opacity="0.12">
                      {/* Outer event horizon */}
                      {[0, 1, 2, 3, 4, 5].map(ring => (
                        <ellipse key={ring} cx={pos[0]} cy={pos[1]} rx={30 + ring * 5} ry={10 + ring * 2} fill="none"
                          stroke={ring % 2 === 0 ? "hsl(270 90% 75%)" : "hsl(180 90% 70%)"} strokeWidth="0.6" strokeDasharray={`${1 + ring * 0.5} ${2 + ring}`} opacity={0.5 - ring * 0.07}>
                          <animateTransform attributeName="transform" type="rotate" from={`0 ${pos[0]} ${pos[1]}`} to={`${ring % 2 === 0 ? 360 : -360} ${pos[0]} ${pos[1]}`} dur={`${3 + ring}s`} repeatCount="indefinite" />
                        </ellipse>
                      ))}
                      {/* Core singularity pulse */}
                      <circle cx={pos[0]} cy={pos[1]} r="3" fill="hsl(270 100% 85%)" opacity="0.3" filter="url(#neon-glow)">
                        <animate attributeName="r" values="2;8;2" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2s" repeatCount="indefinite" />
                      </circle>
                      {/* Particle accretion disk */}
                      {[0, 1, 2, 3].map(p => (
                        <circle key={p} r="1.5" fill={p % 2 === 0 ? "hsl(270 100% 85%)" : "hsl(180 100% 85%)"} opacity="0.5">
                          <animateMotion dur={`${2 + p * 0.5}s`} begin={`${p * 0.5}s`} repeatCount="indefinite">
                            <mpath xlinkHref={`#orbit-path-${p % 3}`} />
                          </animateMotion>
                          <animate attributeName="opacity" values="0.2;0.7;0.2" dur={`${2 + p * 0.5}s`} begin={`${p * 0.5}s`} repeatCount="indefinite" />
                        </circle>
                      ))}
                    </g>
                  );
                })}

                {/* ★ 3D WIREFRAME TERRAIN MESH — perspective grid simulating elevation */}
                <g opacity="0.04">
                  {Array.from({ length: 20 }, (_, row) => {
                    const y = 30 + row * 28;
                    const perspective = 0.3 + (row / 20) * 0.7;
                    return (
                      <g key={`mesh-row-${row}`}>
                        {/* Horizontal mesh lines with perspective */}
                        <path
                          d={`M${50 + (1 - perspective) * 200},${y} ${Array.from({ length: 15 }, (_, c) => {
                            const x = 50 + (1 - perspective) * 200 + c * (600 * perspective / 14);
                            const wave = Math.sin(c * 0.8 + row * 0.3) * (8 * perspective);
                            return `L${x.toFixed(1)},${(y + wave).toFixed(1)}`;
                          }).join(' ')}`}
                          fill="none"
                          stroke="hsl(43 70% 55%)"
                          strokeWidth="0.25"
                          strokeDasharray="2 4"
                        >
                          <animate attributeName="stroke-dashoffset" from="0" to="12" dur={`${4 + row * 0.2}s`} repeatCount="indefinite" />
                        </path>
                        {/* Vertical mesh connectors */}
                        {row < 19 && Array.from({ length: 8 }, (_, c) => {
                          const x = 50 + (1 - perspective) * 200 + c * (600 * perspective / 7);
                          const nextPerspective = 0.3 + ((row + 1) / 20) * 0.7;
                          const nextX = 50 + (1 - nextPerspective) * 200 + c * (600 * nextPerspective / 7);
                          return (
                            <line key={c} x1={x} y1={y} x2={nextX} y2={y + 28} stroke="hsl(43 70% 55%)" strokeWidth="0.15" opacity="0.5" />
                          );
                        })}
                      </g>
                    );
                  })}
                </g>

                {/* ★ AURORA BOREALIS — shimmering curtain at top of map */}
                <g opacity="0.06">
                  {Array.from({ length: 8 }, (_, i) => {
                    const startX = 50 + i * 110;
                    const controlPoints = Array.from({ length: 5 }, (_, j) => ({
                      x: startX + j * 25 + Math.sin(i + j) * 15,
                      y: 20 + j * 12 + Math.cos(i * 0.7 + j) * 8,
                    }));
                    const pathD = `M${controlPoints[0].x},${controlPoints[0].y} ${controlPoints.slice(1).map(p => `L${p.x},${p.y}`).join(' ')}`;
                    return (
                      <g key={`aurora-${i}`}>
                        <path d={pathD} fill="none" stroke={i % 3 === 0 ? "hsl(160 100% 70%)" : i % 3 === 1 ? "hsl(270 80% 75%)" : "hsl(200 100% 70%)"} strokeWidth="12" opacity="0.3" filter="url(#topo-blur)">
                          <animate attributeName="opacity" values="0.1;0.4;0.15;0.35;0.1" dur={`${5 + i}s`} repeatCount="indefinite" />
                        </path>
                        <path d={pathD} fill="none" stroke="hsl(180 100% 85%)" strokeWidth="1" opacity="0.2">
                          <animate attributeName="opacity" values="0.05;0.3;0.05" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                        </path>
                      </g>
                    );
                  })}
                </g>

                {/* ★ SEISMIC WAVE PROPAGATION — concentric shockwaves from key geological sites */}
                {["bamyan", "badakhshan", "logar", "ghazni"].map((id, idx) => {
                  const pos = centroids.get(id);
                  if (!pos) return null;
                  return (
                    <g key={`seismic-${id}`} opacity="0.06">
                      {[0, 1, 2, 3, 4].map(wave => (
                        <g key={wave}>
                          <rect x={pos[0] - 80} y={pos[1] - 1} width="160" height="2" rx="1" fill={wave % 2 === 0 ? "hsl(15 90% 65%)" : "hsl(43 100% 70%)"} opacity="0">
                            <animate attributeName="width" values="0;160;0" dur={`${3 + wave}s`} begin={`${wave * 0.6 + idx * 1.5}s`} repeatCount="indefinite" />
                            <animate attributeName="x" values={`${pos[0]};${pos[0] - 80};${pos[0]}`} dur={`${3 + wave}s`} begin={`${wave * 0.6 + idx * 1.5}s`} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;0.5;0" dur={`${3 + wave}s`} begin={`${wave * 0.6 + idx * 1.5}s`} repeatCount="indefinite" />
                          </rect>
                          <circle cx={pos[0]} cy={pos[1]} r="5" fill="none" stroke={wave % 2 === 0 ? "hsl(15 90% 65%)" : "hsl(43 90% 65%)"} strokeWidth="0.4" opacity="0">
                            <animate attributeName="r" values="5;80;5" dur={`${4 + wave}s`} begin={`${wave * 0.8 + idx * 1.5}s`} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.5;0;0.5" dur={`${4 + wave}s`} begin={`${wave * 0.8 + idx * 1.5}s`} repeatCount="indefinite" />
                          </circle>
                        </g>
                      ))}
                    </g>
                  );
                })}

                {/* ★ HOLOGRAPHIC DATA HIGHWAY — glowing arterial roads connecting all 5 major hubs in sequence */}
                {(() => {
                  const hubOrder = ["herat", "kabul", "balkh", "nangarhar", "kandahar", "herat"];
                  const hubPositions = hubOrder.map(id => centroids.get(id)).filter(Boolean) as [number, number][];
                  if (hubPositions.length < 5) return null;
                  const fullPath = hubPositions.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
                  return (
                    <g opacity="0.1">
                      {/* Glowing highway base */}
                      <path d={fullPath} fill="none" stroke="hsl(43 100% 70%)" strokeWidth="6" opacity="0.05" filter="url(#topo-blur)" />
                      <path d={fullPath} fill="none" stroke="hsl(43 100% 80%)" strokeWidth="1.5" strokeDasharray="12 6" opacity="0.25">
                        <animate attributeName="stroke-dashoffset" from="0" to="36" dur="3s" repeatCount="indefinite" />
                      </path>
                      {/* Fast-moving data packets */}
                      {[0, 1, 2].map(p => (
                        <circle key={p} r={3 - p * 0.5} fill="hsl(43 100% 90%)" opacity={0.7 - p * 0.15} filter="url(#particle-glow)">
                          <animateMotion dur={`${5 + p}s`} begin={`${p * 1.5}s`} repeatCount="indefinite" path={fullPath} />
                        </circle>
                      ))}
                    </g>
                  );
                })()}

                {/* Holographic data rings around ALL province centroids */}
                {Array.from(centroids.entries()).map(([id, pos]) => {
                  const prov = provincesData.find(p => p.id === id);
                  const rc = getRegionColor(prov);
                  return (
                    <g key={`holo-${id}`} opacity="0.1">
                      <ellipse cx={pos[0]} cy={pos[1] + 3} rx="18" ry="6" fill="none" stroke={`hsl(${rc.glow})`} strokeWidth="0.5" strokeDasharray="2 3">
                        <animate attributeName="ry" values="6;9;6" dur="3s" repeatCount="indefinite" />
                        <animateTransform attributeName="transform" type="rotate" from={`0 ${pos[0]} ${pos[1]}`} to={`360 ${pos[0]} ${pos[1]}`} dur="20s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse cx={pos[0]} cy={pos[1] + 5} rx="25" ry="8" fill="none" stroke={`hsl(${rc.glow})`} strokeWidth="0.25" strokeDasharray="1 4">
                        <animate attributeName="ry" values="8;11;8" dur="4s" begin="0.5s" repeatCount="indefinite" />
                      </ellipse>
                      {/* Tiny orbiting data dot */}
                      <circle r="1" fill={`hsl(${rc.glow})`} opacity="0.4">
                        <animateMotion dur={`${6 + (id.length % 4)}s`} repeatCount="indefinite" path={`M${pos[0] - 18},${pos[1]} A18,6 0 1,1 ${pos[0] + 18},${pos[1]} A18,6 0 1,1 ${pos[0] - 18},${pos[1]}`} />
                      </circle>
                    </g>
                  );
                })}

                {/* Topographic elevation contour rings around major hubs */}
                {["kabul", "herat", "balkh", "kandahar", "nangarhar"].map(id => {
                  const pos = centroids.get(id);
                  if (!pos) return null;
                  return (
                    <g key={`topo-${id}`} opacity="0.12">
                      {[40, 55, 70, 85].map((r, i) => (
                        <ellipse
                          key={`ring-${id}-${i}`}
                          cx={pos[0]}
                          cy={pos[1] + r * 0.15}
                          rx={r}
                          ry={r * 0.45}
                          fill="none"
                          stroke="hsl(43 80% 60%)"
                          strokeWidth="0.4"
                          strokeDasharray="3 5"
                          opacity={0.4 - i * 0.08}
                        >
                          <animate attributeName="ry" values={`${r * 0.45};${r * 0.5};${r * 0.45}`} dur={`${5 + i}s`} repeatCount="indefinite" />
                        </ellipse>
                      ))}
                    </g>
                  );
                })}

                {/* Rotating radar sweep from Kabul */}
                {centroids.get("kabul") && (
                  <g>
                    <circle cx={centroids.get("kabul")![0]} cy={centroids.get("kabul")![1]} r="120" fill="none" stroke="hsl(43 100% 65%)" strokeWidth="0.3" strokeDasharray="2 6" opacity="0.1">
                      <animate attributeName="r" values="60;140;60" dur="8s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.15;0.03;0.15" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={centroids.get("kabul")![0]} cy={centroids.get("kabul")![1]} r="200" fill="none" stroke="hsl(200 80% 50%)" strokeWidth="0.2" strokeDasharray="1 8" opacity="0.06">
                      <animate attributeName="r" values="100;220;100" dur="12s" repeatCount="indefinite" />
                    </circle>
                    {/* Radar sweep arc */}
                    <g transform={`translate(${centroids.get("kabul")![0]}, ${centroids.get("kabul")![1]})`}>
                      <path d="M0,0 L0,-100 A100,100 0 0,1 86.6,-50 Z" fill="url(#radar-sweep)" opacity="0.15">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="6s" repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                )}

                {/* Energy pulse lines between major cities */}
                {tradeRoutes.filter(r => r.type === "major").map((route, i) => {
                  const midX = (route.from[0] + route.to[0]) / 2;
                  const midY = Math.min(route.from[1], route.to[1]) - 35 - (i % 3) * 8;
                  return (
                    <g key={`energy-${i}`}>
                      {/* Glow trail */}
                      <path
                        d={`M${route.from[0]},${route.from[1]} Q${midX},${midY} ${route.to[0]},${route.to[1]}`}
                        fill="none"
                        stroke="hsl(43 100% 70%)"
                        strokeWidth="3"
                        opacity="0.06"
                        filter="url(#topo-blur)"
                      />
                      {/* Energy particle burst */}
                      <circle r="4" fill="hsl(43 100% 85%)" opacity="0.5" filter="url(#particle-glow)">
                        <animateMotion dur={`${2.5 + i * 0.3}s`} begin={`${i * 0.8}s`} repeatCount="indefinite" path={`M${route.from[0]},${route.from[1]} Q${midX},${midY} ${route.to[0]},${route.to[1]}`} />
                        <animate attributeName="r" values="2;5;2" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1s" repeatCount="indefinite" />
                      </circle>
                      {/* Second trailing particle */}
                      <circle r="2" fill="hsl(200 80% 70%)" opacity="0.3">
                        <animateMotion dur={`${2.5 + i * 0.3}s`} begin={`${i * 0.8 + 0.4}s`} repeatCount="indefinite" path={`M${route.from[0]},${route.from[1]} Q${midX},${midY} ${route.to[0]},${route.to[1]}`} />
                      </circle>
                    </g>
                  );
                })}

                {/* Hexagonal grid overlay for futuristic feel */}
                <g opacity="0.03">
                  {Array.from({ length: 12 }, (_, row) =>
                    Array.from({ length: 15 }, (_, col) => {
                      const x = col * 65 + (row % 2 ? 32.5 : 0);
                      const y = row * 56;
                      if (x > 900 || y > 600) return null;
                      return (
                        <polygon
                          key={`hex-${row}-${col}`}
                          points={`${x},${y - 20} ${x + 17},${y - 10} ${x + 17},${y + 10} ${x},${y + 20} ${x - 17},${y + 10} ${x - 17},${y - 10}`}
                          fill="none"
                          stroke="hsl(43 60% 50%)"
                          strokeWidth="0.3"
                        />
                      );
                    })
                  )}
                </g>

                {/* ★ 3D TERRAIN ELEVATION SHADING — gradient overlays per province */}
                <g opacity="0.35">
                  {paths.map((p) => {
                    const prov = p.province;
                    const rc = getRegionColor(prov);
                    return (
                      <g key={`terrain-${p.id}`}>
                        {/* Base shadow layer — pushed down/right for depth */}
                        <path d={p.d} fill="hsl(220 25% 2%)" transform="translate(4, 6)" opacity="0.5" />
                        {/* Mid elevation layer */}
                        <path d={p.d} fill="hsl(220 20% 5%)" transform="translate(2, 3)" opacity="0.3" />
                      </g>
                    );
                  })}
                </g>

                {/* ★ ANIMATED DATA FLOW RIVERS — curved flowing streams between regions */}
                {(() => {
                  const riverPaths: { path: string; color: string; dur: number }[] = [];
                  const riverDefs = [
                    { from: "kabul", via: "parwan", to: "bamyan", color: "hsl(200 90% 65%)" },
                    { from: "herat", via: "badghis", to: "faryab", color: "hsl(280 70% 65%)" },
                    { from: "kandahar", via: "helmand", to: "nimroz", color: "hsl(15 90% 65%)" },
                    { from: "balkh", via: "samangan", to: "baghlan", color: "hsl(200 80% 60%)" },
                    { from: "nangarhar", via: "laghman", to: "kunar", color: "hsl(140 80% 55%)" },
                    { from: "kabul", via: "logar", to: "paktya", color: "hsl(43 90% 65%)" },
                    { from: "kunduz", via: "takhar", to: "badakhshan", color: "hsl(200 85% 60%)" },
                    { from: "ghazni", via: "zabul", to: "kandahar", color: "hsl(15 85% 60%)" },
                  ];
                  for (const rd of riverDefs) {
                    const a = centroids.get(rd.from);
                    const b = centroids.get(rd.via);
                    const c = centroids.get(rd.to);
                    if (a && b && c) {
                      riverPaths.push({
                        path: `M${a[0]},${a[1]} Q${b[0]},${b[1]} ${c[0]},${c[1]}`,
                        color: rd.color,
                        dur: 3 + riverPaths.length * 0.4,
                      });
                    }
                  }
                  return (
                    <g>
                      {riverPaths.map((rp, i) => (
                        <g key={`river-${i}`}>
                          {/* River glow trail */}
                          <path d={rp.path} fill="none" stroke={rp.color} strokeWidth="4" opacity="0.04" filter="url(#topo-blur)" />
                          {/* River main line */}
                          <path d={rp.path} fill="none" stroke={rp.color} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.15">
                            <animate attributeName="stroke-dashoffset" from="0" to="20" dur={`${rp.dur}s`} repeatCount="indefinite" />
                          </path>
                          {/* Flow particles — 3 per river */}
                          {[0, 1, 2].map(pi => (
                            <circle key={pi} r={2 - pi * 0.4} fill={rp.color} opacity={0.6 - pi * 0.15} filter="url(#particle-glow)">
                              <animateMotion dur={`${rp.dur}s`} begin={`${pi * rp.dur / 3}s`} repeatCount="indefinite" path={rp.path} />
                            </circle>
                          ))}
                        </g>
                      ))}
                    </g>
                  );
                })()}

                {/* 3D elevation shadow layer under provinces */}
                <g opacity="0.25" filter="url(#depth-shadow)">
                  {paths.map((p) => (
                    <path key={`shadow-${p.id}`} d={p.d} fill="hsl(220 20% 3%)" transform="translate(3, 5)" />
                  ))}
                </g>

                {/* Background country outline glow */}
                <g opacity="0.15" filter="url(#outer-glow)">
                  {paths.map((p) => (
                    <path key={`bg-${p.id}`} d={p.d} fill="none" stroke="hsl(43 100% 65%)" strokeWidth="0.5" />
                  ))}
                </g>

                {/* Trade routes */}
                {activeLayer === "economic" && (
                  <g>
                    {tradeRoutes.map((route, i) => {
                      const midX = (route.from[0] + route.to[0]) / 2;
                      const midY = Math.min(route.from[1], route.to[1]) - 25 - (i % 3) * 10;
                      const isMajor = route.type === "major";
                      return (
                        <g key={`route-${i}`}>
                          <path
                            d={`M${route.from[0]},${route.from[1]} Q${midX},${midY} ${route.to[0]},${route.to[1]}`}
                            fill="none"
                            stroke={isMajor ? "hsl(43 100% 70%)" : "hsl(43 60% 50%)"}
                            strokeWidth={isMajor ? 1.5 : 0.8}
                            strokeDasharray={isMajor ? "8 4" : "4 4"}
                            opacity={isMajor ? 0.4 : 0.2}
                          >
                            <animate attributeName="stroke-dashoffset" from="0" to={isMajor ? "12" : "8"} dur={`${2 + i % 3}s`} repeatCount="indefinite" />
                          </path>
                          {isMajor && (
                            <circle r="2.5" fill="hsl(43 100% 80%)" filter="url(#particle-glow)">
                              <animateMotion dur={`${3 + i}s`} begin={`${i * 0.5}s`} repeatCount="indefinite" path={`M${route.from[0]},${route.from[1]} Q${midX},${midY} ${route.to[0]},${route.to[1]}`} />
                            </circle>
                          )}
                        </g>
                      );
                    })}
                  </g>
                )}

                {/* Secondary connections */}
                <g opacity="0.15">
                  {connections.map((conn, i) => (
                    <line key={`conn-${i}`} x1={conn.from[0]} y1={conn.from[1]} x2={conn.to[0]} y2={conn.to[1]} stroke="hsl(43 100% 65%)" strokeWidth="0.4" strokeDasharray="2 3" />
                  ))}
                </g>

                {/* Province shapes */}
                <g filter="url(#province-shadow)">
                  {paths.map((p) => {
                    const isSelected = selectedProvince?.id === p.id;
                    const isHovered = hoveredProvince === p.id;
                    const regionColor = getRegionColor(p.province);
                    const region = p.province?.region ?? "Central";
                    const isFiltered = regionFilter !== "All" && p.province?.region !== regionFilter;
                    return (
                      <g key={p.id}>
                        {(isSelected || isHovered) && (
                          <path d={p.d} fill={`hsl(${regionColor.glow})`} opacity="0.15" filter="url(#outer-glow)" />
                        )}
                        <path
                          d={p.d}
                          fill={isSelected ? `url(#region-selected-${region})` : isHovered ? `url(#region-hover-${region})` : `url(#region-${region})`}
                          stroke={isSelected ? `hsl(${regionColor.glow})` : isHovered ? `hsl(${regionColor.border})` : `hsl(${regionColor.fill} / 0.4)`}
                          strokeWidth={isSelected ? 2.5 : isHovered ? 1.8 : 0.6}
                          className="cursor-pointer"
                          style={{ opacity: isFiltered ? 0.15 : 1, transition: "all 0.3s ease" }}
                          onClick={() => p.province && zoomToProvince(p.province)}
                          onMouseEnter={() => setHoveredProvince(p.id)}
                          onMouseLeave={() => setHoveredProvince(null)}
                        />
                      </g>
                    );
                  })}
                </g>

                {/* Capital city markers */}
                {["kabul", "herat", "balkh", "kandahar", "nangarhar"].map(id => {
                  const pos = centroids.get(id);
                  if (!pos) return null;
                  const prov = provincesData.find(p => p.id === id);
                  const isActive = selectedProvince?.id === id || hoveredProvince === id;
                  return (
                    <g key={`hub-${id}`}>
                      <circle cx={pos[0]} cy={pos[1]} r="18" fill="none" stroke="hsl(43 100% 65%)" strokeWidth="0.5" opacity="0.3">
                        <animate attributeName="r" values="10;22;10" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={pos[0]} cy={pos[1]} r="14" fill="none" stroke="hsl(43 100% 65%)" strokeWidth="0.3" opacity="0.2">
                        <animate attributeName="r" values="8;18;8" dur="3s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <g transform={`translate(${pos[0]}, ${pos[1]}) rotate(45)`} filter="url(#glow-node)">
                        <rect x="-5" y="-5" width="10" height="10" rx="2" fill="hsl(43 100% 70%)" opacity={isActive ? 1 : 0.9} />
                      </g>
                      {showLabels && (
                        <g>
                          <rect x={pos[0] - 30} y={pos[1] + 12} width="60" height="16" rx="4" fill="hsl(220 20% 5% / 0.9)" stroke="hsl(43 100% 65% / 0.3)" strokeWidth="0.5" />
                          <text x={pos[0]} y={pos[1] + 23} textAnchor="middle" fill="hsl(43 100% 80%)" fontSize="7" fontWeight="700" fontFamily="system-ui">
                            {prov?.name?.toUpperCase()}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}

                {/* Regular province nodes */}
                {Array.from(centroids.entries()).map(([id, pos]) => {
                  if (["kabul", "herat", "balkh", "kandahar", "nangarhar"].includes(id)) return null;
                  const isSelected = selectedProvince?.id === id;
                  const isHovered = hoveredProvince === id;
                  const prov = provincesData.find(p => p.id === id);
                  const regionColor = getRegionColor(prov);
                  const isFiltered = regionFilter !== "All" && prov?.region !== regionFilter;
                  return (
                    <g key={`node-${id}`} style={{ opacity: isFiltered ? 0.15 : 1, transition: "opacity 0.3s" }}>
                      <circle cx={pos[0]} cy={pos[1]} r={isSelected ? 12 : 7} fill="none" stroke={`hsl(${regionColor.glow})`} strokeWidth="0.5" opacity={isSelected || isHovered ? 0.5 : 0.15}>
                        <animate attributeName="r" values={isSelected ? "6;16;6" : "4;9;4"} dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle
                        cx={pos[0]} cy={pos[1]}
                        r={isSelected ? 4.5 : isHovered ? 4 : 2.8}
                        fill={`hsl(${regionColor.glow})`}
                        opacity={isSelected || isHovered ? 1 : 0.7}
                        filter={isSelected || isHovered ? "url(#glow-node)" : undefined}
                        className="cursor-pointer"
                        style={{ transition: "all 0.2s" }}
                        onClick={() => prov && zoomToProvince(prov)}
                        onMouseEnter={() => setHoveredProvince(id)}
                        onMouseLeave={() => setHoveredProvince(null)}
                      />
                      {/* ★ HOLOGRAPHIC INFO POPUP on hover */}
                      {showLabels && (isSelected || isHovered) && prov && (
                        <g>
                          {/* Holographic background panel */}
                          <rect x={pos[0] - 52} y={pos[1] - 58} width="104" height="50" rx="6"
                            fill="hsl(220 25% 5% / 0.92)" stroke={`hsl(${regionColor.glow} / 0.6)`} strokeWidth="0.8" />
                          {/* Scan line across popup */}
                          <rect x={pos[0] - 52} y={pos[1] - 58} width="104" height="2" rx="1" fill={`hsl(${regionColor.glow})`} opacity="0.2">
                            <animate attributeName="y" values={`${pos[1] - 58};${pos[1] - 10};${pos[1] - 58}`} dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2s" repeatCount="indefinite" />
                          </rect>
                          {/* Province name */}
                          <text x={pos[0]} y={pos[1] - 43} textAnchor="middle" fill={`hsl(${regionColor.glow})`} fontSize="8" fontWeight="700" fontFamily="system-ui">
                            {prov.name}
                          </text>
                          {/* Investment */}
                          <text x={pos[0]} y={pos[1] - 32} textAnchor="middle" fill="hsl(43 100% 75%)" fontSize="6.5" fontWeight="600" fontFamily="system-ui">
                            💰 {prov.investment}
                          </text>
                          {/* Projects & Region */}
                          <text x={pos[0] - 44} y={pos[1] - 20} fill="hsl(0 0% 70%)" fontSize="5.5" fontFamily="system-ui">
                            📊 {prov.projects} projects
                          </text>
                          <text x={pos[0] + 44} y={pos[1] - 20} textAnchor="end" fill={`hsl(${regionColor.glow})`} fontSize="5.5" fontFamily="system-ui">
                            {prov.region}
                          </text>
                          {/* Top sector */}
                          <text x={pos[0]} y={pos[1] - 11} textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="5" fontFamily="system-ui">
                            {prov.primarySectors?.[0] ?? ""}
                          </text>
                          {/* Corner brackets for holo effect */}
                          <path d={`M${pos[0] - 52},${pos[1] - 50} L${pos[0] - 52},${pos[1] - 58} L${pos[0] - 44},${pos[1] - 58}`} fill="none" stroke={`hsl(${regionColor.glow})`} strokeWidth="1" opacity="0.6" />
                          <path d={`M${pos[0] + 52},${pos[1] - 50} L${pos[0] + 52},${pos[1] - 58} L${pos[0] + 44},${pos[1] - 58}`} fill="none" stroke={`hsl(${regionColor.glow})`} strokeWidth="1" opacity="0.6" />
                          <path d={`M${pos[0] - 52},${pos[1] - 16} L${pos[0] - 52},${pos[1] - 8} L${pos[0] - 44},${pos[1] - 8}`} fill="none" stroke={`hsl(${regionColor.glow})`} strokeWidth="1" opacity="0.6" />
                          <path d={`M${pos[0] + 52},${pos[1] - 16} L${pos[0] + 52},${pos[1] - 8} L${pos[0] + 44},${pos[1] - 8}`} fill="none" stroke={`hsl(${regionColor.glow})`} strokeWidth="1" opacity="0.6" />
                          {/* Connector line from popup to node */}
                          <line x1={pos[0]} y1={pos[1] - 8} x2={pos[0]} y2={pos[1] - 4} stroke={`hsl(${regionColor.glow})`} strokeWidth="0.5" opacity="0.4" strokeDasharray="1 1" />
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
            )}

            {/* Floating legend */}
            <div className="absolute top-16 right-4 z-10 flex flex-col gap-1.5 px-3 py-2.5 rounded-xl bg-card/80 backdrop-blur-md border border-border/40">
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-1">Regions</p>
              {Object.entries(REGION_COLORS).map(([region, colors]) => (
                <div key={region} className="flex items-center gap-2 text-[10px]">
                  <div className="w-3 h-3 rounded" style={{ background: `linear-gradient(135deg, hsl(${colors.fill}), hsl(${colors.glow}))` }} />
                  <span className="text-muted-foreground">{region}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Panel */}
          <div className="w-full xl:w-[440px] flex flex-col">
            <div className="h-full min-h-[400px] xl:min-h-0 flex flex-col rounded-3xl overflow-hidden" style={{
              background: "linear-gradient(180deg, hsl(220 20% 6%), hsl(220 18% 4%))",
              border: "1px solid hsl(43 100% 65% / 0.08)",
              boxShadow: "0 20px 60px -15px hsl(0 0% 0% / 0.5)",
            }}>
              <div className="flex-1 min-h-0 flex flex-col overflow-hidden p-5">
                <AnimatePresence mode="wait">
                  {selectedProvince ? (
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col h-full overflow-y-auto custom-scrollbar"
                    >
                      <button onClick={() => setSelectedProvince(null)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4 transition-colors w-fit">
                        <ArrowLeft className="w-4 h-4" />
                        All provinces
                      </button>
                      
                      {/* Province header with region badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{selectedProvince.name}</h3>
                          {PROVINCE_NAME_LOCAL[selectedProvince.id] && (
                            <p className="text-lg text-primary/80 mt-0.5">{PROVINCE_NAME_LOCAL[selectedProvince.id]}</p>
                          )}
                        </div>
                        <span className="px-2.5 py-1 rounded-lg text-xs font-semibold" style={{
                          backgroundColor: `hsl(${REGION_COLORS[selectedProvince.region]?.fill ?? "43 90% 50%"} / 0.15)`,
                          color: `hsl(${REGION_COLORS[selectedProvince.region]?.glow ?? "43 100% 65%"})`,
                          border: `1px solid hsl(${REGION_COLORS[selectedProvince.region]?.border ?? "43 100% 60%"} / 0.3)`,
                        }}>
                          {selectedProvince.region}
                        </span>
                      </div>

                      {/* Stats grid */}
                      <div className="grid grid-cols-2 gap-2.5 mb-4">
                        {[
                          { icon: Users, label: "Population", value: selectedProvince.population },
                          { icon: Building2, label: "Capital", value: selectedProvince.capital },
                          { icon: FolderGit2, label: "Projects", value: selectedProvince.projects },
                          { icon: DollarSign, label: "Investment", value: selectedProvince.investment },
                        ].map(({ icon: Icon, label, value }) => (
                          <div key={label} className="p-3 rounded-xl bg-background/50 border border-border/40">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Icon className="w-3.5 h-3.5 text-primary/60" />
                              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</span>
                            </div>
                            <p className="text-sm font-bold text-foreground truncate">{value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Key sectors */}
                      <div className="mb-3">
                        <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">Key Sectors</p>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProvince.primarySectors.slice(0, 5).map((s) => (
                            <span key={s} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-lg border border-primary/20">{s}</span>
                          ))}
                        </div>
                      </div>

                      {/* Strategic potential */}
                      <div className="mb-4">
                        <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1.5">Strategic Potential</p>
                        <p className="text-foreground text-sm leading-relaxed">{selectedProvince.strategicPotential}</p>
                      </div>

                      {/* Opportunities */}
                      {selectedProvince.opportunities.length > 0 && (
                        <div className="mb-4">
                          <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1.5">Opportunities</p>
                          <ul className="text-foreground text-sm space-y-1.5">
                            {selectedProvince.opportunities.slice(0, 3).map((opp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                {opp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Link
                        to={`/province/${selectedProvince.id}`}
                        className="mt-auto block w-full py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all text-center text-sm"
                      >
                        View Full Province Profile →
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="list"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 16 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col h-full overflow-hidden"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
                          <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">34 Provinces</h3>
                          <p className="text-xs text-muted-foreground">Select a province to explore</p>
                        </div>
                      </div>

                      <div className="flex-1 min-h-0 overflow-y-auto pr-1 custom-scrollbar">
                        <div className="grid grid-cols-2 gap-2">
                          {filteredProvinces.map((province) => {
                            const regionColor = REGION_COLORS[province.region] ?? REGION_COLORS.Central;
                            return (
                              <button
                                key={province.id}
                                onClick={() => zoomToProvince(province)}
                                onMouseEnter={() => setHoveredProvince(province.id)}
                                onMouseLeave={() => setHoveredProvince(null)}
                                className="text-left p-3 rounded-xl border transition-all duration-200 group"
                                style={{
                                  borderColor: hoveredProvince === province.id ? `hsl(${regionColor.border} / 0.5)` : "hsl(220 18% 14% / 0.6)",
                                  backgroundColor: hoveredProvince === province.id ? `hsl(${regionColor.fill} / 0.08)` : "hsl(220 20% 5% / 0.4)",
                                }}
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: `hsl(${regionColor.fill})` }} />
                                  <p className="font-bold text-foreground text-sm truncate">{province.name}</p>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-1 mb-2 pl-4">{province.strategicPotential}</p>
                                <div className="flex items-center justify-between pl-4">
                                  <span className="text-xs font-semibold" style={{ color: `hsl(${regionColor.glow})` }}>{province.investment}</span>
                                  <span className="text-muted-foreground text-[10px]">{province.projects} proj</span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
