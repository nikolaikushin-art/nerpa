import { motion } from "framer-motion";
import { MapPin, Plane, Train, Truck, Building2, Factory, Zap, Droplets, Hospital, GraduationCap, Landmark, Ship, Radio, Gem, Wheat, Filter, X, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";

interface InfrastructureMarker {
  id: string;
  type: "airport" | "railway" | "highway" | "dam" | "powerplant" | "hospital" | "university" | "factory" | "port" | "telecom" | "mining" | "agriculture";
  name: string;
  description: string;
  status: "operational" | "under-construction" | "planned";
  coordinates: {x: number;y: number;};
  investment?: string;
  completion?: string;
}

interface ProvinceMapData {
  province: string;
  markers: InfrastructureMarker[];
}

interface Filters {
  types: string[];
  statuses: string[];
  investmentRange: string;
}

const infrastructureIcons = {
  airport: Plane,
  railway: Train,
  highway: Truck,
  dam: Droplets,
  powerplant: Zap,
  hospital: Hospital,
  university: GraduationCap,
  factory: Factory,
  port: Ship,
  telecom: Radio,
  mining: Gem,
  agriculture: Wheat
};

const statusColorsSolid = {
  operational: "bg-emerald-600",
  "under-construction": "bg-amber-600",
  planned: "bg-blue-600"
};

const projectTypeLabels: Record<string, string> = {
  airport: "Airports",
  railway: "Railways",
  highway: "Highways",
  dam: "Dams & Water",
  powerplant: "Power Plants",
  hospital: "Hospitals",
  university: "Universities",
  factory: "Factories",
  port: "Ports & Borders",
  telecom: "Telecom",
  mining: "Mining",
  agriculture: "Agriculture"
};

const investmentRanges = [
{ label: "All Ranges", value: "all" },
{ label: "Under $50M", value: "under50" },
{ label: "$50M - $200M", value: "50to200" },
{ label: "$200M - $500M", value: "200to500" },
{ label: "$500M - $1B", value: "500to1000" },
{ label: "Over $1B", value: "over1000" }];


const parseInvestment = (investment?: string): number => {
  if (!investment) return 0;
  const cleaned = investment.replace(/[^0-9.]/g, "");
  const value = parseFloat(cleaned);
  if (investment.includes("B")) return value * 1000;
  return value;
};

// All 34 provinces with infrastructure data
const provinceMapsData: ProvinceMapData[] = [
{
  province: "Kabul",
  markers: [
  { id: "kbl-1", type: "airport", name: "Hamid Karzai International Airport", description: "Main international gateway with cargo hub expansion", status: "operational", coordinates: { x: 35, y: 25 }, investment: "$450M", completion: "2028" },
  { id: "kbl-2", type: "highway", name: "Ring Road Junction", description: "National highway intersection connecting all major routes", status: "operational", coordinates: { x: 50, y: 40 }, investment: "$120M" },
  { id: "kbl-3", type: "railway", name: "Kabul Metro Rail", description: "Modern urban transit system serving 2M daily commuters", status: "under-construction", coordinates: { x: 45, y: 55 }, investment: "$2.5B", completion: "2032" },
  { id: "kbl-4", type: "hospital", name: "National Medical Centre", description: "500-bed tertiary hospital with specialised units", status: "under-construction", coordinates: { x: 60, y: 35 }, investment: "$180M", completion: "2029" },
  { id: "kbl-5", type: "university", name: "Technology University Complex", description: "STEM education hub with 25,000 student capacity", status: "planned", coordinates: { x: 70, y: 60 }, investment: "$350M", completion: "2035" },
  { id: "kbl-6", type: "powerplant", name: "Solar Grid Station", description: "200MW solar integration and distribution centre", status: "under-construction", coordinates: { x: 25, y: 70 }, investment: "$280M", completion: "2030" },
  { id: "kbl-7", type: "factory", name: "Industrial Technology Park", description: "Manufacturing and R&D hub for 500+ companies", status: "planned", coordinates: { x: 80, y: 45 }, investment: "$1.2B", completion: "2036" }]

},
{
  province: "Herat",
  markers: [
  { id: "hrt-1", type: "airport", name: "Herat International Airport", description: "Western gateway with Iran-bound cargo facilities", status: "operational", coordinates: { x: 40, y: 30 }, investment: "$180M", completion: "2027" },
  { id: "hrt-2", type: "railway", name: "Iran-Herat Railway", description: "Cross-border rail link for regional trade", status: "under-construction", coordinates: { x: 20, y: 50 }, investment: "$800M", completion: "2031" },
  { id: "hrt-3", type: "powerplant", name: "Solar Power Complex", description: "500MW solar farm in desert regions", status: "under-construction", coordinates: { x: 70, y: 65 }, investment: "$420M", completion: "2029" },
  { id: "hrt-4", type: "factory", name: "Saffron Processing Hub", description: "Premium export processing for global markets", status: "operational", coordinates: { x: 55, y: 40 }, investment: "$85M" },
  { id: "hrt-5", type: "hospital", name: "Regional Medical Centre", description: "Tertiary care facility serving western provinces", status: "planned", coordinates: { x: 45, y: 55 }, investment: "$150M", completion: "2033" }]

},
{
  province: "Balkh",
  markers: [
  { id: "blk-1", type: "airport", name: "Mazar-i-Sharif Airport", description: "Northern aviation hub with expanded runway", status: "operational", coordinates: { x: 50, y: 25 }, investment: "$120M" },
  { id: "blk-2", type: "railway", name: "Hairatan Railway Terminal", description: "Cross-border rail connection to Uzbekistan", status: "operational", coordinates: { x: 75, y: 15 }, investment: "$250M" },
  { id: "blk-3", type: "mining", name: "Natural Gas Processing", description: "Gas extraction and distribution facility", status: "under-construction", coordinates: { x: 60, y: 55 }, investment: "$380M", completion: "2030" },
  { id: "blk-4", type: "factory", name: "Fertilizer Production Plant", description: "Agricultural input manufacturing", status: "planned", coordinates: { x: 35, y: 45 }, investment: "$200M", completion: "2032" },
  { id: "blk-5", type: "university", name: "Balkh University Expansion", description: "Higher education campus development", status: "under-construction", coordinates: { x: 45, y: 35 }, investment: "$95M", completion: "2028" }]

},
{
  province: "Kandahar",
  markers: [
  { id: "knd-1", type: "airport", name: "Kandahar International Airport", description: "Southern hub with agricultural export facilities", status: "operational", coordinates: { x: 45, y: 35 }, investment: "$160M" },
  { id: "knd-2", type: "dam", name: "Dahla Dam Expansion", description: "Irrigation and hydropower for 200,000 hectares", status: "under-construction", coordinates: { x: 30, y: 60 }, investment: "$320M", completion: "2031" },
  { id: "knd-3", type: "agriculture", name: "Pomegranate Processing Centre", description: "Export-ready facilities for global markets", status: "operational", coordinates: { x: 55, y: 50 }, investment: "$75M" },
  { id: "knd-4", type: "highway", name: "Ring Road Southern Section", description: "National highway rehabilitation project", status: "under-construction", coordinates: { x: 70, y: 40 }, investment: "$280M", completion: "2029" },
  { id: "knd-5", type: "hospital", name: "Mirwais Regional Hospital", description: "Southern healthcare excellence centre", status: "planned", coordinates: { x: 48, y: 45 }, investment: "$140M", completion: "2034" }]

},
{
  province: "Nangarhar",
  markers: [
  { id: "nng-1", type: "port", name: "Torkham Border Facility", description: "Pakistan trade gateway processing $3B annually", status: "operational", coordinates: { x: 85, y: 40 }, investment: "$200M" },
  { id: "nng-2", type: "dam", name: "Kabul River Hydropower", description: "Multiple dam projects generating 500MW", status: "under-construction", coordinates: { x: 40, y: 55 }, investment: "$450M", completion: "2030" },
  { id: "nng-3", type: "factory", name: "Special Economic Zone", description: "Export-oriented manufacturing with tax incentives", status: "planned", coordinates: { x: 50, y: 35 }, investment: "$600M", completion: "2033" },
  { id: "nng-4", type: "agriculture", name: "Citrus Processing Complex", description: "Juice and concentrate production for export", status: "operational", coordinates: { x: 35, y: 45 }, investment: "$55M" }]

},
{
  province: "Badakhshan",
  markers: [
  { id: "bdk-1", type: "mining", name: "Lapis Lazuli Processing", description: "Value-added gemstone processing for export", status: "operational", coordinates: { x: 55, y: 40 }, investment: "$45M" },
  { id: "bdk-2", type: "powerplant", name: "Micro-Hydro Network", description: "50+ installations across remote valleys", status: "under-construction", coordinates: { x: 40, y: 60 }, investment: "$80M", completion: "2029" },
  { id: "bdk-3", type: "highway", name: "Wakhan Corridor Road", description: "Tourism and trade route to China border", status: "planned", coordinates: { x: 80, y: 50 }, investment: "$350M", completion: "2035" },
  { id: "bdk-4", type: "telecom", name: "Mountain Communications", description: "4G/5G network expansion to remote areas", status: "under-construction", coordinates: { x: 30, y: 35 }, investment: "$65M", completion: "2028" }]

},
{
  province: "Panjshir",
  markers: [
  { id: "pnj-1", type: "dam", name: "Panjshir Hydroelectric", description: "Multi-stage dam system with 300MW capacity", status: "under-construction", coordinates: { x: 50, y: 40 }, investment: "$520M", completion: "2031" },
  { id: "pnj-2", type: "mining", name: "Emerald Mining Complex", description: "Sustainable extraction of precious gems", status: "operational", coordinates: { x: 65, y: 55 }, investment: "$120M" },
  { id: "pnj-3", type: "highway", name: "Valley Highway Upgrade", description: "All-weather road connecting to Kabul", status: "under-construction", coordinates: { x: 35, y: 30 }, investment: "$85M", completion: "2028" }]

},
{
  province: "Bamyan",
  markers: [
  { id: "bmn-1", type: "airport", name: "Bamyan Airport Expansion", description: "Tourism-focused regional airport upgrade", status: "under-construction", coordinates: { x: 50, y: 35 }, investment: "$95M", completion: "2029" },
  { id: "bmn-2", type: "university", name: "Bamyan Cultural University", description: "Heritage studies and archaeology centre", status: "planned", coordinates: { x: 40, y: 55 }, investment: "$75M", completion: "2032" },
  { id: "bmn-3", type: "agriculture", name: "Potato Research Centre", description: "High-altitude agriculture development", status: "operational", coordinates: { x: 65, y: 45 }, investment: "$25M" },
  { id: "bmn-4", type: "powerplant", name: "Band-e-Amir Solar", description: "100MW solar installation near lakes", status: "planned", coordinates: { x: 70, y: 60 }, investment: "$140M", completion: "2033" }]

},
{
  province: "Logar",
  markers: [
  { id: "lgr-1", type: "mining", name: "Mes Aynak Copper Mine", description: "World's largest untapped copper deposit", status: "under-construction", coordinates: { x: 55, y: 45 }, investment: "$3.5B", completion: "2035" },
  { id: "lgr-2", type: "railway", name: "Mining Rail Link", description: "Dedicated freight rail to Kabul", status: "planned", coordinates: { x: 40, y: 35 }, investment: "$450M", completion: "2034" },
  { id: "lgr-3", type: "highway", name: "Mining Access Highway", description: "Heavy transport corridor", status: "under-construction", coordinates: { x: 65, y: 55 }, investment: "$180M", completion: "2030" }]

},
{
  province: "Ghazni",
  markers: [
  { id: "ghz-1", type: "mining", name: "Lithium Extraction Facility", description: "Electric vehicle battery material processing", status: "planned", coordinates: { x: 50, y: 40 }, investment: "$800M", completion: "2034" },
  { id: "ghz-2", type: "factory", name: "Glass Manufacturing", description: "High-quality glass production for export", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$65M" },
  { id: "ghz-3", type: "highway", name: "Ghazni-Kabul Highway", description: "Major trade corridor upgrade", status: "under-construction", coordinates: { x: 35, y: 30 }, investment: "$220M", completion: "2029" },
  { id: "ghz-4", type: "university", name: "Ghazni University Campus", description: "Multi-disciplinary higher education", status: "under-construction", coordinates: { x: 45, y: 65 }, investment: "$85M", completion: "2030" }]

},
{
  province: "Kunduz",
  markers: [
  { id: "knz-1", type: "airport", name: "Kunduz Airport", description: "Northern cargo and passenger hub", status: "operational", coordinates: { x: 50, y: 30 }, investment: "$85M" },
  { id: "knz-2", type: "agriculture", name: "Cotton Processing Facility", description: "Textile industry raw material hub", status: "operational", coordinates: { x: 60, y: 50 }, investment: "$45M" },
  { id: "knz-3", type: "railway", name: "Uzbekistan Rail Extension", description: "Cross-border freight connection", status: "planned", coordinates: { x: 40, y: 20 }, investment: "$350M", completion: "2033" },
  { id: "knz-4", type: "dam", name: "Kunduz River Irrigation", description: "Agricultural water management system", status: "under-construction", coordinates: { x: 70, y: 45 }, investment: "$180M", completion: "2030" }]

},
{
  province: "Takhar",
  markers: [
  { id: "tkh-1", type: "agriculture", name: "Rice Production Hub", description: "High-yield rice cultivation centre", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$35M" },
  { id: "tkh-2", type: "dam", name: "Taloqan Irrigation Dam", description: "Water management for agricultural plains", status: "under-construction", coordinates: { x: 40, y: 55 }, investment: "$150M", completion: "2031" },
  { id: "tkh-3", type: "hospital", name: "Regional Health Centre", description: "200-bed hospital for northeastern region", status: "planned", coordinates: { x: 65, y: 35 }, investment: "$95M", completion: "2033" }]

},
{
  province: "Baghlan",
  markers: [
  { id: "bgh-1", type: "factory", name: "Sugar Processing Plant", description: "Revitalized agricultural processing", status: "under-construction", coordinates: { x: 50, y: 40 }, investment: "$120M", completion: "2029" },
  { id: "bgh-2", type: "powerplant", name: "Pul-i-Khumri Power Station", description: "Thermal power generation upgrade", status: "operational", coordinates: { x: 55, y: 55 }, investment: "$200M" },
  { id: "bgh-3", type: "highway", name: "Salang Highway Tunnel", description: "Major mountain passage renovation", status: "under-construction", coordinates: { x: 35, y: 30 }, investment: "$450M", completion: "2032" },
  { id: "bgh-4", type: "mining", name: "Coal Mining Operations", description: "Energy sector fuel supply", status: "operational", coordinates: { x: 70, y: 60 }, investment: "$80M" }]

},
{
  province: "Jowzjan",
  markers: [
  { id: "jwz-1", type: "mining", name: "Natural Gas Fields", description: "Major gas extraction and processing", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$350M" },
  { id: "jwz-2", type: "factory", name: "Petrochemical Complex", description: "Gas-based industrial production", status: "under-construction", coordinates: { x: 65, y: 55 }, investment: "$480M", completion: "2031" },
  { id: "jwz-3", type: "railway", name: "Turkmenistan Rail Link", description: "Cross-border energy transport", status: "planned", coordinates: { x: 30, y: 35 }, investment: "$280M", completion: "2034" }]

},
{
  province: "Faryab",
  markers: [
  { id: "frb-1", type: "agriculture", name: "Carpet Wool Processing", description: "Premium wool for traditional carpets", status: "operational", coordinates: { x: 50, y: 40 }, investment: "$40M" },
  { id: "frb-2", type: "factory", name: "Carpet Weaving Centre", description: "Traditional craft industrial hub", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$65M" },
  { id: "frb-3", type: "dam", name: "Faryab Irrigation System", description: "Water management for agriculture", status: "under-construction", coordinates: { x: 40, y: 30 }, investment: "$120M", completion: "2030" }]

},
{
  province: "Helmand",
  markers: [
  { id: "hlm-1", type: "dam", name: "Kajaki Dam Expansion", description: "Hydroelectric capacity increase to 150MW", status: "under-construction", coordinates: { x: 45, y: 40 }, investment: "$380M", completion: "2030" },
  { id: "hlm-2", type: "agriculture", name: "Helmand Valley Agriculture", description: "Irrigated farming development", status: "operational", coordinates: { x: 55, y: 55 }, investment: "$150M" },
  { id: "hlm-3", type: "highway", name: "Southern Highway Extension", description: "Regional connectivity improvement", status: "under-construction", coordinates: { x: 70, y: 35 }, investment: "$200M", completion: "2031" }]

},
{
  province: "Farah",
  markers: [
  { id: "frh-1", type: "powerplant", name: "Farah Solar Complex", description: "600MW desert solar installation", status: "under-construction", coordinates: { x: 55, y: 45 }, investment: "$520M", completion: "2031" },
  { id: "frh-2", type: "airport", name: "Farah Airfield Upgrade", description: "Regional connectivity improvement", status: "planned", coordinates: { x: 40, y: 35 }, investment: "$75M", completion: "2033" },
  { id: "frh-3", type: "agriculture", name: "Date Palm Cultivation", description: "Export-quality date production", status: "operational", coordinates: { x: 65, y: 60 }, investment: "$30M" }]

},
{
  province: "Nimroz",
  markers: [
  { id: "nmz-1", type: "port", name: "Zaranj Border Terminal", description: "Iran trade corridor gateway", status: "operational", coordinates: { x: 30, y: 50 }, investment: "$120M" },
  { id: "nmz-2", type: "powerplant", name: "Desert Solar Farm", description: "300MW solar in arid region", status: "planned", coordinates: { x: 60, y: 40 }, investment: "$280M", completion: "2033" },
  { id: "nmz-3", type: "highway", name: "Zaranj-Delaram Highway", description: "Key trade route maintenance", status: "under-construction", coordinates: { x: 50, y: 55 }, investment: "$150M", completion: "2029" }]

},
{
  province: "Ghor",
  markers: [
  { id: "ghr-1", type: "highway", name: "Central Highlands Road", description: "Connecting remote communities", status: "under-construction", coordinates: { x: 50, y: 45 }, investment: "$180M", completion: "2031" },
  { id: "ghr-2", type: "agriculture", name: "Wool Processing Facility", description: "Sheep farming value addition", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$25M" },
  { id: "ghr-3", type: "telecom", name: "Rural Connectivity Project", description: "Internet and mobile expansion", status: "under-construction", coordinates: { x: 35, y: 35 }, investment: "$45M", completion: "2029" }]

},
{
  province: "Daykundi",
  markers: [
  { id: "dyk-1", type: "dam", name: "Band-e-Chak Dam", description: "Multi-purpose water storage", status: "planned", coordinates: { x: 50, y: 40 }, investment: "$95M", completion: "2034" },
  { id: "dyk-2", type: "agriculture", name: "Almond Cultivation Project", description: "High-value nut production", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$20M" },
  { id: "dyk-3", type: "hospital", name: "Provincial Health Centre", description: "Primary healthcare expansion", status: "under-construction", coordinates: { x: 40, y: 35 }, investment: "$35M", completion: "2029" }]

},
{
  province: "Uruzgan",
  markers: [
  { id: "urz-1", type: "highway", name: "Tirin Kot Road", description: "Provincial connectivity upgrade", status: "under-construction", coordinates: { x: 50, y: 45 }, investment: "$140M", completion: "2030" },
  { id: "urz-2", type: "agriculture", name: "Fruit Orchards Development", description: "Pomegranate and almond farming", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$30M" },
  { id: "urz-3", type: "telecom", name: "Mobile Network Expansion", description: "Rural telecommunications", status: "planned", coordinates: { x: 35, y: 35 }, investment: "$25M", completion: "2031" }]

},
{
  province: "Zabul",
  markers: [
  { id: "zbl-1", type: "highway", name: "Qalat Highway Junction", description: "Strategic road intersection", status: "under-construction", coordinates: { x: 50, y: 40 }, investment: "$120M", completion: "2029" },
  { id: "zbl-2", type: "agriculture", name: "Dryland Farming Project", description: "Water-efficient agriculture", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$35M" },
  { id: "zbl-3", type: "hospital", name: "District Health Centres", description: "Rural healthcare network", status: "planned", coordinates: { x: 40, y: 35 }, investment: "$45M", completion: "2032" }]

},
{
  province: "Paktya",
  markers: [
  { id: "pkt-1", type: "agriculture", name: "Pine Forest Management", description: "Sustainable forestry and timber", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$40M" },
  { id: "pkt-2", type: "highway", name: "Gardez-Khost Highway", description: "Cross-border trade route", status: "under-construction", coordinates: { x: 65, y: 55 }, investment: "$180M", completion: "2030" },
  { id: "pkt-3", type: "hospital", name: "Gardez Regional Hospital", description: "Eastern healthcare hub", status: "planned", coordinates: { x: 40, y: 35 }, investment: "$85M", completion: "2033" }]

},
{
  province: "Paktika",
  markers: [
  { id: "ptk-1", type: "mining", name: "Chromite Mining", description: "Industrial mineral extraction", status: "operational", coordinates: { x: 50, y: 45 }, investment: "$65M" },
  { id: "ptk-2", type: "highway", name: "Border Highway", description: "Pakistan connectivity route", status: "under-construction", coordinates: { x: 70, y: 55 }, investment: "$150M", completion: "2031" },
  { id: "ptk-3", type: "telecom", name: "Border Zone Communications", description: "Security and trade infrastructure", status: "planned", coordinates: { x: 35, y: 35 }, investment: "$35M", completion: "2030" }]

},
{
  province: "Khost",
  markers: [
  { id: "khs-1", type: "port", name: "Khost Border Terminal", description: "Pakistan trade gateway", status: "operational", coordinates: { x: 70, y: 50 }, investment: "$95M" },
  { id: "khs-2", type: "factory", name: "Manufacturing Zone", description: "Light industry development", status: "under-construction", coordinates: { x: 50, y: 40 }, investment: "$120M", completion: "2030" },
  { id: "khs-3", type: "university", name: "Shaikh Zayed University", description: "Regional higher education centre", status: "operational", coordinates: { x: 55, y: 55 }, investment: "$65M" }]

},
{
  province: "Kunar",
  markers: [
  { id: "knr-1", type: "dam", name: "Kunar River Hydropower", description: "Mountain river energy generation", status: "under-construction", coordinates: { x: 55, y: 45 }, investment: "$320M", completion: "2032" },
  { id: "knr-2", type: "agriculture", name: "Honey Production Centre", description: "Mountain beekeeping cooperative", status: "operational", coordinates: { x: 65, y: 55 }, investment: "$15M" },
  { id: "knr-3", type: "highway", name: "Kunar Valley Road", description: "Valley connectivity upgrade", status: "under-construction", coordinates: { x: 40, y: 35 }, investment: "$95M", completion: "2029" }]

},
{
  province: "Laghman",
  markers: [
  { id: "lgh-1", type: "agriculture", name: "Citrus Farming Hub", description: "Orange and lemon cultivation", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$40M" },
  { id: "lgh-2", type: "dam", name: "Laghman Irrigation System", description: "Agricultural water management", status: "under-construction", coordinates: { x: 40, y: 55 }, investment: "$85M", completion: "2030" },
  { id: "lgh-3", type: "factory", name: "Fruit Processing Plant", description: "Juice and concentrate production", status: "planned", coordinates: { x: 65, y: 35 }, investment: "$55M", completion: "2032" }]

},
{
  province: "Nuristan",
  markers: [
  { id: "nrs-1", type: "powerplant", name: "Micro-Hydro Network", description: "Village-level power generation", status: "under-construction", coordinates: { x: 50, y: 45 }, investment: "$45M", completion: "2029" },
  { id: "nrs-2", type: "agriculture", name: "Timber Management", description: "Sustainable forestry programme", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$30M" },
  { id: "nrs-3", type: "telecom", name: "Mountain Communications", description: "Remote area connectivity", status: "planned", coordinates: { x: 40, y: 35 }, investment: "$25M", completion: "2031" }]

},
{
  province: "Kapisa",
  markers: [
  { id: "kps-1", type: "agriculture", name: "Grape Cultivation Centre", description: "Premium grape and raisin production", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$35M" },
  { id: "kps-2", type: "factory", name: "Wine Processing Facility", description: "Grape juice production", status: "planned", coordinates: { x: 65, y: 55 }, investment: "$45M", completion: "2032" },
  { id: "kps-3", type: "highway", name: "Kapisa Ring Road", description: "Provincial connectivity", status: "under-construction", coordinates: { x: 40, y: 35 }, investment: "$75M", completion: "2029" }]

},
{
  province: "Parwan",
  markers: [
  { id: "prw-1", type: "airport", name: "Bagram Airfield Conversion", description: "Commercial aviation hub development", status: "under-construction", coordinates: { x: 50, y: 35 }, investment: "$280M", completion: "2031" },
  { id: "prw-2", type: "highway", name: "Salang Highway Approach", description: "Northern corridor gateway", status: "operational", coordinates: { x: 55, y: 55 }, investment: "$120M" },
  { id: "prw-3", type: "factory", name: "Cement Production Plant", description: "Construction materials manufacturing", status: "planned", coordinates: { x: 65, y: 45 }, investment: "$180M", completion: "2033" }]

},
{
  province: "Wardak",
  markers: [
  { id: "wdk-1", type: "agriculture", name: "Apple Orchard Development", description: "Premium fruit cultivation", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$40M" },
  { id: "wdk-2", type: "highway", name: "Wardak-Kabul Highway", description: "Capital connectivity upgrade", status: "under-construction", coordinates: { x: 65, y: 35 }, investment: "$150M", completion: "2029" },
  { id: "wdk-3", type: "mining", name: "Marble Quarry", description: "Construction stone extraction", status: "operational", coordinates: { x: 40, y: 55 }, investment: "$25M" }]

},
{
  province: "Samangan",
  markers: [
  { id: "smg-1", type: "mining", name: "Coal Mining Operations", description: "Energy sector fuel production", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$75M" },
  { id: "smg-2", type: "agriculture", name: "Walnut Cultivation", description: "High-value nut production", status: "operational", coordinates: { x: 65, y: 55 }, investment: "$30M" },
  { id: "smg-3", type: "highway", name: "Northern Ring Road", description: "Regional connectivity", status: "under-construction", coordinates: { x: 40, y: 35 }, investment: "$120M", completion: "2030" }]

},
{
  province: "Sar-e-Pol",
  markers: [
  { id: "srp-1", type: "agriculture", name: "Sheep Farming Hub", description: "Livestock and wool production", status: "operational", coordinates: { x: 50, y: 45 }, investment: "$35M" },
  { id: "srp-2", type: "mining", name: "Salt Mining Operations", description: "Industrial salt extraction", status: "operational", coordinates: { x: 60, y: 55 }, investment: "$20M" },
  { id: "srp-3", type: "hospital", name: "Provincial Health Centre", description: "Healthcare infrastructure", status: "planned", coordinates: { x: 40, y: 35 }, investment: "$55M", completion: "2032" }]

},
{
  province: "Badghis",
  markers: [
  { id: "bdg-1", type: "agriculture", name: "Pistachio Forest Management", description: "Wild pistachio cultivation", status: "operational", coordinates: { x: 55, y: 45 }, investment: "$45M" },
  { id: "bdg-2", type: "powerplant", name: "Wind Energy Installation", description: "Mountain wind farm", status: "planned", coordinates: { x: 65, y: 55 }, investment: "$120M", completion: "2033" },
  { id: "bdg-3", type: "highway", name: "Qala-i-Naw Road", description: "Provincial connectivity", status: "under-construction", coordinates: { x: 40, y: 35 }, investment: "$85M", completion: "2030" }]

}];


export const ProvinceInfrastructureMap = () => {
  const [selectedProvince, setSelectedProvince] = useState(0);
  const [selectedMarker, setSelectedMarker] = useState<InfrastructureMarker | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    types: [],
    statuses: [],
    investmentRange: "all"
  });

  const currentProvince = provinceMapsData[selectedProvince];

  // Filter markers based on current filters
  const filteredMarkers = useMemo(() => {
    return currentProvince.markers.filter((marker) => {
      // Type filter
      if (filters.types.length > 0 && !filters.types.includes(marker.type)) {
        return false;
      }
      // Status filter
      if (filters.statuses.length > 0 && !filters.statuses.includes(marker.status)) {
        return false;
      }
      // Investment range filter
      if (filters.investmentRange !== "all") {
        const investment = parseInvestment(marker.investment);
        switch (filters.investmentRange) {
          case "under50":
            if (investment >= 50) return false;
            break;
          case "50to200":
            if (investment < 50 || investment >= 200) return false;
            break;
          case "200to500":
            if (investment < 200 || investment >= 500) return false;
            break;
          case "500to1000":
            if (investment < 500 || investment >= 1000) return false;
            break;
          case "over1000":
            if (investment < 1000) return false;
            break;
        }
      }
      return true;
    });
  }, [currentProvince.markers, filters]);

  // Calculate totals
  const totalProjects = provinceMapsData.reduce((acc, p) => acc + p.markers.length, 0);
  const operationalCount = provinceMapsData.reduce((acc, p) => acc + p.markers.filter((m) => m.status === 'operational').length, 0);
  const constructionCount = provinceMapsData.reduce((acc, p) => acc + p.markers.filter((m) => m.status === 'under-construction').length, 0);
  const plannedCount = provinceMapsData.reduce((acc, p) => acc + p.markers.filter((m) => m.status === 'planned').length, 0);

  const toggleTypeFilter = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      types: prev.types.includes(type) ?
      prev.types.filter((t) => t !== type) :
      [...prev.types, type]
    }));
  };

  const toggleStatusFilter = (status: string) => {
    setFilters((prev) => ({
      ...prev,
      statuses: prev.statuses.includes(status) ?
      prev.statuses.filter((s) => s !== status) :
      [...prev.statuses, status]
    }));
  };

  const resetFilters = () => {
    setFilters({
      types: [],
      statuses: [],
      investmentRange: "all"
    });
  };

  const activeFiltersCount = filters.types.length + filters.statuses.length + (filters.investmentRange !== "all" ? 1 : 0);

  return (
    <section className="py-32 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            ALL 34 PROVINCES
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Provincial Infrastructure Atlas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive visualization of roads, railways, airports, power plants, and key development projects across all 34 Afghan provinces
          </p>
        </motion.div>

        {/* Filter Panel */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all">
              
              <Filter className="w-4 h-4" />
              <span>Filter Projects</span>
              {activeFiltersCount > 0 &&
              <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {activeFiltersCount}
                </span>
              }
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {activeFiltersCount > 0 &&
            <button
              onClick={resetFilters}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-all">
              
                <X className="w-4 h-4" />
                Reset Filters
              </button>
            }
          </div>

          {showFilters &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-6 bg-card rounded-2xl border border-border space-y-6">
            
              {/* Project Type Filter */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Filter by Project Type
                </h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(projectTypeLabels).map(([type, label]) =>
                <button
                  key={type}
                  onClick={() => toggleTypeFilter(type)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filters.types.includes(type) ?
                  "bg-primary text-primary-foreground" :
                  "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`
                  }>
                  
                      {label}
                    </button>
                )}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Filter by Status</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(statusColorsSolid).map(([status, color]) =>
                <button
                  key={status}
                  onClick={() => toggleStatusFilter(status)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filters.statuses.includes(status) ?
                  "bg-primary text-primary-foreground" :
                  "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`
                  }>
                  
                      <div className={`w-2 h-2 rounded-full ${color}`} />
                      <span className="capitalize">{status.replace("-", " ")}</span>
                    </button>
                )}
                </div>
              </div>

              {/* Investment Range Filter */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">Investment Range</h4>
                <div className="flex flex-wrap gap-2">
                  {investmentRanges.map((range) =>
                <button
                  key={range.value}
                  onClick={() => setFilters((prev) => ({ ...prev, investmentRange: range.value }))}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filters.investmentRange === range.value ?
                  "bg-primary text-primary-foreground" :
                  "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`
                  }>
                  
                      {range.label}
                    </button>
                )}
                </div>
              </div>

              {/* Results Count */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="text-primary font-bold">{filteredMarkers.length}</span> of{" "}
                  <span className="text-foreground">{currentProvince.markers.length}</span> projects in {currentProvince.province}
                </p>
              </div>
            </motion.div>
          }
        </div>

        {/* Province Selector - Scrollable Grid */}
        <div className="mb-8 p-5 bg-card rounded-2xl border border-border">
          <div className="flex flex-wrap justify-center gap-3 max-h-[200px] overflow-y-auto custom-scrollbar">
            {provinceMapsData.map((province, index) =>
            <button
              key={province.province}
              onClick={() => {
                setSelectedProvince(index);
                setSelectedMarker(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedProvince === index ?
              "bg-primary text-primary-foreground" :
              "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`
              }>
              
                {province.province} ({province.markers.length})
              </button>
            )}
          </div>
        </div>

        {/* Main content: project list (left) + detail panel (right) */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project list - replaces map */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-border flex-shrink-0">
              <h3 className="text-2xl font-bold text-foreground">{currentProvince.province}</h3>
              <p className="text-muted-foreground text-sm mt-1">{filteredMarkers.length} of {currentProvince.markers.length} Projects</p>
            </div>
            <div className="overflow-y-auto custom-scrollbar flex-1 min-h-0" style={{ maxHeight: "min(70vh, 560px)" }}>
              {filteredMarkers.map((marker) => {
                const Icon = infrastructureIcons[marker.type];
                const isSelected = selectedMarker?.id === marker.id;
                return (
                  <button
                    key={marker.id}
                    type="button"
                    onClick={() => setSelectedMarker(marker)}
                    className={`w-full flex items-center gap-4 px-6 py-4 text-left border-b border-border last:border-b-0 transition-colors ${
                    isSelected ? "bg-primary/10 border-l-4 border-l-primary" : "hover:bg-muted/40 border-l-4 border-l-transparent"}`
                    }>
                    
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-muted border border-border">
                      <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground line-clamp-1">{marker.name}</p>
                      <p className="text-xs text-muted-foreground capitalize mt-0.5">{marker.type}</p>
                    </div>
                    










                    
                  </button>);

              })}
            </div>
          </div>

          {/* Details Panel */}
          <div className="space-y-4 min-h-[320px] flex flex-col">
            {selectedMarker ?
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-6 bg-card rounded-2xl border border-border flex-shrink-0">
              
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 border ${
              selectedMarker.status === "operational" ? "bg-muted text-muted-foreground border-border" :
              selectedMarker.status === "under-construction" ? "bg-amber-500/10 text-amber-600 border-amber-500/30" :
              "bg-blue-500/10 text-blue-400 border-blue-500/30"}`
              }>
                  {selectedMarker.status.replace("-", " ").toUpperCase()}
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-2">{selectedMarker.name}</h4>
                <p className="text-muted-foreground text-sm mb-6">{selectedMarker.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {selectedMarker.investment &&
                <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Investment</p>
                      <p className="text-lg font-bold text-primary">{selectedMarker.investment}</p>
                    </div>
                }
                  {selectedMarker.completion &&
                <div className="p-3 bg-muted/50 rounded-lg border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Completion</p>
                      <p className="text-lg font-bold text-foreground">{selectedMarker.completion}</p>
                    </div>
                }
                </div>
              </motion.div> :

            <div className="p-8 bg-card rounded-2xl border border-border border-dashed flex-shrink-0 flex flex-col items-center justify-center min-h-[200px]">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-base font-semibold text-foreground mb-2">Select a project</h4>
                <p className="text-muted-foreground text-sm text-center">Choose a project from the list to view details.</p>
              </div>
            }
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
          
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <p className="text-2xl font-bold text-primary">{totalProjects}+</p>
            <p className="text-xs text-muted-foreground">Total Projects</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <p className="text-2xl font-bold text-emerald-400">{operationalCount}</p>
            <p className="text-xs text-muted-foreground">Operational</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <p className="text-2xl font-bold text-amber-400">{constructionCount}</p>
            <p className="text-xs text-muted-foreground">Under Construction</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <p className="text-2xl font-bold text-blue-400">{plannedCount}</p>
            <p className="text-xs text-muted-foreground">Planned</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <p className="text-2xl font-bold text-foreground">34</p>
            <p className="text-xs text-muted-foreground">Provinces Covered</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border text-center">
            <p className="text-2xl font-bold text-foreground">$50B</p>
            <p className="text-xs text-muted-foreground">Total Investment</p>
          </div>
        </motion.div>
      </div>
    </section>);

};