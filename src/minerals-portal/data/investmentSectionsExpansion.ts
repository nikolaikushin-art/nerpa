/**
 * MASSIVE INVESTMENT SECTIONS EXPANSION
 * Adds 6-8 deep sections per investment entry
 */

import { Award, BarChart3, Briefcase, Building2, CheckCircle2, DollarSign, FileText, Globe, Handshake, Lock, Scale, Shield, Target, TrendingUp, Users, Zap } from 'lucide-react';

export const FRAMEWORK_EXTRA_SECTIONS = [
  {
    title: 'Stabilization Clauses & Change-of-Law Protection',
    content: `Afghanistan's investment contracts include stabilization clauses that protect investors against adverse changes in law. Fiscal stabilization ensures that royalty rates, tax rates, and duty structures remain fixed for the contract term—typically 15-30 years. Regulatory stabilization protects against changes in environmental, labor, or safety regulations that would materially increase operating costs without commensurate benefit. These clauses provide the long-term certainty essential for investments with multi-decade payback periods.

Stabilization mechanisms operate through "freezing" provisions that lock applicable law at contract signing, or "economic equilibrium" provisions that require compensation for adverse changes. Economic equilibrium clauses are preferred as they allow regulatory improvement while protecting investor economics. Independent arbitration panels adjudicate disputes over stabilization clause interpretation. The combination of bilateral investment treaty protection and contractual stabilization creates multiple layers of legal security exceeding most developing country investment environments.

Force majeure provisions address extraordinary events—natural disasters, political disruption, pandemic—that prevent contract performance. Clearly defined force majeure events, notification requirements, and mitigation obligations provide predictable frameworks for managing exceptional circumstances. Contract extension provisions ensure that force majeure delays do not reduce the effective contract term, protecting investor returns against events beyond their control.`,
    icon: Lock,
    alignment: 'left' as const
  },
  {
    title: 'Tax Incentive Structures & Accelerated Depreciation',
    content: `Afghanistan's mining tax incentive structure accelerates investor payback through front-loaded fiscal benefits. Accelerated depreciation allows mining equipment and infrastructure to be written off over 3-5 years rather than their economic life of 15-25 years, reducing taxable income during capital-intensive development phases. Investment tax credits of 10-15% on qualifying exploration and development expenditure provide additional fiscal support.

Import duty exemptions for mining equipment, reagents, and consumables during construction and initial production phases reduce project capital costs by 5-10%. VAT deferral on capital expenditure during construction prevents cash flow strain during pre-revenue periods. Loss carry-forward provisions of up to 10 years ensure that exploration and development expenditure offsets future taxable income regardless of the time between expenditure and production. These provisions collectively reduce effective tax rates during development phases to 5-10%, improving project NPV by 15-25%.

Ring-fencing provisions prevent costs from one project reducing taxable income from another, ensuring that government revenue reflects project-level profitability. Transfer pricing rules based on arm's-length principles prevent profit shifting. Thin capitalization rules limit interest deductions to 3:1 debt-to-equity ratios. These anti-avoidance provisions balance investor incentives with revenue protection, ensuring that fiscal benefits genuinely support investment rather than enabling tax planning.`,
    icon: TrendingUp,
    alignment: 'right' as const
  },
  {
    title: 'Joint Venture Structures & Government Participation',
    content: `Joint venture structures enable Afghan government equity participation in mining projects while maintaining private sector management and efficiency. The typical structure provides the government with a 20-30% carried interest—equity acquired without capital contribution, funded from project cash flows. This structure ensures government alignment with project success without requiring upfront capital that would divert resources from public services.

Management committees with representation from both government and private partners oversee strategic decisions including annual budgets, development plans, and major contracts. Day-to-day operations remain under private management, ensuring professional mining expertise drives operational decisions. Government representation on technical committees provides oversight without operational interference. Dividend distribution follows standard corporate governance with independent auditing ensuring transparency.

State-owned enterprise participation through the Afghan Mining Company (AMC) provides institutional continuity across political cycles. AMC's technical staff—trained in mining engineering, geology, and finance—represent government interests with professional competence. AMC's growing expertise enables increasing Afghan participation in project management over time, with eventual capability for independent operation. This capacity building through JV participation transforms government from regulator to capable industry participant.`,
    icon: Handshake,
    alignment: 'left' as const
  },
  {
    title: 'Insurance & Risk Mitigation Instruments',
    content: `Comprehensive risk mitigation instruments address political, commercial, and natural hazard risks for Afghan mining investments. MIGA (Multilateral Investment Guarantee Agency) political risk insurance covers expropriation, transfer restriction, breach of contract, and war/civil disturbance for up to $250 million per project and 20-year terms. MIGA coverage enables commercial bank participation by reducing risk profiles to insurable levels.

Export credit agency (ECA) guarantees from investor home countries cover 85-95% of debt, enabling longer tenors (15-20 years) and lower interest rates. ECAs from major mining nations including Australia (EFIC), Canada (EDC), Japan (NEXI), and China (Sinosure) actively support Afghan mining investment. ECA-covered debt typically achieves interest rates 150-300 basis points below uncovered commercial lending, significantly improving project economics.

Private political risk insurance from Lloyd's of London and specialist insurers supplements multilateral coverage. Business interruption insurance covers revenue losses from political events, natural disasters, and supply chain disruptions. Comprehensive insurance programs typically cost 1-2% of insured value annually—a modest premium for the risk reduction achieved. The availability of these instruments demonstrates international institutional confidence in Afghanistan's investment environment and legal protections.`,
    icon: Shield,
    alignment: 'right' as const
  },
  {
    title: 'Revenue Management & Sovereign Wealth Fund',
    content: `Afghanistan's Mineral Revenue Management Framework channels mining revenues through transparent systems ensuring intergenerational equity. The Afghan Mineral Wealth Fund—structured as a sovereign wealth fund—receives 30% of government mining revenue for long-term investment, building national wealth that persists beyond mineral depletion. Investment policy targets diversified global portfolios following the "Norway Model" of sovereign wealth management.

Current expenditure allocation directs 40% of revenue to national budget support—education, healthcare, infrastructure—while 30% funds provincial development in mining-affected regions. The remaining 30% enters the sovereign wealth fund. Revenue stabilization mechanisms smooth government receipts against commodity price volatility, preventing boom-bust fiscal cycles. During high-price periods, excess revenue accumulates in stabilization reserves; during low-price periods, stabilization reserves maintain government spending.

Parliamentary oversight committees review fund performance annually. Independent external audits verify compliance with investment policy and allocation rules. Transparency requirements mandate public disclosure of fund value, investment returns, and expenditure allocation. Civil society monitoring ensures accountability. These governance structures build public confidence that mineral wealth translates into lasting national prosperity rather than concentrated private benefit.`,
    icon: BarChart3,
    alignment: 'left' as const
  },
  {
    title: 'Technology Transfer & Intellectual Property Framework',
    content: `Afghanistan's technology transfer framework ensures that mining investment builds domestic technological capability. Technology transfer requirements in mining contracts specify training obligations, knowledge sharing protocols, and research collaboration commitments. Investors provide detailed technology descriptions enabling domestic absorption, conduct training programs for Afghan engineers and technicians, and participate in applied research programs at Afghan universities.

Intellectual property protections meeting international standards (TRIPS compliance) ensure that investors' proprietary technologies receive adequate legal protection. Patent registration, trade secret protection, and licensing frameworks balance technology protection with transfer objectives. Afghan researchers gain access to advanced technologies through structured partnerships while respecting IP rights. Joint research programs generating new intellectual property include provisions for shared ownership reflecting respective contributions.

Technology incubators at Afghan mining universities apply transferred knowledge to local challenges, developing innovations adapted to Afghan conditions. Graduates trained in advanced mining technologies create a knowledge pool driving continuous improvement across the sector. By 2040, domestic technological capability enables Afghan engineers to design, construct, and optimize mineral processing facilities independently, reducing dependence on international engineering firms while maintaining world-class technical standards.`,
    icon: Zap,
    alignment: 'right' as const
  },
];

