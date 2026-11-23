import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search, Filter, Grid, List, ChevronDown, ChevronUp,
  Pickaxe, Wheat, Zap, Heart, GraduationCap, Droplets,
  Building2, Cpu, Truck, Factory, Gem, Sun, Stethoscope,
  DollarSign, Cog, TreeDeciduous, Shield, Package, Lightbulb,
  Globe, Target, TrendingUp, MapPin, Users, Award, Briefcase,
  LucideIcon, X
} from "lucide-react";

// Import all sector images
const copperMegaMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/copper-mega-mine.jpg";
const lithiumExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/lithium-extraction.jpg";
const saffronHarvestWomen = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/saffron-harvest-women.jpg";
const greenhouseComplex = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/greenhouse-complex.jpg";
const constructionTowers = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/construction-towers.jpg";
const windTurbineFarm = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/wind-turbine-farm.jpg";
const surgeryRoom = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/surgery-room.jpg";
const universityCampus = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/university-campus.jpg";
const hydroDamMassive = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/hydro-dam-massive.jpg";
const bankHeadquarters = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/bank-headquarters.jpg";
const techStartupOffice = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/tech-startup-office.jpg";
const logisticsMegaHub = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/logistics-mega-hub.jpg";
const rareEarthPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/rare-earth-plant.jpg";
const marbleQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/marble-quarry.jpg";
const textileFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/textile-factory.jpg";
const pharmaFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/pharma-factory.jpg";
const foodProcessing = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/food-processing.jpg";
const evCharging = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/ev-charging.jpg";
const telecomTower = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/telecom-tower.jpg";
const jewelryWorkshop = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/jewelry-workshop.jpg";
const airportTerminal = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/airport-terminal.jpg";
const cementFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/cement-factory.jpg";
const aquacultureFarm = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/aquaculture-farm.jpg";
const steelPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/steel-plant.jpg";
const carpetWeavingMaster = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/carpet-weaving-master.jpg";
const solarManufacturing = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/solar-manufacturing.jpg";
const desalinationPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/desalination-plant.jpg";
const vocationalTraining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/vocational-training.jpg";
const ecommerceCenter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/ecommerce-center.jpg";
const woolProcessing = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/wool-processing.jpg";
const railwayConstruction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/railway-construction.jpg";
const honeyProduction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/honey-production.jpg";
const glassFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/glass-factory.jpg";
const agriMachinery = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/agri-machinery.jpg";
const oliveOilProduction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/olive-oil-production.jpg";
const medicalEquipment = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/medical-equipment.jpg";
const recyclingPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/recycling-plant.jpg";
const leatherGoods = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/leather-goods.jpg";
const batteryStorage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/battery-storage.jpg";
const ceramicsFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/ceramics-factory.jpg";
const fertilizerPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/fertilizer-plant.jpg";
const printingFacility = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/printing-facility.jpg";
const spiceProcessing = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/spice-processing.jpg";
const furnitureWorkshop = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/furniture-workshop.jpg";
const biomassPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/biomass-plant.jpg";
const driedFruitFacility = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/dried-fruit-facility.jpg";
const dairyPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/dairy-plant.jpg";
const electronicsAssembly = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/electronics-assembly.jpg";
const gasProcessing = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/gas-processing.jpg";
const cottonGinning = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/cotton-ginning.jpg";
const dataCenterFacility = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/data-center-facility.jpg";
const smartCityVision = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/smart-city-vision.jpg";
const agriculturalResearch = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/agricultural-research.jpg";
const highwayBridgeMountains = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/highway-bridge-mountains.jpg";

interface Sector {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  icon: LucideIcon;
  investment: string;
  jobs: string;
  timeline: string;
  keyPoints: string[];
  stats: { value: string; label: string }[];
}

const categories = [
  "All Sectors",
  "Mining & Minerals",
  "Agriculture & Food",
  "Energy & Sustainability",
  "Manufacturing",
  "Technology & Digital",
  "Healthcare & Pharma",
  "Infrastructure",
  "Finance & Trade",
  "Education & Training",
];

