import { Landmark } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { GovernanceSection } from "@/components/GovernanceSection";
import { motion } from "framer-motion";
import { Scale, Shield, Users, Target, Building2 } from "lucide-react";

const PageGovernance = () => {
  return (
    <GenericPageLayout
      title="Governance & Institutional Reform"
      subtitle="Good Governance"
      icon={Landmark}
      overview="Effective governance is the foundation of sustainable development. NERPA's governance framework encompasses institutional reforms, regulatory modernization, transparency mechanisms, and citizen engagement. Our governance initiatives strengthen public institutions, improve service delivery, combat corruption, and ensure accountability. Good governance creates the enabling environment necessary for private sector investment, economic growth, and social development."
      stats={[
        { value: "50+", label: "Reforms" },
        { value: "100%", label: "Transparency" },
        { value: "24/7", label: "Accountability" },
        { value: "All", label: "Sectors" },
      ]}
      sections={
        <>
          {/* Governance Section */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <GovernanceSection />
            </div>
          </section>

          {/* Governance Pillars */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Governance Pillars</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    pillar: "Transparency & Accountability",
                    icon: Shield,
                    description: "Open data, public reporting, and independent oversight mechanisms",
                    initiatives: [
                      "Public financial management systems",
                      "Real-time project tracking",
                      "Independent audit mechanisms",
                      "Citizen feedback platforms"
                    ],
                    progress: "85%",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    pillar: "Regulatory Reform",
                    icon: Scale,
                    description: "Modern, efficient, and business-friendly regulatory frameworks",
                    initiatives: [
                      "Streamlined business registration",
                      "Investment protection laws",
                      "Simplified licensing procedures",
                      "Digital regulatory services"
                    ],
                    progress: "78%",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    pillar: "Institutional Capacity",
                    icon: Building2,
                    description: "Strengthening public institutions and civil service",
                    initiatives: [
                      "Civil service reform",
                      "Professional development",
                      "Performance management",
                      "Technology integration"
                    ],
                    progress: "72%",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    pillar: "Citizen Engagement",
                    icon: Users,
                    description: "Participatory governance and citizen involvement",
                    initiatives: [
                      "Public consultation processes",
                      "Community participation",
                      "Digital engagement platforms",
                      "Feedback mechanisms"
                    ],
                    progress: "68%",
                    color: "from-orange-500 to-amber-600"
                  }
                ].map((pillar, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-8"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">{pillar.pillar}</h3>
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">{pillar.progress}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{pillar.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Initiatives:</h4>
                      <ul className="space-y-1">
                        {pillar.initiatives.map((initiative, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Target className="w-3 h-3 text-primary" />
                            {initiative}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Reform Progress Tracking */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Reform Progress Tracking</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { reform: "Business Registration", completed: 45, total: 50, progress: "90%", icon: Target },
                  { reform: "Investment Protection", completed: 38, total: 40, progress: "95%", icon: Shield },
                  { reform: "Digital Services", completed: 32, total: 45, progress: "71%", icon: Building2 },
                  { reform: "Public Consultation", completed: 28, total: 40, progress: "70%", icon: Users },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                      <h3 className="font-bold">{item.reform}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold text-primary">{item.progress}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Completed</span>
                        <span className="font-semibold">{item.completed}/{item.total}</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.progress }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary/60"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default PageGovernance;
