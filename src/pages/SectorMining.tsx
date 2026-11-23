import { Pickaxe, Gem, Mountain, Flame, Droplets, Zap, Globe, Factory, Shield, TrendingUp, Users, MapPin, Award, Target } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { MiningMegaSections } from "@/components/MiningMegaSections";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
const miningImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/mining-aynak-copper.jpg";

const copperPit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/copper-open-pit.jpg";
const lithiumDeposits = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/lithium-deposits.jpg";
const lapisGems = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/lapis-lazuli-gems.jpg";
const goldRefinery = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/gold-refinery.jpg";
const ironOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/iron-ore-hajigak.jpg";
const emeraldCrystals = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/emerald-crystals.jpg";
const marbleQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/marble-quarry.jpg";
const processingPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/processing-plant.jpg";
const coalUnderground = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/coal-underground.jpg";
const rareEarth = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/mining/rare-earth-elements.jpg";

// ═══════════════════════════════════════════════
// MINERAL SUB-SECTOR DATA
// ═══════════════════════════════════════════════

const mineralSubSectors = [
{
  name: "Copper",
  icon: Mountain,
  image: copperPit,
  value: "$420B",
  reserves: "11.08M tonnes",
  locations: ["Logar (Aynak)", "Ghazni", "Zabul", "Kandahar"],
  grade: "High-grade chalcopyrite",
  globalRank: "#7 globally",
  description: "Afghanistan's Aynak deposit is one of the world's largest undeveloped copper resources. Located in Logar Province, the site contains an estimated 11.08 million tonnes of copper ore with average grades of 2.3% — significantly above the global average of 0.6%. Under NERPA, a $3.5B international consortium is developing open-pit and underground operations with integrated smelting, creating 15,000 direct jobs and generating $2B+ annual revenue by 2035.",
  timeline: "2026–2032",
  investment: "$3.5B",
  jobs: "15,000",
  annualRevenue: "$2B+",
  keyStats: [
  { label: "Estimated Reserves", value: "11.08M tonnes" },
  { label: "Average Grade", value: "2.3% Cu" },
  { label: "Mine Life", value: "30+ years" },
  { label: "Processing Capacity", value: "100K tonnes/year" }]

},
{
  name: "Lithium",
  icon: Zap,
  image: lithiumDeposits,
  value: "$300B",
  reserves: "Comparable to Bolivia",
  locations: ["Ghazni", "Nuristan", "Kunar", "Nangarhar"],
  grade: "Spodumene & lepidolite",
  globalRank: "#1 potential",
  description: "Afghanistan's lithium deposits rival those of Bolivia, making it potentially the 'Saudi Arabia of lithium.' Located primarily in Ghazni and eastern provinces, these pegmatite-hosted deposits contain spodumene and lepidolite ores essential for EV batteries, grid-scale energy storage, and consumer electronics. With global lithium demand projected to grow 400% by 2040, Afghanistan's reserves represent a strategic opportunity worth $300B+ at current market prices.",
  timeline: "2027–2034",
  investment: "$4.2B",
  jobs: "12,000",
  annualRevenue: "$5B+",
  keyStats: [
  { label: "Deposit Type", value: "Pegmatite" },
  { label: "Key Minerals", value: "Spodumene, Lepidolite" },
  { label: "Market Growth", value: "400% by 2040" },
  { label: "Global Demand", value: "1.5M tonnes/year" }]

},
{
  name: "Lapis Lazuli",
  icon: Gem,
  image: lapisGems,
  value: "$50B",
  reserves: "World's finest deposits",
  locations: ["Badakhshan (Sar-e-Sang)", "Takhar"],
  grade: "AAA quality",
  globalRank: "#1 globally",
  description: "Afghanistan has been the world's primary source of lapis lazuli for over 6,000 years. The Sar-e-Sang mines in Badakhshan produce the finest quality lapis on Earth — deep ultramarine blue with golden pyrite inclusions. Under NERPA, a $500M Gemstone Centre of Excellence will transform raw lapis into high-value jewellery, creating a vertically integrated industry from mine to market with GIA certification and international brand partnerships.",
  timeline: "2026–2029",
  investment: "$500M",
  jobs: "8,000",
  annualRevenue: "$800M",
  keyStats: [
  { label: "Mining History", value: "6,000+ years" },
  { label: "Quality Grade", value: "AAA (finest)" },
  { label: "Export Markets", value: "30+ countries" },
  { label: "Value-Add Target", value: "10x raw value" }]

},
{
  name: "Gold",
  icon: Award,
  image: goldRefinery,
  value: "$80B",
  reserves: "2,700+ tonnes estimated",
  locations: ["Takhar", "Ghazni", "Zabul", "Badakhshan", "Herat"],
  grade: "Alluvial & lode deposits",
  globalRank: "Emerging",
  description: "Afghanistan's gold resources span alluvial deposits in river valleys and deep lode deposits in mountainous terrain. Exploration by USGS identified significant gold occurrences across Takhar, Ghazni, and Zabul provinces. The National Gold Exploration Programme under NERPA deploys modern assay technology, satellite mapping, and international geological partnerships to systematically evaluate and develop gold resources with the target of establishing Afghanistan as a significant gold producer by 2035.",
  timeline: "2027–2035",
  investment: "$1.2B",
  jobs: "10,000",
  annualRevenue: "$1.5B",
  keyStats: [
  { label: "Deposit Types", value: "Alluvial & Lode" },
  { label: "Exploration Area", value: "12 provinces" },
  { label: "Target Production", value: "50 tonnes/year" },
  { label: "Assay Labs", value: "5 planned" }]

},
{
  name: "Iron Ore",
  icon: Mountain,
  image: ironOre,
  value: "$200B",
  reserves: "1.8B tonnes",
  locations: ["Bamyan (Hajigak)", "Panjshir", "Herat"],
  grade: "62-68% Fe content",
  globalRank: "#1 in Central Asia",
  description: "The Hajigak deposit in Bamyan Province contains an estimated 1.8 billion tonnes of high-grade iron ore with Fe content of 62-68%, among the highest globally. This mega-project includes dedicated railway infrastructure, an integrated steel mill, and export corridors. The development will transform Afghanistan from an iron ore importer to a major exporter, supplying the regional construction boom across Central and South Asia.",
  timeline: "2027–2035",
  investment: "$2.8B",
  jobs: "20,000",
  annualRevenue: "$3B+",
  keyStats: [
  { label: "Ore Grade", value: "62-68% Fe" },
  { label: "Mine Life", value: "40+ years" },
  { label: "Steel Output", value: "5M tonnes/year" },
  { label: "Railway Length", value: "400km dedicated" }]

},
{
  name: "Emeralds",
  icon: Gem,
  image: emeraldCrystals,
  value: "$30B",
  reserves: "Premium deposits",
  locations: ["Panjshir Valley", "Nuristan"],
  grade: "Comparable to Colombian",
  globalRank: "#3 globally",
  description: "Panjshir emeralds are renowned for their exceptional clarity and deep green colour, rivalling Colombian stones. The NERPA framework establishes sustainable mining practices with community benefit-sharing, artisanal miner support, and international GIA certification. A state-of-the-art cutting and polishing facility will add 10x value to raw emeralds, creating a premium Afghan emerald brand competing in the $8B global emerald market.",
  timeline: "2026–ongoing",
  investment: "$800M",
  jobs: "5,000",
  annualRevenue: "$600M",
  keyStats: [
  { label: "Colour Quality", value: "AAA vivid green" },
  { label: "Clarity", value: "VS1-VS2 average" },
  { label: "Market Price", value: "$5K-$50K/carat" },
  { label: "Export Target", value: "20+ countries" }]

},
{
  name: "Rare Earth Elements",
  icon: Zap,
  image: rareEarth,
  value: "$150B",
  reserves: "Significant deposits",
  locations: ["Helmand", "Kandahar", "Ghazni", "Logar"],
  grade: "Multiple REE types",
  globalRank: "Strategic importance",
  description: "Afghanistan possesses significant deposits of rare earth elements — neodymium, lanthanum, cerium, and yttrium — essential for wind turbines, electric motors, smartphones, and advanced defense systems. Currently 90% of global REE production comes from China. NERPA positions Afghanistan as an alternative critical minerals supplier for Western nations and allies, with a $2B processing facility planned in Helmand Province.",
  timeline: "2028–2036",
  investment: "$2B",
  jobs: "8,000",
  annualRevenue: "$4B+",
  keyStats: [
  { label: "Key Elements", value: "Nd, La, Ce, Y" },
  { label: "Strategic Value", value: "Critical minerals" },
  { label: "China Dependency", value: "Reduce from 90%" },
  { label: "Processing Purity", value: "99.9% target" }]

},
{
  name: "Marble & Granite",
  icon: Mountain,
  image: marbleQuarry,
  value: "$20B",
  reserves: "Massive deposits",
  locations: ["Herat", "Helmand", "Ghazni", "Nangarhar", "Samangan"],
  grade: "Premium white & coloured",
  globalRank: "Emerging exporter",
  description: "Afghanistan's marble and granite deposits produce some of the most beautiful natural stone in Asia. From pristine white Carrara-quality marble in Herat to exotic onyx and travertine varieties, the country has the potential to become a top-10 global marble exporter. NERPA's marble expansion programme includes modern quarrying equipment, CNC cutting facilities, and international trade partnerships targeting the Gulf, European, and Asian construction markets.",
  timeline: "2026–ongoing",
  investment: "$300M",
  jobs: "12,000",
  annualRevenue: "$500M",
  keyStats: [
  { label: "Varieties", value: "50+ types" },
  { label: "Quality", value: "Premium grade" },
  { label: "Export Markets", value: "Gulf, EU, Asia" },
  { label: "Annual Output", value: "2M tonnes target" }]

},
{
  name: "Coal",
  icon: Flame,
  image: coalUnderground,
  value: "$40B",
  reserves: "400M+ tonnes",
  locations: ["Bamyan", "Samangan", "Baghlan", "Sar-e-Pol"],
  grade: "Bituminous & sub-bituminous",
  globalRank: "Regional supplier",
  description: "Afghanistan's coal reserves exceed 400 million tonnes, primarily in the northern provinces. Under NERPA, coal development focuses on clean coal technology with carbon capture and storage (CCS), coal-to-liquids for fuel security, and coal-fired power generation with modern emission controls. The Coal-to-Power Complex in Bamyan will provide 500MW of baseload power while creating thousands of mining and construction jobs.",
  timeline: "2028–2035",
  investment: "$1.5B",
  jobs: "8,000",
  annualRevenue: "$700M",
  keyStats: [
  { label: "Total Reserves", value: "400M+ tonnes" },
  { label: "Power Output", value: "500MW planned" },
  { label: "Clean Tech", value: "CCS equipped" },
  { label: "Mine Life", value: "30+ years" }]

},
{
  name: "Chromite",
  icon: Mountain,
  image: processingPlant,
  value: "$15B",
  reserves: "Significant deposits",
  locations: ["Logar", "Paktya", "Wardak", "Khost"],
  grade: "High-grade chromite ore",
  globalRank: "Top-15 potential",
  description: "Chromite deposits in eastern Afghanistan represent a significant opportunity for stainless steel production and chrome plating industries. NERPA's chromite development programme includes modern extraction facilities, ore beneficiation plants, and ferrochrome smelting capacity. Afghanistan's chromite can serve both domestic steel production and export markets across South and Central Asia.",
  timeline: "2028–2034",
  investment: "$600M",
  jobs: "5,000",
  annualRevenue: "$400M",
  keyStats: [
  { label: "Ore Grade", value: "40-55% Cr2O3" },
  { label: "End Products", value: "Ferrochrome, SS" },
  { label: "Export Target", value: "India, Pakistan" },
  { label: "Processing", value: "Smelting facility" }]

}];


