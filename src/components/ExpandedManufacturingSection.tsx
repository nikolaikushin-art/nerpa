import { motion } from "framer-motion";
import { Factory, Cog, Package, Briefcase, TrendingUp, Users, Award, Target } from "lucide-react";

// Import all new sector images
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

interface ManufacturingSector {
  title: string;
  description: string;
  image: string;
  stats: {label: string;value: string;}[];
  opportunities: string[];
  category: string;
}

const manufacturingSectors: ManufacturingSector[] = [
{
  title: "Copper Mega Mining",
  description: "Large-scale copper extraction operations at Aynak and other major deposits, utilizing advanced technology for sustainable extraction.",
  image: copperMegaMine,
  stats: [
  { label: "Reserves", value: "11M Tonnes" },
  { label: "Jobs", value: "15,000+" },
  { label: "Investment", value: "$5B" },
  { label: "Timeline", value: "2025-2040" }],

  opportunities: ["Equipment supply", "Processing facilities", "Transport infrastructure", "Worker training"],
  category: "Mining"
},
{
  title: "Lithium Extraction",
  description: "Modern lithium processing facilities powering the global green energy transition from Afghanistan's vast reserves.",
  image: lithiumExtraction,
  stats: [
  { label: "Deposits", value: "Top 5 Global" },
  { label: "Capacity", value: "100K T/Year" },
  { label: "Export Value", value: "$2B" },
  { label: "Partners", value: "12+" }],

  opportunities: ["Battery manufacturing", "Refinery operations", "Export logistics", "Research centers"],
  category: "Critical Minerals"
},
{
  title: "Saffron Production",
  description: "World-renowned Afghan saffron, cultivated by skilled women farmers in Herat, commands premium global prices.",
  image: saffronHarvestWomen,
  stats: [
  { label: "Quality Rank", value: "#1 Global" },
  { label: "Farmers", value: "50,000+" },
  { label: "Export", value: "$300M" },
  { label: "Hectares", value: "15,000" }],

  opportunities: ["Processing centers", "Export networks", "Organic certification", "Brand development"],
  category: "Agriculture"
},
{
  title: "Hydroponic Greenhouses",
  description: "Climate-controlled agricultural facilities enabling year-round production of vegetables and high-value crops.",
  image: greenhouseComplex,
  stats: [
  { label: "Facilities", value: "500+" },
  { label: "Output", value: "100K T/Year" },
  { label: "Employment", value: "25,000" },
  { label: "Technology", value: "IoT Enabled" }],

  opportunities: ["Smart farming tech", "Seed supply", "Distribution networks", "Training programs"],
  category: "AgriTech"
},
{
  title: "Urban Construction",
  description: "Massive housing development projects addressing Afghanistan's critical housing shortage in major cities.",
  image: constructionTowers,
  stats: [
  { label: "Units Planned", value: "200,000" },
  { label: "Workers", value: "75,000" },
  { label: "Investment", value: "$15B" },
  { label: "Cities", value: "15+" }],

  opportunities: ["Building materials", "Architectural services", "Construction equipment", "Finance"],
  category: "Construction"
},
{
  title: "Wind Energy Farms",
  description: "Utility-scale wind power generation harnessing Afghanistan's highland wind corridors for clean energy.",
  image: windTurbineFarm,
  stats: [
  { label: "Capacity", value: "2GW Target" },
  { label: "Turbines", value: "1,000+" },
  { label: "Coverage", value: "6 Provinces" },
  { label: "Investment", value: "$4B" }],

  opportunities: ["Turbine manufacturing", "Grid infrastructure", "Maintenance services", "Training"],
  category: "Renewable Energy"
},
{
  title: "Advanced Healthcare",
  description: "State-of-the-art surgical and diagnostic facilities providing world-class medical care across Afghanistan.",
  image: surgeryRoom,
  stats: [
  { label: "Hospitals", value: "50+" },
  { label: "Specialists", value: "5,000" },
  { label: "Patients/Year", value: "2M+" },
  { label: "Investment", value: "$3B" }],

  opportunities: ["Medical equipment", "Pharmaceutical supply", "Training programs", "Telemedicine"],
  category: "Healthcare"
},
{
  title: "Higher Education",
  description: "Modern university campuses fostering innovation, research, and skilled workforce development.",
  image: universityCampus,
  stats: [
  { label: "Universities", value: "25+" },
  { label: "Students", value: "500,000" },
  { label: "Graduates/Year", value: "75,000" },
  { label: "Fields", value: "200+" }],

  opportunities: ["Educational technology", "Lab equipment", "Research partnerships", "Student housing"],
  category: "Education"
},
{
  title: "Hydroelectric Power",
  description: "Massive dam projects generating clean electricity while providing water management solutions.",
  image: hydroDamMassive,
  stats: [
  { label: "Capacity", value: "3GW+" },
  { label: "Dams", value: "15 Major" },
  { label: "Investment", value: "$8B" },
  { label: "Coverage", value: "10M People" }],

  opportunities: ["Turbine systems", "Grid networks", "Reservoir management", "Engineering services"],
  category: "Energy Infrastructure"
},
{
  title: "Financial Services",
  description: "Modern banking headquarters driving financial inclusion and economic development nationwide.",
  image: bankHeadquarters,
  stats: [
  { label: "Banks", value: "15+" },
  { label: "Branches", value: "1,000+" },
  { label: "Digital Users", value: "5M+" },
  { label: "Assets", value: "$20B" }],

  opportunities: ["FinTech platforms", "Mobile banking", "Insurance services", "Investment funds"],
  category: "Finance"
},
{
  title: "Technology Startups",
  description: "Vibrant tech ecosystem with young entrepreneurs building digital solutions for Afghanistan and beyond.",
  image: techStartupOffice,
  stats: [
  { label: "Startups", value: "500+" },
  { label: "Developers", value: "25,000" },
  { label: "Investment", value: "$200M" },
  { label: "Growth", value: "45% YoY" }],

  opportunities: ["Venture capital", "Incubators", "Tech parks", "Training academies"],
  category: "Technology"
},
{
  title: "Logistics Hub",
  description: "Central Asia's premier logistics and distribution center connecting regional trade routes.",
  image: logisticsMegaHub,
  stats: [
  { label: "Capacity", value: "10M Tonnes" },
  { label: "Warehouses", value: "200+" },
  { label: "Jobs", value: "50,000" },
  { label: "Trade Volume", value: "$15B" }],

  opportunities: ["Warehouse operations", "Fleet management", "Cold chain", "Customs services"],
  category: "Logistics"
},
{
  title: "Rare Earth Processing",
  description: "High-tech refining of critical minerals essential for electronics and green technology.",
  image: rareEarthPlant,
  stats: [
  { label: "Elements", value: "17 Types" },
  { label: "Output", value: "50K T/Year" },
  { label: "Markets", value: "Global" },
  { label: "Value", value: "$3B+" }],

  opportunities: ["Refinery equipment", "Quality testing", "Export logistics", "Research labs"],
  category: "Critical Minerals"
},
{
  title: "Marble & Stone",
  description: "Premium Afghan marble and decorative stone extraction for international construction markets.",
  image: marbleQuarry,
  stats: [
  { label: "Quarries", value: "100+" },
  { label: "Output", value: "2M Tonnes" },
  { label: "Export Value", value: "$500M" },
  { label: "Jobs", value: "30,000" }],

  opportunities: ["Processing plants", "Export networks", "Design studios", "Equipment supply"],
  category: "Mining"
},
{
  title: "Textile Manufacturing",
  description: "Modern garment factories producing quality textiles for domestic and export markets.",
  image: textileFactory,
  stats: [
  { label: "Factories", value: "200+" },
  { label: "Workers", value: "100,000" },
  { label: "Output", value: "$1B" },
  { label: "Exports", value: "40 Countries" }],

  opportunities: ["Cotton supply", "Design services", "Equipment", "Brand partnerships"],
  category: "Manufacturing"
},
{
  title: "Pharmaceutical Production",
  description: "Domestic medicine manufacturing ensuring affordable healthcare for all citizens.",
  image: pharmaFactory,
  stats: [
  { label: "Plants", value: "25+" },
  { label: "Products", value: "1,000+" },
  { label: "Coverage", value: "60% Domestic" },
  { label: "Export", value: "$300M" }],

  opportunities: ["Raw materials", "Quality control", "Distribution", "Research"],
  category: "Healthcare"
},
{
  title: "Food Processing",
  description: "Modern facilities processing Afghanistan's abundant agricultural products for global markets.",
  image: foodProcessing,
  stats: [
  { label: "Plants", value: "150+" },
  { label: "Products", value: "500+" },
  { label: "Employment", value: "45,000" },
  { label: "Export", value: "$800M" }],

  opportunities: ["Packaging", "Quality testing", "Cold storage", "Distribution"],
  category: "Agro-Processing"
},
{
  title: "EV Infrastructure",
  description: "Electric vehicle charging networks enabling sustainable transportation across cities.",
  image: evCharging,
  stats: [
  { label: "Stations", value: "500+" },
  { label: "Cities", value: "20+" },
  { label: "EVs Supported", value: "50,000" },
  { label: "Investment", value: "$200M" }],

  opportunities: ["Charging equipment", "Solar integration", "Fleet services", "App development"],
  category: "Clean Transport"
},
{
  title: "Telecommunications",
  description: "Nationwide 5G and broadband infrastructure connecting every Afghan to the digital economy.",
  image: telecomTower,
  stats: [
  { label: "Towers", value: "5,000+" },
  { label: "Coverage", value: "95%" },
  { label: "Subscribers", value: "30M" },
  { label: "Investment", value: "$2B" }],

  opportunities: ["Equipment supply", "Installation services", "Content platforms", "IoT solutions"],
  category: "Digital Infrastructure"
},
{
  title: "Precious Jewelry",
  description: "Master craftsmen transforming Afghan gems into world-class jewelry for luxury markets.",
  image: jewelryWorkshop,
  stats: [
  { label: "Artisans", value: "10,000+" },
  { label: "Workshops", value: "500+" },
  { label: "Export", value: "$400M" },
  { label: "Markets", value: "50 Countries" }],

  opportunities: ["Gem supply", "Design training", "Marketing", "E-commerce"],
  category: "Luxury Goods"
},
{
  title: "Aviation Hub",
  description: "Modern airports positioning Afghanistan as Central Asia's premier transit hub.",
  image: airportTerminal,
  stats: [
  { label: "Airports", value: "8 International" },
  { label: "Passengers", value: "10M/Year" },
  { label: "Cargo", value: "500K Tonnes" },
  { label: "Airlines", value: "50+" }],

  opportunities: ["Ground handling", "Retail", "Cargo services", "Maintenance"],
  category: "Aviation"
},
{
  title: "Cement Production",
  description: "Large-scale cement manufacturing supporting Afghanistan's construction boom.",
  image: cementFactory,
  stats: [
  { label: "Plants", value: "15+" },
  { label: "Capacity", value: "10M Tonnes" },
  { label: "Jobs", value: "15,000" },
  { label: "Market Share", value: "80% Domestic" }],

  opportunities: ["Raw materials", "Equipment", "Transport", "Quality labs"],
  category: "Building Materials"
},
{
  title: "Aquaculture",
  description: "Sustainable fish farming providing protein security and export opportunities.",
  image: aquacultureFarm,
  stats: [
  { label: "Farms", value: "200+" },
  { label: "Output", value: "50K Tonnes" },
  { label: "Jobs", value: "20,000" },
  { label: "Growth", value: "30% YoY" }],

  opportunities: ["Feed supply", "Hatcheries", "Processing", "Export networks"],
  category: "Agriculture"
},
{
  title: "Steel Manufacturing",
  description: "Integrated steel mills utilizing Afghanistan's iron ore for industrial development.",
  image: steelPlant,
  stats: [
  { label: "Capacity", value: "5M Tonnes" },
  { label: "Plants", value: "3 Major" },
  { label: "Investment", value: "$3B" },
  { label: "Jobs", value: "25,000" }],

  opportunities: ["Iron ore supply", "Scrap processing", "Engineering", "Distribution"],
  category: "Heavy Industry"
},
{
  title: "Handwoven Carpets",
  description: "UNESCO-recognized Afghan carpet weaving tradition preserved and modernized.",
  image: carpetWeavingMaster,
  stats: [
  { label: "Weavers", value: "500,000+" },
  { label: "Export", value: "$150M" },
  { label: "Markets", value: "100 Countries" },
  { label: "Heritage", value: "2,000 Years" }],

  opportunities: ["Wool supply", "Dye production", "Marketing", "Design innovation"],
  category: "Cultural Heritage"
},
{
  title: "Solar Panel Manufacturing",
  description: "Domestic production of photovoltaic panels for Afghanistan's solar energy expansion.",
  image: solarManufacturing,
  stats: [
  { label: "Capacity", value: "500MW/Year" },
  { label: "Plants", value: "5+" },
  { label: "Jobs", value: "10,000" },
  { label: "Cost Reduction", value: "40%" }],

  opportunities: ["Silicon supply", "Assembly equipment", "Quality testing", "Installation training"],
  category: "Clean Energy"
},
{
  title: "Water Desalination",
  description: "Advanced water treatment ensuring clean water access across arid regions.",
  image: desalinationPlant,
  stats: [
  { label: "Plants", value: "20+" },
  { label: "Capacity", value: "500M L/Day" },
  { label: "Beneficiaries", value: "5M People" },
  { label: "Investment", value: "$1B" }],

  opportunities: ["Membrane systems", "Solar power", "Distribution", "Maintenance"],
  category: "Water Infrastructure"
},
{
  title: "Vocational Training",
  description: "Skills development centers preparing youth for modern industrial careers.",
  image: vocationalTraining,
  stats: [
  { label: "Centers", value: "100+" },
  { label: "Students", value: "200,000" },
  { label: "Programs", value: "50+" },
  { label: "Placement Rate", value: "85%" }],

  opportunities: ["Curriculum development", "Equipment supply", "Industry partnerships", "Certification"],
  category: "Education"
},
{
  title: "E-Commerce Logistics",
  description: "Fulfillment centers enabling Afghanistan's digital retail revolution.",
  image: ecommerceCenter,
  stats: [
  { label: "Centers", value: "25+" },
  { label: "Daily Orders", value: "100,000+" },
  { label: "Employment", value: "15,000" },
  { label: "Growth", value: "60% YoY" }],

  opportunities: ["Warehouse systems", "Last-mile delivery", "Payment platforms", "Return processing"],
  category: "Digital Commerce"
},
{
  title: "Wool Processing",
  description: "Traditional wool processing transformed with modern machinery for quality fiber production.",
  image: woolProcessing,
  stats: [
  { label: "Facilities", value: "50+" },
  { label: "Output", value: "30K Tonnes" },
  { label: "Jobs", value: "15,000" },
  { label: "Export", value: "$100M" }],

  opportunities: ["Sheep farming", "Spinning equipment", "Quality labs", "Export networks"],
  category: "Textiles"
},
{
  title: "Railway Network",
  description: "Modern rail infrastructure connecting Afghanistan to regional and global trade routes.",
  image: railwayConstruction,
  stats: [
  { label: "Track", value: "3,000 km" },
  { label: "Stations", value: "50+" },
  { label: "Investment", value: "$10B" },
  { label: "Cargo Capacity", value: "50M Tonnes" }],

  opportunities: ["Construction equipment", "Rolling stock", "Station development", "Logistics services"],
  category: "Transport"
},
{
  title: "Honey Production",
  description: "Mountain apiaries producing premium organic honey for health-conscious global markets.",
  image: honeyProduction,
  stats: [
  { label: "Apiaries", value: "5,000+" },
  { label: "Beekeepers", value: "30,000" },
  { label: "Output", value: "15K Tonnes" },
  { label: "Export", value: "$50M" }],

  opportunities: ["Hive equipment", "Processing facilities", "Organic certification", "Brand marketing"],
  category: "Agriculture"
},
{
  title: "Glass Manufacturing",
  description: "Artisan and industrial glass production combining tradition with modern techniques.",
  image: glassFactory,
  stats: [
  { label: "Factories", value: "30+" },
  { label: "Artisans", value: "5,000" },
  { label: "Products", value: "1,000+" },
  { label: "Export", value: "$80M" }],

  opportunities: ["Raw materials", "Furnace equipment", "Design training", "Export marketing"],
  category: "Manufacturing"
},
{
  title: "Agricultural Machinery",
  description: "Domestic production of tractors and farm equipment supporting agricultural modernization.",
  image: agriMachinery,
  stats: [
  { label: "Plants", value: "5+" },
  { label: "Units/Year", value: "10,000" },
  { label: "Types", value: "50+" },
  { label: "Jobs", value: "8,000" }],

  opportunities: ["Component manufacturing", "Dealer networks", "Financing", "Training"],
  category: "Manufacturing"
},
{
  title: "Olive Oil Production",
  description: "Premium olive cultivation and processing in Afghanistan's Mediterranean-like climate zones.",
  image: oliveOilProduction,
  stats: [
  { label: "Orchards", value: "5,000 Ha" },
  { label: "Mills", value: "25+" },
  { label: "Output", value: "10K Tonnes" },
  { label: "Export", value: "$75M" }],

  opportunities: ["Orchard development", "Processing equipment", "Bottling lines", "Export networks"],
  category: "Agro-Processing"
},
{
  title: "Medical Devices",
  description: "Precision manufacturing of diagnostic and therapeutic medical equipment.",
  image: medicalEquipment,
  stats: [
  { label: "Plants", value: "10+" },
  { label: "Products", value: "200+" },
  { label: "Jobs", value: "5,000" },
  { label: "Export", value: "$150M" }],

  opportunities: ["Component supply", "Quality certification", "R&D partnerships", "Distribution"],
  category: "Healthcare"
},
{
  title: "Recycling Industry",
  description: "Sustainable waste processing converting materials into valuable industrial inputs.",
  image: recyclingPlant,
  stats: [
  { label: "Plants", value: "50+" },
  { label: "Capacity", value: "2M Tonnes" },
  { label: "Jobs", value: "25,000" },
  { label: "Recovery Rate", value: "75%" }],

  opportunities: ["Collection systems", "Sorting equipment", "Processing machinery", "Product development"],
  category: "Green Industry"
},
{
  title: "Leather Goods",
  description: "Traditional leather craftsmanship producing premium goods for international markets.",
  image: leatherGoods,
  stats: [
  { label: "Tanneries", value: "100+" },
  { label: "Craftsmen", value: "20,000" },
  { label: "Export", value: "$200M" },
  { label: "Products", value: "500+" }],

  opportunities: ["Hide supply", "Chemical processing", "Design innovation", "Brand development"],
  category: "Crafts"
},
{
  title: "Battery Storage",
  description: "Grid-scale energy storage enabling renewable energy integration nationwide.",
  image: batteryStorage,
  stats: [
  { label: "Capacity", value: "5GWh" },
  { label: "Sites", value: "50+" },
  { label: "Investment", value: "$2B" },
  { label: "Grid Stability", value: "99.9%" }],

  opportunities: ["Battery systems", "Grid integration", "Monitoring software", "Maintenance"],
  category: "Energy"
},
{
  title: "Ceramics & Pottery",
  description: "Traditional pottery art preserved while scaling for contemporary markets.",
  image: ceramicsFactory,
  stats: [
  { label: "Workshops", value: "500+" },
  { label: "Artisans", value: "15,000" },
  { label: "Output", value: "5M Pieces" },
  { label: "Export", value: "$60M" }],

  opportunities: ["Clay supply", "Kiln equipment", "Design training", "E-commerce"],
  category: "Cultural Heritage"
},
{
  title: "Fertilizer Production",
  description: "Chemical facilities producing agricultural inputs for national food security.",
  image: fertilizerPlant,
  stats: [
  { label: "Plants", value: "10+" },
  { label: "Output", value: "2M Tonnes" },
  { label: "Coverage", value: "80% Domestic" },
  { label: "Jobs", value: "10,000" }],

  opportunities: ["Raw materials", "Chemical engineering", "Distribution", "Research"],
  category: "Chemicals"
},
{
  title: "Printing & Publishing",
  description: "Modern printing facilities supporting education, media, and business sectors.",
  image: printingFacility,
  stats: [
  { label: "Facilities", value: "100+" },
  { label: "Output", value: "500M Copies" },
  { label: "Employment", value: "12,000" },
  { label: "Digital Integration", value: "40%" }],

  opportunities: ["Printing equipment", "Paper supply", "Digital platforms", "Distribution"],
  category: "Media"
},
{
  title: "Spice Processing",
  description: "Premium Afghan spices processed to international food safety standards.",
  image: spiceProcessing,
  stats: [
  { label: "Plants", value: "50+" },
  { label: "Products", value: "100+" },
  { label: "Export", value: "$150M" },
  { label: "Markets", value: "60 Countries" }],

  opportunities: ["Farm supply chains", "Processing equipment", "Packaging", "Export logistics"],
  category: "Agro-Processing"
},
{
  title: "Furniture Craftsmanship",
  description: "Masterful woodworking producing both traditional and modern furniture designs.",
  image: furnitureWorkshop,
  stats: [
  { label: "Workshops", value: "1,000+" },
  { label: "Craftsmen", value: "25,000" },
  { label: "Export", value: "$100M" },
  { label: "Wood Types", value: "20+" }],

  opportunities: ["Sustainable forestry", "Power tools", "Design training", "Showrooms"],
  category: "Woodworking"
},
{
  title: "Biomass Energy",
  description: "Agricultural waste converted to clean energy for rural electrification.",
  image: biomassPlant,
  stats: [
  { label: "Plants", value: "30+" },
  { label: "Capacity", value: "200MW" },
  { label: "Waste Processed", value: "1M Tonnes" },
  { label: "Villages Powered", value: "5,000+" }],

  opportunities: ["Collection systems", "Gasification technology", "Distribution", "Carbon credits"],
  category: "Renewable Energy"
},
{
  title: "Dried Fruit Export",
  description: "Premium Afghan dried fruits packaged for international health food markets.",
  image: driedFruitFacility,
  stats: [
  { label: "Facilities", value: "75+" },
  { label: "Products", value: "30+" },
  { label: "Export", value: "$400M" },
  { label: "Markets", value: "80 Countries" }],

  opportunities: ["Farm aggregation", "Drying technology", "Packaging", "Brand development"],
  category: "Agro-Processing"
},
{
  title: "Dairy Industry",
  description: "Modern dairy processing ensuring nutritious milk products for all Afghans.",
  image: dairyPlant,
  stats: [
  { label: "Plants", value: "100+" },
  { label: "Output", value: "2B Liters" },
  { label: "Products", value: "50+" },
  { label: "Farmers Supported", value: "100,000" }],

  opportunities: ["Farm equipment", "Processing machinery", "Cold chain", "Retail distribution"],
  category: "Food Processing"
},
{
  title: "Electronics Assembly",
  description: "Technology manufacturing producing devices for domestic and regional markets.",
  image: electronicsAssembly,
  stats: [
  { label: "Plants", value: "15+" },
  { label: "Products", value: "100+" },
  { label: "Jobs", value: "20,000" },
  { label: "Export", value: "$300M" }],

  opportunities: ["Component supply", "Cleanroom equipment", "Training", "Quality systems"],
  category: "Technology"
},
{
  title: "Natural Gas Processing",
  description: "Gas extraction and processing from Jowzjan and northern fields for energy security.",
  image: gasProcessing,
  stats: [
  { label: "Reserves", value: "150 BCM" },
  { label: "Output", value: "5 BCM/Year" },
  { label: "Pipelines", value: "2,000 km" },
  { label: "Investment", value: "$5B" }],

  opportunities: ["Drilling services", "Pipeline construction", "Compression stations", "Distribution"],
  category: "Energy"
},
{
  title: "Cotton Industry",
  description: "Cotton processing supporting Afghanistan's textile and export industries.",
  image: cottonGinning,
  stats: [
  { label: "Ginning Mills", value: "100+" },
  { label: "Output", value: "300K Tonnes" },
  { label: "Farmers", value: "150,000" },
  { label: "Export", value: "$250M" }],

  opportunities: ["Seed supply", "Ginning equipment", "Spinning mills", "Textile integration"],
  category: "Agriculture"
}];


