import { Heart } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { HealthcareMegaSections } from "@/components/HealthcareMegaSections";
const healthcareImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/modern-hospital-kabul.jpg";

const SectorHealthcare = () => (
  <>
  <SectorPageLayout
    title="Health & Medicine"
    subtitle="Universal Access"
    heroImage={healthcareImage}
    icon={Heart}
    overview="Afghanistan's healthcare sector is undergoing a transformative expansion to establish universal healthcare access for all 40+ million citizens. The comprehensive Health & Medicine programme under NERPA targets construction of 500+ new primary health centres, 50 regional hospitals, and 10 specialised tertiary facilities. Telemedicine networks, pharmaceutical manufacturing, and a massive healthcare workforce development programme training 10,000 new physicians and 50,000 nurses over the next decade will ensure that every Afghan has access to quality medical services within 30 minutes of their home. Healthcare spending is projected to reach $3 billion annually by 2035, creating one of the fastest-growing health systems in the region."
    stats={[
      { value: "500+", label: "New Health Centres" },
      { value: "10K", label: "New Physicians" },
      { value: "100%", label: "Coverage Goal" },
      { value: "$3B", label: "Annual Health Spend" },
    ]}
    historicalData={[
      { name: "2016", growth: 3, investment: 80 },
      { name: "2017", growth: 4, investment: 95 },
      { name: "2018", growth: 5, investment: 110 },
      { name: "2019", growth: 5, investment: 130 },
      { name: "2020", growth: 8, investment: 200 },
      { name: "2021", growth: 7, investment: 180 },
      { name: "2022", growth: 9, investment: 250 },
      { name: "2023", growth: 11, investment: 320 },
      { name: "2024", growth: 13, investment: 400 },
      { name: "2025", growth: 15, investment: 500 },
    ]}
    projectionData={[
      { name: "2025", baseline: 550, optimistic: 750, conservative: 450 },
      { name: "2027", baseline: 800, optimistic: 1200, conservative: 600 },
      { name: "2029", baseline: 1200, optimistic: 2000, conservative: 900 },
      { name: "2031", baseline: 1700, optimistic: 2800, conservative: 1300 },
      { name: "2033", baseline: 2300, optimistic: 3800, conservative: 1800 },
      { name: "2035", baseline: 3000, optimistic: 5000, conservative: 2300 },
    ]}
    investmentByRegion={[
      { name: "Kabul", value: 1200 },
      { name: "Herat", value: 600 },
      { name: "Balkh", value: 500 },
      { name: "Kandahar", value: 450 },
      { name: "Nangarhar", value: 400 },
      { name: "Kunduz", value: 300 },
      { name: "Bamyan", value: 250 },
      { name: "Paktya", value: 200 },
    ]}
    sectorBreakdown={[
      { name: "Hospitals", value: 30, color: "hsl(0, 84%, 60%)" },
      { name: "Primary Care", value: 25, color: "hsl(142, 71%, 45%)" },
      { name: "Pharma", value: 18, color: "hsl(217, 91%, 60%)" },
      { name: "Workforce", value: 12, color: "hsl(47, 96%, 53%)" },
      { name: "Telemedicine", value: 8, color: "hsl(262, 83%, 58%)" },
      { name: "Equipment", value: 7, color: "hsl(199, 89%, 48%)" },
    ]}
    keyProjects={[
      { name: "National Referral Hospital Kabul", location: "Kabul", investment: "$500M", status: "Under Construction", timeline: "2025–2030", description: "1,000-bed state-of-the-art hospital with specialised oncology, cardiology, and trauma centres." },
      { name: "Provincial Hospital Network", location: "34 Provinces", investment: "$1.2B", status: "Under Construction", timeline: "2025–2032", description: "50 modern regional hospitals ensuring specialised care within 2 hours for every citizen." },
      { name: "Pharmaceutical Manufacturing Zone", location: "Kabul Province", investment: "$300M", status: "Planned", timeline: "2027–2031", description: "Generic and essential medicine production facilities reducing import dependency by 60%." },
      { name: "National Telemedicine Network", location: "Nationwide", investment: "$150M", status: "Operational", timeline: "2024–ongoing", description: "Connecting 500+ rural clinics with specialist physicians in urban centres via satellite." },
      { name: "Medical University Expansion", location: "Multiple Cities", investment: "$400M", status: "Under Construction", timeline: "2026–2032", description: "5 new medical colleges training 2,000 physicians annually with international curriculum standards." },
      { name: "Emergency Medical Services", location: "Nationwide", investment: "$200M", status: "Planned", timeline: "2027–2030", description: "National ambulance network with 1,000 vehicles, trauma centres, and emergency dispatch system." },
    ]}
    opportunities={[
      "Hospital construction and management — 50+ new hospitals requiring international design, build, and operational expertise",
      "Pharmaceutical manufacturing — domestic production of essential medicines for 40M+ population and regional export",
      "Medical equipment supply — $500M+ annual market for diagnostic, surgical, and laboratory equipment",
      "Telemedicine and digital health platforms — connecting remote communities with specialist medical services",
      "Healthcare workforce training — medical colleges, nursing schools, and allied health training institutions",
      "Medical tourism — specialised services attracting patients from neighbouring countries lacking capacity",
      "Traditional medicine research — scientific validation and commercialisation of Afghan herbal medicine traditions",
      "Health insurance development — designing and operating health insurance schemes covering 30M+ citizens",
    ]}
    challenges={[
      "Healthcare workforce shortage being addressed through 5 new medical colleges and 10,000+ training scholarships",
      "Geographic access barriers in mountainous terrain addressed through telemedicine, mobile clinics, and helicopter services",
      "Medicine supply chain reliability improved through domestic pharmaceutical manufacturing and regional distribution centres",
      "Health financing sustainability through universal health insurance, government budget allocation, and international aid coordination",
      "Cultural sensitivity in healthcare delivery addressed through community health worker programmes and gender-responsive services",
      "Data and monitoring systems being established for disease surveillance, quality improvement, and evidence-based policy making",
    ]}
    policies={[
      "Universal Health Coverage Act 2026 — guaranteeing essential health services for all citizens regardless of ability to pay",
      "Pharmaceutical Manufacturing Incentive — tax holidays, subsidised land, and regulatory fast-tracking for domestic producers",
      "Healthcare Workforce Development — government-funded medical education with 5-year rural service requirement",
      "Telemedicine Licensing Framework — enabling remote consultations with quality standards and patient protections",
      "Traditional Medicine Regulation — standardising traditional healing practices alongside modern medical services",
      "Emergency Medical Services Act — mandating response times, equipment standards, and training requirements",
      "Health Information System — national electronic health records and disease surveillance infrastructure",
      "Mental Health Integration Policy — incorporating mental health services into primary healthcare at all facilities",
    ]}
    partners={[
      "WHO Afghanistan", "UNICEF Health", "USAID Health Programme", "World Bank Health Systems",
      "Aga Khan Health Services", "MSF (Doctors Without Borders)", "ICRC Health Programme",
      "Johns Hopkins University", "Karolinska Institute Partnership", "Indian Medical Council",
      "Turkish Health Cooperation", "Korean Medical Aid", "Japanese Medical Cooperation (JICA)",
      "Saudi Red Crescent", "UAE Health Foundation", "German Hospital Advisory (KfW)",
    ]}
  />
  <HealthcareMegaSections />
  </>
);

export default SectorHealthcare;
