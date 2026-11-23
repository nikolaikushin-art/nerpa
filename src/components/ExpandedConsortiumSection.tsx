import { motion } from "framer-motion";
import {
  Users, MapPin, Target, Rocket, Lightbulb, Handshake, Phone, Building2,
  Award, Globe, TrendingUp, Heart, Calendar, Mail, ArrowRight, CheckCircle } from
"lucide-react";

const teamMembers = [
{ name: "Dr. Shah", role: "Chairman / President", focus: "Executive Leadership", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/dr-shah.png" },
{ name: "Martin Cressey", role: "Global Executive Director", focus: "Strategic Leadership", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/martin-cressey.png" },
{ name: "Shaire Azam", role: "Regional Executive Director", focus: "Strategic Leadership", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/shaire-azam.png" },
{ name: "Nikolai Kushin", role: "Executive Deployment Director", focus: "Strategic Leadership", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/nikolai-kushin.png" },
{ name: "Homayoun Tach", role: "Executive Geologist Director", focus: "Strategic Leadership", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/homayoun-tach.png" },
{ name: "Gullajan Hayran", role: "Regional Strategic Director", focus: "Strategic Leadership", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/gullajan-hayran.png" },
{ name: "Raki Brown", role: "International Monetisation Director", focus: "Monetisation", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/raki-brown.png" },
{ name: "Ismail Fazel", role: "Regional Assistant Director", focus: "Project management office (PMO)", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/ismail-fazel.png" },
{ name: "Peter McBay", role: "Strategic Cyber-Security Director", focus: "Project management office (PMO)", image: "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/peter-mcbay.png" }];


const milestones = [
{ year: "2024", title: "NERPA Established", description: "Foundation of the National Economic Reform Programme" },
{ year: "2025", title: "Strategic Framework", description: "Launch of comprehensive development strategy" },
{ year: "2026", title: "Implementation Launch", description: "Full-scale programme implementation begins" },
{ year: "2030", title: "Transformation Phase", description: "Economic diversification and industrial expansion" },
{ year: "2040", title: "Vision Achieved", description: "Prosperous, self-reliant Afghanistan realised" }];


const values = [
{ title: "Integrity", description: "Transparent and accountable governance in all operations", icon: Award },
{ title: "Innovation", description: "Embracing new ideas and approaches to development challenges", icon: Lightbulb },
{ title: "Inclusion", description: "Ensuring all Afghans benefit from development progress", icon: Heart },
{ title: "Impact", description: "Focusing on measurable outcomes that transform lives", icon: TrendingUp }];


const partners = [
"World Bank", "Asian Development Bank", "Islamic Development Bank", "United Nations Development Programme",
"European Union", "USAID", "GIZ", "JICA", "DFID", "SIDA", "KOICA", "Aga Khan Foundation"];


export const ExpandedConsortiumSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
            About Us
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Consortium Overview</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A collective commitment to Afghanistan's prosperity, bringing together expertise, resources, and vision 
            for national transformation. NERPA represents the unified voice and coordinated action of a nation determined to build its future.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary font-semibold tracking-wider uppercase">Who We Are</span>
            </div>
            <h3 className="text-4xl font-bold mb-6">A Nation's Collective Will</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The National Economic Reform Programme of Afghanistan (NERPA) is the coordinating body for Afghanistan's 
              comprehensive economic transformation. Established with a mandate to align public and private sector efforts, 
              NERPA serves as the national platform for development planning, investment promotion, and programme coordination.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our consortium brings together government ministries, development partners, private sector leaders, civil society 
              organisations, and international experts united by a common vision: a prosperous, self-reliant Afghanistan that 
              provides opportunity and dignity for all its citizens.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
              { label: "Founded", value: "2021" },
              { label: "Team Members", value: "500+" },
              { label: "Partners", value: "100+" },
              { label: "Projects", value: "1,000+" }].
              map((stat) =>
              <div key={stat.label} className="bg-card rounded-lg p-4 border border-border/50">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/30 p-8">
            <h4 className="text-xl font-bold mb-6">Our Mandate</h4>
            <ul className="space-y-4">
              {[
              "Coordinate national development strategy and implementation",
              "Mobilise investment from domestic and international sources",
              "Build institutional capacity across government agencies",
              "Foster public-private partnerships for development",
              "Ensure inclusive and sustainable economic growth",
              "Represent Afghanistan in international development forums",
              "Monitor and evaluate programme effectiveness",
              "Communicate progress to all stakeholders"].
              map((item, index) =>
              <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              )}
            </ul>
          </div>
        </motion.div>

        {/* Our Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32">
          
          <div className="flex items-center gap-3 justify-center mb-12">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="text-3xl font-bold">Our Journey</h3>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="grid grid-cols-5 gap-4">
              {milestones.map((milestone, index) =>
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-4 relative z-10" />
                  <p className="text-2xl font-bold text-primary mb-2">{milestone.year}</p>
                  <p className="font-semibold mb-1">{milestone.title}</p>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Vision & Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border/50 p-8">
            
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A prosperous, self-reliant Afghanistan where every citizen has the opportunity to live with dignity, 
              contribute to national progress, and share in the benefits of economic growth. We envision Afghanistan 
              as a regional hub of trade, innovation, and sustainable development.
            </p>
            <div className="flex items-center gap-3">
              <Rocket className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              To coordinate, catalyse, and accelerate Afghanistan's economic transformation through strategic planning, 
              investment mobilisation, partnership development, and programme implementation that creates sustainable 
              prosperity for all Afghans.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            
            <h3 className="text-2xl font-bold mb-6">Our Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) =>
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl border border-border/50 p-5 hover:border-primary/30 transition-all">
                
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Meet the Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32">
          
          <h3 className="text-3xl font-bold text-center mb-12">Meet the Leadership</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) =>
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border/50 p-6 text-center hover:border-primary/30 transition-all group">
              
                <div className="w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-xl ring-2 ring-primary/10 ring-offset-2 ring-offset-card">
                  {member.image ?
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> :

                <Users className="w-16 h-16 sm:w-20 sm:h-20 text-primary/60" />
                }
                </div>
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{member.name}</h4>
                <p className="text-primary text-sm font-semibold">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.focus}</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-32">
          
          <div className="flex items-center gap-3 justify-center mb-8">
            <Handshake className="w-6 h-6 text-primary" />
            <h3 className="text-3xl font-bold">Our Partners</h3>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We work with leading international development organisations, bilateral partners, and private sector leaders 
            committed to Afghanistan's transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) =>
            <span
              key={partner}
              className="px-6 py-3 bg-card border border-border/50 rounded-full text-sm font-medium hover:border-primary/30 hover:text-primary transition-all cursor-pointer">
              
                {partner}
              </span>
            )}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/30 p-8 lg:p-12">
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact & Connect</h3>
              <p className="text-lg text-muted-foreground mb-8">
                We welcome enquiries from investors, development partners, researchers, and citizens interested 
                in contributing to Afghanistan's transformation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Headquarters</p>
                    <p className="font-semibold">NERPA London, UK | Kabul, Afghanistan
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">info@nerpa.co.uk | info@nerpa.org.af</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold"> +44 7741651795 |  +93 749922932</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Website   </p>
                    <p className="font-semibold">www.nerpa.org.uk | www.nerpa.org.af</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {["Career Opportunities",
                "Procurement Portal",
                "Press & Media",
                "Annual Reports",
                "Partner Login",
                "Investor Relations",
                "FAQs",
                "Site Map"].
                map((link) =>
                <button
                  key={link}
                  className="flex items-center gap-2 px-4 py-3 bg-card/50 rounded-lg hover:bg-card transition-colors text-left group">
                  
                    <span className="text-sm group-hover:text-primary transition-colors">{link}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                )}
              </div>
              
              <div className="mt-8 p-6 bg-card/50 rounded-xl">
                <h4 className="font-bold mb-2">Join Our Team</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We're always looking for talented individuals committed to Afghanistan's development.
                </p>
                <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};