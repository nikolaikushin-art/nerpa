// Comprehensive Operations Database - Ultra-Long Detail Pages
import { Award, Building2, CheckCircle2, Compass, Factory, FileText, Flame, FlaskConical, Globe, Leaf, Scale, Shield, Target, Truck, Users, Zap } from 'lucide-react';

export interface OperationsData {
  title: string;
  subtitle: string;
  overview: string;
  stats: { value: string; label: string; description: string }[];
  sections: {
    title: string;
    content: string;
    icon: typeof Factory;
    alignment: 'left' | 'right';
  }[];
  processes?: {
    title: string;
    steps: string[];
  }[];
  benefits?: {
    title: string;
    description: string;
  }[];
  relatedResources?: { name: string; href: string; icon: typeof Factory }[];
}

const operationsDatabase: Record<string, OperationsData> = {
  'processing': {
    title: 'Processing & Refining Operations',
    subtitle: 'World-Class Ore Processing Facilities',
    overview: `Afghanistan's mineral processing operations transform raw ores into valuable products through sophisticated processing facilities employing world-class technology. Processing operations include crushing, grinding, flotation, leaching, and refining, transforming raw materials into marketable products meeting international quality standards. These operations maximize value recovery while ensuring environmental responsibility and operational efficiency.

Copper processing facilities utilize advanced flotation and smelting technologies producing LME-grade cathodes meeting international standards. Lithium processing employs modern extraction and purification technologies producing battery-grade lithium chemicals for electric vehicle and energy storage markets. Gold processing utilizes cyanide leaching and carbon-in-pulp technologies achieving high recovery rates while meeting environmental standards.

Processing facilities are designed for efficiency and environmental performance, with advanced water recycling systems achieving 95%+ water reuse. Emission control systems exceed regulatory requirements, while waste management systems ensure responsible handling of all by-products. These facilities demonstrate that processing can be both efficient and environmentally responsible.

Capacity building ensures that Afghan operators gain expertise enabling independent operations. Training programs, technical assistance, and knowledge transfer ensure that processing operations build domestic capacity while maintaining world-class standards. Over time, Afghan expertise drives operations independently.`,

    stats: [
      { value: '95%+', label: 'Water Reuse', description: 'Recycling efficiency' },
      { value: '99%+', label: 'Recovery', description: 'Ore processing rate' },
      { value: 'LME Grade', label: 'Quality', description: 'International standards' },
      { value: '24/7', label: 'Operations', description: 'Continuous processing' },
      { value: 'Automated', label: 'Systems', description: 'Advanced technology' },
      { value: 'Zero Discharge', label: 'Environmental', description: 'Waste management' },
    ],

    sections: [
      {
        title: 'Copper Processing & Refining',
        content: `Copper processing facilities utilize advanced flotation technologies separating copper minerals from waste rock, achieving recovery rates exceeding 95%. Flotation concentrates are then smelted and refined producing LME-grade cathodes meeting international quality standards. The processing chain includes crushing, grinding, flotation, smelting, and electrorefining, transforming raw ore into high-value products.

Smelting operations utilize modern flash smelting technology achieving high efficiency while minimizing emissions. Electrorefining produces 99.99% pure copper cathodes meeting LME specifications. By-product recovery captures valuable metals including gold, silver, and molybdenum, maximizing value recovery while reducing waste.

Environmental management includes comprehensive emission controls, water recycling systems, and waste management. Advanced technologies ensure that processing meets or exceeds environmental standards while maintaining operational efficiency. Continuous monitoring ensures compliance while enabling optimization.`,
        icon: Factory,
        alignment: 'left'
      },
      {
        title: 'Lithium Processing & Battery Materials',
        content: `Lithium processing facilities employ modern extraction and purification technologies producing battery-grade lithium chemicals. Processing includes ore beneficiation, acid leaching, purification, and crystallization, transforming spodumene ore into lithium carbonate and hydroxide meeting battery industry specifications.

Battery-grade production requires exceptional purity with specifications exceeding 99.5% for battery applications. Advanced purification technologies ensure that products meet stringent quality requirements while achieving high recovery rates. Quality control systems ensure consistent product quality meeting customer specifications.

Processing facilities are designed for scalability, with modular designs enabling capacity expansion as demand grows. Advanced automation ensures efficient operations while maintaining quality standards. These facilities position Afghanistan as a major supplier of battery materials for the global energy transition.`,
        icon: Zap,
        alignment: 'right'
      },
      {
        title: 'Gold Processing & Refining',
        content: `Gold processing utilizes cyanide leaching and carbon-in-pulp technologies achieving recovery rates exceeding 95%. Processing includes crushing, grinding, leaching, adsorption, elution, and electrowinning, transforming ore into refined gold meeting international standards. Advanced technologies ensure high recovery while meeting environmental standards.

Refining operations produce gold meeting London Good Delivery specifications, ensuring that products are acceptable in international markets. Quality control ensures consistent purity while security measures protect valuable products. These operations enable Afghanistan to capture full value from gold resources.

Environmental management includes comprehensive cyanide management, water treatment, and tailings management. Advanced technologies ensure that processing meets environmental standards while maintaining operational efficiency. Continuous monitoring ensures compliance while protecting environmental values.`,
        icon: Award,
        alignment: 'left'
      },
      {
        title: 'Value Addition & Capacity Building',
        content: `Processing operations maximize value recovery from Afghan ores while building domestic capacity. Training programs and technical assistance ensure that Afghan operators gain expertise in flotation, smelting, refining, and quality control. Over time, domestic capacity supports independent operations and maintenance. Integration with smelting and trade operations ensures end-to-end value chain. Environmental and safety standards are maintained throughout.`,
        icon: Building2,
        alignment: 'right'
      },
    ],

    processes: [
      {
        title: 'Ore Processing Chain',
        steps: [
          'Crushing and grinding reduce ore to optimal particle size',
          'Beneficiation separates valuable minerals from waste',
          'Concentration increases mineral content',
          'Smelting/leaching extracts metals from concentrates',
          'Refining produces pure products meeting quality standards',
          'Quality control ensures products meet specifications',
          'Packaging and shipping prepare products for markets'
        ]
      },
    ],

    benefits: [
      {
        title: 'Value Maximization',
        description: 'Processing transforms raw materials into high-value products maximizing economic benefit'
      },
      {
        title: 'Quality Standards',
        description: 'Products meet international quality standards ensuring market acceptance'
      },
      {
        title: 'Environmental Performance',
        description: 'Advanced technologies ensure environmental responsibility while maintaining efficiency'
      },
    ],

    relatedResources: [
      { name: 'Smelting Operations', href: '/operations/smelting', icon: Flame },
      { name: 'Trade & Export', href: '/operations/trade', icon: Truck },
      { name: 'Sustainability', href: '/operations/sustainability', icon: Leaf },
    ],
  },

  'smelting': {
    title: 'Smelting Operations & Metal Extraction',
    subtitle: 'Advanced Metal Extraction Facilities',
    overview: `Smelting operations transform mineral concentrates into pure metals through high-temperature processes employing advanced technologies. Smelting facilities utilize modern flash smelting, electric arc furnaces, and other advanced technologies achieving high efficiency while minimizing environmental impact. These operations produce metals meeting international quality standards while ensuring environmental responsibility.

Copper smelting produces blister copper and anodes for further refining, while iron smelting produces pig iron for steel production. Advanced smelting technologies achieve high metal recovery while capturing valuable by-products. Environmental controls ensure that emissions meet or exceed regulatory requirements, while energy efficiency minimizes operational costs.

Smelting facilities are designed for efficiency and environmental performance, with advanced emission control systems, energy recovery systems, and waste management. Continuous monitoring ensures optimal operations while maintaining compliance. These facilities demonstrate that smelting can be both efficient and environmentally responsible.`,

    stats: [
      { value: '99%+', label: 'Recovery', description: 'Metal extraction rate' },
      { value: 'LME Grade', label: 'Quality', description: 'International standards' },
      { value: 'Advanced', label: 'Technology', description: 'Flash smelting' },
      { value: '95%+', label: 'Efficiency', description: 'Energy utilization' },
      { value: 'Zero', label: 'Waste', description: 'By-product recovery' },
      { value: '24/7', label: 'Operations', description: 'Continuous smelting' },
    ],

    sections: [
      {
        title: 'Copper Smelting & Refining',
        content: `Copper smelting utilizes modern flash smelting technology achieving high efficiency while minimizing emissions. Flash smelting combines concentrate and oxygen in a single vessel, achieving rapid reaction with minimal energy consumption. The process produces matte containing copper and valuable by-products including gold, silver, and molybdenum.

Converting transforms matte into blister copper through oxidation, removing sulfur and iron. Blister copper is then refined through fire refining and electrorefining, producing 99.99% pure copper cathodes meeting LME specifications. By-product recovery captures valuable metals maximizing value recovery.

Environmental controls include comprehensive emission capture, treatment systems, and monitoring. Advanced technologies ensure that emissions meet or exceed regulatory requirements while maintaining operational efficiency. Continuous monitoring ensures compliance while enabling optimization.`,
        icon: Flame,
        alignment: 'left'
      },
      {
        title: 'Iron Smelting & Steel Production',
        content: `Iron smelting produces pig iron through blast furnace or direct reduction processes, with pig iron serving as feedstock for steel production. Integrated steel complexes combine smelting, steelmaking, and rolling operations, transforming iron ore into finished steel products. These integrated operations maximize value while ensuring quality.

Steel production utilizes basic oxygen furnaces or electric arc furnaces, transforming pig iron and scrap into steel meeting quality specifications. Continuous casting produces steel slabs, blooms, and billets for further processing. Rolling operations transform semi-finished products into finished steel meeting customer specifications.

Environmental management includes comprehensive emission controls, water recycling, and waste management. Advanced technologies ensure that operations meet environmental standards while maintaining efficiency. These facilities position Afghanistan as Central Asia's steel manufacturing hub.`,
        icon: Factory,
        alignment: 'right'
      },
      {
        title: 'By-Product Recovery & Environmental Performance',
        content: `Smelting operations capture valuable by-products including gold, silver, molybdenum, and sulfuric acid, maximizing value while reducing waste. By-product recovery systems are integrated into smelting flowsheets. Environmental performance is maintained through emission control, water recycling, and solid waste management. Continuous monitoring ensures compliance with regulatory and international standards.`,
        icon: Award,
        alignment: 'left'
      },
      {
        title: 'Capacity & Integration',
        content: `Smelting capacity is sized to match concentrate production from Mes Aynak, Hajigak, and other deposits. Integration with processing and trade operations ensures efficient product flow. Training and capacity building support domestic operations.`,
        icon: Building2,
        alignment: 'right'
      },
    ],

    relatedResources: [
      { name: 'Processing & Refining', href: '/operations/processing', icon: Factory },
      { name: 'Trade & Export', href: '/operations/trade', icon: Truck },
      { name: 'Sustainability', href: '/operations/sustainability', icon: Leaf },
    ],
  },

  'research': {
    title: 'Research & Exploration Operations',
    subtitle: 'Advanced Geological Research & Innovation',
    overview: `Research and exploration operations conduct comprehensive geological studies identifying new mineral deposits and advancing understanding of known resources. Research programs utilize advanced technologies including satellite imagery, geophysical surveys, and geochemical analysis, enabling discovery of new deposits while advancing knowledge of existing resources.

Exploration programs systematically evaluate geological potential, identifying targets for detailed investigation. Drilling programs test targets, providing samples for analysis and resource estimation. Advanced analytical techniques ensure accurate resource understanding enabling informed development decisions.

Research partnerships with international institutions ensure access to latest technologies and expertise. Collaboration with universities, research organizations, and technology companies advances knowledge while building domestic capacity. These partnerships ensure that Afghanistan benefits from global research advances.`,

    stats: [
      { value: '150+', label: 'Projects', description: 'Research programs' },
      { value: 'Advanced', label: 'Technology', description: 'Latest methods' },
      { value: '50+', label: 'Partners', description: 'International institutions' },
      { value: 'Comprehensive', label: 'Coverage', description: 'All provinces' },
      { value: 'Innovation', label: 'Focus', description: 'Technology development' },
      { value: 'Capacity', label: 'Building', description: 'Domestic expertise' },
    ],

    sections: [
      {
        title: 'Geological Research & Mapping',
        content: `Comprehensive geological mapping creates detailed understanding of Afghanistan's geology, identifying mineral potential and guiding exploration. Advanced mapping techniques including remote sensing, geophysical surveys, and field mapping create comprehensive geological databases. These databases guide exploration while advancing geological understanding.

Research programs investigate geological processes, mineral formation, and resource distribution, advancing fundamental understanding while identifying exploration targets. Collaborative research with international institutions ensures access to latest knowledge and technologies. These programs build domestic expertise while advancing global knowledge.`,
        icon: FlaskConical,
        alignment: 'left'
      },
      {
        title: 'Exploration Programs & Discovery',
        content: `Systematic exploration programs evaluate geological potential, identifying targets for detailed investigation. Exploration includes geological mapping, geophysical surveys, geochemical sampling, and drilling, providing comprehensive data for resource evaluation. Advanced exploration techniques ensure efficient target identification and evaluation.

Discovery programs focus on identifying new deposits, expanding known resources, and advancing understanding of mineral potential. Successful exploration programs identify new deposits while expanding known resources, ensuring continued resource availability. These programs ensure that Afghanistan maintains strong resource base supporting long-term development.`,
        icon: Compass,
        alignment: 'right'
      },
      {
        title: 'Drilling & Resource Estimation',
        content: `Drilling programs test exploration targets, providing samples for assay and geological logging. Core and chip samples enable resource estimation following international standards (JORC, NI 43-101). Geostatistical modeling and block models support feasibility studies. Research partnerships with USGS and international institutions advance methods and capacity.`,
        icon: Target,
        alignment: 'left'
      },
      {
        title: 'Innovation & Partnerships',
        content: `Research innovation includes application of remote sensing, geophysics, and geochemistry to Afghan geology. Partnerships with universities and technology companies ensure access to latest techniques. Domestic capacity building enables sustained research and exploration.`,
        icon: Globe,
        alignment: 'right'
      },
    ],

    relatedResources: [
      { name: 'Geological Surveys', href: '/operations/geological', icon: Compass },
      { name: 'Digital Mining', href: '/operations/digital', icon: Globe },
      { name: 'Investment Framework', href: '/operations/investment', icon: Scale },
    ],
  },
};

