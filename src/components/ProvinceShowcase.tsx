import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, Users, Factory, Gem, Wheat, Zap, Building2, Globe, Droplets, Pickaxe, Sun, TreeDeciduous, Mountain, Plane, Ship } from "lucide-react";

// Province Images - All 34 Unique High-Resolution Images (NEW)
const kabulSkyline = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-modern-skyline.jpg";
const heratCitadel = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-ancient-citadel.jpg";
const balkhShrine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/balkh-blue-domes.jpg";
const kandaharOrchards = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate-fields.jpg";
const nangarharCitrus = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-orange-valley.jpg";
const badakhshanLapis = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badakhshan-gems.jpg";
const bamyanCliffs = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/bamyan-cliffs.jpg";
const helmandIrrigation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/helmand-green-valley.jpg";
const ghazniTowers = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghazni-minarets.jpg";
const kunduzHarvest = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunduz-cotton-plains.jpg";
const panjshirGorge = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/panjshir-emerald-river.jpg";
const farahSolarFarm = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/farah-solar-panels.jpg";
const ghorJam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghor-minaret-valley.jpg";
const logarMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/logar-copper-site.jpg";
const badghisPistachios = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badghis-pistachio-hills.jpg";
const faryabLooms = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/faryab-carpet-workshop.jpg";
const takharRice = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/takhar-rice-terraces.jpg";
const samanganStupa = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/samangan-buddhist-site.jpg";
const jowzjanGas = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/jowzjan-gas-plant.jpg";
const sarEPolSheep = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/sar-e-pol-shepherds.jpg";
const baghlanSugar = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/baghlan-sugar-factory.jpg";
const kapisaGrapes = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kapisa-vineyard-hills.jpg";
const parwanSalang = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/parwan-salang-highway.jpg";
const wardakApples = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/wardak-apple-harvest.jpg";
const paktyaForests = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktya-pine-mountains.jpg";
const khostTrade = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/khost-border-market.jpg";
const paktikaWilderness = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktika-remote-peaks.jpg";
const zabulFortress = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/zabul-qalat-ruins.jpg";
const uruzganValleys = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/uruzgan-highland-villages.jpg";
const nimrozDesert = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nimroz-sand-dunes.jpg";
const daykundiLakes = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/daykundi-alpine-lakes.jpg";
const nuristanVillage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nuristan-wooden-houses.jpg";
const kunarHoney = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunar-mountain-beekeeping.jpg";
const laghmanCitrus = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/laghman-citrus-valley.jpg";

interface ProvinceData {
  name: string;
  nameLocal: string;
  description: string;
  capital: string;
  population: string;
  area: string;
  keyProjects: string[];
  economicDrivers: string[];
  investmentPotential: string;
  highlights: { icon: LucideIcon; label: string; value: string }[];
  image?: string;
  detailedInfo: string;
}