export const OPPORTUNITIES_EXTRA_SECTIONS = [
  {
    title: 'Copper Portfolio: Mes Aynak & Beyond',
    content: `Afghanistan's copper investment portfolio extends far beyond Mes Aynak's headline-grabbing 12.5 million tonnes. Seven additional copper deposits across Logar, Zabul, and Kandahar provinces contain combined resources of 8 million tonnes, offering development opportunities at scales from $200 million to $2 billion. The Balkhab deposit in Sar-e-Pul contains 1.5 million tonnes of oxide copper amenable to SX-EW processing—a lower-capital technology path producing cathodes without smelting.

Portfolio investment approaches enable risk diversification across multiple deposits with different geological, technical, and political risk profiles. Sequential development strategies generate cash flow from easier deposits to fund development of more complex projects. Processing hub concepts concentrate investment in shared infrastructure serving multiple mines, reducing per-project capital requirements. Toll treatment agreements enable smaller operators to access processing capacity without capital-intensive facility construction.

Copper's structural demand growth—driven by electrification, renewable energy, and electric vehicles—supports long-term price forecasts of $12,000-15,000/tonne (2026 constant dollars). At these prices, Afghan copper projects achieve internal rates of return of 25-35%, placing them among the world's most attractive undeveloped opportunities. First-mover investors benefit from land-bank value appreciation as projects advance through exploration to feasibility.`,
    icon: DollarSign,
    alignment: 'left' as const
  },
  {
    title: 'Critical Minerals: Lithium, Rare Earth & Cobalt',
    content: `Afghanistan's critical mineral endowment—lithium, rare earth elements, cobalt, tantalum, niobium—positions the nation at the center of global supply chain diversification strategies. Western governments and manufacturers seeking alternatives to Chinese-dominated supply chains view Afghan deposits as strategically essential. Government-backed financing from US DFC, European EIB, and Japanese JBIC provides concessional capital for critical mineral projects, improving investor returns through below-market interest rates and extended tenors.

Lithium investment at scale requires $3-5 billion for integrated mining-processing operations producing 100,000 tonnes LCE annually. Strategic partnerships with battery manufacturers (CATL, LG, Samsung SDI) provide offtake certainty and technology support. Rare earth projects targeting 20,000 tonnes of separated oxides annually compete with Chinese production through lower labor costs and Western government support for supply diversification. Cobalt recovery as a by-product of copper processing at Mes Aynak adds $200-300 million annually to project revenue.

Critical mineral investment benefits from government incentive programs in consumer countries. The US Inflation Reduction Act provides tax credits for EVs using minerals from free-trade agreement partners. EU Critical Raw Materials Act priority-lists Afghan minerals for streamlined permitting and financing support. These demand-side incentives, combined with Afghanistan's exceptional resource quality, create a uniquely favorable investment environment for critical mineral development.`,
    icon: Zap,
    alignment: 'right' as const
  },
  {
    title: 'Industrial Minerals & Construction Materials',
    content: `Afghanistan's construction boom—driven by $50 billion in infrastructure investment through 2040—creates enormous demand for domestic construction materials. Marble quarrying (2 billion tonnes of reserves across 15 provinces) produces dimension stone, aggregate, and cement-grade limestone. Current production of 500,000 tonnes annually meets only 10% of domestic demand, with the remainder imported at $200 million annually. Investment of $100-300 million per quarry-processing complex achieves payback in 3-5 years with IRRs exceeding 40%.

Cement production using domestic limestone and coal inputs displaces $500 million in annual cement imports. Five cement plants of 2 million tonnes capacity each serve regional markets across Afghanistan. Integrated quarry-kiln-grinding operations minimize logistics costs. Supplementary cementitious materials—volcanic ash, ground granulated blast furnace slag from Hajigak—reduce clinker factor and carbon footprint. Domestic cement production saves $400 million annually in import costs while creating 15,000 industrial jobs.

Talc, gypsum, salt, and barite deposits provide additional industrial mineral opportunities. Afghanistan's talc reserves—estimated at 1 billion tonnes in Nangarhar and Kunar—supply cosmetic, pharmaceutical, and industrial markets. Gypsum deposits across central provinces supply plasterboard manufacturing and cement production. These lower-profile but highly profitable industrial minerals offer attractive returns with modest capital requirements, shorter development timelines, and lower technical risk compared to metallic mineral projects.`,
    icon: Building2,
    alignment: 'left' as const
  },
  {
    title: 'ESG-Compliant Investment & Impact Funds',
    content: `Afghanistan's mining sector attracts growing interest from ESG-focused investment funds seeking both financial returns and measurable social impact. Impact investment structures measuring returns against UN Sustainable Development Goals (SDGs) demonstrate that Afghan mining contributes to SDG 1 (No Poverty), SDG 8 (Decent Work), SDG 9 (Industry & Infrastructure), and SDG 12 (Responsible Consumption). Quantified impact metrics—jobs created, communities served, carbon avoided—meet institutional investor reporting requirements.

Green bond issuance finances carbon-neutral lithium production facilities with certified environmental credentials. Social bonds fund community infrastructure and workforce development programs associated with mining investment. Sustainability-linked bonds tie interest rates to achievement of environmental and social targets, aligning investor and operator incentives. These innovative financing instruments access the $35 trillion ESG investment market while supporting responsible Afghan mineral development.

Due diligence frameworks including OECD Guidelines for Responsible Mineral Supply Chains and conflict mineral certification address investor concerns about operating in complex environments. Independent monitoring, third-party auditing, and transparent reporting build investor confidence. Blended finance structures combining development institution capital with private investment reduce risk profiles to levels acceptable for institutional investors. These approaches enable participation of pension funds, sovereign wealth funds, and insurance companies in Afghan mining investment.`,
    icon: Globe,
    alignment: 'right' as const
  },
];

