import { Landmark } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { FinanceMegaSections } from "@/components/FinanceMegaSections";
const financeImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/banking-headquarters.jpg";

const SectorFinance = () => (
  <>
  <SectorPageLayout
    title="Banking & Finance"
    subtitle="Inclusive Finance"
    heroImage={financeImage}
    icon={Landmark}
    overview="A modern, inclusive financial system is the engine of economic development. Afghanistan's Banking & Finance sector under NERPA targets 80% financial inclusion — bringing banking services to 30 million citizens through mobile banking, microfinance, Islamic finance products, and digital payment systems. From village-level savings groups to sophisticated capital markets facilitating billion-dollar infrastructure investments, the financial sector is being transformed to serve all segments of Afghan society. With $5 billion in credit targets, 500+ bank branches, insurance market development, and the establishment of a national stock exchange, the financial infrastructure is being built to power Afghanistan's economic transformation and attract $10 billion in foreign direct investment."
    stats={[
      { value: "80%", label: "Financial Inclusion" },
      { value: "$5B", label: "Credit Target" },
      { value: "10M", label: "Mobile Banking Users" },
      { value: "500+", label: "Bank Branches" },
    ]}
    historicalData={[
      { name: "2016", growth: 3, investment: 40 },
      { name: "2017", growth: 5, investment: 55 },
      { name: "2018", growth: 7, investment: 70 },
      { name: "2019", growth: 6, investment: 80 },
      { name: "2020", growth: 4, investment: 60 },
      { name: "2021", growth: 8, investment: 100 },
      { name: "2022", growth: 12, investment: 150 },
      { name: "2023", growth: 15, investment: 220 },
      { name: "2024", growth: 18, investment: 300 },
      { name: "2025", growth: 22, investment: 400 },
    ]}
    projectionData={[
      { name: "2025", baseline: 450, optimistic: 650, conservative: 350 },
      { name: "2027", baseline: 700, optimistic: 1100, conservative: 550 },
      { name: "2029", baseline: 1100, optimistic: 1800, conservative: 800 },
      { name: "2031", baseline: 1600, optimistic: 2700, conservative: 1200 },
      { name: "2033", baseline: 2200, optimistic: 3800, conservative: 1700 },
      { name: "2035", baseline: 2900, optimistic: 5000, conservative: 2200 },
    ]}
    investmentByRegion={[
      { name: "Kabul", value: 1500 },
      { name: "Herat", value: 500 },
      { name: "Balkh", value: 400 },
      { name: "Kandahar", value: 350 },
      { name: "Nangarhar", value: 300 },
      { name: "Kunduz", value: 200 },
      { name: "Bamyan", value: 100 },
      { name: "Paktya", value: 80 },
    ]}
    sectorBreakdown={[
      { name: "Commercial Banking", value: 30, color: "hsl(217, 91%, 60%)" },
      { name: "Mobile/Digital", value: 22, color: "hsl(142, 71%, 45%)" },
      { name: "Islamic Finance", value: 18, color: "hsl(47, 96%, 53%)" },
      { name: "Microfinance", value: 12, color: "hsl(25, 95%, 53%)" },
      { name: "Insurance", value: 10, color: "hsl(262, 83%, 58%)" },
      { name: "Capital Markets", value: 8, color: "hsl(0, 84%, 60%)" },
    ]}
    keyProjects={[
      { name: "National Digital Payment System", location: "Nationwide", investment: "$200M", status: "Under Construction", timeline: "2025–2028", description: "Unified digital payment infrastructure enabling instant transfers, merchant payments, and government disbursements." },
      { name: "Afghanistan Stock Exchange", location: "Kabul", investment: "$100M", status: "Planned", timeline: "2028–2030", description: "National stock exchange enabling companies to raise capital and citizens to invest in growth." },
      { name: "Islamic Banking Expansion", location: "Nationwide", investment: "$300M", status: "Operational", timeline: "2025–ongoing", description: "Sharia-compliant banking products reaching 5M customers through 200 dedicated branches." },
      { name: "Microfinance Revolution", location: "Rural Areas", investment: "$500M", status: "Operational", timeline: "2024–ongoing", description: "Microloans and savings products for 2M+ small entrepreneurs and farming families." },
      { name: "Insurance Market Development", location: "Nationwide", investment: "$150M", status: "Planned", timeline: "2027–2032", description: "Life, health, crop, and property insurance products covering 10M+ citizens." },
      { name: "Financial Literacy Programme", location: "Nationwide", investment: "$50M", status: "Operational", timeline: "2025–ongoing", description: "National programme teaching savings, borrowing, and investment skills to 5M citizens." },
    ]}
    opportunities={[
      "Mobile banking platform development — serving 30M+ potential users in one of the world's most under-banked markets",
      "Islamic finance products — Sharia-compliant investment, savings, and financing meeting Afghan customer preferences",
      "Microfinance institutions — huge unmet demand for small business and agricultural credit across rural Afghanistan",
      "Insurance market entry — virtually greenfield market requiring product design, distribution, and claims management",
      "Fintech innovation — payment processing, digital wallets, and blockchain-based solutions",
      "Capital market advisory — helping Afghan companies prepare for stock exchange listing and bond issuance",
      "Credit bureau development — building national credit scoring infrastructure from ground up",
      "Remittance technology — modernising $3B+ annual remittance flows from diaspora communities",
    ]}
    challenges={[
      "Low financial literacy addressed through national education programme reaching 5M citizens through schools and media",
      "Trust in formal banking systems built through deposit insurance, transparent regulation, and customer protection",
      "AML/CFT compliance strengthened through technology, training, and alignment with international standards",
      "Digital infrastructure gaps in rural areas bridged through mobile-first banking and agent banking networks",
      "Regulatory capacity building through technical assistance from IMF, World Bank, and bilateral partners",
      "Foreign exchange management and currency stability through central bank capacity and reserve building",
    ]}
    policies={[
      "Banking Reform Act 2026 — modernising prudential regulation, licensing, and consumer protection frameworks",
      "Mobile Money Regulation — enabling non-bank mobile payment providers with appropriate oversight",
      "Islamic Finance Framework — comprehensive Sharia-compliant banking and finance regulation",
      "Financial Inclusion Strategy — targeting 80% adult access to formal financial services by 2035",
      "Capital Markets Act — establishing stock exchange, securities regulation, and investor protection",
      "Anti-Money Laundering Act — FATF-aligned framework with risk-based approach and technology-enabled monitoring",
      "Insurance Regulation — licensing, solvency requirements, and consumer protection for insurance market",
      "Credit Reporting Act — establishing national credit bureau and data sharing framework for responsible lending",
    ]}
    partners={[
      "IMF Technical Assistance", "World Bank Finance", "IFC Financial Markets", "Asian Development Bank",
      "Islamic Development Bank", "UNCDF FinTech", "USAID Economic Growth", "GIZ Financial Systems",
      "Bill & Melinda Gates Foundation", "Mastercard Foundation", "Visa Financial Inclusion",
      "Standard Chartered Advisory", "Al Baraka Banking Group", "Dubai Islamic Bank", "Central Bank of UAE",
      "Bank of England Technical Cooperation",
    ]}
  />
  <FinanceMegaSections />
  </>
);

export default SectorFinance;
