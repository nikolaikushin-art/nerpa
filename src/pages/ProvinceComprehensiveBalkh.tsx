import { MapPin } from "lucide-react";
import { ProvincePageLayout } from "@/components/ProvincePageLayout";
const balkhImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/balkh-blue-mosque.jpg";

const ProvinceComprehensiveBalkh = () => (
  <ProvincePageLayout
    title="Balkh"
    subtitle="North Region • Mazar-i-Sharif"
    heroImage={balkhImage}
    icon={MapPin}
    overview="Balkh, with its capital Mazar-i-Sharif, is a major northern economic center known for its agricultural productivity, industrial development, and strategic location on trade routes to Central Asia. With a population of 1.5 million, the province offers opportunities in agriculture, manufacturing, energy, and regional trade. Mazar-i-Sharif's famous Blue Mosque (Shrine of Ali) is a major cultural and religious site, attracting visitors from across the region. The province's industrial base, combined with its agricultural productivity and strategic trade location, positions it as a key economic hub in northern Afghanistan. Under NERPA, Balkh is developing comprehensive industrial zones, agricultural processing facilities, energy infrastructure, and trade facilitation systems to maximize its economic potential and regional connectivity."
    stats={[
      { value: "1.5M", label: "Population" },
      { value: "$3.2B", label: "Investment" },
      { value: "48+", label: "Projects" },
      { value: "125K+", label: "Jobs" },
    ]}
    historicalData={[
      { name: "2016", growth: 3.2, investment: 600 },
      { name: "2017", growth: 4.0, investment: 750 },
      { name: "2018", growth: 4.6, investment: 900 },
      { name: "2019", growth: 5.0, investment: 1100 },
      { name: "2020", growth: 3.8, investment: 1000 },
      { name: "2021", growth: 4.8, investment: 1300 },
      { name: "2022", growth: 5.0, investment: 1700 },
      { name: "2023", growth: 5.1, investment: 2200 },
      { name: "2024", growth: 5.2, investment: 2800 },
      { name: "2025", growth: 5.3, investment: 3500 },
    ]}
    projectionData={[
      { name: "2025", baseline: 3800, optimistic: 5500, conservative: 2800 },
      { name: "2027", baseline: 5700, optimistic: 8200, conservative: 4300 },
      { name: "2029", baseline: 8300, optimistic: 12000, conservative: 6300 },
      { name: "2031", baseline: 11200, optimistic: 16200, conservative: 8500 },
      { name: "2033", baseline: 14200, optimistic: 20300, conservative: 10800 },
      { name: "2035", baseline: 17100, optimistic: 24300, conservative: 13000 },
    ]}
    investmentBySector={[
      { name: "Manufacturing", value: 1200 },
      { name: "Agriculture", value: 1000 },
      { name: "Energy", value: 800 },
      { name: "Trade", value: 700 },
      { name: "Infrastructure", value: 600 },
      { name: "Textiles", value: 500 },
    ]}
    sectorBreakdown={[
      { name: "Manufacturing", value: 28, color: "hsl(217, 91%, 60%)" },
      { name: "Agriculture", value: 23, color: "hsl(142, 71%, 45%)" },
      { name: "Energy", value: 19, color: "hsl(47, 96%, 53%)" },
      { name: "Trade", value: 16, color: "hsl(25, 95%, 53%)" },
      { name: "Infrastructure", value: 9, color: "hsl(262, 83%, 58%)" },
      { name: "Textiles", value: 5, color: "hsl(199, 89%, 48%)" },
    ]}
    keyProjects={[
      {
        name: "Mazar-i-Sharif Industrial Zone",
        location: "Mazar-i-Sharif",
        investment: "$1.2B",
        status: "Under Construction",
        timeline: "2026-2030",
        description: "Northern manufacturing center with 150 enterprises and comprehensive industrial infrastructure"
      },
      {
        name: "Balkh Gas Pipeline Infrastructure",
        location: "Balkh Province",
        investment: "$950M",
        status: "Planning",
        timeline: "2027-2032",
        description: "Energy distribution network connecting to Central Asia for gas export and domestic use"
      },
      {
        name: "Balkh Agricultural Processing Hub",
        location: "Mazar-i-Sharif Agricultural Zone",
        investment: "$800M",
        status: "Under Construction",
        timeline: "2026-2029",
        description: "Comprehensive agricultural processing facilities for cotton, grain, and oilseed production"
      },
      {
        name: "Balkh Railway Connection to Uzbekistan",
        location: "Balkh Border Area",
        investment: "$650M",
        status: "Planning",
        timeline: "2028-2032",
        description: "Regional transport link enhancing trade connectivity with Central Asian countries"
      },
      {
        name: "Balkh Energy Infrastructure",
        location: "Balkh Province",
        investment: "$550M",
        status: "Under Construction",
        timeline: "2026-2028",
        description: "Energy generation and distribution infrastructure to support industrial and residential needs"
      },
      {
        name: "Balkh Textile Manufacturing Expansion",
        location: "Mazar-i-Sharif Textile District",
        investment: "$450M",
        status: "Planning",
        timeline: "2027-2030",
        description: "Expansion of textile manufacturing facilities with modern equipment and technology"
      },
    ]}
    opportunities={[
      "Agricultural processing expansion and value addition",
      "Industrial zone development and manufacturing facilities",
      "Energy project development and infrastructure",
      "Trade infrastructure enhancement and border facilitation",
      "Manufacturing facility expansion and modernization",
      "Textile industry growth and export development",
      "Regional logistics hub development",
      "Food processing and agricultural value chains",
      "Energy export infrastructure and regional connectivity",
      "Cultural tourism and heritage preservation"
    ]}
    challenges={[
      "Industrial modernization requires technology and skills upgrade",
      "Agricultural productivity needs modern techniques and infrastructure",
      "Energy infrastructure expansion requires diversified sources and investment",
      "Trade route optimization needs infrastructure and facilitation improvements",
      "Water management requires comprehensive planning and sustainable solutions",
      "Manufacturing competitiveness needs quality and efficiency improvements",
      "Regional connectivity requires transportation and logistics infrastructure"
    ]}
    policies={[
      "Industrial Zone Development Regulations promoting manufacturing",
      "Agricultural Processing Support Policies enabling value addition",
      "Energy Development Framework ensuring sustainability",
      "Trade Facilitation Regulations promoting regional commerce",
      "Manufacturing Investment Incentives supporting industrial growth",
      "Infrastructure Development Standards ensuring quality",
      "Regional Integration Policies promoting connectivity"
    ]}
    partners={[
      "International Development Banks",
      "Manufacturing Corporations",
      "Energy Companies",
      "Agricultural Organizations",
      "Trade Facilitation Agencies",
      "Infrastructure Developers",
      "Regional Partners"
    ]}
    keyResources={[
      "Agricultural Land",
      "Industrial Base",
      "Trade Routes",
      "Energy Potential",
      "Cultural Sites",
      "Strategic Location",
      "Natural Gas"
    ]}
    infrastructure={{
      roads: "1,400km",
      energy: "720MW",
      water: "75%",
      telecom: "80%"
    }}
  />
);

export default ProvinceComprehensiveBalkh;
