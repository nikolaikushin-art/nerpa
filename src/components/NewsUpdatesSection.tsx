import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, TrendingUp, Users, Building2, Zap, Wheat, Gem, Globe, FileText, Video, Mic, Image as ImageIcon, ExternalLink, ChevronLeft, ChevronRight, Bell, Bookmark, Share2 } from "lucide-react";
import { useState } from "react";

interface NewsItem {
  id: string;
  type: "news" | "announcement" | "milestone" | "report";
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  featured?: boolean;
  image?: string;
  tags: string[];
  readTime?: string;
}

interface MilestoneItem {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: any;
  value?: string;
  category: string;
}

const newsItems: NewsItem[] = [
{
  id: "1",
  type: "milestone",
  title: "Herat Solar Complex Achieves 500MW Milestone",
  excerpt: "The largest solar installation in Central Asia has reached full operational capacity, powering over 500,000 households and reducing carbon emissions by 200,000 tonnes annually.",
  date: "2026-01-20",
  category: "Energy",
  featured: true,
  tags: ["Solar", "Renewable", "Herat"],
  readTime: "4 min"
},
{
  id: "2",
  type: "announcement",
  title: "New Mining Regulations Strengthen Environmental Protections",
  excerpt: "The Ministry of Mines and Petroleum announces comprehensive regulations ensuring sustainable extraction practices with mandatory community benefit sharing.",
  date: "2026-01-18",
  category: "Mining",
  tags: ["Regulation", "Environment", "Mining"],
  readTime: "3 min"
},
{
  id: "3",
  type: "news",
  title: "Agricultural Exports Reach Record $2.5 Billion",
  excerpt: "Afghan saffron, pomegranates, and dried fruits achieve unprecedented export volumes, with premium products reaching markets across Europe, Asia, and the Middle East.",
  date: "2026-01-15",
  category: "Agriculture",
  featured: true,
  tags: ["Export", "Saffron", "Growth"],
  readTime: "5 min"
},
{
  id: "4",
  type: "report",
  title: "Q4 2025 Economic Report: 12% GDP Growth Recorded",
  excerpt: "The Central Statistics Organisation releases quarterly economic data showing strong growth across mining, agriculture, and manufacturing sectors.",
  date: "2026-01-12",
  category: "Economy",
  tags: ["GDP", "Growth", "Report"],
  readTime: "8 min"
},
{
  id: "5",
  type: "news",
  title: "China-Afghanistan Railway Agreement Signed",
  excerpt: "Historic agreement paves the way for the Wakhan Corridor rail connection, opening new trade routes and reducing transport costs by 60%.",
  date: "2026-01-10",
  category: "Transport",
  tags: ["Railway", "China", "Trade"],
  readTime: "4 min"
},
{
  id: "6",
  type: "milestone",
  title: "10,000th Tech Graduate from Kabul Technology Park",
  excerpt: "The Technology Park celebrates training its 10,000th graduate in software development, data science, and digital skills.",
  date: "2026-01-08",
  category: "Technology",
  tags: ["Education", "Tech", "Skills"],
  readTime: "3 min"
},
{
  id: "7",
  type: "announcement",
  title: "New Special Economic Zones Designated in 5 Provinces",
  excerpt: "The Investment Authority announces tax incentives and streamlined regulations for manufacturing and export industries in strategic locations.",
  date: "2026-01-05",
  category: "Investment",
  tags: ["SEZ", "Tax", "Industry"],
  readTime: "5 min"
},
{
  id: "8",
  type: "news",
  title: "Healthcare Access Reaches 85% of Population",
  excerpt: "The Ministry of Health reports that 85% of Afghans now have access to primary healthcare within 30 minutes of their homes.",
  date: "2026-01-03",
  category: "Healthcare",
  tags: ["Health", "Access", "Progress"],
  readTime: "4 min"
}];


