import { motion } from "framer-motion";
import {
  Rocket, Shield, Palette, Scale, FlaskConical, Leaf, Ship, Plane,
  Radio, Building2, Heart, GraduationCap, Users, Factory, Gem, Wheat,
  Zap, Droplets, Cpu, Truck, CreditCard, Home, Landmark, Mountain,
  TreeDeciduous, Sun, Wind, Fish, Shirt, Hammer, Scissors, Utensils,
  Package, Warehouse, Train, Car, Bike, Globe, Wifi, Smartphone, Monitor,
  Camera, Mic, Music, Film, BookOpen, Newspaper, Briefcase, Award, Star } from
"lucide-react";

interface MegaSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  stats: {value: string;label: string;}[];
  initiatives: string[];
  color: string;
}

const megaSections: MegaSection[] = [
{
  id: "aerospace",
  title: "Aerospace & Aviation",
  subtitle: "Connecting Afghanistan to the World",
  description: "Development of modern aviation infrastructure including international airports, domestic air networks, and aviation services industry supporting tourism and trade.",
  icon: Plane,
  stats: [
  { value: "12", label: "Airports" },
  { value: "50+", label: "Routes" },
  { value: "$2B", label: "Investment" },
  { value: "15K", label: "Jobs" }],

  initiatives: [
  "Kabul International Airport modernization with increased capacity",
  "Regional airport development in Herat, Mazar, and Kandahar",
  "Aviation training academy for pilots and technicians",
  "Cargo hub development for agricultural exports",
  "Air traffic control system upgrade"],

  color: "from-sky-500/20 to-sky-600/10"
},
{
  id: "maritime",
  title: "Trade Corridors & Logistics",
  subtitle: "Landlocked but Connected",
  description: "Strategic development of dry ports, free trade zones, and logistics infrastructure connecting Afghanistan to global markets through neighboring countries' seaports.",
  icon: Ship,
  stats: [
  { value: "5", label: "Dry Ports" },
  { value: "8", label: "FTZ Zones" },
  { value: "$5B", label: "Trade Value" },
  { value: "25K", label: "Jobs" }],

  initiatives: [
  "Chabahar Port corridor development with Iran",
  "Gwadar connection through Pakistan",
  "Central Asian rail links to Russia and Europe",
  "Free trade zone development at border crossings",
  "Logistics hub network across provinces"],

  color: "from-blue-500/20 to-blue-600/10"
},
{
  id: "defense",
  title: "Security & Defense Industry",
  subtitle: "Building National Capacity",
  description: "Development of indigenous defense manufacturing, security services, and protective infrastructure ensuring national sovereignty and stability.",
  icon: Shield,
  stats: [
  { value: "50K", label: "Personnel" },
  { value: "$1B", label: "Budget" },
  { value: "15", label: "Facilities" },
  { value: "100%", label: "Coverage" }],

  initiatives: [
  "Defense equipment manufacturing facilities",
  "Cybersecurity command centre development",
  "Border security infrastructure modernization",
  "Training academies for security forces",
  "Emergency response systems nationwide"],

  color: "from-slate-500/20 to-slate-600/10"
},
{
  id: "arts",
  title: "Arts & Creative Industries",
  subtitle: "Cultural Renaissance",
  description: "Promotion of traditional crafts, contemporary arts, film industry, and cultural preservation as economic drivers and sources of national identity.",
  icon: Palette,
  stats: [
  { value: "100K", label: "Artisans" },
  { value: "$500M", label: "Revenue" },
  { value: "1000+", label: "Enterprises" },
  { value: "Global", label: "Reach" }],

  initiatives: [
  "National film studios and production facilities",
  "Traditional crafts preservation and export",
  "Music and performing arts academies",
  "Digital content creation hubs",
  "Cultural tourism integration"],

  color: "from-pink-500/20 to-pink-600/10"
},
{
  id: "legal",
  title: "Legal & Professional Services",
  subtitle: "Enabling Business",
  description: "Development of professional services infrastructure including legal, accounting, consulting, and business services supporting economic growth.",
  icon: Scale,
  stats: [
  { value: "5K", label: "Professionals" },
  { value: "$200M", label: "Sector Value" },
  { value: "500+", label: "Firms" },
  { value: "Int'l", label: "Standards" }],

  initiatives: [
  "Legal education and bar association development",
  "Accounting standards harmonization",
  "Business consulting ecosystem growth",
  "International arbitration centre",
  "Professional certification programmes"],

  color: "from-violet-500/20 to-violet-600/10"
},
{
  id: "research",
  title: "Research & Development",
  subtitle: "Innovation Ecosystem",
  description: "Establishment of research institutions, innovation centres, and technology transfer programmes driving knowledge-based economic development.",
  icon: FlaskConical,
  stats: [
  { value: "25", label: "Institutes" },
  { value: "$500M", label: "R&D Budget" },
  { value: "5K", label: "Researchers" },
  { value: "100+", label: "Patents" }],

  initiatives: [
  "National research universities establishment",
  "Agricultural research stations network",
  "Mining and geology research centre",
  "Renewable energy innovation lab",
  "Technology commercialization programmes"],

  color: "from-cyan-500/20 to-cyan-600/10"
},
{
  id: "environment",
  title: "Environmental Services",
  subtitle: "Sustainable Future",
  description: "Development of environmental protection, conservation, and sustainable resource management services ensuring long-term ecological health.",
  icon: Leaf,
  stats: [
  { value: "15%", label: "Protected Area" },
  { value: "$300M", label: "Investment" },
  { value: "50+", label: "Projects" },
  { value: "Carbon", label: "Neutral Goal" }],

  initiatives: [
  "National park and wildlife reserve expansion",
  "Reforestation and afforestation programmes",
  "Waste management and recycling infrastructure",
  "Air and water quality monitoring",
  "Climate adaptation strategies"],

  color: "from-green-500/20 to-green-600/10"
},
{
  id: "fisheries",
  title: "Fisheries & Aquaculture",
  subtitle: "Blue Economy",
  description: "Development of freshwater fisheries, aquaculture, and fish processing industries utilizing Afghanistan's river systems and reservoirs.",
  icon: Fish,
  stats: [
  { value: "50K", label: "Tonnes" },
  { value: "$150M", label: "Value" },
  { value: "30K", label: "Jobs" },
  { value: "100+", label: "Farms" }],

  initiatives: [
  "Trout farming in highland lakes and rivers",
  "Carp aquaculture in irrigation systems",
  "Fish processing and cold chain development",
  "Sustainable fishing practices training",
  "Export market development"],

  color: "from-teal-500/20 to-teal-600/10"
},
{
  id: "textiles",
  title: "Textiles & Apparel",
  subtitle: "From Cotton to Couture",
  description: "Development of integrated textile manufacturing from cotton cultivation through spinning, weaving, and garment production for domestic and export markets.",
  icon: Shirt,
  stats: [
  { value: "100K", label: "Workers" },
  { value: "$1B", label: "Target" },
  { value: "500+", label: "Factories" },
  { value: "Export", label: "Ready" }],

  initiatives: [
  "Cotton production expansion and modernization",
  "Spinning and weaving mills development",
  "Garment manufacturing zones",
  "Traditional embroidery preservation",
  "Fashion design and training centres"],

  color: "from-rose-500/20 to-rose-600/10"
},
{
  id: "construction",
  title: "Construction & Materials",
  subtitle: "Building the Nation",
  description: "Development of construction industry including cement, steel, glass, and building materials manufacturing supporting infrastructure and housing needs.",
  icon: Hammer,
  stats: [
  { value: "200K", label: "Workers" },
  { value: "$3B", label: "Annual Value" },
  { value: "50+", label: "Cement Plants" },
  { value: "Rapid", label: "Growth" }],

  initiatives: [
  "Cement manufacturing capacity expansion",
  "Steel production facilities development",
  "Glass and ceramics industries",
  "Construction workforce training",
  "Building standards and safety regulations"],

  color: "from-orange-500/20 to-orange-600/10"
},
{
  id: "handicrafts",
  title: "Handicrafts & Artisanal",
  subtitle: "Heritage Economy",
  description: "Preservation and commercialization of traditional handicrafts including carpets, jewelry, woodwork, and pottery with global market access.",
  icon: Scissors,
  stats: [
  { value: "500K", label: "Artisans" },
  { value: "$800M", label: "Revenue" },
  { value: "UNESCO", label: "Heritage" },
  { value: "Global", label: "Export" }],

  initiatives: [
  "Afghan carpet brand development and certification",
  "Jewelry and gemstone cutting training",
  "Woodwork and inlay preservation",
  "E-commerce platform for artisans",
  "Fair trade certification programmes"],

  color: "from-amber-500/20 to-amber-600/10"
},
{
  id: "food",
  title: "Food Processing & FMCG",
  subtitle: "Value Addition",
  description: "Development of food processing, packaging, and consumer goods manufacturing adding value to agricultural products and reducing imports.",
  icon: Utensils,
  stats: [
  { value: "150+", label: "Factories" },
  { value: "$2B", label: "Sector Value" },
  { value: "80K", label: "Jobs" },
  { value: "50%", label: "Import Replace" }],

  initiatives: [
  "Fruit and vegetable processing facilities",
  "Dairy product manufacturing",
  "Edible oil production from local oilseeds",
  "Beverage and snack food industries",
  "Halal certification and export"],

  color: "from-yellow-500/20 to-yellow-600/10"
},
{
  id: "warehousing",
  title: "Warehousing & Cold Chain",
  subtitle: "Logistics Infrastructure",
  description: "Development of modern warehousing, cold storage, and supply chain infrastructure reducing post-harvest losses and enabling exports.",
  icon: Warehouse,
  stats: [
  { value: "100+", label: "Facilities" },
  { value: "500K", label: "Tonnes Capacity" },
  { value: "$500M", label: "Investment" },
  { value: "30%", label: "Loss Reduction" }],

  initiatives: [
  "Cold storage network in agricultural regions",
  "Modern warehousing at trade corridors",
  "Logistics management systems",
  "Packaging and grading facilities",
  "Transportation fleet development"],

  color: "from-stone-500/20 to-stone-600/10"
},
{
  id: "railways",
  title: "Railway Development",
  subtitle: "Connecting the Nation",
  description: "Construction of national railway network connecting major cities and linking to regional rail systems for efficient goods and passenger transport.",
  icon: Train,
  stats: [
  { value: "2000", label: "km Planned" },
  { value: "$10B", label: "Investment" },
  { value: "5", label: "Corridors" },
  { value: "2035", label: "Completion" }],

  initiatives: [
  "Mazar-Kabul-Kandahar mainline",
  "Herat-Iran railway connection",
  "Wakhan corridor to China",
  "Urban metro systems in major cities",
  "Railway engineering training centre"],

  color: "from-red-500/20 to-red-600/10"
},
{
  id: "automotive",
  title: "Automotive & Mobility",
  subtitle: "Transportation Solutions",
  description: "Development of automotive assembly, maintenance services, and sustainable mobility solutions including electric vehicles and public transport.",
  icon: Car,
  stats: [
  { value: "50K", label: "Vehicles/Year" },
  { value: "$500M", label: "Sector Value" },
  { value: "25K", label: "Jobs" },
  { value: "EV", label: "Future Ready" }],

  initiatives: [
  "Vehicle assembly plant establishment",
  "Automotive parts manufacturing",
  "Electric vehicle infrastructure",
  "Public transport modernization",
  "Traffic management systems"],

  color: "from-indigo-500/20 to-indigo-600/10"
},
{
  id: "telecom",
  title: "Telecommunications",
  subtitle: "Digital Connectivity",
  description: "Expansion of telecommunications infrastructure including 4G/5G networks, fiber optics, and satellite connectivity ensuring universal digital access.",
  icon: Radio,
  stats: [
  { value: "80%", label: "Coverage" },
  { value: "$1B", label: "Investment" },
  { value: "5G", label: "Deployment" },
  { value: "25M", label: "Subscribers" }],

  initiatives: [
  "5G network rollout in urban areas",
  "Fiber optic backbone expansion",
  "Rural connectivity programmes",
  "Satellite internet for remote areas",
  "Digital literacy campaigns"],

  color: "from-fuchsia-500/20 to-fuchsia-600/10"
},
{
  id: "media",
  title: "Media & Entertainment",
  subtitle: "Content Creation",
  description: "Development of media industry including television, radio, digital content, and entertainment services providing information and cultural products.",
  icon: Film,
  stats: [
  { value: "100+", label: "Channels" },
  { value: "$300M", label: "Industry" },
  { value: "50K", label: "Professionals" },
  { value: "Digital", label: "Transformation" }],

  initiatives: [
  "National broadcasting infrastructure",
  "Digital content production studios",
  "Journalism training programmes",
  "Streaming platform development",
  "Media regulatory framework"],

  color: "from-purple-500/20 to-purple-600/10"
},
{
  id: "sports",
  title: "Sports & Recreation",
  subtitle: "National Pride",
  description: "Development of sports infrastructure, athletic training, and recreational facilities promoting health, unity, and international recognition.",
  icon: Award,
  stats: [
  { value: "34", label: "Provincial Centers" },
  { value: "$200M", label: "Investment" },
  { value: "500K", label: "Athletes" },
  { value: "Olympic", label: "Goal" }],

  initiatives: [
  "National sports stadium construction",
  "Provincial sports complexes",
  "Athletic training academies",
  "Traditional sports preservation (Buzkashi)",
  "International competition hosting"],

  color: "from-emerald-500/20 to-emerald-600/10"
},
{
  id: "hospitality",
  title: "Hospitality & Tourism",
  subtitle: "Welcoming the World",
  description: "Development of tourism infrastructure including hotels, tour services, and visitor experiences showcasing Afghanistan's natural and cultural heritage.",
  icon: Building2,
  stats: [
  { value: "1M", label: "Visitor Target" },
  { value: "$2B", label: "Revenue Goal" },
  { value: "500+", label: "Hotels" },
  { value: "100K", label: "Jobs" }],

  initiatives: [
  "Heritage tourism circuit development",
  "Eco-tourism in national parks",
  "Adventure tourism in mountains",
  "Hotel and hospitality training",
  "Tourism marketing campaigns"],

  color: "from-lime-500/20 to-lime-600/10"
},
{
  id: "insurance",
  title: "Insurance & Risk",
  subtitle: "Financial Protection",
  description: "Development of insurance industry providing life, health, property, and agricultural insurance enabling risk management and financial resilience.",
  icon: Shield,
  stats: [
  { value: "10+", label: "Companies" },
  { value: "$100M", label: "Premiums" },
  { value: "5M", label: "Insured" },
  { value: "Growing", label: "Market" }],

  initiatives: [
  "Microinsurance for farmers",
  "Health insurance expansion",
  "Property and business insurance",
  "Insurance regulatory framework",
  "Actuarial training programmes"],

  color: "from-gray-500/20 to-gray-600/10"
}];


