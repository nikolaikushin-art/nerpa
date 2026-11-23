import { Database } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { ExpandedResourceCentre } from "@/components/ExpandedResourceCentre";
import { motion } from "framer-motion";
import { FileText, Download, Folder, Search } from "lucide-react";

const PageResourceCentre = () => {
  return (
    <GenericPageLayout
      title="Resource Centre"
      subtitle="Document Library & Downloads"
      icon={Database}
      overview="Comprehensive resource library providing access to all NERPA documents, reports, guides, templates, and reference materials. The Resource Centre serves as a central repository for investors, researchers, policymakers, and development partners seeking detailed information about Afghanistan's economic transformation programme. All resources are organized by category, sector, and document type for easy navigation and download."
      stats={[
      { value: "500+", label: "Documents" },
      { value: "20+", label: "Categories" },
      { value: "Free", label: "Access" },
      { value: "Updated", label: "Daily" }]
      }
      sections={
      <>
          {/* Resource Centre Section */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <ExpandedResourceCentre />
            </div>
          </section>

          {/* Resource Categories */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Resource Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
              { category: "Investment Guides", icon: FileText, count: 25, downloads: "12K+", color: "from-blue-500 to-cyan-600" },
              { category: "Sector Profiles", icon: Folder, count: 40, downloads: "18K+", color: "from-purple-500 to-pink-600" },
              { category: "Policy Documents", icon: FileText, count: 30, downloads: "15K+", color: "from-green-500 to-emerald-600" },
              { category: "Research Papers", icon: Search, count: 60, downloads: "25K+", color: "from-orange-500 to-amber-600" },
              { category: "Statistical Data", icon: Database, count: 45, downloads: "20K+", color: "from-red-500 to-rose-600" },
              { category: "Templates & Forms", icon: Download, count: 20, downloads: "8K+", color: "from-indigo-500 to-violet-600" }].
              map((resource, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/30 transition-all">
                
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${resource.color} flex items-center justify-center mx-auto mb-4`}>
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{resource.category}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{resource.count} Documents</p>
                    
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* Popular Resources */}
          








































        
        </>
      } />);


};

export default PageResourceCentre;