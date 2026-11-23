import { Droplets } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { WaterMegaSections } from "@/components/WaterMegaSections";
const waterImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/hydro-dam-kajaki.jpg";

const SectorWater = () => (
  <>
  <SectorPageLayout
    title="Water & Resource Management"
    subtitle="Water Security"
    heroImage={waterImage}
    icon={Droplets}
    overview="Water is Afghanistan's most precious resource. With vast river systems fed by Hindu Kush glaciers and seasonal snowmelt, Afghanistan controls the headwaters of rivers flowing into Central and South Asia. Under NERPA, the Water & Resource Management sector targets construction of 20+ major dams, modernisation of 1 million hectares of irrigation, 100% urban water supply coverage, and 50+ water treatment facilities. Total sector investment is projected at $8 billion through 2040, creating sustainable water infrastructure that supports agriculture, energy generation, industry, and domestic consumption. Transboundary water diplomacy ensures Afghanistan's sovereign rights while promoting regional cooperation. Climate adaptation strategies protect against changing precipitation patterns and glacial retreat."
    stats={[
      { value: "20+", label: "Dams Planned" },
      { value: "1M", label: "Hectares Irrigated" },
      { value: "100%", label: "Urban Water Access" },
      { value: "$8B", label: "Investment Target" },
    ]}
    historicalData={[
      { name: "2016", growth: 2, investment: 60 },
      { name: "2017", growth: 3, investment: 75 },
      { name: "2018", growth: 4, investment: 90 },
      { name: "2019", growth: 4, investment: 100 },
      { name: "2020", growth: 5, investment: 120 },
      { name: "2021", growth: 6, investment: 150 },
      { name: "2022", growth: 8, investment: 200 },
      { name: "2023", growth: 10, investment: 280 },
      { name: "2024", growth: 12, investment: 360 },
      { name: "2025", growth: 14, investment: 450 },
    ]}
    projectionData={[
      { name: "2025", baseline: 500, optimistic: 700, conservative: 400 },
      { name: "2027", baseline: 750, optimistic: 1200, conservative: 600 },
      { name: "2029", baseline: 1150, optimistic: 1900, conservative: 850 },
      { name: "2031", baseline: 1700, optimistic: 2900, conservative: 1300 },
      { name: "2033", baseline: 2300, optimistic: 4100, conservative: 1800 },
      { name: "2035", baseline: 3000, optimistic: 5500, conservative: 2300 },
    ]}
    investmentByRegion={[
      { name: "Helmand", value: 1200 },
      { name: "Kabul", value: 800 },
      { name: "Herat", value: 700 },
      { name: "Nangarhar", value: 600 },
      { name: "Balkh", value: 500 },
      { name: "Kunduz", value: 450 },
      { name: "Bamyan", value: 350 },
      { name: "Panjshir", value: 300 },
    ]}
    sectorBreakdown={[
      { name: "Dam Construction", value: 30, color: "hsl(199, 89%, 48%)" },
      { name: "Irrigation Systems", value: 25, color: "hsl(142, 71%, 45%)" },
      { name: "Urban Water Supply", value: 18, color: "hsl(217, 91%, 60%)" },
      { name: "Water Treatment", value: 12, color: "hsl(262, 83%, 58%)" },
      { name: "Watershed Mgmt", value: 8, color: "hsl(47, 96%, 53%)" },
      { name: "Groundwater", value: 7, color: "hsl(0, 84%, 60%)" },
    ]}
    keyProjects={[
      { name: "Kajaki Dam Expansion", location: "Helmand", investment: "$1.5B", status: "Under Construction", timeline: "2025–2032", description: "Expanding Kajaki Dam capacity to 150MW hydroelectric plus irrigation for 500,000 hectares of farmland." },
      { name: "Shahtoot Dam", location: "Kabul", investment: "$600M", status: "Under Construction", timeline: "2025–2030", description: "Providing drinking water to 2 million Kabul residents and irrigation for surrounding agricultural areas." },
      { name: "National Irrigation Modernisation", location: "Nationwide", investment: "$2B", status: "Operational", timeline: "2025–2035", description: "Converting 1 million hectares from flood irrigation to efficient drip and sprinkler systems." },
      { name: "Urban Water Supply Network", location: "10 Major Cities", investment: "$1.2B", status: "Under Construction", timeline: "2026–2033", description: "Modern piped water supply reaching 100% of urban households with 24/7 availability." },
      { name: "Transboundary Water Commission", location: "Regional", investment: "$100M", status: "Operational", timeline: "2025–ongoing", description: "Diplomatic framework securing Afghanistan's water rights on Amu Darya, Helmand, and Kabul rivers." },
      { name: "Climate Adaptation Programme", location: "Nationwide", investment: "$500M", status: "Planned", timeline: "2027–2040", description: "Glacier monitoring, snowmelt forecasting, and drought resilience infrastructure across all basins." },
    ]}
    opportunities={[
      "Dam construction and engineering — 20+ major dams requiring world-class engineering expertise and construction capacity",
      "Irrigation technology — modern drip and sprinkler systems for 1 million+ hectares of agricultural land",
      "Urban water infrastructure — piped water networks, pumping stations, and distribution systems for 10+ cities",
      "Water treatment plants — 50+ facilities for drinking water purification and wastewater management",
      "Groundwater exploration and monitoring — aquifer assessment, borehole drilling, and sustainable management systems",
      "Hydroelectric generation — dam-based power generation contributing to national energy independence",
      "Climate monitoring technology — glacier sensors, weather stations, and hydrological modelling systems",
      "Water sector consulting — master planning, environmental assessment, and institutional capacity building",
    ]}
    challenges={[
      "Glacial retreat and climate change — addressed through monitoring systems, diversified storage, and adaptation planning",
      "Transboundary water disputes — managed through diplomatic frameworks and international water law expertise",
      "Ageing irrigation infrastructure — systematic replacement with modern efficient systems across all provinces",
      "Urban water losses — reducing non-revenue water from 60% to below 20% through network rehabilitation",
      "Groundwater depletion — monitoring and regulation preventing over-extraction in critical aquifer zones",
      "Flood management — upstream storage and early warning systems protecting vulnerable communities",
    ]}
    policies={[
      "National Water Law 2026 — comprehensive legal framework for water allocation, rights, and management",
      "Dam Safety Regulation — international standards for design, construction, operation, and monitoring",
      "Irrigation Water Pricing — cost-recovery tariffs encouraging efficient water use in agriculture",
      "Urban Water Supply Standards — quality, pressure, and availability requirements for municipal systems",
      "Groundwater Protection Act — extraction licensing, aquifer monitoring, and pollution prevention",
      "Transboundary Water Policy — sovereign rights assertion with cooperative framework for shared rivers",
      "Climate Adaptation Strategy — long-term planning for water security under changing climate conditions",
      "Water Sector Investment Framework — PPP models, concessional finance, and grant coordination mechanisms",
    ]}
    partners={[
      "World Bank Water Programme", "Asian Development Bank", "JICA Water Resources", "GIZ Water Sector",
      "USAID Water & Sanitation", "UN-Habitat Water", "UNICEF WASH", "Islamic Development Bank",
      "Indian Dam Construction", "Turkish Water Authority", "Korean Water Resources Corp", "Dutch Water Sector",
      "Swiss Development Cooperation", "Norwegian Water Resources", "FAO Irrigation", "UNDP Climate Adaptation",
    ]}
  />
  <WaterMegaSections />
  </>
);

export default SectorWater;
