import { Mail } from "lucide-react";
import { GenericPageLayout } from "@/components/GenericPageLayout";
import { InvestorContactForm } from "@/components/InvestorContactForm";
import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Globe } from "lucide-react";

const PageContact = () => {
  return (
    <GenericPageLayout
      title="Contact Us"
      subtitle="Investment Inquiries"
      icon={Mail}
      overview="Connect with NERPA's investment facilitation team to explore opportunities, discuss partnership possibilities, request detailed information, or schedule consultations. Our dedicated team is available to assist with investment inquiries, provide sector-specific guidance, facilitate introductions to relevant stakeholders, and support your investment journey in Afghanistan. We respond to all inquiries within 48 hours."
      stats={[
        { value: "48hr", label: "Response Time" },
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Confidentiality" },
        { value: "Free", label: "Consultation" },
      ]}
      sections={
        <>
          {/* Contact Form */}
          <section className="py-16 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <InvestorContactForm />
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact Information</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    type: "Headquarters",
                    icon: Building2,
                    details: ["NERPA Investment Office", "Government Investment Authority", "Kabul, Afghanistan"],
                    color: "from-blue-500 to-cyan-600"
                  },
                  {
                    type: "Address",
                    icon: MapPin,
                    details: ["Administrative District", "Kabul City", "Afghanistan"],
                    color: "from-purple-500 to-pink-600"
                  },
                  {
                    type: "Email",
                    icon: Mail,
                    details: ["invest@nerpa.org.af", "info@nerpa.org.af", "24/7 Response Team"],
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    type: "Phone",
                    icon: Phone,
                    details: ["+93 (0) 700 000 000", "Mon-Fri, 9AM-6PM", "AFT Time Zone"],
                    color: "from-orange-500 to-amber-600"
                  }
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mb-4`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold mb-3">{contact.type}</h3>
                    <ul className="space-y-1">
                      {contact.details.map((detail, j) => (
                        <li key={j} className="text-sm text-muted-foreground">{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-6 lg:px-12 bg-card/50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { question: "How quickly will I receive a response?", answer: "We respond to all inquiries within 48 hours. Urgent investment inquiries receive priority response within 24 hours.", icon: Mail },
                  { question: "What information do I need to provide?", answer: "Basic information about your organization, investment interests, budget range, and preferred sectors. All information is kept confidential.", icon: Building2 },
                  { question: "Is consultation free?", answer: "Yes, all initial consultations are free. We provide comprehensive guidance on investment opportunities, sector analysis, and regulatory requirements.", icon: Globe },
                  { question: "Can I schedule an in-person meeting?", answer: "Yes, we offer in-person meetings at our Kabul headquarters, as well as virtual consultations via video conference for international investors.", icon: MapPin },
                  { question: "What sectors have the best ROI?", answer: "Mining (28%), Technology (35%), and Energy (22%) currently show the highest ROI. Our team can provide detailed sector-specific analysis.", icon: Phone },
                  { question: "How do I protect my investment?", answer: "NERPA provides investment protection through bilateral treaties, transparent regulatory frameworks, and government guarantees for approved projects.", icon: Building2 },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-2xl border border-border p-6"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <faq.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">{faq.question}</h3>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
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

export default PageContact;
