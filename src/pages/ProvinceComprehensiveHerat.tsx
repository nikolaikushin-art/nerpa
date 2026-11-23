import { MapPin } from "lucide-react";
import { ProvincePageLayout } from "@/components/ProvincePageLayout";
const heratImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-ancient-citadel.jpg";

const ProvinceComprehensiveHerat = () => (
  <ProvincePageLayout
    title="Herat"
    subtitle="West Region • Herat"
    heroImage={heratImage}
    icon={MapPin}
    overview="Herat, Afghanistan's western gateway and a major trade hub, connects Central Asia with South Asia and the Middle East. With a population of 2.1 million, Herat is renowned for its rich cultural heritage, strategic location, and growing manufacturing sector. The province offers exceptional opportunities in trade, logistics, manufacturing, and tourism. Herat's historic significance, combined with its position as a key transit point for regional commerce, makes it a critical component of Afghanistan's economic transformation. The province hosts UNESCO World Heritage sites, major textile and carpet manufacturing facilities, agricultural processing plants, and border trade infrastructure. Under NERPA, Herat is positioned to become a major regional trade and manufacturing hub, leveraging its strategic location and cultural assets to drive economic growth and development."
    stats={[
      { value: "2.1M", label: "Population" },
      { value: "$4.8B", label: "Investment" },
      { value: "65+", label: "Projects" },
      { value: "180K+", label: "Jobs" },
    ]}
    historicalData={[
      { name: "2016", growth: 3.5, investment: 800 },
      { name: "2017", growth: 4.2, investment: 950 },
      { name: "2018", growth: 4.8, investment: 1100 },
      { name: "2019", growth: 5.2, investment: 1300 },
      { name: "2020", growth: 4.0, investment: 1200 },
      { name: "2021", growth: 5.0, investment: 1500 },
      { name: "2022", growth: 5.5, investment: 2000 },
      { name: "2023", growth: 5.7, investment: 2600 },
      { name: "2024", growth: 5.8, investment: 3300 },
      { name: "2025", growth: 5.9, investment: 4100 },
    ]}
    projectionData={[
      { name: "2025", baseline: 4500, optimistic: 6500, conservative: 3500 },
      { name: "2027", baseline: 6800, optimistic: 10000, conservative: 5200 },
      { name: "2029", baseline: 10000, optimistic: 15000, conservative: 7500 },
      { name: "2031", baseline: 13500, optimistic: 20000, conservative: 10500 },
      { name: "2033", baseline: 17000, optimistic: 25000, conservative: 13000 },
      { name: "2035", baseline: 20500, optimistic: 30000, conservative: 15500 },
    ]}
    investmentBySector={[
      { name: "Manufacturing", value: 1800 },
      { name: "Trade", value: 1500 },
      { name: "Infrastructure", value: 1200 },
      { name: "Agriculture", value: 800 },
      { name: "Tourism", value: 600 },
      { name: "Textiles", value: 500 },
    ]}
    sectorBreakdown={[
      { name: "Manufacturing", value: 32, color: "hsl(217, 91%, 60%)" },
      { name: "Trade", value: 26, color: "hsl(47, 96%, 53%)" },
      { name: "Infrastructure", value: 20, color: "hsl(25, 95%, 53%)" },
      { name: "Agriculture", value: 13, color: "hsl(142, 71%, 45%)" },
      { name: "Tourism", value: 5, color: "hsl(262, 83%, 58%)" },
      { name: "Textiles", value: 4, color: "hsl(199, 89%, 48%)" },
    ]}
    keyProjects={[
      {
        name: "Herat International Trade Zone",
        location: "Herat City",
        investment: "$1.5B",
        status: "Under Construction",
        timeline: "2026-2030",
        description: "Major international trade zone with customs facilities, warehouses, and logistics infrastructure"
      },
      {
        name: "Herat Manufacturing Industrial Park",
        location: "Herat Industrial Zone",
        investment: "$1.2B",
        status: "Planning",
        timeline: "2027-2032",
        description: "Modern industrial park with manufacturing facilities for textiles, carpets, and consumer goods"
      },
      {
        name: "Herat Cultural Heritage Tourism Complex",
        location: "Herat Historic District",
        investment: "$800M",
        status: "Planning",
        timeline: "2028-2033",
        description: "Comprehensive tourism infrastructure preserving UNESCO sites and promoting cultural tourism"
      },
      {
        name: "Herat Agricultural Processing Hub",
        location: "Herat Agricultural Zone",
        investment: "$650M",
        status: "Under Construction",
        timeline: "2026-2029",
        description: "Modern agricultural processing facilities for fruits, grains, and agricultural products"
      },
      {
        name: "Herat Border Infrastructure Enhancement",
        location: "Herat Border Crossings",
        investment: "$550M",
        status: "Under Construction",
        timeline: "2026-2028",
        description: "Border infrastructure improvements for enhanced trade facilitation and security"
      },
      {
        name: "Herat Textile Manufacturing Expansion",
        location: "Herat Textile District",
        investment: "$450M",
        status: "Planning",
        timeline: "2027-2030",
        description: "Expansion of textile and carpet manufacturing facilities with modern equipment"
      },
    ]}
    opportunities={[
      "International trade zone development and border commerce",
      "Manufacturing industrial parks and production facilities",
      "Cultural tourism infrastructure and heritage preservation",
      "Agricultural processing plants and value addition",
      "Logistics and warehousing facilities",
      "Textile and carpet industry expansion",
      "Border infrastructure enhancement",
      "Energy project development",
      "Transportation network improvement",
      "Service industries and commercial development"
    ]}
    challenges={[
      "Infrastructure modernization requires comprehensive planning and investment",
      "Water resource management needs sustainable solutions",
      "Border security coordination requires international cooperation",
      "Manufacturing competitiveness needs technology and skills upgrade",
      "Tourism infrastructure development requires preservation and development balance",
      "Trade facilitation needs streamlined processes",
      "Energy infrastructure expansion requires diversified sources"
    ]}
    policies={[
      "Trade Zone Development Regulations promoting international commerce",
      "Manufacturing Investment Incentives supporting industrial growth",
      "Cultural Heritage Protection Laws ensuring preservation",
      "Border Trade Facilitation Framework enabling smooth commerce",
      "Agricultural Processing Support Policies promoting value addition",
      "Tourism Development Guidelines ensuring sustainable growth",
      "Infrastructure Development Standards ensuring quality"
    ]}
    partners={[
      "International Development Banks",
      "Manufacturing Corporations",
      "Tourism Organizations",
      "Trade Facilitation Agencies",
      "Cultural Heritage Institutions",
      "Agricultural Organizations",
      "Infrastructure Developers"
    ]}
    keyResources={[
      "Trade Routes",
      "Cultural Heritage",
      "Agricultural Land",
      "Manufacturing Base",
      "Border Access",
      "Strategic Location",
      "Textile Industry"
    ]}
    infrastructure={{
      roads: "1,500km",
      energy: "850MW",
      water: "78%",
      telecom: "85%"
    }}
  />
);

export default ProvinceComprehensiveHerat;