// Add remaining operations with similar comprehensive structure
const additionalOperations: Record<string, OperationsData> = {
  'geological': {
    title: 'Geological Surveys & Mapping',
    subtitle: 'Comprehensive Geological Assessment',
    overview: `Geological surveys conduct comprehensive mapping and assessment of Afghanistan's mineral potential, creating detailed understanding enabling informed development. Surveys utilize advanced technologies including satellite imagery, geophysical methods, and field mapping, creating comprehensive geological databases guiding exploration and development. Afghanistan's geological complexity—resulting from the collision of the Indian and Eurasian tectonic plates—has created exceptional mineral diversity. The Hindu Kush mountains, Pamir ranges, and Central Afghan blocks host deposits spanning the full spectrum from precious metals through industrial minerals to critical technology metals. Systematic mapping since the Soviet era has documented this wealth, while modern techniques continue to refine understanding and identify new opportunities.`,
    stats: [
      { value: '34', label: 'Provinces', description: 'Complete coverage' },
      { value: '150+', label: 'Minerals', description: 'Identified types' },
      { value: 'Comprehensive', label: 'Mapping', description: 'Detailed databases' },
      { value: '50+', label: 'Years', description: 'Systematic surveys' },
      { value: 'Advanced', label: 'Technology', description: 'Satellite & geophysics' },
    ],
    sections: [
      {
        title: 'Geological Mapping',
        content: `Comprehensive geological mapping creates detailed understanding of Afghanistan's geology, identifying mineral potential and guiding exploration. Multi-scale mapping from regional (1:500,000) through district (1:50,000) to deposit scale (1:5,000) enables systematic evaluation. Field mapping combines with remote sensing interpretation, creating integrated geological models. Structural analysis identifies controls on mineralization, guiding exploration targeting.`,
        icon: Compass,
        alignment: 'left'
      },
      {
        title: 'Remote Sensing & Satellite Imagery',
        content: `Satellite imagery provides regional coverage enabling rapid assessment of geological structures and alteration patterns. Multispectral and hyperspectral data identify mineral signatures from space, guiding ground-based follow-up. DEM (Digital Elevation Model) analysis reveals structural controls and drainage patterns. Change detection monitors mining activity and environmental impacts. International partnerships provide access to latest satellite platforms and processing techniques.`,
        icon: Globe,
        alignment: 'right'
      },
      {
        title: 'Geophysical Surveys',
        content: `Geophysical methods map subsurface geology without drilling. Magnetic surveys identify magnetic mineral concentrations and structural boundaries. Gravity surveys map density contrasts revealing buried intrusions and basins. Electromagnetic methods detect conductive sulfide mineralization. Seismic reflection images deep crustal structure. Airborne surveys provide rapid regional coverage; ground surveys enable detailed deposit-scale investigation. Integrated interpretation maximizes information from each method.`,
        icon: Zap,
        alignment: 'left'
      },
      {
        title: 'Geochemical Sampling',
        content: `Geochemical sampling identifies mineral signatures in soil, rock, and stream sediments. Multi-element analysis detects pathfinder elements associated with deposit types. Statistical treatment identifies anomalies above background. Orientation surveys establish sampling protocols for each deposit type. Quality control ensures analytical reliability. Regional geochemical programs have covered most of Afghanistan, creating comprehensive datasets guiding exploration.`,
        icon: FlaskConical,
        alignment: 'right'
      },
      {
        title: 'Resource Estimation & Modeling',
        content: `Resource estimation transforms drill data into quantified mineral resources. Geostatistical methods account for spatial variability. Block models represent deposit geometry and grade distribution. Classification follows international standards (JORC, NI 43-101). Sensitivity analysis evaluates project robustness. Modern software enables rapid model updates as new data arrives. Afghan geologists receive training in these techniques through international partnerships.`,
        icon: Target,
        alignment: 'left'
      },
      {
        title: 'Database Management & GIS',
        content: `Geological databases integrate diverse data types into unified systems. GIS platforms enable spatial analysis and visualization. Data standards ensure compatibility and quality. Historical data digitization preserves Soviet-era knowledge. Web-based access enables efficient data sharing. These systems form the foundation for informed mineral development decisions across Afghanistan.`,
        icon: Globe,
        alignment: 'right'
      },
    ],
  },
  'trade': {
    title: 'Trade & Export Operations',
    subtitle: 'International Mineral Trade',
    overview: `Trade and export operations facilitate international mineral sales, ensuring that Afghan minerals reach global markets efficiently. Export operations include logistics, documentation, quality control, and market access, enabling successful international trade. Afghanistan's landlocked position requires coordinated logistics through multiple corridors—Pakistan, Iran, Central Asia—ensuring supply chain resilience. Quality certification (LME for metals, LBMA for gold, gemological labs for stones) enables premium pricing. Trade agreements and bilateral arrangements facilitate customs clearance and market access.`,
    stats: [
      { value: 'Global', label: 'Markets', description: 'International reach' },
      { value: 'LME', label: 'Standards', description: 'Quality compliance' },
      { value: '3', label: 'Corridors', description: 'Export routes' },
      { value: '24/7', label: 'Logistics', description: 'Supply chain' },
      { value: 'Certified', label: 'Quality', description: 'International standards' },
    ],
    sections: [
      {
        title: 'Export Operations',
        content: `Export operations facilitate international mineral sales ensuring efficient market access. Documentation systems manage customs declarations, certificates of origin, and quality certifications. Logistics coordination ensures timely delivery from mine to customer. Payment mechanisms (letters of credit, trade finance) facilitate international transactions. Market intelligence tracks prices and demand enabling optimal sales timing.`,
        icon: Truck,
        alignment: 'left'
      },
      {
        title: 'Logistics & Supply Chain',
        content: `Mineral logistics connect production sites to global markets through integrated supply chains. Road transport moves product to rail heads or border crossings. Railway connections to Pakistan, Iran, and Central Asia provide high-volume transport. Port access agreements ensure competitive ocean freight. Tracking systems provide real-time shipment visibility. Contingency planning maintains supply through corridor disruptions.`,
        icon: Truck,
        alignment: 'right'
      },
      {
        title: 'Quality Control & Certification',
        content: `Quality control ensures products meet customer specifications and international standards. Metal products receive LME/LBMA certification enabling exchange trading. Gemstones receive laboratory certification (GIA, AGS) for premium markets. Sampling and assaying follow international protocols. Quality management systems (ISO 9001) ensure consistent standards. Certification enables access to premium markets and pricing.`,
        icon: Award,
        alignment: 'left'
      },
      {
        title: 'Market Development',
        content: `Market development expands customer base and captures value. Direct sales to end users reduce intermediary margins. Long-term contracts provide revenue certainty. Diversification across markets reduces concentration risk. Marketing highlights Afghan quality and ethical sourcing. Trade missions and exhibitions build customer relationships.`,
        icon: Globe,
        alignment: 'right'
      },
      {
        title: 'Trade Finance & Payments',
        content: `Trade finance enables international transactions through letters of credit, bank guarantees, and export credit. Payment structures accommodate different risk profiles. Currency hedging manages exchange rate exposure. Escrow arrangements protect both parties. International banking relationships facilitate efficient settlement. These mechanisms enable trade regardless of counterparty location.`,
        icon: Scale,
        alignment: 'left'
      },
    ],
  },
  'investment': {
    title: 'Investment Framework Operations',
    subtitle: 'Investment Coordination & Support',
    overview: `Investment framework operations facilitate investment processes, supporting investors throughout project development. Operations include application processing, contract negotiation, and ongoing support ensuring successful investment. The one-stop-shop approach streamlines permits and approvals. Dedicated investment teams provide technical and legal support. Transparent processes and predictable timelines build investor confidence. Over $10 billion in committed investment demonstrates framework effectiveness.`,
    stats: [
      { value: '$10B+', label: 'Committed', description: 'Investment capital' },
      { value: '50+', label: 'Projects', description: 'In development' },
      { value: '30+', label: 'BITs', description: 'Investment treaties' },
      { value: 'One-Stop', label: 'Shop', description: 'Streamlined permits' },
      { value: 'ICSID', label: 'Arbitration', description: 'Dispute resolution' },
    ],
    sections: [
      {
        title: 'Investment Support',
        content: `Investment operations provide comprehensive support throughout investment processes. Application guidance ensures complete submissions. Technical briefings provide geological and development information. Legal support clarifies regulatory requirements. Site visit coordination enables due diligence. The investment team serves as single point of contact throughout development.`,
        icon: Scale,
        alignment: 'left'
      },
      {
        title: 'Licensing & Permitting',
        content: `Licensing processes follow transparent procedures with defined timelines. Exploration licenses grant exclusive rights for up to 5 years. Mining licenses follow upon discovery of economic deposits. Environmental permits require impact assessment and public consultation. The one-stop-shop coordinates across ministries reducing approval time. Online systems enable application tracking and status updates.`,
        icon: FileText,
        alignment: 'right'
      },
      {
        title: 'Contract Negotiation',
        content: `Contract negotiation balances investor needs with national interests. Model contracts provide starting points for negotiation. Fiscal terms (royalties, taxes) follow transparent frameworks. Development obligations ensure project advancement. Dispute resolution provisions include international arbitration. Experienced negotiators ensure fair outcomes for all parties.`,
        icon: Scale,
        alignment: 'left'
      },
      {
        title: 'Due Diligence Support',
        content: `Due diligence support enables informed investment decisions. Data rooms provide access to geological and technical information. Site visits enable physical inspection of deposits. Stakeholder meetings facilitate community and government engagement. Legal and financial advisors are available for consultation. This support accelerates investment decisions while ensuring comprehensive evaluation.`,
        icon: CheckCircle2,
        alignment: 'right'
      },
      {
        title: 'Investor Relations & Liaison',
        content: `A dedicated investor relations team provides continuous liaison between international partners and government agencies. Quarterly performance briefings, transparent revenue reporting, and structured stakeholder forums ensure alignment between development objectives and investor expectations. Regulatory compliance monitoring tracks 47 distinct license obligations across environmental, fiscal, and social domains.`,
        icon: Target,
        alignment: 'left'
      },
    ],
  },
  'sustainability': {
    title: 'Sustainability Operations',
    subtitle: 'Environmental Excellence & Responsibility',
    overview: `Sustainability operations ensure that mining development meets environmental standards while providing community benefits. Operations include environmental management, community development, and economic diversification ensuring sustainable development. Environmental management covers water recycling (95%+ reuse in processing), zero-discharge waste management, biodiversity conservation, and closure planning. Climate and energy initiatives support carbon footprint reduction. Sustainability reporting aligns with international frameworks. Integration with community and safety operations ensures holistic approach.`,
    stats: [
      { value: '95%+', label: 'Water Reuse', description: 'Recycling efficiency' },
      { value: 'Zero', label: 'Discharge', description: 'Waste management' },
      { value: 'Biodiversity', label: 'Conservation', description: 'Closure planning' },
      { value: 'Reporting', label: 'Frameworks', description: 'International' },
      { value: 'Climate', label: 'Energy', description: 'Initiatives' },
      { value: 'Holistic', label: 'Approach', description: 'Community and safety' },
    ],
    sections: [
      { title: 'Environmental Management', content: `Sustainability operations ensure environmental responsibility while maintaining operational efficiency. Water recycling, emission control, and tailings management are core elements. EIA and monitoring support compliance and continuous improvement.`, icon: Leaf, alignment: 'left' },
      { title: 'Closure & Biodiversity', content: `Mine closure planning and biodiversity conservation are integrated into project lifecycle. Rehabilitation and post-closure land use are documented. International good practice guides implementation.`, icon: Compass, alignment: 'right' },
      { title: 'Reporting & Standards', content: `Sustainability reporting follows international frameworks. Alignment with GRI, EITI, and sector standards supports transparency. Data support roadmap and stakeholder communication.`, icon: FileText, alignment: 'left' },
      { title: 'Integration with Operations', content: `Sustainability is integrated with processing, community, and safety operations. Training and capacity building ensure consistent implementation across projects.`, icon: Target, alignment: 'right' },
    ],
  },
  'community': {
    title: 'Community Development Operations',
    subtitle: 'Local Employment & Economic Development',
    overview: `Community development operations ensure that mining benefits reach local communities through employment, procurement, infrastructure, and social programs. Operations prioritize local hiring, maximize local content (40–60% procurement target), and support community development ensuring maximum local benefit. Direct employment targets (100K+ jobs) and indirect employment through supply chain create broad impact. Infrastructure and social investment (health, education) are part of community agreements. Grievance mechanisms and dialogue ensure responsive management.`,
    stats: [
      { value: '100K+', label: 'Jobs', description: 'Direct employment' },
      { value: '40-60%', label: 'Local Content', description: 'Procurement target' },
      { value: 'Infrastructure', label: 'Investment', description: 'Local benefit' },
      { value: 'Health', label: 'Education', description: 'Social programs' },
      { value: 'Grievance', label: 'Dialogue', description: 'Mechanisms' },
      { value: 'Agreements', label: 'Community', description: 'Commitments' },
    ],
    sections: [
      { title: 'Community Benefits', content: `Community development operations ensure that mining provides maximum local benefit. Employment, procurement, and infrastructure are prioritized. Benefit-sharing agreements document commitments.`, icon: Users, alignment: 'left' },
      { title: 'Local Content & Employment', content: `Local hiring and procurement targets maximize local economic impact. Training programs build skills. Supply chain development supports local businesses.`, icon: Building2, alignment: 'right' },
      { title: 'Social Investment', content: `Health, education, and infrastructure investments support community development. Programs are aligned with community priorities and national goals.`, icon: Award, alignment: 'left' },
      { title: 'Stakeholder Engagement', content: `Ongoing dialogue and grievance mechanisms ensure responsive management. Community relations are integrated with environmental and safety operations.`, icon: Target, alignment: 'right' },
    ],
  },
  'digital': {
    title: 'Digital Mining Operations',
    subtitle: 'Technology Integration & Innovation',
    overview: `Digital mining operations integrate advanced technologies including automation, data analytics, and digital systems improving efficiency and safety. Technology integration enables optimization while building technical capacity supporting continued development. Automated systems cover drilling, hauling, and processing where applicable. Data analytics support predictive maintenance, grade control, and resource optimization. GIS and integrated systems enable real-time monitoring and decision support. Cybersecurity and data governance ensure reliable operations.`,
    stats: [
      { value: 'Automated', label: 'Systems', description: 'Advanced technology' },
      { value: 'Data', label: 'Analytics', description: 'Optimization' },
      { value: 'GIS', label: 'Monitoring', description: 'Real-time' },
      { value: 'Predictive', label: 'Maintenance', description: 'Grade control' },
      { value: 'Cybersecurity', label: 'Governance', description: 'Data' },
      { value: 'Capacity', label: 'Building', description: 'Technical' },
    ],
    sections: [
      { title: 'Technology Integration', content: `Digital operations integrate advanced technologies improving efficiency and safety. Automation in drilling, hauling, and processing reduces risk and improves productivity.`, icon: Globe, alignment: 'left' },
      { title: 'Data Analytics & Optimization', content: `Data analytics support predictive maintenance, grade control, and resource optimization. Integrated platforms enable real-time monitoring and decision support.`, icon: Zap, alignment: 'right' },
      { title: 'GIS & Integrated Systems', content: `GIS and integrated mine planning systems support geological, operational, and environmental data management. Data governance ensures quality and security.`, icon: Compass, alignment: 'left' },
      { title: 'Capacity & Innovation', content: `Training and partnerships build domestic digital capacity. Innovation in automation and analytics supports long-term operational excellence.`, icon: Target, alignment: 'right' },
    ],
  },
  'safety': {
    title: 'Health & Safety Operations',
    subtitle: 'Workplace Safety & Occupational Health',
    overview: `Health and safety operations ensure safe working conditions protecting workers and communities. Operations include safety training, hazard management, emergency response, and occupational health programs ensuring that every worker returns home safely. Zero fatalities is the safety target; international standards (e.g. IFC, OHSAS) guide implementation. Risk assessment and control measures address physical, chemical, and ergonomic hazards. Emergency response and medical support are in place. Safety culture and leadership drive continuous improvement.`,
    stats: [
      { value: 'Zero', label: 'Fatalities', description: 'Safety target' },
      { value: 'International', label: 'Standards', description: 'Best practices' },
      { value: 'Risk', label: 'Assessment', description: 'Hazard control' },
      { value: 'Emergency', label: 'Response', description: 'Medical support' },
      { value: 'Training', label: 'Culture', description: 'Leadership' },
      { value: 'IFC', label: 'OHSAS', description: 'Alignment' },
    ],
    sections: [
      { title: 'Safety Management', content: `Health and safety operations ensure safe working conditions meeting international standards. Safety management systems cover policy, risk assessment, and continuous improvement.`, icon: Shield, alignment: 'left' },
      { title: 'Hazard Control & Training', content: `Hazard identification and control measures address physical, chemical, and ergonomic risks. Training programs ensure workforce competence. PPE and procedures are enforced.`, icon: Target, alignment: 'right' },
      { title: 'Emergency Response & Occupational Health', content: `Emergency response plans and medical support protect workers. Occupational health programs monitor exposure and support wellbeing.`, icon: Award, alignment: 'left' },
      { title: 'Culture & Integration', content: `Safety culture and leadership drive continuous improvement. Safety is integrated with community, sustainability, and operational planning.`, icon: Building2, alignment: 'right' },
    ],
  },
};

