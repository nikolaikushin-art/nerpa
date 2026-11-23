import { BookOpen } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { ExpandedPublicationsSection } from "@/components/ExpandedPublicationsSection";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, Tag } from "lucide-react";

const PagePublications = () => {
  return (
    <GenericPageLayout
      title="Publications & Research"
      subtitle="Knowledge Base"
      icon={BookOpen}
      overview="Access comprehensive research, policy documents, sector reports, and strategic analyses that inform Afghanistan's economic transformation. Our publications library includes detailed investment guides, sector-specific research papers, policy frameworks, statistical yearbooks, and strategic planning documents. All publications are available for download and provide in-depth insights into NERPA's development programmes and investment opportunities."
      stats={[
      { value: "200+", label: "Publications" },
      { value: "50+", label: "Research Papers" },
      { value: "30+", label: "Sector Reports" },
      { value: "Free", label: "Downloads" }]
      }
      sections={
      <>
          {/* Publications Section */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <ExpandedPublicationsSection />
            </div>
          </section>

          {/* Publication Categories */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Publication Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
              { category: "Sector Reports", count: 30, downloads: "15K+", icon: FileText, color: "from-blue-500 to-cyan-600" },
              { category: "Policy Documents", count: 25, downloads: "12K+", icon: FileText, color: "from-purple-500 to-pink-600" },
              { category: "Research Papers", count: 50, downloads: "25K+", icon: BookOpen, color: "from-green-500 to-emerald-600" },
              { category: "Investment Guides", count: 20, downloads: "18K+", icon: Download, color: "from-orange-500 to-amber-600" },
              { category: "Statistical Reports", count: 15, downloads: "10K+", icon: Calendar, color: "from-red-500 to-rose-600" },
              { category: "Strategic Plans", count: 12, downloads: "8K+", icon: Tag, color: "from-indigo-500 to-violet-600" },
              { category: "Annual Reports", count: 8, downloads: "5K+", icon: Calendar, color: "from-teal-500 to-cyan-600" },
              { category: "White Papers", count: 40, downloads: "20K+", icon: FileText, color: "from-yellow-500 to-orange-600" }].
              map((pub, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/30 transition-all">
                
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pub.color} flex items-center justify-center mx-auto mb-4`}>
                      <pub.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-1">{pub.category}</h3>
                    
                    
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Featured Publications */}
          












































        
        </>
      } />);


};

export default PagePublications;