const sectors: Sector[] = [
  {
    id: "copper-mining",
    title: "Copper Mining Operations",
    category: "Mining & Minerals",
    description: "Large-scale copper extraction from Aynak and other major deposits.",
    longDescription: "Afghanistan's copper reserves are among the largest in the world, with the Aynak deposit as a flagship project. Modern extraction techniques combined with sustainable practices ensure yield while protecting the environment and benefiting local communities.",
    image: copperMegaMine,
    icon: Pickaxe,
    investment: "$5B",
    jobs: "25,000",
    timeline: "2027-2033",
    keyPoints: [
      "World-class copper ore at Aynak",
      "Advanced extraction technology deployment",
      "Environmental impact mitigation systems",
      "Local workforce training programmes"
    ],
    stats: [
      { value: "$5B", label: "Investment" },
      { value: "25K", label: "Jobs" },
      { value: "Major", label: "Reserves" }
    ]
  },
  {
    id: "lithium-extraction",
    title: "Lithium Extraction & Processing",
    category: "Mining & Minerals",
    description: "Critical lithium deposits essential for global battery technology.",
    longDescription: "Afghanistan possesses some of the world's largest lithium deposits, a critical mineral for electric vehicle batteries and renewable energy storage. Developing these resources positions Afghanistan as a key player in the global clean energy transition.",
    image: lithiumExtraction,
    icon: Gem,
    investment: "$3B",
    jobs: "15,000",
    timeline: "2027-2033",
    keyPoints: [
      "Critical for electric vehicle batteries",
      "Global clean energy supply chain role",
      "Sustainable extraction methods",
      "International partnership opportunities"
    ],
    stats: [
      { value: "$3B", label: "Investment" },
      { value: "15K", label: "Jobs" },
      { value: "Top 5", label: "Global" }
    ]
  },
  {
    id: "rare-earth-processing",
    title: "Rare Earth Element Processing",
    category: "Mining & Minerals",
    description: "Processing facilities for strategic rare earth minerals.",
    longDescription: "Rare earth elements are essential for advanced technologies including smartphones, wind turbines, and electric vehicles. Afghanistan's substantial reserves can help diversify global supply chains currently dominated by a few countries.",
    image: rareEarthPlant,
    icon: Gem,
    investment: "$2B",
    jobs: "8,000",
    timeline: "2027-2033",
    keyPoints: [
      "Strategic mineral processing",
      "Supply chain diversification",
      "High-tech manufacturing support",
      "Export to global markets"
    ],
    stats: [
      { value: "$2B", label: "Investment" },
      { value: "8K", label: "Jobs" },
      { value: "17", label: "Elements" }
    ]
  },
  {
    id: "marble-quarrying",
    title: "Marble & Stone Quarrying",
    category: "Mining & Minerals",
    description: "Premium marble and construction stone extraction.",
    longDescription: "Afghanistan's marble deposits produce some of the finest quality stone in the world, prized by architects and builders globally. Modern quarrying operations ensure sustainable extraction while maximising value through processing facilities.",
    image: marbleQuarry,
    icon: Pickaxe,
    investment: "$500M",
    jobs: "12,000",
    timeline: "2027-2033",
    keyPoints: [
      "Premium quality marble deposits",
      "Export to luxury construction markets",
      "Value-added processing facilities",
      "Artisan stone cutting training"
    ],
    stats: [
      { value: "$500M", label: "Investment" },
      { value: "12K", label: "Jobs" },
      { value: "Export", label: "Ready" }
    ]
  },
  {
    id: "saffron-cultivation",
    title: "Saffron Cultivation & Export",
    category: "Agriculture & Food",
    description: "World's finest saffron production in Herat province.",
    longDescription: "Afghan saffron has won international quality awards, beating Iranian competitors in blind taste tests. The industry provides income for thousands of farming families while establishing Afghanistan's reputation for premium agricultural products.",
    image: saffronHarvestWomen,
    icon: Wheat,
    investment: "$200M",
    jobs: "50,000",
    timeline: "2027-2033",
    keyPoints: [
      "Award-winning quality saffron",
      "Women-led harvesting operations",
      "Premium international pricing",
      "Organic certification programmes"
    ],
    stats: [
      { value: "$200M", label: "Investment" },
      { value: "50K", label: "Jobs" },
      { value: "#1", label: "Quality" }
    ]
  },
  {
    id: "greenhouse-agriculture",
    title: "Advanced Greenhouse Farming",
    category: "Agriculture & Food",
    description: "Year-round vegetable production using modern greenhouse technology.",
    longDescription: "Climate-controlled greenhouse facilities enable Afghanistan to produce fresh vegetables throughout the year, reducing import dependency and creating new export opportunities to neighbouring countries.",
    image: greenhouseComplex,
    icon: TreeDeciduous,
    investment: "$150M",
    jobs: "20,000",
    timeline: "2027-2033",
    keyPoints: [
      "Year-round production capability",
      "Water-efficient drip irrigation",
      "Climate control technology",
      "Export to regional markets"
    ],
    stats: [
      { value: "$150M", label: "Investment" },
      { value: "20K", label: "Jobs" },
      { value: "365", label: "Days" }
    ]
  },
  {
    id: "agricultural-research",
    title: "Agricultural Research Centres",
    category: "Agriculture & Food",
    description: "Advanced research facilities developing drought-resistant crops.",
    longDescription: "Research centres across Afghanistan develop crop varieties suited to local conditions, improve farming techniques, and train the next generation of agricultural scientists to ensure long-term food security.",
    image: agriculturalResearch,
    icon: Lightbulb,
    investment: "$100M",
    jobs: "5,000",
    timeline: "2027-2033",
    keyPoints: [
      "Drought-resistant crop development",
      "Soil analysis and improvement",
      "Farmer training programmes",
      "Seed bank establishment"
    ],
    stats: [
      { value: "$100M", label: "Investment" },
      { value: "5K", label: "Researchers" },
      { value: "100+", label: "Varieties" }
    ]
  },
  {
    id: "food-processing",
    title: "Food Processing Industry",
    category: "Agriculture & Food",
    description: "Modern facilities for processing and packaging Afghan produce.",
    longDescription: "Adding value to raw agricultural products through processing, packaging, and branding creates higher returns for farmers and establishes Afghan products in international markets.",
    image: foodProcessing,
    icon: Package,
    investment: "$300M",
    jobs: "30,000",
    timeline: "2027-2033",
    keyPoints: [
      "State-of-the-art processing facilities",
      "Export-quality packaging",
      "Cold chain infrastructure",
      "Brand development for exports"
    ],
    stats: [
      { value: "$300M", label: "Investment" },
      { value: "30K", label: "Jobs" },
      { value: "100%", label: "Value Add" }
    ]
  },
  {
    id: "wind-energy",
    title: "Wind Energy Development",
    category: "Energy & Sustainability",
    description: "Large-scale wind farms across Afghanistan's highland corridors.",
    longDescription: "Afghanistan's mountain corridors create ideal conditions for wind power generation. Strategic placement of wind farms in Herat, Ghazni, and other provinces provides clean, renewable energy to power economic development.",
    image: windTurbineFarm,
    icon: Sun,
    investment: "$2B",
    jobs: "10,000",
    timeline: "2027-2033",
    keyPoints: [
      "Ideal wind corridor locations",
      "2GW target capacity",
      "Grid integration infrastructure",
      "Maintenance training programmes"
    ],
    stats: [
      { value: "$2B", label: "Investment" },
      { value: "10K", label: "Jobs" },
      { value: "2GW", label: "Capacity" }
    ]
  },
  {
    id: "hydropower",
    title: "Hydroelectric Power Expansion",
    category: "Energy & Sustainability",
    description: "Major dam and hydropower projects across river systems.",
    longDescription: "Afghanistan's rivers offer tremendous hydroelectric potential. Expanding existing facilities like Kajaki Dam and constructing new projects provides reliable baseload power while managing water resources for agriculture.",
    image: hydroDamMassive,
    icon: Droplets,
    investment: "$4B",
    jobs: "15,000",
    timeline: "2027-2033",
    keyPoints: [
      "Kajaki Dam expansion",
      "New dam construction projects",
      "Irrigation system integration",
      "Flood control benefits"
    ],
    stats: [
      { value: "$4B", label: "Investment" },
      { value: "15K", label: "Jobs" },
      { value: "3GW", label: "Capacity" }
    ]
  },
  {
    id: "battery-storage",
    title: "Grid-Scale Battery Storage",
    category: "Energy & Sustainability",
    description: "Energy storage systems for renewable integration.",
    longDescription: "Battery storage facilities balance variable renewable generation, storing excess solar and wind power for use during peak demand periods and ensuring reliable electricity supply across the national grid.",
    image: batteryStorage,
    icon: Zap,
    investment: "$500M",
    jobs: "3,000",
    timeline: "2027-2033",
    keyPoints: [
      "Grid stability enhancement",
      "Peak demand management",
      "Renewable energy integration",
      "Emergency backup power"
    ],
    stats: [
      { value: "$500M", label: "Investment" },
      { value: "3K", label: "Jobs" },
      { value: "500MW", label: "Storage" }
    ]
  },
  {
    id: "biomass-energy",
    title: "Biomass Energy Production",
    category: "Energy & Sustainability",
    description: "Converting agricultural waste into clean energy.",
    longDescription: "Agricultural residues and organic waste become valuable energy resources through biomass processing. This circular economy approach provides clean energy while solving waste management challenges.",
    image: biomassPlant,
    icon: TreeDeciduous,
    investment: "$200M",
    jobs: "5,000",
    timeline: "2027-2033",
    keyPoints: [
      "Agricultural waste utilisation",
      "Rural energy supply",
      "Carbon-neutral operation",
      "Farmer income supplement"
    ],
    stats: [
      { value: "$200M", label: "Investment" },
      { value: "5K", label: "Jobs" },
      { value: "Clean", label: "Energy" }
    ]
  },
  {
    id: "textile-manufacturing",
    title: "Textile & Garment Manufacturing",
    category: "Manufacturing",
    description: "Modern textile factories producing for global fashion markets.",
    longDescription: "Building on Afghanistan's cotton production and traditional textile expertise, modern factories produce garments for international brands, creating employment and export revenues.",
    image: textileFactory,
    icon: Factory,
    investment: "$400M",
    jobs: "80,000",
    timeline: "2027-2033",
    keyPoints: [
      "Export to global fashion brands",
      "Women's employment priority",
      "Quality certification standards",
      "Sustainable production methods"
    ],
    stats: [
      { value: "$400M", label: "Investment" },
      { value: "80K", label: "Jobs" },
      { value: "Export", label: "Ready" }
    ]
  },
  {
    id: "steel-production",
    title: "Steel & Metal Production",
    category: "Manufacturing",
    description: "Steel mills supporting construction and infrastructure development.",
    longDescription: "Domestic steel production reduces import dependency and supports Afghanistan's massive construction and infrastructure programmes. Modern mills using locally sourced iron ore create industrial capacity.",
    image: steelPlant,
    icon: Cog,
    investment: "$1B",
    jobs: "15,000",
    timeline: "2027-2033",
    keyPoints: [
      "Import substitution strategy",
      "Construction sector support",
      "Local iron ore utilisation",
      "Export potential to neighbours"
    ],
    stats: [
      { value: "$1B", label: "Investment" },
      { value: "15K", label: "Jobs" },
      { value: "2M", label: "Tonnes/Year" }
    ]
  },
  {
    id: "cement-production",
    title: "Cement Manufacturing",
    category: "Manufacturing",
    description: "Large-scale cement factories for construction boom.",
    longDescription: "Afghanistan's construction boom requires millions of tonnes of cement annually. Domestic production using local limestone creates jobs and reduces costs for housing and infrastructure projects.",
    image: cementFactory,
    icon: Building2,
    investment: "$600M",
    jobs: "10,000",
    timeline: "2027-2033",
    keyPoints: [
      "Meet domestic construction demand",
      "Local limestone utilisation",
      "Export to regional markets",
      "Modern environmental controls"
    ],
    stats: [
      { value: "$600M", label: "Investment" },
      { value: "10K", label: "Jobs" },
      { value: "5M", label: "Tonnes" }
    ]
  },
  {
    id: "carpet-weaving",
    title: "Traditional Carpet Production",
    category: "Manufacturing",
    description: "World-famous Afghan carpets combining tradition and modern markets.",
    longDescription: "Afghan carpets are prized globally for their quality and artistry. Supporting traditional weavers with design assistance, quality materials, and market access preserves heritage while creating sustainable livelihoods.",
    image: carpetWeavingMaster,
    icon: Award,
    investment: "$100M",
    jobs: "100,000",
    timeline: "2027-2033",
    keyPoints: [
      "Heritage preservation",
      "Global luxury market access",
      "Quality wool supply chain",
      "Design innovation centres"
    ],
    stats: [
      { value: "$100M", label: "Investment" },
      { value: "100K", label: "Artisans" },
      { value: "Premium", label: "Pricing" }
    ]
  },
  {
    id: "data-centers",
    title: "Data Centre Infrastructure",
    category: "Technology & Digital",
    description: "Modern data centres serving Afghanistan and the region.",
    longDescription: "State-of-the-art data centres provide the foundation for Afghanistan's digital economy, hosting government services, supporting businesses, and positioning the country as a regional technology hub.",
    image: dataCenterFacility,
    icon: Cpu,
    investment: "$500M",
    jobs: "5,000",
    timeline: "2027-2033",
    keyPoints: [
      "Tier 3 certified facilities",
      "Regional hosting services",
      "Government cloud infrastructure",
      "Cybersecurity operations"
    ],
    stats: [
      { value: "$500M", label: "Investment" },
      { value: "5K", label: "Jobs" },
      { value: "100MW", label: "Power" }
    ]
  },
  {
    id: "tech-startups",
    title: "Technology Startup Ecosystem",
    category: "Technology & Digital",
    description: "Incubators and accelerators nurturing Afghan innovation.",
    longDescription: "A vibrant startup ecosystem in Kabul and other cities develops solutions for local challenges while creating globally competitive technology companies.",
    image: techStartupOffice,
    icon: Lightbulb,
    investment: "$50M",
    jobs: "10,000",
    timeline: "2027-2033",
    keyPoints: [
      "Startup incubation programmes",
      "Venture capital access",
      "Mentorship networks",
      "International partnerships"
    ],
    stats: [
      { value: "$50M", label: "Seed Fund" },
      { value: "10K", label: "Jobs" },
      { value: "500+", label: "Startups" }
    ]
  },
  {
    id: "smart-city",
    title: "Smart City Development",
    category: "Technology & Digital",
    description: "Integrated smart city infrastructure for major urban centres.",
    longDescription: "Transforming Afghanistan's cities with connected infrastructure, intelligent traffic management, digital services, and sustainable urban planning creates livable, efficient, and prosperous urban environments.",
    image: smartCityVision,
    icon: Globe,
    investment: "$2B",
    jobs: "20,000",
    timeline: "2027-2033",
    keyPoints: [
      "IoT sensor networks",
      "Intelligent traffic management",
      "Digital government services",
      "Sustainable urban planning"
    ],
    stats: [
      { value: "$2B", label: "Investment" },
      { value: "20K", label: "Jobs" },
      { value: "5", label: "Cities" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Trade",
    category: "Technology & Digital",
    description: "Digital marketplace platforms connecting Afghan producers to the world.",
    longDescription: "E-commerce platforms enable Afghan producers to reach customers globally, bypassing traditional barriers to trade and creating new opportunities for small businesses and artisans.",
    image: ecommerceCenter,
    icon: Package,
    investment: "$100M",
    jobs: "15,000",
    timeline: "2027-2033",
    keyPoints: [
      "Digital payment integration",
      "Logistics network development",
      "Seller training programmes",
      "Cross-border trade facilitation"
    ],
    stats: [
      { value: "$100M", label: "Investment" },
      { value: "15K", label: "Jobs" },
      { value: "1M", label: "Sellers" }
    ]
  },
  {
    id: "hospital-network",
    title: "Modern Hospital Network",
    category: "Healthcare & Pharma",
    description: "State-of-the-art hospitals providing comprehensive healthcare.",
    longDescription: "A network of modern hospitals across Afghanistan provides world-class healthcare, reducing the need for medical travel abroad and ensuring every citizen has access to quality medical services.",
    image: surgeryRoom,
    icon: Stethoscope,
    investment: "$1B",
    jobs: "50,000",
    timeline: "2027-2033",
    keyPoints: [
      "Regional hospital construction",
      "Specialist treatment centres",
      "Medical equipment procurement",
      "Healthcare staff training"
    ],
    stats: [
      { value: "$1B", label: "Investment" },
      { value: "50K", label: "Healthcare Workers" },
      { value: "100", label: "Hospitals" }
    ]
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical Manufacturing",
    category: "Healthcare & Pharma",
    description: "Domestic production of essential medicines.",
    longDescription: "Local pharmaceutical manufacturing ensures reliable supply of essential medicines, reduces costs, and builds technical expertise for Afghanistan's healthcare system.",
    image: pharmaFactory,
    icon: Heart,
    investment: "$300M",
    jobs: "10,000",
    timeline: "2027-2033",
    keyPoints: [
      "Essential medicines production",
      "Quality certification standards",
      "Research and development",
      "Export to regional markets"
    ],
    stats: [
      { value: "$300M", label: "Investment" },
      { value: "10K", label: "Jobs" },
      { value: "500+", label: "Medicines" }
    ]
  },
  {
    id: "medical-equipment",
    title: "Medical Equipment Manufacturing",
    category: "Healthcare & Pharma",
    description: "Production of medical devices and equipment.",
    longDescription: "Manufacturing medical equipment locally reduces costs, creates technical jobs, and ensures Afghanistan's healthcare system has reliable access to essential devices.",
    image: medicalEquipment,
    icon: Shield,
    investment: "$150M",
    jobs: "5,000",
    timeline: "2027-2033",
    keyPoints: [
      "Diagnostic equipment production",
      "Hospital supplies manufacturing",
      "Quality control laboratories",
      "Technical training programmes"
    ],
    stats: [
      { value: "$150M", label: "Investment" },
      { value: "5K", label: "Jobs" },
      { value: "200+", label: "Products" }
    ]
  },
  {
    id: "highway-network",
    title: "National Highway Network",
    category: "Infrastructure",
    description: "Modern highways connecting all provinces.",
    longDescription: "A comprehensive highway network connects all of Afghanistan's 34 provinces, facilitating trade, enabling economic development, and unifying the nation.",
    image: highwayBridgeMountains,
    icon: Truck,
    investment: "$5B",
    jobs: "100,000",
    timeline: "2027-2033",
    keyPoints: [
      "4-lane expressways",
      "Bridge construction",
      "Tunnel engineering",
      "Rest area facilities"
    ],
    stats: [
      { value: "$5B", label: "Investment" },
      { value: "100K", label: "Jobs" },
      { value: "5000km", label: "Roads" }
    ]
  },
  {
    id: "railway",
    title: "National Railway System",
    category: "Infrastructure",
    description: "Railway network connecting major cities and borders.",
    longDescription: "Afghanistan's strategic location makes it a natural transit hub. A modern railway network connects major cities to neighbouring countries, facilitating trade along historic Silk Road routes.",
    image: railwayConstruction,
    icon: Truck,
    investment: "$3B",
    jobs: "30,000",
    timeline: "2027-2033",
    keyPoints: [
      "Transit corridor development",
      "Freight and passenger services",
      "Border crossing facilities",
      "Regional connectivity"
    ],
    stats: [
      { value: "$3B", label: "Investment" },
      { value: "30K", label: "Jobs" },
      { value: "2000km", label: "Track" }
    ]
  },
  {
    id: "airport-expansion",
    title: "International Airport Expansion",
    category: "Infrastructure",
    description: "Modern airports supporting trade and tourism.",
    longDescription: "Expanding and modernising Afghanistan's airports creates world-class facilities for passengers and cargo, supporting trade, tourism, and international connectivity.",
    image: airportTerminal,
    icon: Globe,
    investment: "$1B",
    jobs: "20,000",
    timeline: "2027-2033",
    keyPoints: [
      "Terminal expansion",
      "Cargo handling facilities",
      "Modern air traffic control",
      "Security infrastructure"
    ],
    stats: [
      { value: "$1B", label: "Investment" },
      { value: "20K", label: "Jobs" },
      { value: "10M", label: "Passengers" }
    ]
  },
  {
    id: "logistics-hub",
    title: "Regional Logistics Hub",
    category: "Infrastructure",
    description: "Multimodal logistics centres facilitating regional trade.",
    longDescription: "Strategic logistics hubs combine road, rail, and air connectivity to position Afghanistan as the crossroads of Central and South Asian trade.",
    image: logisticsMegaHub,
    icon: Package,
    investment: "$800M",
    jobs: "25,000",
    timeline: "2027-2033",
    keyPoints: [
      "Multimodal facilities",
      "Customs processing centres",
      "Warehousing infrastructure",
      "Cold chain facilities"
    ],
    stats: [
      { value: "$800M", label: "Investment" },
      { value: "25K", label: "Jobs" },
      { value: "5", label: "Hubs" }
    ]
  },
  {
    id: "banking-modernisation",
    title: "Banking System Modernisation",
    category: "Finance & Trade",
    description: "Modern banking infrastructure and digital financial services.",
    longDescription: "A robust banking sector provides essential financial services, enables business growth, and connects Afghanistan to global financial systems.",
    image: bankHeadquarters,
    icon: DollarSign,
    investment: "$500M",
    jobs: "30,000",
    timeline: "2027-2033",
    keyPoints: [
      "Branch network expansion",
      "Digital banking services",
      "SME lending programmes",
      "International correspondent banking"
    ],
    stats: [
      { value: "$500M", label: "Investment" },
      { value: "30K", label: "Jobs" },
      { value: "500", label: "Branches" }
    ]
  },
  {
    id: "university-expansion",
    title: "University System Expansion",
    category: "Education & Training",
    description: "Modern universities training the next generation.",
    longDescription: "Expanding higher education creates opportunities for Afghan youth while building the skilled workforce needed for economic development.",
    image: universityCampus,
    icon: GraduationCap,
    investment: "$500M",
    jobs: "20,000",
    timeline: "2027-2033",
    keyPoints: [
      "New campus construction",
      "International partnerships",
      "Research facilities",
      "Scholarship programmes"
    ],
    stats: [
      { value: "$500M", label: "Investment" },
      { value: "20K", label: "Staff" },
      { value: "500K", label: "Students" }
    ]
  },
  {
    id: "vocational-training",
    title: "Vocational Training Centres",
    category: "Education & Training",
    description: "Technical skills training for employment.",
    longDescription: "Vocational training centres provide practical skills that lead directly to employment in Afghanistan's growing industries.",
    image: vocationalTraining,
    icon: Users,
    investment: "$200M",
    jobs: "10,000",
    timeline: "2027-2033",
    keyPoints: [
      "Industry-aligned curricula",
      "Practical workshops",
      "Apprenticeship programmes",
      "Employment placement services"
    ],
    stats: [
      { value: "$200M", label: "Investment" },
      { value: "10K", label: "Trainers" },
      { value: "1M", label: "Graduates" }
    ]
  },
];

export const InteractiveSectorExplorer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Sectors");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedSector, setExpandedSector] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredSectors = useMemo(() => {
    return sectors.filter((sector) => {
      const matchesSearch = 
        sector.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sector.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sector.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All Sectors" || sector.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Sectors": sectors.length };
    sectors.forEach(sector => {
      counts[sector.category] = (counts[sector.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section className="py-24 px-6 bg-background" id="sector-explorer">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            50+ Industries
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Explore Investment Sectors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive database of investment opportunities across all economic sectors.
            Filter, search, and discover the perfect opportunity for your investment goals.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search sectors, industries, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card border-border text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className="h-14 w-14"
              >
                <Grid className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className="h-14 w-14"
              >
                <List className="w-5 h-5" />
              </Button>
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-14 gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className="gap-2"
                    >
                      {category}
                      <Badge variant="secondary" className="ml-1">
                        {categoryCounts[category] || 0}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          Showing {filteredSectors.length} of {sectors.length} sectors
          {selectedCategory !== "All Sectors" && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>

        {/* Sector Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex flex-col gap-4"
        }>
          <AnimatePresence>
            {filteredSectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group ${viewMode === "list" ? "w-full" : ""}`}
              >
                {viewMode === "grid" ? (
                  <div 
                    className="relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground">
                          {sector.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 p-2 bg-background/80 rounded-full">
                        <sector.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {sector.description}
                      </p>

                      {/* Stats Row */}
                      <div className="flex justify-between items-center border-t border-border pt-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{sector.investment}</div>
                          <div className="text-xs text-muted-foreground">Investment</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-accent">{sector.jobs}</div>
                          <div className="text-xs text-muted-foreground">Jobs</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">{sector.timeline}</div>
                          <div className="text-xs text-muted-foreground">Timeline</div>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedSector === sector.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-4 border-t border-border">
                              <p className="text-sm text-muted-foreground mb-4">
                                {sector.longDescription}
                              </p>
                              <h4 className="font-semibold mb-2">Key Points:</h4>
                              <ul className="space-y-1">
                                {sector.keyPoints.map((point, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <Target className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ) : (
                  <div 
                    className="flex gap-6 bg-card border border-border rounded-xl p-4 hover:border-primary transition-all duration-300 cursor-pointer"
                    onClick={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
                  >
                    {/* Image */}
                    <div className="relative w-48 h-32 shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Badge className="mb-2 bg-primary/20 text-primary">
                            {sector.category}
                          </Badge>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {sector.title}
                          </h3>
                        </div>
                        <sector.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {sector.description}
                      </p>
                      <div className="flex gap-6">
                        <div>
                          <span className="text-primary font-bold">{sector.investment}</span>
                          <span className="text-muted-foreground text-sm ml-1">Investment</span>
                        </div>
                        <div>
                          <span className="text-accent font-bold">{sector.jobs}</span>
                          <span className="text-muted-foreground text-sm ml-1">Jobs</span>
                        </div>
                        <div>
                          <span className="font-bold">{sector.timeline}</span>
                          <span className="text-muted-foreground text-sm ml-1">Timeline</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredSectors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-bold mb-2">No sectors found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => { setSearchQuery(""); setSelectedCategory("All Sectors"); }}>
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "$50B+", label: "Total Investment", icon: DollarSign },
            { value: "500K+", label: "Jobs Created", icon: Users },
            { value: "50+", label: "Active Sectors", icon: Target },
            { value: "34", label: "Provinces", icon: MapPin },
          ].map((stat, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
