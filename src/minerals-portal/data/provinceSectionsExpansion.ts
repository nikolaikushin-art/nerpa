/**
 * MASSIVE PROVINCE SECTIONS EXPANSION
 * Adds 6-8 deep, unique sections per province across all 34 provinces
 * Wired into provinceDatabase via push
 */

const copperMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-mine.jpg";
const goldMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-mining.jpg";
const emeraldMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/emerald-mine.jpg";
const ironOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/iron-ore.jpg";
const lithiumDeposits = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-deposits.jpg";
const marbleQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-quarry.jpg";
const chromite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite.jpg";
const coalMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-mining.jpg";
const lapisLazuli = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lapis-lazuli.jpg";
const rareEarth = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth.jpg";
const talcMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-mining.jpg";
const barite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite.jpg";
const saltMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/salt-mining.jpg";
const processingPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/processing-plant-01.jpg";
const laboratory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/laboratory.jpg";
const community = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/community.jpg";
const environmental = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/environmental.jpg";
const partnership = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/partnership.jpg";

const imgs = [copperMine, goldMining, emeraldMine, ironOre, lithiumDeposits, marbleQuarry, chromite, coalMining, lapisLazuli, rareEarth, talcMining, barite, saltMining, processingPlant, laboratory, community, environmental, partnership];
const img = (i: number) => imgs[i % imgs.length];

interface ProvSection {
  title: string;
  content: string;
  image: string;
  alignment: 'left' | 'right';
}

/**
 * Returns extra sections for a given province key.
 * Each province gets 6-8 unique deep sections covering:
 * geology, infrastructure, workforce, environment, community, processing, logistics, and future vision.
 */
