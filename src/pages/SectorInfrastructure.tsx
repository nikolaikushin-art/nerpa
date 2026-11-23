import { Building2 } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { InfrastructureMegaSections } from "@/components/InfrastructureMegaSections";
const infraImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/highway-bridge-mountains.jpg";

const SectorInfrastructure = () => (
  <>
  <SectorPageLayout
    title="Infrastructure & Transport"
    subtitle="National Connectivity"
    heroImage={infraImage}
    icon={Building2}
    overview="Afghanistan's infrastructure renaissance encompasses 10,000km of modern highways, 2,000km of railway, 5 international airports, 100+ major bridges, and comprehensive urban transit systems. The infrastructure sector represents the single largest investment category under NERPA at $50 billion over 15 years, creating the physical foundation upon which all other sectors depend. From mountain highways linking remote provinces to international airports enabling global connectivity, from railway corridors connecting Central and South Asia to smart city infrastructure, every project contributes to uniting the nation and enabling economic growth. The construction boom is creating 1 million+ direct and indirect jobs while transforming Afghanistan's position as a regional trade and transit hub."
    stats={[
      { value: "10,000km", label: "Roads Planned" },
      { value: "2,000km", label: "Rail Network" },
      { value: "$50B", label: "Total Investment" },
      { value: "1M+", label: "Jobs Created" },
    ]}
    historicalData={[
      { name: "2016", growth: 4, investment: 200 },
      { name: "2017", growth: 5, investment: 250 },
      { name: "2018", growth: 6, investment: 300 },
      { name: "2019", growth: 5, investment: 280 },
      { name: "2020", growth: 3, investment: 200 },
      { name: "2021", growth: 7, investment: 350 },
      { name: "2022", growth: 10, investment: 500 },
      { name: "2023", growth: 14, investment: 800 },
      { name: "2024", growth: 18, investment: 1200 },
      { name: "2025", growth: 22, investment: 1800 },
    ]}
    projectionData={[
      { name: "2025", baseline: 2300, optimistic: 3200, conservative: 1800 },
      { name: "2027", baseline: 3600, optimistic: 5400, conservative: 2700 },
      { name: "2029", baseline: 5400, optimistic: 9000, conservative: 4000 },
      { name: "2031", baseline: 7600, optimistic: 13500, conservative: 5800 },
      { name: "2033", baseline: 10000, optimistic: 18000, conservative: 7700 },
      { name: "2035", baseline: 13000, optimistic: 23000, conservative: 10000 },
    ]}
    investmentByRegion={[
      { name: "Kabul", value: 5000 },
      { name: "Herat", value: 3500 },
      { name: "Balkh", value: 3000 },
      { name: "Kandahar", value: 2800 },
      { name: "Nangarhar", value: 2200 },
      { name: "Kunduz", value: 1800 },
      { name: "Bamyan", value: 1500 },
      { name: "Helmand", value: 1200 },
    ]}
    sectorBreakdown={[
      { name: "Highways", value: 30, color: "hsl(0, 0%, 60%)" },
      { name: "Railways", value: 22, color: "hsl(217, 91%, 60%)" },
      { name: "Airports", value: 12, color: "hsl(199, 89%, 48%)" },
      { name: "Urban Transit", value: 10, color: "hsl(142, 71%, 45%)" },
      { name: "Bridges", value: 10, color: "hsl(47, 96%, 53%)" },
      { name: "Housing", value: 8, color: "hsl(262, 83%, 58%)" },
      { name: "Smart Cities", value: 8, color: "hsl(25, 95%, 53%)" },
    ]}
    keyProjects={[
      { name: "Ring Road Completion", location: "National", investment: "$5B", status: "Under Construction", timeline: "2025–2032", description: "Complete 3,360km national ring road connecting all major cities with modern dual-carriageway highway." },
      { name: "Kabul-Mazar Railway", location: "Northern Corridor", investment: "$3.5B", status: "Under Construction", timeline: "2026–2032", description: "500km railway connecting Kabul to Mazar-i-Sharif with extension to Uzbekistan border." },
      { name: "Kabul International Airport", location: "Kabul", investment: "$1.5B", status: "Under Construction", timeline: "2026–2030", description: "New international terminal with 10M passenger annual capacity and modern cargo facilities." },
      { name: "Herat-Chabahar Corridor", location: "Western Afghanistan", investment: "$2.5B", status: "Planned", timeline: "2027–2034", description: "Road and rail corridor connecting Herat to Iran's Chabahar port for ocean trade access." },
      { name: "Salang Tunnel Upgrade", location: "Parwan Province", investment: "$800M", status: "Under Construction", timeline: "2025–2028", description: "Modern twin-bore tunnel replacing the aging Salang Pass crossing, enabling year-round north-south transit." },
      { name: "Kabul Metro Line 1", location: "Kabul", investment: "$2B", status: "Planned", timeline: "2028–2035", description: "20km urban metro line connecting airport to city centre with 15 stations serving 500,000 daily riders." },
      { name: "Bridge Building Programme", location: "Nationwide", investment: "$1.2B", status: "Under Construction", timeline: "2025–2035", description: "100+ major bridges connecting communities across rivers and mountain valleys." },
      { name: "Smart Highway System", location: "Major Corridors", investment: "$500M", status: "Planned", timeline: "2028–2033", description: "Intelligent transport system with real-time monitoring, emergency services, and truck weigh stations." },
      { name: "Regional Airport Network", location: "5 Cities", investment: "$800M", status: "Planned", timeline: "2027–2032", description: "Upgraded airports in Herat, Mazar, Kandahar, Jalalabad, and Bamyan with domestic and international capacity." },
    ]}
    opportunities={[
      "Highway construction contracts — $5B+ in road building projects over the next decade requiring international contractors",
      "Railway development — 2,000km of new railway creating Central-South Asia trade connectivity valued at $3.5B+",
      "Airport development and management — 5 international airports requiring design, construction, and operational expertise",
      "Urban transit systems — bus rapid transit and metro projects in Kabul, Herat, and Mazar-i-Sharif",
      "Construction materials manufacturing — cement, steel, and aggregates for the $50B construction programme",
      "Engineering consultancy services — project management, design, and supervision for mega-infrastructure projects",
      "Smart infrastructure technology — intelligent transport systems, traffic management, and infrastructure monitoring",
      "PPP opportunities — toll roads, airport concessions, and transit operation franchises",
    ]}
    challenges={[
      "Mountainous terrain requiring advanced engineering solutions — addressed through tunnel boring, bridge engineering, and avalanche protection",
      "Construction workforce scaling — 500,000 construction workers being trained through vocational programmes and international partnerships",
      "Financing large-scale projects — multilateral development bank loans, sovereign bonds, and PPP structures",
      "Environmental impact management — comprehensive EIA requirements with reforestation and habitat protection programmes",
      "Land acquisition — transparent compensation frameworks and community resettlement programmes",
      "Maintenance capacity — establishing national highway authority and rail operations company with long-term funding",
    ]}
    policies={[
      "National Infrastructure Investment Act 2026 — $50B 15-year investment plan with transparent procurement",
      "PPP Framework — enabling private investment in infrastructure through concession and BOT arrangements",
      "Transit Corridor Agreements — bilateral treaties with Pakistan, Iran, Uzbekistan, and Tajikistan",
      "Construction Standards — adopting international engineering standards for all infrastructure projects",
      "Environmental Protection Requirements — mandatory EIA and green infrastructure for all projects above $10M",
      "Local Content Policy — requiring 40%+ Afghan labour, materials, and subcontractor participation",
      "Right of Way Act — streamlined land acquisition with fair compensation and judicial review",
      "Infrastructure Maintenance Fund — dedicated funding from user fees and fuel levies for ongoing upkeep",
    ]}
    partners={[
      "World Bank Transport", "Asian Development Bank", "Asian Infrastructure Investment Bank (AIIB)",
      "Islamic Development Bank", "JICA Infrastructure", "Korean EXIM Bank", "China Communications Construction",
      "Turkish Construction Association", "Indian NHAI Advisory", "German KfW Development Bank",
      "USAID Infrastructure", "EU Connectivity Initiative", "Saudi Fund for Development",
      "UAE Infrastructure Investment", "EBRD Central Asia", "UN-Habitat Urban Programme",
    ]}
  />
  <InfrastructureMegaSections />
  </>
);

export default SectorInfrastructure;