// ═══════════════════════════════════════════════
// PROVINCE MINING PROFILES
// ═══════════════════════════════════════════════

const provinceMiningProfiles = [
{ province: "Logar", minerals: ["Copper", "Chromite", "Rare Earth"], flagshipProject: "Aynak Copper Mine", investment: "$3.5B", status: "Under Construction" },
{ province: "Bamyan", minerals: ["Iron Ore", "Coal", "Limestone"], flagshipProject: "Hajigak Iron Ore", investment: "$2.8B", status: "Planned" },
{ province: "Ghazni", minerals: ["Lithium", "Gold", "Marble"], flagshipProject: "Lithium Extraction", investment: "$4.2B", status: "Planned" },
{ province: "Badakhshan", minerals: ["Lapis Lazuli", "Gold", "Ruby"], flagshipProject: "Gemstone Centre", investment: "$500M", status: "Under Construction" },
{ province: "Panjshir", minerals: ["Emeralds", "Silver", "Granite"], flagshipProject: "Emerald Mining", investment: "$800M", status: "Operational" },
{ province: "Helmand", minerals: ["Rare Earth", "Marble", "Salt"], flagshipProject: "REE Processing", investment: "$2B", status: "Planned" },
{ province: "Herat", minerals: ["Marble", "Granite", "Iron"], flagshipProject: "Marble Quarrying", investment: "$300M", status: "Operational" },
{ province: "Kandahar", minerals: ["Gold", "Chromite", "Gemstones"], flagshipProject: "Gold Exploration", investment: "$400M", status: "Planned" },
{ province: "Takhar", minerals: ["Gold", "Coal", "Talc"], flagshipProject: "Gold Mining", investment: "$350M", status: "Under Construction" },
{ province: "Samangan", minerals: ["Coal", "Marble", "Salt"], flagshipProject: "Coal-Power", investment: "$600M", status: "Planned" },
{ province: "Baghlan", minerals: ["Coal", "Copper", "Lead"], flagshipProject: "Coal Mining", investment: "$250M", status: "Operational" },
{ province: "Nuristan", minerals: ["Lithium", "Emeralds", "Timber"], flagshipProject: "Lithium Survey", investment: "$200M", status: "Exploration" },
{ province: "Paktya", minerals: ["Chromite", "Iron", "Copper"], flagshipProject: "Chromite Mining", investment: "$300M", status: "Planned" },
{ province: "Wardak", minerals: ["Iron", "Chromite", "Coal"], flagshipProject: "Iron Mining", investment: "$400M", status: "Planned" },
{ province: "Zabul", minerals: ["Gold", "Copper", "Lead"], flagshipProject: "Gold Exploration", investment: "$250M", status: "Exploration" },
{ province: "Sar-e-Pol", minerals: ["Oil", "Natural Gas", "Coal"], flagshipProject: "Energy Extraction", investment: "$500M", status: "Planned" }];


