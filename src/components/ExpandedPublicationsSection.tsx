import { motion } from "framer-motion";
import {
  FileText, BookOpen, ChartBar, FlaskConical, Leaf, Scale, Search,
  Calendar, User, Tag } from
"lucide-react";

interface Publication {
  title: string;
  category: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

const publications: Publication[] = [
{
  title: "Afghanistan Economic Outlook 2026–2040",
  category: "Quantitative & Analyses",
  description: "Comprehensive analysis of Afghanistan's macroeconomic indicators, sectoral performance, and growth projections for the next 14 years. Includes detailed modelling of various development scenarios.",
  author: "NERPA Economic Research Division",
  date: "January 2026",
  tags: ["GDP", "Trade", "Investment", "Forecasting"],
  featured: true
},
{
  title: "Mineral Sector Development Framework",
  category: "Empirical & Frameworks",
  description: "A comprehensive framework for sustainable mineral extraction, processing, and export. Includes environmental safeguards, community benefit mechanisms, and international best practices.",
  author: "Mining Policy Unit",
  date: "January 2026",
  tags: ["Mining", "Sustainability", "Policy"],
  featured: true
},
{
  title: "Agricultural Value Chain Analysis",
  category: "Technical & Whitepapers",
  description: "In-depth examination of agricultural value chains from farm to export market. Identifies bottlenecks, opportunities for value addition, and strategies for market access improvement.",
  author: "Agricultural Economics Team",
  date: "January 2026",
  tags: ["Agriculture", "Export", "Value Chain"]
},
{
  title: "Environmental Impact Assessment Guidelines",
  category: "Environmental & Assessments",
  description: "Standardised guidelines for conducting environmental impact assessments across all NERPA development projects. Ensures compliance with international environmental standards.",
  author: "Environmental Affairs Office",
  date: "January 2026",
  tags: ["Environment", "Compliance", "Standards"]
},
{
  title: "Public-Private Partnership Policy Framework",
  category: "Policy & Paradigms",
  description: "Policy document establishing the legal and operational framework for public-private partnerships in Afghanistan's development sectors.",
  author: "Policy Development Unit",
  date: "January 2026",
  tags: ["PPP", "Investment", "Governance"]
},
{
  title: "Labour Market Analysis and Skills Gap Assessment",
  category: "Research & Revelations",
  description: "Comprehensive study of Afghanistan's labour market, identifying skills gaps, training needs, and strategies for workforce development across key sectors.",
  author: "Human Capital Research Team",
  date: "January 2026",
  tags: ["Employment", "Skills", "Training"]
},
{
  title: "Renewable Energy Potential Mapping",
  category: "Quantitative & Modeling",
  description: "Geospatial analysis and modelling of Afghanistan's renewable energy resources, including solar radiation, wind patterns, and hydroelectric potential across all provinces.",
  author: "Energy Research Division",
  date: "January 2026",
  tags: ["Energy", "Solar", "Wind", "Hydro"]
},
{
  title: "SME Development Survey Report",
  category: "Exploratory & Surveys",
  description: "Survey-based research examining the challenges, opportunities, and support needs of small and medium enterprises across Afghanistan's major economic sectors.",
  author: "Enterprise Development Unit",
  date: "January 2026",
  tags: ["SME", "Business", "Development"]
},
{
  title: "Digital Infrastructure Investment Prospectus",
  category: "Insights & Illuminations",
  description: "Investment guide for digital infrastructure development, including telecommunications, data centres, and connectivity solutions for urban and rural areas.",
  author: "Digital Economy Team",
  date: "January 2026",
  tags: ["Digital", "Infrastructure", "Investment"]
},
{
  title: "Healthcare System Strengthening Roadmap",
  category: "Publications & Proceedings",
  description: "Strategic roadmap for healthcare system development, including infrastructure requirements, workforce planning, and service delivery improvements.",
  author: "Health Sector Coordination Office",
  date: "January 2026",
  tags: ["Healthcare", "Infrastructure", "Workforce"]
},
{
  title: "Urban Development Master Plan Guidelines",
  category: "Methodological & Manuals",
  description: "Technical manual for urban planning and development, providing standards and methodologies for sustainable city growth and infrastructure development.",
  author: "Urban Planning Division",
  date: "January 2026",
  tags: ["Urban", "Planning", "Infrastructure"]
},
{
  title: "Trade Facilitation Analysis Report",
  category: "Data & Disquisitions",
  description: "Data-driven analysis of trade flows, border procedures, and facilitation measures to improve Afghanistan's trade competitiveness and regional integration.",
  author: "Trade Policy Research Team",
  date: "January 2026",
  tags: ["Trade", "Customs", "Regional"]
}];


const categoryIcons: Record<string, any> = {
  "Quantitative & Analyses": ChartBar,
  "Empirical & Frameworks": FlaskConical,
  "Technical & Whitepapers": FileText,
  "Environmental & Assessments": Leaf,
  "Policy & Paradigms": Scale,
  "Research & Revelations": Search,
  "Quantitative & Modeling": ChartBar,
  "Exploratory & Surveys": Search,
  "Insights & Illuminations": BookOpen,
  "Publications & Proceedings": FileText,
  "Methodological & Manuals": BookOpen,
  "Data & Disquisitions": ChartBar
};

export const ExpandedPublicationsSection = () => {
  const featuredPubs = publications.filter((p) => p.featured);
  const regularPubs = publications.filter((p) => !p.featured);

  return (
    <section className="py-32 px-6 lg:px-12 bg-[hsl(var(--nerpa-dark-elevated))]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
            Knowledge Products
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Publications & Research</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Evidence-based research, policy analysis, and strategic insights driving Afghanistan's development agenda. 
            Our publications inform decision-making across government, private sector, and international partners.
          </p>
        </motion.div>

        {/* Featured Publications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredPubs.map((pub, index) => {
            const Icon = categoryIcons[pub.category] || FileText;
            return (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/30 p-8 hover:border-primary/50 transition-all duration-500 group">
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">{pub.category}</span>
                  <span className="ml-auto px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">Featured</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{pub.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{pub.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map((tag) =>
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tag}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {pub.author}
                    </span>
                    


                    
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                      
                    </button>
                    <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                      
                    </button>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>

        {/* Regular Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPubs.map((pub, index) => {
            const Icon = categoryIcons[pub.category] || FileText;
            return (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 group">
                
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{pub.category}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{pub.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{pub.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {pub.tags.slice(0, 2).map((tag) =>
                  <span key={tag} className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">
                      {tag}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  
                  

                  
                </div>
              </motion.div>);

          })}
        </div>

        {/* Publication Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          {[
          { title: "Quantitative & Analyses", count: 24 },
          { title: "Empirical & Frameworks", count: 18 },
          { title: "Technical & Whitepapers", count: 32 },
          { title: "Environmental & Assessments", count: 15 },
          { title: "Policy & Paradigms", count: 21 },
          { title: "Research & Revelations", count: 27 }].
          map((cat, index) =>
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="text-center p-4 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-all cursor-pointer group">
            
              <p className="text-3xl font-bold text-primary mb-1">{cat.count}</p>
              <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{cat.title}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};