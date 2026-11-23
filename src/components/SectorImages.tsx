import { motion } from "framer-motion";

// Sector hero images
const miningHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/mining-hero.jpg";
const agricultureHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/agriculture-hero.jpg";
const energyHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/energy-hero.jpg";
const infrastructureHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/infrastructure-hero.jpg";
const educationHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/education-hero.jpg";
const healthcareHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/healthcare-hero.jpg";
const technologyHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/technology-hero.jpg";
const financeHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/finance-hero.jpg";
const waterHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/water-hero.jpg";
const housingHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/housing-hero.jpg";
const visionHero = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/vision-hero.jpg";

// Section images
const miningCopper = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/mining-copper.jpg";
const miningLithium = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/mining-lithium.jpg";
const miningLapis = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/mining-lapis.jpg";
const miningGems = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/mining-gems.jpg";
const agricultureWheat = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/agriculture-wheat.jpg";
const agricultureIrrigation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/agriculture-irrigation.jpg";
const agriculturePomegranate = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/agriculture-pomegranate.jpg";
const energyWind = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/energy-wind.jpg";
const energyGrid = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/energy-grid.jpg";
const infrastructureRailway = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/infrastructure-railway.jpg";
const infrastructureAirport = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/infrastructure-airport.jpg";
const educationUniversity = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/education-university.jpg";
const educationWomen = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/education-women.jpg";
const healthcareTelemedicine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/healthcare-telemedicine.jpg";
const healthcareVaccination = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/healthcare-vaccination.jpg";
const technology5g = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/technology-5g.jpg";
const financeMobile = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/finance-mobile.jpg";
const waterRiver = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/water-river.jpg";
const housingConstruction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/housing-construction.jpg";
const visionBandeamir = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/vision-bandeamir.jpg";

export const sectorImages = {
  mining: { hero: miningHero, copper: miningCopper, lithium: miningLithium, lapis: miningLapis, gems: miningGems },
  agriculture: { hero: agricultureHero, wheat: agricultureWheat, irrigation: agricultureIrrigation, pomegranate: agriculturePomegranate },
  energy: { hero: energyHero, wind: energyWind, grid: energyGrid },
  infrastructure: { hero: infrastructureHero, railway: infrastructureRailway, airport: infrastructureAirport },
  education: { hero: educationHero, university: educationUniversity, women: educationWomen },
  healthcare: { hero: healthcareHero, telemedicine: healthcareTelemedicine, vaccination: healthcareVaccination },
  technology: { hero: technologyHero, fiveG: technology5g },
  finance: { hero: financeHero, mobile: financeMobile },
  water: { hero: waterHero, river: waterRiver },
  housing: { hero: housingHero, construction: housingConstruction },
  vision: { hero: visionHero, bandeamir: visionBandeamir },
} as const;

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 1, ease: "easeOut" as const } };

export const HeroImage = ({ src, alt, overlay = true }: { src: string; alt: string; overlay?: boolean }) => (
  <motion.div {...fadeUp} className="relative w-full h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden mb-12">
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    {overlay && <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />}
  </motion.div>
);

export const SectionImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <motion.div {...fadeUp} className={`relative w-full rounded-xl overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
  </motion.div>
);

export const InlineImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div {...fadeUp} className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
  </motion.div>
);
