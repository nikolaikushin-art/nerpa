import { motion } from "framer-motion";
import {
  MessageSquare, Handshake, Network, HeartHandshake, Users, Globe, Target,
  Lightbulb, Mail, Phone, MapPin, Calendar, ArrowRight, Building2 } from
"lucide-react";

const engagementChannels = [
{
  title: "Dialogue & Diplomacy",
  description: "Facilitating constructive dialogue between government, private sector, civil society, and international partners. Our diplomatic engagement builds consensus around development priorities.",
  icon: MessageSquare,
  activities: ["Policy Forums", "Stakeholder Roundtables", "International Conferences", "Bilateral Meetings"],
  impact: "500+ diplomatic engagements annually"
},
{
  title: "Support & Synergies",
  description: "Creating synergies between complementary initiatives and providing technical support to implementation partners. We bridge gaps and amplify collective impact.",
  icon: Handshake,
  activities: ["Technical Assistance", "Capacity Building", "Resource Mobilisation", "Knowledge Transfer"],
  impact: "200+ organisations supported"
},
{
  title: "Alliances & Affiliations",
  description: "Building strategic alliances with national and international organisations committed to Afghanistan's development. Our network spans governments, multilaterals, and private sector leaders.",
  icon: Network,
  activities: ["Strategic Partnerships", "Memoranda of Understanding", "Joint Ventures", "Coalition Building"],
  impact: "100+ formal alliances"
},
{
  title: "Partnerships & Pacts",
  description: "Formalising partnerships through binding agreements that ensure sustained commitment and coordinated action. Our pacts establish clear roles, responsibilities, and accountability.",
  icon: HeartHandshake,
  activities: ["Investment Agreements", "Development Compacts", "Trade Agreements", "Technology Transfers"],
  impact: "$2B in partnership commitments"
},
{
  title: "Forums & Foundations",
  description: "Convening forums that bring together thought leaders, practitioners, and decision-makers. Our foundational work establishes platforms for ongoing collaboration.",
  icon: Users,
  activities: ["Annual Development Forum", "Sector Working Groups", "Regional Summits", "Expert Panels"],
  impact: "50+ forums convened"
},
{
  title: "Coalitions & Connections",
  description: "Building coalitions around specific development challenges and connecting stakeholders who can contribute to solutions. Our network creates pathways to action.",
  icon: Globe,
  activities: ["Thematic Coalitions", "Networking Events", "B2B Matchmaking", "Investor Relations"],
  impact: "1,000+ connections facilitated"
},
{
  title: "Participation & Partnerships",
  description: "Enabling meaningful participation of communities and civil society in development planning and implementation. Partnership means shared ownership and shared benefits.",
  icon: Target,
  activities: ["Community Consultations", "Civil Society Engagement", "Public Hearings", "Participatory Planning"],
  impact: "10,000+ citizens engaged"
},
{
  title: "Collaborations & Confluences",
  description: "Creating spaces where diverse perspectives converge to generate innovative solutions. Our collaborative approach harnesses collective wisdom for development challenges.",
  icon: Lightbulb,
  activities: ["Innovation Labs", "Design Thinking Workshops", "Hackathons", "Co-creation Sessions"],
  impact: "100+ innovations incubated"
}];


const upcomingEvents = [
{
  title: "Afghanistan Investment Summit 2027",
  date: "March 15-17, 2027",
  location: "Kabul International Conference Centre",
  type: "Summit"
},
{
  title: "Mining Sector Stakeholder Forum",
  date: "April 8, 2027",
  location: "Mazar-i-Sharif",
  type: "Forum"
},
{
  title: "Agricultural Innovation Workshop",
  date: "April 22-23, 2028",
  location: "Herat",
  type: "Workshop"
},
{
  title: "Energy Transition Conference",
  date: "May 10-11, 2028",
  location: "Kabul",
  type: "Conference"
}];


export const ExpandedEngagementSection = () => {
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
            Collaboration
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Engagement & Outreach</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Building partnerships, fostering dialogue, and engaging stakeholders in Afghanistan's development journey. 
            Our engagement strategy creates pathways for meaningful participation and collaborative action.
          </p>
        </motion.div>

        {/* Engagement Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {engagementChannels.map((channel, index) =>
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-500 group">
            
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <channel.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{channel.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{channel.description}</p>
              
              <div className="space-y-2 mb-4">
                {channel.activities.map((activity) =>
              <div key={activity} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {activity}
                  </div>
              )}
              </div>
              
              <div className="pt-4 border-t border-border/50">
                
              </div>
            </motion.div>
          )}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/30 p-8 lg:p-12 mb-20">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Upcoming Events</h3>
              <p className="text-muted-foreground">Join us at key forums shaping Afghanistan's development agenda</p>
            </div>
            

            
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcomingEvents.map((event, index) =>
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all cursor-pointer">
              
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded mb-3 inline-block">
                  {event.type}
                </span>
                <h4 className="font-bold mb-3">{event.title}</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  


                
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Contact & Connect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8">
          
          <div className="bg-card rounded-2xl border border-border/50 p-8">
            <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
            <p className="text-muted-foreground mb-8">
              Whether you're an investor, development partner, researcher, or citizen, there's a place for you in Afghanistan's transformation. Reach out to explore collaboration opportunities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">info@nerpa.org.uk | info@nerpa.org.af</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold">+44 7741651795 | +93 749922932 </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                <Building2 className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-semibold">NERPA Headquarters, London, UK | Kabul, Afghanistan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl border border-border/50 p-8">
            <h3 className="text-2xl font-bold mb-6">Partnership Enquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" />
                
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" />
                
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" />
              
              <input
                type="text"
                placeholder="Organisation"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors" />
              
              <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-muted-foreground">
                <option>Select Area of Interest</option>
                <option>Investment Opportunities</option>
                <option>Development Partnership</option>
                <option>Research Collaboration</option>
                <option>Technical Assistance</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none" />
              
              <button className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Submit Enquiry
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>);

};