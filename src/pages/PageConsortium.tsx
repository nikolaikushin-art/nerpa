import { Network } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { ExpandedConsortiumSection } from "@/components/ExpandedConsortiumSection";
import { motion } from "framer-motion";
import { Users, Building2, Globe, Handshake } from "lucide-react";

const PageConsortium = () => {
  return (
    <GenericPageLayout
      title="NERPA Consortium"
      subtitle="Partner Organizations"
      icon={Network}
      overview="The NERPA Consortium brings together leading international organizations, development finance institutions, private sector corporations, academic institutions, and civil society organizations committed to Afghanistan's economic transformation. Consortium members collaborate on strategic initiatives, share expertise, provide financing, and support capacity building across all sectors of the NERPA programme. Membership offers exclusive access to investment opportunities, technical resources, and partnership networks."
      stats={[
        { value: "100+", label: "Members" },
        { value: "50+", label: "Countries" },
        { value: "$50B+", label: "Committed" },
        { value: "24/7", label: "Network" },
      ]}
      sections={
        <>
          {/* Consortium Section */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <ExpandedConsortiumSection />
            </div>
          </section>

          {/* Member Categories */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Consortium Member Categories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { category: "Development Banks", icon: Building2, count: 15, committed: "$18B", color: "from-blue-500 to-cyan-600" },
                  { category: "Private Investors", icon: Users, count: 40, committed: "$25B", color: "from-purple-500 to-pink-600" },
                  { category: "International Orgs", icon: Globe, count: 25, committed: "$5B", color: "from-green-500 to-emerald-600" },
                  { category: "Academic Partners", icon: Handshake, count: 20, committed: "$2B", color: "from-orange-500 to-amber-600" },
                ].map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/30 transition-all"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4`}>
                      <member.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{member.category}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{member.count} Members</p>
                    <p className="text-sm font-semibold text-primary">{member.committed} Committed</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Leading Consortium Members */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Leading Consortium Members</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "World Bank", type: "Multilateral Development Bank", commitment: "$5.0B", projects: 25, icon: Building2 },
                  { name: "Asian Development Bank", type: "Multilateral Development Bank", commitment: "$3.5B", projects: 18, icon: Building2 },
                  { name: "Islamic Development Bank", type: "Multilateral Development Bank", commitment: "$2.2B", projects: 16, icon: Building2 },
                  { name: "United Nations Development Programme (UNDP)", type: "UN Agency", commitment: "$1.4B", projects: 30, icon: Globe },
                  { name: "European Union", type: "Multilateral Partnership", commitment: "$2.0B", projects: 22, icon: Globe },
                  { name: "USAID", type: "Bilateral Development Agency", commitment: "$1.8B", projects: 28, icon: Users },
                  { name: "GIZ", type: "Technical Cooperation Agency", commitment: "$750M", projects: 19, icon: Users },
                  { name: "JICA", type: "Bilateral Development Agency", commitment: "$900M", projects: 17, icon: Users },
                  { name: "DFID / FCDO (UK)", type: "Bilateral Development Agency", commitment: "$1.1B", projects: 21, icon: Users },
                  { name: "SIDA (Sweden)", type: "Bilateral Development Agency", commitment: "$600M", projects: 14, icon: Users },
                  { name: "KOICA (Korea)", type: "Bilateral Development Agency", commitment: "$450M", projects: 12, icon: Users },
                  { name: "Aga Khan Foundation", type: "Foundation & Civil Society", commitment: "$500M", projects: 26, icon: Users },
                ].map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <member.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.type}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Commitment</span>
                        <span className="font-semibold text-primary">{member.commitment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Active Projects</span>
                        <span className="font-semibold">{member.projects}</span>
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

export default PageConsortium;
