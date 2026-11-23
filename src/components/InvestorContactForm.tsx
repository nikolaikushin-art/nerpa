import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send, Building2, Mail, Phone, User, Globe, Briefcase,
  MapPin, DollarSign, Calendar, CheckCircle, ArrowRight,
  Pickaxe, Wheat, Zap, Heart, GraduationCap, Home, Factory,
  Cpu, Truck, Landmark } from
"lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const sectors = [
{ id: "mining", name: "Mining & Minerals", icon: Pickaxe },
{ id: "agriculture", name: "Agriculture", icon: Wheat },
{ id: "energy", name: "Energy & Power", icon: Zap },
{ id: "healthcare", name: "Healthcare", icon: Heart },
{ id: "education", name: "Education", icon: GraduationCap },
{ id: "housing", name: "Housing & Urban", icon: Home },
{ id: "manufacturing", name: "Manufacturing", icon: Factory },
{ id: "technology", name: "Technology", icon: Cpu },
{ id: "infrastructure", name: "Infrastructure", icon: Truck },
{ id: "finance", name: "Banking & Finance", icon: Landmark }];


const investmentRanges = [
"$100K - $500K",
"$500K - $1M",
"$1M - $5M",
"$5M - $25M",
"$25M - $100M",
"$100M+"];


const investorTypes = [
"Private Investor",
"Institutional Investor",
"Development Finance",
"Sovereign Fund",
"Corporate Investment",
"NGO/Foundation"];


export const InvestorContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    country: "",
    investorType: "",
    investmentRange: "",
    sectors: [] as string[],
    timeline: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSectorToggle = (sectorId: string) => {
    setFormData((prev) => ({
      ...prev,
      sectors: prev.sectors.includes(sectorId) ?
      prev.sectors.filter((s) => s !== sectorId) :
      [...prev.sectors, sectorId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-32 bg-gradient-to-b from-background via-slate-950 to-background relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
            
            <CheckCircle className="w-12 h-12 text-emerald-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4">
            
            Thank You for Your Interest!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 mb-8">
            
            Our investment team will review your inquiry and contact you within 48 hours with matched opportunities.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            
            Submit Another Inquiry
          </motion.button>
        </div>
      </section>);

  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background via-slate-950 to-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            INVESTMENT INQUIRY
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner With Afghanistan
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Connect with our investment team for tailored opportunities across sectors. We match your interests with high-impact projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">NERPA Investment Office</p>
                    <p className="text-white/50 text-sm">Government Investment Authority</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">London, UK    | Kabul, Afghanistan
                    </p>
                    <p className="text-white/50 text-sm">Administrative District</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">invest@nerpa.org.af
invest@nerpa.org.uk
</p>
                    <p className="text-white/50 text-sm">24/7 Response Team</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">+44 7741651795        | +93 749922932
                    
                    </p>
                    <p className="text-white/50 text-sm">Mon-Fri, 9AM-6PM AFT</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 border border-primary/30">
              <h4 className="text-lg font-semibold text-white mb-4">Why Invest in Afghanistan?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>$30 trillion in untapped minerals</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Strategic Asia crossroads location</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Young, ambitious workforce</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>First-mover advantages</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Government investment incentives</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
            
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-8">
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/70">Full Name *</Label>
                    <Input id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                    placeholder="Your full name" />
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      placeholder="your@email.com" />
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/70">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      placeholder="+1 (555) 000-0000" />
                    
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-white/70">Country *</Label>
                    <Input
                      id="country"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      placeholder="Your country" />
                    
                  </div>
                </div>
              </div>

              {/* Organization Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Organization Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-white/70">Organization Name *</Label>
                    <Input
                      id="organization"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData((prev) => ({ ...prev, organization: e.target.value }))}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                      placeholder="Company or organization" />
                    
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70">Investor Type *</Label>
                    <select
                      required
                      value={formData.investorType}
                      onChange={(e) => setFormData((prev) => ({ ...prev, investorType: e.target.value }))}
                      className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white">
                      
                      <option value="" className="bg-slate-900">Select type...</option>
                      {investorTypes.map((type) =>
                      <option key={type} value={type} className="bg-slate-900">{type}</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>

              {/* Investment Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Investment Profile
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label className="text-white/70">Investment Range *</Label>
                    <select
                      required
                      value={formData.investmentRange}
                      onChange={(e) => setFormData((prev) => ({ ...prev, investmentRange: e.target.value }))}
                      className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white">
                      
                      <option value="" className="bg-slate-900">Select range...</option>
                      {investmentRanges.map((range) =>
                      <option key={range} value={range} className="bg-slate-900">{range}</option>
                      )}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70">Investment Timeline</Label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData((prev) => ({ ...prev, timeline: e.target.value }))}
                      className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white">
                      
                      <option value="" className="bg-slate-900">Select timeline...</option>
                      <option value="immediate" className="bg-slate-900">Immediate (0-3 months)</option>
                      <option value="short" className="bg-slate-900">Short-term (3-12 months)</option>
                      <option value="medium" className="bg-slate-900">Medium-term (1-3 years)</option>
                      <option value="long" className="bg-slate-900">Long-term (3+ years)</option>
                    </select>
                  </div>
                </div>

                {/* Sector Selection */}
                <div className="space-y-3">
                  <Label className="text-white/70">Sectors of Interest (Select multiple) *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {sectors.map((sector) => {
                      const Icon = sector.icon;
                      const isSelected = formData.sectors.includes(sector.id);
                      return (
                        <button
                          key={sector.id}
                          type="button"
                          onClick={() => handleSectorToggle(sector.id)}
                          className={`p-3 rounded-lg border transition-all text-center ${
                          isSelected ?
                          "bg-primary/20 border-primary text-white" :
                          "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"}`
                          }>
                          
                          <Icon className={`w-5 h-5 mx-auto mb-2 ${isSelected ? 'text-primary' : ''}`} />
                          <span className="text-xs">{sector.name}</span>
                        </button>);

                    })}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white/70">Additional Information</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[120px]"
                  placeholder="Tell us about your investment goals, specific projects of interest, or any questions..." />
                
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting || formData.sectors.length === 0}
                className="w-full py-6 text-lg bg-primary hover:bg-primary/90 disabled:opacity-50">
                
                {isSubmitting ?
                <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </span> :

                <span className="flex items-center gap-2">
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5" />
                  </span>
                }
              </Button>

              <p className="text-center text-white/40 text-sm">
                By submitting, you agree to our privacy policy. Your information will be handled securely and never shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

};