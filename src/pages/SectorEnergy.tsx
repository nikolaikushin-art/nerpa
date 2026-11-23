import { Zap } from "lucide-react";
import { SectorPageLayout } from "@/components/SectorPageLayout";
import { EnergyMegaSections } from "@/components/EnergyMegaSections";
const energyImage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/solar-farm-afghanistan.jpg";

const SectorEnergy = () => (
  <>
  <SectorPageLayout
    title="Energy & Sustainability"
    subtitle="Energy Independence"
    heroImage={energyImage}
    icon={Zap}
    overview="Afghanistan's abundant renewable energy resources — over 300 days of sunshine annually, significant wind corridors in Herat and northern highlands, and vast hydroelectric potential from the Hindu Kush mountain system — position the nation to achieve complete energy independence whilst establishing export capacity to neighbouring countries. The energy sector transformation under NERPA targets 5GW of installed renewable capacity by 2035, with a vision for 100% clean energy access by 2040. This represents a $15 billion investment opportunity across solar, wind, hydro, and energy storage, creating 200,000+ jobs and transforming Afghanistan from an energy importer into a regional energy hub connecting Central Asia, South Asia, and beyond."
    stats={[
      { value: "300+", label: "Annual Sunny Days" },
      { value: "5GW", label: "Capacity Target" },
      { value: "$15B", label: "Investment Opportunity" },
      { value: "100%", label: "Clean Energy Goal" },
    ]}
    historicalData={[
      { name: "2016", growth: 1, investment: 30 },
      { name: "2017", growth: 2, investment: 45 },
      { name: "2018", growth: 3, investment: 60 },
      { name: "2019", growth: 4, investment: 80 },
      { name: "2020", growth: 3, investment: 65 },
      { name: "2021", growth: 5, investment: 100 },
      { name: "2022", growth: 8, investment: 180 },
      { name: "2023", growth: 12, investment: 300 },
      { name: "2024", growth: 16, investment: 450 },
      { name: "2025", growth: 20, investment: 600 },
    ]}
    projectionData={[
      { name: "2025", baseline: 750, optimistic: 1100, conservative: 550 },
      { name: "2027", baseline: 1300, optimistic: 2200, conservative: 1000 },
      { name: "2029", baseline: 2400, optimistic: 4500, conservative: 1800 },
      { name: "2031", baseline: 3800, optimistic: 7000, conservative: 2900 },
      { name: "2033", baseline: 5500, optimistic: 10000, conservative: 4500 },
      { name: "2035", baseline: 7500, optimistic: 14000, conservative: 6000 },
    ]}
    investmentByRegion={[
      { name: "Herat", value: 2500 },
      { name: "Helmand", value: 2000 },
      { name: "Kandahar", value: 1800 },
      { name: "Bamyan", value: 1500 },
      { name: "Kabul", value: 1200 },
      { name: "Balkh", value: 1000 },
      { name: "Panjshir", value: 800 },
      { name: "Kunar", value: 600 },
    ]}
    sectorBreakdown={[
      { name: "Solar", value: 35, color: "hsl(47, 96%, 53%)" },
      { name: "Hydroelectric", value: 30, color: "hsl(217, 91%, 60%)" },
      { name: "Wind", value: 20, color: "hsl(199, 89%, 48%)" },
      { name: "Battery Storage", value: 8, color: "hsl(142, 71%, 45%)" },
      { name: "Grid Infrastructure", value: 5, color: "hsl(262, 83%, 58%)" },
      { name: "Biomass", value: 2, color: "hsl(25, 95%, 53%)" },
    ]}
    keyProjects={[
      { name: "Helmand Solar Mega-Park", location: "Helmand Province", investment: "$2B", status: "Under Construction", timeline: "2026–2030", description: "1GW solar installation across 5,000 hectares in one of the world's sunniest regions." },
      { name: "Kajaki Dam Expansion", location: "Helmand Province", investment: "$800M", status: "Under Construction", timeline: "2025–2029", description: "Expanding hydroelectric capacity from 51MW to 150MW with modern turbines and flood management." },
      { name: "Herat Wind Corridor Farm", location: "Herat Province", investment: "$1.5B", status: "Planned", timeline: "2027–2032", description: "500MW wind farm leveraging consistent 120-day wind corridor in western Afghanistan." },
      { name: "National Grid Modernisation", location: "Nationwide", investment: "$3B", status: "Under Construction", timeline: "2025–2035", description: "Smart grid connecting all 34 provinces with reliable electricity for the first time in history." },
      { name: "Panjshir Micro-Hydro Network", location: "Panjshir Province", investment: "$200M", status: "Operational", timeline: "2024–ongoing", description: "50 micro-hydro plants powering remote valley communities with clean, reliable electricity." },
      { name: "Kandahar Battery Storage Hub", location: "Kandahar Province", investment: "$500M", status: "Planned", timeline: "2028–2031", description: "500MWh battery storage ensuring stable power supply from variable solar and wind generation." },
    ]}
    opportunities={[
      "Utility-scale solar installations in southern and western provinces — among the highest solar irradiance globally",
      "Hydroelectric development across the Hindu Kush mountain system — estimated 25GW of untapped hydro potential",
      "Wind energy in the Herat-Farah corridor and northern highlands — consistent, high-velocity wind resources",
      "Battery storage and smart grid technology — essential infrastructure for integrating variable renewable generation",
      "Cross-border energy trade — CASA-1000 and TAPI pipeline creating regional energy export corridors",
      "Rural electrification through off-grid solar systems — 10 million people gaining first-time electricity access",
      "Solar panel manufacturing — domestic production reducing costs and creating industrial employment",
      "Energy efficiency consulting and green building certification — growing market as construction sector expands",
    ]}
    challenges={[
      "Grid infrastructure requires $3B+ investment — phased construction programme connecting provinces over 10 years",
      "Seasonal variation in hydroelectric output managed through complementary solar/wind and battery storage systems",
      "Technical workforce development through energy academies training 20,000 technicians in renewable energy systems",
      "Initial capital requirements addressed through concessional financing from development banks and green climate funds",
      "Land acquisition for large-scale solar and wind projects managed through community benefit-sharing agreements",
      "Integration of variable renewable energy through smart grid technology and demand-side management programmes",
    ]}
    policies={[
      "Renewable Energy Act 2026 — feed-in tariffs, net metering, and grid access guarantees for renewable generators",
      "National Electrification Strategy — 100% access by 2040 through grid extension and off-grid solutions",
      "Energy Efficiency Standards — mandatory for all new buildings, appliances, and industrial equipment",
      "Independent Power Producer (IPP) Framework — transparent procurement and power purchase agreements",
      "Green Climate Fund Access — Afghanistan's NDC commitment enabling access to international climate finance",
      "Rural Electrification Subsidy — government co-funding for off-grid solar systems in remote communities",
      "Carbon Trading Framework — enabling Afghan renewable projects to sell carbon credits internationally",
      "Energy Research Fund — 1% of energy revenue dedicated to R&D in storage, efficiency, and smart grid technology",
    ]}
    partners={[
      "World Bank Energy", "Asian Development Bank", "USAID Power Afghanistan", "GIZ Energy Programme",
      "Islamic Development Bank", "IRENA (International Renewable Energy Agency)", "IFC PowerAsia",
      "JICA Energy", "Korean Energy Agency", "Saudi ACWA Power", "Masdar (UAE)", "Turkish Energy Ministry",
      "Indian NTPC Partnership", "China State Grid Advisory", "Norwegian Clean Energy Fund", "EU Green Deal Partnership",
    ]}
  />
  <EnergyMegaSections />
  </>
);

export default SectorEnergy;
