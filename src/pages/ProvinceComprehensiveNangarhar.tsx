import { MapPin } from "lucide-react";
import { ProvincePageLayout } from "@/components/ProvincePageLayout";
const nangarharImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-valley.jpg";

const ProvinceComprehensiveNangarhar = () => (
  <ProvincePageLayout
    title="Nangarhar"
    subtitle="East Region • Jalalabad"
    heroImage={nangarharImage}
    icon={MapPin}
    overview="Nangarhar, with its capital Jalalabad, is a key eastern province known for its agricultural productivity, trade connections with Pakistan, and growing industrial sector. With a population of 1.7 million, the province offers opportunities in agriculture, trade, manufacturing, and border commerce. Nangarhar's strategic location on the border with Pakistan, combined with its fertile agricultural lands and growing industrial base, positions it as a critical trade and economic hub in eastern Afghanistan. The province's fruit production, particularly citrus and other fruits, is renowned, and comprehensive agricultural processing infrastructure is being developed to maximize value addition. Under NERPA, Nangarhar is becoming a major border trade and agricultural processing center, with modern facilities supporting both domestic consumption and export markets."
    stats={[
      { value: "1.7M", label: "Population" },
      { value: "$3.8B", label: "Investment" },
      { value: "52+", label: "Projects" },
      { value: "140K+", label: "Jobs" },
    ]}
    historicalData={[
      { name: "2016", growth: 3.8, investment: 700 },
      { name: "2017", growth: 4.5, investment: 850 },
      { name: "2018", growth: 5.0, investment: 1000 },
      { name: "2019", growth: 5.4, investment: 1200 },
      { name: "2020", growth: 4.2, investment: 1100 },
      { name: "2021", growth: 5.2, investment: 1400 },
      { name: "2022", growth: 5.5, investment: 1800 },
      { name: "2023", growth: 5.6, investment: 2300 },
      { name: "2024", growth: 5.7, investment: 2900 },
      { name: "2025", growth: 5.8, investment: 3600 },
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
      { name: "Agriculture", value: 1500 },
      { name: "Trade", value: 1200 },
      { name: "Manufacturing", value: 1000 },
      { name: "Infrastructure", value: 800 },
      { name: "Food Processing", value: 600 },
      { name: "Logistics", value: 500 },
    ]}
    sectorBreakdown={[
      { name: "Agriculture", value: 28, color: "hsl(142, 71%, 45%)" },
      { name: "Trade", value: 22, color: "hsl(47, 96%, 53%)" },
      { name: "Manufacturing", value: 19, color: "hsl(217, 91%, 60%)" },
      { name: "Infrastructure", value: 15, color: "hsl(25, 95%, 53%)" },
      { name: "Food Processing", value: 10, color: "hsl(262, 83%, 58%)" },
      { name: "Logistics", value: 6, color: "hsl(199, 89%, 48%)" },
    ]}
    keyProjects={[
      {
        name: "Nangarhar Border Trade Zone",
        location: "Torkham Border",
        investment: "$1.2B",
        status: "Under Construction",
        timeline: "2026-2030",
        description: "Comprehensive border trade zone with customs facilities, warehouses, and logistics infrastructure"
      },
      {
        name: "Nangarhar Fruit Processing Complex",
        location: "Jalalabad Agricultural Zone",
        investment: "$950M",
        status: "Planning",
        timeline: "2027-2031",
        description: "Modern fruit processing facility with cold storage, juice production, and export infrastructure"
      },
      {
        name: "Nangarhar Manufacturing Industrial Park",
        location: "Jalalabad Industrial Zone",
        investment: "$800M",
        status: "Under Construction",
        timeline: "2026-2029",
        description: "Comprehensive industrial park with manufacturing facilities and supporting infrastructure"
      },
      {
        name: "Nangarhar Irrigation Modernization",
        location: "Nangarhar Province",
        investment: "$650M",
        status: "Planning",
        timeline: "2028-2032",
        description: "Modern irrigation systems to enhance agricultural productivity and water efficiency"
      },
      {
        name: "Nangarhar Transportation Network",
        location: "Nangarhar Province",
        investment: "$550M",
        status: "Under Construction",
        timeline: "2026-2028",
        description: "Road and transportation infrastructure connecting to Pakistan and regional markets"
      },
      {
        name: "Nangarhar Logistics Hub",
        location: "Jalalabad Logistics Center",
        investment: "$450M",
        status: "Planning",
        timeline: "2027-2030",
        description: "Comprehensive logistics facility with warehousing, distribution, and border trade support"
      },
    ]}
    opportunities={[
      "Agricultural processing plants and value addition facilities",
      "Border trade zone development and facilitation",
      "Fruit export infrastructure and quality control",
      "Manufacturing facilities and industrial parks",
      "Logistics and warehousing infrastructure",
      "Irrigation modernization and water management",
      "Trade route enhancement and connectivity",
      "Food processing and packaging facilities",
      "Market development and export promotion",
      "Infrastructure improvement and connectivity"
    ]}
    challenges={[
      "Border infrastructure development requires international coordination",
      "Agricultural productivity enhancement needs modern techniques",
      "Water resource management requires comprehensive planning",
      "Trade facilitation needs streamlined processes and infrastructure",
      "Manufacturing competitiveness requires technology and skills upgrade",
      "Infrastructure connectivity requires significant investment",
      "Market access expansion needs trade agreements and facilitation"
    ]}
    policies={[
      "Border Trade Zone Development Regulations promoting international commerce",
      "Agricultural Processing Support Policies enabling value addition",
      "Manufacturing Investment Incentives supporting industrial growth",
      "Trade Facilitation Framework enabling smooth border commerce",
      "Infrastructure Development Standards ensuring quality",
      "Water Resource Management Guidelines ensuring sustainability",
      "Export Promotion Policies supporting international trade"
    ]}
    partners={[
      "International Development Banks",
      "Trade Facilitation Agencies",
      "Agricultural Organizations",
      "Manufacturing Corporations",
      "Logistics Providers",
      "Border Management Agencies",
      "Infrastructure Developers"
    ]}
    keyResources={[
      "Agricultural Land",
      "Trade Routes",
      "Border Access",
      "Fruit Production",
      "Water Resources",
      "Strategic Location",
      "Manufacturing Base"
    ]}
    infrastructure={{
      roads: "1,300km",
      energy: "680MW",
      water: "74%",
      telecom: "78%"
    }}
  />
);

export default ProvinceComprehensiveNangarhar;
