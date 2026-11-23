import { MapPin } from "lucide-react";
import { ProvincePageLayout } from "@/components/ProvincePageLayout";
const kabulImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-skyline.jpg";

const ProvinceComprehensiveKabul = () => (
  <ProvincePageLayout
    title="Kabul"
    subtitle="Capital & Economic Hub"
    heroImage={kabulImage}
    icon={MapPin}
    overview="Kabul, the capital and largest city of Afghanistan, serves as the political, economic, and cultural heart of the nation. With a population of 4.6 million, Kabul is the primary hub for technology, finance, and government services. The city offers unparalleled opportunities for investment in urban development, digital infrastructure, service industries, and smart city initiatives. As Afghanistan's gateway to the world, Kabul hosts the country's largest international airport, major financial institutions, leading universities, and a rapidly growing technology startup ecosystem. The province's strategic location, combined with its concentration of human capital and institutional infrastructure, positions it as the engine of Afghanistan's economic transformation under NERPA."
    stats={[
      { value: "4.6M", label: "Population" },
      { value: "$8.5B", label: "Investment" },
      { value: "120+", label: "Projects" },
      { value: "250K+", label: "Jobs" },
    ]}
    historicalData={[
      { name: "2016", growth: 3.2, investment: 1200 },
      { name: "2017", growth: 4.1, investment: 1500 },
      { name: "2018", growth: 4.8, investment: 1800 },
      { name: "2019", growth: 5.2, investment: 2100 },
      { name: "2020", growth: 3.8, investment: 1900 },
      { name: "2021", growth: 5.5, investment: 2500 },
      { name: "2022", growth: 6.0, investment: 3200 },
      { name: "2023", growth: 6.2, investment: 4100 },
      { name: "2024", growth: 6.5, investment: 5200 },
      { name: "2025", growth: 6.8, investment: 6500 },
    ]}
    projectionData={[
      { name: "2025", baseline: 7000, optimistic: 9000, conservative: 5500 },
      { name: "2027", baseline: 10000, optimistic: 14000, conservative: 8000 },
      { name: "2029", baseline: 15000, optimistic: 21000, conservative: 12000 },
      { name: "2031", baseline: 21000, optimistic: 30000, conservative: 17000 },
      { name: "2033", baseline: 28000, optimistic: 40000, conservative: 23000 },
      { name: "2035", baseline: 35000, optimistic: 50000, conservative: 28000 },
    ]}
    investmentBySector={[
      { name: "Technology", value: 2500 },
      { name: "Infrastructure", value: 2200 },
      { name: "Finance", value: 1800 },
      { name: "Real Estate", value: 1200 },
      { name: "Education", value: 800 },
      { name: "Healthcare", value: 600 },
    ]}
    sectorBreakdown={[
      { name: "Technology", value: 30, color: "hsl(262, 83%, 58%)" },
      { name: "Infrastructure", value: 25, color: "hsl(25, 95%, 53%)" },
      { name: "Finance", value: 20, color: "hsl(47, 96%, 53%)" },
      { name: "Real Estate", value: 15, color: "hsl(142, 71%, 45%)" },
      { name: "Education", value: 5, color: "hsl(217, 91%, 60%)" },
      { name: "Healthcare", value: 5, color: "hsl(0, 84%, 60%)" },
    ]}
    keyProjects={[
      {
        name: "Kabul Smart City Initiative",
        location: "Kabul City",
        investment: "$2.5B",
        status: "Under Construction",
        timeline: "2026-2030",
        description: "Comprehensive smart city infrastructure including digital governance, IoT networks, and sustainable urban systems"
      },
      {
        name: "Kabul Technology Park",
        location: "Kabul Industrial Zone",
        investment: "$1.8B",
        status: "Planning",
        timeline: "2027-2032",
        description: "State-of-the-art technology hub with innovation centers, startup incubators, and research facilities"
      },
      {
        name: "Financial District Expansion",
        location: "Central Kabul",
        investment: "$1.2B",
        status: "Under Construction",
        timeline: "2026-2029",
        description: "Modern banking and financial services district with international standards"
      },
      {
        name: "Urban Transit System",
        location: "Greater Kabul",
        investment: "$950M",
        status: "Planning",
        timeline: "2028-2032",
        description: "Comprehensive public transportation network including metro and bus rapid transit"
      },
      {
        name: "Kabul International Airport Expansion",
        location: "Kabul Airport",
        investment: "$800M",
        status: "Under Construction",
        timeline: "2026-2028",
        description: "Major airport expansion to handle 10M+ passengers annually"
      },
      {
        name: "Affordable Housing Program",
        location: "Kabul Metropolitan",
        investment: "$1.5B",
        status: "Planning",
        timeline: "2027-2035",
        description: "100,000 affordable housing units with modern amenities"
      },
    ]}
    opportunities={[
      "Smart city infrastructure and digital transformation",
      "Technology parks and innovation districts",
      "Financial services expansion and fintech",
      "Urban infrastructure modernization",
      "Real estate and commercial development",
      "Education and research institutions",
      "Healthcare facilities and medical tourism",
      "Logistics and transportation hubs",
      "Renewable energy projects",
      "Cultural and tourism infrastructure"
    ]}
    challenges={[
      "Urban planning and congestion management requires integrated approach",
      "Infrastructure capacity expansion needs phased development",
      "Affordable housing development requires public-private partnerships",
      "Environmental sustainability needs green building standards",
      "Traffic and transportation systems need comprehensive solutions",
      "Water and waste management requires modern infrastructure",
      "Energy security needs diversified sources"
    ]}
    policies={[
      "Investment Protection Framework ensuring security and returns",
      "Smart City Development Regulations promoting innovation",
      "Financial Services Modernization Act enabling fintech growth",
      "Urban Planning Standards ensuring sustainable development",
      "Technology Innovation Incentives supporting startups",
      "Real Estate Development Guidelines promoting affordable housing",
      "Environmental Protection Standards ensuring sustainability"
    ]}
    partners={[
      "International Development Banks",
      "Technology Corporations",
      "Financial Institutions",
      "Urban Planning Consultants",
      "Infrastructure Developers",
      "Educational Institutions",
      "Healthcare Providers"
    ]}
    keyResources={[
      "Strategic Location",
      "Human Capital",
      "Government Institutions",
      "Financial Services",
      "Technology Hub",
      "International Airport",
      "Educational Centers"
    ]}
    infrastructure={{
      roads: "2,800km",
      energy: "1.2GW",
      water: "92%",
      telecom: "98%"
    }}
  />
);

export default ProvinceComprehensiveKabul;