// ═══════════════════════════════════════════════
// MINING GALLERY
// ═══════════════════════════════════════════════

const miningGallery = [
{ src: copperPit, caption: "Aynak Open-Pit Copper Mine — Logar Province", category: "Operations" },
{ src: lithiumDeposits, caption: "Lithium Crystal Deposits — Ghazni Province", category: "Resources" },
{ src: lapisGems, caption: "World-Renowned Afghan Lapis Lazuli", category: "Gemstones" },
{ src: goldRefinery, caption: "Gold Refinery & Smelting Operations", category: "Processing" },
{ src: ironOre, caption: "Hajigak Iron Ore Deposits — Bamyan Province", category: "Operations" },
{ src: emeraldCrystals, caption: "Panjshir Valley Emerald Crystals", category: "Gemstones" },
{ src: marbleQuarry, caption: "Premium Marble Quarrying — Herat Province", category: "Operations" },
{ src: processingPlant, caption: "Modern Mineral Processing Facility", category: "Processing" },
{ src: coalUnderground, caption: "Underground Coal Mining Operations", category: "Operations" },
{ src: rareEarth, caption: "Rare Earth Element Laboratory Analysis", category: "Processing" }];


// ═══════════════════════════════════════════════
// ADDITIONAL SECTIONS COMPONENT
// ═══════════════════════════════════════════════

