/**
 * Missing mineral paths linked from nav/index but not in base or expanded DB.
 * Each entry has unique title, subtitle, overview, and sections so detail pages are unique.
 */
import type { MineralData } from './mineralDatabase';
const copperMine = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-mine.jpg';
const goldMining = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-mining.jpg';
const ironOre = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/iron-ore.jpg';
const marbleQuarry = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-quarry.jpg';
const coalMining = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-mining.jpg';
const talcMining = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-mining.jpg';
const barite = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite.jpg';
const partnership = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/partnership.jpg';
const rareEarth = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth.jpg';

const defaultStats: MineralData['stats'] = [
  { value: '$30T+', label: 'Mineral Value', description: 'Afghanistan endowment' },
  { value: '150+', label: 'Mineral Types', description: 'Strategic and critical' },
  { value: '34', label: 'Provinces', description: 'Resource-rich regions' },
  { value: '1400+', label: 'Deposits', description: 'Identified occurrences' },
];

const defaultTimeline: MineralData['timeline'] = [
  { year: '2020', event: 'Geological surveys completed' },
  { year: '2025', event: 'Investment framework established' },
  { year: '2030', event: 'Development phase begins' },
  { year: '2035', event: 'Commercial production achieved' },
];

const defaultRelated: MineralData['relatedMinerals'] = [
  { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
  { name: 'Lithium Ghazni', href: '/minerals/lithium/ghazni' },
  { name: 'Rare Earth Helmand', href: '/minerals/ree/helmand' },
];

/** Builds full detail page with 4 sections. Section 3–4 use provided content or topic-specific defaults. */
function entry(
  title: string,
  subtitle: string,
  overview: string,
  section1Title: string,
  section1Content: string,
  section2Title: string,
  section2Content: string,
  heroImage: string = copperMine,
  section3Title?: string,
  section3Content?: string,
  section4Title?: string,
  section4Content?: string
): MineralData {
  const s3Title = section3Title ?? 'Environmental and Quality Standards';
  const s3Content = section3Content ?? `Development and processing of ${title} in Afghanistan follow national and international environmental and safety standards. Tailings, emissions, and water use are managed to meet regulatory and community expectations. Quality control and product certification support domestic and export market access. Worker safety and community engagement are integral to project design and operation.`;
  const s4Title = section4Title ?? 'Markets and Investment Outlook';
  const s4Content = section4Content ?? `Regional and global demand for ${title} supports long-term market opportunity. Afghan production can supply domestic needs and export to neighbouring and international customers. Investment in extraction, processing, and value addition creates employment and revenue. Government policy encourages responsible development and value capture. Feasibility and permitting progress determine development timeline.`;
  return {
    title,
    subtitle,
    heroImage,
    overview,
    stats: defaultStats,
    sections: [
      { title: section1Title, content: section1Content, image: heroImage, alignment: 'left' },
      { title: section2Title, content: section2Content, image: partnership, alignment: 'right' },
      { title: s3Title, content: s3Content, image: heroImage, alignment: 'left' },
      { title: s4Title, content: s4Content, image: partnership, alignment: 'right' },
    ],
    timeline: defaultTimeline,
    relatedMinerals: defaultRelated,
  };
}

/** Full-length entry: 4 sections, 6 stats, 5 timeline, 5 related. Use for ultra-detailed pages. */
function fullEntry(
  title: string,
  subtitle: string,
  overview: string,
  s1: { title: string; content: string },
  s2: { title: string; content: string },
  s3: { title: string; content: string },
  s4: { title: string; content: string },
  stats: MineralData['stats'],
  timeline: MineralData['timeline'],
  related: MineralData['relatedMinerals'],
  heroImage: string = copperMine
): MineralData {
  return {
    title,
    subtitle,
    heroImage,
    overview,
    stats,
    sections: [
      { title: s1.title, content: s1.content, image: heroImage, alignment: 'left' },
      { title: s2.title, content: s2.content, image: partnership, alignment: 'right' },
      { title: s3.title, content: s3.content, image: heroImage, alignment: 'left' },
      { title: s4.title, content: s4.content, image: partnership, alignment: 'right' },
    ],
    timeline,
    relatedMinerals: related,
  };
}

export const missingMineralPaths: Record<string, MineralData> = {
  'lead-zinc/smelting': fullEntry(
    'Lead-Zinc Smelting Operations',
    'Refined Lead and Zinc Metal Production',
    `Afghanistan's lead-zinc smelting operations produce refined lead and zinc metal from concentrates sourced from the Aynak polymetallic deposit and related occurrences. Smelting facilities utilize modern blast furnace and imperial smelting process (ISP) technologies to produce LME-grade lead and special high-grade zinc for battery manufacturing, galvanizing, and industrial applications. The sector is designed for integrated development from concentrate to refined metal, capturing maximum value within Afghanistan.

The Aynak lead smelter design capacity targets 180,000 tonnes per year of refined lead from concentrate containing approximately 60% lead and significant silver credits. Blast furnace technology operates at 1,200°C, reducing lead oxide to metallic lead while capturing silver in bullion for subsequent refining. Environmental controls include SO2 capture and conversion to sulfuric acid, particulate filtration, and comprehensive slag and fume treatment. Zinc is recovered via electrolytic winning or distillation, producing special high-grade zinc (99.995% purity) for galvanizing and alloy markets.

Regional demand for refined lead and zinc is strong: lead-acid batteries for automotive and renewable energy storage, galvanizing for construction and automotive, and chemical applications. Afghan production can serve domestic needs and export to Pakistan, India, Iran, and Central Asia via existing and planned corridors. Logistics from central Afghanistan to Karachi and Chabahar support competitive delivery to global customers. Investment in smelting adds value over concentrate export and creates skilled employment in metallurgy and chemical engineering.

Quality assurance and international certification (e.g. LME brand listing for lead and zinc) are priorities for market access. Environmental and social standards align with IFC Performance Standards and national regulation. The smelting sector supports artisanal and small-scale mining formalization by providing a transparent offtake and pricing channel for concentrate.`,
    { title: 'Smelting Technology and Process Flow', content: `Blast furnace and imperial smelting processes convert lead-zinc concentrates into refined metals. The lead blast furnace treats sintered concentrate at 1,200°C; lead bullion is tapped and fire-refined to remove copper, antimony, and arsenic, then cast into anodes for electrolytic refining. Silver and other by-products (gold, bismuth, indium) are recovered in separate circuits, adding substantial value. Zinc is produced via ISP (imperial smelting) or roast-leach-electrowin; the electrolytic route produces special high-grade zinc. Environmental controls meet international standards: baghouses for particulates, acid plants for SO2, and secure disposal of residues. Process automation and quality control ensure consistent product meeting LME and customer specifications.` },
    { title: 'Markets, Applications, and Logistics', content: `Refined lead supplies battery manufacturers (automotive, industrial, renewable storage); zinc supplies galvanizing, die-casting, and brass markets. Afghan production can serve regional and global demand. Export corridors via Pakistan (Karachi) and Iran (Chabahar) provide access to sea; rail and road links to Central Asia support overland trade. Long-term offtake agreements with traders and consumers reduce market risk. Domestic consumption for batteries and construction is growing. Value addition through smelting improves balance of trade and creates skilled jobs in metallurgy and chemistry.` },
    { title: 'Environmental and Social Performance', content: `Smelting operations are designed to meet IFC Performance Standards and national emission limits. SO2 is captured and converted to sulfuric acid for fertilizer and leaching; particulate emissions are controlled via baghouses and scrubbers. Slag and residues are stabilized and stored or sold for construction use where appropriate. Water is recycled to the extent possible; discharge meets regulatory criteria. Community engagement and local employment are integral to project planning. Health and safety programs protect workers and neighbours. Formalization of artisanal concentrate supply improves traceability and environmental outcomes upstream.` },
    { title: 'Investment and Development Roadmap', content: `Lead-zinc smelting is a priority for value addition in Afghanistan's mining sector. Feasibility and front-end engineering support capacity and technology selection. Financing and partnership with experienced smelting operators and offtakers strengthen bankability. Timeline from financing to first metal typically spans 4–5 years including construction and commissioning. Integration with Aynak and other concentrate sources ensures secure feed. Downstream opportunities include battery assembly and galvanizing plants, further capturing value and employment.` },
    [
      { value: '180K', label: 't/yr Lead', description: 'Design capacity' },
      { value: '99.97%', label: 'Lead Purity', description: 'Refined quality' },
      { value: 'SHG', label: 'Zinc Grade', description: 'Special high-grade' },
      { value: 'LME', label: 'Listed', description: 'Target certification' },
      { value: '4–5', label: 'Years', description: 'Build to production' },
      { value: 'Value', label: 'Addition', description: 'Over concentrate' },
    ],
    [
      { year: '2010', event: 'Aynak resource and metallurgy confirmed' },
      { year: '2020', event: 'Smelter feasibility and permitting advanced' },
      { year: '2025', event: 'Construction and commissioning target' },
      { year: '2028', event: 'First refined lead and zinc production' },
      { year: '2030', event: 'Full capacity and LME listing target' },
    ],
    [
      { name: 'Lead-Zinc Aynak', href: '/minerals/lead-zinc/aynak' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
    ],
    copperMine
  ),
  'lead-zinc/battery-materials': fullEntry(
    'Lead-Zinc Battery Materials',
    'Materials for Energy Storage and Industrial Batteries',
    `Lead and zinc from Afghan deposits supply battery manufacturing for automotive, industrial, and renewable energy storage applications. Lead-acid batteries remain essential for vehicles, backup power, and grid stabilization; zinc supports zinc-air and other advanced battery chemistries under development. Local value addition through battery-component production is a stated development priority for the Ministry of Mines and Petroleum.

Afghan lead from Aynak and related smelting can supply regional battery plants with refined metal meeting international purity standards. Lead-acid battery demand is stable and growing in South Asia and the Middle East for vehicles, telecom towers, and solar hybrid systems. Zinc is used in zinc-air batteries for grid and niche applications and in research on next-generation chemistries. Feasibility studies have considered battery-component or assembly facilities near smelting sites to capture more value and create skilled jobs.

Supply chain transparency and responsible sourcing are increasingly important for battery and automotive customers. Afghan production with clear chain of custody and compliance with OECD and national regulations supports access to premium markets. Partnerships with battery manufacturers and recyclers can secure offtake and support circular economy initiatives.`,
    { title: 'Battery Applications and Demand', content: `Lead-acid batteries use refined lead for electrodes and sulfuric acid as electrolyte; they dominate automotive starting and industrial backup markets. Afghan lead can supply regional battery plants in Pakistan, India, and Iran. Zinc is used in zinc-air and other chemistries; demand for zinc in energy storage is emerging. Renewable energy and electrification drive growth in both lead-acid (backup, recycling) and advanced battery segments. Local assembly or component production would add jobs and reduce import dependence.` },
    { title: 'Value Addition and Industrial Policy', content: `Plans include feasibility for battery-component or assembly facilities near smelting sites. Value addition captures more revenue per tonne of metal and creates skilled employment. Incentives for downstream investment may include tax holidays, land, and utilities. Integration with smelting ensures secure feed and quality. Recycling of lead-acid batteries is well established globally; Afghanistan could develop collection and recycling to close the loop.` },
    { title: 'Quality, Certification, and Traceability', content: `Battery manufacturers require consistent lead and zinc quality and documentation of origin. Chain-of-custody and due diligence support responsible sourcing and access to OECD and other regulated markets. Certification (e.g. LBMA for gold; equivalent standards for lead/zinc where applicable) and ESG reporting strengthen market position. Afghan producers can align with international norms to access premium offtake.` },
    { title: 'Research and Future Chemistries', content: `Zinc-based and other next-generation batteries are in R&D; Afghan zinc could supply pilot and future commercial production. Partnerships with universities and battery developers support innovation and long-term demand. Government and donor support for R&D and pilot plants can position Afghanistan in the evolving energy storage value chain.` },
    [
      { value: 'Lead-Acid', label: 'Primary Use', description: 'Vehicles and backup' },
      { value: 'Zinc-Air', label: 'Emerging', description: 'Grid and niche' },
      { value: 'Regional', label: 'Demand', description: 'South Asia, Gulf' },
      { value: 'Value', label: 'Addition', description: 'Component/assembly' },
      { value: 'Traceability', label: 'Sourcing', description: 'Responsible supply' },
      { value: 'Recycling', label: 'Loop', description: 'Lead-acid cycle' },
    ],
    [
      { year: '2020', event: 'Smelter and battery linkage studied' },
      { year: '2025', event: 'Refined lead and zinc production target' },
      { year: '2027', event: 'Battery component feasibility complete' },
      { year: '2030', event: 'Local value addition and offtake agreements' },
    ],
    [
      { name: 'Lead-Zinc Smelting', href: '/minerals/lead-zinc/smelting' },
      { name: 'Lead-Zinc Aynak', href: '/minerals/lead-zinc/aynak' },
      { name: 'Lithium Ghazni', href: '/minerals/lithium/ghazni' },
      { name: 'Graphite Battery', href: '/minerals/graphite/battery' },
      { name: 'Investment Opportunities', href: '/investment/opportunities' },
    ],
    copperMine
  ),
  'iron/bamyan': fullEntry(
    'Bamyan Province Iron Ore',
    'Hajigak and Regional Iron Deposits',
    `Bamyan Province hosts the Hajigak iron ore complex—one of Asia's largest undeveloped iron deposits—with over 2.2 billion tonnes of high-grade magnetite in defined resources. The province's mineral wealth supports plans for integrated steel production and regional development under Afghanistan's Vision 2026–2040. Bamyan's elevation (2,500–3,500 m) and terrain require robust infrastructure planning for rail, power, and water.

Hajigak's magnetite averages over 62% Fe with low deleterious elements, suitable for direct reduction (DRI), pelletization, and blast furnace feed. Soviet-era surveys and modern reassessments have delineated multiple zones; full development would position Afghanistan as a significant regional steel supplier. Associated copper, gold, and REE credits add value and support polymetallic processing strategies.

Regional demand for steel is strong in Pakistan, India, Iran, and Central Asia. Infrastructure and construction growth drive long-term consumption. Development of Hajigak would create tens of thousands of jobs, upgrade transport and power infrastructure, and support downstream industry. Environmental and social impact assessments and community engagement are integral to project planning.`,
    { title: 'Hajigak Deposit Geology and Resources', content: `Hajigak contains high-grade magnetite (60%+ Fe) in banded iron formation and related settings. Soviet and modern surveys have defined resources across several blocks; total tonnage and grade support a multi-decade mining operation. Ore is suitable for pelletization and direct reduction; concentrate quality meets international specifications. Associated copper, gold, and rare earth elements occur in discrete zones and may be recovered in integrated processing. Geotechnical and hydrological studies support mine and infrastructure design.` },
    { title: 'Mining, Processing, and Steel Integration', content: `Mining would be open-pit with conventional crushing, grinding, and magnetic separation to produce concentrate. Pellet plant and optionally DRI or blast furnace steelmaking would add value. Power and water are key inputs; feasibility studies address sourcing and sustainability. Rail connection to regional networks (e.g. Pakistan, Uzbekistan) is critical for concentrate and steel export. Employment and local content targets would be set in line with national policy.` },
    { title: 'Regional Development and Infrastructure', content: `Mining and steel development in Bamyan would create direct and indirect employment, upgrade transport and power infrastructure, and support downstream industry. Roads, rail, and power would benefit the province and neighbouring regions. Community development and environmental management would follow international standards. Skills development and local procurement would maximize in-country benefit.` },
    { title: 'Investment and Timeline', content: `Hajigak has been the subject of international tender and partnership discussions. Full development requires significant capital for mine, concentrator, pellet plant, and infrastructure. Phased development (e.g. concentrate export first, then pellet and steel) can manage risk and cash flow. Government and multilateral support may be available for feasibility and infrastructure. Timeline to first production is typically 5–8 years from financial close.` },
    [
      { value: '2.2B', label: 'Tonnes', description: 'Resource scale' },
      { value: '62%+', label: 'Fe', description: 'Magnetite grade' },
      { value: 'DRI/Pellet', label: 'Use', description: 'Steel feed' },
      { value: 'Bamyan', label: 'Province', description: 'Location' },
      { value: 'Regional', label: 'Steel', description: 'Market potential' },
      { value: '5–8', label: 'Years', description: 'Build to production' },
    ],
    [
      { year: '1960s', event: 'Soviet discovery and initial surveys' },
      { year: '2011', event: 'International tender for Hajigak' },
      { year: '2020', event: 'Resource and feasibility updates' },
      { year: '2025', event: 'Partnership and financing target' },
      { year: '2030', event: 'First concentrate or pellet production target' },
    ],
    [
      { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Coal Metallurgical', href: '/minerals/coal/metallurgical' },
      { name: 'Bamyan Province', href: '/provinces/bamyan' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    ironOre
  ),
  'gold/processing': fullEntry(
    'Gold Processing and Refining',
    'LBMA-Grade Gold Production',
    `Afghanistan's gold processing facilities refine doré and concentrate into gold meeting LBMA (London Bullion Market Association) good-delivery standards. Processing includes cyanide leaching (CIP/CIL), electrowinning, and refining to 99.99% purity. Facilities serve both artisanal and formal mining and support formalization and value capture within the country.

Centralized processing supports traceability, quality control, and premium markets. Refined gold can be sold through accredited channels domestically and for export with proper documentation. Environmental and safety controls align with international best practice (e.g. International Cyanide Management Code, IFC guidance). Health and safety for workers and communities are priorities.

Formalization of artisanal gold production is a government objective; centralized processing provides a transparent offtake and pricing mechanism and reduces use of mercury and other harmful practices. Investment in processing capacity and LBMA accreditation strengthens Afghanistan's position in regional and global gold markets.`,
    { title: 'Processing Technology and Flowsheet', content: `CIP/CIL plants recover gold from ore and concentrate using cyanide leaching, carbon adsorption, and electrowinning. Refineries produce bars meeting LBMA and customer specifications (typically 99.99% purity). Smelting of doré and treatment of concentrates are integrated where appropriate. Environmental controls include cyanide destruction, tailings management, and water treatment. Automation and assay ensure consistent product quality. Safety protocols address cyanide, heavy metals, and process hazards.` },
    { title: 'Formalization, Traceability, and Markets', content: `Centralized processing supports artisanal mining formalization by providing a legal offtake and transparent pricing. Traceability from mine to bar supports responsible sourcing and access to OECD and other regulated markets. Refined gold can be sold to central banks, refiners, and jewellery manufacturers. Documentation and chain-of-custody are essential for export and premium pricing.` },
    { title: 'Environmental and Social Standards', content: `Gold processing must meet national and international standards for cyanide, tailings, and emissions. International Cyanide Management Code and IFC Performance Standards provide guidance. Community and worker health and safety are integral to project design and operation. Formalization reduces mercury use and environmental damage from artisanal sector.` },
    { title: 'Capacity and Investment', content: `Existing and planned processing capacity is sized to treat doré and concentrate from Badakhshan, Takhar, and other provinces. Expansion and new refineries may be developed in partnership with international refiners. LBMA accreditation requires consistent quality, assay, and chain-of-custody. Investment in processing adds value and employment and supports national gold strategy.` },
    [
      { value: '99.99%', label: 'Purity', description: 'Refined gold' },
      { value: 'LBMA', label: 'Target', description: 'Good delivery' },
      { value: 'CIP/CIL', label: 'Process', description: 'Leach recovery' },
      { value: 'Formalization', label: 'Role', description: 'Artisanal offtake' },
      { value: 'Traceability', label: 'Sourcing', description: 'Responsible supply' },
      { value: 'Code', label: 'Cyanide', description: 'ICMC alignment' },
    ],
    [
      { year: '2010', event: 'Gold resource and formalization initiatives' },
      { year: '2020', event: 'Processing and refining capacity expanded' },
      { year: '2025', event: 'LBMA accreditation and full traceability target' },
      { year: '2030', event: 'Integrated formalization and export growth' },
    ],
    [
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Gold Exports', href: '/minerals/gold/exports' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    goldMining
  ),
  'gold/exports': fullEntry(
    'Gold Export Operations',
    'International Gold Trade and Certification',
    `Afghan gold export operations ensure refined gold reaches international markets with proper certification and compliance. Exports follow LBMA and national regulations; documentation supports transparency and anti–money laundering (AML) requirements. Chain-of-custody and due diligence are essential for access to premium markets and responsible sourcing.

Refined gold is exported through approved channels with assay and origin documentation. Partnerships with international refiners and traders enable market access and competitive pricing. Export procedures include customs, central bank (where applicable), and compliance checks. Afghanistan's gold strategy aims to increase formal production and export while reducing illicit flows and supporting artisanal formalization.

Regional and global demand for gold remains strong for reserve assets, jewellery, and industry. Afghan gold with clear provenance can access OECD and other regulated markets. Continued investment in refining capacity and accreditation supports export growth and value capture.`,
    { title: 'Export Channels and Documentation', content: `Refined gold is exported through approved channels with assay certificates, origin documentation, and chain-of-custody records. Customs and central bank procedures must be followed. Partnerships with LBMA-accredited refiners and international traders facilitate market access. Documentation must support AML and responsible sourcing requirements in buyer jurisdictions.` },
    { title: 'Compliance, Traceability, and AML', content: `Export procedures include due diligence on origin, chain-of-custody, and compliance with national and international AML regulations. Traceability from mine to bar is increasingly required by buyers and regulators. Afghanistan's export framework is aligned with international norms to support legitimate trade and prevent illicit flows.` },
    { title: 'Markets and Offtake', content: `Gold is sold to central banks, refiners, jewellery manufacturers, and investors. Premiums for responsibly sourced and fully documented gold are emerging. Regional demand in the Gulf and South Asia complements global markets. Long-term offtake agreements can stabilize revenue and support financing.` },
    { title: 'Policy and Capacity', content: `Government policy supports formal export and value addition. Investment in refining and accreditation strengthens export capacity. Coordination between mines, processors, and exporters ensures consistent quality and documentation. Export revenue contributes to balance of payments and government revenue.` },
    [
      { value: 'LBMA', label: 'Standard', description: 'Good delivery' },
      { value: 'Documentation', label: 'Full', description: 'Assay and origin' },
      { value: 'AML', label: 'Compliance', description: 'Due diligence' },
      { value: 'Traceability', label: 'Chain', description: 'Mine to bar' },
      { value: 'Regional', label: 'Markets', description: 'Gulf, South Asia' },
      { value: 'Formal', label: 'Export', description: 'Policy priority' },
    ],
    [
      { year: '2020', event: 'Export and compliance framework updated' },
      { year: '2025', event: 'Refining capacity and accreditation target' },
      { year: '2027', event: 'Full traceability and premium offtake' },
      { year: '2030', event: 'Export growth and formalization integration' },
    ],
    [
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Investment Process', href: '/investment/process' },
      { name: 'Contact International', href: '/contact/international' },
    ],
    goldMining
  ),
  'gold/placer': fullEntry(
    'Placer Gold Deposits',
    'Alluvial and Eluvial Gold Resources',
    `Afghanistan's placer gold deposits occur in river systems and weathered horizons in Badakhshan, Takhar, and other provinces. Artisanal placer mining has a long history; systematic assessment and mechanized recovery could increase production and revenue while improving environmental and social outcomes. Placer gold derives from erosion of primary lode deposits; major river systems and terraces host recoverable gold with grades and volumes varying by area.

Formalization programs aim to improve recovery, safety, and environmental management while ensuring benefits to local communities. Mechanized dredging and plant-based recovery can increase yield and reduce mercury use. Land use planning and licensing support legal production and revenue sharing. Integration with centralized processing and refining ensures traceability and value capture.`,
    { title: 'Placer Geology and Distribution', content: `Placer gold derives from erosion of primary lode deposits in the Hindu Kush and related ranges. Major river systems (e.g. Kokcha, Panj, tributaries) and terraces host alluvial and eluvial gold. Grades and volumes vary by area; Soviet and modern surveys have identified prospective zones. Seasonal water availability affects artisanal and mechanical recovery. Resource estimates are less certain than for lode deposits but support development planning.` },
    { title: 'Artisanal and Mechanized Mining', content: `Artisanal placer mining has a long history and provides livelihoods. Formalization aims to improve safety, reduce mercury use, and increase recovery. Mechanized dredging and gravity plants can process larger volumes and finer gold. Licensing and land use planning support legal operations and revenue collection. Community engagement and benefit sharing are integral to formalization.` },
    { title: 'Environmental and Social Management', content: `Placer mining can affect river morphology, water quality, and land use. Best practices include controlled excavation, sediment management, and rehabilitation. Mercury reduction and elimination are priorities. Formalization programs include training, equipment, and access to centralized processing. Benefits to local communities and government revenue support sustainable development.` },
    { title: 'Integration with Processing and Markets', content: `Placer production feeds centralized processing and refining, ensuring traceability and LBMA-compliant export. Transparent pricing and timely payment support formalization. Downstream integration with refineries and exporters captures value and supports responsible sourcing.` },
    [
      { value: 'Alluvial', label: 'Type', description: 'River and terrace' },
      { value: 'Badakhshan', label: 'Provinces', description: 'Takhar, others' },
      { value: 'Formalization', label: 'Focus', description: 'Safety and yield' },
      { value: 'Mechanized', label: 'Option', description: 'Dredging, plants' },
      { value: 'Mercury', label: 'Reduce', description: 'Elimination target' },
      { value: 'Central', label: 'Processing', description: 'Traceability' },
    ],
    [
      { year: 'Historical', event: 'Artisanal placer mining tradition' },
      { year: '2010', event: 'Resource and formalization studies' },
      { year: '2025', event: 'Mechanized pilot and formalization scale-up' },
      { year: '2030', event: 'Integrated placer and lode production' },
    ],
    [
      { name: 'Gold Lode', href: '/minerals/gold/lode' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Badakhshan Province', href: '/provinces/badakhshan' },
      { name: 'Gold Artisanal', href: '/minerals/gold/artisanal' },
    ],
    goldMining
  ),
  'gold/lode': fullEntry(
    'Lode Gold Deposits',
    'Hard-Rock Gold Resources and Mining',
    `Lode (primary) gold deposits in Afghanistan occur in quartz veins, shear zones, and other hard-rock settings. Badakhshan, Takhar, and other provinces host identified resources. Development requires underground or open-pit mining and processing (crushing, grinding, cyanidation or other methods). Soviet and modern surveys have identified numerous prospects and resources with varying grade and scale.

Lode gold is associated with metamorphic and intrusive rocks in the Hindu Kush and related terranes. Extraction and processing use conventional milling and cyanidation or alternative methods; development is aligned with environmental and social standards. Feasibility and permitting support investment decisions. Integration with centralized refining ensures product quality and traceability.`,
    { title: 'Geology and Resources', content: `Lode gold is associated with metamorphic and intrusive rocks; mineralization styles include quartz veins, shear zones, and disseminated deposits. Soviet and modern surveys have identified prospects and resources in Badakhshan, Takhar, and elsewhere. Grade and tonnage vary; some deposits support large-scale mining, others smaller operations. Geotechnical and hydrological studies support mine design.` },
    { title: 'Mining and Processing', content: `Extraction may be open-pit or underground depending on geometry and depth. Processing typically includes crushing, grinding, and cyanide leaching (CIP/CIL) or gravity and flotation. Concentrate or doré is shipped to centralized refineries. Environmental controls address tailings, water, and emissions. Safety and community engagement are integral to operations.` },
    { title: 'Development and Investment', content: `Development timeline from discovery to production typically spans 5–10 years. Feasibility, permitting, and financing are key milestones. Government and community support facilitate access and licensing. Value capture through domestic processing and refining is a policy priority.` },
    { title: 'Integration with Placer and Refining', content: `Lode and placer production can feed the same processing and refining chain, supporting consistent quality and traceability. Regional deposits may be developed in sequence or in parallel. Coordination with gold strategy and formalization programs maximizes economic and social benefit.` },
    [
      { value: 'Hard Rock', label: 'Type', description: 'Vein and shear' },
      { value: 'Badakhshan', label: 'Provinces', description: 'Takhar, others' },
      { value: 'CIP/CIL', label: 'Process', description: 'Cyanidation' },
      { value: '5–10', label: 'Years', description: 'Discovery to production' },
      { value: 'Refining', label: 'Central', description: 'Traceability' },
      { value: 'Resource', label: 'Defined', description: 'Soviet and modern' },
    ],
    [
      { year: '1960s', event: 'Soviet lode gold surveys' },
      { year: '2010', event: 'Modern resource and feasibility work' },
      { year: '2025', event: 'Advanced projects and permitting' },
      { year: '2030', event: 'Production and refining integration' },
    ],
    [
      { name: 'Gold Placer', href: '/minerals/gold/placer' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Takhar Province', href: '/provinces/takhar' },
    ],
    goldMining
  ),
  'ree/concentrate': fullEntry(
    'Rare Earth Concentrate Processing',
    'REE Concentrate Production and Upgrading',
    `Rare earth concentrate processing in Afghanistan upgrades run-of-mine material to saleable concentrate grades. Helmand and other REE projects plan concentrator facilities to produce mixed or partially separated REE concentrates for export or further separation. Gravity, magnetic, and flotation circuits are used to upgrade REE-bearing minerals; product quality must meet specifications for international separation plants or direct sale. Concentrates can be sold to global separation facilities or feed future local separation plants as part of value-addition strategy. Demand for REE concentrates is driven by permanent magnets, catalysts, and phosphors in clean energy and technology.`,
    { title: 'Concentrate Technology', content: `Gravity, magnetic, and flotation circuits produce REE concentrates from carbonatite and other ores. Quality meets specifications for international separation plants or direct sale. Process design depends on mineralogy (e.g. bastnäsite, monazite). Recovery and grade targets are set by offtake agreements. Environmental management addresses tailings and process water.` },
    { title: 'Markets and Downstream', content: `Concentrates can be sold to global separation facilities in China, Europe, and elsewhere or feed future local separation plants. Value-addition strategy may include phased development: concentrate export first, then separation. Long-term offtake and partnerships support project finance.` },
    { title: 'Helmand and Regional Projects', content: `Helmand REE deposits are the primary focus; other provinces have REE potential. Concentrator design and capacity align with resource and market. Infrastructure for power and water affects site selection. Integration with separation and end-use partners strengthens viability.` },
    { title: 'Environmental and Standards', content: `REE processing must manage thorium, uranium, and process chemicals. Tailings and radiation are regulated. International standards (e.g. IAEA, national) apply. Community and worker safety are integral to design and operation.` },
    [
      { value: 'Helmand', label: 'Primary', description: 'REE focus' },
      { value: 'Gravity, Mag', label: 'Concentration', description: 'Flotation' },
      { value: 'Concentrate', label: 'Product', description: 'Export or separation' },
      { value: 'Global', label: 'Markets', description: 'Separation plants' },
      { value: 'Value Add', label: 'Strategy', description: 'Phased separation' },
      { value: 'Magnets', label: 'Demand', description: 'Clean energy' },
    ],
    [
      { year: '2010', event: 'Helmand REE resource identification' },
      { year: '2015', event: 'Concentrator feasibility' },
      { year: '2025', event: 'Concentrator development target' },
      { year: '2028', event: 'Concentrate production and export' },
      { year: '2030', event: 'Optional local separation phase' },
    ],
    [{ name: 'REE Helmand', href: '/minerals/ree/helmand' }, { name: 'REE Separation', href: '/minerals/ree/separation' }, { name: 'REE Technology', href: '/minerals/ree/technology' }, { name: 'Lithium Ghazni', href: '/minerals/lithium/ghazni' }, { name: 'Operations Processing', href: '/operations/processing' }],
    rareEarth
  ),
  'ree/dysprosium': fullEntry(
    'Dysprosium and Heavy Rare Earths',
    'Critical Heavy REE for Magnets and Technology',
    `Dysprosium and other heavy rare earth elements (e.g. terbium) from Afghan REE deposits are critical for high-performance permanent magnets in EVs and wind turbines. Afghan REE resources include meaningful heavy REE content, supporting strategic supply and value. Heavy REEs improve magnet performance at high temperatures; demand is driven by green energy and electrification. Afghanistan can contribute to diversified global supply. Separation of heavy REEs from concentrate adds value; partnerships with separation and magnet producers support market access.`,
    { title: 'Heavy REE Role and Demand', content: `Heavy REEs (dysprosium, terbium) improve magnet performance at high temperatures and reduce demagnetization. Demand is driven by EVs and wind turbines. Global supply is concentrated; diversification is a strategic priority. Afghan REE can contribute to resilient supply chains.` },
    { title: 'Separation and Value', content: `Separation of heavy REEs from concentrate uses solvent extraction and related hydrometallurgy. Capital and operating costs are significant. Partnerships with separation and magnet producers support market access and technology. Local separation would capture more value.` },
    { title: 'Resource and Mineralogy', content: `Helmand and other Afghan REE deposits contain meaningful heavy REE content. Mineralogy and grade affect recovery and economics. Resource estimates and process development support feasibility. Downstream integration with magnet or oxide consumers adds value.` },
    { title: 'Policy and Investment', content: `Heavy REE is a strategic priority for many consuming countries. Investment in separation and value chain may attract government and strategic partners. Environmental and social standards apply. Timeline from resource to product spans several years.` },
    [
      { value: 'Dysprosium', label: 'Heavy REE', description: 'Terbium' },
      { value: 'Magnets', label: 'Use', description: 'EV, wind' },
      { value: 'High Temp', label: 'Property', description: 'Magnet performance' },
      { value: 'Separation', label: 'Value', description: 'SX, hydromet' },
      { value: 'Strategic', label: 'Priority', description: 'Supply chain' },
      { value: 'Helmand', label: 'Resource', description: 'Heavy REE content' },
    ],
    [
      { year: '2010', event: 'Heavy REE in Helmand resource' },
      { year: '2020', event: 'Separation and magnet demand growth' },
      { year: '2025', event: 'Heavy REE separation target' },
      { year: '2028', event: 'Dysprosium/terbium production potential' },
      { year: '2030', event: 'Supply to magnet producers if developed' },
    ],
    [{ name: 'REE Concentrate', href: '/minerals/ree/concentrate' }, { name: 'REE Separation', href: '/minerals/ree/separation' }, { name: 'REE Helmand', href: '/minerals/ree/helmand' }, { name: 'Graphite Battery', href: '/minerals/graphite/battery' }, { name: 'Lithium Ghazni', href: '/minerals/lithium/ghazni' }],
    rareEarth
  ),
  'ree/separation': fullEntry(
    'Rare Earth Separation Technology',
    'REE Oxide and Metal Separation',
    `Rare earth separation in Afghanistan would transform concentrate into separated REE oxides or metals using solvent extraction and other hydrometallurgical processes. Separation is capital- and skill-intensive; plans consider phased development and international partnerships. Solvent extraction and precipitation separate individual REEs to meet specifications for magnets, phosphors, and other applications. Local separation would capture more value and support supply chain resilience for critical technology metals.`,
    { title: 'Separation Processes', content: `Solvent extraction and precipitation separate individual REEs to meet specifications for magnets, phosphors, and other applications. Process design depends on feed composition and product mix. Capacity and recovery affect economics. Environmental management addresses chemicals and waste.` },
    { title: 'Strategic Value', content: `Local separation captures more value than concentrate export and supports supply chain resilience. Partnerships with technology and magnet producers strengthen market access. Government and strategic investors may support capital-intensive separation.` },
    { title: 'Phased Development', content: `Phased development may start with partial separation or specific REEs (e.g. neodymium, dysprosium). Scale and product mix evolve with market and feed. Integration with concentrator and downstream users optimizes value chain.` },
    { title: 'Standards and Certification', content: `Separated REE oxides and metals must meet customer and industry specifications. Quality control and certification support premium pricing. Environmental and social performance align with international standards.` },
    [
      { value: 'SX', label: 'Process', description: 'Solvent extraction' },
      { value: 'Oxides', label: 'Product', description: 'Metals' },
      { value: 'Phased', label: 'Development', description: 'Partial separation' },
      { value: 'Value', label: 'Capture', description: 'vs concentrate export' },
      { value: 'Partnerships', label: 'Support', description: 'Technology, magnet' },
      { value: 'Capital', label: 'Intensive', description: 'Skill-intensive' },
    ],
    [
      { year: '2010', event: 'REE separation technology assessment' },
      { year: '2020', event: 'Phased separation planning' },
      { year: '2025', event: 'Separation facility target' },
      { year: '2028', event: 'Separated REE production potential' },
      { year: '2030', event: 'Oxide and metal supply if developed' },
    ],
    [{ name: 'REE Concentrate', href: '/minerals/ree/concentrate' }, { name: 'REE Dysprosium', href: '/minerals/ree/dysprosium' }, { name: 'REE Neodymium', href: '/minerals/ree/neodymium' }, { name: 'REE Helmand', href: '/minerals/ree/helmand' }, { name: 'Operations Research', href: '/operations/research' }],
    rareEarth
  ),
  'silver/deposits': fullEntry(
    'Silver Deposits',
    'Primary and By-Product Silver Resources',
    `Afghanistan's silver occurs in lead-zinc deposits (notably the Aynak polymetallic deposit in Logar), gold-silver veins in Badakhshan and Takhar, and other base and precious metal settings. Silver is produced as by-product from lead-zinc smelting and from dedicated silver-gold operations. Soviet and modern surveys have identified significant silver credits in Aynak and related deposits; development of lead-zinc and gold projects will increase silver output.

Primary silver occurs in epithermal and mesothermal veins; by-product silver is recovered from galena and other sulfides in volcanogenic massive sulfide (VMS) and sediment-hosted deposits. Aynak-style deposits typically carry 50–500 grams per tonne silver in lead concentrates, adding substantial revenue. Dedicated silver-gold operations in the northeast target higher-grade vein material.

Resources support increased production with development of Aynak smelting and regional gold processing. Silver recovery from lead bullion and doré is well established; certification (e.g. LBMA for gold-silver) supports export. Demand for silver in industry, jewelry, and investment remains strong globally; Afghan production can supply regional refineries and industrial consumers.

Environmental and social standards for silver extraction align with those for lead-zinc and gold. Traceability and responsible sourcing are increasingly important for industrial and jewelry offtake. Investment in refining and certification will capture value and support formalization of artisanal silver-gold production.`,
    { title: 'Silver Geology and Distribution', content: `Silver is associated with base metal sulfides (galena, sphalerite, chalcopyrite) and precious metal veins. In Afghanistan, major occurrences are in the Aynak lead-zinc deposit (Logar), gold-silver veins in Badakhshan and Takhar, and other VMS and sediment-hosted settings. By-product recovery from lead-zinc and gold operations is significant; Aynak concentrate carries meaningful silver credits. Mineralogy and metallurgy are well understood; recovery into lead bullion and subsequent refining are standard.` },
    { title: 'Production, Refining, and Markets', content: `Silver is produced as refined metal from lead bullion (Parkes process), doré (electrolytic refining), and concentrates (custom smelting). Afghan production can supply domestic jewelry and industry and export to regional refineries. Demand comes from industry (electronics, solar, catalysis), jewelry, and investment. Certification and chain-of-custody support premium markets and responsible sourcing.` },
    { title: 'Environmental and Quality Standards', content: `Silver extraction and refining follow the same environmental and safety standards as lead-zinc and gold operations. Cyanide management, tailings, and emissions are regulated. Product quality and certification (e.g. good delivery standards) support market access. Worker and community health are integral to project design.` },
    { title: 'Investment and Development Roadmap', content: `Silver production will grow with Aynak lead-zinc smelting and gold processing expansion. Dedicated silver-gold projects in the northeast could add primary supply. Investment in refining and certification captures value. Timeline aligns with lead-zinc and gold project development; offtake agreements with refiners and industrial consumers support bankability.` },
    [
      { value: 'By-Product', label: 'Primary Source', description: 'Lead-zinc and gold' },
      { value: 'Aynak', label: 'Key Deposit', description: 'Logar polymetallic' },
      { value: '50–500', label: 'g/t Ag', description: 'In lead concentrates' },
      { value: 'Refining', label: 'Value', description: 'Bullion and doré' },
      { value: 'Regional', label: 'Markets', description: 'Industry and jewelry' },
      { value: 'Traceability', label: 'Sourcing', description: 'Responsible supply' },
    ],
    [
      { year: '1960s', event: 'Soviet surveys identify Aynak silver credits' },
      { year: '2010', event: 'Resource and metallurgy confirmed' },
      { year: '2025', event: 'Lead-zinc smelting and silver recovery target' },
      { year: '2028', event: 'Refined silver production and certification' },
      { year: '2030', event: 'Integrated silver-gold refining and export' },
    ],
    [
      { name: 'Lead-Zinc Aynak', href: '/minerals/lead-zinc/aynak' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
    ],
    goldMining
  ),
  'silver/refining': fullEntry(
    'Silver Refining',
    'Refined Silver Production and Standards',
    `Silver refining in Afghanistan produces refined silver meeting international standards from lead bullion (Parkes process), doré from gold-silver operations, and concentrates. Refining recovers silver from Aynak and other lead-zinc operations and from gold-silver operations in Badakhshan and Takhar. Electrolytic and chemical refining produce high-purity silver (99.99%+) for industrial, jewelry, and investment markets.

Integration with lead-zinc smelting ensures that silver in lead bullion is concentrated and then refined in dedicated circuits. By-product streams from lead and gold refining are combined where economic. Certification (e.g. good delivery, responsible sourcing) supports premium pricing and export to refiners and fabricators.

Refined silver is sold to industrial consumers (electronics, solar, catalysis), jewelry manufacturers, and investment markets. Regional demand in South Asia and the Gulf is strong; Afghan production with clear provenance can access OECD and other regulated markets. Environmental and safety standards for refining align with IFC and national requirements.`,
    { title: 'Refining Process and Technology', content: `Electrolytic and chemical refining produce high-purity silver from lead bullion, doré, and concentrates. Parkes process concentrates silver from lead bullion; subsequent refining removes base metals and produces 99.99%+ silver. By-product streams from lead and gold refining are integrated; capacity is sized to treat Aynak and regional production. Quality control and assay ensure product meets customer specifications.` },
    { title: 'Markets and Certification', content: `Refined silver is sold to industrial, jewelry, and investment markets with appropriate certification. Good delivery and responsible sourcing standards support premium pricing. Regional offtake agreements with refiners and fabricators reduce market risk. Documentation and chain-of-custody support export and regulatory compliance.` },
    { title: 'Environmental and Safety Standards', content: `Silver refining uses acids and other chemicals; environmental controls address emissions, effluent, and waste. Worker safety (e.g. exposure to lead, acids) is managed through engineering and administrative controls. Compliance with national and international standards is verified through audit and monitoring.` },
    { title: 'Capacity and Investment', content: `Refining capacity is planned alongside lead-zinc smelting and gold processing. Phased expansion can match growth in concentrate and doré supply. Investment in certification and quality systems supports market access. Partnerships with international refiners can provide technology and offtake.` },
    [
      { value: '99.99%+', label: 'Purity', description: 'Refined silver' },
      { value: 'Parkes', label: 'Process', description: 'From lead bullion' },
      { value: 'Doré', label: 'Feed', description: 'Gold-silver' },
      { value: 'Industrial', label: 'Markets', description: 'Electronics, solar' },
      { value: 'Certification', label: 'Standard', description: 'Good delivery' },
      { value: 'Regional', label: 'Offtake', description: 'South Asia, Gulf' },
    ],
    [
      { year: '2020', event: 'Refining feasibility with lead-zinc smelter' },
      { year: '2025', event: 'Smelter and silver circuit commissioning' },
      { year: '2027', event: 'Certification and export channels' },
      { year: '2030', event: 'Full capacity and diversified offtake' },
    ],
    [
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Lead-Zinc Smelting', href: '/minerals/lead-zinc/smelting' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Silver Lead-Ores', href: '/minerals/silver/lead-ores' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    goldMining
  ),
  'silver/lead-ores': fullEntry(
    'Silver-Lead Ores',
    'Polymetallic Silver and Lead Resources',
    `Silver-lead ores in Afghanistan occur in the same deposits as zinc and other base metals. The Aynak polymetallic deposit (Logar) and similar sediment-hosted and VMS-style deposits contain significant silver credits that improve project economics. Silver is present in galena and other sulfides; metallurgical flowsheets recover silver along with lead and zinc into concentrate and then into lead bullion during smelting.

Processing recovers silver into lead bullion (and optionally separate silver concentrate in some flowsheets); refining then extracts high-purity silver. Silver by-product revenue substantially enhances the economics of lead-zinc projects; at Aynak, silver credits are a material contributor to project NPV. Soviet and modern metallurgical testwork has confirmed recovery and quality.

Development of Aynak and other lead-zinc projects will therefore increase Afghan silver production. Integration with refining ensures value capture. Environmental and social standards for polymetallic mining apply; traceability supports responsible sourcing for downstream consumers.`,
    { title: 'Ore Characteristics and Mineralogy', content: `Silver is present in galena (PbS) and other sulfides; common associations include freibergite, argentite, and silver in solid solution. Metallurgical flowsheets recover silver along with lead and zinc; flotation concentrates carry silver to smelting where it reports to lead bullion. Recovery and distribution are well characterized; testwork supports feasibility.` },
    { title: 'Economic Impact and Project Economics', content: `Silver by-product revenue substantially enhances the economics of lead-zinc projects. At typical grades (50–500 g/t Ag in concentrate) and prices, silver can contribute 10–25% of project revenue. Integration with refining captures this value; certification supports premium pricing. Project feasibility and financing account for silver credits.` },
    { title: 'Environmental and Processing Standards', content: `Polymetallic silver-lead-zinc mining and processing follow the same environmental and safety standards as other base metal operations. Tailings, water, and emissions are managed to meet regulatory requirements. Worker and community health are protected through engineering and procedural controls.` },
    { title: 'Development and Offtake', content: `Silver production from lead-zinc projects will grow with Aynak and any future polymetallic development. Offtake for refined silver can be secured with regional refiners and industrial consumers. Long-term agreements support project finance and revenue stability.` },
    [
      { value: '50–500', label: 'g/t Ag', description: 'In concentrate' },
      { value: '10–25%', label: 'Revenue', description: 'Silver contribution' },
      { value: 'Aynak', label: 'Primary', description: 'Logar polymetallic' },
      { value: 'Bullion', label: 'Recovery', description: 'Via lead smelting' },
      { value: 'Refining', label: 'Value', description: 'High-purity silver' },
      { value: 'Integrated', label: 'Development', description: 'With lead-zinc' },
    ],
    [
      { year: '1960s', event: 'Soviet identification of Aynak silver' },
      { year: '2010', event: 'Metallurgical testwork and recovery confirmed' },
      { year: '2025', event: 'Smelting and silver recovery commissioning' },
      { year: '2028', event: 'Refined silver production from Aynak' },
      { year: '2030', event: 'Full polymetallic production and silver export' },
    ],
    [
      { name: 'Lead-Zinc Aynak', href: '/minerals/lead-zinc/aynak' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Lead-Zinc Smelting', href: '/minerals/lead-zinc/smelting' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
    ],
    goldMining
  ),
  'silver/industrial': fullEntry(
    'Industrial Silver Applications',
    'Silver for Industry and Technology',
    `Industrial silver from Afghan production serves electronics, soldering, catalysis, solar photovoltaics, and other applications. Silver's electrical and thermal conductivity, reflectivity, and antimicrobial properties make it essential in many industrial and technology applications. Demand for silver in solar panels, electronics, and industry supports long-term market outlook; global industrial demand has grown steadily.

Afghan refined silver with clear provenance can supply regional and global industrial consumers. Certification and responsible sourcing are increasingly important for OEMs and supply chain due diligence. Integration with refining and export channels ensures that Afghan production can access industrial markets.

Value addition through fabrication (e.g. paste for solar, contacts for electronics) could be explored in later phases. Near-term focus is on producing refined silver meeting industry specifications and securing offtake with industrial consumers and traders. Environmental and social performance of silver production supports ESG requirements of downstream customers.`,
    { title: 'Industrial Demand and Applications', content: `Silver's conductivity and other properties make it essential in electronics (contacts, conductive paste), solar PV (cell metallization), catalysis (chemical and emissions control), soldering, and medical and water treatment. Demand is driven by electrification, renewable energy, and industrial growth. Afghan production can supply regional fabricators and global supply chains with certified material.` },
    { title: 'Supply Role and Market Access', content: `Afghanistan can contribute to diversified and responsible silver supply for industry. Refined silver meeting purity and documentation requirements can access OECD and other markets. Long-term offtake with industrial consumers and traders supports revenue stability. Responsible sourcing and traceability align with customer due diligence.` },
    { title: 'Quality and Certification', content: `Industrial silver must meet purity and physical specifications (e.g. grain size, form). Certification and assay documentation support customer acceptance. Chain-of-custody and ESG reporting meet supply chain requirements. Continuous improvement in quality and documentation strengthens market position.` },
    { title: 'Investment and Value Addition', content: `Near-term investment focuses on refining and certification to supply industrial markets. Longer-term, value addition (e.g. silver paste, specialty chemicals) could capture more value. Partnerships with industrial consumers and technology providers support market access and product development.` },
    [
      { value: 'Electronics', label: 'Application', description: 'Contacts, paste' },
      { value: 'Solar PV', label: 'Application', description: 'Cell metallization' },
      { value: 'Catalysis', label: 'Application', description: 'Chemical, emissions' },
      { value: 'Certification', label: 'Requirement', description: 'Industrial offtake' },
      { value: 'Traceability', label: 'Sourcing', description: 'Responsible supply' },
      { value: 'Regional', label: 'Markets', description: 'South Asia, global' },
    ],
    [
      { year: '2025', event: 'Refined silver production target' },
      { year: '2027', event: 'Industrial certification and offtake' },
      { year: '2030', event: 'Diversified industrial supply' },
      { year: '2035', event: 'Value addition and specialty products' },
    ],
    [
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Investment Opportunities', href: '/investment/opportunities' },
    ],
    goldMining
  ),
  'chromite/mining': fullEntry(
    'Chromite Mining Operations',
    'Chromite Extraction and Concentrate Production',
    `Chromite mining in Afghanistan extracts chromite ore from Logar, Kabul, Nangarhar, and other provinces along the Afghan chromite belt. Operations produce lump ore and concentrate for ferrochrome and chemical (chromite chemicals, refractories) markets. Soviet-era and post-2001 surveys have identified substantial resources; development aims to increase production and local beneficiation.

Open-pit and underground mining produce chromite ore; crushing, screening, and gravity concentration upgrade ore for smelting or export. Grade and Cr2O3 content determine end use: high-grade lump for ferrochrome, lower-grade and fines for chemical or refractory applications. Environmental and safety standards for chromite mining align with national and international practice.

Chromite feeds ferrochrome plants for stainless steel and chemical production; Afghan material can serve domestic ferrochrome (if developed) and export markets in Pakistan, India, and beyond. Logistics and quality consistency are key to market access. Investment in mining and concentration will support employment and revenue in chromite-bearing provinces.`,
    { title: 'Mining and Processing', content: `Open-pit and underground mining produce chromite ore from podiform and stratiform deposits. Crushing, screening, and gravity concentration (spirals, jigs) upgrade ore to saleable lump and concentrate. Cr2O3 content and lump size determine market; high-grade concentrate (e.g. 44–48% Cr2O3) is preferred for ferrochrome. Tailings and water are managed to meet environmental standards.` },
    { title: 'Markets and Offtake', content: `Chromite feeds ferrochrome plants for stainless steel and chemical production. Afghan lump and concentrate can serve domestic ferrochrome (if built) and export to Pakistan, India, China, and other consumers. Quality specifications (Cr2O3, Cr:Fe ratio, size) are agreed with offtakers. Logistics via road and border crossings support export.` },
    { title: 'Environmental and Safety', content: `Chromite mining and concentration follow environmental and safety standards for mining. Dust, noise, and water management are addressed in project design. Worker safety (especially in underground operations) is managed through training and procedures. Community engagement and local employment support social license.` },
    { title: 'Development and Investment', content: `Development aims to increase production from existing small-scale operations and new projects. Investment in concentration and logistics improves product quality and market access. Coordination with ferrochrome development (if pursued) supports value capture. Timeline depends on permitting, financing, and offtake.` },
    [
      { value: 'Logar, Kabul', label: 'Provinces', description: 'Chromite belt' },
      { value: 'Lump + Concentrate', label: 'Product', description: 'For FeCr and chemical' },
      { value: '44–48%', label: 'Cr2O3', description: 'Concentrate grade' },
      { value: 'Export', label: 'Markets', description: 'Pakistan, India, China' },
      { value: 'Gravity', label: 'Concentration', description: 'Spirals, jigs' },
      { value: 'Value Add', label: 'Goal', description: 'Local beneficiation' },
    ],
    [
      { year: '1960s', event: 'Soviet chromite surveys and small-scale mining' },
      { year: '2000s', event: 'Artisanal and small-scale chromite production' },
      { year: '2025', event: 'Concentration and export expansion target' },
      { year: '2028', event: 'Structured production and offtake' },
      { year: '2030', event: 'Integrated mining and optional ferrochrome' },
    ],
    [
      { name: 'Chromite Ferrochrome', href: '/minerals/chromite/ferrochrome' },
      { name: 'Chromite Logar', href: '/minerals/chromite/logar' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Province Logar', href: '/provinces/logar' },
    ],
    ironOre
  ),
  'chromite/ferrochrome': fullEntry(
    'Ferrochrome Production',
    'Chromium Alloy for Stainless Steel',
    `Ferrochrome production in Afghanistan would smelt chromite concentrate into ferrochrome (FeCr) alloy for stainless steel producers. Ferrochrome adds value over chromite export and supports industrial development; regional demand for stainless steel and specialty alloys is growing. Electric arc furnaces reduce chromite (with coke and other reductants) to ferrochrome; product grades (high-carbon, low-carbon, charge chrome) meet stainless steel producer specifications.

Feasibility studies for Afghan ferrochrome have considered location (proximity to chromite mines and power), power supply, and offtake. Investment is significant; bankability depends on chromite supply, power cost, and market access. Strategic value includes job creation, import substitution for alloy demand, and potential export to regional steel producers.

Environmental standards for ferrochrome (emissions, energy efficiency) align with IFC and national requirements. Development timeline would follow chromite mining expansion and power infrastructure.`,
    { title: 'Smelting Technology', content: `Electric arc furnaces (submerged arc or open) reduce chromite concentrate with coke and fluxes to ferrochrome. Product grades include high-carbon ferrochrome (HCFeCr), charge chrome, and low-carbon grades for specialty steel. Technology is mature; capital and operating cost depend on scale, power cost, and raw material quality. Afghan chromite quality is suitable for standard FeCr production.` },
    { title: 'Strategic Value and Markets', content: `Local ferrochrome would capture value over chromite export and support regional stainless steel and industrial growth. Offtake can target Pakistan, India, and other steel producers. Long-term contracts support project finance. Job creation and industrial diversification are government priorities.` },
    { title: 'Power and Raw Materials', content: `Ferrochrome is energy-intensive; competitive power (hydro, grid, or captive) is essential. Chromite supply from Afghan mines and coke (imported or domestic) must be secured. Logistics for concentrate in and alloy out affect economics. Feasibility must integrate mining, power, and market assumptions.` },
    { title: 'Environmental and Investment', content: `Emissions (CO2, particulates), slag management, and energy efficiency are regulated. Best available techniques (BAT) apply. Investment and permitting timeline depend on environmental and social impact assessment. Partnerships with technology providers and offtakers strengthen feasibility.` },
    [
      { value: 'EAF', label: 'Technology', description: 'Electric arc furnace' },
      { value: 'Stainless', label: 'End Use', description: 'Steel alloy' },
      { value: 'Value Add', label: 'vs Export', description: 'Chromite to FeCr' },
      { value: 'Power', label: 'Key Input', description: 'Energy-intensive' },
      { value: 'Regional', label: 'Markets', description: 'Pakistan, India' },
      { value: 'BAT', label: 'Environment', description: 'Emissions, slag' },
    ],
    [
      { year: '2020', event: 'Ferrochrome feasibility studies' },
      { year: '2025', event: 'Chromite supply and power options clarified' },
      { year: '2028', event: 'Potential FeCr project FID' },
      { year: '2030', event: 'Commissioning if bankable' },
      { year: '2032', event: 'Commercial FeCr production' },
    ],
    [
      { name: 'Chromite Mining', href: '/minerals/chromite/mining' },
      { name: 'Chromite Logar', href: '/minerals/chromite/logar' },
      { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Investment Framework', href: '/investment/framework' },
    ],
    ironOre
  ),
  'chromite/logar': fullEntry(
    'Logar Chromite Deposits',
    'Chromite Resources in Logar Province',
    `Logar Province hosts chromite deposits in addition to the world-class Mes Aynak copper deposit. Chromite occurs in ultramafic rocks of the Logar ophiolite and related sequences; it has been mined on a small scale historically. Systematic development could increase production and support regional industry; coordination with copper and other mineral development allows shared infrastructure and benefits.

Chromite in Logar is part of the broader Afghan chromite belt; grades and tonnages support commercial development. Proximity to Kabul and transport corridors improves logistics. Environmental and social considerations are integrated with copper project experience in the province.

Integrated development (chromite plus copper, and potentially other minerals) can optimize use of infrastructure, power, and workforce. Government and community support for responsible mining in Logar is aligned with Mes Aynak and regional development plans.`,
    { title: 'Logar Chromite Geology', content: `Chromite in Logar occurs in ultramafic (ophiolite) rocks; podiform and layered types are present. Grades and tonnages from Soviet and later work support commercial development. Mineral rights and land use are coordinated with copper and other projects. Exploration and resource definition continue to improve confidence.` },
    { title: 'Integrated Development with Copper', content: `Chromite development can be coordinated with Mes Aynak copper and other minerals in Logar for shared infrastructure (roads, power, water) and benefits (employment, local content). Sequencing may prioritize copper while advancing chromite mining and concentration. Synergies reduce unit cost and support social license.` },
    { title: 'Production and Markets', content: `Logar chromite can supply lump and concentrate for ferrochrome and chemical markets. Export routes via Kabul and border crossings connect to regional offtakers. Quality and consistency support long-term offtake agreements. Value addition (ferrochrome) could be considered at provincial or national level.` },
    { title: 'Environmental and Community', content: `Mining and concentration in Logar follow environmental and social standards. Lessons from copper project engagement apply. Community benefits (jobs, local procurement, infrastructure) are part of project design. Permitting and stakeholder alignment are ongoing.` },
    [
      { value: 'Logar', label: 'Province', description: 'With Mes Aynak' },
      { value: 'Ultramafic', label: 'Host Rock', description: 'Ophiolite' },
      { value: 'Lump + Concentrate', label: 'Product', description: 'Commercial' },
      { value: 'Shared', label: 'Infrastructure', description: 'With copper' },
      { value: 'Regional', label: 'Export', description: 'Pakistan, India' },
      { value: 'Systematic', label: 'Development', description: 'Scale-up target' },
    ],
    [
      { year: '1960s', event: 'Soviet chromite identification in Logar' },
      { year: '2010', event: 'Resource and development interest' },
      { year: '2025', event: 'Mining and concentration expansion' },
      { year: '2028', event: 'Structured production and offtake' },
      { year: '2030', event: 'Integrated mineral development in Logar' },
    ],
    [
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Chromite Mining', href: '/minerals/chromite/mining' },
      { name: 'Chromite Ferrochrome', href: '/minerals/chromite/ferrochrome' },
      { name: 'Province Logar', href: '/provinces/logar' },
      { name: 'Silver Lead-Ores', href: '/minerals/silver/lead-ores' },
    ],
    ironOre
  ),
  'marble/processing': fullEntry(
    'Marble Processing Facilities',
    'Cutting, Polishing, and Dimension Stone',
    `Marble processing facilities in Afghanistan cut and polish blocks into slabs, tiles, and custom dimension stone. Herat, Bamyan, Kabul, and other provinces host quarries and processing plants serving domestic and export markets. Value addition through processing captures more revenue than raw block export; finished slabs and tiles command higher prices and support employment.

Block saws (gang saws, wire saws), polishing lines, and cutting equipment produce finished stone to architectural and decorative specifications. Quality control ensures product meets customer requirements for color consistency, finish, and dimensions. Waste (slurry, cuttings) is managed; water recycling and sediment control are standard.

Processed marble is sold to construction and design markets domestically and in the region (Pakistan, Iran, Gulf, India). Certification of origin and quality supports premium positioning. Investment in modern equipment and training improves productivity and product range.`,
    { title: 'Processing Technology', content: `Block saws (gang and wire), polishing lines (resin, epoxy, mechanical), and cutting equipment produce slabs, tiles, and custom dimension stone. Calibration and finishing (polished, honed, brushed) meet architectural specs. Quality control covers color, veining, thickness, and finish. Maintenance and consumables (diamond tools, abrasives) affect operating cost.` },
    { title: 'Markets and Product Range', content: `Processed marble is sold to construction and design markets domestically and in the region. Slabs for cladding and countertops, tiles for flooring and walls, and custom cut-to-size serve residential and commercial projects. Export to Gulf, South Asia, and beyond grows with certification and logistics.` },
    { title: 'Environmental and Resource Efficiency', content: `Processing generates slurry and cuttings; sediment control and water recycling reduce environmental impact. Energy use (sawing, polishing) is optimized. Worker safety (dust, noise, handling) is managed. Responsible sourcing and chain-of-custody support market access.` },
    { title: 'Investment and Capacity', content: `Investment in modern saws and polishing lines increases capacity and product quality. Training and maintenance support productivity. Clustering with quarries reduces transport cost. Government and donor support for value addition in dimension stone is aligned with job creation and export goals.` },
    [
      { value: 'Herat, Bamyan', label: 'Locations', description: 'Processing hubs' },
      { value: 'Slabs, Tiles', label: 'Products', description: 'Dimension stone' },
      { value: 'Value Add', label: 'vs Blocks', description: 'Higher revenue' },
      { value: 'Quality', label: 'Control', description: 'Architectural specs' },
      { value: 'Regional', label: 'Export', description: 'Gulf, South Asia' },
      { value: '75+', label: 'Varieties', description: 'Afghan marble types' },
    ],
    [
      { year: '2000s', event: 'Marble processing expansion in Herat' },
      { year: '2015', event: 'Modern equipment and export growth' },
      { year: '2025', event: 'Capacity and quality upgrade target' },
      { year: '2028', event: 'Certification and premium markets' },
      { year: '2030', event: 'Integrated quarry-processing and export' },
    ],
    [
      { name: 'Marble Exports', href: '/minerals/marble/exports' },
      { name: 'Marble Varieties', href: '/minerals/marble/varieties' },
      { name: 'Marble Trade', href: '/minerals/marble/trade' },
      { name: 'Province Herat', href: '/provinces/herat' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    marbleQuarry
  ),
  'marble/exports': fullEntry(
    'Marble Export Operations',
    'International Dimension Stone Trade',
    `Afghan marble export operations ship blocks and processed stone (slabs, tiles) to international markets. Export corridors via Pakistan (Karachi), Iran, and Central Asia connect quarries and processors to global customers. Certification of origin and quality, plus logistics (heavy haulage, border procedures, documentation), support premium positioning.

Heavy haulage and border procedures are coordinated for block and slab export; documentation supports origin and quality claims. Afghan marble reaches Middle Eastern (UAE, Saudi, Qatar), South Asian (India, Pakistan), and other markets with growing demand for dimension stone. Trade relationships with distributors and project buyers support sustainable production.

Challenges include transport cost, border efficiency, and competition from other origins. Investment in logistics, certification, and marketing strengthens export performance. Government support for export facilitation and trade agreements can improve market access.`,
    { title: 'Export Logistics', content: `Heavy haulage (flatbeds, specialized trailers) moves blocks and slabs from quarry/plant to border and port. Border procedures (customs, standards, documentation) are coordinated; transit agreements (e.g. Pakistan, Iran) affect cost and time. Documentation (invoice, certificate of origin, quality) supports clearance and buyer confidence.` },
    { title: 'Market Access and Buyers', content: `Afghan marble reaches Middle Eastern, South Asian, and other markets. Buyers include distributors, project contractors, and architects. Quality consistency and reliable supply build long-term relationships. Certification (e.g. CE, origin) supports entry into regulated markets.` },
    { title: 'Certification and Brand', content: `Certification of origin (Afghan marble) and quality (grades, dimensions) supports premium positioning. Brand development (e.g. Afghan Green, Herat White) differentiates product. Responsible sourcing and traceability align with buyer requirements.` },
    { title: 'Challenges and Investment', content: `Transport cost, border delays, and competition affect competitiveness. Investment in logistics (e.g. containerization, consolidation) and export facilitation reduces cost. Trade diplomacy and agreements improve border efficiency. Market intelligence and buyer engagement support growth.` },
    [
      { value: 'Pakistan, Iran', label: 'Corridors', description: 'Export routes' },
      { value: 'Gulf, South Asia', label: 'Markets', description: 'Primary destinations' },
      { value: 'Blocks + Slabs', label: 'Product', description: 'Export form' },
      { value: 'Certification', label: 'Origin', description: 'Quality, traceability' },
      { value: 'Heavy Haul', label: 'Logistics', description: 'Specialized transport' },
      { value: 'Premium', label: 'Positioning', description: 'Quality and origin' },
    ],
    [
      { year: '2000s', event: 'Marble export via Pakistan and Iran' },
      { year: '2015', event: 'Processed stone export growth' },
      { year: '2025', event: 'Certification and logistics upgrade' },
      { year: '2028', event: 'Structured offtake and premium markets' },
      { year: '2030', event: 'Sustainable export and brand recognition' },
    ],
    [
      { name: 'Marble Processing', href: '/minerals/marble/processing' },
      { name: 'Marble Trade', href: '/minerals/marble/trade' },
      { name: 'Marble Varieties', href: '/minerals/marble/varieties' },
      { name: 'Province Herat', href: '/provinces/herat' },
      { name: 'Investment Opportunities', href: '/investment/opportunities' },
    ],
    marbleQuarry
  ),
  'marble/varieties': fullEntry(
    'Marble Varieties and Colors',
    '75+ Afghan Marble Types',
    `Afghanistan produces over 75 varieties of marble in white, cream, green, black, and multicolor. Herat (e.g. Chahar Shanbe, Ziarat), Bamyan, Kabul, Kandahar, and other provinces host distinct deposits. Geological variation (metamorphism, impurities) produces a wide range of colors and patterns; white and decorative varieties command premium prices.

Variety supports diversified product lines for architecture and design; quarries and processors offer types to meet different specifications. Naming (e.g. Afghan Green, Herat White) supports marketing. Quality (hardness, consistency, workability) varies by deposit; selection and blending ensure customer satisfaction.

Export and domestic demand for specific varieties drive quarry development. Investment in exploration and quarry optimization expands the product range. Responsible quarrying and rehabilitation support sustainable supply.`,
    { title: 'Color and Type', content: `Geological variation produces white, cream, green, black, pink, and multicolor marble. Metamorphic grade and impurities (graphite, serpentine, etc.) determine color and pattern. White and decorative varieties (e.g. onyx, breccia) command premium prices. Quality (homogeneity, fracture) affects yield and application.` },
    { title: 'Product Range and Applications', content: `Quarries and processors offer slabs, tiles, and cut-to-size in many varieties. Applications include cladding, flooring, countertops, and decorative elements. Architects and designers specify by color and pattern; Afghan range supports diverse projects. Custom orders and large-format products expand market.` },
    { title: 'Provenance and Naming', content: `Varieties are often named by location or color (e.g. Chahar Shanbe, Afghan Green). Provenance supports brand and traceability. Certification of origin differentiates Afghan marble in export markets. Consistency within a variety is maintained through quarry planning and quality control.` },
    { title: 'Development and Supply', content: `New quarry development and existing quarry optimization expand variety supply. Market demand for specific colors and types guides investment. Environmental and social standards apply to all quarries. Rehabilitation and closure planning support sustainable development.` },
    [
      { value: '75+', label: 'Varieties', description: 'Afghan marble types' },
      { value: 'White to Black', label: 'Colors', description: 'Full range' },
      { value: 'Herat, Bamyan', label: 'Provinces', description: 'Major sources' },
      { value: 'Premium', label: 'Decorative', description: 'White, green' },
      { value: 'Architecture', label: 'Application', description: 'Cladding, flooring' },
      { value: 'Origin', label: 'Certification', description: 'Provenance' },
    ],
    [
      { year: '1960s', event: 'Soviet surveys of Afghan marble' },
      { year: '2000s', event: 'Quarry and variety expansion' },
      { year: '2020', event: '75+ varieties documented and marketed' },
      { year: '2025', event: 'Certification and premium variety focus' },
      { year: '2030', event: 'Sustainably supplied variety range' },
    ],
    [
      { name: 'Marble Processing', href: '/minerals/marble/processing' },
      { name: 'Marble Exports', href: '/minerals/marble/exports' },
      { name: 'Marble Trade', href: '/minerals/marble/trade' },
      { name: 'Province Bamyan', href: '/provinces/bamyan' },
      { name: 'Province Herat', href: '/provinces/herat' },
    ],
    marbleQuarry
  ),
  'marble/trade': fullEntry(
    'International Marble Trade',
    'Afghan Marble in Global Markets',
    `Afghan marble is traded internationally as blocks, slabs, and finished products. Trade relationships with regional and global buyers (distributors, contractors, architects) support sustainable production and premium positioning for quality and origin. Exporters work with distributors and project buyers in the Gulf, South Asia, and beyond.

Trade channels include direct sales, distributors, and project-specific supply. Documentation (origin, quality, dimensions) supports transactions. Payment terms and logistics are agreed with buyers. Brand and quality (Afghan marble promoted for variety, color, and responsible sourcing) differentiate product in competitive markets.

Challenges include price competition, logistics cost, and market access. Investment in certification, logistics, and marketing strengthens trade performance. Government support for trade facilitation and bilateral agreements can improve access to key markets.`,
    { title: 'Trade Channels', content: `Exporters work with distributors and project buyers in the Gulf, South Asia, and beyond. Direct sales to contractors and architects occur for large projects. Distributors handle inventory and smaller orders. Trade fairs and digital platforms support buyer engagement. Long-term relationships secure repeat business.` },
    { title: 'Brand and Quality', content: `Afghan marble is promoted for quality, variety (75+ types), and responsible sourcing. Origin certification and consistent quality build reputation. Marketing highlights unique colors (e.g. Afghan Green) and suitability for high-end applications. ESG and traceability align with buyer preferences.` },
    { title: 'Logistics and Documentation', content: `Trade requires reliable logistics (haulage, border, shipping) and complete documentation. Incoterms and payment terms (LC, advance) are agreed. Insurance and risk allocation are standard. Efficient clearance and delivery support buyer satisfaction.` },
    { title: 'Market Development', content: `Market development includes buyer missions, trade fair participation, and certification. New markets (e.g. Europe, East Asia) can be explored with quality and documentation. Government trade promotion and diplomacy support market access. Investment in capacity and quality sustains supply for growing trade.` },
    [
      { value: 'Blocks, Slabs', label: 'Product', description: 'Trade form' },
      { value: 'Gulf, South Asia', label: 'Markets', description: 'Primary' },
      { value: 'Quality', label: 'Positioning', description: 'Premium' },
      { value: 'Origin', label: 'Certification', description: 'Afghan marble' },
      { value: 'Distributors', label: 'Channels', description: 'And direct' },
      { value: 'Responsible', label: 'Sourcing', description: 'Traceability' },
    ],
    [
      { year: '2000s', event: 'International marble trade growth' },
      { year: '2015', event: 'Distribution and project supply' },
      { year: '2025', event: 'Certification and brand push' },
      { year: '2028', event: 'Structured trade and premium positioning' },
      { year: '2030', event: 'Sustainable trade and market share' },
    ],
    [
      { name: 'Marble Exports', href: '/minerals/marble/exports' },
      { name: 'Marble Processing', href: '/minerals/marble/processing' },
      { name: 'Marble Varieties', href: '/minerals/marble/varieties' },
      { name: 'Investment Opportunities', href: '/investment/opportunities' },
      { name: 'Operations Trade', href: '/operations/trade' },
    ],
    marbleQuarry
  ),
  'coal/metallurgical': fullEntry(
    'Metallurgical Coal',
    'Coking Coal for Steel Production',
    `Afghanistan's metallurgical (coking) coal reserves support potential steel production. Coal from Baghlan, Samangan, and other basins has been assessed for coking properties; quality varies by deposit. Metallurgical coal must meet specific coking properties (volatile matter, fluidity, strength) for use in coke ovens feeding blast furnace steelmaking. Afghan basins contain coal with potential for coke production; further testwork and blending studies are ongoing.

Metallurgical coal development supports integrated steel development (e.g. Hajigak iron ore project in Bamyan) and regional industry. Domestic coke production would reduce import dependence and capture value. Logistics (mine to coke plant to blast furnace) and quality consistency are key to feasibility.

Environmental and carbon considerations affect long-term demand for coke-based steel; near to medium term, metallurgical coal remains critical for blast furnace steel. Investment in coal quality assessment, mining, and coke plant feasibility continues.`,
    { title: 'Coal Quality and Coking Properties', content: `Metallurgical coal must meet specific coking properties: volatile matter, caking index, fluidity, and coke strength after reaction (CSR). Afghan basins (Baghlan, Samangan, etc.) contain coal with varying quality; washability and blending studies determine suitability for coke. Testwork (pilot coke oven) validates product quality for blast furnace use.` },
    { title: 'Steel Linkage and Integrated Development', content: `Metallurgical coal development supports integrated steel development. Hajigak (Bamyan) and other iron ore projects could be supplied with domestic coke if quality and economics align. Coke plant location (near coal, near steel, or export) affects logistics. Regional steel demand (Pakistan, India) could also absorb Afghan coking coal export.` },
    { title: 'Mining and Preparation', content: `Metallurgical coal requires selective mining and washing to meet coke plant feed specs. Coal preparation (crushing, washing, blending) produces consistent feed. Environmental standards for coal mining and washing (water, dust, rehabilitation) apply. Worker safety and community engagement are integral.` },
    { title: 'Investment and Timeline', content: `Investment in resource definition, quality testwork, and coke plant feasibility is ongoing. Timeline depends on steel project development (e.g. Hajigak) and coal quality confirmation. Partnerships with steel and coke producers support offtake and technology. Carbon and regulatory trends may affect long-term outlook.` },
    [
      { value: 'Baghlan, Samangan', label: 'Basins', description: 'Coking potential' },
      { value: 'Coke', label: 'End Use', description: 'Blast furnace' },
      { value: 'Hajigak', label: 'Steel Link', description: 'Bamyan iron' },
      { value: 'Quality', label: 'Testwork', description: 'Coking properties' },
      { value: 'Blending', label: 'Preparation', description: 'Consistent feed' },
      { value: 'Regional', label: 'Export', description: 'Steel producers' },
    ],
    [
      { year: '1960s', event: 'Soviet coal surveys and quality data' },
      { year: '2010', event: 'Hajigak and coal linkage studies' },
      { year: '2025', event: 'Quality testwork and coke feasibility' },
      { year: '2028', event: 'Potential mining and coke plant development' },
      { year: '2030', event: 'Integrated steel and coke if bankable' },
    ],
    [
      { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Coal Thermal', href: '/minerals/coal/thermal' },
      { name: 'Coal Processing', href: '/minerals/coal/processing' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Province Baghlan', href: '/provinces/baghlan' },
    ],
    coalMining
  ),
  'coal/thermal': fullEntry(
    'Thermal Coal Reserves',
    'Coal for Power and Industry',
    `Thermal coal reserves in Afghanistan support power generation and industrial use. Multiple basins (Baghlan, Samangan, Balkh, and others) contain coal suitable for domestic power plants and industrial boilers. Development would reduce dependence on imported fuel and support energy security.

Thermal coal is used for electricity generation (power plants) and industrial heat (cement, brick, other industry). Afghan reserves can supply domestic demand; quality (heating value, ash, sulfur) varies by deposit. Mining and transport economics determine which deposits are developed first.

Energy and mining planning align to develop coal resources responsibly. Environmental and carbon considerations are part of planning; efficiency and emission controls are standard. Investment in mining, logistics, and power plant feasibility continues.`,
    { title: 'Thermal Coal Use', content: `Thermal coal is used for electricity generation (pulverized coal, fluidized bed) and industrial heat (cement kilns, brick kilns, boilers). Afghan reserves can supply domestic power plants and industry; import substitution improves balance of payments and security. Heating value, ash content, and sulfur affect application and environmental compliance.` },
    { title: 'Development and Mining', content: `Mining and power projects are planned to utilize thermal coal. Selective mining and basic preparation (crushing, screening) may be sufficient for some end uses. Logistics (mine to plant) affect economics. Environmental and social impact assessment and permitting are required.` },
    { title: 'Environmental and Planning', content: `Energy and mining planning align to develop coal responsibly. Emission controls (particulate, SO2, NOx) and efficiency (e.g. supercritical plants) reduce environmental impact. Carbon policy may affect long-term demand; near term, thermal coal supports baseload and industry. Rehabilitation and community benefits are part of project design.` },
    { title: 'Markets and Investment', content: `Domestic offtake (power, cement, industry) is primary; export to regional power and industry is possible. Investment in mining capacity and logistics supports supply. Power plant development (domestic or cross-border) can anchor demand. Government energy policy guides development priorities.` },
    [
      { value: 'Power', label: 'Use', description: 'Electricity generation' },
      { value: 'Industry', label: 'Use', description: 'Cement, brick, heat' },
      { value: 'Multiple', label: 'Basins', description: 'Baghlan, Balkh' },
      { value: 'Domestic', label: 'Priority', description: 'Import substitution' },
      { value: 'Quality', label: 'Variation', description: 'HV, ash, S' },
      { value: 'Planning', label: 'Alignment', description: 'Energy and mining' },
    ],
    [
      { year: '1960s', event: 'Soviet thermal coal resource assessment' },
      { year: '2000s', event: 'Small-scale thermal coal mining' },
      { year: '2025', event: 'Mining and power linkage development' },
      { year: '2028', event: 'Structured supply for power and industry' },
      { year: '2030', event: 'Domestic thermal coal supply and optional export' },
    ],
    [
      { name: 'Coal Metallurgical', href: '/minerals/coal/metallurgical' },
      { name: 'Coal Processing', href: '/minerals/coal/processing' },
      { name: 'Coal Energy', href: '/minerals/coal/energy' },
      { name: 'Province Baghlan', href: '/provinces/baghlan' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
    ],
    coalMining
  ),
  'coal/processing': fullEntry(
    'Coal Processing Plants',
    'Washing and Preparation',
    `Coal processing plants wash and prepare run-of-mine coal for metallurgical and thermal markets. Washing removes ash, sulfur, and moisture; improves consistency and heating value; and supports premium product and environmental compliance. Coal preparation includes crushing, screening, and washing (dense medium, spirals, flotation as applicable); rejects and water are managed to meet environmental standards.

Processed coal meets specifications for coke plants (metallurgical) and power stations (thermal). Product quality (ash, sulfur, size) is tailored to offtaker requirements. Slurry and reject handling, water recycling, and sediment control are standard practice.

Investment in processing capacity is aligned with mining development and offtake. Technology selection depends on feed quality and product specs. Environmental permitting and community engagement are part of project development.`,
    { title: 'Processing Technology', content: `Coal preparation includes crushing, screening, and washing. Dense medium cyclones, spirals, and flotation separate coal from reject; product quality (ash, sulfur, size) meets offtaker specs. Water is recycled; slurry and rejects are stored or utilized. Dust and noise control protect workers and environment. Technology is mature and scalable.` },
    { title: 'Product Quality', content: `Processed coal meets specifications for coke plants (low ash, coking properties) and power stations (heating value, ash, sulfur). Size (lump, nut, fines) is matched to end use. Quality control (sampling, assay) ensures consistency. Reject and middlings may have secondary use (e.g. power, brick).` },
    { title: 'Environmental and Water', content: `Rejects and water are managed to meet environmental standards. Sediment control, water recycling, and closure planning are required. Tailings and reject storage are designed for stability and long-term containment. Permits and monitoring ensure compliance.` },
    { title: 'Capacity and Investment', content: `Processing capacity is sized to mine output and offtake. Phased expansion can match production growth. Investment in modern equipment improves recovery and product quality. Operating cost (power, consumables, labor) affects economics.` },
    [
      { value: 'Washing', label: 'Core', description: 'Ash, S reduction' },
      { value: 'Met + Thermal', label: 'Markets', description: 'Coke and power' },
      { value: 'Dense Medium', label: 'Technology', description: 'Cyclones, spirals' },
      { value: 'Quality', label: 'Specs', description: 'Offtaker requirements' },
      { value: 'Water', label: 'Management', description: 'Recycle, sediment' },
      { value: 'Scalable', label: 'Design', description: 'Match mine output' },
    ],
    [
      { year: '2010', event: 'Coal processing feasibility studies' },
      { year: '2025', event: 'Processing plant development with mining' },
      { year: '2027', event: 'Commissioning and product qualification' },
      { year: '2030', event: 'Full capacity and diversified product' },
    ],
    [
      { name: 'Coal Metallurgical', href: '/minerals/coal/metallurgical' },
      { name: 'Coal Thermal', href: '/minerals/coal/thermal' },
      { name: 'Coal Energy', href: '/minerals/coal/energy' },
      { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    coalMining
  ),
  'coal/energy': fullEntry(
    'Coal for Energy Generation',
    'Power Sector and Industrial Energy',
    `Coal is used for energy generation in Afghanistan and the region. Domestic power plants and industrial users can be supplied from Afghan thermal coal reserves, supporting energy security and economic development. Coal-fired power and industrial boilers consume thermal coal; Afghan supply can replace or supplement imports.

Energy and mining planning align to develop coal resources responsibly for power and industry. Project development includes mining, logistics, and power plant (or industrial offtake) feasibility. Environmental and carbon considerations are integrated; efficiency and emission controls are standard.

Regional demand (e.g. Pakistan, Central Asia) for power and industry could also absorb Afghan coal export. Investment in mining, transport, and power linkage continues. Government energy policy and bilateral cooperation affect development pace.`,
    { title: 'Power and Industry', content: `Coal-fired power (base load) and industrial boilers (cement, brick, other) consume thermal coal. Afghan supply can replace or supplement imported coal and other fuels. Domestic offtake improves energy security and balance of payments. Plant efficiency (e.g. supercritical) and emission controls (particulate, SO2, NOx) are part of design.` },
    { title: 'Planning and Alignment', content: `Energy and mining planning align to develop coal for power and industry. Mine development, transport corridors, and power plant (or industrial) offtake are coordinated. Environmental and social impact assessment covers mining and combustion. Carbon policy may influence long-term role of coal.` },
    { title: 'Logistics and Offtake', content: `Logistics (mine to plant) affect economics. Domestic power plants and industrial users are primary offtake; export to regional power and industry is possible. Long-term supply agreements support mine and plant financing. Quality and consistency are key to offtaker satisfaction.` },
    { title: 'Investment and Timeline', content: `Investment in mining, logistics, and power/industrial offtake continues. Timeline depends on permitting, financing, and offtake agreements. Government and donor support for energy infrastructure can accelerate development. Partnerships with power and industrial developers support integration.` },
    [
      { value: 'Power', label: 'Sector', description: 'Baseload generation' },
      { value: 'Industry', label: 'Sector', description: 'Cement, brick, heat' },
      { value: 'Domestic', label: 'Priority', description: 'Energy security' },
      { value: 'Regional', label: 'Export', description: 'Pakistan, C. Asia' },
      { value: 'Efficiency', label: 'Design', description: 'Emission controls' },
      { value: 'Planning', label: 'Alignment', description: 'Mining and energy' },
    ],
    [
      { year: '2020', event: 'Coal-energy linkage studies' },
      { year: '2025', event: 'Mining and offtake development' },
      { year: '2028', event: 'Supply to power and industry' },
      { year: '2030', event: 'Sustained domestic and optional export supply' },
    ],
    [
      { name: 'Coal Thermal', href: '/minerals/coal/thermal' },
      { name: 'Coal Processing', href: '/minerals/coal/processing' },
      { name: 'Coal Metallurgical', href: '/minerals/coal/metallurgical' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Investment Framework', href: '/investment/framework' },
    ],
    coalMining
  ),
  'talc/processing': fullEntry(
    'Talc Processing',
    'Milling and Grade Production',
    `Talc processing in Afghanistan mills run-of-mine talc into industrial, cosmetic, and pharmaceutical grades. Processing includes drying, milling (roller mills, ball mills, jet mills), classification (air classifiers, sieves), and quality control to meet different market specifications. Crushing, grinding, and classification produce various particle sizes and purities; quality control ensures grade consistency.

Processed talc is sold to paper (filler, coating), plastics (reinforcement, nucleation), cosmetics (powder, masks), and pharmaceutical industries domestically and for export. Afghan talc from Nangarhar, Kunar, and other provinces can supply regional and international markets with certified grades. Value addition through processing captures more revenue than raw talc export.

Environmental and safety standards (dust control, worker exposure to talc) are applied. Investment in modern milling and classification improves product range and quality. Certification (e.g. cosmetic, pharmaceutical) supports premium markets.`,
    { title: 'Processing Steps', content: `Crushing, grinding (roller, ball, jet milling), and classification (air classifiers, sieves) produce various particle sizes and purities. Drying may be required for moisture-sensitive grades. Quality control (particle size distribution, brightness, chemistry) ensures grade consistency. Contaminant removal (e.g. carbonate, iron) is applied where needed. Packaging and storage maintain product quality.` },
    { title: 'Markets and Grades', content: `Processed talc is sold to paper (filler, coating), plastics, cosmetics, and pharmaceutical industries. Industrial grade (paper, plastics) has high volume; cosmetic and pharmaceutical grades command premium prices with strict purity and certification. Domestic and export markets (Pakistan, India, Gulf) are served. Offtake agreements support production planning.` },
    { title: 'Quality and Certification', content: `Industrial grades meet customer specs for brightness, particle size, and chemistry. Cosmetic and pharmaceutical grades require heavy metals, microbiology, and particle size testing; GMP and regulatory compliance may apply. Certification (e.g. COSMOS, pharmacopoeia) supports market access. Traceability and responsible sourcing align with customer requirements.` },
    { title: 'Investment and Capacity', content: `Investment in modern milling and classification increases capacity and product range. Phased expansion can match market growth. Training and maintenance support consistent quality. Clustering with talc mining reduces transport cost. Government support for value addition in industrial minerals aligns with job creation.` },
    [
      { value: 'Industrial', label: 'Grades', description: 'Paper, plastics' },
      { value: 'Cosmetic', label: 'Grades', description: 'Premium' },
      { value: 'Pharma', label: 'Grades', description: 'Certified' },
      { value: 'Milling', label: 'Process', description: 'Grind, classify' },
      { value: 'Export', label: 'Markets', description: 'Regional, global' },
      { value: 'Value Add', label: 'Goal', description: 'vs raw export' },
    ],
    [
      { year: '2000s', event: 'Talc processing expansion' },
      { year: '2015', event: 'Grade diversification and export' },
      { year: '2025', event: 'Cosmetic and pharma certification target' },
      { year: '2028', event: 'Full grade range and premium markets' },
      { year: '2030', event: 'Sustainably supplied talc products' },
    ],
    [
      { name: 'Barite Concentrates', href: '/minerals/barite/concentrates' },
      { name: 'Talc-Barite Industrial', href: '/minerals/talc-barite/industrial' },
      { name: 'Kaolin Cosmetic', href: '/minerals/kaolin/cosmetic' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Province Nangarhar', href: '/provinces/nangarhar' },
    ],
    talcMining
  ),
  'barite/concentrates': fullEntry(
    'Barite Concentrates',
    'Upgraded Barite for Drilling and Industry',
    `Barite concentrate production upgrades run-of-mine barite to meet API and industrial specifications. Afghan barite deposits (e.g. Bamyan, Herat) are processed using gravity (jigs, spirals) and other methods to achieve specific gravity (4.2+), purity, and particle size for drilling mud (API 13A) and industrial (chemical, filler) applications.

Concentrate is used in drilling muds (weighting agent), chemicals (barium compounds), and other industrial applications. Regional oil and gas drilling (Pakistan, Iran, Central Asia) drives drilling mud demand; Afghan barite can supply regional mud companies with certified product. Quality consistency and logistics support long-term offtake.

Environmental standards for barite processing (water, tailings, dust) apply. Investment in concentration and grinding capacity supports market access. Certification (API, chemical grade) is required for key markets.`,
    { title: 'Concentrate Production', content: `Gravity (jigs, spirals, tables) and flotation (where needed) upgrade barite; grinding produces required particle size. Quality meets API 13A for drilling mud (specific gravity, particle size, soluble alkalis) and industrial specs for chemical and filler use. Rejects and water are managed. Quality control ensures consistency.` },
    { title: 'Applications and Markets', content: `Concentrate is used in drilling muds (oil and gas), chemicals (barium sulfate, other compounds), and fillers (paint, plastics). Regional drilling activity drives mud demand; chemical and filler markets are more stable. Afghan barite can supply Pakistan, Iran, and Central Asian mud plants and industrial consumers. Long-term contracts support investment.` },
    { title: 'Quality and Certification', content: `API 13A certification is required for drilling mud supply; chemical grade requires purity and chemistry specs. Testing (specific gravity, particle size, chemistry) is routine. Documentation and traceability support buyer confidence. Responsible sourcing aligns with oil and gas company requirements.` },
    { title: 'Investment and Logistics', content: `Investment in concentration and grinding increases capacity and product range. Logistics (mine to plant to border/port) affect delivered cost. Partnerships with mud companies and distributors support offtake. Government support for industrial mineral value addition applies.` },
    [
      { value: '4.2+', label: 'SG', description: 'Drilling mud' },
      { value: 'API 13A', label: 'Standard', description: 'Drilling grade' },
      { value: 'Gravity', label: 'Concentration', description: 'Jigs, spirals' },
      { value: 'Drilling', label: 'Market', description: 'Oil and gas' },
      { value: 'Chemical', label: 'Market', description: 'Barium compounds' },
      { value: 'Regional', label: 'Offtake', description: 'Pakistan, Iran' },
    ],
    [
      { year: '2000s', event: 'Barite concentration and export' },
      { year: '2015', event: 'API certification and mud supply' },
      { year: '2025', event: 'Capacity and grade expansion' },
      { year: '2028', event: 'Structured offtake and industrial grades' },
      { year: '2030', event: 'Sustainably supplied barite products' },
    ],
    [
      { name: 'Talc Processing', href: '/minerals/talc/processing' },
      { name: 'Talc-Barite Industrial', href: '/minerals/talc-barite/industrial' },
      { name: 'Gypsum Deposits', href: '/minerals/gypsum/deposits' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Province Bamyan', href: '/provinces/bamyan' },
    ],
    barite
  ),
  'gypsum/deposits': fullEntry(
    'Gypsum Deposits',
    'Gypsum for Cement and Construction',
    `Afghanistan's gypsum deposits supply cement production and construction materials. Gypsum (CaSO4·2H2O) is used as cement retarder (controls set time) and in plasterboard, plaster, and other construction products. Resources are widespread across multiple provinces (e.g. Balkh, Herat, Kabul) in sedimentary sequences; extraction is straightforward (quarrying, crushing).

Cement plants use gypsum to control set time; construction uses gypsum in plaster and board. Domestic cement production and construction sector growth drive demand; regional export (Pakistan, Iran) is possible. Quality (purity, consistency) and proximity to plants affect economics.

Environmental and land-use considerations apply to quarrying. Investment in crushing and logistics supports supply to cement and construction. Integrated development with limestone (cement raw materials) can optimize quarry operations.`,
    { title: 'Gypsum Use', content: `Cement plants use gypsum (typically 3–5% of clinker) to control set time and optimize strength development. Construction uses gypsum in plaster (wall plaster, decorative) and plasterboard (drywall). Quality (CaSO4 content, moisture) affects performance. Domestic cement and construction sectors are primary offtake; regional demand supports export potential.` },
    { title: 'Resources and Geology', content: `Gypsum occurs in sedimentary sequences (evaporite, marine) in multiple provinces. Thickness and purity vary; assessment and quarry planning optimize resource use. Extraction is by open-pit quarrying; crushing and screening produce saleable product. Proximity to cement plants and construction markets reduces transport cost.` },
    { title: 'Environmental and Quarry Management', content: `Quarrying follows environmental and land-use standards. Dust control, rehabilitation, and community engagement are part of project design. Water use (if any processing) is managed. Closure and rehabilitation planning support sustainable development.` },
    { title: 'Development and Supply', content: `Quarry development is aligned with cement and construction sector growth. Investment in crushing and logistics increases supply capacity. Integration with limestone quarries (same cement raw material supply chain) can reduce unit cost. Government support for construction materials supports sector development.` },
    [
      { value: 'Cement', label: 'Use', description: 'Retarder' },
      { value: 'Plaster', label: 'Use', description: 'Board, plaster' },
      { value: 'Widespread', label: 'Resources', description: 'Multiple provinces' },
      { value: 'Sedimentary', label: 'Geology', description: 'Evaporite' },
      { value: 'Domestic', label: 'Market', description: 'Cement, construction' },
      { value: 'Regional', label: 'Export', description: 'Pakistan, Iran' },
    ],
    [
      { year: '1960s', event: 'Soviet gypsum resource surveys' },
      { year: '2000s', event: 'Cement and construction growth' },
      { year: '2025', event: 'Quarry and supply expansion' },
      { year: '2028', event: 'Structured supply to cement and construction' },
      { year: '2030', event: 'Sustainably supplied gypsum' },
    ],
    [
      { name: 'Limestone Quarries', href: '/minerals/limestone/quarries' },
      { name: 'Gypsum-Limestone Cement', href: '/minerals/gypsum-limestone/cement' },
      { name: 'Gypsum-Limestone Construction', href: '/minerals/gypsum-limestone/construction' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Province Balkh', href: '/provinces/balkh' },
    ],
    partnership
  ),
  'limestone/quarries': fullEntry(
    'Limestone Quarries',
    'Cement and Aggregate Limestone',
    `Limestone quarries in Afghanistan supply cement plants (primary raw material for clinker) and aggregate for construction. High-quality limestone (high CaCO3, low impurities) is essential for cement; reserves in multiple provinces support current and planned cement production. Aggregate limestone is used in concrete, road base, and construction.

Cement-grade limestone must meet chemical (CaO, MgO, alkalis) and physical specifications; quarry planning and blending ensure consistent feed. Quarry development is aligned with cement and construction sector growth. Logistics (quarry to plant) affect economics; integrated cement plants often have dedicated limestone quarries.

Environmental and land-use standards apply to quarrying. Rehabilitation and community benefits are part of project design. Investment in crushing, screening, and logistics supports supply. Government support for cement and construction drives quarry development.`,
    { title: 'Cement and Aggregate', content: `Cement-grade limestone must meet chemical (CaO typically 52%+, low MgO and alkalis) and physical (crushability, consistency) specifications. Blending from multiple faces may be needed. Aggregate limestone is crushed and screened for concrete and road construction. Quality and proximity to cement plants and construction markets determine value.` },
    { title: 'Development and Resources', content: `Quarry development is aligned with cement and construction sector growth. Resource assessment and mine planning optimize reserve use. Crushing and screening produce cement feed and aggregate products. Integrated development with gypsum (cement raw materials) supports cement plant supply.` },
    { title: 'Environmental and Quarry Management', content: `Quarrying follows environmental and land-use standards. Blasting (if used), dust, noise, and rehabilitation are managed. Community engagement and local employment support social license. Closure and rehabilitation planning are required. Water use and sediment control apply.` },
    { title: 'Markets and Investment', content: `Domestic cement plants are primary offtake for cement-grade limestone; construction sector consumes aggregate. Regional export of aggregate or cement is possible. Investment in quarry capacity and logistics supports growing demand. Government and private cement expansion drives quarry development.` },
    [
      { value: 'Cement', label: 'Primary Use', description: 'Clinker raw material' },
      { value: 'Aggregate', label: 'Use', description: 'Concrete, roads' },
      { value: 'CaO 52%+', label: 'Quality', description: 'Cement grade' },
      { value: 'Multiple', label: 'Provinces', description: 'Reserves' },
      { value: 'Integrated', label: 'Development', description: 'With cement' },
      { value: 'Growth', label: 'Sector', description: 'Cement, construction' },
    ],
    [
      { year: '1960s', event: 'Soviet limestone resource surveys' },
      { year: '2000s', event: 'Cement sector expansion' },
      { year: '2025', event: 'Quarry and cement capacity growth' },
      { year: '2028', event: 'Structured supply to cement and construction' },
      { year: '2030', event: 'Sustainably supplied limestone' },
    ],
    [
      { name: 'Gypsum Deposits', href: '/minerals/gypsum/deposits' },
      { name: 'Gypsum-Limestone Cement', href: '/minerals/gypsum-limestone/cement' },
      { name: 'Marble Processing', href: '/minerals/marble/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Investment Opportunities', href: '/investment/opportunities' },
    ],
    marbleQuarry
  ),
  'kaolin/deposits': fullEntry(
    'Kaolin Deposits',
    'High-Quality Kaolin for Industry',
    `Afghanistan's kaolin (china clay) deposits supply paper, ceramics, paint, and other industries. Kaolin quality varies by deposit; premium grades support high-value applications (paper coating, refractory, pharmaceutical). Kaolin occurs in weathered (secondary) and sedimentary settings; assessment and development are ongoing in several provinces. Development could increase production and value addition; regional demand for paper, ceramics, and paint drives interest. Geological and quality assessment guides prioritization of deposits for different end uses.`,
    { title: 'Kaolin Applications', content: `Kaolin is used in paper coating and filler, ceramics (body and glaze), paint (extender, pigment), rubber, and pharmaceuticals. Quality (brightness, particle size, chemistry) determines application and price. Premium grades (paper coating, pharmaceutical) command higher prices. Afghan deposits are being assessed for suitability for each application.` },
    { title: 'Resources and Geology', content: `Kaolin occurs in weathered (granite, feldspar) and sedimentary settings. Assessment includes mapping, drilling, and quality testing. Development requires beneficiation (washing, classification, sometimes magnetic separation) to meet grade. Multiple provinces host kaolin; prioritization is by quality and market.` },
    { title: 'Environmental and Development', content: `Kaolin mining and processing follow environmental standards. Water use and sediment control are managed. Rehabilitation of mined areas is planned. Community engagement and local employment support social license. Investment in assessment and pilot processing continues.` },
    { title: 'Markets and Value Addition', content: `Domestic and regional paper, ceramic, and paint producers are potential offtakers. Value addition through processing (drying, milling, classification) captures more revenue than raw export. Certification (e.g. paper grade, pharmaceutical) supports premium markets. Timeline depends on deposit qualification and offtake.` },
    [
      { value: 'Paper', label: 'Use', description: 'Coating, filler' },
      { value: 'Ceramics', label: 'Use', description: 'Body, glaze' },
      { value: 'Paint', label: 'Use', description: 'Extender, pigment' },
      { value: 'Quality', label: 'Varies', description: 'By deposit' },
      { value: 'Weathered', label: 'Setting', description: 'And sedimentary' },
      { value: 'Assessment', label: 'Status', description: 'Ongoing' },
    ],
    [
      { year: '1960s', event: 'Soviet kaolin surveys' },
      { year: '2000s', event: 'Deposit assessment and quality work' },
      { year: '2025', event: 'Development and pilot processing' },
      { year: '2028', event: 'Production and grade qualification' },
      { year: '2030', event: 'Sustainably supplied kaolin' },
    ],
    [
      { name: 'Kaolin Paper', href: '/minerals/kaolin/paper' },
      { name: 'Kaolin Refractory', href: '/minerals/kaolin/refractory' },
      { name: 'Kaolin Paint', href: '/minerals/kaolin/paint' },
      { name: 'Clay Ceramic', href: '/minerals/clay/ceramic' },
      { name: 'Clay-Kaolin Manufacturing', href: '/minerals/clay-kaolin/manufacturing' },
    ],
    partnership
  ),
  'clay/ceramic': fullEntry(
    'Ceramic Clay Resources',
    'Clay for Pottery and Ceramics',
    `Ceramic clay resources in Afghanistan support traditional pottery and modern ceramic production. Clays are used for bricks, tiles, tableware, and artisanal and industrial ceramics. Clay types (e.g. ball clay, fire clay) suit different ceramic products; local tradition and modern kilns support diverse output. Formal development could expand production and quality; domestic and regional construction and consumer markets drive demand. Assessment of clay deposits for ceramic suitability (plasticity, firing behavior) is ongoing.`,
    { title: 'Ceramic Use', content: `Clay types suit different ceramic products: bricks and tiles (construction), tableware and sanitaryware (whiteware), and artisanal pottery. Local tradition and modern kilns support diverse output. Firing behavior (shrinkage, color) and plasticity determine application. Afghan clays are being tested for various ceramic grades.` },
    { title: 'Markets', content: `Ceramic products serve domestic and regional construction (bricks, tiles) and consumer (tableware, decorative) markets. Export to Pakistan, Iran, and Gulf is possible with consistent quality. Value addition through firing and finishing captures more revenue. Investment in kiln technology and design supports premium products.` },
    { title: 'Resources and Quality', content: `Clay deposits occur in sedimentary and weathered settings. Quality assessment includes plasticity, firing test, and chemistry. Blending and processing (washing, aging) may improve workability. Proximity to markets and fuel (for kilns) affects economics.` },
    { title: 'Development and Investment', content: `Formal development could expand production and quality. Investment in quarrying, processing, and kilns supports sector growth. Training and design support premium positioning. Government support for small-scale industry and construction materials applies.` },
    [
      { value: 'Bricks, Tiles', label: 'Products', description: 'Construction' },
      { value: 'Tableware', label: 'Products', description: 'Consumer' },
      { value: 'Traditional', label: 'Sector', description: 'And modern' },
      { value: 'Plasticity', label: 'Quality', description: 'Firing behavior' },
      { value: 'Domestic', label: 'Markets', description: 'And regional' },
      { value: 'Quality', label: 'Focus', description: 'Expansion' },
    ],
    [
      { year: 'Traditional', event: 'Pottery and brick making' },
      { year: '2000s', event: 'Modern ceramic expansion' },
      { year: '2025', event: 'Formal development and quality upgrade' },
      { year: '2028', event: 'Structured production and export' },
      { year: '2030', event: 'Sustainably supplied ceramic clay products' },
    ],
    [
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Clay-Kaolin Manufacturing', href: '/minerals/clay-kaolin/manufacturing' },
      { name: 'Feldspar Ceramic', href: '/minerals/feldspar/ceramic' },
      { name: 'Marble Processing', href: '/minerals/marble/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    partnership
  ),
  'clay-kaolin/manufacturing': fullEntry(
    'Clay and Kaolin Manufacturing',
    'Processed Clay and Kaolin Products',
    `Manufacturing of clay and kaolin products in Afghanistan includes drying, milling, classification, and shaping for ceramics, paper, and industrial use. Processing produces standardized grades for paper, ceramics, paint, and other industries. Value addition through processing captures more revenue than raw material export; local manufacturing creates jobs and reduces reliance on imported processed minerals. Investment in milling, classification, and quality control supports grade consistency and market access.`,
    { title: 'Manufacturing Process', content: `Processing includes drying (if needed), milling (ball mill, jet mill), classification (air classifier, sieve), and sometimes shaping (pelletizing, briquetting). Quality control ensures particle size, brightness, and chemistry meet customer specs. Packaging and storage maintain product quality. Different lines may serve paper, ceramic, and paint grades.` },
    { title: 'Value Addition', content: `Local manufacturing creates jobs and reduces reliance on imported processed minerals. Processed clay and kaolin command higher prices than raw material. Export of processed product improves balance of payments. Certification and consistency support long-term offtake.` },
    { title: 'Grades and Markets', content: `Standardized grades for paper (coating, filler), ceramics (body, glaze), paint (extender), and other industries are produced. Customers require consistent quality and documentation. Domestic and regional manufacturers are primary offtakers. Premium grades (e.g. pharmaceutical kaolin) require additional testing and certification.` },
    { title: 'Investment and Capacity', content: `Investment in manufacturing capacity is aligned with raw material supply and market demand. Phased expansion can match growth. Training and maintenance support quality. Government support for value addition in industrial minerals applies. Partnerships with offtakers can secure market.` },
    [
      { value: 'Drying, Milling', label: 'Process', description: 'Classification' },
      { value: 'Paper, Ceramics', label: 'Grades', description: 'Paint, industrial' },
      { value: 'Value Add', label: 'Goal', description: 'vs raw export' },
      { value: 'Jobs', label: 'Impact', description: 'Local manufacturing' },
      { value: 'Certification', label: 'Support', description: 'Market access' },
      { value: 'Regional', label: 'Markets', description: 'Offtakers' },
    ],
    [
      { year: '2000s', event: 'Clay and kaolin processing start' },
      { year: '2015', event: 'Grade diversification' },
      { year: '2025', event: 'Capacity and certification' },
      { year: '2028', event: 'Structured manufacturing and offtake' },
      { year: '2030', event: 'Sustainably supplied processed clay and kaolin' },
    ],
    [
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Clay Ceramic', href: '/minerals/clay/ceramic' },
      { name: 'Kaolin Paper', href: '/minerals/kaolin/paper' },
      { name: 'Talc Processing', href: '/minerals/talc/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    partnership
  ),
  'kaolin/paper': fullEntry(
    'Kaolin for Paper Industry',
    'Paper Coating and Filler Kaolin',
    `Kaolin for the paper industry is used as coating pigment (improves print quality, gloss) and filler (reduces cost, improves opacity and bulk). Afghan kaolin with suitable brightness, particle size distribution, and chemistry can supply paper mills domestically and in the region. Paper-grade kaolin requires strict brightness (e.g. 85+ ISO), particle size (e.g. 80–90% <2 μm for coating), and low abrasion. Development of Afghan kaolin for paper depends on deposit qualification and processing to meet specs.`,
    { title: 'Paper Applications', content: `Coating kaolin improves print quality, smoothness, and gloss; filler kaolin reduces cost and improves opacity and bulk. Paper mills specify brightness, particle size, and viscosity. Afghan kaolin is being tested for coating and filler grades; beneficiation may be needed to achieve brightness and particle size.` },
    { title: 'Quality', content: `Paper-grade kaolin requires strict brightness (ISO), particle size distribution, and chemistry (e.g. low Fe, Ti). Abrasion (e.g. Valley abrasion) must be low to protect machinery. Testing and certification support mill acceptance. Consistency is key for paper production.` },
    { title: 'Markets and Offtake', content: `Paper mills domestically and in the region (Pakistan, India) are potential offtakers. Long-term supply agreements support mill planning. Logistics and quality consistency affect competitiveness. Value addition through processing captures more than raw kaolin export.` },
    { title: 'Development', content: `Deposit qualification and pilot processing are ongoing. Investment in beneficiation (e.g. magnetic separation, classification) may be needed. Partnership with paper mills can secure offtake and technical support. Timeline depends on quality achievement and market engagement.` },
    [
      { value: 'Coating', label: 'Use', description: 'Pigment' },
      { value: 'Filler', label: 'Use', description: 'Cost, opacity' },
      { value: '85+', label: 'Brightness', description: 'ISO' },
      { value: 'Particle Size', label: 'Spec', description: 'PSD' },
      { value: 'Mills', label: 'Markets', description: 'Domestic, regional' },
      { value: 'Certification', label: 'Requirement', description: 'Mill acceptance' },
    ],
    [
      { year: '2000s', event: 'Kaolin assessment for paper' },
      { year: '2020', event: 'Pilot testing and mill engagement' },
      { year: '2025', event: 'Grade qualification target' },
      { year: '2028', event: 'Supply to paper mills' },
      { year: '2030', event: 'Sustainably supplied paper kaolin' },
    ],
    [
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Clay-Kaolin Manufacturing', href: '/minerals/clay-kaolin/manufacturing' },
      { name: 'Kaolin Paint', href: '/minerals/kaolin/paint' },
      { name: 'Talc Processing', href: '/minerals/talc/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    partnership
  ),
  'kaolin/refractory': fullEntry(
    'Refractory Kaolin',
    'Kaolin for High-Temperature Applications',
    `Refractory-grade kaolin is calcined and used in furnaces, kilns, and other high-temperature applications. Afghan kaolin with suitable alumina content and firing behavior (shrinkage, refractoriness) can supply refractory manufacturers. Kaolin is calcined to produce metakaolin or mullite; quality depends on purity and firing properties. Refractory producers in the region and globally consume kaolin and calcined products for shapes, castables, and monolithics.`,
    { title: 'Refractory Use', content: `Kaolin is calcined and used in refractory shapes (bricks, castables) and monolithics. Alumina content and refractoriness determine application (e.g. fireclay, high-alumina). Firing behavior (shrinkage, density) is critical. Afghan kaolin is being assessed for refractory suitability; calcination trials validate product.` },
    { title: 'Markets', content: `Refractory producers in the region (Pakistan, India, Iran) and globally consume kaolin and calcined products. Steel, cement, and nonferrous industries use refractories. Long-term supply agreements support refractory plant planning. Quality consistency and documentation are required.` },
    { title: 'Quality and Calcination', content: `Refractory grade requires consistent chemistry (Al2O3, alkalis) and firing behavior. Calcination (rotary kiln, flash) converts kaolin to metakaolin/mullite. Product testing (refractoriness, thermal shock) validates suitability. Investment in calcination capacity may be needed for value addition.` },
    { title: 'Development', content: `Deposit qualification and calcination pilot work are ongoing. Partnership with refractory producers can secure offtake and technical guidance. Timeline depends on quality confirmation and market engagement. Regional steel and cement growth drives refractory demand.` },
    [
      { value: 'Calcined', label: 'Product', description: 'Metakaolin, mullite' },
      { value: 'Alumina', label: 'Quality', description: 'Refractoriness' },
      { value: 'Shapes', label: 'Use', description: 'Bricks, castables' },
      { value: 'Regional', label: 'Markets', description: 'Refractory producers' },
      { value: 'Steel, Cement', label: 'End Use', description: 'Industries' },
      { value: 'Firing', label: 'Behavior', description: 'Critical' },
    ],
    [
      { year: '2000s', event: 'Kaolin refractory assessment' },
      { year: '2020', event: 'Calcination pilot and testing' },
      { year: '2025', event: 'Product qualification target' },
      { year: '2028', event: 'Supply to refractory producers' },
      { year: '2030', event: 'Sustainably supplied refractory kaolin' },
    ],
    [
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Feldspar Resources', href: '/minerals/feldspar/resources' },
      { name: 'Graphite Refractory', href: '/minerals/graphite/refractory' },
      { name: 'Clay Ceramic', href: '/minerals/clay/ceramic' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    partnership
  ),
  'kaolin/paint': fullEntry(
    'Kaolin for Paint and Coatings',
    'Paint Extender and Coating Pigment',
    `Kaolin is used in paint and coatings as extender (reduces cost, improves film properties) and pigment (opacity, durability). Afghan kaolin can supply paint manufacturers with consistent quality and competitive supply. Kaolin improves opacity, flow, and durability in paint formulations. Local and regional paint producers are potential customers; quality (brightness, particle size, dispersion) and consistency support long-term supply.`,
    { title: 'Paint Applications', content: `Kaolin improves opacity, flow, and durability in paint formulations. Extender grades reduce cost; specialty grades (e.g. calcined for opacity) add value. Dispersion and compatibility with binders are important. Afghan kaolin is being tested for various paint applications.` },
    { title: 'Supply', content: `Local and regional paint producers are potential customers for Afghan kaolin. Quality consistency and documentation support mill acceptance. Logistics and price competitiveness affect market share. Certification (e.g. REACH) may be needed for export to regulated markets.` },
    { title: 'Quality and Processing', content: `Paint grade requires brightness, particle size, and low abrasion. Processing (milling, classification) produces consistent product. Packaging and storage maintain quality. Testing (viscosity, gloss) may be required by customers.` },
    { title: 'Development', content: `Deposit qualification and paint application testing are ongoing. Partnership with paint producers can secure offtake. Investment in processing supports grade consistency. Timeline depends on market engagement and quality confirmation.` },
    [
      { value: 'Extender', label: 'Role', description: 'Pigment' },
      { value: 'Opacity', label: 'Property', description: 'Flow, durability' },
      { value: 'Paint', label: 'Markets', description: 'Producers' },
      { value: 'Consistency', label: 'Key', description: 'Quality' },
      { value: 'Regional', label: 'Offtake', description: 'Local, regional' },
      { value: 'Processing', label: 'Support', description: 'Grade' },
    ],
    [
      { year: '2000s', event: 'Kaolin for paint assessment' },
      { year: '2020', event: 'Application testing' },
      { year: '2025', event: 'Supply to paint producers target' },
      { year: '2028', event: 'Structured offtake' },
      { year: '2030', event: 'Sustainably supplied paint kaolin' },
    ],
    [
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Kaolin Paper', href: '/minerals/kaolin/paper' },
      { name: 'Talc Processing', href: '/minerals/talc/processing' },
      { name: 'Clay-Kaolin Manufacturing', href: '/minerals/clay-kaolin/manufacturing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    partnership
  ),
  'kaolin/pharmaceutical': fullEntry(
    'Pharmaceutical Grade Kaolin',
    'Kaolin for Medicines and Cosmetics',
    `Pharmaceutical and cosmetic grade kaolin must meet strict purity and safety standards (heavy metals, microbiology, particle size). Afghan kaolin suitable for these applications can supply pharmaceutical and personal care manufacturers. Pharmaceutical kaolin requires testing for heavy metals, microbiology, and particle size; GMP compliance may be needed for drug applications. Markets demand high-purity, certified kaolin; premium prices justify investment in qualification and certification.`,
    { title: 'Quality Requirements', content: `Pharmaceutical kaolin requires testing for heavy metals (Pb, As, etc.), microbiology (total count, pathogens), and particle size. Pharmacopoeial specs (e.g. USP, Ph.Eur.) may apply. GMP compliance is needed for drug applications. Cosmetic grade has similar purity requirements; certification (e.g. COSMOS) supports market access.` },
    { title: 'Markets', content: `Pharmaceutical and cosmetic manufacturers demand high-purity, certified kaolin. Applications include antidiarrheal preparations, topical products, and cosmetics. Premium prices justify investment in qualification. Traceability and responsible sourcing support regulatory and customer requirements.` },
    { title: 'Processing and Certification', content: `Processing must avoid contamination; dedicated lines and packaging may be required. Certification (e.g. GMP, pharmacopoeia) is obtained through audit and testing. Ongoing monitoring ensures consistency. Afghan deposits are being assessed for pharmaceutical suitability.` },
    { title: 'Development', content: `Deposit qualification and pilot processing (with GMP mindset) are ongoing. Partnership with pharmaceutical/cosmetic manufacturers can secure offtake. Timeline depends on qualification and regulatory pathway. Premium margin supports investment.` },
    [
      { value: 'Purity', label: 'Requirement', description: 'Heavy metals, micro' },
      { value: 'GMP', label: 'Compliance', description: 'Drug applications' },
      { value: 'Pharmacopoeia', label: 'Spec', description: 'USP, Ph.Eur.' },
      { value: 'Premium', label: 'Price', description: 'Certified' },
      { value: 'Traceability', label: 'Sourcing', description: 'Responsible' },
      { value: 'Cosmetic', label: 'Also', description: 'Personal care' },
    ],
    [
      { year: '2000s', event: 'Kaolin purity assessment' },
      { year: '2020', event: 'Pharmaceutical suitability testing' },
      { year: '2025', event: 'Qualification and certification target' },
      { year: '2028', event: 'Supply to pharma/cosmetic' },
      { year: '2030', event: 'Certified pharmaceutical kaolin supply' },
    ],
    [
      { name: 'Kaolin Cosmetic', href: '/minerals/kaolin/cosmetic' },
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Talc Processing', href: '/minerals/talc/processing' },
      { name: 'Clay-Kaolin Manufacturing', href: '/minerals/clay-kaolin/manufacturing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    partnership
  ),
  'kaolin/cosmetic': fullEntry(
    'Cosmetic Grade Kaolin',
    'Kaolin for Personal Care',
    `Cosmetic grade kaolin is used in face masks, powders, and other personal care products. Afghan kaolin with appropriate purity (heavy metals, microbiology) and texture (particle size, feel) can supply cosmetic formulators. Kaolin absorbs oil and provides smooth texture; quality and safety testing are essential. Cosmetic-grade material often requires certification (e.g. COSMOS, ISO) and compliance with international standards. Premium prices support investment in qualification.`,
    { title: 'Cosmetic Use', content: `Kaolin absorbs oil and provides smooth texture in face masks, powders, and other products. Particle size and whiteness affect feel and appearance. Purity (heavy metals, microbiology) is required for safety. Afghan kaolin is being tested for cosmetic suitability.` },
    { title: 'Certification', content: `Cosmetic-grade material often requires certification (e.g. COSMOS, ISO 22716) and compliance with international standards. Testing (heavy metals, microbiology, particle size) is routine. Traceability and responsible sourcing support brand requirements. Documentation supports customer acceptance.` },
    { title: 'Markets and Supply', content: `Cosmetic formulators and brands demand certified kaolin. Domestic and regional personal care manufacturers are potential offtakers; export to global brands is possible with full certification. Premium margin justifies qualification investment.` },
    { title: 'Development', content: `Deposit qualification and cosmetic testing are ongoing. Partnership with cosmetic manufacturers or ingredient suppliers can secure offtake. Timeline depends on certification and market engagement. Overlap with pharmaceutical grade (same purity focus) can optimize qualification.` },
    [
      { value: 'Face Masks', label: 'Use', description: 'Powders, personal care' },
      { value: 'Purity', label: 'Requirement', description: 'Heavy metals, micro' },
      { value: 'COSMOS', label: 'Certification', description: 'Example' },
      { value: 'Texture', label: 'Quality', description: 'Particle size, feel' },
      { value: 'Premium', label: 'Price', description: 'Certified' },
      { value: 'Formulators', label: 'Markets', description: 'Cosmetic' },
    ],
    [
      { year: '2000s', event: 'Kaolin cosmetic assessment' },
      { year: '2020', event: 'Cosmetic testing and certification' },
      { year: '2025', event: 'Certified supply target' },
      { year: '2028', event: 'Supply to cosmetic formulators' },
      { year: '2030', event: 'Sustainably supplied cosmetic kaolin' },
    ],
    [
      { name: 'Kaolin Pharmaceutical', href: '/minerals/kaolin/pharmaceutical' },
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Talc Processing', href: '/minerals/talc/processing' },
      { name: 'Clay-Kaolin Manufacturing', href: '/minerals/clay-kaolin/manufacturing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    partnership
  ),
  'gems/cutting': fullEntry(
    'Gemstone Cutting and Polishing',
    'Lapidary and Value Addition',
    `Gemstone cutting and polishing in Afghanistan adds value to rough lapis lazuli, emerald, ruby, and other gems. Traditional and modern lapidary creates finished stones for jewelry and collectors. Lapidaries cut and polish rough stones to maximize beauty, color, and value; quality cutting is essential for premium markets. Cut stones command higher prices than rough; local cutting captures value and creates skilled jobs. Training and facilities (cutting centers, equipment) support the sector; Badakhshan, Panjshir, and Kabul host lapidary activity. Export of cut stones improves revenue and supports traceability and ethical sourcing.`,
    { title: 'Cutting and Polishing', content: `Lapidaries cut and polish rough stones to maximize beauty and value. Sawing, pre-forming, faceting (or cabochon for some stones), and polishing produce finished gems. Quality cutting preserves weight while optimizing color and clarity. Skilled labor and equipment (saws, laps, polishers) are essential. Afghan lapidaries work lapis, emerald, ruby, tourmaline, and other stones.` },
    { title: 'Value and Markets', content: `Cut stones command higher prices than rough; local cutting captures value and creates skilled jobs. Export of cut stones (vs rough) improves revenue and supports value addition. Jewelry manufacturers and collectors are offtakers. Certification (see gems/certification) supports premium pricing and ethical positioning.` },
    { title: 'Training and Sector Support', content: `Training programs and lapidary facilities support skill development. Equipment and technology upgrades improve productivity and quality. Clustering with mining and trade (gems/trade) supports integrated sector development. Government and donor support for value addition in gems applies.` },
    { title: 'Environmental and Standards', content: `Lapidary uses water and abrasives; waste and water management follow environmental practice. Worker safety (dust, machinery) is managed. Ethical sourcing and chain-of-custody align with market requirements. Integration with certification supports responsible supply chains.` },
    [
      { value: 'Lapis, Emerald', label: 'Stones', description: 'Ruby, others' },
      { value: 'Value Add', label: 'Goal', description: 'Cut vs rough' },
      { value: 'Skilled Jobs', label: 'Impact', description: 'Lapidary' },
      { value: 'Badakhshan', label: 'Locations', description: 'Panjshir, Kabul' },
      { value: 'Premium', label: 'Markets', description: 'Quality cutting' },
      { value: 'Export', label: 'Channel', description: 'Cut stones' },
    ],
    [
      { year: 'Traditional', event: 'Lapidary and gem cutting' },
      { year: '2000s', event: 'Modern lapidary expansion' },
      { year: '2020', event: 'Training and facility upgrade' },
      { year: '2025', event: 'Certification and premium market target' },
      { year: '2030', event: 'Sustainably supplied cut gems' },
    ],
    [
      { name: 'Gems Certification', href: '/minerals/gems/certification' },
      { name: 'Gems Trade', href: '/minerals/gems/trade' },
      { name: 'Province Badakhshan', href: '/provinces/badakhshan' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    goldMining
  ),
  'gems/certification': fullEntry(
    'Gemstone Certification',
    'Laboratory Certification and Origin',
    `Gemstone certification from recognized laboratories (e.g. GIA, AGS, Gübelin) supports value and market access for Afghan gems. Certification documents quality (4Cs for diamonds; color, clarity, cut for colored stones), treatment (heating, filling), and often origin. Certificates provide confidence to buyers and support premium pricing; origin documentation supports ethical sourcing. International standards for grading and disclosure are used by major laboratories.`,
    { title: 'Certification Role', content: `Certificates provide confidence to buyers and support premium pricing. Grading (color, clarity, cut, carat for diamonds; analogous for colored stones) and treatment disclosure are standard. Origin documentation (e.g. Afghanistan) supports ethical sourcing and premium positioning. Laboratories may operate in-country or stones may be sent to international labs.` },
    { title: 'Standards', content: `International standards for grading and disclosure (e.g. CIBJO, ISO) are used by major laboratories. Treatment disclosure (heating, filling, etc.) is required in many markets. Origin is increasingly requested for ethical and regulatory reasons. Consistency and recognition of lab credentials affect market acceptance.` },
    { title: 'Markets and Access', content: `Certified stones access premium jewelry and collector markets. Export to OECD and other regulated markets often benefits from certification. Ethical sourcing and traceability align with brand and regulatory requirements. Investment in in-country or partnership lab capacity supports sector development.` },
    { title: 'Development', content: `Expansion of certification capacity (in-country lab or partnership with international labs) supports sector growth. Training of gemologists and lab staff builds capacity. Government and sector initiatives for certification and origin documentation strengthen market access.` },
    [
      { value: 'GIA, AGS', label: 'Labs', description: 'Recognized' },
      { value: 'Quality', label: 'Documents', description: 'Treatment, origin' },
      { value: 'Premium', label: 'Pricing', description: 'Certified stones' },
      { value: 'Origin', label: 'Ethical', description: 'Sourcing' },
      { value: 'CIBJO', label: 'Standards', description: 'Grading' },
      { value: 'Disclosure', label: 'Treatment', description: 'Required' },
    ],
    [
      { year: '2000s', event: 'Gem certification engagement' },
      { year: '2015', event: 'Origin and ethical sourcing focus' },
      { year: '2025', event: 'In-country or partnership lab target' },
      { year: '2028', event: 'Certified export flow' },
      { year: '2030', event: 'Sustainably certified Afghan gems' },
    ],
    [
      { name: 'Gems Cutting', href: '/minerals/gems/cutting' },
      { name: 'Gems Trade', href: '/minerals/gems/trade' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Investment Framework', href: '/investment/framework' },
    ],
    goldMining
  ),
  'gems/trade': fullEntry(
    'International Gem Trade',
    'Afghan Gems in Global Markets',
    `Afghan gemstones are traded internationally through dealers, auctions, and jewelry supply chains. Lapis lazuli, emerald, ruby, and other stones reach global markets; traceability and ethical sourcing are increasingly important. Rough and cut stones are exported through approved channels; relationships with international buyers support sustainable trade. Transparent and responsible supply chains support premium positioning and access to ethical markets. Challenges include informal trade, pricing, and competition; certification and origin documentation strengthen position.`,
    { title: 'Trade Channels', content: `Rough and cut stones are exported through approved channels (export permits, documentation). Dealers, auctions (e.g. specialized gem auctions), and jewelry supply chains connect Afghan production to global markets. Relationships with international buyers support sustainable trade and price discovery. Digital platforms and trade fairs support market access.` },
    { title: 'Ethical Sourcing', content: `Transparent and responsible supply chains support premium positioning and access to ethical markets. Origin documentation and chain-of-custody align with OECD and brand requirements. Certification (gems/certification) supports credibility. Community benefits and formalization support long-term sector sustainability.` },
    { title: 'Markets and Demand', content: `Lapis, emerald, ruby, and other Afghan stones reach jewelry and collector markets globally. Demand for ethically sourced and traceable gems is growing. Premium positioning (origin, certification) differentiates Afghan gems. Regional (Gulf, India) and Western markets are key destinations.` },
    { title: 'Development and Investment', content: `Formalization of trade (permits, documentation, taxation) supports government revenue and sector sustainability. Investment in certification, logistics, and market development strengthens export performance. Partnership with international dealers and brands can secure offtake. Government support for gem sector development applies.` },
    [
      { value: 'Lapis, Emerald', label: 'Stones', description: 'Ruby, others' },
      { value: 'Dealers, Auctions', label: 'Channels', description: 'Jewelry chains' },
      { value: 'Traceability', label: 'Focus', description: 'Ethical sourcing' },
      { value: 'Premium', label: 'Positioning', description: 'Origin, certification' },
      { value: 'Global', label: 'Markets', description: 'Jewelry, collectors' },
      { value: 'Formalization', label: 'Goal', description: 'Trade support' },
    ],
    [
      { year: 'Traditional', event: 'Gem trade routes' },
      { year: '2000s', event: 'International trade expansion' },
      { year: '2020', event: 'Ethical sourcing and certification push' },
      { year: '2025', event: 'Structured trade and documentation' },
      { year: '2030', event: 'Sustainably traded Afghan gems' },
    ],
    [
      { name: 'Gems Cutting', href: '/minerals/gems/cutting' },
      { name: 'Gems Certification', href: '/minerals/gems/certification' },
      { name: 'Gold Exports', href: '/minerals/gold/exports' },
      { name: 'Marble Trade', href: '/minerals/marble/trade' },
      { name: 'Operations Trade', href: '/operations/trade' },
    ],
    goldMining
  ),
  'gypsum-limestone/cement': fullEntry(
    'Cement Production Materials',
    'Gypsum and Limestone for Cement',
    `Gypsum and limestone are essential raw materials for cement production. Limestone provides calcium (CaCO3 → CaO in kiln); gypsum (added to clinker at grinding) controls set time. Afghanistan's deposits supply existing and planned cement plants. Quality and proximity to plants are key; integrated quarry development supports the construction sector. Cement demand drives development of gypsum and limestone quarries; reserves in multiple provinces support growth.`,
    { title: 'Cement Raw Materials', content: `Limestone provides calcium (typically 80–85% of raw mix); gypsum (3–5% of clinker) controls set time. Quality (CaO, MgO, alkalis for limestone; purity for gypsum) and proximity to plants are key. Blending and quarry planning ensure consistent feed. Afghan cement plants source from local quarries where possible.` },
    { title: 'Sector Growth', content: `Cement demand (domestic construction, regional export) drives development of gypsum and limestone quarries. New cement capacity requires secure raw material supply; integrated development (quarry + plant) reduces cost and risk. Government support for construction and cement sector aligns with quarry development.` },
    { title: 'Environmental and Quarry Management', content: `Quarrying for cement raw materials follows environmental and land-use standards. Rehabilitation and closure planning apply. Dust and blasting (if used) are managed. Community engagement and local employment support social license. Water use in cement production is considered in integrated planning.` },
    { title: 'Investment and Supply', content: `Investment in quarry capacity and logistics supports cement plant supply. Long-term reserve assessment ensures plant life. Integration with cement producers (captive or dedicated supply) supports bankability. Regional cement growth (Pakistan, Iran) could absorb additional Afghan limestone/gypsum if export is viable.` },
    [
      { value: 'Limestone', label: 'Primary', description: 'Calcium source' },
      { value: 'Gypsum', label: 'Additive', description: 'Set control' },
      { value: 'Quality', label: 'Key', description: 'Proximity' },
      { value: 'Cement', label: 'Demand', description: 'Drives quarries' },
      { value: 'Integrated', label: 'Development', description: 'Quarry + plant' },
      { value: 'Reserves', label: 'Support', description: 'Growth' },
    ],
    [
      { year: '1960s', event: 'Soviet cement and quarry surveys' },
      { year: '2000s', event: 'Cement sector expansion' },
      { year: '2025', event: 'Quarry and cement capacity growth' },
      { year: '2028', event: 'Structured raw material supply' },
      { year: '2030', event: 'Sustainably supplied cement materials' },
    ],
    [
      { name: 'Limestone Quarries', href: '/minerals/limestone/quarries' },
      { name: 'Gypsum Deposits', href: '/minerals/gypsum/deposits' },
      { name: 'Gypsum-Limestone Construction', href: '/minerals/gypsum-limestone/construction' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Investment Opportunities', href: '/investment/opportunities' },
    ],
    marbleQuarry
  ),
  'gypsum-limestone/construction': fullEntry(
    'Construction Materials',
    'Gypsum and Limestone in Construction',
    `Gypsum and limestone are used directly in construction as plaster, plasterboard, aggregate, and dimension stone. Gypsum plaster and board; limestone aggregate and building stone. Afghan resources support domestic construction and regional export. Local supply reduces cost and supports construction sector development. Quality (e.g. gypsum purity, limestone strength) and logistics affect economics.`,
    { title: 'Construction Use', content: `Gypsum plaster and board (drywall) for interior walls and ceilings; limestone as aggregate (concrete, road base) and building stone (dimension stone, cladding). Both materials are widely used in domestic and regional construction. Quality specifications (e.g. gypsum set time, limestone gradation) are standard.` },
    { title: 'Supply', content: `Local supply reduces cost and supports construction sector development. Quarry development is aligned with construction growth. Transport and logistics affect delivered price. Regional export (Pakistan, Iran) is possible for aggregate and dimension stone.` },
    { title: 'Environmental and Quarry', content: `Quarrying follows environmental and land-use standards. Rehabilitation and dust control apply. Community benefits and local employment support social license. Sustainable supply (reserve management, rehabilitation) supports long-term sector development.` },
    { title: 'Markets and Investment', content: `Domestic construction (residential, commercial, infrastructure) is primary market. Regional export supplements demand. Investment in quarry capacity and logistics supports supply. Government support for construction materials and infrastructure applies.` },
    [
      { value: 'Plaster', label: 'Gypsum', description: 'Board, plaster' },
      { value: 'Aggregate', label: 'Limestone', description: 'Building stone' },
      { value: 'Local', label: 'Supply', description: 'Reduces cost' },
      { value: 'Construction', label: 'Sector', description: 'Domestic, regional' },
      { value: 'Quality', label: 'Specs', description: 'Standard' },
      { value: 'Export', label: 'Optional', description: 'Regional' },
    ],
    [
      { year: '1960s', event: 'Construction material surveys' },
      { year: '2000s', event: 'Construction sector growth' },
      { year: '2025', event: 'Quarry and supply expansion' },
      { year: '2028', event: 'Structured supply to construction' },
      { year: '2030', event: 'Sustainably supplied construction materials' },
    ],
    [
      { name: 'Gypsum Deposits', href: '/minerals/gypsum/deposits' },
      { name: 'Limestone Quarries', href: '/minerals/limestone/quarries' },
      { name: 'Gypsum-Limestone Cement', href: '/minerals/gypsum-limestone/cement' },
      { name: 'Marble Processing', href: '/minerals/marble/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    marbleQuarry
  ),
  'talc-barite/industrial': fullEntry(
    'Talc and Barite Industrial Applications',
    'Industrial Minerals for Multiple Sectors',
    `Talc and barite from Afghanistan serve diverse industrial applications: talc in paper, plastics, cosmetics, and pharmaceuticals; barite in drilling mud, chemicals, and fillers. Both minerals have broad industrial use; quality grades command premium prices. Combined or coordinated development can optimize logistics and shared infrastructure (power, transport, processing); co-located or regional clustering can reduce costs and support regional industrial growth.`,
    { title: 'Industrial Sectors', content: `Talc: paper (filler, coating), plastics (nucleation, reinforcement), cosmetics (powder, masks), pharmaceuticals. Barite: drilling mud (API grade), chemicals (barium compounds), fillers (paint, plastics). Both have broad industrial use; quality grades command premium prices. Afghan production can supply domestic and regional industrial consumers.` },
    { title: 'Integrated Development', content: `Co-located or coordinated development can reduce costs (shared power, transport, admin) and support regional industrial growth. Processing (milling, classification) may share equipment or logistics. Marketing and offtake can be coordinated for industrial mineral clusters. Government support for industrial mineral value addition applies.` },
    { title: 'Quality and Certification', content: `Talc grades (industrial, cosmetic, pharmaceutical) and barite grades (API, chemical) require specific quality and certification. Processing and quality control ensure consistency. Certification (e.g. API 13A for barite, COSMOS for cosmetic talc) supports market access.` },
    { title: 'Markets and Investment', content: `Domestic and regional paper, plastics, drilling, and chemical industries are potential offtakers. Investment in processing capacity (talc and/or barite) supports supply. Partnership with industrial consumers can secure offtake. Timeline depends on deposit development and market engagement.` },
    [
      { value: 'Talc', label: 'Uses', description: 'Paper, plastics, cosmetic' },
      { value: 'Barite', label: 'Uses', description: 'Drilling, chemical' },
      { value: 'Premium', label: 'Grades', description: 'Quality' },
      { value: 'Integrated', label: 'Development', description: 'Shared infra' },
      { value: 'Regional', label: 'Growth', description: 'Industrial' },
      { value: 'Certification', label: 'Support', description: 'Market access' },
    ],
    [
      { year: '2000s', event: 'Talc and barite industrial development' },
      { year: '2015', event: 'Grade and certification expansion' },
      { year: '2025', event: 'Cluster and capacity target' },
      { year: '2028', event: 'Structured industrial supply' },
      { year: '2030', event: 'Sustainably supplied talc and barite' },
    ],
    [
      { name: 'Talc Processing', href: '/minerals/talc/processing' },
      { name: 'Barite Concentrates', href: '/minerals/barite/concentrates' },
      { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Province Bamyan', href: '/provinces/bamyan' },
    ],
    barite
  ),

  'sulfur/deposits': fullEntry(
    'Sulfur Deposits',
    'Native Sulfur and Sulfide Resources',
    `Afghanistan hosts sulfur and sulfide resources used in fertilizer, chemicals, and acid production. Native sulfur and pyrite occurrences support potential development for agricultural and industrial markets. Sulfur occurs in volcanic and sedimentary settings; assessment supports feasibility for extraction and processing. Sulfur is used in sulfuric acid, fertilizer (e.g. phosphate acidulation), and chemicals; demand is tied to agriculture and industry. Development could supply domestic acid demand (e.g. for copper leaching, fertilizer) and regional markets.`,
    { title: 'Sulfur Resources', content: `Sulfur occurs in volcanic (fumaroles, native sulfur) and sedimentary settings; sulfide ores (pyrite, etc.) are alternative feedstock. Assessment (mapping, drilling, metallurgy) supports feasibility for extraction and processing. Native sulfur may be mined by Frasch or conventional methods; sulfides by flotation or roasting. Quality and scale determine economics.` },
    { title: 'Applications', content: `Sulfur is used in sulfuric acid (contact process), fertilizer (sulfuric acid for phosphate rock), and chemicals. Demand is tied to agriculture (fertilizer) and industry (acid, chemicals). Afghan sulfur could supply domestic fertilizer and leaching (copper) and regional acid/fertilizer markets.` },
    { title: 'Environmental and Processing', content: `Sulfur mining and acid production have environmental considerations (SO2 emissions, waste). Best practice (double contact acid plants, emission controls) applies. Worker safety (SO2, acids) is managed. Permitting and community engagement are part of project development.` },
    { title: 'Development and Investment', content: `Feasibility depends on resource size/quality, acid/fertilizer demand, and logistics. Integration with phosphate (fertilizer) or copper (leaching) can anchor demand. Timeline depends on permitting and offtake. Government support for fertilizer and industrial development may apply.` },
    [
      { value: 'Native', label: 'Sulfur', description: 'And sulfide' },
      { value: 'Acid', label: 'Use', description: 'Fertilizer, chemicals' },
      { value: 'Volcanic', label: 'Setting', description: 'Sedimentary' },
      { value: 'Assessment', label: 'Status', description: 'Feasibility' },
      { value: 'Domestic', label: 'Market', description: 'Regional' },
      { value: 'Fertilizer', label: 'Link', description: 'Phosphate' },
    ],
    [
      { year: '1960s', event: 'Soviet sulfur resource surveys' },
      { year: '2000s', event: 'Sulfur and acid feasibility' },
      { year: '2025', event: 'Development target if bankable' },
      { year: '2028', event: 'Potential production' },
      { year: '2030', event: 'Supply to acid and fertilizer if developed' },
    ],
    [
      { name: 'Sulfur Fertilizer', href: '/minerals/sulfur/fertilizer' },
      { name: 'Sulfur Acid', href: '/minerals/sulfur/acid' },
      { name: 'Pyrite Resources', href: '/minerals/pyrite/resources' },
      { name: 'Phosphate Deposits', href: '/minerals/phosphate/deposits' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ],
    copperMine
  ),
  'pyrite/resources': fullEntry('Pyrite Resources', 'Iron Sulfide for Acid and By-Products', `Pyrite (iron sulfide) resources in Afghanistan can be processed to produce sulfuric acid and iron oxide. Pyrite occurs with other sulfides in base metal and gold deposits; standalone or by-product recovery is possible. Roasting and acid plants can convert pyrite to SO2 (then acid) and iron oxide. Development could support acid production for fertilizer and copper leaching. Assessment of pyrite resources (occurrence, grade, metallurgy) is ongoing.`, { title: 'Pyrite Geology', content: `Pyrite is common in base metal (e.g. VMS) and gold deposits. Standalone pyrite deposits or by-product from flotation concentrates can feed acid plants. Mineralogy and liberation affect recovery. Afghan occurrences are being assessed for scale and quality.` }, { title: 'Processing', content: `Roasting (fluidized bed, etc.) oxidizes pyrite to SO2 and iron oxide; gas cleaning and contact process produce sulfuric acid. Iron oxide residue may be sold or stored. Technology is well established. Integration with fertilizer (acid offtake) or mining (leaching) improves economics.` }, { title: 'Environmental and Standards', content: `Roasting and acid production require emission controls (SO2, particulates). Waste (iron residue) is managed. Best available techniques apply. Permitting and community engagement are part of project development.` }, { title: 'Markets and Development', content: `Acid offtake can be fertilizer (phosphate acidulation), copper leaching, or chemical. Afghan pyrite could feed regional acid demand if resource and economics align. Timeline depends on resource confirmation and offtake.` }, [{ value: 'Acid', label: 'Product', description: 'Iron oxide' }, { value: 'Base Metal', label: 'Occurrence', description: 'Gold deposits' }, { value: 'Roasting', label: 'Process', description: 'Contact acid' }, { value: 'Fertilizer', label: 'Offtake', description: 'Leaching' }, { value: 'Assessment', label: 'Status', description: 'Ongoing' }, { value: 'Regional', label: 'Market', description: 'Acid demand' }], [{ year: '1960s', event: 'Pyrite identification' }, { year: '2000s', event: 'Acid and fertilizer feasibility' }, { year: '2025', event: 'Resource and offtake target' }, { year: '2028', event: 'Potential production' }, { year: '2030', event: 'Supply if developed' }], [{ name: 'Sulfur Deposits', href: '/minerals/sulfur/deposits' }, { name: 'Sulfur Acid', href: '/minerals/sulfur/acid' }, { name: 'Pyrite Processing', href: '/minerals/pyrite/processing' }, { name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Operations Processing', href: '/operations/processing' }], copperMine),
  'sulfur/fertilizer': fullEntry('Sulfur for Fertilizer', 'Fertilizer and Agricultural Sulfur', `Sulfur is essential for fertilizer production (e.g. phosphate fertilizers). Sulfuric acid is used to process phosphate rock into phosphoric acid and fertilizers (DAP, MAP, etc.). Afghan sulfur and acid production could supply domestic and regional fertilizer plants. Regional agriculture drives demand for fertilizer and sulfur; food security and crop yields depend on fertilizer availability. Integration with phosphate deposits (e.g. Afghan phosphate) supports integrated fertilizer development.`, { title: 'Fertilizer Use', content: `Sulfuric acid is used to process phosphate rock into fertilizer. Acidulation produces phosphoric acid; granulation produces DAP, MAP, or other formulations. Sulfur is also used in some direct application fertilizers. Afghan acid could supply domestic or regional fertilizer plants.` }, { title: 'Markets', content: `Regional agriculture drives demand for fertilizer and sulfur. Pakistan, Iran, and domestic Afghan agriculture are key markets. Fertilizer demand is relatively stable and growing with population and intensification. Long-term offtake supports acid project economics.` }, { title: 'Integration with Phosphate', content: `Integrated fertilizer development (sulfur/acid + phosphate) can optimize logistics and capture value. Afghan phosphate deposits and sulfur resources could support local fertilizer production. Government support for fertilizer and food security aligns with development.` }, { title: 'Development', content: `Acid production (from sulfur or pyrite) with fertilizer offtake is a potential project configuration. Feasibility depends on acid cost, phosphate supply, and fertilizer market. Timeline depends on permitting and offtake agreements.` }, [{ value: 'Acid', label: 'Role', description: 'Phosphate acidulation' }, { value: 'DAP, MAP', label: 'Products', description: 'Fertilizer' }, { value: 'Agriculture', label: 'Demand', description: 'Regional' }, { value: 'Phosphate', label: 'Link', description: 'Integrated' }, { value: 'Food Security', label: 'Impact', description: 'Crop yields' }, { value: 'Regional', label: 'Markets', description: 'Pakistan, Iran' }], [{ year: '2000s', event: 'Fertilizer demand growth' }, { year: '2020', event: 'Acid-fertilizer feasibility' }, { year: '2025', event: 'Integrated project target' }, { year: '2028', event: 'Potential fertilizer production' }, { year: '2030', event: 'Supply if developed' }], [{ name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Sulfur Acid', href: '/minerals/sulfur/acid' }, { name: 'Sulfur Deposits', href: '/minerals/sulfur/deposits' }, { name: 'Phosphate Deposits', href: '/minerals/phosphate/deposits' }, { name: 'Operations Processing', href: '/operations/processing' }], copperMine),
  'sulfur/chemical': fullEntry('Sulfur Chemical Applications', 'Sulfur for Chemical Industry', `Sulfur and sulfuric acid feed the chemical industry for catalysts, batteries, and other products. Sulfuric acid is a key chemical feedstock. Afghan supply could serve regional chemical manufacturers. Local acid production supports industrial development and import substitution. Chemical offtake (in addition to fertilizer and leaching) can diversify demand and improve project economics.`, { title: 'Chemical Use', content: `Sulfuric acid is used in catalysts, battery (e.g. lead-acid) production, and other chemical processes. Regional chemical manufacturers are potential offtakers. Quality (purity, concentration) and consistency are required. Diversification of offtake (chemical plus fertilizer, leaching) supports bankability.` }, { title: 'Supply', content: `Local acid production supports industrial development. Import substitution improves balance of payments. Partnership with chemical consumers can secure offtake. Logistics and price competitiveness affect market share.` }, { title: 'Quality and Standards', content: `Chemical grade acid may require specific purity. Documentation and testing support customer acceptance. Environmental and safety standards for acid production and transport apply.` }, { title: 'Development', content: `Chemical offtake can be part of multi-use acid project (fertilizer, leaching, chemical). Feasibility depends on acid cost and regional chemical demand. Timeline aligns with acid project development.` }, [{ value: 'Feedstock', label: 'Role', description: 'Chemical' }, { value: 'Catalysts', label: 'Use', description: 'Batteries' }, { value: 'Regional', label: 'Markets', description: 'Chemical manufacturers' }, { value: 'Local', label: 'Supply', description: 'Industrial development' }, { value: 'Diversify', label: 'Offtake', description: 'Multi-use' }, { value: 'Quality', label: 'Requirement', description: 'Purity' }], [{ year: '2000s', event: 'Chemical demand assessment' }, { year: '2025', event: 'Acid and chemical offtake target' }, { year: '2028', event: 'Potential supply' }, { year: '2030', event: 'Supply if developed' }], [{ name: 'Sulfur Acid', href: '/minerals/sulfur/acid' }, { name: 'Sulfur Deposits', href: '/minerals/sulfur/deposits' }, { name: 'Pyrite Processing', href: '/minerals/pyrite/processing' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Framework', href: '/investment/framework' }], copperMine),
  'sulfur/acid': fullEntry('Sulfuric Acid Production', 'Acid for Leaching and Industry', `Sulfuric acid production in Afghanistan would support copper and other leaching operations and supply fertilizer and chemical plants. Acid can be produced from sulfur (burning) or pyrite (roasting) via contact process (SO2 to SO3 to H2SO4). Acid plants can be integrated with mining (e.g. copper SX-EW), fertilizer (phosphate acidulation), or chemical projects. Double contact plants achieve high conversion and low emissions.`, { title: 'Acid Production', content: `Contact process converts SO2 to sulfuric acid. Feedstock from sulfur (burned to SO2) or pyrite (roasted to SO2 and iron oxide). Double contact/double absorption achieves high conversion. Product is typically 98% acid. Technology is mature and scalable.` }, { title: 'Integration', content: `Acid plants can be integrated with mining (copper heap leach SX-EW consumes acid), fertilizer (phosphate acidulation), or chemical projects. Captive offtake improves economics. Location (near mine, near fertilizer plant) affects logistics.` }, { title: 'Environmental and Safety', content: `SO2 emissions are controlled by conversion efficiency and tail gas treatment. Worker safety (acid, SO2) is managed. Spent acid or by-products may require handling. Best available techniques and permitting apply.` }, { title: 'Markets and Development', content: `Primary offtake can be copper leaching (Mes Aynak, other), fertilizer, or chemical. Multi-use offtake improves project economics. Feasibility depends on feedstock (sulfur/pyrite) cost and offtake volume. Timeline depends on mining/fertilizer project development.` }, [{ value: 'Contact', label: 'Process', description: 'SO2 to acid' }, { value: 'Sulfur, Pyrite', label: 'Feedstock', description: 'Either' }, { value: 'Leaching', label: 'Use', description: 'Fertilizer, chemical' }, { value: 'Integrated', label: 'Model', description: 'With mining/fertilizer' }, { value: 'Double Contact', label: 'Technology', description: 'Low emissions' }, { value: 'Captive', label: 'Offtake', description: 'Improves economics' }], [{ year: '2000s', event: 'Acid project feasibility' }, { year: '2020', event: 'Copper and fertilizer linkage' }, { year: '2025', event: 'Acid plant development target' }, { year: '2028', event: 'Commissioning if bankable' }, { year: '2030', event: 'Acid supply to leaching and fertilizer' }], [{ name: 'Sulfur Deposits', href: '/minerals/sulfur/deposits' }, { name: 'Pyrite Processing', href: '/minerals/pyrite/processing' }, { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' }, { name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Operations Processing', href: '/operations/processing' }], copperMine),
  'sulfur/mining': fullEntry('Sulfur Mining Operations', 'Sulfur Extraction and Processing', `Sulfur mining extracts native sulfur or processes sulfide ores (e.g. pyrite). Native sulfur may be extracted by Frasch (hot water) or conventional mining; sulfides by flotation or direct roasting. Operations must meet environmental standards for emissions, waste, and rehabilitation. Worker safety (H2S, SO2 in some settings) is critical. Afghan sulfur/pyrite resources could support acid production if developed.`, { title: 'Mining Methods', content: `Native sulfur may be extracted by Frasch (injection of hot water, molten sulfur recovery) or conventional (open pit, underground). Sulfide ores are typically concentrated by flotation then roasted, or run-of-mine may be roasted. Method depends on deposit type and scale.` }, { title: 'Environmental', content: `Emissions control (SO2, H2S) and waste management are critical. Rehabilitation of mined areas is required. Water use (Frasch) or tailings (flotation) are managed. Permitting and monitoring ensure compliance. Community engagement supports social license.` }, { title: 'Processing Link', content: `Sulfur mining feeds acid production (burning) or pyrite concentrate feeds roasting. Integration with acid plant optimizes logistics. Quality (purity for native sulfur; grade for pyrite) affects downstream economics.` }, { title: 'Development', content: `Feasibility depends on resource size, quality, and acid/fertilizer offtake. Timeline aligns with acid project. Government support for fertilizer and industrial development may apply.` }, [{ value: 'Native', label: 'Sulfur', description: 'Frasch or conventional' }, { value: 'Sulfide', label: 'Ores', description: 'Flotation, roasting' }, { value: 'Emissions', label: 'Control', description: 'Critical' }, { value: 'Acid', label: 'Link', description: 'Production' }, { value: 'Rehabilitation', label: 'Requirement', description: 'Mined area' }, { value: 'Safety', label: 'Worker', description: 'H2S, SO2' }], [{ year: '1960s', event: 'Sulfur resource surveys' }, { year: '2000s', event: 'Mining and acid feasibility' }, { year: '2025', event: 'Development target' }, { year: '2028', event: 'Potential production' }, { year: '2030', event: 'Supply if developed' }], [{ name: 'Sulfur Deposits', href: '/minerals/sulfur/deposits' }, { name: 'Sulfur Acid', href: '/minerals/sulfur/acid' }, { name: 'Pyrite Resources', href: '/minerals/pyrite/resources' }, { name: 'Operations Sustainability', href: '/operations/sustainability' }, { name: 'Investment Framework', href: '/investment/framework' }], copperMine),
  'sulfur/agricultural': fullEntry('Sulfur for Agriculture', 'Agricultural Sulfur Applications', `Sulfur is used in agriculture as nutrient (soil amendment, crop requirement) and in pesticide formulations. Afghan sulfur can supply domestic and regional agricultural markets. Farmers and agro-industry are key customers. Soil sulfur deficiency is common in some regions; supplementation improves yield and quality. Direct application or via fertilizer (e.g. ammonium sulfate) are channels.`, { title: 'Agricultural Use', content: `Soil amendment (elemental sulfur or sulfate) addresses sulfur deficiency. Pesticide production uses sulfur in some formulations. Crop demand for sulfur (protein, oil) drives application. Afghan sulfur (refined or as by-product) can supply domestic and regional markets.` }, { title: 'Markets', content: `Farmers and agro-industry are key customers. Distribution may be through agro-dealers or fertilizer blenders. Regional agriculture (Pakistan, Iran) has similar demand. Quality (purity, form) and price affect market share.` }, { title: 'Supply and Logistics', content: `Local sulfur production (from mining or by-product) reduces import dependence. Logistics (to rural markets) affect accessibility. Partnership with agro-distributors can secure distribution. Integration with fertilizer sector supports combined product.` }, { title: 'Development', content: `Agricultural sulfur offtake can be part of sulfur project economics. Demand is relatively stable. Timeline depends on sulfur production development. Government support for agriculture and fertilizer applies.` }, [{ value: 'Nutrient', label: 'Role', description: 'Soil amendment' }, { value: 'Pesticide', label: 'Use', description: 'Formulations' }, { value: 'Farmers', label: 'Customers', description: 'Agro-industry' }, { value: 'Regional', label: 'Markets', description: 'Domestic, regional' }, { value: 'Yield', label: 'Impact', description: 'Crop quality' }, { value: 'Distribution', label: 'Channel', description: 'Agro-dealers' }], [{ year: '2000s', event: 'Agricultural sulfur demand' }, { year: '2025', event: 'Supply target if sulfur developed' }, { year: '2028', event: 'Structured agricultural supply' }, { year: '2030', event: 'Sustainably supplied agricultural sulfur' }], [{ name: 'Sulfur Fertilizer', href: '/minerals/sulfur/fertilizer' }, { name: 'Phosphate Agricultural', href: '/minerals/phosphate/agricultural' }, { name: 'Sulfur Deposits', href: '/minerals/sulfur/deposits' }, { name: 'Operations Sustainability', href: '/operations/sustainability' }, { name: 'Investment Opportunities', href: '/investment/opportunities' }], copperMine),
  'pyrite/processing': fullEntry('Pyrite Processing', 'Pyrite to Acid and Iron', `Pyrite processing roasts concentrate to produce SO2 for acid and iron oxide. Fluidized bed or other roasting; gas cleaning and contact acid plant. Technology is well established; Afghan pyrite could feed regional acid demand. Products are sulfuric acid and iron oxide (or residue). Integration with fertilizer or leaching offtake improves economics.`, { title: 'Processing Technology', content: `Fluidized bed or other roasting oxidizes pyrite to SO2 and iron oxide. Gas cleaning (dust, etc.) precedes contact plant. Contact process converts SO2 to sulfuric acid. Iron oxide residue may be sold (e.g. pigment, cement) or stored. Technology is mature.` }, { title: 'Products', content: `Sulfuric acid (primary product) and iron oxide or residue (by-product). Acid offtake (fertilizer, leaching, chemical) drives economics. Iron oxide may have market (pigment, cement) or require disposal.` }, { title: 'Environmental and Quality', content: `Roasting emissions (SO2, particulates) are controlled. Residue handling and storage are managed. Product quality (acid concentration, purity) meets offtaker specs. Permitting and monitoring apply.` }, { title: 'Markets and Development', content: `Afghan pyrite could feed regional acid demand. Feasibility depends on pyrite supply (from pyrite/resources), acid offtake, and logistics. Timeline aligns with resource development and offtake agreements.` }, [{ value: 'Roasting', label: 'Process', description: 'Fluidized bed' }, { value: 'Acid', label: 'Product', description: 'Iron oxide' }, { value: 'Established', label: 'Technology', description: 'Mature' }, { value: 'Regional', label: 'Market', description: 'Acid demand' }, { value: 'Fertilizer', label: 'Offtake', description: 'Leaching' }, { value: 'Integration', label: 'Economics', description: 'Offtake' }], [{ year: '2000s', event: 'Pyrite processing feasibility' }, { year: '2025', event: 'Resource and offtake target' }, { year: '2028', event: 'Potential production' }, { year: '2030', event: 'Acid supply if developed' }], [{ name: 'Pyrite Resources', href: '/minerals/pyrite/resources' }, { name: 'Sulfur Acid', href: '/minerals/sulfur/acid' }, { name: 'Sulfur Deposits', href: '/minerals/sulfur/deposits' }, { name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Operations Processing', href: '/operations/processing' }], copperMine),
  'mica/deposits': fullEntry('Mica Deposits', 'Sheet Mica and Scrap Mica Resources', `Afghanistan's mica deposits supply sheet mica for electronics and scrap mica for paint and construction. Mica occurs in pegmatites in Nuristan, Kunar, and other provinces. Muscovite and phlogopite mica; sheet and scrap grades. Electronics, paint, plastics, and construction use mica. Development could expand production; assessment and small-scale production are ongoing.`, { title: 'Mica Types', content: `Muscovite (white) and phlogopite (dark) mica; sheet (block split to thin sheets) and scrap (ground) grades. Sheet commands premium for electronics; scrap for paint, plastics, construction. Afghan pegmatites host both.` }, { title: 'Applications', content: `Electronics (capacitors, insulation), paint (extender, pearlescent), plastics (reinforcement), and construction use mica. Sheet for high-value electrical; scrap for volume applications. Regional and global demand exists.` }, { title: 'Resources and Geology', content: `Mica occurs in pegmatites (Nuristan, Kunar). Mining may be selective (sheet) or bulk (scrap). Beneficiation (splitting, grading, grinding) produces saleable product. Environmental and community considerations apply.` }, { title: 'Development and Markets', content: `Development could expand production. Assessment of deposits and quality is ongoing. Partnership with electronics and paint consumers can secure offtake. Government support for industrial minerals applies.` }, [{ value: 'Sheet + Scrap', label: 'Grades', description: 'Muscovite, phlogopite' }, { value: 'Pegmatites', label: 'Host', description: 'Nuristan, Kunar' }, { value: 'Electronics', label: 'Use', description: 'Paint, plastics' }, { value: 'Premium', label: 'Sheet', description: 'High-value' }, { value: 'Assessment', label: 'Status', description: 'Ongoing' }, { value: 'Regional', label: 'Demand', description: 'Global' }], [{ year: '1960s', event: 'Soviet mica surveys' }, { year: '2000s', event: 'Small-scale mica production' }, { year: '2025', event: 'Development target' }, { year: '2028', event: 'Structured production' }, { year: '2030', event: 'Sustainably supplied mica' }], [{ name: 'Mica Electronics', href: '/minerals/mica/electronics' }, { name: 'Mica Sheets', href: '/minerals/mica/sheets' }, { name: 'Mica Insulation', href: '/minerals/mica/insulation' }, { name: 'Feldspar Resources', href: '/minerals/feldspar/resources' }, { name: 'Province Nuristan', href: '/provinces/nuristan' }], partnership),
  'feldspar/resources': fullEntry('Feldspar Resources', 'Feldspar for Glass and Ceramics', `Feldspar resources in Afghanistan supply glass, ceramics, and filler markets. Feldspar is a key flux in ceramics and glass (alumina and alkalis); Afghan pegmatites host feldspar. Glass and ceramic industries are main consumers. Assessment and development could expand production for domestic and regional markets.`, { title: 'Feldspar Use', content: `Glass and ceramic industries are main consumers. Feldspar provides alumina and alkalis (K, Na) for glass and acts as flux in ceramics. Quality (chemistry, iron) determines application. Afghan feldspar is being assessed for glass and ceramic grade.` }, { title: 'Resources', content: `Pegmatites and other igneous rocks contain feldspar. Mining and beneficiation (crushing, grinding, magnetic separation) produce saleable product. Proximity to glass/ceramic plants affects economics. Multiple provinces host feldspar.` }, { title: 'Quality and Grades', content: `Glass grade requires low iron and consistent chemistry. Ceramic grade (body, glaze) has similar requirements. Filler and abrasive grades may tolerate higher iron. Testing supports customer acceptance.` }, { title: 'Development', content: `Assessment and development could expand production. Partnership with glass and ceramic producers can secure offtake. Investment in beneficiation improves product quality. Timeline depends on deposit qualification and market.` }, [{ value: 'Glass', label: 'Use', description: 'Ceramics' }, { value: 'Flux', label: 'Role', description: 'Alumina, alkalis' }, { value: 'Pegmatites', label: 'Host', description: 'Igneous' }, { value: 'Main', label: 'Consumers', description: 'Glass, ceramic' }, { value: 'Quality', label: 'Key', description: 'Chemistry, Fe' }, { value: 'Regional', label: 'Markets', description: 'Domestic' }], [{ year: '1960s', event: 'Feldspar surveys' }, { year: '2000s', event: 'Assessment and small-scale' }, { year: '2025', event: 'Development target' }, { year: '2028', event: 'Structured production' }, { year: '2030', event: 'Sustainably supplied feldspar' }], [{ name: 'Feldspar Glass', href: '/minerals/feldspar/glass' }, { name: 'Feldspar Ceramic', href: '/minerals/feldspar/ceramic' }, { name: 'Feldspar Abrasive', href: '/minerals/feldspar/abrasive' }, { name: 'Quartz Glass', href: '/minerals/quartz/glass' }, { name: 'Clay Ceramic', href: '/minerals/clay/ceramic' }], partnership),
  'mica/electronics': fullEntry('Mica for Electronics', 'Electronic Grade Mica', `Electronic-grade mica is used in capacitors and insulation. Afghan sheet mica with suitable electrical properties (dielectric strength, resistivity) can supply electronics manufacturers. Mica provides insulation and dielectric properties. Electrical grade requires strict quality control (purity, uniformity).`, { title: 'Electronic Applications', content: `Mica provides insulation and dielectric properties in capacitors, transformers, and electronic components. Sheet mica is used where high reliability is required. Quality (electrical properties, purity) is critical. Afghan sheet mica is being assessed for electronic grade.` }, { title: 'Quality', content: `Electrical grade requires strict quality control: dielectric strength, resistivity, purity (no conductive inclusions). Testing per industry standards. Consistency and documentation support manufacturer acceptance. Premium price justifies quality investment.` }, { title: 'Markets and Supply', content: `Electronics manufacturers (capacitors, insulation) are offtakers. Regional and global supply chains exist. Afghan production could supply regional electronics if quality is confirmed. Partnership with manufacturers supports specification alignment.` }, { title: 'Development', content: `Deposit qualification and electrical testing are ongoing. Investment in splitting and grading (for sheet) supports quality. Timeline depends on quality confirmation and market engagement.` }, [{ value: 'Capacitors', label: 'Use', description: 'Insulation' }, { value: 'Dielectric', label: 'Property', description: 'Electrical' }, { value: 'Strict', label: 'Quality', description: 'Control' }, { value: 'Sheet', label: 'Form', description: 'Premium' }, { value: 'Electronics', label: 'Markets', description: 'Manufacturers' }, { value: 'Testing', label: 'Requirement', description: 'Standards' }], [{ year: '2000s', event: 'Electronic mica assessment' }, { year: '2025', event: 'Grade qualification target' }, { year: '2028', event: 'Supply to electronics' }, { year: '2030', event: 'Sustainably supplied electronic mica' }], [{ name: 'Mica Deposits', href: '/minerals/mica/deposits' }, { name: 'Mica Sheets', href: '/minerals/mica/sheets' }, { name: 'Mica Insulation', href: '/minerals/mica/insulation' }, { name: 'REE Helmand', href: '/minerals/ree/helmand' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'feldspar/glass': fullEntry('Feldspar for Glass', 'Glass Industry Feldspar', `Feldspar is a key raw material for glass manufacturing (container, flat, specialty). Afghan feldspar can supply glass plants domestically and in the region. Feldspar provides alumina and alkalis for glass; consistent quality and supply support glass production.`, { title: 'Glass Use', content: `Feldspar provides alumina and alkalis (K2O, Na2O) for glass. Reduces melting temperature and improves workability. Quality (low iron, consistent chemistry) is required. Glass plants need reliable supply. Afghan feldspar is being tested for glass grade.` }, { title: 'Supply', content: `Consistent quality and supply support glass production. Long-term contracts are common. Logistics and price affect competitiveness. Domestic and regional (Pakistan, Iran) glass plants are potential offtakers.` }, { title: 'Quality and Processing', content: `Glass grade requires low Fe2O3, consistent alkalis and alumina. Beneficiation (grinding, magnetic separation) may be needed. Testing (melting behavior, chemistry) supports mill acceptance.` }, { title: 'Development', content: `Partnership with glass producers can secure offtake. Investment in beneficiation supports quality. Timeline depends on deposit qualification and supply agreement.` }, [{ value: 'Alumina', label: 'Provides', description: 'Alkalis' }, { value: 'Glass', label: 'Industry', description: 'Container, flat' }, { value: 'Consistent', label: 'Quality', description: 'Supply' }, { value: 'Low Fe', label: 'Requirement', description: 'Chemistry' }, { value: 'Regional', label: 'Markets', description: 'Pakistan, Iran' }, { value: 'Long-term', label: 'Contracts', description: 'Common' }], [{ year: '2000s', event: 'Feldspar for glass assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied glass feldspar' }], [{ name: 'Feldspar Resources', href: '/minerals/feldspar/resources' }, { name: 'Quartz Glass', href: '/minerals/quartz/glass' }, { name: 'Silica Sand', href: '/minerals/silica/sand' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Opportunities', href: '/investment/opportunities' }], partnership),
  'mica/sheets': fullEntry('Mica Sheets', 'Sheet Mica Production', `Sheet mica is split from block mica and used in high-value applications (electronics, aerospace). Afghan production can supply electronics and specialty markets. Splitting and grading produce sheet mica. Electronics and aerospace use sheet mica for insulation and dielectric applications.`, { title: 'Sheet Production', content: `Splitting and grading produce sheet mica from block. Manual or semi-automated splitting achieves thin, uniform sheets. Grading by size, quality, and electrical properties. High skill requirement; quality commands premium.` }, { title: 'Markets', content: `Electronics and aerospace use sheet mica. Capacitors, insulation, and specialty components are applications. Afghan production could supply regional electronics if quality is confirmed. Premium price supports investment in skill and equipment.` }, { title: 'Quality and Value', content: `Sheet mica commands much higher price than scrap. Quality (uniformity, electrical properties, size) determines grade. Certification and testing support manufacturer acceptance.` }, { title: 'Development', content: `Training in splitting and grading supports sector. Investment in equipment improves productivity. Partnership with electronics manufacturers can secure offtake. Timeline depends on quality and market engagement.` }, [{ value: 'Split', label: 'Process', description: 'From block' }, { value: 'Electronics', label: 'Use', description: 'Aerospace' }, { value: 'Premium', label: 'Price', description: 'High-value' }, { value: 'Grading', label: 'Quality', description: 'Size, properties' }, { value: 'Skill', label: 'Requirement', description: 'Splitting' }, { value: 'Regional', label: 'Markets', description: 'Electronics' }], [{ year: 'Traditional', event: 'Sheet mica production' }, { year: '2000s', event: 'Assessment and quality work' }, { year: '2025', event: 'Production and certification target' }, { year: '2028', event: 'Structured supply' }, { year: '2030', event: 'Sustainably supplied sheet mica' }], [{ name: 'Mica Deposits', href: '/minerals/mica/deposits' }, { name: 'Mica Electronics', href: '/minerals/mica/electronics' }, { name: 'Mica Insulation', href: '/minerals/mica/insulation' }, { name: 'Gems Cutting', href: '/minerals/gems/cutting' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'feldspar/ceramic': fullEntry('Feldspar for Ceramics', 'Ceramic Industry Feldspar', `Feldspar is essential in ceramic bodies and glazes (flux). Afghan feldspar can supply tile, sanitaryware, and tableware producers. Feldspar acts as flux in ceramics; ceramic grade requires consistent chemistry (K, Na, Al, low Fe).`, { title: 'Ceramic Use', content: `Feldspar acts as flux in ceramics (lowers firing temperature, improves vitrification). Used in body and glaze. Tile, sanitaryware, and tableware producers are consumers. Quality (chemistry, consistency) affects firing behavior and color.` }, { title: 'Quality', content: `Ceramic grade requires consistent chemistry (K2O, Na2O, Al2O3) and low iron. Testing (firing behavior, color) supports customer acceptance. Afghan feldspar is being assessed for ceramic grade.` }, { title: 'Markets and Supply', content: `Domestic and regional ceramic producers (Pakistan, Iran) are potential offtakers. Long-term supply and consistency support production. Logistics and price affect competitiveness.` }, { title: 'Development', content: `Partnership with ceramic producers can secure offtake. Investment in beneficiation supports quality. Timeline depends on deposit qualification and market.` }, [{ value: 'Flux', label: 'Role', description: 'Ceramics' }, { value: 'Body, Glaze', label: 'Use', description: 'Tile, sanitary' }, { value: 'Chemistry', label: 'Quality', description: 'Consistent' }, { value: 'Low Fe', label: 'Requirement', description: 'Ceramic grade' }, { value: 'Regional', label: 'Markets', description: 'Producers' }, { value: 'Firing', label: 'Behavior', description: 'Critical' }], [{ year: '2000s', event: 'Feldspar ceramic assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied ceramic feldspar' }], [{ name: 'Feldspar Resources', href: '/minerals/feldspar/resources' }, { name: 'Feldspar Glass', href: '/minerals/feldspar/glass' }, { name: 'Clay Ceramic', href: '/minerals/clay/ceramic' }, { name: 'Kaolin Deposits', href: '/minerals/kaolin/deposits' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'mica/insulation': fullEntry('Mica Insulation', 'Electrical and Thermal Insulation', `Mica is used for electrical and thermal insulation in appliances and industry. Afghan mica can supply insulation manufacturers. Mica provides high-temperature and electrical insulation. Heaters, motors, and electronics use mica insulation.`, { title: 'Insulation Use', content: `Mica provides high-temperature and electrical insulation. Used in heaters, motors, electronics, and industrial equipment. Sheet or reconstituted mica products. Afghan mica (sheet or scrap) could supply insulation manufacturers with suitable quality.` }, { title: 'Applications', content: `Heaters, motors, and electronics use mica insulation. Domestic appliances and industrial equipment are markets. Quality (thermal stability, dielectric strength) is required. Regional insulation manufacturers are potential offtakers.` }, { title: 'Quality and Supply', content: `Insulation grade requires thermal and electrical properties. Consistency and documentation support manufacturer acceptance. Afghan production could supply regional manufacturers if quality is confirmed.` }, { title: 'Development', content: `Partnership with insulation manufacturers can secure offtake. Overlap with electronics grade (same quality focus) can optimize qualification. Timeline depends on market engagement.` }, [{ value: 'Electrical', label: 'Insulation', description: 'Thermal' }, { value: 'Heaters', label: 'Use', description: 'Motors, electronics' }, { value: 'High-Temp', label: 'Property', description: 'Stability' }, { value: 'Sheet', label: 'Form', description: 'Reconstituted' }, { value: 'Regional', label: 'Markets', description: 'Manufacturers' }, { value: 'Quality', label: 'Key', description: 'Properties' }], [{ year: '2000s', event: 'Mica insulation assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied insulation mica' }], [{ name: 'Mica Deposits', href: '/minerals/mica/deposits' }, { name: 'Mica Electronics', href: '/minerals/mica/electronics' }, { name: 'Mica Sheets', href: '/minerals/mica/sheets' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Framework', href: '/investment/framework' }], partnership),
  'feldspar/abrasive': fullEntry('Feldspar for Abrasives', 'Abrasive and Filler Feldspar', `Feldspar is used in abrasives (adds hardness) and as filler. Afghan feldspar with suitable hardness and chemistry can supply abrasive and filler markets. Feldspar adds hardness to abrasive products; ground feldspar is used as filler in various applications.`, { title: 'Abrasive Use', content: `Feldspar adds hardness to abrasive products (e.g. bonded abrasives). Mohs hardness and chemistry affect performance. Afghan feldspar is being assessed for abrasive grade. Quality and consistency support manufacturer acceptance.` }, { title: 'Filler', content: `Ground feldspar is used as filler in paint, plastics, and other applications. Lower value than glass/ceramic grade but broad market. Particle size and chemistry are specified by customer.` }, { title: 'Markets and Supply', content: `Abrasive and filler markets are volume-oriented. Domestic and regional manufacturers are potential offtakers. Price competitiveness and logistics affect market share. May be outlet for lower-grade feldspar.` }, { title: 'Development', content: `Abrasive and filler offtake can complement glass/ceramic sales. Investment in grinding and classification supports product range. Timeline depends on deposit and market.` }, [{ value: 'Hardness', label: 'Property', description: 'Abrasive' }, { value: 'Filler', label: 'Use', description: 'Paint, plastics' }, { value: 'Ground', label: 'Form', description: 'Particle size' }, { value: 'Volume', label: 'Market', description: 'Abrasive, filler' }, { value: 'Chemistry', label: 'Quality', description: 'Suitable' }, { value: 'Lower Grade', label: 'Outlet', description: 'May use' }], [{ year: '2000s', event: 'Feldspar abrasive/filler assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied abrasive feldspar' }], [{ name: 'Feldspar Resources', href: '/minerals/feldspar/resources' }, { name: 'Feldspar Glass', href: '/minerals/feldspar/glass' }, { name: 'Feldspar Ceramic', href: '/minerals/feldspar/ceramic' }, { name: 'Talc Processing', href: '/minerals/talc/processing' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'graphite/deposits': fullEntry('Graphite Deposits', 'Flake and Amorphous Graphite', `Afghanistan hosts graphite occurrences suitable for battery, steel, and industrial applications. Graphite is critical for lithium-ion anodes and refractories. Flake graphite for batteries; amorphous for refractories. Battery demand drives interest in Afghan graphite. Assessment and development could supply regional battery and industrial markets.`, { title: 'Graphite Types', content: `Flake graphite (crystalline) for batteries and premium applications; amorphous (microcrystalline) for refractories and foundry. Quality (purity, flake size, morphology) determines end use. Afghan occurrences are being assessed for type and grade.` }, { title: 'Strategic Value', content: `Battery demand (EV, storage) drives interest in Afghan graphite. Steel (recarburizer, refractory), lubricant, and industrial applications also use graphite. Development could support domestic and regional supply chains.` }, { title: 'Resources and Geology', content: `Graphite occurs in metamorphic and igneous settings. Assessment includes mapping, drilling, and metallurgical testwork. Beneficiation (flotation, purification) may be needed for battery grade. Environmental and community considerations apply.` }, { title: 'Development and Markets', content: `Development could supply battery manufacturers and industrial consumers. Partnership with battery and steel producers can secure offtake. Timeline depends on resource confirmation and purification pathway. Government support for critical minerals applies.` }, [{ value: 'Flake', label: 'Type', description: 'Amorphous' }, { value: 'Battery', label: 'Use', description: 'Steel, refractory' }, { value: 'Strategic', label: 'Value', description: 'Critical mineral' }, { value: 'Assessment', label: 'Status', description: 'Ongoing' }, { value: 'Regional', label: 'Markets', description: 'Battery, industrial' }, { value: 'Purification', label: 'Pathway', description: 'Battery grade' }], [{ year: '1960s', event: 'Graphite surveys' }, { year: '2000s', event: 'Assessment and interest' }, { year: '2025', event: 'Development target' }, { year: '2028', event: 'Potential production' }, { year: '2030', event: 'Supply if developed' }], [{ name: 'Graphite Battery', href: '/minerals/graphite/battery' }, { name: 'Graphite Steel', href: '/minerals/graphite/steel' }, { name: 'Graphite Refractory', href: '/minerals/graphite/refractory' }, { name: 'Lithium Ghazni', href: '/minerals/lithium/ghazni' }, { name: 'REE Helmand', href: '/minerals/ree/helmand' }], partnership),
  'graphite/battery': fullEntry('Graphite for Batteries', 'Battery Anode Graphite', `Graphite is the dominant anode material in lithium-ion batteries. Afghan flake graphite could supply battery manufacturers as demand grows. EV and storage markets drive graphite demand. Battery grade requires high purity and specific morphology (flake size, coating compatibility). Purification (chemical, thermal) may be needed.`, { title: 'Battery Demand', content: `EV and storage markets drive graphite demand. Anode capacity is significant per GWh. Afghan flake graphite could supply battery manufacturers if purity and morphology are achieved. Regional (Pakistan, India) and global supply chains are potential offtakers.` }, { title: 'Quality', content: `Battery grade requires high purity (99.9%+ C), specific morphology (flake size, shape), and coating compatibility. Purification (chemical, thermal) and shaping (spheroidization) are standard. Testing and certification support cell manufacturer acceptance.` }, { title: 'Processing and Purification', content: `Flotation concentrates graphite; chemical or thermal purification achieves battery purity. Spheroidization may be required. Afghan feedstock would need qualification. Investment in purification capacity is significant.` }, { title: 'Development', content: `Partnership with battery or anode producers can secure offtake. Timeline depends on deposit qualification and purification feasibility. Critical mineral and EV supply chain interest support investment.` }, [{ value: 'Anode', label: 'Role', description: 'Li-ion battery' }, { value: 'EV, Storage', label: 'Demand', description: 'Markets' }, { value: '99.9%+', label: 'Purity', description: 'Battery grade' }, { value: 'Morphology', label: 'Key', description: 'Flake, coating' }, { value: 'Purification', label: 'Process', description: 'Chemical, thermal' }, { value: 'Regional', label: 'Offtake', description: 'Battery manufacturers' }], [{ year: '2000s', event: 'Battery graphite demand growth' }, { year: '2020', event: 'Afghan graphite battery assessment' }, { year: '2025', event: 'Purification and offtake target' }, { year: '2028', event: 'Potential battery supply' }, { year: '2030', event: 'Supply if developed' }], [{ name: 'Graphite Deposits', href: '/minerals/graphite/deposits' }, { name: 'Lithium Ghazni', href: '/minerals/lithium/ghazni' }, { name: 'REE Helmand', href: '/minerals/ree/helmand' }, { name: 'Investment Framework', href: '/investment/framework' }, { name: 'Operations Research', href: '/operations/research' }], partnership),
  'graphite/steel': fullEntry('Graphite for Steel', 'Steel Industry Graphite', `Graphite is used in steelmaking as recarburizer (adds carbon to molten iron and steel) and in refractories. Afghan graphite can supply foundries and steel plants. Foundries and steel mills are key customers. Quality (carbon content, size) and consistency support long-term supply.`, { title: 'Steel Use', content: `Graphite adds carbon to molten iron and steel in foundries and electric arc furnaces. Recarburizer grade requires high carbon and low impurities. Afghan graphite is being assessed for steel grade. Consistent supply supports foundry planning.` }, { title: 'Markets', content: `Foundries and steel mills are key customers. Domestic (if steel develops, e.g. Hajigak) and regional (Pakistan, India) are potential offtakers. Price and logistics affect competitiveness. May be lower value than battery grade but stable demand.` }, { title: 'Quality and Supply', content: `Steel grade requires high fixed carbon, low ash and volatiles. Size (lump or fines) is specified. Afghan production could supply regional foundries if quality is confirmed. Partnership with steel producers can secure offtake.` }, { title: 'Development', content: `Steel offtake can complement battery or other grades. Timeline depends on deposit and market. Integration with Hajigak or other steel development could anchor demand.` }, [{ value: 'Recarburizer', label: 'Use', description: 'Refractories' }, { value: 'Carbon', label: 'Adds', description: 'Molten metal' }, { value: 'Foundries', label: 'Markets', description: 'Steel mills' }, { value: 'Quality', label: 'Key', description: 'Carbon, size' }, { value: 'Regional', label: 'Offtake', description: 'Pakistan, India' }, { value: 'Stable', label: 'Demand', description: 'Steel' }], [{ year: '2000s', event: 'Graphite steel assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied steel graphite' }], [{ name: 'Graphite Deposits', href: '/minerals/graphite/deposits' }, { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' }, { name: 'Graphite Refractory', href: '/minerals/graphite/refractory' }, { name: 'Operations Smelting', href: '/operations/smelting' }, { name: 'Province Bamyan', href: '/provinces/bamyan' }], partnership),
  'graphite/lubricant': fullEntry('Graphite Lubricants', 'Solid Lubricant Graphite', `Graphite is used as solid lubricant in high-temperature and dry applications. Afghan graphite can supply lubricant and coating manufacturers. Graphite reduces friction in demanding applications. Mining, metalworking, and aerospace use graphite lubricants.`, { title: 'Lubricant Use', content: `Graphite reduces friction in high-temperature, dry, or chemically aggressive environments. Used in lubricant formulations, coatings, and solid film. Afghan graphite with suitable purity and particle size could supply lubricant manufacturers.` }, { title: 'Applications', content: `Mining (equipment), metalworking (forging, stamping), and aerospace use graphite lubricants. Niche but stable demand. Quality (purity, particle size) determines performance. Regional industrial consumers are potential offtakers.` }, { title: 'Quality and Supply', content: `Lubricant grade requires consistent purity and particle size. May be lower purity than battery grade. Afghan production could supply regional manufacturers. Partnership with lubricant or coating companies can secure offtake.` }, { title: 'Development', content: `Lubricant offtake can complement battery and steel sales. Timeline depends on deposit and market. Investment in grinding and classification supports product range.` }, [{ value: 'Solid', label: 'Lubricant', description: 'Dry, high-temp' }, { value: 'Friction', label: 'Reduces', description: 'Demanding' }, { value: 'Mining', label: 'Use', description: 'Metalworking, aerospace' }, { value: 'Purity', label: 'Quality', description: 'Particle size' }, { value: 'Regional', label: 'Markets', description: 'Industrial' }, { value: 'Stable', label: 'Demand', description: 'Niche' }], [{ year: '2000s', event: 'Graphite lubricant assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied lubricant graphite' }], [{ name: 'Graphite Deposits', href: '/minerals/graphite/deposits' }, { name: 'Graphite Battery', href: '/minerals/graphite/battery' }, { name: 'Talc Processing', href: '/minerals/talc/processing' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Opportunities', href: '/investment/opportunities' }], partnership),
  'graphite/refractory': fullEntry('Graphite Refractories', 'Refractory Grade Graphite', `Graphite is used in refractory linings for high-temperature furnaces. Afghan graphite can supply refractory producers. Graphite improves thermal shock resistance. Steel and nonferrous furnaces use graphite refractories.`, { title: 'Refractory Use', content: `Graphite improves thermal shock resistance and oxidation resistance in refractory linings. Used in steel (EAF, ladle), nonferrous, and other high-temperature furnaces. Afghan graphite with suitable purity and size could supply refractory producers.` }, { title: 'Markets', content: `Steel and nonferrous furnaces use graphite refractories. Refractory manufacturers (bricks, monolithics) are offtakers. Regional (Pakistan, India, Iran) refractory and steel growth drives demand. Quality and consistency support long-term supply.` }, { title: 'Quality and Supply', content: `Refractory grade requires consistent carbon content and particle size. May be amorphous or flake. Afghan production could supply regional refractory manufacturers. Partnership with refractory producers can secure offtake.` }, { title: 'Development', content: `Refractory offtake can complement battery and steel sales. Timeline depends on deposit and market. Integration with steel development (e.g. Hajigak) could anchor demand.` }, [{ value: 'Thermal Shock', label: 'Property', description: 'Resistance' }, { value: 'Steel', label: 'Use', description: 'Nonferrous furnaces' }, { value: 'Refractory', label: 'Producers', description: 'Offtakers' }, { value: 'Carbon', label: 'Quality', description: 'Particle size' }, { value: 'Regional', label: 'Markets', description: 'Pakistan, India' }, { value: 'Stable', label: 'Demand', description: 'Furnace' }], [{ year: '2000s', event: 'Graphite refractory assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied refractory graphite' }], [{ name: 'Graphite Deposits', href: '/minerals/graphite/deposits' }, { name: 'Graphite Steel', href: '/minerals/graphite/steel' }, { name: 'Kaolin Refractory', href: '/minerals/kaolin/refractory' }, { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' }, { name: 'Operations Smelting', href: '/operations/smelting' }], partnership),
  'graphite/carbon-fiber': fullEntry('Graphite for Carbon Fiber', 'Carbon Fiber and Advanced Materials', `Graphite and carbon materials feed carbon fiber production (precursor and graphitization). Afghan graphite with suitable purity could support advanced materials development. Advanced materials sector may use Afghan graphite. Long-term potential; requires high purity and supply chain integration.`, { title: 'Carbon Fiber', content: `Precursor (e.g. PAN, pitch) is carbonized and graphitized to produce carbon fiber. Graphite/carbon materials may be used in precursor or graphitization. Afghan graphite with suitable purity could support advanced materials development. Technology and supply chain are specialized.` }, { title: 'Future Potential', content: `Advanced materials sector (carbon fiber, composites) may use Afghan graphite. Long-term potential; requires high purity, consistent supply, and supply chain integration. Partnership with advanced materials producers would support development.` }, { title: 'Quality and Pathway', content: `Carbon fiber grade requires very high purity. Processing (purification, shaping) is specialized. Afghan deposit qualification and pilot work would be needed. Timeline is longer than battery or steel applications.` }, { title: 'Development', content: `Future potential; near-term focus may be battery and steel. Advanced materials offtake could emerge with qualification and partnership. Government support for critical minerals and advanced materials may apply.` }, [{ value: 'Precursor', label: 'Role', description: 'Graphitization' }, { value: 'Advanced', label: 'Materials', description: 'Carbon fiber' }, { value: 'High Purity', label: 'Requirement', description: 'Specialized' }, { value: 'Long-term', label: 'Potential', description: 'Future' }, { value: 'Supply Chain', label: 'Integration', description: 'Needed' }, { value: 'Partnership', label: 'Support', description: 'Development' }], [{ year: '2000s', event: 'Carbon fiber sector growth' }, { year: '2025', event: 'Afghan graphite advanced materials assessment' }, { year: '2030', event: 'Potential supply if qualified' }, { year: '2035', event: 'Advanced materials offtake if developed' }], [{ name: 'Graphite Deposits', href: '/minerals/graphite/deposits' }, { name: 'Graphite Battery', href: '/minerals/graphite/battery' }, { name: 'REE Helmand', href: '/minerals/ree/helmand' }, { name: 'Operations Research', href: '/operations/research' }, { name: 'Investment Framework', href: '/investment/framework' }], partnership),
  'phosphate/deposits': fullEntry('Phosphate Deposits', 'Phosphate Rock for Fertilizer', `Afghanistan's phosphate deposits can supply fertilizer production. Phosphate rock is processed into fertilizer for domestic and regional agriculture. Fertilizer is the main use of phosphate rock. Sedimentary and igneous phosphate occurs in Afghanistan. Assessment and development could support local fertilizer plants.`, { title: 'Phosphate Use', content: `Fertilizer is the main use of phosphate rock (phosphoric acid, DAP, MAP, etc.). Domestic and regional agriculture drive demand. Afghan phosphate rock quality (P2O5, impurities) determines process and product. Assessment of deposits is ongoing.` }, { title: 'Resources', content: `Sedimentary and igneous phosphate occurs in Afghanistan. Resource assessment and metallurgical testwork support feasibility. Mining and beneficiation (flotation, etc.) produce concentrate. Proximity to sulfur/acid and fertilizer market affects economics.` }, { title: 'Environmental and Development', content: `Phosphate mining and processing follow environmental standards. Tailings and water management apply. Community engagement and local employment support social license. Integration with sulfur (acid) supports integrated fertilizer development.` }, { title: 'Markets and Investment', content: `Domestic and regional fertilizer demand (Pakistan, Iran) could absorb Afghan phosphate. Integration with sulfur/acid production improves economics. Timeline depends on resource confirmation and fertilizer project development. Government support for fertilizer and food security applies.` }, [{ value: 'Fertilizer', label: 'Main Use', description: 'Phosphate rock' }, { value: 'Sedimentary', label: 'Occurrence', description: 'Igneous' }, { value: 'P2O5', label: 'Quality', description: 'Grade' }, { value: 'Domestic', label: 'Market', description: 'Regional agriculture' }, { value: 'Sulfur', label: 'Link', description: 'Acid, fertilizer' }, { value: 'Assessment', label: 'Status', description: 'Ongoing' }], [{ year: '1960s', event: 'Soviet phosphate surveys' }, { year: '2000s', event: 'Assessment and fertilizer feasibility' }, { year: '2025', event: 'Development target' }, { year: '2028', event: 'Potential production' }, { year: '2030', event: 'Fertilizer supply if developed' }], [{ name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Sulfur Fertilizer', href: '/minerals/sulfur/fertilizer' }, { name: 'Sulfur Acid', href: '/minerals/sulfur/acid' }, { name: 'Phosphate Agricultural', href: '/minerals/phosphate/agricultural' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'phosphate/fertilizer': fullEntry('Phosphate Fertilizer', 'Fertilizer from Phosphate Rock', `Phosphate fertilizer production uses sulfuric acid to convert rock into phosphoric acid and fertilizers (DAP, MAP, etc.). Afghan phosphate and sulfur could support local fertilizer plants. Acidulation and granulation produce fertilizer. Fertilizer supports crop yields and food security.`, { title: 'Fertilizer Production', content: `Acidulation (sulfuric acid + phosphate rock) produces phosphoric acid; neutralization and granulation produce DAP, MAP, or other fertilizers. Afghan phosphate and sulfur could support local fertilizer plants. Technology is mature; scale and logistics affect economics.` }, { title: 'Agriculture', content: `Fertilizer supports crop yields and food security. Domestic and regional agriculture (Pakistan, Iran) drive demand. Local production reduces import dependence. Government support for fertilizer and food security aligns with development.` }, { title: 'Integration and Supply', content: `Integration with phosphate mining and sulfur/acid production optimizes logistics. Captive phosphate and acid improve economics. Partnership with fertilizer distributors or farmers can secure offtake. Timeline depends on mining and acid project development.` }, { title: 'Environmental and Quality', content: `Fertilizer production has environmental considerations (gypsum by-product, emissions). Quality (nutrient content, form) meets agricultural specs. Certification and labeling support market acceptance.` }, [{ value: 'Acidulation', label: 'Process', description: 'Granulation' }, { value: 'DAP, MAP', label: 'Products', description: 'Fertilizer' }, { value: 'Food Security', label: 'Impact', description: 'Crop yields' }, { value: 'Integrated', label: 'Model', description: 'Phosphate + acid' }, { value: 'Domestic', label: 'Market', description: 'Regional' }, { value: 'Mature', label: 'Technology', description: 'Scale' }], [{ year: '2000s', event: 'Fertilizer feasibility' }, { year: '2025', event: 'Integrated project target' }, { year: '2028', event: 'Potential fertilizer production' }, { year: '2030', event: 'Fertilizer supply if developed' }], [{ name: 'Phosphate Deposits', href: '/minerals/phosphate/deposits' }, { name: 'Sulfur Fertilizer', href: '/minerals/sulfur/fertilizer' }, { name: 'Sulfur Acid', href: '/minerals/sulfur/acid' }, { name: 'Phosphate Agricultural', href: '/minerals/phosphate/agricultural' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'phosphate/agricultural': fullEntry('Phosphate for Agriculture', 'Agricultural Phosphate Use', `Phosphate is essential for plant growth. Afghan phosphate fertilizer would supply domestic and regional farmers. Soils often need phosphate supplementation. Local production reduces import dependence. Food security and crop yields depend on fertilizer availability.`, { title: 'Agricultural Demand', content: `Soils often need phosphate supplementation for optimal crop growth. Domestic and regional farmers are offtakers. Afghan phosphate fertilizer (DAP, MAP, or other) would supply this demand. Demand is relatively stable and growing with agricultural intensification.` }, { title: 'Supply', content: `Local production reduces import dependence and improves food security. Distribution through agro-dealers and government programs. Quality (nutrient content, form) and price affect adoption. Partnership with distributors supports market access.` }, { title: 'Development', content: `Agricultural offtake is primary market for phosphate fertilizer. Timeline depends on fertilizer production development. Government support for agriculture and fertilizer applies. Integration with phosphate mining and acid production supports supply.` }, { title: 'Quality and Distribution', content: `Fertilizer quality (P2O5, form) meets agricultural specs. Distribution logistics (to rural areas) affect accessibility. Extension and farmer education support adoption. Certification and labeling support confidence.` }, [{ value: 'Plant Growth', label: 'Essential', description: 'Phosphate' }, { value: 'Farmers', label: 'Offtakers', description: 'Domestic, regional' }, { value: 'Local', label: 'Production', description: 'Import substitution' }, { value: 'Food Security', label: 'Impact', description: 'Crop yields' }, { value: 'Stable', label: 'Demand', description: 'Growing' }, { value: 'Distribution', label: 'Channel', description: 'Agro-dealers' }], [{ year: '2000s', event: 'Agricultural fertilizer demand' }, { year: '2025', event: 'Local fertilizer supply target' }, { year: '2028', event: 'Structured agricultural supply' }, { year: '2030', event: 'Sustainably supplied agricultural phosphate' }], [{ name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Phosphate Deposits', href: '/minerals/phosphate/deposits' }, { name: 'Sulfur Agricultural', href: '/minerals/sulfur/agricultural' }, { name: 'Potash Resources', href: '/minerals/potash/resources' }, { name: 'Operations Sustainability', href: '/operations/sustainability' }], partnership),
  'phosphate/food': fullEntry('Phosphate in Food', 'Food Grade Phosphate', `Food-grade phosphate is used in food processing (additives, nutrients). Afghan phosphate meeting purity standards could supply food industry. Phosphates are used as additives and nutrients. Food grade requires strict purity and testing. Premium market; regulatory compliance (e.g. FDA, EU) is required.`, { title: 'Food Applications', content: `Phosphates are used as additives (emulsifiers, leavening) and nutrients (fortification) in food. Food industry (dairy, meat, baking, beverages) consumes food-grade phosphate. Afghan phosphate would need purification and certification for food use.` }, { title: 'Quality', content: `Food grade requires strict purity (heavy metals, arsenic) and testing. Regulatory compliance (FDA, EU food additive regulations) is required. GMP and certification support customer acceptance. Premium price justifies qualification investment.` }, { title: 'Markets and Supply', content: `Food manufacturers and ingredient suppliers are offtakers. Domestic and regional food industry could absorb supply. Partnership with food ingredient companies can secure offtake. Timeline depends on purification and regulatory pathway.` }, { title: 'Development', content: `Food grade is niche but premium. May be derivative of fertilizer/industrial phosphate purification. Investment in purification and certification supports market access. Government support for value addition may apply.` }, [{ value: 'Additives', label: 'Use', description: 'Nutrients' }, { value: 'Purity', label: 'Requirement', description: 'Strict' }, { value: 'FDA, EU', label: 'Regulatory', description: 'Compliance' }, { value: 'Premium', label: 'Market', description: 'Food industry' }, { value: 'Certification', label: 'Support', description: 'Acceptance' }, { value: 'Niche', label: 'Scale', description: 'Premium' }], [{ year: '2000s', event: 'Food phosphate demand' }, { year: '2025', event: 'Purification and certification target' }, { year: '2028', event: 'Potential food grade supply' }, { year: '2030', event: 'Food grade supply if qualified' }], [{ name: 'Phosphate Deposits', href: '/minerals/phosphate/deposits' }, { name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Phosphate Chemical', href: '/minerals/phosphate/chemical' }, { name: 'Kaolin Pharmaceutical', href: '/minerals/kaolin/pharmaceutical' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'potash/resources': fullEntry('Potash Resources', 'Potassium for Fertilizer', `Potash (potassium) resources in Afghanistan could supply fertilizer production. Potassium is essential for crops; assessment of Afghan potash potential is ongoing. Potassium fertilizers improve crop quality and yield. Evaporite and other settings may host potash. Development could support domestic and regional fertilizer supply.`, { title: 'Potash Use', content: `Potassium fertilizers (KCl, K2SO4, etc.) improve crop quality and yield. Essential for balanced fertilization with N and P. Domestic and regional agriculture drive demand. Afghan potash would need to be competitive with imported potash.` }, { title: 'Resources', content: `Evaporite (salt basins) and other settings may host potash. Assessment (geology, drilling, metallurgy) is ongoing. Afghan potash potential is less well defined than phosphate; exploration continues. If economic resources are found, development could support fertilizer supply.` }, { title: 'Development', content: `Potash mining and processing (e.g. solution mining, crystallization) are capital-intensive. Feasibility depends on resource grade, depth, and market. Timeline is uncertain pending resource confirmation. Government support for fertilizer and food security applies.` }, { title: 'Markets', content: `Domestic and regional fertilizer demand could absorb Afghan potash if developed. Integration with phosphate and nitrogen fertilizer could support balanced fertilizer production. Partnership with fertilizer distributors can secure offtake.` }, [{ value: 'Potassium', label: 'Element', description: 'Fertilizer' }, { value: 'Crops', label: 'Essential', description: 'Quality, yield' }, { value: 'Evaporite', label: 'Setting', description: 'Potential' }, { value: 'Assessment', label: 'Status', description: 'Ongoing' }, { value: 'Fertilizer', label: 'Link', description: 'N, P balance' }, { value: 'Exploration', label: 'Phase', description: 'Resource confirmation' }], [{ year: '1960s', event: 'Potash potential surveys' }, { year: '2000s', event: 'Assessment and exploration' }, { year: '2025', event: 'Resource confirmation target' }, { year: '2030', event: 'Potential production if economic' }], [{ name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Phosphate Agricultural', href: '/minerals/phosphate/agricultural' }, { name: 'Sulfur Fertilizer', href: '/minerals/sulfur/fertilizer' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Framework', href: '/investment/framework' }], partnership),
  'phosphate/chemical': fullEntry('Phosphate Chemical Applications', 'Phosphate in Chemicals', `Phosphate is used in detergents, water treatment, and other chemicals. Afghan phosphate could supply chemical manufacturers. Phosphates are used in many chemical products. Detergent and industrial chemical producers use phosphate. Quality and purity determine application; chemical grade may be derivative of fertilizer phosphate processing.`, { title: 'Chemical Use', content: `Phosphates are used in detergents (builders), water treatment (corrosion inhibition, scale control), and other industrial chemicals. Afghan phosphate could supply chemical manufacturers with consistent quality. Regional chemical industry (Pakistan, Iran) is potential offtake.` }, { title: 'Markets', content: `Detergent and industrial chemical producers use phosphate. Demand is volume-oriented; price and logistics affect competitiveness. May be outlet for phosphate that does not meet fertilizer premium or for by-product streams. Partnership with chemical manufacturers can secure offtake.` }, { title: 'Quality and Processing', content: `Chemical grade may require specific purity and form. Processing (purification, acidulation) may be shared with fertilizer. Testing and documentation support customer acceptance. Environmental and safety standards for chemical production apply.` }, { title: 'Development', content: `Chemical offtake can complement fertilizer sales. Timeline depends on phosphate project development. Investment in processing supports product range. Government support for industrial development may apply.` }, [{ value: 'Detergents', label: 'Use', description: 'Water treatment' }, { value: 'Chemical', label: 'Producers', description: 'Offtakers' }, { value: 'Volume', label: 'Market', description: 'Industrial' }, { value: 'Quality', label: 'Requirement', description: 'Purity, form' }, { value: 'Regional', label: 'Markets', description: 'Pakistan, Iran' }, { value: 'Complement', label: 'Fertilizer', description: 'Sales' }], [{ year: '2000s', event: 'Phosphate chemical assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied chemical phosphate' }], [{ name: 'Phosphate Deposits', href: '/minerals/phosphate/deposits' }, { name: 'Phosphate Fertilizer', href: '/minerals/phosphate/fertilizer' }, { name: 'Sulfur Chemical', href: '/minerals/sulfur/chemical' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Framework', href: '/investment/framework' }], partnership),
  'quartz/deposits': fullEntry('Quartz Deposits', 'Quartz for Glass and Silicon', `Quartz deposits in Afghanistan supply high-purity silica for glass, silicon metal, and other applications. Quality and purity determine end use. Glass and silicon require high-purity quartz. Quartz occurs in veins and pegmatites. Assessment and development could supply domestic and regional glass and industrial markets.`, { title: 'Quartz Quality', content: `Glass and silicon require high-purity quartz (low Fe, Al, other impurities). Quality (SiO2 content, particle size) determines application. Afghan quartz is being assessed for glass, foundry, and potential silicon grade. Beneficiation (washing, magnetic separation) may be needed.` }, { title: 'Resources', content: `Quartz occurs in veins, pegmatites, and sedimentary deposits. Resource assessment and quality testing support feasibility. Mining and processing (crushing, screening, washing) produce saleable product. Multiple provinces may host quartz.` }, { title: 'Applications and Markets', content: `Glass (primary), silicon metal, foundry, and other industrial applications. Domestic and regional glass and foundry are potential offtakers. Semiconductor grade requires extreme purity; long-term potential.` }, { title: 'Development', content: `Assessment and development could expand production. Partnership with glass and industrial consumers can secure offtake. Timeline depends on deposit qualification and market. Government support for industrial minerals applies.` }, [{ value: 'High Purity', label: 'Requirement', description: 'Glass, silicon' }, { value: 'Veins', label: 'Occurrence', description: 'Pegmatites' }, { value: 'Glass', label: 'Primary Use', description: 'Silicon, foundry' }, { value: 'Quality', label: 'Key', description: 'SiO2, impurities' }, { value: 'Assessment', label: 'Status', description: 'Ongoing' }, { value: 'Regional', label: 'Markets', description: 'Domestic' }], [{ year: '1960s', event: 'Quartz surveys' }, { year: '2000s', event: 'Assessment and small-scale' }, { year: '2025', event: 'Development target' }, { year: '2028', event: 'Structured production' }, { year: '2030', event: 'Sustainably supplied quartz' }], [{ name: 'Quartz Glass', href: '/minerals/quartz/glass' }, { name: 'Silica Sand', href: '/minerals/silica/sand' }, { name: 'Feldspar Glass', href: '/minerals/feldspar/glass' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Opportunities', href: '/investment/opportunities' }], partnership),
  'silica/sand': fullEntry('Silica Sand', 'Industrial Silica Sand', `Silica sand is used in glass, foundry, and construction. Afghan silica sand deposits can supply domestic and regional industrial markets. Glass, foundry, and hydraulic fracturing use silica sand. Industrial grades require consistent grain size and chemistry. Assessment and development could expand supply.`, { title: 'Sand Applications', content: `Glass (primary), foundry (molding, core), construction (concrete, mortar), and hydraulic fracturing use silica sand. Quality (grain size distribution, SiO2, impurities) determines application. Afghan silica sand is being assessed for various grades.` }, { title: 'Quality', content: `Industrial grades require consistent grain size and chemistry (SiO2, Fe, etc.). Washing and classification may be needed. Testing supports customer acceptance. Different applications have different specs.` }, { title: 'Resources and Supply', content: `Silica sand occurs in sedimentary and weathered deposits. Mining and processing (washing, screening) produce saleable product. Domestic and regional glass, foundry, and construction are potential offtakers. Proximity to markets affects economics.` }, { title: 'Development', content: `Assessment and development could expand supply. Partnership with glass and foundry consumers can secure offtake. Investment in washing and classification supports product range. Timeline depends on deposit and market.` }, [{ value: 'Glass', label: 'Use', description: 'Foundry, construction' }, { value: 'Grain Size', label: 'Quality', description: 'Chemistry' }, { value: 'Industrial', label: 'Grades', description: 'Consistent' }, { value: 'Domestic', label: 'Market', description: 'Regional' }, { value: 'Washing', label: 'Process', description: 'Classification' }, { value: 'Assessment', label: 'Status', description: 'Ongoing' }], [{ year: '1960s', event: 'Silica sand surveys' }, { year: '2000s', event: 'Assessment and small-scale' }, { year: '2025', event: 'Development target' }, { year: '2028', event: 'Structured production' }, { year: '2030', event: 'Sustainably supplied silica sand' }], [{ name: 'Quartz Deposits', href: '/minerals/quartz/deposits' }, { name: 'Quartz Glass', href: '/minerals/quartz/glass' }, { name: 'Silica Foundry', href: '/minerals/silica/foundry' }, { name: 'Feldspar Glass', href: '/minerals/feldspar/glass' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'quartz/glass': fullEntry('Quartz for Glass', 'Glass Industry Quartz', `Quartz and silica are primary raw materials for glass. Afghan high-purity quartz can supply glass manufacturers. Silica is the main component of glass. Glass plants need consistent silica supply. Quality (purity, consistency) and logistics support long-term offtake.`, { title: 'Glass Raw Material', content: `Silica is the main component of glass (container, flat, specialty). Quartz or silica sand is melted with soda, lime, and other ingredients. Afghan high-purity quartz can supply glass manufacturers. Quality (SiO2, low Fe) and consistency are required.` }, { title: 'Supply', content: `Glass plants need consistent silica supply. Long-term contracts are common. Domestic and regional (Pakistan, Iran) glass plants are potential offtakers. Logistics and price affect competitiveness. Partnership with glass producers can secure offtake.` }, { title: 'Quality and Processing', content: `Glass grade requires high SiO2, low Fe and other coloring elements. Crushing, screening, and washing produce consistent product. Testing (chemistry, particle size) supports mill acceptance. Afghan quartz is being assessed for glass grade.` }, { title: 'Development', content: `Partnership with glass producers can secure offtake. Investment in processing supports quality. Timeline depends on deposit qualification and supply agreement. Government support for industrial minerals applies.` }, [{ value: 'Silica', label: 'Component', description: 'Glass' }, { value: 'Consistent', label: 'Supply', description: 'Required' }, { value: 'High Purity', label: 'Quality', description: 'Low Fe' }, { value: 'Glass Plants', label: 'Offtakers', description: 'Domestic, regional' }, { value: 'Long-term', label: 'Contracts', description: 'Common' }, { value: 'Processing', label: 'Support', description: 'Quality' }], [{ year: '2000s', event: 'Quartz for glass assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied glass quartz' }], [{ name: 'Quartz Deposits', href: '/minerals/quartz/deposits' }, { name: 'Silica Sand', href: '/minerals/silica/sand' }, { name: 'Feldspar Glass', href: '/minerals/feldspar/glass' }, { name: 'Operations Processing', href: '/operations/processing' }, { name: 'Investment Opportunities', href: '/investment/opportunities' }], partnership),
  'silica/semiconductor': fullEntry('Silica for Semiconductors', 'High-Purity Silicon', `High-purity silicon for semiconductors is produced from quartz (polysilicon route). Afghan quartz with sufficient purity could feed polysilicon and semiconductor supply chains. Silicon wafers come from high-purity polysilicon. Semiconductor grade requires extreme purity. Long-term potential; requires significant investment in purification.`, { title: 'Semiconductor Use', content: `Silicon wafers come from high-purity polysilicon, which is produced from quartz (metallurgical grade Si then purification). Semiconductor grade requires extreme purity (e.g. 99.9999999%+). Afghan quartz would need to qualify as feedstock; purification is typically in specialized facilities.` }, { title: 'Quality', content: `Semiconductor grade requires extreme purity. Quartz feedstock must be very low in impurities (Fe, Al, B, P, etc.). Polysilicon production and wafer manufacturing are capital-intensive. Afghan role would likely be feedstock if purity can be achieved.` }, { title: 'Markets and Supply Chain', content: `Polysilicon and semiconductor supply chains are global and specialized. Afghan quartz with sufficient purity could feed regional or global polysilicon producers. Long-term potential; near-term focus may be glass and industrial grades. Partnership with polysilicon producers would support development.` }, { title: 'Development', content: `Long-term potential; qualification and supply chain integration take time. Investment in quartz purification or partnership with polysilicon producers would be needed. Government support for critical materials and high-tech may apply. Timeline is longer than glass/industrial.` }, [{ value: 'Polysilicon', label: 'Route', description: 'Semiconductor' }, { value: 'Extreme', label: 'Purity', description: 'Required' }, { value: 'Wafers', label: 'End Use', description: 'Semiconductors' }, { value: 'Feedstock', label: 'Role', description: 'Quartz' }, { value: 'Long-term', label: 'Potential', description: 'Specialized' }, { value: 'Investment', label: 'Significant', description: 'Purification' }], [{ year: '2000s', event: 'Semiconductor supply chain growth' }, { year: '2025', event: 'Afghan quartz purity assessment' }, { year: '2030', event: 'Potential feedstock if qualified' }, { year: '2035', event: 'Semiconductor supply if developed' }], [{ name: 'Quartz Deposits', href: '/minerals/quartz/deposits' }, { name: 'Quartz Glass', href: '/minerals/quartz/glass' }, { name: 'REE Helmand', href: '/minerals/ree/helmand' }, { name: 'Operations Research', href: '/operations/research' }, { name: 'Investment Framework', href: '/investment/framework' }], partnership),
  'silica/foundry': fullEntry('Silica for Foundry', 'Foundry Sand and Molding', `Foundry sand is used in metal casting (sand molds and cores). Afghan silica sand can supply foundries for molding and core making. Sand molds and cores are used in casting. Foundries in the region use silica sand. Quality (grain size, consistency) and supply support foundry operations.`, { title: 'Foundry Use', content: `Sand molds and cores are used in metal casting (iron, steel, nonferrous). Silica sand with appropriate grain size and consistency is required. Afghan silica sand can supply foundries for molding and core making. Binders (clay, chemical) are used with sand.` }, { title: 'Markets', content: `Foundries in the region (Pakistan, India, Iran) use silica sand. Domestic foundries (if developed) and regional export are potential markets. Long-term supply and consistency support foundry planning. Price and logistics affect competitiveness.` }, { title: 'Quality and Supply', content: `Foundry grade requires consistent grain size distribution and low impurities. Testing (AFS number, etc.) supports foundry acceptance. Afghan production could supply regional foundries if quality is confirmed. Partnership with foundries can secure offtake.` }, { title: 'Development', content: `Partnership with foundry consumers can secure offtake. Investment in screening and classification supports product quality. Timeline depends on deposit qualification and market. May complement glass and construction sand sales.` }, [{ value: 'Molds', label: 'Use', description: 'Cores' }, { value: 'Casting', label: 'Application', description: 'Metal' }, { value: 'Grain Size', label: 'Quality', description: 'Consistency' }, { value: 'Regional', label: 'Markets', description: 'Foundries' }, { value: 'Supply', label: 'Key', description: 'Consistency' }, { value: 'AFS', label: 'Testing', description: 'Foundry specs' }], [{ year: '2000s', event: 'Silica foundry assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied foundry silica' }], [{ name: 'Silica Sand', href: '/minerals/silica/sand' }, { name: 'Quartz Deposits', href: '/minerals/quartz/deposits' }, { name: 'Quartz Glass', href: '/minerals/quartz/glass' }, { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' }, { name: 'Operations Processing', href: '/operations/processing' }], partnership),
  'silica/filtration': fullEntry('Silica for Filtration', 'Water and Process Filtration', `Silica sand and filter media are used in water and process filtration. Afghan silica can supply filtration applications. Sand filters are common in water treatment. Municipal and industrial filtration use silica. Quality (grain size, uniformity) and supply support filter performance.`, { title: 'Filtration Use', content: `Sand filters are common in water treatment (municipal, industrial). Silica sand with specific grain size and uniformity is used as filter media. Afghan silica can supply filtration applications. Other filter media (anthracite, etc.) may be used in combination.` }, { title: 'Applications', content: `Municipal and industrial filtration use silica. Water treatment, wastewater, and process filtration are applications. Demand is stable; replacement and new installations drive demand. Regional water and process plants are potential offtakers.` }, { title: 'Quality and Supply', content: `Filtration grade requires consistent grain size (e.g. 0.5–1 mm), uniformity, and hardness. Washing and classification produce saleable product. Afghan production could supply regional filtration if quality is confirmed. Partnership with water treatment suppliers can secure offtake.` }, { title: 'Development', content: `Partnership with water treatment and process filtration suppliers can secure offtake. Investment in washing and classification supports quality. Timeline depends on deposit qualification and market. Complements other silica sand applications.` }, [{ value: 'Sand Filters', label: 'Use', description: 'Water treatment' }, { value: 'Municipal', label: 'Application', description: 'Industrial' }, { value: 'Grain Size', label: 'Quality', description: 'Uniformity' }, { value: 'Stable', label: 'Demand', description: 'Replacement' }, { value: 'Regional', label: 'Markets', description: 'Water, process' }, { value: 'Washing', label: 'Process', description: 'Classification' }], [{ year: '2000s', event: 'Silica filtration assessment' }, { year: '2025', event: 'Supply target' }, { year: '2028', event: 'Structured offtake' }, { year: '2030', event: 'Sustainably supplied filtration silica' }], [{ name: 'Silica Sand', href: '/minerals/silica/sand' }, { name: 'Silica Foundry', href: '/minerals/silica/foundry' }, { name: 'Quartz Deposits', href: '/minerals/quartz/deposits' }, { name: 'Operations Sustainability', href: '/operations/sustainability' }, { name: 'Investment Opportunities', href: '/investment/opportunities' }], partnership),
};