export const PARTNERSHIPS_EXTRA_SECTIONS = [
  {
    title: 'Bilateral Government Partnership Programs',
    content: `Government-to-government mineral partnerships provide institutional frameworks supporting private sector investment. The Afghanistan-India Strategic Minerals Partnership focuses on iron ore development at Hajigak, with Indian technical assistance, preferential financing, and steel market access. The Afghanistan-China Minerals Cooperation Agreement encompasses copper, lithium, and rare earth development with Chinese technology, financing, and offtake commitments. The Afghanistan-UAE Mining Investment Initiative channels Gulf capital into gold, gemstone, and industrial mineral projects.

These bilateral frameworks address challenges that private sector actors cannot solve alone—diplomatic support for cross-border infrastructure, customs harmonization for mineral trade, mutual recognition of quality standards, and political risk mitigation through government engagement. Joint technical committees meet quarterly to resolve operational issues, while ministerial-level reviews ensure strategic alignment. Bilateral investment treaties underpinning these partnerships provide additional legal protection for participating investors.

Multilateral partnerships with institutions including the World Bank, Asian Development Bank, and Islamic Development Bank provide technical assistance, concessional financing, and institutional strengthening support. The World Bank's Afghanistan Mining Sector Development Program provides $500 million in technical assistance over 10 years, building institutional capacity in geological survey, regulatory oversight, and revenue management. These partnerships accelerate sector development while building the institutional foundations for sustainable governance.`,
    icon: Globe,
    alignment: 'left' as const
  },
  {
    title: 'Private Sector Consortium Models',
    content: `Major mining projects in Afghanistan benefit from consortium structures that distribute risk and aggregate capabilities across multiple partners. The Mes Aynak Consortium combines a major mining company (operations and technology), a state-owned enterprise (government relationship and domestic knowledge), a trading house (offtake and market access), and a development finance institution (concessional capital and political risk coverage). Each partner contributes distinct capabilities essential for project success.

Consortium governance through shareholder agreements defines decision-making processes, cost allocation, and dispute resolution. Operating committees manage daily operations under the leadership of the designated operator—typically the partner with the strongest relevant technical capability. Technical committees provide expert oversight of geology, engineering, and environmental management. Finance committees manage treasury operations and reporting. These structured governance arrangements ensure professional management while protecting all partners' interests.

Small and medium enterprise (SME) consortium models enable smaller companies to participate in Afghan mining through collective structures. Exploration consortia pool capital for regional exploration programs, with successful discoveries allocated to partners based on contribution. Processing consortia share investment in common processing facilities, reducing per-company capital requirements. Marketing consortia aggregate production volumes for collective negotiation with international buyers, achieving better pricing through scale.`,
    icon: Handshake,
    alignment: 'right' as const
  },
  {
    title: 'Academic & Research Partnerships',
    content: `Research partnerships between Afghan institutions and international universities advance geological knowledge while building domestic research capability. The Afghanistan Geological Research Consortium—comprising Kabul Polytechnic University, Colorado School of Mines, University of British Columbia, and Imperial College London—conducts collaborative research on Afghan mineral systems. Joint PhD programs train Afghan geologists in advanced analytical techniques, with research directly applicable to Afghan mineral development.

Applied research programs address practical challenges facing Afghan mining operations. Metallurgical research optimizes processing for specific Afghan ore types, improving recovery while reducing costs. Environmental research develops rehabilitation techniques suited to Afghan climates and ecosystems. Social research informs community engagement strategies and benefit-sharing mechanisms. Engineering research adapts mining technologies to Afghan conditions—high altitude, extreme temperatures, limited infrastructure.

Knowledge transfer through visiting faculty, remote lecturing, and collaborative publications builds Afghan academic capacity. Laboratory equipment donations and training programs establish analytical capabilities at Afghan universities. These academic partnerships create a virtuous cycle—research advances understanding, understanding attracts investment, investment funds further research—building Afghanistan's reputation as a center of mining excellence.`,
    icon: Users,
    alignment: 'left' as const
  },
];
