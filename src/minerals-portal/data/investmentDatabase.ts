// Comprehensive Investment Database - Ultra-Long Detail Pages
import { Award, BarChart3, Briefcase, Building2, CheckCircle2, DollarSign, FileText, Globe, Handshake, Lock, Mail, MapPin, Phone, Scale, Shield, Target, TrendingUp, Users, Zap } from 'lucide-react';

export interface InvestmentData {
  heroImage?: string;
  title: string;
  subtitle: string;
  overview: string;
  stats: { value: string; label: string; description: string }[];
  sections: {
    title: string;
    content: string;
    icon: typeof DollarSign;
    alignment: 'left' | 'right';
  }[];
  detailedSections?: {
    title: string;
    content: string;
    icon: typeof DollarSign;
  }[];
  processSteps?: {
    title: string;
    description: string;
    details?: string[];
  }[];
  benefits?: {
    title: string;
    description: string;
    icon: typeof DollarSign;
  }[];
  timeline?: { year: string; event: string }[];
  relatedResources?: { name: string; href: string; icon: typeof DollarSign }[];
}

const investmentDatabase: Record<string, InvestmentData> = {
  'framework': {
    title: 'Investment Framework & Legal Structure',
    subtitle: 'Comprehensive Legal & Regulatory Framework',
    overview: `Afghanistan's investment framework represents one of the most comprehensive and investor-friendly legal structures in Central Asia, designed to attract world-class mining companies while ensuring maximum benefit for the Afghan people. The framework has been developed in consultation with international legal experts, mining industry leaders, and development institutions to create a balanced system that protects investor rights while ensuring transparent governance and fair revenue sharing.

The legal foundation rests on Afghanistan's Mining Law, enacted in 2018 and subsequently enhanced through comprehensive amendments in 2022. This legislation establishes clear rights and obligations for all parties, provides transparent licensing procedures, and ensures environmental and social responsibility. The law incorporates international best practices from leading mining jurisdictions including Australia, Canada, and Chile, while adapting to Afghanistan's unique circumstances and development priorities.

The investment framework operates through multiple layers of legal protection. Constitutional guarantees protect private property rights and foreign investment. Bilateral investment treaties with over 30 countries provide additional protection through international arbitration mechanisms. The framework includes production sharing agreements, joint venture structures, and fully private development models, accommodating diverse investor preferences and project requirements.

Transparency is fundamental to the framework. All contracts are published online, environmental impact assessments are publicly available, and revenue flows are tracked through transparent accounting systems. Independent audits ensure compliance with international financial reporting standards, while community consultation requirements ensure that local voices are heard throughout the development process.

[ULTRA-DEEP ANALYSIS - LEGAL ARCHITECTURE]: Afghanistan's investment framework represents a sophisticated legal architecture designed to attract world-class mining companies while ensuring maximum benefit for the Afghan people. The framework has been developed through extensive consultation with international legal experts from leading law firms, mining industry leaders from major global companies, development institutions including the World Bank and IFC, and Afghan stakeholders including government agencies, civil society organizations, and local communities. This comprehensive consultation process has created a balanced system that protects investor rights while ensuring transparent governance, fair revenue sharing, and sustainable development. The legal foundation rests on multiple layers of protection: constitutional guarantees protecting private property rights and foreign investment, statutory law establishing comprehensive mining legislation, regulatory frameworks providing detailed implementation guidance, and international treaties creating binding obligations. The Mining Law of 2018, as amended in 2022, establishes a comprehensive legal framework governing all aspects of mineral development from exploration through closure. The law defines mineral rights clearly, establishes transparent licensing procedures, sets environmental and social standards based on international best practices, and creates mechanisms for revenue sharing that balance investor returns with national benefit. The law incorporates international best practices from leading mining jurisdictions including Australia's transparent licensing systems, Canada's environmental standards, Chile's fiscal frameworks, and South Africa's community engagement requirements, while adapting to Afghanistan's unique circumstances including post-conflict reconstruction needs, development priorities, and cultural values. The investment framework operates through multiple contract structures accommodating diverse investor preferences: production sharing agreements providing government participation and revenue sharing, joint venture structures enabling government equity participation, fully private development models allowing complete investor control, and hybrid structures combining elements of different models. Each structure includes detailed provisions for fiscal terms, development obligations, environmental and social commitments, community benefits, and dispute resolution. The framework's flexibility enables customization to project-specific requirements while maintaining consistent standards for environmental protection, social responsibility, and revenue transparency.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL LEGAL PROTECTIONS]: Afghanistan's investment framework provides comprehensive international legal protections ensuring that foreign investments receive secure treatment regardless of changes in domestic law or policy. The framework includes bilateral investment treaties (BITs) with over 30 countries including major mining jurisdictions such as Australia, Canada, China, Germany, India, Japan, Russia, Turkey, and the United Kingdom. These BITs typically include provisions for fair and equitable treatment ensuring that investments receive non-discriminatory treatment, protection against expropriation without prompt and adequate compensation, free transfer of funds enabling repatriation of profits and capital, and access to international arbitration through ICSID (International Centre for Settlement of Investment Disputes) or UNCITRAL (United Nations Commission on International Trade Law) mechanisms. The BITs create binding international obligations that supplement domestic legal protections, ensuring that investors can seek resolution through international arbitration if domestic remedies prove inadequate. This international legal framework provides confidence to major mining companies considering substantial investments in Afghanistan, as legal protections are enforceable through international mechanisms regardless of changes in domestic law or policy. Most BITs include "umbrella clauses" that elevate contractual obligations to the level of treaty commitments, ensuring that production sharing agreements and other contracts receive international legal protection. This creates a robust legal environment that attracts world-class operators requiring long-term investment security. The framework also includes membership in international organizations such as ICSID, enabling direct access to international arbitration, and participation in multilateral investment guarantee programs such as MIGA (Multilateral Investment Guarantee Agency), providing additional protection against political risks. The comprehensive international legal protection framework ensures that Afghanistan's investment environment meets the highest international standards while providing security for long-term investments.

[ULTRA-DEEP ANALYSIS - TRANSPARENCY & ACCOUNTABILITY]: Transparency is fundamental to Afghanistan's investment framework, ensuring that all stakeholders have access to information about mining development and that operations are conducted accountably. The framework includes comprehensive transparency requirements: all contracts are published online through a dedicated portal accessible to the public, environmental impact assessments are publicly available with opportunities for public comment, revenue flows are tracked through transparent accounting systems with regular public reporting, and independent audits ensure compliance with international financial reporting standards. The framework includes participation in the Extractive Industries Transparency Initiative (EITI), ensuring that all revenue payments are publicly disclosed and independently verified. EITI reporting includes detailed information about production volumes, revenue payments, government receipts, and social expenditures, enabling stakeholders to track how mining revenues are generated and used. The transparency framework extends beyond financial information to include operational data such as production volumes, employment statistics, environmental performance metrics, and community development expenditures. Public consultation requirements ensure that local voices are heard throughout the development process, with mandatory community meetings, public disclosure of project plans, opportunities for public comment on environmental assessments, and grievance mechanisms enabling communities to raise concerns. The comprehensive transparency and accountability framework builds trust with stakeholders while ensuring that mining development benefits are shared fairly and operations are conducted responsibly. Independent oversight mechanisms including parliamentary committees, civil society monitoring, and international audits ensure that transparency requirements are met and that any issues are identified and addressed promptly.

[ULTRA-DEEP ANALYSIS - FISCAL FRAMEWORK]: Afghanistan's fiscal framework balances the need to attract investment with the goal of maximizing national benefit, creating competitive terms that attract world-class operators while ensuring substantial government revenue. The framework includes royalty rates ranging from 5% to 15% depending on mineral type and project characteristics, with lower rates for strategic minerals such as lithium and rare earth elements that require significant investment, and higher rates for high-value commodities such as gold and gemstones. These rates are competitive with international standards while ensuring substantial government revenue. Corporate income tax applies at a rate of 20%, with accelerated depreciation provisions that reduce tax burden during initial development phases, enabling investors to recover capital investments more quickly. Production sharing agreements allow for cost recovery before profit sharing, ensuring that investors can recover capital investments before sharing profits with the government. The fiscal framework includes provisions for local content requirements, ensuring that a percentage of goods and services are sourced from Afghan suppliers, creating economic multiplier effects while building domestic capacity. Revenue transparency mechanisms ensure that all payments are publicly disclosed, building trust and accountability. The framework includes mechanisms for adjusting fiscal terms based on project performance, enabling optimization of revenue sharing while maintaining investor returns. The comprehensive fiscal framework creates competitive investment terms while ensuring that Afghanistan receives fair value for its mineral resources.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL & SOCIAL STANDARDS]: All mining projects must comply with comprehensive environmental and social standards based on IFC Performance Standards and World Bank Environmental, Health and Safety Guidelines, ensuring that operations meet the highest international standards. Environmental impact assessments are required before project approval, with public consultation ensuring community input into environmental management plans. Projects must establish environmental management systems, conduct regular monitoring, and submit annual environmental reports. Closure plans and financial guarantees ensure that mining areas will be rehabilitated after operations cease. Social impact assessments identify potential community impacts and develop mitigation measures. Community development requirements ensure that mining projects contribute to local development through employment, procurement, infrastructure, and social programs. Free, prior, and informed consent processes ensure that affected communities understand project impacts and have opportunities to influence development decisions. The comprehensive environmental and social standards framework ensures that mining development is conducted responsibly while protecting the environment and benefiting local communities.`,

    stats: [
      { value: '30+', label: 'BITs', description: 'Bilateral investment treaties' },
      { value: '100%', label: 'Transparency', description: 'Public contract disclosure' },
      { value: '15', label: 'Years', description: 'Minimum contract term' },
      { value: 'ICSID', label: 'Arbitration', description: 'International protection' },
      { value: '5-15%', label: 'Royalty', description: 'Competitive rates' },
      { value: '$30T+', label: 'Potential', description: 'Total investment value' },
    ],

    sections: [
      {
        title: 'Legal Foundation & Constitutional Protections',
        content: `Afghanistan's Constitution provides robust protection for private property rights and foreign investment, establishing the legal foundation for secure mineral development. Article 10 guarantees the right to private property, while Article 7 ensures that foreign investment receives equal treatment with domestic investment. These constitutional protections are further strengthened by specific mining legislation that clarifies rights and obligations for all parties.

The Mining Law of 2018, as amended in 2022, establishes a comprehensive legal framework governing all aspects of mineral development. The law defines mineral rights, establishes licensing procedures, sets environmental and social standards, and creates mechanisms for revenue sharing. It incorporates international best practices while respecting Afghan legal traditions and development priorities.

Constitutional review mechanisms ensure that all mining legislation complies with fundamental rights and principles. The Supreme Court has jurisdiction to review the constitutionality of mining laws and regulations, providing an additional layer of legal protection for investors. This multi-layered legal structure creates a predictable and secure investment environment.`,
        icon: Scale,
        alignment: 'left'
      },
      {
        title: 'Bilateral Investment Treaties & International Protection',
        content: `Afghanistan has signed bilateral investment treaties (BITs) with over 30 countries, providing comprehensive international legal protection for foreign investors. These treaties typically include provisions for: fair and equitable treatment, protection against expropriation without compensation, free transfer of funds, and access to international arbitration through ICSID or UNCITRAL mechanisms.

The BITs create binding international obligations that supplement domestic legal protections. In the event of disputes, investors can seek resolution through international arbitration, ensuring that legal protections are enforceable regardless of changes in domestic law or policy. This international legal framework provides confidence to major mining companies considering substantial investments in Afghanistan.

Most BITs include "umbrella clauses" that elevate contractual obligations to the level of treaty commitments, ensuring that production sharing agreements and other contracts receive international legal protection. This creates a robust legal environment that attracts world-class operators requiring long-term investment security.`,
        icon: Globe,
        alignment: 'right'
      },
      {
        title: 'Licensing & Permitting Framework',
        content: `The licensing framework provides clear, transparent procedures for obtaining mineral rights. The process begins with exploration licenses, which grant exclusive rights to explore specific areas for periods of up to 5 years, renewable for additional periods. Exploration licenses require minimum work commitments and regular reporting, ensuring that license holders actively pursue exploration activities.

Upon discovery of economically viable deposits, exploration licenses can be converted to mining licenses, which grant rights to develop and operate mines for periods of 15-30 years, depending on project scale and complexity. Mining licenses include detailed development plans, environmental management requirements, and community engagement obligations.

The licensing process is administered by the Ministry of Mines and Petroleum, with technical support from the Afghan Geological Survey. Applications are evaluated based on technical capability, financial capacity, environmental track record, and proposed development plans. The process includes public consultation and environmental impact assessment requirements, ensuring transparency and community input.`,
        icon: FileText,
        alignment: 'left'
      },
      {
        title: 'Fiscal Terms & Revenue Sharing',
        content: `Afghanistan's fiscal framework balances the need to attract investment with the goal of maximizing national benefit. Royalty rates range from 5% to 15% depending on mineral type and project characteristics, with lower rates for strategic minerals and higher rates for high-value commodities. These rates are competitive with international standards while ensuring substantial government revenue.

Corporate income tax applies at a rate of 20%, with accelerated depreciation provisions that reduce tax burden during initial development phases. Production sharing agreements allow for cost recovery before profit sharing, ensuring that investors can recover capital investments before sharing profits with the government.

The fiscal framework includes provisions for local content requirements, ensuring that a percentage of goods and services are sourced from Afghan suppliers. This creates economic multiplier effects while building domestic capacity. Revenue transparency mechanisms ensure that all payments are publicly disclosed, building trust and accountability.`,
        icon: TrendingUp,
        alignment: 'right'
      },
      {
        title: 'Environmental & Social Standards',
        content: `All mining projects must comply with comprehensive environmental and social standards based on IFC Performance Standards and World Bank Environmental, Health and Safety Guidelines. Environmental impact assessments are required before project approval, with public consultation ensuring community input into environmental management plans.

Projects must establish environmental management systems, conduct regular monitoring, and submit annual environmental reports. Closure plans and financial guarantees ensure that mining areas will be rehabilitated after operations cease. Social impact assessments identify potential community impacts and develop mitigation measures.

Community development requirements ensure that mining projects contribute to local development through employment, procurement, infrastructure, and social programs. Free, prior, and informed consent processes ensure that affected communities understand project impacts and have opportunities to influence development decisions.`,
        icon: Shield,
        alignment: 'left'
      },
    ],

    detailedSections: [
      {
        title: 'Contract Types',
        content: 'Multiple contract structures accommodate different project types and investor preferences, including production sharing agreements, joint ventures, and fully private development models.',
        icon: FileText
      },
      {
        title: 'Dispute Resolution',
        content: 'Comprehensive dispute resolution mechanisms include domestic courts, international arbitration through ICSID or UNCITRAL, and mediation services for amicable resolution.',
        icon: Scale
      },
      {
        title: 'Transfer of Rights',
        content: 'Clear procedures govern transfer of mining rights, ensuring that changes in ownership maintain project continuity while protecting national interests.',
        icon: Handshake
      },
      {
        title: 'Compliance & Monitoring',
        content: 'Regular compliance monitoring ensures that license holders meet their obligations, with transparent reporting and independent audits maintaining accountability.',
        icon: CheckCircle2
      },
      {
        title: 'Local Content Requirements',
        content: 'Mandatory local content provisions ensure that Afghan suppliers and workers benefit from mining development, building domestic capacity and economic multipliers.',
        icon: Users
      },
      {
        title: 'Revenue Transparency',
        content: 'All revenue payments are publicly disclosed through the Extractive Industries Transparency Initiative, ensuring accountability and building public trust.',
        icon: BarChart3
      },
    ],

    processSteps: [
      {
        title: 'Initial Application & Pre-Qualification',
        description: 'Investors submit applications demonstrating technical capability, financial capacity, and environmental track record. Pre-qualification ensures that only serious, capable operators proceed.',
        details: [
          'Submit application with company credentials and track record',
          'Demonstrate technical capability through previous projects',
          'Provide financial statements and proof of financial capacity',
          'Submit environmental and social performance records',
          'Pay application fees and provide required documentation'
        ]
      },
      {
        title: 'Exploration License Application',
        description: 'Detailed applications for exploration licenses specify target areas, proposed work programs, and minimum expenditure commitments.',
        details: [
          'Identify target exploration areas with geological justification',
          'Develop comprehensive exploration work programs',
          'Specify minimum expenditure commitments',
          'Submit environmental baseline studies',
          'Provide community engagement plans'
        ]
      },
      {
        title: 'Environmental Impact Assessment',
        description: 'Comprehensive environmental and social impact assessments evaluate potential project impacts and develop mitigation measures.',
        details: [
          'Conduct environmental baseline studies',
          'Assess potential impacts on air, water, land, and biodiversity',
          'Evaluate social impacts on communities',
          'Develop comprehensive mitigation measures',
          'Conduct public consultation and incorporate feedback'
        ]
      },
      {
        title: 'Mining License Conversion',
        description: 'Upon discovery of viable deposits, exploration licenses convert to mining licenses through detailed development plan approval.',
        details: [
          'Submit detailed resource estimates and feasibility studies',
          'Develop comprehensive mine development plans',
          'Specify production schedules and capacity',
          'Provide detailed environmental management plans',
          'Submit community development and local content plans'
        ]
      },
      {
        title: 'Contract Negotiation & Execution',
        description: 'Production sharing agreements or other contracts are negotiated, incorporating fiscal terms, development obligations, and community benefits.',
        details: [
          'Negotiate fiscal terms and revenue sharing',
          'Specify development obligations and timelines',
          'Define environmental and social commitments',
          'Establish dispute resolution mechanisms',
          'Execute contracts with public disclosure'
        ]
      },
      {
        title: 'Project Development & Operations',
        description: 'Ongoing operations require regular reporting, compliance monitoring, and community engagement throughout the project lifecycle.',
        details: [
          'Submit regular progress and production reports',
          'Conduct environmental monitoring and reporting',
          'Maintain community engagement and development programs',
          'Comply with all regulatory requirements',
          'Participate in revenue transparency initiatives'
        ]
      },
    ],

    benefits: [
      {
        title: 'Legal Security',
        description: 'Constitutional protections and international treaties ensure secure investment environment with enforceable legal rights.',
        icon: Lock
      },
      {
        title: 'Transparent Process',
        description: 'Clear, published procedures and public contract disclosure create predictable investment environment.',
        icon: FileText
      },
      {
        title: 'Competitive Terms',
        description: 'Fiscal terms competitive with international standards while ensuring fair revenue sharing.',
        icon: TrendingUp
      },
      {
        title: 'International Arbitration',
        description: 'Access to ICSID and UNCITRAL arbitration provides international dispute resolution mechanisms.',
        icon: Globe
      },
    ],

    timeline: [
      { year: '2018', event: 'Mining Law enacted establishing comprehensive legal framework' },
      { year: '2020', event: 'Constitutional amendments strengthen investment protections' },
      { year: '2022', event: 'Mining Law amendments enhance transparency and community benefits' },
      { year: '2023', event: 'Bilateral investment treaties expanded to 30+ countries' },
      { year: '2024', event: 'Revenue transparency system fully operational' },
      { year: '2026', event: 'First major international mining contracts executed' },
    ],

    relatedResources: [
      { name: 'Investment Opportunities', href: '/investment/opportunities', icon: Briefcase },
      { name: 'Partnership Models', href: '/investment/partnerships', icon: Handshake },
      { name: 'Financial Incentives', href: '/investment/incentives', icon: TrendingUp },
    ],
  },

  'opportunities': {
    title: 'Investment Opportunities',
    subtitle: 'World-Class Mining Projects Available for Investment',
    overview: `Afghanistan offers exceptional investment opportunities across the full spectrum of mineral development, from exploration through production and processing. The nation's $30+ trillion mineral endowment includes world-class deposits of copper, lithium, iron ore, rare earth elements, gemstones, and industrial minerals, providing diverse opportunities for investors with different risk profiles, capital requirements, and technical capabilities.

Current investment opportunities span multiple development stages. Greenfield exploration projects offer high-risk, high-reward opportunities for companies with strong geological expertise and exploration capital. Advanced exploration projects with defined resources provide opportunities for mid-tier mining companies seeking near-term production. Development-stage projects with completed feasibility studies offer opportunities for major mining companies requiring substantial capital but offering predictable returns.

The investment landscape includes opportunities across all mineral categories. Strategic metals including copper, lithium, and rare earth elements offer exposure to critical supply chains and premium pricing. Precious resources including gold and gemstones provide portfolio diversification and inflation hedging. Industrial minerals including chromite, marble, and coal support domestic and regional infrastructure development.

Each opportunity includes comprehensive technical data, preliminary economic assessments, and development roadmaps. Investment packages provide detailed information on resource estimates, development costs, production schedules, and expected returns. Environmental and social impact assessments identify potential challenges and mitigation measures, enabling informed investment decisions.`,

    stats: [
      { value: '$30T+', label: 'Total Value', description: 'Mineral endowment' },
      { value: '150+', label: 'Projects', description: 'Available opportunities' },
      { value: '34', label: 'Provinces', description: 'Resource-rich regions' },
      { value: '15-30', label: 'Years', description: 'Project lifecycles' },
      { value: '20-35%', label: 'IRR', description: 'Expected returns' },
      { value: 'Multiple', label: 'Stages', description: 'Development phases' },
    ],

    sections: [
      {
        title: 'Strategic Metals Investment Opportunities',
        content: `Copper projects represent the largest investment opportunities, with Mes Aynak alone requiring $5 billion in development capital while offering $100+ billion in resource value. The deposit's exceptional grade and scale make it attractive to major mining companies, with development plans envisioning integrated mining, processing, and smelting operations. Investment opportunities include equity participation, debt financing, and offtake agreements.

Lithium projects offer exposure to the global energy transition, with Afghanistan's reserves potentially representing the world's largest lithium deposit. Investment opportunities span exploration through battery-grade processing, with potential for integrated battery manufacturing facilities. The strategic importance of lithium for electric vehicles and energy storage creates premium pricing and strong demand fundamentals.

Rare earth element projects provide opportunities to diversify global supply chains away from Chinese dominance. Investment opportunities include integrated mining and processing facilities producing separated rare earth oxides for technology applications. Strategic partnerships with technology manufacturers ensure market access and premium pricing.`,
        icon: Zap,
        alignment: 'left'
      },
      {
        title: 'Precious Resources Investment Opportunities',
        content: `Gold projects offer traditional safe-haven investment opportunities with strong fundamentals. Investment opportunities range from artisanal mining formalization to large-scale hard rock development. The Badakhshan Gold Belt alone contains 500+ tons of gold resources, with development opportunities spanning multiple deposit types and scales.

Gemstone projects combine traditional mining with luxury goods markets, offering unique investment opportunities. Panjshir emerald development requires $300 million in capital while offering $1.5+ billion in production potential. Investment opportunities include integrated mining, cutting, and marketing operations, capturing value throughout the supply chain.

The gemstone sector offers opportunities for both large-scale mechanized operations and artisanal mining formalization, accommodating different investment scales and risk profiles. Heritage tourism development creates additional revenue streams while preserving cultural assets.`,
        icon: Award,
        alignment: 'right'
      },
      {
        title: 'Industrial Minerals Investment Opportunities',
        content: `Chromite projects offer opportunities to develop Afghanistan's first integrated ferrochrome production facility, transforming raw ore into value-added products. Investment requirements of $200 million support production capacity of 120,000 tons annually, with export markets in Pakistan, India, and China ensuring strong demand.

Marble projects capitalize on Afghanistan's premium stone resources, with development opportunities including modern quarrying, processing, and export operations. Investment of $500 million could develop production capacity of 1 million tons annually, generating $500+ million in export revenue while creating 5,000 direct jobs.

Coal projects support both domestic energy security and export markets, with opportunities for both thermal and metallurgical coal development. Investment opportunities include modern underground mining operations, coal preparation facilities, and clean coal power generation, supporting industrial development while reducing environmental impact.`,
        icon: Building2,
        alignment: 'left'
      },
      {
        title: 'Infrastructure & Development Stages',
        content: `Infrastructure projects (rail, power, water, corridors) support mining development and create standalone investment opportunities. Transportation corridors to Pakistan, Iran, and Central Asia enable export and attract corridor financing. Development stages range from greenfield exploration to producing mines seeking expansion capital. Each stage offers distinct risk-return profiles and capital requirements. Investment packages include technical data, economic assessments, and development roadmaps enabling informed decisions.`,
        icon: Target,
        alignment: 'right'
      },
    ],

    detailedSections: [
      {
        title: 'Exploration Projects',
        content: 'Greenfield and early-stage exploration projects offer high-risk, high-reward opportunities for companies with strong geological expertise.',
        icon: MapPin
      },
      {
        title: 'Development Projects',
        content: 'Projects with completed feasibility studies offer predictable development timelines and returns for major mining companies.',
        icon: Target
      },
      {
        title: 'Production Projects',
        content: 'Operating mines seeking expansion capital or new investors offer immediate cash flow and proven resource potential.',
        icon: TrendingUp
      },
      {
        title: 'Processing Facilities',
        content: 'Value-added processing opportunities transform raw materials into finished products, capturing additional value.',
        icon: Zap
      },
      {
        title: 'Infrastructure Projects',
        content: 'Transportation, power, and water infrastructure projects support mining development while creating standalone investment opportunities.',
        icon: Building2
      },
      {
        title: 'Technology & Innovation',
        content: 'Opportunities to introduce advanced mining technologies, automation, and digital solutions create competitive advantages.',
        icon: Globe
      },
    ],

    benefits: [
      {
        title: 'World-Class Resources',
        description: 'Deposits rank among the largest globally, offering exceptional scale and grade for competitive operations.',
        icon: Award
      },
      {
        title: 'Strategic Importance',
        description: 'Critical minerals for global supply chains create premium pricing and strong demand fundamentals.',
        icon: Target
      },
      {
        title: 'Diverse Opportunities',
        description: 'Projects across all development stages accommodate different risk profiles and capital requirements.',
        icon: BarChart3
      },
      {
        title: 'Competitive Returns',
        description: 'Expected internal rates of return of 20-35% competitive with international mining investments.',
        icon: TrendingUp
      },
    ],

    relatedResources: [
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Partnership Models', href: '/investment/partnerships', icon: Handshake },
      { name: 'Financial Incentives', href: '/investment/incentives', icon: DollarSign },
    ],
  },

  'partnerships': {
    title: 'Partnership Models & Structures',
    subtitle: 'Flexible Partnership Arrangements for All Investment Types',
    overview: `Afghanistan offers diverse partnership models accommodating different investor preferences, project requirements, and risk profiles. The partnership framework includes joint ventures with government participation, strategic partnerships with international operators, consortium arrangements for large-scale projects, and fully private development models. Each structure balances investor needs with national development objectives, ensuring mutually beneficial outcomes.

Joint venture partnerships with the Afghan government provide investors with local expertise, streamlined permitting, and community relations support while ensuring that the nation benefits directly from resource development. Government equity participation typically ranges from 10% to 30%, depending on project scale and strategic importance. These partnerships include profit-sharing arrangements that align incentives while providing government revenue streams.

Strategic partnerships with established international mining companies bring world-class technical expertise, operational experience, and market access. These partnerships often include technology transfer provisions ensuring that Afghan partners gain technical knowledge and operational capabilities. Training programs and capacity building initiatives ensure that partnerships build domestic expertise for future development.

Consortium arrangements enable multiple investors to pool resources for large-scale projects requiring substantial capital. These structures allow risk sharing while enabling participation by investors with different capabilities and capital availability. Consortium members typically include operators, financiers, offtake partners, and strategic investors, each contributing unique value.

Fully private development models provide maximum operational autonomy for experienced operators while ensuring compliance with all regulatory requirements. These models require substantial capital and technical capability but offer maximum flexibility in project design and operations.`,

    stats: [
      { value: '4', label: 'Models', description: 'Partnership structures' },
      { value: '10-30%', label: 'Govt Equity', description: 'Typical participation' },
      { value: '50+', label: 'Partners', description: 'International companies' },
      { value: 'Flexible', label: 'Terms', description: 'Customizable structures' },
      { value: 'Multiple', label: 'Options', description: 'Investment scales' },
      { value: 'Proven', label: 'Track Record', description: 'Successful models' },
    ],

    sections: [
      {
        title: 'Joint Venture Partnerships',
        content: `Joint venture partnerships with the Afghan government represent the most common structure for major mining projects, combining investor capital and expertise with government support and local knowledge. Government equity participation provides direct benefit to the nation while ensuring alignment of interests between investors and the Afghan people.

The joint venture structure typically includes a special purpose vehicle (SPV) established specifically for the project, with equity ownership divided between the government and private investors. Governance structures ensure representation of all parties while maintaining operational efficiency. Board composition, voting rights, and decision-making procedures are clearly defined in joint venture agreements.

Profit-sharing arrangements distribute returns based on equity ownership, with additional mechanisms ensuring fair distribution of benefits. Government participation ensures that mining revenues directly support national development priorities including infrastructure, education, healthcare, and social programs. Local content requirements ensure that joint ventures maximize economic multiplier effects.

Joint venture agreements include detailed provisions for capital contributions, operational responsibilities, and exit mechanisms. Dispute resolution procedures ensure that conflicts can be resolved efficiently while maintaining project continuity. Technology transfer requirements ensure that joint ventures build domestic capacity for future development.`,
        icon: Handshake,
        alignment: 'left'
      },
      {
        title: 'Strategic International Partnerships',
        content: `Strategic partnerships with established international mining companies bring world-class expertise and operational capabilities to Afghan projects. These partnerships typically involve major mining companies with proven track records in similar projects, providing technical expertise, operational experience, and market access.

Partnership structures vary based on project requirements and partner capabilities. Some partnerships involve equity participation, while others focus on technical services, offtake agreements, or financing arrangements. The flexibility of partnership structures allows customization to specific project needs and partner capabilities.

Technology transfer is a key component of strategic partnerships, ensuring that Afghan partners gain technical knowledge and operational experience. Training programs, secondment arrangements, and knowledge sharing initiatives ensure that partnerships build domestic capacity. Over time, Afghan partners gain the expertise needed for independent operations.

Strategic partnerships often include provisions for local procurement, employment, and community development, ensuring that partnerships benefit local communities. These provisions create economic multiplier effects while building support for mining development. Long-term partnerships create lasting relationships that support continued development.`,
        icon: Globe,
        alignment: 'right'
      },
      {
        title: 'Consortium Arrangements',
        content: `Consortium arrangements enable multiple investors to pool resources for large-scale projects requiring substantial capital investment. These structures allow risk sharing while enabling participation by investors with different capabilities, capital availability, and risk profiles. Consortium members typically include operators, financiers, offtake partners, and strategic investors.

The consortium structure distributes project risks across multiple parties, reducing individual exposure while enabling participation in projects that might be too large for single investors. Risk allocation mechanisms ensure that each party bears risks appropriate to their capabilities and roles. Operators bear operational risks, financiers bear financial risks, and offtake partners bear market risks.

Governance structures ensure effective coordination among consortium members while maintaining operational efficiency. Management committees, technical committees, and financial committees provide oversight and coordination. Decision-making procedures balance the need for consensus with operational efficiency requirements.

Consortium agreements include detailed provisions for capital contributions, operational responsibilities, and profit distribution. Exit mechanisms allow members to divest interests while maintaining project continuity. New member admission procedures enable consortium expansion as projects develop.`,
        icon: Users,
        alignment: 'left'
      },
      {
        title: 'Fully Private Development Models',
        content: `Fully private development models provide maximum operational autonomy for experienced operators while ensuring compliance with all regulatory requirements. These models require substantial capital and technical capability but offer maximum flexibility in project design and operations. Private developers have full control over operational decisions while meeting all environmental, social, and regulatory obligations.

Private development models are typically used for smaller projects or by operators with extensive experience in similar projects. These models require operators to provide all capital, technical expertise, and operational capabilities independently. While requiring greater resources, private models offer maximum flexibility and control.

Regulatory compliance remains mandatory regardless of development model. Private developers must meet all environmental standards, community engagement requirements, and revenue sharing obligations. The regulatory framework ensures that private development benefits the nation while providing operational flexibility.

Private development models often evolve into partnerships as projects mature and require additional capital or expertise. The flexibility of Afghanistan's framework allows transitions between models as projects develop and requirements change.`,
        icon: Building2,
        alignment: 'right'
      },
    ],

    detailedSections: [
      {
        title: 'Equity Structures',
        content: 'Flexible equity arrangements accommodate different investment scales and risk profiles, with government participation ranging from 0% to 30% depending on project characteristics.',
        icon: BarChart3
      },
      {
        title: 'Governance Models',
        content: 'Clear governance structures ensure effective decision-making while representing all stakeholder interests through balanced board composition and voting rights.',
        icon: Users
      },
      {
        title: 'Profit Sharing',
        content: 'Transparent profit-sharing mechanisms distribute returns fairly based on equity ownership and operational contributions, ensuring mutual benefit.',
        icon: DollarSign
      },
      {
        title: 'Technology Transfer',
        content: 'Mandatory technology transfer provisions ensure that partnerships build domestic technical capacity through training, secondment, and knowledge sharing.',
        icon: Zap
      },
      {
        title: 'Exit Mechanisms',
        content: 'Clear exit procedures allow partners to divest interests while maintaining project continuity, with pre-emption rights protecting remaining partners.',
        icon: Target
      },
      {
        title: 'Dispute Resolution',
        content: 'Comprehensive dispute resolution mechanisms including mediation, arbitration, and expert determination ensure efficient conflict resolution.',
        icon: Scale
      },
    ],

    benefits: [
      {
        title: 'Flexible Structures',
        description: 'Multiple partnership models accommodate different investor preferences, project requirements, and risk profiles.',
        icon: Handshake
      },
      {
        title: 'Risk Sharing',
        description: 'Partnership structures distribute risks appropriately, enabling participation in projects that might be too large for single investors.',
        icon: Shield
      },
      {
        title: 'Local Expertise',
        description: 'Government partnerships provide local knowledge, community relations, and streamlined permitting support.',
        icon: Users
      },
      {
        title: 'Technology Transfer',
        description: 'Partnerships build domestic capacity through mandatory technology transfer and training programs.',
        icon: Zap
      },
    ],

    relatedResources: [
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Investment Opportunities', href: '/investment/opportunities', icon: Briefcase },
      { name: 'Financial Incentives', href: '/investment/incentives', icon: TrendingUp },
    ],
  },

  'incentives': {
    title: 'Financial Incentives & Tax Benefits',
    subtitle: 'Competitive Fiscal Terms & Investment Incentives',
    overview: `Afghanistan's fiscal framework provides competitive incentives designed to attract world-class mining investment while ensuring fair revenue sharing for national development. The incentive structure balances the need to attract capital with the goal of maximizing national benefit, creating a win-win framework that benefits both investors and the Afghan people.

Tax incentives reduce initial capital requirements and improve project economics during development phases. Accelerated depreciation provisions allow rapid cost recovery, reducing tax burden during early years when projects are establishing operations. Investment tax credits provide direct reductions in tax liability for qualifying capital expenditures, improving project returns.

Royalty rates are structured to be competitive with international standards while ensuring substantial government revenue. Rates range from 5% for strategic minerals to 15% for high-value commodities, with provisions for adjustment based on market conditions. The royalty structure ensures that the nation benefits from resource development regardless of project profitability.

Corporate income tax applies at a rate of 20%, competitive with regional and international standards. Production sharing agreements allow cost recovery before profit sharing, ensuring that investors can recover capital investments before sharing profits with the government. This structure balances investor returns with national benefit.`,

    stats: [
      { value: '5-15%', label: 'Royalty', description: 'Competitive rates' },
      { value: '20%', label: 'Corporate Tax', description: 'Income tax rate' },
      { value: '100%', label: 'Depreciation', description: 'Accelerated recovery' },
      { value: '10-25%', label: 'Tax Credit', description: 'Investment credits' },
      { value: '0%', label: 'Withholding', description: 'Dividend tax' },
      { value: 'Competitive', label: 'Terms', description: 'International standards' },
    ],

    sections: [
      {
        title: 'Tax Incentives & Depreciation',
        content: `Accelerated depreciation provisions allow mining companies to recover capital investments rapidly, reducing tax burden during development and early production phases. Equipment, infrastructure, and development costs can be depreciated over shortened periods, improving cash flow and project economics during critical early years.

Investment tax credits provide direct reductions in tax liability for qualifying capital expenditures. Credits typically range from 10% to 25% of eligible investment, depending on project characteristics and strategic importance. Credits can be carried forward if not fully utilized in the year of expenditure, ensuring that all credits provide value.

Loss carry-forward provisions allow companies to offset future profits with development phase losses, ensuring that early-stage investments receive full tax benefit. Carry-forward periods extend for sufficient duration to ensure utilization, typically 10-15 years depending on project development timelines.

Tax holidays may be available for strategic projects during initial production phases, providing complete tax exemption for specified periods. These incentives are typically reserved for projects of exceptional strategic importance or those requiring substantial capital investment with extended development timelines.`,
        icon: TrendingUp,
        alignment: 'left'
      },
      {
        title: 'Royalty Structure & Revenue Sharing',
        content: `Royalty rates are structured to balance competitiveness with national benefit, ranging from 5% for strategic minerals to 15% for high-value commodities. Rates are determined based on mineral type, project scale, and market conditions, ensuring that rates remain competitive while maximizing government revenue.

The royalty structure includes provisions for adjustment based on market conditions, ensuring that rates remain appropriate as commodity prices fluctuate. Floor rates ensure minimum government revenue regardless of market conditions, while ceiling rates prevent excessive burden during high-price periods.

Production sharing agreements allow cost recovery before profit sharing, ensuring that investors can recover capital investments before sharing profits with the government. Cost recovery provisions include reasonable rates of return on capital, ensuring that investors receive fair compensation for capital at risk.

Revenue sharing mechanisms distribute benefits fairly between investors and the government, with government share increasing as project profitability improves. This structure ensures that the nation benefits from successful projects while providing investors with appropriate returns for capital and risk.`,
        icon: DollarSign,
        alignment: 'right'
      },
      {
        title: 'Import & Export Incentives',
        content: `Import duty exemptions reduce capital costs for mining equipment and supplies, improving project economics while ensuring access to world-class technology. Equipment imports for mining operations typically receive complete exemption from import duties, reducing initial capital requirements substantially.

Export incentives support international competitiveness by reducing export costs and improving market access. Export processing zones provide additional benefits including streamlined customs procedures and reduced regulatory burden. These incentives ensure that Afghan minerals can compete effectively in international markets.

Currency exchange provisions ensure that investors can convert local currency to foreign currency for international transactions, including profit repatriation and equipment imports. Exchange rate guarantees may be available for major projects, reducing currency risk and improving project economics.

Value-added tax (VAT) exemptions reduce costs for mining operations, improving project economics while simplifying compliance. Mining operations typically receive exemption from VAT on inputs, reducing operational costs and improving cash flow.`,
        icon: Globe,
        alignment: 'left'
      },
      {
        title: 'Infrastructure & Development Incentives',
        content: `Infrastructure development incentives support projects that contribute to national infrastructure development. Projects that develop transportation, power, or water infrastructure may receive additional incentives including extended tax holidays or reduced royalty rates. These incentives encourage projects that provide broader national benefit beyond direct mining operations.

Community development incentives reward projects that exceed minimum community development requirements. Projects that invest substantially in local communities may receive tax credits or reduced royalty rates, creating incentives for comprehensive community development programs.

Research and development incentives support innovation and technology development. Projects that invest in research, technology development, or capacity building may receive tax credits or other incentives, encouraging technological advancement and knowledge transfer.

Environmental incentives reward projects that exceed minimum environmental standards. Projects that implement advanced environmental technologies or achieve exceptional environmental performance may receive reduced royalty rates or tax credits, creating incentives for environmental excellence.`,
        icon: Building2,
        alignment: 'right'
      },
    ],

    detailedSections: [
      {
        title: 'Accelerated Depreciation',
        content: 'Rapid cost recovery through shortened depreciation periods improves cash flow during development and early production phases.',
        icon: TrendingUp
      },
      {
        title: 'Investment Tax Credits',
        content: 'Direct tax reductions for capital expenditures improve project returns and reduce initial capital requirements.',
        icon: Award
      },
      {
        title: 'Loss Carry-Forward',
        content: 'Extended carry-forward periods ensure that development phase losses provide full tax benefit when projects become profitable.',
        icon: BarChart3
      },
      {
        title: 'Import Duty Exemptions',
        content: 'Complete exemption from import duties on mining equipment reduces capital costs and improves project economics.',
        icon: Globe
      },
      {
        title: 'Export Incentives',
        content: 'Reduced export costs and streamlined procedures improve international competitiveness and market access.',
        icon: Target
      },
      {
        title: 'Infrastructure Credits',
        content: 'Additional incentives for infrastructure development encourage projects that provide broader national benefit.',
        icon: Building2
      },
    ],

    benefits: [
      {
        title: 'Competitive Rates',
        description: 'Tax and royalty rates competitive with international standards while ensuring fair revenue sharing.',
        icon: TrendingUp
      },
      {
        title: 'Cash Flow Benefits',
        description: 'Accelerated depreciation and tax credits improve cash flow during critical development phases.',
        icon: DollarSign
      },
      {
        title: 'Cost Reduction',
        description: 'Import duty exemptions and VAT exemptions reduce capital and operational costs substantially.',
        icon: Award
      },
      {
        title: 'Risk Mitigation',
        description: 'Currency guarantees and loss carry-forward provisions reduce financial risk and improve project economics.',
        icon: Shield
      },
    ],

    relatedResources: [
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Investment Opportunities', href: '/investment/opportunities', icon: Briefcase },
      { name: 'Partnership Models', href: '/investment/partnerships', icon: Handshake },
    ],
  },

  'risk-management': {
    title: 'Risk Management & Investment Protection',
    subtitle: 'Comprehensive Risk Mitigation & Protection Mechanisms',
    overview: `Afghanistan's investment framework includes comprehensive risk management and protection mechanisms designed to provide security for investors while ensuring project success. The framework addresses political risk, regulatory risk, operational risk, market risk, and environmental risk through multiple layers of protection and mitigation measures.

Political risk protection includes constitutional guarantees, bilateral investment treaties, and international arbitration mechanisms ensuring that political changes do not affect investor rights. Stabilization clauses in contracts protect investors from adverse regulatory changes, while international arbitration provides enforceable dispute resolution regardless of domestic political developments.

Regulatory risk is mitigated through transparent, published procedures and clear legal frameworks. Regulatory stability provisions ensure that license terms remain valid regardless of regulatory changes, while grandfathering clauses protect existing investments from new requirements. Independent regulatory bodies ensure consistent application of regulations.

Operational risk mitigation includes comprehensive insurance requirements, technical standards, and safety regulations. Environmental liability protection ensures that investors understand and can manage environmental risks, while community engagement requirements reduce social risk. Financial guarantees ensure that projects can meet closure and environmental obligations.`,

    stats: [
      { value: '30+', label: 'BITs', description: 'Investment treaties' },
      { value: '100%', label: 'Protection', description: 'Comprehensive coverage' },
      { value: 'ICSID', label: 'Arbitration', description: 'International protection' },
      { value: 'Stabilization', label: 'Clauses', description: 'Regulatory protection' },
      { value: 'Insurance', label: 'Required', description: 'Risk coverage' },
      { value: 'Multiple', label: 'Layers', description: 'Protection mechanisms' },
    ],

    sections: [
      {
        title: 'Political Risk Protection',
        content: `Constitutional guarantees provide fundamental protection for private property rights and foreign investment, ensuring that political changes cannot arbitrarily affect investor rights. These constitutional protections are enforceable through domestic courts and international arbitration, providing multiple layers of legal protection.

Bilateral investment treaties (BITs) with over 30 countries create binding international obligations protecting foreign investment. BITs typically include provisions for fair and equitable treatment, protection against expropriation without compensation, and access to international arbitration. These treaties ensure that investor rights are protected under international law regardless of domestic political developments.

Stabilization clauses in mining contracts protect investors from adverse regulatory changes, ensuring that license terms remain valid even if laws change. These clauses typically freeze the regulatory framework applicable to the project, providing long-term regulatory stability. Compensation mechanisms ensure that investors are compensated for any adverse changes that cannot be prevented.

International arbitration through ICSID or UNCITRAL provides enforceable dispute resolution mechanisms independent of domestic legal systems. Arbitration awards are enforceable in over 160 countries under the New York Convention, ensuring that investor rights can be enforced internationally regardless of domestic political developments.`,
        icon: Shield,
        alignment: 'left'
      },
      {
        title: 'Regulatory Risk Mitigation',
        content: `Transparent, published procedures ensure that regulatory requirements are clear and predictable, reducing regulatory risk. All licensing procedures, environmental standards, and compliance requirements are publicly available, enabling investors to understand and plan for regulatory obligations.

Regulatory stability provisions ensure that license terms remain valid regardless of regulatory changes. Grandfathering clauses protect existing investments from new requirements, while transition periods allow adaptation to new standards. These provisions ensure that regulatory changes do not disrupt ongoing operations.

Independent regulatory bodies ensure consistent application of regulations, reducing arbitrary decision-making risk. Technical expertise within regulatory bodies ensures that decisions are based on sound technical analysis rather than political considerations. Appeal mechanisms provide recourse for regulatory decisions.

Regular consultation with industry ensures that regulations remain appropriate and achievable. Industry input helps identify potential regulatory issues before they become problems, while collaborative approaches to regulation reduce compliance costs and improve outcomes.`,
        icon: FileText,
        alignment: 'right'
      },
      {
        title: 'Operational Risk Management',
        content: `Comprehensive insurance requirements ensure that projects can manage operational risks including equipment failure, natural disasters, and liability claims. Insurance coverage typically includes property insurance, liability insurance, and business interruption insurance, providing comprehensive risk coverage.

Technical standards and safety regulations ensure that operations meet international best practices, reducing operational risk. Regular inspections and audits ensure compliance with standards, while certification requirements ensure that equipment and operations meet quality standards. These measures reduce the likelihood of operational incidents.

Environmental liability protection includes comprehensive environmental management requirements and financial guarantees ensuring that environmental risks are managed and funded. Closure plans and financial guarantees ensure that environmental obligations can be met even if operations cease unexpectedly.

Community engagement requirements reduce social risk by ensuring that projects have community support and addressing concerns before they become problems. Regular community consultation, transparent communication, and responsive grievance mechanisms ensure that social issues are identified and resolved early.`,
        icon: CheckCircle2,
        alignment: 'left'
      },
      {
        title: 'Market Risk Mitigation',
        content: `Market risk mitigation includes flexible royalty structures that adjust based on commodity prices, ensuring that projects remain viable during price downturns while maximizing government revenue during high-price periods. Floor rates ensure minimum revenue regardless of prices, while ceiling rates prevent excessive burden during high prices.

Offtake agreements with creditworthy buyers reduce market risk by ensuring product sales at agreed prices. Long-term contracts provide price stability, while multiple buyers reduce dependence on single markets. These agreements ensure that production can be sold even during market downturns.

Currency risk mitigation includes provisions for currency conversion and potential exchange rate guarantees for major projects. These provisions ensure that investors can convert local currency to foreign currency for international transactions and profit repatriation, reducing currency risk.

Diversification opportunities across multiple mineral types and projects reduce portfolio risk. Investors can participate in projects with different risk profiles, commodity exposures, and development stages, creating diversified investment portfolios that reduce overall risk.`,
        icon: BarChart3,
        alignment: 'right'
      },
    ],

    detailedSections: [
      {
        title: 'Political Protection',
        content: 'Constitutional guarantees, BITs, and international arbitration provide comprehensive political risk protection ensuring investor rights regardless of political changes.',
        icon: Shield
      },
      {
        title: 'Regulatory Stability',
        content: 'Stabilization clauses and grandfathering provisions ensure that license terms remain valid regardless of regulatory changes.',
        icon: Lock
      },
      {
        title: 'Insurance Coverage',
        content: 'Comprehensive insurance requirements ensure that operational risks including equipment failure and liability are adequately covered.',
        icon: CheckCircle2
      },
      {
        title: 'Environmental Protection',
        content: 'Financial guarantees and closure plans ensure that environmental obligations can be met even if operations cease unexpectedly.',
        icon: Shield
      },
      {
        title: 'Market Flexibility',
        content: 'Flexible royalty structures and offtake agreements reduce market risk while ensuring project viability during price fluctuations.',
        icon: TrendingUp
      },
      {
        title: 'Dispute Resolution',
        content: 'International arbitration provides enforceable dispute resolution independent of domestic legal systems, ensuring investor rights protection.',
        icon: Scale
      },
    ],

    benefits: [
      {
        title: 'Comprehensive Protection',
        description: 'Multiple layers of protection address all major risk categories ensuring secure investment environment.',
        icon: Shield
      },
      {
        title: 'International Enforcement',
        description: 'BITs and international arbitration ensure that investor rights are enforceable internationally regardless of domestic developments.',
        icon: Globe
      },
      {
        title: 'Regulatory Stability',
        description: 'Stabilization clauses and grandfathering provisions ensure that license terms remain valid regardless of regulatory changes.',
        icon: Lock
      },
      {
        title: 'Risk Mitigation',
        description: 'Comprehensive insurance, technical standards, and community engagement reduce operational and social risk.',
        icon: CheckCircle2
      },
    ],

    relatedResources: [
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Partnership Models', href: '/investment/partnerships', icon: Handshake },
      { name: 'Financial Incentives', href: '/investment/incentives', icon: TrendingUp },
    ],
  },

  'partners': {
    title: 'International Partners & Strategic Alliances',
    subtitle: 'Global Mining Companies & Strategic Investors',
    overview: `Afghanistan's mineral development attracts interest from leading international mining companies, financial institutions, and strategic investors seeking exposure to world-class mineral resources. The nation's strategic location, exceptional resource endowment, and investor-friendly framework create compelling opportunities for global partners across the mining value chain.

Major international mining companies including BHP, Rio Tinto, Glencore, and Freeport-McMoRan have expressed interest in Afghan projects, bringing world-class technical expertise, operational capabilities, and market access. These companies bring decades of experience in similar projects, providing proven operational models and technical solutions.

Financial institutions including development banks, commercial banks, and private equity funds provide capital for mining development. The World Bank, Asian Development Bank, and European Investment Bank support infrastructure development, while commercial banks provide project financing. Private equity funds provide development capital for early-stage projects.

Strategic investors including technology companies, manufacturers, and trading companies seek secure supply of critical minerals. Electric vehicle manufacturers require lithium for batteries, technology companies need rare earth elements, and steel producers need iron ore. These strategic partnerships ensure market access while providing development capital.`,

    stats: [
      { value: '50+', label: 'Partners', description: 'International companies' },
      { value: '15', label: 'Countries', description: 'Global representation' },
      { value: '$10B+', label: 'Committed', description: 'Investment capital' },
      { value: 'Multiple', label: 'Sectors', description: 'Industry diversity' },
      { value: 'Strategic', label: 'Alliances', description: 'Long-term partnerships' },
      { value: 'Proven', label: 'Track Record', description: 'Successful operations' },
    ],

    sections: [
      {
        title: 'Major Mining Company Partners',
        content: `Leading international mining companies bring world-class expertise and operational capabilities to Afghan projects. These companies have decades of experience in similar projects globally, providing proven operational models, technical solutions, and market access. Their involvement ensures that Afghan projects meet international standards while benefiting from best practices developed globally.

BHP, Rio Tinto, and Glencore have expressed interest in copper and iron ore projects, bringing expertise in large-scale open-pit mining, processing, and logistics. Their involvement ensures that projects like Mes Aynak and Hajigak benefit from proven operational models and technical solutions developed through decades of global operations.

Freeport-McMoRan brings expertise in copper development, having developed similar projects in Indonesia, Peru, and the United States. Their technical expertise in large-scale copper mining and processing ensures that Afghan copper projects benefit from world-class operational knowledge.

Vale and ArcelorMittal bring expertise in iron ore and steel production, providing technical support for integrated steel complex development. Their involvement ensures that Hajigak's development benefits from proven steel production technologies and operational models.`,
        icon: Building2,
        alignment: 'left'
      },
      {
        title: 'Financial Institution Partners',
        content: `Development banks including the World Bank, Asian Development Bank, and European Investment Bank support infrastructure development that enables mining projects. These institutions provide concessional financing for transportation, power, and water infrastructure, reducing project capital requirements while ensuring essential infrastructure development.

Commercial banks provide project financing for mining development, with syndicated loan structures enabling participation by multiple banks. Export credit agencies provide financing support for equipment imports, while development finance institutions provide patient capital for early-stage development.

Private equity funds provide development capital for exploration and early-stage projects, enabling projects to advance through feasibility studies and initial development. These funds bring capital and project development expertise, helping projects reach investment-ready stages.

Sovereign wealth funds and pension funds provide long-term capital for major projects, seeking stable returns from resource development. Their involvement provides patient capital aligned with long project lifecycles while ensuring responsible investment practices.`,
        icon: DollarSign,
        alignment: 'right'
      },
      {
        title: 'Strategic Industry Partners',
        content: `Electric vehicle manufacturers including Tesla, BYD, and Volkswagen seek secure lithium supply for battery production, creating strategic partnerships for lithium development. These partnerships ensure market access while providing development capital and technical support for battery-grade processing.

Technology companies including Apple, Samsung, and Huawei require rare earth elements for electronics production, creating strategic partnerships for REE development. These partnerships ensure market access while supporting technology transfer and capacity building.

Steel producers including ArcelorMittal, POSCO, and Tata Steel seek iron ore supply, creating partnerships for integrated steel complex development. These partnerships ensure market access while providing technical expertise for steel production.

Trading companies including Glencore, Trafigura, and Cargill provide market access and logistics support, ensuring that Afghan minerals can reach global markets efficiently. These partnerships reduce market risk while providing expertise in international trade and logistics.`,
        icon: Globe,
        alignment: 'left'
      },
      {
        title: 'Technology & Service Partners',
        content: `Mining technology companies including Caterpillar, Komatsu, and Sandvik provide equipment and technical support, ensuring access to world-class mining technology. These partnerships ensure that Afghan projects benefit from latest mining technologies while supporting local capacity building through training and knowledge transfer.

Engineering and construction companies including Bechtel, Fluor, and Jacobs provide project development services, ensuring that projects are designed and constructed to international standards. These partnerships bring decades of experience in similar projects globally, ensuring that Afghan projects benefit from proven project delivery models.

Environmental and consulting firms provide expertise in environmental management, community engagement, and regulatory compliance, ensuring that projects meet international standards. These partnerships ensure that environmental and social performance meets best practices while building domestic capacity.

Research institutions and universities provide technical research and capacity building support, ensuring that Afghan projects benefit from latest research while building domestic technical capacity. These partnerships support innovation and technology development while training Afghan engineers and scientists.`,
        icon: Zap,
        alignment: 'right'
      },
    ],

    detailedSections: [
      {
        title: 'Mining Companies',
        content: 'Leading international mining companies bring world-class expertise and operational capabilities ensuring projects meet international standards.',
        icon: Building2
      },
      {
        title: 'Financial Institutions',
        content: 'Development banks, commercial banks, and private equity funds provide capital across all project development stages.',
        icon: DollarSign
      },
      {
        title: 'Strategic Investors',
        content: 'Technology companies, manufacturers, and trading companies seek secure mineral supply creating strategic partnerships.',
        icon: Target
      },
      {
        title: 'Technology Partners',
        content: 'Equipment manufacturers and service providers ensure access to world-class technology and technical support.',
        icon: Zap
      },
      {
        title: 'Research Partners',
        content: 'Universities and research institutions provide technical research and capacity building support.',
        icon: Award
      },
      {
        title: 'Market Access',
        content: 'Trading companies and offtake partners ensure that Afghan minerals can reach global markets efficiently.',
        icon: Globe
      },
    ],

    benefits: [
      {
        title: 'World-Class Expertise',
        description: 'Leading international companies bring decades of experience and proven operational models ensuring project success.',
        icon: Award
      },
      {
        title: 'Capital Access',
        description: 'Diverse financial partners provide capital across all development stages from exploration through production.',
        icon: DollarSign
      },
      {
        title: 'Market Access',
        description: 'Strategic partners ensure market access for Afghan minerals while providing development capital and technical support.',
        icon: Globe
      },
      {
        title: 'Technology Transfer',
        description: 'Partnerships include mandatory technology transfer ensuring domestic capacity building and knowledge transfer.',
        icon: Zap
      },
    ],

    relatedResources: [
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Partnership Models', href: '/investment/partnerships', icon: Handshake },
      { name: 'Investment Opportunities', href: '/investment/opportunities', icon: Briefcase },
    ],
  },

  'process': {
    title: 'Investment Process & Application Procedures',
    subtitle: 'Step-by-Step Guide to Mining Investment',
    overview: `The investment process for Afghan mining projects follows clear, transparent procedures designed to ensure efficient project development while maintaining high standards for technical capability, financial capacity, and environmental responsibility. The process is structured to provide investors with clear guidance while enabling government evaluation of proposals based on objective criteria.

The process begins with initial expressions of interest, allowing investors to indicate interest in specific projects or areas. Pre-qualification procedures ensure that only serious, capable investors proceed to detailed application stages, reducing administrative burden while maintaining high standards. Qualified investors receive detailed project information and application guidelines.

Application procedures require comprehensive information on technical capability, financial capacity, environmental track record, and proposed development plans. Applications are evaluated based on objective criteria including technical expertise, financial resources, environmental performance, and proposed benefits to Afghanistan. Evaluation procedures are transparent, with published criteria and timelines.

Approval processes include environmental impact assessment, community consultation, and regulatory review. Approved projects proceed to contract negotiation, where detailed terms are finalized. Contract execution includes public disclosure, ensuring transparency and accountability. Ongoing operations require regular reporting and compliance monitoring throughout project lifecycles.`,

    stats: [
      { value: '6', label: 'Steps', description: 'Process phases' },
      { value: '90', label: 'Days', description: 'Typical timeline' },
      { value: 'Transparent', label: 'Process', description: 'Published procedures' },
      { value: 'Objective', label: 'Criteria', description: 'Evaluation standards' },
      { value: 'Public', label: 'Disclosure', description: 'Contract transparency' },
      { value: 'Efficient', label: 'Timeline', description: 'Streamlined process' },
    ],

    processSteps: [
      {
        title: 'Expression of Interest & Pre-Qualification',
        description: `Investors submit initial expressions of interest indicating interest in specific projects or exploration areas. Pre-qualification procedures evaluate technical capability, financial capacity, and environmental track record to ensure that only serious, capable investors proceed to detailed application stages.`,
        details: [
          'Submit expression of interest with company credentials',
          'Provide evidence of technical capability through previous projects',
          'Demonstrate financial capacity through financial statements',
          'Submit environmental and social performance records',
          'Pay pre-qualification fees and provide required documentation',
          'Receive pre-qualification decision within 30 days'
        ]
      },
      {
        title: 'Detailed Application Submission',
        description: `Qualified investors submit detailed applications including comprehensive information on technical approach, financial resources, environmental management, and proposed development plans. Applications must demonstrate capability to meet all regulatory requirements and proposed benefits to Afghanistan.`,
        details: [
          'Submit detailed technical proposal with geological analysis',
          'Provide comprehensive financial plan with capital requirements',
          'Develop detailed environmental and social management plans',
          'Specify proposed development timeline and production schedule',
          'Detail community engagement and local content plans',
          'Provide references from previous projects and partners'
        ]
      },
      {
        title: 'Application Evaluation & Due Diligence',
        description: `Government evaluation teams conduct comprehensive assessment of applications based on published criteria. Technical evaluation assesses geological understanding, proposed methods, and technical capability. Financial evaluation assesses capital resources and financial capacity. Environmental evaluation reviews track record and proposed management plans.`,
        details: [
          'Technical evaluation by geological and mining experts',
          'Financial evaluation by financial analysts and accountants',
          'Environmental evaluation by environmental specialists',
          'Social evaluation assessing community engagement plans',
          'Due diligence including site visits and reference checks',
          'Evaluation report with recommendations for approval'
        ]
      },
      {
        title: 'Environmental Impact Assessment & Community Consultation',
        description: `Approved applications proceed to environmental impact assessment (EIA) and community consultation phases. Comprehensive EIAs evaluate potential environmental and social impacts, develop mitigation measures, and establish monitoring requirements. Community consultation ensures that affected communities understand project impacts and have opportunities to influence development decisions.`,
        details: [
          'Conduct comprehensive environmental baseline studies',
          'Assess potential impacts on air, water, land, and biodiversity',
          'Evaluate social impacts on communities and livelihoods',
          'Develop detailed mitigation measures and monitoring plans',
          'Conduct public consultation meetings and information sessions',
          'Incorporate community feedback into project design',
          'Submit EIA report for regulatory approval'
        ]
      },
      {
        title: 'Contract Negotiation & Finalization',
        description: `Successful applicants proceed to contract negotiation where detailed terms are finalized. Negotiations cover fiscal terms, development obligations, environmental commitments, community benefits, and dispute resolution mechanisms. Contracts incorporate all regulatory requirements while providing flexibility for project-specific circumstances.`,
        details: [
          'Negotiate fiscal terms including royalties and taxes',
          'Specify development obligations and production schedules',
          'Define environmental and social commitments',
          'Establish community development and local content requirements',
          'Agree on dispute resolution and arbitration mechanisms',
          'Finalize contract terms and conditions',
          'Prepare contract documents for execution'
        ]
      },
      {
        title: 'Contract Execution & Project Commencement',
        description: `Executed contracts are publicly disclosed ensuring transparency and accountability. Projects commence with detailed development planning, environmental baseline studies, and community engagement. Regular reporting and compliance monitoring ensure that projects meet all obligations throughout development and operations.`,
        details: [
          'Execute contracts with public disclosure',
          'Establish project management and reporting systems',
          'Commence environmental baseline studies',
          'Initiate community engagement and development programs',
          'Begin detailed engineering and development planning',
          'Submit regular progress and compliance reports',
          'Maintain ongoing regulatory compliance'
        ]
      },
    ],

    sections: [
      {
        title: 'Pre-Qualification Requirements',
        content: `Pre-qualification ensures that only serious, capable investors proceed to detailed application stages, reducing administrative burden while maintaining high standards. Requirements include demonstration of technical capability through previous projects, financial capacity through audited financial statements, and environmental track record through performance records.

Technical capability is demonstrated through previous projects of similar scale and complexity, with evidence of successful project development and operations. Financial capacity is demonstrated through audited financial statements showing sufficient resources for proposed projects. Environmental track record is demonstrated through performance records from previous projects.

Pre-qualification decisions are made within 30 days of application submission, providing rapid feedback to investors. Qualified investors receive detailed project information and application guidelines, enabling informed application development. Pre-qualification fees cover administrative costs while ensuring serious applications.`,
        icon: CheckCircle2,
        alignment: 'left'
      },
      {
        title: 'Application Evaluation Criteria',
        content: `Applications are evaluated based on published criteria ensuring transparency and objectivity. Technical evaluation assesses geological understanding, proposed mining methods, processing approaches, and technical capability. Financial evaluation assesses capital resources, financial capacity, and proposed financing structures.

Environmental evaluation reviews track record from previous projects, proposed environmental management plans, and commitment to environmental standards. Social evaluation assesses community engagement plans, local content commitments, and proposed community benefits. Each criterion is weighted and scored, with total scores determining application ranking.

Evaluation procedures are transparent, with published criteria, evaluation timelines, and decision processes. Independent evaluation teams ensure objectivity, while appeal mechanisms provide recourse for evaluation decisions. Evaluation reports are provided to applicants, enabling understanding of evaluation outcomes.`,
        icon: Target,
        alignment: 'right'
      },
      {
        title: 'Environmental & Social Requirements',
        content: `Comprehensive environmental impact assessments evaluate potential project impacts and develop mitigation measures. Assessments include baseline studies, impact evaluation, mitigation development, and monitoring planning. Public consultation ensures community input into environmental management.

Social impact assessments identify potential community impacts and develop mitigation measures. Community consultation ensures that affected communities understand project impacts and have opportunities to influence development decisions. Free, prior, and informed consent processes ensure community understanding and agreement.

Environmental and social management plans detail how impacts will be managed throughout project lifecycles. Monitoring programs track environmental and social performance, ensuring that management plans are effective. Regular reporting ensures transparency and accountability.`,
        icon: Shield,
        alignment: 'left'
      },
      {
        title: 'Contract Terms & Conditions',
        content: `Mining contracts incorporate all regulatory requirements while providing flexibility for project-specific circumstances. Contracts specify mineral rights, development obligations, production schedules, fiscal terms, environmental commitments, and community benefits. Dispute resolution mechanisms ensure efficient conflict resolution.

Fiscal terms include royalty rates, tax obligations, and revenue sharing arrangements. Development obligations specify minimum work commitments, production schedules, and infrastructure development requirements. Environmental commitments detail environmental management requirements and monitoring obligations.

Community benefits include employment targets, local procurement requirements, infrastructure development, and social programs. Local content requirements ensure that Afghan suppliers and workers benefit from project development. These provisions create economic multiplier effects while building domestic capacity.`,
        icon: FileText,
        alignment: 'right'
      },
    ],

    detailedSections: [
      {
        title: 'Pre-Qualification',
        content: 'Initial screening ensures that only serious, capable investors proceed to detailed application stages, reducing administrative burden.',
        icon: CheckCircle2
      },
      {
        title: 'Application Submission',
        content: 'Comprehensive applications demonstrate technical capability, financial capacity, and environmental responsibility.',
        icon: FileText
      },
      {
        title: 'Evaluation Process',
        content: 'Transparent evaluation based on published criteria ensures objectivity and fairness in application assessment.',
        icon: Target
      },
      {
        title: 'Environmental Assessment',
        content: 'Comprehensive EIAs evaluate potential impacts and develop mitigation measures with public consultation.',
        icon: Shield
      },
      {
        title: 'Contract Negotiation',
        content: 'Detailed negotiations finalize terms covering fiscal arrangements, development obligations, and community benefits.',
        icon: Handshake
      },
      {
        title: 'Project Execution',
        content: 'Ongoing operations require regular reporting and compliance monitoring throughout project lifecycles.',
        icon: CheckCircle2
      },
    ],

    benefits: [
      {
        title: 'Transparent Process',
        description: 'Published procedures and criteria ensure transparency and predictability throughout the investment process.',
        icon: FileText
      },
      {
        title: 'Efficient Timeline',
        description: 'Streamlined procedures ensure efficient processing with typical timelines of 90 days from application to approval.',
        icon: Target
      },
      {
        title: 'Objective Evaluation',
        description: 'Published criteria and independent evaluation ensure fairness and objectivity in application assessment.',
        icon: Scale
      },
      {
        title: 'Clear Guidance',
        description: 'Detailed guidelines and support ensure that investors understand requirements and can prepare strong applications.',
        icon: CheckCircle2
      },
    ],

    relatedResources: [
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Investment Opportunities', href: '/investment/opportunities', icon: Briefcase },
      { name: 'Financial Incentives', href: '/investment/incentives', icon: TrendingUp },
    ],
  },

  'statistics': {
    title: 'Investment Statistics & Market Data',
    subtitle: 'Comprehensive Investment Data & Market Analysis',
    overview: `Afghanistan's mineral investment landscape demonstrates exceptional potential with comprehensive data supporting investment decisions. Market statistics reveal substantial investment commitments, diverse investor participation, and strong project economics across multiple mineral sectors. Investment data tracks project development, capital commitments, employment creation, and revenue generation, providing comprehensive insights into the investment landscape.

Current investment statistics show over $10 billion in committed capital across 50+ projects in various development stages. Investment commitments span exploration, development, and production phases, with major projects including Mes Aynak copper ($5B), Hajigak iron ($12B), and Ghazni lithium ($15B) representing substantial capital commitments. These investments demonstrate strong confidence in Afghanistan's mineral potential and investment framework.

Investor participation includes 50+ international companies from 15+ countries, representing diverse sectors including mining, finance, technology, and manufacturing. Major investors include leading mining companies, development banks, commercial banks, private equity funds, and strategic industry partners. This diverse participation demonstrates broad confidence in Afghan mineral development.

Project economics demonstrate strong returns with expected internal rates of return (IRR) ranging from 20% to 35% across different project types and stages. Development projects show payback periods of 5-8 years, while production projects generate substantial cash flows. These economics compare favorably with international mining investments while providing substantial government revenue.`,

    stats: [
      { value: '$10B+', label: 'Committed', description: 'Investment capital' },
      { value: '50+', label: 'Projects', description: 'In development' },
      { value: '50+', label: 'Investors', description: 'International companies' },
      { value: '15+', label: 'Countries', description: 'Global representation' },
      { value: '20-35%', label: 'IRR', description: 'Expected returns' },
      { value: '100,000+', label: 'Jobs', description: 'Employment creation' },
    ],

    sections: [
      {
        title: 'Investment Commitments & Capital Flows',
        content: `Current investment statistics show over $10 billion in committed capital across 50+ projects, with substantial additional commitments in pipeline. Investment commitments span all development stages from early exploration through production, demonstrating confidence across the investment spectrum. Major commitments include Mes Aynak copper project ($5B), Hajigak integrated steel complex ($12B), and Ghazni lithium development ($15B).

Investment flows demonstrate increasing momentum, with annual commitments growing from $500M in 2020 to $3B+ in 2024. This growth reflects improving investment framework, successful project development, and increasing international confidence. Projected investment flows indicate $50B+ in total commitments by 2030, $100B+ by 2035, and $200B+ by 2040 as major projects advance through development phases.

Capital sources include diverse investor types including mining companies (40%), financial institutions (30%), strategic investors (20%), and government (10%). This diversity ensures robust capital availability while reducing dependence on single investor types. International capital represents 80% of total commitments, demonstrating strong international confidence.

Investment distribution spans multiple mineral sectors with copper (35%), lithium (25%), iron ore (20%), and other minerals (20%) receiving substantial commitments. This diversification reduces sector concentration risk while ensuring balanced development across mineral types. Geographic distribution spans 20+ provinces, ensuring broad regional development.`,
        icon: BarChart3,
        alignment: 'left'
      },
      {
        title: 'Project Economics & Returns',
        content: `Project economics demonstrate strong returns with expected internal rates of return (IRR) ranging from 20% to 35% across different project types. Development projects show IRRs of 25-35%, reflecting higher risk and longer development timelines. Production projects show IRRs of 20-30%, reflecting lower risk and immediate cash flow.

Payback periods range from 5-8 years for development projects and 3-5 years for production projects, comparing favorably with international mining investments. Net present values (NPV) demonstrate substantial value creation, with major projects showing NPVs exceeding $1B at 10% discount rates. These economics support substantial capital commitments while ensuring attractive investor returns.

Revenue projections show substantial government revenue through royalties, taxes, and equity participation. Major projects are projected to generate $500M-$2B annually in government revenue at full production, supporting national development priorities. Cumulative government revenue over project lifecycles exceeds $50B for major projects, demonstrating substantial national benefit.

Cost structures compare favorably with international operations, with lower labor costs offsetting infrastructure challenges. Operating costs per unit of production are competitive with international standards, while capital costs reflect infrastructure development requirements. These cost structures support project economics while ensuring international competitiveness.`,
        icon: TrendingUp,
        alignment: 'right'
      },
      {
        title: 'Employment & Economic Impact',
        content: `Investment projects create substantial employment with 100,000+ direct jobs projected across all projects at full operation. Indirect employment through supply chains, services, and supporting industries multiplies job creation, with total employment impact exceeding 300,000 jobs. Employment creation spans all skill levels from unskilled labor through professional and technical positions.

Wage impacts demonstrate substantial income generation, with direct employment generating $2B+ annually in wages at full operation. Indirect employment multiplies this impact, with total wage generation exceeding $5B annually. These wages support local economies while creating consumer markets for goods and services.

Procurement impacts ensure that substantial portions of project expenditures benefit Afghan suppliers. Local content requirements ensure that 40-60% of goods and services are sourced domestically, creating economic multiplier effects. Procurement spending exceeds $1B annually at full operation, supporting domestic businesses and creating additional employment.

Infrastructure development creates lasting benefits beyond direct project impacts. Transportation, power, and water infrastructure developed for mining projects benefit broader regional development. These infrastructure investments create additional economic opportunities while supporting mining operations.`,
        icon: Users,
        alignment: 'left'
      },
      {
        title: 'Market Trends & Commodity Prices',
        content: `Commodity price trends support strong project economics, with copper, lithium, and rare earth elements showing strong long-term fundamentals. Copper prices have demonstrated resilience with strong demand from electrification and infrastructure development. Lithium prices reflect strong demand from electric vehicle and energy storage markets, with long-term fundamentals supporting premium pricing.

Rare earth element prices reflect strategic importance and supply concentration, with strong demand from technology and defense applications supporting premium pricing. Iron ore prices demonstrate cyclical patterns but strong long-term fundamentals from infrastructure development. These price trends support project economics while ensuring government revenue.

Market access demonstrates strong demand fundamentals, with regional markets in Pakistan, India, and China providing substantial demand. International markets provide additional opportunities, with transportation infrastructure enabling access to global markets. Offtake agreements with creditworthy buyers ensure market access while reducing market risk.

Supply chain dynamics favor Afghan development, with supply concentration creating opportunities for diversification. Critical mineral supply chains require diversification away from concentrated sources, creating strategic opportunities for Afghan producers. These dynamics support long-term demand fundamentals while ensuring market access.`,
        icon: Globe,
        alignment: 'right'
      },
    ],

    detailedSections: [
      {
        title: 'Investment Commitments',
        content: 'Over $10B in committed capital across 50+ projects demonstrates strong investor confidence and substantial development potential.',
        icon: DollarSign
      },
      {
        title: 'Project Returns',
        content: 'Expected IRRs of 20-35% compare favorably with international mining investments while ensuring attractive investor returns.',
        icon: TrendingUp
      },
      {
        title: 'Employment Impact',
        content: '100,000+ direct jobs and 300,000+ total jobs demonstrate substantial employment creation and economic impact.',
        icon: Users
      },
      {
        title: 'Government Revenue',
        content: 'Projected annual government revenue of $500M-$2B per major project supports national development priorities.',
        icon: BarChart3
      },
      {
        title: 'Market Fundamentals',
        content: 'Strong commodity price trends and demand fundamentals support project economics and long-term viability.',
        icon: Globe
      },
      {
        title: 'Investor Diversity',
        content: '50+ investors from 15+ countries represent diverse sectors ensuring robust capital availability and reduced risk.',
        icon: Building2
      },
    ],

    benefits: [
      {
        title: 'Strong Economics',
        description: 'Project IRRs of 20-35% and competitive payback periods demonstrate strong investment returns.',
        icon: TrendingUp
      },
      {
        title: 'Substantial Employment',
        description: '100,000+ direct jobs and 300,000+ total jobs create substantial economic impact and community benefit.',
        icon: Users
      },
      {
        title: 'Government Revenue',
        description: 'Projected annual revenue of $500M-$2B per major project supports national development priorities.',
        icon: DollarSign
      },
      {
        title: 'Market Access',
        description: 'Strong demand fundamentals and regional markets ensure market access and competitive pricing.',
        icon: Globe
      },
    ],

    relatedResources: [
      { name: 'Investment Opportunities', href: '/investment/opportunities', icon: Briefcase },
      { name: 'Investment Framework', href: '/investment/framework', icon: FileText },
      { name: 'Partnership Models', href: '/investment/partnerships', icon: Handshake },
    ],
  },


  'due-diligence': {
    title: 'Due Diligence & Site Assessment',
    subtitle: 'Comprehensive Evaluation Services',
    overview: `Afghanistan's due diligence framework provides investors with systematic evaluation tools covering geological verification, legal compliance, environmental baseline studies, and community impact assessments. Accredited laboratories in Kabul and Herat perform assay verification using ICP-MS and XRF spectroscopy, cross-referencing results against Soviet-era survey databases and modern USGS datasets. Legal due diligence covers title verification across 34 provinces, with digital cadastre systems enabling real-time license status checks. Environmental baseline studies follow IFC Performance Standards, documenting water quality, biodiversity, and air quality metrics across proposed development zones. Community assessments map stakeholder networks, traditional resource use patterns, and social infrastructure requirements.`,
    stats: [
      { value: '120+', label: 'Assessments', description: 'Completed annually' },
      { value: '34', label: 'Provinces', description: 'Full cadastre coverage' },
      { value: '99.7%', label: 'Accuracy', description: 'Assay verification rate' },
      { value: '45 Days', label: 'Turnaround', description: 'Standard assessment' },
      { value: 'IFC', label: 'Standards', description: 'Performance benchmarks' },
      { value: '200+', label: 'Experts', description: 'Accredited professionals' },
    ],
    sections: [
      { title: 'Geological Verification & Assay', content: 'Accredited laboratories perform ICP-MS and XRF spectroscopy analysis on drill core samples, cross-referencing results against Soviet-era geological databases containing 1,254 documented mineral occurrences and modern USGS hyperspectral datasets. Multi-element assays cover 62 elements with detection limits below 0.01 ppm for precious metals. Quality assurance protocols include duplicate samples, certified reference materials, and inter-laboratory round-robin testing with international partners in Germany and Australia.', icon: Target, alignment: 'left' as const },
      { title: 'Legal Title & License Verification', content: 'Digital cadastre systems provide real-time verification of exploration and mining licenses across all 34 provinces. Title searches cover historical concessions dating to the 1960s Soviet-era agreements, post-2001 license awards, and pending applications. Legal teams verify compliance with the 2018 Mining Law amendments, environmental permit status, community consent documentation, and tax compliance records. Average title verification completes within 15 business days.', icon: FileText, alignment: 'right' as const },
      { title: 'Environmental Baseline Studies', content: 'Comprehensive baseline studies document pre-development environmental conditions following IFC Performance Standards 1-8. Water quality monitoring covers surface and groundwater at 50+ sampling points per site. Biodiversity surveys catalog flora and fauna species, identifying any IUCN Red List species requiring special protection. Air quality baseline measurements establish PM2.5, PM10, and SO2 levels. Noise mapping documents ambient sound levels across project boundaries and nearby communities.', icon: Shield, alignment: 'left' as const },
      { title: 'Community & Social Assessment', content: 'Social baseline studies map stakeholder networks across affected communities, documenting traditional resource use patterns, livelihood dependencies, cultural heritage sites, and social infrastructure. Free Prior and Informed Consent (FPIC) processes engage community leaders through structured consultations. Resettlement action plans follow World Bank OP 4.12 standards when displacement is unavoidable. Grievance mechanisms establish community feedback channels monitored by independent third parties.', icon: Users, alignment: 'right' as const },
    ],
    heroImage: '',
  },

  'fiscal-terms': {
    title: 'Fiscal Terms & Revenue Structure',
    subtitle: 'Competitive Tax & Royalty Framework',
    overview: `Afghanistan's fiscal framework for mining investment has been benchmarked against 47 international mining jurisdictions to ensure globally competitive terms. The regime balances investor returns with national revenue generation through a transparent, predictable system of royalties, corporate income tax, withholding taxes, and production sharing mechanisms. Royalty rates range from 2.5% for strategic minerals (lithium, rare earths) to 12% for high-value gemstones, with graduated scales linked to commodity prices. Corporate income tax applies at 20% with 7-year tax holidays for projects exceeding $100M capital investment. Accelerated depreciation over 4 years for mining equipment and 10 years for infrastructure ensures rapid capital recovery.`,
    stats: [
      { value: '2.5-12%', label: 'Royalty Range', description: 'Mineral-specific rates' },
      { value: '20%', label: 'CIT Rate', description: 'Corporate income tax' },
      { value: '7 Years', label: 'Tax Holiday', description: 'For major projects' },
      { value: '4 Years', label: 'Depreciation', description: 'Equipment write-off' },
      { value: '0%', label: 'Import Duty', description: 'Mining equipment' },
      { value: '$30T+', label: 'Revenue Base', description: 'Total mineral value' },
    ],
    sections: [
      { title: 'Royalty Structure & Mineral Categories', content: 'Royalties are calculated on the gross value of mineral production at mine-gate prices, with rates differentiated by mineral category. Strategic minerals critical to energy transition (lithium, cobalt, rare earths) attract preferential rates of 2.5-5% to incentivize development. Base metals (copper, iron, zinc, lead) are assessed at 5-8% depending on processing level—lower rates apply when value-added processing occurs domestically. Precious metals (gold, silver) attract 8-10% royalties, while gemstones (emeralds, lapis lazuli, rubies) are assessed at 10-12%. All rates include price-linked escalators that increase royalties when commodity prices exceed trigger thresholds, ensuring Afghanistan benefits from price upswings.', icon: DollarSign, alignment: 'left' as const },
      { title: 'Tax Incentives & Capital Recovery', content: 'The fiscal regime includes comprehensive incentives designed to accelerate project development. Seven-year corporate income tax holidays apply to projects with capital investment exceeding $100M, with 5-year holidays for projects above $50M. Accelerated depreciation allows mining equipment to be written off over 4 years and infrastructure over 10 years. Loss carry-forward provisions extend for 10 years, ensuring that exploration and development costs can be fully offset against future production income. Import duties are waived for mining equipment, spare parts, and consumables during the construction and development phase.', icon: TrendingUp, alignment: 'right' as const },
      { title: 'Production Sharing Mechanisms', content: 'Production sharing agreements (PSAs) provide an alternative fiscal structure where costs are recovered from gross production before profit sharing. Cost recovery limits are set at 60-70% of gross production value, with remaining production shared between the investor (55-65%) and government (35-45%). Sliding scale mechanisms adjust profit shares based on production volumes and commodity prices, ensuring both parties benefit from project success. PSAs include ring-fencing provisions that prevent cost transfers between multiple concession areas.', icon: Handshake, alignment: 'left' as const },
      { title: 'Revenue Transparency & Distribution', content: 'All fiscal payments are disclosed through EITI-compliant reporting, with independent reconciliation of company payments and government receipts. Revenue distribution allocates 40% to the national treasury, 30% to provincial development funds in producing regions, 20% to the Mineral Development Fund for future generations, and 10% to community development programs in directly affected areas. Quarterly reporting ensures timely disclosure, with annual independent audits by international accounting firms.', icon: BarChart3, alignment: 'right' as const },
    ],
    heroImage: '',
  },

  'environmental-compliance': {
    title: 'Environmental Compliance & Standards',
    subtitle: 'World-Class Environmental Protection',
    overview: `Mining operations in Afghanistan must comply with comprehensive environmental standards aligned with IFC Performance Standards and World Bank Environmental, Health and Safety Guidelines. The regulatory framework mandates Environmental and Social Impact Assessments (ESIAs) before project approval, continuous monitoring during operations, and fully funded closure and rehabilitation plans. Water management protocols require 95%+ recycling rates in processing operations. Biodiversity offset programs compensate for unavoidable habitat impacts through conservation investments in equivalent ecosystems. Air quality monitoring uses real-time sensor networks transmitting data to central regulatory systems. Carbon footprint reporting follows GHG Protocol standards with reduction targets aligned to Paris Agreement commitments.`,
    stats: [
      { value: '95%+', label: 'Water Recycling', description: 'Processing operations' },
      { value: 'IFC PS 1-8', label: 'Standards', description: 'Full compliance required' },
      { value: '100%', label: 'ESIA Coverage', description: 'All projects assessed' },
      { value: '30 Years', label: 'Closure Plans', description: 'Post-mining monitoring' },
      { value: 'Net Zero', label: 'Carbon Target', description: 'By 2045' },
      { value: '500+', label: 'Monitoring Points', description: 'Nationwide network' },
    ],
    sections: [
      { title: 'Environmental Impact Assessment Process', content: 'All mining projects require comprehensive Environmental and Social Impact Assessments (ESIAs) prepared by accredited international consultants. ESIAs cover physical environment (geology, hydrology, air quality, noise), biological environment (flora, fauna, ecosystems, protected species), and social environment (communities, livelihoods, cultural heritage, health). Public consultation periods of 60 days allow community input, with responses documented and addressed in final assessment documents. Independent review panels evaluate ESIAs before ministerial approval, ensuring technical rigor and compliance with international standards.', icon: FileText, alignment: 'left' as const },
      { title: 'Water Management & Protection', content: 'Water management protocols require closed-loop processing systems achieving 95%+ water recycling rates. Tailings storage facilities follow GISTM (Global Industry Standard on Tailings Management) design principles with independent engineering reviews. Acid mine drainage prevention includes sulfide encapsulation, alkaline covers, and passive treatment systems. Groundwater monitoring networks with piezometers at 100m intervals around operations detect any contamination. Watershed protection programs maintain riparian buffer zones of minimum 500m from perennial waterways.', icon: Shield, alignment: 'right' as const },
      { title: 'Biodiversity Conservation Programs', content: 'Biodiversity management plans follow the mitigation hierarchy: avoid, minimize, restore, and offset. Critical habitat assessments identify areas supporting IUCN Red List species or important ecosystems. No-go zones protect critical habitats from any development activity. Biodiversity offset programs invest in conservation of equivalent ecosystems, achieving net positive impact. Wildlife monitoring programs use camera traps, acoustic sensors, and seasonal surveys to track species populations. Reforestation programs plant 10 trees for every tree removed during development.', icon: Award, alignment: 'left' as const },
      { title: 'Mine Closure & Rehabilitation', content: 'Closure plans are required at project approval stage, with financial guarantees (bank guarantees or trust funds) covering 100% of estimated closure costs. Progressive rehabilitation begins during operations, restoring disturbed areas as they become available. Post-mining land use plans are developed in consultation with communities, prioritizing agriculture, conservation, or community infrastructure. Environmental monitoring continues for 30 years post-closure, with financial provisions for long-term management. International closure audits verify compliance with rehabilitation standards.', icon: Target, alignment: 'right' as const },
    ],
    heroImage: '',
  },

  'workforce-development': {
    title: 'Workforce Development & Training',
    subtitle: 'Building Afghan Mining Expertise',
    overview: `Afghanistan's workforce development strategy creates a pipeline of skilled mining professionals through partnerships with international mining universities, technical training institutes, and on-the-job apprenticeship programs. The National Mining Training Center in Kabul provides certification programs in geology, mining engineering, metallurgy, environmental management, and mine safety. International scholarship programs send 500+ Afghan students annually to mining universities in Australia, Canada, Germany, and China. Local content requirements mandate that 70% of operational workforce and 40% of management positions are filled by Afghan nationals within 5 years of production commencement. Specialized training programs target women's participation, with targets of 20% female workforce by 2035.`,
    stats: [
      { value: '500+', label: 'Scholarships', description: 'Annual international placements' },
      { value: '70%', label: 'Local Content', description: 'Workforce requirement' },
      { value: '15,000+', label: 'Certified', description: 'Mining professionals' },
      { value: '12', label: 'Training Centers', description: 'Across provinces' },
      { value: '20%', label: 'Women Target', description: 'By 2035' },
      { value: '45+', label: 'Programs', description: 'Certification courses' },
    ],
    sections: [
      { title: 'National Mining Training Infrastructure', content: 'The National Mining Training Center in Kabul operates 12 specialized laboratories covering mineralogy, ore processing, environmental testing, geotechnical analysis, and mine ventilation. Regional training centers in Herat, Mazar-i-Sharif, and Jalalabad provide decentralized access to certification programs. Mobile training units reach remote mining communities in 20+ provinces. Equipment includes drill simulators, flotation pilot plants, and underground mine rescue training facilities. Annual training capacity exceeds 5,000 students across all certification levels.', icon: Building2, alignment: 'left' as const },
      { title: 'International University Partnerships', content: 'Partnerships with 25+ international mining universities provide degree programs, research collaboration, and faculty exchange. Key partners include Curtin University (Australia), University of British Columbia (Canada), Freiberg University of Mining and Technology (Germany), and China University of Mining and Technology. Joint degree programs allow Afghan students to complete coursework domestically before international residency periods. Research partnerships focus on Afghan-specific challenges including high-altitude mining, arid environment rehabilitation, and artisanal mining formalization.', icon: Globe, alignment: 'right' as const },
      { title: 'Apprenticeship & On-the-Job Training', content: 'Structured apprenticeship programs combine classroom instruction with supervised practical experience across all mining disciplines. Three-year programs in mining operations, processing, maintenance, and environmental management lead to nationally recognized qualifications. International operators are required to maintain training-to-workforce ratios of 1:10, ensuring continuous skills development. Mentorship programs pair Afghan professionals with experienced international counterparts for accelerated development. Annual competency assessments ensure skills progression and identify further training needs.', icon: Users, alignment: 'left' as const },
      { title: 'Women in Mining Programs', content: 'Dedicated programs promote women\'s participation across all mining disciplines, from geology and engineering to management and community relations. Scholarship programs reserve 30% of places for women. Workplace policies mandate childcare facilities at mining operations with 500+ employees. Flexible work arrangements accommodate family responsibilities. Women\'s mining networks provide mentorship, professional development, and advocacy. Current female participation stands at 8% with a target of 20% by 2035 through systematic policy interventions and cultural engagement programs.', icon: Award, alignment: 'right' as const },
    ],
    heroImage: '',
  },

  'infrastructure-support': {
    title: 'Infrastructure & Logistics Support',
    subtitle: 'Enabling Mining Development',
    overview: `Afghanistan's mining infrastructure program addresses transportation, energy, water, and telecommunications requirements for mineral development zones. The $15 billion infrastructure master plan includes 4,500 km of mining access roads, 2,200 km of rail corridors connecting major deposits to export routes through Pakistan and Central Asia, 3,500 MW of dedicated mining power generation, and broadband telecommunications to all major mining districts. Public-private partnership models enable cost-sharing between government and mining operators, with infrastructure costs recoverable through reduced royalty rates during construction phases. Special Economic Zones at Aynak, Hajigak, and Ghazni provide pre-developed industrial land with utilities, reducing project development timelines by 18-24 months.`,
    stats: [
      { value: '$15B', label: 'Master Plan', description: 'Infrastructure investment' },
      { value: '4,500 km', label: 'Roads', description: 'Mining access roads' },
      { value: '2,200 km', label: 'Rail', description: 'Mineral corridors' },
      { value: '3,500 MW', label: 'Power', description: 'Mining generation' },
      { value: '3', label: 'SEZs', description: 'Special Economic Zones' },
      { value: '18-24 Mo', label: 'Faster', description: 'SEZ time savings' },
    ],
    sections: [
      { title: 'Transportation Networks & Corridors', content: 'Four primary mineral transportation corridors connect major deposits to regional export hubs. The Northern Corridor links Hajigak iron ore to Mazar-i-Sharif and onward to Uzbekistan railway networks. The Southern Corridor connects Mes Aynak copper to Pakistan\'s Gwadar and Karachi ports via Torkham. The Eastern Corridor provides access from Ghazni lithium deposits to Peshawar and international shipping. The Western Corridor links Herat marble and industrial minerals to Iran\'s Chabahar port. Road upgrades include widening to dual carriageway, bridge reinforcement for 100-ton loads, and all-weather surfacing.', icon: TrendingUp, alignment: 'left' as const },
      { title: 'Energy Generation & Distribution', content: '3,500 MW of dedicated mining power generation includes 1,500 MW solar PV in southern provinces, 800 MW natural gas in northern provinces, 600 MW hydroelectric from existing dam capacity, and 600 MW wind generation in western corridors. Grid connections to regional power systems (CASA-1000 from Central Asia, TUTAP from Turkmenistan) provide backup supply. Mining operations above 50 MW demand receive dedicated substations with 99.5% availability guarantees. Renewable energy targets require 60% clean generation by 2035.', icon: Zap, alignment: 'right' as const },
      { title: 'Water Supply & Management', content: 'Mining water supply infrastructure includes 45 major bore fields, 12 surface water treatment plants, and 200 km of pipeline connecting water sources to mining operations. Water allocation frameworks balance mining needs with agricultural and community requirements through seasonal allocation modeling. Desalination pilot plants in southern provinces address water scarcity challenges. Water recycling infrastructure achieves 95%+ reuse rates, minimizing freshwater withdrawal. Real-time monitoring of water quality and quantity ensures compliance with environmental standards.', icon: Shield, alignment: 'left' as const },
      { title: 'Special Economic Zones', content: 'Three mining Special Economic Zones at Aynak (Logar), Hajigak (Bamyan), and Ghazni provide pre-developed industrial land with all utilities. SEZ infrastructure includes graded building pads, paved internal roads, power substations, water treatment plants, sewage systems, and telecommunications. Customs bonded zones within SEZs enable duty-free import of equipment and materials. Streamlined permitting within SEZs reduces approval timelines from 12 months to 90 days. Shared infrastructure reduces per-project costs by 30-40% compared to standalone developments.', icon: Building2, alignment: 'right' as const },
    ],
    heroImage: '',
  },

  'dispute-resolution': {
    title: 'Dispute Resolution & Arbitration',
    subtitle: 'International Legal Protections',
    overview: `Afghanistan's dispute resolution framework provides multiple layers of protection for mining investors through domestic courts, administrative tribunals, and international arbitration mechanisms. The framework recognizes ICSID (International Centre for Settlement of Investment Disputes) jurisdiction, UNCITRAL arbitration rules, and Singapore International Arbitration Centre (SIAC) as approved forums. Bilateral investment treaties with 30+ countries provide treaty-based protections including fair and equitable treatment, protection against expropriation, and most-favored-nation treatment. A dedicated Mining Disputes Tribunal handles sector-specific disputes with expedited timelines. Mediation services through the Afghan Chamber of Mines resolve 85% of commercial disputes without formal proceedings.`,
    stats: [
      { value: 'ICSID', label: 'Arbitration', description: 'International jurisdiction' },
      { value: '30+', label: 'BITs', description: 'Investment treaties' },
      { value: '85%', label: 'Mediation', description: 'Resolution rate' },
      { value: '90 Days', label: 'Tribunal', description: 'Expedited decisions' },
      { value: '100%', label: 'Enforcement', description: 'Award compliance' },
      { value: 'NYC 1958', label: 'Convention', description: 'Award recognition' },
    ],
    sections: [
      { title: 'International Arbitration Framework', content: 'Afghanistan is a signatory to the ICSID Convention and the New York Convention on Recognition and Enforcement of Foreign Arbitral Awards (1958), ensuring that international arbitral awards are enforceable domestically. Mining contracts specify ICSID as the primary arbitration forum for investor-state disputes, with UNCITRAL rules available as an alternative. Seat of arbitration can be Paris, London, Singapore, or any mutually agreed neutral venue. Arbitral panels consist of three arbitrators with mining industry expertise, ensuring technically informed decisions. Interim measures including asset preservation orders are available through both arbitral tribunals and domestic courts.', icon: Scale, alignment: 'left' as const },
      { title: 'Bilateral Investment Treaty Protections', content: 'BITs with 30+ countries establish treaty-based protections that survive changes in domestic law. Key protections include fair and equitable treatment (FET) prohibiting arbitrary or discriminatory government actions, full protection and security requiring the state to protect investments from interference, protection against direct and indirect expropriation without prompt adequate and effective compensation, free transfer of funds enabling repatriation of capital and profits, and most-favored-nation treatment ensuring investors receive treatment no less favorable than investors from any other country.', icon: Shield, alignment: 'right' as const },
      { title: 'Mining Disputes Tribunal', content: 'The Mining Disputes Tribunal is a specialized domestic forum handling mining-specific disputes with expedited 90-day decision timelines. Tribunal members include retired Supreme Court justices, international mining law experts, and technical specialists in geology and mining engineering. The Tribunal handles license disputes, royalty calculations, environmental compliance disagreements, and community benefit disputes. Decisions are binding and enforceable through domestic courts, with appeal rights to the Supreme Court on points of law only. The Tribunal has resolved 150+ disputes since establishment with a 95% compliance rate.', icon: FileText, alignment: 'left' as const },
      { title: 'Mediation & Alternative Resolution', content: 'The Afghan Chamber of Mines operates a professional mediation service resolving 85% of commercial disputes without formal arbitration or litigation. Certified mediators with mining industry experience facilitate negotiations between parties, with average resolution timelines of 30 days. Mediation is mandatory before arbitration for commercial disputes under $10M, reducing costs and preserving business relationships. Community disputes are handled through specialized mediation incorporating traditional Afghan dispute resolution mechanisms (jirga/shura) alongside modern mediation techniques, ensuring culturally appropriate and effective resolution.', icon: Handshake, alignment: 'right' as const },
    ],
    heroImage: '',
  },

  'technology-innovation': {
    title: 'Mining Technology & Innovation',
    subtitle: 'Digital Transformation in Mining',
    overview: `Afghanistan's mining sector leverages cutting-edge technology to maximize resource recovery, minimize environmental impact, and ensure operational safety. The National Mining Digital Strategy mandates adoption of autonomous drilling systems, AI-powered ore sorting, drone-based surveying, and blockchain supply chain tracking across all major operations. The Kabul Mining Innovation Hub partners with international technology companies to adapt solutions for Afghan conditions including high-altitude operations, extreme temperature ranges, and remote connectivity challenges. Research and development incentives provide 150% tax deductions for mining technology investments, encouraging innovation and knowledge transfer.`,
    stats: [
      { value: 'AI-Powered', label: 'Ore Sorting', description: 'Automated processing' },
      { value: '150%', label: 'R&D Deduction', description: 'Tax incentive' },
      { value: '95%+', label: 'Recovery', description: 'Advanced processing' },
      { value: 'Blockchain', label: 'Supply Chain', description: 'Full traceability' },
      { value: '50+', label: 'Tech Partners', description: 'International firms' },
      { value: '24/7', label: 'Monitoring', description: 'Remote operations' },
    ],
    sections: [
      { title: 'Autonomous Mining Systems', content: 'Autonomous haul trucks, drill rigs, and load-haul-dump vehicles operate across major open-pit and underground operations. GPS-guided drilling achieves blast hole accuracy within 10cm, optimizing fragmentation and reducing ore dilution. Fleet management systems coordinate 500+ autonomous vehicles across multiple operations, maximizing productivity while eliminating operator safety risks. Underground autonomous systems navigate complex tunnel networks using LiDAR and inertial guidance, operating 24/7 in conditions too hazardous for human workers.', icon: Zap, alignment: 'left' as const },
      { title: 'AI & Machine Learning Applications', content: 'AI-powered ore sorting uses hyperspectral imaging and X-ray transmission to classify ore particles in real-time, improving processing recovery by 15-25% while reducing energy and water consumption. Machine learning algorithms optimize blast patterns based on geological models, reducing overbreak and improving fragmentation. Predictive maintenance systems analyze sensor data from 10,000+ monitoring points to forecast equipment failures before they occur, reducing unplanned downtime by 40%. Natural language processing analyzes geological reports spanning 60 years of Soviet and USGS documentation.', icon: Target, alignment: 'right' as const },
      { title: 'Drone & Remote Sensing Technology', content: 'Mining operations deploy drone fleets for topographic surveying (achieving 2cm accuracy), stockpile volume measurement, slope stability monitoring, and environmental compliance verification. Multispectral drone imagery detects vegetation stress around operations, providing early warning of environmental impacts. LiDAR-equipped drones create detailed 3D models of underground mine workings for planning and safety analysis. Satellite-based InSAR monitoring detects ground subsidence across mining districts with millimeter precision, enabling early intervention for stability concerns.', icon: Globe, alignment: 'left' as const },
      { title: 'Blockchain & Supply Chain Traceability', content: 'Blockchain-based supply chain tracking provides full provenance documentation from mine to end-user for gemstones, rare earths, and conflict-sensitive minerals. Each production batch receives a unique digital certificate recording geological origin, processing history, environmental compliance data, and social impact metrics. Smart contracts automate royalty calculations and payments based on verified production data. The system has processed 2 million+ transactions, providing auditable records that satisfy international responsible sourcing requirements including EU Conflict Minerals Regulation and OECD Due Diligence Guidance.', icon: Lock, alignment: 'right' as const },
    ],
    heroImage: '',
  },

  'community-benefit': {
    title: 'Community Benefit & Social Investment',
    subtitle: 'Mining for Afghan Communities',
    overview: `Afghanistan's community benefit framework ensures that mining development creates lasting positive impacts for affected communities and the broader population. Mining companies are required to allocate 3-5% of gross revenue to Community Development Funds managed by elected local committees. Benefit-sharing agreements negotiated through Free Prior and Informed Consent (FPIC) processes define specific commitments for employment, procurement, infrastructure, education, and healthcare. National employment targets require 70% local workforce within 5 years. Preferential procurement policies direct 40-60% of operational spending to Afghan suppliers, creating economic multiplier effects across the value chain.`,
    stats: [
      { value: '3-5%', label: 'Revenue Share', description: 'Community development' },
      { value: '70%', label: 'Local Jobs', description: 'Employment target' },
      { value: '40-60%', label: 'Procurement', description: 'Local sourcing' },
      { value: '500+', label: 'Schools', description: 'Mining-funded' },
      { value: '200+', label: 'Clinics', description: 'Health facilities' },
      { value: '$2B+', label: 'Annual', description: 'Community investment' },
    ],
    sections: [
      { title: 'Community Development Funds', content: 'Community Development Funds receive 3-5% of gross mining revenue, managed by elected Community Development Committees with independent financial oversight. Funds support priority projects identified through participatory community planning including schools, health clinics, clean water systems, agricultural improvement, and small business support. Annual audits by independent accounting firms ensure transparent fund management. Cumulative fund contributions exceed $500M across all operations, with individual major projects contributing $20-50M annually. Fund governance includes 50% women representation on committees.', icon: Users, alignment: 'left' as const },
      { title: 'Employment & Skills Transfer', content: 'Local employment programs prioritize hiring from affected communities, with structured training pathways from entry-level positions to skilled technical and supervisory roles. Pre-employment training programs prepare community members for mining employment through 12-week intensive courses covering safety, basic skills, and workplace readiness. Scholarship programs fund tertiary education for community members in mining-related disciplines. Business development programs support local entrepreneurs to establish mining service companies, creating sustainable employment beyond direct mining operations.', icon: Award, alignment: 'right' as const },
      { title: 'Infrastructure Development', content: 'Mining operations fund infrastructure benefiting both operations and communities including roads, bridges, power lines, water systems, and telecommunications. Community infrastructure programs have built 500+ schools serving 200,000+ students, 200+ health clinics providing primary care, and 1,000+ clean water points serving 2 million+ people. Road improvements benefit agricultural transport and market access. Power line extensions bring electricity to previously unserved communities. These investments create lasting development legacies extending well beyond mine life.', icon: Building2, alignment: 'left' as const },
      { title: 'Cultural Heritage Protection', content: 'Mining operations implement comprehensive cultural heritage protection programs, with archaeological surveys preceding all ground disturbance. The Mes Aynak archaeological program has become a global model, with systematic excavation and preservation of Buddhist-era artifacts spanning 2,000+ years. Heritage management plans developed in consultation with communities protect sacred sites, traditional gathering areas, and historically significant landscapes. Digital documentation using 3D scanning and photogrammetry creates permanent records of heritage sites. Revenue from heritage tourism at preserved sites provides ongoing community income.', icon: Globe, alignment: 'right' as const },
    ],
    heroImage: '',
  },
};

// Wire in massive investment section expansions
import {
  FRAMEWORK_EXTRA_SECTIONS,
  OPPORTUNITIES_EXTRA_SECTIONS,
  PARTNERSHIPS_EXTRA_SECTIONS,
} from './investmentSectionsExpansion';

if (investmentDatabase['framework']) {
  investmentDatabase['framework'].sections.push(...FRAMEWORK_EXTRA_SECTIONS);
}
if (investmentDatabase['opportunities']) {
  investmentDatabase['opportunities'].sections.push(...OPPORTUNITIES_EXTRA_SECTIONS);
}
if (investmentDatabase['partnerships']) {
  investmentDatabase['partnerships'].sections.push(...PARTNERSHIPS_EXTRA_SECTIONS);
}

export { investmentDatabase };
