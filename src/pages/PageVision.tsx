import { useState } from "react";
import { Eye } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Rocket, Globe, Heart, Users, TrendingUp, Building2, Award, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { VisionExpandedSections } from "@/components/VisionExpandedSections";
import { VisionVideoSections } from "@/components/VisionVideoSections";
import { VisionMegaSections } from "@/components/VisionMegaSections";

const visionLaunch = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-2026-launch.jpg";
const visionInfra = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-2028-infrastructure.jpg";
const visionCity = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-2030-city.jpg";
const visionEnergy = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-2032-energy.jpg";
const visionTrade = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-2035-trade.jpg";
const visionProsperity = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-2040-prosperity.jpg";

const visionGovernance = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-governance-peace.jpg";
const visionEconomic = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-economic-prosperity.jpg";
const visionSocial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-social-inclusion.jpg";
const visionSustainability = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-sustainability.jpg";
const visionInnovation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-innovation-tech.jpg";
const visionRegional = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-regional-leadership.jpg";
const visionDignity = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-human-dignity.jpg";
const visionTransparency = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-transparency.jpg";
const visionInfrastructure = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-infrastructure.jpg";
const visionPartnership = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-partnership.jpg";
const visionExcellence = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-excellence.jpg";
const visionMission = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/vision/vision-mission-hero.jpg";

const timelineGallery = [
{ src: visionLaunch, caption: "2026 — Programme Launch & National Mobilisation", phase: "Foundation" },
{ src: visionInfra, caption: "2028 — Infrastructure Surge Across All Provinces", phase: "Acceleration" },
{ src: visionCity, caption: "2030 — Smart City Development & Urban Transformation", phase: "Transformation" },
{ src: visionEnergy, caption: "2032 — Energy Independence & Renewable Revolution", phase: "Growth" },
{ src: visionTrade, caption: "2035 — Global Trade Hub & Export Expansion", phase: "Integration" },
{ src: visionProsperity, caption: "2040 — National Prosperity & Shared Wellbeing", phase: "Prosperity" }];


const visionPillars = [
{ pillar: "Economic Prosperity", icon: TrendingUp, description: "Sustainable economic growth creating opportunities for all", image: visionEconomic, color: "from-green-500/80 to-emerald-600/80" },
{ pillar: "Social Inclusion", icon: Users, description: "Universal access to education, healthcare, and opportunity", image: visionSocial, color: "from-blue-500/80 to-cyan-600/80" },
{ pillar: "Environmental Sustainability", icon: Globe, description: "Protecting natural resources for future generations", image: visionSustainability, color: "from-teal-500/80 to-green-600/80" },
{ pillar: "Innovation & Technology", icon: Rocket, description: "Leading in digital transformation and innovation", image: visionInnovation, color: "from-purple-500/80 to-pink-600/80" },
{ pillar: "Regional Leadership", icon: Target, description: "Becoming Central Asia's economic hub", image: visionRegional, color: "from-orange-500/80 to-amber-600/80" },
{ pillar: "Human Dignity", icon: Heart, description: "Ensuring dignity and rights for every Afghan", image: visionDignity, color: "from-red-500/80 to-rose-600/80" }];


const strategicFramework = [
{ pillar: "Economic Diversification", target: "Reduce resource dependency", metric: "40+ sectors", icon: TrendingUp, image: visionEconomic },
{ pillar: "Infrastructure Development", target: "Connect all regions", metric: "$50B investment", icon: Building2, image: visionInfrastructure },
{ pillar: "Human Capital", target: "Educate and train workforce", metric: "2M+ jobs", icon: Users, image: visionSocial },
{ pillar: "Innovation Ecosystem", target: "Build tech capabilities", metric: "1,000+ startups", icon: Rocket, image: visionInnovation }];


const coreValues = [
{ value: "Transparency", description: "Open governance and accountability in all operations", icon: Globe, image: visionTransparency },
{ value: "Inclusivity", description: "Ensuring all Afghans benefit from development", icon: Users, image: visionSocial },
{ value: "Sustainability", description: "Environmental protection and long-term planning", icon: Heart, image: visionSustainability },
{ value: "Innovation", description: "Embracing technology and modern solutions", icon: Rocket, image: visionInnovation },
{ value: "Partnership", description: "Collaboration with global and local stakeholders", icon: Target, image: visionPartnership },
{ value: "Excellence", description: "World-class standards in all endeavours", icon: Award, image: visionExcellence }];


