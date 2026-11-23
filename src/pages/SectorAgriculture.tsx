import { Wheat } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { AgricultureMegaSections } from "@/components/AgricultureMegaSections";
const agricultureImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/saffron-harvest-herat.jpg";

const SectorAgriculture = () => (
  <>
  <SectorPageLayout
    title="Agriculture & Food Security"
    subtitle="Food Sovereignty"
    heroImage={agricultureImage}
    icon={Wheat}
    overview="Agriculture forms the backbone of Afghanistan's economy, employing over 60% of the workforce and contributing approximately 25% to GDP. Afghanistan's diverse agro-ecological zones support an extraordinary range of crops — from the world's finest saffron in Herat to legendary pomegranates in Kandahar, premium pistachios in Badghis, and high-quality almonds across the northern provinces. The sector is undergoing a massive transformation through modern irrigation systems, precision agriculture, cold chain infrastructure, and organic certification programmes that are opening premium international markets worth billions of dollars annually. Afghanistan's agricultural renaissance represents not just food security but a pathway to prosperity for millions of farming families."
    stats={[
      { value: "60%", label: "Workforce Employed" },
      { value: "#1", label: "World Saffron Quality" },
      { value: "$2B+", label: "Export Target" },
      { value: "500K", label: "Hectares Expansion" },
    ]}
    historicalData={[
      { name: "2016", growth: 3, investment: 120 },
      { name: "2017", growth: 4, investment: 150 },
      { name: "2018", growth: 5, investment: 180 },
      { name: "2019", growth: 4, investment: 200 },
      { name: "2020", growth: 3, investment: 170 },
      { name: "2021", growth: 6, investment: 220 },
      { name: "2022", growth: 8, investment: 300 },
      { name: "2023", growth: 10, investment: 400 },
      { name: "2024", growth: 12, investment: 520 },
      { name: "2025", growth: 14, investment: 650 },
    ]}
    projectionData={[
      { name: "2025", baseline: 750, optimistic: 950, conservative: 600 },
      { name: "2027", baseline: 1100, optimistic: 1600, conservative: 850 },
      { name: "2029", baseline: 1600, optimistic: 2700, conservative: 1250 },
      { name: "2031", baseline: 2200, optimistic: 4000, conservative: 1800 },
      { name: "2033", baseline: 3000, optimistic: 5800, conservative: 2500 },
      { name: "2035", baseline: 4000, optimistic: 8000, conservative: 3200 },
    ]}
    investmentByRegion={[
      { name: "Herat", value: 800 },
      { name: "Kandahar", value: 650 },
      { name: "Balkh", value: 500 },
      { name: "Nangarhar", value: 450 },
      { name: "Badghis", value: 400 },
      { name: "Kunduz", value: 350 },
      { name: "Helmand", value: 300 },
      { name: "Kapisa", value: 250 },
    ]}
    sectorBreakdown={[
      { name: "Saffron", value: 20, color: "hsl(47, 96%, 53%)" },
      { name: "Fruits", value: 25, color: "hsl(0, 84%, 60%)" },
      { name: "Nuts", value: 18, color: "hsl(25, 95%, 53%)" },
      { name: "Cereals", value: 15, color: "hsl(142, 71%, 45%)" },
      { name: "Livestock", value: 12, color: "hsl(199, 89%, 48%)" },
      { name: "Dairy", value: 5, color: "hsl(262, 83%, 58%)" },
      { name: "Honey", value: 5, color: "hsl(330, 81%, 60%)" },
    ]}
    keyProjects={[
      { name: "Herat Saffron Mega-Farm", location: "Herat Province", investment: "$200M", status: "Operational", timeline: "2024–ongoing", description: "2,000-hectare saffron cultivation with processing, packaging, and international export certification facilities." },
      { name: "Kandahar Pomegranate Export Hub", location: "Kandahar Province", investment: "$150M", status: "Under Construction", timeline: "2025–2028", description: "Cold chain, processing, and packaging facility for exporting premium pomegranates to EU and Gulf markets." },
      { name: "National Cold Chain Network", location: "Nationwide", investment: "$500M", status: "Under Construction", timeline: "2025–2030", description: "500+ refrigerated storage facilities and transport fleet connecting farms to markets and export hubs." },
      { name: "Badghis Pistachio Restoration", location: "Badghis Province", investment: "$180M", status: "Operational", timeline: "2024–2035", description: "Rehabilitation of 200,000 hectares of pistachio forests with sustainable harvesting and processing." },
      { name: "Precision Agriculture Centre", location: "Kabul Province", investment: "$80M", status: "Under Construction", timeline: "2026–2028", description: "Research and training centre for drone-assisted farming, soil analysis, and AI-powered crop management." },
      { name: "Organic Certification Programme", location: "Multiple Provinces", investment: "$120M", status: "Operational", timeline: "2025–ongoing", description: "EU and USDA organic certification for 50,000+ farmers enabling access to premium international markets." },
    ]}
    opportunities={[
      "Saffron processing and branding — Afghan saffron commands $3,000–$5,000/kg in premium markets, with demand growing 15% annually",
      "Pomegranate juice and extract manufacturing for health food markets globally, leveraging Kandahar's renowned varieties",
      "Pistachio and almond processing for retail and industrial markets — global nut market worth $35B and growing",
      "Greenhouse and vertical farming technology for year-round production of high-value vegetables and herbs",
      "Organic farming and certification — premium pricing of 30–50% over conventional products in EU and North American markets",
      "Agricultural technology (AgriTech) — drone monitoring, precision irrigation, and AI-powered crop management solutions",
      "Dried fruit and nut export — Afghanistan's traditional dried fruits command premium prices globally",
      "Honey production and export from the pristine mountain valleys of Kunar, Nuristan, and Panjshir provinces",
    ]}
    challenges={[
      "Irrigation infrastructure modernisation — converting 70% flood irrigation to efficient drip/sprinkler systems under NERPA water programme",
      "Climate adaptation through drought-resistant crop varieties and water harvesting techniques developed at national research centres",
      "Market access improvements through farm-to-market roads and digital platforms connecting farmers directly with international buyers",
      "Quality standardisation and international certification programmes enabling Afghan products to meet EU, US, and Gulf import standards",
      "Agricultural finance — microfinance and crop insurance programmes protecting farmers against market and weather risks",
      "Post-harvest loss reduction from 40% to under 10% through cold chain infrastructure and improved storage facilities",
    ]}
    policies={[
      "National Agricultural Development Policy 2026 — comprehensive framework for sector modernisation and export growth",
      "Water Rights and Irrigation Act — equitable water allocation and investment in modern irrigation infrastructure",
      "Organic Farming Promotion Act — subsidies, training, and certification support for organic transition",
      "Agricultural Export Promotion — duty-free export zones, trade agreements, and international marketing support",
      "Land Reform Programme — secure tenure for farming families and consolidation for commercial agriculture",
      "Agricultural Research Investment — 2% of sector revenue dedicated to R&D through national research centres",
      "Crop Insurance Scheme — government-subsidised insurance protecting farmers against drought and price volatility",
      "Rural Credit Programme — low-interest loans and microfinance for small and medium-scale farmers",
    ]}
    partners={[
      "FAO Afghanistan", "World Food Programme", "USAID Agriculture", "GIZ Rural Development",
      "Asian Development Bank", "Islamic Development Bank", "JICA Agriculture", "EU Agricultural Aid",
      "International Centre for Agricultural Research (ICARDA)", "World Bank Rural Programme",
      "Saudi Fund for Development", "UAE Food Security Initiative", "Turkish Agricultural Cooperation",
      "Indian Agricultural Partnership", "Korean Rural Development Agency", "Dutch Agricultural Advisory",
    ]}
  />
  <AgricultureMegaSections />
  </>
);

export default SectorAgriculture;
