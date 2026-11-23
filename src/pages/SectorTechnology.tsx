import { Cpu } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { TechnologyMegaSections } from "@/components/TechnologyMegaSections";
const techImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/tech-startup-kabul.jpg";

const SectorTechnology = () => (
  <>
  <SectorPageLayout
    title="Digital Technology & AI"
    subtitle="Technology Leadership"
    heroImage={techImage}
    icon={Cpu}
    overview="Afghanistan's digital transformation represents a generational leap forward, driven by one of the world's youngest populations with a median age of 18 years. The technology sector under NERPA encompasses national broadband infrastructure, e-government services, artificial intelligence research, cybersecurity, and a thriving startup ecosystem. With 1,000+ tech startups targeted by 2035, coding academies training 50,000 developers, and technology parks establishing innovation hubs across major cities, Afghanistan is positioning itself as a regional technology leader. The sector represents a $2 billion investment opportunity growing at 25% annually, creating 50,000+ high-skilled jobs and enabling digital service exports to regional and global markets."
    stats={[
      { value: "100%", label: "Urban Broadband Target" },
      { value: "50K+", label: "Tech Jobs" },
      { value: "1,000", label: "Startups Target" },
      { value: "25%", label: "Annual Growth" },
    ]}
    historicalData={[
      { name: "2016", growth: 5, investment: 20 },
      { name: "2017", growth: 8, investment: 35 },
      { name: "2018", growth: 12, investment: 50 },
      { name: "2019", growth: 15, investment: 70 },
      { name: "2020", growth: 20, investment: 100 },
      { name: "2021", growth: 18, investment: 90 },
      { name: "2022", growth: 22, investment: 130 },
      { name: "2023", growth: 25, investment: 200 },
      { name: "2024", growth: 28, investment: 280 },
      { name: "2025", growth: 30, investment: 380 },
    ]}
    projectionData={[
      { name: "2025", baseline: 450, optimistic: 650, conservative: 350 },
      { name: "2027", baseline: 800, optimistic: 1300, conservative: 600 },
      { name: "2029", baseline: 1300, optimistic: 2700, conservative: 1000 },
      { name: "2031", baseline: 2200, optimistic: 4500, conservative: 1600 },
      { name: "2033", baseline: 3500, optimistic: 7000, conservative: 2500 },
      { name: "2035", baseline: 5000, optimistic: 10000, conservative: 3800 },
    ]}
    investmentByRegion={[
      { name: "Kabul", value: 1500 },
      { name: "Herat", value: 500 },
      { name: "Balkh", value: 350 },
      { name: "Nangarhar", value: 250 },
      { name: "Kandahar", value: 200 },
      { name: "Kunduz", value: 150 },
      { name: "Bamyan", value: 100 },
      { name: "Panjshir", value: 80 },
    ]}
    sectorBreakdown={[
      { name: "Software Dev", value: 28, color: "hsl(262, 83%, 58%)" },
      { name: "E-Commerce", value: 18, color: "hsl(142, 71%, 45%)" },
      { name: "Fintech", value: 15, color: "hsl(217, 91%, 60%)" },
      { name: "Telecom", value: 15, color: "hsl(199, 89%, 48%)" },
      { name: "AI/ML", value: 10, color: "hsl(47, 96%, 53%)" },
      { name: "Cybersecurity", value: 8, color: "hsl(0, 84%, 60%)" },
      { name: "Data Centres", value: 6, color: "hsl(25, 95%, 53%)" },
    ]}
    keyProjects={[
      { name: "Kabul Technology Park", location: "Kabul", investment: "$300M", status: "Under Construction", timeline: "2026–2029", description: "200-acre innovation campus with offices, incubators, data centre, and maker spaces for 500+ companies." },
      { name: "National Broadband Backbone", location: "Nationwide", investment: "$800M", status: "Under Construction", timeline: "2025–2032", description: "Fibre-optic backbone connecting all 34 provincial capitals with 10Gbps+ capacity." },
      { name: "E-Government Platform", location: "Kabul", investment: "$150M", status: "Operational", timeline: "2024–ongoing", description: "100+ government services digitised including ID, licensing, tax, and land registration." },
      { name: "AI Research Centre", location: "Kabul", investment: "$100M", status: "Planned", timeline: "2027–2030", description: "Artificial intelligence research lab focusing on agriculture, health, and natural language processing for Dari/Pashto." },
      { name: "Coding Academy Network", location: "10 Cities", investment: "$50M", status: "Operational", timeline: "2025–ongoing", description: "Free coding bootcamps training 5,000 developers annually in web, mobile, and cloud technologies." },
      { name: "National Data Centre", location: "Kabul Province", investment: "$200M", status: "Under Construction", timeline: "2026–2028", description: "Tier-3 data centre providing secure cloud hosting for government, enterprise, and startup applications." },
    ]}
    opportunities={[
      "Software development and IT outsourcing — competitive labour costs with young, educated workforce",
      "E-commerce platforms — online retail market projected to reach $500M by 2030 from near-zero base",
      "Fintech solutions — mobile payments, digital banking, and microfinance serving 30M+ unbanked population",
      "Artificial intelligence — Dari/Pashto natural language processing, agricultural AI, and healthcare diagnostics",
      "Cybersecurity services — growing demand from government, banking, and enterprise sectors",
      "Telecommunications infrastructure — 5G rollout and rural connectivity solutions",
      "EdTech platforms — digital learning solutions for 10M+ students and lifelong learners",
      "GovTech solutions — e-government, digital identity, and smart city management platforms",
    ]}
    challenges={[
      "Digital literacy gap being addressed through nationwide computer literacy programmes in schools and community centres",
      "Internet connectivity in rural areas expanding through satellite, fixed wireless, and community network solutions",
      "Cybersecurity capacity building through national security operations centre and workforce training programmes",
      "Brain drain mitigation through competitive salaries, startup equity programmes, and quality of life improvements",
      "Regulatory framework modernisation including data protection, e-commerce, and digital signature legislation",
      "Power reliability for tech infrastructure addressed through dedicated clean energy supply and backup systems",
    ]}
    policies={[
      "Digital Afghanistan Policy 2026 — comprehensive framework for national digital transformation",
      "Data Protection and Privacy Act — GDPR-aligned regulation protecting citizen data and enabling cross-border data flows",
      "Startup Incentive Programme — tax exemptions, grants, and incubator access for technology startups",
      "E-Commerce Regulation — consumer protection, digital payments, and electronic contract enforcement",
      "Cybersecurity National Strategy — protecting critical infrastructure and building national cyber defence capabilities",
      "Digital Literacy Curriculum — mandatory computer science education from primary school through university",
      "Foreign Tech Investment Framework — streamlined visa, licensing, and tax arrangements for international tech companies",
      "Open Data Policy — making government datasets available for innovation, research, and transparency",
    ]}
    partners={[
      "World Bank Digital Development", "USAID Digital Strategy", "Google Developer Programme",
      "Microsoft AI for Good", "Huawei Technology Partnership", "Samsung Innovation Lab",
      "MIT Media Lab Advisory", "Stanford Digital Economy Lab", "Estonian e-Governance Academy",
      "Indian IT Association (NASSCOM)", "Korean ICT Advisory", "Japanese Digital Agency (JICA)",
      "UAE Smart Government Initiative", "Turkish Technology Cooperation", "German Digital Development (GIZ)",
      "Alibaba Cloud Partnership",
    ]}
  />
  <TechnologyMegaSections />
  </>
);

export default SectorTechnology;