const PageVision = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (i: number) => {setActiveIndex(i);setLightboxOpen(true);};
  const next = () => setActiveIndex((prev) => (prev + 1) % timelineGallery.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + timelineGallery.length) % timelineGallery.length);

  return (
    <GenericPageLayout
      title="National Vision"
      subtitle="Strategic Roadmap for Afghanistan's Future"
      icon={Eye}
      overview="NERPA represents Afghanistan's comprehensive blueprint for economic renaissance, sustainable development, and national prosperity. Our vision is to transform Afghanistan into a self-reliant, innovative, and globally connected nation where every citizen can thrive. Through strategic coordination of diverse sectors, innovative technologies, and global partnerships, we are building a future of dignity, opportunity, and shared prosperity. This vision is of the Afghan people, for the Afghan people, and by the Afghan people."
      stats={[
      { value: "2040", label: "Vision Year" },
      { value: "40+", label: "Sectors" },
      { value: "$75B+", label: "Investment" },
      { value: "2M+", label: "Jobs" }]
      }
      sections={
      <>
          {/* ═══ VISION STATEMENT WITH HERO IMAGE ═══ */}
          <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
            <div className="absolute inset-0">
              <img src={visionGovernance} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto">
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto">
              
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Our Vision</h2>
                <p className="text-2xl text-white/80 leading-relaxed mb-8">
                  "A prosperous, self-reliant Afghanistan where every citizen has access to opportunity, 
                  dignity, and a sustainable future. A nation that harnesses its natural wealth, human capital, 
                  and strategic location to become a regional economic leader and global partner."
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                  {["Of the People", "For the People", "By the People"].map((text, i) =>
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-8 py-4 border-2 border-white/50 text-white font-semibold text-lg tracking-wider uppercase hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  
                      {text}
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ═══ CINEMATIC VISION TIMELINE GALLERY ═══ */}
          






































































        

          {/* ═══ VISION PILLARS WITH CINEMATIC IMAGES ═══ */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Vision Pillars</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visionPillars.map((pillar, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative group rounded-2xl overflow-hidden min-h-[320px] cursor-pointer">
                
                    <img src={pillar.image} alt={pillar.pillar} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-70 group-hover:opacity-80 transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="relative z-10 flex flex-col justify-end h-full p-6">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                        <pillar.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{pillar.pillar}</h3>
                      <p className="text-white/80 text-sm">{pillar.description}</p>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* ═══ MISSION STATEMENT WITH CINEMATIC HERO ═══ */}
          <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
            <div className="absolute inset-0">
              <img src={visionMission} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-3xl">
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">Our Purpose</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">Our Mission</h2>
                <p className="text-xl text-white/80 leading-relaxed mb-8">
                  To coordinate and accelerate Afghanistan's economic transformation through strategic sector development, 
                  infrastructure investment, human capital building, and global partnerships. We mobilize resources, 
                  facilitate investments, and implement programmes that create sustainable prosperity for all Afghans 
                  while preserving our cultural heritage and natural environment.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                { val: "34", label: "Provinces" },
                { val: "40+", label: "Sectors" },
                { val: "$75B", label: "Investment" },
                { val: "2040", label: "Target Year" }].
                map((s, i) =>
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10">
                      <div className="text-2xl font-bold text-primary">{s.val}</div>
                      <div className="text-white/60 text-xs mt-1">{s.label}</div>
                    </motion.div>
                )}
                </div>
              </motion.div>
            </div>
          </section>

          {/* ═══ STRATEGIC FRAMEWORK WITH IMAGES ═══ */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Strategic Framework</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {strategicFramework.map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-2xl overflow-hidden border border-border">
                
                    <div className="relative h-40 overflow-hidden">
                      <img src={item.image} alt={item.pillar} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="bg-primary/90 rounded-lg p-2">
                          <item.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-card p-5">
                      <h3 className="text-lg font-bold mb-1">{item.pillar}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.target}</p>
                      <p className="text-primary font-bold text-lg">{item.metric}</p>
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </section>

          {/* ═══ CORE VALUES WITH VISUAL CARDS ═══ */}
          





























        

          <VisionExpandedSections />
          <VisionVideoSections />
          <VisionMegaSections />
        </>
      } />);


};

export default PageVision;