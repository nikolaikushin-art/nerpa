import { motion } from "framer-motion";
import { LucideIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { TopNavigation } from "@/components/TopNavigation";

interface GenericPageProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  icon: LucideIcon;
  overview: string;
  stats?: {value: string;label: string;}[];
  sections: React.ReactNode;
  backLink?: string;
}

export const GenericPageLayout = ({
  title,
  subtitle,
  heroImage,
  icon: Icon,
  overview,
  stats,
  sections,
  backLink = "/"
}: GenericPageProps) => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <TopNavigation />
      
      {/* Hero */}
      <section className={`relative ${heroImage ? 'h-[70vh]' : 'h-[50vh]'} flex items-end overflow-hidden`}>
        {heroImage &&
        <>
            <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </>
        }
        {!heroImage &&
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        }
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
          <Link to={backLink} className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-xl border border-primary/30">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">{subtitle}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">{title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      {stats && stats.length > 0 &&
      <section className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center">
            
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
          )}
          </div>
        </section>
      }

      {/* Overview */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Overview</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-5xl">{overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {sections}

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore More</h2>
          <p className="text-xl text-muted-foreground mb-8">Discover other sections of the NERPA programme.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all">
              Back to Home
            </Link>
            

            
          </div>
        </div>
      </section>
    </div>);

};