const provincesData: ProvinceData[] = [
  {
    name: "Kabul",
    nameLocal: "کابل",
    description: "The beating heart of Afghanistan, Kabul serves as the national capital and primary economic centre. Home to the nation's largest concentration of educational institutions, government offices, and commercial enterprises, Kabul represents the nexus of Afghanistan's modernisation efforts.",
    capital: "Kabul City",
    population: "4.6 Million",
    area: "4,462 km²",
    keyProjects: [
      "Kabul New City Development - 1.7 million resident capacity smart city with modern infrastructure",
      "International Airport Expansion - Regional aviation hub with enhanced cargo capacity",
      "Metro Rail System - Modern public transportation network serving 2 million daily commuters",
      "Technology Park - ICT and startup ecosystem development with 500+ tech companies",
      "Central Business District - Modern financial centre with international banking facilities",
      "University City Complex - Higher education hub with 10 major universities",
      "Healthcare Excellence Centre - Tertiary hospital with specialised medical services",
    ],
    economicDrivers: ["Financial Services", "Technology", "Education", "Healthcare", "Manufacturing", "Retail", "Government"],
    investmentPotential: "As the capital city, Kabul offers unparalleled access to government, financial institutions, and a skilled workforce of over 1.5 million. The planned Kabul New City project represents one of the largest urban development initiatives in Central Asia, with projected investment of $25 billion over 15 years.",
    highlights: [
      { icon: Users, label: "Population", value: "4.6M" },
      { icon: Building2, label: "Projects", value: "85" },
      { icon: TrendingUp, label: "GDP Share", value: "35%" },
      { icon: Factory, label: "Industries", value: "500+" },
    ],
    image: kabulSkyline,
    detailedInfo: "Kabul's strategic importance extends beyond its role as the capital. The city houses Afghanistan's primary stock exchange, central bank, and serves as the headquarters for all major corporations operating in the country. With 25 universities and technical institutes producing 50,000 graduates annually, Kabul provides the skilled workforce essential for national development.",
  },
  {
    name: "Herat",
    nameLocal: "هرات",
    description: "Afghanistan's cultural capital and western gateway, Herat has been a centre of civilisation for millennia. Today, it combines rich historical heritage with dynamic economic activity, serving as the primary trade corridor to Iran and Turkmenistan.",
    capital: "Herat City",
    population: "2.1 Million",
    area: "54,778 km²",
    keyProjects: [
      "Herat Industrial Park - Manufacturing and processing hub with 200+ factories",
      "Saffron Processing Facilities - Value-added agriculture for export markets",
      "Solar Energy Complex - 500MW renewable energy plant powering the region",
      "Cross-Border Trade Zone - Iran-Afghanistan commerce centre handling $2B annually",
      "Heritage Tourism Development - UNESCO site preservation and tourism infrastructure",
      "Textile Manufacturing Centre - Cotton and silk processing facilities",
      "Agricultural Research Institute - Crop improvement and water management research",
    ],
    economicDrivers: ["Trade", "Agriculture", "Manufacturing", "Tourism", "Crafts", "Textiles", "Energy"],
    investmentPotential: "Herat's strategic position on the Iran border makes it ideal for regional trade, with daily cross-border commerce exceeding $5 million. The province produces some of the world's finest saffron, with premium export prices reaching $3,000 per kilogram.",
    highlights: [
      { icon: Globe, label: "Trade Volume", value: "$2B" },
      { icon: Wheat, label: "Saffron Output", value: "#1" },
      { icon: Zap, label: "Solar Potential", value: "High" },
      { icon: Factory, label: "Industries", value: "200+" },
    ],
    image: heratCitadel,
    detailedInfo: "The ancient Citadel of Herat stands as testament to the city's 5,000-year history as a centre of commerce and culture. Today, Herat's economy benefits from its position on the historic Silk Road, now modernised as a key transit route connecting Central Asia with South Asia and the Middle East.",
  },
  {
    name: "Balkh",
    nameLocal: "بلخ",
    description: "Home to the ancient city of Balkh, 'Mother of Cities,' this northern province combines rich historical significance with substantial mineral wealth and agricultural productivity. Mazar-i-Sharif serves as the economic hub of northern Afghanistan.",
    capital: "Mazar-i-Sharif",
    population: "1.5 Million",
    area: "17,249 km²",
    keyProjects: [
      "Mazar-i-Sharif Industrial Zone - Northern manufacturing centre with 150 enterprises",
      "Gas Pipeline Infrastructure - Energy distribution network to Central Asia",
      "Agricultural Processing Hub - Cotton, grain, and oilseed facilities",
      "Rail Connection to Uzbekistan - Regional transport link for trade enhancement",
      "Blue Mosque Tourism Complex - Heritage site development attracting 500K visitors annually",
      "Fertilizer Production Plant - Meeting national agricultural input needs",
      "Cement Manufacturing Facility - Construction materials for regional development",
    ],
    economicDrivers: ["Mining", "Agriculture", "Manufacturing", "Energy", "Trade", "Tourism", "Transport"],
    investmentPotential: "Balkh offers direct access to Central Asian markets via the Hairatan border crossing, processing over $1 billion in trade annually. Natural gas reserves estimated at 500 billion cubic feet provide energy security and export potential.",
    highlights: [
      { icon: Gem, label: "Gas Reserves", value: "Large" },
      { icon: Wheat, label: "Cotton Output", value: "Top 3" },
      { icon: Globe, label: "Trade Routes", value: "3" },
      { icon: Users, label: "Workforce", value: "500K" },
    ],
    image: balkhShrine,
    detailedInfo: "The Blue Mosque of Mazar-i-Sharif is Afghanistan's most revered religious site, drawing pilgrims from across the Islamic world. The province's strategic location makes it the natural gateway to Uzbekistan, Tajikistan, and beyond to Russia and Europe.",
  },
  {
    name: "Kandahar",
    nameLocal: "کندهار",
    description: "Afghanistan's second-largest city and the heartland of Pashtun culture, Kandahar has historically served as the nation's agricultural powerhouse. The province is renowned for its pomegranates, grapes, and strategic position on the ring road.",
    capital: "Kandahar City",
    population: "1.4 Million",
    area: "54,022 km²",
    keyProjects: [
      "Dahla Dam Expansion - Irrigation and hydropower serving 200,000 hectares",
      "Pomegranate Processing Centre - Export-ready facilities for global markets",
      "Kandahar Airport Development - Southern aviation hub with cargo facilities",
      "Ring Road Enhancement - National highway connection improvement",
      "Agricultural Research Station - Crop improvement and pest management centre",
      "Cold Storage Network - Post-harvest facilities reducing agricultural waste",
      "Grape Processing Facility - Raisin production for export markets",
    ],
    economicDrivers: ["Agriculture", "Trade", "Manufacturing", "Transport", "Logistics", "Food Processing"],
    investmentPotential: "Kandahar's agricultural output feeds much of the nation and exports significant volumes internationally. Pomegranate exports alone exceed $100 million annually, with potential for substantial growth through improved processing and cold chain logistics.",
    highlights: [
      { icon: Wheat, label: "Pomegranates", value: "#1" },
      { icon: TrendingUp, label: "Agri Export", value: "$500M" },
      { icon: Building2, label: "Projects", value: "48" },
      { icon: Globe, label: "Export Markets", value: "20+" },
    ],
    image: kandaharOrchards,
    detailedInfo: "Kandahar pomegranates are considered among the finest in the world, prized for their exceptional sweetness and deep red colour. The province's 40,000 hectares of orchards produce over 500,000 tonnes of fruit annually, with growing demand from premium markets in Europe, Middle East, and Asia.",
  },
  {
    name: "Nangarhar",
    nameLocal: "ننگرهار",
    description: "The eastern gateway to Pakistan, Nangarhar enjoys a subtropical climate ideal for citrus and rice cultivation. Jalalabad, the provincial capital, serves as a major commercial centre with strong cross-border trade relationships.",
    capital: "Jalalabad",
    population: "1.7 Million",
    area: "7,641 km²",
    keyProjects: [
      "Torkham Border Facility - Modern customs and trade centre processing $3B annually",
      "Citrus Processing Plants - Juice and concentrate production for export",
      "Hydropower Development - Multiple dam projects generating 500MW",
      "Special Economic Zone - Export-oriented manufacturing with tax incentives",
      "Agricultural Modernisation - Irrigation expansion to 100,000 hectares",
      "Rice Processing Complex - Modern milling and packaging facilities",
      "Transport Logistics Hub - Warehousing and distribution centre",
    ],
    economicDrivers: ["Trade", "Agriculture", "Energy", "Manufacturing", "Logistics", "Food Processing"],
    investmentPotential: "With Afghanistan's busiest border crossing at Torkham, Nangarhar processes over 60% of the country's formal trade. The province's subtropical climate enables unique agricultural production including citrus, rice, and sugarcane unavailable elsewhere in Afghanistan.",
    highlights: [
      { icon: Globe, label: "Trade Value", value: "$3B" },
      { icon: Zap, label: "Hydro Potential", value: "2GW" },
      { icon: Wheat, label: "Citrus Output", value: "Top" },
      { icon: Users, label: "Population", value: "1.7M" },
    ],
    image: nangarharCitrus,
    detailedInfo: "The fertile valleys of Nangarhar, fed by the Kabul River and its tributaries, support intensive agriculture producing citrus fruits, rice, sugarcane, and vegetables. The province's position on the historic Khyber Pass route ensures its continued importance as Afghanistan's primary trade corridor.",
  },
  {
    name: "Badakhshan",
    nameLocal: "بدخشان",
    description: "Nestled in the Hindu Kush and Pamir mountains, Badakhshan is renowned for its stunning landscapes and precious gemstones. The province produces some of the world's finest lapis lazuli and rubies, alongside emerging tourism potential.",
    capital: "Fayzabad",
    population: "1.0 Million",
    area: "44,059 km²",
    keyProjects: [
      "Gemstone Processing Centre - Value-added mineral processing for export",
      "Wakhan Corridor Tourism - Eco-tourism development in pristine mountain landscapes",
      "Mountain Agriculture Programme - High-altitude farming and livestock improvement",
      "Renewable Energy Initiative - 50+ micro-hydro installations across remote valleys",
      "Cultural Heritage Preservation - Silk Road archaeological site conservation",
      "Adventure Tourism Infrastructure - Trekking and mountaineering facilities",
      "Handicraft Development Centre - Traditional crafts for export markets",
    ],
    economicDrivers: ["Mining", "Tourism", "Agriculture", "Crafts", "Energy", "Livestock"],
    investmentPotential: "Badakhshan's gemstone deposits are world-famous, with lapis lazuli from the Sar-e-Sang mines prized since ancient times. The Wakhan Corridor, connecting to China and Tajikistan, offers unique tourism potential in one of the world's last wilderness areas.",
    highlights: [
      { icon: Gem, label: "Lapis Lazuli", value: "#1 World" },
      { icon: Globe, label: "Tourism Potential", value: "High" },
      { icon: Building2, label: "Projects", value: "35" },
      { icon: Zap, label: "Micro-Hydro", value: "50+" },
    ],
    image: badakhshanLapis,
    detailedInfo: "Lapis lazuli from Badakhshan has been traded across the ancient world for over 6,000 years, found in Egyptian pharaohs' tombs and Renaissance paintings. Today, responsible mining development can transform this heritage into sustainable economic opportunity while preserving environmental values.",
  },
  {
    name: "Helmand",
    nameLocal: "هلمند",
    description: "Afghanistan's largest province by area, Helmand contains the nation's most extensive irrigation system fed by the Helmand River. The province's agricultural potential is unmatched, with vast areas suitable for cotton, wheat, and fruit production.",
    capital: "Lashkargah",
    population: "1.0 Million",
    area: "58,584 km²",
    keyProjects: [
      "Helmand Valley Irrigation Rehabilitation - Restoring 400,000 hectares to productivity",
      "Solar Power Generation - Utilising desert areas for 1GW solar capacity",
      "Cotton Processing Complex - Ginning, spinning, and textile manufacturing",
      "Date Palm Cultivation - Premium variety production for export",
      "Wheat Storage Infrastructure - Grain silos ensuring food security",
      "Agricultural Mechanisation Centre - Modern equipment and training",
      "Water Management Authority - Efficient irrigation and groundwater protection",
    ],
    economicDrivers: ["Agriculture", "Water", "Solar", "Cotton", "Livestock", "Food Processing"],
    investmentPotential: "Helmand's irrigation infrastructure, originally developed in the 1950s, has potential to make the province Afghanistan's breadbasket. Solar energy potential in desert areas exceeds 1GW capacity, while water resources support intensive agriculture.",
    highlights: [
      { icon: Droplets, label: "Irrigation", value: "400K ha" },
      { icon: Sun, label: "Solar Potential", value: "1GW" },
      { icon: Wheat, label: "Wheat Output", value: "Top 3" },
      { icon: Factory, label: "Cotton Mills", value: "25+" },
    ],
    image: helmandIrrigation,
    detailedInfo: "The Helmand River, Afghanistan's longest, supports the nation's most productive agricultural region. The valley's unique microclimate enables cultivation of premium crops including melons, cotton, and dates that command premium prices in regional markets.",
  },
  {
    name: "Ghazni",
    nameLocal: "غزنی",
    description: "Once the capital of a vast empire stretching from India to Iran, Ghazni retains significant historical importance while emerging as a major mineral province. Lithium deposits discovered here could transform Afghanistan's economic future.",
    capital: "Ghazni City",
    population: "1.3 Million",
    area: "22,915 km²",
    keyProjects: [
      "Lithium Extraction Development - Critical mineral for global battery supply chains",
      "Historical Tourism Revival - UNESCO heritage site development",
      "Agricultural Processing Zone - Fruit and nut processing facilities",
      "Road Infrastructure Upgrade - Kabul-Kandahar highway improvement",
      "Mining Training Centre - Workforce development for extractive industries",
      "Renewable Energy Integration - Solar and wind for mining operations",
      "Archaeological Research Centre - Heritage preservation and tourism",
    ],
    economicDrivers: ["Mining", "Agriculture", "Heritage", "Trade", "Manufacturing"],
    investmentPotential: "Ghazni's lithium deposits, estimated among the world's largest, position Afghanistan to become a major player in the global battery supply chain. The province's historical sites, including the UNESCO-listed minarets, offer significant tourism potential.",
    highlights: [
      { icon: Pickaxe, label: "Lithium Deposits", value: "Major" },
      { icon: Globe, label: "Heritage Sites", value: "UNESCO" },
      { icon: Building2, label: "Projects", value: "42" },
      { icon: Wheat, label: "Agriculture", value: "Strong" },
    ],
    image: ghazniTowers,
    detailedInfo: "Ghazni's emergence as a critical mineral province comes alongside its rich historical legacy. The Ghaznavid Empire, centred here in the 10th-12th centuries, spread Islamic culture across South Asia. Modern development must balance resource extraction with heritage preservation.",
  },
  {
    name: "Kunduz",
    nameLocal: "کندز",
    description: "The breadbasket of northern Afghanistan, Kunduz province produces abundant wheat, cotton, and rice. Its fertile plains and access to Central Asian markets make it a strategic agricultural and trade centre.",
    capital: "Kunduz City",
    population: "1.1 Million",
    area: "8,040 km²",
    keyProjects: [
      "Cotton Textile Industrial Park - Integrated ginning, spinning, and weaving",
      "Rice Processing Complex - Modern milling and export packaging",
      "Agricultural Cooperative Network - Farmer support and market access",
      "Border Trade Facility - Tajikistan commerce centre enhancement",
      "Irrigation Modernisation - Drip and sprinkler system installation",
      "Seed Production Centre - High-yield variety development and distribution",
      "Rural Electrification Programme - Solar power for agricultural communities",
    ],
    economicDrivers: ["Agriculture", "Textiles", "Trade", "Rice", "Cotton", "Livestock"],
    investmentPotential: "Kunduz's cotton production supports Afghanistan's textile industry ambitions, while rice cultivation meets domestic demand and generates export revenues. Proximity to Tajikistan enables regional trade diversification.",
    highlights: [
      { icon: Wheat, label: "Cotton Output", value: "#1" },
      { icon: Factory, label: "Textile Mills", value: "30+" },
      { icon: Globe, label: "Trade Value", value: "$500M" },
      { icon: Users, label: "Farm Families", value: "200K" },
    ],
    image: kunduzHarvest,
    detailedInfo: "Kunduz cotton has historically been Afghanistan's finest, supporting textile industries across the region. Modern development focuses on restoring and expanding production while adding value through local processing rather than raw material export.",
  },
  {
    name: "Bamyan",
    nameLocal: "بامیان",
    description: "Bamyan's dramatic cliffs, highland valleys, and spectacular Band-e-Amir lakes make it Afghanistan's premier tourism destination. The province combines natural beauty, cultural heritage, and agricultural potential in the central highlands.",
    capital: "Bamyan City",
    population: "500K",
    area: "14,175 km²",
    keyProjects: [
      "Cultural Heritage Tourism Complex - Visitor facilities and museum",
      "Band-e-Amir National Park Development - Afghanistan's first national park infrastructure",
      "Potato Production Enhancement - High-altitude specialty variety cultivation",
      "Eco-Tourism Lodge Network - Sustainable accommodation across the province",
      "Archaeological Research Centre - International excavation and preservation",
      "Handicraft Export Centre - Traditional carpet and pottery production",
      "Winter Sports Development - Skiing infrastructure at Koh-e-Baba range",
    ],
    economicDrivers: ["Tourism", "Agriculture", "Heritage", "Handicrafts", "Livestock"],
    investmentPotential: "Bamyan's unique combination of cultural heritage and natural beauty positions it as Afghanistan's tourism gateway. Band-e-Amir's stunning blue lakes and the dramatic cliff landscape attract visitors worldwide despite limited current infrastructure.",
    highlights: [
      { icon: Globe, label: "Tourist Potential", value: "1M+" },
      { icon: Mountain, label: "National Park", value: "1st" },
      { icon: Wheat, label: "Potato Output", value: "#1" },
      { icon: Building2, label: "Heritage Sites", value: "UNESCO" },
    ],
    image: bamyanCliffs,
    detailedInfo: "Bamyan's cliff valleys and highland landscape form one of Afghanistan's most distinctive regions. Band-e-Amir's natural lakes and the province's archaeological heritage draw international attention, with ongoing efforts to support preservation and sustainable tourism.",
  },
  {
    name: "Panjshir",
    nameLocal: "پنجشیر",
    description: "The Valley of Five Lions, Panjshir is renowned for its natural beauty, emerald deposits, and fierce independence. The province offers unique opportunities in gemstone mining, eco-tourism, and hydroelectric power generation.",
    capital: "Bazarak",
    population: "180K",
    area: "3,610 km²",
    keyProjects: [
      "Emerald Mining Development - Sustainable extraction and processing",
      "Hydropower Cascade - Multiple small dams generating 200MW total",
      "Adventure Tourism Infrastructure - Trekking and mountaineering facilities",
      "Valley Road Improvement - All-weather access to remote communities",
      "Gemstone Certification Centre - Quality assurance for export markets",
      "Agricultural Terracing - Maximising cultivable land on valley slopes",
      "Environmental Conservation Zone - Protecting alpine ecosystems",
    ],
    economicDrivers: ["Mining", "Tourism", "Energy", "Agriculture", "Gemstones"],
    investmentPotential: "Panjshir emeralds are prized globally for their exceptional colour and clarity. Hydroelectric potential along the Panjshir River can generate clean energy for the capital region while supporting local development.",
    highlights: [
      { icon: Gem, label: "Emerald Quality", value: "Premium" },
      { icon: Zap, label: "Hydro Potential", value: "200MW" },
      { icon: Globe, label: "Tourism", value: "Growing" },
      { icon: Mountain, label: "Peaks", value: "4,000m+" },
    ],
    image: panjshirGorge,
    detailedInfo: "The Panjshir River has carved a spectacular valley through the Hindu Kush, creating an environment of exceptional natural beauty. Emerald deposits in the upper valley produce gemstones rivalling those of Colombia and Zambia in quality.",
  },
  {
    name: "Farah",
    nameLocal: "فراه",
    description: "Afghanistan's third-largest province by area, Farah combines desert landscapes with the fertile Farah River valley. Its position on the Iranian border and abundant solar resources create unique development opportunities.",
    capital: "Farah City",
    population: "550K",
    area: "48,471 km²",
    keyProjects: [
      "Solar Power Mega-Project - 500MW capacity in desert areas",
      "Farah River Irrigation Expansion - 100,000 hectares additional cultivation",
      "Border Trade Centre - Iran commerce facility enhancement",
      "Date Palm Plantation - Premium variety cultivation for export",
      "Wind Energy Development - Consistent winds enabling 200MW capacity",
      "Livestock Processing Facility - Meat and dairy for regional markets",
      "Desert Agriculture Research - Drought-resistant crop development",
    ],
    economicDrivers: ["Agriculture", "Solar", "Trade", "Livestock", "Energy"],
    investmentPotential: "Farah's solar energy potential is among Afghanistan's highest, with clear skies and high irradiance levels. The province's position on the Iranian border enables trade diversification while agricultural expansion can utilise underused water resources.",
    highlights: [
      { icon: Sun, label: "Solar Irradiance", value: "Highest" },
      { icon: Globe, label: "Trade Route", value: "Iran" },
      { icon: Wheat, label: "Agri Potential", value: "100K ha" },
      { icon: Zap, label: "Wind Potential", value: "200MW" },
    ],
    image: farahSolarFarm,
    detailedInfo: "Farah's desert regions receive among the highest solar irradiance levels in the world, making large-scale solar power generation economically viable. The combination of solar and wind resources could make Farah an energy export hub.",
  },
  {
    name: "Ghor",
    nameLocal: "غور",
    description: "A highland province centred on the spectacular Minaret of Jam, Ghor offers unique cultural heritage and agricultural potential. The province's remote location has preserved traditional lifestyles and architectural treasures.",
    capital: "Firoz Koh",
    population: "750K",
    area: "36,479 km²",
    keyProjects: [
      "Minaret of Jam Preservation - UNESCO World Heritage site conservation",
      "Mountain Agriculture Development - Terraced farming expansion",
      "Rural Road Network - Connecting remote communities to markets",
      "Livestock Improvement Programme - Sheep and goat breed enhancement",
      "Handicraft Production Centre - Traditional carpet and textile crafts",
      "Heritage Tourism Route - Connecting historical sites across the province",
      "Renewable Energy Access - Solar systems for off-grid communities",
    ],
    economicDrivers: ["Agriculture", "Mining", "Heritage", "Livestock", "Handicrafts"],
    investmentPotential: "The Minaret of Jam, a UNESCO World Heritage site, represents a unique tourism asset when access is improved. Agricultural potential in highland valleys remains largely untapped, while mineral surveys indicate significant deposits.",
    highlights: [
      { icon: Building2, label: "Heritage", value: "UNESCO" },
      { icon: Wheat, label: "Agriculture", value: "Growing" },
      { icon: Pickaxe, label: "Minerals", value: "Untapped" },
      { icon: Factory, label: "Handicrafts", value: "Traditional" },
    ],
    image: ghorJam,
    detailedInfo: "The 65-metre Minaret of Jam, built in the 12th century, is one of only a few hundred surviving examples of Ghurid architecture. Its remote location in a dramatic mountain valley has protected it from development but also limits tourism potential until access improves.",
  },
  {
    name: "Logar",
    nameLocal: "لوگر",
    description: "Located just south of Kabul, Logar contains the massive Aynak copper deposit, one of the world's largest undeveloped copper resources. The province balances mineral wealth with archaeological significance and agricultural production.",
    capital: "Pul-e-Alam",
    population: "450K",
    area: "3,880 km²",
    keyProjects: [
      "Mes Aynak Copper Development - World-class mining operation",
      "Archaeological Preservation - Buddhist site excavation and museum",
      "Agricultural Intensification - High-value crop production near Kabul markets",
      "Processing Industry Zone - Copper smelting and manufacturing",
      "Infrastructure Development - Roads and power for mining operations",
      "Environmental Protection Plan - Balancing extraction with conservation",
      "Community Development Fund - Mining revenues for local benefit",
    ],
    economicDrivers: ["Mining", "Agriculture", "Manufacturing", "Archaeology"],
    investmentPotential: "The Aynak copper deposit is one of the world's largest undeveloped copper resources. Development must balance economic benefits with preservation of the significant Buddhist archaeological site above the deposit.",
    highlights: [
      { icon: Pickaxe, label: "Copper Reserve", value: "World-class" },
      { icon: TrendingUp, label: "Potential", value: "Major" },
      { icon: Globe, label: "Archaeology", value: "Buddhist" },
      { icon: Building2, label: "Projects", value: "25" },
    ],
    image: logarMining,
    detailedInfo: "Mes Aynak represents one of the world's great archaeological discoveries alongside one of its largest copper deposits. Buddhist statues, manuscripts, and structures dating from the 3rd-7th centuries lie above the copper ore body, requiring careful excavation before mining begins.",
  },
  {
    name: "Badghis",
    nameLocal: "بادغیس",
    description: "Northwestern Afghanistan's pistachio capital, Badghis contains vast natural pistachio forests that once covered much of the province. Rehabilitation of these forests and expansion of cultivation offer significant economic potential.",
    capital: "Qala-i-Naw",
    population: "550K",
    area: "20,591 km²",
    keyProjects: [
      "Pistachio Forest Rehabilitation - Restoring 200,000 hectares of natural forest",
      "Processing and Export Facility - Modern shelling, roasting, and packaging",
      "Carpet Production Centre - Traditional Turkmen designs for export",
      "Livestock Development Programme - Sheep and goat improvement",
      "Road Infrastructure - Connecting to Herat and regional markets",
      "Water Conservation - Groundwater protection and rainwater harvesting",
      "Rural Electrification - Solar power for agricultural communities",
    ],
    economicDrivers: ["Agriculture", "Livestock", "Carpets", "Pistachios", "Forestry"],
    investmentPotential: "Badghis pistachios are renowned for their exceptional flavour and size. Rehabilitation of degraded forests combined with modern processing facilities could establish Afghanistan as a leading global pistachio exporter.",
    highlights: [
      { icon: TreeDeciduous, label: "Pistachio Forest", value: "200K ha" },
      { icon: Wheat, label: "Production", value: "Growing" },
      { icon: Factory, label: "Processing", value: "New" },
      { icon: Globe, label: "Export Markets", value: "Global" },
    ],
    image: badghisPistachios,
    detailedInfo: "Afghanistan's pistachio forests, once the world's largest, have been degraded by overgrazing and conflict. Restoration efforts in Badghis aim to revive this natural resource while establishing modern cultivation and processing to capture greater value from production.",
  },
  {
    name: "Faryab",
    nameLocal: "فاریاب",
    description: "A northern province renowned for its carpet production and agricultural output, Faryab connects Afghanistan to Turkmenistan. The province's Turkmen population maintains distinctive cultural traditions including world-famous carpet weaving.",
    capital: "Maymana",
    population: "1.1 Million",
    area: "20,293 km²",
    keyProjects: [
      "Carpet Production Enhancement - Design registration and quality certification",
      "Cotton Cultivation Expansion - Irrigated production for textile supply",
      "Border Trade Development - Turkmenistan commerce facility",
      "Livestock Processing - Modern abattoir and cold chain facilities",
      "Agricultural Mechanisation - Equipment provision and training",
      "Handicraft Export Centre - Carpets, embroidery, and traditional crafts",
      "Rural Road Network - Connecting production areas to markets",
    ],
    economicDrivers: ["Agriculture", "Livestock", "Carpets", "Trade", "Cotton"],
    investmentPotential: "Faryab carpets are prized by collectors worldwide for their distinctive Turkmen designs and exceptional quality. Establishing origin certification and quality standards could significantly increase export values.",
    highlights: [
      { icon: Factory, label: "Carpet Output", value: "Premium" },
      { icon: Wheat, label: "Agriculture", value: "Diverse" },
      { icon: Globe, label: "Trade Route", value: "Turkmenistan" },
      { icon: Users, label: "Weavers", value: "50K+" },
    ],
    image: faryabLooms,
    detailedInfo: "Faryab's carpet weaving tradition dates back centuries, with designs and techniques passed through generations. Modern initiatives focus on protecting traditional patterns through geographic indication while connecting weavers to international markets.",
  },
  {
    name: "Takhar",
    nameLocal: "تخار",
    description: "A northeastern agricultural province with diverse production including rice, cotton, and fruits. Takhar's position near the Tajikistan border enables regional trade while its fertile valleys support intensive cultivation.",
    capital: "Taluqan",
    population: "1.1 Million",
    area: "12,333 km²",
    keyProjects: [
      "Rice Production Enhancement - Improved varieties and processing",
      "Agricultural Cooperative Development - Farmer organisation and market access",
      "Border Infrastructure - Tajikistan trade facility modernisation",
      "Irrigation Rehabilitation - Canal restoration and efficiency improvement",
      "Fruit Processing Centre - Drying, packaging, and cold storage",
      "Livestock Development - Dairy and meat production enhancement",
      "Rural Electrification - Grid extension and solar systems",
    ],
    economicDrivers: ["Agriculture", "Mining", "Trade", "Rice", "Fruits", "Livestock"],
    investmentPotential: "Takhar's diverse agricultural production serves both domestic markets and export through Tajikistan. Mineral deposits including gold and precious stones offer additional development potential.",
    highlights: [
      { icon: Wheat, label: "Rice Output", value: "Top 5" },
      { icon: Globe, label: "Trade Route", value: "Tajikistan" },
      { icon: Factory, label: "Processing", value: "Developing" },
      { icon: Gem, label: "Minerals", value: "Gold" },
    ],
    image: takharRice,
    detailedInfo: "Takhar's agricultural diversity enables year-round production and income, with different crops harvested across seasons. The province's connection to Tajikistan provides alternative export routes reducing dependence on Pakistan transit.",
  },
  {
    name: "Baghlan",
    nameLocal: "بغلان",
    description: "An energy and industrial hub of northern Afghanistan, Baghlan contains significant coal deposits and has historically hosted major industrial facilities. The Salang Pass, crossing the Hindu Kush, makes the province strategically vital.",
    capital: "Pul-e-Khumri",
    population: "950K",
    area: "21,118 km²",
    keyProjects: [
      "Coal Mining Modernisation - Efficient extraction and processing",
      "Thermal Power Plant - Coal-fired generation for northern grid",
      "Sugar Industry Revival - Beet cultivation and processing",
      "Salang Tunnel Enhancement - Critical north-south transport link",
      "Industrial Zone Development - Manufacturing near energy sources",
      "Agricultural Diversification - High-value crop introduction",
      "Cement Production - Construction materials for regional development",
    ],
    economicDrivers: ["Energy", "Mining", "Agriculture", "Manufacturing", "Transport"],
    investmentPotential: "Baghlan's coal reserves and existing industrial infrastructure make it ideal for energy-intensive manufacturing. The strategic Salang Pass ensures continued importance for north-south commerce.",
    highlights: [
      { icon: Pickaxe, label: "Coal Reserves", value: "Large" },
      { icon: Zap, label: "Power Generation", value: "Developing" },
      { icon: Factory, label: "Industries", value: "Growing" },
      { icon: Mountain, label: "Salang Pass", value: "Strategic" },
    ],
    image: baghlanSugar,
    detailedInfo: "Baghlan's industrial heritage includes Afghanistan's largest sugar factory and cement plants. Modern development focuses on leveraging coal resources for power generation while reviving manufacturing capacity.",
  },
  {
    name: "Samangan",
    nameLocal: "سمنگان",
    description: "A small but historically significant province, Samangan contains remarkable Buddhist archaeological sites including Takht-e-Rostam cave monastery. Cement production and agriculture drive the local economy.",
    capital: "Aybak",
    population: "420K",
    area: "11,262 km²",
    keyProjects: [
      "Cement Plant Expansion - Meeting national construction demand",
      "Archaeological Tourism Development - Buddhist heritage site facilities",
      "Agricultural Intensification - Irrigated cultivation expansion",
      "Livestock Improvement - Sheep and goat breed enhancement",
      "Marble Quarrying - Premium building stone extraction",
      "Road Infrastructure - Regional connectivity improvement",
      "Solar Energy Systems - Rural electrification programme",
    ],
    economicDrivers: ["Mining", "Agriculture", "Tourism", "Cement", "Livestock"],
    investmentPotential: "Samangan's cement industry supplies construction across northern Afghanistan, while marble deposits offer premium building materials. Archaeological sites attract growing tourist interest.",
    highlights: [
      { icon: Factory, label: "Cement Output", value: "Major" },
      { icon: Building2, label: "Heritage Sites", value: "Buddhist" },
      { icon: Pickaxe, label: "Marble", value: "Premium" },
      { icon: Wheat, label: "Agriculture", value: "Growing" },
    ],
    image: samanganStupa,
    detailedInfo: "Takht-e-Rostam, carved entirely from living rock, represents one of Afghanistan's most remarkable Buddhist sites. The cave monastery and stupa complex dates from the 4th-5th centuries and demonstrates the region's importance on ancient trade routes.",
  },
  {
    name: "Jowzjan",
    nameLocal: "جوزجان",
    description: "A northern province with significant natural gas reserves and strong agricultural production. Jowzjan's position on the Uzbekistan border and energy resources create opportunities for industrial development.",
    capital: "Sheberghan",
    population: "600K",
    area: "11,798 km²",
    keyProjects: [
      "Gas Field Development - Expanded extraction for domestic and export markets",
      "Petrochemical Complex - Gas-based manufacturing facility",
      "Cotton Processing Centre - Textile supply chain development",
      "Border Trade Enhancement - Uzbekistan commerce facility",
      "Agricultural Modernisation - Irrigation and mechanisation",
      "Power Generation Plant - Gas-fired electricity production",
      "Carpet Production Centre - Traditional designs for export",
    ],
    economicDrivers: ["Energy", "Agriculture", "Trade", "Manufacturing", "Textiles"],
    investmentPotential: "Jowzjan's natural gas reserves are among Afghanistan's largest, with potential for both domestic use and export to Central Asia. Gas-based industries including power generation and petrochemicals offer significant investment opportunities.",
    highlights: [
      { icon: Zap, label: "Gas Reserves", value: "Major" },
      { icon: Globe, label: "Trade Route", value: "Uzbekistan" },
      { icon: Factory, label: "Industry", value: "Developing" },
      { icon: Wheat, label: "Cotton", value: "Strong" },
    ],
    image: jowzjanGas,
    detailedInfo: "The Sheberghan gas fields have been producing since the 1960s, making Jowzjan Afghanistan's energy heartland. Expanded production and new gas-based industries could transform the provincial economy.",
  },
  {
    name: "Sar-e-Pol",
    nameLocal: "سرپل",
    description: "A central-northern province known for Karakul sheep production and agricultural output. Sar-e-Pol's traditional livestock economy is complemented by emerging mining potential.",
    capital: "Sar-e-Pol City",
    population: "600K",
    area: "15,999 km²",
    keyProjects: [
      "Karakul Sheep Industry Revival - Premium pelt production for export",
      "Coal Mining Development - Extraction and processing facilities",
      "Agricultural Improvement - Irrigation and crop diversification",
      "Livestock Processing - Modern abattoir and cold chain",
      "Road Infrastructure - Regional connectivity enhancement",
      "Carpet Production Centre - Traditional designs for export",
      "Rural Electrification - Solar power for remote communities",
    ],
    economicDrivers: ["Livestock", "Agriculture", "Mining", "Carpets", "Trade"],
    investmentPotential: "Sar-e-Pol's Karakul sheep produce some of the world's finest pelts, prized by fashion houses globally. Coal deposits offer energy development potential while agricultural expansion is possible with irrigation improvement.",
    highlights: [
      { icon: Users, label: "Karakul Sheep", value: "Premium" },
      { icon: Pickaxe, label: "Coal", value: "Deposits" },
      { icon: Wheat, label: "Agriculture", value: "Diverse" },
      { icon: Factory, label: "Carpets", value: "Traditional" },
    ],
    image: sarEPolSheep,
    detailedInfo: "Karakul sheep from Sar-e-Pol produce distinctive tightly-curled pelts that have been prized in global fashion for centuries. Modern development focuses on sustainable husbandry practices while maintaining traditional quality.",
  },
  {
    name: "Kapisa",
    nameLocal: "کاپیسا",
    description: "A small but fertile province north of Kabul, Kapisa produces grapes, mulberries, and other fruits in its mountain-fed valleys. Proximity to the capital creates strong market access for agricultural products.",
    capital: "Mahmud-e-Raqi",
    population: "480K",
    area: "1,842 km²",
    keyProjects: [
      "Grape and Raisin Processing - Modern drying and packaging facilities",
      "Mulberry Production Enhancement - Silk and dried fruit cultivation",
      "Agricultural Cooperative Network - Farmer organisation and market access",
      "Irrigation Improvement - Canal rehabilitation and efficiency",
      "Road Infrastructure - Kabul market connection enhancement",
      "Hydropower Development - Small dam projects for local power",
      "Eco-Tourism Facilities - Mountain resort development",
    ],
    economicDrivers: ["Agriculture", "Trade", "Fruits", "Tourism", "Livestock"],
    investmentPotential: "Kapisa's proximity to Kabul and fertile valleys make it ideal for high-value agricultural production. Grape and raisin exports have significant growth potential with improved processing and packaging.",
    highlights: [
      { icon: Wheat, label: "Grape Output", value: "High" },
      { icon: Globe, label: "Market Access", value: "Kabul" },
      { icon: Zap, label: "Hydro", value: "Potential" },
      { icon: Mountain, label: "Tourism", value: "Growing" },
    ],
    image: kapisaGrapes,
    detailedInfo: "Kapisa's grape varieties are prized for their sweetness and ideal drying qualities, producing premium raisins for domestic and export markets. The province's valleys also support mulberry cultivation for silk production and dried fruit.",
  },
  {
    name: "Parwan",
    nameLocal: "پروان",
    description: "Home to the strategic Salang Pass and Bagram air base, Parwan serves as a crucial transport corridor connecting Kabul with northern Afghanistan. The province combines strategic importance with agricultural potential.",
    capital: "Charikar",
    population: "700K",
    area: "5,974 km²",
    keyProjects: [
      "Salang Highway Improvement - All-weather transport corridor",
      "Bagram Economic Zone - Industrial and logistics development",
      "Agricultural Processing Hub - Fruit and vegetable facilities",
      "Grape Production Enhancement - High-quality varieties for export",
      "Irrigation Modernisation - Efficient water management systems",
      "Marble Quarrying - Premium building materials extraction",
      "Tourism Infrastructure - Mountain resort development",
    ],
    economicDrivers: ["Transport", "Agriculture", "Manufacturing", "Logistics", "Tourism"],
    investmentPotential: "Parwan's strategic location on the north-south transport corridor creates logistics and manufacturing opportunities. Agricultural production benefits from proximity to Kabul markets and cool highland climate.",
    highlights: [
      { icon: Mountain, label: "Salang Pass", value: "Strategic" },
      { icon: Plane, label: "Bagram", value: "Airport" },
      { icon: Wheat, label: "Agriculture", value: "Diverse" },
      { icon: Factory, label: "Industry", value: "Growing" },
    ],
    image: parwanSalang,
    detailedInfo: "The Salang Pass, at 3,878 metres, is Afghanistan's most important mountain crossing, connecting the capital with northern provinces. Tunnel and road improvements are essential for year-round commerce and regional development.",
  },
  {
    name: "Wardak",
    nameLocal: "وردک",
    description: "A central highland province west of Kabul, Wardak produces apples, apricots, and other fruits in its fertile valleys. The province serves as an important agricultural supplier to the capital region.",
    capital: "Maidan Shahr",
    population: "650K",
    area: "9,934 km²",
    keyProjects: [
      "Apple Production Enhancement - Modern orchards and cold storage",
      "Fruit Processing Centre - Juice, concentrate, and dried fruit facilities",
      "Road Infrastructure - Kabul connection improvement",
      "Irrigation Development - Groundwater and canal systems",
      "Livestock Improvement - Dairy and meat production enhancement",
      "Handicraft Centre - Traditional carpet and textile production",
      "Solar Energy Programme - Rural electrification",
    ],
    economicDrivers: ["Agriculture", "Livestock", "Trade", "Handicrafts", "Fruits"],
    investmentPotential: "Wardak's apple production is renowned across Afghanistan, with potential for significant expansion through modern orchard development and cold storage facilities. Proximity to Kabul ensures strong market access.",
    highlights: [
      { icon: Wheat, label: "Apple Output", value: "Premium" },
      { icon: Globe, label: "Market Access", value: "Kabul" },
      { icon: Factory, label: "Processing", value: "Developing" },
      { icon: Users, label: "Farmers", value: "100K+" },
    ],
    image: wardakApples,
    detailedInfo: "Wardak apples are prized for their crisp texture and natural sweetness, grown in highland orchards at optimal altitude. Development of cold storage and processing facilities could enable year-round sales and export to regional markets.",
  },
  {
    name: "Paktya",
    nameLocal: "پکتیا",
    description: "An eastern highland province with extensive pine forests and strong Pashtun cultural traditions. Paktya's timber resources, agricultural production, and cross-border trade create diverse economic opportunities.",
    capital: "Gardez",
    population: "600K",
    area: "6,432 km²",
    keyProjects: [
      "Sustainable Forestry Programme - Managed timber production",
      "Border Trade Enhancement - Pakistan commerce facilities",
      "Agricultural Intensification - High-value crop development",
      "Honey Production Centre - Mountain apiculture expansion",
      "Road Infrastructure - Regional connectivity improvement",
      "Timber Processing - Sustainable wood products manufacturing",
      "Eco-Tourism Development - Forest and mountain experiences",
    ],
    economicDrivers: ["Forestry", "Agriculture", "Trade", "Livestock", "Timber"],
    investmentPotential: "Paktya's extensive pine forests represent Afghanistan's most significant timber resource, requiring sustainable management to balance economic benefit with environmental conservation. Agricultural production and cross-border trade add to provincial economic strength.",
    highlights: [
      { icon: TreeDeciduous, label: "Pine Forests", value: "Extensive" },
      { icon: Globe, label: "Trade Route", value: "Pakistan" },
      { icon: Wheat, label: "Agriculture", value: "Growing" },
      { icon: Factory, label: "Timber", value: "Potential" },
    ],
    image: paktyaForests,
    detailedInfo: "Paktya's pine forests, among Afghanistan's most extensive, have been under pressure from illegal logging and conflict. Sustainable forestry programmes aim to protect this resource while enabling managed timber production and employment.",
  },
  {
    name: "Khost",
    nameLocal: "خوست",
    description: "An eastern province on the Pakistan border, Khost serves as a major trade corridor and commercial centre. The province's position enables significant cross-border commerce while local agriculture adds to economic activity.",
    capital: "Khost City",
    population: "650K",
    area: "4,152 km²",
    keyProjects: [
      "Border Trade Complex - Modern customs and commerce facilities",
      "Commercial Zone Development - Wholesale and retail centre",
      "Agricultural Enhancement - Fruit and vegetable production",
      "Education Centre - University and technical training expansion",
      "Healthcare Facilities - Regional hospital development",
      "Road Infrastructure - Pakistan connection improvement",
      "Industrial Park - Light manufacturing facilities",
    ],
    economicDrivers: ["Trade", "Agriculture", "Education", "Manufacturing", "Services"],
    investmentPotential: "Khost's strategic border location enables significant trade volumes with Pakistan, while the province's urban centre provides education, healthcare, and commercial services to the surrounding region.",
    highlights: [
      { icon: Globe, label: "Trade Volume", value: "$1B+" },
      { icon: Building2, label: "Commercial", value: "Hub" },
      { icon: Users, label: "Population", value: "650K" },
      { icon: Factory, label: "Industry", value: "Growing" },
    ],
    image: khostTrade,
    detailedInfo: "Khost has developed as a significant commercial centre, with its border crossing handling substantial trade volumes. The city's markets serve as regional distribution points for imported goods while local production increasingly meets domestic demand.",
  },
  {
    name: "Paktika",
    nameLocal: "پکتیکا",
    description: "Afghanistan's easternmost province, Paktika contains remote mountain wilderness and significant mineral deposits. The province's position on the Pakistan border creates trade opportunities while its isolation has preserved traditional lifestyles.",
    capital: "Sharana",
    population: "500K",
    area: "19,482 km²",
    keyProjects: [
      "Mineral Survey and Development - Chromite and other deposits",
      "Border Trade Facility - Pakistan commerce enhancement",
      "Agricultural Improvement - Irrigation and crop diversification",
      "Road Network Development - Connecting remote communities",
      "Renewable Energy Access - Solar systems for off-grid areas",
      "Livestock Enhancement - Breed improvement and veterinary services",
      "Healthcare Expansion - Rural clinic network",
    ],
    economicDrivers: ["Mining", "Agriculture", "Trade", "Livestock", "Timber"],
    investmentPotential: "Paktika's mineral deposits, including chromite and copper, remain largely unexplored due to remoteness. Infrastructure development could unlock significant resource potential while improving livelihoods in isolated communities.",
    highlights: [
      { icon: Pickaxe, label: "Minerals", value: "Untapped" },
      { icon: Globe, label: "Border Trade", value: "Pakistan" },
      { icon: Mountain, label: "Terrain", value: "Remote" },
      { icon: Wheat, label: "Agriculture", value: "Growing" },
    ],
    image: paktikaWilderness,
    detailedInfo: "Paktika's remote mountain wilderness contains significant mineral deposits that remain unexplored. Development requires substantial infrastructure investment but could provide economic opportunities for isolated communities while contributing to national mineral production.",
  },
  {
    name: "Zabul",
    nameLocal: "زابل",
    description: "A southern province on the Kandahar-Kabul highway, Zabul combines strategic location with agricultural potential. The ancient fortress at Qalat reflects the province's historical importance as a trade route junction.",
    capital: "Qalat",
    population: "320K",
    area: "17,343 km²",
    keyProjects: [
      "Highway Services Development - Commercial facilities along Ring Road",
      "Agricultural Enhancement - Irrigation and crop improvement",
      "Livestock Development - Breed improvement and processing",
      "Historical Site Preservation - Qalat fortress conservation",
      "Road Network Improvement - Rural connectivity enhancement",
      "Solar Energy Programme - Rural electrification",
      "Market Infrastructure - Agricultural trading facilities",
    ],
    economicDrivers: ["Agriculture", "Trade", "Livestock", "Transport", "Tourism"],
    investmentPotential: "Zabul's position on the Ring Road creates opportunities for transport services and trade while agricultural development can leverage improved irrigation and market access.",
    highlights: [
      { icon: Building2, label: "Qalat Fortress", value: "Historic" },
      { icon: Globe, label: "Ring Road", value: "Strategic" },
      { icon: Wheat, label: "Agriculture", value: "Growing" },
      { icon: Users, label: "Livestock", value: "Strong" },
    ],
    image: zabulFortress,
    detailedInfo: "The ancient fortress at Qalat has guarded this strategic junction for centuries, reflecting the province's importance on historic trade routes. Modern development focuses on leveraging Ring Road position while improving agricultural productivity.",
  },
  {
    name: "Uruzgan",
    nameLocal: "ارزگان",
    description: "A central highland province with traditional pastoral economy and significant agricultural potential. Uruzgan's remote valleys support sheep and goat herding while irrigated areas produce almonds, pomegranates, and other crops.",
    capital: "Tarin Kowt",
    population: "400K",
    area: "12,696 km²",
    keyProjects: [
      "Almond Production Enhancement - Modern orchards and processing",
      "Irrigation Development - Dam and canal construction",
      "Livestock Improvement - Breed enhancement and veterinary services",
      "Road Infrastructure - Regional connectivity improvement",
      "Solar Energy Access - Rural electrification programme",
      "Healthcare Expansion - Clinic network development",
      "Agricultural Cooperative Network - Market access improvement",
    ],
    economicDrivers: ["Agriculture", "Livestock", "Almonds", "Trade", "Handicrafts"],
    investmentPotential: "Uruzgan's almond production is prized for quality, with significant potential for expansion through modern orchard development. Livestock remains central to the economy while irrigation development could expand cultivated area.",
    highlights: [
      { icon: Wheat, label: "Almonds", value: "Premium" },
      { icon: Users, label: "Livestock", value: "Major" },
      { icon: Droplets, label: "Irrigation", value: "Developing" },
      { icon: Mountain, label: "Highlands", value: "Remote" },
    ],
    image: uruzganValleys,
    detailedInfo: "Uruzgan's highland valleys have long supported pastoral communities, with sheep and goats grazing mountain pastures. Modern agricultural development focuses on expanding orchard cultivation while maintaining traditional livestock economy.",
  },
  {
    name: "Nimroz",
    nameLocal: "نیمروز",
    description: "Afghanistan's southwestern province bordering Iran and Pakistan, Nimroz contains the Registan Desert and strategic border crossings. Solar energy potential and cross-border trade create development opportunities.",
    capital: "Zaranj",
    population: "180K",
    area: "41,005 km²",
    keyProjects: [
      "Zaranj-Delaram Highway - Trade corridor to Iranian ports",
      "Solar Power Mega-Project - Desert-based renewable energy",
      "Border Trade Complex - Iran and Pakistan commerce facilities",
      "Saffron Cultivation - Desert-edge agriculture development",
      "Wind Energy Development - Consistent winds for power generation",
      "Free Trade Zone - Special economic incentives for industry",
      "Water Management - Groundwater protection and efficiency",
    ],
    economicDrivers: ["Trade", "Solar", "Agriculture", "Transport", "Energy"],
    investmentPotential: "Nimroz's strategic location enables trade through Iranian ports to global markets, while vast desert areas offer exceptional solar energy potential. Development of renewable energy could transform the provincial economy.",
    highlights: [
      { icon: Sun, label: "Solar Potential", value: "Excellent" },
      { icon: Globe, label: "Trade Routes", value: "2 Borders" },
      { icon: Ship, label: "Port Access", value: "Chabahar" },
      { icon: Zap, label: "Wind Power", value: "Strong" },
    ],
    image: nimrozDesert,
    detailedInfo: "Nimroz's position at the junction of Afghanistan, Iran, and Pakistan creates unique trade opportunities, with the Zaranj-Delaram Highway providing access to Chabahar Port. Solar and wind resources in desert areas offer energy development potential exceeding domestic needs.",
  },
  {
    name: "Daykundi",
    nameLocal: "دایکندی",
    description: "A central highland province carved from Uruzgan in 2004, Daykundi contains remote mountain communities and pristine natural landscapes. Agriculture and livestock support the traditional economy in isolated valleys.",
    capital: "Nili",
    population: "500K",
    area: "8,088 km²",
    keyProjects: [
      "Road Infrastructure Development - Connecting isolated communities",
      "Agricultural Improvement - Irrigation and crop diversification",
      "Livestock Enhancement - Breed improvement and health services",
      "Renewable Energy Access - Solar and micro-hydro systems",
      "Healthcare Expansion - Rural clinic network",
      "Education Enhancement - School construction and teacher training",
      "Eco-Tourism Development - Mountain lake experiences",
    ],
    economicDrivers: ["Agriculture", "Livestock", "Tourism", "Handicrafts", "Mining"],
    investmentPotential: "Daykundi's isolation has preserved traditional lifestyles and natural beauty, creating eco-tourism potential. Agricultural development and improved connectivity could significantly enhance livelihoods in remote communities.",
    highlights: [
      { icon: Mountain, label: "Landscape", value: "Pristine" },
      { icon: Wheat, label: "Agriculture", value: "Growing" },
      { icon: Users, label: "Livestock", value: "Traditional" },
      { icon: Globe, label: "Tourism", value: "Potential" },
    ],
    image: daykundiLakes,
    detailedInfo: "Daykundi's pristine mountain lakes and valleys remain largely undiscovered by tourism, offering unique eco-tourism potential. Development requires significant road infrastructure investment but could provide economic alternatives to subsistence agriculture.",
  },
  {
    name: "Nuristan",
    nameLocal: "نورستان",
    description: "Afghanistan's most remote and forested province, Nuristan contains unique wooden architecture and distinctive cultural traditions. The province's isolation has preserved ancient customs while vast forests represent significant natural resources.",
    capital: "Parun",
    population: "160K",
    area: "9,225 km²",
    keyProjects: [
      "Sustainable Forestry Programme - Managed timber production",
      "Road Infrastructure Development - Connecting isolated valleys",
      "Cultural Heritage Preservation - Traditional architecture conservation",
      "Renewable Energy Access - Micro-hydro and solar systems",
      "Timber Processing - Sustainable wood products facilities",
      "Eco-Tourism Development - Cultural and nature experiences",
      "Agricultural Improvement - Mountain terrace cultivation",
    ],
    economicDrivers: ["Forestry", "Agriculture", "Tourism", "Timber", "Handicrafts"],
    investmentPotential: "Nuristan's vast forests represent Afghanistan's largest timber resource, requiring sustainable management. Unique cultural heritage and pristine landscapes offer exceptional eco-tourism potential once access improves.",
    highlights: [
      { icon: TreeDeciduous, label: "Forests", value: "Largest" },
      { icon: Building2, label: "Architecture", value: "Unique" },
      { icon: Mountain, label: "Remoteness", value: "Extreme" },
      { icon: Globe, label: "Tourism", value: "Untapped" },
    ],
    image: nuristanVillage,
    detailedInfo: "Nuristan's multi-story wooden houses, built into steep mountainsides, represent a unique architectural tradition found nowhere else. The province's forests, isolation, and distinctive culture offer exceptional tourism potential once accessibility improves.",
  },
  {
    name: "Kunar",
    nameLocal: "کنر",
    description: "An eastern province along the Kunar River, known for its forested mountains and honey production. The province's position on the Pakistan border enables trade while forests support timber and non-timber forest products.",
    capital: "Asadabad",
    population: "500K",
    area: "4,339 km²",
    keyProjects: [
      "Sustainable Forestry Programme - Managed timber production",
      "Honey Production Enhancement - Mountain apiculture expansion",
      "Hydropower Development - River-based electricity generation",
      "Border Trade Facility - Pakistan commerce enhancement",
      "Agricultural Improvement - Valley cultivation expansion",
      "Road Infrastructure - Regional connectivity improvement",
      "Timber Processing - Sustainable wood products",
    ],
    economicDrivers: ["Forestry", "Agriculture", "Honey", "Trade", "Energy"],
    investmentPotential: "Kunar's forests and honey production represent significant economic potential with proper management. Hydroelectric potential along the Kunar River offers clean energy opportunities while border trade provides commercial activity.",
    highlights: [
      { icon: TreeDeciduous, label: "Forests", value: "Extensive" },
      { icon: Wheat, label: "Honey", value: "Premium" },
      { icon: Zap, label: "Hydro Power", value: "Potential" },
      { icon: Globe, label: "Trade Route", value: "Pakistan" },
    ],
    image: kunarHoney,
    detailedInfo: "Kunar honey, produced from mountain wildflowers, is prized for its medicinal properties and distinctive flavour. Sustainable forestry and expanded apiculture could provide significant income while preserving environmental values.",
  },
  {
    name: "Laghman",
    nameLocal: "لغمان",
    description: "A fertile eastern province along the Kabul River, Laghman produces citrus fruits, rice, and vegetables. The province's subtropical climate enables unique agricultural production not possible in Afghanistan's highland regions.",
    capital: "Mehtar Lam",
    population: "500K",
    area: "3,843 km²",
    keyProjects: [
      "Citrus Production Enhancement - Modern orchards and processing",
      "Rice Processing Complex - Milling and packaging facilities",
      "Irrigation Improvement - Canal rehabilitation and efficiency",
      "Agricultural Cooperative Network - Farmer organisation and market access",
      "Hydropower Development - Small dam projects",
      "Road Infrastructure - Kabul connection improvement",
      "Cold Storage Network - Post-harvest facilities",
    ],
    economicDrivers: ["Agriculture", "Trade", "Fruits", "Rice", "Vegetables"],
    investmentPotential: "Laghman's subtropical climate enables citrus production unique in Afghanistan, with strong demand in domestic and regional markets. Rice and vegetable production serves the Kabul market while processing adds value to agricultural output.",
    highlights: [
      { icon: Wheat, label: "Citrus", value: "Unique" },
      { icon: Droplets, label: "Irrigation", value: "Strong" },
      { icon: Globe, label: "Markets", value: "Kabul" },
      { icon: Factory, label: "Processing", value: "Growing" },
    ],
    image: laghmanCitrus,
    detailedInfo: "Laghman's position in the Kabul River valley creates a subtropical microclimate ideal for citrus cultivation. Oranges, lemons, and other fruits from the province supply markets across Afghanistan, commanding premium prices for their quality.",
  },
];

