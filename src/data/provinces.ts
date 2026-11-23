export interface ProvinceData {
  id: string;
  name: string;
  region: string;
  capital: string;
  population: string;
  area: string;
  description: string;
  /** One-line strategic potential for map list and tooltips */
  strategicPotential: string;
  keyResources: string[];
  primarySectors: string[];
  investment: string;
  projects: number;
  jobs: string;
  gdp: string;
  growth: string;
  infrastructure: {
    roads: string;
    energy: string;
    water: string;
    telecom: string;
  };
  highlights: string[];
  opportunities: string[];
  challenges: string[];
}

export const provincesData: ProvinceData[] = [
  {
    id: "kabul",
    name: "Kabul",
    region: "Central",
    capital: "Kabul",
    population: "4.6M",
    area: "4,462 km²",
    description: "The capital and largest city of Afghanistan, Kabul serves as the political, economic, and cultural heart of the nation. As the primary hub for technology, finance, and government services, Kabul offers unparalleled opportunities for investment in urban development, digital infrastructure, and service industries.",
    strategicPotential: "National Capital & Economic Hub",
    keyResources: ["Strategic Location", "Human Capital", "Government Institutions", "Financial Services", "Technology Hub"],
    primarySectors: ["Technology", "Finance", "Infrastructure", "Education", "Healthcare", "Real Estate"],
    investment: "$8.5B",
    projects: 120,
    jobs: "250K+",
    gdp: "$12.5B",
    growth: "6.2%",
    infrastructure: {
      roads: "2,800km",
      energy: "1.2GW",
      water: "92%",
      telecom: "98%"
    },
    highlights: [
      "National capital and administrative center",
      "Largest technology and startup ecosystem",
      "Major financial services hub",
      "International airport and logistics center",
      "Leading universities and research institutions"
    ],
    opportunities: [
      "Smart city development projects",
      "Technology park and innovation districts",
      "Financial services expansion",
      "Urban infrastructure modernization",
      "Real estate and commercial development",
      "Education and training centers",
      "Healthcare facilities expansion"
    ],
    challenges: [
      "Urban planning and congestion management",
      "Infrastructure capacity expansion",
      "Affordable housing development",
      "Environmental sustainability",
      "Traffic and transportation systems"
    ]
  },
  {
    id: "herat",
    name: "Herat",
    region: "West",
    capital: "Herat",
    population: "2.1M",
    area: "54,778 km²",
    description: "Herat is Afghanistan's western gateway and a major trade hub connecting Central Asia with South Asia and the Middle East. Known for its rich cultural heritage, strategic location, and growing manufacturing sector, Herat offers exceptional opportunities in trade, logistics, manufacturing, and tourism.",
    strategicPotential: "Western Trade Gateway",
    keyResources: ["Trade Routes", "Cultural Heritage", "Agricultural Land", "Manufacturing Base", "Border Access"],
    primarySectors: ["Manufacturing", "Trade", "Agriculture", "Textiles", "Carpets", "Tourism"],
    investment: "$4.8B",
    projects: 65,
    jobs: "180K+",
    gdp: "$6.2B",
    growth: "5.8%",
    infrastructure: {
      roads: "1,500km",
      energy: "850MW",
      water: "78%",
      telecom: "85%"
    },
    highlights: [
      "Major international trade hub",
      "Historic cultural sites (UNESCO)",
      "Textile and carpet manufacturing center",
      "Agricultural processing facilities",
      "Border trade facilitation"
    ],
    opportunities: [
      "International trade zone development",
      "Manufacturing industrial parks",
      "Cultural tourism infrastructure",
      "Agricultural processing plants",
      "Logistics and warehousing",
      "Textile and carpet industry expansion",
      "Border infrastructure enhancement"
    ],
    challenges: [
      "Infrastructure modernization",
      "Water resource management",
      "Border security coordination",
      "Manufacturing competitiveness",
      "Tourism infrastructure development"
    ]
  },
  {
    id: "kandahar",
    name: "Kandahar",
    region: "South",
    capital: "Kandahar",
    population: "1.4M",
    area: "54,022 km²",
    description: "Kandahar is Afghanistan's second-largest city and the economic center of the southern region. Known for its agricultural productivity, particularly pomegranates and other fruits, Kandahar offers significant opportunities in agriculture, logistics, mining, and regional trade.",
    strategicPotential: "Southern Agricultural Hub",
    keyResources: ["Agricultural Land", "Fruit Production", "Strategic Location", "Mining Potential", "Trade Routes"],
    primarySectors: ["Agriculture", "Fruit Processing", "Logistics", "Mining", "Trade", "Transportation"],
    investment: "$4.2B",
    projects: 55,
    jobs: "150K+",
    gdp: "$5.5B",
    growth: "5.5%",
    infrastructure: {
      roads: "1,200km",
      energy: "650MW",
      water: "72%",
      telecom: "75%"
    },
    highlights: [
      "Major agricultural production center",
      "Pomegranate export hub",
      "Strategic transportation node",
      "Regional trade center",
      "Growing mining sector"
    ],
    opportunities: [
      "Agricultural processing facilities",
      "Cold storage and logistics",
      "Fruit export infrastructure",
      "Mining development",
      "Transportation hub expansion",
      "Irrigation system modernization",
      "Agri-tech innovation"
    ],
    challenges: [
      "Water resource optimization",
      "Agricultural productivity enhancement",
      "Infrastructure connectivity",
      "Market access expansion",
      "Climate resilience"
    ]
  },
  {
    id: "balkh",
    name: "Balkh",
    region: "North",
    capital: "Mazar-i-Sharif",
    population: "1.5M",
    area: "17,249 km²",
    description: "Balkh, with its capital Mazar-i-Sharif, is a major northern economic center known for its agricultural productivity, industrial development, and strategic location on trade routes to Central Asia. The province offers opportunities in agriculture, manufacturing, energy, and regional trade.",
    strategicPotential: "Northern Industrial Centre",
    keyResources: ["Agricultural Land", "Industrial Base", "Trade Routes", "Energy Potential", "Cultural Sites"],
    primarySectors: ["Agriculture", "Manufacturing", "Energy", "Trade", "Textiles", "Food Processing"],
    investment: "$3.2B",
    projects: 48,
    jobs: "125K+",
    gdp: "$4.8B",
    growth: "5.2%",
    infrastructure: {
      roads: "1,400km",
      energy: "720MW",
      water: "75%",
      telecom: "80%"
    },
    highlights: [
      "Major agricultural region",
      "Industrial manufacturing center",
      "Strategic trade location",
      "Blue Mosque cultural site",
      "Energy infrastructure development"
    ],
    opportunities: [
      "Agricultural processing expansion",
      "Industrial zone development",
      "Energy project development",
      "Trade infrastructure enhancement",
      "Manufacturing facility expansion",
      "Textile industry growth",
      "Regional logistics hub"
    ],
    challenges: [
      "Industrial modernization",
      "Agricultural productivity",
      "Energy infrastructure",
      "Trade route optimization",
      "Water management"
    ]
  },
  {
    id: "nangarhar",
    name: "Nangarhar",
    region: "East",
    capital: "Jalalabad",
    population: "1.7M",
    area: "7,727 km²",
    description: "Nangarhar, with its capital Jalalabad, is a key eastern province known for its agricultural productivity, trade connections with Pakistan, and growing industrial sector. The province offers opportunities in agriculture, trade, manufacturing, and border commerce.",
    strategicPotential: "Eastern Trade Corridor",
    keyResources: ["Agricultural Land", "Trade Routes", "Border Access", "Fruit Production", "Water Resources"],
    primarySectors: ["Agriculture", "Trade", "Fruit Processing", "Manufacturing", "Logistics", "Border Commerce"],
    investment: "$3.8B",
    projects: 52,
    jobs: "140K+",
    gdp: "$5.2B",
    growth: "5.6%",
    infrastructure: {
      roads: "1,300km",
      energy: "680MW",
      water: "74%",
      telecom: "78%"
    },
    highlights: [
      "Major agricultural production",
      "Strategic border location",
      "Fruit export center",
      "Trade facilitation hub",
      "Growing manufacturing sector"
    ],
    opportunities: [
      "Agricultural processing plants",
      "Border trade zone development",
      "Fruit export infrastructure",
      "Manufacturing facilities",
      "Logistics and warehousing",
      "Irrigation modernization",
      "Trade route enhancement"
    ],
    challenges: [
      "Border infrastructure",
      "Agricultural productivity",
      "Water resource management",
      "Trade facilitation",
      "Manufacturing competitiveness"
    ]
  },
  {
    id: "badakhshan",
    name: "Badakhshan",
    region: "North",
    capital: "Fayzabad",
    population: "1.0M",
    area: "44,059 km²",
    description: "Badakhshan is a mountainous province in northeastern Afghanistan, renowned for its rich mineral resources including gemstones, gold, and other precious metals. The province offers exceptional opportunities in mining, energy development, and eco-tourism.",
    strategicPotential: "Gemstone Mining Region",
    keyResources: ["Gemstones", "Gold", "Precious Metals", "Hydroelectric Potential", "Natural Beauty"],
    primarySectors: ["Mining", "Energy", "Tourism", "Agriculture", "Gem Processing", "Hydroelectric"],
    investment: "$3.5B",
    projects: 28,
    jobs: "85K+",
    gdp: "$4.2B",
    growth: "6.5%",
    infrastructure: {
      roads: "850km",
      energy: "420MW",
      water: "68%",
      telecom: "65%"
    },
    highlights: [
      "Rich gemstone deposits",
      "Gold mining potential",
      "Hydroelectric power sites",
      "Stunning natural landscapes",
      "Strategic border location"
    ],
    opportunities: [
      "Gemstone mining and processing",
      "Gold mining development",
      "Hydroelectric power projects",
      "Eco-tourism infrastructure",
      "Mineral processing facilities",
      "Mountain agriculture",
      "Border trade development"
    ],
    challenges: [
      "Mountainous terrain access",
      "Infrastructure development",
      "Mining regulation",
      "Environmental protection",
      "Remote area connectivity"
    ]
  },
  {
    id: "ghazni",
    name: "Ghazni",
    region: "Central",
    capital: "Ghazni",
    population: "1.3M",
    area: "22,915 km²",
    description: "Ghazni is a central province with significant lithium deposits and growing importance in the mining sector. The province offers opportunities in lithium extraction, energy development, agriculture, and infrastructure projects.",
    strategicPotential: "Lithium Mining Hub",
    keyResources: ["Lithium Deposits", "Agricultural Land", "Strategic Location", "Energy Potential", "Historical Sites"],
    primarySectors: ["Mining", "Lithium Extraction", "Energy", "Agriculture", "Infrastructure", "Tourism"],
    investment: "$3.0B",
    projects: 35,
    jobs: "95K+",
    gdp: "$4.0B",
    growth: "6.0%",
    infrastructure: {
      roads: "1,100km",
      energy: "580MW",
      water: "70%",
      telecom: "72%"
    },
    highlights: [
      "Major lithium reserves",
      "Strategic central location",
      "Historical significance",
      "Growing mining sector",
      "Agricultural potential"
    ],
    opportunities: [
      "Lithium mining and processing",
      "Battery manufacturing",
      "Energy storage facilities",
      "Agricultural development",
      "Infrastructure projects",
      "Renewable energy",
      "Tourism development"
    ],
    challenges: [
      "Mining infrastructure",
      "Water resource management",
      "Environmental considerations",
      "Transportation access",
      "Technical expertise"
    ]
  },
  {
    id: "logar",
    name: "Logar",
    region: "Central",
    capital: "Pul-i-Alam",
    population: "450K",
    area: "3,879 km²",
    description: "Logar is a central province with significant copper deposits, particularly the Aynak copper mine, one of the world's largest undeveloped copper resources. The province offers exceptional opportunities in mining, energy, and related infrastructure development.",
    strategicPotential: "Aynak Copper Deposits",
    keyResources: ["Copper Deposits", "Strategic Location", "Energy Potential", "Agricultural Land", "Mineral Resources"],
    primarySectors: ["Mining", "Copper Extraction", "Energy", "Infrastructure", "Agriculture", "Manufacturing"],
    investment: "$5.2B",
    projects: 45,
    jobs: "120K+",
    gdp: "$5.8B",
    growth: "7.2%",
    infrastructure: {
      roads: "950km",
      energy: "520MW",
      water: "68%",
      telecom: "70%"
    },
    highlights: [
      "Aynak copper mine (world-class)",
      "Strategic proximity to Kabul",
      "Growing mining sector",
      "Infrastructure development",
      "Energy potential"
    ],
    opportunities: [
      "Copper mining development",
      "Smelting and processing facilities",
      "Energy infrastructure",
      "Transportation networks",
      "Supporting industries",
      "Workforce development",
      "Environmental management"
    ],
    challenges: [
      "Large-scale mining operations",
      "Infrastructure requirements",
      "Environmental impact",
      "Water resource management",
      "Community development"
    ]
  },
  {
    id: "wardak",
    name: "Wardak",
    region: "Central",
    capital: "Maidan Shar",
    population: "650K",
    area: "9,934 km²",
    description: "Wardak is a central province known for its agricultural productivity and strategic location. The province offers opportunities in agriculture, food processing, and infrastructure development.",
    strategicPotential: "Agricultural Development",
    keyResources: ["Agricultural Land", "Strategic Location", "Water Resources", "Livestock", "Fruit Production"],
    primarySectors: ["Agriculture", "Food Processing", "Livestock", "Infrastructure", "Transportation", "Trade"],
    investment: "$1.8B",
    projects: 20,
    jobs: "55K+",
    gdp: "$2.2B",
    growth: "4.8%",
    infrastructure: {
      roads: "800km",
      energy: "380MW",
      water: "65%",
      telecom: "68%"
    },
    highlights: [
      "Agricultural productivity",
      "Strategic central location",
      "Livestock production",
      "Transportation hub",
      "Growing food processing"
    ],
    opportunities: [
      "Agricultural development",
      "Food processing facilities",
      "Livestock industry",
      "Infrastructure improvement",
      "Transportation networks",
      "Market access",
      "Irrigation systems"
    ],
    challenges: [
      "Agricultural productivity",
      "Infrastructure development",
      "Market connectivity",
      "Water management",
      "Processing capacity"
    ]
  },
  {
    id: "parwan",
    name: "Parwan",
    region: "Central",
    capital: "Charikar",
    population: "750K",
    area: "5,974 km²",
    description: "Parwan is a central province known for its strategic location, agricultural production, and growing economic zones. The province offers opportunities in agriculture, manufacturing, and infrastructure development.",
    strategicPotential: "Bagram Economic Zone",
    keyResources: ["Strategic Location", "Agricultural Land", "Economic Zones", "Water Resources", "Transportation"],
    primarySectors: ["Agriculture", "Manufacturing", "Economic Zones", "Infrastructure", "Trade", "Services"],
    investment: "$2.5B",
    projects: 30,
    jobs: "75K+",
    gdp: "$3.2B",
    growth: "5.5%",
    infrastructure: {
      roads: "1,000km",
      energy: "450MW",
      water: "72%",
      telecom: "75%"
    },
    highlights: [
      "Strategic economic zones",
      "Agricultural productivity",
      "Manufacturing development",
      "Transportation access",
      "Growing services sector"
    ],
    opportunities: [
      "Economic zone expansion",
      "Manufacturing facilities",
      "Agricultural processing",
      "Infrastructure development",
      "Trade facilitation",
      "Service industries",
      "Logistics hubs"
    ],
    challenges: [
      "Zone development",
      "Infrastructure capacity",
      "Market access",
      "Workforce development",
      "Investment attraction"
    ]
  },
  {
    id: "kapisa",
    name: "Kapisa",
    region: "Central",
    capital: "Mahmud-i-Raqi",
    population: "500K",
    area: "1,842 km²",
    description: "Kapisa is a central province known for its agricultural production, particularly fruits and vegetables. The province offers opportunities in agriculture, food processing, and rural development.",
    strategicPotential: "Fertile Agricultural Valley",
    keyResources: ["Agricultural Land", "Fruit Production", "Water Resources", "Livestock", "Strategic Location"],
    primarySectors: ["Agriculture", "Fruit Processing", "Livestock", "Food Production", "Rural Development", "Trade"],
    investment: "$1.2B",
    projects: 18,
    jobs: "42K+",
    gdp: "$1.8B",
    growth: "4.5%",
    infrastructure: {
      roads: "650km",
      energy: "320MW",
      water: "62%",
      telecom: "65%"
    },
    highlights: [
      "Fruit and vegetable production",
      "Agricultural diversity",
      "Rural development focus",
      "Food processing potential",
      "Market access"
    ],
    opportunities: [
      "Agricultural expansion",
      "Food processing facilities",
      "Fruit export development",
      "Irrigation modernization",
      "Rural infrastructure",
      "Market connectivity",
      "Value chain development"
    ],
    challenges: [
      "Agricultural productivity",
      "Processing capacity",
      "Market access",
      "Infrastructure development",
      "Water management"
    ]
  },
  {
    id: "bamyan",
    name: "Bamyan",
    region: "Central",
    capital: "Bamyan",
    population: "500K",
    area: "14,175 km²",
    description: "Bamyan is a central province renowned for its cultural heritage, including the ancient Buddha statues, and growing tourism sector. The province offers opportunities in tourism, mining, agriculture, and cultural preservation.",
    strategicPotential: "Cultural Heritage Tourism",
    keyResources: ["Cultural Heritage", "Tourism Potential", "Mining Resources", "Natural Beauty", "Agricultural Land"],
    primarySectors: ["Tourism", "Mining", "Agriculture", "Cultural Heritage", "Eco-Tourism", "Handicrafts"],
    investment: "$4.5B",
    projects: 38,
    jobs: "95K+",
    gdp: "$4.8B",
    growth: "6.8%",
    infrastructure: {
      roads: "900km",
      energy: "480MW",
      water: "70%",
      telecom: "72%"
    },
    highlights: [
      "UNESCO World Heritage sites",
      "Tourism development",
      "Mining potential",
      "Cultural preservation",
      "Natural landscapes"
    ],
    opportunities: [
      "Tourism infrastructure",
      "Cultural heritage preservation",
      "Mining development",
      "Eco-tourism projects",
      "Handicraft industry",
      "Agricultural development",
      "Hospitality services"
    ],
    challenges: [
      "Tourism infrastructure",
      "Accessibility improvement",
      "Cultural preservation",
      "Environmental protection",
      "Seasonal tourism"
    ]
  },
  {
    id: "panjshir",
    name: "Panjshir",
    region: "Central",
    capital: "Bazarak",
    population: "180K",
    area: "3,610 km²",
    description: "Panjshir is a mountainous central province known for its emerald deposits, natural beauty, and strategic location. The province offers opportunities in mining, hydroelectric power, tourism, and agriculture.",
    strategicPotential: "Emerald Mining & Tourism",
    keyResources: ["Emeralds", "Hydroelectric Potential", "Natural Beauty", "Strategic Location", "Water Resources"],
    primarySectors: ["Mining", "Energy", "Tourism", "Agriculture", "Gem Processing", "Hydroelectric"],
    investment: "$1.5B",
    projects: 15,
    jobs: "38K+",
    gdp: "$2.0B",
    growth: "5.8%",
    infrastructure: {
      roads: "550km",
      energy: "280MW",
      water: "65%",
      telecom: "62%"
    },
    highlights: [
      "Emerald mining",
      "Hydroelectric potential",
      "Natural beauty",
      "Strategic valley location",
      "Growing tourism"
    ],
    opportunities: [
      "Emerald mining and processing",
      "Hydroelectric projects",
      "Tourism development",
      "Mountain agriculture",
      "Gem industry",
      "Eco-tourism",
      "Energy infrastructure"
    ],
    challenges: [
      "Mountainous terrain",
      "Infrastructure access",
      "Mining regulation",
      "Environmental protection",
      "Remote connectivity"
    ]
  },
  {
    id: "daikundi",
    name: "Daikundi",
    region: "Central",
    capital: "Nili",
    population: "500K",
    area: "18,088 km²",
    description: "Daikundi is a central highland province known for its agricultural potential, livestock production, and natural resources. The province offers opportunities in agriculture, livestock, mining, and rural development.",
    strategicPotential: "Highland Agriculture",
    keyResources: ["Agricultural Land", "Livestock", "Mining Potential", "Water Resources", "Natural Resources"],
    primarySectors: ["Agriculture", "Livestock", "Mining", "Rural Development", "Food Processing", "Natural Resources"],
    investment: "$1.0B",
    projects: 14,
    jobs: "32K+",
    gdp: "$1.5B",
    growth: "4.2%",
    infrastructure: {
      roads: "600km",
      energy: "250MW",
      water: "58%",
      telecom: "60%"
    },
    highlights: [
      "Agricultural potential",
      "Livestock production",
      "Mining resources",
      "Rural development",
      "Natural resources"
    ],
    opportunities: [
      "Agricultural development",
      "Livestock industry",
      "Mining exploration",
      "Rural infrastructure",
      "Food processing",
      "Water management",
      "Market access"
    ],
    challenges: [
      "Infrastructure development",
      "Market connectivity",
      "Agricultural productivity",
      "Water resource management",
      "Remote access"
    ]
  },
  {
    id: "kunduz",
    name: "Kunduz",
    region: "North",
    capital: "Kunduz",
    population: "1.1M",
    area: "8,040 km²",
    description: "Kunduz is a northern province known for its agricultural productivity, particularly cotton and other crops. The province offers opportunities in agriculture, food processing, trade, and infrastructure development.",
    strategicPotential: "Northern Agricultural Centre",
    keyResources: ["Agricultural Land", "Cotton Production", "Trade Routes", "Water Resources", "Strategic Location"],
    primarySectors: ["Agriculture", "Cotton Processing", "Food Processing", "Trade", "Infrastructure", "Textiles"],
    investment: "$2.2B",
    projects: 35,
    jobs: "88K+",
    gdp: "$3.0B",
    growth: "5.0%",
    infrastructure: {
      roads: "1,100km",
      energy: "520MW",
      water: "72%",
      telecom: "75%"
    },
    highlights: [
      "Major cotton production",
      "Agricultural diversity",
      "Trade hub location",
      "Food processing",
      "Growing infrastructure"
    ],
    opportunities: [
      "Cotton processing facilities",
      "Agricultural expansion",
      "Food processing plants",
      "Trade infrastructure",
      "Textile manufacturing",
      "Irrigation systems",
      "Market development"
    ],
    challenges: [
      "Agricultural productivity",
      "Processing capacity",
      "Infrastructure development",
      "Market access",
      "Water management"
    ]
  },
  {
    id: "baghlan",
    name: "Baghlan",
    region: "North",
    capital: "Pul-i-Khumri",
    population: "1.0M",
    area: "21,118 km²",
    description: "Baghlan is a northern province known for its sugar production, agricultural productivity, and energy potential. The province offers opportunities in agriculture, food processing, energy, and industrial development.",
    strategicPotential: "Energy Production Hub",
    keyResources: ["Sugar Production", "Agricultural Land", "Energy Potential", "Water Resources", "Industrial Base"],
    primarySectors: ["Agriculture", "Sugar Processing", "Energy", "Food Processing", "Industry", "Trade"],
    investment: "$2.0B",
    projects: 32,
    jobs: "78K+",
    gdp: "$2.8B",
    growth: "4.8%",
    infrastructure: {
      roads: "1,000km",
      energy: "480MW",
      water: "70%",
      telecom: "73%"
    },
    highlights: [
      "Sugar production center",
      "Agricultural productivity",
      "Energy development",
      "Industrial facilities",
      "Trade connections"
    ],
    opportunities: [
      "Sugar processing expansion",
      "Agricultural development",
      "Energy projects",
      "Food processing",
      "Industrial zones",
      "Infrastructure development",
      "Trade facilitation"
    ],
    challenges: [
      "Industrial modernization",
      "Agricultural productivity",
      "Energy infrastructure",
      "Processing capacity",
      "Market access"
    ]
  },
  {
    id: "takhar",
    name: "Takhar",
    region: "North",
    capital: "Taloqan",
    population: "1.1M",
    area: "12,333 km²",
    description: "Takhar is a northern province known for its agricultural production, particularly rice and other crops. The province offers opportunities in agriculture, food processing, and rural development.",
    strategicPotential: "Northeast Agricultural Zone",
    keyResources: ["Agricultural Land", "Rice Production", "Water Resources", "Livestock", "Natural Resources"],
    primarySectors: ["Agriculture", "Rice Processing", "Food Production", "Livestock", "Rural Development", "Trade"],
    investment: "$1.8B",
    projects: 28,
    jobs: "68K+",
    gdp: "$2.5B",
    growth: "4.6%",
    infrastructure: {
      roads: "950km",
      energy: "420MW",
      water: "68%",
      telecom: "70%"
    },
    highlights: [
      "Rice production center",
      "Agricultural diversity",
      "Water resources",
      "Livestock production",
      "Rural development"
    ],
    opportunities: [
      "Rice processing facilities",
      "Agricultural expansion",
      "Food processing",
      "Livestock industry",
      "Irrigation systems",
      "Rural infrastructure",
      "Market development"
    ],
    challenges: [
      "Agricultural productivity",
      "Processing capacity",
      "Infrastructure development",
      "Water management",
      "Market access"
    ]
  },
  {
    id: "faryab",
    name: "Faryab",
    region: "North",
    capital: "Maimana",
    population: "1.1M",
    area: "20,293 km²",
    description: "Faryab is a northern province known for its carpet production, agricultural productivity, and cultural heritage. The province offers opportunities in textiles, agriculture, food processing, and handicrafts.",
    strategicPotential: "Carpet Production Centre",
    keyResources: ["Carpet Production", "Agricultural Land", "Livestock", "Water Resources", "Cultural Heritage"],
    primarySectors: ["Textiles", "Carpets", "Agriculture", "Food Processing", "Handicrafts", "Livestock"],
    investment: "$1.6B",
    projects: 25,
    jobs: "62K+",
    gdp: "$2.2B",
    growth: "4.4%",
    infrastructure: {
      roads: "900km",
      energy: "380MW",
      water: "66%",
      telecom: "68%"
    },
    highlights: [
      "Carpet production center",
      "Textile industry",
      "Agricultural productivity",
      "Cultural heritage",
      "Handicraft tradition"
    ],
    opportunities: [
      "Carpet industry expansion",
      "Textile manufacturing",
      "Agricultural development",
      "Food processing",
      "Handicraft promotion",
      "Market access",
      "Design innovation"
    ],
    challenges: [
      "Industry modernization",
      "Market competitiveness",
      "Infrastructure development",
      "Design innovation",
      "Export facilitation"
    ]
  },
  {
    id: "jowzjan",
    name: "Jowzjan",
    region: "North",
    capital: "Sheberghan",
    population: "600K",
    area: "11,798 km²",
    description: "Jowzjan is a northern province known for its natural gas reserves and agricultural production. The province offers opportunities in energy, agriculture, food processing, and industrial development.",
    strategicPotential: "Natural Gas Reserves",
    keyResources: ["Natural Gas", "Agricultural Land", "Energy Resources", "Water Resources", "Strategic Location"],
    primarySectors: ["Energy", "Natural Gas", "Agriculture", "Food Processing", "Industry", "Trade"],
    investment: "$2.8B",
    projects: 22,
    jobs: "72K+",
    gdp: "$3.5B",
    growth: "5.5%",
    infrastructure: {
      roads: "850km",
      energy: "520MW",
      water: "70%",
      telecom: "72%"
    },
    highlights: [
      "Natural gas reserves",
      "Energy production",
      "Agricultural productivity",
      "Industrial development",
      "Strategic location"
    ],
    opportunities: [
      "Natural gas development",
      "Energy infrastructure",
      "Agricultural processing",
      "Industrial zones",
      "Food processing",
      "Energy export",
      "Infrastructure development"
    ],
    challenges: [
      "Energy infrastructure",
      "Resource development",
      "Industrial capacity",
      "Market access",
      "Technical expertise"
    ]
  },
  {
    id: "samangan",
    name: "Samangan",
    region: "North",
    capital: "Aybak",
    population: "450K",
    area: "11,262 km²",
    description: "Samangan is a northern province known for its cultural heritage, including Buddhist sites, and agricultural production. The province offers opportunities in tourism, agriculture, mining, and cultural preservation.",
    strategicPotential: "Historical Tourism",
    keyResources: ["Cultural Heritage", "Agricultural Land", "Mining Potential", "Tourism", "Natural Resources"],
    primarySectors: ["Tourism", "Cultural Heritage", "Agriculture", "Mining", "Food Processing", "Handicrafts"],
    investment: "$1.4B",
    projects: 18,
    jobs: "45K+",
    gdp: "$1.9B",
    growth: "4.8%",
    infrastructure: {
      roads: "750km",
      energy: "320MW",
      water: "64%",
      telecom: "66%"
    },
    highlights: [
      "Buddhist heritage sites",
      "Cultural tourism",
      "Agricultural production",
      "Mining potential",
      "Natural beauty"
    ],
    opportunities: [
      "Tourism development",
      "Cultural preservation",
      "Agricultural expansion",
      "Mining exploration",
      "Handicraft industry",
      "Infrastructure development",
      "Eco-tourism"
    ],
    challenges: [
      "Tourism infrastructure",
      "Cultural preservation",
      "Infrastructure development",
      "Market access",
      "Seasonal tourism"
    ]
  },
  {
    id: "sar-e-pol",
    name: "Sar-e-Pol",
    region: "North",
    capital: "Sar-e-Pol",
    population: "600K",
    area: "15,999 km²",
    description: "Sar-e-Pol is a northern province known for its coal deposits and agricultural production. The province offers opportunities in mining, energy, agriculture, and industrial development.",
    strategicPotential: "Coal Mining Region",
    keyResources: ["Coal Deposits", "Agricultural Land", "Energy Potential", "Water Resources", "Mining Resources"],
    primarySectors: ["Mining", "Coal", "Energy", "Agriculture", "Food Processing", "Industry"],
    investment: "$1.8B",
    projects: 15,
    jobs: "48K+",
    gdp: "$2.2B",
    growth: "5.2%",
    infrastructure: {
      roads: "800km",
      energy: "380MW",
      water: "66%",
      telecom: "68%"
    },
    highlights: [
      "Coal mining",
      "Energy production",
      "Agricultural productivity",
      "Industrial potential",
      "Strategic location"
    ],
    opportunities: [
      "Coal mining development",
      "Energy projects",
      "Agricultural processing",
      "Industrial development",
      "Infrastructure improvement",
      "Energy infrastructure",
      "Market development"
    ],
    challenges: [
      "Mining infrastructure",
      "Energy development",
      "Environmental management",
      "Industrial capacity",
      "Market access"
    ]
  },
  {
    id: "ghor",
    name: "Ghor",
    region: "West",
    capital: "Chaghcharan",
    population: "750K",
    area: "36,479 km²",
    description: "Ghor is a western province known for its cultural heritage, including the Minaret of Jam (UNESCO World Heritage), and agricultural potential. The province offers opportunities in tourism, agriculture, mining, and cultural preservation.",
    strategicPotential: "Minaret of Jam Tourism",
    keyResources: ["Cultural Heritage", "UNESCO Sites", "Agricultural Land", "Mining Potential", "Natural Beauty"],
    primarySectors: ["Tourism", "Cultural Heritage", "Agriculture", "Mining", "Handicrafts", "Rural Development"],
    investment: "$1.2B",
    projects: 16,
    jobs: "42K+",
    gdp: "$1.8B",
    growth: "4.5%",
    infrastructure: {
      roads: "700km",
      energy: "280MW",
      water: "60%",
      telecom: "62%"
    },
    highlights: [
      "UNESCO World Heritage site",
      "Cultural tourism",
      "Agricultural potential",
      "Natural landscapes",
      "Historical significance"
    ],
    opportunities: [
      "Tourism infrastructure",
      "Cultural preservation",
      "Agricultural development",
      "Mining exploration",
      "Handicraft promotion",
      "Eco-tourism",
      "Infrastructure development"
    ],
    challenges: [
      "Tourism infrastructure",
      "Accessibility",
      "Cultural preservation",
      "Infrastructure development",
      "Market connectivity"
    ]
  },
  {
    id: "badghis",
    name: "Badghis",
    region: "West",
    capital: "Qala-i-Naw",
    population: "550K",
    area: "20,591 km²",
    description: "Badghis is a western province known for its pistachio production and agricultural productivity. The province offers opportunities in agriculture, food processing, livestock, and rural development.",
    strategicPotential: "Pistachio Forests",
    keyResources: ["Pistachio Production", "Agricultural Land", "Livestock", "Water Resources", "Natural Resources"],
    primarySectors: ["Agriculture", "Pistachio Processing", "Livestock", "Food Processing", "Rural Development", "Trade"],
    investment: "$1.0B",
    projects: 18,
    jobs: "48K+",
    gdp: "$1.5B",
    growth: "4.2%",
    infrastructure: {
      roads: "650km",
      energy: "250MW",
      water: "58%",
      telecom: "60%"
    },
    highlights: [
      "Pistachio production",
      "Agricultural diversity",
      "Livestock production",
      "Rural development",
      "Natural resources"
    ],
    opportunities: [
      "Pistachio processing",
      "Agricultural expansion",
      "Livestock industry",
      "Food processing",
      "Rural infrastructure",
      "Market development",
      "Irrigation systems"
    ],
    challenges: [
      "Agricultural productivity",
      "Processing capacity",
      "Infrastructure development",
      "Market access",
      "Water management"
    ]
  },
  {
    id: "farah",
    name: "Farah",
    region: "West",
    capital: "Farah",
    population: "550K",
    area: "48,471 km²",
    description: "Farah is a western province known for its solar energy potential and agricultural production. The province offers opportunities in renewable energy, agriculture, mining, and infrastructure development.",
    strategicPotential: "Solar Energy Potential",
    keyResources: ["Solar Potential", "Agricultural Land", "Mining Resources", "Water Resources", "Strategic Location"],
    primarySectors: ["Energy", "Solar", "Agriculture", "Mining", "Food Processing", "Infrastructure"],
    investment: "$1.6B",
    projects: 22,
    jobs: "58K+",
    gdp: "$2.0B",
    growth: "5.0%",
    infrastructure: {
      roads: "800km",
      energy: "420MW",
      water: "64%",
      telecom: "66%"
    },
    highlights: [
      "Solar energy potential",
      "Agricultural productivity",
      "Mining resources",
      "Strategic location",
      "Renewable energy"
    ],
    opportunities: [
      "Solar power projects",
      "Agricultural development",
      "Mining exploration",
      "Food processing",
      "Energy infrastructure",
      "Infrastructure development",
      "Renewable energy"
    ],
    challenges: [
      "Energy infrastructure",
      "Agricultural productivity",
      "Infrastructure development",
      "Market access",
      "Technical capacity"
    ]
  },
  {
    id: "nimroz",
    name: "Nimroz",
    region: "West",
    capital: "Zaranj",
    population: "200K",
    area: "41,005 km²",
    description: "Nimroz is a western border province known for its strategic location, border trade, and agricultural potential. The province offers opportunities in trade, logistics, agriculture, and border infrastructure.",
    strategicPotential: "Iran Border Trade Hub",
    keyResources: ["Border Location", "Trade Routes", "Agricultural Land", "Strategic Position", "Water Resources"],
    primarySectors: ["Trade", "Logistics", "Border Commerce", "Agriculture", "Infrastructure", "Services"],
    investment: "$1.2B",
    projects: 20,
    jobs: "52K+",
    gdp: "$1.6B",
    growth: "5.5%",
    infrastructure: {
      roads: "600km",
      energy: "280MW",
      water: "62%",
      telecom: "64%"
    },
    highlights: [
      "Strategic border location",
      "International trade",
      "Border infrastructure",
      "Agricultural potential",
      "Logistics hub"
    ],
    opportunities: [
      "Border trade zone",
      "Logistics facilities",
      "Agricultural development",
      "Infrastructure improvement",
      "Trade facilitation",
      "Customs infrastructure",
      "Market development"
    ],
    challenges: [
      "Border infrastructure",
      "Trade facilitation",
      "Infrastructure development",
      "Market connectivity",
      "Security coordination"
    ]
  },
  {
    id: "helmand",
    name: "Helmand",
    region: "South",
    capital: "Lashkargah",
    population: "1.0M",
    area: "58,584 km²",
    description: "Helmand is a southern province known as Afghanistan's breadbasket, with significant agricultural productivity. The province offers opportunities in agriculture, food processing, irrigation, and agricultural technology.",
    strategicPotential: "Agricultural Breadbasket",
    keyResources: ["Agricultural Land", "Water Resources", "Irrigation Systems", "Food Production", "Strategic Location"],
    primarySectors: ["Agriculture", "Food Processing", "Irrigation", "Agri-Tech", "Livestock", "Trade"],
    investment: "$2.5B",
    projects: 38,
    jobs: "95K+",
    gdp: "$3.2B",
    growth: "5.2%",
    infrastructure: {
      roads: "1,200km",
      energy: "580MW",
      water: "75%",
      telecom: "72%"
    },
    highlights: [
      "Major agricultural region",
      "Food production center",
      "Irrigation infrastructure",
      "Agricultural diversity",
      "Strategic importance"
    ],
    opportunities: [
      "Agricultural expansion",
      "Food processing facilities",
      "Irrigation modernization",
      "Agri-tech innovation",
      "Cold storage",
      "Market development",
      "Export infrastructure"
    ],
    challenges: [
      "Water management",
      "Agricultural productivity",
      "Processing capacity",
      "Market access",
      "Infrastructure development"
    ]
  },
  {
    id: "zabul",
    name: "Zabul",
    region: "South",
    capital: "Qalat",
    population: "350K",
    area: "17,343 km²",
    description: "Zabul is a southern province known for its livestock production and agricultural potential. The province offers opportunities in livestock, agriculture, food processing, and rural development.",
    strategicPotential: "Livestock Development",
    keyResources: ["Livestock", "Agricultural Land", "Water Resources", "Natural Resources", "Strategic Location"],
    primarySectors: ["Livestock", "Agriculture", "Food Processing", "Rural Development", "Trade", "Services"],
    investment: "$0.8B",
    projects: 15,
    jobs: "38K+",
    gdp: "$1.2B",
    growth: "4.0%",
    infrastructure: {
      roads: "550km",
      energy: "220MW",
      water: "56%",
      telecom: "58%"
    },
    highlights: [
      "Livestock production",
      "Agricultural potential",
      "Rural development",
      "Natural resources",
      "Strategic location"
    ],
    opportunities: [
      "Livestock industry",
      "Agricultural development",
      "Food processing",
      "Rural infrastructure",
      "Market development",
      "Water management",
      "Value chain development"
    ],
    challenges: [
      "Infrastructure development",
      "Market connectivity",
      "Livestock productivity",
      "Water resource management",
      "Processing capacity"
    ]
  },
  {
    id: "uruzgan",
    name: "Uruzgan",
    region: "South",
    capital: "Tarin Kowt",
    population: "400K",
    area: "22,696 km²",
    description: "Uruzgan is a southern province known for its agricultural production and natural resources. The province offers opportunities in agriculture, food processing, mining, and rural development.",
    strategicPotential: "Agricultural Potential",
    keyResources: ["Agricultural Land", "Natural Resources", "Water Resources", "Livestock", "Mining Potential"],
    primarySectors: ["Agriculture", "Food Processing", "Mining", "Livestock", "Rural Development", "Trade"],
    investment: "$0.9B",
    projects: 14,
    jobs: "35K+",
    gdp: "$1.3B",
    growth: "4.0%",
    infrastructure: {
      roads: "600km",
      energy: "240MW",
      water: "58%",
      telecom: "60%"
    },
    highlights: [
      "Agricultural productivity",
      "Natural resources",
      "Rural development",
      "Mining potential",
      "Livestock production"
    ],
    opportunities: [
      "Agricultural expansion",
      "Food processing",
      "Mining exploration",
      "Livestock industry",
      "Rural infrastructure",
      "Market development",
      "Water management"
    ],
    challenges: [
      "Infrastructure development",
      "Market connectivity",
      "Agricultural productivity",
      "Water management",
      "Processing capacity"
    ]
  },
  {
    id: "paktya",
    name: "Paktya",
    region: "East",
    capital: "Gardez",
    population: "600K",
    area: "6,432 km²",
    description: "Paktya is an eastern province known for its forestry, agricultural production, and strategic location. The province offers opportunities in forestry, agriculture, food processing, and infrastructure development.",
    strategicPotential: "Timber & Forest Products",
    keyResources: ["Forestry", "Agricultural Land", "Water Resources", "Natural Resources", "Strategic Location"],
    primarySectors: ["Forestry", "Agriculture", "Food Processing", "Infrastructure", "Trade", "Services"],
    investment: "$1.4B",
    projects: 22,
    jobs: "55K+",
    gdp: "$2.0B",
    growth: "4.8%",
    infrastructure: {
      roads: "850km",
      energy: "380MW",
      water: "68%",
      telecom: "70%"
    },
    highlights: [
      "Forestry resources",
      "Agricultural productivity",
      "Strategic location",
      "Natural resources",
      "Infrastructure development"
    ],
    opportunities: [
      "Forestry management",
      "Agricultural development",
      "Food processing",
      "Infrastructure improvement",
      "Market development",
      "Trade facilitation",
      "Rural development"
    ],
    challenges: [
      "Forestry management",
      "Infrastructure development",
      "Market connectivity",
      "Agricultural productivity",
      "Resource conservation"
    ]
  },
  {
    id: "paktika",
    name: "Paktika",
    region: "East",
    capital: "Sharana",
    population: "500K",
    area: "19,482 km²",
    description: "Paktika is an eastern border province known for its agricultural production and strategic border location. The province offers opportunities in agriculture, border trade, infrastructure, and rural development.",
    strategicPotential: "Border Trade Zone",
    keyResources: ["Agricultural Land", "Border Location", "Water Resources", "Natural Resources", "Strategic Position"],
    primarySectors: ["Agriculture", "Border Trade", "Infrastructure", "Food Processing", "Rural Development", "Services"],
    investment: "$1.0B",
    projects: 18,
    jobs: "45K+",
    gdp: "$1.5B",
    growth: "4.2%",
    infrastructure: {
      roads: "700km",
      energy: "300MW",
      water: "62%",
      telecom: "64%"
    },
    highlights: [
      "Border location",
      "Agricultural productivity",
      "Strategic position",
      "Rural development",
      "Natural resources"
    ],
    opportunities: [
      "Agricultural development",
      "Border trade facilitation",
      "Infrastructure improvement",
      "Food processing",
      "Market development",
      "Rural infrastructure",
      "Trade infrastructure"
    ],
    challenges: [
      "Border infrastructure",
      "Infrastructure development",
      "Market connectivity",
      "Agricultural productivity",
      "Trade facilitation"
    ]
  },
  {
    id: "khost",
    name: "Khost",
    region: "East",
    capital: "Khost",
    population: "650K",
    area: "4,152 km²",
    description: "Khost is an eastern province known for its commercial activity, agricultural production, and strategic location. The province offers opportunities in commerce, agriculture, trade, and infrastructure development.",
    strategicPotential: "Cross-Border Commerce",
    keyResources: ["Commercial Activity", "Agricultural Land", "Strategic Location", "Water Resources", "Trade Routes"],
    primarySectors: ["Commerce", "Agriculture", "Trade", "Food Processing", "Infrastructure", "Services"],
    investment: "$1.6B",
    projects: 24,
    jobs: "62K+",
    gdp: "$2.2B",
    growth: "5.0%",
    infrastructure: {
      roads: "900km",
      energy: "420MW",
      water: "70%",
      telecom: "72%"
    },
    highlights: [
      "Commercial center",
      "Agricultural productivity",
      "Strategic location",
      "Trade activity",
      "Infrastructure development"
    ],
    opportunities: [
      "Commercial development",
      "Agricultural expansion",
      "Trade facilitation",
      "Food processing",
      "Infrastructure improvement",
      "Market development",
      "Service industries"
    ],
    challenges: [
      "Infrastructure development",
      "Market connectivity",
      "Commercial competitiveness",
      "Agricultural productivity",
      "Trade facilitation"
    ]
  },
  {
    id: "kunar",
    name: "Kunar",
    region: "East",
    capital: "Asadabad",
    population: "500K",
    area: "4,942 km²",
    description: "Kunar is an eastern province known for its hydroelectric potential, agricultural production, and natural beauty. The province offers opportunities in energy, agriculture, tourism, and infrastructure development.",
    strategicPotential: "Hydroelectric Potential",
    keyResources: ["Hydroelectric Potential", "Agricultural Land", "Natural Beauty", "Water Resources", "Tourism"],
    primarySectors: ["Energy", "Hydroelectric", "Agriculture", "Tourism", "Food Processing", "Infrastructure"],
    investment: "$1.4B",
    projects: 20,
    jobs: "52K+",
    gdp: "$1.9B",
    growth: "4.8%",
    infrastructure: {
      roads: "750km",
      energy: "380MW",
      water: "66%",
      telecom: "68%"
    },
    highlights: [
      "Hydroelectric potential",
      "Agricultural productivity",
      "Natural beauty",
      "Tourism potential",
      "Water resources"
    ],
    opportunities: [
      "Hydroelectric projects",
      "Agricultural development",
      "Tourism infrastructure",
      "Food processing",
      "Energy infrastructure",
      "Eco-tourism",
      "Infrastructure development"
    ],
    challenges: [
      "Energy infrastructure",
      "Infrastructure development",
      "Tourism development",
      "Agricultural productivity",
      "Accessibility"
    ]
  },
  {
    id: "laghman",
    name: "Laghman",
    region: "East",
    capital: "Mehtar Lam",
    population: "500K",
    area: "3,843 km²",
    description: "Laghman is an eastern province known for its citrus production and agricultural productivity. The province offers opportunities in agriculture, food processing, trade, and rural development.",
    strategicPotential: "Rice & Citrus Production",
    keyResources: ["Citrus Production", "Agricultural Land", "Water Resources", "Natural Resources", "Strategic Location"],
    primarySectors: ["Agriculture", "Citrus Processing", "Food Processing", "Trade", "Rural Development", "Services"],
    investment: "$1.2B",
    projects: 18,
    jobs: "48K+",
    gdp: "$1.7B",
    growth: "4.5%",
    infrastructure: {
      roads: "700km",
      energy: "320MW",
      water: "64%",
      telecom: "66%"
    },
    highlights: [
      "Citrus production",
      "Agricultural diversity",
      "Natural resources",
      "Rural development",
      "Strategic location"
    ],
    opportunities: [
      "Citrus processing",
      "Agricultural expansion",
      "Food processing",
      "Market development",
      "Rural infrastructure",
      "Irrigation systems",
      "Value chain development"
    ],
    challenges: [
      "Agricultural productivity",
      "Processing capacity",
      "Infrastructure development",
      "Market access",
      "Water management"
    ]
  },
  {
    id: "nuristan",
    name: "Nuristan",
    region: "East",
    capital: "Parun",
    population: "170K",
    area: "9,225 km²",
    description: "Nuristan is an eastern mountainous province known for its natural beauty, eco-tourism potential, and unique cultural heritage. The province offers opportunities in tourism, agriculture, forestry, and cultural preservation.",
    strategicPotential: "Eco-Tourism Destination",
    keyResources: ["Natural Beauty", "Eco-Tourism", "Forestry", "Cultural Heritage", "Water Resources"],
    primarySectors: ["Tourism", "Eco-Tourism", "Forestry", "Agriculture", "Cultural Heritage", "Handicrafts"],
    investment: "$0.6B",
    projects: 12,
    jobs: "28K+",
    gdp: "$0.9B",
    growth: "4.0%",
    infrastructure: {
      roads: "450km",
      energy: "180MW",
      water: "54%",
      telecom: "55%"
    },
    highlights: [
      "Natural beauty",
      "Eco-tourism potential",
      "Unique culture",
      "Forestry resources",
      "Mountain landscapes"
    ],
    opportunities: [
      "Eco-tourism development",
      "Tourism infrastructure",
      "Forestry management",
      "Cultural preservation",
      "Agricultural development",
      "Handicraft promotion",
      "Infrastructure development"
    ],
    challenges: [
      "Infrastructure access",
      "Tourism development",
      "Mountainous terrain",
      "Cultural preservation",
      "Market connectivity"
    ]
  }
];
