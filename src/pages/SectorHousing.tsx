import { Home } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { HousingMegaSections } from "@/components/HousingMegaSections";
const housingImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/urban-housing-kabul.jpg";

const SectorHousing = () => (
  <>
  <SectorPageLayout
    title="Housing & Urban Development"
    subtitle="Urban Renaissance"
    heroImage={housingImage}
    icon={Home}
    overview="Afghanistan faces a critical housing deficit of over 2 million units, with rapid urbanisation driving demand for dignified, affordable housing and sustainable urban communities. Under NERPA, the Housing & Urban Development sector targets construction of 100,000 social housing units, development of 5 new smart city districts, urban renewal of 20+ informal settlements, and establishment of national building standards. Total investment is projected at $12 billion through 2040, transforming Afghanistan's cities into modern, liveable, and culturally resonant urban environments. From mortgage financing to green building codes, the sector creates an integrated ecosystem where every Afghan family can access safe, affordable housing within well-planned communities featuring schools, clinics, parks, and commercial facilities."
    stats={[
      { value: "100K", label: "Homes Planned" },
      { value: "5", label: "Smart City Districts" },
      { value: "$12B", label: "Investment Target" },
      { value: "5M", label: "Beneficiaries" },
    ]}
    historicalData={[
      { name: "2016", growth: 3, investment: 80 },
      { name: "2017", growth: 4, investment: 100 },
      { name: "2018", growth: 5, investment: 130 },
      { name: "2019", growth: 6, investment: 160 },
      { name: "2020", growth: 4, investment: 140 },
      { name: "2021", growth: 7, investment: 200 },
      { name: "2022", growth: 9, investment: 280 },
      { name: "2023", growth: 11, investment: 380 },
      { name: "2024", growth: 14, investment: 500 },
      { name: "2025", growth: 16, investment: 650 },
    ]}
    projectionData={[
      { name: "2025", baseline: 750, optimistic: 1000, conservative: 550 },
      { name: "2027", baseline: 1200, optimistic: 1800, conservative: 850 },
      { name: "2029", baseline: 1800, optimistic: 2900, conservative: 1300 },
      { name: "2031", baseline: 2600, optimistic: 4500, conservative: 2000 },
      { name: "2033", baseline: 3600, optimistic: 6300, conservative: 2800 },
      { name: "2035", baseline: 4800, optimistic: 8200, conservative: 3700 },
    ]}
    investmentByRegion={[
      { name: "Kabul", value: 3000 },
      { name: "Herat", value: 1500 },
      { name: "Mazar-i-Sharif", value: 1200 },
      { name: "Kandahar", value: 1000 },
      { name: "Nangarhar", value: 800 },
      { name: "Kunduz", value: 600 },
      { name: "Bamyan", value: 400 },
      { name: "Ghazni", value: 350 },
    ]}
    sectorBreakdown={[
      { name: "Social Housing", value: 30, color: "hsl(25, 95%, 53%)" },
      { name: "Smart City Districts", value: 22, color: "hsl(217, 91%, 60%)" },
      { name: "Urban Renewal", value: 18, color: "hsl(142, 71%, 45%)" },
      { name: "Commercial Mixed-Use", value: 13, color: "hsl(262, 83%, 58%)" },
      { name: "Infrastructure", value: 10, color: "hsl(47, 96%, 53%)" },
      { name: "Green Spaces", value: 7, color: "hsl(0, 84%, 60%)" },
    ]}
    keyProjects={[
      { name: "New Kabul City", location: "Kabul Province", investment: "$3B", status: "Under Construction", timeline: "2025–2035", description: "Master-planned satellite city for 500,000 residents with smart infrastructure, green spaces, and mixed-use zones." },
      { name: "National Social Housing Programme", location: "20 Cities", investment: "$4B", status: "Under Construction", timeline: "2025–2034", description: "100,000 affordable housing units for low and middle-income families with subsidised mortgages." },
      { name: "Urban Renewal Initiative", location: "Kabul, Herat, Mazar", investment: "$2B", status: "Planned", timeline: "2027–2035", description: "Transforming 20+ informal settlements into planned communities with full infrastructure and services." },
      { name: "Green Building Standards", location: "Nationwide", investment: "$200M", status: "Operational", timeline: "2025–ongoing", description: "Mandatory energy-efficient design codes reducing building energy consumption by 40%." },
      { name: "Affordable Mortgage Programme", location: "Nationwide", investment: "$1.5B", status: "Operational", timeline: "2025–2040", description: "Government-backed mortgages with 3% interest enabling home ownership for 200,000+ families." },
      { name: "Heritage District Restoration", location: "Herat, Ghazni, Balkh", investment: "$500M", status: "Under Construction", timeline: "2026–2032", description: "Preserving historic urban fabric while upgrading infrastructure and creating cultural tourism destinations." },
    ]}
    opportunities={[
      "Residential construction — 100,000+ housing units requiring design, construction, and finishing across 20 cities",
      "Smart city technology — IoT infrastructure, smart grids, intelligent transport, and urban management platforms",
      "Construction materials manufacturing — cement, steel, glass, ceramics, and prefabricated building components",
      "Mortgage and housing finance — banking products, insurance, and financial services for home buyers",
      "Urban planning and architecture — master planning, architectural design, and landscape architecture services",
      "Green building technology — energy-efficient systems, solar integration, water recycling, and smart home solutions",
      "Property management — residential and commercial property management and maintenance services",
      "Interior design and furnishing — home furnishing, appliances, and interior design services for new housing stock",
    ]}
    challenges={[
      "Land tenure and registration — comprehensive land reform and digital cadastre system being implemented",
      "Construction workforce skills — vocational training programmes producing 50,000 skilled construction workers",
      "Affordability gap — subsidised mortgage programmes and rental housing bridging income-housing cost gap",
      "Urban sprawl management — strict zoning and density requirements promoting compact, walkable development",
      "Seismic resilience — earthquake-resistant building codes mandatory for all new construction nationwide",
      "Cultural design integration — architectural guidelines preserving Afghan aesthetic traditions in modern buildings",
    ]}
    policies={[
      "National Housing Policy 2026 — right to adequate housing with government obligation to facilitate access",
      "Building Code 2026 — seismic, energy, accessibility, and fire safety standards for all construction",
      "Land Registration Reform — digital cadastre providing secure tenure for all property owners",
      "Mortgage Finance Regulation — consumer protection, interest rate caps, and lending standards",
      "Urban Planning Act — mandatory master plans for all cities with public participation requirements",
      "Green Building Standard — energy efficiency, water conservation, and material sustainability requirements",
      "Rental Housing Protection — tenant rights, rent stabilisation, and dispute resolution frameworks",
      "Construction Industry Licensing — contractor qualification, insurance, and warranty requirements",
    ]}
    partners={[
      "UN-Habitat", "World Bank Urban Development", "Asian Development Bank", "Islamic Development Bank",
      "Aga Khan Trust for Culture", "JICA Urban Development", "GIZ Urban Programme", "Turkish Housing Authority (TOKI)",
      "Saudi Housing Fund", "UAE Urban Development", "Korean Land & Housing Corp", "Indian Housing Mission",
      "British Urban Planning Council", "German Construction Advisory", "Swiss Architecture Foundation", "Dutch Urban Solutions",
    ]}
  />
  <HousingMegaSections />
  </>
);

export default SectorHousing;