export const ExpandedManufacturingSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Factory className="w-10 h-10 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
              Industrial Development
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            50 Growth Sectors
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Afghanistan's comprehensive industrial strategy encompasses 50 priority sectors spanning mining, manufacturing, agriculture, energy, and services. Each sector represents a unique investment opportunity with dedicated infrastructure, trained workforce, and supportive policy environment.
          </p>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          
          {[
          { icon: Factory, value: "50+", label: "Priority Sectors" },
          { icon: TrendingUp, value: "$100B+", label: "Investment Potential" },
          { icon: Users, value: "2M+", label: "Jobs Target" },
          { icon: Target, value: "2040", label: "Vision Timeline" }].
          map((stat, index) =>
          <div key={index} className="bg-card border border-border/50 rounded-2xl p-6 text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          )}
        </motion.div>

        {/* Sector Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturingSectors.map((sector, index) =>
          <motion.div
            key={sector.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index % 6 * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">
            
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                  {sector.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {sector.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {sector.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {sector.stats.slice(0, 2).map((stat, i) =>
                <div key={i} className="bg-secondary/50 rounded-lg p-2 text-center">
                      <div className="text-lg font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                )}
                </div>

                {/* Opportunities */}
                <div className="flex flex-wrap gap-1">
                  {sector.opportunities.slice(0, 3).map((opp, i) =>
                <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                      {opp}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center">
          
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-12 border border-primary/30">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Ready to Invest?</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Join  international partners already investing in Afghanistan's industrial renaissance. Our dedicated investment facilitation team is ready to support your journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                <Briefcase className="w-5 h-5" />
                <span>Investment Facilitation</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Cog className="w-5 h-5" />
                <span>Technical Support</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Package className="w-5 h-5" />
                <span>Export Assistance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};