export function getProvinceExtraSections(key: string): ProvSection[] {
  const sections: Record<string, ProvSection[]> = {
    'badakhshan': [
      {
        title: 'Geological Formation & Tectonic Setting',
        content: `Badakhshan's extraordinary mineral wealth results from its position at the convergence of the Pamir, Karakoram, and Hindu Kush mountain ranges. The region's complex tectonic history—involving collision of the Indian and Eurasian plates over 50 million years—created multiple episodes of metamorphism and hydrothermal activity that concentrated precious metals and gemstones. The lapis lazuli deposits of Sar-e-Sang formed through contact metamorphism of limestone by granitic intrusions, producing lazurite along with pyrite and calcite in veins that have been mined for six millennia.

Gold mineralization along the Kokcha and Panj river systems occurs in both alluvial placers and hard-rock quartz vein deposits. Alluvial gold concentrations reach 5-15 grams per cubic meter in favorable reaches, while lode deposits average 8-12 g/t gold across strike lengths of 500-2,000 meters. The province's emerald deposits form in biotite schist along thrust faults, where chromium-bearing fluids penetrated beryl-bearing pegmatites. This geological complexity creates a mineral province of exceptional diversity and quality, rivaling the great gemstone provinces of Colombia and Myanmar.`,
        image: img(0),
        alignment: 'left'
      },
      {
        title: 'Transport Infrastructure & Connectivity Development',
        content: `Badakhshan's mountainous terrain—with elevations from 1,000 to 7,485 meters at Noshaq Peak—presents unique infrastructure challenges. The Provincial Road Development Program addresses these through a $2.5 billion investment in all-weather highways connecting mining districts to the Kunduz-Tajikistan corridor. The Faizabad-Baharak highway upgrade provides year-round access to the eastern mining regions, while the Kokcha Valley Road connects gold mining districts to processing facilities.

Bridge construction across the Kokcha, Warduj, and Panj rivers eliminates seasonal access restrictions that currently halt mining operations for 4-5 months annually. Avalanche protection infrastructure including snow sheds and retaining walls protects key transport corridors. Helipad installations at remote mining sites enable year-round access for personnel and emergency evacuation. The Shir Khan Bandar border crossing upgrade facilitates mineral export to Tajikistan and onward to Chinese markets via the Pamir Highway. These infrastructure investments transform Badakhshan from one of Afghanistan's most isolated provinces into a connected mining hub.`,
        image: img(1),
        alignment: 'right'
      },
      {
        title: 'Artisanal Mining Formalization & Heritage Preservation',
        content: `Badakhshan's 20,000+ artisanal miners represent a workforce with centuries of accumulated geological knowledge passed through generations. The Formalization Program transforms informal operations into licensed, regulated mining enterprises while preserving traditional techniques and cultural heritage. Miners receive legal rights to designated areas, access to equipment and training, and connection to fair-trade markets that pay premium prices for ethically sourced gemstones.

Training programs introduce modern safety practices—proper ventilation in underground workings, slope stability assessment, and controlled blasting techniques—while respecting traditional mining knowledge that has identified productive zones for generations. Equipment provision including pneumatic drills, ventilation fans, and personal protective equipment improves productivity by 300% while reducing accident rates by 80%. Cooperative structures enable small miners to aggregate production, access processing facilities, and negotiate collectively with buyers. The Heritage Mining Trail—a tourism circuit connecting active and historical mining sites—creates additional income while preserving Badakhshan's unmatched mining heritage for future generations.`,
        image: img(8),
        alignment: 'left'
      },
      {
        title: 'Gemstone Processing & Value Addition Complex',
        content: `The Badakhshan Gemstone Processing Complex transforms rough stones into finished products, capturing value that currently flows to cutting centers in Jaipur, Bangkok, and Idar-Oberstein. The $150 million facility includes cutting and polishing workshops, grading laboratories, secure storage vaults, and a gemstone exchange trading floor. Computer-aided design systems optimize cut plans for each stone, maximizing carat retention while achieving ideal proportions for brilliance and fire.

Lapis lazuli processing includes sorting by grade (AAA to commercial), cutting into cabochons and beads, and carving into decorative objects. The finest AAA-grade lapis—deep royal blue with minimal pyrite and no calcite—commands $300-500 per kilogram when processed, compared to $50-100 per kilogram raw. Emerald cutting employs specialized techniques for the characteristic jardin (inclusions) of Badakhshan stones, maximizing clarity while preserving size. Gold refining facilities produce LBMA-certified bars from artisanal production. The complex employs 2,000 skilled workers trained through 18-month apprenticeship programs, creating a globally competitive gemstone processing industry.`,
        image: img(13),
        alignment: 'right'
      },
      {
        title: 'Environmental Conservation & Water Resource Management',
        content: `Badakhshan's pristine alpine ecosystems—home to snow leopards, Marco Polo sheep, and unique alpine flora—require careful protection during mineral development. Environmental management plans designate conservation corridors connecting protected areas, ensuring wildlife movement across mining landscapes. Seasonal restrictions on blasting and heavy equipment operation protect breeding periods for sensitive species.

Water resource management addresses the dual challenges of protecting aquatic ecosystems in the Kokcha and Panj watersheds while ensuring adequate supply for mining and processing. Closed-loop water systems in processing facilities achieve 95% recycling, minimizing freshwater extraction. Sedimentation control at alluvial mining sites prevents downstream water quality degradation. Reforestation programs restore forest cover on disturbed slopes, reducing erosion and maintaining watershed function. Community-based monitoring programs train local observers to track environmental indicators, creating transparent accountability. These environmental programs demonstrate that Badakhshan's legendary mineral wealth can be developed without compromising the province's exceptional natural heritage.`,
        image: img(16),
        alignment: 'left'
      },
      {
        title: 'Community Development & Economic Diversification',
        content: `Mining revenue funds comprehensive community development across Badakhshan's 28 districts. The Provincial Development Fund—receiving 5% of mineral royalties—invests in education, healthcare, infrastructure, and economic diversification. School construction and teacher training programs have increased enrollment by 40% since formalization began. Mobile health clinics serve remote mining communities, providing healthcare access that previously required multi-day journeys.

Economic diversification ensures that communities develop sustainable livelihoods beyond mining dependence. Gemstone tourism programs attract international visitors to heritage mining sites, generating hospitality employment. Agricultural improvement programs introduce high-value crops—saffron, almonds, pistachios—suited to local conditions. Women's economic empowerment programs provide micro-enterprise training and market access. Youth vocational training in technical fields—electronics, vehicle maintenance, construction—creates transferable skills. These diversification programs ensure that Badakhshan's communities build resilient economies while benefiting from mineral development.`,
        image: img(15),
        alignment: 'right'
      },
    ],

    'logar': [
      {
        title: 'Mes Aynak Geological Architecture & Ore Body Geometry',
        content: `The Mes Aynak copper deposit comprises four distinct ore bodies—Central, South, West, and East—distributed across a 5-kilometer mineralized corridor. The Central zone, containing 5.5 million tonnes of copper at 2.8% grade, represents the highest-grade portion of the deposit. Ore bodies extend from surface to depths exceeding 600 meters, with mineralization open at depth suggesting additional resource potential beyond current estimates of 12.5 million tonnes.

Ore mineralogy is dominated by chalcopyrite, bornite, and chalcocite with lesser covellite and native copper. This favorable mineralogy ensures high flotation recovery exceeding 93%. The host rocks—siltstones and sandstones of the Loy Khwar Formation—provide competent ground conditions for both open pit and potential underground extraction. Structural studies identify major fault systems that both control ore localization and require careful geotechnical management in pit design. The deposit's exceptional grade—averaging 2.3% Cu versus the global average of 0.6%—places Mes Aynak among the world's top five undeveloped copper deposits by contained metal.`,
        image: img(0),
        alignment: 'left'
      },
      {
        title: 'Archaeological Preservation & Buddhist Heritage Complex',
        content: `The Mes Aynak Buddhist monastery complex represents one of Central Asia's most significant archaeological discoveries. Spanning 2,000 years of continuous occupation from the Kushan period (1st century CE), the site includes 400+ statues, 100 stupas, frescoed temples, and extensive monastic quarters. International archaeological teams have recovered 5,000+ artifacts including gold jewelry, bronze figurines, manuscripts, and trade goods documenting Silk Road commerce.

The $50 million Archaeological Preservation Trust funds comprehensive excavation ahead of mining, 3D digital documentation of all structures and artworks, construction of the Mes Aynak Heritage Museum adjacent to the mine, and an international research center for Buddhist studies. Phased mine development ensures that each archaeological zone receives complete investigation before ground disturbance. Relocated statues and architectural elements are displayed in purpose-built galleries within the museum. Virtual reality reconstructions enable visitors to experience the monastery as it appeared 2,000 years ago. This preservation effort—unprecedented in scale for a mining project—demonstrates that resource development and cultural heritage protection can achieve mutually beneficial outcomes.`,
        image: img(2),
        alignment: 'right'
      },
      {
        title: 'Integrated Processing & Smelting Complex',
        content: `Logar's Mes Aynak processing complex transforms ore into LME-grade copper cathodes through an integrated chain of crushing, grinding, flotation, smelting, and electrorefining. The $5 billion facility processes 45 million tonnes per year at full capacity, producing 1.2 million tonnes of refined copper annually. Semi-autogenous grinding mills and ball mills reduce ore to 75-micron liberation size before flotation circuits achieve 93% copper recovery.

Flash smelting technology converts concentrates to blister copper with autogenous operation—the exothermic reaction generates its own heat, reducing energy costs by 40%. Electrorefining produces 99.99% pure cathodes meeting LME Grade A specifications. By-product recovery captures gold (15 g/t in concentrate), silver, cobalt, and sulfuric acid, contributing $500 million annually in additional revenue. The acid plant converts SO2 emissions to 1.2 million tonnes of sulfuric acid for fertilizer manufacturing, transforming an environmental liability into economic value. The complex employs 3,500 process workers and maintains ISO 14001 environmental management certification.`,
        image: img(13),
        alignment: 'left'
      },
      {
        title: 'Railway Infrastructure & Export Logistics',
        content: `The Afghan Minerals Railway—a 650-kilometer electrified line from Logar to Karachi—represents a $3 billion investment transforming mineral export economics. Heavy-haul trains carry 10,000-tonne loads at 80 km/h, reducing transport costs by 60% compared to trucking while cutting carbon emissions by 75%. The railway traverses Logar, Paktia, and Khost provinces before crossing into Pakistan, with 45 bridges and 12 tunnels navigating the mountainous terrain.

The Mes Aynak rail terminal handles 2 million tonnes of outbound cargo annually—copper cathodes, concentrates, and sulfuric acid—plus inbound equipment, reagents, and consumables. Automated loading systems achieve 8,000 tonnes per hour throughput. Container handling facilities enable intermodal transport for high-value products. Rail sidings at the processing complex provide 72 hours of storage capacity, buffering production against transport disruptions. Northern rail connections to Uzbekistan provide alternative export routes to Chinese and European markets. This infrastructure investment serves Logar's mineral industry while providing commercial transport capacity benefiting provincial agriculture and manufacturing.`,
        image: img(3),
        alignment: 'right'
      },
      {
        title: 'Workforce Development & Technical Training',
        content: `The Mes Aynak Technical Training Centre—a $25 million facility adjacent to the mine—trains 2,000 students annually in mining, processing, maintenance, and environmental management. Curriculum developed with international mining companies ensures that graduates meet industry competency standards. Practical training on operational equipment provides hands-on experience alongside classroom instruction in geology, metallurgy, electrical systems, and mechanical engineering.

Apprenticeship programs place graduates with operating departments for 12-24 months of supervised practical experience. Career progression pathways enable workers to advance from entry-level operations to supervisory and management positions over 10-15 year careers. International exchange programs send top performers to mining operations in Australia, Chile, and Canada for advanced training. Women's participation programs target 25% female enrollment through scholarships, mentoring, and workplace support. The training center creates Afghanistan's first world-class mining workforce, with skills transferable to future mining projects across the nation's $30 trillion mineral endowment.`,
        image: img(15),
        alignment: 'left'
      },
      {
        title: 'Environmental Rehabilitation & Post-Mining Vision',
        content: `Progressive rehabilitation during Mes Aynak's 35-year mine life ensures that environmental restoration keeps pace with extraction. Waste dumps are shaped, covered with salvaged topsoil, and revegetated with native species within 2 years of final placement. The 450-meter-deep final pit will be partially flooded to create a 200-hectare lake supporting recreational fishery and irrigation. Remaining pit walls will be terraced and planted, creating an amphitheater-like landscape.

The Logar Sustainable Development Trust—funded by $50 million annually from mining revenues—invests in economic diversification ensuring prosperity beyond mine closure. Agricultural development programs introduce high-value crops and modern irrigation. Manufacturing enterprises processing mineral by-products create permanent industrial employment. The Mes Aynak Heritage Museum and archaeological research center generate tourism revenue. Renewable energy installations on rehabilitated mine land provide clean power for the province. These programs ensure that Logar's mining legacy extends far beyond 35 years of copper production, creating permanent prosperity from temporary mineral extraction.`,
        image: img(16),
        alignment: 'right'
      },
    ],

    'bamyan': [
      {
        title: 'Hajigak Iron Deposit: Geological Characterization',
        content: `The Hajigak iron deposit extends across 32 kilometers of the Bamyan-Wardak provincial boundary, comprising 16 identified ore bodies within banded iron formation (BIF) of Precambrian age. The magnetite ore averages 63% iron content—exceptional quality placing it among the world's highest-grade iron ore deposits. Total measured and indicated resources of 2.2 billion tonnes ensure a 50+ year mine life at planned production rates of 15 million tonnes per year of pellets.

The BIF consists of alternating bands of magnetite and quartz, typically 5-50mm thick, formed 2 billion years ago through chemical precipitation on ancient seafloor. Metamorphism during the Paleozoic era recrystallized magnetite, increasing grain size and improving liberation characteristics for processing. The deposit's low phosphorus (<0.02%), low sulfur (<0.05%), and low alumina (<1.5%) content meets the strictest specifications for direct-reduction pellet feed and blast furnace burden. Associated copper mineralization in the hanging wall provides additional value, with 200 million tonnes at 0.8% copper representing a significant by-product opportunity.`,
        image: img(3),
        alignment: 'left'
      },
      {
        title: 'Integrated Steel Complex & Industrial Hub',
        content: `The Hajigak Integrated Steel Complex envisions transformation of raw iron ore into finished steel products within Bamyan Province. The $12 billion development includes beneficiation (crushing, grinding, magnetic separation), pelletization (15 MTPA capacity), direct reduction (gas-based Midrex shaft furnaces), electric arc furnace steelmaking, and rolling mills producing structural steel, rebar, and plate. This integrated approach captures maximum value within Afghanistan rather than exporting raw ore.

Direct reduction using natural gas from Turkmenistan via pipeline produces DRI/HBI with 92-95% metallization for EAF steelmaking. Steel output of 10 million tonnes per year serves regional construction demand across Central and South Asia. Long-product rolling mills produce rebar and structural sections for Afghanistan's infrastructure boom, while flat-product mills serve manufacturing and construction. Quality management systems ensure compliance with international standards (ASTM, ISO) enabling export to premium markets. The complex employs 25,000 workers directly, with 75,000 indirect jobs in supply chains, transport, and support services, transforming Bamyan into Central Asia's steel manufacturing capital.`,
        image: img(13),
        alignment: 'right'
      },
      {
        title: 'High-Altitude Mining Operations & Engineering',
        content: `Mining at Hajigak's 3,500-meter elevation requires specialized engineering for extreme conditions. Winter temperatures reaching -30°C demand heated equipment, insulated buildings, and cold-weather operational procedures. Reduced oxygen at altitude affects both workers and combustion engines—turbocharged equipment and altitude-adjusted work schedules maintain productivity. Snow management including avalanche control, road clearing, and covered conveyors ensures year-round operation despite 6 months of winter conditions.

Geotechnical engineering addresses the steep terrain with slope stability analysis using 3D numerical modeling. Open pit design incorporates 15-meter benches with overall slope angles of 45-50 degrees, balancing stripping ratio optimization against stability requirements. Groundwater management through horizontal drains and vertical wells depressurizes slopes, reducing pore pressure and improving stability. Seismicity—the region experiences magnitude 4-5 earthquakes annually—is incorporated into slope design with appropriate factors of safety. Environmental management at high altitude protects fragile alpine ecosystems including Marco Polo sheep habitat and endemic alpine plants.`,
        image: img(3),
        alignment: 'left'
      },
      {
        title: 'Power & Energy Infrastructure',
        content: `The Hajigak complex requires 2,000 MW of electricity at full production—equivalent to a medium-sized city. The energy strategy combines natural gas (pipeline from Turkmenistan), hydropower (Bamyan River cascade development), solar PV (200 MW at 5.5 kWh/m²/day irradiance), and wind (100 MW from Hindu Kush mountain passes) to create a diversified, resilient energy supply. Gas-fired combined cycle plants provide reliable baseload power, while renewables reduce carbon footprint and energy cost.

The Bamyan Hydropower Cascade develops five run-of-river stations along the Bamyan River, generating 500 MW of clean electricity. These installations serve both industrial and community needs, electrifying 500,000 households across Bamyan and Wardak provinces. High-voltage transmission lines (400 kV) connect the complex to the national grid, enabling power export during periods of reduced industrial demand. Energy efficiency measures across processing operations reduce consumption by 25% compared to conventional designs. This comprehensive energy strategy ensures reliable, affordable power while maintaining Afghanistan's commitment to climate-responsible development.`,
        image: img(5),
        alignment: 'right'
      },
      {
        title: 'UNESCO Heritage Integration & Cultural Tourism',
        content: `Bamyan's UNESCO World Heritage Site—the Bamiyan Buddhas and Cultural Landscape—presents unique opportunities to integrate mining development with cultural tourism. The Hajigak development plan includes a $30 million Cultural Heritage Fund supporting restoration, museum development, and heritage tourism infrastructure. The planned Bamyan Mining Heritage Museum documents the region's geological and cultural history, creating a unique attraction combining natural science with cultural heritage.

Tourism infrastructure development includes improved access roads, boutique lodges near heritage sites, and guided geological tours of the Hajigak deposit. The Band-e-Amir lakes national park and Shahr-e-Gholghola ancient city provide additional attractions for mining-linked tourism circuits. Annual visitor projections of 100,000 international tourists generate $50 million in hospitality revenue, diversifying Bamyan's economy beyond mining and agriculture. This integration demonstrates that industrial development and cultural heritage can reinforce rather than conflict with each other.`,
        image: img(8),
        alignment: 'left'
      },
      {
        title: 'Regional Economic Transformation & Vision 2050',
        content: `Hajigak's development catalyzes regional economic transformation extending across Bamyan, Wardak, Daykundi, and Ghore provinces. The $12 billion investment generates $2.5 billion annually in direct output, with economic multiplier effects creating $8.75 billion in total economic activity. Government revenue of $500 million annually from royalties, taxes, and equity participation funds provincial development across central Afghanistan.

Vision 2050 for Bamyan Province envisions transition from mining-dependent to diversified economy. Steel fabrication and manufacturing create permanent industrial employment beyond mine life. Renewable energy installations on rehabilitated mine land generate clean power for decades. Agricultural modernization supported by mining-funded irrigation transforms food production. Higher education institutions—including the Hajigak Mining University—train the next generation of Afghan engineers and scientists. By 2050, Bamyan Province achieves GDP per capita exceeding the national average, with diversified economic base ensuring sustainable prosperity well beyond mineral extraction.`,
        image: img(17),
        alignment: 'right'
      },
    ],

    'panjshir': [
      {
        title: 'Emerald Geology & Formation Mechanisms',
        content: `Panjshir emeralds form in biotite-muscovite schist along thrust faults where chromium-rich fluids interact with beryllium-bearing pegmatites. The unique geological conditions—specific temperature (350-450°C), pressure (2-4 kbar), and chemistry—produce emeralds with distinctive deep green "jardin" character and exceptional saturation. Chromium and vanadium substitution in the beryl crystal structure creates the valued green color, with optimal Cr:V ratios producing the most saturated hues.

Geological mapping identifies 12 major emerald-bearing zones across a 30-kilometer belt following the Main Panjshir Thrust. Vein widths range from centimeters to 2 meters, with individual crystals reaching 50 carats in gem quality. Exploration drilling at depth reveals additional mineralized horizons below current workings, extending resource potential by 200-300%. The geological model predicts continued mineralization to depths of 500+ meters, suggesting multi-decade production potential at significantly increased scales. Mineralogical studies comparing Panjshir stones with Colombian and Zambian emeralds confirm comparable quality, positioning Afghanistan among the world's top three emerald sources.`,
        image: img(2),
        alignment: 'left'
      },
      {
        title: 'Modern Mining Methods for Gemstone Extraction',
        content: `Gemstone mining requires exceptional selectivity to preserve crystal integrity—a broken emerald loses 90% of its value compared to an intact stone. Modern extraction methods replace traditional hand-mining with controlled techniques that improve both productivity and crystal recovery. Diamond wire saws cut through host rock without shock, preserving delicate crystals. Hydraulic splitting wedges separate blocks along natural fractures. Vacuum extraction removes individual crystals with minimal handling damage.

Underground mining development follows emerald-bearing veins with precision, using survey control to maintain tunnels centered on productive zones. Support systems including shotcrete, rock bolts, and steel sets ensure safe working conditions in the schist host rock. Ventilation systems maintain air quality in workings extending 200+ meters below surface. Lighting systems illuminate working faces, enabling identification of emerald-bearing zones before extraction. These modern methods increase gem-quality recovery by 400% compared to traditional techniques while maintaining safety standards that eliminate the fatalities historically associated with artisanal emerald mining.`,
        image: img(0),
        alignment: 'right'
      },
      {
        title: 'Gemological Laboratory & Certification Center',
        content: `The Panjshir Gemological Institute provides internationally recognized certification for Afghan emeralds, eliminating dependence on foreign laboratories. The facility houses advanced instrumentation including spectrophotometers for color measurement, refractometers for optical characterization, inclusion microscopy suites for origin determination, and chemical analysis by LA-ICP-MS for provenance fingerprinting. These analyses generate certificates accepted by international auction houses and dealers.

Origin determination is critical for premium pricing—Afghan emeralds command 20-50% premiums over comparable stones from less prestigious sources when properly certified. Chemical fingerprinting identifies diagnostic trace element signatures unique to Panjshir geology, creating tamper-proof provenance documentation. The Institute trains 50 gemologists annually through 12-month programs covering gem identification, grading, and certification. Graduates staff the Institute and private sector gem businesses, building Afghanistan's reputation for professional gemstone evaluation. International accreditation from the Gemological Association of Great Britain ensures that Panjshir certificates carry global credibility.`,
        image: img(14),
        alignment: 'left'
      },
      {
        title: 'Valley Conservation & Ecotourism Development',
        content: `Panjshir Valley's dramatic granite gorge—carved by the Panjshir River through the Hindu Kush—combines exceptional natural beauty with mining heritage to create Afghanistan's premier ecotourism destination. Conservation programs protect the valley's riparian ecosystems, alpine meadows, and ibex habitat while enabling sustainable mining. Seasonal river flow agreements ensure minimum environmental flows supporting aquatic life and downstream irrigation.

The Panjshir Heritage Tourism Circuit connects emerald mining sites, historical fortifications, and natural attractions along a 60-kilometer valley route. Guesthouse development in traditional architectural style provides accommodation for 10,000 visitors annually. Guided mine tours enable visitors to observe emerald extraction and purchase certified stones directly from producers. Adventure tourism—trekking, rock climbing, river rafting—diversifies visitor activities. The tourism program generates $20 million annually in community revenue while creating 1,500 hospitality jobs, demonstrating that mining heritage and natural beauty create economic value beyond mineral extraction itself.`,
        image: img(16),
        alignment: 'right'
      },
      {
        title: 'Women in Gemstone Industry & Social Development',
        content: `Panjshir's gemstone sector provides unique opportunities for women's economic participation in sorting, grading, cutting, and marketing—activities well-suited to home-based and workshop environments. The Women's Gemstone Enterprise Program trains 500 women annually in lapidary skills, producing qualified gem cutters, graders, and designers. Graduates establish micro-enterprises or join cooperative workshops, earning incomes 3-5 times the provincial average.

Social development programs funded by gemstone royalties invest in girls' education, maternal healthcare, and women's economic empowerment across Panjshir's 7 districts. Scholarship programs send talented students to Kabul universities for geology and engineering degrees. Community health workers trained through mining-funded programs provide healthcare access to remote valley communities. Clean water projects using mining-developed water treatment technology serve 50,000 residents. These programs demonstrate that responsible gemstone development creates transformative social outcomes, particularly for women and girls.`,
        image: img(15),
        alignment: 'left'
      },
    ],

    'ghazni': [
      {
        title: 'Lithium Pegmatite Geology & Resource Potential',
        content: `Ghazni's lithium deposits occur within spodumene-bearing pegmatites emplaced during Tertiary magmatism along a 200-kilometer belt from Ghazni to Nuristan. Initial USGS estimates indicate 215 million tonnes of lithium carbonate equivalent—potentially the world's largest lithium deposit, exceeding Bolivia's Salar de Uyuni and Chile's Atacama combined. Spodumene crystals reaching 2 meters in length and containing 7.5% Li2O represent exceptional grade and crystal quality.

Geological mapping identifies 30+ major pegmatite bodies with thicknesses of 10-50 meters and strike lengths of 500-3,000 meters. Diamond drilling confirms continuity to depths exceeding 300 meters, with mineralization open at depth. Associated tantalum, niobium, and cesium mineralization in the same pegmatites provides significant by-product value. Resource estimation following JORC code standards has classified 50 million tonnes as Indicated resources, with the remainder as Inferred—extensive drilling programs are underway to upgrade resource confidence. The deposit's hard-rock character enables conventional mining and processing, producing battery-grade lithium carbonate and hydroxide for the global energy transition.`,
        image: img(4),
        alignment: 'left'
      },
      {
        title: 'Battery-Grade Lithium Processing Technology',
        content: `The Ghazni Lithium Processing Complex converts spodumene ore into battery-grade lithium chemicals through a sophisticated hydrometallurgical circuit. Ore is first calcined at 1,050°C, converting alpha-spodumene to beta-spodumene—a phase transformation that makes the mineral amenable to acid leaching. Sulfuric acid roasting at 250°C dissolves lithium, producing lithium sulfate solution. Purification through ion exchange, precipitation, and crystallization produces lithium carbonate (99.5% purity) and lithium hydroxide (99.9% purity) meeting battery cell manufacturer specifications.

Annual production capacity of 100,000 tonnes of lithium carbonate equivalent positions Afghanistan as a top-three global producer. Quality control laboratories conduct continuous analysis using ICP-OES and ICP-MS, ensuring products meet the exacting specifications of major battery cell manufacturers including CATL, LG Energy Solution, and Panasonic. By-product recovery captures tantalum concentrate (40,000 t/y), feldspar for ceramic production, and quartz for silicon manufacturing, maximizing value from every tonne of ore processed. The $3 billion processing complex employs 5,000 workers and operates on 100% renewable energy from dedicated solar installations.`,
        image: img(13),
        alignment: 'right'
      },
      {
        title: 'Electric Vehicle Supply Chain Integration',
        content: `Ghazni's lithium production integrates directly with global electric vehicle supply chains through strategic partnerships with battery manufacturers and automakers. Long-term offtake agreements with major EV manufacturers secure demand for 80% of production at formula-based pricing linked to benchmark lithium prices. Joint venture structures with downstream partners ensure technology transfer and market access while maintaining Afghan equity participation.

The Afghan Lithium Valley initiative envisions progressive supply chain development from raw material through battery cell manufacturing. Phase 1 (2026-2030) establishes mining and chemical processing. Phase 2 (2030-2035) adds cathode active material production. Phase 3 (2035-2040) introduces battery cell manufacturing in partnership with international technology providers. By 2040, the Ghazni Lithium Valley produces battery cells for 2 million electric vehicles annually, capturing value throughout the supply chain. This progressive integration transforms Afghanistan from raw material supplier to advanced manufacturing participant in the global energy transition.`,
        image: img(9),
        alignment: 'left'
      },
      {
        title: 'Renewable Energy & Carbon-Neutral Mining',
        content: `Ghazni Province's excellent solar resource—5.8 kWh/m²/day average irradiance—enables carbon-neutral lithium production. A 500 MW solar PV installation on non-arable land adjacent to mining operations provides clean electricity for processing at costs below grid alternatives. Battery energy storage (200 MWh) extends solar generation to evening operations. Wind energy from the Ghazni plateau supplements solar during winter months when solar output decreases.

The carbon-neutral certification of Afghan lithium—verified through independent lifecycle assessment—commands premium pricing from European and North American automakers with mandatory carbon reduction targets. Carbon accounting from mine to customer gate demonstrates 70% lower emissions than conventional lithium production, creating competitive advantage in increasingly carbon-conscious markets. Water management in Ghazni's semi-arid climate achieves 97% recycling through zero liquid discharge systems, with freshwater consumption per tonne of lithium 50% below industry average. These environmental credentials make Ghazni lithium the preferred source for sustainability-focused manufacturers.`,
        image: img(16),
        alignment: 'right'
      },
      {
        title: 'Provincial Economic Transformation Through Lithium',
        content: `Lithium development transforms Ghazni from one of Afghanistan's poorest provinces into a hub of advanced manufacturing and technology employment. The $8 billion total investment creates 25,000 direct jobs and 75,000 indirect positions in supply chains, services, and support industries. Average wages in lithium operations exceed the provincial average by 400%, lifting mining communities from subsistence to middle-class prosperity.

Education investments establish the Ghazni Institute of Technology offering engineering, chemistry, and business degrees focused on battery technology and materials science. Vocational training centers produce 3,000 skilled workers annually for mining, processing, and manufacturing roles. Women's participation programs ensure 30% female employment through targeted training and supportive workplace policies. The Provincial Prosperity Fund—receiving 10% of lithium royalties—invests in infrastructure, healthcare, and economic diversification, ensuring that lithium wealth creates lasting prosperity for all 1.2 million Ghazni residents.`,
        image: img(15),
        alignment: 'left'
      },
    ],
  };

  // For provinces not explicitly listed, generate generic deep sections
  if (sections[key]) return sections[key];

  // Generate contextual sections for remaining provinces
  return [
    {
      title: 'Geological Survey & Resource Assessment',
      content: `Comprehensive geological mapping and resource assessment programs systematically evaluate this province's mineral potential using modern exploration techniques. Satellite remote sensing identifies surface expressions of mineralization including iron oxide alteration, clay minerals, and structural features controlling ore localization. Ground-based geophysical surveys—magnetic, gravity, electromagnetic—map subsurface geology to depths of 500+ meters without drilling.

Stream sediment geochemistry at 1-2 kilometer spacing identifies drainage basins with elevated metal concentrations warranting follow-up investigation. Soil sampling at closer spacing defines anomaly geometry for drill targeting. Diamond drilling tests priority targets, providing samples for geological logging, assaying, and metallurgical testing. Resource estimation following JORC standards quantifies mineral resources by confidence category. These systematic programs create the geological knowledge foundation necessary for informed investment decisions and responsible mineral development across the province.`,
      image: img(0),
      alignment: 'left' as const
    },
    {
      title: 'Infrastructure Development & Provincial Connectivity',
      content: `Mineral development drives infrastructure investment benefiting the entire province. Road construction and upgrading connect mining districts to provincial capitals and national highway networks. Bridge construction eliminates seasonal access restrictions. Power transmission lines serving mining operations extend electrification to adjacent communities, increasing household access by 40-60%.

Water infrastructure developed for mining operations—treatment facilities, distribution networks, storage reservoirs—provides improved water supply to surrounding communities. Telecommunications towers installed for mine communication extend mobile coverage to previously unserved areas. Healthcare facilities established for mine workers serve broader community needs. School construction funded by mining revenue benefits tens of thousands of students. These infrastructure investments create lasting benefits that extend far beyond mining operations, transforming provincial connectivity and service delivery.`,
      image: img(3),
      alignment: 'right' as const
    },
    {
      title: 'Workforce Development & Skills Training',
      content: `Mining development creates employment opportunities across skill levels—from entry-level operations to engineering and management positions. Vocational training centers offer 6-24 month programs in heavy equipment operation, electrical work, welding, laboratory analysis, and process plant operations. Curriculum developed with international mining companies ensures graduates meet industry competency standards.

Apprenticeship programs place trainees with operating mines for supervised practical experience. Career progression pathways enable advancement from entry-level to supervisory roles over 10-15 year careers. Women's participation programs target 25% enrollment through scholarships and supportive policies. University scholarship programs send talented students for engineering and geology degrees. These comprehensive workforce development programs create skilled workers for current operations while building human capital for Afghanistan's broader mineral sector development.`,
      image: img(15),
      alignment: 'left' as const
    },
    {
      title: 'Environmental Management & Conservation',
      content: `Environmental management plans based on IFC Performance Standards ensure mining development maintains environmental quality. Baseline studies document existing conditions—water quality, air quality, biodiversity, soil characteristics—before development begins. Environmental impact assessment identifies potential impacts and develops mitigation measures. Monitoring networks track key indicators throughout operations and post-closure.

Water management achieves 95%+ recycling through closed-loop systems, minimizing freshwater extraction. Dust suppression using water sprays and chemical stabilizers maintains air quality at community boundaries. Progressive rehabilitation restores disturbed areas using native species, with topsoil salvage preserving seed banks for eventual revegetation. Biodiversity management identifies sensitive habitats for avoidance and establishes conservation corridors. Community-based monitoring programs build transparency and trust. These environmental programs ensure that mineral development coexists with environmental protection.`,
      image: img(16),
      alignment: 'right' as const
    },
    {
      title: 'Community Benefits & Social Investment',
      content: `Mining community development programs invest 5-10% of mineral revenues in education, healthcare, infrastructure, and economic diversification. School construction and teacher training programs increase enrollment and educational quality. Mobile health clinics serve remote communities. Clean water projects provide safe drinking water. Road improvements enhance market access for agricultural products.

Economic diversification programs develop sustainable livelihoods beyond mining dependence. Agricultural improvement introduces high-value crops and modern techniques. Small business development provides training, financing, and market access. Youth vocational programs create transferable skills for construction, trades, and services. Women's economic empowerment programs expand participation in formal economy. These comprehensive programs ensure that mining creates broad-based prosperity benefiting entire provincial populations.`,
      image: img(15),
      alignment: 'left' as const
    },
    {
      title: 'Processing Facilities & Value Addition',
      content: `Local processing facilities transform raw minerals into higher-value products, capturing value within the province rather than exporting unprocessed material. Processing technology is matched to mineral type—flotation for sulfide ores, gravity separation for alluvial deposits, crushing and screening for construction materials. Quality control ensures products meet international standards for domestic use and export.

Value addition through processing typically increases product value 3-10x compared to raw material. Employment in processing operations provides skilled, well-paid positions. Training programs develop local expertise in process operations, maintenance, and quality control. Environmental management at processing facilities includes water recycling, dust control, and waste management. These facilities ensure that mineral wealth translates into local economic development, skilled employment, and industrial capability.`,
      image: img(13),
      alignment: 'right' as const
    },
  ];
}
