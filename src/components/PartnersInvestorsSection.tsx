import { motion } from "framer-motion";
import { Building2, Globe, Handshake, Award, TrendingUp, Users, Quote, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface Partner {
  id: string;
  name: string;
  category: "multilateral" | "bilateral" | "private" | "ngo";
  description: string;
  contribution: string;
  logo?: string;
  country?: string;
  sector: string[];
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  image?: string;
}

interface SuccessStory {
  id: string;
  title: string;
  description: string;
  impact: string[];
  investment: string;
  jobs: string;
  year: string;
  sector: string;
}

const partners: Partner[] = [
{ id: "1", name: "World Bank Group", category: "multilateral", description: "Supporting infrastructure and institutional development across Afghanistan", contribution: "$2.5B", sector: ["Infrastructure", "Education", "Healthcare"] },
{ id: "2", name: "Asian Development Bank", category: "multilateral", description: "Financing regional connectivity and energy projects", contribution: "$1.8B", sector: ["Energy", "Transport", "Water"] },
{ id: "3", name: "Islamic Development Bank", category: "multilateral", description: "Supporting Sharia-compliant development financing", contribution: "$950M", sector: ["Finance", "Agriculture", "SME"] },
{ id: "4", name: "USAID Development", category: "bilateral", description: "Agricultural modernization and capacity building programmes", contribution: "$1.2B", country: "United States", sector: ["Agriculture", "Education"] },
{ id: "5", name: "German Development Agency", category: "bilateral", description: "Vocational training and renewable energy initiatives", contribution: "$680M", country: "Germany", sector: ["Energy", "Training"] },
{ id: "6", name: "China Investment Corporation", category: "private", description: "Mining and infrastructure investment partnerships", contribution: "$3.5B", country: "China", sector: ["Mining", "Infrastructure"] },
{ id: "7", name: "UAE Investment Authority", category: "private", description: "Real estate and logistics development investments", contribution: "$1.5B", country: "UAE", sector: ["Real Estate", "Logistics"] },
{ id: "8", name: "Turkish Contractors Association", category: "private", description: "Major construction and development projects", contribution: "$800M", country: "Turkey", sector: ["Construction", "Housing"] },
{ id: "9", name: "Aga Khan Development Network", category: "ngo", description: "Rural development and cultural preservation initiatives", contribution: "$450M", sector: ["Rural Development", "Culture"] },
{ id: "10", name: "UNDP Afghanistan", category: "multilateral", description: "Governance and sustainable development programmes", contribution: "$380M", sector: ["Governance", "Environment"] },
{ id: "11", name: "Japan International Cooperation", category: "bilateral", description: "Infrastructure and technology transfer projects", contribution: "$520M", country: "Japan", sector: ["Technology", "Infrastructure"] },
{ id: "12", name: "Saudi Development Fund", category: "bilateral", description: "Social infrastructure and humanitarian projects", contribution: "$420M", country: "Saudi Arabia", sector: ["Social", "Healthcare"] },
{ id: "13", name: "British Investment Partnerships", category: "bilateral", description: "UK-backed investment and advisory support across priority sectors", contribution: "$600M", country: "United Kingdom", sector: ["Finance", "Infrastructure", "Governance"] },
{ id: "14", name: "Commonwealth Partners", category: "multilateral", description: "Cooperation with Commonwealth countries on trade, skills, and institutional development", contribution: "$750M", sector: ["Trade", "Education", "Institutional Reform"] },
{ id: "15", name: "JORC Code Alignment Partners", category: "multilateral", description: "Technical support to align Afghanistan's mineral reporting with JORC and global standards", contribution: "Technical & Standards Support", sector: ["Mining", "Standards"] },
{ id: "16", name: "World Economic Forum (WEF)", category: "multilateral", description: "Strategic dialogues and platforms connecting Afghanistan to global economic networks", contribution: "Platforms & Policy Dialogue", sector: ["Business", "Investment Climate"] },
{ id: "17", name: "SGS & International Certification Bodies", category: "private", description: "Testing, inspection, and certification services to assure quality and compliance for Afghan exports", contribution: "Quality Assurance & Certification", sector: ["Standards", "Export Facilitation"] },
{ id: "18", name: "BRICS-Aligned Investment Platforms", category: "multilateral", description: "Long-term capital and co-financing opportunities originating from BRICS economies", contribution: "$1.0B", sector: ["Energy", "Infrastructure", "Industry"] }];


const testimonials: Testimonial[] = [
{
  id: "1",
  quote: "Afghanistan's commitment to economic reform and transparent governance has created unprecedented opportunities for responsible investment. We are proud to partner in this nation's transformation.",
  author: "Dr. Shah",
  role: "Regional Director",
  organization: "Asian Development Bank"
},
{
  id: "2",
  quote: "The mineral wealth combined with a young, eager workforce makes Afghanistan one of the most promising emerging markets. Our investments have exceeded expectations.",
  author: "Liu Wei Chen",
  role: "Chief Investment Officer",
  organization: "China Investment Corporation"
},
{
  id: "3",
  quote: "Working with Afghan farmers to develop premium saffron exports has been incredibly rewarding. The quality rivals the finest in the world, and the impact on local communities is transformative.",
  author: "Maria Fernandez",
  role: "Agricultural Director",
  organization: "International Trade Centre"
},
{
  id: "4",
  quote: "Afghanistan's solar and wind potential is extraordinary. Our renewable energy projects are delivering returns while supporting the nation's energy independence goals.",
  author: "Hans Mueller",
  role: "Managing Partner",
  organization: "European Energy Partners"
}];


const successStories: SuccessStory[] = [
{
  id: "1",
  title: "Herat Solar Power Complex",
  description: "The largest solar installation in Central Asia, providing clean energy to over 500,000 households while reducing carbon emissions by 200,000 tonnes annually.",
  impact: ["500MW capacity operational", "Carbon neutral by 2035", "Technology transfer achieved", "Local manufacturing established"],
  investment: "$420M",
  jobs: "3,500",
  year: "2026",
  sector: "Energy"
},
{
  id: "2",
  title: "Aynak Copper Mine Development",
  description: "Sustainable copper extraction utilising advanced technology with full environmental protection and community benefit sharing.",
  impact: ["Major copper reserves", "Archaeological site preserved", "Community development fund", "Skills training centre"],
  investment: "$3.5B",
  jobs: "15,000",
  year: "2027",
  sector: "Mining"
},
{
  id: "3",
  title: "Kandahar Agri-Export Hub",
  description: "State-of-the-art cold storage and processing facilities enabling Afghan pomegranates and dried fruits to reach premium global markets.",
  impact: ["$500M export revenue", "40,000 farmers supported", "EU certification achieved", "Cold chain established"],
  investment: "$180M",
  jobs: "8,500",
  year: "2026",
  sector: "Agriculture"
},
{
  id: "4",
  title: "Kabul Technology Park",
  description: "Innovation hub hosting over 500 tech companies, startups, and international technology firms with world-class infrastructure.",
  impact: ["500+ companies hosted", "25,000 tech professionals", "Regional tech hub", "International partnerships"],
  investment: "$350M",
  jobs: "25,000",
  year: "2028",
  sector: "Technology"
}];


const categoryColors = {
  multilateral: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
  bilateral: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  private: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
  ngo: "from-purple-500/20 to-purple-600/10 border-purple-500/30"
};

const categoryLabels = {
  multilateral: "Multilateral",
  bilateral: "Bilateral",
  private: "Private Sector",
  ngo: "NGO / Foundation"
};

export const PartnersInvestorsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeStory, setActiveStory] = useState(0);

  const filteredPartners = activeCategory === "all" ?
  partners :
  partners.filter((p) => p.category === activeCategory);

  return (
    <section id="partners" className="py-32 bg-gradient-to-b from-background via-slate-900/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            GLOBAL PARTNERSHIPS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partners & Investors
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Building Afghanistan's future through strategic partnerships with international organisations, bilateral partners, and private sector investors
            — including British and wider Commonwealth partners, JORC Code–aligned mining standards, the World Economic Forum (WEF), SGS and other certification bodies, and BRICS-linked investment platforms —
            while keeping Afghanistan as the primary origin and driver of value creation.
          </p>
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          
          {[
          { icon: Globe, value: "50+", label: "Global Partners" },
          { icon: TrendingUp, value: "$25B+", label: "Total Investment" },
          { icon: Users, value: "100K+", label: "Jobs Created" },
          { icon: Award, value: "200+", label: "Projects Completed" }].
          map((stat) =>
          <div key={stat.label} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center group hover:bg-white/10 transition-all">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          )}
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === "all" ?
            "bg-primary text-primary-foreground" :
            "bg-white/5 text-white/60 hover:bg-white/10"}`
            }>
            
            All Partners
          </button>
          {Object.entries(categoryLabels).map(([key, label]) =>
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === key ?
            "bg-primary text-primary-foreground" :
            "bg-white/5 text-white/60 hover:bg-white/10"}`
            }>
            
              {label}
            </button>
          )}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-32">
          {filteredPartners.map((partner, index) =>
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${categoryColors[partner.category]} border backdrop-blur-sm hover:scale-[1.02] transition-all`}>
            
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="px-2 py-1 rounded-full bg-white/10 text-[10px] text-white/70 font-medium uppercase">
                  {categoryLabels[partner.category]}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
              {partner.country &&
            <p className="text-xs text-white/40 mb-2">{partner.country}</p>
            }
              <p className="text-sm text-white/60 mb-4 line-clamp-2">{partner.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="text-xs text-white/40">Contribution</p>
                  <p className="text-lg font-bold text-primary">{partner.contribution}</p>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {partner.sector.slice(0, 2).map((s) =>
                <span key={s} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-white/50">
                      {s}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32">
          
          
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonials intentionally empty until content is supplied */}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
          <h3 className="text-3xl font-bold text-white text-center mb-4">Success Stories</h3>
          <p className="text-white/50 text-center mb-12 max-w-2xl mx-auto">
            Real impact from real partnerships - transforming communities and building prosperity
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Story Selector */}
            <div className="space-y-3">
              {successStories.map((story, index) =>
              <button
                key={story.id}
                onClick={() => setActiveStory(index)}
                className={`w-full p-5 rounded-xl text-left transition-all ${
                activeStory === index ?
                "bg-primary/20 border border-primary/30" :
                "bg-white/5 hover:bg-white/10 border border-transparent"}`
                }>
                
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-xs text-white/60">{story.sector}</span>
                    <span className="text-xs text-white/40">{story.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-1">{story.title}</h4>
                  <p className="text-sm text-white/50 line-clamp-1">{story.description}</p>
                </button>
              )}
            </div>

            {/* Story Details */}
            <motion.div
              key={activeStory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
              
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
                {successStories[activeStory].sector}
              </span>
              
              <h4 className="text-2xl font-bold text-white mb-4">{successStories[activeStory].title}</h4>
              <p className="text-white/70 mb-6">{successStories[activeStory].description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-xs text-white/40 mb-1">Investment</p>
                  <p className="text-xl font-bold text-primary">{successStories[activeStory].investment}</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <p className="text-xs text-white/40 mb-1">Jobs Created</p>
                  <p className="text-xl font-bold text-white">{successStories[activeStory].jobs}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-white mb-3">Key Achievements</p>
                {successStories[activeStory].impact.map((item, index) =>
                <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-white/70">{item}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

};