export const ProvinceShowcase = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold font-medium tracking-widest uppercase text-sm">Provincial Development</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            All 34 Provinces
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive economic profiles, key investment projects, and development opportunities across every province of Afghanistan.
          </p>
        </motion.div>

        <div className="space-y-32">
          {provincesData.map((province, index) => (
            <motion.div
              key={province.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                {province.image && (
                  <div className="relative overflow-hidden rounded-2xl">
                    <motion.img
                      src={province.image}
                      alt={province.name}
                      className="w-full h-[400px] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-4xl font-bold text-gold">{String(index + 1).padStart(2, '0')}</span>
                        <div>
                          <h3 className="text-2xl font-bold">{province.name}</h3>
                          <p className="text-gold text-lg font-arabic">{province.nameLocal}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-3 mt-4">
                  {province.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card/50 border border-border/50 rounded-lg p-3 text-center"
                    >
                      <highlight.icon className="w-5 h-5 mx-auto mb-1 text-gold" />
                      <p className="text-xs text-muted-foreground">{highlight.label}</p>
                      <p className="text-sm font-bold">{highlight.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {province.economicDrivers.slice(0, 5).map((driver, i) => (
                      <span key={i} className="px-3 py-1 text-xs bg-gold/10 text-gold rounded-full border border-gold/20">
                        {driver}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{province.description}</p>
                </div>

                <div className="mb-6 p-4 bg-card/30 rounded-lg border border-border/30">
                  <h4 className="text-sm font-semibold text-gold mb-2">Investment Potential</h4>
                  <p className="text-sm text-muted-foreground">{province.investmentPotential}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gold mb-3">Key Development Projects</h4>
                  <ul className="space-y-2">
                    {province.keyProjects.slice(0, 4).map((project, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Capital</p>
                    <p className="text-sm font-medium">{province.capital}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Population</p>
                    <p className="text-sm font-medium">{province.population}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Area</p>
                    <p className="text-sm font-medium">{province.area}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
