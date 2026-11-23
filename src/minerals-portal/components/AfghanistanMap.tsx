import { useState } from 'react';
import { useLanguage } from '@/minerals-portal/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Globe, Eye, ZoomIn, ZoomOut, Maximize2, TrendingUp, Gem, Layers } from 'lucide-react';
import { provinces, type Province, type RegionKey } from '@/minerals-portal/data/provinceMapData';

type ViewMode = 'economic' | 'resources' | 'infrastructure';

const regionColors: Record<RegionKey, { fill: string; hover: string; stroke: string; label: string }> = {
  central: { fill: '#8B7530', hover: '#A68B3D', stroke: '#6B5A20', label: 'Central' },
  north:   { fill: '#2563A8', hover: '#3B82C6', stroke: '#1B4A80', label: 'North' },
  south:   { fill: '#B93C2E', hover: '#D44A3C', stroke: '#8A2D22', label: 'South' },
  east:    { fill: '#1D7A3F', hover: '#27994F', stroke: '#155C2F', label: 'East' },
  west:    { fill: '#7C3CA0', hover: '#9B4EC4', stroke: '#5C2C78', label: 'West' },
};

const majorCities = [
  { name: 'KABUL', x: 590, y: 260, region: 'central' as RegionKey },
  { name: 'HERAT', x: 95, y: 290, region: 'west' as RegionKey },
  { name: 'KANDAHAR', x: 380, y: 430, region: 'south' as RegionKey },
  { name: 'MAZAR-I-SHARIF', x: 400, y: 110, region: 'north' as RegionKey },
  { name: 'JALALABAD', x: 700, y: 270, region: 'east' as RegionKey },
];

