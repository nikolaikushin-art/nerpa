import { Handshake } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { ExpandedEngagementSection } from "@/components/ExpandedEngagementSection";
import { motion } from "framer-motion";
import { Users, Network, Globe, Target, Award } from "lucide-react";

const PageEngagement = () => {
  return (
    <GenericPageLayout
      title="Global Partnership & Engagement"
      subtitle="Collaboration Channels"
      icon={Handshake}
      overview="NERPA's success depends on strong partnerships with international organizations, development finance institutions, private sector investors, academic institutions, and civil society. Our engagement framework facilitates collaboration across multiple channels, from investment partnerships to knowledge sharing, technical assistance, and capacity building. Join us in transforming Afghanistan's economic landscape through strategic partnerships and collective action."
      stats={[
        { value: "100+", label: "Partners" },
        { value: "50+", label: "Countries" },
        { value: "$50B+", label: "Committed" },
        { value: "24/7", label: "Support" },
      ]}
      sections={
        <>
          {/* Engagement Section */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <ExpandedEngagementSection />
            </div>
          </section>

          {/* Partnership Types */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Partnership Types</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    type: "Investment Partnerships",
                    icon: Target,
                    description: "Direct investment in NERPA projects and sectors",
                    benefits: ["Priority project access", "Government support", "Risk mitigation", "ROI guarantees"],
                    partners: "40+",
                    committed: "$25B",
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    type: "Technical Assistance",
                    icon: Users,
                    description: "Knowledge transfer and capacity building support",
                    benefits: ["Expert consultation", "Training programmes", "Technology transfer", "Best practices"],
                    partners: "30+",
                    committed: "$2B",
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    type: "Development Finance",
                    icon: Globe,
                    description: "Financing through development banks and institutions",
                    benefits: ["Concessional financing", "Long-term loans", "Grants", "Blended finance"],
                    partners: "20+",
                    committed: "$18B",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    type: "Strategic Alliances",
                    icon: Network,
                    description: "Long-term strategic partnerships for sector development",
                    benefits: ["Joint ventures", "Market access", "Supply chains", "Innovation hubs"],
                    partners: "25+",
                    committed: "$5B",
                    color: "from-orange-500 to-amber-600"
                  }
                ].map((partnership, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl border border-border p-8"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${partnership.color} flex items-center justify-center mb-4`}>
                      <partnership.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{partnership.type}</h3>
                    <p className="text-muted-foreground mb-4">{partnership.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Partners</div>
                        <div className="font-semibold">{partnership.partners}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Committed</div>
                        <div className="font-semibold text-primary">{partnership.committed}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {partnership.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Partnership Success Stories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { partner: "World Bank", project: "Infrastructure Development", investment: "$2.5B", impact: "500km roads, 200K jobs", icon: Globe },
                  { partner: "Asian Development Bank", project: "Energy Sector", investment: "$1.8B", impact: "1.2GW capacity, 150K jobs", icon: Target },
                  { partner: "China Development Bank", project: "Mining Operations", investment: "$3.2B", impact: "Copper mine, 80K jobs", icon: Network },
                  { partner: "Saudi Investment Fund", project: "Agriculture Modernization", investment: "$1.2B", impact: "Food security, 200K jobs", icon: Users },
                  { partner: "UAE Investment Authority", project: "Tech Infrastructure", investment: "$800M", impact: "Digital transformation, 50K jobs", icon: Target },
                  { partner: "Turkish Development Agency", project: "Manufacturing Zones", investment: "$600M", impact: "Industrial parks, 100K jobs", icon: Network },
                ].map((story, i) => (
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
                        <story.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">{story.partner}</h3>
                        <p className="text-sm text-muted-foreground">{story.project}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment</span>
                        <span className="font-semibold text-primary">{story.investment}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Impact: </span>
                        <span className="font-semibold">{story.impact}</span>
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

export default PageEngagement;
