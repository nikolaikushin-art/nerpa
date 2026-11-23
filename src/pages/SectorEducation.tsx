import { GraduationCap } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { EducationMegaSections } from "@/components/EducationMegaSections";
const educationImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/university-classroom-modern.jpg";

const SectorEducation = () => (
  <>
  <SectorPageLayout
    title="Education & Learning"
    subtitle="Educational Excellence"
    heroImage={educationImage}
    icon={GraduationCap}
    overview="Education is the cornerstone of Afghanistan's future prosperity. With 10 million students, 100,000 teachers, 5,000 schools, and 50 universities targeted under NERPA, the Education & Learning sector represents a $4 billion investment in human capital development. From early childhood education through postgraduate research, Afghanistan is building an education system that develops the knowledge, skills, and character needed to lead the nation's transformation. The sector encompasses universal primary education, STEM-focused secondary reform, technical and vocational training, higher education expansion, teacher training academies, digital literacy programmes, and international scholarship initiatives. Education is not merely a sector — it is the foundation upon which every other NERPA sector depends."
    stats={[
      { value: "10M", label: "Students Target" },
      { value: "100K", label: "Teachers Needed" },
      { value: "5,000", label: "Schools Planned" },
      { value: "50", label: "Universities" },
    ]}
    historicalData={[
      { name: "2016", growth: 5, investment: 100 },
      { name: "2017", growth: 6, investment: 120 },
      { name: "2018", growth: 7, investment: 140 },
      { name: "2019", growth: 7, investment: 155 },
      { name: "2020", growth: 5, investment: 130 },
      { name: "2021", growth: 8, investment: 170 },
      { name: "2022", growth: 10, investment: 220 },
      { name: "2023", growth: 13, investment: 300 },
      { name: "2024", growth: 15, investment: 380 },
      { name: "2025", growth: 18, investment: 480 },
    ]}
    projectionData={[
      { name: "2025", baseline: 550, optimistic: 750, conservative: 430 },
      { name: "2027", baseline: 800, optimistic: 1200, conservative: 600 },
      { name: "2029", baseline: 1200, optimistic: 2000, conservative: 900 },
      { name: "2031", baseline: 1700, optimistic: 3100, conservative: 1300 },
      { name: "2033", baseline: 2400, optimistic: 4500, conservative: 1900 },
      { name: "2035", baseline: 3200, optimistic: 6000, conservative: 2500 },
    ]}
    investmentByRegion={[
      { name: "Kabul", value: 800 },
      { name: "Herat", value: 500 },
      { name: "Balkh", value: 450 },
      { name: "Nangarhar", value: 350 },
      { name: "Kandahar", value: 300 },
      { name: "Kunduz", value: 250 },
      { name: "Bamyan", value: 200 },
      { name: "Badakhshan", value: 150 },
    ]}
    sectorBreakdown={[
      { name: "Primary Schools", value: 30, color: "hsl(142, 71%, 45%)" },
      { name: "Secondary/STEM", value: 22, color: "hsl(217, 91%, 60%)" },
      { name: "Universities", value: 18, color: "hsl(262, 83%, 58%)" },
      { name: "Vocational", value: 15, color: "hsl(47, 96%, 53%)" },
      { name: "Teacher Training", value: 8, color: "hsl(0, 84%, 60%)" },
      { name: "Digital/EdTech", value: 7, color: "hsl(199, 89%, 48%)" },
    ]}
    keyProjects={[
      { name: "National University System", location: "10 Cities", investment: "$1.5B", status: "Under Construction", timeline: "2025–2035", description: "10 new universities with STEM, medicine, engineering, agriculture, and technology faculties." },
      { name: "TVET Centre Network", location: "34 Provinces", investment: "$600M", status: "Under Construction", timeline: "2025–2030", description: "Technical and vocational training centres in every province training 100,000 youth annually." },
      { name: "Digital Classroom Initiative", location: "Nationwide", investment: "$300M", status: "Operational", timeline: "2025–ongoing", description: "50,000 classrooms equipped with computers, internet, and digital learning platforms." },
      { name: "Teacher Training Academies", location: "5 Regions", investment: "$200M", status: "Under Construction", timeline: "2026–2030", description: "5 modern teacher training colleges producing 10,000 qualified teachers annually." },
      { name: "International Scholarship Programme", location: "Global", investment: "$500M", status: "Operational", timeline: "2025–2040", description: "10,000 full scholarships at leading universities worldwide across all disciplines." },
      { name: "School Construction Programme", location: "Nationwide", investment: "$2B", status: "Under Construction", timeline: "2025–2035", description: "5,000 new school buildings with modern facilities, libraries, and sports grounds." },
    ]}
    opportunities={[
      "School construction and equipment — 5,000+ new schools requiring design, construction, and classroom outfitting",
      "EdTech platform development — digital learning solutions for 10M+ students across diverse linguistic communities",
      "University development and management — 10 new universities requiring international academic partnerships",
      "Vocational training programme design and delivery — 100,000 youth annually across 50+ trade specialisations",
      "Textbook and learning material production — curriculum development, publishing, and distribution for all levels",
      "Teacher training and professional development — capacity building for 100,000+ educators nationwide",
      "Student assessment and examination systems — standardised national testing and certification infrastructure",
      "International educational consultancy — curriculum design, quality assurance, and institutional accreditation",
    ]}
    challenges={[
      "Teacher recruitment and retention — competitive salaries, housing, and career development programmes being established",
      "Gender parity in education — targeted programmes ensuring equal access and participation for girls at all levels",
      "Curriculum modernisation — balancing STEM and digital skills with humanities, culture, and values education",
      "Language of instruction — multilingual education supporting Dari, Pashto, and English proficiency",
      "Rural school access — school bus networks, boarding facilities, and satellite-based distance learning for remote areas",
      "Education quality measurement — national assessment framework and international benchmarking programmes",
    ]}
    policies={[
      "Education Reform Act 2026 — universal compulsory education from age 6–18 with government funding guarantee",
      "Teacher Professional Standards — qualification requirements, continuing development, and performance evaluation",
      "Higher Education Autonomy Act — university governance, academic freedom, and quality assurance frameworks",
      "TVET National Strategy — industry-aligned vocational training with apprenticeship and employer partnership requirements",
      "Digital Education Policy — mandatory ICT integration across all levels with broadband connectivity targets",
      "Scholarship and Student Finance — needs-based grants, loans, and international scholarship programmes",
      "Curriculum Development Authority — national curriculum standards with regional and cultural adaptation",
      "Education Investment Tax Credit — corporate tax incentives for private sector investment in education infrastructure",
    ]}
    partners={[
      "UNESCO Afghanistan", "UNICEF Education", "World Bank Education", "USAID Education Programme",
      "Aga Khan Foundation", "British Council", "DAAD (German Academic Exchange)", "Fulbright Programme",
      "JICA Education", "Korean Education Aid", "Turkish Maarif Foundation", "Indian Scholarship Programme",
      "Qatar Foundation", "UAE Education Initiative", "Saudi Knowledge Foundation", "Mastercard Foundation",
    ]}
  />
  <EducationMegaSections />
  </>
);

export default SectorEducation;
