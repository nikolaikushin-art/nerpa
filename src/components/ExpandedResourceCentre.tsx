import { motion } from "framer-motion";
import {
  Database, BookOpen, GraduationCap, Cog, HeartHandshake, Briefcase,
  Download, FileText, Video, Image, Folder, ExternalLink, Search,
  Filter, ChevronRight } from
"lucide-react";

const resourceCategories = [
{
  title: "Resources & Repositories",
  description: "Centralised databases containing development data, project information, and institutional knowledge accumulated over years of operation.",
  icon: Database,
  resources: ["Project Database", "Indicator Dashboards", "GIS Mapping Portal", "Statistical Yearbooks"],
  count: 150
},
{
  title: "Archives & Articles",
  description: "Historical records, news archives, and analytical articles documenting Afghanistan's development journey and lessons learned.",
  icon: BookOpen,
  resources: ["Historical Documents", "News Archives", "Opinion Pieces", "Case Studies"],
  count: 500
},
{
  title: "Knowledge & Modules",
  description: "Educational content and training modules designed to build capacity among development practitioners and stakeholders.",
  icon: GraduationCap,
  resources: ["E-Learning Courses", "Training Manuals", "Webinar Recordings", "Certification Programmes"],
  count: 75
},
{
  title: "Technology & Tools",
  description: "Digital tools, software platforms, and technological resources supporting development planning and implementation.",
  icon: Cog,
  resources: ["Planning Software", "Monitoring Tools", "Data Analytics", "Mobile Apps"],
  count: 30
},
{
  title: "Support & Guidance",
  description: "Technical guidance documents, standard operating procedures, and support resources for programme implementation.",
  icon: HeartHandshake,
  resources: ["Implementation Guides", "SOPs", "FAQs", "Help Desk"],
  count: 200
},
{
  title: "Services & Resources",
  description: "Information about services available to partners and stakeholders, including advisory services and facility access.",
  icon: Briefcase,
  resources: ["Advisory Services", "Facility Booking", "Expert Directory", "Partner Portal"],
  count: 45
}];


const featuredResources: {title: string;type: string;description: string;downloads: string;icon: typeof FileText;href?: string;}[] = [
{
  title: "Afghanistan Development Data Portal",
  type: "Database",
  description: "Comprehensive database of development indicators, project data, and statistical information across all sectors and provinces.",
  downloads: "25,000+",
  icon: Database
},
{
  title: "Investment Opportunities Guide 2026",
  type: "Document",
  description: "Detailed guide to investment opportunities across priority sectors, including regulatory information and incentive frameworks.",
  downloads: "15,000+",
  icon: FileText
},
{
  title: "NERPA Video Library",
  type: "Multimedia",
  description: "Collection of documentary films, project showcases, and educational videos about Afghanistan's development programmes.",
  downloads: "50,000+",
  icon: Video
},
{
  title: "Provincial Development Atlas",
  type: "Maps",
  description: "Interactive geographic information system mapping development projects, infrastructure, and resources across all 34 provinces.",
  downloads: "10,000+",
  icon: Image
}];


export const ExpandedResourceCentre = () => {
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
            Knowledge Hub
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Resource Centre</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive resources, tools, and information supporting development practitioners, investors, and stakeholders. 
            Access data, documents, and digital tools to support your engagement with Afghanistan's development.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16">
          
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search resources, documents, data..."
              className="w-full pl-12 pr-24 py-4 bg-card border border-border rounded-xl focus:outline-none focus:border-primary transition-colors" />
            
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {resourceCategories.map((category, index) =>
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 group cursor-pointer">
            
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                

              
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{category.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{category.description}</p>
              
              <div className="space-y-2">
                {category.resources.map((resource) =>
              <div key={resource} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    {resource}
                  </div>
              )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Featured Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20">
          
          <h3 className="text-3xl font-bold mb-8 text-center">Featured Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => {
              const Wrapper = resource.href ? "a" : "div";
              const wrapperProps = resource.href ? { href: resource.href, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}>
                  
                  <Wrapper
                    {...wrapperProps}
                    className="block bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/30 p-6 hover:border-primary/50 transition-all group">
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <resource.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs text-primary font-semibold uppercase">{resource.type}</span>
                    </div>
                    
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{resource.description}</p>
                    
                    










                    
                  </Wrapper>
                </motion.div>);

            })}
          </div>
        </motion.div>

      </div>
    </section>);

};