export const AdditionalMegaSections = () => {
  return (
    <section id="additional-sectors" className="py-32 bg-gradient-to-b from-background to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            COMPREHENSIVE DEVELOPMENT
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            20 Additional Strategic Sectors
          </h2>
          <p className="text-xl text-white/60 max-w-4xl mx-auto">
            From aerospace to insurance, exploring every dimension of Afghanistan's economic transformation across diverse industries and emerging opportunities
          </p>
        </motion.div>

        {/* Mega Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {megaSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${section.color} border border-white/10 hover:border-white/20 transition-all overflow-hidden relative`}>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">{section.title}</h3>
                <p className="text-xs text-primary mb-3">{section.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-white/60 mb-5 line-clamp-3">{section.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {section.stats.map((stat) =>
                  <div key={stat.label} className="p-2 bg-white/5 rounded-lg text-center">
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-white/40">{stat.label}</p>
                    </div>
                  )}
                </div>

                {/* Initiatives */}
                <div className="space-y-1.5">
                  {section.initiatives.slice(0, 3).map((initiative, idx) =>
                  <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-white/50 line-clamp-1">{initiative}</span>
                    </div>
                  )}
                  {section.initiatives.length > 3 &&
                  <p className="text-xs text-primary/70">+{section.initiatives.length - 3} more initiatives</p>
                  }
                </div>
              </motion.div>);

          })}
        </div>

        {/* Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl border border-primary/30">
          
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white mb-2">40+</p>
              <p className="text-sm text-white/50">Total Sectors</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">$150B+</p>
              <p className="text-sm text-white/50">Investment Potential</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">500K+</p>
              <p className="text-sm text-white/50">Job Opportunities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">2040</p>
              <p className="text-sm text-white/50">Vision Horizon</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">34</p>
              <p className="text-sm text-white/50">Provinces Covered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};