const milestones: MilestoneItem[] = [
{ id: "1", title: "500MW Solar Capacity", description: "Clean energy milestone achieved", date: "Jan 2026", icon: Zap, value: "500MW", category: "Energy" },
{ id: "2", title: "$2.5B Agricultural Exports", description: "Record export revenue", date: "Q4 2025", icon: Wheat, value: "$2.5B", category: "Agriculture" },
{ id: "3", title: "34 Provincial Connectivity", description: "All provinces connected to national grid", date: "Dec 2025", icon: Globe, value: "100%", category: "Infrastructure" },
{ id: "4", title: "First Lithium Extraction", description: "Commercial production begins", date: "Nov 2025", icon: Gem, value: "Operational", category: "Mining" },
{ id: "5", title: "50,000 New Jobs", description: "Employment target exceeded", date: "2025", icon: Users, value: "50K+", category: "Employment" },
{ id: "6", title: "100 New Factories", description: "Manufacturing expansion", date: "2025", icon: Building2, value: "100", category: "Industry" }];


const typeIcons = {
  news: FileText,
  announcement: Bell,
  milestone: TrendingUp,
  report: FileText
};

const typeColors = {
  news: "bg-blue-500/20 text-blue-400",
  announcement: "bg-amber-500/20 text-amber-400",
  milestone: "bg-emerald-500/20 text-emerald-400",
  report: "bg-purple-500/20 text-purple-400"
};

export const NewsUpdatesSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const featuredNews = newsItems.filter((item) => item.featured);
  const filteredNews = activeFilter === "all" ?
  newsItems :
  newsItems.filter((item) => item.type === activeFilter);

  const categories = ["all", "news", "announcement", "milestone", "report"];

  return (
    <section id="news" className="py-32 bg-gradient-to-b from-background via-slate-900/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            LATEST UPDATES
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            News & Announcements
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Stay informed about the latest developments, policy announcements, project milestones, and economic achievements across Afghanistan
          </p>
        </motion.div>

        {/* Featured News - Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6 mb-20">
          
          {featuredNews.map((news, index) => {
            const TypeIcon = typeIcons[news.type];
            return (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl border border-primary/20 overflow-hidden hover:border-primary/40 transition-all cursor-pointer">
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/30 text-primary text-xs font-medium">
                  Featured
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${typeColors[news.type]}`}>
                    <TypeIcon className="w-3 h-3" />
                    {news.type.charAt(0).toUpperCase() + news.type.slice(1)}
                  </span>
                  <span className="text-xs text-white/40">{news.category}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>

                <p className="text-white/60 mb-6 line-clamp-3">{news.excerpt}</p>

                





















                

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
                  {news.tags.map((tag) =>
                  <span key={tag} className="px-2 py-1 rounded bg-white/5 text-xs text-white/50">
                      #{tag}
                    </span>
                  )}
                </div>
              </motion.article>);

          })}
        </motion.div>

        {/* Milestone Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20">
          
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Recent Milestones</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 hover:border-white/20 transition-all group">
                  
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-white mb-1">{milestone.value}</p>
                  <p className="text-sm text-white/70 mb-2 line-clamp-1">{milestone.title}</p>
                  
                </motion.div>);

            })}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
            activeFilter === category ?
            "bg-primary text-primary-foreground" :
            "bg-white/5 text-white/60 hover:bg-white/10"}`
            }>
            
              {category === "all" ? "All Updates" : category}
            </button>
          )}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredNews.map((news, index) => {
            const TypeIcon = typeIcons[news.type];
            return (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium ${typeColors[news.type]}`}>
                    <TypeIcon className="w-3 h-3" />
                    {news.type}
                  </span>
                  <span className="text-[10px] text-white/30">{news.category}</span>
                </div>

                <h4 className="text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h4>

                <p className="text-sm text-white/50 mb-4 line-clamp-2">{news.excerpt}</p>

                


                
              </motion.article>);

          })}
        </div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl border border-primary/30 text-center">
          
          <Bell className="w-12 h-12 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Insights & Updates</h3>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Subscribe to receive the latest news, policy updates, and investment opportunities directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50" />
            
            <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>);

};