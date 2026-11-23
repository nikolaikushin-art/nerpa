import { motion } from "framer-motion";
import { 
  Landmark, Shield, Scale, Users, FileText, Globe, 
  Building2, Award, TrendingUp, Network, Briefcase,
  ChevronRight, ArrowRight, CheckCircle, Target
} from "lucide-react";

const governanceAreas = [
  {
    title: "Institutional Reform",
    description: "Comprehensive modernisation of government institutions to ensure efficiency, transparency, and accountability in public service delivery.",
    icon: Landmark,
    initiatives: [
      "E-governance platforms for all ministries",
      "Digital public service portals",
      "Merit-based civil service recruitment",
      "Performance monitoring systems"
    ],
    stats: { value: "34", label: "Ministries Reformed" }
  },
  {
    title: "Rule of Law",
    description: "Strengthening legal frameworks and judicial systems to ensure justice, protect rights, and create a predictable environment for business and citizens.",
    icon: Scale,
    initiatives: [
      "Judicial independence reforms",
      "Court modernisation programme",
      "Legal aid accessibility",
      "Commercial court establishment"
    ],
    stats: { value: "100+", label: "Legal Reforms" }
  },
  {
    title: "Anti-Corruption",
    description: "Zero-tolerance approach to corruption with robust prevention, detection, and enforcement mechanisms across all government levels.",
    icon: Shield,
    initiatives: [
      "Asset declaration requirements",
      "Whistleblower protection",
      "Procurement transparency",
      "Independent oversight bodies"
    ],
    stats: { value: "95%", label: "Transparency Target" }
  },
  {
    title: "Public Administration",
    description: "Professional civil service development ensuring competent, ethical, and citizen-focused government employees at all levels.",
    icon: Users,
    initiatives: [
      "Civil service academy",
      "Professional development programmes",
      "Performance-based promotions",
      "Competitive salary structures"
    ],
    stats: { value: "500K", label: "Civil Servants" }
  },
  {
    title: "Regulatory Excellence",
    description: "Creating business-friendly regulations that protect public interests while enabling economic growth and entrepreneurship.",
    icon: FileText,
    initiatives: [
      "One-stop business registration",
      "Regulatory impact assessments",
      "Licence simplification",
      "Online permit systems"
    ],
    stats: { value: "72hrs", label: "Business Setup" }
  },
  {
    title: "Decentralisation",
    description: "Empowering provincial and local governments with authority, resources, and capacity to serve communities effectively.",
    icon: Network,
    initiatives: [
      "Fiscal decentralisation",
      "Local governance capacity",
      "Community participation",
      "Provincial development funds"
    ],
    stats: { value: "34", label: "Provinces Empowered" }
  },
];

const keyPolicies = [
  {
    title: "National Development Strategy 2040",
    description: "Comprehensive roadmap for Afghanistan's economic transformation with clear targets, timelines, and accountability mechanisms.",
    status: "Approved",
    progress: 85
  },
  {
    title: "Investment Protection Framework",
    description: "Legal guarantees for investors including property rights, dispute resolution, profit repatriation, and non-discrimination principles.",
    status: "Active",
    progress: 100
  },
  {
    title: "Public-Private Partnership Act",
    description: "Framework enabling private sector participation in infrastructure and public services through transparent, competitive processes.",
    status: "Implemented",
    progress: 92
  },
  {
    title: "Digital Government Strategy",
    description: "Transformation of government services through technology, improving accessibility, efficiency, and transparency.",
    status: "In Progress",
    progress: 68
  },
  {
    title: "Fiscal Responsibility Law",
    description: "Prudent management of public finances with debt limits, deficit targets, and medium-term expenditure frameworks.",
    status: "Enacted",
    progress: 78
  },
  {
    title: "Human Rights Protection Act",
    description: "Constitutional guarantees for fundamental rights with independent monitoring and enforcement mechanisms.",
    status: "Ratified",
    progress: 88
  },
];

const internationalPartners = [
  { name: "United Nations", type: "Multilateral" },
  { name: "World Bank", type: "Development Finance" },
  { name: "Asian Development Bank", type: "Regional Bank" },
  { name: "Islamic Development Bank", type: "Islamic Finance" },
  { name: "European Union", type: "Bilateral" },
  { name: "GCC Countries", type: "Regional" },
  { name: "Shanghai Cooperation", type: "Regional" },
  { name: "SAARC Nations", type: "Regional" },
];

export const GovernanceSection = () => {
  return (
    <section id="governance" className="py-32 px-6 lg:px-12 bg-[hsl(var(--nerpa-dark-elevated))]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
            Institutional Excellence
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Good Governance</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Transparent, accountable, and efficient institutions form the foundation of sustainable development. 
            Afghanistan is building governance systems that serve all citizens with integrity and excellence.
          </p>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 mb-16 border border-primary/20"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary/20 rounded-2xl">
              <Landmark className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Governance Vision 2040</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To establish Afghanistan as a model of effective governance in the region—where institutions 
                operate with transparency, citizens participate in decision-making, and public services 
                are delivered efficiently to every corner of the nation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "100%", label: "Digital Services" },
                  { value: "Top 50", label: "Ease of Business" },
                  { value: "Zero", label: "Tolerance Corruption" },
                  { value: "34", label: "Connected Provinces" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Governance Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {governanceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{area.stats.value}</div>
                  <div className="text-xs text-muted-foreground">{area.stats.label}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{area.description}</p>

              <div className="space-y-2">
                {area.initiatives.map((initiative) => (
                  <div key={initiative} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {initiative}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Policies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Policy Framework</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyPolicies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card/50 rounded-xl border border-border/30 p-5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-1">{policy.title}</h4>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">{policy.status}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{policy.description}</p>
                <div className="relative h-2 bg-background/50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${policy.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                  />
                </div>
                <div className="text-right mt-2">
                  <span className="text-xs text-primary font-semibold">{policy.progress}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* International Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border/50 p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">International Cooperation</h3>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Afghanistan engages with the international community through multilateral frameworks, bilateral agreements, 
            and regional partnerships to strengthen governance, attract investment, and promote sustainable development.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {internationalPartners.map((partner) => (
              <div 
                key={partner.name}
                className="bg-background/50 rounded-xl p-4 text-center hover:bg-primary/10 transition-colors cursor-pointer group"
              >
                <div className="text-sm font-semibold group-hover:text-primary transition-colors">{partner.name}</div>
                <div className="text-xs text-muted-foreground">{partner.type}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: "34", label: "Provinces Connected", icon: Network },
            { value: "100+", label: "Laws Modernised", icon: FileText },
            { value: "50+", label: "Partner Nations", icon: Globe },
            { value: "2040", label: "Vision Year", icon: Target },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-card/30 rounded-xl border border-border/20">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
