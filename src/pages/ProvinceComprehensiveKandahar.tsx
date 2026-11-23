import { MapPin } from "lucide-react";
import { ProvincePageLayout } from "@/components/ProvincePageLayout";
const kandaharImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate-fields.jpg";

const ProvinceComprehensiveKandahar = () => (
  <ProvincePageLayout
    title="Kandahar"
    subtitle="South Region • Kandahar"
    heroImage={kandaharImage}
    icon={MapPin}
    overview="Kandahar, Afghanistan's second-largest city and the economic center of the southern region, is renowned for its agricultural productivity, particularly pomegranates and other fruits. With a population of 1.4 million, Kandahar offers significant opportunities in agriculture, logistics, mining, and regional trade. The province's fertile lands, combined with its strategic location as a transportation hub, position it as a key player in Afghanistan's agricultural transformation. Kandahar's pomegranate exports are world-renowned, and the province is developing comprehensive agricultural processing infrastructure to maximize value addition. Under NERPA, Kandahar is becoming a major agricultural processing and export hub, with modern cold storage facilities, processing plants, and logistics infrastructure supporting the region's agricultural economy."
    stats={[
      { value: "1.4M", label: "Population" },
      { value: "$4.2B", label: "Investment" },
      { value: "55+", label: "Projects" },
      { value: "150K+", label: "Jobs" },
    ]}
    historicalData={[
      { name: "2016", growth: 3.0, investment: 700 },
      { name: "2017", growth: 3.8, investment: 850 },
      { name: "2018", growth: 4.5, investment: 1000 },
      { name: "2019", growth: 5.0, investment: 1200 },
      { name: "2020", growth: 3.5, investment: 1100 },
      { name: "2021", growth: 4.8, investment: 1400 },
      { name: "2022", growth: 5.2, investment: 1800 },
      { name: "2023", growth: 5.4, investment: 2300 },
      { name: "2024", growth: 5.5, investment: 2900 },
      { name: "2025", growth: 5.6, investment: 3600 },
    ]}
    projectionData={[
      { name: "2025", baseline: 4000, optimistic: 6000, conservative: 3000 },
      { name: "2027", baseline: 6000, optimistic: 9000, conservative: 4500 },
      { name: "2029", baseline: 9000, optimistic: 13500, conservative: 6800 },
      { name: "2031", baseline: 12000, optimistic: 18000, conservative: 9500 },
      { name: "2033", baseline: 15000, optimistic: 22500, conservative: 12000 },
      { name: "2035", baseline: 18000, optimistic: 27000, conservative: 14500 },
    ]}
    investmentBySector={[
      { name: "Agriculture", value: 1800 },
      { name: "Food Processing", value: 1200 },
      { name: "Infrastructure", value: 1000 },
      { name: "Logistics", value: 800 },
      { name: "Mining", value: 600 },
      { name: "Trade", value: 500 },
    ]}
    sectorBreakdown={[
      { name: "Agriculture", value: 30, color: "hsl(142, 71%, 45%)" },
      { name: "Food Processing", value: 20, color: "hsl(25, 95%, 53%)" },
      { name: "Infrastructure", value: 17, color: "hsl(217, 91%, 60%)" },
      { name: "Logistics", value: 13, color: "hsl(47, 96%, 53%)" },
      { name: "Mining", value: 10, color: "hsl(262, 83%, 58%)" },
      { name: "Trade", value: 10, color: "hsl(199, 89%, 48%)" },
    ]}
    keyProjects={[
      {
        name: "Kandahar Pomegranate Processing Complex",
        location: "Kandahar Agricultural Zone",
        investment: "$1.2B",
        status: "Under Construction",
        timeline: "2026-2029",
        description: "Comprehensive pomegranate processing facility with cold storage, juice production, and export infrastructure"
      },
      {
        name: "Kandahar Agricultural Export Hub",
        location: "Kandahar Logistics Center",
        investment: "$950M",
        status: "Planning",
        timeline: "2027-2031",
        description: "Major agricultural export facility with modern cold storage, packaging, and logistics infrastructure"
      },
      {
        name: "Kandahar Transportation Hub Expansion",
        location: "Kandahar City",
        investment: "$800M",
        status: "Under Construction",
        timeline: "2026-2028",
        description: "Comprehensive transportation infrastructure connecting Kandahar to regional and international markets"
      },
      {
        name: "Kandahar Irrigation Modernization",
        location: "Kandahar Province",
        investment: "$650M",
        status: "Planning",
        timeline: "2028-2032",
        description: "Modern irrigation systems to enhance agricultural productivity and water efficiency"
      },
      {
        name: "Kandahar Mining Development",
        location: "Kandahar Mining Areas",
        investment: "$550M",
        status: "Planning",
        timeline: "2027-2030",
        description: "Mining infrastructure development for resource extraction and processing"
      },
      {
        name: "Kandahar Fruit Export Terminal",
        location: "Kandahar Airport Area",
        investment: "$450M",
        status: "Under Construction",
        timeline: "2026-2028",
        description: "Specialized fruit export terminal with cold chain infrastructure and quality control facilities"
      },
    ]}
    opportunities={[
      "Agricultural processing facilities and value addition",
      "Cold storage and logistics infrastructure",
      "Fruit export infrastructure and quality control",
      "Mining development and resource extraction",
      "Transportation hub expansion and connectivity",
      "Irrigation system modernization and water management",
      "Agri-tech innovation and productivity enhancement",
      "Food processing and packaging facilities",
      "Market access expansion and trade facilitation",
      "Rural infrastructure and agricultural support services"
    ]}
    challenges={[
      "Water resource optimization requires comprehensive management systems",
      "Agricultural productivity enhancement needs modern techniques and technology",
      "Infrastructure connectivity requires significant investment and planning",
      "Market access expansion needs trade facilitation and logistics improvement",
      "Climate resilience requires adaptation strategies and sustainable practices",
      "Processing capacity needs technology upgrade and skills development",
      "Export infrastructure requires quality control and certification systems"
    ]}
    policies={[
      "Agricultural Development Support Framework promoting productivity",
      "Export Facilitation Regulations enabling international trade",
      "Water Resource Management Guidelines ensuring sustainability",
      "Infrastructure Development Standards ensuring quality",
      "Mining Development Regulations ensuring responsible extraction",
      "Trade Facilitation Framework promoting exports",
      "Agricultural Processing Incentives supporting value addition"
    ]}
    partners={[
      "International Development Banks",
      "Agricultural Organizations",
      "Food Processing Companies",
      "Logistics Providers",
      "Mining Corporations",
      "Export Agencies",
      "Infrastructure Developers"
    ]}
    keyResources={[
      "Agricultural Land",
      "Fruit Production",
      "Strategic Location",
      "Mining Potential",
      "Trade Routes",
      "Water Resources",
      "Livestock"
    ]}
    infrastructure={{
      roads: "1,200km",
      energy: "650MW",
      water: "72%",
      telecom: "75%"
    }}
  />
);

export default ProvinceComprehensiveKandahar;