const MiningAdditionalSections = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedMineral, setExpandedMineral] = useState<number | null>(null);

  const openLightbox = (i: number) => {setActiveIndex(i);setLightboxOpen(true);};
  const next = () => setActiveIndex((prev) => (prev + 1) % miningGallery.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + miningGallery.length) % miningGallery.length);

  return (
    <>
      {/* ═══ MINERAL SUB-SECTORS DEEP DIVE ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Mineral Resources</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">10 Strategic Mineral Sub-Sectors</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl">Each mineral sub-sector represents a transformative opportunity for Afghanistan's economy — from critical minerals for the global green energy transition to precious gemstones treasured for millennia.</p>
          </motion.div>

          <div className="space-y-6">
            {mineralSubSectors.map((mineral, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl border border-border overflow-hidden">
              
                {/* Collapsed View */}
                <div
                className="flex flex-col lg:flex-row cursor-pointer group"
                onClick={() => setExpandedMineral(expandedMineral === i ? null : i)}>
                
                  <div className="relative w-full lg:w-80 h-48 lg:h-auto overflow-hidden flex-shrink-0">
                    <img src={mineral.image} alt={mineral.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden lg:block" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-bold uppercase rounded-full">{mineral.globalRank}</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-primary/10 rounded-xl">
                        <mineral.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{mineral.name}</h3>
                        <p className="text-sm text-muted-foreground">{mineral.grade}</p>
                      </div>
                      <div className="ml-auto text-right">
                        
                        <p className="text-xs text-muted-foreground">Estimated Value</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                      


                    
                      <div className="bg-muted/50 rounded-lg p-2.5">
                        <p className="text-xs text-muted-foreground">Jobs</p>
                        <p className="font-bold text-sm">{mineral.jobs}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2.5">
                        <p className="text-xs text-muted-foreground">Revenue</p>
                        <p className="font-bold text-sm">{mineral.annualRevenue}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-2.5">
                        <p className="text-xs text-muted-foreground">Timeline</p>
                        <p className="font-bold text-sm">{mineral.timeline}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {mineral.locations.map((loc, j) =>
                    <span key={j} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-md border border-primary/20">{loc}</span>
                    )}
                    </div>
                  </div>
                </div>

                {/* Expanded Detail */}
                <AnimatePresence>
                  {expandedMineral === i &&
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden">
                  
                      <div className="px-6 pb-6 border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed mb-6">{mineral.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {mineral.keyStats.map((stat, k) =>
                      <div key={k} className="text-center bg-muted/30 rounded-xl p-4 border border-border/50">
                              <p className="text-xl font-bold text-primary">{stat.value}</p>
                              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                            </div>
                      )}
                        </div>
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ CINEMATIC MINING GALLERY ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Visual Showcase</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Mining Operations Gallery</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">From open-pit copper mines to precious gemstone laboratories — Afghanistan's mining future in stunning detail.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {miningGallery.map((img, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[16/10]"
              onClick={() => openLightbox(i)}>
              
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full">{img.category}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-semibold leading-tight">{img.caption}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary/80 rounded-full p-1.5"><ZoomIn className="w-4 h-4 text-primary-foreground" /></div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen &&
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
              <button onClick={(e) => {e.stopPropagation();setLightboxOpen(false);}} className="absolute top-6 right-6 z-10 text-white/80 hover:text-white"><X className="w-8 h-8" /></button>
              <button onClick={(e) => {e.stopPropagation();prev();}} className="absolute left-4 z-10 text-white/60 hover:text-white p-2"><ChevronLeft className="w-10 h-10" /></button>
              <button onClick={(e) => {e.stopPropagation();next();}} className="absolute right-4 z-10 text-white/60 hover:text-white p-2"><ChevronRight className="w-10 h-10" /></button>
              <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                <img src={miningGallery[activeIndex].src} alt={miningGallery[activeIndex].caption} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
                <p className="text-white text-center mt-4 text-lg font-medium">{miningGallery[activeIndex].caption}</p>
                <p className="text-white/50 text-center text-sm">{activeIndex + 1} / {miningGallery.length}</p>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </section>

      {/* ═══ PROVINCE MINING PROFILES ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Provincial Mining</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mining by Province</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl">Mineral deposits span all 34 provinces, with 16 provinces hosting flagship mining projects under the NERPA 2026–2040 framework.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {provinceMiningProfiles.map((prov, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-all duration-300 group">
              
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="font-bold group-hover:text-primary transition-colors">{prov.province}</h4>
                  




                
                </div>
                <p className="text-sm text-muted-foreground mb-2">{prov.flagshipProject}</p>
                <p className="text-lg font-bold text-primary mb-3">{prov.investment}</p>
                <div className="flex flex-wrap gap-1">
                  {prov.minerals.map((m, j) =>
                <span key={j} className="px-1.5 py-0.5 bg-muted/50 text-muted-foreground text-[10px] rounded">{m}</span>
                )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL MINERAL VALUE COMPARISON ═══ */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src={copperPit} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        




















        
      </section>

      {/* ═══ MINING VALUE CHAIN ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Mining Value Chain</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
            { step: "1", title: "Exploration", desc: "Geological survey, satellite mapping, core drilling, assay analysis", icon: Globe, image: rareEarth },
            { step: "2", title: "Extraction", desc: "Open-pit mining, underground operations, artisanal extraction", icon: Pickaxe, image: copperPit },
            { step: "3", title: "Processing", desc: "Crushing, grinding, flotation, smelting, refining", icon: Factory, image: processingPlant },
            { step: "4", title: "Value-Addition", desc: "Cutting, polishing, alloying, product manufacturing", icon: Gem, image: emeraldCrystals },
            { step: "5", title: "Export & Trade", desc: "International markets, brand development, trade partnerships", icon: TrendingUp, image: goldRefinery }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group min-h-[280px]">
              
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                <div className="relative z-10 flex flex-col justify-end h-full p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center mb-3 text-primary-foreground font-bold text-sm">{item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ ENVIRONMENTAL & COMMUNITY COMMITMENT ═══ */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Responsible Mining Commitment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
            { title: "Environmental Protection", icon: Globe, desc: "All mining operations require Environmental Impact Assessments, third-party monitoring, water recycling systems, and progressive land rehabilitation. Mining Law 2026 mandates carbon neutrality by 2040 for all major operations.", color: "from-green-500/80 to-emerald-600/80", image: marbleQuarry },
            { title: "Community Benefit-Sharing", icon: Users, desc: "10% of all mining royalties allocated directly to provincial development funds. Local employment requirements of 60%+ by 2035. Community consent mechanisms and social impact assessments for all new projects.", color: "from-blue-500/80 to-cyan-600/80", image: coalUnderground },
            { title: "Safety & Standards", icon: Shield, desc: "International mining safety standards (ISO 45001) required. Mining academies training 10,000 skilled workers annually. Health monitoring, emergency response systems, and insurance for all mine workers.", color: "from-amber-500/80 to-orange-600/80", image: processingPlant }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group min-h-[400px]">
              
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative z-10 flex flex-col justify-end h-full p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ MINERAL WEALTH TIMELINE ═══ */}
      <section className="py-20 px-6 lg:px-12 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Mining Development Roadmap</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            {[
            { year: "2026", title: "Foundation Phase", items: ["Mining Law 2026 enacted", "Aynak & Panjshir operations begin", "Gemstone Centre construction starts", "National Geological Survey modernisation"], image: copperPit },
            { year: "2028", title: "Acceleration Phase", items: ["Lithium exploration programme launches", "Hajigak Iron Ore development begins", "5 Mining Academies operational", "REE processing facility groundbreaking"], image: ironOre },
            { year: "2030", title: "Production Phase", items: ["Aynak at full production (100K tonnes/year)", "First lithium exports", "Coal-to-Power Complex operational", "Chromite smelting begins"], image: processingPlant },
            { year: "2035", title: "Maturity Phase", items: ["50,000 mining jobs achieved", "10 major mines operational", "$5B annual mineral exports", "Top-10 global mineral supplier"], image: goldRefinery },
            { year: "2040", title: "Global Leadership", items: ["$12B+ annual revenue", "Full value-chain domestic processing", "Carbon-neutral mining operations", "Strategic global mineral partner"], image: lapisGems }].
            map((phase, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col lg:flex-row gap-6 mb-12 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              
                <div className="flex-1 rounded-2xl overflow-hidden">
                  <div className="relative h-48 lg:h-64 overflow-hidden rounded-2xl">
                    <img src={phase.image} alt={phase.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) =>
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                  )}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>);

};

// ═══════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════

const SectorMining = () =>
<SectorPageLayout
  title="Minerals & Mining"
  subtitle="Resource Sovereignty — Vision 2026–2040"
  heroImage={miningImage}
  icon={Pickaxe}
  overview="Afghanistan possesses one of the world's largest untapped mineral reserves, valued at over $1 trillion by the USGS and British Geological Survey. From lithium deposits essential for global battery technology to vast copper reserves at Aynak, rare earth elements critical for green energy, and precious gemstones including world-renowned lapis lazuli and emeralds, the nation's geological wealth represents an unprecedented opportunity for economic transformation. Under the NERPA Vision 2026–2040 framework, the Government is implementing transparent licensing, environmental safeguards, community revenue-sharing, and modern regulatory standards aligned with international best practices. With identified mineral occurrences across all 34 provinces, Afghanistan is positioned to become a major global supplier of critical minerals essential for the green energy transition, advanced manufacturing, and the global tech supply chain."
  stats={[
  { value: "$1T+", label: "Mineral Wealth" },
  { value: "34", label: "Provinces with Deposits" },
  { value: "1,400+", label: "Mineral Occurrences" },
  { value: "50K+", label: "Mining Jobs by 2035" }]
  }
  historicalData={[
  { name: "2016", growth: 2, investment: 50 },
  { name: "2017", growth: 3, investment: 65 },
  { name: "2018", growth: 4, investment: 80 },
  { name: "2019", growth: 3.5, investment: 95 },
  { name: "2020", growth: 2, investment: 70 },
  { name: "2021", growth: 5, investment: 120 },
  { name: "2022", growth: 7, investment: 180 },
  { name: "2023", growth: 9, investment: 250 },
  { name: "2024", growth: 12, investment: 350 },
  { name: "2025", growth: 15, investment: 500 }]
  }
  projectionData={[
  { name: "2026", baseline: 600, optimistic: 800, conservative: 500 },
  { name: "2028", baseline: 1200, optimistic: 2000, conservative: 900 },
  { name: "2030", baseline: 2200, optimistic: 4500, conservative: 1800 },
  { name: "2032", baseline: 3500, optimistic: 7500, conservative: 2800 },
  { name: "2034", baseline: 5200, optimistic: 11000, conservative: 4000 },
  { name: "2036", baseline: 7200, optimistic: 15000, conservative: 5500 },
  { name: "2038", baseline: 9500, optimistic: 20000, conservative: 7200 },
  { name: "2040", baseline: 12000, optimistic: 25000, conservative: 9000 }]
  }
  investmentByRegion={[
  { name: "Logar", value: 5000 },
  { name: "Ghazni", value: 4200 },
  { name: "Bamyan", value: 3800 },
  { name: "Badakhshan", value: 3200 },
  { name: "Herat", value: 2800 },
  { name: "Panjshir", value: 2500 },
  { name: "Helmand", value: 2000 },
  { name: "Kandahar", value: 1800 }]
  }
  sectorBreakdown={[
  { name: "Copper", value: 30, color: "hsl(25, 95%, 53%)" },
  { name: "Lithium", value: 25, color: "hsl(217, 91%, 60%)" },
  { name: "Iron Ore", value: 15, color: "hsl(0, 0%, 60%)" },
  { name: "Rare Earth", value: 12, color: "hsl(142, 71%, 45%)" },
  { name: "Gemstones", value: 10, color: "hsl(262, 83%, 58%)" },
  { name: "Gold", value: 5, color: "hsl(47, 96%, 53%)" },
  { name: "Coal", value: 3, color: "hsl(0, 0%, 40%)" }]
  }
  keyProjects={[
  { name: "Aynak Copper Mine", location: "Logar Province", investment: "$3.5B", status: "Under Construction", timeline: "2026–2032", description: "One of the world's largest copper deposits with estimated 11.08 million tonnes of copper. Joint venture with international mining consortium under NERPA framework." },
  { name: "Hajigak Iron Ore", location: "Bamyan Province", investment: "$2.8B", status: "Planned", timeline: "2027–2035", description: "1.8 billion tonnes of high-grade iron ore. Infrastructure includes dedicated railway and integrated steel processing facility." },
  { name: "Ghazni Lithium Extraction", location: "Ghazni Province", investment: "$4.2B", status: "Planned", timeline: "2027–2034", description: "Among the world's largest lithium deposits, critical for EV batteries and energy storage. Estimated reserves comparable to Bolivia." },
  { name: "Badakhshan Gemstone Centre", location: "Badakhshan Province", investment: "$500M", status: "Under Construction", timeline: "2026–2029", description: "World-class cutting, polishing, and GIA certification facility for lapis lazuli, emeralds, and rubies." },
  { name: "Panjshir Emerald Mining", location: "Panjshir Province", investment: "$800M", status: "Operational", timeline: "2026–ongoing", description: "Sustainable emerald extraction with community benefit-sharing and environmental protection under Mining Law 2026." },
  { name: "National Gold Exploration", location: "Multiple Provinces", investment: "$1.2B", status: "Planned", timeline: "2027–2035", description: "Comprehensive gold exploration programme across Takhar, Ghazni, and Zabul provinces with modern assay facilities." },
  { name: "Rare Earth Processing Plant", location: "Helmand Province", investment: "$2B", status: "Planned", timeline: "2028–2036", description: "Processing facility for neodymium, lanthanum, and cerium — essential for wind turbines and electric motors." },
  { name: "Coal-to-Power Complex", location: "Bamyan Province", investment: "$1.5B", status: "Planned", timeline: "2028–2035", description: "Clean coal technology power plant with carbon capture and community development programmes." },
  { name: "Marble Quarrying Expansion", location: "Herat Province", investment: "$300M", status: "Operational", timeline: "2026–ongoing", description: "Premium marble extraction and processing for domestic construction and international export markets." }]
  }
  opportunities={[
  "Lithium extraction partnerships for global EV battery supply chains — demand projected to grow 400% by 2040",
  "Copper processing and smelting facilities reducing export of raw ore and creating value-added products domestically",
  "Gemstone cutting and polishing industry creating 50,000+ skilled artisan jobs with international market access",
  "Rare earth element processing for renewable energy technology — strategic global importance for wind and solar manufacturing",
  "Gold mining and refining operations with modern, environmentally responsible extraction techniques",
  "Iron ore and steel production for domestic construction boom and regional export markets across Central and South Asia",
  "Mining equipment manufacturing and maintenance services supporting the entire extractive industry ecosystem",
  "Environmental remediation and sustainable mining consultancy services building expertise for international markets"]
  }
  challenges={[
  "Infrastructure development required — dedicated roads, railways, and power supply to remote mining sites being built under NERPA 2026–2040",
  "Environmental protection standards being established with international best practices, community oversight, and third-party monitoring",
  "Workforce skills development through mining academies and international training partnerships producing 10,000 trained miners annually by 2035",
  "Security improvements in mining regions with dedicated protection forces and community engagement programmes",
  "Regulatory framework modernisation with transparent licensing, revenue sharing, and environmental impact assessment requirements under Mining Law 2026",
  "Water management in arid mining regions through recycling systems and sustainable extraction practices aligned with IWRM principles"]
  }
  policies={[
  "Mining Law 2026 — comprehensive regulatory framework with transparent licensing, environmental requirements, and community consent mechanisms",
  "Revenue Sharing Act — ensuring communities benefit directly from mineral extraction with 10% of royalties allocated to provincial development",
  "Environmental Impact Assessment requirement for all mining operations above $10M investment with third-party verification",
  "Foreign Investment Protection — bilateral investment treaties with 30+ countries securing investor rights and international arbitration",
  "Tax incentive programme — 5-year tax holidays for major mining investments exceeding $100M with graduated returns",
  "Local content requirements ensuring Afghan employment, training, and supply chain participation at minimum 60% by 2035",
  "Geological Survey Modernisation — digital mapping and open data platform for mineral exploration across all 34 provinces",
  "Artisanal Mining Regulation — formalising small-scale mining with safety standards, fair pricing, and international market access support"]
  }
  partners={[
  "World Bank Mining Unit", "Asian Development Bank", "China Metallurgical Group", "Saudi Arabian Mining Co",
  "Turkish Mining Association", "UAE Investment Authority", "Indian Steel Authority", "German Federal Geological Survey",
  "USGS Afghanistan Programme", "British Geological Survey", "Canadian Mining Innovation Council", "Rio Tinto Advisory",
  "JICA Mining Development", "Korean Resources Corporation", "Emirati Minerals Investment", "Qatar Mining Corporation"]
  }
  additionalSections={<><MiningAdditionalSections /><MiningMegaSections /></>} />;



export default SectorMining;