Object.assign(operationsDatabase, additionalOperations);

// Wire in massive section expansions
import {
  PROCESSING_EXTRA_SECTIONS,
  SMELTING_EXTRA_SECTIONS,
  RESEARCH_EXTRA_SECTIONS,
  TRADE_EXTRA_SECTIONS,
  SUSTAINABILITY_EXTRA_SECTIONS,
  COMMUNITY_EXTRA_SECTIONS,
  DIGITAL_EXTRA_SECTIONS,
  SAFETY_EXTRA_SECTIONS,
} from './operationsSectionsExpansion';

// Append extra sections to each operation entry
if (operationsDatabase['processing']) {
  operationsDatabase['processing'].sections.push(...PROCESSING_EXTRA_SECTIONS);
}
if (operationsDatabase['smelting']) {
  operationsDatabase['smelting'].sections.push(...SMELTING_EXTRA_SECTIONS);
}
if (operationsDatabase['research']) {
  operationsDatabase['research'].sections.push(...RESEARCH_EXTRA_SECTIONS);
}
if (operationsDatabase['trade']) {
  operationsDatabase['trade'].sections.push(...TRADE_EXTRA_SECTIONS);
}
if (operationsDatabase['sustainability']) {
  operationsDatabase['sustainability'].sections.push(...SUSTAINABILITY_EXTRA_SECTIONS);
}
if (operationsDatabase['community']) {
  operationsDatabase['community'].sections.push(...COMMUNITY_EXTRA_SECTIONS);
}
if (operationsDatabase['digital']) {
  operationsDatabase['digital'].sections.push(...DIGITAL_EXTRA_SECTIONS);
}
if (operationsDatabase['safety']) {
  operationsDatabase['safety'].sections.push(...SAFETY_EXTRA_SECTIONS);
}

export { operationsDatabase };