const AfghanistanMap = () => {
  const { language } = useLanguage();
  const [hoveredProvince, setHoveredProvince] = useState<Province | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('economic');
  const [showLabels, setShowLabels] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const getProvinceName = (province: Province): string => {
    switch (language) {
      case 'ps': return province.namePs;
      case 'fa': return province.nameFa;
      default: return province.name;
    }
  };

  const getFillColor = (province: Province, isHovered: boolean) => {
    const colors = regionColors[province.region];
    if (isHovered) return colors.hover;
    if (hoveredProvince && hoveredProvince.id !== province.id) {
      // Dim non-hovered provinces
      return colors.fill;
    }
    return colors.fill;
  };

  const viewModes: { key: ViewMode; icon: typeof TrendingUp; label: string }[] = [
    { key: 'economic', icon: TrendingUp, label: 'Economic' },
    { key: 'resources', icon: Gem, label: 'Resources' },
    { key: 'infrastructure', icon: Layers, label: 'Infrastructure' },
  ];

  const handleZoomIn = () => setZoom(z => Math.min(z * 1.3, 4));
  const handleZoomOut = () => setZoom(z => Math.max(z / 1.3, 0.5));
  const handleReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  return (
    <div className="relative w-full aspect-[16/10] max-w-5xl mx-auto select-none">
      {/* Dark background with grid */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 50% 40%, hsl(220 20% 14%) 0%, hsl(220 25% 6%) 100%)',
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <defs>
            <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(220 30% 40%)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapGrid)" />
        </svg>
        {/* Radial glow behind map */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,198,0.06) 0%, transparent 70%)'
        }} />
      </div>

      {/* View mode tabs */}
      <div className="absolute top-4 left-4 z-20 flex gap-1 bg-black/50 backdrop-blur-md rounded-xl p-1 border border-white/10">
        {viewModes.map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => setViewMode(key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              viewMode === key
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'text-white/50 hover:text-white/80 hover:bg-white/5'
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute top-4 right-4 z-20 flex gap-1.5">
        {[
          { icon: Globe, onClick: handleReset, active: false },
          { icon: Eye, onClick: () => setShowLabels(!showLabels), active: showLabels },
          { icon: ZoomIn, onClick: handleZoomIn, active: false },
          { icon: ZoomOut, onClick: handleZoomOut, active: false },
          { icon: Maximize2, onClick: handleReset, active: false },
        ].map(({ icon: Icon, onClick, active }, i) => (
          <button
            key={i}
            onClick={onClick}
            className={`p-2 rounded-lg backdrop-blur-md border transition-all duration-200 ${
              active
                ? 'bg-primary/20 text-primary border-primary/30'
                : 'bg-black/40 text-white/50 border-white/10 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>

      {/* Region Legend */}
      <div className="absolute top-16 right-4 z-20 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Regions</p>
        {Object.entries(regionColors).map(([key, { fill, label }]) => (
          <div key={key} className="flex items-center gap-2 py-0.5">
            <div className="w-3 h-3 rounded-sm shadow-inner" style={{ backgroundColor: fill }} />
            <span className="text-[11px] text-white/80 font-medium">{label}</span>
          </div>
        ))}
      </div>

      {/* SVG Map */}
      <svg
        viewBox="0 0 900 600"
        className="relative z-10 w-full h-full"
        style={{ filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.4))' }}
      >
        <defs>
          {/* Glow filter for hovered province */}
          <filter id="provinceGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          {/* Inner shadow for provinces */}
          <filter id="innerShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feOffset dx="1" dy="1" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feFlood floodColor="rgba(0,0,0,0.3)" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>

        <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`} style={{ transformOrigin: '450px 300px' }}>
          {/* Connection lines between major cities */}
          <g opacity="0.08" stroke="white" strokeWidth="0.5" strokeDasharray="6,4">
            {majorCities.map((city, i) =>
              majorCities.slice(i + 1).map((city2, j) => (
                <line key={`${i}-${j}`} x1={city.x} y1={city.y} x2={city2.x} y2={city2.y} />
              ))
            )}
          </g>

          {/* Province paths */}
          {provinces.map((province) => {
            const isHovered = hoveredProvince?.id === province.id;
            const regionColor = regionColors[province.region];
            return (
              <g key={province.id}>
                {/* Shadow layer */}
                {isHovered && (
                  <path
                    d={province.path}
                    fill={regionColor.hover}
                    opacity="0.4"
                    filter="url(#provinceGlow)"
                    className="pointer-events-none"
                  />
                )}
                {/* Main province shape */}
                <path
                  d={province.path}
                  fill={getFillColor(province, isHovered)}
                  stroke={isHovered ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.7)'}
                  strokeWidth={isHovered ? '1.5' : '0.7'}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    opacity: hoveredProvince && !isHovered ? 0.55 : 1,
                    filter: isHovered ? 'brightness(1.25)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredProvince(province)}
                  onMouseLeave={() => setHoveredProvince(null)}
                />
                {/* Highlight edge */}
                <path
                  d={province.path}
                  fill="none"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="0.4"
                  className="pointer-events-none"
                />
              </g>
            );
          })}

          {/* Mineral deposit indicators */}
          {provinces.map((province) => {
            const isHovered = hoveredProvince?.id === province.id;
            return (
              <g key={`dot-${province.id}`} className="pointer-events-none">
                {isHovered && (
                  <>
                    <circle cx={province.labelX} cy={province.labelY} r="12" fill="none"
                      stroke="rgba(255,215,0,0.3)" strokeWidth="1">
                      <animate attributeName="r" from="8" to="18" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  </>
                )}
                <circle
                  cx={province.labelX}
                  cy={province.labelY}
                  r={isHovered ? 4 : 2}
                  fill={isHovered ? '#FFD700' : 'rgba(140,200,255,0.5)'}
                  className="transition-all duration-200"
                />
              </g>
            );
          })}

          {/* Major city markers */}
          {majorCities.map((city) => (
            <g key={city.name}>
              <circle cx={city.x} cy={city.y} r="10" fill="none"
                stroke="rgba(255,215,0,0.25)" strokeWidth="1">
                <animate attributeName="r" from="7" to="16" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <rect
                x={city.x - 4} y={city.y - 4}
                width="8" height="8" rx="1"
                fill="#FFD700"
                transform={`rotate(45 ${city.x} ${city.y})`}
                className="drop-shadow-lg"
              />
              {showLabels && (
                <g>
                  <rect
                    x={city.x - 40} y={city.y + 10}
                    width="80" height="18" rx="4"
                    fill="rgba(0,0,0,0.75)"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="0.5"
                  />
                  <text
                    x={city.x} y={city.y + 22}
                    textAnchor="middle"
                    fill="white"
                    fontSize="7.5"
                    fontWeight="700"
                    letterSpacing="1.2"
                    className="font-body"
                  >
                    {city.name}
                  </text>
                </g>
              )}
            </g>
          ))}
        </g>
      </svg>

      {/* Hover tooltip */}
      {hoveredProvince && (
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            left: `${(hoveredProvince.labelX / 900) * 100}%`,
            top: `${(hoveredProvince.labelY / 600) * 100 - 12}%`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="bg-black/85 backdrop-blur-xl border border-white/15 rounded-xl p-4 min-w-[220px] shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: regionColors[hoveredProvince.region].fill }} />
              <h4 className="font-display text-base font-semibold text-white">
                {getProvinceName(hoveredProvince)}
              </h4>
            </div>
            <p className="text-primary text-xl font-bold mb-2">{hoveredProvince.value}</p>
            <div className="flex flex-wrap gap-1">
              {hoveredProvince.minerals.map((mineral) => (
                <span key={mineral} className="px-2 py-0.5 bg-white/10 text-white/80 text-[10px] rounded-full border border-white/5">
                  {mineral}
                </span>
              ))}
            </div>
            <Link
              to={`/provinces/${hoveredProvince.id}`}
              className="mt-3 block text-[10px] text-primary/80 hover:text-primary pointer-events-auto transition-colors"
            >
              View Province Details →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfghanistanMap;
