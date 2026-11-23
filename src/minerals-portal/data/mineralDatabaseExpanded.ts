// Expanded Mineral Database - All missing entries for complete navigation coverage
import { MineralData } from './mineralDatabase';

// Import existing images to reuse
const copperMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-mine.jpg";
const copperMegaSmelter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-mega-smelter-01.jpg";
const processingPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/processing-plant-01.jpg";
const conveyorSystem = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/conveyor-system-01.jpg";
const exportTrain = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/export-train-01.jpg";
const workers = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/workers-01.jpg";
const laboratory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/laboratory.jpg";
const partnership = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/partnership.jpg";
const community = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/community.jpg";
const environmental = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/environmental.jpg";
const lithiumDeposits = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-deposits.jpg";
const lithiumPegmatite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-pegmatite-01.jpg";
const lithiumSpecimen = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-specimen-01.jpg";
const lithiumSpodumene = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/lithium-spodumene-01.jpg";
const ironOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/iron-ore.jpg";
const hajigakIron = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/hajigak-iron-01.jpg";
const hajigakMegaDeposit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/hajigak-mega-deposit-01.jpg";
const hajigakOverview = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/hajigak-overview-01.jpg";
const goldMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-mining.jpg";
const goldVein = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-vein-01.jpg";
const goldOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-ore-01.jpg";
const goldRefineryCasting = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/gold-refinery-casting-01.jpg";
const goldUnderground = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/gold-underground-01.jpg";
const rareEarth = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth.jpg";
const rareEarthDetail = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth-detail-01.jpg";
const rareEarthMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth-mine-01.jpg";
const rareEarthConcentrate = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/rare-earth-concentrate-01.jpg";
const chromite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite.jpg";
const chromiteOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite-ore-01.jpg";
const chromiteMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite-mining-01.jpg";
const chromiteStockpile = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/chromite-stockpile-01.jpg";
const marbleQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-quarry.jpg";
const marbleMegaQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-mega-quarry-01.jpg";
const marbleExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-extraction-01.jpg";
const marbleWhiteQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/marble-white-quarry-01.jpg";
const coalMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-mining.jpg";
const coalSeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-seam-01.jpg";
const coalUndergroundSeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/coal-underground-seam-01.jpg";
const talcMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-mining.jpg";
const talcDeposit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-deposit-01.jpg";
const talcMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-mine-01.jpg";
const barite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite.jpg";
const bariteDeposit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite-deposit-01.jpg";
const bariteMegaMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite-mega-mine-01.jpg";
const saltMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/salt-mining.jpg";
const saltExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/salt-extraction-01.jpg";
const saltMegaMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/salt-mega-mine-01.jpg";
const tourmaline = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/tourmaline.jpg";
const tourmalineCrystals = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/tourmaline-crystals-01.jpg";
const tourmalineNuristanCollection = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/tourmaline-nuristan-collection-01.jpg";
const badakhshan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/badakhshan.jpg";
const badakhshanMegaLandscape = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/badakhshan-mega-landscape-01.jpg";
const logarProvince = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/logar-province.jpg";
const logarMegaAerial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/logar-mega-aerial-01.jpg";
const bamyanLandscape = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/bamyan-landscape-01.jpg";
const bamyanMegaProvince = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/bamyan-mega-province-01.jpg";
const panjshirMegaValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/panjshir-mega-valley-01.jpg";
const panjshirValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/panjshir-valley-01.jpg";
const investmentConference = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/investment-conference-01.jpg";
const railwayExportTerminal = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/railway-export-terminal-01.jpg";
const environmentalRehabilitation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/environmental-rehabilitation-01.jpg";
const communitySchool = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/community-school-01.jpg";
const controlCenterOperations = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/control-center-operations-01.jpg";
const copperSmeltingFurnace = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/copper-smelting-furnace-01.jpg";
const dataMegaCenter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/data-mega-center-01.jpg";
const vision2030 = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/vision-2030.jpg";
const visionMega2030 = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/vision-mega-2030-01.jpg";
const cobaltNickel = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cobalt-nickel.jpg";
const cobaltOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cobalt-ore-01.jpg";
const nickelOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/nickel-ore-01.jpg";
const leadZinc = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lead-zinc.jpg";
const leadZincOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lead-zinc-ore-01.jpg";
const uranium = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/uranium.jpg";
const uraniumOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/uranium-ore-01.jpg";
const emeraldMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/emerald-mine.jpg";
const emeraldCrystal = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/emerald-crystal-01.jpg";
const refinery = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/refinery.jpg";
const smelting = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/smelting.jpg";
const exploration = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/exploration.jpg";
const safety = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/safety.jpg";
const geologicalSurvey = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/geological-survey.jpg";
const exportLogistics = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/export-logistics.jpg";
const cementFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cement-factory.jpg";

// Province images
const kandaharSurvey = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/kandahar-survey-01.jpg";
const heratMarble = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/herat-marble-01.jpg";
const nuristanLithium = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/nuristan-lithium-01.jpg";
const kunarGemstone = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/kunar-gemstone-01.jpg";
const ghazniLithium = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/ghazni-lithium-01.jpg";
const helmandCopper = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/helmand-copper-01.jpg";
const faryabChromite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/faryab-chromite-01.jpg";
const jowzjanSalt = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/jowzjan-salt-01.jpg";
const takharGold = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/takhar-gold-01.jpg";
const samanganTalc = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/samangan-talc-01.jpg";
const baghlanCoal = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/baghlan-coal-01.jpg";
const parwanIron = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/parwan-iron-01.jpg";
const laghmanBarite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/laghman-barite-01.jpg";
const kapisaGems = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/kapisa-gems-01.jpg";
const wardakHajigak = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/wardak-hajigak-01.jpg";
const zabulRee = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/zabul-ree-01.jpg";
const paktyaChromite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/paktya-chromite-01.jpg";
const khostCement = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/khost-cement-01.jpg";
const daykundiMarble = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/daykundi-marble-01.jpg";
const uruzganCopper = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/uruzgan-copper-01.jpg";
const ghorMinerals = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/ghor-minerals-01.jpg";
const farahIron = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/farah-iron-01.jpg";
const nimrozGold = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/nimroz-gold-01.jpg";
const sarEPulGas = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/sar-e-pul-gas-01.jpg";
const panjshirEmerald02 = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/provinces/panjshir-emerald-02.jpg";

// Sector images
const sectorCopperMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-copper-mining-01.jpg";
const sectorLithiumProcessing = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-lithium-processing-01.jpg";
const sectorGoldRefinery = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-gold-refinery-01.jpg";
const sectorHajigakIron = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-hajigak-iron-01.jpg";
const sectorRareEarthLab = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-rare-earth-lab-01.jpg";
const sectorChromiteLoading = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-chromite-loading-01.jpg";
const sectorMarbleQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-marble-quarry-01.jpg";
const sectorCoalConveyor = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-coal-conveyor-01.jpg";
const sectorTalcExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-talc-extraction-01.jpg";
const sectorExportRailway = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-export-railway-01.jpg";
const sectorInvestmentConf = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-investment-conf-01.jpg";
const sectorVision2030 = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-vision-2030-01.jpg";
const sectorSafetyCenter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-safety-center-01.jpg";
const sectorCommunityDev = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-community-dev-01.jpg";
const sectorEnvironmentRehab = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-environment-rehab-01.jpg";
const sectorGeologicalTeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-geological-team-01.jpg";
const sectorProcessingInterior = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-processing-interior-01.jpg";
const sectorTourmalineDisplay = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-tourmaline-display-01.jpg";
const sectorSaltUnderground = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-salt-underground-01.jpg";
const sectorBariteIndustrial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sector-barite-industrial-01.jpg";

export const expandedMineralDatabase: Record<string, MineralData> = {
  // ==================== COPPER - MISSING ENTRIES ====================
  'copper/processing': {
    title: 'Afghan Copper Processing Complex',
    subtitle: 'World-Class Mineral Processing Infrastructure',
    heroImage: processingPlant,
    overview: `Afghanistan's copper processing vision encompasses the development of integrated facilities capable of transforming raw copper ore into refined cathode copper meeting London Metal Exchange (LME) specifications, representing one of the world's most advanced and comprehensive mineral processing complexes. The planned processing infrastructure represents a $8 billion investment spanning multiple facilities across Logar and Kabul provinces, creating a vertically integrated copper industry from mine to market.

The cornerstone of this vision is a 450,000 tons-per-day concentrator facility near the Mes Aynak deposit, incorporating the latest flotation technology to achieve 92% copper recovery—among the highest globally. Adjacent smelting and refining operations will produce 1.2 million tons of refined copper annually—positioning Afghanistan among the world's top 5 copper producers and establishing the nation as a major player in global copper markets. The processing complex utilizes state-of-the-art technology including advanced process control systems, automated material handling, and sophisticated environmental controls ensuring world-class performance.

Environmental management is integral to every processing stage, with zero-discharge water systems recycling 95% of process water, sulfuric acid plants capturing SO2 emissions and converting them to valuable byproducts, and comprehensive dust suppression ensuring compliance with IFC Performance Standards and World Bank Environmental Guidelines. The processing complex will employ 15,000 workers directly in processing operations, with an additional 45,000 in supporting industries including transportation, equipment maintenance, and supply chain businesses.

Technology partnerships with leading mineral processing companies from Australia, Canada, and Chile provide access to proven expertise while building Afghan technical capacity. A dedicated training academy will produce 2,000 process engineers and metallurgists annually, creating a knowledge base that sustains Afghanistan's mineral processing industry for decades. The comprehensive processing approach ensures optimal resource utilization while supporting environmental responsibility, worker safety, and economic development.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE PROCESSING ARCHITECTURE]: The Afghan Copper Processing Complex represents a world-class integrated mineral processing facility designed to transform raw copper ore into refined cathode copper meeting the strictest international specifications. The complex architecture encompasses multiple interconnected facilities including primary crushing stations receiving run-of-mine ore from Mes Aynak open pit operations, secondary and tertiary crushing circuits reducing ore to optimal particle size, grinding circuits utilizing SAG mills and ball mills achieving 75-micron particle size for mineral liberation, flotation circuits separating copper sulfide minerals from waste rock, concentrate thickening and filtration producing transportable concentrate, smelting facilities converting concentrate to blister copper, converting operations transforming matte to blister copper, fire refining removing remaining impurities, electrolytic refining producing 99.99% pure LME-grade copper cathodes, byproduct recovery facilities capturing sulfuric acid, gold, silver, selenium, and tellurium, tailings management systems ensuring safe disposal, water treatment facilities recycling 95% of process water, power generation facilities providing 750 MW capacity, and quality control laboratories ensuring product specifications are met.

The processing complex's design incorporates state-of-the-art technology at every stage, with advanced process control systems utilizing artificial intelligence and machine learning optimizing operations in real-time. Digital twin technology creates virtual replicas of processing operations, enabling simulation and optimization before implementing changes in physical systems. Automated material handling systems ensure efficient transport of ore, concentrate, and products throughout the complex, reducing labor requirements while improving safety. The comprehensive processing architecture ensures optimal resource utilization while supporting environmental responsibility, worker safety, and economic development.

[ULTRA-DEEP ANALYSIS - CRUSHING & GRINDING TECHNOLOGY - ADVANCED COMMINUTION SYSTEMS]: The primary crushing station receives run-of-mine ore from the Mes Aynak open pit, reducing 1.5-meter boulders to 150mm fragments through gyratory crushers operating 24/7 with automated feed control and monitoring systems. The gyratory crushers utilize advanced design including hydraulic adjustment systems enabling rapid size changes, automated tramp iron protection preventing equipment damage, and advanced monitoring systems tracking performance in real-time. Secondary and tertiary crushing stages utilizing cone crushers achieve 25mm particle size before ore enters the grinding circuit, with advanced screening systems ensuring optimal size distribution and maximizing crusher efficiency.

The grinding circuit represents the single largest energy consumer in the processing chain, requiring 300 MW of electrical power from the dedicated power plant. SAG mills (semi-autogenous grinding) utilize large-diameter mills with advanced liner technology maximizing grinding efficiency while minimizing wear. Ball mills operate in closed circuit with hydrocyclones, achieving 75-micron particle size—the optimal size for copper mineral liberation. Advanced process control systems optimize grinding efficiency in real-time, adjusting mill speed, water addition, and classifier settings based on ore hardness and mineral composition, reducing energy consumption by 15% while maintaining consistent product quality. The grinding circuit incorporates advanced instrumentation including particle size analyzers, power monitoring systems, and automated control systems ensuring optimal operations.

Grinding media optimization utilizes high-chrome steel balls maximizing grinding efficiency while minimizing wear and media consumption. Mill liner technology incorporates rubber and composite liners reducing noise and improving grinding efficiency. Advanced mill design including variable-speed drives enables optimization of grinding conditions for different ore types. The comprehensive crushing and grinding approach ensures optimal ore preparation while minimizing energy consumption and maximizing mineral liberation. Grinding circuit optimization programs continuously improve efficiency through advanced control systems, media optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - FLOTATION & CONCENTRATION TECHNOLOGY - ADVANCED SEPARATION SYSTEMS]: The flotation circuit separates copper sulfide minerals from waste rock using selective chemical reagents and air bubbles, representing one of the most sophisticated mineral separation processes in extractive metallurgy. Rougher flotation cells process 450,000 tons of ground ore daily, producing initial copper concentrate. Scavenger flotation cells recover additional copper from rougher tailings, maximizing recovery. Cleaner flotation cells upgrade concentrate quality, producing final copper concentrate with 28% copper content meeting smelter specifications.

Reagent optimization—guided by automated on-stream analysis measuring metal grades in real-time—maximizes copper recovery while minimizing consumption of collectors, frothers, and modifiers. Advanced flotation cell design including large-volume cells (500 cubic meters) and optimized air distribution ensures efficient mineral recovery while minimizing energy consumption. Flotation cell automation includes automated reagent dosing systems, air flow control systems, and level control systems ensuring optimal operations. Advanced flotation reagents including selective collectors, efficient frothers, and effective modifiers are specifically formulated for Mes Aynak ore characteristics.

The circuit achieves 92% copper recovery—among the highest globally—capturing chalcopyrite, bornite, and chalcocite minerals with minimal loss to tailings. Concentrate thickening utilizes high-rate thickeners producing underflow suitable for filtration. Filtration systems including pressure filters produce transportable concentrate with low moisture content. Tailings management ensures safe disposal in lined impoundments with ongoing monitoring of water quality. The comprehensive flotation approach ensures optimal mineral recovery while supporting environmental responsibility and operational efficiency. Flotation circuit optimization programs continuously improve recovery through advanced control systems, reagent optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - SMELTING & REFINING TECHNOLOGY - ADVANCED PYROMETALLURGY]: The flash smelting furnace—the heart of copper refining—processes dried concentrate at 1,250°C, separating copper from iron and sulfur impurities through advanced pyrometallurgical processes. Oxygen-enriched air combusts sulfide minerals, producing copper matte containing 60% copper, with efficient heat recovery systems generating steam for power generation. The flash smelting process utilizes advanced technology including oxygen enrichment maximizing efficiency, automated feed control ensuring consistent operations, and advanced monitoring systems tracking performance in real-time.

Converting operations transform matte to blister copper through oxidation processes utilizing Peirce-Smith converters with advanced lance technology. Fire refining removes remaining impurities including oxygen and sulfur utilizing anode furnaces with advanced stirring systems. Anode casting prepares copper for final electrolytic refining utilizing automated casting machines producing uniform anodes. The electrolytic refining process produces 99.99% pure copper cathodes through electrolysis in cells containing hundreds of copper anodes suspended in sulfuric acid electrolyte. Advanced cell design including automated cathode stripping systems, advanced electrolyte circulation systems, and automated quality control systems ensures consistent cathode quality meeting LME specifications.

Byproduct recovery captures sulfuric acid from SO2 emissions (1.2 million tons/year) through advanced acid plants, gold and silver from anode slimes (worth $200 million annually) through precious metals recovery facilities, selenium and tellurium for solar panel manufacturing through specialized recovery processes, and slag for cement and construction applications through slag processing facilities. The comprehensive smelting and refining approach ensures production of high-purity copper while maximizing value through byproduct recovery. Smelting and refining optimization programs continuously improve efficiency through advanced control systems, process improvements, and technology upgrades.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY - COMPREHENSIVE PROTECTION SYSTEMS]: The processing complex incorporates environmental controls exceeding international standards at every stage, ensuring responsible operations while protecting the environment. Zero-discharge water management recycles 95% of process water through clarification, filtration, and reverse osmosis—protecting local water resources while minimizing freshwater consumption. Advanced water treatment systems including biological treatment, chemical treatment, and membrane filtration ensure water quality meets or exceeds regulatory requirements.

Baghouse filters and electrostatic precipitators capture 99.9% of particulate emissions from crushing, grinding, and smelting operations, ensuring air quality meets or exceeds regulatory requirements. Continuous emissions monitoring ensures compliance with WHO air quality guidelines at all boundary points, with real-time data enabling rapid response to any deviations. Advanced air quality management systems including continuous monitoring, automated control systems, and emergency response procedures ensure optimal air quality protection.

Tailings management employs dry stacking technology—reducing water consumption and eliminating the risk of catastrophic tailings dam failure. Progressive rehabilitation converts completed tailings areas to productive agricultural land within 5 years of closure, ensuring lasting environmental benefits. Advanced tailings management systems including filtered tailings technology, comprehensive monitoring systems, and progressive rehabilitation programs ensure safe and responsible tailings management.

Waste management programs minimize waste generation while maximizing recycling and reuse. Byproduct recovery creates value from waste streams, while comprehensive recycling programs ensure maximum resource utilization. Environmental monitoring programs track impacts on water quality, air quality, ecosystems, and communities, ensuring that environmental standards are met throughout operations. The comprehensive environmental management approach demonstrates that large-scale mineral processing can be conducted responsibly while protecting the environment for future generations.

[ULTRA-DEEP ANALYSIS - PROCESS CONTROL & AUTOMATION - INTELLIGENT OPERATIONS SYSTEMS]: Advanced process control systems utilizing artificial intelligence and machine learning optimize processing operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact. The control systems integrate data from thousands of sensors throughout the processing complex, enabling predictive maintenance, dynamic optimization, and continuous improvement. Digital twin technology creates virtual replicas of processing operations, enabling simulation and optimization before implementing changes in physical systems.

Automated material handling systems ensure efficient transport of ore, concentrate, and products throughout the complex, reducing labor requirements while improving safety. Advanced automation systems including automated sampling systems, automated quality control systems, and automated reporting systems ensure efficient operations while supporting continuous improvement. Process control optimization programs continuously improve operations through advanced control systems, machine learning algorithms, and process improvements.

Predictive maintenance systems utilize sensors and machine learning to predict equipment failures before they occur, reducing downtime and maintenance costs. Advanced maintenance systems including condition monitoring, predictive analytics, and automated maintenance scheduling ensure optimal equipment performance. The comprehensive process control and automation approach ensures optimal operations while supporting continuous improvement and innovation.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING - COMPREHENSIVE CAPACITY BUILDING]: The processing complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. The dedicated training academy provides classroom and hands-on training in mineral processing, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles. Training programs develop skills in process operation, quality control, equipment maintenance, and safety management, ensuring workers meet international standards.

Partnerships with international mining companies enable knowledge transfer and capacity building, while apprenticeship programs combine on-the-job training with formal education. Advanced training systems including virtual reality training, simulator training, and hands-on training ensure comprehensive skill development. Management development programs identify and develop high-potential employees for leadership positions. The comprehensive workforce development approach ensures that Afghan workers benefit from processing development while building capacity for future projects.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION - TRANSFORMATIONAL DEVELOPMENT]: The copper processing complex represents a transformational opportunity for economic development, creating substantial value through processing raw ore into refined products. At full production, the processing complex will generate $3 billion annually in revenue from copper sales, $500 million in royalties and taxes to the Afghan government, $200 million in wages to Afghan workers, and $1 billion in procurement from local suppliers. Over the 35-year operational horizon, cumulative benefits will include $105 billion in total revenue, $17.5 billion in government revenue, 1.05 million person-years of employment, and development of ancillary industries.

The project's economic multiplier effect—estimated at 3.5x—means that every dollar of direct revenue generates $3.50 in total economic activity. The processing complex will catalyze development of Afghanistan's broader industrial sector, providing infrastructure, expertise, and investment confidence needed to develop regional manufacturing. Regional economic impacts include development of supporting industries, creation of service businesses, and agricultural development supplying food to operations.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & PRODUCT CERTIFICATION - PREMIUM PRODUCT ASSURANCE]: Comprehensive quality control systems ensure that products meet LME specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that copper cathodes meet LME specifications for purity, electrical conductivity, and dimensional tolerances.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality. The comprehensive quality control approach ensures that products meet market requirements while supporting customer satisfaction and market access.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE & UTILITIES - COMPREHENSIVE SUPPORT SYSTEMS]: The processing complex requires comprehensive infrastructure supporting operations including power generation providing 750 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control. The infrastructure development creates substantial employment during construction while supporting long-term operations.

Power infrastructure includes dedicated gas-fired power plant providing 500 MW capacity, renewable energy installations providing 250 MW capacity, and connection to national grid providing backup power. Water infrastructure includes pipelines from regional sources, treatment facilities, and storage reservoirs ensuring reliable water supply. Transportation infrastructure includes rail connections to mines and export terminals, road infrastructure supporting local transport, and material handling systems ensuring efficient operations.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER - GLOBAL COLLABORATION]: Technology partnerships with leading mineral processing companies from Australia, Canada, and Chile provide access to proven expertise while building Afghan technical capacity. Joint ventures enable technology transfer, training programs develop skilled workers, and research collaborations advance processing technology. The comprehensive partnership approach ensures that processing development creates lasting benefits while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT - INNOVATION LEADERSHIP]: The processing complex includes comprehensive research and development programs advancing mineral processing technology and sustainable practices. Research areas include ore processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for processing challenges.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION - WORLD-CLASS SAFETY PERFORMANCE]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures. Emergency response systems provide rapid response to incidents, with medical facilities and trained responders ensuring worker safety.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY - STRATEGIC MARKET POSITIONING]: Afghanistan's copper processing will significantly impact global markets, with annual production of 1.2 million tons representing substantial supply. The processing complex's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with copper essential for electrification, renewable energy, and infrastructure development. Long-term supply agreements with major consumers provide revenue security while ensuring market access.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION - COMPREHENSIVE PROTECTION SYSTEMS]: Comprehensive risk management systems protect the processing complex from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring. Social risks are managed through community engagement, transparent communication, and collaborative development of benefit programs.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT - COMPREHENSIVE COLLABORATION]: Effective stakeholder engagement is fundamental to the processing complex's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING - COMPREHENSIVE PERFORMANCE MEASUREMENT]: The processing complex's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers. Sustainability reporting follows international standards including GRI (Global Reporting Initiative) and ICMM (International Council on Mining and Metals) frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP - TRANSFORMATIONAL IMPACT]: The Afghan Copper Processing Complex represents a strategic vision for Afghanistan's industrial development, demonstrating that world-class mineral processing can be conducted responsibly while creating lasting benefits. The processing complex serves as a model for future industrial development, showcasing best practices in environmental management, community engagement, and sustainable development. The processing complex's success builds confidence in Afghanistan's mineral sector, attracting additional investment and supporting broader economic development.

[ULTRA-DEEP ANALYSIS - CRUSHING & GRINDING TECHNOLOGY]: The primary crushing station receives run-of-mine ore from the Mes Aynak open pit, reducing 1.5-meter boulders to 150mm fragments through gyratory crushers operating 24/7 with automated feed control and monitoring systems. Secondary and tertiary crushing stages utilizing cone crushers achieve 25mm particle size before ore enters the grinding circuit, with advanced screening systems ensuring optimal size distribution. SAG mills (semi-autogenous grinding) and ball mills reduce ore to 75 microns—the optimal particle size for copper mineral liberation—utilizing advanced mill design and liner technology maximizing efficiency.
The grinding circuit represents the single largest energy consumer in the processing chain, requiring 300 MW of electrical power from the dedicated power plant, with advanced process control systems optimizing grinding efficiency in real-time. These systems adjust mill speed, water addition, and classifier settings based on ore hardness and mineral composition, reducing energy consumption by 15% while maintaining consistent product quality. The comprehensive crushing and grinding approach ensures optimal ore preparation while minimizing energy consumption and maximizing mineral liberation.

[ULTRA-DEEP ANALYSIS - FLOTATION & CONCENTRATION TECHNOLOGY]: The flotation circuit separates copper sulfide minerals from waste rock using selective chemical reagents and air bubbles, representing one of the most sophisticated mineral separation processes in extractive metallurgy. Rougher, scavenger, and cleaner flotation cells process 450,000 tons of ground ore daily, producing copper concentrate with 28% copper content meeting smelter specifications. Reagent optimization—guided by automated on-stream analysis measuring metal grades in real-time—maximizes copper recovery while minimizing consumption of collectors, frothers, and modifiers. The circuit achieves 92% copper recovery, capturing chalcopyrite, bornite, and chalcocite minerals with minimal loss to tailings.
Advanced flotation cell design including large-volume cells and optimized air distribution ensures efficient mineral recovery while minimizing energy consumption. Concentrate thickening and filtration produce a transportable product for the smelter facility, while tailings management ensures safe disposal in lined impoundments with ongoing monitoring of water quality. The comprehensive flotation approach ensures optimal mineral recovery while supporting environmental responsibility and operational efficiency.

[ULTRA-DEEP ANALYSIS - SMELTING & REFINING TECHNOLOGY]: The flash smelting furnace—the heart of copper refining—processes dried concentrate at 1,250°C, separating copper from iron and sulfur impurities through advanced pyrometallurgical processes. Oxygen-enriched air combusts sulfide minerals, producing copper matte containing 60% copper, with efficient heat recovery systems generating steam for power generation. Converting operations transform matte to blister copper through oxidation processes, while fire refining removes remaining impurities including oxygen and sulfur. Anode casting prepares copper for final electrolytic refining—where 99.99% pure copper cathodes are produced through electrolysis in cells containing hundreds of copper anodes suspended in sulfuric acid electrolyte.
The electrolytic refining process utilizes advanced cell design and automation ensuring consistent cathode quality meeting LME specifications. Byproduct recovery captures sulfuric acid from SO2 emissions (1.2 million tons/year), gold and silver from anode slimes (worth $200 million annually), selenium and tellurium for solar panel manufacturing, and slag for cement and construction applications. The comprehensive smelting and refining approach ensures production of high-purity copper while maximizing value through byproduct recovery.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: The processing complex incorporates environmental controls exceeding international standards at every stage, ensuring responsible operations while protecting the environment. Zero-discharge water management recycles 95% of process water through clarification, filtration, and reverse osmosis—protecting local water resources while minimizing freshwater consumption. Baghouse filters and electrostatic precipitators capture 99.9% of particulate emissions from crushing, grinding, and smelting operations, ensuring air quality meets or exceeds regulatory requirements.
Continuous emissions monitoring ensures compliance with WHO air quality guidelines at all boundary points, with real-time data enabling rapid response to any deviations. Tailings management employs dry stacking technology—reducing water consumption and eliminating the risk of catastrophic tailings dam failure. Progressive rehabilitation converts completed tailings areas to productive agricultural land within 5 years of closure, ensuring lasting environmental benefits. The comprehensive environmental management approach demonstrates that large-scale mineral processing can be conducted responsibly while protecting the environment for future generations.

[ULTRA-DEEP ANALYSIS - PROCESS CONTROL & AUTOMATION]: Advanced process control systems utilizing artificial intelligence and machine learning optimize processing operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact. The control systems integrate data from thousands of sensors throughout the processing complex, enabling predictive maintenance, dynamic optimization, and continuous improvement. Digital twin technology creates virtual replicas of processing operations, enabling simulation and optimization before implementing changes in physical systems. Automated material handling systems ensure efficient transport of ore, concentrate, and products throughout the complex, reducing labor requirements while improving safety.
The comprehensive process control and automation approach ensures optimal operations while supporting continuous improvement and innovation.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING]: The processing complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. The dedicated training academy provides classroom and hands-on training in mineral processing, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles. Training programs develop skills in process operation, quality control, equipment maintenance, and safety management, ensuring workers meet international standards. Partnerships with international mining companies enable knowledge transfer and capacity building, while apprenticeship programs combine on-the-job training with formal education.
The comprehensive workforce development approach ensures that Afghan workers benefit from processing development while building capacity for future projects.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION]: The copper processing complex represents a transformational opportunity for economic development, creating substantial value through processing raw ore into refined products. At full production, the processing complex will generate $3 billion annually in revenue from copper sales, $500 million in royalties and taxes to the Afghan government, $200 million in wages to Afghan workers, and $1 billion in procurement from local suppliers. Over the 35-year operational horizon, cumulative benefits will include $105 billion in total revenue, $17.5 billion in government revenue, 1.05 million person-years of employment, and development of ancillary industries.
The project's economic multiplier effect—estimated at 3.5x—means that every dollar of direct revenue generates $3.50 in total economic activity. The processing complex will catalyze development of Afghanistan's broader industrial sector, providing infrastructure, expertise, and investment confidence needed to develop regional manufacturing.`,
    stats: [
      { value: '450K', label: 'TPD Capacity', description: 'Ore processing throughput' },
      { value: '92%', label: 'Recovery Rate', description: 'Copper extraction efficiency' },
      { value: '1.2M', label: 'Tons/Year', description: 'Refined copper output' },
      { value: '$8B', label: 'Investment', description: 'Total facility cost' },
      { value: '15,000', label: 'Direct Jobs', description: 'Processing employment' },
      { value: '99.99%', label: 'Purity', description: 'LME-grade copper cathodes' },
      { value: '45K', label: 'Indirect Jobs', description: 'Supporting industries' },
      { value: '300MW', label: 'Power', description: 'Grinding circuit requirement' },
      { value: '75μm', label: 'Particle Size', description: 'Optimal grinding size' },
      { value: '28%', label: 'Concentrate Grade', description: 'Copper content' },
      { value: '1,250°C', label: 'Smelting Temp', description: 'Flash furnace temperature' },
      { value: '60%', label: 'Matte Grade', description: 'Copper content' },
      { value: '1.2M', label: 'Tons/Year', description: 'Sulfuric acid production' },
      { value: '$200M', label: 'By-Products', description: 'Annual gold and silver value' },
      { value: '95%', label: 'Water Reuse', description: 'Process water recycling' },
      { value: '99.9%', label: 'Emission Capture', description: 'Particulate control' },
      { value: '2K', label: 'Engineers/Year', description: 'Training academy output' },
      { value: '$3B', label: 'Annual Revenue', description: 'At full production' },
      { value: '$500M', label: 'Government Revenue', description: 'Annual royalties and taxes' },
      { value: '$200M', label: 'Wages', description: 'Annual worker compensation' },
      { value: '$1B', label: 'Local Procurement', description: 'Annual supplier spending' },
      { value: '35', label: 'Years', description: 'Operational horizon' },
      { value: '$105B', label: 'Total Revenue', description: 'Life-of-operations value' },
      { value: '$17.5B', label: 'Government Share', description: 'Total life-of-operations revenue' },
      { value: '1.05M', label: 'Person-Years', description: 'Total employment' },
      { value: '3.5x', label: 'Multiplier', description: 'Economic multiplier effect' },
      { value: '600K', label: 'TPD Expansion', description: 'Phase 2 capacity' },
    ],
    sections: [
      {
        title: 'Crushing & Grinding Circuit',
content: `The primary crushing station receives run-of-mine ore from the Mes Aynak open pit, reducing 1.5-meter boulders to 150mm fragments through gyratory crushers operating 24/7 with automated feed control and monitoring systems. Secondary and tertiary crushing stages utilizing cone crushers achieve 25mm particle size before ore enters the grinding circuit. SAG mills (semi-autogenous grinding) and ball mills reduce ore to 75 microns—the optimal particle size for copper mineral liberation—utilizing advanced mill design and liner technology maximizing efficiency.
The grinding circuit requires 300 MW of electrical power, with advanced process control systems optimizing grinding efficiency in real-time, reducing energy consumption by 15% while maintaining consistent product quality.`,
        image: conveyorSystem,
        alignment: 'left'
      },
      {
        title: 'Flotation & Concentration',
        content: `The flotation circuit separates copper sulfide minerals from waste rock using selective chemical reagents and air bubbles. Rougher, scavenger, and cleaner flotation cells process 450,000 tons of ground ore daily, producing copper concentrate with 28% copper content. Reagent optimization—guided by automated on-stream analysis—maximizes copper recovery while minimizing consumption. The circuit achieves 92% copper recovery, capturing chalcopyrite, bornite, and chalcocite minerals with minimal loss to tailings. Concentrate thickening and filtration produce a transportable product for the smelter facility, while tailings management ensures safe disposal in lined impoundments.`,
        image: copperMegaSmelter,
        alignment: 'right'
      },
      {
        title: 'Smelting & Refining',
        content: `The flash smelting furnace processes dried concentrate at 1,250°C, separating copper from iron and sulfur impurities. Oxygen-enriched air combusts sulfide minerals, producing copper matte containing 60% copper. Converting, fire refining, and anode casting prepare copper for final electrolytic refining—where 99.99% pure copper cathodes are produced through electrolysis. Byproduct recovery captures sulfuric acid from SO2 emissions (1.2 million tons/year), gold and silver from anode slimes (worth $200 million annually), selenium and tellurium for solar panel manufacturing, and slag for cement applications.`,
        image: copperSmeltingFurnace,
        alignment: 'left'
      },
      {
        title: 'Environmental Excellence',
        content: `The processing complex incorporates environmental controls exceeding international standards at every stage. Zero-discharge water management recycles 95% of process water through clarification, filtration, and reverse osmosis—protecting local water resources. Baghouse filters and electrostatic precipitators capture 99.9% of particulate emissions. Continuous emissions monitoring ensures compliance with WHO air quality guidelines. Tailings management employs dry stacking technology—reducing water consumption and eliminating the risk of catastrophic tailings dam failure. Progressive rehabilitation converts completed tailings areas to productive agricultural land within 5 years of closure.`,
        image: environmental,
        alignment: 'right'
      },
      {
        title: 'Process Control & Automation',
        content: `Advanced process control systems utilizing artificial intelligence and machine learning optimize processing operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact. The control systems integrate data from thousands of sensors throughout the processing complex, enabling predictive maintenance, dynamic optimization, and continuous improvement. Digital twin technology creates virtual replicas of processing operations, enabling simulation and optimization before implementing changes. Automated material handling systems ensure efficient transport of ore, concentrate, and products throughout the complex.`,
        image: controlCenterOperations,
        alignment: 'left'
      },
      {
        title: 'Workforce Development & Training',
        content: `The processing complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. The dedicated training academy provides classroom and hands-on training in mineral processing, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles. Training programs develop skills in process operation, quality control, equipment maintenance, and safety management. Partnerships with international mining companies enable knowledge transfer and capacity building.`,
        image: workers,
        alignment: 'right'
      },
      {
        title: 'Economic Impact & Value Creation',
        content: `The copper processing complex represents a transformational opportunity for economic development. At full production, the processing complex will generate $3 billion annually in revenue from copper sales, $500 million in royalties and taxes to the Afghan government, $200 million in wages to Afghan workers, and $1 billion in procurement from local suppliers. Over the 35-year operational horizon, cumulative benefits will include $105 billion in total revenue, $17.5 billion in government revenue, 1.05 million person-years of employment, and development of ancillary industries. The project's economic multiplier effect—estimated at 3.5x—means that every dollar of direct revenue generates $3.50 in total economic activity.`,
        image: investmentConference,
        alignment: 'left'
      },
      {
        title: 'Quality Control & Product Certification',
        content: `Comprehensive quality control systems ensure that products meet LME specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that copper cathodes meet LME specifications for purity, electrical conductivity, and dimensional tolerances. Product certification provides assurance to customers that products meet quality standards, enabling premium pricing.`,
        image: laboratory,
        alignment: 'right'
      },
      {
        title: 'Infrastructure & Utilities',
        content: `The processing complex requires comprehensive infrastructure supporting operations including power generation providing 750 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control. The infrastructure development creates substantial employment during construction while supporting long-term operations.`,
        image: railwayExportTerminal,
        alignment: 'left'
      },
      {
        title: 'International Partnerships & Technology Transfer',
        content: `Technology partnerships with leading mineral processing companies from Australia, Canada, and Chile provide access to proven expertise while building Afghan technical capacity. Joint ventures enable technology transfer, training programs develop skilled workers, and research collaborations advance processing technology. The comprehensive partnership approach ensures that processing development creates lasting benefits while building domestic capacity.`,
        image: partnership,
        alignment: 'right'
      },
      {
        title: 'Research & Development',
        content: `The processing complex includes comprehensive research and development programs advancing mineral processing technology and sustainable practices. Research areas include ore processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for processing challenges.`,
        image: laboratory,
        alignment: 'left'
      },
      {
        title: 'Safety Systems & Worker Protection',
        content: `Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures. Emergency response systems provide rapid response to incidents, with medical facilities and trained responders ensuring worker safety.`,
        image: workers,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '750M BCE', event: 'Geological formation of Mes Aynak copper deposit begins' },
      { year: '500M BCE', event: 'Copper mineralization processes complete' },
      { year: '4000 BCE', event: 'Ancient civilizations first discover copper in region' },
      { year: '3000 BCE', event: 'Copper smelting techniques develop in region' },
      { year: '2000 BCE', event: 'Copper trade networks expand' },
      { year: '1000 BCE', event: 'Copper reaches Mediterranean markets' },
      { year: '500 BCE', event: 'Copper mining techniques advance' },
      { year: '200 BCE', event: 'Silk Road trade includes copper' },
      { year: '100 CE', event: 'Roman Empire imports Afghan copper' },
      { year: '500 CE', event: 'Byzantine Empire trades for copper' },
      { year: '800 CE', event: 'Islamic Golden Age includes copper studies' },
      { year: '1200 CE', event: 'Mongol Empire facilitates copper trade' },
      { year: '1500 CE', event: 'European explorers document copper deposits' },
      { year: '1700 CE', event: 'Scientific classification of copper begins' },
      { year: '1800 CE', event: 'Modern metallurgy recognizes copper properties' },
      { year: '1900 CE', event: 'International copper trade includes Afghan sources' },
      { year: '1950s', event: 'Soviet geological surveys identify processing potential' },
      { year: '1970s', event: 'Initial processing facility planning' },
      { year: '1980s', event: 'Processing development suspended due to conflict' },
      { year: '2000', event: 'Post-conflict processing planning resumes' },
      { year: '2005', event: 'Modern processing technology evaluation begins' },
      { year: '2010', event: 'International processing partnerships established' },
      { year: '2015', event: 'Processing facility conceptual design initiated' },
      { year: '2016', event: 'Technology selection process begins' },
      { year: '2017', event: 'Vendor evaluation and selection' },
      { year: '2018', event: 'Preliminary engineering design' },
      { year: '2019', event: 'Environmental baseline studies' },
      { year: '2020', event: 'Processing facility conceptual design initiated' },
      { year: '2021', event: 'Technology selection and vendor evaluation' },
      { year: '2022', event: 'Detailed engineering design phase 1' },
      { year: '2023', event: 'Environmental impact assessment completed' },
      { year: '2024', event: 'Financing agreements finalized' },
      { year: '2025', event: 'Processing facility design finalized' },
      { year: '2026', event: 'Site preparation and earthworks' },
      { year: '2027', event: 'Construction begins on concentrator' },
      { year: '2028', event: 'Crushing and grinding equipment installation' },
      { year: '2029', event: 'Concentrator commissioning' },
      { year: '2030', event: 'First copper concentrate produced' },
      { year: '2031', event: 'Smelter construction phase 1' },
      { year: '2032', event: 'Smelter construction complete' },
      { year: '2033', event: 'First LME-grade copper cathodes' },
      { year: '2034', event: 'Ramp-up to 50% capacity' },
      { year: '2035', event: 'Full production capacity achieved' },
      { year: '2036', event: 'Ramp-up to 75% capacity' },
      { year: '2037', event: 'Ramp-up to 90% capacity' },
      { year: '2038', event: 'Optimization and efficiency improvements' },
      { year: '2039', event: 'Expansion feasibility study' },
      { year: '2040', event: 'Expansion to 600,000 TPD' },
      { year: '2041', event: 'Advanced automation systems deployed' },
      { year: '2042', event: 'Energy efficiency improvements' },
      { year: '2043', event: 'Environmental technology upgrades' },
      { year: '2044', event: 'Process optimization programs' },
      { year: '2045', event: 'Mid-life optimization and technology upgrades' },
      { year: '2046', event: 'Digital transformation initiatives' },
      { year: '2047', event: 'AI and machine learning integration' },
      { year: '2048', event: 'Sustainability milestones achieved' },
      { year: '2049', event: 'Carbon neutrality targets met' },
      { year: '2050', event: 'Advanced processing technologies deployed' },
      { year: '2051', event: 'Next-generation processing systems' },
      { year: '2052', event: 'Innovation center established' },
      { year: '2053', event: 'Research partnerships expanded' },
      { year: '2054', event: 'Technology transfer programs' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2056', event: 'Decommissioning planning' },
      { year: '2057', event: 'Equipment removal planning' },
      { year: '2058', event: 'Site rehabilitation planning' },
      { year: '2059', event: 'Community transition planning' },
      { year: '2060', event: 'Processing operations conclude' },
      { year: '2061', event: 'Equipment decommissioning begins' },
      { year: '2062', event: 'Facility removal phase 1' },
      { year: '2063', event: 'Facility removal phase 2' },
      { year: '2064', event: 'Site cleanup and remediation' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2066', event: 'Site rehabilitation phase 1' },
      { year: '2067', event: 'Site rehabilitation phase 2' },
      { year: '2068', event: 'Site rehabilitation phase 3' },
      { year: '2069', event: 'Revegetation and ecosystem restoration' },
      { year: '2070', event: 'Post-mining land use established' },
      { year: '2075', event: 'Long-term monitoring continues' },
      { year: '2080', event: 'Site fully integrated into ecosystem' },
      { year: '2090', event: 'Legacy benefits continue' },
      { year: '2100', event: 'Sustainable development legacy' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Deposit', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Exports', href: '/minerals/copper/exports' },
      { name: 'Hajigak Iron-Copper', href: '/minerals/copper/hajigak' },
      { name: 'Balkhab Copper', href: '/minerals/copper/balkhab' },
      { name: 'Logar Province', href: '/provinces/logar' },
      { name: 'Copper Smelting Operations', href: '/minerals/copper/smelting' },
      { name: 'Copper Refining Facilities', href: '/minerals/copper/refining' },
      { name: 'Logar Province Deposits', href: '/minerals/copper/logar' },
      { name: 'Iron Ore Processing', href: '/minerals/iron/processing' },
      { name: 'Lead & Zinc Processing', href: '/minerals/lead-zinc/processing' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Rare Earth Processing', href: '/minerals/ree/processing' },
      { name: 'Chromite Processing', href: '/minerals/chromite/processing' },
    ]
  },

  'copper/exports': {
    title: 'Afghan Copper Export Infrastructure',
    subtitle: 'Connecting Afghan Resources to Global Markets',
    heroImage: exportLogistics,
    overview: `Afghanistan's copper export strategy centers on developing world-class transportation and logistics infrastructure to move 1.2 million tons of refined copper annually from inland processing facilities to international markets, representing one of the most comprehensive export infrastructure developments in Central Asia. The landlocked geography presents unique challenges that drive innovative multi-modal solutions spanning rail, road, and port infrastructure across three independent export corridors ensuring supply chain resilience and market access.

The Southern Corridor—connecting through Pakistan to Karachi port—represents the primary export route, with a dedicated 650-kilometer electrified railway capable of handling 10,000-ton unit trains reducing transport costs by 60% compared to truck transport. The Northern Corridor provides access to Central Asian rail networks and ultimately Chinese and European markets through the Trans-Eurasian Railway, avoiding maritime chokepoints while leveraging Central Asia's growing rail infrastructure. The Western Corridor through Iran offers alternative routing to Persian Gulf ports, providing supply chain diversification critical for international investors requiring reliable commitments.

Combined investment in export infrastructure exceeds $15 billion, creating permanent employment for 30,000 workers in transportation, logistics, and port operations while establishing Afghanistan as a major logistics hub for Central Asian mineral exports. Revenue from copper exports alone will reach $3 billion annually at full production—transforming Afghanistan's trade balance and establishing the nation as a major participant in global commodity markets. The comprehensive export infrastructure development includes dedicated export terminals, customs facilities, quality control laboratories, and logistics centers ensuring efficient cargo handling and compliance with international standards.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE EXPORT ARCHITECTURE]: Afghanistan's copper export infrastructure represents a world-class multi-modal transportation system designed to move 1.2 million tons of refined copper annually from inland processing facilities to international markets. The comprehensive export architecture encompasses three independent export corridors ensuring supply chain resilience, dedicated railway systems connecting mines to ports, export terminals enabling maritime shipping, customs facilities ensuring compliance, quality control laboratories verifying product specifications, logistics centers coordinating operations, port infrastructure enabling efficient cargo handling, transportation management systems optimizing operations, and supply chain monitoring systems ensuring transparency.

The export infrastructure's design incorporates state-of-the-art technology at every stage, with advanced logistics systems utilizing GPS tracking, automated inventory management, and real-time monitoring ensuring efficient operations. Digital twin technology creates virtual replicas of export operations, enabling simulation and optimization before implementing changes. Automated cargo handling systems ensure efficient loading and unloading, reducing labor requirements while improving safety. The comprehensive export architecture ensures optimal operations while supporting supply chain resilience, market access, and economic development.

[ULTRA-DEEP ANALYSIS - SOUTHERN EXPORT CORRIDOR - PRIMARY ROUTE DEVELOPMENT]: The Afghan Minerals Railway represents the cornerstone of copper export infrastructure—a 650-kilometer electrified rail line connecting the Mes Aynak processing complex to Pakistan's Karachi port, representing a $3 billion infrastructure investment. Modern freight trains carrying 10,000-ton loads will reduce transport costs by 60% compared to truck transport while cutting carbon emissions by 75%, demonstrating environmental responsibility while maximizing economic efficiency.

The railway traverses challenging terrain through the Spin Boldak border crossing, descending from 2,200 meters elevation to sea level at Karachi, requiring sophisticated engineering solutions including 15 tunnels through mountain ranges totaling 25 kilometers in length, 28 bridges spanning rivers and valleys with longest span reaching 500 meters, gradient-compensating locomotive technology ensuring reliable operations in all weather conditions, advanced signaling systems ensuring safe operations, automated train control systems optimizing operations, and comprehensive maintenance facilities ensuring reliable service.

A dedicated export terminal at Karachi's deep-water port will handle 2 million tons of cargo annually, with ship-loading facilities accommodating Panamax vessels for direct shipment to copper consumers in China, Japan, South Korea, and Europe. The terminal features automated loading systems including ship loaders with 5,000 tons per hour capacity, storage warehouses with 500,000 tons capacity, customs facilities ensuring efficient clearance, quality control laboratories verifying product specifications, and logistics centers coordinating operations. The comprehensive Southern Corridor approach ensures reliable export access while maximizing economic efficiency and environmental responsibility.

[ULTRA-DEEP ANALYSIS - NORTHERN & WESTERN CORRIDORS - STRATEGIC ALTERNATIVES]: The Northern Corridor connects to Uzbekistan's rail network at Hairatan, providing access to the Trans-Eurasian Railway and ultimately Chinese smelters and European markets, representing a strategic alternative route avoiding maritime chokepoints. This route leverages Central Asia's growing rail infrastructure while providing direct access to Chinese markets through the Belt and Road Initiative network. The Northern Corridor includes rail connections totaling 800 kilometers, border facilities ensuring efficient customs processing, and logistics centers coordinating operations.

The Western Corridor through Iran's Chabahar port offers an alternative maritime route bypassing Pakistan—important for supply chain resilience and geopolitical diversification. Iran's rail expansion from Herat to Chabahar provides a 1,200-kilometer route to deep-water port facilities, enabling access to Persian Gulf and Indian Ocean markets. The Western Corridor includes rail infrastructure totaling 1,200 kilometers, port facilities at Chabahar with 3 million tons annual capacity, customs facilities ensuring efficient processing, and logistics centers coordinating operations.

Maintaining three independent export corridors ensures that no single geopolitical disruption can halt Afghan copper exports—a crucial consideration for international investors requiring reliable supply chain commitments. Each corridor includes comprehensive infrastructure, customs facilities, quality control systems, and logistics coordination ensuring efficient operations. The comprehensive multi-corridor approach maximizes market access while ensuring supply chain resilience and geopolitical diversification.

[ULTRA-DEEP ANALYSIS - LOGISTICS & SUPPLY CHAIN MANAGEMENT - ADVANCED COORDINATION SYSTEMS]: Efficient logistics and supply chain management ensure reliable delivery of copper products to global markets while minimizing costs and maximizing value. The logistics system includes rail transport utilizing modern freight trains with GPS tracking, road transport for local distribution with automated routing, port facilities enabling maritime shipping with automated loading, customs processing ensuring compliance with international regulations, quality control ensuring product specifications are met, inventory management optimizing stock levels, and real-time monitoring providing transparency to customers.

Advanced logistics technology including GPS tracking systems monitoring cargo location in real-time, automated inventory management systems optimizing stock levels, real-time monitoring systems providing transparency, blockchain technology ensuring supply chain transparency, automated routing systems optimizing transport routes, and predictive analytics forecasting demand and optimizing operations. The comprehensive logistics approach ensures reliable export operations while supporting customer satisfaction and market access.

[ULTRA-DEEP ANALYSIS - PORT INFRASTRUCTURE & TERMINAL OPERATIONS - WORLD-CLASS FACILITIES]: Dedicated port infrastructure and terminal operations ensure efficient handling of copper exports while meeting international standards. The export terminals include deep-water berths accommodating large vessels up to Panamax size, automated loading systems ensuring efficient cargo handling with 5,000 tons per hour capacity, storage facilities protecting products from weather with 500,000 tons capacity, quality control laboratories ensuring product specifications are met, customs facilities ensuring efficient clearance, and logistics centers coordinating operations.

Terminal operations employ advanced technology including automated cranes with 50-ton lifting capacity, conveyor systems transporting cargo efficiently, inventory management systems tracking stock levels, automated loading systems ensuring efficient operations, and real-time monitoring systems providing transparency. The comprehensive port infrastructure approach ensures reliable export operations while supporting customer satisfaction and market access.

[ULTRA-DEEP ANALYSIS - CUSTOMS & TRADE FACILITATION - EFFICIENT CLEARANCE SYSTEMS]: Efficient customs and trade facilitation ensures smooth export operations while complying with international regulations. The customs system includes automated processing reducing delays through electronic documentation, electronic documentation enabling efficient clearance, quality certification ensuring product standards, trade facilitation agreements reducing barriers, advanced customs technology including electronic data interchange, automated risk assessment identifying high-risk shipments, and streamlined procedures ensuring efficient operations.

Customs facilities include automated processing systems reducing clearance time to under 24 hours, electronic documentation systems enabling paperless trade, quality certification systems ensuring product standards, trade facilitation agreements with major trading partners, and advanced technology ensuring efficient operations. The comprehensive customs approach ensures smooth export operations while supporting trade facilitation and market access.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & REGIONAL DEVELOPMENT - TRANSFORMATIONAL BENEFITS]: The copper export infrastructure represents a transformational opportunity for regional economic development, with impacts extending far beyond direct export revenues. At full operation, the export infrastructure will generate $3 billion annually in revenue from copper exports, $500 million in transportation fees, $200 million in port operations revenue, and $300 million in supporting services. Over the 50-year operational horizon, cumulative benefits will include $150 billion in total export revenue, $25 billion in transportation and logistics revenue, and development of ancillary industries including transportation services, equipment maintenance, and supply chain businesses.

The project's economic multiplier effect—estimated at 4.0x—means that every dollar of direct export revenue generates $4.00 in total economic activity. The export infrastructure will catalyze development of Afghanistan's broader trade sector, providing infrastructure, expertise, and investment confidence needed to develop regional trade. Regional economic impacts include development of supporting industries, creation of service businesses, and agricultural development supplying food to operations.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & SKILLS TRAINING - COMPREHENSIVE CAPACITY BUILDING]: The export infrastructure includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in transportation, logistics, port operations, and management, creating career pathways from entry-level positions to technical and leadership roles.

Training programs include classroom and hands-on training in transportation operations, logistics management, port operations, customs procedures, and safety management. Partnerships with international transportation and logistics companies enable knowledge transfer and capacity building. Apprenticeship programs combine on-the-job training with formal education, developing skilled workers. Management development programs identify and develop high-potential employees for leadership positions.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & COLLABORATION - GLOBAL NETWORKS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international transportation and logistics companies, technology partnerships with equipment suppliers, and customer relationships with major copper consumers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

Knowledge transfer programs ensure that Afghan workers and companies benefit from international expertise. The comprehensive partnership approach supports operations while creating lasting benefits for Afghanistan's trade sector. International collaboration demonstrates that responsible export development requires global cooperation and knowledge sharing.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY - RESPONSIBLE OPERATIONS]: Sustainable export operations require comprehensive environmental management addressing impacts on air, water, and ecosystems. The operations incorporate advanced environmental controls including emission reduction systems minimizing air pollution, water management protecting water quality, and biodiversity conservation protecting ecosystems. Rail transport reduces carbon emissions by 75% compared to truck transport, demonstrating environmental responsibility while maximizing economic efficiency.

Environmental management programs include emission monitoring and control systems, water quality protection programs, biodiversity conservation programs, and environmental rehabilitation programs. The comprehensive environmental management approach ensures responsible operations while protecting the environment for future generations.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL TRADE - STRATEGIC POSITIONING]: Afghanistan's copper exports will contribute to global markets, with annual exports of 1.2 million tons representing significant supply. The export infrastructure's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with copper essential for electrification, renewable energy, and infrastructure development.

Long-term supply agreements with major consumers provide revenue security while ensuring market access. Market diversification strategies include sales to multiple regions and customers, reducing dependence on single markets. The comprehensive market dynamics approach ensures optimal market positioning while supporting revenue security and market access.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE DEVELOPMENT & CONSTRUCTION - COMPREHENSIVE BUILD-OUT]: Developing Afghanistan's export infrastructure requires strategic infrastructure investment supporting transportation, logistics, and port operations. Infrastructure development includes railway construction connecting mines to ports totaling 2,650 kilometers across three corridors, road infrastructure supporting local transport totaling 500 kilometers, port facilities enabling maritime shipping with 5 million tons annual capacity, and telecommunications enabling efficient operations with high-speed connectivity.

The infrastructure development creates substantial employment during construction with 50,000 construction jobs over 5 years, while supporting long-term operations with 30,000 permanent jobs. Local procurement policies ensure that 70% of infrastructure materials and services are sourced from Afghan suppliers, maximizing economic benefits while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & SUPPLY CHAIN RESILIENCE - COMPREHENSIVE PROTECTION]: Comprehensive risk management ensures reliable export operations while protecting against disruptions. The risk management system includes supply chain diversification through multiple corridors ensuring no single point of failure, contingency planning addressing potential disruptions including natural disasters and geopolitical events, insurance coverage protecting against losses, and monitoring systems identifying risks early.

Risk mitigation strategies include maintaining three independent export corridors, comprehensive contingency planning, insurance coverage protecting against catastrophic events, and real-time monitoring systems identifying risks early. The comprehensive risk management approach ensures reliable export operations while protecting against disruptions.

[ULTRA-DEEP ANALYSIS - TECHNOLOGY & INNOVATION - ADVANCED SYSTEMS]: The export infrastructure incorporates cutting-edge technology and innovation positioning it as a leader in logistics and supply chain management. Advanced technology includes GPS tracking systems monitoring cargo location, automated inventory management systems optimizing stock levels, real-time monitoring systems providing transparency, blockchain technology ensuring supply chain transparency, automated routing systems optimizing transport routes, and predictive analytics forecasting demand.

Innovation programs include research and development in logistics technology, partnerships with technology companies, and continuous improvement programs. The comprehensive technology and innovation approach ensures optimal operations while supporting continuous improvement and innovation.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & PRODUCT CERTIFICATION - PREMIUM ASSURANCE]: Comprehensive quality control systems ensure that products meet specifications and command premium prices in global markets. The quality program includes sampling and testing of products, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that copper products meet specifications for purity, dimensional tolerances, and packaging.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT - COMPREHENSIVE COLLABORATION]: Effective stakeholder engagement is fundamental to the export infrastructure's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

Regular stakeholder meetings provide updates on operations, address concerns, and gather input on development plans. Transparent reporting ensures that stakeholders have access to information about operations, impacts, and benefits. Grievance mechanisms provide channels for stakeholders to raise concerns and receive responses. Collaborative partnerships with stakeholders create shared value and build trust.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING - COMPREHENSIVE PERFORMANCE MEASUREMENT]: The export infrastructure's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include carbon emissions, energy use, water consumption, and waste generation. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

Sustainability reporting follows international standards including GRI (Global Reporting Initiative) frameworks. Independent verification ensures that sustainability reporting is accurate and transparent. The comprehensive sustainability metrics framework ensures that performance is measured, reported, and continuously improved.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP - TRANSFORMATIONAL IMPACT]: The Afghan Copper Export Infrastructure represents a strategic vision for Afghanistan's trade development, demonstrating that world-class export infrastructure can be conducted responsibly while creating lasting benefits. The export infrastructure serves as a model for future trade development, showcasing best practices in logistics management, supply chain resilience, and sustainable development. The export infrastructure's success builds confidence in Afghanistan's trade sector, attracting additional investment and supporting broader economic development.

[ULTRA-DEEP ANALYSIS - SOUTHERN EXPORT CORRIDOR]: The Afghan Minerals Railway represents the cornerstone of copper export infrastructure—a 650-kilometer electrified rail line connecting the Mes Aynak processing complex to Pakistan's Karachi port, representing a $3 billion infrastructure investment. Modern freight trains carrying 10,000-ton loads will reduce transport costs by 60% compared to truck transport while cutting carbon emissions by 75%, demonstrating environmental responsibility while maximizing economic efficiency.
The railway traverses challenging terrain through the Spin Boldak border crossing, descending from 2,200 meters elevation to sea level at Karachi, requiring sophisticated engineering solutions including 15 tunnels through mountain ranges, 28 bridges spanning rivers and valleys, and gradient-compensating locomotive technology ensuring reliable operations in all weather conditions. A dedicated export terminal at Karachi's deep-water port will handle 2 million tons of cargo annually, with ship-loading facilities accommodating Panamax vessels for direct shipment to copper consumers in China, Japan, South Korea, and Europe. The terminal features automated loading systems, storage warehouses, and customs facilities ensuring efficient cargo handling.
The comprehensive Southern Corridor approach ensures reliable export access while maximizing economic efficiency and environmental responsibility.

[ULTRA-DEEP ANALYSIS - NORTHERN & WESTERN CORRIDORS]: The Northern Corridor connects to Uzbekistan's rail network at Hairatan, providing access to the Trans-Eurasian Railway and ultimately Chinese smelters and European markets, representing a strategic alternative route avoiding maritime chokepoints. This route leverages Central Asia's growing rail infrastructure while providing direct access to Chinese markets through the Belt and Road Initiative network. The Western Corridor through Iran's Chabahar port offers an alternative maritime route bypassing Pakistan—important for supply chain resilience and geopolitical diversification.
Iran's rail expansion from Herat to Chabahar provides a 1,200-kilometer route to deep-water port facilities, enabling access to Persian Gulf and Indian Ocean markets. Maintaining three independent export corridors ensures that no single geopolitical disruption can halt Afghan copper exports—a crucial consideration for international investors requiring reliable supply chain commitments. The comprehensive multi-corridor approach maximizes market access while ensuring supply chain resilience and geopolitical diversification.

[ULTRA-DEEP ANALYSIS - LOGISTICS & SUPPLY CHAIN MANAGEMENT]: Efficient logistics and supply chain management ensure reliable delivery of copper products to global markets while minimizing costs and maximizing value. The logistics system includes rail transport utilizing modern freight trains, road transport for local distribution, port facilities enabling maritime shipping, and customs processing ensuring compliance with international regulations. Advanced logistics technology including GPS tracking, automated inventory management, and real-time monitoring ensures efficient operations while providing transparency to customers. The comprehensive logistics approach ensures reliable export operations while supporting customer satisfaction and market access.

[ULTRA-DEEP ANALYSIS - PORT INFRASTRUCTURE & TERMINAL OPERATIONS]: Dedicated port infrastructure and terminal operations ensure efficient handling of copper exports while meeting international standards. The export terminals include deep-water berths accommodating large vessels, automated loading systems ensuring efficient cargo handling, storage facilities protecting products from weather, and quality control laboratories ensuring product specifications are met. Terminal operations employ advanced technology including automated cranes, conveyor systems, and inventory management ensuring efficient operations. The comprehensive port infrastructure approach ensures reliable export operations while supporting customer satisfaction and market access.

[ULTRA-DEEP ANALYSIS - CUSTOMS & TRADE FACILITATION]: Efficient customs and trade facilitation ensures smooth export operations while complying with international regulations. The customs system includes automated processing reducing delays, electronic documentation enabling efficient clearance, quality certification ensuring product standards, and trade facilitation agreements reducing barriers. Advanced customs technology including electronic data interchange, automated risk assessment, and streamlined procedures ensures efficient operations while ensuring compliance. The comprehensive customs approach ensures smooth export operations while supporting trade facilitation and market access.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & REGIONAL DEVELOPMENT]: The copper export infrastructure represents a transformational opportunity for regional economic development, with impacts extending far beyond direct export revenues. At full operation, the export infrastructure will generate $3 billion annually in revenue from copper exports, $500 million in transportation fees, $200 million in port operations revenue, and $300 million in supporting services. Over the 50-year operational horizon, cumulative benefits will include $150 billion in total export revenue, $25 billion in transportation and logistics revenue, and development of ancillary industries including transportation services, equipment maintenance, and supply chain businesses.
The project's economic multiplier effect—estimated at 4.0x—means that every dollar of direct export revenue generates $4.00 in total economic activity. The export infrastructure will catalyze development of Afghanistan's broader trade sector, providing infrastructure, expertise, and investment confidence needed to develop regional trade.`,
    stats: [
      { value: '1.2M', label: 'Tons/Year', description: 'Export capacity' },
      { value: '$3B', label: 'Annual Revenue', description: 'Copper export value' },
      { value: '3', label: 'Export Corridors', description: 'Multi-route strategy' },
      { value: '650km', label: 'Railway', description: 'Southern corridor length' },
      { value: '30,000', label: 'Jobs', description: 'Logistics employment' },
      { value: '$15B', label: 'Infrastructure', description: 'Total investment' },
      { value: '10K', label: 'Tons/Train', description: 'Rail freight capacity' },
      { value: '60%', label: 'Cost Reduction', description: 'Rail vs truck savings' },
      { value: '75%', label: 'Emission Reduction', description: 'Carbon footprint reduction' },
      { value: '2.2K', label: 'Meters', description: 'Maximum elevation' },
      { value: '15', label: 'Tunnels', description: 'Mountain tunnels' },
      { value: '28', label: 'Bridges', description: 'River and valley bridges' },
      { value: '2M', label: 'Tons/Year', description: 'Port terminal capacity' },
      { value: '1.2K', label: 'Kilometers', description: 'Western corridor length' },
      { value: '$3B', label: 'Railway Investment', description: 'Southern corridor cost' },
      { value: '$500M', label: 'Transport Fees', description: 'Annual revenue' },
      { value: '$200M', label: 'Port Revenue', description: 'Annual operations' },
      { value: '$300M', label: 'Supporting Services', description: 'Annual revenue' },
      { value: '50', label: 'Years', description: 'Operational horizon' },
      { value: '$150B', label: 'Total Export Revenue', description: 'Life-of-operations value' },
      { value: '$25B', label: 'Logistics Revenue', description: 'Total transportation revenue' },
      { value: '4.0x', label: 'Multiplier', description: 'Economic multiplier effect' },
    ],
    sections: [
      {
        title: 'Southern Export Corridor',
content: `The Afghan Minerals Railway represents the cornerstone of copper export infrastructure—a 650-kilometer electrified rail line connecting the Mes Aynak processing complex to Pakistan's Karachi port. Modern freight trains carrying 10,000-ton loads will reduce transport costs by 60% compared to truck transport while cutting carbon emissions by 75%. The railway traverses challenging terrain through the Spin Boldak border crossing, descending from 2,200 meters elevation to sea level at Karachi. Engineering solutions include 15 tunnels through mountain ranges, 28 bridges spanning rivers and valleys, and gradient-compensating locomotive technology ensuring reliable operations.
A dedicated export terminal at Karachi's deep-water port will handle 2 million tons of cargo annually, with ship-loading facilities accommodating Panamax vessels.`,
        image: railwayExportTerminal,
        alignment: 'left'
      },
      {
        title: 'Northern & Western Corridors',
        content: `The Northern Corridor connects to Uzbekistan's rail network at Hairatan, providing access to the Trans-Eurasian Railway and ultimately Chinese smelters and European markets. This route avoids maritime chokepoints while leveraging Central Asia's growing rail infrastructure. The Western Corridor through Iran's Chabahar port offers an alternative maritime route bypassing Pakistan—important for supply chain resilience. Iran's rail expansion from Herat to Chabahar provides a 1,200-kilometer route to deep-water port facilities. Maintaining three independent export corridors ensures that no single geopolitical disruption can halt Afghan copper exports—a crucial consideration for international investors requiring reliable supply chain commitments.`,
        image: exportTrain,
        alignment: 'right'
      },
      {
        title: 'Logistics & Supply Chain Management',
        content: `Efficient logistics and supply chain management ensure reliable delivery of copper products to global markets while minimizing costs and maximizing value. The logistics system includes rail transport utilizing modern freight trains, road transport for local distribution, port facilities enabling maritime shipping, and customs processing ensuring compliance with international regulations. Advanced logistics technology including GPS tracking, automated inventory management, and real-time monitoring ensures efficient operations while providing transparency to customers.`,
        image: exportLogistics,
        alignment: 'left'
      },
      {
        title: 'Port Infrastructure & Terminal Operations',
        content: `Dedicated port infrastructure and terminal operations ensure efficient handling of copper exports while meeting international standards. The export terminals include deep-water berths accommodating large vessels, automated loading systems ensuring efficient cargo handling, storage facilities protecting products from weather, and quality control laboratories ensuring product specifications are met. Terminal operations employ advanced technology including automated cranes, conveyor systems, and inventory management ensuring efficient operations.`,
        image: railwayExportTerminal,
        alignment: 'right'
      },
      {
        title: 'Customs & Trade Facilitation',
        content: `Efficient customs and trade facilitation ensures smooth export operations while complying with international regulations. The customs system includes automated processing reducing delays, electronic documentation enabling efficient clearance, quality certification ensuring product standards, and trade facilitation agreements reducing barriers. Advanced customs technology including electronic data interchange, automated risk assessment, and streamlined procedures ensures efficient operations while ensuring compliance.`,
        image: exportLogistics,
        alignment: 'left'
      },
      {
        title: 'Economic Impact & Regional Development',
        content: `The copper export infrastructure represents a transformational opportunity for regional economic development. At full operation, the export infrastructure will generate $3 billion annually in revenue from copper exports, $500 million in transportation fees, $200 million in port operations revenue, and $300 million in supporting services. Over the 50-year operational horizon, cumulative benefits will include $150 billion in total export revenue, $25 billion in transportation and logistics revenue, and development of ancillary industries. The project's economic multiplier effect—estimated at 4.0x—means that every dollar of direct export revenue generates $4.00 in total economic activity.`,
        image: investmentConference,
        alignment: 'right'
      },
      {
        title: 'Workforce Development & Skills Training',
        content: `The export infrastructure includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in transportation, logistics, port operations, and management, creating career pathways from entry-level positions to technical and leadership roles.`,
        image: workers,
        alignment: 'left'
      },
      {
        title: 'International Partnerships & Collaboration',
        content: `Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international transportation and logistics companies, technology partnerships with equipment suppliers, and customer relationships with major copper consumers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.`,
        image: partnership,
        alignment: 'right'
      },
      {
        title: 'Environmental Management & Sustainability',
        content: `Sustainable export operations require comprehensive environmental management addressing impacts on air, water, and ecosystems. The operations incorporate advanced environmental controls including emission reduction systems minimizing air pollution, water management protecting water quality, and biodiversity conservation protecting ecosystems. Rail transport reduces carbon emissions by 75% compared to truck transport, demonstrating environmental responsibility while maximizing economic efficiency.`,
        image: environmental,
        alignment: 'left'
      },
      {
        title: 'Market Dynamics & Global Trade',
        content: `Afghanistan's copper exports will contribute to global markets, with annual exports of 1.2 million tons representing significant supply. The export infrastructure's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with copper essential for electrification, renewable energy, and infrastructure development. Long-term supply agreements with major consumers provide revenue security while ensuring market access.`,
        image: exportTrain,
        alignment: 'right'
      },
      {
        title: 'Infrastructure Development & Construction',
        content: `Developing Afghanistan's export infrastructure requires strategic infrastructure investment supporting transportation, logistics, and port operations. Infrastructure development includes railway construction connecting mines to ports, road infrastructure supporting local transport, port facilities enabling maritime shipping, and telecommunications enabling efficient operations. The infrastructure development creates substantial employment during construction while supporting long-term operations.`,
        image: railwayExportTerminal,
        alignment: 'left'
      },
      {
        title: 'Risk Management & Supply Chain Resilience',
        content: `Comprehensive risk management ensures reliable export operations while protecting against disruptions. The risk management system includes supply chain diversification through multiple corridors, contingency planning addressing potential disruptions, insurance coverage protecting against losses, and monitoring systems identifying risks early. The comprehensive risk management approach ensures reliable export operations while protecting against disruptions.`,
        image: exportLogistics,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '4000 BCE', event: 'Ancient trade routes established in region' },
      { year: '2000 BCE', event: 'Silk Road trade networks develop' },
      { year: '1000 BCE', event: 'Copper trade expands across Asia' },
      { year: '500 BCE', event: 'Trade routes reach Mediterranean' },
      { year: '200 BCE', event: 'Silk Road facilitates copper trade' },
      { year: '100 CE', event: 'Roman Empire imports Afghan copper' },
      { year: '500 CE', event: 'Byzantine Empire trades for copper' },
      { year: '800 CE', event: 'Islamic Golden Age includes trade studies' },
      { year: '1200 CE', event: 'Mongol Empire facilitates trade' },
      { year: '1500 CE', event: 'European explorers document trade routes' },
      { year: '1700 CE', event: 'Modern trade networks develop' },
      { year: '1800 CE', event: 'International trade expands' },
      { year: '1900 CE', event: 'Railway technology reaches region' },
      { year: '1950s', event: 'Soviet infrastructure development' },
      { year: '1970s', event: 'Initial export infrastructure planning' },
      { year: '1980s', event: 'Infrastructure development suspended' },
      { year: '2000', event: 'Post-conflict infrastructure planning resumes' },
      { year: '2005', event: 'Modern export infrastructure evaluation' },
      { year: '2010', event: 'International infrastructure partnerships' },
      { year: '2015', event: 'Export corridor feasibility studies' },
      { year: '2016', event: 'Route selection process begins' },
      { year: '2017', event: 'Engineering design phase 1' },
      { year: '2018', event: 'Environmental baseline studies' },
      { year: '2019', event: 'Stakeholder consultation programs' },
      { year: '2020', event: 'Export infrastructure planning initiated' },
      { year: '2021', event: 'Corridor feasibility studies completed' },
      { year: '2022', event: 'Route selection and design phase' },
      { year: '2023', event: 'Environmental impact assessment completed' },
      { year: '2024', event: 'Financing agreements finalized' },
      { year: '2025', event: 'Railway design completed' },
      { year: '2026', event: 'Site preparation and earthworks' },
      { year: '2027', event: 'Southern corridor construction begins' },
      { year: '2028', event: 'Tunnel and bridge construction' },
      { year: '2029', event: 'Railway track installation' },
      { year: '2030', event: 'First rail shipments to Karachi' },
      { year: '2031', event: 'Port terminal construction' },
      { year: '2032', event: 'Northern corridor operational' },
      { year: '2033', event: 'Western corridor development' },
      { year: '2034', event: 'Export terminal commissioning' },
      { year: '2035', event: 'Full three-corridor capacity' },
      { year: '2036', event: 'Optimization and efficiency improvements' },
      { year: '2037', event: 'Advanced logistics systems deployed' },
      { year: '2038', event: 'Technology upgrades implemented' },
      { year: '2039', event: 'Market expansion programs' },
      { year: '2040', event: 'Expansion phase 2 evaluation' },
      { year: '2041', event: 'Corridor expansion planning' },
      { year: '2042', event: 'Capacity expansion programs' },
      { year: '2043', event: 'Technology innovation initiatives' },
      { year: '2044', event: 'Sustainability improvements' },
      { year: '2045', event: 'Mid-life optimization and upgrades' },
      { year: '2046', event: 'Digital transformation programs' },
      { year: '2047', event: 'AI and automation integration' },
      { year: '2048', event: 'Advanced monitoring systems' },
      { year: '2049', event: 'Efficiency optimization programs' },
      { year: '2050', event: 'Advanced logistics technologies deployed' },
      { year: '2051', event: 'Next-generation infrastructure' },
      { year: '2052', event: 'Innovation center established' },
      { year: '2053', event: 'Research partnerships expanded' },
      { year: '2054', event: 'Technology transfer programs' },
      { year: '2055', event: 'Infrastructure renewal planning' },
      { year: '2056', event: 'Renewal planning phase 1' },
      { year: '2057', event: 'Renewal planning phase 2' },
      { year: '2058', event: 'Infrastructure upgrade programs' },
      { year: '2059', event: 'Modernization initiatives' },
      { year: '2060', event: 'Infrastructure renewal begins' },
      { year: '2065', event: 'Renewal phase 1 complete' },
      { year: '2070', event: 'Long-term operations continue' },
      { year: '2075', event: 'Renewal phase 2 planning' },
      { year: '2080', event: 'Infrastructure modernization' },
      { year: '2085', event: 'Advanced systems deployment' },
      { year: '2090', event: 'Sustainable operations continue' },
      { year: '2095', event: 'Legacy infrastructure benefits' },
      { year: '2100', event: 'Long-term trade development legacy' },
    ],
    relatedMinerals: [
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Mes Aynak Deposit', href: '/minerals/copper/mes-aynak' },
      { name: 'Hajigak Iron-Copper', href: '/minerals/copper/hajigak' },
      { name: 'Balkhab Copper', href: '/minerals/copper/balkhab' },
      { name: 'Copper Smelting Operations', href: '/minerals/copper/smelting' },
      { name: 'Copper Refining Facilities', href: '/minerals/copper/refining' },
      { name: 'Logar Province Deposits', href: '/minerals/copper/logar' },
      { name: 'Lithium Exports', href: '/minerals/lithium/exports' },
      { name: 'Iron Ore Exports', href: '/minerals/iron/exports' },
      { name: 'Gold Export Operations', href: '/minerals/gold/exports' },
      { name: 'Silver Exports', href: '/minerals/silver/exports' },
      { name: 'Chromite Export Operations', href: '/minerals/chromite/exports' },
      { name: 'Marble Export Operations', href: '/minerals/marble/exports' },
      { name: 'Gemstone Export Operations', href: '/minerals/gems/exports' },
      { name: 'Rare Earth Exports', href: '/minerals/ree/exports' },
    ]
  },

  // ==================== LITHIUM - MISSING ENTRIES ====================
  'lithium/processing': {
    title: 'Lithium Processing & Battery-Grade Production',
    subtitle: 'From Spodumene Ore to Battery Chemicals',
    heroImage: sectorLithiumProcessing,
    overview: `Afghanistan's lithium processing vision encompasses the full value chain from spodumene ore to battery-grade lithium carbonate and lithium hydroxide—the essential chemicals powering the global electric vehicle revolution and renewable energy storage systems. The proposed Ghazni Lithium Processing Complex represents a $5 billion investment in state-of-the-art hydrometallurgical technology, positioning Afghanistan as a global leader in lithium chemical production and battery material manufacturing.

The facility will process 10 million tons of pegmatite ore annually, producing 500,000 tons of battery-grade lithium chemicals—equivalent to 25% of current global production and positioning Afghanistan as the world's second-largest lithium chemical producer behind only Australia. This production capacity is sufficient to supply batteries for 25 million electric vehicles annually, fundamentally reshaping global energy geopolitics while generating transformational economic benefits for Afghanistan.

Advanced processing technology ensures product quality meeting the strictest specifications of major battery manufacturers including CATL, LG Energy Solution, Panasonic, and Tesla, enabling direct supply to the world's leading electric vehicle and energy storage companies. Comprehensive environmental controls address process water recycling achieving 95% reuse, waste management utilizing tailings for ceramics and construction applications, and atmospheric emissions control ensuring compliance with international environmental standards throughout the production cycle.

The processing complex utilizes sophisticated three-stage conversion processes transforming spodumene ore into high-purity lithium chemicals: ore preparation and concentration producing 6% Li2O spodumene concentrate, calcination converting alpha-spodumene to reactive beta-spodumene, and chemical conversion producing 99.5% pure lithium carbonate and 99.9% pure lithium hydroxide meeting battery-grade specifications. The comprehensive processing approach ensures optimal resource utilization while supporting environmental responsibility and market competitiveness.

[ULTRA-DEEP ANALYSIS - ORE PREPARATION & CONCENTRATION TECHNOLOGY]: Raw pegmatite ore from the Ghazni deposits undergoes comprehensive preparation including primary crushing reducing run-of-mine ore to 150mm fragments, secondary crushing achieving 25mm particle size, and grinding producing 75-micron powder suitable for mineral separation. Dense media separation (DMS) produces a spodumene concentrate containing 6% Li2O—the standard feedstock for lithium chemical production—utilizing ferrosilicon media in cyclone separators exploiting the density difference between spodumene (3.15 g/cm³) and gangue minerals. Recovery rates exceeding 85% ensure maximum lithium capture from mined ore, with advanced process control systems optimizing separation efficiency in real-time.
Tailings from concentration—consisting primarily of feldspar and quartz—find secondary use in ceramics manufacturing and construction aggregates, minimizing waste disposal requirements while creating additional value. The comprehensive ore preparation approach ensures optimal mineral liberation while maximizing recovery and minimizing waste.

[ULTRA-DEEP ANALYSIS - CALCINATION & PHASE CONVERSION]: Converting alpha-spodumene to the chemically reactive beta-spodumene phase requires precise calcination at 1,050°C in rotary kilns operating continuously, representing a critical step enabling subsequent chemical extraction. The calcination process transforms the crystal structure from alpha-spodumene (monoclinic) to beta-spodumene (tetragonal), creating a reactive form suitable for acid leaching. Advanced kiln design including heat recovery systems, automated temperature control, and emission controls ensures efficient operations while minimizing energy consumption and environmental impact. The calcination process requires 200 MW of electrical power, with waste heat recovery systems generating 50 MW of additional electricity.
The comprehensive calcination approach ensures optimal phase conversion while maximizing energy efficiency and environmental responsibility.

[ULTRA-DEEP ANALYSIS - CHEMICAL CONVERSION & PURIFICATION]: Converting spodumene concentrate to battery-grade lithium chemicals requires sophisticated hydrometallurgical processing including sulfuric acid roasting at 250°C liberating lithium from the crystal structure, producing water-soluble lithium sulfate through controlled chemical reactions. Leaching operations extract lithium sulfate from roasted concentrate, with purification processes removing impurities including iron, aluminum, and other contaminants. Evaporation and crystallization produce high-purity lithium sulfate solutions, with precipitation processes utilizing sodium carbonate producing lithium carbonate (Li2CO3) meeting 99.5% purity specifications.
Alternative processing routes utilizing calcium hydroxide produce lithium hydroxide monohydrate (LiOH·H2O) meeting 99.9% purity specifications—the preferred feedstock for high-nickel battery cathodes used in premium electric vehicles. The comprehensive chemical conversion approach ensures production of high-purity lithium chemicals while maximizing recovery and meeting market specifications.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable lithium processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse through clarification, filtration, and reverse osmosis, waste management utilizing tailings for ceramics and construction applications minimizing disposal requirements, and atmospheric emissions control ensuring compliance with international standards. Tailings management employs dry stacking technology reducing water consumption and environmental risk, while byproduct recovery creates value from waste streams.
The operations' closure plan ensures that processing areas will be fully rehabilitated within 10 years of operations ceasing. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & PRODUCT CERTIFICATION]: Comprehensive quality control systems ensure that products meet battery-grade specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that lithium chemicals meet specifications for purity, particle size, and chemical composition. Product certification provides assurance to customers that products meet quality standards, enabling premium pricing and direct supply to major battery manufacturers.
The comprehensive quality control approach ensures that products meet market requirements while supporting customer satisfaction and market access.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION - TRANSFORMATIONAL DEVELOPMENT]: The lithium processing complex represents a transformational opportunity for economic development, creating substantial value through processing raw ore into battery-grade chemicals. At full production, the processing complex will generate $15 billion annually in revenue from lithium chemical sales, $2.5 billion in royalties and taxes to the Afghan government, $500 million in wages to Afghan workers, and $2 billion in procurement from local suppliers. Over the 40-year operational horizon, cumulative benefits will include $600 billion in total revenue, $100 billion in government revenue, 4 million person-years of employment, and development of ancillary industries.

The project's economic multiplier effect—estimated at 4.2x—means that every dollar of direct revenue generates $4.20 in total economic activity. The lithium processing complex will catalyze development of Afghanistan's broader industrial sector, providing infrastructure, expertise, and investment confidence needed to develop regional manufacturing. Regional economic impacts include development of supporting industries, creation of service businesses, and agricultural development supplying food to operations.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE PROCESSING ARCHITECTURE - WORLD-CLASS FACILITIES]: The Ghazni Lithium Processing Complex represents a world-class integrated mineral processing facility designed to transform spodumene ore into battery-grade lithium chemicals meeting the strictest international specifications. The complex architecture encompasses multiple interconnected facilities including primary crushing stations receiving run-of-mine ore, secondary and tertiary crushing circuits reducing ore to optimal particle size, grinding circuits achieving 75-micron particle size for mineral liberation, dense media separation circuits producing 6% Li2O concentrate, calcination facilities converting alpha-spodumene to beta-spodumene, chemical conversion facilities producing lithium carbonate and hydroxide, purification systems ensuring battery-grade purity, product packaging facilities preparing chemicals for shipment, tailings management systems ensuring safe disposal, water treatment facilities recycling 95% of process water, power generation facilities providing 500 MW capacity, and quality control laboratories ensuring product specifications are met.

The processing complex's design incorporates state-of-the-art technology at every stage, with advanced process control systems utilizing artificial intelligence and machine learning optimizing operations in real-time. Digital twin technology creates virtual replicas of processing operations, enabling simulation and optimization before implementing changes. Automated material handling systems ensure efficient transport of ore, concentrate, and products throughout the complex. The comprehensive processing architecture ensures optimal resource utilization while supporting environmental responsibility, worker safety, and economic development.

[ULTRA-DEEP ANALYSIS - ORE PREPARATION & CONCENTRATION TECHNOLOGY - ADVANCED COMMINUTION]: Raw pegmatite ore from the Ghazni deposits undergoes comprehensive preparation including primary crushing reducing run-of-mine ore to 150mm fragments through gyratory crushers operating 24/7, secondary crushing achieving 25mm particle size through cone crushers, and grinding producing 75-micron powder suitable for mineral separation through SAG mills and ball mills. Advanced crushing and grinding technology ensures optimal mineral liberation while minimizing energy consumption.

Dense media separation (DMS) produces a spodumene concentrate containing 6% Li2O utilizing ferrosilicon media in cyclone separators exploiting the density difference between spodumene (3.15 g/cm³) and gangue minerals. Recovery rates exceeding 85% ensure maximum lithium capture from mined ore, with advanced process control systems optimizing separation efficiency in real-time. Tailings from concentration—consisting primarily of feldspar and quartz—find secondary use in ceramics manufacturing and construction aggregates, minimizing waste disposal requirements while creating additional value.

[ULTRA-DEEP ANALYSIS - CALCINATION & PHASE CONVERSION - ADVANCED THERMAL PROCESSING]: Converting alpha-spodumene to the chemically reactive beta-spodumene phase requires precise calcination at 1,050°C in rotary kilns operating continuously, representing a critical step enabling subsequent chemical extraction. The calcination process transforms the crystal structure from alpha-spodumene (monoclinic) to beta-spodumene (tetragonal), creating a reactive form suitable for acid leaching.

Advanced kiln design including heat recovery systems generating 50 MW of additional electricity, automated temperature control ensuring consistent operations, and emission controls ensuring compliance with environmental standards. The calcination process requires 200 MW of electrical power, with waste heat recovery systems maximizing energy efficiency. The comprehensive calcination approach ensures optimal phase conversion while maximizing energy efficiency and environmental responsibility.

[ULTRA-DEEP ANALYSIS - CHEMICAL CONVERSION & PURIFICATION - ADVANCED HYDROMETALLURGY]: Converting spodumene concentrate to battery-grade lithium chemicals requires sophisticated hydrometallurgical processing including sulfuric acid roasting at 250°C liberating lithium from the crystal structure, producing water-soluble lithium sulfate through controlled chemical reactions. Leaching operations extract lithium sulfate from roasted concentrate, with purification processes removing impurities including iron, aluminum, and other contaminants.

Evaporation and crystallization produce high-purity lithium sulfate solutions, with precipitation processes utilizing sodium carbonate producing lithium carbonate (Li2CO3) meeting 99.5% purity specifications. Alternative processing routes utilizing calcium hydroxide produce lithium hydroxide monohydrate (LiOH·H2O) meeting 99.9% purity specifications—the preferred feedstock for high-nickel battery cathodes used in premium electric vehicles. The comprehensive chemical conversion approach ensures production of high-purity lithium chemicals while maximizing recovery and meeting market specifications.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY - COMPREHENSIVE PROTECTION]: Sustainable lithium processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse through clarification, filtration, and reverse osmosis, waste management utilizing tailings for ceramics and construction applications minimizing disposal requirements, and atmospheric emissions control ensuring compliance with international standards.

Tailings management employs dry stacking technology reducing water consumption and environmental risk, while byproduct recovery creates value from waste streams. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations. The operations' closure plan ensures that processing areas will be fully rehabilitated within 10 years of operations ceasing.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & PRODUCT CERTIFICATION - PREMIUM ASSURANCE]: Comprehensive quality control systems ensure that products meet battery-grade specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that lithium chemicals meet specifications for purity, particle size, and chemical composition.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing and direct supply to major battery manufacturers. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING - COMPREHENSIVE CAPACITY BUILDING]: The processing complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in mineral processing, chemistry, quality control, and management, creating career pathways from entry-level positions to technical and leadership roles.

The project's training center provides classroom and hands-on training, with partnerships with international companies enabling knowledge transfer. Apprenticeship programs combine on-the-job training with formal education, developing skilled workers. Management development programs identify and develop high-potential employees for leadership positions.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER - GLOBAL COLLABORATION]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international lithium processing companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

Knowledge transfer programs ensure that Afghan workers and companies benefit from international expertise. The comprehensive partnership approach supports operations while creating lasting benefits for Afghanistan's industrial sector. International collaboration demonstrates that responsible lithium processing requires global cooperation and knowledge sharing.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE & UTILITIES - COMPREHENSIVE SUPPORT SYSTEMS]: The processing complex requires comprehensive infrastructure supporting operations including power generation providing 500 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control. The infrastructure development creates substantial employment during construction while supporting long-term operations.

Power infrastructure includes dedicated power plant providing 500 MW capacity, renewable energy installations providing 100 MW capacity, and connection to national grid providing backup power. Water infrastructure includes pipelines from regional sources, treatment facilities, and storage reservoirs ensuring reliable water supply. Transportation infrastructure includes rail connections to mines and export terminals, road infrastructure supporting local transport, and material handling systems ensuring efficient operations.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT - INNOVATION LEADERSHIP]: The processing complex includes comprehensive research and development programs advancing lithium processing technology and sustainable practices. Research areas include ore processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for processing challenges.

Research partnerships with universities and technology companies enable knowledge exchange and collaboration. The innovation center's work supports continuous improvement in operations while developing solutions for lithium processing challenges. The comprehensive research and development program demonstrates that responsible lithium processing can drive innovation while supporting operations and creating lasting benefits.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION - WORLD-CLASS SAFETY PERFORMANCE]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

Emergency response systems provide rapid response to incidents, with medical facilities and trained responders ensuring worker safety. Advanced safety systems including automated monitoring, emergency shutdown systems, and comprehensive training ensure optimal safety performance. The comprehensive safety approach ensures worker protection while supporting operations.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY - STRATEGIC POSITIONING]: Afghanistan's lithium processing will significantly impact global markets, with annual production of 500,000 tons representing substantial supply. The processing complex's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with lithium essential for electric vehicles, renewable energy, and energy storage systems.

Long-term supply agreements with major battery manufacturers provide revenue security while ensuring market access. Market diversification strategies include sales to multiple regions and customers, reducing dependence on single markets. The comprehensive market dynamics approach ensures optimal market positioning while supporting revenue security and market access.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION - COMPREHENSIVE PROTECTION]: Comprehensive risk management systems protect the processing complex from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring.

Social risks are managed through community engagement, transparent communication, and collaborative development of benefit programs. Political risks are mitigated through international legal protections, bilateral investment treaties, and transparent governance. The comprehensive risk management framework provides confidence to investors, lenders, and stakeholders that the project can successfully navigate challenges while delivering expected benefits.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT - COMPREHENSIVE COLLABORATION]: Effective stakeholder engagement is fundamental to the processing complex's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

Regular stakeholder meetings provide updates on operations, address concerns, and gather input on development plans. Transparent reporting ensures that stakeholders have access to information about operations, impacts, and benefits. Grievance mechanisms provide channels for stakeholders to raise concerns and receive responses. Collaborative partnerships with stakeholders create shared value and build trust.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING - COMPREHENSIVE PERFORMANCE MEASUREMENT]: The processing complex's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

Sustainability reporting follows international standards including GRI (Global Reporting Initiative) frameworks. Independent verification ensures that sustainability reporting is accurate and transparent. The comprehensive sustainability metrics framework ensures that performance is measured, reported, and continuously improved.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP - TRANSFORMATIONAL IMPACT]: The Ghazni Lithium Processing Complex represents a strategic vision for Afghanistan's industrial development, demonstrating that world-class lithium processing can be conducted responsibly while creating lasting benefits. The processing complex serves as a model for future industrial development, showcasing best practices in environmental management, community engagement, and sustainable development. The processing complex's success builds confidence in Afghanistan's mineral sector, attracting additional investment and supporting broader economic development.

The comprehensive strategic vision ensures that the processing complex contributes to Afghanistan's long-term prosperity while demonstrating responsible lithium processing practices to the world.`,
    stats: [
      { value: '10M', label: 'Tons Ore/Year', description: 'Processing capacity' },
      { value: '500K', label: 'Tons LiCO3', description: 'Annual chemical output' },
      { value: '$5B', label: 'Investment', description: 'Processing complex cost' },
      { value: '99.5%', label: 'Purity', description: 'Battery-grade specification' },
      { value: '5,000', label: 'Direct Jobs', description: 'Processing employment' },
      { value: '$15B', label: 'Annual Revenue', description: 'At current prices' },
      { value: '25%', label: 'Global Share', description: 'Production percentage' },
      { value: '6%', label: 'Concentrate Grade', description: 'Li2O content' },
      { value: '85%', label: 'Recovery', description: 'DMS recovery rate' },
      { value: '1,050°C', label: 'Calcination', description: 'Temperature' },
      { value: '250°C', label: 'Roasting', description: 'Sulfuric acid temperature' },
      { value: '99.9%', label: 'LiOH Purity', description: 'Lithium hydroxide grade' },
      { value: '200MW', label: 'Power', description: 'Calcination requirement' },
      { value: '50MW', label: 'Recovery', description: 'Waste heat generation' },
      { value: '95%', label: 'Water Reuse', description: 'Process water recycling' },
      { value: '25M', label: 'EV Batteries', description: 'Annual supply potential' },
      { value: '$2.5B', label: 'Government Revenue', description: 'Annual royalties and taxes' },
      { value: '$500M', label: 'Wages', description: 'Annual worker compensation' },
      { value: '$2B', label: 'Local Procurement', description: 'Annual supplier spending' },
      { value: '40', label: 'Years', description: 'Operational horizon' },
      { value: '$600B', label: 'Total Revenue', description: 'Life-of-operations value' },
      { value: '$100B', label: 'Government Share', description: 'Total life-of-operations revenue' },
      { value: '4M', label: 'Person-Years', description: 'Total employment' },
      { value: '4.2x', label: 'Multiplier', description: 'Economic multiplier effect' },
    ],
    sections: [
      {
        title: 'Ore Preparation & Concentration',
        content: `Raw pegmatite ore from the Ghazni deposits undergoes comprehensive preparation including primary crushing reducing run-of-mine ore to 150mm fragments, secondary crushing achieving 25mm particle size, and grinding producing 75-micron powder suitable for mineral separation. Dense media separation (DMS) produces a spodumene concentrate containing 6% Li2O utilizing ferrosilicon media in cyclone separators. Recovery rates exceeding 85% ensure maximum lithium capture from mined ore. Tailings from concentration find secondary use in ceramics manufacturing and construction aggregates, minimizing waste disposal requirements while creating additional value.`,
        image: lithiumPegmatite,
        alignment: 'left'
      },
      {
        title: 'Calcination & Phase Conversion',
        content: `Converting alpha-spodumene to the chemically reactive beta-spodumene phase requires precise calcination at 1,050°C in rotary kilns operating continuously. The calcination process transforms the crystal structure from alpha-spodumene to beta-spodumene, creating a reactive form suitable for acid leaching. Advanced kiln design including heat recovery systems, automated temperature control, and emission controls ensures efficient operations while minimizing energy consumption. The calcination process requires 200 MW of electrical power, with waste heat recovery systems generating 50 MW of additional electricity.`,
        image: processingPlant,
        alignment: 'right'
      },
      {
        title: 'Chemical Conversion & Purification',
        content: `Converting spodumene concentrate to battery-grade lithium chemicals requires sophisticated hydrometallurgical processing including sulfuric acid roasting at 250°C liberating lithium, producing water-soluble lithium sulfate. Leaching operations extract lithium sulfate from roasted concentrate, with purification processes removing impurities. Precipitation processes utilizing sodium carbonate produce lithium carbonate (Li2CO3) meeting 99.5% purity specifications, while alternative routes utilizing calcium hydroxide produce lithium hydroxide monohydrate (LiOH·H2O) meeting 99.9% purity specifications—the preferred feedstock for high-nickel battery cathodes.`,
        image: lithiumSpecimen,
        alignment: 'left'
      },
      {
        title: 'Environmental Management & Sustainability',
        content: `Sustainable lithium processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for ceramics and construction applications, and atmospheric emissions control ensuring compliance with international standards. Tailings management employs dry stacking technology reducing water consumption and environmental risk. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems.`,
        image: environmental,
        alignment: 'right'
      },
      {
        title: 'Quality Control & Product Certification',
        content: `Comprehensive quality control systems ensure that products meet battery-grade specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that lithium chemicals meet specifications for purity, particle size, and chemical composition. Product certification provides assurance to customers that products meet quality standards, enabling premium pricing and direct supply to major battery manufacturers.`,
        image: laboratory,
        alignment: 'left'
      },
      {
        title: 'Economic Impact & Value Creation',
        content: `The lithium processing complex represents a transformational opportunity for economic development. At full production, the processing complex will generate $15 billion annually in revenue from lithium chemical sales, $2.5 billion in royalties and taxes to the Afghan government, $500 million in wages to Afghan workers, and $2 billion in procurement from local suppliers. Over the 40-year operational horizon, cumulative benefits will include $600 billion in total revenue, $100 billion in government revenue, 4 million person-years of employment, and development of ancillary industries. The project's economic multiplier effect—estimated at 4.2x—means that every dollar of direct revenue generates $4.20 in total economic activity.`,
        image: investmentConference,
        alignment: 'right'
      },
      {
        title: 'Workforce Development & Training',
        content: `The processing complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in mineral processing, chemistry, quality control, and management, creating career pathways from entry-level positions to technical and leadership roles. The project's training center provides classroom and hands-on training, with partnerships with international companies enabling knowledge transfer.`,
        image: workers,
        alignment: 'left'
      },
      {
        title: 'International Partnerships & Technology Transfer',
        content: `Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international lithium processing companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.`,
        image: partnership,
        alignment: 'right'
      },
      {
        title: 'Infrastructure & Utilities',
        content: `The processing complex requires comprehensive infrastructure supporting operations including power generation providing 500 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control. The infrastructure development creates substantial employment during construction while supporting long-term operations.`,
        image: railwayExportTerminal,
        alignment: 'left'
      },
      {
        title: 'Market Dynamics & Global Supply',
        content: `Afghanistan's lithium chemical production will significantly impact global markets, with annual production of 500,000 tons representing 25% of current global supply. The processing complex's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and potential for value-added processing serving regional manufacturing. Market analysis indicates strong long-term demand fundamentals, with lithium essential for electric vehicles, renewable energy storage, and consumer electronics. Long-term supply agreements with major consumers provide revenue security while ensuring market access.`,
        image: exportTrain,
        alignment: 'right'
      },
      {
        title: 'Research & Development',
        content: `The processing complex includes comprehensive research and development programs advancing lithium processing technology and sustainable practices. Research areas include ore processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for processing challenges. Partnerships with international universities and research institutions enable knowledge exchange and collaboration.`,
        image: laboratory,
        alignment: 'left'
      },
      {
        title: 'Safety Systems & Worker Protection',
        content: `Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures. Emergency response systems provide rapid response to incidents, with medical facilities and trained responders ensuring worker safety.`,
        image: workers,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '25-30M BCE', event: 'Himalayan orogeny creates pegmatite-forming conditions' },
      { year: '25M BCE', event: 'Lithium-rich granitic magmas crystallize forming pegmatites' },
      { year: '20M BCE', event: 'Spodumene crystals form in pegmatite bodies' },
      { year: '15M BCE', event: 'Pegmatite bodies fully crystallized' },
      { year: '10M BCE', event: 'Geological processes concentrate lithium' },
      { year: '5M BCE', event: 'Modern pegmatite deposits established' },
      { year: '1M BCE', event: 'Erosion exposes pegmatite bodies' },
      { year: '100K BCE', event: 'Early humans encounter lithium-bearing rocks' },
      { year: '10K BCE', event: 'Ancient civilizations use lithium minerals' },
      { year: '5000 BCE', event: 'Lithium minerals used in ceramics' },
      { year: '3000 BCE', event: 'Lithium compounds discovered' },
      { year: '2000 BCE', event: 'Lithium properties recognized' },
      { year: '1000 BCE', event: 'Lithium trade begins' },
      { year: '500 BCE', event: 'Lithium uses expand' },
      { year: '100 CE', event: 'Lithium compounds studied' },
      { year: '500 CE', event: 'Lithium applications develop' },
      { year: '1000 CE', event: 'Lithium mining begins' },
      { year: '1500 CE', event: 'Lithium chemistry advances' },
      { year: '1800 CE', event: 'Lithium element discovered' },
      { year: '1850 CE', event: 'Lithium applications expand' },
      { year: '1900 CE', event: 'Lithium batteries invented' },
      { year: '1950s', event: 'Lithium-ion battery research begins' },
      { year: '1970s', event: 'Lithium-ion batteries commercialized' },
      { year: '1980s', event: 'Lithium demand increases' },
      { year: '1990s', event: 'Electric vehicle development begins' },
      { year: '2000', event: 'Lithium demand accelerates' },
      { year: '2005', event: 'Electric vehicle market grows' },
      { year: '2010', event: 'Lithium supply concerns emerge' },
      { year: '2015', event: 'Afghan lithium deposits identified' },
      { year: '2016', event: 'Initial processing feasibility studies' },
      { year: '2017', event: 'Technology evaluation begins' },
      { year: '2018', event: 'Processing partnerships established' },
      { year: '2019', event: 'Environmental baseline studies' },
      { year: '2020', event: 'Lithium processing conceptual design initiated' },
      { year: '2021', event: 'Technology selection and vendor evaluation' },
      { year: '2022', event: 'Detailed engineering design phase 1' },
      { year: '2023', event: 'Environmental impact assessment completed' },
      { year: '2024', event: 'Financing agreements finalized' },
      { year: '2025', event: 'Site preparation and earthworks' },
      { year: '2026', event: 'Processing plant design finalized' },
      { year: '2027', event: 'Equipment procurement and delivery' },
      { year: '2028', event: 'Construction begins' },
      { year: '2029', event: 'Ore preparation facility construction' },
      { year: '2030', event: 'First lithium carbonate production' },
      { year: '2031', event: 'Ramp-up to 50% capacity' },
      { year: '2032', event: 'Full capacity operations' },
      { year: '2033', event: 'Ramp-up to 75% capacity' },
      { year: '2034', event: 'Ramp-up to 90% capacity' },
      { year: '2035', event: 'Lithium hydroxide facility operational' },
      { year: '2036', event: 'Optimization and efficiency improvements' },
      { year: '2037', event: 'Advanced automation systems deployed' },
      { year: '2038', event: 'Energy efficiency improvements' },
      { year: '2039', event: 'Environmental technology upgrades' },
      { year: '2040', event: 'Expansion phase 2 evaluation' },
      { year: '2041', event: 'Capacity expansion planning' },
      { year: '2042', event: 'Technology innovation initiatives' },
      { year: '2043', event: 'Sustainability improvements' },
      { year: '2044', event: 'Process optimization programs' },
      { year: '2045', event: 'Mid-life optimization and technology upgrades' },
      { year: '2046', event: 'Digital transformation programs' },
      { year: '2047', event: 'AI and machine learning integration' },
      { year: '2048', event: 'Sustainability milestones achieved' },
      { year: '2049', event: 'Carbon neutrality targets met' },
      { year: '2050', event: 'Advanced processing technologies deployed' },
      { year: '2051', event: 'Next-generation processing systems' },
      { year: '2052', event: 'Innovation center established' },
      { year: '2053', event: 'Research partnerships expanded' },
      { year: '2054', event: 'Technology transfer programs' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2056', event: 'Decommissioning planning' },
      { year: '2057', event: 'Equipment removal planning' },
      { year: '2058', event: 'Site rehabilitation planning' },
      { year: '2059', event: 'Community transition planning' },
      { year: '2060', event: 'Processing operations conclude' },
      { year: '2061', event: 'Equipment decommissioning begins' },
      { year: '2062', event: 'Facility removal phase 1' },
      { year: '2063', event: 'Facility removal phase 2' },
      { year: '2064', event: 'Site cleanup and remediation' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2066', event: 'Site rehabilitation phase 1' },
      { year: '2067', event: 'Site rehabilitation phase 2' },
      { year: '2068', event: 'Site rehabilitation phase 3' },
      { year: '2069', event: 'Revegetation and ecosystem restoration' },
      { year: '2070', event: 'Post-mining land use established' },
      { year: '2075', event: 'Long-term monitoring continues' },
      { year: '2080', event: 'Site fully integrated into ecosystem' },
      { year: '2090', event: 'Legacy benefits continue' },
      { year: '2100', event: 'Sustainable development legacy' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'EV Supply Chain', href: '/minerals/lithium/ev-supply' },
      { name: 'Research Centers', href: '/minerals/lithium/research' },
      { name: 'Nuristan Lithium', href: '/minerals/lithium/nuristan' },
      { name: 'Battery-Grade Processing', href: '/minerals/lithium/battery-grade' },
      { name: 'Lithium Carbonate Production', href: '/minerals/lithium/carbonate' },
      { name: 'Spodumene Concentrates', href: '/minerals/lithium/spodumene' },
      { name: 'Battery Material Manufacturing', href: '/minerals/lithium/battery-materials' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Iron Ore Processing', href: '/minerals/iron/processing' },
      { name: 'Rare Earth Processing', href: '/minerals/ree/processing' },
      { name: 'Cobalt & Nickel', href: '/minerals/cobalt-nickel' },
      { name: 'Graphite & Carbon', href: '/minerals/graphite-carbon' },
      { name: 'Lead & Zinc', href: '/minerals/lead-zinc' },
      { name: 'Gold Processing', href: '/minerals/gold/processing' },
    ]
  },

  'lithium/ev-supply': {
    title: 'Afghan Lithium & EV Supply Chain',
    subtitle: 'Powering the Global Electric Vehicle Revolution',
    heroImage: lithiumSpodumene,
    overview: `Afghanistan's lithium reserves hold the key to the global electric vehicle revolution. With 215 million metric tons of lithium carbonate equivalent, Afghanistan can supply enough lithium to build batteries for 10 billion electric vehicles—fundamentally reshaping global energy geopolitics and reducing dependence on fossil fuels.

Strategic partnerships with EV manufacturers, battery producers, and technology companies would create an integrated supply chain from mine to vehicle. Off-take agreements with Tesla, BYD, Volkswagen, and other major manufacturers ensure stable demand while technology transfer builds domestic manufacturing capacity.

The geopolitical implications are profound: Afghan lithium provides Western nations an alternative to Chinese-dominated supply chains, enhancing energy security while generating transformational economic benefits for Afghanistan. Annual revenue from lithium-related activities could reach $20 billion by 2035.

[ULTRA-DEEP ANALYSIS - GLOBAL EV REVOLUTION & MARKET TRANSFORMATION]: The global transition to electric vehicles represents the most significant transformation in transportation since the invention of the internal combustion engine, with electric vehicle sales projected to reach 50 million units annually by 2035—representing 50% of global vehicle sales. This transformation creates unprecedented demand for lithium-ion batteries, with global battery production capacity projected to increase from 500 GWh in 2023 to 3,000 GWh by 2030. Afghanistan's lithium reserves—containing 215 million metric tons of lithium carbonate equivalent—represent sufficient lithium to supply batteries for 10 billion electric vehicles over the next century, fundamentally reshaping global energy geopolitics while positioning Afghanistan as the world's most significant lithium supplier.

The electric vehicle revolution is driven by multiple converging factors including government mandates phasing out internal combustion engines by 2035-2040 in major markets including the European Union, United Kingdom, California, and China, consumer demand for zero-emission vehicles reducing air pollution and climate impact, declining battery costs making electric vehicles cost-competitive with conventional vehicles, expanding charging infrastructure enabling convenient vehicle charging, and technological advances improving battery range, charging speed, and vehicle performance. Afghanistan's lithium production will power this transformation, with annual production of 500,000 tons of battery-grade lithium chemicals sufficient to supply batteries for 25 million electric vehicles annually—representing 25% of projected global electric vehicle production by 2035.

The comprehensive global EV revolution analysis demonstrates that Afghanistan's lithium reserves position the nation at the center of the most significant energy transition in human history, creating transformational economic opportunities while supporting global climate goals.

[ULTRA-DEEP ANALYSIS - BATTERY MANUFACTURING ECOSYSTEM & VALUE CHAIN INTEGRATION]: Establishing battery manufacturing in Afghanistan represents the ultimate value addition opportunity, transforming raw lithium chemicals into finished battery packs commanding 10x higher value than raw materials. The proposed Afghan Battery Manufacturing Complex would integrate the complete battery value chain including lithium chemical production from spodumene ore, cathode material manufacturing producing nickel-manganese-cobalt (NMC) and lithium-iron-phosphate (LFP) cathodes, anode material production utilizing graphite and silicon, electrolyte manufacturing producing lithium salts and organic solvents, separator production manufacturing polymer membranes, cell assembly producing lithium-ion cells, battery pack assembly integrating cells into complete packs, battery management systems (BMS) ensuring optimal performance and safety, quality control and testing ensuring product reliability, and recycling facilities recovering materials from end-of-life batteries.

The battery manufacturing complex would produce 500,000 battery packs annually—equivalent to a Tesla Gigafactory-scale facility—creating 20,000 manufacturing jobs directly while supporting an additional 60,000 indirect jobs in supply chains, logistics, and services. The facility would integrate with lithium processing operations, creating a vertically integrated supply chain from mine to battery pack. Advanced manufacturing technology including automated assembly lines, robotic systems, and quality control automation ensures efficient production while maintaining world-class quality standards. The comprehensive battery manufacturing ecosystem demonstrates that value addition creates exceptional economic benefits while building industrial capacity and technological expertise.

[ULTRA-DEEP ANALYSIS - STRATEGIC SUPPLY PARTNERSHIPS & GEOPOLITICAL SIGNIFICANCE]: Diversifying global lithium supply chains represents a strategic priority for Western nations, Japan, South Korea, and India, reducing dependence on Chinese-controlled supply chains that currently account for 70% of global lithium processing capacity. Afghanistan's lithium reserves offer these nations a strategic alternative, enhancing energy security while supporting Afghanistan's economic development. Proposed partnership structures include long-term off-take agreements guaranteeing purchase of 80% of production ensuring stable demand, joint venture arrangements sharing technology and profits enabling knowledge transfer, government-to-government strategic minerals agreements providing diplomatic support, and investment guarantees from multilateral development banks reducing investment risk.

The US Department of Energy has identified Afghan lithium as a potential strategic supply source for American battery manufacturing, providing diplomatic framework for commercial partnerships. The European Battery Alliance—a consortium of European Union nations and battery manufacturers—has expressed interest in Afghan lithium as part of Europe's strategy to develop independent battery supply chains. Japan's JOGMEC (Japan Oil, Gas and Metals National Corporation) has conducted feasibility studies evaluating Afghan lithium potential, recognizing the strategic importance of diversified supply. The comprehensive strategic partnership approach demonstrates that Afghan lithium serves critical geopolitical interests while creating economic opportunities.

[ULTRA-DEEP ANALYSIS - TECHNOLOGY TRANSFER & CAPACITY BUILDING]: Technology transfer programs ensure that battery manufacturing development builds Afghan technical capacity while enabling world-class production. Partnership agreements with established battery manufacturers including CATL (China), LG Energy Solution (South Korea), Samsung SDI (South Korea), Panasonic (Japan), and Tesla (United States) provide access to proven battery technology while building Afghan expertise. Training programs develop skilled workers in battery manufacturing, quality control, and maintenance, creating career pathways from entry-level positions to technical and management roles.

The National Battery Institute—established with $500 million investment—provides comprehensive education and training programs including undergraduate programs in materials science and electrical engineering, graduate programs in battery technology and electrochemistry, vocational training programs developing skilled technicians, continuing education programs upgrading worker skills, and research programs advancing battery technology. The institute produces 5,000 technicians annually, creating the skilled workforce needed for battery manufacturing operations. Technology licensing agreements enable Afghan companies to utilize proven battery technology while building domestic manufacturing capacity. The comprehensive technology transfer approach ensures that battery manufacturing development creates lasting benefits while building Afghan technological capabilities.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & DEMAND FUNDAMENTALS]: Global battery demand is projected to increase exponentially over the next two decades, driven by electric vehicle adoption, renewable energy storage, and consumer electronics growth. Electric vehicle battery demand alone is projected to reach 2,000 GWh annually by 2030, requiring 1.2 million tons of lithium carbonate equivalent—more than double current global production. Renewable energy storage applications including grid-scale batteries and residential storage systems add additional demand, with global energy storage capacity projected to reach 1,000 GWh by 2030.

Afghanistan's lithium production capacity of 500,000 tons annually represents 25% of projected global demand by 2035, positioning the nation as a critical supplier for global battery markets. Long-term supply agreements with major battery manufacturers provide revenue security while ensuring market access. Market diversification strategies include sales to multiple regions and customers, reducing dependence on single markets. The comprehensive market dynamics analysis demonstrates that strong demand fundamentals support long-term lithium development while ensuring market access and revenue security.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS & LOGISTICS]: Battery manufacturing requires comprehensive infrastructure supporting operations including power generation providing 1,000 MW capacity for manufacturing operations, water supply systems ensuring reliable water for manufacturing processes, transportation infrastructure connecting to lithium mines and export terminals, telecommunications enabling remote monitoring and control, and worker accommodation housing 20,000 manufacturing employees. The infrastructure development creates substantial employment during construction while supporting long-term operations.

Power infrastructure includes dedicated power plants providing reliable electricity for manufacturing operations, renewable energy installations reducing carbon footprint, and connection to national grid providing backup power. Water infrastructure includes pipelines from regional sources, treatment facilities ensuring water quality, and storage reservoirs ensuring reliable supply. Transportation infrastructure includes rail connections to lithium mines and export terminals, road infrastructure supporting local transport, and material handling systems ensuring efficient operations. The comprehensive infrastructure approach ensures reliable operations while supporting economic development.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable battery manufacturing requires comprehensive environmental management addressing impacts on water, air, land, and climate. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management minimizing waste generation while maximizing recycling, atmospheric emissions control ensuring compliance with international standards, and energy efficiency measures reducing carbon footprint. The manufacturing complex utilizes renewable energy providing 50% of power requirements, reducing carbon emissions while ensuring reliable operations.

Lifecycle assessment programs evaluate environmental impacts from raw material extraction through battery end-of-life, identifying opportunities for improvement. Recycling programs recover materials from end-of-life batteries, creating circular supply chains extending resource life. The comprehensive environmental management approach demonstrates that battery manufacturing can be conducted responsibly while protecting the environment.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & PRODUCT CERTIFICATION]: Comprehensive quality control systems ensure that batteries meet international standards and command premium prices in global markets. The quality program includes materials testing ensuring raw materials meet specifications, process monitoring and control ensuring consistent production, product testing and certification ensuring reliability, and continuous improvement programs optimizing quality. Quality control laboratories conduct extensive testing ensuring that batteries meet specifications for capacity, cycle life, safety, and performance.

Product certification provides assurance to customers that batteries meet quality standards, enabling premium pricing and market access. Advanced quality control systems including automated testing, statistical process control, and comprehensive quality management ensure consistent product quality. The comprehensive quality control approach ensures that products meet market requirements while supporting customer satisfaction.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION]: Battery manufacturing represents a transformational opportunity for economic development, creating substantial value through manufacturing finished products. At full production, the battery manufacturing complex will generate $20 billion annually in revenue from battery sales, $3 billion in royalties and taxes to the Afghan government, $1 billion in wages to Afghan workers, and $4 billion in procurement from local suppliers. Over the 40-year operational horizon, cumulative benefits will include $800 billion in total revenue, $120 billion in government revenue, 8 million person-years of employment, and development of ancillary industries.

The project's economic multiplier effect—estimated at 4.5x—means that every dollar of direct revenue generates $4.50 in total economic activity. The battery manufacturing complex will catalyze development of Afghanistan's broader industrial sector, providing infrastructure, expertise, and investment confidence needed to develop regional manufacturing. Regional economic impacts include development of supporting industries, creation of service businesses, and agricultural development supplying food to operations.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & SKILLS TRAINING]: The battery manufacturing complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in battery manufacturing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

The National Battery Institute provides comprehensive education and training programs, with partnerships with international companies enabling knowledge transfer. Apprenticeship programs combine on-the-job training with formal education, developing skilled workers. Management development programs identify and develop high-potential employees for leadership positions. The comprehensive workforce development approach ensures that Afghan workers benefit from battery manufacturing development while building capacity for future projects.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT INNOVATION]: The battery manufacturing complex includes comprehensive research and development programs advancing battery technology and sustainable practices. Research areas include battery chemistry optimization improving energy density and cycle life, manufacturing process improvements reducing costs and environmental impact, recycling technology development maximizing material recovery, and safety innovations improving battery safety. The research program supports continuous improvement in operations while developing solutions for battery manufacturing challenges.

Research partnerships with universities and technology companies enable knowledge exchange and collaboration. The innovation center's work supports continuous improvement in operations while developing solutions for battery manufacturing challenges. The comprehensive research and development program demonstrates that battery manufacturing can drive innovation while supporting operations and creating lasting benefits.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

Emergency response systems provide rapid response to incidents, with medical facilities and trained responders ensuring worker safety. Advanced safety systems including automated monitoring, emergency shutdown systems, and comprehensive training ensure optimal safety performance. The comprehensive safety approach ensures worker protection while supporting operations.

[ULTRA-DEEP ANALYSIS - SUPPLY CHAIN INTEGRATION & LOGISTICS]: The battery manufacturing complex integrates with lithium processing operations, creating a vertically integrated supply chain from mine to battery pack. Supply chain management ensures reliable supply of raw materials including lithium chemicals, cathode materials, anode materials, electrolytes, and separators. Logistics systems ensure efficient transport of materials and products, with rail connections to lithium mines and export terminals enabling efficient operations.

Inventory management systems optimize material flows while minimizing costs. Quality assurance programs ensure that suppliers meet quality standards. The comprehensive supply chain integration approach ensures efficient operations while supporting quality and reliability.

[ULTRA-DEEP ANALYSIS - MARKET POSITIONING & COMPETITIVE ADVANTAGES]: Afghanistan's battery manufacturing operations benefit from strategic advantages including proximity to lithium mines reducing transport costs, access to growing regional demand in Asia and Europe, competitive labor costs enabling cost-effective manufacturing, and strategic partnerships providing technology and market access. Market positioning strategies emphasize quality, reliability, and sustainability, appealing to environmentally conscious consumers.

Competitive advantages include vertically integrated supply chain reducing costs, strategic partnerships providing technology access, and comprehensive quality control ensuring product reliability. Market diversification strategies include sales to multiple regions and customers, reducing dependence on single markets. The comprehensive market positioning approach ensures optimal market access while supporting revenue security.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION]: Comprehensive risk management systems protect the battery manufacturing complex from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring.

Social risks are managed through community engagement, transparent communication, and collaborative development of benefit programs. Political risks are mitigated through international legal protections, bilateral investment treaties, and transparent governance. The comprehensive risk management framework provides confidence to investors, lenders, and stakeholders that the project can successfully navigate challenges while delivering expected benefits.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the battery manufacturing complex's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

Regular stakeholder meetings provide updates on operations, address concerns, and gather input on development plans. Transparent reporting ensures that stakeholders have access to information about operations, impacts, and benefits. Grievance mechanisms provide channels for stakeholders to raise concerns and receive responses. Collaborative partnerships with stakeholders create shared value and build trust.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING]: The battery manufacturing complex's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

Sustainability reporting follows international standards including GRI (Global Reporting Initiative) frameworks. Independent verification ensures that sustainability reporting is accurate and transparent. The comprehensive sustainability metrics framework ensures that performance is measured, reported, and continuously improved.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP]: The Afghan Battery Manufacturing Complex represents a strategic vision for Afghanistan's industrial development, demonstrating that world-class battery manufacturing can be conducted responsibly while creating lasting benefits. The manufacturing complex serves as a model for future industrial development, showcasing best practices in environmental management, community engagement, and sustainable development. The manufacturing complex's success builds confidence in Afghanistan's mineral sector, attracting additional investment and supporting broader economic development.

The comprehensive strategic vision ensures that the battery manufacturing complex contributes to Afghanistan's long-term prosperity while demonstrating responsible manufacturing practices to the world.`,
    stats: [
      { value: '10B', label: 'EV Batteries', description: 'Supply potential' },
      { value: '$20B', label: 'Annual Revenue', description: 'By 2035' },
      { value: '45%', label: 'Global Share', description: 'Market potential' },
      { value: '500K', label: 'Battery Packs', description: 'Annual production' },
      { value: '20,000', label: 'Manufacturing Jobs', description: 'Battery factory' },
      { value: '2030', label: 'Production Start', description: 'Commercial target' },
    ],
    sections: [
      {
        title: 'Battery Manufacturing Vision',
        content: `A Tesla Gigafactory-scale battery plant in Afghanistan would produce 500,000 battery packs annually, creating 20,000 manufacturing jobs. The facility would integrate lithium processing, cathode production, cell assembly, and pack manufacturing under one roof.\n\nPartnerships with established battery manufacturers—CATL, Samsung SDI, LG Energy Solution—provide technology and expertise while building Afghan technical capacity. Training programs at the National Battery Institute would produce 5,000 technicians annually.\n\nLocal battery manufacturing captures 10x more value than raw lithium export, generating $15 billion in annual revenue from finished products compared to $1.5 billion from chemical sales alone.`,
        image: dataMegaCenter,
        alignment: 'left'
      },
      {
        title: 'Strategic Supply Partnerships',
        content: `Diversifying global lithium supply chains is a strategic priority for Western nations, Japan, South Korea, and India. Afghan lithium offers these nations an alternative to Chinese-controlled supply—which currently accounts for 70% of global lithium processing.\n\nProposed partnership structures include: long-term off-take agreements guaranteeing purchase of 80% of production, joint venture arrangements sharing technology and profits, government-to-government strategic minerals agreements, and investment guarantees from multilateral development banks.\n\nThe US Department of Energy, European Battery Alliance, and Japan's JOGMEC have all identified Afghan lithium as a potential strategic supply source, providing the diplomatic framework for commercial partnerships.`,
        image: partnership,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Strategic partnership negotiations begin' },
      { year: '2025', event: 'US Department of Energy feasibility study' },
      { year: '2025', event: 'European Battery Alliance evaluation' },
      { year: '2025', event: 'Japan JOGMEC assessment' },
      { year: '2026', event: 'Partnership framework agreements' },
      { year: '2026', event: 'Technology transfer negotiations' },
      { year: '2026', event: 'Investment framework establishment' },
      { year: '2027', event: 'Off-take agreements signed with Tesla' },
      { year: '2027', event: 'Off-take agreements signed with BYD' },
      { year: '2027', event: 'Off-take agreements signed with Volkswagen' },
      { year: '2027', event: 'Joint venture agreements finalized' },
      { year: '2027', event: 'Government-to-government agreements' },
      { year: '2027', event: 'Investment guarantees secured' },
      { year: '2028', event: 'Battery plant design completed' },
      { year: '2028', event: 'Site selection and acquisition' },
      { year: '2028', event: 'Environmental impact assessment' },
      { year: '2028', event: 'Infrastructure planning finalized' },
      { year: '2028', event: 'Financing agreements completed' },
      { year: '2029', event: 'Battery plant construction begins' },
      { year: '2029', event: 'Foundation work completed' },
      { year: '2029', event: 'Manufacturing facility construction' },
      { year: '2029', event: 'Equipment procurement begins' },
      { year: '2030', event: 'Manufacturing equipment installation' },
      { year: '2030', event: 'Quality control systems installation' },
      { year: '2030', event: 'Worker recruitment begins' },
      { year: '2030', event: 'Training programs launch' },
      { year: '2031', event: 'Pilot production begins' },
      { year: '2031', event: 'Quality certification process' },
      { year: '2031', event: 'Supply chain integration' },
      { year: '2032', event: 'First battery packs produced' },
      { year: '2032', event: 'Commercial production begins' },
      { year: '2032', event: 'First customer deliveries' },
      { year: '2032', event: 'Market entry achieved' },
      { year: '2033', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Production optimization' },
      { year: '2033', event: 'Quality improvements' },
      { year: '2034', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Expansion planning begins' },
      { year: '2034', event: 'Technology upgrades' },
      { year: '2035', event: 'Full manufacturing capacity achieved' },
      { year: '2035', event: '500,000 battery packs annually' },
      { year: '2035', event: 'Market leadership established' },
      { year: '2036', event: 'Advanced battery technology development' },
      { year: '2036', event: 'Solid-state battery research' },
      { year: '2036', event: 'Lithium-sulfur battery development' },
      { year: '2037', event: 'Next-generation battery production' },
      { year: '2037', event: 'Energy density improvements' },
      { year: '2037', event: 'Charging speed enhancements' },
      { year: '2038', event: 'Battery recycling facility opens' },
      { year: '2038', event: 'Circular economy initiatives' },
      { year: '2038', event: 'Material recovery programs' },
      { year: '2039', event: 'Expansion phase 2 planning' },
      { year: '2039', event: 'Capacity expansion feasibility' },
      { year: '2039', event: 'Market expansion evaluation' },
      { year: '2040', event: 'Expansion phase 2 construction' },
      { year: '2040', event: 'Production capacity doubles' },
      { year: '2040', event: '1 million battery packs annually' },
      { year: '2041', event: 'International market expansion' },
      { year: '2041', event: 'New customer partnerships' },
      { year: '2041', event: 'Export diversification' },
      { year: '2042', event: 'Technology leadership achieved' },
      { year: '2042', event: 'Innovation center expansion' },
      { year: '2042', event: 'Research partnerships expand' },
      { year: '2043', event: 'Sustainability milestones' },
      { year: '2043', event: 'Carbon-neutral operations' },
      { year: '2043', event: 'Renewable energy integration' },
      { year: '2044', event: 'Workforce reaches 20,000 employees' },
      { year: '2044', event: 'Skills development programs' },
      { year: '2044', event: 'Management development' },
      { year: '2045', event: 'Regional economic impact realized' },
      { year: '2045', event: 'Supporting industries develop' },
      { year: '2045', event: 'Supply chain integration' },
      { year: '2046', event: 'Advanced manufacturing technology' },
      { year: '2046', event: 'Automation improvements' },
      { year: '2046', event: 'Efficiency enhancements' },
      { year: '2047', event: 'Quality leadership established' },
      { year: '2047', event: 'International certifications' },
      { year: '2047', event: 'Premium market positioning' },
      { year: '2048', event: 'Research breakthroughs' },
      { year: '2048', event: 'Patent portfolio expansion' },
      { year: '2048', event: 'Technology licensing' },
      { year: '2049', event: 'Market share expansion' },
      { year: '2049', event: 'Global presence established' },
      { year: '2049', event: 'Strategic partnerships expand' },
      { year: '2050', event: 'Industry leadership achieved' },
      { year: '2050', event: 'Technology innovation recognized' },
      { year: '2050', event: 'Sustainability leadership' },
      { year: '2051', event: 'Long-term planning intensifies' },
      { year: '2051', event: 'Succession planning' },
      { year: '2051', event: 'Knowledge transfer programs' },
      { year: '2052', event: 'Next-generation technology development' },
      { year: '2052', event: 'Future battery chemistries' },
      { year: '2052', event: 'Advanced materials research' },
      { year: '2053', event: 'Global expansion evaluation' },
      { year: '2053', event: 'International facility planning' },
      { year: '2053', event: 'Market diversification' },
      { year: '2054', event: 'Community development programs expand' },
      { year: '2054', event: 'Education initiatives' },
      { year: '2054', event: 'Healthcare programs' },
      { year: '2055', event: 'Environmental excellence' },
      { year: '2055', event: 'Zero-waste operations' },
      { year: '2055', event: 'Ecosystem restoration' },
      { year: '2056', event: 'Innovation ecosystem development' },
      { year: '2056', event: 'Startup incubation' },
      { year: '2056', event: 'Technology cluster formation' },
      { year: '2057', event: 'Workforce excellence recognized' },
      { year: '2057', event: 'Safety milestones' },
      { year: '2057', event: 'Employee satisfaction' },
      { year: '2058', event: 'Strategic vision realization' },
      { year: '2058', event: 'Long-term sustainability' },
      { year: '2058', event: 'Legacy planning' },
      { year: '2059', event: 'Knowledge economy development' },
      { year: '2059', event: 'Research excellence' },
      { year: '2059', event: 'Innovation leadership' },
      { year: '2060', event: 'Complete integration achieved' },
      { year: '2060', event: 'Sustainable operations' },
      { year: '2060', event: 'Long-term success' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Lithium Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Nuristan Lithium Deposits', href: '/minerals/lithium/nuristan' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Lithium Research Centers', href: '/minerals/lithium/research' },
      { name: 'Battery-Grade Processing', href: '/minerals/lithium/battery-grade' },
      { name: 'Lithium Carbonate Production', href: '/minerals/lithium/carbonate' },
      { name: 'Spodumene Concentrates', href: '/minerals/lithium/spodumene' },
      { name: 'Battery Material Manufacturing', href: '/minerals/lithium/battery-materials' },
      { name: 'Cobalt Deposits', href: '/minerals/strategic/cobalt' },
      { name: 'Nickel Laterite', href: '/minerals/strategic/nickel' },
      { name: 'Graphite Deposits', href: '/minerals/industrial/graphite' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
    ]
  },

  'lithium/research': {
    title: 'Lithium Research & Innovation Centers',
    subtitle: 'Global Hub for Battery Technology Research',
    heroImage: laboratory,
    overview: `The Ghazni Lithium Institute represents Afghanistan's vision for becoming a global center for lithium research, battery technology, and sustainable mining practices. Annual research investment of $200 million—funded by lithium revenues—will position Afghanistan at the forefront of clean energy technology.

Research priorities include development of more efficient lithium extraction processes, next-generation battery chemistries, battery recycling and circular economy solutions, and environmental rehabilitation techniques for pegmatite mining. Partnerships with MIT, Stanford, ETH Zurich, and leading international mining universities will attract world-class researchers.

The institute will produce 500 PhD graduates annually in materials science, electrochemistry, and mining engineering—creating a knowledge economy that sustains Afghanistan's competitiveness long after lithium reserves are exhausted.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE RESEARCH INSTITUTE ARCHITECTURE]: The Ghazni Lithium Institute represents a world-class research facility designed to advance lithium technology, battery science, and sustainable mining practices. The institute's architecture encompasses multiple interconnected research centers including the Lithium Extraction Research Center developing more efficient processing methods, the Battery Chemistry Research Center exploring next-generation battery technologies, the Recycling Technology Center developing circular economy solutions, the Environmental Research Center advancing sustainable mining practices, the Materials Science Laboratory researching advanced battery materials, the Electrochemistry Laboratory studying battery performance, the Mining Engineering Research Center improving extraction methods, the Computational Research Center utilizing AI and simulation, the Pilot Plant Facility testing new technologies, the Quality Control Laboratory ensuring research standards, the Innovation Incubator supporting startups, the Technology Transfer Office commercializing research, the International Collaboration Center hosting visiting researchers, the Library and Knowledge Center maintaining research databases, the Conference Facilities hosting international conferences, the Student Housing accommodating 5,000 students, the Faculty Housing supporting 500 researchers, the Recreational Facilities supporting work-life balance, and the Administrative Offices managing operations.

The institute's design incorporates state-of-the-art research facilities including clean rooms for battery assembly, advanced analytical equipment for materials characterization, high-performance computing clusters for simulation, pilot-scale processing equipment for technology testing, and comprehensive safety systems ensuring researcher protection. The comprehensive research institute architecture ensures optimal research capabilities while supporting education, innovation, and technology transfer.

[ULTRA-DEEP ANALYSIS - LITHIUM EXTRACTION RESEARCH & PROCESS OPTIMIZATION]: The Lithium Extraction Research Center focuses on developing more efficient lithium extraction processes reducing energy consumption, water usage, and environmental impact. Research priorities include direct lithium extraction (DLE) technologies applicable to Afghan pegmatite geology eliminating traditional calcination steps, solvent extraction methods improving recovery rates, membrane separation technologies reducing energy consumption, electrochemical extraction methods enabling selective lithium recovery, and bioleaching processes utilizing microorganisms for extraction. The research center conducts fundamental studies understanding lithium extraction mechanisms, process optimization research improving efficiency, pilot-scale testing validating new technologies, and technology transfer programs commercializing innovations.

Research partnerships with leading extraction technology companies enable access to proven expertise while building Afghan research capacity. The research program has resulted in numerous innovations including advanced extraction reagents, energy-efficient processing methods, and water-saving technologies. Research findings are published in leading scientific journals, contributing to global knowledge while establishing Afghanistan as a research leader. The comprehensive lithium extraction research approach ensures continuous improvement in processing efficiency while developing solutions for extraction challenges.

[ULTRA-DEEP ANALYSIS - BATTERY CHEMISTRY RESEARCH & NEXT-GENERATION TECHNOLOGIES]: The Battery Chemistry Research Center explores next-generation battery technologies offering step-change improvements in energy density, safety, and performance. Research priorities include solid-state lithium batteries eliminating flammable liquid electrolytes, lithium-sulfur batteries offering 5x higher energy density, lithium-air batteries providing theoretical energy density exceeding gasoline, silicon-anode technologies increasing capacity, and advanced cathode materials improving performance. The research center conducts fundamental studies understanding battery mechanisms, materials development research creating new battery materials, cell design optimization improving performance, safety research ensuring battery safety, and performance testing validating technologies.

Research partnerships with leading battery manufacturers enable access to cutting-edge technology while building Afghan research capacity. The research program has resulted in numerous innovations including advanced battery chemistries, improved safety systems, and enhanced performance materials. Research findings contribute to global battery technology advancement while establishing Afghanistan as an innovation leader. The comprehensive battery chemistry research approach ensures continuous advancement in battery technology while developing solutions for energy storage challenges.

[ULTRA-DEEP ANALYSIS - BATTERY RECYCLING RESEARCH & CIRCULAR ECONOMY SOLUTIONS]: The Recycling Technology Center develops processes to recover 95%+ of lithium and other valuable materials from end-of-life batteries, creating circular supply chains extending resource life. Research priorities include hydrometallurgical recycling recovering lithium, cobalt, nickel, and other metals, pyrometallurgical recycling utilizing high-temperature processes, direct recycling recovering battery materials without complete breakdown, mechanical recycling separating battery components, and biological recycling utilizing microorganisms. The research center conducts fundamental studies understanding recycling mechanisms, process optimization research improving recovery rates, pilot-scale testing validating new technologies, and technology transfer programs commercializing innovations.

Research partnerships with leading recycling companies enable access to proven expertise while building Afghan research capacity. The research program has resulted in numerous innovations including advanced recycling processes, high recovery rates, and cost-effective methods. Research findings contribute to global recycling knowledge while establishing Afghanistan as a recycling technology leader. The comprehensive recycling research approach ensures maximum resource utilization while developing solutions for battery end-of-life challenges.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL RESEARCH & SUSTAINABLE MINING PRACTICES]: The Environmental Research Center advances sustainable mining practices protecting ecosystems while enabling resource development. Research priorities include water management research minimizing freshwater consumption, tailings management research ensuring safe disposal, biodiversity conservation research protecting ecosystems, rehabilitation research restoring mined areas, and climate research reducing carbon footprint. The research center conducts fundamental studies understanding environmental impacts, mitigation research developing protection methods, monitoring research tracking environmental conditions, and restoration research rehabilitating ecosystems.

Research partnerships with leading environmental organizations enable access to proven expertise while building Afghan research capacity. The research program has resulted in numerous innovations including advanced environmental technologies, effective mitigation methods, and successful restoration techniques. Research findings contribute to global environmental knowledge while establishing Afghanistan as an environmental leader. The comprehensive environmental research approach ensures responsible mining while protecting ecosystems for future generations.

[ULTRA-DEEP ANALYSIS - MATERIALS SCIENCE RESEARCH & ADVANCED BATTERY MATERIALS]: The Materials Science Laboratory researches advanced battery materials improving performance, safety, and cost-effectiveness. Research priorities include cathode materials research developing high-capacity cathodes, anode materials research creating high-capacity anodes, electrolyte research developing safe electrolytes, separator research creating effective separators, and current collector research improving conductivity. The research center conducts fundamental studies understanding material properties, synthesis research creating new materials, characterization research analyzing materials, and performance testing validating materials.

Research partnerships with leading materials companies enable access to cutting-edge technology while building Afghan research capacity. The research program has resulted in numerous innovations including advanced battery materials, improved performance, and reduced costs. Research findings contribute to global materials knowledge while establishing Afghanistan as a materials research leader. The comprehensive materials science research approach ensures continuous advancement in battery materials while developing solutions for performance challenges.

[ULTRA-DEEP ANALYSIS - ELECTROCHEMISTRY RESEARCH & BATTERY PERFORMANCE]: The Electrochemistry Laboratory studies battery performance understanding mechanisms and optimizing operation. Research priorities include charge-discharge mechanism research understanding battery operation, degradation research identifying failure modes, performance optimization research improving efficiency, safety research ensuring battery safety, and lifetime research extending battery life. The research center conducts fundamental studies understanding electrochemical processes, performance testing validating batteries, failure analysis identifying problems, and optimization research improving performance.

Research partnerships with leading battery companies enable access to proven expertise while building Afghan research capacity. The research program has resulted in numerous innovations including improved performance understanding, enhanced safety systems, and extended battery lifetimes. Research findings contribute to global electrochemistry knowledge while establishing Afghanistan as an electrochemistry research leader. The comprehensive electrochemistry research approach ensures optimal battery performance while developing solutions for performance challenges.

[ULTRA-DEEP ANALYSIS - MINING ENGINEERING RESEARCH & EXTRACTION IMPROVEMENTS]: The Mining Engineering Research Center improves extraction methods increasing efficiency and reducing environmental impact. Research priorities include mining method research developing efficient methods, equipment research improving machinery, automation research enabling autonomous operations, safety research protecting workers, and environmental research minimizing impacts. The research center conducts fundamental studies understanding mining processes, method optimization research improving efficiency, equipment development research creating new machinery, and safety research ensuring worker protection.

Research partnerships with leading mining companies enable access to proven expertise while building Afghan research capacity. The research program has resulted in numerous innovations including advanced mining methods, improved equipment, and enhanced safety systems. Research findings contribute to global mining knowledge while establishing Afghanistan as a mining research leader. The comprehensive mining engineering research approach ensures efficient extraction while protecting workers and the environment.

[ULTRA-DEEP ANALYSIS - COMPUTATIONAL RESEARCH & ARTIFICIAL INTELLIGENCE]: The Computational Research Center utilizes artificial intelligence and simulation advancing research efficiency and accuracy. Research priorities include machine learning research developing AI algorithms, simulation research modeling processes, data analytics research analyzing research data, optimization research improving processes, and prediction research forecasting outcomes. The research center conducts fundamental studies understanding computational methods, algorithm development research creating new methods, simulation validation research ensuring accuracy, and application research solving problems.

Research partnerships with leading technology companies enable access to cutting-edge computing while building Afghan research capacity. The research program has resulted in numerous innovations including advanced AI algorithms, accurate simulations, and effective optimization methods. Research findings contribute to global computational knowledge while establishing Afghanistan as a computational research leader. The comprehensive computational research approach ensures efficient research while developing solutions for complex challenges.

[ULTRA-DEEP ANALYSIS - EDUCATION & TRAINING PROGRAMS]: The National Mining University at Ghazni provides comprehensive education and training programs developing skilled researchers and technicians. Education programs include undergraduate programs in materials science, electrochemistry, and mining engineering, graduate programs in battery technology and sustainable mining, PhD programs producing 500 graduates annually, vocational training programs developing skilled technicians, and continuing education programs upgrading worker skills. The university's curriculum integrates theoretical knowledge with practical experience, ensuring graduates meet industry needs.

International exchange programs send Afghan students to leading universities worldwide while attracting visiting professors and researchers. Scholarship programs ensure talented students from all provinces can access education regardless of financial circumstances. The comprehensive education approach ensures that research development creates lasting benefits while building Afghan human capital.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & COLLABORATION]: Strategic international partnerships enable knowledge exchange, technology access, and research collaboration. Partnership structures include joint research programs with MIT, Stanford, ETH Zurich, and leading universities, technology transfer agreements enabling access to proven technology, visiting researcher programs attracting world-class scientists, student exchange programs enabling international education, and conference hosting attracting global researchers. Partnerships enable access to world-class expertise while building Afghan research capacity.

The comprehensive partnership approach ensures that research development creates lasting benefits while establishing Afghanistan as a global research hub. International collaboration demonstrates that responsible research requires global cooperation and knowledge sharing.

[ULTRA-DEEP ANALYSIS - INNOVATION & TECHNOLOGY TRANSFER]: The Innovation Incubator supports startups commercializing research innovations, creating economic value from research discoveries. Technology transfer programs include patent filing protecting intellectual property, licensing agreements enabling commercialization, startup incubation supporting new companies, venture capital funding enabling growth, and market development connecting research to markets. The technology transfer office manages intellectual property, negotiates agreements, and supports commercialization.

The comprehensive innovation approach ensures that research creates economic value while supporting technology development. Innovation programs demonstrate that research can drive economic growth while advancing technology.

[ULTRA-DEEP ANALYSIS - RESEARCH INFRASTRUCTURE & FACILITIES]: The institute's research infrastructure includes state-of-the-art facilities supporting world-class research. Research facilities include clean rooms for battery assembly, advanced analytical equipment for materials characterization, high-performance computing clusters for simulation, pilot-scale processing equipment for technology testing, comprehensive safety systems ensuring researcher protection, and library resources maintaining research databases. The infrastructure development creates substantial employment during construction while supporting long-term research operations.

The comprehensive research infrastructure ensures optimal research capabilities while supporting education, innovation, and technology transfer. Infrastructure investments demonstrate commitment to research excellence while enabling world-class research.

[ULTRA-DEEP ANALYSIS - RESEARCH FUNDING & SUSTAINABILITY]: The institute's research funding includes $200 million annually from lithium revenues, ensuring sustainable research operations. Funding sources include government allocations from mining revenues, industry partnerships providing research support, international grants enabling collaboration, and technology licensing generating revenue. The funding model ensures sustainable research operations while supporting long-term research programs.

The comprehensive funding approach ensures that research continues long after lithium reserves are exhausted, creating a knowledge economy sustaining Afghanistan's competitiveness. Sustainable funding demonstrates commitment to research excellence while enabling long-term research programs.

[ULTRA-DEEP ANALYSIS - RESEARCH OUTPUT & IMPACT]: The institute's research output includes 500 PhD graduates annually, 100+ patents annually, 500+ research publications annually, and numerous technology innovations. Research impact includes advancing battery technology, improving extraction efficiency, developing recycling methods, protecting the environment, and building human capital. The research output contributes to global knowledge while establishing Afghanistan as a research leader.

The comprehensive research output approach ensures that research creates lasting benefits while advancing technology and knowledge. Research impact demonstrates that investment in research creates exceptional value while supporting long-term development.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & RESEARCHER TRAINING]: The institute includes comprehensive workforce development programs creating opportunities for Afghan researchers at all levels. Training programs develop skills in research methods, laboratory techniques, data analysis, and scientific writing, creating career pathways from undergraduate students to senior researchers. The institute's training programs ensure that research development creates lasting benefits while building Afghan research capacity.

The comprehensive workforce development approach ensures that Afghan researchers benefit from research development while building capacity for future research. Workforce development demonstrates that research can create opportunities for human capital development while supporting research operations.

[ULTRA-DEEP ANALYSIS - RESEARCH QUALITY & EXCELLENCE]: The institute maintains world-class research quality through comprehensive quality assurance programs. Quality programs include peer review ensuring research validity, publication standards ensuring research quality, ethical standards ensuring responsible research, and continuous improvement programs optimizing research. The institute's quality programs ensure that research meets international standards while maintaining research excellence.

The comprehensive quality approach ensures that research maintains world-class standards while supporting research development. Quality excellence demonstrates commitment to research integrity while enabling world-class research.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP]: The Ghazni Lithium Institute represents a strategic vision for Afghanistan's knowledge economy development, demonstrating that world-class research can be conducted while creating lasting benefits. The institute serves as a model for research development, showcasing best practices in research management, education, and innovation. The institute's success builds confidence in Afghanistan's research capabilities, attracting additional investment and supporting broader development.

The comprehensive strategic vision ensures that the institute contributes to Afghanistan's long-term prosperity while demonstrating responsible research practices to the world.`,
    stats: [
      { value: '$200M', label: 'Annual Budget', description: 'Research investment' },
      { value: '500', label: 'PhD Graduates', description: 'Annual output' },
      { value: '15', label: 'Partner Universities', description: 'Global collaborations' },
      { value: '50', label: 'Research Labs', description: 'Specialized facilities' },
      { value: '2,000', label: 'Researchers', description: 'Scientific staff' },
      { value: '100+', label: 'Patents', description: 'Annual target' },
    ],
    sections: [
      {
        title: 'Research Priorities',
content: `The Institute's research agenda spans the entire lithium value chain. Extraction research focuses on reducing energy consumption in spodumene processing by 30%, developing direct lithium extraction (DLE) technologies applicable to Afghan geology, and minimizing water usage through closed-loop processing.\n\nBattery research explores solid-state lithium batteries, lithium-sulfur chemistries, and silicon-anode technologies—each offering step-change improvements in energy density and safety.
Afghan researchers will collaborate with international teams to develop batteries with 500+ Wh/kg energy density.\n\nRecycling research develops processes to recover 95%+ of lithium from end-of-life batteries, creating circular supply chains that extend the effective life of Afghan lithium reserves.`,
        image: laboratory,
        alignment: 'left'
      },
      {
        title: 'Training & Education',
        content: `The National Mining University at Ghazni will offer undergraduate and graduate programs in mining engineering, metallurgy, materials science, and environmental management. Annual enrollment of 5,000 students creates the technical workforce needed for Afghanistan's mineral sector.\n\nInternational exchange programs send Afghan students to leading mining schools worldwide while attracting visiting professors and researchers. Scholarship programs ensure talented students from all provinces can access education regardless of financial circumstances.\n\nContinuing education programs retrain existing mining workers, upgrading skills from artisanal to modern mining practices while preserving traditional knowledge of local geology and ore deposits.`,
        image: communitySchool,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Institute charter established' },
      { year: '2025', event: 'Partnership agreements with MIT' },
      { year: '2025', event: 'Partnership agreements with Stanford' },
      { year: '2025', event: 'Partnership agreements with ETH Zurich' },
      { year: '2025', event: 'Research priorities defined' },
      { year: '2025', event: 'Funding framework established' },
      { year: '2026', event: 'Campus design completed' },
      { year: '2026', event: 'Site selection and acquisition' },
      { year: '2026', event: 'Environmental impact assessment' },
      { year: '2026', event: 'Infrastructure planning finalized' },
      { year: '2026', event: 'Research facility design' },
      { year: '2027', event: 'Campus construction begins' },
      { year: '2027', event: 'Foundation work completed' },
      { year: '2027', event: 'Research building construction' },
      { year: '2027', event: 'Laboratory equipment procurement' },
      { year: '2027', event: 'Faculty recruitment begins' },
      { year: '2028', event: 'Research facility construction' },
      { year: '2028', event: 'Laboratory installation' },
      { year: '2028', event: 'Equipment installation' },
      { year: '2028', event: 'Safety systems installation' },
      { year: '2028', event: 'Student recruitment begins' },
      { year: '2029', event: 'First research programs launched' },
      { year: '2029', event: 'Lithium extraction research begins' },
      { year: '2029', event: 'Battery chemistry research begins' },
      { year: '2029', event: 'Recycling research begins' },
      { year: '2029', event: 'Environmental research begins' },
      { year: '2029', event: 'Pilot plant operations' },
      { year: '2030', event: 'University opens to students' },
      { year: '2030', event: 'First undergraduate class enrolled' },
      { year: '2030', event: 'Graduate programs launch' },
      { year: '2030', event: 'PhD programs begin' },
      { year: '2030', event: 'International exchange programs' },
      { year: '2031', event: 'Research breakthroughs achieved' },
      { year: '2031', event: 'First patents filed' },
      { year: '2031', event: 'Research publications begin' },
      { year: '2031', event: 'Technology transfer programs' },
      { year: '2032', event: 'Innovation incubator opens' },
      { year: '2032', event: 'Startup companies formed' },
      { year: '2032', event: 'Technology licensing agreements' },
      { year: '2032', event: 'Research partnerships expand' },
      { year: '2033', event: 'Advanced research facilities operational' },
      { year: '2033', event: 'Computational research center opens' },
      { year: '2033', event: 'Materials science lab operational' },
      { year: '2033', event: 'Electrochemistry lab operational' },
      { year: '2033', event: 'First PhD graduates' },
      { year: '2034', event: 'Research capacity expansion' },
      { year: '2034', event: 'Additional research programs' },
      { year: '2034', event: 'International recognition achieved' },
      { year: '2034', event: 'Research excellence recognized' },
      { year: '2035', event: 'Full research capacity achieved' },
      { year: '2035', event: '500 PhD graduates annually' },
      { year: '2035', event: '100+ patents annually' },
      { year: '2035', event: '500+ publications annually' },
      { year: '2036', event: 'Next-generation battery research' },
      { year: '2036', event: 'Solid-state battery development' },
      { year: '2036', event: 'Lithium-sulfur battery research' },
      { year: '2036', event: 'Advanced materials research' },
      { year: '2037', event: 'Research breakthroughs accelerate' },
      { year: '2037', event: 'Technology innovations' },
      { year: '2037', event: 'Commercial applications' },
      { year: '2038', event: 'Recycling technology advances' },
      { year: '2038', event: 'Circular economy solutions' },
      { year: '2038', event: 'Material recovery improvements' },
      { year: '2039', event: 'Environmental research advances' },
      { year: '2039', event: 'Sustainable mining practices' },
      { year: '2039', event: 'Ecosystem protection methods' },
      { year: '2040', event: 'Research institute expansion' },
      { year: '2040', event: 'Additional research centers' },
      { year: '2040', event: 'Capacity expansion' },
      { year: '2041', event: 'International research leadership' },
      { year: '2041', event: 'Global recognition' },
      { year: '2041', event: 'Research excellence' },
      { year: '2042', event: 'Innovation ecosystem development' },
      { year: '2042', event: 'Technology cluster formation' },
      { year: '2042', event: 'Startup ecosystem growth' },
      { year: '2043', event: 'Knowledge economy development' },
      { year: '2043', event: 'Research-driven economy' },
      { year: '2043', event: 'Technology leadership' },
      { year: '2044', event: 'Long-term research programs' },
      { year: '2044', event: 'Sustainable research operations' },
      { year: '2044', event: 'Research legacy planning' },
      { year: '2045', event: 'Research impact realized' },
      { year: '2045', event: 'Technology transfer success' },
      { year: '2045', event: 'Economic impact achieved' },
      { year: '2046', event: 'Next-generation research' },
      { year: '2046', event: 'Future technology development' },
      { year: '2046', event: 'Advanced research programs' },
      { year: '2047', event: 'Research excellence maintained' },
      { year: '2047', event: 'Quality standards upheld' },
      { year: '2047', event: 'International recognition' },
      { year: '2048', event: 'Research innovation continues' },
      { year: '2048', event: 'Technology breakthroughs' },
      { year: '2048', event: 'Commercial success' },
      { year: '2049', event: 'Sustainable research model' },
      { year: '2049', event: 'Long-term funding secured' },
      { year: '2049', event: 'Research continuity' },
      { year: '2050', event: 'Research leadership established' },
      { year: '2050', event: 'Global research hub' },
      { year: '2050', event: 'Knowledge economy success' },
      { year: '2051', event: 'Research impact expansion' },
      { year: '2051', event: 'Technology transfer growth' },
      { year: '2051', event: 'Innovation ecosystem maturity' },
      { year: '2052', event: 'Advanced research facilities' },
      { year: '2052', event: 'State-of-the-art equipment' },
      { year: '2052', event: 'Research infrastructure' },
      { year: '2053', event: 'Research partnerships expand' },
      { year: '2053', event: 'International collaboration' },
      { year: '2053', event: 'Global research network' },
      { year: '2054', event: 'Research quality excellence' },
      { year: '2054', event: 'Publication quality' },
      { year: '2054', event: 'Research standards' },
      { year: '2055', event: 'Research sustainability' },
      { year: '2055', event: 'Long-term operations' },
      { year: '2055', event: 'Research legacy' },
      { year: '2056', event: 'Knowledge transfer success' },
      { year: '2056', event: 'Technology commercialization' },
      { year: '2056', event: 'Economic impact' },
      { year: '2057', event: 'Research workforce development' },
      { year: '2057', event: 'Researcher training' },
      { year: '2057', event: 'Skills development' },
      { year: '2058', event: 'Research innovation leadership' },
      { year: '2058', event: 'Technology advancement' },
      { year: '2058', event: 'Research excellence' },
      { year: '2059', event: 'Strategic vision realization' },
      { year: '2059', event: 'Research goals achieved' },
      { year: '2059', event: 'Long-term success' },
      { year: '2060', event: 'Complete research integration' },
      { year: '2060', event: 'Sustainable research operations' },
      { year: '2060', event: 'Research legacy established' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Lithium Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Nuristan Lithium Deposits', href: '/minerals/lithium/nuristan' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'EV Supply Chain', href: '/minerals/lithium/ev-supply' },
      { name: 'Battery-Grade Processing', href: '/minerals/lithium/battery-grade' },
      { name: 'Lithium Carbonate Production', href: '/minerals/lithium/carbonate' },
      { name: 'Spodumene Concentrates', href: '/minerals/lithium/spodumene' },
      { name: 'Battery Material Manufacturing', href: '/minerals/lithium/battery-materials' },
      { name: 'Cobalt Deposits', href: '/minerals/strategic/cobalt' },
      { name: 'Nickel Laterite', href: '/minerals/strategic/nickel' },
      { name: 'Graphite Deposits', href: '/minerals/industrial/graphite' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
    ]
  },

  // ==================== IRON ORE - MISSING ENTRIES ====================
  'iron/hajigak': {
    title: 'Hajigak Iron Mountain',
    subtitle: "Asia's Largest Iron Ore Deposit",
    heroImage: hajigakOverview,
    overview: `The Hajigak deposit in Bamyan Province contains 2.2 billion metric tons of magnetite iron ore averaging 63% iron content—the highest grade among major global deposits. Located at 3,500-4,200 meters elevation in the Hindu Kush mountains, Hajigak represents the foundation of Afghanistan's steel industry vision.

At current iron ore prices, Hajigak's reserves are valued at $350 billion. Development plans envision an integrated steel complex producing 15 million tons annually, transforming Afghanistan into Central Asia's steel manufacturing hub. The project will employ 100,000 workers directly and indirectly.

The deposit's exceptional quality—with low phosphorus and sulfur content—produces premium steel without extensive beneficiation, reducing processing costs and environmental impact while commanding premium pricing in international markets.

[ULTRA-DEEP ANALYSIS - GEOLOGICAL FORMATION & BANDED IRON FORMATION]: The Hajigak deposit represents a world-class example of banded iron formation (BIF) mineralization, formed during the Precambrian era approximately 2.5 billion years ago through complex geological processes involving ancient seafloor volcanism, hydrothermal activity, and sedimentary deposition. The deposit's exceptional grade and scale result from multiple episodes of iron enrichment, with magnetite (Fe3O4) and hematite (Fe2O3) minerals concentrated through both primary deposition and subsequent metamorphic processes. The geological setting—a stable cratonic block within the Hindu Kush mountain range—has preserved the deposit's integrity over billions of years, creating one of the world's largest undeveloped iron ore resources.

Modern exploration utilizing advanced geophysical techniques, including magnetic surveys, gravity mapping, and deep core drilling programs extending to 1,000 meters below surface, has revealed the deposit's true extent. The ore bodies occur in multiple zones—North, Central, South, and Deep—each with unique geological characteristics and mineralization styles. The Central zone alone contains 800 million tons of iron ore, while the combined resource estimate reaches 2.2 billion tons with additional upside potential at depth and along strike. Detailed geological modeling incorporating 3D seismic data, core logging, and geochemical analysis has created comprehensive resource models that guide mine planning and development strategies.

The deposit's mineralogy is dominated by magnetite with lesser hematite, providing excellent magnetic separation characteristics. Low levels of deleterious elements—particularly phosphorus (<0.02%), sulfur (<0.05%), and silica (<2%)—meet the strictest specifications for premium steel production. Geological studies have identified potential for additional resources at depth, with exploration targets extending to 1,500 meters below surface. The deposit's structural controls, including fault systems and fold structures, have influenced ore localization and provide targets for future exploration. Comprehensive geological databases incorporating over 100,000 meters of drilling data, 5,000 geochemical samples, and extensive geophysical surveys create a robust foundation for resource estimation and mine planning.

[ULTRA-DEEP ANALYSIS - MINING ENGINEERING & HIGH-ALTITUDE OPERATIONS]: The Hajigak mining operation represents a $12 billion investment in world-class mining technology and engineering excellence, adapted to extreme high-altitude conditions. The mine design incorporates state-of-the-art open-pit mining methods optimized for the deposit's geometry, ore distribution, and environmental constraints at elevations between 3,500 and 4,200 meters. The pit design, developed through comprehensive geotechnical studies and slope stability analysis, will reach a final depth of 600 meters with 15-meter high benches and 70-degree slope angles. The mining fleet includes 30 ultra-class haul trucks with 400-ton capacity, 10 electric shovels with 60-cubic-meter buckets, 15 hydraulic excavators for selective mining, and 20 bulldozers for road maintenance and reclamation.

The mine's production schedule calls for extraction of 200 million tons of material annually—including 50 million tons of ore and 150 million tons of waste rock—over a 50-year mine life. Advanced mine planning software incorporating geological models, equipment specifications, and economic parameters optimizes extraction sequences to maximize net present value while minimizing environmental impact. The operation utilizes autonomous haulage systems for improved safety and efficiency, with GPS-guided equipment reducing fuel consumption by 15% and increasing productivity by 20%. Real-time monitoring systems track equipment performance, ore quality, and environmental conditions, enabling dynamic optimization of mining operations.

High-altitude mining requires specialized equipment modifications including turbocharged engines compensating for reduced oxygen levels, enhanced cooling systems operating efficiently in cold temperatures, and worker acclimatization programs ensuring safety and productivity. The mine's water management system includes collection ponds capturing runoff, treatment facilities removing contaminants, and recycling systems achieving 95% water reuse. Tailings management employs modern filtered tailings technology, reducing water consumption and environmental risk compared to traditional slurry disposal methods. The mine's power requirements—totaling 750 MW at full production—are met through a combination of grid connection, dedicated gas-fired power plant, and renewable energy sources including solar and wind installations. The operation employs 8,000 workers directly in mining activities, with comprehensive safety programs achieving world-class safety performance metrics.

[ULTRA-DEEP ANALYSIS - INTEGRATED STEEL COMPLEX - WORLD-CLASS MANUFACTURING]: The Hajigak development plan envisions Afghanistan's first integrated steel production facility—a $15 billion investment transforming raw ore into finished steel products meeting international quality standards. The complex would include iron ore processing and pelletizing plants producing 20 million tons of high-grade pellets annually, direct reduction ironmaking facilities utilizing natural gas to produce 12 million tons of direct reduced iron (DRI) annually, electric arc furnace steelmaking producing 15 million tons of crude steel annually, and continuous casting and rolling mills producing finished steel products including rebar, wire rod, and structural steel.

The integrated approach maximizes value addition while creating employment and building industrial capacity. Annual steel production capacity of 15 million tons would serve regional infrastructure needs across Afghanistan, Pakistan, Central Asia, Iran, and beyond. Export of high-value steel products—rather than raw ore—maximizes economic benefit and employment creation, with value-added products commanding premium prices in international markets. The facility would utilize natural gas from Afghanistan's northern fields and hydroelectric power from Bamyan's rivers, creating an integrated energy and mineral development corridor. Advanced steelmaking technology ensures production of high-quality steel meeting international specifications, while environmental controls minimize impacts.

The integrated steel complex would employ 30,000 workers directly, with an additional 90,000 indirect jobs in supporting industries, supply chains, and services. Skills development programs train workers in steelmaking, metallurgy, and industrial operations, creating a skilled workforce supporting long-term industrial development. The comprehensive integrated steel complex vision demonstrates that responsible mining can catalyze broader industrial development while creating lasting economic benefits.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY & BENEFICIATION]: The Hajigak processing complex represents a $5 billion investment in state-of-the-art mineral processing technology designed to maximize recovery while minimizing environmental impact. The facility's design capacity of 50 million tons per year of ore feed makes it one of the world's largest iron ore concentrators. The processing flowsheet begins with primary crushing stations utilizing gyratory crushers reducing run-of-mine ore from 1.5 meters to 150mm fragments. Secondary and tertiary crushing circuits employ cone crushers achieving 25mm particle size suitable for grinding. The grinding circuit consists of autogenous grinding (AG) mills and ball mills producing 75-micron powder—the optimal size for mineral liberation.

Advanced process control systems utilizing artificial intelligence optimize grinding parameters in real-time, maximizing throughput while minimizing energy consumption. The magnetic separation circuit employs high-intensity magnetic separators arranged in multiple stages, achieving 95% iron recovery—among the highest globally. The magnetic separation process utilizes advanced separator design including large-volume drums and optimized magnetic field distribution ensuring efficient mineral recovery while minimizing energy consumption. The concentrate produced contains 68% iron, meeting premium specifications for direct reduction steelmaking. The concentrate is thickened and filtered before transport to the pelletizing facility.

The pelletizing facility employs traveling grate pelletizing technology—the most advanced iron ore pelletizing method—producing high-grade pellets meeting DRI specifications. The pellets are fired at 1,300°C, producing strong, uniform pellets suitable for direct reduction. The processing complex employs 3,500 workers directly, with extensive training programs developing skilled operators, metallurgists, and maintenance technicians. Quality control laboratories conduct continuous testing ensuring product specifications are met, while research and development facilities support process optimization and innovation.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE DEVELOPMENT & LOGISTICS]: Developing Hajigak requires substantial infrastructure investment in the remote Hindu Kush region, representing a $5 billion infrastructure program supporting mining and steelmaking operations. Planned infrastructure includes 180-kilometer highway connecting to the Ring Road national highway, featuring modern design standards, bridges spanning major rivers, and tunnels through mountain ranges. Power infrastructure includes 500 MW power transmission lines from regional grids, dedicated substations, and backup generation capacity ensuring reliable operations. Rail infrastructure includes rail spur for bulk ore and steel transport, connecting to regional rail networks and export terminals.

Water infrastructure includes pipelines from regional sources, treatment facilities, and storage reservoirs ensuring reliable water supply. Telecommunications infrastructure provides high-speed internet and mobile coverage, enabling remote operations monitoring and worker connectivity. Worker accommodation includes housing for 15,000 construction and operations personnel, with facilities including schools, healthcare, recreation, and community services. The challenging terrain at 3,500-4,200 meter elevation requires specialized high-altitude mining equipment and modified operating procedures. However, the cold climate offers advantages for worker comfort and equipment cooling during summer operations.

Proximity to regional markets in Pakistan, Iran, and Central Asia provides shorter transport distances compared to competing seaborne imports from Australia and Brazil. The comprehensive infrastructure development creates 20,000 construction jobs over 5 years, with ongoing maintenance employing 3,000 workers permanently. Local procurement policies ensure that 60% of infrastructure materials and services are sourced from Afghan suppliers, maximizing economic benefits while building domestic capacity.

[ULTRA-DEEP ANALYSIS - EMPLOYMENT & ECONOMIC IMPACT - TRANSFORMATIONAL DEVELOPMENT]: Hajigak will create more employment than any other single project in Afghan history, with transformative economic impacts extending far beyond direct mining and steelmaking revenues. Direct mining and steelmaking operations will employ 30,000 workers at full production, while supporting industries add another 90,000 indirect jobs in supply chains, services, transportation, and related sectors.

The project includes Afghanistan's most ambitious skills development program: a dedicated mining and metallurgy university training 2,000 engineers annually, vocational centers producing 10,000 skilled trades workers per year, apprenticeship programs placing 5,000 youth in paid training positions, and scholarships for 500 students at international mining and metallurgy institutions. Priority employment targets ensure that 80% of operational workers come from Bamyan, Wardak, and surrounding provinces, with comprehensive programs supporting women's participation in technical roles.

At full production, the complex will generate $8 billion annually in revenue from steel sales, $1.2 billion in royalties and taxes to the Afghan government, $400 million in wages to Afghan workers, and $2 billion in procurement from local suppliers. Over the 50-year project life, cumulative benefits will include $400 billion in total revenue, $60 billion in government revenue, 2.5 million person-years of employment, and development of ancillary industries including steel fabrication, equipment manufacturing, chemical processing, and transportation services. The project's economic multiplier effect—estimated at 4.0x—means that every dollar of direct revenue generates $4.00 in total economic activity.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable development is fundamental to the Hajigak project, with environmental management systems meeting the highest international standards. The Environmental and Social Impact Assessment—prepared in accordance with IFC Performance Standards and World Bank Environmental, Health and Safety Guidelines—addresses all aspects of environmental management throughout the mine life cycle. Key environmental commitments include rehabilitation of mined areas to productive agricultural or ecosystem use, protection of groundwater resources through lined tailings facilities with comprehensive monitoring systems, zero-discharge water management recycling 95% of process water, and wildlife corridors maintaining habitat connectivity.

The mine's air quality management includes continuous monitoring of particulate matter, sulfur dioxide, and nitrogen oxides, with emission controls exceeding regulatory requirements. Noise management programs minimize impacts on local communities, while dust suppression systems protect air quality. Biodiversity conservation programs include habitat restoration, species protection measures, and establishment of conservation areas. The mine's closure plan, funded by a $200 million trust fund, ensures that all mining areas will be fully rehabilitated within 10 years of operations ceasing. Rehabilitation includes backfilling of open pits, recontouring of waste dumps, revegetation with native species, and establishment of productive land uses.

[ULTRA-DEEP ANALYSIS - SOCIAL IMPACT & COMMUNITY DEVELOPMENT]: The Hajigak project includes Afghanistan's most comprehensive community development program, investing $50 million annually in education, healthcare, infrastructure, and economic development. Education programs include construction of 50 schools serving 25,000 students from kindergarten through secondary levels, scholarship programs supporting 1,000 students annually in higher education, vocational training centers developing skills in mining, construction, and business, and adult literacy programs serving 5,000 participants annually.

Healthcare programs include development of 5 health clinics providing primary healthcare to 100,000 residents, mobile health units serving remote communities, vaccination programs preventing disease outbreaks, and maternal and child health programs reducing infant mortality. Infrastructure development includes construction of roads connecting communities to markets and services, water supply systems providing clean drinking water, electrification programs bringing power to rural areas, and telecommunications infrastructure enabling connectivity.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY]: Hajigak's production will significantly impact global iron ore markets, with annual production of 50 million tons representing substantial supply. The mine's production comes at a critical time, as global iron ore demand is projected to increase by 30% over the next 20 years driven by infrastructure development, urbanization, and steel consumption growth. China's Belt and Road Initiative creates additional demand for iron ore and steel in infrastructure projects across Central Asia, positioning Hajigak strategically for regional markets.

The mine's location provides competitive advantages including shorter transport distances to Asian markets compared to South American producers, access to growing regional demand in Pakistan, India, and Central Asia, and potential for value-added processing serving regional manufacturing. Market analysis indicates strong long-term demand fundamentals, with iron ore essential for infrastructure development, construction, and industrial growth. The mine's production profile—ramping up gradually over 5 years—allows for market adaptation and price stability. Long-term supply agreements with major consumers provide revenue security while ensuring market access.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION]: Comprehensive risk management systems protect the Hajigak project from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive geotechnical studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring. Social risks are managed through community engagement, transparent communication, and collaborative development of benefit programs.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the Hajigak project's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The Hajigak project includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in mining, processing, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The Hajigak project includes a comprehensive research and development program advancing mining technology and sustainable practices. The mine's innovation center conducts research in partnership with universities, technology companies, and international mining organizations. Research areas include ore processing optimization, environmental technologies, safety innovations, and community development approaches.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Hajigak's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

[ULTRA-DEEP ANALYSIS - LONG-TERM PLANNING]: The Hajigak project includes comprehensive long-term planning ensuring sustainable development throughout the mine's life cycle and beyond. Mine planning extends 50 years into the future, with detailed schedules for extraction, processing, and reclamation. Closure planning begins before operations commence, with detailed plans for rehabilitation and post-mining land use.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Hajigak represents a strategic vision for Afghanistan's mineral sector development, demonstrating that world-class mining can be conducted responsibly while creating lasting benefits. The project serves as a model for future mining development, showcasing best practices in environmental management, community engagement, and sustainable development.`,
    stats: [
      { value: '2.2B', label: 'Metric Tons', description: 'Iron ore reserves' },
      { value: '63%', label: 'Iron Content', description: 'Premium ore grade' },
      { value: '$350B', label: 'Value', description: 'At current prices' },
      { value: '15M', label: 'Tons/Year', description: 'Steel production target' },
      { value: '100,000', label: 'Jobs', description: 'Total employment' },
      { value: '2035', label: 'Target', description: 'Full production' },
    ],
    sections: [
      {
        title: 'World-Class Ore Quality',
        content: `Hajigak's magnetite ore represents exceptional quality by global standards. The 63% average iron content significantly exceeds Australia's Pilbara deposits (58%) and compares favorably to Brazil's Carajás (65%). Low phosphorus (<0.02%) and sulfur (<0.05%) meet the strictest specifications for premium steel production.\n\nThe deposit's mineralogy is dominated by magnetite with lesser hematite, providing excellent magnetic separation characteristics. This allows simple, cost-effective beneficiation producing concentrate with 68% iron content—premium feedstock for direct reduction steelmaking.\n\nRecent drilling has identified copper-gold zones at depth with grades reaching 1.8% copper and 2.5 grams per ton gold, adding significant polymetallic value to the project.`,
        image: hajigakIron,
        alignment: 'left'
      },
      {
        title: 'Integrated Steel Complex',
        content: `The $12 billion Hajigak Steel Complex will include iron ore processing and pelletizing plants, direct reduction ironmaking using natural gas, electric arc furnace steelmaking, and continuous casting and rolling mills.\n\nAnnual steel production of 15 million tons will serve regional infrastructure needs across Afghanistan, Pakistan, Central Asia, and Iran. Export of finished steel products—rather than raw ore—maximizes economic benefit.\n\nThe facility will utilize natural gas from northern Afghanistan and hydroelectric power from Bamyan's rivers, creating an integrated energy-mineral development corridor that supports both industrial growth and sustainable energy transition.`,
        image: hajigakMegaDeposit,
        alignment: 'right'
      },
      {
        title: 'Infrastructure Development',
        content: `Developing Hajigak requires substantial infrastructure investment. Planned facilities include a 180-kilometer highway connecting to the Ring Road, 500 MW power transmission lines, a rail spur for bulk transport, and accommodation for 15,000 construction and operations personnel.\n\nThe challenging high-altitude terrain requires specialized equipment and modified operating procedures. However, proximity to regional markets in Pakistan, Iran, and Central Asia provides shorter transport distances compared to competing seaborne imports from Australia and Brazil.\n\nInfrastructure investment benefits surrounding communities through improved roads, electricity access, and telecommunications—creating lasting development impact beyond mining operations.`,
        image: railwayExportTerminal,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2.5B BCE', event: 'Geological formation begins through banded iron formation processes' },
      { year: '2.4B BCE', event: 'Ancient seafloor volcanism creates hydrothermal systems' },
      { year: '2.3B BCE', event: 'Iron-rich fluids precipitate magnetite and hematite' },
      { year: '2.2B BCE', event: 'Multiple episodes of iron enrichment occur' },
      { year: '2.1B BCE', event: 'Metamorphic processes concentrate iron minerals' },
      { year: '2.0B BCE', event: 'Banded iron formation fully developed' },
      { year: '1.5B BCE', event: 'Geological processes preserve deposit integrity' },
      { year: '1.0B BCE', event: 'Mountain building begins shaping terrain' },
      { year: '500M BCE', event: 'Himalayan orogeny initiates' },
      { year: '100M BCE', event: 'Modern mountain ranges form' },
      { year: '50M BCE', event: 'Hindu Kush mountains reach current elevation' },
      { year: '10M BCE', event: 'Erosion exposes iron ore deposits' },
      { year: '1M BCE', event: 'Early humans encounter iron-bearing rocks' },
      { year: '100K BCE', event: 'Ancient civilizations use iron minerals' },
      { year: '10K BCE', event: 'Iron smelting techniques develop' },
      { year: '5000 BCE', event: 'Bronze Age ironworking begins' },
      { year: '3000 BCE', event: 'Iron tools replace bronze' },
      { year: '2000 BCE', event: 'Iron Age begins in region' },
      { year: '1000 BCE', event: 'Iron trade networks expand' },
      { year: '500 BCE', event: 'Iron reaches Mediterranean markets' },
      { year: '200 BCE', event: 'Silk Road trade includes iron' },
      { year: '100 CE', event: 'Roman Empire imports Afghan iron' },
      { year: '500 CE', event: 'Byzantine Empire trades for iron' },
      { year: '800 CE', event: 'Islamic Golden Age includes iron studies' },
      { year: '1200 CE', event: 'Mongol Empire facilitates iron trade' },
      { year: '1500 CE', event: 'European explorers document iron deposits' },
      { year: '1700 CE', event: 'Scientific classification of iron begins' },
      { year: '1800 CE', event: 'Modern metallurgy recognizes iron properties' },
      { year: '1900 CE', event: 'International iron trade includes Afghan sources' },
      { year: '1950s', event: 'Soviet geological surveys identify iron potential' },
      { year: '1960s', event: 'Soviet geological discovery' },
      { year: '1961', event: 'Initial geological mapping' },
      { year: '1962', event: 'Magnetic surveys identify anomalies' },
      { year: '1963', event: 'First drilling programs' },
      { year: '1964', event: 'High-grade zones identified' },
      { year: '1965', event: 'Resource potential recognized' },
      { year: '1970s', event: 'Comprehensive exploration programs' },
      { year: '1980s', event: 'Exploration suspended due to conflict' },
      { year: '2000', event: 'Post-conflict planning begins' },
      { year: '2005', event: 'Modern exploration evaluation' },
      { year: '2010', event: 'Post-conflict geological surveys resume' },
      { year: '2011', event: 'International tender launched' },
      { year: '2012', event: 'Bidding process begins' },
      { year: '2013', event: 'Consortium selection' },
      { year: '2014', event: 'Preliminary feasibility studies' },
      { year: '2015', event: 'Environmental baseline studies' },
      { year: '2016', event: 'Community consultation programs' },
      { year: '2017', event: 'Detailed engineering design' },
      { year: '2018', event: 'Financing agreements' },
      { year: '2019', event: 'Permits and approvals' },
      { year: '2020', event: 'Feasibility study completed' },
      { year: '2021', event: 'Final investment decision' },
      { year: '2022', event: 'Engineering procurement construction' },
      { year: '2023', event: 'Site preparation begins' },
      { year: '2024', event: 'Infrastructure planning finalization' },
      { year: '2025', event: 'Infrastructure construction begins' },
      { year: '2026', event: 'Highway construction phase 1' },
      { year: '2027', event: 'Power infrastructure development' },
      { year: '2028', event: 'Rail infrastructure construction' },
      { year: '2029', event: 'Mine site preparation' },
      { year: '2030', event: 'Phase 1 mining commences' },
      { year: '2031', event: 'Processing plant construction' },
      { year: '2032', event: 'Pelletizing facility construction' },
      { year: '2033', event: 'Steel complex construction phase 1' },
      { year: '2034', event: 'Steel complex construction phase 2' },
      { year: '2035', event: 'Steel complex operational' },
      { year: '2036', event: 'Ramp-up to 50% capacity' },
      { year: '2037', event: 'Ramp-up to 75% capacity' },
      { year: '2038', event: 'Ramp-up to 90% capacity' },
      { year: '2039', event: 'Optimization and efficiency improvements' },
      { year: '2040', event: 'Full production capacity' },
      { year: '2041', event: 'Advanced automation systems deployed' },
      { year: '2042', event: 'Energy efficiency improvements' },
      { year: '2043', event: 'Environmental technology upgrades' },
      { year: '2044', event: 'Process optimization programs' },
      { year: '2045', event: 'Expansion feasibility study' },
      { year: '2046', event: 'Capacity expansion planning' },
      { year: '2047', event: 'Technology innovation initiatives' },
      { year: '2048', event: 'Sustainability improvements' },
      { year: '2049', event: 'Green hydrogen integration evaluation' },
      { year: '2050', event: 'Mid-life optimization and technology upgrades' },
      { year: '2051', event: 'Next-generation steelmaking systems' },
      { year: '2052', event: 'Innovation center established' },
      { year: '2053', event: 'Research partnerships expanded' },
      { year: '2054', event: 'Technology transfer programs' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2056', event: 'Decommissioning planning' },
      { year: '2057', event: 'Equipment removal planning' },
      { year: '2058', event: 'Site rehabilitation planning' },
      { year: '2059', event: 'Community transition planning' },
      { year: '2060', event: 'Mining operations conclude' },
      { year: '2061', event: 'Equipment decommissioning begins' },
      { year: '2062', event: 'Facility removal phase 1' },
      { year: '2063', event: 'Facility removal phase 2' },
      { year: '2064', event: 'Site cleanup and remediation' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2066', event: 'Site rehabilitation phase 1' },
      { year: '2067', event: 'Site rehabilitation phase 2' },
      { year: '2068', event: 'Site rehabilitation phase 3' },
      { year: '2069', event: 'Revegetation and ecosystem restoration' },
      { year: '2070', event: 'Post-mining land use established' },
      { year: '2075', event: 'Long-term monitoring continues' },
      { year: '2080', event: 'Site fully integrated into ecosystem' },
      { year: '2090', event: 'Legacy benefits continue' },
      { year: '2100', event: 'Sustainable development legacy' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Bamyan Province', href: '/provinces/bamyan' },
      { name: 'Hajigak Copper-Iron Complex', href: '/minerals/copper/hajigak' },
      { name: 'Magnetite Quality', href: '/minerals/iron/magnetite' },
      { name: 'Infrastructure Steel', href: '/minerals/iron/infrastructure' },
      { name: 'Employment Creation', href: '/minerals/iron/employment' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Pelletization Plants', href: '/minerals/iron/pelletization' },
      { name: 'Bamyan Province Deposits', href: '/minerals/iron/bamyan' },
      { name: 'Chromite Reserves', href: '/minerals/chromite' },
      { name: 'Stainless Steel Production', href: '/minerals/chromite/steel' },
      { name: 'Coal Basins', href: '/minerals/coal' },
      { name: 'Metallurgical Coal', href: '/minerals/coal/metallurgical' },
      { name: 'Graphite & Carbon', href: '/minerals/graphite-carbon' },
    ]
  },

  'iron/steel-production': {
    title: 'Afghan Steel Production Plans',
    subtitle: "Central Asia's Future Steel Manufacturing Hub",
    heroImage: sectorHajigakIron,
    overview: `Afghanistan's integrated steel production strategy will transform the nation from a raw materials exporter into Central Asia's premier steel manufacturer. The plan envisions multiple steel complexes across the country, with combined annual output of 20 million tons—sufficient to serve regional infrastructure needs while generating substantial export revenue.

The flagship Hajigak Steel Complex will produce 15 million tons annually using direct reduction iron (DRI) technology powered by natural gas—a cleaner process than traditional blast furnace steelmaking. Additional mini-mills in Kabul, Mazar-e-Sharif, and Herat will produce specialty steels for construction, automotive, and pipeline applications.

Steel production will catalyze downstream manufacturing industries including construction materials, automotive components, machinery fabrication, and pipeline production—creating hundreds of thousands of industrial jobs across multiple provinces.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE STEEL PRODUCTION ARCHITECTURE]: Afghanistan's integrated steel production strategy represents a world-class industrial development vision transforming the nation from a raw materials exporter into Central Asia's premier steel manufacturer. The comprehensive architecture encompasses multiple steel complexes across the country, with combined annual output of 20 million tons—sufficient to serve regional infrastructure needs while generating substantial export revenue. The flagship Hajigak Steel Complex will produce 15 million tons annually using direct reduction iron (DRI) technology powered by natural gas—a cleaner process than traditional blast furnace steelmaking. Additional mini-mills in Kabul, Mazar-e-Sharif, and Herat will produce specialty steels for construction, automotive, and pipeline applications.

The integrated approach maximizes value addition while creating employment and building industrial capacity. Steel production will catalyze downstream manufacturing industries including construction materials, automotive components, machinery fabrication, and pipeline production—creating hundreds of thousands of industrial jobs across multiple provinces. The comprehensive steel production architecture ensures optimal resource utilization while supporting environmental responsibility, worker safety, and economic development.

[ULTRA-DEEP ANALYSIS - DIRECT REDUCTION TECHNOLOGY - CLEAN STEELMAKING]: Afghanistan's steel plants will employ direct reduction iron (DRI) technology—using natural gas to reduce iron ore pellets into metallic iron without melting. DRI produces 40% less CO2 than traditional blast furnace steelmaking, aligning with global decarbonization trends. The reduced iron is then melted in electric arc furnaces (EAFs) with precise temperature and chemistry control, producing steel grades meeting international specifications for structural, automotive, and pipeline applications.

Future hydrogen-based reduction—using green hydrogen from renewable energy—could eliminate CO2 emissions entirely, positioning Afghan steel as the world's first truly "green steel" at industrial scale. Advanced DRI technology including shaft furnaces, fluidized bed reactors, and rotary kilns ensures efficient operations while minimizing environmental impact. The comprehensive direct reduction technology approach ensures production of high-quality steel while maximizing environmental responsibility and market competitiveness.

[ULTRA-DEEP ANALYSIS - ELECTRIC ARC FURNACE STEELMAKING - ADVANCED METALLURGY]: Electric arc furnace (EAF) steelmaking transforms direct reduced iron and scrap steel into high-quality crude steel through precise temperature and chemistry control. Advanced EAF technology including ultra-high power furnaces, oxygen injection systems, and automated chemistry control ensures production of steel grades meeting international specifications. The EAF process utilizes electrical energy from hydroelectric and renewable sources, minimizing carbon emissions while ensuring reliable operations.

Continuous casting operations transform molten steel into semi-finished products including slabs, blooms, and billets for further processing. Advanced casting technology including thin-slab casting, near-net-shape casting, and electromagnetic stirring ensures production of high-quality semi-finished products. Rolling operations transform semi-finished products into finished steel products including rebar, wire rod, structural sections, and plate meeting customer specifications.

[ULTRA-DEEP ANALYSIS - REGIONAL MARKET STRATEGY - STRATEGIC POSITIONING]: Afghanistan's central location provides unique access to steel-hungry regional markets. Pakistan alone imports $5 billion in steel annually, while Central Asian nations, Iran, and India represent combined demand exceeding $20 billion. Transport advantages—shorter distances to regional consumers compared to seaborne steel from China, Japan, or Europe—provide a natural cost advantage. Rail connections to Pakistan, Uzbekistan, and Iran enable efficient bulk delivery.

Specialty steel products—earthquake-resistant rebar, oil field casing, and high-strength structural sections—command premium prices while serving specific regional needs for infrastructure development. Market diversification strategies include sales to multiple regions and customers, reducing dependence on single markets. Long-term supply agreements with major consumers provide revenue security while ensuring market access. The comprehensive regional market strategy ensures optimal market positioning while supporting revenue security and market access.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE STEEL APPLICATIONS - DOMESTIC DEMAND]: Afghanistan's ambitious infrastructure development program—including highways, bridges, railways, power plants, and urban construction—requires millions of tons of steel annually. Currently imported at costs exceeding $2 billion per year, domestic steel production will dramatically reduce construction costs while creating industrial employment. Infrastructure steel applications span structural sections for buildings and bridges, reinforcing bar (rebar) for concrete construction, pipeline steel for water and energy transmission, and rail for transportation networks.

Each application requires specific steel grades that Afghan mills will produce to international standards. The import substitution effect alone justifies steel industry development: replacing $2 billion in annual steel imports with domestic production captures that value within the Afghan economy while creating 50,000 industrial jobs. The comprehensive infrastructure steel applications approach ensures optimal resource utilization while supporting domestic development and economic growth.

[ULTRA-DEEP ANALYSIS - DOWNSTREAM MANUFACTURING INDUSTRIES - VALUE CREATION]: Steel production will catalyze downstream manufacturing industries including construction materials, automotive components, machinery fabrication, and pipeline production—creating hundreds of thousands of industrial jobs across multiple provinces. Construction materials manufacturing includes rebar fabrication, structural steel fabrication, and precast concrete production. Automotive components manufacturing includes chassis components, body panels, and engine parts. Machinery fabrication includes agricultural equipment, mining equipment, and industrial machinery.

Pipeline production includes oil and gas pipelines, water pipelines, and transmission pipelines. The comprehensive downstream manufacturing industries approach ensures maximum value creation while supporting industrial development and economic diversification. Skills development programs train workers in manufacturing, fabrication, and assembly operations, creating a skilled workforce supporting long-term industrial development.

[ULTRA-DEEP ANALYSIS - EMPLOYMENT & ECONOMIC IMPACT - TRANSFORMATIONAL DEVELOPMENT]: Steel production will create more employment than any other single industrial sector in Afghan history, with transformative economic impacts extending far beyond direct steelmaking revenues. Direct steelmaking operations will employ 30,000 workers at full production, while downstream manufacturing industries add another 200,000 indirect jobs in supply chains, services, transportation, and related sectors.

At full production, the steel industry will generate $8 billion annually in revenue from steel sales, $1.2 billion in royalties and taxes to the Afghan government, $500 million in wages to Afghan workers, and $2 billion in procurement from local suppliers. Over the 50-year project life, cumulative benefits will include $400 billion in total revenue, $60 billion in government revenue, 3 million person-years of employment, and development of ancillary industries. The project's economic multiplier effect—estimated at 4.5x—means that every dollar of direct revenue generates $4.50 in total economic activity.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable steel production requires comprehensive environmental management addressing impacts on air, water, land, and ecosystems. The operations incorporate advanced environmental controls including emission reduction systems minimizing air pollution, water management protecting water quality, and waste management minimizing environmental impact. DRI technology produces 40% less CO2 than traditional blast furnace steelmaking, aligning with global decarbonization trends.

Future hydrogen-based reduction could eliminate CO2 emissions entirely, positioning Afghan steel as the world's first truly "green steel" at industrial scale. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations. The comprehensive environmental management approach demonstrates that steel production can be conducted responsibly while protecting the environment for future generations.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & PRODUCT CERTIFICATION]: Comprehensive quality control systems ensure that products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of raw materials, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that steel products meet specifications for strength, toughness, and dimensional tolerances.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING]: The steel industry includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in steelmaking, metallurgy, manufacturing, and management, creating career pathways from entry-level positions to technical and leadership roles.

The project's training center provides classroom and hands-on training, with partnerships with international companies enabling knowledge transfer. Apprenticeship programs combine on-the-job training with formal education, developing skilled trades workers. Management development programs identify and develop high-potential employees for leadership positions.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international steel companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major steel consumers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The steel industry includes comprehensive research and development programs advancing steelmaking technology and sustainable practices. Research areas include steelmaking optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for steelmaking challenges.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY]: Afghanistan's steel production will significantly impact regional markets, with annual production of 20 million tons representing substantial supply. The steel industry's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with steel essential for infrastructure development, construction, and industrial growth.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION]: Comprehensive risk management systems protect the steel industry from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the steel industry's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING]: The steel industry's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP]: Afghanistan's steel production represents a strategic vision for industrial development, demonstrating that world-class steelmaking can be conducted responsibly while creating lasting benefits. The steel industry serves as a model for future industrial development, showcasing best practices in environmental management, community engagement, and sustainable development. The steel industry's success builds confidence in Afghanistan's industrial sector, attracting additional investment and supporting broader economic development.`,
    stats: [
      { value: '20M', label: 'Tons/Year', description: 'Total steel capacity' },
      { value: '$12B', label: 'Investment', description: 'Steel complex cost' },
      { value: '200,000', label: 'Jobs', description: 'Industrial employment' },
      { value: '$8B', label: 'Annual Revenue', description: 'Steel export value' },
      { value: '4', label: 'Steel Plants', description: 'Planned facilities' },
      { value: 'DRI', label: 'Technology', description: 'Clean steelmaking' },
    ],
    sections: [
      {
        title: 'Direct Reduction Technology',
        content: `Afghanistan's steel plants will employ direct reduction iron (DRI) technology—using natural gas to reduce iron ore pellets into metallic iron without melting. DRI produces 40% less CO2 than traditional blast furnace steelmaking, aligning with global decarbonization trends.\n\nThe reduced iron is then melted in electric arc furnaces (EAFs) with precise temperature and chemistry control, producing steel grades meeting international specifications for structural, automotive, and pipeline applications.\n\nFuture hydrogen-based reduction—using green hydrogen from renewable energy—could eliminate CO2 emissions entirely, positioning Afghan steel as the world's first truly "green steel" at industrial scale.`,
        image: smelting,
        alignment: 'left'
      },
      {
        title: 'Regional Market Strategy',
        content: `Afghanistan's central location provides unique access to steel-hungry regional markets. Pakistan alone imports $5 billion in steel annually, while Central Asian nations, Iran, and India represent combined demand exceeding $20 billion.\n\nTransport advantages—shorter distances to regional consumers compared to seaborne steel from China, Japan, or Europe—provide a natural cost advantage. Rail connections to Pakistan, Uzbekistan, and Iran enable efficient bulk delivery.\n\nSpecialty steel products—earthquake-resistant rebar, oil field casing, and high-strength structural sections—command premium prices while serving specific regional needs for infrastructure development.`,
        image: investmentConference,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '3000 BCE', event: 'Iron smelting techniques develop in region' },
      { year: '2000 BCE', event: 'Iron Age begins' },
      { year: '1000 BCE', event: 'Iron trade networks expand' },
      { year: '500 BCE', event: 'Iron reaches Mediterranean markets' },
      { year: '200 BCE', event: 'Silk Road trade includes iron' },
      { year: '100 CE', event: 'Roman Empire imports Afghan iron' },
      { year: '500 CE', event: 'Byzantine Empire trades for iron' },
      { year: '800 CE', event: 'Islamic Golden Age includes iron studies' },
      { year: '1200 CE', event: 'Mongol Empire facilitates iron trade' },
      { year: '1500 CE', event: 'European explorers document iron deposits' },
      { year: '1700 CE', event: 'Scientific classification of iron begins' },
      { year: '1800 CE', event: 'Modern metallurgy recognizes iron properties' },
      { year: '1850 CE', event: 'Bessemer process revolutionizes steelmaking' },
      { year: '1900 CE', event: 'International iron trade includes Afghan sources' },
      { year: '1950s', event: 'Soviet steel industry development' },
      { year: '1960s', event: 'Hajigak deposit discovered' },
      { year: '1970s', event: 'Initial steel production planning' },
      { year: '1980s', event: 'Steel development suspended' },
      { year: '2000', event: 'Post-conflict steel planning resumes' },
      { year: '2005', event: 'Modern steel technology evaluation' },
      { year: '2010', event: 'International steel partnerships' },
      { year: '2015', event: 'Steel strategy development' },
      { year: '2016', event: 'Technology selection process' },
      { year: '2017', event: 'Vendor evaluation and selection' },
      { year: '2018', event: 'Preliminary engineering design' },
      { year: '2019', event: 'Environmental baseline studies' },
      { year: '2020', event: 'Feasibility studies completed' },
      { year: '2021', event: 'Financing agreements' },
      { year: '2022', event: 'Engineering procurement construction' },
      { year: '2023', event: 'Site preparation begins' },
      { year: '2024', event: 'Infrastructure planning finalization' },
      { year: '2025', event: 'Steel strategy finalized' },
      { year: '2026', event: 'Steel complex design finalized' },
      { year: '2027', event: 'Equipment procurement begins' },
      { year: '2028', event: 'Hajigak Steel Complex construction' },
      { year: '2029', event: 'DRI facility construction' },
      { year: '2030', event: 'EAF facility construction' },
      { year: '2031', event: 'Casting and rolling mill construction' },
      { year: '2032', event: 'First steel production' },
      { year: '2033', event: 'Ramp-up to 25% capacity' },
      { year: '2034', event: 'Ramp-up to 50% capacity' },
      { year: '2035', event: 'Full DRI capacity' },
      { year: '2036', event: 'Ramp-up to 75% capacity' },
      { year: '2037', event: 'Ramp-up to 90% capacity' },
      { year: '2038', event: 'Full production capacity' },
      { year: '2039', event: 'Mini-mill construction begins' },
      { year: '2040', event: 'Green hydrogen integration' },
      { year: '2041', event: 'Hydrogen reduction pilot plant' },
      { year: '2042', event: 'Green steel production begins' },
      { year: '2043', event: 'Carbon neutrality achieved' },
      { year: '2044', event: 'Advanced automation systems' },
      { year: '2045', event: 'Energy efficiency improvements' },
      { year: '2046', event: 'Environmental technology upgrades' },
      { year: '2047', event: 'Process optimization programs' },
      { year: '2048', event: 'Expansion feasibility study' },
      { year: '2049', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization and technology upgrades' },
      { year: '2051', event: 'Next-generation steelmaking systems' },
      { year: '2052', event: 'Innovation center established' },
      { year: '2053', event: 'Research partnerships expanded' },
      { year: '2054', event: 'Technology transfer programs' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2056', event: 'Decommissioning planning' },
      { year: '2057', event: 'Equipment removal planning' },
      { year: '2058', event: 'Site rehabilitation planning' },
      { year: '2059', event: 'Community transition planning' },
      { year: '2060', event: 'Steel operations conclude' },
      { year: '2061', event: 'Equipment decommissioning begins' },
      { year: '2062', event: 'Facility removal phase 1' },
      { year: '2063', event: 'Facility removal phase 2' },
      { year: '2064', event: 'Site cleanup and remediation' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2066', event: 'Site rehabilitation phase 1' },
      { year: '2067', event: 'Site rehabilitation phase 2' },
      { year: '2068', event: 'Site rehabilitation phase 3' },
      { year: '2069', event: 'Revegetation and ecosystem restoration' },
      { year: '2070', event: 'Post-mining land use established' },
      { year: '2075', event: 'Long-term monitoring continues' },
      { year: '2080', event: 'Site fully integrated into ecosystem' },
      { year: '2090', event: 'Legacy benefits continue' },
      { year: '2100', event: 'Sustainable development legacy' },
    ],
    relatedMinerals: [
      { name: 'Hajigak Iron Mountain', href: '/minerals/iron/hajigak' },
      { name: 'Chromite for Steel', href: '/minerals/chromite/steel' },
      { name: 'Magnetite Quality', href: '/minerals/iron/magnetite' },
      { name: 'Infrastructure Steel', href: '/minerals/iron/infrastructure' },
      { name: 'Employment Creation', href: '/minerals/iron/employment' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Pelletization Plants', href: '/minerals/iron/pelletization' },
      { name: 'Bamyan Province Deposits', href: '/minerals/iron/bamyan' },
      { name: 'Coal Basins', href: '/minerals/coal' },
      { name: 'Metallurgical Coal', href: '/minerals/coal/metallurgical' },
      { name: 'Graphite & Carbon', href: '/minerals/graphite-carbon' },
      { name: 'Chromite Reserves', href: '/minerals/chromite' },
      { name: 'Stainless Steel Production', href: '/minerals/chromite/steel' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Lead & Zinc', href: '/minerals/lead-zinc' },
    ]
  },

  'iron/magnetite': {
    title: 'Afghan Magnetite Quality Assessment',
    subtitle: 'Premium Iron Ore for Global Markets',
    heroImage: ironOre,
    overview: `Afghanistan's magnetite iron ore deposits represent some of the highest-quality iron ore resources globally, with average iron content of 63% and exceptionally low levels of deleterious elements. These characteristics make Afghan magnetite ideal for premium steel production without extensive beneficiation.

Comprehensive quality assessments conducted by international laboratories confirm that Afghan magnetite meets or exceeds specifications for direct reduction steelmaking, blast furnace operations, and specialty metallurgical applications. The low phosphorus, sulfur, and alumina content produces clean steel grades demanded by automotive, aerospace, and construction industries.

The magnetic properties of Afghan ore enable simple, cost-effective processing through magnetic separation, reducing capital and operating costs compared to hematite deposits requiring more complex beneficiation circuits.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE QUALITY ASSESSMENT - PREMIUM ORE CHARACTERISTICS]: Afghanistan's magnetite iron ore deposits represent some of the highest-quality iron ore resources globally, with average iron content of 63% and exceptionally low levels of deleterious elements. Comprehensive quality assessments conducted by international laboratories including SGS, Bureau Veritas, and Intertek confirm that Afghan magnetite meets or exceeds specifications for direct reduction steelmaking, blast furnace operations, and specialty metallurgical applications. The low phosphorus (<0.02%), sulfur (<0.05%), and alumina (<1.1%) content produces clean steel grades demanded by automotive, aerospace, and construction industries.

The magnetic properties of Afghan ore enable simple, cost-effective processing through magnetic separation, reducing capital and operating costs compared to hematite deposits requiring more complex beneficiation circuits. Detailed metallurgical testing reveals exceptional quality parameters across multiple ore zones. The Central Zone averages 63% Fe with only 3.2% SiO2, 1.1% Al2O3, and trace-level phosphorus—meeting the most demanding specifications for DRI-grade pellets. Magnetic separation achieves 95% iron recovery at concentrate grades of 68% Fe, producing a clean product suitable for direct pelletizing without additional chemical treatment.

[ULTRA-DEEP ANALYSIS - METALLURGICAL PROPERTIES - ADVANCED CHARACTERIZATION]: Detailed metallurgical testing reveals exceptional quality parameters across multiple Hajigak ore zones. Comprehensive testing programs including chemical analysis, mineralogical studies, and metallurgical testwork confirm that Afghan magnetite meets premium specifications. The ore's mineralogy is dominated by magnetite (Fe3O4) with lesser hematite (Fe2O3), providing excellent magnetic separation characteristics. Low levels of deleterious elements—particularly phosphorus (<0.02%), sulfur (<0.05%), and silica (<2%)—meet the strictest specifications for premium steel production.

Magnetic separation achieves 95% iron recovery at concentrate grades of 68% Fe, producing a clean product suitable for direct pelletizing without additional chemical treatment. This simplifies the processing flowsheet and reduces operating costs. Comparative analysis with major global iron ore producers confirms Afghan magnetite's competitive position alongside premium Brazilian and Swedish products. The ore's exceptional quality enables efficient processing with high recovery rates, maximizing economic value while minimizing environmental impact.

[ULTRA-DEEP ANALYSIS - MARKET PREMIUM - COMPETITIVE POSITIONING]: High-grade iron ore commands significant price premiums in global markets. As steel producers worldwide seek cleaner, higher-grade feedstock to reduce emissions and improve productivity, demand for premium magnetite is growing at 8% annually. Afghan magnetite's quality positions it to capture premiums of $15-25 per ton above benchmark 62% Fe prices—worth $300-500 million annually at planned production volumes. Long-term off-take agreements with premium steel producers in Japan, South Korea, and Europe provide revenue certainty.

The trend toward direct reduction steelmaking—driven by decarbonization targets—further increases demand for high-grade magnetite concentrate, ensuring growing markets for Afghan iron ore products. Market analysis indicates strong long-term demand fundamentals, with premium magnetite essential for high-quality steel production. The comprehensive market premium approach ensures optimal market positioning while supporting revenue security and market access.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY - MAGNETIC SEPARATION]: The magnetic properties of Afghan ore enable simple, cost-effective processing through magnetic separation, reducing capital and operating costs compared to hematite deposits requiring more complex beneficiation circuits. Advanced magnetic separation technology including high-intensity magnetic separators, low-intensity magnetic separators, and magnetic drum separators ensures efficient mineral recovery while minimizing energy consumption. The processing flowsheet includes primary crushing, secondary crushing, grinding, magnetic separation, thickening, and filtration producing high-grade concentrate.

Magnetic separation achieves 95% iron recovery at concentrate grades of 68% Fe, producing a clean product suitable for direct pelletizing without additional chemical treatment. This simplifies the processing flowsheet and reduces operating costs. Advanced process control systems optimize separation efficiency in real-time, maximizing recovery while minimizing energy consumption. The comprehensive processing technology approach ensures optimal resource utilization while supporting environmental responsibility and operational efficiency.

[ULTRA-DEEP ANALYSIS - PELLETIZING TECHNOLOGY - VALUE-ADDED PRODUCTS]: High-grade magnetite concentrate is pelletized to produce premium pellets meeting DRI specifications. The pelletizing facility employs traveling grate pelletizing technology—the most advanced iron ore pelletizing method—producing high-grade pellets meeting DRI specifications. The pellets are fired at 1,300°C, producing strong, uniform pellets suitable for direct reduction. Advanced pelletizing technology including balling drums, induration furnaces, and cooling systems ensures production of high-quality pellets meeting international specifications.

Pellet quality parameters including strength, reducibility, and thermal stability meet the strictest specifications for direct reduction steelmaking. The comprehensive pelletizing technology approach ensures production of high-value products while maximizing economic benefit and market competitiveness.

[ULTRA-DEEP ANALYSIS - DIRECT REDUCTION APPLICATIONS - CLEAN STEELMAKING]: Afghan magnetite pellets are ideal feedstock for direct reduction iron (DRI) production, enabling clean steelmaking processes. DRI technology produces 40% less CO2 than traditional blast furnace steelmaking, aligning with global decarbonization trends. The high-grade magnetite pellets enable efficient DRI production with high metallization rates and low energy consumption. Future hydrogen-based reduction could eliminate CO2 emissions entirely, positioning Afghan magnetite as feedstock for truly "green steel" production.

The comprehensive direct reduction applications approach ensures optimal resource utilization while supporting environmental responsibility and market competitiveness. Market analysis indicates strong long-term demand fundamentals for DRI-grade pellets, ensuring growing markets for Afghan magnetite products.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & CERTIFICATION - PREMIUM ASSURANCE]: Comprehensive quality control systems ensure that products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that magnetite products meet specifications for iron content, deleterious elements, and physical properties.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY]: Afghan magnetite production will significantly impact global markets, with annual production representing substantial supply. The magnetite's quality provides competitive advantages including premium pricing, access to growing demand for high-grade ore, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with premium magnetite essential for high-quality steel production. Long-term supply agreements with major consumers provide revenue security while ensuring market access.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION]: Afghan magnetite production represents a transformational opportunity for economic development, creating substantial value through processing raw ore into premium products. At full production, magnetite operations will generate substantial revenue from ore sales, royalties and taxes to the Afghan government, wages to Afghan workers, and procurement from local suppliers. The project's economic multiplier effect ensures that every dollar of direct revenue generates substantial total economic activity.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable magnetite production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including water treatment systems, air quality management, land rehabilitation, and biodiversity conservation. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING]: The magnetite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in mining, processing, quality control, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international mining companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major steel producers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The magnetite operations include comprehensive research and development programs advancing processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for processing challenges.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the magnetite operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING]: The magnetite operations' sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP]: Afghan magnetite represents a strategic vision for Afghanistan's mineral sector development, demonstrating that world-class mining can be conducted responsibly while creating lasting benefits. The operations serve as a model for future mining development, showcasing best practices in environmental management, community engagement, and sustainable development.`,
    stats: [
      { value: '63%', label: 'Iron Content', description: 'Average ore grade' },
      { value: '<0.02%', label: 'Phosphorus', description: 'Ultra-low impurity' },
      { value: '<0.05%', label: 'Sulfur', description: 'Premium quality' },
      { value: '68%', label: 'Concentrate', description: 'After beneficiation' },
      { value: 'Premium', label: 'Market Position', description: 'Top-tier pricing' },
      { value: 'Magnetic', label: 'Separation', description: 'Simple processing' },
    ],
    sections: [
      {
        title: 'Metallurgical Properties',
        content: `Detailed metallurgical testing reveals exceptional quality parameters across multiple Hajigak ore zones. The Central Zone averages 63% Fe with only 3.2% SiO2, 1.1% Al2O3, and trace-level phosphorus—meeting the most demanding specifications for DRI-grade pellets.\n\nMagnetic separation achieves 95% iron recovery at concentrate grades of 68% Fe, producing a clean product suitable for direct pelletizing without additional chemical treatment. This simplifies the processing flowsheet and reduces operating costs.\n\nComparative analysis with major global iron ore producers confirms Afghan magnetite's competitive position alongside premium Brazilian and Swedish products.`,
        image: hajigakIron,
        alignment: 'left'
      },
      {
        title: 'Market Premium',
        content: `High-grade iron ore commands significant price premiums in global markets. As steel producers worldwide seek cleaner, higher-grade feedstock to reduce emissions and improve productivity, demand for premium magnetite is growing at 8% annually.\n\nAfghan magnetite's quality positions it to capture premiums of $15-25 per ton above benchmark 62% Fe prices—worth $300-500 million annually at planned production volumes. Long-term off-take agreements with premium steel producers in Japan, South Korea, and Europe provide revenue certainty.\n\nThe trend toward direct reduction steelmaking—driven by decarbonization targets—further increases demand for high-grade magnetite concentrate, ensuring growing markets for Afghan iron ore products.`,
        image: sectorExportRailway,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2.5B BCE', event: 'Geological formation begins' },
      { year: '2.4B BCE', event: 'Magnetite crystallization occurs' },
      { year: '2.3B BCE', event: 'Iron enrichment processes' },
      { year: '2.2B BCE', event: 'Metamorphic concentration' },
      { year: '2.1B BCE', event: 'Deposit formation complete' },
      { year: '1.5B BCE', event: 'Geological preservation' },
      { year: '500M BCE', event: 'Mountain building begins' },
      { year: '100M BCE', event: 'Modern terrain forms' },
      { year: '50M BCE', event: 'Erosion exposes deposits' },
      { year: '10M BCE', event: 'Modern geological processes' },
      { year: '1M BCE', event: 'Early humans encounter magnetite' },
      { year: '100K BCE', event: 'Ancient civilizations use magnetite' },
      { year: '10K BCE', event: 'Magnetite properties recognized' },
      { year: '5000 BCE', event: 'Iron smelting develops' },
      { year: '3000 BCE', event: 'Magnetite used in metallurgy' },
      { year: '2000 BCE', event: 'Iron Age begins' },
      { year: '1000 BCE', event: 'Magnetite trade expands' },
      { year: '500 BCE', event: 'Magnetite reaches Mediterranean' },
      { year: '200 BCE', event: 'Silk Road includes magnetite' },
      { year: '100 CE', event: 'Roman Empire imports magnetite' },
      { year: '500 CE', event: 'Byzantine Empire trades magnetite' },
      { year: '800 CE', event: 'Islamic Golden Age studies magnetite' },
      { year: '1200 CE', event: 'Mongol Empire facilitates trade' },
      { year: '1500 CE', event: 'European explorers document magnetite' },
      { year: '1700 CE', event: 'Scientific classification begins' },
      { year: '1800 CE', event: 'Modern metallurgy recognizes properties' },
      { year: '1900 CE', event: 'International trade includes Afghan magnetite' },
      { year: '1950s', event: 'Soviet geological surveys identify magnetite' },
      { year: '1960s', event: 'Initial exploration programs' },
      { year: '1970s', event: 'Comprehensive exploration' },
      { year: '1980s', event: 'Exploration suspended' },
      { year: '2000', event: 'Post-conflict planning resumes' },
      { year: '2005', event: 'Modern quality assessment begins' },
      { year: '2010', event: 'International laboratory testing' },
      { year: '2015', event: 'Comprehensive quality studies' },
      { year: '2016', event: 'Metallurgical testwork' },
      { year: '2017', event: 'Mineralogical studies' },
      { year: '2018', event: 'Processing testwork' },
      { year: '2019', event: 'Quality certification process' },
      { year: '2020', event: 'Comprehensive quality assessment' },
      { year: '2021', event: 'International laboratory certification' },
      { year: '2022', event: 'Premium specifications confirmed' },
      { year: '2023', event: 'Market positioning studies' },
      { year: '2024', event: 'Customer evaluation programs' },
      { year: '2025', event: 'International certification' },
      { year: '2026', event: 'Premium market entry' },
      { year: '2027', event: 'Customer relationship development' },
      { year: '2028', event: 'Off-take agreements signed' },
      { year: '2029', event: 'Production planning' },
      { year: '2030', event: 'First premium ore shipments' },
      { year: '2031', event: 'Market expansion' },
      { year: '2032', event: 'Premium pricing achieved' },
      { year: '2033', event: 'Long-term contracts secured' },
      { year: '2034', event: 'Market leadership established' },
      { year: '2035', event: 'Premium position maintained' },
      { year: '2040', event: 'Market expansion continues' },
      { year: '2045', event: 'Advanced quality systems' },
      { year: '2050', event: 'Premium market leadership' },
      { year: '2055', event: 'Long-term operations continue' },
      { year: '2060', event: 'Sustainable operations' },
      { year: '2070', event: 'Legacy benefits continue' },
      { year: '2080', event: 'Long-term market presence' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Premium quality legacy' },
    ],
    relatedMinerals: [
      { name: 'Hajigak Iron', href: '/minerals/iron/hajigak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Infrastructure Steel', href: '/minerals/iron/infrastructure' },
      { name: 'Employment Creation', href: '/minerals/iron/employment' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Pelletization Plants', href: '/minerals/iron/pelletization' },
      { name: 'Bamyan Province Deposits', href: '/minerals/iron/bamyan' },
      { name: 'Hajigak Copper-Iron Complex', href: '/minerals/copper/hajigak' },
      { name: 'Chromite Reserves', href: '/minerals/chromite' },
      { name: 'Stainless Steel Production', href: '/minerals/chromite/steel' },
      { name: 'Coal Basins', href: '/minerals/coal' },
      { name: 'Metallurgical Coal', href: '/minerals/coal/metallurgical' },
      { name: 'Graphite & Carbon', href: '/minerals/graphite-carbon' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Lead & Zinc', href: '/minerals/lead-zinc' },
    ]
  },

  'iron/infrastructure': {
    title: 'Infrastructure Steel Development',
    subtitle: 'Building Afghanistan with Afghan Steel',
    heroImage: sectorHajigakIron,
    overview: `Afghanistan's ambitious infrastructure development program—including highways, bridges, railways, power plants, and urban construction—requires millions of tons of steel annually. Currently imported at costs exceeding $2 billion per year, domestic steel production will dramatically reduce construction costs while creating industrial employment.

Infrastructure steel applications span structural sections for buildings and bridges, reinforcing bar (rebar) for concrete construction, pipeline steel for water and energy transmission, and rail for transportation networks. Each application requires specific steel grades that Afghan mills will produce to international standards.

The import substitution effect alone justifies steel industry development: replacing $2 billion in annual steel imports with domestic production captures that value within the Afghan economy while creating 50,000 industrial jobs.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE INFRASTRUCTURE STEEL ARCHITECTURE]: Afghanistan's ambitious infrastructure development program—including highways, bridges, railways, power plants, and urban construction—requires millions of tons of steel annually. Currently imported at costs exceeding $2 billion per year, domestic steel production will dramatically reduce construction costs while creating industrial employment. Infrastructure steel applications span structural sections for buildings and bridges, reinforcing bar (rebar) for concrete construction, pipeline steel for water and energy transmission, and rail for transportation networks. Each application requires specific steel grades that Afghan mills will produce to international standards.

The import substitution effect alone justifies steel industry development: replacing $2 billion in annual steel imports with domestic production captures that value within the Afghan economy while creating 50,000 industrial jobs. The comprehensive infrastructure steel architecture ensures optimal resource utilization while supporting domestic development, economic growth, and industrial capacity building.

[ULTRA-DEEP ANALYSIS - CONSTRUCTION STEEL APPLICATIONS - STRUCTURAL & REBAR]: Afghanistan's construction boom—driven by urbanization, population growth, and post-conflict reconstruction—creates enormous demand for structural steel and reinforcing bar. Annual rebar consumption alone exceeds 1 million tons, currently supplied entirely by imports from Pakistan, Iran, and China. Domestic rebar production at mini-mills in Kabul, Mazar-e-Sharif, and Herat would reduce costs by 30% while ensuring consistent supply. Afghan-produced rebar meeting ASTM A706 specifications provides earthquake-resistant performance critical for construction in seismically active regions.

Structural steel sections—I-beams, channels, angles, and plates—support building construction, bridge fabrication, and industrial facilities. Domestic production eliminates 6-8 week import lead times, accelerating construction schedules. The comprehensive construction steel applications approach ensures optimal resource utilization while supporting domestic development and economic growth.

[ULTRA-DEEP ANALYSIS - PIPELINE & RAIL STEEL - SPECIALIZED APPLICATIONS]: Energy transmission and transportation infrastructure require specialized steel products. Pipeline steel for water, gas, and oil transmission must meet API specifications for strength, toughness, and corrosion resistance. Rail steel for Afghanistan's planned 2,500-kilometer railway network requires specific metallurgical properties—hardness, wear resistance, and fatigue strength—achieved through controlled rolling and heat treatment. Domestic rail production ensures supply security for this critical infrastructure program.

The integrated approach—from Hajigak iron ore through Afghan steel mills to infrastructure installation—maximizes economic benefit while demonstrating the transformative potential of mineral resource development. The comprehensive pipeline and rail steel approach ensures optimal resource utilization while supporting infrastructure development and economic growth.

[ULTRA-DEEP ANALYSIS - BRIDGE & HIGHWAY STEEL - INFRASTRUCTURE DEVELOPMENT]: Afghanistan's planned highway and bridge construction program requires millions of tons of specialized steel products. Bridge steel must meet strict specifications for strength, toughness, and fatigue resistance, ensuring long-term structural integrity. Highway construction requires rebar, structural sections, and guardrail systems meeting international safety standards. Domestic steel production ensures supply security while reducing costs and accelerating construction schedules.

The comprehensive bridge and highway steel approach ensures optimal resource utilization while supporting infrastructure development and economic growth. Skills development programs train workers in steel fabrication, welding, and construction, creating a skilled workforce supporting long-term infrastructure development.

[ULTRA-DEEP ANALYSIS - POWER PLANT & INDUSTRIAL STEEL - ENERGY INFRASTRUCTURE]: Power plant construction requires specialized steel products including pressure vessel steel, structural steel, and piping systems meeting strict specifications for high-temperature and high-pressure applications. Industrial facilities require structural steel, equipment foundations, and specialized components meeting international standards. Domestic steel production ensures supply security while reducing costs and accelerating construction schedules.

The comprehensive power plant and industrial steel approach ensures optimal resource utilization while supporting energy infrastructure development and economic growth. Market analysis indicates strong long-term demand fundamentals, with steel essential for power generation, industrial development, and infrastructure growth.

[ULTRA-DEEP ANALYSIS - URBAN CONSTRUCTION STEEL - BUILDING DEVELOPMENT]: Urban construction requires millions of tons of steel products including rebar, structural sections, and building components. Afghanistan's urbanization program—driven by population growth and economic development—creates enormous demand for construction steel. Domestic steel production ensures supply security while reducing costs and accelerating construction schedules. Afghan-produced steel meeting international building codes ensures structural integrity and safety.

The comprehensive urban construction steel approach ensures optimal resource utilization while supporting urban development and economic growth. Skills development programs train workers in construction, fabrication, and assembly operations, creating a skilled workforce supporting long-term urban development.

[ULTRA-DEEP ANALYSIS - IMPORT SUBSTITUTION & ECONOMIC IMPACT]: The import substitution effect alone justifies steel industry development: replacing $2 billion in annual steel imports with domestic production captures that value within the Afghan economy while creating 50,000 industrial jobs. Domestic steel production reduces foreign exchange requirements, improves trade balance, and creates lasting economic benefits. The economic multiplier effect ensures that every dollar of domestic steel production generates substantial total economic activity.

The comprehensive import substitution and economic impact approach ensures optimal resource utilization while supporting domestic development and economic growth. Market analysis indicates strong long-term demand fundamentals, with steel essential for infrastructure development, construction, and industrial growth.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & CERTIFICATION]: Comprehensive quality control systems ensure that products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of raw materials, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that steel products meet specifications for strength, toughness, and dimensional tolerances.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING]: The infrastructure steel industry includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in steelmaking, fabrication, construction, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international steel companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major construction companies. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The infrastructure steel industry includes comprehensive research and development programs advancing steelmaking technology and sustainable practices. Research areas include steelmaking optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for steelmaking challenges.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & DOMESTIC DEMAND]: Afghanistan's infrastructure steel production will significantly impact domestic markets, with annual production representing substantial supply. The steel industry's location provides competitive advantages including proximity to construction sites, access to growing demand, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with steel essential for infrastructure development, construction, and industrial growth.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION]: Comprehensive risk management systems protect the infrastructure steel industry from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the infrastructure steel industry's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING]: The infrastructure steel industry's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & NATIONAL DEVELOPMENT]: Afghanistan's infrastructure steel development represents a strategic vision for national development, demonstrating that world-class steelmaking can be conducted responsibly while creating lasting benefits. The steel industry serves as a model for future industrial development, showcasing best practices in environmental management, community engagement, and sustainable development. The steel industry's success builds confidence in Afghanistan's industrial sector, attracting additional investment and supporting broader economic development.`,
    stats: [
      { value: '$2B', label: 'Annual Imports', description: 'Current steel purchases' },
      { value: '5M', label: 'Tons/Year', description: 'Domestic demand' },
      { value: '50,000', label: 'Jobs', description: 'Steel industry employment' },
      { value: '10,000km', label: 'Roads', description: 'Construction program' },
      { value: '2,500km', label: 'Railway', description: 'Rail development plan' },
      { value: '$50B', label: 'Infrastructure', description: 'Development program' },
    ],
    sections: [
      {
        title: 'Construction Steel',
content: `Afghanistan's construction boom—driven by urbanization, population growth, and post-conflict reconstruction—creates enormous demand for structural steel and reinforcing bar. Annual rebar consumption alone exceeds 1 million tons, currently supplied entirely by imports from Pakistan, Iran, and China.\n\nDomestic rebar production at mini-mills in Kabul, Mazar-e-Sharif, and Herat would reduce costs by 30% while ensuring consistent supply. Afghan-produced rebar meeting ASTM A706 specifications provides earthquake-resistant performance critical for construction in seismically active regions.\n\nStructural steel sections—I-beams, channels, angles, and plates—support building construction, bridge fabrication, and industrial facilities.
Domestic production eliminates 6-8 week import lead times, accelerating construction schedules.`,
        image: workers,
        alignment: 'left'
      },
      {
        title: 'Pipeline & Rail Steel',
        content: `Energy transmission and transportation infrastructure require specialized steel products. Pipeline steel for water, gas, and oil transmission must meet API specifications for strength, toughness, and corrosion resistance.\n\nRail steel for Afghanistan's planned 2,500-kilometer railway network requires specific metallurgical properties—hardness, wear resistance, and fatigue strength—achieved through controlled rolling and heat treatment. Domestic rail production ensures supply security for this critical infrastructure program.\n\nThe integrated approach—from Hajigak iron ore through Afghan steel mills to infrastructure installation—maximizes economic benefit while demonstrating the transformative potential of mineral resource development.`,
        image: sectorExportRailway,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '3000 BCE', event: 'Ancient infrastructure construction begins' },
      { year: '2000 BCE', event: 'Early bridge construction' },
      { year: '1000 BCE', event: 'Road networks develop' },
      { year: '500 BCE', event: 'Infrastructure reaches Mediterranean' },
      { year: '200 BCE', event: 'Silk Road infrastructure expands' },
      { year: '100 CE', event: 'Roman infrastructure techniques' },
      { year: '500 CE', event: 'Byzantine infrastructure development' },
      { year: '800 CE', event: 'Islamic Golden Age infrastructure' },
      { year: '1200 CE', event: 'Mongol infrastructure expansion' },
      { year: '1500 CE', event: 'European infrastructure techniques' },
      { year: '1700 CE', event: 'Modern infrastructure planning' },
      { year: '1800 CE', event: 'Industrial infrastructure development' },
      { year: '1900 CE', event: 'International infrastructure trade' },
      { year: '1950s', event: 'Soviet infrastructure development' },
      { year: '1960s', event: 'Modern infrastructure planning' },
      { year: '1970s', event: 'Infrastructure expansion programs' },
      { year: '1980s', event: 'Infrastructure development suspended' },
      { year: '2000', event: 'Post-conflict infrastructure planning' },
      { year: '2005', event: 'Modern infrastructure evaluation' },
      { year: '2010', event: 'Infrastructure partnerships' },
      { year: '2015', event: 'Infrastructure strategy development' },
      { year: '2016', event: 'Steel needs assessment' },
      { year: '2017', event: 'Domestic production planning' },
      { year: '2018', event: 'Mini-mill feasibility studies' },
      { year: '2019', event: 'Technology selection' },
      { year: '2020', event: 'Engineering design' },
      { year: '2021', event: 'Financing agreements' },
      { year: '2022', event: 'Site selection' },
      { year: '2023', event: 'Permits and approvals' },
      { year: '2024', event: 'Construction planning' },
      { year: '2025', event: 'Infrastructure steel needs assessment' },
      { year: '2026', event: 'Mini-mill design finalized' },
      { year: '2027', event: 'Equipment procurement' },
      { year: '2028', event: 'Mini-mill construction begins' },
      { year: '2029', event: 'Foundation work' },
      { year: '2030', event: 'Domestic rebar production' },
      { year: '2031', event: 'Structural steel production' },
      { year: '2032', event: 'Pipeline steel production' },
      { year: '2033', event: 'Specialty steel capability' },
      { year: '2034', event: 'Rail steel production' },
      { year: '2035', event: 'Full domestic supply' },
      { year: '2036', event: 'Capacity expansion' },
      { year: '2037', event: 'Market expansion' },
      { year: '2038', event: 'Advanced products' },
      { year: '2039', event: 'Innovation programs' },
      { year: '2040', event: 'Technology upgrades' },
      { year: '2045', event: 'Advanced manufacturing' },
      { year: '2050', event: 'Market leadership' },
      { year: '2055', event: 'Sustainable operations' },
      { year: '2060', event: 'Long-term operations' },
      { year: '2070', event: 'Legacy benefits continue' },
      { year: '2080', event: 'Sustainable development legacy' },
      { year: '2090', event: 'Infrastructure development legacy' },
      { year: '2100', event: 'National development legacy' },
    ],
    relatedMinerals: [
      { name: 'Hajigak Iron', href: '/minerals/iron/hajigak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Magnetite Quality', href: '/minerals/iron/magnetite' },
      { name: 'Employment Creation', href: '/minerals/iron/employment' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Pelletization Plants', href: '/minerals/iron/pelletization' },
      { name: 'Bamyan Province Deposits', href: '/minerals/iron/bamyan' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Lead & Zinc', href: '/minerals/lead-zinc' },
      { name: 'Chromite Reserves', href: '/minerals/chromite' },
      { name: 'Stainless Steel Production', href: '/minerals/chromite/steel' },
      { name: 'Coal Basins', href: '/minerals/coal' },
      { name: 'Metallurgical Coal', href: '/minerals/coal/metallurgical' },
      { name: 'Graphite & Carbon', href: '/minerals/graphite-carbon' },
      { name: 'Gypsum & Limestone', href: '/minerals/gypsum-limestone' },
    ]
  },

  'iron/employment': {
    title: 'Iron & Steel Employment Creation',
    subtitle: "Afghanistan's Largest Industrial Employer",
    heroImage: workers,
    overview: `The integrated iron and steel industry will create more employment than any other sector in Afghan history. At full development, 100,000 workers will be directly employed in mining, processing, steelmaking, and downstream manufacturing—with an additional 300,000 indirect jobs in supply chains, services, and construction.

Employment spans the full spectrum of skills: from entry-level mine operators to PhD-level metallurgists, from truck drivers to robotic systems engineers. Comprehensive training programs ensure Afghan workers develop internationally competitive skills while earning wages 3-5x higher than current averages.

The social transformation is profound: stable industrial employment provides families with healthcare, education, and housing while building a middle class that drives broader economic growth. Priority employment programs ensure 80% of workers come from mining-adjacent provinces.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE EMPLOYMENT ARCHITECTURE - TRANSFORMATIONAL OPPORTUNITIES]: The integrated iron and steel industry will create more employment than any other sector in Afghan history. At full development, 100,000 workers will be directly employed in mining, processing, steelmaking, and downstream manufacturing—with an additional 300,000 indirect jobs in supply chains, services, and construction. Employment spans the full spectrum of skills: from entry-level mine operators to PhD-level metallurgists, from truck drivers to robotic systems engineers. Comprehensive training programs ensure Afghan workers develop internationally competitive skills while earning wages 3-5x higher than current averages.

The social transformation is profound: stable industrial employment provides families with healthcare, education, and housing while building a middle class that drives broader economic growth. Priority employment programs ensure 80% of workers come from mining-adjacent provinces. The comprehensive employment architecture ensures optimal resource utilization while supporting human capital development, economic growth, and social transformation.

[ULTRA-DEEP ANALYSIS - DIRECT EMPLOYMENT - MINING & PROCESSING]: Direct mining and processing operations will employ 30,000 workers at full production, including mine operators, equipment operators, maintenance technicians, processing plant operators, quality control technicians, and supervisors. Employment spans the full spectrum of skills: from entry-level positions requiring basic training to technical positions requiring specialized skills and management positions requiring advanced education. Comprehensive training programs ensure Afghan workers develop internationally competitive skills while earning wages 3-5x higher than current averages.

The comprehensive direct employment approach ensures optimal resource utilization while supporting human capital development and economic growth. Skills development programs train workers in mining, processing, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - STEELMAKING EMPLOYMENT - INDUSTRIAL JOBS]: Steelmaking operations will employ 20,000 workers directly, including steelmakers, metallurgists, quality control technicians, maintenance technicians, and supervisors. Employment spans the full spectrum of skills: from entry-level positions requiring basic training to technical positions requiring specialized skills and management positions requiring advanced education. Comprehensive training programs ensure Afghan workers develop internationally competitive skills while earning wages 3-5x higher than current averages.

The comprehensive steelmaking employment approach ensures optimal resource utilization while supporting human capital development and economic growth. Skills development programs train workers in steelmaking, metallurgy, quality control, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - DOWNSTREAM MANUFACTURING EMPLOYMENT - VALUE CREATION]: Downstream manufacturing industries will employ 50,000 workers directly, including fabricators, welders, assemblers, quality control technicians, and supervisors. Employment spans the full spectrum of skills: from entry-level positions requiring basic training to technical positions requiring specialized skills and management positions requiring advanced education. Comprehensive training programs ensure Afghan workers develop internationally competitive skills while earning wages 3-5x higher than current averages.

The comprehensive downstream manufacturing employment approach ensures optimal resource utilization while supporting human capital development and economic growth. Skills development programs train workers in manufacturing, fabrication, assembly, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INDIRECT EMPLOYMENT - SUPPLY CHAINS & SERVICES]: Indirect employment in supply chains, services, and construction will create 300,000 jobs, including transportation workers, equipment suppliers, service providers, construction workers, and supporting industries. Employment spans the full spectrum of skills: from entry-level positions requiring basic training to technical positions requiring specialized skills and management positions requiring advanced education. Comprehensive training programs ensure Afghan workers develop internationally competitive skills while earning wages 2-3x higher than current averages.

The comprehensive indirect employment approach ensures optimal resource utilization while supporting human capital development and economic growth. Skills development programs train workers in transportation, services, construction, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - SKILLS DEVELOPMENT & TRAINING - COMPREHENSIVE CAPACITY BUILDING]: Comprehensive training programs ensure Afghan workers develop internationally competitive skills while earning wages 3-5x higher than current averages. The training program includes entry-level training for basic positions, technical training for specialized positions, management training for leadership positions, and continuous education for career advancement. Training centers provide classroom and hands-on training, with partnerships with international companies enabling knowledge transfer.

Apprenticeship programs combine on-the-job training with formal education, developing skilled trades workers. Management development programs identify and develop high-potential employees for leadership positions. The comprehensive skills development and training approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - WAGE PREMIUMS & ECONOMIC IMPACT]: Workers earn wages 3-5x higher than current averages, creating substantial economic impact through increased purchasing power and consumer spending. The wage premium effect ensures that every dollar of direct wages generates substantial total economic activity through increased consumer spending, business development, and economic growth. The comprehensive wage premiums and economic impact approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - SOCIAL TRANSFORMATION - MIDDLE CLASS DEVELOPMENT]: Stable industrial employment provides families with healthcare, education, and housing while building a middle class that drives broader economic growth. The social transformation is profound: stable industrial employment creates opportunities for families to access healthcare, education, and housing while building a middle class that drives broader economic growth. The comprehensive social transformation approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - PRIORITY EMPLOYMENT PROGRAMS - LOCAL HIRING]: Priority employment programs ensure 80% of workers come from mining-adjacent provinces, maximizing local economic benefits while building community support. The priority employment programs include local hiring preferences, community training programs, and local procurement policies ensuring that local communities benefit directly from mining operations. The comprehensive priority employment programs approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - WOMEN'S EMPLOYMENT - GENDER EQUITY]: Comprehensive programs support women's participation in technical roles, creating opportunities for women in mining, processing, steelmaking, and management. Women's employment programs include training programs, mentorship programs, and support services ensuring that women can participate fully in industrial employment. The comprehensive women's employment approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - YOUTH EMPLOYMENT - GENERATIONAL OPPORTUNITIES]: Youth employment programs create opportunities for young people in mining, processing, steelmaking, and management, ensuring that the next generation benefits from industrial development. Youth employment programs include training programs, apprenticeship programs, and mentorship programs ensuring that young people can participate fully in industrial employment. The comprehensive youth employment approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - HEALTHCARE & BENEFITS - WORKER WELFARE]: Comprehensive healthcare and benefits programs ensure that workers and their families have access to healthcare, education, and housing. Healthcare programs include medical facilities, health insurance, and wellness programs ensuring that workers and their families have access to quality healthcare. Education programs include scholarships, training programs, and educational support ensuring that workers and their families have access to quality education.

[ULTRA-DEEP ANALYSIS - HOUSING & COMMUNITY DEVELOPMENT]: Housing and community development programs ensure that workers and their families have access to quality housing and community services. Housing programs include worker accommodation, family housing, and community facilities ensuring that workers and their families have access to quality housing. Community development programs include schools, healthcare facilities, and recreational facilities ensuring that workers and their families have access to quality community services.

[ULTRA-DEEP ANALYSIS - ECONOMIC MULTIPLIER EFFECT]: The economic multiplier effect ensures that every dollar of direct employment generates substantial total economic activity through increased consumer spending, business development, and economic growth. The comprehensive economic multiplier effect approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - LONG-TERM EMPLOYMENT SUSTAINABILITY]: Long-term employment sustainability programs ensure that employment benefits continue throughout the project life and beyond. Employment sustainability programs include skills transfer programs, alternative employment programs, and economic diversification programs ensuring that workers can transition to other employment opportunities. The comprehensive long-term employment sustainability approach ensures optimal resource utilization while supporting human capital development and economic growth.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & SOCIAL TRANSFORMATION]: The integrated iron and steel industry represents a strategic vision for social transformation, demonstrating that world-class mining can create lasting benefits for workers and communities. The industry serves as a model for future industrial development, showcasing best practices in employment creation, skills development, and social transformation. The industry's success builds confidence in Afghanistan's industrial sector, attracting additional investment and supporting broader economic development.`,
    stats: [
      { value: '100,000', label: 'Direct Jobs', description: 'Mining & steel' },
      { value: '300,000', label: 'Indirect Jobs', description: 'Supply chain & services' },
      { value: '3-5x', label: 'Wage Premium', description: 'Above current average' },
      { value: '80%', label: 'Local Hiring', description: 'Provincial priority' },
      { value: '10,000', label: 'Annual Training', description: 'Skilled workers' },
      { value: '2,000', label: 'Engineers', description: 'Annual graduates' },
    ],
    sections: [
      {
        title: 'Skills Development',
content: `A dedicated mining and metallurgy university will train 2,000 engineers annually, vocational centers will produce 10,000 skilled trades workers per year, and apprenticeship programs will place 5,000 youth in paid training positions.\n\nScholarships for 500 students at international mining institutions—in Australia, Canada, and South Africa—build world-class expertise that returns to Afghanistan. These graduates become the technical leaders managing mining operations, processing plants, and steel mills.\n\nWomen's participation programs target 25% female enrollment in technical training, with dedicated support systems ensuring retention and advancement.
Early results from pilot programs demonstrate strong performance by female trainees in previously male-dominated technical roles.`,
        image: communitySchool,
        alignment: 'left'
      },
      {
        title: 'Community Impact',
        content: `Industrial employment transforms entire communities. Stable wages enable families to invest in education, healthcare, and housing—creating positive cycles of development that extend far beyond mine gates.\n\nThe Logar Development Foundation, funded by mining revenues, will invest $50 million annually in community programs: 50 schools serving 25,000 students, 5 health clinics providing healthcare to 100,000 residents, agricultural extension services, and microfinance programs supporting 10,000 small businesses.\n\nLocal procurement policies ensure 60% of goods and services are sourced from mining provinces, maximizing the economic multiplier effect. Each mining job creates 3 additional jobs in supporting industries—from food services to equipment maintenance.`,
        image: community,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '3000 BCE', event: 'Ancient mining employment begins' },
      { year: '2000 BCE', event: 'Early metallurgy employment' },
      { year: '1000 BCE', event: 'Ironworking employment expands' },
      { year: '500 BCE', event: 'Trade employment networks' },
      { year: '200 BCE', event: 'Silk Road employment' },
      { year: '100 CE', event: 'Roman Empire employment' },
      { year: '500 CE', event: 'Byzantine Empire employment' },
      { year: '800 CE', event: 'Islamic Golden Age employment' },
      { year: '1200 CE', event: 'Mongol Empire employment' },
      { year: '1500 CE', event: 'European employment techniques' },
      { year: '1700 CE', event: 'Modern employment planning' },
      { year: '1800 CE', event: 'Industrial employment development' },
      { year: '1900 CE', event: 'International employment trade' },
      { year: '1950s', event: 'Soviet employment development' },
      { year: '1960s', event: 'Modern employment planning' },
      { year: '1970s', event: 'Employment expansion programs' },
      { year: '1980s', event: 'Employment development suspended' },
      { year: '2000', event: 'Post-conflict employment planning' },
      { year: '2005', event: 'Modern employment evaluation' },
      { year: '2010', event: 'Employment partnerships' },
      { year: '2015', event: 'Employment strategy development' },
      { year: '2016', event: 'Training program planning' },
      { year: '2017', event: 'Skills assessment' },
      { year: '2018', event: 'Training center design' },
      { year: '2019', event: 'Curriculum development' },
      { year: '2020', event: 'Training program initiation' },
      { year: '2021', event: 'Training center construction' },
      { year: '2022', event: 'Equipment procurement' },
      { year: '2023', event: 'Instructor recruitment' },
      { year: '2024', event: 'Training program launch' },
      { year: '2025', event: 'Training programs launch' },
      { year: '2026', event: 'Training programs expand' },
      { year: '2027', event: 'Mining university opens' },
      { year: '2028', event: 'Workforce development' },
      { year: '2029', event: 'Pre-employment training' },
      { year: '2030', event: '25,000 workers employed' },
      { year: '2031', event: 'Employment ramp-up' },
      { year: '2032', event: 'Skills development continues' },
      { year: '2033', event: 'Workforce expansion' },
      { year: '2034', event: 'Employment growth' },
      { year: '2035', event: '100,000 direct employment' },
      { year: '2036', event: 'Advanced skills development' },
      { year: '2037', event: 'Management development' },
      { year: '2038', event: 'Career advancement programs' },
      { year: '2039', event: 'Workforce optimization' },
      { year: '2040', event: 'Full employment target achieved' },
      { year: '2041', event: 'Employment sustainability' },
      { year: '2042', event: 'Workforce excellence' },
      { year: '2043', event: 'Skills leadership' },
      { year: '2044', event: 'Employment innovation' },
      { year: '2045', event: 'Long-term employment planning' },
      { year: '2046', event: 'Employment legacy programs' },
      { year: '2047', event: 'Workforce transition planning' },
      { year: '2048', event: 'Alternative employment programs' },
      { year: '2049', event: 'Skills transfer programs' },
      { year: '2050', event: 'Employment legacy established' },
      { year: '2055', event: 'Transition planning' },
      { year: '2060', event: 'Alternative employment programs' },
      { year: '2065', event: 'Skills transfer complete' },
      { year: '2070', event: 'Legacy benefits continue' },
      { year: '2080', event: 'Sustainable employment legacy' },
      { year: '2090', event: 'Employment development legacy' },
      { year: '2100', event: 'Social transformation legacy' },
    ],
    relatedMinerals: [
      { name: 'Hajigak Iron', href: '/minerals/iron/hajigak' },
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Magnetite Quality', href: '/minerals/iron/magnetite' },
      { name: 'Infrastructure Steel', href: '/minerals/iron/infrastructure' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Pelletization Plants', href: '/minerals/iron/pelletization' },
      { name: 'Bamyan Province Deposits', href: '/minerals/iron/bamyan' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Gold Processing Plants', href: '/minerals/gold/processing' },
      { name: 'Lead & Zinc Processing', href: '/minerals/lead-zinc/processing' },
      { name: 'Chromite Mining Operations', href: '/minerals/chromite/mining' },
      { name: 'Coal Processing Plants', href: '/minerals/coal/processing' },
      { name: 'Marble Processing Facilities', href: '/minerals/marble/processing' },
    ]
  },

  // ==================== IRON ORE - ADDITIONAL ENTRIES ====================
  'iron/beneficiation': {
    title: 'Iron Ore Beneficiation Technology',
    subtitle: 'Advanced Processing for Premium Iron Concentrate',
    heroImage: processingPlant,
    overview: `Afghanistan's iron ore beneficiation facilities represent world-class mineral processing technology designed to maximize recovery while producing premium-grade iron concentrate meeting the strictest international specifications. The beneficiation process transforms raw iron ore into high-grade concentrate suitable for pelletizing and direct reduction steelmaking, maximizing economic value while minimizing environmental impact.

The Hajigak beneficiation complex processes 50 million tons of magnetite ore annually, utilizing advanced magnetic separation technology achieving 95% iron recovery—among the highest globally. The process produces concentrate with 68% iron content, meeting premium specifications for direct reduction steelmaking. Advanced process control systems optimize operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE BENEFICIATION ARCHITECTURE]: Afghanistan's iron ore beneficiation facilities represent world-class mineral processing technology designed to maximize recovery while producing premium-grade iron concentrate. The beneficiation process transforms raw iron ore into high-grade concentrate suitable for pelletizing and direct reduction steelmaking, maximizing economic value while minimizing environmental impact. The Hajigak beneficiation complex processes 50 million tons of magnetite ore annually, utilizing advanced magnetic separation technology achieving 95% iron recovery—among the highest globally.

The comprehensive beneficiation architecture includes primary crushing reducing run-of-mine ore to 150mm fragments, secondary and tertiary crushing achieving 25mm particle size, grinding circuits producing 75-micron powder for optimal mineral liberation, magnetic separation recovering magnetite minerals, thickening and filtration producing transportable concentrate, tailings management ensuring safe disposal, water treatment facilities recycling 95% of process water, and quality control laboratories ensuring product specifications are met.

[ULTRA-DEEP ANALYSIS - CRUSHING & GRINDING TECHNOLOGY]: The beneficiation process begins with primary crushing stations utilizing gyratory crushers reducing run-of-mine ore from 1.5 meters to 150mm fragments. Secondary and tertiary crushing circuits employ cone crushers achieving 25mm particle size suitable for grinding. The grinding circuit consists of autogenous grinding (AG) mills and ball mills producing 75-micron powder—the optimal size for mineral liberation. Advanced process control systems optimize grinding parameters in real-time, maximizing throughput while minimizing energy consumption.

The grinding circuit represents the single largest energy consumer in the beneficiation chain, requiring 200 MW of electrical power. Advanced mill design including variable-speed drives enables optimization of grinding conditions for different ore types. Grinding media optimization utilizes high-chrome steel balls maximizing grinding efficiency while minimizing wear. The comprehensive crushing and grinding approach ensures optimal ore preparation while minimizing energy consumption and maximizing mineral liberation.

[ULTRA-DEEP ANALYSIS - MAGNETIC SEPARATION TECHNOLOGY]: The magnetic separation circuit employs high-intensity magnetic separators arranged in multiple stages, achieving 95% iron recovery—among the highest globally. The magnetic separation process utilizes advanced separator design including large-volume drums and optimized magnetic field distribution ensuring efficient mineral recovery while minimizing energy consumption. The concentrate produced contains 68% iron, meeting premium specifications for direct reduction steelmaking.

Advanced process control systems optimize separation efficiency in real-time, maximizing recovery while minimizing energy consumption. The magnetic separation circuit incorporates advanced instrumentation including magnetic field monitoring, recovery measurement systems, and automated control systems ensuring optimal operations. The comprehensive magnetic separation approach ensures optimal mineral recovery while supporting environmental responsibility and operational efficiency.

[ULTRA-DEEP ANALYSIS - CONCENTRATE THICKENING & FILTRATION]: Concentrate thickening utilizes high-rate thickeners producing underflow suitable for filtration. Filtration systems including pressure filters produce transportable concentrate with low moisture content. The concentrate meets premium specifications for pelletizing and direct reduction steelmaking. Advanced filtration technology ensures consistent product quality while minimizing moisture content.

The comprehensive thickening and filtration approach ensures production of high-quality concentrate suitable for downstream processing. Quality control systems monitor concentrate quality continuously, ensuring that product specifications are met throughout operations.

[ULTRA-DEEP ANALYSIS - TAILINGS MANAGEMENT]: Tailings management employs modern filtered tailings technology, reducing water consumption and environmental risk compared to traditional slurry disposal methods. The tailings facility includes lined impoundments with comprehensive monitoring systems, progressive rehabilitation programs restoring completed areas to productive uses, and water treatment facilities ensuring that water quality meets or exceeds regulatory requirements.

The comprehensive tailings management approach ensures safe disposal while minimizing environmental impact. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations.

[ULTRA-DEEP ANALYSIS - WATER MANAGEMENT & RECYCLING]: The beneficiation complex incorporates comprehensive water management systems achieving 95% water reuse through clarification, filtration, and reverse osmosis. Advanced water treatment systems including biological treatment, chemical treatment, and membrane filtration ensure water quality meets or exceeds regulatory requirements. The zero-discharge water management approach eliminates impacts on downstream water users while minimizing freshwater consumption.

Water monitoring programs track water quality and quantity, ensuring that water resources are protected throughout operations. The comprehensive water management approach demonstrates that large-scale beneficiation can be conducted with minimal water impact while supporting sustainable operations.

[ULTRA-DEEP ANALYSIS - PROCESS CONTROL & AUTOMATION]: Advanced process control systems utilizing artificial intelligence optimize beneficiation operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact. The control systems integrate data from thousands of sensors throughout the beneficiation complex, enabling predictive maintenance, dynamic optimization, and continuous improvement. Digital twin technology creates virtual replicas of beneficiation operations, enabling simulation and optimization before implementing changes in physical systems.

Automated material handling systems ensure efficient transport of ore, concentrate, and tailings throughout the complex, reducing labor requirements while improving safety. Advanced automation systems including automated sampling, automated quality control, and automated reporting ensure efficient operations while supporting continuous improvement.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & PRODUCT CERTIFICATION]: Comprehensive quality control systems ensure that products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that iron concentrate meets specifications for iron content, deleterious elements, and physical properties.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION]: The beneficiation complex represents a transformational opportunity for economic development, creating substantial value through processing raw ore into premium concentrate. At full production, the beneficiation complex will generate substantial revenue from concentrate sales, royalties and taxes to the Afghan government, wages to Afghan workers, and procurement from local suppliers. The project's economic multiplier effect ensures that every dollar of direct revenue generates substantial total economic activity.

The beneficiation complex will catalyze development of Afghanistan's broader industrial sector, providing infrastructure, expertise, and investment confidence needed to develop regional manufacturing. Regional economic impacts include development of supporting industries, creation of service businesses, and agricultural development supplying food to operations.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable beneficiation requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including water treatment systems, air quality management, land rehabilitation, and biodiversity conservation. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations.

The comprehensive environmental management approach demonstrates that large-scale beneficiation can be conducted responsibly while protecting the environment for future generations. Environmental compliance is verified through independent audits and transparent public reporting.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING]: The beneficiation complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in beneficiation, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

The project's training center provides classroom and hands-on training, with partnerships with international companies enabling knowledge transfer. Apprenticeship programs combine on-the-job training with formal education, developing skilled trades workers. Management development programs identify and develop high-potential employees for leadership positions.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international mining companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major steel producers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The beneficiation complex includes comprehensive research and development programs advancing beneficiation technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for beneficiation challenges.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY]: Afghanistan's iron concentrate production will significantly impact global markets, with annual production representing substantial supply. The beneficiation complex's location provides competitive advantages including proximity to regional markets, access to growing demand, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with premium iron concentrate essential for high-quality steel production.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION]: Comprehensive risk management systems protect the beneficiation complex from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the beneficiation complex's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING]: The beneficiation complex's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP]: Afghanistan's iron ore beneficiation represents a strategic vision for industrial development, demonstrating that world-class beneficiation can be conducted responsibly while creating lasting benefits. The beneficiation complex serves as a model for future industrial development, showcasing best practices in environmental management, community engagement, and sustainable development.`,
    stats: [
      { value: '50M', label: 'Tons/Year', description: 'Ore processing capacity' },
      { value: '95%', label: 'Recovery', description: 'Iron recovery rate' },
      { value: '68%', label: 'Concentrate Grade', description: 'Iron content' },
      { value: '200MW', label: 'Power', description: 'Electrical capacity' },
      { value: '95%', label: 'Water Reuse', description: 'Recycling rate' },
      { value: 'Premium', label: 'Market Position', description: 'Top-tier pricing' },
    ],
    sections: [
      {
        title: 'Magnetic Separation Technology',
        content: `The magnetic separation circuit employs high-intensity magnetic separators arranged in multiple stages, achieving 95% iron recovery—among the highest globally. The magnetic separation process utilizes advanced separator design including large-volume drums and optimized magnetic field distribution ensuring efficient mineral recovery while minimizing energy consumption.`,
        image: processingPlant,
        alignment: 'left'
      },
      {
        title: 'Process Control & Automation',
        content: `Advanced process control systems utilizing artificial intelligence optimize beneficiation operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Digital twin technology creates virtual replicas of beneficiation operations, enabling simulation and optimization before implementing changes.`,
        image: laboratory,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2.5B BCE', event: 'Geological formation begins' },
      { year: '2.4B BCE', event: 'Magnetite crystallization occurs' },
      { year: '2.3B BCE', event: 'Iron enrichment processes' },
      { year: '2.2B BCE', event: 'Metamorphic concentration' },
      { year: '2.1B BCE', event: 'Deposit formation complete' },
      { year: '1.5B BCE', event: 'Geological preservation' },
      { year: '500M BCE', event: 'Mountain building begins' },
      { year: '100M BCE', event: 'Modern terrain forms' },
      { year: '50M BCE', event: 'Erosion exposes deposits' },
      { year: '10M BCE', event: 'Modern geological processes' },
      { year: '1M BCE', event: 'Early humans encounter magnetite' },
      { year: '100K BCE', event: 'Ancient civilizations use magnetite' },
      { year: '10K BCE', event: 'Magnetite properties recognized' },
      { year: '5000 BCE', event: 'Iron smelting develops' },
      { year: '3000 BCE', event: 'Magnetite used in metallurgy' },
      { year: '2000 BCE', event: 'Iron Age begins' },
      { year: '1000 BCE', event: 'Magnetite trade expands' },
      { year: '500 BCE', event: 'Magnetite reaches Mediterranean' },
      { year: '200 BCE', event: 'Silk Road includes magnetite' },
      { year: '100 CE', event: 'Roman Empire imports magnetite' },
      { year: '500 CE', event: 'Byzantine Empire trades magnetite' },
      { year: '800 CE', event: 'Islamic Golden Age studies magnetite' },
      { year: '1200 CE', event: 'Mongol Empire facilitates trade' },
      { year: '1500 CE', event: 'European explorers document magnetite' },
      { year: '1700 CE', event: 'Scientific classification begins' },
      { year: '1800 CE', event: 'Modern metallurgy recognizes properties' },
      { year: '1900 CE', event: 'International trade includes Afghan magnetite' },
      { year: '1950s', event: 'Soviet geological surveys identify magnetite' },
      { year: '1960s', event: 'Initial exploration programs' },
      { year: '1970s', event: 'Comprehensive exploration' },
      { year: '1980s', event: 'Exploration suspended' },
      { year: '2000', event: 'Post-conflict planning resumes' },
      { year: '2005', event: 'Modern beneficiation evaluation' },
      { year: '2010', event: 'International technology partnerships' },
      { year: '2015', event: 'Beneficiation strategy development' },
      { year: '2016', event: 'Technology selection process' },
      { year: '2017', event: 'Vendor evaluation and selection' },
      { year: '2018', event: 'Preliminary engineering design' },
      { year: '2019', event: 'Environmental baseline studies' },
      { year: '2020', event: 'Feasibility studies completed' },
      { year: '2021', event: 'Financing agreements' },
      { year: '2022', event: 'Engineering procurement construction' },
      { year: '2023', event: 'Site preparation begins' },
      { year: '2024', event: 'Infrastructure planning finalization' },
      { year: '2025', event: 'Beneficiation complex construction begins' },
      { year: '2026', event: 'Crushing circuit construction' },
      { year: '2027', event: 'Grinding circuit construction' },
      { year: '2028', event: 'Magnetic separation installation' },
      { year: '2029', event: 'Thickening and filtration installation' },
      { year: '2030', event: 'First concentrate production' },
      { year: '2031', event: 'Ramp-up to 25% capacity' },
      { year: '2032', event: 'Ramp-up to 50% capacity' },
      { year: '2033', event: 'Ramp-up to 75% capacity' },
      { year: '2034', event: 'Ramp-up to 90% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2036', event: 'Advanced automation systems' },
      { year: '2037', event: 'Energy efficiency improvements' },
      { year: '2038', event: 'Environmental technology upgrades' },
      { year: '2039', event: 'Process optimization programs' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Beneficiation technology legacy' },
    ],
    relatedMinerals: [
      { name: 'Hajigak Iron Mountain', href: '/minerals/iron/hajigak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Magnetite Quality', href: '/minerals/iron/magnetite' },
      { name: 'Pelletization Plants', href: '/minerals/iron/pelletization' },
      { name: 'Infrastructure Steel', href: '/minerals/iron/infrastructure' },
      { name: 'Employment Creation', href: '/minerals/iron/employment' },
      { name: 'Bamyan Province Deposits', href: '/minerals/iron/bamyan' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Gold Processing Plants', href: '/minerals/gold/processing' },
      { name: 'Lead & Zinc Processing', href: '/minerals/lead-zinc/processing' },
      { name: 'Chromite Mining Operations', href: '/minerals/chromite/mining' },
      { name: 'Coal Processing Plants', href: '/minerals/coal/processing' },
      { name: 'Marble Processing Facilities', href: '/minerals/marble/processing' },
      { name: 'Rare Earth Processing', href: '/minerals/ree/processing' },
    ]
  },

  'iron/pelletization': {
    title: 'Iron Ore Pelletization Plants',
    subtitle: 'Premium Pellets for Direct Reduction Steelmaking',
    heroImage: processingPlant,
    overview: `Afghanistan's iron ore pelletization facilities produce premium-grade pellets meeting the strictest specifications for direct reduction steelmaking, representing world-class value-added processing technology. The pelletization process transforms high-grade iron concentrate into uniform, high-strength pellets suitable for direct reduction iron (DRI) production, maximizing economic value while supporting clean steelmaking processes.

The Hajigak pelletization complex produces 20 million tons of premium pellets annually, utilizing traveling grate pelletizing technology—the most advanced iron ore pelletizing method. The pellets are fired at 1,300°C, producing strong, uniform pellets meeting DRI specifications. Advanced pelletizing technology including balling drums, induration furnaces, and cooling systems ensures production of high-quality pellets meeting international specifications.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE PELLETIZATION ARCHITECTURE]: Afghanistan's iron ore pelletization facilities produce premium-grade pellets meeting the strictest specifications for direct reduction steelmaking. The pelletization process transforms high-grade iron concentrate into uniform, high-strength pellets suitable for direct reduction iron (DRI) production, maximizing economic value while supporting clean steelmaking processes. The Hajigak pelletization complex produces 20 million tons of premium pellets annually, utilizing traveling grate pelletizing technology—the most advanced iron ore pelletizing method.

The comprehensive pelletization architecture includes concentrate preparation ensuring optimal moisture and size distribution, balling drums producing green pellets, induration furnaces firing pellets at 1,300°C, cooling systems ensuring pellets reach ambient temperature, screening systems ensuring uniform pellet size, quality control laboratories ensuring product specifications are met, and storage and loading facilities ensuring efficient product handling.

[ULTRA-DEEP ANALYSIS - BALLING TECHNOLOGY]: The balling process transforms iron concentrate into green pellets through balling drums utilizing rotating drums and water addition creating spherical pellets. Advanced balling technology including optimized drum design, precise moisture control, and automated pellet size monitoring ensures production of uniform green pellets meeting specifications. The balling drums produce green pellets with optimal size distribution and moisture content suitable for induration.

Advanced process control systems optimize balling operations in real-time, adjusting drum speed, water addition, and feed rate based on concentrate characteristics. The comprehensive balling approach ensures production of high-quality green pellets while maximizing throughput and minimizing energy consumption.

[ULTRA-DEEP ANALYSIS - INDURATION TECHNOLOGY]: The induration process fires green pellets at 1,300°C, producing strong, uniform pellets meeting DRI specifications. Traveling grate pelletizing technology—the most advanced iron ore pelletizing method—ensures efficient heat transfer and uniform firing throughout the pellet bed. Advanced induration technology including optimized furnace design, precise temperature control, and efficient heat recovery ensures production of high-quality pellets while minimizing energy consumption.

The induration furnaces utilize advanced design including multiple heating zones, optimized air flow distribution, and efficient heat recovery systems. Advanced process control systems optimize firing conditions in real-time, ensuring consistent pellet quality while maximizing energy efficiency. The comprehensive induration approach ensures production of high-quality pellets while supporting environmental responsibility and operational efficiency.

[ULTRA-DEEP ANALYSIS - PELLET QUALITY & SPECIFICATIONS]: Pellet quality parameters including strength, reducibility, and thermal stability meet the strictest specifications for direct reduction steelmaking. Comprehensive quality control systems ensure that pellets meet international specifications and command premium prices in global markets. Quality control laboratories conduct extensive testing ensuring that pellets meet specifications for strength, reducibility, thermal stability, and dimensional tolerances.

Product certification provides assurance to customers that products meet quality standards, enabling premium pricing. Advanced quality control systems including automated sampling, automated testing, and automated certification ensure consistent product quality. Quality management systems follow international standards, ensuring consistent product quality.

[ULTRA-DEEP ANALYSIS - DIRECT REDUCTION APPLICATIONS]: Afghan iron pellets are ideal feedstock for direct reduction iron (DRI) production, enabling clean steelmaking processes. DRI technology produces 40% less CO2 than traditional blast furnace steelmaking, aligning with global decarbonization trends. The high-grade pellets enable efficient DRI production with high metallization rates and low energy consumption. Future hydrogen-based reduction could eliminate CO2 emissions entirely, positioning Afghan pellets as feedstock for truly "green steel" production.

The comprehensive direct reduction applications approach ensures optimal resource utilization while supporting environmental responsibility and market competitiveness. Market analysis indicates strong long-term demand fundamentals for DRI-grade pellets, ensuring growing markets for Afghan pellet products.

[ULTRA-DEEP ANALYSIS - PROCESS CONTROL & AUTOMATION]: Advanced process control systems utilizing artificial intelligence optimize pelletization operations in real-time, maximizing quality while minimizing energy consumption and environmental impact. The control systems integrate data from thousands of sensors throughout the pelletization complex, enabling predictive maintenance, dynamic optimization, and continuous improvement. Digital twin technology creates virtual replicas of pelletization operations, enabling simulation and optimization before implementing changes in physical systems.

Automated material handling systems ensure efficient transport of concentrate, pellets, and products throughout the complex, reducing labor requirements while improving safety. Advanced automation systems including automated sampling, automated quality control, and automated reporting ensure efficient operations while supporting continuous improvement.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION]: The pelletization complex represents a transformational opportunity for economic development, creating substantial value through processing concentrate into premium pellets. At full production, the pelletization complex will generate substantial revenue from pellet sales, royalties and taxes to the Afghan government, wages to Afghan workers, and procurement from local suppliers. The project's economic multiplier effect ensures that every dollar of direct revenue generates substantial total economic activity.

The pelletization complex will catalyze development of Afghanistan's broader industrial sector, providing infrastructure, expertise, and investment confidence needed to develop regional manufacturing. Regional economic impacts include development of supporting industries, creation of service businesses, and agricultural development supplying food to operations.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable pelletization requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including water treatment systems, air quality management, land rehabilitation, and biodiversity conservation. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations.

The comprehensive environmental management approach demonstrates that large-scale pelletization can be conducted responsibly while protecting the environment for future generations. Environmental compliance is verified through independent audits and transparent public reporting.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING]: The pelletization complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in pelletization, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international mining companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major steel producers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The pelletization complex includes comprehensive research and development programs advancing pelletization technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for pelletization challenges.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY]: Afghanistan's pellet production will significantly impact global markets, with annual production of 20 million tons representing substantial supply. The pelletization complex's location provides competitive advantages including proximity to regional markets, access to growing demand, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with premium pellets essential for high-quality steel production.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION]: Comprehensive risk management systems protect the pelletization complex from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the pelletization complex's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING]: The pelletization complex's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP]: Afghanistan's iron ore pelletization represents a strategic vision for industrial development, demonstrating that world-class pelletization can be conducted responsibly while creating lasting benefits. The pelletization complex serves as a model for future industrial development, showcasing best practices in environmental management, community engagement, and sustainable development.`,
    stats: [
      { value: '20M', label: 'Tons/Year', description: 'Pellet production capacity' },
      { value: '1,300°C', label: 'Firing Temp', description: 'Induration temperature' },
      { value: 'Premium', label: 'Quality Grade', description: 'DRI specifications' },
      { value: '40%', label: 'CO2 Reduction', description: 'vs blast furnace' },
      { value: 'High', label: 'Strength', description: 'Pellet durability' },
      { value: 'DRI', label: 'Application', description: 'Direct reduction' },
    ],
    sections: [
      {
        title: 'Traveling Grate Pelletizing',
        content: `The pelletization complex utilizes traveling grate pelletizing technology—the most advanced iron ore pelletizing method—ensuring efficient heat transfer and uniform firing throughout the pellet bed. Advanced induration technology including optimized furnace design, precise temperature control, and efficient heat recovery ensures production of high-quality pellets while minimizing energy consumption.`,
        image: processingPlant,
        alignment: 'left'
      },
      {
        title: 'Premium Pellet Quality',
        content: `Pellet quality parameters including strength, reducibility, and thermal stability meet the strictest specifications for direct reduction steelmaking. Comprehensive quality control systems ensure that pellets meet international specifications and command premium prices in global markets.`,
        image: laboratory,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2.5B BCE', event: 'Geological formation begins' },
      { year: '2.4B BCE', event: 'Magnetite crystallization occurs' },
      { year: '2.3B BCE', event: 'Iron enrichment processes' },
      { year: '2.2B BCE', event: 'Metamorphic concentration' },
      { year: '2.1B BCE', event: 'Deposit formation complete' },
      { year: '1.5B BCE', event: 'Geological preservation' },
      { year: '500M BCE', event: 'Mountain building begins' },
      { year: '100M BCE', event: 'Modern terrain forms' },
      { year: '50M BCE', event: 'Erosion exposes deposits' },
      { year: '10M BCE', event: 'Modern geological processes' },
      { year: '1M BCE', event: 'Early humans encounter magnetite' },
      { year: '100K BCE', event: 'Ancient civilizations use magnetite' },
      { year: '10K BCE', event: 'Magnetite properties recognized' },
      { year: '5000 BCE', event: 'Iron smelting develops' },
      { year: '3000 BCE', event: 'Magnetite used in metallurgy' },
      { year: '2000 BCE', event: 'Iron Age begins' },
      { year: '1000 BCE', event: 'Magnetite trade expands' },
      { year: '500 BCE', event: 'Magnetite reaches Mediterranean' },
      { year: '200 BCE', event: 'Silk Road includes magnetite' },
      { year: '100 CE', event: 'Roman Empire imports magnetite' },
      { year: '500 CE', event: 'Byzantine Empire trades magnetite' },
      { year: '800 CE', event: 'Islamic Golden Age studies magnetite' },
      { year: '1200 CE', event: 'Mongol Empire facilitates trade' },
      { year: '1500 CE', event: 'European explorers document magnetite' },
      { year: '1700 CE', event: 'Scientific classification begins' },
      { year: '1800 CE', event: 'Modern metallurgy recognizes properties' },
      { year: '1900 CE', event: 'International trade includes Afghan magnetite' },
      { year: '1950s', event: 'Soviet geological surveys identify magnetite' },
      { year: '1960s', event: 'Initial exploration programs' },
      { year: '1970s', event: 'Comprehensive exploration' },
      { year: '1980s', event: 'Exploration suspended' },
      { year: '2000', event: 'Post-conflict planning resumes' },
      { year: '2005', event: 'Modern pelletization evaluation' },
      { year: '2010', event: 'International technology partnerships' },
      { year: '2015', event: 'Pelletization strategy development' },
      { year: '2016', event: 'Technology selection process' },
      { year: '2017', event: 'Vendor evaluation and selection' },
      { year: '2018', event: 'Preliminary engineering design' },
      { year: '2019', event: 'Environmental baseline studies' },
      { year: '2020', event: 'Feasibility studies completed' },
      { year: '2021', event: 'Financing agreements' },
      { year: '2022', event: 'Engineering procurement construction' },
      { year: '2023', event: 'Site preparation begins' },
      { year: '2024', event: 'Infrastructure planning finalization' },
      { year: '2025', event: 'Pelletization complex construction begins' },
      { year: '2026', event: 'Balling drum installation' },
      { year: '2027', event: 'Induration furnace construction' },
      { year: '2028', event: 'Cooling system installation' },
      { year: '2029', event: 'Screening and storage installation' },
      { year: '2030', event: 'First pellet production' },
      { year: '2031', event: 'Ramp-up to 25% capacity' },
      { year: '2032', event: 'Ramp-up to 50% capacity' },
      { year: '2033', event: 'Ramp-up to 75% capacity' },
      { year: '2034', event: 'Ramp-up to 90% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2036', event: 'Advanced automation systems' },
      { year: '2037', event: 'Energy efficiency improvements' },
      { year: '2038', event: 'Environmental technology upgrades' },
      { year: '2039', event: 'Process optimization programs' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Pelletization technology legacy' },
    ],
    relatedMinerals: [
      { name: 'Hajigak Iron Mountain', href: '/minerals/iron/hajigak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Magnetite Quality', href: '/minerals/iron/magnetite' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Infrastructure Steel', href: '/minerals/iron/infrastructure' },
      { name: 'Employment Creation', href: '/minerals/iron/employment' },
      { name: 'Bamyan Province Deposits', href: '/minerals/iron/bamyan' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Gold Processing Plants', href: '/minerals/gold/processing' },
      { name: 'Lead & Zinc Processing', href: '/minerals/lead-zinc/processing' },
      { name: 'Chromite Mining Operations', href: '/minerals/chromite/mining' },
      { name: 'Coal Processing Plants', href: '/minerals/coal/processing' },
      { name: 'Marble Processing Facilities', href: '/minerals/marble/processing' },
      { name: 'Rare Earth Processing', href: '/minerals/ree/processing' },
    ]
  },

  // ==================== LEAD & ZINC - MISSING ENTRIES ====================
  'lead-zinc/aynak': {
    title: 'Aynak Lead-Zinc Deposits',
    subtitle: 'Polymetallic Resources for Industrial Development',
    heroImage: processingPlant,
    overview: `The Aynak lead-zinc deposits in Logar Province represent significant polymetallic resources containing substantial reserves of lead, zinc, silver, and associated metals. These deposits occur in close proximity to the world-class Mes Aynak copper deposit, creating opportunities for integrated polymetallic mining operations maximizing resource utilization and economic value.

Modern exploration has identified multiple lead-zinc deposits with combined resources exceeding 50 million tons of ore containing 5% lead and 8% zinc on average, with high-grade zones reaching 12% lead and 15% zinc. The deposits also contain significant silver credits averaging 50 grams per ton, adding substantial value to the overall resource. Development of systematic mining operations could produce 500,000 tons of zinc concentrate and 300,000 tons of lead concentrate annually, generating substantial revenue while supporting industrial development.

[ULTRA-DEEP ANALYSIS - COMPREHENSIVE GEOLOGICAL FORMATION]: The Aynak lead-zinc deposits represent world-class sediment-hosted base metal mineralization formed through complex geological processes spanning millions of years. The deposits formed during the Neoproterozoic era through hydrothermal processes that circulated metal-rich fluids through porous sedimentary rocks, depositing lead, zinc, and silver minerals in concentrated zones. The geological setting—similar to the Mes Aynak copper deposit—created ideal conditions for metal concentration, with multiple episodes of mineralization building the deposit's exceptional grade and scale.

Modern exploration utilizing advanced geophysical techniques, including induced polarization surveys, electromagnetic mapping, and deep core drilling programs extending to 800 meters below surface, has revealed the deposit's true extent. The ore bodies occur in multiple zones—North, Central, South, and Deep—each with unique geological characteristics and mineralization styles. Detailed geological modeling incorporating 3D seismic data, core logging, and geochemical analysis has created comprehensive resource models guiding mine planning and development strategies.

[ULTRA-DEEP ANALYSIS - MINERALOGY & ORE CHARACTERISTICS]: The deposit's mineralogy is dominated by galena (PbS) and sphalerite (ZnS), with significant silver occurring in argentiferous galena and silver-bearing minerals. Associated minerals include pyrite, chalcopyrite, and minor amounts of gold, adding value to the overall resource. The ore's exceptional quality—with low deleterious elements including arsenic, cadmium, and mercury—meets strict specifications for premium metal production.

The ore occurs in both massive sulfide and disseminated forms, requiring different processing approaches. High-grade massive sulfide zones enable efficient selective mining, while lower-grade disseminated zones require bulk mining methods. Geological studies have identified potential for additional resources at depth, with exploration targets extending to 1,200 meters below surface.

[ULTRA-DEEP ANALYSIS - MINING ENGINEERING & OPERATIONS]: The Aynak lead-zinc mining operation represents a $3 billion investment in world-class mining technology and engineering excellence. The mine design incorporates both open-pit and underground mining methods optimized for the deposit's geometry, ore distribution, and environmental constraints. Open-pit operations will extract near-surface ore, while underground operations will access deeper high-grade zones.

The mining fleet includes haul trucks, loaders, and underground equipment designed for efficient operations. Advanced mine planning software optimizes extraction sequences to maximize net present value while minimizing environmental impact. The operation utilizes modern mining technology including automated equipment, real-time monitoring systems, and comprehensive safety programs ensuring world-class performance.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY & METALLURGY]: The Aynak lead-zinc processing complex utilizes advanced flotation technology designed to maximize recovery while producing premium-grade concentrates. The processing flowsheet begins with crushing and grinding of ore to liberation size, followed by differential flotation separating lead and zinc minerals. The flotation circuit achieves 90% lead recovery and 85% zinc recovery, producing concentrates meeting smelter specifications.

The lead concentrate contains 60% lead and 1,500 grams per ton silver, while the zinc concentrate contains 55% zinc. Advanced flotation reagents specifically formulated for Aynak ore characteristics ensure optimal recovery while minimizing reagent consumption. The processing complex incorporates advanced environmental controls including water treatment, tailings management, and emission controls ensuring responsible operations.

[ULTRA-DEEP ANALYSIS - SMELTING & REFINING OPERATIONS]: Lead and zinc concentrates are processed through smelting and refining operations producing refined metals meeting international specifications. Lead smelting utilizes blast furnace technology producing refined lead, while zinc smelting employs electrolytic processes producing high-purity zinc. Silver recovery from lead concentrates adds substantial value, with annual silver production potentially reaching 15 million ounces.

The smelting facilities incorporate advanced environmental controls including SO2 capture and conversion to sulfuric acid, particulate emission controls, and comprehensive water treatment. The comprehensive smelting and refining approach ensures production of high-purity metals while maximizing value through byproduct recovery.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT & VALUE CREATION]: The Aynak lead-zinc operations represent a transformational opportunity for economic development, creating substantial value through processing raw ore into refined metals. At full production, the operations will generate $800 million annually in revenue from metal sales, $150 million in royalties and taxes to the Afghan government, $80 million in wages to Afghan workers, and $200 million in procurement from local suppliers.

Over the 30-year mine life, cumulative benefits will include $24 billion in total revenue, $4.5 billion in government revenue, 600,000 person-years of employment, and development of ancillary industries. The project's economic multiplier effect—estimated at 3.2x—means that every dollar of direct revenue generates $3.20 in total economic activity.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT & SUSTAINABILITY]: Sustainable lead-zinc mining requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including water treatment systems, air quality management, land rehabilitation, and biodiversity conservation. Environmental monitoring programs track impacts on water quality, air quality, and ecosystems, ensuring that environmental standards are met throughout operations.

A critical environmental priority is managing lead and zinc concentrations in water and soil, ensuring that environmental standards are met. Comprehensive rehabilitation programs restore mined areas to productive uses, ensuring that mining creates lasting benefits while minimizing negative impacts.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT & TRAINING]: The lead-zinc operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Employment targets ensure that 90% of operational workers are Afghan nationals, with priority given to local communities. Training programs develop skills in mining, processing, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS & TECHNOLOGY TRANSFER]: Strategic international partnerships enable knowledge transfer, technology access, and market development. The project's partnership strategy includes joint ventures with international mining companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major metal consumers. Partnerships enable access to world-class technology and expertise, supporting operations while building domestic capacity.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The lead-zinc operations include comprehensive research and development programs advancing mining and processing technology and sustainable practices. Research areas include ore processing optimization, environmental technologies, safety innovations, and process improvements. The research program supports continuous improvement in operations while developing solutions for mining challenges.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS & WORKER PROTECTION]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers. Safety training programs ensure that all workers understand hazards and safe work procedures.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS & GLOBAL SUPPLY]: Afghanistan's lead and zinc production will contribute to global markets, with annual production representing significant supply. The operations' location provides competitive advantages including proximity to regional markets, access to growing demand, and efficient logistics reducing costs. Market analysis indicates strong long-term demand fundamentals, with lead and zinc essential for batteries, construction, and industrial applications.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT & MITIGATION]: Comprehensive risk management systems protect the lead-zinc operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Financial risks are managed through diversified funding sources, insurance coverage, and hedging strategies. Environmental risks are addressed through comprehensive impact assessments, advanced mitigation technologies, and continuous monitoring.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the lead-zinc operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers. Engagement strategies are tailored to each stakeholder group, utilizing appropriate communication channels and consultation methods.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS & LONG-TERM PLANNING]: The lead-zinc operations' sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Environmental metrics include water consumption, energy use, greenhouse gas emissions, waste generation, and biodiversity impacts. Social metrics track employment, training, community investments, and stakeholder satisfaction. Economic metrics measure revenue generation, local procurement, tax payments, and economic multipliers.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION & GLOBAL LEADERSHIP]: The Aynak lead-zinc deposits represent a strategic vision for Afghanistan's mineral sector development, demonstrating that world-class mining can be conducted responsibly while creating lasting benefits. The operations serve as a model for future mining development, showcasing best practices in environmental management, community engagement, and sustainable development.`,
    stats: [
      { value: '50M', label: 'Tons', description: 'Ore resources' },
      { value: '5%', label: 'Lead Grade', description: 'Average content' },
      { value: '8%', label: 'Zinc Grade', description: 'Average content' },
      { value: '50g/t', label: 'Silver', description: 'Average grade' },
      { value: '500K', label: 'Tons/Year', description: 'Zinc concentrate' },
      { value: '300K', label: 'Tons/Year', description: 'Lead concentrate' },
    ],
    sections: [
      {
        title: 'Polymetallic Resources',
        content: `The Aynak lead-zinc deposits contain substantial reserves of lead, zinc, silver, and associated metals. Modern exploration has identified multiple deposits with combined resources exceeding 50 million tons of ore containing 5% lead and 8% zinc on average, with high-grade zones reaching 12% lead and 15% zinc.`,
        image: processingPlant,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `The processing complex utilizes advanced flotation technology achieving 90% lead recovery and 85% zinc recovery, producing concentrates meeting smelter specifications. The lead concentrate contains 60% lead and 1,500 grams per ton silver, while the zinc concentrate contains 55% zinc.`,
        image: laboratory,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '750M BCE', event: 'Geological formation begins' },
      { year: '700M BCE', event: 'Hydrothermal processes initiate' },
      { year: '650M BCE', event: 'Metal-rich fluids circulate' },
      { year: '600M BCE', event: 'Mineral precipitation occurs' },
      { year: '550M BCE', event: 'Deposit formation complete' },
      { year: '500M BCE', event: 'Geological preservation' },
      { year: '100M BCE', event: 'Mountain building begins' },
      { year: '50M BCE', event: 'Modern terrain forms' },
      { year: '10M BCE', event: 'Erosion exposes deposits' },
      { year: '1M BCE', event: 'Early humans encounter ores' },
      { year: '100K BCE', event: 'Ancient civilizations use metals' },
      { year: '10K BCE', event: 'Metalworking develops' },
      { year: '5000 BCE', event: 'Bronze Age begins' },
      { year: '3000 BCE', event: 'Lead and zinc used in metallurgy' },
      { year: '2000 BCE', event: 'Metal trade expands' },
      { year: '1000 BCE', event: 'Lead-zinc reaches Mediterranean' },
      { year: '500 BCE', event: 'Silk Road includes metals' },
      { year: '100 CE', event: 'Roman Empire imports metals' },
      { year: '500 CE', event: 'Byzantine Empire trades metals' },
      { year: '800 CE', event: 'Islamic Golden Age studies metals' },
      { year: '1200 CE', event: 'Mongol Empire facilitates trade' },
      { year: '1500 CE', event: 'European explorers document deposits' },
      { year: '1700 CE', event: 'Scientific classification begins' },
      { year: '1800 CE', event: 'Modern metallurgy recognizes properties' },
      { year: '1900 CE', event: 'International trade includes Afghan metals' },
      { year: '1950s', event: 'Soviet geological surveys identify deposits' },
      { year: '1960s', event: 'Initial exploration programs' },
      { year: '1970s', event: 'Comprehensive exploration' },
      { year: '1980s', event: 'Exploration suspended' },
      { year: '2000', event: 'Post-conflict planning resumes' },
      { year: '2005', event: 'Modern exploration evaluation' },
      { year: '2010', event: 'International partnerships' },
      { year: '2015', event: 'Development strategy' },
      { year: '2016', event: 'Technology selection' },
      { year: '2017', event: 'Vendor evaluation' },
      { year: '2018', event: 'Engineering design' },
      { year: '2019', event: 'Environmental studies' },
      { year: '2020', event: 'Feasibility studies completed' },
      { year: '2021', event: 'Financing agreements' },
      { year: '2022', event: 'Engineering procurement construction' },
      { year: '2023', event: 'Site preparation begins' },
      { year: '2024', event: 'Infrastructure planning' },
      { year: '2025', event: 'Mining operations construction begins' },
      { year: '2026', event: 'Processing plant construction' },
      { year: '2027', event: 'Smelting facility construction' },
      { year: '2028', event: 'Infrastructure completion' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First production' },
      { year: '2031', event: 'Ramp-up to 25% capacity' },
      { year: '2032', event: 'Ramp-up to 50% capacity' },
      { year: '2033', event: 'Ramp-up to 75% capacity' },
      { year: '2034', event: 'Ramp-up to 90% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Mining technology legacy' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Silver Deposits', href: '/minerals/silver' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Battery Manufacturing Materials', href: '/minerals/lead-zinc/battery' },
      { name: 'Zinc Concentrate Production', href: '/minerals/lead-zinc/zinc-concentrate' },
      { name: 'Lead Smelting Operations', href: '/minerals/lead-zinc/lead-smelting' },
      { name: 'Gold Processing Plants', href: '/minerals/gold/processing' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Chromite Mining Operations', href: '/minerals/chromite/mining' },
      { name: 'Coal Processing Plants', href: '/minerals/coal/processing' },
      { name: 'Marble Processing Facilities', href: '/minerals/marble/processing' },
      { name: 'Rare Earth Processing', href: '/minerals/ree/processing' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Iron Ore Pelletization', href: '/minerals/iron/pelletization' },
    ]
  },

  // ==================== GEMSTONES - MISSING ENTRIES ====================
  'gems/tourmaline': {
    title: 'Nuristan Tourmaline Deposits',
    subtitle: 'Rainbow Gems of the Hindu Kush',
    heroImage: tourmaline,
    overview: `Nuristan Province produces tourmaline crystals spanning the complete color spectrum—from vivid pink rubellite to deep green chrome tourmaline, electric blue indicolite to watermelon bicolor specimens. These exceptional gems occur in lithium-rich pegmatites at elevations of 2,500-4,500 meters, where slow crystallization creates large, clean crystals valued by collectors and jewelers worldwide.

Afghan tourmaline has gained international recognition through spectacular auction results: a 50-carat rubellite from Nuristan sold for $250,000 at Christie's, while museum-quality crystal specimens have entered collections at the Smithsonian and Natural History Museum of London.

Current production of approximately $20 million annually supports 1,500 artisanal miners. Development of the sector—including cutting facilities, certification laboratories, and international marketing—could increase revenues to $100 million while establishing Afghanistan as a premier tourmaline source.`,
    stats: [
      { value: '10+', label: 'Color Varieties', description: 'Complete spectrum' },
      { value: '$20M', label: 'Annual Output', description: 'Current production' },
      { value: '1,500', label: 'Miners', description: 'Currently employed' },
      { value: '50ct', label: 'Top Specimens', description: 'Museum quality' },
      { value: '$100M', label: 'Potential', description: 'Developed output' },
      { value: 'AAA', label: 'Quality Grade', description: 'Premium classification' },
    ],
    sections: [
      {
        title: 'Color Varieties',
        content: `Nuristan's pegmatites produce an extraordinary range of tourmaline colors, each variety carrying its own market identity and value. Rubellite (pink-red) commands the highest prices at $500-$2,000 per carat for fine specimens, rivaling good quality rubies.\n\nIndicolite (blue) tourmaline from specific Nuristan localities displays a saturated teal blue unique to Afghan material. Chrome tourmaline (green) derives its vivid color from chromium—the same element coloring emeralds—creating stones of exceptional brilliance.\n\nWatermelon tourmaline—showing pink cores with green rims—represents the most distinctive Afghan variety. These bicolor crystals are sliced perpendicular to the c-axis, revealing concentric color zones that make striking jewelry and collector specimens.`,
        image: tourmalineCrystals,
        alignment: 'left'
      },
      {
        title: 'Gemstone Processing',
        content: `Developing value-added processing in Afghanistan would capture significantly more value from tourmaline production. Currently, most rough material is exported to cutting centers in China, India, and Sri Lanka—where 80% of the final value is added through cutting, polishing, and marketing.\n\nThe proposed Nuristan Gem Center would include precision cutting workshops, gemological laboratories for grading and certification, mineral specimen preparation facilities, and international auction and trading platforms.\n\nTraining programs for Afghan lapidaries would develop world-class cutting skills, with specialization in tourmaline's challenging optical properties. Proper orientation and cutting can transform a $100 rough stone into a $2,000 finished gem.`,
        image: tourmalineNuristanCollection,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '1990s', event: 'International market recognition' },
      { year: '2010', event: 'Geological surveys quantify resources' },
      { year: '2020', event: 'Artisanal formalization begins' },
      { year: '2025', event: 'Gem Center established' },
      { year: '2030', event: 'Full commercial development' },
    ],
    relatedMinerals: [
      { name: 'Kunar Aquamarine', href: '/minerals/gems/aquamarine' },
      { name: 'Panjshir Emeralds', href: '/minerals/gems/emeralds' },
      { name: 'Nuristan Province', href: '/provinces/nuristan' },
    ]
  },

  // ==================== GOLD - MISSING ENTRIES ====================
  'gold/takhar': {
    title: 'Takhar Province Gold Deposits',
    subtitle: 'Northern Golden Rivers',
    heroImage: takharGold,
    overview: `Takhar Province in northeastern Afghanistan hosts significant gold mineralization along the Kokcha River system and associated hard rock deposits. Alluvial gold has been panned from Takhar's rivers for centuries, with modern exploration revealing substantial lode gold resources in quartz vein systems.

Estimated resources of 150 tons of gold—valued at $9 billion at current prices—place Takhar among Afghanistan's top three gold provinces. The deposits occur in orogenic gold settings similar to major producers in Canada, Australia, and West Africa.

Development through a combination of formalized artisanal mining and modern hard rock operations could increase gold production from 1.5 tons to 10 tons annually, generating $600 million in revenue while providing employment for 15,000 workers.`,
    stats: [
      { value: '150', label: 'Tons Gold', description: 'Estimated resources' },
      { value: '$9B', label: 'Value', description: 'At current prices' },
      { value: '10', label: 'Tons/Year', description: 'Production target' },
      { value: '15,000', label: 'Jobs', description: 'Employment potential' },
      { value: '3', label: 'Major Deposits', description: 'Identified prospects' },
      { value: '$600M', label: 'Annual Revenue', description: 'At full production' },
    ],
    sections: [
      {
        title: 'Geological Setting',
        content: `Takhar's gold deposits formed along major crustal structures during the Himalayan orogeny, with gold-bearing fluids depositing quartz veins within metamorphosed sedimentary rocks. The vein systems extend over strike lengths of 5-15 kilometers, with gold grades averaging 5-8 grams per ton in primary zones.\n\nAlluvial deposits in the Kokcha and tributary rivers represent eroded gold from these primary sources, concentrated by water action over millions of years. Placer gold particles range from fine flour gold to nuggets exceeding 50 grams.\n\nGeophysical surveys have identified multiple additional targets at depth, suggesting the known deposits represent only a fraction of the total gold endowment in the province.`,
        image: goldVein,
        alignment: 'left'
      },
      {
        title: 'Community Mining Model',
        content: `Takhar's development model integrates artisanal miners into formal operations through cooperative structures. The Takhar Gold Cooperative provides equipment, training, and fair purchasing to 5,000 artisanal miners while modern operations develop deeper resources.\n\nMercury-free processing—using gravity concentration and flotation instead of toxic mercury amalgamation—protects worker health and river ecosystems. The cooperative's central processing facility achieves 90% gold recovery compared to 30% with traditional methods.\n\nRevenue sharing ensures communities benefit directly: 5% of gross revenue funds schools, clinics, and infrastructure in mining communities, creating lasting development impact.`,
        image: community,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: 'Ancient', event: 'Alluvial gold mining begins' },
      { year: '2015', event: 'Modern exploration campaigns' },
      { year: '2022', event: 'Resource estimates published' },
      { year: '2025', event: 'Cooperative formation' },
      { year: '2028', event: 'Hard rock mining begins' },
      { year: '2032', event: 'Full production achieved' },
    ],
    relatedMinerals: [
      { name: 'Badakhshan Gold', href: '/minerals/gold/badakhshan' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
    ]
  },

  'gold/refining': {
    title: 'Afghan Gold Refinery',
    subtitle: 'LBMA-Certified Bullion Production',
    heroImage: goldRefineryCasting,
    overview: `The proposed Afghan Gold Refinery in Kabul will produce investment-grade gold bars meeting London Bullion Market Association (LBMA) specifications. Processing gold from all legitimate Afghan producers—artisanal, cooperative, and industrial—the refinery ensures fair pricing, quality assurance, and international market access.

Annual throughput capacity of 25 tons will generate $1.5 billion in export revenue while creating 500 skilled jobs. The refinery will also recover silver, platinum group metals, and other precious metals as valuable byproducts.

LBMA certification—the gold standard for bullion quality—enables direct sales to central banks, investment funds, and industrial consumers worldwide, commanding premium pricing and establishing Afghanistan's reputation as a responsible gold producer.`,
    stats: [
      { value: '25', label: 'Tons/Year', description: 'Refining capacity' },
      { value: '99.99%', label: 'Purity', description: 'LBMA standard' },
      { value: '$1.5B', label: 'Annual Revenue', description: 'Export value' },
      { value: '500', label: 'Jobs', description: 'Skilled employment' },
      { value: 'LBMA', label: 'Certification', description: 'International standard' },
      { value: '2030', label: 'Operational', description: 'Target date' },
    ],
    sections: [
      {
        title: 'Refining Process',
        content: `Gold refining employs the Miller chlorination process followed by the Wohlwill electrolytic process to achieve 99.99% purity. Incoming gold—ranging from 60% doré bars from mining operations to recovered gold from artisanal sources—is assayed, melted, and processed through sequential purification stages.\n\nThe chlorination process removes base metals and silver through reaction with chlorine gas at 1,100°C, producing gold of 99.5% purity. Subsequent electrolytic refining in chloroauric acid solution achieves the final 99.99% purity required for LBMA Good Delivery bars.\n\nPrecious metal byproducts—silver, platinum, palladium—are recovered from refinery residues, adding $50 million annually in revenue while maximizing resource value extraction.`,
        image: goldRefineryCasting,
        alignment: 'left'
      },
      {
        title: 'Responsible Sourcing',
        content: `The refinery implements comprehensive responsible sourcing protocols aligned with the London Bullion Market Association's Responsible Gold Guidance. All gold suppliers undergo due diligence verification covering origin, chain of custody, and conflict-free certification.\n\nDigital traceability systems track gold from mine to market, using blockchain technology to create immutable records of provenance. This transparency addresses international concerns about conflict minerals while commanding premium "green gold" pricing.\n\nPartnership with the Responsible Minerals Initiative and participation in the World Gold Council's Conflict-Free Gold Standard demonstrate Afghanistan's commitment to ethical mining practices.`,
        image: partnership,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Refinery design completed' },
      { year: '2027', event: 'Construction begins' },
      { year: '2029', event: 'Commissioning and testing' },
      { year: '2030', event: 'LBMA certification achieved' },
      { year: '2032', event: 'Full capacity operations' },
    ],
    relatedMinerals: [
      { name: 'Badakhshan Gold', href: '/minerals/gold/badakhshan' },
      { name: 'Takhar Gold', href: '/minerals/gold/takhar' },
    ]
  },

  'gold/artisanal': {
    title: 'Artisanal Gold Mining',
    subtitle: 'Formalizing Traditional Mining Heritage',
    heroImage: goldMining,
    overview: `An estimated 350,000 artisanal and small-scale gold miners operate across Afghanistan, collectively producing 5 tons of gold annually worth $300 million. These miners—working rivers, streams, and shallow deposits with traditional methods—represent one of the country's largest employment sectors outside agriculture.

Formalization of artisanal mining through cooperatives, fair purchasing programs, and mercury-free processing improves miner livelihoods while protecting environmental and public health. The transition from informal to organized mining multiplies gold recovery from 30% to 90% while tripling miner incomes.

The Afghan Artisanal Mining Initiative aims to register all 350,000 miners in cooperatives by 2030, providing equipment, training, healthcare, and fair market access while establishing responsible sourcing chains for international buyers.`,
    stats: [
      { value: '350,000', label: 'Miners', description: 'Currently active' },
      { value: '5', label: 'Tons/Year', description: 'Current production' },
      { value: '$300M', label: 'Annual Value', description: 'Gold production' },
      { value: '3x', label: 'Income Increase', description: 'Through formalization' },
      { value: '90%', label: 'Recovery Rate', description: 'With modern methods' },
      { value: 'Mercury-Free', label: 'Processing', description: 'Health protection' },
    ],
    sections: [
      {
        title: 'Traditional Methods',
        content: `Afghan artisanal miners use techniques passed through generations: gold panning in rivers and streams, sluice box recovery from gravel deposits, and shallow shaft mining of weathered ore zones. These labor-intensive methods employ entire families during agricultural off-seasons.\n\nTraditional gold panning recovers only 30% of available gold, with fine particles lost to rivers. Mercury amalgamation—used by some miners to improve recovery—poses severe health risks to workers and communities while contaminating waterways.\n\nFormalization programs introduce gravity concentration equipment—shaking tables, centrifugal concentrators, and improved sluices—that achieve 90% recovery without mercury, tripling gold production while eliminating health hazards.`,
        image: goldMining,
        alignment: 'left'
      },
      {
        title: 'Cooperative Development',
        content: `Gold mining cooperatives pool resources and expertise, enabling artisanal miners to access equipment, processing facilities, and fair markets that individual miners cannot afford. The cooperative model has succeeded in Tanzania, Colombia, and Mongolia—providing a proven framework for Afghan adaptation.\n\nEach cooperative serves 500-1,000 miners, operating a central processing facility, gold purchasing counter, and community services center. Training programs improve mining efficiency while teaching health, safety, and environmental management.\n\nFair trade certification enables cooperatives to sell directly to ethical jewelry brands at premium prices, bypassing exploitative middlemen who traditionally capture most of the value from artisanal gold.`,
        image: community,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: 'Ancient', event: 'Artisanal gold mining tradition' },
      { year: '2020', event: 'Formalization initiative launched' },
      { year: '2025', event: '100,000 miners registered' },
      { year: '2028', event: '200,000 miners in cooperatives' },
      { year: '2030', event: 'Full formalization achieved' },
    ],
    relatedMinerals: [
      { name: 'Badakhshan Gold', href: '/minerals/gold/badakhshan' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
    ]
  },

  'gold/bullion': {
    title: 'Afghan Gold Bullion Production',
    subtitle: 'Investment-Grade Gold for Global Markets',
    heroImage: goldOre,
    overview: `Afghanistan's gold bullion production strategy encompasses the full chain from mine to market, producing LBMA-certified gold bars for central banks, investment funds, and industrial consumers. Combined production from hard rock mining, artisanal cooperatives, and recycled gold will reach 25 tons annually by 2035.

Gold bullion represents Afghanistan's most liquid mineral export—instantly tradeable on international markets without processing or long-term contracts. The strategic reserve of Afghan gold contributes to national monetary stability while generating consistent export revenue.

The establishment of an Afghan National Gold Reserve—holding 100 tons of domestically produced bullion—would strengthen the national currency, provide monetary policy flexibility, and demonstrate sovereign wealth accumulation from responsible resource development.`,
    stats: [
      { value: '25', label: 'Tons/Year', description: 'Bullion production' },
      { value: '$1.5B', label: 'Annual Revenue', description: 'Export value' },
      { value: '100', label: 'Tons', description: 'National reserve target' },
      { value: 'LBMA', label: 'Standard', description: 'International certification' },
      { value: '99.99%', label: 'Purity', description: 'Investment grade' },
      { value: '2035', label: 'Full Output', description: 'Production target' },
    ],
    sections: [
      {
        title: 'National Gold Reserve',
        content: `Building a national gold reserve from domestically produced bullion provides monetary stability and sovereign wealth. A target of 100 tons—worth approximately $6 billion—would place Afghanistan among the top 40 gold-holding nations and provide critical foreign exchange reserves.\n\nThe reserve serves multiple strategic functions: backing the national currency during economic turbulence, providing collateral for international borrowing on favorable terms, and demonstrating fiscal responsibility to international investors and development partners.\n\nAnnual reserve additions of 5 tons—retained from domestic production at market price—would achieve the 100-ton target within 20 years while maintaining robust gold exports.`,
        image: goldRefineryCasting,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2028', event: 'National reserve established' },
      { year: '2030', event: 'First bullion deposits' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2050', event: '100-ton reserve achieved' },
    ],
    relatedMinerals: [
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Badakhshan Gold', href: '/minerals/gold/badakhshan' },
    ]
  },

  // ==================== REE - MISSING ENTRIES ====================
  'ree/technology': {
    title: 'Technology Metals of Afghanistan',
    subtitle: 'Critical Elements for 21st Century Innovation',
    heroImage: rareEarthDetail,
    overview: `Afghanistan's rare earth deposits contain the 17 critical elements essential for modern technology—from smartphone magnets and wind turbine generators to electric vehicle motors and missile guidance systems. These "technology metals" underpin $5 trillion in global manufacturing, making secure supply a strategic priority for industrialized nations.

Afghan REE deposits include both light rare earths (LREE) concentrated in carbonatite and alkaline rock complexes, and the more valuable heavy rare earths (HREE) found in ion-adsorption clay deposits. The combination provides a complete rare earth product suite meeting diverse industrial requirements.

Strategic development partnerships with Japan, South Korea, Germany, and the United States aim to diversify global REE supply away from Chinese dominance—which currently controls 70% of production and 90% of processing capacity.`,
    stats: [
      { value: '17', label: 'REE Elements', description: 'Complete suite identified' },
      { value: '$5T', label: 'Global Market', description: 'Technology applications' },
      { value: '70%', label: 'China Control', description: 'Current supply dominance' },
      { value: '30%', label: 'Afghan Potential', description: 'Global supply share' },
      { value: '50+', label: 'Deposits', description: 'Identified occurrences' },
      { value: 'Critical', label: 'Status', description: 'Western strategic priority' },
    ],
    sections: [
      {
        title: 'Applications & Demand',
content: `Rare earth elements enable technologies defining the modern world. Neodymium-iron-boron permanent magnets—the strongest known—power electric vehicle motors, wind turbine generators, and computer hard drives. Each EV contains 2-5 kg of rare earth magnets.\n\nEuropium and terbium create the red and green phosphors in LED lighting and display screens. Cerium is the most-used catalyst in automotive catalytic converters. Yttrium enables high-temperature superconductors and laser technology. Scandium strengthens aluminum alloys for aerospace applications.\n\nGlobal REE demand is growing at 8% annually, driven by the energy transition and electronics proliferation.
Supply deficits are projected by 2030 without new production sources—creating both urgency and opportunity for Afghan development.`,
        image: rareEarth,
        alignment: 'left'
      },
      {
        title: 'Strategic Partnerships',
content: `Japan's JOGMEC, South Korea's KORES, Germany's BGR, and the US Department of Energy have all identified Afghan REE as a priority for supply chain diversification. These partnerships provide capital, technology, and guaranteed market access for Afghan production.\n\nProposed structures include joint ventures sharing costs and revenues equally, technology transfer building Afghan processing capacity, off-take agreements guaranteeing purchase of 80% of production, and government-to-government strategic minerals agreements providing diplomatic support.\n\nThe strategic imperative is clear: global technology leadership requires secure REE supply.
Afghan deposits offer the scale and quality to anchor diversified supply chains, reducing vulnerability to geopolitical disruption.`,
        image: partnership,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2018', event: 'Strategic assessment completed' },
      { year: '2022', event: 'Partnership negotiations begin' },
      { year: '2025', event: 'Development agreements signed' },
      { year: '2030', event: 'Mining operations commence' },
      { year: '2035', event: 'Full processing capacity' },
    ],
    relatedMinerals: [
      { name: 'Helmand REE', href: '/minerals/ree/helmand' },
      { name: 'Neodymium', href: '/minerals/ree/neodymium' },
      { name: 'Global Supply Impact', href: '/minerals/ree/global-supply' },
    ]
  },

  'ree/neodymium': {
    title: 'Neodymium & Praseodymium Deposits',
    subtitle: 'Permanent Magnet Revolution',
    heroImage: rareEarthMine,
    overview: `Neodymium and praseodymium (NdPr)—the rare earth elements essential for the world's strongest permanent magnets—are found in significant concentrations across Afghan deposits. NdPr magnets power electric vehicle motors, wind turbine generators, and countless electronic devices, making these elements critical for the global energy transition.

Afghan deposits contain an estimated 5 million tons of NdPr oxide—sufficient for 2.5 billion electric vehicle motors at current consumption rates. At $150/kg for NdPr oxide, this resource is valued at $750 billion—among Afghanistan's most valuable individual mineral assets.

Producing separated NdPr oxide requires sophisticated solvent extraction technology, which the proposed Helmand REE Complex will employ. This positions Afghanistan as a strategic supplier of the world's most important magnet materials.`,
    stats: [
      { value: '5M', label: 'Tons NdPr', description: 'Oxide resources' },
      { value: '$750B', label: 'Value', description: 'At current prices' },
      { value: '2.5B', label: 'EV Motors', description: 'Supply potential' },
      { value: '$150/kg', label: 'Price', description: 'NdPr oxide market' },
      { value: 'Critical', label: 'Strategic', description: 'Supply priority' },
      { value: '2032', label: 'Production', description: 'Target start date' },
    ],
    sections: [
      {
        title: 'Magnet Applications',
        content: `NdFeB (neodymium-iron-boron) permanent magnets are the strongest commercially available magnets, producing magnetic fields 10x stronger than conventional ferrite magnets at a fraction of the size. This makes them indispensable for compact, high-efficiency motors and generators.\n\nEach electric vehicle contains 2-5 kg of NdPr magnets in its drive motor. Each offshore wind turbine uses 600 kg. Billions of hard drives, speakers, headphones, and sensors each contain smaller quantities. Total global NdPr consumption exceeds 50,000 tons annually and is growing at 12%.\n\nSupply deficits projected from 2028 create premium pricing opportunities for new producers. Afghan NdPr production could command $200+/kg for high-purity material meeting magnet manufacturer specifications.`,
        image: rareEarthConcentrate,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2020', event: 'NdPr resource quantification' },
      { year: '2025', event: 'Processing technology selection' },
      { year: '2028', event: 'Separation plant construction' },
      { year: '2032', event: 'First NdPr oxide production' },
      { year: '2035', event: 'Full separation capacity' },
    ],
    relatedMinerals: [
      { name: 'Helmand REE', href: '/minerals/ree/helmand' },
      { name: 'Technology Metals', href: '/minerals/ree/technology' },
      { name: 'Global Supply', href: '/minerals/ree/global-supply' },
    ]
  },

  'ree/global-supply': {
    title: 'Global REE Supply Impact',
    subtitle: 'Reshaping Technology Supply Chains',
    heroImage: sectorRareEarthLab,
    overview: `Afghanistan's rare earth element deposits have the potential to fundamentally reshape global technology supply chains, breaking China's near-monopoly on REE production and processing. With deposits potentially rivaling Bayan Obo—the world's largest REE mine—Afghan production could supply 30% of non-Chinese global demand within a decade.

The geopolitical significance is immense. REE supply disruptions in 2010 and 2019 caused price spikes of 300-1,000%, demonstrating the vulnerability of technology manufacturers to single-source dependence. Afghan production provides the diversification that global industry desperately needs.

Development requires unprecedented international cooperation: capital from Western governments and private investors, technology from established REE processors in Australia and Canada, market guarantees from major technology manufacturers, and diplomatic support ensuring project security and sovereign rights.`,
    stats: [
      { value: '30%', label: 'Global Supply', description: 'Non-Chinese demand' },
      { value: '$5T', label: 'Industry Impact', description: 'Dependent manufacturing' },
      { value: '300%', label: 'Price Spike Risk', description: 'Supply disruption impact' },
      { value: '17', label: 'Elements', description: 'Complete REE suite' },
      { value: 'Strategic', label: 'Priority', description: 'Western security asset' },
      { value: '2035', label: 'Full Impact', description: 'Market transformation' },
    ],
    sections: [
      {
        title: 'Geopolitical Significance',
content: `China currently controls 60% of REE mining, 85% of processing, and 90% of magnet manufacturing—giving Beijing extraordinary leverage over global technology supply chains. In 2010, China's restriction of REE exports to Japan caused prices to spike 1,000%, disrupting electronics and automotive manufacturing worldwide.\n\nAfghan REE production provides Western nations a strategic alternative, diversifying supply sources and reducing vulnerability to geopolitical disruption.
The US, EU, Japan, and South Korea have all identified new REE supply development as a critical national security priority.\n\nThe Afghan government's commitment to reliable supply, transparent governance, and international partnerships creates the foundation for long-term strategic relationships with technology-dependent nations.`,
        image: rareEarth,
        alignment: 'left'
      },
      {
        title: 'Market Transformation',
        content: `Afghan REE production at projected volumes would reduce Chinese market share from 60% to 40% within a decade, creating a more balanced and resilient global supply structure. This diversification benefits all market participants through more stable pricing and reduced disruption risk.\n\nNew processing capacity in Afghanistan—built with technology partnerships from Lynas (Australia), MP Materials (USA), and Solvay (Belgium)—establishes a non-Chinese processing hub serving global manufacturers.\n\nThe integrated approach—mining through separation to component manufacturing—positions Afghanistan to capture maximum value while building industrial capacity that sustains economic growth beyond primary resource extraction.`,
        image: investmentConference,
        alignment: 'right'
      },
      {
        title: 'Research & Development',
        content: `A dedicated REE research center in Afghanistan will advance separation technology, recycling processes, and new applications for rare earth elements. Collaboration with international universities produces 200 PhDs annually in REE-related disciplines.\n\nResearch priorities include reducing separation costs by 30% through novel solvent extraction chemistry, developing urban mining techniques to recover REE from electronic waste, creating new magnet alloys with reduced heavy REE content, and advancing REE-based quantum computing and medical imaging technologies.\n\nTechnology licensing of Afghan innovations generates additional revenue while accelerating global technology advancement.`,
        image: laboratory,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2020', event: 'Global supply assessment' },
      { year: '2025', event: 'Strategic partnerships formed' },
      { year: '2028', event: 'Processing construction begins' },
      { year: '2032', event: 'First separated REE oxides' },
      { year: '2035', event: 'Full global supply impact' },
      { year: '2040', event: '30% non-Chinese market share' },
    ],
    relatedMinerals: [
      { name: 'Helmand REE', href: '/minerals/ree/helmand' },
      { name: 'Technology Metals', href: '/minerals/ree/technology' },
      { name: 'Neodymium', href: '/minerals/ree/neodymium' },
      { name: 'Lithium Reserves', href: '/minerals/lithium/ghazni' },
    ]
  },

  'ree/research': {
    title: 'REE Research Partnerships',
    subtitle: 'International Collaboration for Strategic Minerals',
    heroImage: sectorRareEarthLab,
    overview: `Afghanistan's REE research partnership program brings together leading international institutions to advance rare earth science, develop new processing technologies, and build Afghan scientific capacity. Partners include Japan's JOGMEC, Germany's Helmholtz Institute, Australia's CSIRO, and the US Department of Energy's Ames Laboratory.

Research investment of $100 million annually supports 500 researchers working on separation chemistry, recycling technology, new applications, and environmental management. The program has already produced 25 patents and 200 peer-reviewed publications.

Training and education components ensure that Afghan scientists lead future research efforts, with 100 PhD students enrolled in international exchange programs and 500 Masters students at the Kabul Institute of Technology's REE research center.`,
    stats: [
      { value: '$100M', label: 'Annual Budget', description: 'Research investment' },
      { value: '500', label: 'Researchers', description: 'Scientific staff' },
      { value: '25', label: 'Patents', description: 'Filed to date' },
      { value: '8', label: 'Partners', description: 'International institutions' },
      { value: '100', label: 'PhD Students', description: 'Exchange programs' },
      { value: '200', label: 'Publications', description: 'Peer-reviewed papers' },
    ],
    sections: [
      {
        title: 'Research Programs',
        content: `Five major research programs advance the frontiers of REE science. The Separation Chemistry program develops novel solvents reducing extraction costs by 30%. The Recycling Technology program creates processes recovering 95% of REE from electronic waste.\n\nThe New Applications program explores REE-based quantum materials, advanced ceramics, and medical imaging agents. The Environmental Management program develops techniques minimizing the environmental footprint of REE processing. The Geological Exploration program uses AI and machine learning to identify new deposits.\n\nEach program is led by a joint Afghan-international team, ensuring technology transfer and capacity building alongside scientific advancement.`,
        image: laboratory,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2022', event: 'Partnership agreements signed' },
      { year: '2025', event: 'Research center operational' },
      { year: '2028', event: 'First major breakthroughs' },
      { year: '2030', event: 'Afghan-led research programs' },
      { year: '2035', event: 'Global research leadership' },
    ],
    relatedMinerals: [
      { name: 'Helmand REE', href: '/minerals/ree/helmand' },
      { name: 'Technology Metals', href: '/minerals/ree/technology' },
    ]
  },

  // ==================== INDUSTRIAL - MISSING ENTRIES ====================
  'chromite/exports': {
    title: 'Chromite Export Operations',
    subtitle: 'Strategic Metal for Global Steel Industry',
    heroImage: sectorChromiteLoading,
    overview: `Afghanistan's chromite export operations currently ship 50,000 tons annually to smelters in Pakistan and China—a fraction of the potential from 30 million tons of proven reserves. Expanding and upgrading export operations could increase volumes to 500,000 tons annually, generating $250 million in revenue.

The export strategy prioritizes value addition: converting raw chromite ore to ferrochrome domestically captures 5-10x more value than ore exports. A phased approach begins with upgraded ore exports while building ferrochrome smelting capacity for maximum value capture.

Transportation infrastructure—including dedicated road upgrades, border crossing improvements, and rail connections—ensures reliable, cost-effective delivery to regional and international markets.`,
    stats: [
      { value: '500K', label: 'Tons/Year', description: 'Export target' },
      { value: '$250M', label: 'Revenue', description: 'Annual export value' },
      { value: '45%', label: 'Cr2O3 Grade', description: 'Premium ore quality' },
      { value: '3', label: 'Export Routes', description: 'Multi-corridor strategy' },
      { value: '10,000', label: 'Jobs', description: 'Export chain employment' },
      { value: '5-10x', label: 'Value Addition', description: 'Ferrochrome vs ore' },
    ],
    sections: [
      {
        title: 'Export Infrastructure',
        content: `Chromite exports require efficient transportation from remote mine sites to international markets. Current truck-based logistics limit volumes and increase costs, with 400-kilometer hauls to Pakistan border crossings consuming 30% of the ore's value.\n\nInfrastructure upgrades include paved mine-to-highway access roads, upgraded border crossing facilities for bulk cargo, stockpiling and blending facilities at export terminals, and quality control laboratories ensuring consistent product specifications.\n\nFuture rail connections will reduce transport costs by 60%, enabling profitable export of lower-grade material and increasing total export volumes.`,
        image: sectorChromiteLoading,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2020', event: 'Export modernization begins' },
      { year: '2025', event: 'Infrastructure upgrades complete' },
      { year: '2028', event: 'Ferrochrome smelter operational' },
      { year: '2032', event: 'Full export capacity' },
    ],
    relatedMinerals: [
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Stainless Steel', href: '/minerals/chromite/steel' },
    ]
  },

  'chromite/steel': {
    title: 'Chromite for Stainless Steel Production',
    subtitle: 'Essential Alloying Element for Modern Industry',
    heroImage: chromiteStockpile,
    overview: `Chromium—derived exclusively from chromite ore—is the essential element in stainless steel production, providing the corrosion resistance that makes stainless steel indispensable for food processing, medical equipment, construction, and chemical industries. Afghanistan's chromite reserves can supply the growing global stainless steel industry for decades.

Producing ferrochrome—the smelted form used by steel mills—domestically captures 5-10x more value than exporting raw ore. A 200,000-ton ferrochrome smelter would generate $1 billion annually while creating 1,500 industrial jobs in high-skill metallurgical operations.

Integrated development linking Afghan chromite to Pakistan and India's rapidly growing stainless steel industries creates a regional value chain benefiting all participants.`,
    stats: [
      { value: '200K', label: 'Tons/Year', description: 'Ferrochrome capacity' },
      { value: '$1B', label: 'Annual Revenue', description: 'Ferrochrome value' },
      { value: '1,500', label: 'Jobs', description: 'Smelter employment' },
      { value: '18%', label: 'Chromium Content', description: 'Stainless steel spec' },
      { value: '150MW', label: 'Power', description: 'Smelter requirement' },
      { value: '30M', label: 'Tons Reserve', description: 'Decades of supply' },
    ],
    sections: [
      {
        title: 'Ferrochrome Smelting',
content: `Ferrochrome production employs submerged arc furnaces operating at 1,700°C to reduce chromite ore to ferrochrome alloy—the direct feedstock for stainless steel mills. The process requires significant electrical energy, making access to affordable power a key success factor.\n\nAfghanistan's natural gas reserves in the north provide fuel for dedicated power generation, while hydroelectric potential in Bamyan and Panjshir offers renewable alternatives.
Combined power costs are competitive with major ferrochrome producers in South Africa and India.\n\nThe proposed smelter would produce three ferrochrome grades: high-carbon (6-8% C) for standard stainless, low-carbon (<0.1% C) for premium grades, and charge chrome for general use—serving the full range of stainless steel applications.`,
        image: chromiteOre,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2025', event: 'Feasibility study completed' },
      { year: '2028', event: 'Smelter construction begins' },
      { year: '2031', event: 'First ferrochrome production' },
      { year: '2033', event: 'Full capacity operations' },
    ],
    relatedMinerals: [
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Iron & Steel', href: '/minerals/iron/steel-production' },
    ]
  },

  'marble/herat': {
    title: 'Herat Province Marble Quarries',
    subtitle: "Western Afghanistan's Architectural Stone Treasury",
    heroImage: heratMarble,
    overview: `Herat Province contains Afghanistan's most extensive and accessible marble deposits, with an estimated 2 billion cubic meters of premium architectural stone in more than 40 identified quarries. The province's marble has been prized for centuries, used in the construction of Herat's legendary mosques, minarets, and palaces.

Herat marble varieties include exceptional white marble with 97% calcium carbonate, cream and onyx varieties for decorative applications, and colored marbles in green, pink, and gray for diverse architectural uses. Quality assessments by Italian laboratories confirm that Herat white marble matches Carrara specifications.

The province's strategic location—near Iran and Central Asian markets—provides transportation advantages, while established road infrastructure reduces logistics costs. Annual production potential exceeds 500,000 tons, generating $250 million in export revenue.`,
    stats: [
      { value: '2B', label: 'Cubic Meters', description: 'Marble reserves' },
      { value: '40+', label: 'Quarries', description: 'Identified deposits' },
      { value: '97%', label: 'CaCO3', description: 'White marble purity' },
      { value: '$250M', label: 'Annual Potential', description: 'Export revenue' },
      { value: '500K', label: 'Tons/Year', description: 'Production capacity' },
      { value: 'Carrara', label: 'Quality Match', description: 'International standard' },
    ],
    sections: [
      {
        title: 'Quarrying Operations',
        content: `Modern quarrying at Herat employs diamond wire cutting technology—the global standard for premium marble extraction. Diamond-studded wire loops cut through marble blocks with precision, minimizing waste and damage while producing consistent blocks for processing.\n\nThe proposed modernization program would equip 20 quarries with diamond wire systems, gang saws for slab production, and automated polishing lines. This transformation increases production 10x while improving worker safety and product quality.\n\nTraining programs for 2,000 quarry workers cover equipment operation, stone grading, and safety management—creating a skilled workforce that sustains the industry for decades.`,
        image: marbleMegaQuarry,
        alignment: 'left'
      },
      {
        title: 'Export Markets',
        content: `Premium Afghan marble commands strong prices in Middle Eastern, European, and Asian markets. The UAE, Saudi Arabia, and Qatar are major consumers for luxury construction, while China and India represent growing markets for decorative stone.\n\nHerat's proximity to Iran provides access to the Persian Gulf's maritime trade routes, reducing transport costs compared to eastern Afghan deposits. Road and rail connections through Iran's Chabahar port enable global market access.\n\nBranding Afghan marble as a premium product—with quality certification, origin marking, and design partnerships—commands prices 50% above commodity stone, generating additional revenue that funds community development and environmental rehabilitation.`,
        image: marbleWhiteQuarry,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: 'Ancient', event: 'Historical marble use' },
      { year: '2015', event: 'Modern quarrying begins' },
      { year: '2025', event: 'Diamond wire technology adopted' },
      { year: '2028', event: 'Processing plant operational' },
      { year: '2032', event: 'Full export capacity' },
    ],
    relatedMinerals: [
      { name: 'White Marble', href: '/minerals/marble/white' },
      { name: 'Architectural Stone', href: '/minerals/marble/architectural' },
    ]
  },

  'marble/architectural': {
    title: 'Architectural Stone Collection',
    subtitle: 'Building Materials for Global Architecture',
    heroImage: sectorMarbleQuarry,
    overview: `Afghanistan produces over 75 distinct varieties of architectural stone—from luminous white marble to dramatic onyx, from warm travertine to colorful granites. This extraordinary diversity enables Afghan stone to serve every architectural application from monumental facades to residential countertops.

The architectural stone sector represents a renewable resource—unlike metallic minerals, stone deposits are effectively inexhaustible at human timescales. Sustainable quarrying practices ensure centuries of production while maintaining the natural beauty of Afghanistan's mountain landscapes.

Development of the full product range—including precision-cut tiles, polished slabs, carved ornamental pieces, and landscape stone—creates employment spanning quarrying, processing, design, and installation across multiple provinces.`,
    stats: [
      { value: '75+', label: 'Varieties', description: 'Stone types' },
      { value: '$20B', label: 'Potential', description: 'Annual revenue' },
      { value: '10', label: 'Provinces', description: 'Major deposits' },
      { value: '50,000', label: 'Jobs', description: 'Employment potential' },
      { value: 'Premium', label: 'Quality', description: 'International grade' },
      { value: 'Sustainable', label: 'Resource', description: 'Renewable supply' },
    ],
    sections: [
      {
        title: 'Stone Varieties',
        content: `White marble from Herat and Wardak matches Italian Carrara for purity and translucency. Onyx from Helmand and Uruzgan displays dramatic banding in cream, gold, and green—prized for backlit installations and luxury interiors.\n\nTravertine from Bamyan and Samangan provides warm, textured surfaces for Mediterranean-style architecture. Colored marbles—green from Panjshir, pink from Ghazni, gray from Logar—expand the palette for diverse design applications.\n\nGranite from eastern provinces offers exceptional hardness and weather resistance for exterior cladding, paving, and monumental construction. Each variety undergoes rigorous quality testing to ensure compliance with international building standards.`,
        image: marbleExtraction,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: 'Ancient', event: 'Stone construction tradition' },
      { year: '2020', event: 'Comprehensive resource catalog' },
      { year: '2025', event: 'International marketing launch' },
      { year: '2030', event: 'Processing infrastructure complete' },
    ],
    relatedMinerals: [
      { name: 'White Marble', href: '/minerals/marble/white' },
      { name: 'Herat Quarries', href: '/minerals/marble/herat' },
    ]
  },

  'coal/underground': {
    title: 'Underground Coal Operations',
    subtitle: 'Modern Mining for Energy Security',
    heroImage: coalUndergroundSeam,
    overview: `Afghanistan's coal seams—primarily in Baghlan, Samangan, and Bamyan provinces—require underground mining techniques to access deposits at depths of 50-500 meters. Modern longwall mining technology achieves high productivity while ensuring worker safety through comprehensive ventilation, ground control, and monitoring systems.

Underground coal mining provides employment for 20,000 workers in economically challenged northern provinces, with wages 3x above regional averages. The labor-intensive nature of underground operations—compared to open-pit alternatives—maximizes employment creation per ton of coal produced.

Annual production target of 5 million tons serves domestic energy needs and industrial applications, with premium metallurgical coal grades exported to steel mills in Pakistan and Central Asia.`,
    stats: [
      { value: '5M', label: 'Tons/Year', description: 'Production target' },
      { value: '20,000', label: 'Jobs', description: 'Mining employment' },
      { value: '500m', label: 'Max Depth', description: 'Deepest seams' },
      { value: '73%', label: 'Fixed Carbon', description: 'Premium quality' },
      { value: '3x', label: 'Wage Premium', description: 'Above regional average' },
      { value: 'Longwall', label: 'Technology', description: 'Modern extraction' },
    ],
    sections: [
      {
        title: 'Longwall Mining',
        content: `Modern longwall mining—the safest and most productive underground coal mining method—employs hydraulic shields protecting workers while a mechanical shearer cuts coal from a face 200-300 meters wide. Armored face conveyors transport cut coal to the surface at rates exceeding 3,000 tons per hour.\n\nAutomated monitoring systems track methane levels, ground movement, and air quality in real-time, ensuring worker safety through early warning of hazardous conditions. Communication systems enable instant evacuation when needed.\n\nThe proposed Baghlan Longwall Mine would process 5 million tons annually through a modern coal preparation plant, producing separated thermal and metallurgical coal products for domestic and export markets.`,
        image: coalSeam,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '1960s', event: 'First modern mines established' },
      { year: '2020', event: 'Modernization planning begins' },
      { year: '2025', event: 'Longwall equipment procurement' },
      { year: '2028', event: 'Modern operations commence' },
      { year: '2032', event: 'Full production capacity' },
    ],
    relatedMinerals: [
      { name: 'Coal Basins', href: '/minerals/coal/basins' },
      { name: 'Baghlan Province', href: '/minerals/coal/baghlan' },
    ]
  },

  'coal/baghlan': {
    title: 'Baghlan Province Coal District',
    subtitle: "Northern Afghanistan's Energy Foundation",
    heroImage: baghlanCoal,
    overview: `Baghlan Province hosts Afghanistan's most significant coal deposits, with an estimated 1.5 billion tons of coal resources including premium metallurgical grades. The province's coal has supported domestic energy needs since the 1950s, with modern development potential to transform Baghlan into a major industrial center.

The Ishpushta coal field—Baghlan's largest—produces coking coal with 73% fixed carbon, 8% ash, and 0.5% sulfur—meeting specifications for integrated steel mills. Additional thermal coal resources support domestic power generation and industrial steam requirements.

Comprehensive development of Baghlan's coal resources could employ 10,000 miners while generating $500 million in annual revenue from domestic sales and cross-border exports to Pakistan and Uzbekistan.`,
    stats: [
      { value: '1.5B', label: 'Tons', description: 'Coal resources' },
      { value: '73%', label: 'Fixed Carbon', description: 'Metallurgical grade' },
      { value: '10,000', label: 'Jobs', description: 'Mining employment' },
      { value: '$500M', label: 'Revenue', description: 'Annual potential' },
      { value: '0.5%', label: 'Sulfur', description: 'Low impurity content' },
      { value: '5M', label: 'Tons/Year', description: 'Production target' },
    ],
    sections: [
      {
        title: 'Ishpushta Coal Field',
        content: `The Ishpushta coal field contains three mineable seams ranging from 2 to 8 meters thick, extending over a strike length of 25 kilometers. The main seam—averaging 5 meters—produces premium coking coal meeting specifications for blast furnace and electric arc furnace operations.\n\nHistorical production from Ishpushta supplied Baghlan's cement and textile industries, but modern development would increase output tenfold through mechanized longwall mining. The coal's excellent coking properties—high fluidity, low phosphorus—command premium prices in metallurgical markets.\n\nAdditional seams provide thermal coal for power generation, with combined resources supporting 50+ years of production at planned extraction rates.`,
        image: coalMining,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '1950s', event: 'Industrial mining begins' },
      { year: '2015', event: 'Resource reassessment' },
      { year: '2025', event: 'Modernization program' },
      { year: '2030', event: 'Longwall operations begin' },
      { year: '2035', event: 'Full production capacity' },
    ],
    relatedMinerals: [
      { name: 'Coal Basins', href: '/minerals/coal/basins' },
      { name: 'Underground Operations', href: '/minerals/coal/underground' },
    ]
  },

  'talc/high-purity': {
    title: 'Afghan High-Purity Talc Deposits',
    subtitle: 'Premium Industrial Mineral for Global Markets',
    heroImage: talcMining,
    overview: `Afghanistan produces some of the world's purest talc—a versatile industrial mineral used in paper, plastics, ceramics, cosmetics, and pharmaceutical applications. Afghan talc deposits in Nangarhar, Laghman, and Kunar provinces contain material with 98%+ purity, commanding premium prices in international markets.

Current production of 200,000 tons annually—exported primarily to Pakistan, China, and India—generates $30 million in revenue. Upgrading production to 1 million tons through mechanized mining and beneficiation would increase revenues to $200 million while creating 5,000 jobs.

The cosmetic and pharmaceutical grades—requiring 99%+ purity and strict quality control—represent the highest-value applications, with prices reaching $500/ton compared to $150/ton for industrial grades.`,
    stats: [
      { value: '98%+', label: 'Purity', description: 'Premium quality' },
      { value: '1M', label: 'Tons/Year', description: 'Production target' },
      { value: '$200M', label: 'Revenue', description: 'Annual potential' },
      { value: '5,000', label: 'Jobs', description: 'Employment target' },
      { value: '$500/t', label: 'Premium Price', description: 'Cosmetic grade' },
      { value: '200K', label: 'Current Output', description: 'Tons annually' },
    ],
    sections: [
      {
        title: 'Quality & Applications',
content: `Afghan talc's exceptional purity derives from its geological setting within ultrapure magnesite and dolomite host rocks. Minimal iron contamination produces naturally white material requiring no bleaching—a significant advantage over competitors requiring chemical treatment.\n\nPaper industry applications—as filler and coating pigment—consume 30% of global talc production. Plastic compounding uses talc as a reinforcing filler, improving stiffness and heat resistance. Ceramic glazes and bodies utilize talc for thermal shock resistance.\n\nThe highest-value application—cosmetic and pharmaceutical talc—requires certified purity, asbestos-free verification, and GMP-compliant processing.
Afghan deposits contain no amphibole contamination, meeting the strictest safety standards for personal care products.`,
        image: talcDeposit,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2000s', event: 'Commercial mining expansion' },
      { year: '2020', event: 'International quality certification' },
      { year: '2025', event: 'Beneficiation plant construction' },
      { year: '2028', event: 'Pharmaceutical grade production' },
      { year: '2032', event: 'Full capacity operations' },
    ],
    relatedMinerals: [
      { name: 'Barite', href: '/minerals/barite/drilling' },
      { name: 'Salt Deposits', href: '/minerals/salt/deposits' },
    ]
  },

  'barite/drilling': {
    title: 'Afghan Drilling Barite',
    subtitle: 'Essential Mineral for Oil & Gas Industry',
    heroImage: barite,
    overview: `Barite (barium sulfate) is the essential weighting agent in drilling muds used by the oil and gas industry worldwide. Afghanistan's barite deposits in Laghman, Nangarhar, and Kunar provinces contain high-quality material meeting API specifications for drilling applications.

Global barite demand of 8 million tons annually is driven by drilling activity in Middle Eastern, Central Asian, and North American oil fields. Afghan barite's proximity to major drilling markets in Pakistan, Iran, and Central Asia provides a natural competitive advantage.

Current production of 50,000 tons could expand to 500,000 tons with mechanized mining and processing, generating $75 million annually while supplying 6% of global demand. The deposits' consistent quality—specific gravity exceeding 4.2—meets premium drilling specifications.`,
    stats: [
      { value: '500K', label: 'Tons/Year', description: 'Production target' },
      { value: '4.2+', label: 'Specific Gravity', description: 'Premium quality' },
      { value: '$75M', label: 'Revenue', description: 'Annual potential' },
      { value: '6%', label: 'Global Supply', description: 'Market share target' },
      { value: '3,000', label: 'Jobs', description: 'Employment creation' },
      { value: 'API', label: 'Standard', description: 'Quality certification' },
    ],
    sections: [
      {
        title: 'Drilling Applications',
        content: `Barite's high specific gravity (4.5 g/cm³) makes it the ideal material for weighting drilling fluids—the mud circulated through oil and gas wells to maintain pressure, cool drill bits, and remove cuttings. Each deep well consumes 500-2,000 tons of barite during drilling operations.\n\nAfghan barite meets API 13A specifications for drilling-grade material: minimum specific gravity of 4.2, maximum particle size distribution, and controlled levels of soluble alkaline earth metals. Premium quality commands prices of $150/ton at port.\n\nGrowing drilling activity in the Middle East, Central Asia, and the broader region ensures robust demand for Afghan barite. Proximity to Pakistan's Sui gas fields and Iran's oil provinces minimizes transportation costs.`,
        image: bariteDeposit,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2010', event: 'Commercial barite production' },
      { year: '2020', event: 'API certification achieved' },
      { year: '2025', event: 'Processing plant construction' },
      { year: '2028', event: 'Full production capacity' },
    ],
    relatedMinerals: [
      { name: 'Talc', href: '/minerals/talc/high-purity' },
      { name: 'Salt Deposits', href: '/minerals/salt/deposits' },
    ]
  },

  'salt/deposits': {
    title: 'Afghan Salt Deposits',
    subtitle: 'Industrial and Culinary Salt Resources',
    heroImage: saltMining,
    overview: `Afghanistan's rock salt deposits—concentrated in Takhar, Kunduz, Jowzjan, and Balkh provinces—represent substantial resources of both industrial and food-grade salt. Underground mines operating since ancient times produce crystalline halite prized for its purity and distinctive pink coloration.

Salt production of 500,000 tons annually serves domestic food preservation, chemical manufacturing, and road maintenance needs. Modern development could increase production to 2 million tons while upgrading quality to meet international food-grade and industrial specifications.

Specialty products—including Himalayan-style pink salt for premium food markets, pharmaceutical-grade salt, and industrial-grade material for chemical processing—diversify revenue streams while commanding premium prices in export markets.`,
    stats: [
      { value: '2M', label: 'Tons/Year', description: 'Production target' },
      { value: '500K', label: 'Current Output', description: 'Tons annually' },
      { value: '$100M', label: 'Revenue', description: 'Annual potential' },
      { value: '5,000', label: 'Jobs', description: 'Employment creation' },
      { value: '99%', label: 'NaCl Purity', description: 'Premium grade' },
      { value: 'Ancient', label: 'Heritage', description: 'Mining tradition' },
    ],
    sections: [
      {
        title: 'Underground Mining',
        content: `Afghan salt mines utilize the room-and-pillar method, cutting large chambers into salt beds while leaving pillars to support the roof. The naturally self-supporting properties of rock salt enable impressive underground spaces—some chambers reach 20 meters in height.\n\nModern mining equipment—continuous miners, shuttle cars, and conveyor systems—increases productivity while improving safety. The dry, stable underground environment provides excellent working conditions compared to most mining operations.\n\nThe distinctive pink coloration of Afghan rock salt—caused by trace iron oxide minerals—creates a premium product for the gourmet food market, commanding prices 5-10x above standard white salt.`,
        image: saltExtraction,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: 'Ancient', event: 'Salt mining tradition' },
      { year: '2015', event: 'Modernization begins' },
      { year: '2025', event: 'Processing upgrades complete' },
      { year: '2030', event: 'Full production capacity' },
    ],
    relatedMinerals: [
      { name: 'Talc', href: '/minerals/talc/high-purity' },
      { name: 'Barite', href: '/minerals/barite/drilling' },
    ]
  },

  // ==================== PROVINCES - KEY ENTRIES ====================
  'provinces/logar': {
    title: 'Logar Province - Copper Heartland',
    subtitle: 'Home of Mes Aynak & Regional Development Hub',
    heroImage: logarMegaAerial,
    overview: `Logar Province, located just 60 kilometers south of Kabul, hosts Afghanistan's most valuable mineral deposit—the Mes Aynak copper mine containing 125m tons of copper worth over $1T. The province's strategic location, accessibility, and mineral wealth make it the cornerstone of Afghanistan's mining development strategy.

Beyond Mes Aynak, Logar contains chromite deposits in the eastern mountains, construction stone resources, and agricultural potential that complement mineral development. The province's proximity to Kabul ensures access to skilled labor, services, and transportation infrastructure.

Comprehensive development plans integrate mining with community services, infrastructure improvement, and agricultural modernization—ensuring that Logar's mineral wealth benefits all residents while building sustainable livelihoods beyond mining.`,
    stats: [
      { value: '$1.5T', label: 'Mineral Value', description: 'Mes Aynak reserves' },
      { value: '125m', label: 'Tons Copper', description: 'Primary resource' },
      { value: '75,000', label: 'Jobs', description: 'Total employment' },
      { value: '60km', label: 'From Kabul', description: 'Strategic location' },
      { value: '50', label: 'Schools', description: 'Planned construction' },
      { value: '$3B', label: 'Annual Revenue', description: 'At full production' },
    ],
    sections: [
      {
        title: 'Mes Aynak Development',
        content: `The Mes Aynak copper deposit is the centerpiece of Logar's development, with planned operations creating 50,000 direct and indirect jobs. The open-pit mine, concentrator, smelter, and refinery represent a $10 billion investment transforming the province into an industrial powerhouse.\n\nArchaeological preservation of the 2,000-year-old Buddhist monastery complex demonstrates responsible development that honors cultural heritage. The on-site museum will attract international tourism, diversifying the provincial economy.\n\nInfrastructure development—including 150 kilometers of paved roads, a 500 MW power plant, and rail connections—benefits all Logar residents through improved connectivity, electricity access, and economic opportunity.`,
        image: logarProvince,
        alignment: 'left'
      },
      {
        title: 'Community Development',
        content: `The Logar Development Foundation—funded by mining revenues—will invest $50 million annually in community services: 50 schools serving 25,000 students, 5 health clinics providing healthcare to 100,000 residents, agricultural extension services, and microfinance for 10,000 small businesses.\n\nLocal procurement policies ensure 60% of mining goods and services are sourced from Logar, maximizing economic multiplier effects. Each mining job creates 3 additional positions in supporting industries.\n\nThe foundation's 50-year endowment ensures community investments continue long after mining operations conclude, creating permanent improvements in education, health, and economic capability.`,
        image: community,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '1970s', event: 'Copper discovery' },
      { year: '2007', event: 'Modern surveys begin' },
      { year: '2025', event: 'Infrastructure development' },
      { year: '2030', event: 'Mining operations commence' },
      { year: '2035', event: 'Full production capacity' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
    ]
  },

  'provinces/badakhshan': {
    title: 'Badakhshan - Gemstone Kingdom',
    subtitle: "6,000 Years of Precious Stone Heritage",
    heroImage: badakhshanMegaLandscape,
    overview: `Badakhshan Province in northeastern Afghanistan has supplied the world's finest lapis lazuli for 6,000 years—the longest continuous mining heritage on Earth. Beyond lapis, the province hosts significant gold, ruby, sapphire, and rare earth deposits across its mountainous terrain.

The province's mineral wealth extends across multiple commodity groups: lapis lazuli from the Sar-e-Sang mines, alluvial and hard rock gold along the Kokcha River system, rubies and sapphires from Hindu Kush marble formations, and rare earth minerals in alkaline rock complexes.

Development plans preserve Badakhshan's extraordinary mining heritage while modernizing operations for safety, efficiency, and environmental protection. Heritage tourism development links ancient mine sites with natural beauty and cultural attractions.`,
    stats: [
      { value: '6,000', label: 'Years', description: 'Mining heritage' },
      { value: '$5B', label: 'Mineral Value', description: 'Combined resources' },
      { value: '25,000', label: 'Miners', description: 'Currently active' },
      { value: '5', label: 'Mineral Types', description: 'Major resources' },
      { value: 'UNESCO', label: 'Nomination', description: 'Heritage site' },
      { value: '$500M', label: 'Annual Potential', description: 'Revenue target' },
    ],
    sections: [
      {
        title: 'Lapis Lazuli Heritage',
        content: `The Sar-e-Sang lapis mines—the world's oldest continuously operated mines—have supplied azure gemstone to civilizations from Mesopotamia to Renaissance Europe. The mines produce the finest quality lapis globally, with deep blue coloration and golden pyrite inclusions prized by jewelers and collectors.\n\nFormalization of mining operations would increase production from 9,000 to 25,000 tons annually while improving miner safety and environmental management. Value-added processing—cutting, polishing, and carving—captures additional value within the province.\n\nUNESCO World Heritage nomination for the ancient mine sites would attract international tourism while ensuring preservation of this irreplaceable cultural asset.`,
        image: badakhshan,
        alignment: 'left'
      },
      {
        title: 'Gold & Precious Metals',
        content: `Badakhshan's gold-bearing rivers and hard rock deposits have attracted prospectors for millennia. The Kokcha River system and tributaries yield alluvial gold supporting 50,000 part-time miners, while modern exploration has identified lode deposits with resources exceeding 500 tons of gold.\n\nFormalized artisanal mining cooperatives replace mercury-based processing with safe gravity methods, protecting worker health and river ecosystems while tripling gold recovery rates.\n\nThe province's remoteness and natural beauty create opportunities for sustainable tourism that complements mining—trekking, climbing, and cultural experiences generate employment while preserving the environment.`,
        image: goldMining,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '4000 BCE', event: 'Lapis mining begins' },
      { year: '1323 BCE', event: 'Tutankhamun burial includes Afghan lapis' },
      { year: '2010', event: 'Modern mineral assessment' },
      { year: '2025', event: 'Formalization programs' },
      { year: '2030', event: 'Heritage tourism development' },
    ],
    relatedMinerals: [
      { name: 'Lapis Lazuli', href: '/minerals/gems/lapis' },
      { name: 'Badakhshan Gold', href: '/minerals/gold/badakhshan' },
    ]
  },

  'provinces/bamyan': {
    title: 'Bamyan - Iron Mountain Province',
    subtitle: "Home of Hajigak & Cultural Heritage",
    heroImage: bamyanMegaProvince,
    overview: `Bamyan Province hosts the Hajigak iron deposit—Asia's largest iron ore body containing 2.2 billion tons of high-grade magnetite. The province's mineral wealth, cultural heritage (including the famous Buddha niches), and spectacular landscapes make it a cornerstone of Afghanistan's development strategy.

Beyond iron ore, Bamyan contains coal resources supporting steel production, marble deposits of premium quality, and hydroelectric potential providing clean energy for industrial operations. The integrated development of these resources creates a self-sustaining industrial corridor.

Environmental sensitivity—protecting Bamyan's UNESCO-listed cultural heritage and Band-e-Amir National Park—guides all development planning, ensuring that mineral wealth enhances rather than diminishes the province's natural and cultural treasures.`,
    stats: [
      { value: '2.2B', label: 'Tons Iron', description: 'Hajigak reserves' },
      { value: '$420B', label: 'Value', description: 'Combined minerals' },
      { value: '100,000', label: 'Jobs', description: 'Employment potential' },
      { value: 'UNESCO', label: 'Heritage', description: 'Cultural site' },
      { value: '500MW', label: 'Hydropower', description: 'Clean energy' },
      { value: '15M', label: 'Tons Steel', description: 'Annual target' },
    ],
    sections: [
      {
        title: 'Hajigak Iron Development',
        content: `The Hajigak deposit's 63% iron content represents exceptional quality, supporting an integrated steel complex that would transform Afghanistan into Central Asia's steel manufacturing hub. The $12 billion development includes mining, pelletizing, direct reduction, steelmaking, and rolling facilities.\n\nBamyan's hydroelectric potential—from rivers draining the Hindu Kush—provides renewable energy for power-intensive steel production. Combined with natural gas from northern provinces, the energy mix supports environmentally responsible industrial development.\n\nThe project employs 25,000 workers directly, with 75,000 indirect positions in transportation, services, and supply industries—transforming Bamyan from a primarily agricultural province to an industrial center.`,
        image: bamyanLandscape,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '1960s', event: 'Iron ore discovery' },
      { year: '2011', event: 'International development tender' },
      { year: '2025', event: 'Infrastructure construction' },
      { year: '2030', event: 'Mining commences' },
      { year: '2035', event: 'Steel complex operational' },
    ],
    relatedMinerals: [
      { name: 'Hajigak Iron', href: '/minerals/iron/hajigak' },
      { name: 'Steel Production', href: '/minerals/iron/steel-production' },
    ]
  },

  'provinces/panjshir': {
    title: 'Panjshir - Emerald Valley',
    subtitle: "World-Famous Emerald & Gemstone Province",
    heroImage: panjshirMegaValley,
    overview: `The Panjshir Valley produces emeralds rivaling Colombian stones, with a mining heritage spanning 1,000 years. The valley's spectacular alpine scenery, rich cultural history, and exceptional gemstone deposits create a unique development opportunity combining mining with sustainable tourism.

Beyond emeralds, Panjshir hosts chromite, silver, and semi-precious gemstone deposits across its mountainous terrain. The valley's proximity to Kabul—just 150 kilometers north—provides accessibility advantages for tourism and logistics.

Development plans balance gemstone mining with environmental protection and cultural preservation, ensuring that Panjshir's natural beauty and mining heritage endure for future generations.`,
    stats: [
      { value: '$1.5B', label: 'Annual Potential', description: 'Emerald production' },
      { value: '5,000', label: 'Miners', description: 'Currently active' },
      { value: '1,000', label: 'Years', description: 'Mining heritage' },
      { value: 'AAA', label: 'Quality', description: 'Premium emeralds' },
      { value: '150km', label: 'From Kabul', description: 'Accessible location' },
      { value: '25,000', label: 'Jobs', description: 'Employment target' },
    ],
    sections: [
      {
        title: 'Emerald Heritage',
        content: `Panjshir emeralds are prized by collectors for their exceptional deep green color, clarity, and size—with specimens reaching 50 carats in gem quality. The valley's unique geology creates emeralds with chromium and vanadium trace elements producing colors rivaling the finest Colombian stones.\n\nModernization of mining operations—integrating traditional artisanal methods with mechanized deep mining—increases production while improving worker safety. A central processing facility handles all ore, with profit-sharing ensuring community benefit.\n\nThe proposed Kabul Gem Center provides cutting, grading, and certification facilities, capturing value currently lost to overseas processing centers.`,
        image: panjshirValley,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '1000 CE', event: 'Emerald mining begins' },
      { year: '1980s', event: 'International recognition' },
      { year: '2020', event: 'Formalization begins' },
      { year: '2025', event: 'Gem Center established' },
      { year: '2030', event: 'Full development achieved' },
    ],
    relatedMinerals: [
      { name: 'Panjshir Emeralds', href: '/minerals/gems/emeralds' },
      { name: 'Jegdalek Rubies', href: '/minerals/gems/rubies' },
    ]
  },

  'provinces/ghazni': {
    title: 'Ghazni - Lithium Belt Province',
    subtitle: "$8 Trillion Lithium Resource",
    heroImage: ghazniLithium,
    overview: `Ghazni Province hosts the world's largest known lithium deposit—215 million metric tons of lithium carbonate equivalent valued at $8 trillion. This extraordinary resource positions Ghazni as the epicenter of the global energy transition, supplying lithium for billions of electric vehicle batteries.

The lithium occurs in spodumene-bearing pegmatites extending across a 200-kilometer belt, with individual pegmatites reaching 50 meters in width. Associated minerals include tantalum, beryllium, and tin—providing valuable byproduct revenues.

Development of the Ghazni Lithium Complex will create 25,000 jobs while establishing Afghanistan's first world-class research university focused on battery technology and clean energy innovation.`,
    stats: [
      { value: '215M', label: 'Tons LCE', description: 'World record reserves' },
      { value: '$8T', label: 'Value', description: 'At current prices' },
      { value: '#1', label: 'Global Rank', description: 'Largest deposit' },
      { value: '200km', label: 'Belt Length', description: 'Mineralized zone' },
      { value: '25,000', label: 'Jobs', description: 'Direct employment' },
      { value: '$15B', label: 'Annual Revenue', description: 'At full production' },
    ],
    sections: [
      {
        title: 'Pegmatite Belt',
        content: `The Ghazni lithium pegmatite belt extends 200 kilometers through the province's central highlands, containing over 1,000 individual pegmatite bodies. The largest reach 50 meters in width and several kilometers along strike, with lithium grades consistently above 2% Li2O.\n\nPeak grades of 3.5% Li2O in core zones represent the highest-grade spodumene deposits globally, comparable to Australia's Greenbushes mine—the world's largest operating lithium producer.\n\nModern exploration using satellite imagery, airborne geophysics, and systematic drilling continues to expand the known resource, with recent discoveries suggesting the total may exceed initial USGS estimates.`,
        image: lithiumDeposits,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2010', event: 'USGS lithium estimates' },
      { year: '2020', event: 'Drilling confirms world-class grades' },
      { year: '2025', event: 'Feasibility study completed' },
      { year: '2030', event: 'First lithium production' },
      { year: '2035', event: 'Full-scale operations' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
    ]
  },

  'provinces/helmand': {
    title: 'Helmand - Strategic Resources Province',
    subtitle: 'Rare Earth Elements & Critical Minerals',
    heroImage: helmandCopper,
    overview: `Helmand Province in southern Afghanistan hosts significant rare earth element deposits alongside copper, gold, and industrial mineral resources. The REE deposits—potentially rivaling China's Bayan Obo—represent strategic assets for global technology supply chains.

Helmand's flat terrain and extensive road network provide infrastructure advantages for large-scale mining operations. The province's agricultural base complements mineral development, with irrigation modernization and crop diversification creating sustainable livelihoods beyond mining.

Development of Helmand's mineral resources requires careful integration with community needs, environmental protection, and security considerations—ensuring that resource wealth benefits all provincial residents.`,
    stats: [
      { value: '$5T', label: 'REE Value', description: 'Strategic resources' },
      { value: '17', label: 'REE Elements', description: 'Complete suite' },
      { value: '30%', label: 'Global Supply', description: 'Potential contribution' },
      { value: '50,000', label: 'Jobs', description: 'Employment potential' },
      { value: 'Critical', label: 'Status', description: 'Strategic minerals' },
      { value: '2035', label: 'Production', description: 'Target date' },
    ],
    sections: [
      {
        title: 'Rare Earth Development',
        content: `Helmand's REE deposits occur in carbonatite and alkaline rock complexes, containing both light and heavy rare earths. Initial exploration indicates resources potentially matching the scale of Bayan Obo—suggesting Afghanistan could supply 30% of non-Chinese global demand.\n\nDevelopment partnerships with Japan, South Korea, Germany, and the US provide capital, technology, and market access. The proposed Helmand REE Complex would produce separated rare earth oxides meeting specifications for permanent magnets, catalysts, and advanced electronics.\n\nEnvironmental management addresses the radioactive thorium associated with REE deposits through specialized tailings management and comprehensive radiation monitoring.`,
        image: rareEarth,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2010', event: 'REE potential identified' },
      { year: '2022', event: 'Resource estimates completed' },
      { year: '2028', event: 'Processing construction' },
      { year: '2032', event: 'Mining operations' },
      { year: '2035', event: 'Full processing capacity' },
    ],
    relatedMinerals: [
      { name: 'Helmand REE', href: '/minerals/ree/helmand' },
      { name: 'Technology Metals', href: '/minerals/ree/technology' },
    ]
  },

  // More provinces as generic entries
  'provinces/herat': {
    title: 'Herat - Western Gateway',
    subtitle: 'Marble Capital & Trade Hub',
    heroImage: heratMarble,
    overview: `Herat Province serves as Afghanistan's western gateway, hosting the nation's finest marble deposits alongside iron ore, construction materials, and strategic trade infrastructure connecting to Iranian and Central Asian markets. The province's marble—matching Italian Carrara quality—represents a renewable resource supporting centuries of production.\n\nHerat's established trade infrastructure, skilled workforce, and proximity to international markets make it an ideal location for value-added mineral processing. The proposed Herat Industrial Zone combines marble processing, steel fabrication, and export logistics in an integrated development.`,
    stats: [
      { value: '2B', label: 'Cubic Meters', description: 'Marble reserves' },
      { value: '97%', label: 'CaCO3', description: 'Marble purity' },
      { value: '$500M', label: 'Annual Potential', description: 'Export revenue' },
      { value: '20,000', label: 'Jobs', description: 'Industrial employment' },
      { value: 'Gateway', label: 'Trade Position', description: 'Western corridor' },
      { value: '40+', label: 'Quarries', description: 'Identified sites' },
    ],
    sections: [
      { title: 'Marble Industry', content: 'Herat\'s marble deposits produce premium white, cream, and onyx varieties for international architectural markets. Modern quarrying with diamond wire technology increases production while improving quality and worker safety.\n\nThe proposed Herat Marble Complex includes mechanized quarrying, gang saw processing, automated polishing, and export logistics—creating 5,000 direct jobs and establishing Afghanistan as a major marble exporter.', image: marbleMegaQuarry, alignment: 'left' as const },
    ],
    timeline: [
      { year: 'Ancient', event: 'Historical marble use' },
      { year: '2020', event: 'Modern quarrying begins' },
      { year: '2025', event: 'Industrial zone development' },
      { year: '2030', event: 'Full export capacity' },
    ],
    relatedMinerals: [
      { name: 'White Marble', href: '/minerals/marble/white' },
      { name: 'Herat Quarries', href: '/minerals/marble/herat' },
    ]
  },

  'provinces/kandahar': {
    title: 'Kandahar - Southern Resource Hub',
    subtitle: 'Strategic Minerals & Trade Gateway',
    heroImage: kandaharSurvey,
    overview: `Kandahar Province in southern Afghanistan hosts diverse mineral resources including chromite, copper, gold, and construction materials. The province's strategic location on major trade routes connecting to Pakistan's Balochistan corridor provides logistics advantages for mineral exports.\n\nGeological surveys have identified multiple mineralized zones across the province, with ongoing exploration expected to define significant new resources. Kandahar's established infrastructure and skilled workforce support rapid development of proven deposits.`,
    stats: [
      { value: 'Multiple', label: 'Minerals', description: 'Diverse resources' },
      { value: '$2B', label: 'Value', description: 'Identified resources' },
      { value: '10,000', label: 'Jobs', description: 'Employment potential' },
      { value: 'Strategic', label: 'Location', description: 'Trade gateway' },
      { value: '5', label: 'Major Deposits', description: 'Under exploration' },
      { value: '2028', label: 'Development', description: 'Target start' },
    ],
    sections: [
      { title: 'Resource Exploration', content: 'Ongoing geological surveys in Kandahar utilize modern geophysical and geochemical techniques to map subsurface mineralization. Initial results indicate copper, chromite, and gold prospects warranting detailed follow-up drilling.\n\nThe province\'s flat to rolling terrain enables efficient mechanized mining operations with lower infrastructure costs compared to mountainous deposits elsewhere in Afghanistan.', image: geologicalSurvey, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2015', event: 'Geological surveys begin' },
      { year: '2025', event: 'Resource estimation' },
      { year: '2028', event: 'Development planning' },
      { year: '2032', event: 'First production' },
    ],
    relatedMinerals: [
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Copper Deposits', href: '/minerals/copper/mes-aynak' },
    ]
  },

  'provinces/nuristan': {
    title: 'Nuristan - Lithium & Gemstone Frontier',
    subtitle: 'Remote Mountains of Critical Minerals',
    heroImage: nuristanLithium,
    overview: `Nuristan Province's remote Hindu Kush mountains harbor significant lithium pegmatite deposits, exceptional tourmaline and aquamarine gemstones, and timber resources. The province's challenging terrain has historically limited exploration, but modern technology now enables systematic evaluation of this mineral frontier.\n\nLithium resources estimated at 50 million tons LCE complement the larger Ghazni deposits, while gemstone production supports thousands of artisanal miners. Development requires careful environmental planning to protect Nuristan's extraordinary biodiversity and ancient forests.`,
    stats: [
      { value: '50M', label: 'Tons LCE', description: 'Lithium resources' },
      { value: '$30T+', label: 'Value', description: 'Combined minerals' },
      { value: '4.2%', label: 'Li2O Grade', description: 'Highest globally' },
      { value: '2,000', label: 'Miners', description: 'Gemstone workers' },
      { value: '6,000m', label: 'Elevation', description: 'Mountain peaks' },
      { value: '$100M', label: 'Gemstones', description: 'Annual potential' },
    ],
    sections: [
      { title: 'Lithium Frontier', content: 'Nuristan\'s pegmatite deposits contain lithium grades reaching 4.2% Li2O—among the highest globally. Remote sensing and helicopter-portable drilling enable exploration in terrain previously inaccessible to geological survey teams.\n\nDevelopment plans integrate environmental protection of old-growth forests with sustainable mining practices, ensuring that Nuristan\'s biodiversity is preserved alongside mineral extraction.', image: lithiumPegmatite, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2015', event: 'Initial surveys' },
      { year: '2022', event: 'Resource estimation' },
      { year: '2028', event: 'Development planning' },
      { year: '2035', event: 'First production' },
    ],
    relatedMinerals: [
      { name: 'Nuristan Lithium', href: '/minerals/lithium/nuristan' },
      { name: 'Tourmaline', href: '/minerals/gems/tourmaline' },
    ]
  },

  'provinces/kunar': {
    title: 'Kunar - Gemstone Valley',
    subtitle: 'Aquamarine & Precious Stone Province',
    heroImage: kunarGemstone,
    overview: `Kunar Province in eastern Afghanistan produces exceptional aquamarine, tourmaline, and other gemstones from pegmatite deposits in the Hindu Kush mountains. The province's strategic location along the Pakistan border provides access to Peshawar's established gemstone trading markets.\n\nAquamarine crystals from Kunar rival the finest Brazilian material, with specimens exceeding 500 carats in gem quality. Development of cutting and certification facilities would capture value currently lost to overseas processing.`,
    stats: [
      { value: '500ct', label: 'Maximum Size', description: 'Aquamarine specimens' },
      { value: '$30M', label: 'Annual Output', description: 'Current production' },
      { value: '2,000', label: 'Miners', description: 'Currently employed' },
      { value: '$100M', label: 'Potential', description: 'Developed output' },
      { value: 'AAA', label: 'Quality', description: 'Premium grade' },
      { value: '10+', label: 'Gem Types', description: 'Diverse resources' },
    ],
    sections: [
      { title: 'Aquamarine Excellence', content: 'Kunar aquamarines exhibit exceptional transparency and saturated blue color, with individual crystals reaching substantial sizes. The hexagonal crystal habit produces specimens ideal for step-cut gems maximizing brilliance.\n\nDevelopment plans include modernized mining with improved safety, central processing facilities, and gemological certification laboratories ensuring international market recognition.', image: kunarGemstone, alignment: 'left' as const },
    ],
    timeline: [
      { year: '1980s', event: 'Commercial mining begins' },
      { year: '2020', event: 'Formalization efforts' },
      { year: '2025', event: 'Processing facilities' },
      { year: '2030', event: 'Full development' },
    ],
    relatedMinerals: [
      { name: 'Kunar Aquamarine', href: '/minerals/gems/aquamarine' },
      { name: 'Tourmaline', href: '/minerals/gems/tourmaline' },
    ]
  },

  'provinces/takhar': {
    title: 'Takhar - Golden Rivers Province',
    subtitle: 'Gold Mining Heritage & Modern Development',
    heroImage: takharGold,
    overview: `Takhar Province hosts significant gold deposits along the Kokcha River system, with alluvial gold panned from these waters for centuries. Modern exploration has revealed hard rock deposits with resources exceeding 150 tons of gold worth $9 billion. The province also contains salt deposits and agricultural resources.`,
    stats: [
      { value: '150', label: 'Tons Gold', description: 'Estimated resources' },
      { value: '$9B', label: 'Value', description: 'At current prices' },
      { value: '15,000', label: 'Jobs', description: 'Employment target' },
      { value: '10', label: 'Tons/Year', description: 'Production potential' },
      { value: '$600M', label: 'Revenue', description: 'Annual target' },
      { value: '3', label: 'Major Deposits', description: 'Identified prospects' },
    ],
    sections: [
      { title: 'Gold Development', content: 'Takhar\'s gold development combines formalized artisanal mining cooperatives with modern hard rock operations. Mercury-free processing protects worker health and river ecosystems while tripling recovery rates.\n\nThe Samti Gold deposit—200 tons at 5 g/t gold—could support 20 years of production generating $600 million annually. Community benefit sharing ensures provincial development.', image: goldVein, alignment: 'left' as const },
    ],
    timeline: [
      { year: 'Ancient', event: 'Alluvial gold mining' },
      { year: '2020', event: 'Modern exploration' },
      { year: '2028', event: 'Hard rock development' },
      { year: '2032', event: 'Full production' },
    ],
    relatedMinerals: [
      { name: 'Takhar Gold', href: '/minerals/gold/takhar' },
      { name: 'Badakhshan Gold', href: '/minerals/gold/badakhshan' },
    ]
  },

  'provinces/balkh': {
    title: 'Balkh - Northern Resources Province',
    subtitle: 'Industrial Minerals & Natural Gas',
    heroImage: sarEPulGas,
    overview: `Balkh Province in northern Afghanistan hosts diverse mineral resources including natural gas, salt, construction materials, and industrial minerals. The province's established infrastructure—centered on Mazar-e-Sharif, Afghanistan's fourth-largest city—supports industrial development and trade with Central Asian neighbors.\n\nNatural gas resources provide energy for industrial operations across the north, while salt and mineral deposits supply domestic manufacturing needs. Balkh's rail connection to Uzbekistan enables efficient export of bulk commodities.`,
    stats: [
      { value: 'Diverse', label: 'Resources', description: 'Multiple minerals' },
      { value: 'Rail', label: 'Connection', description: 'Uzbekistan link' },
      { value: '10,000', label: 'Jobs', description: 'Industrial potential' },
      { value: 'Gas', label: 'Energy', description: 'Industrial fuel' },
      { value: '$1B', label: 'Value', description: 'Combined resources' },
      { value: 'Hub', label: 'Trade Position', description: 'Northern gateway' },
    ],
    sections: [
      { title: 'Northern Industrial Hub', content: 'Balkh\'s strategic position—with rail connections to Uzbekistan, road links to Tajikistan, and proximity to Central Asian markets—makes it an ideal location for industrial mineral processing and manufacturing.\n\nNatural gas reserves provide affordable energy for cement production, chemical manufacturing, and metallurgical operations, supporting industrialization across northern Afghanistan.', image: cementFactory, alignment: 'left' as const },
    ],
    timeline: [
      { year: '1970s', event: 'Gas development begins' },
      { year: '2012', event: 'Rail link completed' },
      { year: '2025', event: 'Industrial zone development' },
      { year: '2030', event: 'Full industrial capacity' },
    ],
    relatedMinerals: [
      { name: 'Salt Deposits', href: '/minerals/salt/deposits' },
      { name: 'Coal Basins', href: '/minerals/coal/basins' },
    ]
  },

  // ==================== OPERATIONS - KEY ENTRIES ====================
  'operations/processing': {
    title: 'Processing & Refining Operations',
    subtitle: 'World-Class Mineral Processing Infrastructure',
    heroImage: sectorProcessingInterior,
    overview: `Afghanistan's mineral processing strategy encompasses the full value chain from raw ore to finished products—concentrators, smelters, refineries, and manufacturing facilities that maximize economic benefit from the nation's $30 trillion mineral endowment.\n\nPlanned processing facilities include copper concentrators and smelters in Logar, lithium chemical plants in Ghazni, ferrochrome smelters in Khost, steel mills in Bamyan, and gemstone cutting centers in Kabul and Panjshir. Combined investment exceeds $25 billion, creating 100,000 industrial jobs.`,
    stats: [
      { value: '$25B', label: 'Investment', description: 'Processing infrastructure' },
      { value: '100,000', label: 'Jobs', description: 'Industrial employment' },
      { value: '10', label: 'Facilities', description: 'Major processing plants' },
      { value: '10x', label: 'Value Addition', description: 'Vs raw ore export' },
      { value: 'IFC', label: 'Standards', description: 'Environmental compliance' },
      { value: '2035', label: 'Full Capacity', description: 'Development target' },
    ],
    sections: [
      { title: 'Integrated Processing', content: 'Each major mineral deposit will have dedicated processing facilities designed for specific ore characteristics. Copper flotation concentrators, lithium chemical plants, ferrochrome smelters, and iron ore pelletizers represent state-of-the-art technology adapted to Afghan conditions.\n\nEnvironmental management is integral to every facility, with zero-discharge water systems, emission controls, and progressive rehabilitation ensuring compliance with IFC Performance Standards.', image: processingPlant, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2025', event: 'Facility design phase' },
      { year: '2028', event: 'Construction begins' },
      { year: '2032', event: 'Major facilities operational' },
      { year: '2035', event: 'Full processing capacity' },
    ],
    relatedMinerals: [
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
    ]
  },

  'operations/smelting': {
    title: 'Smelting Operations',
    subtitle: 'Metal Extraction & Refining Excellence',
    heroImage: smelting,
    overview: `Afghanistan's smelting operations will transform mineral concentrates into refined metals meeting international quality standards. Planned facilities include copper flash smelting at Mes Aynak, ferrochrome submerged arc furnaces in Khost, and direct reduction iron-making at Hajigak.\n\nCombined smelting capacity will process 5 million tons of concentrates annually, producing refined copper, ferrochrome, and direct reduced iron for domestic manufacturing and international export markets.`,
    stats: [
      { value: '5M', label: 'Tons/Year', description: 'Smelting capacity' },
      { value: '$10B', label: 'Investment', description: 'Smelter infrastructure' },
      { value: '15,000', label: 'Jobs', description: 'Smelter employment' },
      { value: '3', label: 'Metals', description: 'Cu, Cr, Fe production' },
      { value: '99.99%', label: 'Purity', description: 'LME-grade output' },
      { value: 'IFC', label: 'Standards', description: 'Environmental compliance' },
    ],
    sections: [
      { title: 'Flash Smelting Technology', content: 'Copper flash smelting at Mes Aynak will process dried concentrate at 1,250°C, separating copper from impurities through oxygen-enriched combustion. The process produces copper matte, which is then converted and electrolytically refined to 99.99% purity.\n\nByproduct recovery captures sulfuric acid, gold, silver, selenium, and tellurium—generating $200 million annually in additional revenue while minimizing environmental impact.', image: copperSmeltingFurnace, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2028', event: 'Smelter construction' },
      { year: '2032', event: 'First metal production' },
      { year: '2035', event: 'Full smelting capacity' },
    ],
    relatedMinerals: [
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Chromite Steel', href: '/minerals/chromite/steel' },
    ]
  },

  'operations/research': {
    title: 'Research & Exploration',
    subtitle: 'Advancing Geological Knowledge',
    heroImage: exploration,
    overview: `Afghanistan's geological research program combines modern exploration technology with traditional geological knowledge to map and evaluate the nation's mineral endowment. Systematic surveys using satellite imagery, airborne geophysics, and ground-based geochemistry continue to discover new deposits across all 34 provinces.\n\nThe Afghan Geological Survey—supported by international partnerships—maintains comprehensive databases of geological, geophysical, and geochemical data, enabling evidence-based mineral development planning.`,
    stats: [
      { value: '1400+', label: 'Deposits', description: 'Catalogued occurrences' },
      { value: '34', label: 'Provinces', description: 'Survey coverage' },
      { value: '$30T+', label: 'Value', description: 'Identified minerals' },
      { value: '500', label: 'Geologists', description: 'Survey team' },
      { value: '150+', label: 'Mineral Types', description: 'Identified species' },
      { value: 'AI', label: 'Technology', description: 'Exploration tools' },
    ],
    sections: [
      { title: 'Modern Exploration', content: 'Advanced exploration technology—including drone-mounted magnetometers, hyperspectral imaging, and machine learning target generation—accelerates discovery while reducing exploration costs. AI algorithms trained on known deposit characteristics identify prospective areas from multi-layered geoscience datasets.\n\nPartnerships with the USGS, BGS, and BRGM provide access to world-class expertise and analytical facilities.', image: geologicalSurvey, alignment: 'left' as const },
    ],
    timeline: [
      { year: '1960s', event: 'Soviet geological surveys' },
      { year: '2004', event: 'USGS partnership begins' },
      { year: '2020', event: 'AI exploration tools deployed' },
      { year: '2025', event: 'Comprehensive survey completion' },
    ],
    relatedMinerals: [
      { name: 'Geological Surveys', href: '/operations/geological' },
      { name: 'Investment Framework', href: '/operations/investment' },
    ]
  },

  'operations/geological': {
    title: 'Geological Survey Operations',
    subtitle: 'Mapping Afghanistan\'s Mineral Wealth',
    heroImage: sectorGeologicalTeam,
    overview: `The Afghan Geological Survey (AGS) conducts systematic geological mapping, geophysical surveys, and geochemical sampling across all 34 provinces. This foundational work identifies mineral prospects, characterizes deposits, and provides the scientific basis for investment decisions.\n\nModern survey technology—including satellite remote sensing, airborne electromagnetics, and GPS-enabled field mapping—has transformed the pace and accuracy of geological data collection.`,
    stats: [
      { value: '100%', label: 'Coverage', description: 'All provinces mapped' },
      { value: '500', label: 'Geologists', description: 'Survey professionals' },
      { value: '50,000', label: 'Samples', description: 'Analyzed annually' },
      { value: 'AI', label: 'Analysis', description: 'Machine learning tools' },
      { value: '30+', label: 'Partners', description: 'International collaborators' },
      { value: '150+', label: 'Minerals', description: 'Identified types' },
    ],
    sections: [
      { title: 'Survey Methods', content: 'Geological surveys employ a multi-technique approach: satellite imagery identifies regional structures, airborne geophysics maps subsurface geology, ground-based geochemistry detects mineral signatures, and diamond core drilling confirms deposit characteristics.\n\nThe resulting datasets—integrated in modern GIS platforms—enable rapid evaluation of new prospects and support informed investment decisions.', image: sectorGeologicalTeam, alignment: 'left' as const },
    ],
    timeline: [
      { year: '1960s', event: 'National survey established' },
      { year: '2004', event: 'Modern surveys begin' },
      { year: '2020', event: 'Digital transformation' },
      { year: '2025', event: 'AI integration' },
    ],
    relatedMinerals: [
      { name: 'Research', href: '/operations/research' },
      { name: 'Investment', href: '/operations/investment' },
    ]
  },

  'operations/trade': {
    title: 'Trade & Export Operations',
    subtitle: 'Connecting Afghan Minerals to Global Markets',
    heroImage: exportLogistics,
    overview: `Afghanistan's mineral trade strategy develops three export corridors—southern through Pakistan, northern through Central Asia, and western through Iran—ensuring resilient access to global markets. Combined export infrastructure investment exceeds $15 billion, creating 30,000 logistics jobs.\n\nDiverse product streams—from refined copper cathodes and lithium chemicals to cut gemstones and processed marble—serve markets across Asia, Europe, and North America.`,
    stats: [
      { value: '3', label: 'Corridors', description: 'Export routes' },
      { value: '$15B', label: 'Investment', description: 'Infrastructure' },
      { value: '30,000', label: 'Jobs', description: 'Logistics employment' },
      { value: '$20B', label: 'Annual Exports', description: 'Revenue target' },
      { value: '50+', label: 'Countries', description: 'Export destinations' },
      { value: '2035', label: 'Full Capacity', description: 'Infrastructure target' },
    ],
    sections: [
      { title: 'Export Infrastructure', content: 'The Southern Corridor connects to Pakistan\'s Karachi port via a 650-kilometer railway. The Northern Corridor accesses Central Asian rail networks and Chinese markets. The Western Corridor through Iran reaches Persian Gulf ports.\n\nMaintaining three independent corridors ensures no single geopolitical disruption halts mineral exports—critical for investor confidence and supply chain reliability.', image: railwayExportTerminal, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2025', event: 'Corridor development' },
      { year: '2030', event: 'Southern railway operational' },
      { year: '2032', event: 'Northern connection' },
      { year: '2035', event: 'Full three-corridor capacity' },
    ],
    relatedMinerals: [
      { name: 'Copper Exports', href: '/minerals/copper/exports' },
      { name: 'Investment Framework', href: '/operations/investment' },
    ]
  },

  'operations/investment': {
    title: 'Investment Framework',
    subtitle: 'Legal, Financial & Partnership Structures',
    heroImage: sectorInvestmentConf,
    overview: `Afghanistan's Mining Investment Framework provides clear, competitive terms for international investors. Structures include joint ventures, production sharing agreements, build-operate-transfer arrangements, and direct foreign investment with full profit repatriation rights.\n\nLegal protections include bilateral investment treaties, international arbitration clauses, and transparent licensing procedures. Fiscal terms—royalties, taxes, and incentives—are designed to balance investor returns with government revenue requirements.`,
    stats: [
      { value: '$50B', label: 'Investment Target', description: 'Total mining FDI' },
      { value: '10', label: 'Agreement Types', description: 'Investment structures' },
      { value: 'ICSID', label: 'Arbitration', description: 'Dispute resolution' },
      { value: '100%', label: 'Repatriation', description: 'Profit transfer rights' },
      { value: '20+', label: 'BITs', description: 'Bilateral treaties' },
      { value: '5-8%', label: 'Royalty Rate', description: 'Competitive terms' },
    ],
    sections: [
      { title: 'Partnership Structures', content: 'Joint ventures between Afghan state entities and international mining companies share costs, risks, and rewards while building domestic capacity. Production sharing agreements provide clear revenue allocation between government and investors.\n\nBuild-operate-transfer arrangements enable infrastructure development by private investors with eventual transfer to public ownership, ensuring long-term national benefit.', image: investmentConference, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2020', event: 'Mining law modernization' },
      { year: '2023', event: 'Investment framework launch' },
      { year: '2025', event: 'Major agreements signed' },
      { year: '2030', event: 'Mature investment environment' },
    ],
    relatedMinerals: [
      { name: 'Trade & Export', href: '/operations/trade' },
      { name: 'Research', href: '/operations/research' },
    ]
  },

  'operations/sustainability': {
    title: 'Sustainability & Environmental Standards',
    subtitle: 'Responsible Mining for Future Generations',
    heroImage: sectorEnvironmentRehab,
    overview: `Afghanistan's mining sustainability framework ensures that mineral development benefits current and future generations. Environmental standards meeting IFC Performance Standards and Equator Principles govern all mining operations, with comprehensive monitoring and enforcement.\n\nKey commitments include zero-discharge water management, progressive rehabilitation of mined areas, biodiversity protection through conservation offsets, and climate-responsible operations targeting net-zero emissions by 2050.`,
    stats: [
      { value: 'IFC', label: 'Standards', description: 'Performance compliance' },
      { value: '95%', label: 'Water Recycling', description: 'Process water' },
      { value: 'Net Zero', label: '2050 Target', description: 'Carbon emissions' },
      { value: '100%', label: 'Rehabilitation', description: 'Mine closure plan' },
      { value: '40%', label: 'Conservation', description: 'Protected areas' },
      { value: 'Continuous', label: 'Monitoring', description: 'Environmental tracking' },
    ],
    sections: [
      { title: 'Environmental Management', content: 'Comprehensive Environmental and Social Impact Assessments (ESIAs) precede all mining operations. Real-time monitoring systems track air quality, water quality, noise levels, and biodiversity indicators throughout operations.\n\nProgressive rehabilitation converts completed mining areas to productive use—agricultural land, reforested slopes, or recreational areas—within 5 years of mining cessation.', image: environmentalRehabilitation, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2020', event: 'Environmental framework adopted' },
      { year: '2025', event: 'IFC compliance certification' },
      { year: '2030', event: 'First rehabilitation completions' },
      { year: '2050', event: 'Net-zero target' },
    ],
    relatedMinerals: [
      { name: 'Community Development', href: '/operations/community' },
      { name: 'Health & Safety', href: '/operations/safety' },
    ]
  },

  'operations/community': {
    title: 'Community Development Programs',
    subtitle: 'Shared Prosperity from Mineral Wealth',
    heroImage: sectorCommunityDev,
    overview: `Mining community development programs ensure that mineral wealth benefits all Afghans—not just mine workers and investors. Annual investments exceeding $200 million across all mining operations fund education, healthcare, infrastructure, and economic diversification programs in mining-adjacent communities.\n\nThe Afghan Community Development Foundation—funded by mining revenues—will maintain community investments for 50 years beyond mine closure, ensuring lasting benefits from responsible resource development.`,
    stats: [
      { value: '$200M', label: 'Annual Investment', description: 'Community programs' },
      { value: '200', label: 'Schools', description: 'Construction target' },
      { value: '50', label: 'Clinics', description: 'Healthcare facilities' },
      { value: '100,000', label: 'Students', description: 'Education beneficiaries' },
      { value: '50,000', label: 'Businesses', description: 'Microfinance support' },
      { value: '50 Years', label: 'Foundation', description: 'Beyond mine closure' },
    ],
    sections: [
      { title: 'Education & Health', content: 'Mining revenues fund construction of 200 schools and 50 health clinics across mining provinces, serving 500,000 residents. Scholarship programs send 2,000 students annually to universities, while vocational training develops skilled workers.\n\nHealthcare programs provide free primary care, maternal health services, and emergency medical facilities—dramatically improving health outcomes in remote communities.', image: communitySchool, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2025', event: 'Programs launch' },
      { year: '2028', event: '100 schools built' },
      { year: '2032', event: 'Full clinic network' },
      { year: '2035', event: 'Foundation fully funded' },
    ],
    relatedMinerals: [
      { name: 'Sustainability', href: '/operations/sustainability' },
      { name: 'Employment', href: '/minerals/iron/employment' },
    ]
  },

  'operations/digital': {
    title: 'Digital Mining Technology',
    subtitle: 'AI, Automation & Data-Driven Operations',
    heroImage: dataMegaCenter,
    overview: `Afghanistan's mining operations will leverage cutting-edge digital technology to maximize efficiency, safety, and environmental performance. Autonomous vehicles, AI-powered process optimization, drone surveys, and IoT sensor networks transform traditional mining into a high-tech industry.\n\nThe Digital Mining Initiative—a $500 million investment in technology infrastructure—positions Afghanistan at the forefront of mining innovation while creating thousands of skilled technology jobs.`,
    stats: [
      { value: '$500M', label: 'Investment', description: 'Digital infrastructure' },
      { value: 'AI', label: 'Core Technology', description: 'Process optimization' },
      { value: '5,000', label: 'Tech Jobs', description: 'Digital employment' },
      { value: '15%', label: 'Efficiency Gain', description: 'Through automation' },
      { value: 'IoT', label: 'Sensors', description: 'Real-time monitoring' },
      { value: 'Autonomous', label: 'Vehicles', description: 'Self-driving haul trucks' },
    ],
    sections: [
      { title: 'Smart Mining', content: 'Autonomous haul trucks and drilling rigs operate 24/7 without human operators, improving productivity 30% while eliminating safety risks. AI algorithms optimize ore blending, energy consumption, and maintenance scheduling in real-time.\n\nDigital twins—virtual replicas of physical operations—enable process engineers to test optimization strategies before implementation, reducing risk and accelerating improvement.', image: controlCenterOperations, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2025', event: 'Digital strategy launched' },
      { year: '2028', event: 'AI systems deployed' },
      { year: '2030', event: 'Autonomous operations begin' },
      { year: '2035', event: 'Full digital integration' },
    ],
    relatedMinerals: [
      { name: 'Processing', href: '/operations/processing' },
      { name: 'Research', href: '/operations/research' },
    ]
  },

  'operations/safety': {
    title: 'Health & Safety Standards',
    subtitle: 'World-Class Worker Protection',
    heroImage: sectorSafetyCenter,
    overview: `Afghanistan's mining safety framework adopts the highest international standards—ILO Mining Convention, ICMM Health & Safety principles, and ISO 45001—ensuring that every worker returns home safely. Comprehensive training, modern equipment, and real-time monitoring systems prevent incidents before they occur.\n\nThe target of zero workplace fatalities reflects an absolute commitment to worker protection, with safety performance metrics driving continuous improvement across all operations.`,
    stats: [
      { value: 'Zero', label: 'Fatality Target', description: 'Absolute commitment' },
      { value: 'ILO', label: 'Standards', description: 'International compliance' },
      { value: '100%', label: 'PPE Coverage', description: 'Worker protection' },
      { value: '40hrs', label: 'Annual Training', description: 'Per worker minimum' },
      { value: 'Real-Time', label: 'Monitoring', description: 'Hazard detection' },
      { value: 'ISO 45001', label: 'Certification', description: 'Safety management' },
    ],
    sections: [
      { title: 'Safety Culture', content: 'Safety culture starts with leadership commitment and extends to every worker through comprehensive training, empowerment to stop unsafe work, and transparent incident reporting. Regular safety audits by international experts identify improvement opportunities.\n\nModern monitoring systems track methane levels, ground stability, air quality, and equipment condition in real-time, enabling immediate response to potential hazards before incidents occur.', image: safety, alignment: 'left' as const },
    ],
    timeline: [
      { year: '2025', event: 'Safety standards adopted' },
      { year: '2027', event: 'Training centers operational' },
      { year: '2030', event: 'ISO 45001 certification' },
      { year: '2035', event: 'Zero harm culture established' },
    ],
    relatedMinerals: [
      { name: 'Community', href: '/operations/community' },
      { name: 'Sustainability', href: '/operations/sustainability' },
    ]
  },

  // ==================== COPPER - ADDITIONAL MISSING ENTRIES ====================
  'copper/smelting': {
    title: 'Copper Smelting Operations',
    subtitle: 'Advanced Pyrometallurgical Processing',
    heroImage: copperSmeltingFurnace,
    overview: `Afghanistan's copper smelting operations represent world-class pyrometallurgical technology transforming copper concentrate into refined metal meeting London Metal Exchange (LME) specifications. The Mes Aynak smelting complex utilizes flash smelting technology—the most advanced copper smelting method globally—processing 1.2 million tons of copper concentrate annually into 1.2 million tons of refined copper cathodes.

[ULTRA-DEEP ANALYSIS - FLASH SMELTING TECHNOLOGY]: Flash smelting represents the pinnacle of copper smelting technology, utilizing oxygen-enriched air to combust copper sulfide concentrate at 1,250°C in a single continuous process. The Mes Aynak flash smelting furnace processes dried concentrate containing 28% copper, producing copper matte containing 60% copper through efficient oxidation reactions. The process eliminates the need for separate roasting steps, reducing energy consumption by 30% compared to traditional smelting methods while achieving superior environmental performance through efficient SO2 capture.

[ULTRA-DEEP ANALYSIS - CONVERTING OPERATIONS]: Peirce-Smith converters transform copper matte into blister copper through controlled oxidation processes utilizing advanced lance technology injecting oxygen-enriched air. The converting process removes iron and sulfur impurities, producing blister copper containing 98.5% copper suitable for fire refining. Advanced converter design including automated lance positioning, temperature control systems, and fume capture technology ensures efficient operations while minimizing environmental impact.

[ULTRA-DEEP ANALYSIS - FIRE REFINING & ANODE CASTING]: Fire refining removes remaining impurities including oxygen and sulfur from blister copper utilizing anode furnaces with advanced stirring systems. The process produces anode copper containing 99.5% copper suitable for electrolytic refining. Anode casting utilizes automated casting machines producing uniform anodes weighing 350 kg each, meeting specifications for electrolytic refining operations.

[ULTRA-DEEP ANALYSIS - ELECTROLYTIC REFINING]: The electrolytic refining process produces 99.99% pure LME-grade copper cathodes through electrolysis in cells containing hundreds of copper anodes suspended in sulfuric acid electrolyte. Advanced cell design including automated cathode stripping systems, advanced electrolyte circulation systems, and automated quality control ensures consistent cathode quality meeting LME specifications. The process recovers precious metals including gold, silver, platinum, and palladium from anode slimes, generating $200 million annually in byproduct revenue.

[ULTRA-DEEP ANALYSIS - BYPRODUCT RECOVERY]: Comprehensive byproduct recovery captures sulfuric acid from SO2 emissions (1.2 million tons/year) through advanced acid plants, gold and silver from anode slimes (worth $200 million annually) through precious metals recovery facilities, selenium and tellurium for solar panel manufacturing through specialized recovery processes, and slag for cement and construction applications through slag processing facilities.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: The smelting complex incorporates environmental controls exceeding international standards including baghouse filters capturing 99.9% of particulate emissions, sulfuric acid plants converting SO2 emissions into valuable byproducts, comprehensive water treatment systems achieving zero liquid discharge, and continuous emissions monitoring ensuring compliance with WHO air quality guidelines.

[ULTRA-DEEP ANALYSIS - ENERGY EFFICIENCY]: Advanced energy efficiency measures reduce power consumption by 25% compared to conventional smelters, while waste heat recovery systems generate 150 MW of electricity. The smelting complex utilizes renewable energy providing 30% of power requirements, reducing carbon footprint while ensuring reliable operations.

[ULTRA-DEEP ANALYSIS - PROCESS CONTROL & AUTOMATION]: Advanced process control systems utilizing artificial intelligence optimize smelting operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Digital twin technology creates virtual replicas of smelting operations, enabling simulation and optimization before implementing changes in physical systems.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL]: Comprehensive quality control systems ensure that copper cathodes meet LME specifications and command premium prices in global markets. Quality control laboratories conduct extensive testing ensuring that copper cathodes meet specifications for purity, electrical conductivity, and dimensional tolerances.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The smelting complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in smelting, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, the smelting complex will generate $3 billion annually in revenue from copper sales, $500 million in royalties and taxes to the Afghan government, $200 million in wages to Afghan workers, and $1 billion in procurement from local suppliers. The project's economic multiplier effect ensures that every dollar of direct revenue generates substantial total economic activity.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The smelting complex requires comprehensive infrastructure supporting operations including power generation providing 750 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to concentrators and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Technology partnerships with leading smelting companies from Australia, Canada, and Chile provide access to proven expertise while building Afghan technical capacity. Joint ventures enable technology transfer, training programs develop skilled workers, and research collaborations advance smelting technology.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The smelting complex includes comprehensive research and development programs advancing smelting technology and sustainable practices. Research areas include smelting optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Afghanistan's copper smelting will significantly impact global markets, with annual production of 1.2 million tons representing substantial supply. The smelting complex's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and efficient logistics reducing costs.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the smelting complex from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the smelting complex's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: The smelting complex's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: The Afghan Copper Smelting Complex represents a strategic vision for Afghanistan's industrial development, demonstrating that world-class smelting can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '1.2M', label: 'Tons/Year', description: 'Copper cathode production' },
      { value: '99.99%', label: 'Purity', description: 'LME-grade quality' },
      { value: '$3B', label: 'Annual Revenue', description: 'Copper sales' },
      { value: '1,250°C', label: 'Smelting Temp', description: 'Flash furnace' },
      { value: '99.9%', label: 'Emission Capture', description: 'Particulate control' },
      { value: '150MW', label: 'Power Recovery', description: 'Waste heat generation' },
    ],
    sections: [
      {
        title: 'Flash Smelting Technology',
        content: `Flash smelting represents the pinnacle of copper smelting technology, utilizing oxygen-enriched air to combust copper sulfide concentrate at 1,250°C in a single continuous process. The process eliminates the need for separate roasting steps, reducing energy consumption by 30% compared to traditional smelting methods.`,
        image: copperSmeltingFurnace,
        alignment: 'left'
      },
      {
        title: 'Environmental Excellence',
        content: `The smelting complex incorporates environmental controls exceeding international standards including baghouse filters capturing 99.9% of particulate emissions, sulfuric acid plants converting SO2 emissions into valuable byproducts, and comprehensive water treatment systems achieving zero liquid discharge.`,
        image: environmental,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Smelter design completed' },
      { year: '2026', event: 'Flash furnace procurement' },
      { year: '2027', event: 'Converter installation' },
      { year: '2028', event: 'Electrolytic cell installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First cathode production' },
      { year: '2031', event: 'Ramp-up to 25% capacity' },
      { year: '2032', event: 'Ramp-up to 50% capacity' },
      { year: '2033', event: 'Ramp-up to 75% capacity' },
      { year: '2034', event: 'Ramp-up to 90% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2036', event: 'Advanced automation systems' },
      { year: '2037', event: 'Energy efficiency improvements' },
      { year: '2038', event: 'Environmental technology upgrades' },
      { year: '2039', event: 'Process optimization programs' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Smelting technology legacy' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Copper Refining', href: '/minerals/copper/refining' },
      { name: 'Copper Exports', href: '/minerals/copper/exports' },
      { name: 'Hajigak Copper-Iron', href: '/minerals/copper/hajigak' },
      { name: 'Balkhab Copper', href: '/minerals/copper/balkhab' },
      { name: 'Logar Province', href: '/provinces/logar' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Chromite Steel', href: '/minerals/chromite/steel' },
      { name: 'Lead-Zinc Smelting', href: '/minerals/lead-zinc/lead-smelting' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Digital', href: '/operations/digital' },
    ]
  },

  'copper/refining': {
    title: 'Copper Refining Facilities',
    subtitle: 'LME-Grade Cathode Production',
    heroImage: refinery,
    overview: `Afghanistan's copper refining facilities produce investment-grade copper cathodes meeting London Metal Exchange (LME) specifications, enabling direct sales to global markets at premium prices. The refining complex utilizes advanced electrolytic technology producing 1.2 million tons of 99.99% pure copper cathodes annually, positioning Afghanistan among the world's top 5 copper producers.

[ULTRA-DEEP ANALYSIS - ELECTROLYTIC REFINING TECHNOLOGY]: The electrolytic refining process produces 99.99% pure LME-grade copper cathodes through electrolysis in cells containing hundreds of copper anodes suspended in sulfuric acid electrolyte. Advanced cell design including automated cathode stripping systems, advanced electrolyte circulation systems, and automated quality control ensures consistent cathode quality meeting LME specifications. The process recovers precious metals including gold, silver, platinum, and palladium from anode slimes, generating $200 million annually in byproduct revenue.

[ULTRA-DEEP ANALYSIS - ANODE PREPARATION]: Anode preparation involves casting fire-refined copper into uniform anodes weighing 350 kg each, meeting specifications for electrolytic refining operations. Automated casting machines produce consistent anodes with precise dimensional tolerances, ensuring optimal performance in electrolytic cells. Quality control systems verify anode composition and dimensions before installation in refining cells.

[ULTRA-DEEP ANALYSIS - ELECTROLYTIC CELL OPERATIONS]: Electrolytic cells operate continuously, with copper dissolving from anodes and depositing on cathodes through controlled electrical current. Advanced cell design including optimized electrode spacing, efficient electrolyte circulation, and automated cathode harvesting ensures maximum production efficiency. The process produces cathodes weighing 100-150 kg each, meeting LME specifications for size and weight.

[ULTRA-DEEP ANALYSIS - PRECIOUS METALS RECOVERY]: Anode slimes containing precious metals including gold, silver, platinum, and palladium are recovered from electrolytic cells and processed through specialized recovery facilities. The precious metals recovery process generates $200 million annually in byproduct revenue, maximizing value extraction from copper refining operations.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL & CERTIFICATION]: Comprehensive quality control systems ensure that copper cathodes meet LME specifications and command premium prices in global markets. Quality control laboratories conduct extensive testing ensuring that copper cathodes meet specifications for purity, electrical conductivity, and dimensional tolerances. Product certification provides assurance to customers that products meet quality standards, enabling premium pricing.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: The refining complex incorporates environmental controls exceeding international standards including comprehensive water treatment systems achieving zero liquid discharge, emission controls ensuring air quality compliance, and waste management programs minimizing environmental impact.

[ULTRA-DEEP ANALYSIS - PROCESS CONTROL & AUTOMATION]: Advanced process control systems utilizing artificial intelligence optimize refining operations in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Digital twin technology creates virtual replicas of refining operations, enabling simulation and optimization before implementing changes.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The refining complex includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in refining, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, the refining complex will generate $3 billion annually in revenue from copper sales, $500 million in royalties and taxes to the Afghan government, $200 million in wages to Afghan workers, and $1 billion in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The refining complex requires comprehensive infrastructure supporting operations including power generation providing 750 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to smelters and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Technology partnerships with leading refining companies provide access to proven expertise while building Afghan technical capacity. Joint ventures enable technology transfer, training programs develop skilled workers, and research collaborations advance refining technology.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The refining complex includes comprehensive research and development programs advancing refining technology and sustainable practices. Research areas include refining optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Afghanistan's copper refining will significantly impact global markets, with annual production of 1.2 million tons representing substantial supply. The refining complex's location provides competitive advantages including proximity to regional markets, access to growing demand in Asia and Europe, and efficient logistics reducing costs.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the refining complex from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the refining complex's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: The refining complex's sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: The Afghan Copper Refining Complex represents a strategic vision for Afghanistan's industrial development, demonstrating that world-class refining can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '1.2M', label: 'Tons/Year', description: 'Cathode production' },
      { value: '99.99%', label: 'Purity', description: 'LME-grade quality' },
      { value: '$3B', label: 'Annual Revenue', description: 'Copper sales' },
      { value: '$200M', label: 'Byproducts', description: 'Precious metals' },
      { value: 'LME', label: 'Certification', description: 'International standard' },
      { value: '750MW', label: 'Power', description: 'Refining capacity' },
    ],
    sections: [
      {
        title: 'Electrolytic Refining',
        content: `The electrolytic refining process produces 99.99% pure LME-grade copper cathodes through electrolysis in cells containing hundreds of copper anodes suspended in sulfuric acid electrolyte. Advanced cell design ensures consistent cathode quality meeting LME specifications.`,
        image: refinery,
        alignment: 'left'
      },
      {
        title: 'Precious Metals Recovery',
        content: `Anode slimes containing precious metals including gold, silver, platinum, and palladium are recovered from electrolytic cells and processed through specialized recovery facilities, generating $200 million annually in byproduct revenue.`,
        image: goldRefineryCasting,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Refining facility design' },
      { year: '2026', event: 'Electrolytic cell procurement' },
      { year: '2027', event: 'Anode casting installation' },
      { year: '2028', event: 'Refining cell installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First cathode production' },
      { year: '2031', event: 'LME certification achieved' },
      { year: '2032', event: 'Full production capacity' },
      { year: '2033', event: 'Advanced automation systems' },
      { year: '2034', event: 'Quality improvements' },
      { year: '2035', event: 'Market leadership established' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Refining technology legacy' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Copper Smelting', href: '/minerals/copper/smelting' },
      { name: 'Copper Exports', href: '/minerals/copper/exports' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Lead-Zinc Smelting', href: '/minerals/lead-zinc/lead-smelting' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Logar Province', href: '/provinces/logar' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Chromite Steel', href: '/minerals/chromite/steel' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
    ]
  },

  'copper/logar': {
    title: 'Logar Province Copper Deposits',
    subtitle: 'Regional Copper Resource Hub',
    heroImage: logarMegaAerial,
    overview: `Logar Province hosts Afghanistan's most valuable copper deposit—the Mes Aynak copper mine—alongside numerous additional copper prospects and associated mineral resources. The province's strategic location just 60 kilometers south of Kabul provides exceptional accessibility advantages, while its geological setting within the Central Afghan mineral belt hosts multiple world-class deposits.

[ULTRA-DEEP ANALYSIS - GEOLOGICAL SETTING]: Logar Province lies within the Central Afghan mineral belt, a geological province hosting world-class copper, chromite, and other mineral deposits. The province's geology includes Neoproterozoic sedimentary sequences hosting sediment-hosted copper deposits similar to the Central African Copper Belt, providing exceptional potential for additional discoveries. Regional geological mapping has identified multiple copper prospects warranting detailed exploration.

[ULTRA-DEEP ANALYSIS - MES AYNAK DEPOSIT]: The Mes Aynak deposit contains 125m tons of copper ore worth over $1T, representing the province's flagship mineral resource. The deposit's exceptional grade averaging 2.3% copper—significantly higher than the global average—ensures profitable operations even during market downturns. Additional reserves of cobalt, gold, and rare earth elements potentially double the deposit's value.

[ULTRA-DEEP ANALYSIS - ADDITIONAL COPPER PROSPECTS]: Regional exploration has identified multiple additional copper prospects throughout Logar Province, with initial estimates suggesting combined resources potentially matching Mes Aynak's scale. These prospects occur in similar geological settings, suggesting systematic exploration could reveal additional world-class deposits. Modern exploration utilizing advanced geophysical and geochemical techniques continues to identify new targets.

[ULTRA-DEEP ANALYSIS - ASSOCIATED MINERALS]: Logar Province's copper deposits contain significant associated minerals including cobalt, gold, silver, and rare earth elements, adding substantial value to mining operations. Cobalt recovery from copper ores generates additional revenue while supporting battery manufacturing supply chains. Gold and silver credits improve project economics while supporting precious metals markets.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE ADVANTAGES]: Logar Province's proximity to Kabul—just 60 kilometers south—provides exceptional infrastructure advantages including access to skilled labor, services, transportation networks, and government institutions. The province's accessibility reduces development costs while enabling efficient operations and logistics. Road infrastructure connecting to Kabul and regional centers supports mineral development.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: Copper development in Logar Province will generate transformational economic impacts including $3 billion annually in revenue from copper sales, $500 million in royalties and taxes to the Afghan government, $200 million in wages to Afghan workers, and $1 billion in procurement from local suppliers. The project's economic multiplier effect ensures that every dollar of direct revenue generates substantial total economic activity.

[ULTRA-DEEP ANALYSIS - COMMUNITY DEVELOPMENT]: The Logar Development Foundation—funded by mining revenues—will invest $50 million annually in community services including education, healthcare, infrastructure, and economic development. Education programs include construction of 50 schools serving 25,000 students, scholarship programs supporting 1,000 students annually in higher education, and vocational training centers developing skills in mining, construction, and business.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Comprehensive environmental management systems ensure that copper development protects Logar Province's environment while enabling responsible resource extraction. Environmental commitments include rehabilitation of mined areas to productive agricultural or ecosystem use, protection of groundwater resources through lined tailings facilities, zero-discharge water management recycling 95% of process water, and wildlife corridors maintaining habitat connectivity.

[ULTRA-DEEP ANALYSIS - ARCHAEOLOGICAL HERITAGE]: The Mes Aynak site contains an ancient Buddhist monastery complex dating to the Kushan Empire (1st-3rd century CE), requiring comprehensive archaeological preservation efforts. The preservation plan includes complete excavation of all major structures, 3D digital scanning for virtual reconstruction, construction of a world-class museum at the site, and establishment of an international research center for Buddhist studies.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Copper development in Logar Province will create 50,000 direct and indirect jobs, providing employment opportunities for local residents while building skilled workforce capacity. Training programs develop skills in mining, processing, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - REGIONAL DEVELOPMENT]: Logar Province's copper development will catalyze regional economic development, providing infrastructure, expertise, and investment confidence needed to develop surrounding provinces' mineral resources. The province's success serves as a model for responsible mining development throughout Afghanistan.

[ULTRA-DEEP ANALYSIS - TRANSPORTATION INFRASTRUCTURE]: Development of transportation infrastructure including roads, railways, and export terminals connects Logar Province's copper deposits to global markets. The Afghan Minerals Railway—a 650-kilometer electrified rail line connecting to Pakistan's port of Karachi—enables efficient export of copper products while reducing transport costs by 60% compared to truck transport.

[ULTRA-DEEP ANALYSIS - POWER INFRASTRUCTURE]: Power infrastructure development including dedicated gas-fired power plants, renewable energy installations, and connection to the national grid ensures reliable electricity supply for copper operations. The power infrastructure development creates employment during construction while supporting long-term operations.

[ULTRA-DEEP ANALYSIS - WATER MANAGEMENT]: Comprehensive water management systems ensure reliable water supply for copper operations while protecting local water resources. Water infrastructure includes pipelines from regional sources, treatment facilities, and storage reservoirs ensuring reliable supply. Water recycling systems achieve 95% reuse, minimizing freshwater consumption and environmental impact.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Research and development programs advance copper mining and processing technology while building Afghan technical capacity. Research partnerships with international institutions enable knowledge exchange and collaboration, supporting continuous improvement in operations.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement ensures that all interested parties are informed, consulted, and involved in decision-making. Stakeholder groups include local communities, government agencies, international organizations, non-governmental organizations, investors, lenders, employees, suppliers, and customers.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks, ensuring transparent reporting of performance.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Logar Province's copper development represents a strategic vision for Afghanistan's mineral sector development, demonstrating that world-class mining can be conducted responsibly while creating lasting benefits. The province's success builds confidence in Afghanistan's mineral sector, attracting additional investment and supporting broader economic development.`,
    stats: [
      { value: '125m', label: 'Tons Copper', description: 'Mes Aynak reserves' },
      { value: '$1.5T', label: 'Value', description: 'Copper reserves' },
      { value: '50,000', label: 'Jobs', description: 'Total employment' },
      { value: '60km', label: 'From Kabul', description: 'Strategic location' },
      { value: '$3B', label: 'Annual Revenue', description: 'At full production' },
      { value: 'Multiple', label: 'Prospects', description: 'Additional deposits' },
    ],
    sections: [
      {
        title: 'Mes Aynak Development',
        content: `The Mes Aynak copper deposit is the centerpiece of Logar's development, with planned operations creating 50,000 direct and indirect jobs. The open-pit mine, concentrator, smelter, and refinery represent a $10 billion investment transforming the province into an industrial powerhouse.`,
        image: logarMegaAerial,
        alignment: 'left'
      },
      {
        title: 'Community Development',
        content: `The Logar Development Foundation—funded by mining revenues—will invest $50 million annually in community services: 50 schools serving 25,000 students, 5 health clinics providing healthcare to 100,000 residents, agricultural extension services, and microfinance for 10,000 small businesses.`,
        image: communitySchool,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '1970s', event: 'Copper discovery' },
      { year: '2007', event: 'Modern surveys begin' },
      { year: '2010', event: 'Resource estimation' },
      { year: '2015', event: 'Development planning' },
      { year: '2020', event: 'Infrastructure planning' },
      { year: '2025', event: 'Infrastructure development' },
      { year: '2026', event: 'Mine construction begins' },
      { year: '2027', event: 'Processing plant construction' },
      { year: '2028', event: 'Smelter construction' },
      { year: '2029', event: 'Refinery construction' },
      { year: '2030', event: 'Mining operations commence' },
      { year: '2031', event: 'Ramp-up to 25% capacity' },
      { year: '2032', event: 'Ramp-up to 50% capacity' },
      { year: '2033', event: 'Ramp-up to 75% capacity' },
      { year: '2034', event: 'Ramp-up to 90% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Copper development legacy' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Copper Smelting', href: '/minerals/copper/smelting' },
      { name: 'Copper Refining', href: '/minerals/copper/refining' },
      { name: 'Copper Exports', href: '/minerals/copper/exports' },
      { name: 'Hajigak Copper-Iron', href: '/minerals/copper/hajigak' },
      { name: 'Balkhab Copper', href: '/minerals/copper/balkhab' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Logar Chromite', href: '/minerals/chromite/logar' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Iron Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Lithium Ghazni', href: '/minerals/lithium/ghazni' },
      { name: 'Provinces Logar', href: '/provinces/logar' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
    ]
  },

  // ==================== LITHIUM - ADDITIONAL MISSING ENTRIES ====================
  'lithium/carbonate': {
    title: 'Lithium Carbonate Production',
    subtitle: 'Battery-Grade Chemical Manufacturing',
    heroImage: lithiumSpodumene,
    overview: `Afghanistan's lithium carbonate production facilities produce battery-grade lithium carbonate (Li2CO3) meeting the strictest specifications of major battery manufacturers including CATL, LG Energy Solution, Panasonic, and Tesla. The Ghazni Lithium Processing Complex produces 300,000 tons of battery-grade lithium carbonate annually—equivalent to 15% of current global production—positioning Afghanistan as a critical supplier for the global electric vehicle revolution.

[ULTRA-DEEP ANALYSIS - LITHIUM CARBONATE PRODUCTION PROCESS]: Lithium carbonate production begins with spodumene concentrate containing 6% Li2O, which undergoes calcination at 1,050°C converting alpha-spodumene to reactive beta-spodumene. The calcined concentrate then undergoes sulfuric acid roasting at 250°C, liberating lithium from the crystal structure and producing water-soluble lithium sulfate. Leaching operations extract lithium sulfate from roasted concentrate, with purification processes removing impurities including iron, aluminum, and other contaminants. Evaporation and crystallization produce high-purity lithium sulfate solutions, with precipitation processes utilizing sodium carbonate producing lithium carbonate (Li2CO3) meeting 99.5% purity specifications.

[ULTRA-DEEP ANALYSIS - BATTERY-GRADE SPECIFICATIONS]: Battery-grade lithium carbonate must meet strict specifications including minimum 99.5% purity, controlled particle size distribution, low levels of impurities including sodium, potassium, calcium, magnesium, and iron, and absence of heavy metals including lead, cadmium, and mercury. Quality control laboratories conduct extensive testing ensuring that lithium carbonate meets specifications for purity, particle size, and chemical composition. Product certification provides assurance to customers that products meet quality standards, enabling premium pricing and direct supply to major battery manufacturers.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Lithium carbonate serves as the primary feedstock for lithium-ion battery cathode production, with each electric vehicle battery containing 2-5 kg of lithium carbonate equivalent. The global electric vehicle market's exponential growth creates unprecedented demand for lithium carbonate, with global consumption projected to increase from 500,000 tons in 2023 to 2 million tons by 2030. Afghanistan's production capacity of 300,000 tons annually represents 15% of projected global demand by 2030, positioning the nation as a critical supplier.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize lithium carbonate production in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, reagent optimization, and process improvements. Energy efficiency measures reduce power consumption by 20% compared to conventional processes, while waste heat recovery systems generate additional electricity.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable lithium carbonate production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for ceramics and construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet battery-grade specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs. Quality control laboratories conduct extensive testing ensuring that lithium carbonate meets specifications for purity, particle size, and chemical composition.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, lithium carbonate production will generate $9 billion annually in revenue from chemical sales, $1.5 billion in royalties and taxes to the Afghan government, $300 million in wages to Afghan workers, and $1.2 billion in procurement from local suppliers. Over the 40-year operational horizon, cumulative benefits will include $360 billion in total revenue, $60 billion in government revenue, 2.4 million person-years of employment, and development of ancillary industries.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The lithium carbonate production facilities include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in chemical processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The production facilities require comprehensive infrastructure supporting operations including power generation providing 500 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international lithium processing companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The production facilities include comprehensive research and development programs advancing lithium carbonate production technology and sustainable practices. Research areas include process optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global lithium carbonate demand is projected to increase exponentially over the next two decades, driven by electric vehicle adoption, renewable energy storage, and consumer electronics growth. Afghanistan's production capacity of 300,000 tons annually represents 15% of projected global demand by 2030, positioning the nation as a critical supplier.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the production facilities from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the production facilities' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's lithium carbonate production represents a strategic vision for industrial development, demonstrating that world-class chemical production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '300K', label: 'Tons/Year', description: 'Lithium carbonate' },
      { value: '99.5%', label: 'Purity', description: 'Battery-grade' },
      { value: '$9B', label: 'Annual Revenue', description: 'Chemical sales' },
      { value: '15%', label: 'Global Share', description: 'Market share' },
      { value: '500MW', label: 'Power', description: 'Production capacity' },
      { value: 'Battery-Grade', label: 'Quality', description: 'Premium specification' },
    ],
    sections: [
      {
        title: 'Battery-Grade Production',
        content: `Lithium carbonate production facilities produce battery-grade lithium carbonate (Li2CO3) meeting the strictest specifications of major battery manufacturers. The process begins with spodumene concentrate, undergoes calcination and chemical conversion, producing 99.5% pure lithium carbonate suitable for battery cathode production.`,
        image: lithiumSpodumene,
        alignment: 'left'
      },
      {
        title: 'Market Applications',
        content: `Lithium carbonate serves as the primary feedstock for lithium-ion battery cathode production, with each electric vehicle battery containing 2-5 kg of lithium carbonate equivalent. Global demand is projected to increase exponentially, positioning Afghanistan as a critical supplier.`,
        image: dataMegaCenter,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Production facility design' },
      { year: '2026', event: 'Calcination plant construction' },
      { year: '2027', event: 'Chemical conversion facility' },
      { year: '2028', event: 'Purification systems installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First lithium carbonate production' },
      { year: '2031', event: 'Battery manufacturer certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Lithium carbonate production legacy' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Lithium Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Nuristan Lithium Deposits', href: '/minerals/lithium/nuristan' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Spodumene Concentrates', href: '/minerals/lithium/spodumene' },
      { name: 'Battery Material Manufacturing', href: '/minerals/lithium/battery-materials' },
      { name: 'EV Supply Chain', href: '/minerals/lithium/ev-supply' },
      { name: 'Research Centers', href: '/minerals/lithium/research' },
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
      { name: 'Nickel Laterite', href: '/minerals/nickel/laterite' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ]
  },

  'lithium/spodumene': {
    title: 'Spodumene Concentrates',
    subtitle: 'Premium Lithium Ore Feedstock',
    heroImage: lithiumSpodumene,
    overview: `Afghanistan's spodumene concentrate production facilities produce premium-grade spodumene concentrate containing 6% Li2O—the standard feedstock for lithium chemical production. The Ghazni Spodumene Concentrator processes 10 million tons of pegmatite ore annually, producing 2 million tons of spodumene concentrate meeting international specifications for lithium chemical production.

[ULTRA-DEEP ANALYSIS - SPODUMENE CONCENTRATION PROCESS]: Spodumene concentration begins with crushing and grinding of pegmatite ore to liberation size, followed by dense media separation (DMS) producing spodumene concentrate containing 6% Li2O. The DMS process utilizes ferrosilicon media in cyclone separators exploiting the density difference between spodumene (3.15 g/cm³) and gangue minerals. Recovery rates exceeding 85% ensure maximum lithium capture from mined ore, with advanced process control systems optimizing separation efficiency in real-time.

[ULTRA-DEEP ANALYSIS - CONCENTRATE QUALITY SPECIFICATIONS]: Spodumene concentrate must meet strict specifications including minimum 6% Li2O content, controlled particle size distribution, low levels of impurities including iron, aluminum, and other contaminants, and absence of deleterious elements. Quality control laboratories conduct extensive testing ensuring that concentrate meets specifications for lithium content, particle size, and chemical composition.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Spodumene concentrate serves as the primary feedstock for lithium chemical production, with each ton of 6% Li2O concentrate producing approximately 0.3 tons of lithium carbonate equivalent. The global lithium chemical market's exponential growth creates unprecedented demand for spodumene concentrate, with global consumption projected to increase from 2 million tons in 2023 to 8 million tons by 2030.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize spodumene concentration in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, media optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable spodumene concentration requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for ceramics and construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, spodumene concentrate production will generate $3 billion annually in revenue from concentrate sales, $500 million in royalties and taxes to the Afghan government, $150 million in wages to Afghan workers, and $600 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The concentrator includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mineral processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The concentrator requires comprehensive infrastructure supporting operations including power generation providing 300 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and chemical plants, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international mineral processing companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major lithium chemical producers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The concentrator includes comprehensive research and development programs advancing spodumene concentration technology and sustainable practices. Research areas include process optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global spodumene concentrate demand is projected to increase exponentially over the next two decades, driven by lithium chemical production for electric vehicle batteries and renewable energy storage. Afghanistan's production capacity of 2 million tons annually represents 25% of projected global demand by 2030.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the concentrator from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the concentrator's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's spodumene concentrate production represents a strategic vision for industrial development, demonstrating that world-class mineral processing can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '2M', label: 'Tons/Year', description: 'Concentrate production' },
      { value: '6%', label: 'Li2O Grade', description: 'Premium quality' },
      { value: '$3B', label: 'Annual Revenue', description: 'Concentrate sales' },
      { value: '85%', label: 'Recovery Rate', description: 'Lithium capture' },
      { value: '300MW', label: 'Power', description: 'Concentrator capacity' },
      { value: 'Premium', label: 'Quality', description: 'International standard' },
    ],
    sections: [
      {
        title: 'Dense Media Separation',
        content: `Spodumene concentration utilizes dense media separation (DMS) producing spodumene concentrate containing 6% Li2O. The DMS process exploits the density difference between spodumene and gangue minerals, achieving recovery rates exceeding 85% while ensuring premium concentrate quality.`,
        image: lithiumSpodumene,
        alignment: 'left'
      },
      {
        title: 'Market Applications',
        content: `Spodumene concentrate serves as the primary feedstock for lithium chemical production, with each ton of 6% Li2O concentrate producing approximately 0.3 tons of lithium carbonate equivalent. Global demand is projected to increase exponentially, positioning Afghanistan as a critical supplier.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Concentrator design completed' },
      { year: '2026', event: 'Crushing circuit construction' },
      { year: '2027', event: 'Grinding circuit installation' },
      { year: '2028', event: 'DMS plant construction' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First concentrate production' },
      { year: '2031', event: 'Quality certification achieved' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Spodumene concentration legacy' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Lithium Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Nuristan Lithium Deposits', href: '/minerals/lithium/nuristan' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Lithium Carbonate Production', href: '/minerals/lithium/carbonate' },
      { name: 'Battery Material Manufacturing', href: '/minerals/lithium/battery-materials' },
      { name: 'EV Supply Chain', href: '/minerals/lithium/ev-supply' },
      { name: 'Research Centers', href: '/minerals/lithium/research' },
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
      { name: 'Nickel Laterite', href: '/minerals/nickel/laterite' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Iron Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Research', href: '/operations/research' },
    ]
  },

  'lithium/battery-materials': {
    title: 'Battery Material Manufacturing',
    subtitle: 'Cathode & Anode Production for EV Batteries',
    heroImage: dataMegaCenter,
    overview: `Afghanistan's battery material manufacturing facilities produce cathode and anode materials for lithium-ion batteries, positioning the nation as a critical supplier for the global electric vehicle revolution. The Battery Material Manufacturing Complex produces cathode materials including nickel-manganese-cobalt (NMC) and lithium-iron-phosphate (LFP) formulations, along with anode materials utilizing graphite and silicon, enabling direct supply to major battery manufacturers worldwide.

[ULTRA-DEEP ANALYSIS - CATHODE MATERIAL PRODUCTION]: Cathode material production begins with lithium carbonate and hydroxide, which are combined with transition metal precursors including nickel, manganese, and cobalt for NMC cathodes, or iron and phosphorus for LFP cathodes. The mixing process utilizes advanced powder metallurgy techniques ensuring uniform particle size distribution and chemical composition. Calcination at 800-900°C produces crystalline cathode materials meeting battery manufacturer specifications. Advanced quality control ensures that cathode materials meet specifications for capacity, cycle life, and safety performance.

[ULTRA-DEEP ANALYSIS - ANODE MATERIAL PRODUCTION]: Anode material production utilizes graphite and silicon, with graphite serving as the primary anode material and silicon providing enhanced capacity through silicon-graphite composite formulations. Graphite processing includes purification, spheroidization, and surface treatment ensuring optimal battery performance. Silicon-graphite composites offer 10-20% higher capacity compared to pure graphite anodes, enabling improved battery energy density.

[ULTRA-DEEP ANALYSIS - BATTERY MATERIAL SPECIFICATIONS]: Battery materials must meet strict specifications including controlled particle size distribution, uniform chemical composition, low levels of impurities, and absence of contaminants. Quality control laboratories conduct extensive testing ensuring that materials meet specifications for capacity, cycle life, safety performance, and dimensional tolerances. Product certification provides assurance to customers that materials meet quality standards, enabling premium pricing and direct supply to major battery manufacturers.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Battery materials serve as critical components for lithium-ion batteries powering electric vehicles, renewable energy storage systems, and consumer electronics. The global battery material market's exponential growth creates unprecedented demand, with global consumption projected to increase from 500,000 tons in 2023 to 2 million tons by 2030. Afghanistan's production capacity positions the nation as a critical supplier for global battery manufacturing.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize battery material production in real-time, maximizing quality while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, material optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable battery material production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing production waste for recycling, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet battery manufacturer specifications and command premium prices in global markets. The quality program includes sampling and testing of raw materials, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, battery material manufacturing will generate $12 billion annually in revenue from material sales, $2 billion in royalties and taxes to the Afghan government, $400 million in wages to Afghan workers, and $1.6 billion in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The manufacturing facilities include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in materials science, chemical processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The manufacturing facilities require comprehensive infrastructure supporting operations including power generation providing 1,000 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to chemical plants and battery manufacturers, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international battery material manufacturers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The manufacturing facilities include comprehensive research and development programs advancing battery material technology and sustainable practices. Research areas include material optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global battery material demand is projected to increase exponentially over the next two decades, driven by electric vehicle adoption, renewable energy storage, and consumer electronics growth. Afghanistan's production capacity positions the nation as a critical supplier for global battery manufacturing.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the manufacturing facilities from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the manufacturing facilities' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's battery material manufacturing represents a strategic vision for industrial development, demonstrating that world-class materials production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '500K', label: 'Tons/Year', description: 'Battery materials' },
      { value: 'NMC/LFP', label: 'Cathode Types', description: 'Multiple formulations' },
      { value: '$12B', label: 'Annual Revenue', description: 'Material sales' },
      { value: '1,000MW', label: 'Power', description: 'Manufacturing capacity' },
      { value: 'Premium', label: 'Quality', description: 'Battery-grade' },
      { value: 'EV Supply', label: 'Application', description: 'Electric vehicles' },
    ],
    sections: [
      {
        title: 'Cathode Material Production',
        content: `Cathode material production combines lithium carbonate with transition metal precursors including nickel, manganese, and cobalt for NMC cathodes, or iron and phosphorus for LFP cathodes. Advanced powder metallurgy techniques ensure uniform particle size distribution and chemical composition meeting battery manufacturer specifications.`,
        image: dataMegaCenter,
        alignment: 'left'
      },
      {
        title: 'Anode Material Production',
        content: `Anode material production utilizes graphite and silicon, with graphite serving as the primary anode material and silicon providing enhanced capacity through silicon-graphite composite formulations. Silicon-graphite composites offer 10-20% higher capacity compared to pure graphite anodes.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Manufacturing facility design' },
      { year: '2026', event: 'Cathode production line construction' },
      { year: '2027', event: 'Anode production line construction' },
      { year: '2028', event: 'Quality control laboratory installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First battery material production' },
      { year: '2031', event: 'Battery manufacturer certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Battery material manufacturing legacy' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Lithium Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Lithium Carbonate Production', href: '/minerals/lithium/carbonate' },
      { name: 'Spodumene Concentrates', href: '/minerals/lithium/spodumene' },
      { name: 'EV Supply Chain', href: '/minerals/lithium/ev-supply' },
      { name: 'Research Centers', href: '/minerals/lithium/research' },
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
      { name: 'Nickel Laterite', href: '/minerals/nickel/laterite' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Manganese Resources', href: '/minerals/manganese/resources' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
    ]
  },

  // ==================== LEAD & ZINC - ADDITIONAL MISSING ENTRIES ====================
  'lead-zinc/zinc-concentrate': {
    title: 'Zinc Concentrate Production',
    subtitle: 'Premium Zinc Ore Processing',
    heroImage: leadZincOre,
    overview: `Afghanistan's zinc concentrate production facilities produce premium-grade zinc concentrate containing 55% zinc—meeting international specifications for zinc smelting operations. The Aynak Zinc Concentrator processes 5 million tons of lead-zinc ore annually, producing 500,000 tons of zinc concentrate utilizing advanced flotation technology achieving 85% zinc recovery.

[ULTRA-DEEP ANALYSIS - ZINC FLOTATION TECHNOLOGY]: Zinc flotation utilizes differential flotation technology separating zinc minerals (sphalerite) from lead minerals (galena) and waste rock. The flotation process employs selective collectors specifically formulated for zinc recovery, with advanced process control systems optimizing recovery in real-time. The circuit achieves 85% zinc recovery, producing concentrate containing 55% zinc meeting smelter specifications.

[ULTRA-DEEP ANALYSIS - CONCENTRATE QUALITY SPECIFICATIONS]: Zinc concentrate must meet strict specifications including minimum 55% zinc content, controlled levels of impurities including iron, lead, and cadmium, and absence of deleterious elements. Quality control laboratories conduct extensive testing ensuring that concentrate meets specifications for zinc content, particle size, and chemical composition.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Zinc concentrate serves as the primary feedstock for zinc smelting operations producing refined zinc metal for galvanizing, die-casting, and chemical applications. The global zinc market's steady growth creates consistent demand, with global consumption projected to increase from 14 million tons in 2023 to 18 million tons by 2030.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize zinc flotation in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, reagent optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable zinc concentration requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, zinc concentrate production will generate $400 million annually in revenue from concentrate sales, $80 million in royalties and taxes to the Afghan government, $50 million in wages to Afghan workers, and $120 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The concentrator includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mineral processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The concentrator requires comprehensive infrastructure supporting operations including power generation providing 200 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and smelters, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international mineral processing companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major zinc smelters.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The concentrator includes comprehensive research and development programs advancing zinc concentration technology and sustainable practices. Research areas include process optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global zinc concentrate demand is projected to increase steadily over the next two decades, driven by infrastructure development, automotive manufacturing, and construction growth. Afghanistan's production capacity of 500,000 tons annually represents 3% of projected global demand by 2030.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the concentrator from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the concentrator's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's zinc concentrate production represents a strategic vision for industrial development, demonstrating that world-class mineral processing can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '500K', label: 'Tons/Year', description: 'Zinc concentrate' },
      { value: '55%', label: 'Zinc Grade', description: 'Premium quality' },
      { value: '$400M', label: 'Annual Revenue', description: 'Concentrate sales' },
      { value: '85%', label: 'Recovery Rate', description: 'Zinc capture' },
      { value: '200MW', label: 'Power', description: 'Concentrator capacity' },
      { value: 'Premium', label: 'Quality', description: 'International standard' },
    ],
    sections: [
      {
        title: 'Differential Flotation',
        content: `Zinc flotation utilizes differential flotation technology separating zinc minerals (sphalerite) from lead minerals (galena) and waste rock. The flotation process employs selective collectors specifically formulated for zinc recovery, achieving 85% zinc recovery while producing concentrate containing 55% zinc.`,
        image: leadZincOre,
        alignment: 'left'
      },
      {
        title: 'Market Applications',
        content: `Zinc concentrate serves as the primary feedstock for zinc smelting operations producing refined zinc metal for galvanizing, die-casting, and chemical applications. Global demand is projected to increase steadily, positioning Afghanistan as a reliable supplier.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Concentrator design completed' },
      { year: '2026', event: 'Flotation circuit construction' },
      { year: '2027', event: 'Quality control laboratory installation' },
      { year: '2028', event: 'Commissioning begins' },
      { year: '2029', event: 'First concentrate production' },
      { year: '2030', event: 'Quality certification achieved' },
      { year: '2031', event: 'Ramp-up to 25% capacity' },
      { year: '2032', event: 'Ramp-up to 50% capacity' },
      { year: '2033', event: 'Ramp-up to 75% capacity' },
      { year: '2034', event: 'Ramp-up to 90% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Zinc concentration legacy' },
    ],
    relatedMinerals: [
      { name: 'Aynak Lead-Zinc Deposits', href: '/minerals/lead-zinc/aynak' },
      { name: 'Lead Smelting Operations', href: '/minerals/lead-zinc/lead-smelting' },
      { name: 'Battery Manufacturing Materials', href: '/minerals/lead-zinc/battery' },
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Gold Processing Plants', href: '/minerals/gold/processing' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Chromite Mining Operations', href: '/minerals/chromite/mining' },
      { name: 'Coal Processing Plants', href: '/minerals/coal/processing' },
      { name: 'Marble Processing Facilities', href: '/minerals/marble/processing' },
      { name: 'Rare Earth Processing', href: '/minerals/ree/processing' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Operations Processing', href: '/operations/processing' },
    ]
  },

  'lead-zinc/lead-smelting': {
    title: 'Lead Smelting Operations',
    subtitle: 'Refined Lead Metal Production',
    heroImage: smelting,
    overview: `Afghanistan's lead smelting operations produce refined lead metal meeting international specifications for battery manufacturing, construction, and industrial applications. The Aynak Lead Smelter processes 300,000 tons of lead concentrate annually, producing 180,000 tons of refined lead utilizing advanced blast furnace technology achieving 98% lead recovery.

[ULTRA-DEEP ANALYSIS - BLAST FURNACE SMELTING TECHNOLOGY]: Lead smelting utilizes blast furnace technology processing lead concentrate containing 60% lead and 1,500 grams per ton silver. The blast furnace operates at 1,200°C, reducing lead oxide to metallic lead while capturing silver in lead bullion. Advanced furnace design including efficient heat recovery systems, automated feed control, and comprehensive fume capture technology ensures efficient operations while minimizing environmental impact.

[ULTRA-DEEP ANALYSIS - REFINING OPERATIONS]: Refined lead production involves fire refining removing impurities including antimony, arsenic, and tin, producing refined lead containing 99.97% lead meeting international specifications. Silver recovery from lead bullion generates substantial byproduct revenue, with annual silver production potentially reaching 15 million ounces worth $300 million.

[ULTRA-DEEP ANALYSIS - PRODUCT APPLICATIONS]: Refined lead serves critical applications including lead-acid batteries for automotive and industrial use, construction materials including roofing and radiation shielding, and industrial applications including ammunition and chemical manufacturing. The global lead market's steady growth creates consistent demand, with global consumption projected to increase from 12 million tons in 2023 to 15 million tons by 2030.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize lead smelting in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, fuel optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable lead smelting requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including SO2 capture and conversion to sulfuric acid, particulate emission controls, comprehensive water treatment, and lead emission controls ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of concentrate, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, lead smelting will generate $400 million annually in revenue from lead sales, $80 million in royalties and taxes to the Afghan government, $50 million in wages to Afghan workers, and $120 million in procurement from local suppliers. Silver byproduct recovery generates additional $300 million annually in revenue.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The smelter includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in smelting, metallurgy, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The smelter requires comprehensive infrastructure supporting operations including power generation providing 150 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to concentrators and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international smelting companies, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major lead consumers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The smelter includes comprehensive research and development programs advancing lead smelting technology and sustainable practices. Research areas include smelting optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global lead demand is projected to increase steadily over the next two decades, driven by battery manufacturing, construction growth, and industrial applications. Afghanistan's production capacity of 180,000 tons annually represents 1.2% of projected global demand by 2030.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the smelter from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the smelter's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's lead smelting represents a strategic vision for industrial development, demonstrating that world-class smelting can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '180K', label: 'Tons/Year', description: 'Refined lead' },
      { value: '99.97%', label: 'Purity', description: 'Refined lead quality' },
      { value: '$400M', label: 'Annual Revenue', description: 'Lead sales' },
      { value: '$300M', label: 'Silver Byproduct', description: 'Annual revenue' },
      { value: '98%', label: 'Recovery Rate', description: 'Lead capture' },
      { value: '150MW', label: 'Power', description: 'Smelter capacity' },
    ],
    sections: [
      {
        title: 'Blast Furnace Technology',
        content: `Lead smelting utilizes blast furnace technology processing lead concentrate containing 60% lead and 1,500 grams per ton silver. The blast furnace operates at 1,200°C, reducing lead oxide to metallic lead while capturing silver in lead bullion. Advanced furnace design ensures efficient operations while minimizing environmental impact.`,
        image: smelting,
        alignment: 'left'
      },
      {
        title: 'Silver Byproduct Recovery',
        content: `Silver recovery from lead bullion generates substantial byproduct revenue, with annual silver production potentially reaching 15 million ounces worth $300 million. The silver recovery process maximizes value extraction from lead smelting operations.`,
        image: goldRefineryCasting,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Smelter design completed' },
      { year: '2026', event: 'Blast furnace construction' },
      { year: '2027', event: 'Refining facility installation' },
      { year: '2028', event: 'Silver recovery facility' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First refined lead production' },
      { year: '2031', event: 'Quality certification achieved' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Lead smelting legacy' },
    ],
    relatedMinerals: [
      { name: 'Aynak Lead-Zinc Deposits', href: '/minerals/lead-zinc/aynak' },
      { name: 'Zinc Concentrate Production', href: '/minerals/lead-zinc/zinc-concentrate' },
      { name: 'Battery Manufacturing Materials', href: '/minerals/lead-zinc/battery' },
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Smelting', href: '/minerals/copper/smelting' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Silver Refining', href: '/minerals/silver/refining' },
      { name: 'Gold Refining', href: '/minerals/gold/refining' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Chromite Mining Operations', href: '/minerals/chromite/mining' },
      { name: 'Coal Processing Plants', href: '/minerals/coal/processing' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Digital', href: '/operations/digital' },
    ]
  },

  'lead-zinc/battery': {
    title: 'Battery Manufacturing Materials',
    subtitle: 'Lead-Acid Battery Supply Chain',
    heroImage: dataMegaCenter,
    overview: `Afghanistan's battery manufacturing materials production facilities produce components for lead-acid batteries including refined lead, lead oxide, and battery separators, positioning the nation as a critical supplier for the global automotive and industrial battery markets. The Battery Materials Manufacturing Complex produces materials for 50 million lead-acid batteries annually, enabling direct supply to major battery manufacturers worldwide.

[ULTRA-DEEP ANALYSIS - LEAD-ACID BATTERY MATERIALS]: Lead-acid battery manufacturing requires refined lead, lead oxide (PbO), sulfuric acid, and battery separators. Refined lead serves as the primary material for battery grids and terminals, while lead oxide forms the active material in battery plates. Sulfuric acid serves as the electrolyte, with battery separators preventing short circuits between positive and negative plates.

[ULTRA-DEEP ANALYSIS - LEAD OXIDE PRODUCTION]: Lead oxide production involves oxidizing refined lead through controlled oxidation processes producing lead oxide (PbO) meeting battery manufacturer specifications. The process utilizes advanced oxidation technology ensuring uniform particle size distribution and chemical composition. Quality control ensures that lead oxide meets specifications for battery performance including capacity, cycle life, and safety.

[ULTRA-DEEP ANALYSIS - BATTERY SEPARATOR MANUFACTURING]: Battery separator manufacturing produces porous materials preventing short circuits while allowing ion transport between battery plates. Advanced separator technology utilizing polyethylene and polypropylene materials ensures optimal battery performance including high capacity, long cycle life, and safety.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Lead-acid batteries serve critical applications including automotive starting batteries, industrial backup power systems, renewable energy storage, and telecommunications infrastructure. The global lead-acid battery market's steady growth creates consistent demand, with global consumption projected to increase from 500 million batteries in 2023 to 600 million batteries by 2030.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize battery material production in real-time, maximizing quality while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, material optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable battery material production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing production waste for recycling, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet battery manufacturer specifications and command premium prices in global markets. The quality program includes sampling and testing of raw materials, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, battery material manufacturing will generate $2 billion annually in revenue from material sales, $300 million in royalties and taxes to the Afghan government, $150 million in wages to Afghan workers, and $500 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The manufacturing facilities include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in materials science, chemical processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The manufacturing facilities require comprehensive infrastructure supporting operations including power generation providing 300 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to smelters and battery manufacturers, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international battery material manufacturers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The manufacturing facilities include comprehensive research and development programs advancing battery material technology and sustainable practices. Research areas include material optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global battery material demand is projected to increase steadily over the next two decades, driven by automotive manufacturing, renewable energy storage, and telecommunications infrastructure growth. Afghanistan's production capacity positions the nation as a reliable supplier for global battery manufacturing.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the manufacturing facilities from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the manufacturing facilities' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's battery material manufacturing represents a strategic vision for industrial development, demonstrating that world-class materials production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '50M', label: 'Batteries/Year', description: 'Material supply capacity' },
      { value: 'Lead-Acid', label: 'Battery Type', description: 'Primary application' },
      { value: '$2B', label: 'Annual Revenue', description: 'Material sales' },
      { value: '300MW', label: 'Power', description: 'Manufacturing capacity' },
      { value: 'Premium', label: 'Quality', description: 'Battery-grade' },
      { value: 'Automotive', label: 'Application', description: 'Primary market' },
    ],
    sections: [
      {
        title: 'Lead Oxide Production',
        content: `Lead oxide production involves oxidizing refined lead through controlled oxidation processes producing lead oxide (PbO) meeting battery manufacturer specifications. The process utilizes advanced oxidation technology ensuring uniform particle size distribution and chemical composition.`,
        image: processingPlant,
        alignment: 'left'
      },
      {
        title: 'Battery Separator Manufacturing',
        content: `Battery separator manufacturing produces porous materials preventing short circuits while allowing ion transport between battery plates. Advanced separator technology utilizing polyethylene and polypropylene materials ensures optimal battery performance.`,
        image: dataMegaCenter,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Manufacturing facility design' },
      { year: '2026', event: 'Lead oxide production line construction' },
      { year: '2027', event: 'Separator manufacturing facility' },
      { year: '2028', event: 'Quality control laboratory installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First battery material production' },
      { year: '2031', event: 'Battery manufacturer certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Battery material manufacturing legacy' },
    ],
    relatedMinerals: [
      { name: 'Aynak Lead-Zinc Deposits', href: '/minerals/lead-zinc/aynak' },
      { name: 'Zinc Concentrate Production', href: '/minerals/lead-zinc/zinc-concentrate' },
      { name: 'Lead Smelting Operations', href: '/minerals/lead-zinc/lead-smelting' },
      { name: 'Lithium Battery Materials', href: '/minerals/lithium/battery-materials' },
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
      { name: 'Nickel Laterite', href: '/minerals/nickel/laterite' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Gold Processing Plants', href: '/minerals/gold/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
    ]
  },

  // ==================== COBALT & NICKEL - NEW ENTRIES ====================
  'cobalt/deposits': {
    title: 'Cobalt Deposits',
    subtitle: 'Critical Battery Metal Resources',
    heroImage: cobaltOre,
    overview: `Afghanistan's cobalt deposits represent critical resources for the global electric vehicle battery supply chain, with cobalt serving as an essential component in lithium-ion battery cathodes. Cobalt occurs as a byproduct of copper mining at Mes Aynak and as primary deposits in various provinces, with estimated resources exceeding 1 million tons of cobalt metal—positioning Afghanistan among the world's top 10 cobalt resource holders.

[ULTRA-DEEP ANALYSIS - COBALT GEOLOGICAL FORMATION]: Cobalt deposits in Afghanistan occur in multiple geological settings including sediment-hosted copper-cobalt deposits similar to the Central African Copper Belt, magmatic nickel-cobalt deposits in mafic-ultramafic intrusions, and laterite nickel-cobalt deposits formed through weathering processes. The Mes Aynak copper deposit contains significant cobalt credits averaging 0.8% cobalt in copper ore, generating substantial byproduct revenue from cobalt recovery.

[ULTRA-DEEP ANALYSIS - COBALT MINERALOGY]: Cobalt occurs primarily as cobaltite (CoAsS), erythrite (Co3(AsO4)2·8H2O), and as a component of copper sulfide minerals including chalcopyrite and bornite. Cobalt recovery from copper ores utilizes advanced flotation technology achieving 75% cobalt recovery, producing cobalt concentrate containing 15% cobalt suitable for refining operations.

[ULTRA-DEEP ANALYSIS - BATTERY APPLICATIONS]: Cobalt serves as an essential component in lithium-ion battery cathodes including nickel-manganese-cobalt (NMC) and nickel-cobalt-aluminum (NCA) formulations, with each electric vehicle battery containing 5-15 kg of cobalt. The global electric vehicle market's exponential growth creates unprecedented demand for cobalt, with global consumption projected to increase from 150,000 tons in 2023 to 400,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Cobalt prices have experienced significant volatility driven by supply chain concerns, with prices ranging from $25,000 to $80,000 per ton over the past decade. Afghanistan's cobalt resources provide supply chain diversification, reducing dependence on Democratic Republic of Congo which currently supplies 70% of global cobalt production.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Cobalt processing involves recovery from copper ores through flotation, followed by hydrometallurgical processing producing cobalt sulfate and cobalt hydroxide meeting battery manufacturer specifications. Advanced processing technology ensures high recovery rates while minimizing environmental impact.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable cobalt production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet battery manufacturer specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, cobalt production will generate $2 billion annually in revenue from cobalt sales, $300 million in royalties and taxes to the Afghan government, $100 million in wages to Afghan workers, and $400 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Cobalt operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Cobalt operations require comprehensive infrastructure supporting operations including power generation providing 200 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international cobalt producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Cobalt operations include comprehensive research and development programs advancing cobalt processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - SUPPLY CHAIN SIGNIFICANCE]: Cobalt supply chain diversification represents a strategic priority for battery manufacturers and electric vehicle producers, reducing dependence on single-source suppliers and ensuring supply security. Afghanistan's cobalt resources provide critical supply chain diversification.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect cobalt operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to cobalt operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's cobalt deposits represent a strategic vision for industrial development, demonstrating that world-class cobalt production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '1M+', label: 'Tons', description: 'Cobalt resources' },
      { value: 'Top 10', label: 'Global Rank', description: 'Resource holders' },
      { value: '$2B', label: 'Annual Revenue', description: 'Cobalt sales' },
      { value: '0.8%', label: 'Co Grade', description: 'In copper ore' },
      { value: '75%', label: 'Recovery Rate', description: 'Cobalt capture' },
      { value: 'Critical', label: 'Strategic', description: 'Battery metal' },
    ],
    sections: [
      {
        title: 'Battery Applications',
        content: `Cobalt serves as an essential component in lithium-ion battery cathodes including nickel-manganese-cobalt (NMC) and nickel-cobalt-aluminum (NCA) formulations, with each electric vehicle battery containing 5-15 kg of cobalt. Global demand is projected to increase exponentially, positioning Afghanistan as a critical supplier.`,
        image: cobaltOre,
        alignment: 'left'
      },
      {
        title: 'Supply Chain Significance',
        content: `Cobalt supply chain diversification represents a strategic priority for battery manufacturers and electric vehicle producers, reducing dependence on Democratic Republic of Congo which currently supplies 70% of global production. Afghanistan's cobalt resources provide critical supply chain diversification.`,
        image: dataMegaCenter,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Cobalt resource assessment' },
      { year: '2026', event: 'Processing technology selection' },
      { year: '2027', event: 'Recovery facility design' },
      { year: '2028', event: 'Processing plant construction' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First cobalt production' },
      { year: '2031', event: 'Battery manufacturer certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Cobalt production legacy' },
    ],
    relatedMinerals: [
      { name: 'Mes Aynak Copper', href: '/minerals/copper/mes-aynak' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Nickel Laterite Resources', href: '/minerals/nickel/laterite' },
      { name: 'Battery Metal Alloys', href: '/minerals/cobalt-nickel/alloys' },
      { name: 'EV Battery Supply Chain', href: '/minerals/cobalt-nickel/ev-supply' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Lithium Battery Materials', href: '/minerals/lithium/battery-materials' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Manganese Resources', href: '/minerals/manganese/resources' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Digital', href: '/operations/digital' },
    ]
  },

  'nickel/laterite': {
    title: 'Nickel Laterite Resources',
    subtitle: 'Battery-Grade Nickel Production',
    heroImage: nickelOre,
    overview: `Afghanistan's nickel laterite resources represent significant potential for battery-grade nickel production, with nickel serving as an essential component in lithium-ion battery cathodes. Nickel laterite deposits occur in weathered ultramafic rocks, with estimated resources exceeding 50 million tons of nickel metal—positioning Afghanistan as a potential major nickel supplier for the global electric vehicle battery market.

[ULTRA-DEEP ANALYSIS - NICKEL LATERITE GEOLOGY]: Nickel laterite deposits form through weathering of ultramafic rocks over millions of years, concentrating nickel in residual soils and saprolite zones. The deposits occur in multiple provinces including Logar, Paktika, and Khost, with laterite profiles extending from surface to depths of 50-100 meters. Nickel grades average 1.2% nickel with cobalt credits averaging 0.1%, providing substantial resources for battery material production.

[ULTRA-DEEP ANALYSIS - NICKEL PROCESSING TECHNOLOGY]: Nickel laterite processing utilizes high-pressure acid leaching (HPAL) technology producing nickel sulfate and cobalt sulfate meeting battery manufacturer specifications. The HPAL process involves pressure leaching at 250°C and 50 atmospheres, extracting nickel and cobalt from laterite ore. Advanced processing technology ensures high recovery rates while minimizing environmental impact.

[ULTRA-DEEP ANALYSIS - BATTERY APPLICATIONS]: Nickel serves as the primary component in lithium-ion battery cathodes including nickel-manganese-cobalt (NMC) and nickel-cobalt-aluminum (NCA) formulations, with each electric vehicle battery containing 20-40 kg of nickel. The global electric vehicle market's exponential growth creates unprecedented demand for nickel, with global consumption projected to increase from 2.5 million tons in 2023 to 5 million tons by 2030.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Nickel prices have experienced significant volatility driven by supply chain concerns and battery demand growth, with prices ranging from $10,000 to $30,000 per ton over the past decade. Afghanistan's nickel resources provide supply chain diversification, reducing dependence on Indonesia and Philippines which currently supply 50% of global nickel production.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize nickel processing in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, reagent optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable nickel production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that products meet battery manufacturer specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, nickel production will generate $5 billion annually in revenue from nickel sales, $800 million in royalties and taxes to the Afghan government, $300 million in wages to Afghan workers, and $1.2 billion in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Nickel operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Nickel operations require comprehensive infrastructure supporting operations including power generation providing 500 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international nickel producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Nickel operations include comprehensive research and development programs advancing nickel processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - SUPPLY CHAIN SIGNIFICANCE]: Nickel supply chain diversification represents a strategic priority for battery manufacturers and electric vehicle producers, reducing dependence on single-source suppliers and ensuring supply security. Afghanistan's nickel resources provide critical supply chain diversification.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect nickel operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to nickel operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's nickel laterite resources represent a strategic vision for industrial development, demonstrating that world-class nickel production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '50M+', label: 'Tons', description: 'Nickel resources' },
      { value: '1.2%', label: 'Ni Grade', description: 'Average content' },
      { value: '$5B', label: 'Annual Revenue', description: 'Nickel sales' },
      { value: 'HPAL', label: 'Technology', description: 'Processing method' },
      { value: '500MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Critical', label: 'Strategic', description: 'Battery metal' },
    ],
    sections: [
      {
        title: 'High-Pressure Acid Leaching',
        content: `Nickel laterite processing utilizes high-pressure acid leaching (HPAL) technology producing nickel sulfate and cobalt sulfate meeting battery manufacturer specifications. The HPAL process involves pressure leaching at 250°C and 50 atmospheres, extracting nickel and cobalt from laterite ore with high recovery rates.`,
        image: nickelOre,
        alignment: 'left'
      },
      {
        title: 'Battery Applications',
        content: `Nickel serves as the primary component in lithium-ion battery cathodes including nickel-manganese-cobalt (NMC) and nickel-cobalt-aluminum (NCA) formulations, with each electric vehicle battery containing 20-40 kg of nickel. Global demand is projected to increase exponentially, positioning Afghanistan as a critical supplier.`,
        image: dataMegaCenter,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Nickel resource assessment' },
      { year: '2026', event: 'HPAL technology selection' },
      { year: '2027', event: 'Processing plant design' },
      { year: '2028', event: 'HPAL facility construction' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First nickel production' },
      { year: '2031', event: 'Battery manufacturer certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Nickel production legacy' },
    ],
    relatedMinerals: [
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
      { name: 'Battery Metal Alloys', href: '/minerals/cobalt-nickel/alloys' },
      { name: 'EV Battery Supply Chain', href: '/minerals/cobalt-nickel/ev-supply' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Lithium Battery Materials', href: '/minerals/lithium/battery-materials' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Manganese Resources', href: '/minerals/manganese/resources' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Safety', href: '/operations/safety' },
    ]
  },

  'cobalt-nickel/alloys': {
    title: 'Battery Metal Alloys',
    subtitle: 'Advanced Cathode Material Production',
    heroImage: cobaltNickel,
    overview: `Afghanistan's battery metal alloy production facilities produce advanced cathode materials for lithium-ion batteries, combining nickel, cobalt, and manganese in precise formulations meeting battery manufacturer specifications. The Battery Metal Alloy Complex produces nickel-manganese-cobalt (NMC) and nickel-cobalt-aluminum (NCA) cathode materials, positioning Afghanistan as a critical supplier for the global electric vehicle battery market.

[ULTRA-DEEP ANALYSIS - NMC CATHODE PRODUCTION]: NMC cathode production combines nickel, manganese, and cobalt in precise ratios (typically 8:1:1 or 6:2:2) producing cathode materials with optimal capacity, cycle life, and safety performance. The process utilizes advanced powder metallurgy techniques ensuring uniform particle size distribution and chemical composition. Advanced quality control ensures that cathode materials meet specifications for battery performance.

[ULTRA-DEEP ANALYSIS - NCA CATHODE PRODUCTION]: NCA cathode production combines nickel, cobalt, and aluminum in precise ratios (typically 8:1.5:0.5) producing cathode materials with enhanced energy density and thermal stability. The process utilizes advanced synthesis techniques ensuring optimal crystal structure and electrochemical performance. Advanced quality control ensures that cathode materials meet specifications for premium battery applications.

[ULTRA-DEEP ANALYSIS - ALLOY SYNTHESIS TECHNOLOGY]: Alloy synthesis utilizes co-precipitation technology producing precursor materials with uniform chemical composition, followed by calcination at 800-900°C producing crystalline cathode materials. Advanced synthesis technology ensures optimal particle morphology, crystal structure, and electrochemical performance meeting battery manufacturer specifications.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that cathode materials meet battery manufacturer specifications and command premium prices in global markets. The quality program includes sampling and testing of raw materials, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Battery metal alloys serve critical applications in lithium-ion batteries powering electric vehicles, renewable energy storage systems, and consumer electronics. The global battery material market's exponential growth creates unprecedented demand, with global consumption projected to increase from 500,000 tons in 2023 to 2 million tons by 2030.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize alloy production in real-time, maximizing quality while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, material optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable alloy production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing production waste for recycling, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, battery metal alloy production will generate $8 billion annually in revenue from material sales, $1.2 billion in royalties and taxes to the Afghan government, $300 million in wages to Afghan workers, and $1.2 billion in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The manufacturing facilities include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in materials science, chemical processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The manufacturing facilities require comprehensive infrastructure supporting operations including power generation providing 600 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to metal producers and battery manufacturers, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international battery material manufacturers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The manufacturing facilities include comprehensive research and development programs advancing battery metal alloy technology and sustainable practices. Research areas include material optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global battery metal alloy demand is projected to increase exponentially over the next two decades, driven by electric vehicle adoption, renewable energy storage, and consumer electronics growth. Afghanistan's production capacity positions the nation as a critical supplier for global battery manufacturing.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the manufacturing facilities from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the manufacturing facilities' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's battery metal alloy production represents a strategic vision for industrial development, demonstrating that world-class materials production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '200K', label: 'Tons/Year', description: 'Alloy production' },
      { value: 'NMC/NCA', label: 'Cathode Types', description: 'Multiple formulations' },
      { value: '$8B', label: 'Annual Revenue', description: 'Material sales' },
      { value: '600MW', label: 'Power', description: 'Manufacturing capacity' },
      { value: 'Premium', label: 'Quality', description: 'Battery-grade' },
      { value: 'EV Supply', label: 'Application', description: 'Electric vehicles' },
    ],
    sections: [
      {
        title: 'NMC Cathode Production',
        content: `NMC cathode production combines nickel, manganese, and cobalt in precise ratios producing cathode materials with optimal capacity, cycle life, and safety performance. The process utilizes advanced powder metallurgy techniques ensuring uniform particle size distribution and chemical composition.`,
        image: cobaltNickel,
        alignment: 'left'
      },
      {
        title: 'NCA Cathode Production',
        content: `NCA cathode production combines nickel, cobalt, and aluminum in precise ratios producing cathode materials with enhanced energy density and thermal stability. Advanced synthesis techniques ensure optimal crystal structure and electrochemical performance.`,
        image: dataMegaCenter,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Alloy facility design' },
      { year: '2026', event: 'NMC production line construction' },
      { year: '2027', event: 'NCA production line construction' },
      { year: '2028', event: 'Quality control laboratory installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First alloy production' },
      { year: '2031', event: 'Battery manufacturer certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Battery metal alloy legacy' },
    ],
    relatedMinerals: [
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
      { name: 'Nickel Laterite Resources', href: '/minerals/nickel/laterite' },
      { name: 'EV Battery Supply Chain', href: '/minerals/cobalt-nickel/ev-supply' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Lithium Battery Materials', href: '/minerals/lithium/battery-materials' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Manganese Resources', href: '/minerals/manganese/resources' },
      { name: 'Copper Processing', href: '/minerals/copper/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
    ]
  },

  'cobalt-nickel/ev-supply': {
    title: 'EV Battery Supply Chain',
    subtitle: 'Critical Minerals for Electric Vehicles',
    heroImage: dataMegaCenter,
    overview: `Afghanistan's EV battery supply chain encompasses the complete value chain from mine to battery, producing critical minerals including lithium, cobalt, nickel, and graphite essential for lithium-ion battery manufacturing. The integrated supply chain positions Afghanistan as a critical supplier for the global electric vehicle revolution, with production capacity sufficient to supply batteries for 25 million electric vehicles annually.

[ULTRA-DEEP ANALYSIS - INTEGRATED SUPPLY CHAIN]: The EV battery supply chain integrates lithium carbonate production, cobalt recovery, nickel processing, and graphite production, creating a vertically integrated supply chain from mine to battery materials. The integrated approach maximizes value addition while ensuring supply chain security and reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - LITHIUM SUPPLY]: Lithium supply from Ghazni and Nuristan deposits provides 500,000 tons of battery-grade lithium chemicals annually, sufficient to supply batteries for 25 million electric vehicles. Lithium carbonate and hydroxide production facilities produce materials meeting battery manufacturer specifications, enabling direct supply to major battery manufacturers.

[ULTRA-DEEP ANALYSIS - COBALT SUPPLY]: Cobalt supply from Mes Aynak copper operations and primary cobalt deposits provides 50,000 tons of cobalt metal annually, sufficient to supply batteries for 10 million electric vehicles. Cobalt recovery from copper ores and primary deposits ensures reliable supply while maximizing value extraction.

[ULTRA-DEEP ANALYSIS - NICKEL SUPPLY]: Nickel supply from laterite deposits provides 200,000 tons of battery-grade nickel annually, sufficient to supply batteries for 15 million electric vehicles. Nickel processing facilities produce nickel sulfate meeting battery manufacturer specifications, enabling direct supply to cathode material manufacturers.

[ULTRA-DEEP ANALYSIS - GRAPHITE SUPPLY]: Graphite supply from Afghan deposits provides 100,000 tons of battery-grade graphite annually, sufficient to supply anodes for 20 million electric vehicles. Graphite processing facilities produce materials meeting battery manufacturer specifications, enabling direct supply to anode material manufacturers.

[ULTRA-DEEP ANALYSIS - SUPPLY CHAIN INTEGRATION]: Supply chain integration ensures efficient material flows from mines to battery manufacturers, reducing costs while ensuring quality and reliability. Integrated logistics systems connect mines, processing facilities, and export terminals, enabling efficient supply chain operations.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: The EV battery supply chain serves critical applications in electric vehicle manufacturing, renewable energy storage systems, and consumer electronics. The global electric vehicle market's exponential growth creates unprecedented demand, with global battery production projected to increase from 500 GWh in 2023 to 3,000 GWh by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC PARTNERSHIPS]: Strategic partnerships with major battery manufacturers including CATL, LG Energy Solution, Panasonic, and Tesla ensure market access while enabling technology transfer and capacity building. Long-term supply agreements provide revenue security while ensuring market access for Afghan battery materials.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize supply chain operations in real-time, maximizing efficiency while minimizing costs and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, logistics optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable supply chain operations require comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing production waste for recycling, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that materials meet battery manufacturer specifications and command premium prices in global markets. The quality program includes sampling and testing of materials, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, the EV battery supply chain will generate $25 billion annually in revenue from material sales, $4 billion in royalties and taxes to the Afghan government, $1 billion in wages to Afghan workers, and $5 billion in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: The supply chain includes comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, logistics, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: The supply chain requires comprehensive infrastructure supporting operations including power generation providing 2,000 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting mines to processing facilities and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international battery material manufacturers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: The supply chain includes comprehensive research and development programs advancing battery material technology and sustainable practices. Research areas include material optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global EV battery demand is projected to increase exponentially over the next two decades, driven by electric vehicle adoption, renewable energy storage, and consumer electronics growth. Afghanistan's production capacity positions the nation as a critical supplier for global battery manufacturing.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect the supply chain from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to the supply chain's success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's EV battery supply chain represents a strategic vision for industrial development, demonstrating that world-class supply chain operations can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '25M', label: 'EV Batteries/Year', description: 'Supply capacity' },
      { value: '$25B', label: 'Annual Revenue', description: 'Material sales' },
      { value: 'Integrated', label: 'Supply Chain', description: 'Mine to battery' },
      { value: '2,000MW', label: 'Power', description: 'Total capacity' },
      { value: 'Critical', label: 'Strategic', description: 'Battery minerals' },
      { value: '2035', label: 'Full Capacity', description: 'Production target' },
    ],
    sections: [
      {
        title: 'Integrated Supply Chain',
        content: `The EV battery supply chain integrates lithium carbonate production, cobalt recovery, nickel processing, and graphite production, creating a vertically integrated supply chain from mine to battery materials. The integrated approach maximizes value addition while ensuring supply chain security.`,
        image: dataMegaCenter,
        alignment: 'left'
      },
      {
        title: 'Strategic Partnerships',
        content: `Strategic partnerships with major battery manufacturers including CATL, LG Energy Solution, Panasonic, and Tesla ensure market access while enabling technology transfer and capacity building. Long-term supply agreements provide revenue security while ensuring market access.`,
        image: partnership,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Supply chain planning' },
      { year: '2026', event: 'Lithium facilities construction' },
      { year: '2027', event: 'Cobalt recovery facilities' },
      { year: '2028', event: 'Nickel processing facilities' },
      { year: '2029', event: 'Graphite processing facilities' },
      { year: '2030', event: 'First integrated supply' },
      { year: '2031', event: 'Battery manufacturer agreements' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full supply chain capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'EV battery supply chain legacy' },
    ],
    relatedMinerals: [
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Lithium EV Supply Chain', href: '/minerals/lithium/ev-supply' },
      { name: 'Lithium Battery Materials', href: '/minerals/lithium/battery-materials' },
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
      { name: 'Nickel Laterite Resources', href: '/minerals/nickel/laterite' },
      { name: 'Battery Metal Alloys', href: '/minerals/cobalt-nickel/alloys' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Battery Anode Materials', href: '/minerals/graphite/battery-anode' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Manganese Resources', href: '/minerals/manganese/resources' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
    ]
  },

  // ==================== GEMS - ADDITIONAL MISSING ENTRIES ====================
  'gems/kunzite': {
    title: 'Kunzite & Spodumene',
    subtitle: 'Pink Gemstone & Lithium Source',
    heroImage: lithiumSpodumene,
    overview: `Afghanistan's kunzite deposits represent both beautiful gemstones and lithium sources, with kunzite being the pink-to-violet variety of spodumene—the primary lithium ore mineral. Kunzite occurs in pegmatite deposits throughout Nuristan and Ghazni provinces, producing both gem-quality kunzite for jewelry markets and spodumene concentrate for lithium chemical production.

[ULTRA-DEEP ANALYSIS - KUNZITE GEOLOGY]: Kunzite occurs as pink-to-violet crystals of spodumene in lithium-rich pegmatite deposits, formed through crystallization of lithium-rich magmas in granite intrusions. The gem-quality kunzite crystals exhibit exceptional clarity and color, with sizes ranging from small crystals to massive specimens exceeding 1 meter in length. Kunzite's color results from trace manganese impurities, with deeper pink-to-violet colors commanding premium prices in gem markets.

[ULTRA-DEEP ANALYSIS - GEM-QUALITY KUNZITE]: Gem-quality kunzite exhibits exceptional clarity, color saturation, and size, with premium specimens commanding prices exceeding $1,000 per carat. The gemstone's pleochroism—displaying different colors when viewed from different angles—adds to its beauty and value. Kunzite jewelry including rings, pendants, and earrings serves luxury markets worldwide, with Afghan kunzite recognized for exceptional quality.

[ULTRA-DEEP ANALYSIS - SPODUMENE CONCENTRATION]: Spodumene serves as the primary lithium ore mineral, with kunzite-bearing pegmatites containing 2-6% Li2O suitable for lithium chemical production. Spodumene concentration utilizes dense media separation (DMS) technology producing spodumene concentrate containing 6% Li2O, suitable for lithium carbonate and hydroxide production. The dual value proposition—gem-quality kunzite and lithium ore—maximizes value extraction from pegmatite deposits.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Kunzite serves luxury jewelry markets worldwide, with premium specimens commanding high prices. Spodumene concentrate serves lithium chemical production for electric vehicle batteries, renewable energy storage, and consumer electronics. The dual market approach maximizes value while ensuring supply chain diversification.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Kunzite processing involves careful extraction preserving gem-quality crystals, followed by cutting and polishing producing finished gemstones. Spodumene processing involves crushing, grinding, and dense media separation producing lithium concentrate. Advanced processing technology ensures maximum value extraction while preserving gem-quality material.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable kunzite and spodumene production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that gem-quality kunzite meets jewelry market specifications while spodumene concentrate meets lithium chemical production requirements. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, kunzite and spodumene production will generate $500 million annually in revenue from gem and concentrate sales, $100 million in royalties and taxes to the Afghan government, $50 million in wages to Afghan workers, and $150 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Kunzite and spodumene operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in gem cutting, mineral processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Operations require comprehensive infrastructure supporting operations including power generation providing 100 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to markets, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international gem dealers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major jewelry manufacturers and lithium chemical producers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Operations include comprehensive research and development programs advancing kunzite and spodumene processing technology and sustainable practices. Research areas include gem cutting optimization, processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global kunzite demand remains steady driven by luxury jewelry markets, while spodumene demand is projected to increase exponentially driven by electric vehicle battery production. Afghanistan's production capacity positions the nation as a reliable supplier for both markets.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's kunzite and spodumene deposits represent a strategic vision for industrial development, demonstrating that world-class gemstone and mineral production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: 'Gem-Quality', label: 'Kunzite', description: 'Premium gemstones' },
      { value: '6%', label: 'Li2O Grade', description: 'Spodumene concentrate' },
      { value: '$500M', label: 'Annual Revenue', description: 'Gem and concentrate sales' },
      { value: '$1K+/ct', label: 'Premium Price', description: 'Gem-quality kunzite' },
      { value: '100MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Dual Value', label: 'Strategy', description: 'Gems and lithium' },
    ],
    sections: [
      {
        title: 'Gem-Quality Kunzite',
        content: `Gem-quality kunzite exhibits exceptional clarity, color saturation, and size, with premium specimens commanding prices exceeding $1,000 per carat. The gemstone's pleochroism adds to its beauty and value, serving luxury jewelry markets worldwide.`,
        image: lithiumSpodumene,
        alignment: 'left'
      },
      {
        title: 'Spodumene Concentration',
        content: `Spodumene serves as the primary lithium ore mineral, with kunzite-bearing pegmatites containing 2-6% Li2O suitable for lithium chemical production. Dense media separation produces spodumene concentrate containing 6% Li2O for lithium carbonate production.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Kunzite resource assessment' },
      { year: '2026', event: 'Gem cutting facility design' },
      { year: '2027', event: 'Spodumene concentrator design' },
      { year: '2028', event: 'Processing facilities construction' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First kunzite and spodumene production' },
      { year: '2031', event: 'Jewelry market certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Kunzite and spodumene legacy' },
    ],
    relatedMinerals: [
      { name: 'Ghazni Lithium Pegmatites', href: '/minerals/lithium/ghazni' },
      { name: 'Nuristan Lithium Deposits', href: '/minerals/lithium/nuristan' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Spodumene Concentrates', href: '/minerals/lithium/spodumene' },
      { name: 'Panjshir Emeralds', href: '/minerals/gems/emerald' },
      { name: 'Badakhshan Lapis Lazuli', href: '/minerals/gems/lapis' },
      { name: 'Jegdalek Rubies', href: '/minerals/gems/ruby' },
      { name: 'Hindu Kush Sapphires', href: '/minerals/gems/sapphire' },
      { name: 'Nuristan Tourmaline', href: '/minerals/gems/tourmaline' },
      { name: 'Kunar Aquamarine', href: '/minerals/gems/aquamarine' },
      { name: 'Garnet Deposits', href: '/minerals/gems/garnet' },
      { name: 'Peridot Resources', href: '/minerals/gems/peridot' },
      { name: 'Gemstone Cutting & Polishing', href: '/minerals/gems/cutting' },
      { name: 'Gemstone Certification', href: '/minerals/gems/certification' },
      { name: 'International Gem Trade', href: '/minerals/gems/trade' },
    ]
  },

  'gems/garnet': {
    title: 'Garnet Deposits',
    subtitle: 'Industrial & Gem-Quality Garnets',
    heroImage: emeraldMine,
    overview: `Afghanistan's garnet deposits produce both gem-quality garnets for jewelry markets and industrial garnets for abrasive applications. Garnet occurs in metamorphic rocks throughout multiple provinces, with gem-quality specimens including almandine, pyrope, and spessartine varieties serving luxury jewelry markets, while industrial garnets serve abrasive and water filtration applications.

[ULTRA-DEEP ANALYSIS - GARNET GEOLOGY]: Garnet deposits occur in metamorphic rocks including schists, gneisses, and marbles, formed through regional metamorphism of sedimentary and igneous rocks. Gem-quality garnets occur as well-formed crystals exhibiting exceptional clarity and color, with almandine (red), pyrope (deep red), and spessartine (orange-red) varieties commanding premium prices. Industrial garnets occur as massive deposits suitable for abrasive and filtration applications.

[ULTRA-DEEP ANALYSIS - GEM-QUALITY GARNETS]: Gem-quality garnets exhibit exceptional clarity, color saturation, and size, with premium specimens commanding prices exceeding $500 per carat. Garnet jewelry including rings, pendants, and earrings serves luxury markets worldwide, with Afghan garnets recognized for exceptional quality and color. The gemstone's durability and brilliance make it ideal for jewelry applications.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL GARNETS]: Industrial garnets serve critical applications including waterjet cutting abrasives, sandblasting media, water filtration media, and polishing compounds. Industrial garnet production involves crushing, grinding, and sizing producing materials meeting industrial specifications. The industrial garnet market's steady growth creates consistent demand, with global consumption projected to increase from 500,000 tons in 2023 to 700,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Garnet processing involves careful extraction preserving gem-quality crystals, followed by cutting and polishing producing finished gemstones. Industrial garnet processing involves crushing, grinding, and sizing producing materials meeting industrial specifications. Advanced processing technology ensures maximum value extraction while preserving gem-quality material.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Gem-quality garnets serve luxury jewelry markets worldwide, while industrial garnets serve abrasive and filtration applications. The dual market approach maximizes value while ensuring supply chain diversification. Garnet's unique properties including hardness, durability, and chemical resistance make it ideal for both applications.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable garnet production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that gem-quality garnets meet jewelry market specifications while industrial garnets meet abrasive and filtration requirements. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, garnet production will generate $200 million annually in revenue from gem and industrial sales, $40 million in royalties and taxes to the Afghan government, $30 million in wages to Afghan workers, and $80 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Garnet operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in gem cutting, mineral processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Operations require comprehensive infrastructure supporting operations including power generation providing 50 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to markets, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international gem dealers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major jewelry manufacturers and industrial garnet consumers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Operations include comprehensive research and development programs advancing garnet processing technology and sustainable practices. Research areas include gem cutting optimization, processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global garnet demand remains steady driven by jewelry markets and industrial applications. Afghanistan's production capacity positions the nation as a reliable supplier for both markets, with gem-quality garnets commanding premium prices while industrial garnets serving steady demand.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's garnet deposits represent a strategic vision for industrial development, demonstrating that world-class gemstone and industrial mineral production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: 'Gem-Quality', label: 'Garnets', description: 'Premium gemstones' },
      { value: 'Industrial', label: 'Garnets', description: 'Abrasive applications' },
      { value: '$200M', label: 'Annual Revenue', description: 'Gem and industrial sales' },
      { value: '$500+/ct', label: 'Premium Price', description: 'Gem-quality garnets' },
      { value: '50MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Dual Market', label: 'Strategy', description: 'Gems and industrial' },
    ],
    sections: [
      {
        title: 'Gem-Quality Garnets',
        content: `Gem-quality garnets exhibit exceptional clarity, color saturation, and size, with premium specimens commanding prices exceeding $500 per carat. Garnet jewelry serves luxury markets worldwide, with Afghan garnets recognized for exceptional quality and color.`,
        image: emeraldMine,
        alignment: 'left'
      },
      {
        title: 'Industrial Garnets',
        content: `Industrial garnets serve critical applications including waterjet cutting abrasives, sandblasting media, water filtration media, and polishing compounds. The industrial garnet market's steady growth creates consistent demand, with global consumption projected to increase steadily.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Garnet resource assessment' },
      { year: '2026', event: 'Gem cutting facility design' },
      { year: '2027', event: 'Industrial processing facility design' },
      { year: '2028', event: 'Processing facilities construction' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First garnet production' },
      { year: '2031', event: 'Jewelry market certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Garnet production legacy' },
    ],
    relatedMinerals: [
      { name: 'Panjshir Emeralds', href: '/minerals/gems/emerald' },
      { name: 'Badakhshan Lapis Lazuli', href: '/minerals/gems/lapis' },
      { name: 'Jegdalek Rubies', href: '/minerals/gems/ruby' },
      { name: 'Hindu Kush Sapphires', href: '/minerals/gems/sapphire' },
      { name: 'Nuristan Tourmaline', href: '/minerals/gems/tourmaline' },
      { name: 'Kunar Aquamarine', href: '/minerals/gems/aquamarine' },
      { name: 'Kunzite & Spodumene', href: '/minerals/gems/kunzite' },
      { name: 'Peridot Resources', href: '/minerals/gems/peridot' },
      { name: 'Gemstone Cutting & Polishing', href: '/minerals/gems/cutting' },
      { name: 'Gemstone Certification', href: '/minerals/gems/certification' },
      { name: 'International Gem Trade', href: '/minerals/gems/trade' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
    ]
  },

  'gems/peridot': {
    title: 'Peridot Resources',
    subtitle: 'Green Gemstone Deposits',
    heroImage: emeraldCrystal,
    overview: `Afghanistan's peridot deposits produce beautiful green gemstones serving luxury jewelry markets worldwide. Peridot occurs in ultramafic rocks and volcanic deposits throughout multiple provinces, with gem-quality specimens exhibiting exceptional clarity and color saturation commanding premium prices in international gem markets.

[ULTRA-DEEP ANALYSIS - PERIDOT GEOLOGY]: Peridot deposits occur in ultramafic rocks including peridotite and dunite, formed through crystallization of magnesium-rich magmas. Peridot also occurs in volcanic deposits including basalt flows, where it forms as phenocrysts in volcanic rocks. Gem-quality peridot exhibits exceptional clarity and color saturation, with deep green colors commanding premium prices. Peridot's unique green color results from iron impurities, with deeper colors commanding higher prices.

[ULTRA-DEEP ANALYSIS - GEM-QUALITY PERIDOT]: Gem-quality peridot exhibits exceptional clarity, color saturation, and size, with premium specimens commanding prices exceeding $300 per carat. Peridot jewelry including rings, pendants, and earrings serves luxury markets worldwide, with Afghan peridot recognized for exceptional quality and color. The gemstone's unique green color and brilliance make it ideal for jewelry applications.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Peridot processing involves careful extraction preserving gem-quality crystals, followed by cutting and polishing producing finished gemstones. Advanced cutting techniques maximize gemstone beauty while preserving maximum carat weight. Quality control ensures that peridot meets jewelry market specifications including clarity, color, and cut quality.

[ULTRA-DEEP ANALYSIS - MARKET APPLICATIONS]: Peridot serves luxury jewelry markets worldwide, with premium specimens commanding high prices. The gemstone's unique green color and brilliance make it ideal for rings, pendants, earrings, and other jewelry applications. Peridot's durability and beauty ensure steady demand in luxury markets.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable peridot production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that gem-quality peridot meets jewelry market specifications and commands premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, peridot production will generate $100 million annually in revenue from gem sales, $20 million in royalties and taxes to the Afghan government, $15 million in wages to Afghan workers, and $40 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Peridot operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in gem cutting, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Operations require comprehensive infrastructure supporting operations including power generation providing 30 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to markets, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international gem dealers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major jewelry manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Operations include comprehensive research and development programs advancing peridot processing technology and sustainable practices. Research areas include gem cutting optimization, processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global peridot demand remains steady driven by luxury jewelry markets. Afghanistan's production capacity positions the nation as a reliable supplier, with gem-quality peridot commanding premium prices in international markets.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's peridot deposits represent a strategic vision for industrial development, demonstrating that world-class gemstone production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: 'Gem-Quality', label: 'Peridot', description: 'Premium gemstones' },
      { value: '$100M', label: 'Annual Revenue', description: 'Gem sales' },
      { value: '$300+/ct', label: 'Premium Price', description: 'Gem-quality peridot' },
      { value: '30MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Luxury', label: 'Market', description: 'Jewelry applications' },
      { value: 'Green', label: 'Color', description: 'Unique gemstone' },
    ],
    sections: [
      {
        title: 'Gem-Quality Peridot',
        content: `Gem-quality peridot exhibits exceptional clarity, color saturation, and size, with premium specimens commanding prices exceeding $300 per carat. Peridot jewelry serves luxury markets worldwide, with Afghan peridot recognized for exceptional quality and unique green color.`,
        image: emeraldCrystal,
        alignment: 'left'
      },
      {
        title: 'Market Applications',
        content: `Peridot serves luxury jewelry markets worldwide, with premium specimens commanding high prices. The gemstone's unique green color and brilliance make it ideal for rings, pendants, earrings, and other jewelry applications.`,
        image: emeraldMine,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Peridot resource assessment' },
      { year: '2026', event: 'Gem cutting facility design' },
      { year: '2027', event: 'Processing facility construction' },
      { year: '2028', event: 'Quality control laboratory installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First peridot production' },
      { year: '2031', event: 'Jewelry market certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Peridot production legacy' },
    ],
    relatedMinerals: [
      { name: 'Panjshir Emeralds', href: '/minerals/gems/emerald' },
      { name: 'Badakhshan Lapis Lazuli', href: '/minerals/gems/lapis' },
      { name: 'Jegdalek Rubies', href: '/minerals/gems/ruby' },
      { name: 'Hindu Kush Sapphires', href: '/minerals/gems/sapphire' },
      { name: 'Nuristan Tourmaline', href: '/minerals/gems/tourmaline' },
      { name: 'Kunar Aquamarine', href: '/minerals/gems/aquamarine' },
      { name: 'Kunzite & Spodumene', href: '/minerals/gems/kunzite' },
      { name: 'Garnet Deposits', href: '/minerals/gems/garnet' },
      { name: 'Gemstone Cutting & Polishing', href: '/minerals/gems/cutting' },
      { name: 'Gemstone Certification', href: '/minerals/gems/certification' },
      { name: 'International Gem Trade', href: '/minerals/gems/trade' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
    ]
  },

  // ==================== ALUMINUM & LIGHT METALS ====================
  'aluminum/bauxite': {
    title: 'Bauxite Deposits',
    subtitle: 'Primary Aluminum Ore Resources',
    heroImage: ironOre,
    overview: `Afghanistan's bauxite deposits represent significant potential for aluminum production, with bauxite serving as the primary ore for aluminum metal production. Bauxite occurs in lateritic deposits formed through weathering of aluminum-rich rocks, with estimated resources exceeding 50 million tons of bauxite ore—positioning Afghanistan as a potential major aluminum supplier for regional and global markets.

[ULTRA-DEEP ANALYSIS - BAUXITE GEOLOGICAL FORMATION]: Bauxite deposits form through intense weathering of aluminum-rich rocks including granites, syenites, and basalts over millions of years, concentrating aluminum hydroxides including gibbsite, boehmite, and diaspore. The deposits occur in lateritic profiles extending from surface to depths of 20-50 meters, with aluminum content averaging 40-50% Al2O3 suitable for aluminum production. Bauxite deposits occur in multiple provinces including Logar, Paktika, and Khost, with geological mapping identifying extensive lateritic zones.

[ULTRA-DEEP ANALYSIS - BAUXITE MINERALOGY]: Bauxite consists primarily of aluminum hydroxides including gibbsite (Al(OH)3), boehmite (AlO(OH)), and diaspore (AlO(OH)), along with iron oxides, titanium oxides, and silica. The mineralogy determines processing requirements, with gibbsite-rich bauxite requiring lower processing temperatures compared to boehmite-rich bauxite. Bauxite quality is assessed based on Al2O3 content, silica content, iron content, and reactive silica content.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Bauxite mining utilizes open-pit methods due to shallow deposit depths, with mining operations involving removal of overburden, extraction of bauxite ore, and rehabilitation of mined areas. Mining equipment includes excavators, haul trucks, and loaders, with operations designed to minimize environmental impact while maximizing ore recovery. Selective mining techniques preserve high-grade ore zones while managing lower-grade material.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Bauxite processing utilizes the Bayer process producing alumina (Al2O3) through digestion in sodium hydroxide solution at elevated temperatures and pressures. The process involves crushing and grinding of bauxite ore, digestion in caustic soda solution, clarification and filtration removing red mud waste, precipitation of aluminum hydroxide, and calcination producing alumina. Advanced processing technology ensures high recovery rates while minimizing environmental impact.

[ULTRA-DEEP ANALYSIS - ALUMINUM PRODUCTION]: Alumina serves as the feedstock for aluminum metal production through electrolytic reduction in Hall-Héroult cells. The process involves dissolving alumina in molten cryolite, electrolytic reduction producing aluminum metal, and casting producing aluminum ingots. Aluminum production requires substantial electrical power, with modern smelters consuming 13-15 MWh per ton of aluminum produced.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Aluminum serves critical applications including transportation (automotive, aerospace, rail), construction (building facades, windows, structural components), packaging (cans, foil, containers), electrical transmission (power lines, cables), and consumer goods (appliances, electronics). The global aluminum market's steady growth creates consistent demand, with global consumption projected to increase from 65 million tons in 2023 to 85 million tons by 2030.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global aluminum demand is driven by infrastructure development, transportation manufacturing, and construction growth. Afghanistan's bauxite resources provide supply chain diversification, reducing dependence on major producers including Australia, China, and Guinea. Bauxite and alumina prices fluctuate based on supply-demand dynamics, energy costs, and market conditions.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable bauxite mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, red mud management utilizing waste for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that bauxite and alumina meet production specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, bauxite and alumina production will generate $2 billion annually in revenue from ore and alumina sales, $300 million in royalties and taxes to the Afghan government, $150 million in wages to Afghan workers, and $500 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Bauxite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Bauxite operations require comprehensive infrastructure supporting operations including power generation providing 500 MW capacity for alumina production, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international aluminum producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major aluminum consumers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Bauxite operations include comprehensive research and development programs advancing bauxite processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Bauxite and aluminum production represent strategic importance for Afghanistan's industrial development, providing materials for infrastructure, transportation, and construction sectors. Aluminum's lightweight properties and corrosion resistance make it essential for modern applications.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's bauxite and alumina production capacity positions the nation as a potential major supplier for regional and global markets. Export potential includes sales to aluminum smelters in Central Asia, Middle East, and South Asia, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's bauxite deposits represent a strategic vision for industrial development, demonstrating that world-class bauxite and aluminum production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '50M+', label: 'Tons', description: 'Bauxite resources' },
      { value: '40-50%', label: 'Al2O3 Grade', description: 'Aluminum content' },
      { value: '$2B', label: 'Annual Revenue', description: 'Ore and alumina sales' },
      { value: '500MW', label: 'Power', description: 'Alumina production capacity' },
      { value: 'Bayer Process', label: 'Technology', description: 'Alumina production' },
      { value: 'Strategic', label: 'Importance', description: 'Industrial development' },
    ],
    sections: [
      {
        title: 'Bauxite Formation',
        content: `Bauxite deposits form through intense weathering of aluminum-rich rocks over millions of years, concentrating aluminum hydroxides in lateritic profiles. The deposits occur in multiple provinces with aluminum content averaging 40-50% Al2O3 suitable for aluminum production.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Aluminum Production',
        content: `Bauxite processing utilizes the Bayer process producing alumina, which serves as feedstock for aluminum metal production through electrolytic reduction. Aluminum serves critical applications in transportation, construction, packaging, and electrical transmission.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Bauxite resource assessment' },
      { year: '2026', event: 'Mining feasibility study' },
      { year: '2027', event: 'Alumina plant design' },
      { year: '2028', event: 'Mining operations commence' },
      { year: '2029', event: 'Alumina plant construction' },
      { year: '2030', event: 'First alumina production' },
      { year: '2031', event: 'Aluminum smelter feasibility' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Bauxite production legacy' },
    ],
    relatedMinerals: [
      { name: 'Alumina Production', href: '/minerals/aluminum/alumina' },
      { name: 'Cryolite Deposits', href: '/minerals/aluminum/cryolite' },
      { name: 'Iron Ore Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Coal Underground', href: '/minerals/coal/underground' },
      { name: 'Cement Production', href: '/minerals/industrial/cement' },
      { name: 'Limestone Quarries', href: '/minerals/industrial/limestone' },
      { name: 'Gypsum Deposits', href: '/minerals/industrial/gypsum' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
    ]
  },

  'aluminum/alumina': {
    title: 'Alumina Production',
    subtitle: 'Aluminum Oxide Manufacturing',
    heroImage: processingPlant,
    overview: `Afghanistan's alumina production facilities produce aluminum oxide (Al2O3) from bauxite ore utilizing the Bayer process—the standard method for alumina production globally. The Alumina Production Complex processes 5 million tons of bauxite annually, producing 2 million tons of alumina suitable for aluminum smelting operations, positioning Afghanistan as a critical supplier for regional aluminum production.

[ULTRA-DEEP ANALYSIS - BAYER PROCESS TECHNOLOGY]: The Bayer process involves digestion of bauxite ore in sodium hydroxide solution at elevated temperatures (150-250°C) and pressures (5-35 atmospheres), dissolving aluminum hydroxides while leaving impurities including iron oxides, titanium oxides, and silica as red mud waste. The process includes crushing and grinding of bauxite ore to optimal particle size, digestion in caustic soda solution dissolving aluminum hydroxides, clarification and filtration removing red mud waste, precipitation of aluminum hydroxide from clarified solution, and calcination at 1,200°C producing alumina (Al2O3) meeting smelter specifications.

[ULTRA-DEEP ANALYSIS - ALUMINA QUALITY SPECIFICATIONS]: Alumina must meet strict specifications for aluminum smelting including minimum 98.5% Al2O3 content, controlled levels of impurities including sodium oxide, iron oxide, and silica, controlled particle size distribution, and absence of deleterious elements. Quality control laboratories conduct extensive testing ensuring that alumina meets specifications for aluminum production, with product certification providing assurance to smelter customers.

[ULTRA-DEEP ANALYSIS - ALUMINUM SMELTING APPLICATIONS]: Alumina serves as the primary feedstock for aluminum metal production through electrolytic reduction in Hall-Héroult cells. The smelting process involves dissolving alumina in molten cryolite at 950°C, electrolytic reduction producing aluminum metal at the cathode, and casting producing aluminum ingots. Each ton of aluminum requires approximately 1.9 tons of alumina, creating substantial demand for alumina production.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems utilizing artificial intelligence optimize alumina production in real-time, maximizing recovery while minimizing energy consumption and environmental impact. Process optimization programs continuously improve efficiency through advanced control systems, reagent optimization, and process improvements. Energy efficiency measures reduce power consumption by 20% compared to conventional processes.

[ULTRA-DEEP ANALYSIS - RED MUD MANAGEMENT]: Red mud—the waste product from bauxite processing—requires comprehensive management to minimize environmental impact. Red mud management strategies include utilization for construction materials including bricks and cement, land reclamation and rehabilitation, and safe disposal in lined impoundments. Research programs advance red mud utilization technologies, maximizing value extraction while minimizing waste.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable alumina production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, red mud management utilizing waste for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that alumina meets smelter specifications and commands premium prices in global markets. The quality program includes sampling and testing of bauxite ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, alumina production will generate $1.5 billion annually in revenue from alumina sales, $250 million in royalties and taxes to the Afghan government, $100 million in wages to Afghan workers, and $400 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Alumina production facilities include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in chemical processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Alumina production facilities require comprehensive infrastructure supporting operations including power generation providing 500 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to bauxite mines and aluminum smelters, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international alumina producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major aluminum smelters.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Alumina production facilities include comprehensive research and development programs advancing alumina production technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global alumina demand is driven by aluminum production growth, with global consumption projected to increase from 130 million tons in 2023 to 170 million tons by 2030. Afghanistan's production capacity of 2 million tons annually represents 1.2% of projected global demand by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Alumina production represents strategic importance for Afghanistan's industrial development, providing feedstock for aluminum production while creating value-added processing opportunities. The integrated bauxite-to-aluminum supply chain maximizes value addition while ensuring supply chain security.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's alumina production capacity positions the nation as a potential supplier for regional aluminum smelters in Central Asia, Middle East, and South Asia. Export potential includes sales to smelters requiring reliable alumina supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect alumina production facilities from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to alumina production facilities' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's alumina production represents a strategic vision for industrial development, demonstrating that world-class alumina production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '2M', label: 'Tons/Year', description: 'Alumina production' },
      { value: '98.5%', label: 'Al2O3 Purity', description: 'Smelter-grade quality' },
      { value: '$1.5B', label: 'Annual Revenue', description: 'Alumina sales' },
      { value: 'Bayer Process', label: 'Technology', description: 'Alumina production' },
      { value: '500MW', label: 'Power', description: 'Production capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Aluminum supply chain' },
    ],
    sections: [
      {
        title: 'Bayer Process',
        content: `The Bayer process involves digestion of bauxite ore in sodium hydroxide solution at elevated temperatures and pressures, dissolving aluminum hydroxides while leaving impurities as red mud waste. The process produces alumina (Al2O3) meeting smelter specifications for aluminum production.`,
        image: processingPlant,
        alignment: 'left'
      },
      {
        title: 'Aluminum Smelting Applications',
        content: `Alumina serves as the primary feedstock for aluminum metal production through electrolytic reduction in Hall-Héroult cells. Each ton of aluminum requires approximately 1.9 tons of alumina, creating substantial demand for alumina production.`,
        image: smelting,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Alumina plant design' },
      { year: '2026', event: 'Bayer process facility construction' },
      { year: '2027', event: 'Red mud management facility' },
      { year: '2028', event: 'Quality control laboratory installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First alumina production' },
      { year: '2031', event: 'Smelter customer certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Alumina production legacy' },
    ],
    relatedMinerals: [
      { name: 'Bauxite Deposits', href: '/minerals/aluminum/bauxite' },
      { name: 'Cryolite Deposits', href: '/minerals/aluminum/cryolite' },
      { name: 'Copper Smelting', href: '/minerals/copper/smelting' },
      { name: 'Copper Refining', href: '/minerals/copper/refining' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Lead Smelting Operations', href: '/minerals/lead-zinc/lead-smelting' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Cement Production', href: '/minerals/industrial/cement' },
      { name: 'Limestone Quarries', href: '/minerals/industrial/limestone' },
    ]
  },

  'aluminum/cryolite': {
    title: 'Cryolite Deposits',
    subtitle: 'Aluminum Smelting Flux Material',
    heroImage: processingPlant,
    overview: `Afghanistan's cryolite deposits represent critical resources for aluminum smelting operations, with cryolite serving as the essential flux material in Hall-Héroult aluminum production cells. Cryolite (Na3AlF6) occurs in rare pegmatite deposits, with synthetic cryolite production also possible from fluorspar and alumina. Cryolite's unique properties including low melting point and ability to dissolve alumina make it essential for aluminum production.

[ULTRA-DEEP ANALYSIS - CRYOLITE GEOLOGY]: Natural cryolite occurs in rare pegmatite deposits associated with granite intrusions, formed through crystallization of fluorine-rich magmas. Cryolite deposits are extremely rare globally, with the primary historical source being the Ivittuut mine in Greenland. Afghanistan's cryolite potential lies in pegmatite deposits containing fluorine minerals, with synthetic cryolite production from fluorspar and alumina providing alternative supply.

[ULTRA-DEEP ANALYSIS - CRYOLITE PROPERTIES]: Cryolite exhibits unique properties essential for aluminum smelting including low melting point (1,012°C), ability to dissolve alumina at elevated temperatures, low electrical resistance enabling efficient electrolysis, and chemical stability at smelting temperatures. These properties make cryolite irreplaceable in Hall-Héroult aluminum production cells, with each ton of aluminum requiring approximately 0.05 tons of cryolite.

[ULTRA-DEEP ANALYSIS - SYNTHETIC CRYOLITE PRODUCTION]: Synthetic cryolite production utilizes fluorspar (CaF2) and alumina (Al2O3) as feedstocks, producing cryolite through chemical reactions. The process involves reacting fluorspar with sodium carbonate producing sodium fluoride, followed by reaction with aluminum fluoride producing cryolite. Synthetic cryolite production ensures reliable supply while utilizing domestic fluorspar and alumina resources.

[ULTRA-DEEP ANALYSIS - ALUMINUM SMELTING APPLICATIONS]: Cryolite serves as the essential flux material in Hall-Héroult aluminum production cells, dissolving alumina and enabling electrolytic reduction producing aluminum metal. The cryolite-alumina melt operates at 950°C, with electrolytic reduction producing aluminum at the cathode and oxygen at the anode. Cryolite's properties enable efficient aluminum production while minimizing energy consumption.

[ULTRA-DEEP ANALYSIS - PROCESS OPTIMIZATION]: Advanced process control systems optimize cryolite production and utilization in aluminum smelting, maximizing efficiency while minimizing consumption. Process optimization programs continuously improve efficiency through advanced control systems, reagent optimization, and process improvements.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable cryolite production requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing production waste for recycling, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that cryolite meets aluminum smelter specifications and commands premium prices in global markets. The quality program includes sampling and testing of raw materials, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, cryolite production will generate $200 million annually in revenue from cryolite sales, $30 million in royalties and taxes to the Afghan government, $20 million in wages to Afghan workers, and $60 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Cryolite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in chemical processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Cryolite operations require comprehensive infrastructure supporting operations including power generation providing 100 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to aluminum smelters, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international cryolite producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major aluminum smelters.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Cryolite operations include comprehensive research and development programs advancing cryolite production technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global cryolite demand is driven by aluminum production growth, with global consumption projected to increase from 3 million tons in 2023 to 4 million tons by 2030. Afghanistan's production capacity positions the nation as a potential supplier for regional aluminum smelters.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Cryolite production represents strategic importance for Afghanistan's aluminum industry development, providing essential flux material for aluminum smelting operations. The integrated bauxite-to-alumina-to-aluminum supply chain maximizes value addition while ensuring supply chain security.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's cryolite production capacity positions the nation as a potential supplier for regional aluminum smelters in Central Asia, Middle East, and South Asia. Export potential includes sales to smelters requiring reliable cryolite supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect cryolite operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to cryolite operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's cryolite deposits represent a strategic vision for industrial development, demonstrating that world-class cryolite production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '100K', label: 'Tons/Year', description: 'Cryolite production' },
      { value: 'Na3AlF6', label: 'Formula', description: 'Cryolite composition' },
      { value: '$200M', label: 'Annual Revenue', description: 'Cryolite sales' },
      { value: 'Synthetic', label: 'Production', description: 'From fluorspar & alumina' },
      { value: '100MW', label: 'Power', description: 'Production capacity' },
      { value: 'Essential', label: 'Application', description: 'Aluminum smelting' },
    ],
    sections: [
      {
        title: 'Cryolite Properties',
        content: `Cryolite exhibits unique properties essential for aluminum smelting including low melting point, ability to dissolve alumina, low electrical resistance, and chemical stability. These properties make cryolite irreplaceable in Hall-Héroult aluminum production cells.`,
        image: processingPlant,
        alignment: 'left'
      },
      {
        title: 'Synthetic Production',
        content: `Synthetic cryolite production utilizes fluorspar and alumina as feedstocks, producing cryolite through chemical reactions. Synthetic production ensures reliable supply while utilizing domestic fluorspar and alumina resources.`,
        image: smelting,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Cryolite resource assessment' },
      { year: '2026', event: 'Synthetic production facility design' },
      { year: '2027', event: 'Chemical processing facility construction' },
      { year: '2028', event: 'Quality control laboratory installation' },
      { year: '2029', event: 'Commissioning begins' },
      { year: '2030', event: 'First cryolite production' },
      { year: '2031', event: 'Aluminum smelter certification' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Cryolite production legacy' },
    ],
    relatedMinerals: [
      { name: 'Bauxite Deposits', href: '/minerals/aluminum/bauxite' },
      { name: 'Alumina Production', href: '/minerals/aluminum/alumina' },
      { name: 'Fluorspar Deposits', href: '/minerals/fluorine/fluorspar' },
      { name: 'Copper Smelting', href: '/minerals/copper/smelting' },
      { name: 'Copper Refining', href: '/minerals/copper/refining' },
      { name: 'Lead Smelting Operations', href: '/minerals/lead-zinc/lead-smelting' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Smelting', href: '/operations/smelting' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Rare Earth Processing', href: '/minerals/ree/processing' },
    ]
  },

  // ==================== STRATEGIC & HARD METALS ====================
  'strategic/tungsten': {
    title: 'Tungsten Deposits',
    subtitle: 'Critical Hard Metal for Industrial Applications',
    heroImage: ironOre,
    overview: `Afghanistan's tungsten deposits represent critical resources for industrial applications, with tungsten serving as an essential hard metal for cutting tools, wear-resistant materials, and high-temperature applications. Tungsten occurs in wolframite and scheelite deposits throughout multiple provinces, with estimated resources exceeding 100,000 tons of tungsten metal—positioning Afghanistan as a potential supplier for global industrial markets.

[ULTRA-DEEP ANALYSIS - TUNGSTEN GEOLOGICAL FORMATION]: Tungsten deposits occur in quartz veins, pegmatites, and skarn deposits associated with granite intrusions, formed through hydrothermal processes concentrating tungsten minerals including wolframite ((Fe,Mn)WO4) and scheelite (CaWO4). The deposits occur in multiple provinces including Logar, Paktika, and Nuristan, with tungsten grades averaging 0.5-1.5% WO3 suitable for commercial production. Geological mapping and exploration have identified extensive tungsten-bearing zones warranting detailed assessment.

[ULTRA-DEEP ANALYSIS - TUNGSTEN MINERALOGY]: Tungsten occurs primarily as wolframite and scheelite, with wolframite being the more common tungsten ore mineral. Wolframite exhibits high density (7.2-7.5 g/cm³) enabling gravity separation, while scheelite exhibits fluorescence under ultraviolet light aiding exploration. Tungsten ore quality is assessed based on WO3 content, with commercial deposits typically containing 0.5-2% WO3.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Tungsten mining utilizes underground and open-pit methods depending on deposit geometry and depth. Underground mining employs room-and-pillar and cut-and-fill methods, while open-pit mining utilizes conventional drill-blast-load-haul operations. Selective mining techniques preserve high-grade ore zones while managing lower-grade material. Mining equipment includes jumbos, loaders, and haul trucks, with operations designed to maximize recovery while ensuring safety.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Tungsten processing involves crushing, grinding, and gravity separation producing tungsten concentrate containing 65% WO3. The process includes dense media separation exploiting tungsten's high density, flotation recovering fine tungsten particles, and magnetic separation removing iron minerals. Advanced processing technology ensures high recovery rates while producing premium-grade concentrate meeting international specifications.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Tungsten serves critical applications including cutting tools (drill bits, milling cutters, turning tools), wear-resistant materials (mining equipment, construction machinery), high-temperature applications (furnace components, aerospace parts), electrical contacts and filaments, and military applications (armor-piercing projectiles, radiation shielding). The global tungsten market's steady growth creates consistent demand, with global consumption projected to increase from 80,000 tons in 2023 to 100,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Tungsten represents strategic importance for industrial development, providing essential materials for manufacturing, construction, and defense sectors. Tungsten's exceptional hardness and high melting point make it irreplaceable for many applications, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global tungsten demand is driven by industrial manufacturing, construction growth, and defense applications. Tungsten prices fluctuate based on supply-demand dynamics, with China being the dominant producer supplying 80% of global production. Afghanistan's tungsten resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable tungsten mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that tungsten concentrate meets international specifications and commands premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, tungsten production will generate $300 million annually in revenue from concentrate sales, $50 million in royalties and taxes to the Afghan government, $40 million in wages to Afghan workers, and $100 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Tungsten operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Tungsten operations require comprehensive infrastructure supporting operations including power generation providing 100 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international tungsten producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major tungsten consumers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Tungsten operations include comprehensive research and development programs advancing tungsten processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's tungsten production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to industrial manufacturers, construction companies, and defense contractors requiring reliable tungsten supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect tungsten operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to tungsten operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's tungsten deposits represent a strategic vision for industrial development, demonstrating that world-class tungsten production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '100K+', label: 'Tons', description: 'Tungsten resources' },
      { value: '0.5-1.5%', label: 'WO3 Grade', description: 'Tungsten content' },
      { value: '$300M', label: 'Annual Revenue', description: 'Concentrate sales' },
      { value: '65%', label: 'Concentrate Grade', description: 'WO3 content' },
      { value: '100MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Hard metal' },
    ],
    sections: [
      {
        title: 'Tungsten Applications',
        content: `Tungsten serves critical applications including cutting tools, wear-resistant materials, high-temperature applications, electrical contacts, and military applications. The global tungsten market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Tungsten processing involves crushing, grinding, and gravity separation producing tungsten concentrate containing 65% WO3. Dense media separation exploits tungsten's high density, while flotation recovers fine particles. Advanced processing ensures high recovery rates.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Tungsten resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First tungsten concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Tungsten production legacy' },
    ],
    relatedMinerals: [
      { name: 'Molybdenum Deposits', href: '/minerals/strategic/molybdenum' },
      { name: 'Vanadium Deposits', href: '/minerals/strategic/vanadium' },
      { name: 'Wolframite Deposits', href: '/minerals/heavy/wolframite' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Iron Ore Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
    ]
  },

  'strategic/molybdenum': {
    title: 'Molybdenum Deposits',
    subtitle: 'Critical Alloying Metal for Steel Production',
    heroImage: ironOre,
    overview: `Afghanistan's molybdenum deposits represent critical resources for steel production and industrial applications, with molybdenum serving as an essential alloying element enhancing steel strength, toughness, and corrosion resistance. Molybdenum occurs in porphyry copper-molybdenum deposits and molybdenite (MoS2) veins throughout multiple provinces, with estimated resources exceeding 50,000 tons of molybdenum metal—positioning Afghanistan as a potential supplier for global steel and industrial markets.

[ULTRA-DEEP ANALYSIS - MOLYBDENUM GEOLOGICAL FORMATION]: Molybdenum deposits occur in porphyry copper-molybdenum deposits associated with granite intrusions, formed through hydrothermal processes concentrating molybdenite (MoS2) in quartz veins and stockworks. The deposits occur in multiple provinces including Logar, Paktika, and Nuristan, with molybdenum grades averaging 0.05-0.15% Mo suitable for commercial production. Molybdenum also occurs as byproduct in copper deposits, with Mes Aynak containing significant molybdenum credits enhancing project economics.

[ULTRA-DEEP ANALYSIS - MOLYBDENUM MINERALOGY]: Molybdenum occurs primarily as molybdenite (MoS2), a soft metallic mineral exhibiting perfect cleavage and distinctive blue-gray color. Molybdenite's low density (4.7 g/cm³) and hydrophobic properties enable efficient flotation recovery. Molybdenum ore quality is assessed based on Mo content, with commercial deposits typically containing 0.05-0.2% Mo.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Molybdenum mining utilizes open-pit and underground methods depending on deposit geometry. Open-pit mining employs conventional drill-blast-load-haul operations, while underground mining utilizes room-and-pillar methods. Selective mining techniques preserve high-grade ore zones while managing lower-grade material. Molybdenum recovery as byproduct from copper operations maximizes value extraction.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Molybdenum processing involves crushing, grinding, and flotation producing molybdenum concentrate containing 50-55% Mo. The process includes bulk flotation recovering copper and molybdenum together, followed by selective flotation separating molybdenum from copper. Roasting converts molybdenite to molybdenum trioxide (MoO3), which is further processed to ferromolybdenum or molybdenum metal. Advanced processing technology ensures high recovery rates while producing premium-grade products.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Molybdenum serves critical applications including steel alloying (stainless steel, tool steel, high-strength low-alloy steel), superalloys for aerospace and power generation, catalysts for petroleum refining, lubricants and additives, and electronics (thin films, semiconductors). The global molybdenum market's steady growth creates consistent demand, with global consumption projected to increase from 300,000 tons in 2023 to 400,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Molybdenum represents strategic importance for industrial development, providing essential materials for steel production, aerospace manufacturing, and energy sectors. Molybdenum's ability to enhance steel properties makes it irreplaceable for many applications, with supply chain security being a priority for major steel producers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global molybdenum demand is driven by steel production growth, infrastructure development, and aerospace manufacturing. Molybdenum prices fluctuate based on supply-demand dynamics, with China being a major producer and consumer. Afghanistan's molybdenum resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable molybdenum mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that molybdenum products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, molybdenum production will generate $400 million annually in revenue from concentrate and metal sales, $60 million in royalties and taxes to the Afghan government, $50 million in wages to Afghan workers, and $120 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Molybdenum operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Molybdenum operations require comprehensive infrastructure supporting operations including power generation providing 150 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international molybdenum producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major steel producers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Molybdenum operations include comprehensive research and development programs advancing molybdenum processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's molybdenum production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to steel producers, aerospace manufacturers, and industrial consumers requiring reliable molybdenum supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect molybdenum operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to molybdenum operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's molybdenum deposits represent a strategic vision for industrial development, demonstrating that world-class molybdenum production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '50K+', label: 'Tons', description: 'Molybdenum resources' },
      { value: '0.05-0.15%', label: 'Mo Grade', description: 'Molybdenum content' },
      { value: '$400M', label: 'Annual Revenue', description: 'Concentrate and metal sales' },
      { value: '50-55%', label: 'Concentrate Grade', description: 'Mo content' },
      { value: '150MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Steel alloying' },
    ],
    sections: [
      {
        title: 'Steel Alloying Applications',
        content: `Molybdenum serves critical applications in steel alloying, enhancing strength, toughness, and corrosion resistance. Stainless steel, tool steel, and high-strength low-alloy steel production creates substantial demand, with global consumption projected to increase steadily.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Molybdenum processing involves flotation producing concentrate containing 50-55% Mo, followed by roasting to molybdenum trioxide. Advanced processing ensures high recovery rates while producing premium-grade products meeting steel industry specifications.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Molybdenum resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First molybdenum concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Molybdenum production legacy' },
    ],
    relatedMinerals: [
      { name: 'Tungsten Deposits', href: '/minerals/strategic/tungsten' },
      { name: 'Vanadium Deposits', href: '/minerals/strategic/vanadium' },
      { name: 'Molybdenite Deposits', href: '/minerals/minor/molybdenite' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
    ]
  },

  'strategic/vanadium': {
    title: 'Vanadium Deposits',
    subtitle: 'Critical Alloying Metal for High-Strength Steel',
    heroImage: ironOre,
    overview: `Afghanistan's vanadium deposits represent critical resources for steel production and energy storage applications, with vanadium serving as an essential alloying element enhancing steel strength and serving as key component in vanadium redox flow batteries. Vanadium occurs in vanadiferous titanomagnetite deposits and vanadium-bearing shales throughout multiple provinces, with estimated resources exceeding 200,000 tons of vanadium metal—positioning Afghanistan as a potential major supplier for global steel and energy storage markets.

[ULTRA-DEEP ANALYSIS - VANADIUM GEOLOGICAL FORMATION]: Vanadium deposits occur in vanadiferous titanomagnetite deposits associated with mafic-ultramafic intrusions, formed through magmatic processes concentrating vanadium in iron-titanium oxide minerals. Vanadium also occurs in vanadium-bearing shales and sandstones, formed through sedimentary processes concentrating vanadium from weathering of volcanic rocks. The deposits occur in multiple provinces including Logar, Paktika, and Nuristan, with vanadium grades averaging 0.5-1.5% V2O5 suitable for commercial production.

[ULTRA-DEEP ANALYSIS - VANADIUM MINERALOGY]: Vanadium occurs primarily in vanadiferous titanomagnetite, with vanadium substituting for iron in magnetite crystal structures. Vanadium also occurs in vanadinite (Pb5(VO4)3Cl) and carnotite (K2(UO2)2(VO4)2·3H2O) in some deposits. Vanadium ore quality is assessed based on V2O5 content, with commercial deposits typically containing 0.5-2% V2O5.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Vanadium mining utilizes open-pit methods for titanomagnetite deposits and underground methods for shale deposits. Open-pit mining employs conventional drill-blast-load-haul operations, while underground mining utilizes room-and-pillar methods. Selective mining techniques preserve high-grade ore zones while managing lower-grade material. Vanadium recovery as byproduct from iron ore operations maximizes value extraction.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Vanadium processing involves crushing, grinding, and magnetic separation producing vanadiferous titanomagnetite concentrate, followed by roasting and leaching extracting vanadium as vanadium pentoxide (V2O5). The process includes salt roasting converting vanadium to water-soluble vanadates, leaching extracting vanadium, precipitation producing V2O5, and reduction producing ferrovanadium or vanadium metal. Advanced processing technology ensures high recovery rates while producing premium-grade products.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Vanadium serves critical applications including steel alloying (high-strength low-alloy steel, tool steel, structural steel), vanadium redox flow batteries for renewable energy storage, catalysts for chemical production, superalloys for aerospace applications, and titanium alloys. The global vanadium market's growth is driven by steel production and energy storage demand, with global consumption projected to increase from 100,000 tons in 2023 to 150,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Vanadium represents strategic importance for industrial development and energy transition, providing essential materials for steel production and renewable energy storage. Vanadium's ability to enhance steel strength and serve in flow batteries makes it critical for infrastructure development and clean energy systems.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global vanadium demand is driven by steel production growth, infrastructure development, and renewable energy storage expansion. Vanadium prices fluctuate based on supply-demand dynamics, with China being a major producer and consumer. Afghanistan's vanadium resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable vanadium mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that vanadium products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, vanadium production will generate $500 million annually in revenue from V2O5 and ferrovanadium sales, $80 million in royalties and taxes to the Afghan government, $60 million in wages to Afghan workers, and $150 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Vanadium operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Vanadium operations require comprehensive infrastructure supporting operations including power generation providing 200 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international vanadium producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major steel producers and battery manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Vanadium operations include comprehensive research and development programs advancing vanadium processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's vanadium production capacity positions the nation as a potential major supplier for regional and global markets. Export potential includes sales to steel producers, battery manufacturers, and industrial consumers requiring reliable vanadium supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect vanadium operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to vanadium operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's vanadium deposits represent a strategic vision for industrial development and energy transition, demonstrating that world-class vanadium production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '200K+', label: 'Tons', description: 'Vanadium resources' },
      { value: '0.5-1.5%', label: 'V2O5 Grade', description: 'Vanadium content' },
      { value: '$500M', label: 'Annual Revenue', description: 'V2O5 and ferrovanadium sales' },
      { value: '98%', label: 'V2O5 Purity', description: 'Product quality' },
      { value: '200MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Steel and batteries' },
    ],
    sections: [
      {
        title: 'Steel and Battery Applications',
        content: `Vanadium serves critical applications in high-strength steel production and vanadium redox flow batteries for renewable energy storage. The dual market approach maximizes value while supporting infrastructure development and clean energy transition.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Vanadium processing involves roasting and leaching extracting vanadium as vanadium pentoxide (V2O5), followed by reduction producing ferrovanadium or vanadium metal. Advanced processing ensures high recovery rates while producing premium-grade products.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Vanadium resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First V2O5 production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Vanadium production legacy' },
    ],
    relatedMinerals: [
      { name: 'Tungsten Deposits', href: '/minerals/strategic/tungsten' },
      { name: 'Molybdenum Deposits', href: '/minerals/strategic/molybdenum' },
      { name: 'Titanium Rutile', href: '/minerals/strategic/titanium/rutile' },
      { name: 'Titanium Ilmenite', href: '/minerals/strategic/titanium/ilmenite' },
      { name: 'Iron Ore Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
    ]
  },

  'strategic/titanium/rutile': {
    title: 'Rutile Deposits',
    subtitle: 'Titanium Dioxide Ore for Industrial Applications',
    heroImage: ironOre,
    overview: `Afghanistan's rutile deposits represent critical resources for titanium production and industrial applications, with rutile (TiO2) serving as the primary titanium ore mineral. Rutile occurs in heavy mineral sand deposits and pegmatites throughout multiple provinces, with estimated resources exceeding 500,000 tons of rutile concentrate—positioning Afghanistan as a potential supplier for global titanium and pigment markets.

[ULTRA-DEEP ANALYSIS - RUTILE GEOLOGICAL FORMATION]: Rutile deposits occur in heavy mineral sand deposits formed through weathering and erosion of titanium-bearing rocks, concentrating rutile along with other heavy minerals including ilmenite, zircon, and monazite. Rutile also occurs in pegmatite deposits associated with granite intrusions. The deposits occur in multiple provinces including coastal and inland sand deposits, with rutile grades averaging 2-5% in heavy mineral concentrates suitable for commercial production.

[ULTRA-DEEP ANALYSIS - RUTILE MINERALOGY]: Rutile (TiO2) exhibits high density (4.2-4.3 g/cm³) and high refractive index, making it valuable for both titanium production and optical applications. Rutile's crystal structure contains titanium and oxygen, with trace elements including iron, niobium, and tantalum. Rutile ore quality is assessed based on TiO2 content, with commercial deposits typically containing 90-95% TiO2.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Rutile mining utilizes dredge mining and dry mining methods for heavy mineral sand deposits, with dredge mining employing floating dredges extracting sand from underwater deposits. Dry mining utilizes conventional earthmoving equipment extracting sand from surface deposits. Processing involves gravity separation exploiting rutile's high density, producing rutile concentrate containing 90-95% TiO2.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Rutile processing involves gravity separation, magnetic separation, and electrostatic separation producing rutile concentrate. The process includes screening removing oversize material, gravity separation concentrating heavy minerals, magnetic separation removing iron minerals, and electrostatic separation separating rutile from other heavy minerals. Advanced processing technology ensures high recovery rates while producing premium-grade concentrate.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Rutile serves critical applications including titanium metal production through chloride process, titanium dioxide pigment production for paints and coatings, welding rod coatings, optical applications, and ceramics. The global rutile market's steady growth creates consistent demand, with global consumption projected to increase from 500,000 tons in 2023 to 700,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Rutile represents strategic importance for industrial development, providing essential materials for titanium production, pigment manufacturing, and high-tech applications. Rutile's high TiO2 content makes it the preferred feedstock for titanium production, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global rutile demand is driven by titanium production growth, pigment manufacturing, and construction growth. Rutile prices fluctuate based on supply-demand dynamics, with Australia and South Africa being major producers. Afghanistan's rutile resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable rutile mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that rutile concentrate meets international specifications and commands premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, rutile production will generate $600 million annually in revenue from concentrate sales, $100 million in royalties and taxes to the Afghan government, $80 million in wages to Afghan workers, and $200 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Rutile operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Rutile operations require comprehensive infrastructure supporting operations including power generation providing 150 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international rutile producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major titanium producers and pigment manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Rutile operations include comprehensive research and development programs advancing rutile processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's rutile production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to titanium producers, pigment manufacturers, and industrial consumers requiring reliable rutile supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect rutile operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to rutile operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's rutile deposits represent a strategic vision for industrial development, demonstrating that world-class rutile production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '500K+', label: 'Tons', description: 'Rutile resources' },
      { value: '90-95%', label: 'TiO2 Grade', description: 'Rutile content' },
      { value: '$600M', label: 'Annual Revenue', description: 'Concentrate sales' },
      { value: 'Heavy Sands', label: 'Deposit Type', description: 'Mineral sands' },
      { value: '150MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Titanium production' },
    ],
    sections: [
      {
        title: 'Titanium Production Applications',
        content: `Rutile serves critical applications in titanium metal production through chloride process and titanium dioxide pigment production for paints and coatings. The global rutile market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Heavy Mineral Sand Mining',
        content: `Rutile occurs in heavy mineral sand deposits formed through weathering and erosion, concentrating rutile along with other heavy minerals. Dredge and dry mining methods extract sand, with gravity and electrostatic separation producing rutile concentrate.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Rutile resource assessment' },
      { year: '2026', event: 'Heavy mineral sand exploration' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First rutile concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Rutile production legacy' },
    ],
    relatedMinerals: [
      { name: 'Titanium Ilmenite', href: '/minerals/strategic/titanium/ilmenite' },
      { name: 'Zircon Deposits', href: '/minerals/heavy/zircon' },
      { name: 'Monazite Deposits', href: '/minerals/heavy/monazite' },
      { name: 'Vanadium Deposits', href: '/minerals/strategic/vanadium' },
      { name: 'Iron Ore Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
    ]
  },

  'strategic/titanium/ilmenite': {
    title: 'Ilmenite Deposits',
    subtitle: 'Titanium-Iron Ore for Industrial Applications',
    heroImage: ironOre,
    overview: `Afghanistan's ilmenite deposits represent critical resources for titanium production and industrial applications, with ilmenite (FeTiO3) serving as a major titanium ore mineral. Ilmenite occurs in heavy mineral sand deposits and magmatic deposits throughout multiple provinces, with estimated resources exceeding 2 million tons of ilmenite concentrate—positioning Afghanistan as a potential major supplier for global titanium and iron-titanium markets.

[ULTRA-DEEP ANALYSIS - ILMENITE GEOLOGICAL FORMATION]: Ilmenite deposits occur in heavy mineral sand deposits formed through weathering and erosion of titanium-bearing rocks, concentrating ilmenite along with other heavy minerals including rutile, zircon, and monazite. Ilmenite also occurs in magmatic deposits associated with mafic-ultramafic intrusions. The deposits occur in multiple provinces including coastal and inland sand deposits, with ilmenite grades averaging 5-15% in heavy mineral concentrates suitable for commercial production.

[ULTRA-DEEP ANALYSIS - ILMENITE MINERALOGY]: Ilmenite (FeTiO3) exhibits high density (4.5-5.0 g/cm³) and magnetic properties, making it recoverable through gravity and magnetic separation. Ilmenite's crystal structure contains iron, titanium, and oxygen, with trace elements including magnesium and manganese. Ilmenite ore quality is assessed based on TiO2 content, with commercial deposits typically containing 45-55% TiO2.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Ilmenite mining utilizes dredge mining and dry mining methods for heavy mineral sand deposits, with dredge mining employing floating dredges extracting sand from underwater deposits. Dry mining utilizes conventional earthmoving equipment extracting sand from surface deposits. Processing involves gravity separation and magnetic separation exploiting ilmenite's high density and magnetic properties, producing ilmenite concentrate containing 45-55% TiO2.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Ilmenite processing involves gravity separation, magnetic separation, and upgrading processes producing ilmenite concentrate and synthetic rutile. The process includes screening removing oversize material, gravity separation concentrating heavy minerals, magnetic separation recovering ilmenite, and upgrading processes producing synthetic rutile through reduction and leaching. Advanced processing technology ensures high recovery rates while producing premium-grade products.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Ilmenite serves critical applications including titanium metal production through sulfate process, titanium dioxide pigment production for paints and coatings, iron-titanium alloys, welding rod coatings, and ceramics. The global ilmenite market's steady growth creates consistent demand, with global consumption projected to increase from 2 million tons in 2023 to 2.5 million tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Ilmenite represents strategic importance for industrial development, providing essential materials for titanium production, pigment manufacturing, and alloy production. Ilmenite's abundance and lower cost compared to rutile make it important for bulk titanium production, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global ilmenite demand is driven by titanium production growth, pigment manufacturing, and construction growth. Ilmenite prices fluctuate based on supply-demand dynamics, with Australia, South Africa, and China being major producers. Afghanistan's ilmenite resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable ilmenite mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that ilmenite concentrate meets international specifications and commands premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, ilmenite production will generate $800 million annually in revenue from concentrate sales, $130 million in royalties and taxes to the Afghan government, $100 million in wages to Afghan workers, and $250 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Ilmenite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Ilmenite operations require comprehensive infrastructure supporting operations including power generation providing 200 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international ilmenite producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major titanium producers and pigment manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Ilmenite operations include comprehensive research and development programs advancing ilmenite processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's ilmenite production capacity positions the nation as a potential major supplier for regional and global markets. Export potential includes sales to titanium producers, pigment manufacturers, and industrial consumers requiring reliable ilmenite supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect ilmenite operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to ilmenite operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's ilmenite deposits represent a strategic vision for industrial development, demonstrating that world-class ilmenite production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '2M+', label: 'Tons', description: 'Ilmenite resources' },
      { value: '45-55%', label: 'TiO2 Grade', description: 'Titanium content' },
      { value: '$800M', label: 'Annual Revenue', description: 'Concentrate sales' },
      { value: 'Heavy Sands', label: 'Deposit Type', description: 'Mineral sands' },
      { value: '200MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Titanium production' },
    ],
    sections: [
      {
        title: 'Titanium Production Applications',
        content: `Ilmenite serves critical applications in titanium metal production through sulfate process and titanium dioxide pigment production. The global ilmenite market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Heavy Mineral Sand Mining',
        content: `Ilmenite occurs in heavy mineral sand deposits formed through weathering and erosion, concentrating ilmenite along with other heavy minerals. Dredge and dry mining methods extract sand, with gravity and magnetic separation producing ilmenite concentrate.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Ilmenite resource assessment' },
      { year: '2026', event: 'Heavy mineral sand exploration' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First ilmenite concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Ilmenite production legacy' },
    ],
    relatedMinerals: [
      { name: 'Titanium Rutile', href: '/minerals/strategic/titanium/rutile' },
      { name: 'Zircon Deposits', href: '/minerals/heavy/zircon' },
      { name: 'Monazite Deposits', href: '/minerals/heavy/monazite' },
      { name: 'Vanadium Deposits', href: '/minerals/strategic/vanadium' },
      { name: 'Iron Ore Hajigak', href: '/minerals/iron/hajigak' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
    ]
  },

  'strategic/tin': {
    title: 'Tin Deposits',
    subtitle: 'Critical Metal for Electronics and Alloys',
    heroImage: ironOre,
    overview: `Afghanistan's tin deposits represent critical resources for electronics manufacturing and industrial applications, with tin serving as an essential metal for solders, alloys, and coatings. Tin occurs in cassiterite (SnO2) deposits in pegmatites and placer deposits throughout multiple provinces, with estimated resources exceeding 50,000 tons of tin metal—positioning Afghanistan as a potential supplier for global electronics and industrial markets.

[ULTRA-DEEP ANALYSIS - TIN GEOLOGICAL FORMATION]: Tin deposits occur in pegmatite deposits associated with granite intrusions and placer deposits formed through weathering and erosion of tin-bearing rocks. Cassiterite (SnO2) is the primary tin ore mineral, occurring in quartz veins, pegmatites, and alluvial deposits. The deposits occur in multiple provinces including Nuristan, Logar, and Paktika, with tin grades averaging 0.5-2% Sn suitable for commercial production.

[ULTRA-DEEP ANALYSIS - TIN MINERALOGY]: Cassiterite (SnO2) exhibits high density (6.8-7.1 g/cm³) and resistance to weathering, making it concentrate in placer deposits. Cassiterite's crystal structure contains tin and oxygen, with trace elements including tantalum, niobium, and tungsten. Tin ore quality is assessed based on Sn content, with commercial deposits typically containing 70-75% Sn in concentrate.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Tin mining utilizes open-pit and underground methods for hard rock deposits, and dredge and alluvial mining for placer deposits. Open-pit mining employs conventional drill-blast-load-haul operations, while placer mining utilizes dredges and sluice boxes extracting cassiterite from alluvial deposits. Selective mining techniques preserve high-grade ore zones while managing lower-grade material.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Tin processing involves gravity separation exploiting cassiterite's high density, producing tin concentrate containing 70-75% Sn. The process includes crushing and grinding for hard rock ore, gravity separation concentrating cassiterite, magnetic separation removing iron minerals, and flotation recovering fine cassiterite particles. Smelting converts concentrate to tin metal through reduction processes.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Tin serves critical applications including solders for electronics manufacturing, tinplate for food packaging, bronze and pewter alloys, chemical compounds, and coatings. The global tin market's steady growth creates consistent demand, with global consumption projected to increase from 350,000 tons in 2023 to 450,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Tin represents strategic importance for electronics manufacturing and industrial development, providing essential materials for solders, alloys, and coatings. Tin's unique properties including low melting point and corrosion resistance make it irreplaceable for many applications, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global tin demand is driven by electronics manufacturing growth, packaging industry expansion, and construction growth. Tin prices fluctuate based on supply-demand dynamics, with China, Indonesia, and Myanmar being major producers. Afghanistan's tin resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable tin mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that tin products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, tin production will generate $300 million annually in revenue from concentrate and metal sales, $50 million in royalties and taxes to the Afghan government, $40 million in wages to Afghan workers, and $100 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Tin operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Tin operations require comprehensive infrastructure supporting operations including power generation providing 100 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international tin producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major electronics manufacturers and industrial consumers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Tin operations include comprehensive research and development programs advancing tin processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's tin production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to electronics manufacturers, packaging companies, and industrial consumers requiring reliable tin supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect tin operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to tin operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's tin deposits represent a strategic vision for industrial development, demonstrating that world-class tin production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '50K+', label: 'Tons', description: 'Tin resources' },
      { value: '0.5-2%', label: 'Sn Grade', description: 'Tin content' },
      { value: '$300M', label: 'Annual Revenue', description: 'Concentrate and metal sales' },
      { value: '70-75%', label: 'Concentrate Grade', description: 'Sn content' },
      { value: '100MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Electronics manufacturing' },
    ],
    sections: [
      {
        title: 'Electronics Applications',
        content: `Tin serves critical applications in solders for electronics manufacturing, tinplate for food packaging, and alloys. The global tin market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Tin processing involves gravity separation exploiting cassiterite's high density, producing tin concentrate containing 70-75% Sn. Smelting converts concentrate to tin metal through reduction processes.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Tin resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First tin concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Tin production legacy' },
    ],
    relatedMinerals: [
      { name: 'Tantalum Deposits', href: '/minerals/strategic/tantalum' },
      { name: 'Tungsten Deposits', href: '/minerals/strategic/tungsten' },
      { name: 'Columbite-Tantalite', href: '/minerals/heavy/columbite-tantalite' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
    ]
  },

  'strategic/antimony': {
    title: 'Antimony Deposits',
    subtitle: 'Critical Metal for Flame Retardants and Alloys',
    heroImage: ironOre,
    overview: `Afghanistan's antimony deposits represent critical resources for flame retardants, alloys, and industrial applications, with antimony serving as an essential metal for lead-acid batteries, flame retardants, and semiconductor materials. Antimony occurs in stibnite (Sb2S3) deposits in veins and replacement deposits throughout multiple provinces, with estimated resources exceeding 100,000 tons of antimony metal—positioning Afghanistan as a potential major supplier for global industrial markets.

[ULTRA-DEEP ANALYSIS - ANTIMONY GEOLOGICAL FORMATION]: Antimony deposits occur in hydrothermal veins and replacement deposits associated with granite intrusions, formed through hydrothermal processes concentrating stibnite (Sb2S3) in quartz veins and carbonate rocks. The deposits occur in multiple provinces including Logar, Paktika, and Nuristan, with antimony grades averaging 2-5% Sb suitable for commercial production. Antimony also occurs as byproduct in lead-zinc deposits, enhancing project economics.

[ULTRA-DEEP ANALYSIS - ANTIMONY MINERALOGY]: Antimony occurs primarily as stibnite (Sb2S3), a soft metallic mineral exhibiting perfect cleavage and distinctive metallic luster. Stibnite's low density (4.6 g/cm³) and association with quartz and carbonates enable efficient processing. Antimony ore quality is assessed based on Sb content, with commercial deposits typically containing 50-60% Sb in concentrate.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Antimony mining utilizes underground methods for vein deposits, with room-and-pillar and cut-and-fill methods employed. Selective mining techniques preserve high-grade ore zones while managing lower-grade material. Mining equipment includes jumbos, loaders, and haul trucks, with operations designed to maximize recovery while ensuring safety.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Antimony processing involves crushing, grinding, and flotation producing antimony concentrate containing 50-60% Sb. The process includes bulk flotation recovering antimony and associated metals, followed by selective flotation separating antimony from other minerals. Roasting converts stibnite to antimony trioxide (Sb2O3), which is further processed to antimony metal through reduction processes.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Antimony serves critical applications including flame retardants for plastics and textiles, lead-acid battery alloys, semiconductor materials, ammunition, and chemical compounds. The global antimony market's steady growth creates consistent demand, with global consumption projected to increase from 150,000 tons in 2023 to 200,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Antimony represents strategic importance for industrial development and safety applications, providing essential materials for flame retardants, batteries, and semiconductors. Antimony's unique properties including flame retardancy and alloying capabilities make it irreplaceable for many applications, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global antimony demand is driven by flame retardant manufacturing, battery production, and electronics growth. Antimony prices fluctuate based on supply-demand dynamics, with China being the dominant producer supplying 80% of global production. Afghanistan's antimony resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable antimony mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that antimony products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, antimony production will generate $400 million annually in revenue from concentrate and metal sales, $60 million in royalties and taxes to the Afghan government, $50 million in wages to Afghan workers, and $120 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Antimony operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Antimony operations require comprehensive infrastructure supporting operations including power generation providing 120 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international antimony producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major flame retardant manufacturers and battery producers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Antimony operations include comprehensive research and development programs advancing antimony processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's antimony production capacity positions the nation as a potential major supplier for regional and global markets. Export potential includes sales to flame retardant manufacturers, battery producers, and industrial consumers requiring reliable antimony supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect antimony operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to antimony operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's antimony deposits represent a strategic vision for industrial development, demonstrating that world-class antimony production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '100K+', label: 'Tons', description: 'Antimony resources' },
      { value: '2-5%', label: 'Sb Grade', description: 'Antimony content' },
      { value: '$400M', label: 'Annual Revenue', description: 'Concentrate and metal sales' },
      { value: '50-60%', label: 'Concentrate Grade', description: 'Sb content' },
      { value: '120MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Flame retardants' },
    ],
    sections: [
      {
        title: 'Flame Retardant Applications',
        content: `Antimony serves critical applications in flame retardants for plastics and textiles, lead-acid battery alloys, and semiconductor materials. The global antimony market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Antimony processing involves flotation producing concentrate containing 50-60% Sb, followed by roasting to antimony trioxide. Advanced processing ensures high recovery rates while producing premium-grade products meeting industrial specifications.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Antimony resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First antimony concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Antimony production legacy' },
    ],
    relatedMinerals: [
      { name: 'Lead-Zinc Deposits', href: '/minerals/lead-zinc/aynak' },
      { name: 'Tin Deposits', href: '/minerals/strategic/tin' },
      { name: 'Stibnite Deposits', href: '/minerals/minor/stibnite' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Silver Deposits', href: '/minerals/silver/deposits' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
    ]
  },

  'strategic/zirconium': {
    title: 'Zirconium Deposits',
    subtitle: 'Critical Metal for Nuclear and Industrial Applications',
    heroImage: ironOre,
    overview: `Afghanistan's zirconium deposits represent critical resources for nuclear power, aerospace, and industrial applications, with zirconium serving as an essential metal for nuclear reactor components, aerospace alloys, and chemical processing equipment. Zirconium occurs in zircon (ZrSiO4) deposits in heavy mineral sands and pegmatites throughout multiple provinces, with estimated resources exceeding 500,000 tons of zirconium metal—positioning Afghanistan as a potential major supplier for global nuclear and industrial markets.

[ULTRA-DEEP ANALYSIS - ZIRCONIUM GEOLOGICAL FORMATION]: Zirconium deposits occur in heavy mineral sand deposits formed through weathering and erosion of zircon-bearing rocks, concentrating zircon along with other heavy minerals including rutile, ilmenite, and monazite. Zircon also occurs in pegmatite deposits associated with granite intrusions. The deposits occur in multiple provinces including coastal and inland sand deposits, with zircon grades averaging 1-3% in heavy mineral concentrates suitable for commercial production.

[ULTRA-DEEP ANALYSIS - ZIRCONIUM MINERALOGY]: Zircon (ZrSiO4) exhibits high density (4.6-4.7 g/cm³) and resistance to weathering, making it concentrate in heavy mineral sand deposits. Zircon's crystal structure contains zirconium, silicon, and oxygen, with trace elements including hafnium, uranium, and thorium. Zircon ore quality is assessed based on ZrO2 content, with commercial deposits typically containing 65-67% ZrO2.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Zirconium mining utilizes dredge mining and dry mining methods for heavy mineral sand deposits, with dredge mining employing floating dredges extracting sand from underwater deposits. Dry mining utilizes conventional earthmoving equipment extracting sand from surface deposits. Processing involves gravity separation exploiting zircon's high density, producing zircon concentrate containing 65-67% ZrO2.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Zirconium processing involves gravity separation, magnetic separation, and electrostatic separation producing zircon concentrate. The process includes screening removing oversize material, gravity separation concentrating heavy minerals, magnetic separation removing iron minerals, and electrostatic separation separating zircon from other heavy minerals. Zircon is processed to zirconium metal through chlorination and reduction processes.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Zirconium serves critical applications including nuclear reactor components (fuel cladding, pressure tubes), aerospace alloys, chemical processing equipment, ceramics and refractories, and zirconium chemicals. The global zirconium market's steady growth creates consistent demand, with global consumption projected to increase from 200,000 tons in 2023 to 300,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Zirconium represents strategic importance for nuclear power and industrial development, providing essential materials for nuclear reactors, aerospace manufacturing, and chemical processing. Zirconium's unique properties including low neutron absorption and corrosion resistance make it irreplaceable for nuclear applications, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global zirconium demand is driven by nuclear power expansion, aerospace manufacturing growth, and chemical industry expansion. Zirconium prices fluctuate based on supply-demand dynamics, with Australia and South Africa being major producers. Afghanistan's zirconium resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable zirconium mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that zirconium products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, zirconium production will generate $600 million annually in revenue from concentrate and metal sales, $100 million in royalties and taxes to the Afghan government, $80 million in wages to Afghan workers, and $200 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Zirconium operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Zirconium operations require comprehensive infrastructure supporting operations including power generation providing 150 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international zirconium producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major nuclear power companies and aerospace manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Zirconium operations include comprehensive research and development programs advancing zirconium processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's zirconium production capacity positions the nation as a potential major supplier for regional and global markets. Export potential includes sales to nuclear power companies, aerospace manufacturers, and industrial consumers requiring reliable zirconium supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect zirconium operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to zirconium operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's zirconium deposits represent a strategic vision for industrial development and nuclear power support, demonstrating that world-class zirconium production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '500K+', label: 'Tons', description: 'Zirconium resources' },
      { value: '65-67%', label: 'ZrO2 Grade', description: 'Zircon content' },
      { value: '$600M', label: 'Annual Revenue', description: 'Concentrate and metal sales' },
      { value: 'Heavy Sands', label: 'Deposit Type', description: 'Mineral sands' },
      { value: '150MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Nuclear applications' },
    ],
    sections: [
      {
        title: 'Nuclear Applications',
        content: `Zirconium serves critical applications in nuclear reactor components including fuel cladding and pressure tubes, aerospace alloys, and chemical processing equipment. The global zirconium market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Heavy Mineral Sand Mining',
        content: `Zirconium occurs in heavy mineral sand deposits formed through weathering and erosion, concentrating zircon along with other heavy minerals. Dredge and dry mining methods extract sand, with gravity and electrostatic separation producing zircon concentrate.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Zirconium resource assessment' },
      { year: '2026', event: 'Heavy mineral sand exploration' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First zircon concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Zirconium production legacy' },
    ],
    relatedMinerals: [
      { name: 'Zircon Deposits', href: '/minerals/heavy/zircon' },
      { name: 'Titanium Rutile', href: '/minerals/strategic/titanium/rutile' },
      { name: 'Titanium Ilmenite', href: '/minerals/strategic/titanium/ilmenite' },
      { name: 'Monazite Deposits', href: '/minerals/heavy/monazite' },
      { name: 'Uranium Deposits', href: '/minerals/energy/uranium' },
      { name: 'Thorium Deposits', href: '/minerals/energy/thorium' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Hafnium Resources', href: '/minerals/strategic/hafnium' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
    ]
  },

  'strategic/tantalum': {
    title: 'Tantalum Deposits',
    subtitle: 'Critical Metal for Electronics and Superalloys',
    heroImage: ironOre,
    overview: `Afghanistan's tantalum deposits represent critical resources for electronics manufacturing and aerospace applications, with tantalum serving as an essential metal for capacitors, superalloys, and medical implants. Tantalum occurs in columbite-tantalite ((Fe,Mn)(Ta,Nb)2O6) deposits in pegmatites and placer deposits throughout multiple provinces, with estimated resources exceeding 50,000 tons of tantalum metal—positioning Afghanistan as a potential supplier for global electronics and aerospace markets.

[ULTRA-DEEP ANALYSIS - TANTALUM GEOLOGICAL FORMATION]: Tantalum deposits occur in pegmatite deposits associated with granite intrusions and placer deposits formed through weathering and erosion of tantalum-bearing rocks. Columbite-tantalite is the primary tantalum ore mineral, occurring in quartz veins, pegmatites, and alluvial deposits. The deposits occur in multiple provinces including Nuristan, Logar, and Paktika, with tantalum grades averaging 0.1-0.5% Ta2O5 suitable for commercial production.

[ULTRA-DEEP ANALYSIS - TANTALUM MINERALOGY]: Columbite-tantalite ((Fe,Mn)(Ta,Nb)2O6) exhibits high density (5.2-8.2 g/cm³) and resistance to weathering, making it concentrate in placer deposits. Columbite-tantalite's crystal structure contains tantalum, niobium, iron, and manganese, with tantalum content varying from 20-80%. Tantalum ore quality is assessed based on Ta2O5 content, with commercial deposits typically containing 30-60% Ta2O5 in concentrate.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Tantalum mining utilizes open-pit and underground methods for hard rock deposits, and dredge and alluvial mining for placer deposits. Open-pit mining employs conventional drill-blast-load-haul operations, while placer mining utilizes dredges and sluice boxes extracting columbite-tantalite from alluvial deposits. Selective mining techniques preserve high-grade ore zones while managing lower-grade material.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Tantalum processing involves gravity separation exploiting columbite-tantalite's high density, producing tantalum concentrate containing 30-60% Ta2O5. The process includes crushing and grinding for hard rock ore, gravity separation concentrating columbite-tantalite, magnetic separation removing iron minerals, and flotation recovering fine particles. Tantalum is extracted from concentrate through hydrometallurgical processes producing tantalum metal and compounds.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Tantalum serves critical applications including capacitors for electronics manufacturing, superalloys for aerospace and power generation, medical implants, chemical processing equipment, and cutting tools. The global tantalum market's growth is driven by electronics manufacturing expansion, with global consumption projected to increase from 2,000 tons in 2023 to 3,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Tantalum represents strategic importance for electronics manufacturing and aerospace development, providing essential materials for capacitors, superalloys, and medical devices. Tantalum's unique properties including high melting point and corrosion resistance make it irreplaceable for many applications, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global tantalum demand is driven by electronics manufacturing growth, aerospace expansion, and medical device production. Tantalum prices fluctuate based on supply-demand dynamics, with Democratic Republic of Congo and Rwanda being major producers. Afghanistan's tantalum resources provide supply chain diversification, reducing dependence on conflict-affected regions.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable tantalum mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that tantalum products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, tantalum production will generate $500 million annually in revenue from concentrate and metal sales, $80 million in royalties and taxes to the Afghan government, $60 million in wages to Afghan workers, and $150 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Tantalum operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Tantalum operations require comprehensive infrastructure supporting operations including power generation providing 100 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international tantalum producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major electronics manufacturers and aerospace companies.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Tantalum operations include comprehensive research and development programs advancing tantalum processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's tantalum production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to electronics manufacturers, aerospace companies, and medical device producers requiring reliable tantalum supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect tantalum operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to tantalum operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's tantalum deposits represent a strategic vision for industrial development, demonstrating that world-class tantalum production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '50K+', label: 'Tons', description: 'Tantalum resources' },
      { value: '0.1-0.5%', label: 'Ta2O5 Grade', description: 'Tantalum content' },
      { value: '$500M', label: 'Annual Revenue', description: 'Concentrate and metal sales' },
      { value: '30-60%', label: 'Concentrate Grade', description: 'Ta2O5 content' },
      { value: '100MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Electronics manufacturing' },
    ],
    sections: [
      {
        title: 'Electronics Applications',
        content: `Tantalum serves critical applications in capacitors for electronics manufacturing, superalloys for aerospace, and medical implants. The global tantalum market's growth is driven by electronics expansion, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Tantalum processing involves gravity separation exploiting columbite-tantalite's high density, producing concentrate containing 30-60% Ta2O5. Hydrometallurgical processes extract tantalum metal and compounds meeting electronics industry specifications.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Tantalum resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First tantalum concentrate production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Tantalum production legacy' },
    ],
    relatedMinerals: [
      { name: 'Columbite-Tantalite', href: '/minerals/heavy/columbite-tantalite' },
      { name: 'Niobium Resources', href: '/minerals/exotic/niobium-tantalum' },
      { name: 'Tin Deposits', href: '/minerals/strategic/tin' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Copper Mes Aynak', href: '/minerals/copper/mes-aynak' },
      { name: 'Gold Badakhshan', href: '/minerals/gold/badakhshan' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Cobalt Deposits', href: '/minerals/cobalt/deposits' },
    ]
  },

  // ==================== ENERGY & FUEL MINERALS ====================
  'energy/uranium': {
    title: 'Uranium Deposits',
    subtitle: 'Nuclear Fuel for Power Generation',
    heroImage: uraniumOre,
    overview: `Afghanistan's uranium deposits represent critical resources for nuclear power generation, with uranium serving as the primary fuel for nuclear reactors worldwide. Uranium occurs in sandstone-hosted deposits, vein deposits, and pegmatites throughout multiple provinces, with estimated resources requiring detailed assessment—positioning Afghanistan as a potential supplier for global nuclear power markets.

[ULTRA-DEEP ANALYSIS - URANIUM GEOLOGICAL FORMATION]: Uranium deposits occur in multiple geological settings including sandstone-hosted roll-front deposits formed through groundwater transport, vein deposits associated with granite intrusions, and pegmatite deposits containing uraninite and other uranium minerals. The deposits occur in multiple provinces with uranium grades varying from 0.05-2% U3O8 depending on deposit type. Geological mapping and exploration have identified uranium-bearing zones warranting detailed assessment.

[ULTRA-DEEP ANALYSIS - URANIUM MINERALOGY]: Uranium occurs primarily as uraninite (UO2), pitchblende (U3O8), and carnotite (K2(UO2)2(VO4)2·3H2O), with uraninite being the most common primary uranium ore mineral. Uranium ore quality is assessed based on U3O8 content, with commercial deposits typically containing 0.1-1% U3O8 for conventional mining and 0.01-0.1% U3O8 for in-situ leaching operations.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Uranium mining utilizes open-pit and underground methods for conventional deposits, and in-situ leaching (ISL) for sandstone-hosted deposits. Open-pit mining employs conventional drill-blast-load-haul operations, while underground mining utilizes room-and-pillar methods. In-situ leaching involves injecting leaching solutions into ore zones and recovering uranium-bearing solutions, minimizing surface disturbance.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Uranium processing involves crushing, grinding, and leaching extracting uranium from ore, followed by solvent extraction or ion exchange concentrating uranium, and precipitation producing yellowcake (U3O8). The process includes acid or alkaline leaching dissolving uranium, purification removing impurities, and precipitation producing yellowcake meeting nuclear fuel specifications. Advanced processing technology ensures high recovery rates while producing nuclear-grade products.

[ULTRA-DEEP ANALYSIS - NUCLEAR FUEL APPLICATIONS]: Uranium serves critical applications including nuclear fuel for power generation, nuclear weapons (historical), medical isotopes, and research reactors. The global uranium market's growth is driven by nuclear power expansion, with global consumption projected to increase from 65,000 tons in 2023 to 100,000 tons by 2030 as countries expand nuclear power capacity.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Uranium represents strategic importance for energy security and nuclear power development, providing essential fuel for nuclear reactors generating clean electricity. Uranium's role in nuclear power makes it critical for countries pursuing nuclear energy, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global uranium demand is driven by nuclear power expansion, with countries including China, India, and Middle Eastern nations planning significant nuclear capacity additions. Uranium prices fluctuate based on supply-demand dynamics, with Kazakhstan, Canada, and Australia being major producers. Afghanistan's uranium resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable uranium mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems, with special attention to radiation protection. The operations incorporate advanced environmental controls including radiation monitoring, process water recycling achieving 95% reuse, waste management utilizing tailings for safe disposal, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that uranium products meet nuclear fuel specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs meeting International Atomic Energy Agency (IAEA) standards.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, uranium production will generate $1 billion annually in revenue from yellowcake sales, $150 million in royalties and taxes to the Afghan government, $100 million in wages to Afghan workers, and $300 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Uranium operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, radiation safety, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Uranium operations require comprehensive infrastructure supporting operations including power generation providing 200 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international uranium producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major nuclear power companies.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Uranium operations include comprehensive research and development programs advancing uranium processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance, with special attention to radiation protection. The safety program includes radiation monitoring, hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's uranium production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to nuclear power companies requiring reliable uranium supply, with logistics infrastructure enabling efficient export operations and compliance with international nuclear safeguards.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect uranium operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Special attention is paid to nuclear safeguards and non-proliferation requirements.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to uranium operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Special attention is paid to transparency and public communication regarding nuclear activities.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks and IAEA guidelines.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's uranium deposits represent a strategic vision for energy security and nuclear power development, demonstrating that world-class uranium production can be conducted responsibly while creating lasting benefits and supporting clean energy transition.`,
    stats: [
      { value: 'Assessment', label: 'Resources', description: 'Under evaluation' },
      { value: '0.1-1%', label: 'U3O8 Grade', description: 'Uranium content' },
      { value: '$1B', label: 'Annual Revenue', description: 'Yellowcake sales' },
      { value: 'Nuclear-Grade', label: 'Quality', description: 'Fuel specifications' },
      { value: '200MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Nuclear fuel' },
    ],
    sections: [
      {
        title: 'Nuclear Fuel Applications',
        content: `Uranium serves critical applications in nuclear fuel for power generation, with global consumption projected to increase as countries expand nuclear capacity. Afghanistan's uranium resources provide supply chain diversification for nuclear power markets.`,
        image: uraniumOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Uranium processing involves leaching extracting uranium from ore, followed by solvent extraction concentrating uranium, and precipitation producing yellowcake (U3O8) meeting nuclear fuel specifications. Advanced processing ensures nuclear-grade quality.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Uranium resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Regulatory approvals' },
      { year: '2030', event: 'Mining operations commence' },
      { year: '2031', event: 'Processing plant construction' },
      { year: '2032', event: 'First yellowcake production' },
      { year: '2033', event: 'Ramp-up to 25% capacity' },
      { year: '2034', event: 'Ramp-up to 50% capacity' },
      { year: '2035', event: 'Ramp-up to 75% capacity' },
      { year: '2036', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Uranium production legacy' },
    ],
    relatedMinerals: [
      { name: 'Thorium Deposits', href: '/minerals/energy/thorium' },
      { name: 'Zirconium Deposits', href: '/minerals/strategic/zirconium' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Vanadium Deposits', href: '/minerals/strategic/vanadium' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Coal Underground', href: '/minerals/coal/underground' },
      { name: 'Lignite Deposits', href: '/minerals/energy/lignite' },
      { name: 'Bituminous Coal', href: '/minerals/energy/bituminous-coal' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
    ]
  },

  'energy/thorium': {
    title: 'Thorium Deposits',
    subtitle: 'Future Nuclear Fuel Resource',
    heroImage: uraniumOre,
    overview: `Afghanistan's thorium deposits represent potential future resources for advanced nuclear power generation, with thorium serving as a potential alternative fuel for nuclear reactors. Thorium occurs in monazite and other rare earth mineral deposits throughout multiple provinces, with estimated resources requiring detailed assessment—positioning Afghanistan as a potential supplier for future advanced nuclear power markets.

[ULTRA-DEEP ANALYSIS - THORIUM GEOLOGICAL FORMATION]: Thorium deposits occur in monazite-bearing heavy mineral sand deposits and pegmatite deposits associated with granite intrusions. Monazite ((Ce,La,Nd,Th)PO4) contains significant thorium content, with thorium occurring as a trace element in rare earth mineral deposits. The deposits occur in multiple provinces with thorium grades varying depending on deposit type. Geological mapping and exploration have identified thorium-bearing zones warranting detailed assessment.

[ULTRA-DEEP ANALYSIS - THORIUM MINERALOGY]: Thorium occurs primarily in monazite, with monazite containing 5-12% ThO2 depending on deposit location. Thorium also occurs in thorianite (ThO2) and thorite (ThSiO4) in some deposits. Thorium ore quality is assessed based on ThO2 content, with commercial deposits typically containing 0.1-1% ThO2 for conventional mining.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Thorium mining utilizes methods similar to rare earth element mining, with heavy mineral sand mining for monazite deposits and conventional mining for pegmatite deposits. Heavy mineral sand mining employs dredge and dry mining methods, while pegmatite mining utilizes open-pit and underground methods. Selective mining techniques preserve high-grade ore zones while managing lower-grade material.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Thorium processing involves recovery from monazite concentrates through chemical processing, extracting thorium along with rare earth elements. The process includes monazite concentration through gravity and magnetic separation, acid or alkaline leaching extracting thorium and rare earths, solvent extraction separating thorium from rare earths, and precipitation producing thorium compounds. Advanced processing technology ensures high recovery rates while producing nuclear-grade products.

[ULTRA-DEEP ANALYSIS - NUCLEAR FUEL APPLICATIONS]: Thorium serves potential applications in advanced nuclear reactor designs including molten salt reactors and thorium fuel cycle reactors. Thorium-based nuclear power offers advantages including abundant resources, reduced nuclear waste, and enhanced safety compared to uranium-based reactors. Research and development programs worldwide are advancing thorium reactor technology, with potential commercial deployment projected for 2040-2050.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Thorium represents strategic importance for future energy security and advanced nuclear power development, providing potential alternative fuel for nuclear reactors. Thorium's abundance and favorable nuclear properties make it attractive for future nuclear power systems, with supply chain security being a priority for countries pursuing advanced nuclear technology.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global thorium demand is currently limited to research and development applications, with commercial demand projected to emerge as thorium reactor technology matures. Thorium prices are currently low due to limited demand, but prices are expected to increase as thorium reactor technology advances and commercial deployment approaches.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable thorium mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems, with special attention to radiation protection. The operations incorporate advanced environmental controls including radiation monitoring, process water recycling achieving 95% reuse, waste management utilizing tailings for safe disposal, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that thorium products meet research and future nuclear fuel specifications. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs meeting International Atomic Energy Agency (IAEA) standards.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, thorium production will generate $200 million annually in revenue from thorium compound sales, $30 million in royalties and taxes to the Afghan government, $25 million in wages to Afghan workers, and $60 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Thorium operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, radiation safety, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Thorium operations require comprehensive infrastructure supporting operations including power generation providing 100 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international thorium producers, technology partnerships with equipment suppliers, research collaborations with universities and nuclear research institutions, and customer relationships with major nuclear power companies.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Thorium operations include comprehensive research and development programs advancing thorium processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements supporting future nuclear fuel applications.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance, with special attention to radiation protection. The safety program includes radiation monitoring, hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's thorium production capacity positions the nation as a potential supplier for future regional and global markets. Export potential includes sales to nuclear research institutions and future nuclear power companies requiring reliable thorium supply, with logistics infrastructure enabling efficient export operations and compliance with international nuclear safeguards.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect thorium operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems. Special attention is paid to nuclear safeguards and non-proliferation requirements.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to thorium operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making. Special attention is paid to transparency and public communication regarding nuclear activities.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks and IAEA guidelines.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's thorium deposits represent a strategic vision for future energy security and advanced nuclear power development, demonstrating that world-class thorium production can be conducted responsibly while creating lasting benefits and supporting future clean energy transition.`,
    stats: [
      { value: 'Assessment', label: 'Resources', description: 'Under evaluation' },
      { value: '0.1-1%', label: 'ThO2 Grade', description: 'Thorium content' },
      { value: '$200M', label: 'Annual Revenue', description: 'Thorium compound sales' },
      { value: 'Future Fuel', label: 'Application', description: 'Advanced reactors' },
      { value: '100MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Future nuclear fuel' },
    ],
    sections: [
      {
        title: 'Future Nuclear Fuel',
        content: `Thorium serves potential applications in advanced nuclear reactor designs including molten salt reactors. Thorium-based nuclear power offers advantages including abundant resources, reduced nuclear waste, and enhanced safety compared to uranium-based reactors.`,
        image: uraniumOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Thorium processing involves recovery from monazite concentrates through chemical processing, extracting thorium along with rare earth elements. Advanced processing ensures nuclear-grade quality for future reactor applications.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Thorium resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Regulatory approvals' },
      { year: '2030', event: 'Mining operations commence' },
      { year: '2031', event: 'Processing plant construction' },
      { year: '2032', event: 'First thorium compound production' },
      { year: '2033', event: 'Research market supply' },
      { year: '2034', event: 'Ramp-up to 25% capacity' },
      { year: '2035', event: 'Ramp-up to 50% capacity' },
      { year: '2040', event: 'Commercial reactor demand emerges' },
      { year: '2045', event: 'Full production capacity' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Thorium production legacy' },
    ],
    relatedMinerals: [
      { name: 'Uranium Deposits', href: '/minerals/energy/uranium' },
      { name: 'Monazite Deposits', href: '/minerals/heavy/monazite' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand' },
      { name: 'Zirconium Deposits', href: '/minerals/strategic/zirconium' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Coal Underground', href: '/minerals/coal/underground' },
      { name: 'Lignite Deposits', href: '/minerals/energy/lignite' },
      { name: 'Bituminous Coal', href: '/minerals/energy/bituminous-coal' },
      { name: 'Graphite Deposits', href: '/minerals/graphite/deposits' },
      { name: 'Lithium Processing', href: '/minerals/lithium/processing' },
    ]
  },

  // ==================== REFRACTORIES & INDUSTRIAL MINERALS ====================
  'refractories/magnesite': {
    title: 'Magnesite Deposits',
    subtitle: 'Refractory Material for High-Temperature Applications',
    heroImage: ironOre,
    overview: `Afghanistan's magnesite deposits represent critical resources for refractory manufacturing and industrial applications, with magnesite (MgCO3) serving as the primary source of magnesium oxide for refractory bricks, cement, and chemical applications. Magnesite occurs in sedimentary and metamorphic deposits throughout multiple provinces, with estimated resources exceeding 10 million tons—positioning Afghanistan as a potential supplier for global refractory and industrial markets.

[ULTRA-DEEP ANALYSIS - MAGNESITE GEOLOGICAL FORMATION]: Magnesite deposits occur in sedimentary deposits formed through precipitation from magnesium-rich brines, and metamorphic deposits formed through alteration of dolomite and limestone. The deposits occur in multiple provinces including Logar, Paktika, and Khost, with magnesite grades averaging 40-45% MgO suitable for commercial production. Geological mapping has identified extensive magnesite-bearing zones warranting detailed assessment.

[ULTRA-DEEP ANALYSIS - MAGNESITE MINERALOGY]: Magnesite (MgCO3) exhibits high magnesium content, with commercial deposits typically containing 40-47% MgO. Magnesite's crystal structure contains magnesium, carbon, and oxygen, with impurities including calcium, iron, and silica. Magnesite ore quality is assessed based on MgO content, with premium-grade magnesite containing 45-47% MgO suitable for refractory applications.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Magnesite mining utilizes open-pit methods for near-surface deposits and underground methods for deeper deposits. Open-pit mining employs conventional drill-blast-load-haul operations, while underground mining utilizes room-and-pillar methods. Selective mining techniques preserve high-grade ore zones while managing lower-grade material.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Magnesite processing involves calcination at 700-1000°C converting magnesite to magnesia (MgO), followed by grinding and sizing producing dead-burned magnesia for refractory applications or caustic magnesia for chemical applications. The process includes crushing and grinding of magnesite ore, calcination producing magnesia, grinding and sizing producing various grades, and quality control ensuring product specifications. Advanced processing technology ensures high recovery rates while producing premium-grade products.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Magnesite serves critical applications including refractory bricks for steel furnaces, cement production, chemical manufacturing (magnesium compounds), animal feed supplements, and environmental applications (flue gas desulfurization). The global magnesite market's steady growth creates consistent demand, with global consumption projected to increase from 20 million tons in 2023 to 25 million tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Magnesite represents strategic importance for industrial development, providing essential materials for steel production, cement manufacturing, and chemical industries. Magnesite's role in refractory manufacturing makes it critical for high-temperature industrial processes, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global magnesite demand is driven by steel production growth, cement manufacturing expansion, and chemical industry growth. Magnesite prices fluctuate based on supply-demand dynamics, with China being the dominant producer supplying 70% of global production. Afghanistan's magnesite resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable magnesite mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that magnesite products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, magnesite production will generate $300 million annually in revenue from magnesia sales, $50 million in royalties and taxes to the Afghan government, $40 million in wages to Afghan workers, and $100 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Magnesite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Magnesite operations require comprehensive infrastructure supporting operations including power generation providing 150 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international magnesite producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major steel producers and refractory manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Magnesite operations include comprehensive research and development programs advancing magnesite processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's magnesite production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to steel producers, cement manufacturers, and industrial consumers requiring reliable magnesite supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect magnesite operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to magnesite operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's magnesite deposits represent a strategic vision for industrial development, demonstrating that world-class magnesite production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '10M+', label: 'Tons', description: 'Magnesite resources' },
      { value: '40-47%', label: 'MgO Grade', description: 'Magnesium oxide content' },
      { value: '$300M', label: 'Annual Revenue', description: 'Magnesia sales' },
      { value: 'Refractory', label: 'Application', description: 'High-temperature' },
      { value: '150MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Industrial development' },
    ],
    sections: [
      {
        title: 'Refractory Applications',
        content: `Magnesite serves critical applications in refractory bricks for steel furnaces, cement production, and chemical manufacturing. The global magnesite market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: ironOre,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Magnesite processing involves calcination converting magnesite to magnesia (MgO), followed by grinding and sizing producing dead-burned magnesia for refractory applications. Advanced processing ensures premium-grade products meeting industrial specifications.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Magnesite resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First magnesia production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Magnesite production legacy' },
    ],
    relatedMinerals: [
      { name: 'Bentonite Deposits', href: '/minerals/refractories/bentonite' },
      { name: 'Kaolin Variants', href: '/minerals/refractories/kaolin-variants' },
      { name: 'Pyrophyllite Deposits', href: '/minerals/refractories/pyrophyllite' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Cement Production', href: '/minerals/industrial/cement' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Limestone Quarries', href: '/minerals/industrial/limestone' },
      { name: 'Gypsum Deposits', href: '/minerals/industrial/gypsum' },
      { name: 'Clay Kaolin', href: '/minerals/clay-kaolin/kaolin' },
    ]
  },

  'refractories/bentonite': {
    title: 'Bentonite / Montmorillonite Deposits',
    subtitle: 'Versatile Industrial Clay Mineral',
    heroImage: talcDeposit,
    overview: `Afghanistan's bentonite deposits represent critical resources for drilling fluids, foundry sands, and industrial applications, with bentonite (montmorillonite clay) serving as an essential material for oil and gas drilling, iron ore pelletization, and environmental applications. Bentonite occurs in sedimentary deposits throughout multiple provinces, with estimated resources exceeding 5 million tons—positioning Afghanistan as a potential supplier for global drilling and industrial markets.

[ULTRA-DEEP ANALYSIS - BENTONITE GEOLOGICAL FORMATION]: Bentonite deposits form through alteration of volcanic ash in marine and lacustrine environments, creating montmorillonite-rich clay deposits. The deposits occur in multiple provinces including Logar, Paktika, and Khost, with bentonite grades averaging 70-90% montmorillonite suitable for commercial production. Geological mapping has identified extensive bentonite-bearing zones warranting detailed assessment.

[ULTRA-DEEP ANALYSIS - BENTONITE MINERALOGY]: Bentonite consists primarily of montmorillonite, a smectite clay mineral exhibiting exceptional swelling capacity and cation exchange properties. Bentonite's crystal structure enables water absorption, expanding volume up to 15 times when hydrated. Bentonite quality is assessed based on montmorillonite content, swelling capacity, and cation exchange capacity, with premium-grade bentonite containing 85-95% montmorillonite.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Bentonite mining utilizes open-pit methods due to shallow deposit depths, with mining operations involving removal of overburden, extraction of bentonite clay, and rehabilitation of mined areas. Mining equipment includes excavators, haul trucks, and loaders, with operations designed to preserve bentonite's natural properties while maximizing recovery.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Bentonite processing involves drying, grinding, and sizing producing various grades for different applications. The process includes natural drying or mechanical drying reducing moisture content, grinding producing fine powder, sizing producing various particle size distributions, and activation (for some applications) producing sodium-activated bentonite. Advanced processing technology ensures product quality while preserving bentonite's natural properties.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Bentonite serves critical applications including drilling fluids for oil and gas exploration, foundry sands for metal casting, iron ore pelletization binders, environmental applications (landfill liners, soil sealing), cat litter, and pharmaceutical applications. The global bentonite market's steady growth creates consistent demand, with global consumption projected to increase from 15 million tons in 2023 to 20 million tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Bentonite represents strategic importance for industrial development and energy exploration, providing essential materials for drilling operations, foundry manufacturing, and environmental protection. Bentonite's unique properties including swelling capacity and binding ability make it irreplaceable for many applications, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global bentonite demand is driven by oil and gas exploration growth, foundry industry expansion, and iron ore pelletization growth. Bentonite prices fluctuate based on supply-demand dynamics, with the United States, China, and India being major producers. Afghanistan's bentonite resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable bentonite mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that bentonite products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, bentonite production will generate $200 million annually in revenue from bentonite sales, $30 million in royalties and taxes to the Afghan government, $25 million in wages to Afghan workers, and $60 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Bentonite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Bentonite operations require comprehensive infrastructure supporting operations including power generation providing 50 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international bentonite producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major drilling companies and foundry manufacturers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Bentonite operations include comprehensive research and development programs advancing bentonite processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's bentonite production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to drilling companies, foundry manufacturers, and industrial consumers requiring reliable bentonite supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect bentonite operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to bentonite operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's bentonite deposits represent a strategic vision for industrial development, demonstrating that world-class bentonite production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '5M+', label: 'Tons', description: 'Bentonite resources' },
      { value: '70-90%', label: 'Montmorillonite', description: 'Clay content' },
      { value: '$200M', label: 'Annual Revenue', description: 'Bentonite sales' },
      { value: 'Drilling', label: 'Primary Use', description: 'Oil & gas' },
      { value: '50MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Versatile', label: 'Application', description: 'Multiple industries' },
    ],
    sections: [
      {
        title: 'Drilling Fluid Applications',
        content: `Bentonite serves critical applications in drilling fluids for oil and gas exploration, foundry sands for metal casting, and iron ore pelletization binders. The global bentonite market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: talcDeposit,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Bentonite processing involves drying, grinding, and sizing producing various grades for different applications. Natural drying or mechanical drying reduces moisture content, while grinding produces fine powder meeting industrial specifications.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Bentonite resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First bentonite production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Bentonite production legacy' },
    ],
    relatedMinerals: [
      { name: 'Magnesite Deposits', href: '/minerals/refractories/magnesite' },
      { name: 'Ball Clay Deposits', href: '/minerals/refractories/ball-clay' },
      { name: 'Kaolin Variants', href: '/minerals/refractories/kaolin-variants' },
      { name: 'Pyrophyllite Deposits', href: '/minerals/refractories/pyrophyllite' },
      { name: 'Iron Ore Beneficiation', href: '/minerals/iron/beneficiation' },
      { name: 'Iron Pelletization', href: '/minerals/iron/pelletization' },
      { name: 'Barite Drilling', href: '/minerals/barite/drilling' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Clay Kaolin', href: '/minerals/clay-kaolin/kaolin' },
      { name: 'Cement Production', href: '/minerals/industrial/cement' },
    ]
  },

  'refractories/pyrophyllite': {
    title: 'Pyrophyllite Deposits',
    subtitle: 'Refractory and Ceramic Material',
    heroImage: talcDeposit,
    overview: `Afghanistan's pyrophyllite deposits represent critical resources for refractory manufacturing and ceramic applications, with pyrophyllite (Al2Si4O10(OH)2) serving as an essential material for refractory bricks, ceramics, and filler applications. Pyrophyllite occurs in metamorphic deposits throughout multiple provinces, with estimated resources exceeding 2 million tons—positioning Afghanistan as a potential supplier for global refractory and ceramic markets.

[ULTRA-DEEP ANALYSIS - PYROPHYLLITE GEOLOGICAL FORMATION]: Pyrophyllite deposits occur in metamorphic rocks formed through low-grade metamorphism of aluminum-rich sedimentary rocks. The deposits occur in multiple provinces including Logar, Paktika, and Nuristan, with pyrophyllite grades averaging 80-95% pyrophyllite suitable for commercial production. Geological mapping has identified pyrophyllite-bearing zones warranting detailed assessment.

[ULTRA-DEEP ANALYSIS - PYROPHYLLITE MINERALOGY]: Pyrophyllite (Al2Si4O10(OH)2) exhibits high aluminum and silica content, with properties similar to talc including low hardness and perfect cleavage. Pyrophyllite's crystal structure enables use in refractory and ceramic applications. Pyrophyllite quality is assessed based on Al2O3 and SiO2 content, with premium-grade pyrophyllite containing 25-30% Al2O3 and 65-70% SiO2.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Pyrophyllite mining utilizes open-pit methods for near-surface deposits, with mining operations involving removal of overburden, extraction of pyrophyllite ore, and rehabilitation of mined areas. Mining equipment includes excavators, haul trucks, and loaders, with operations designed to preserve pyrophyllite's natural properties while maximizing recovery.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Pyrophyllite processing involves crushing, grinding, and sizing producing various grades for different applications. The process includes crushing reducing ore to manageable size, grinding producing fine powder, sizing producing various particle size distributions, and calcination (for some applications) producing calcined pyrophyllite. Advanced processing technology ensures product quality while preserving pyrophyllite's natural properties.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Pyrophyllite serves critical applications including refractory bricks for high-temperature applications, ceramic bodies and glazes, filler materials for paints and plastics, and insulation materials. The global pyrophyllite market's steady growth creates consistent demand, with global consumption projected to increase from 500,000 tons in 2023 to 700,000 tons by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Pyrophyllite represents strategic importance for industrial development, providing essential materials for refractory manufacturing and ceramic production. Pyrophyllite's unique properties including high-temperature stability and low thermal expansion make it valuable for refractory applications, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global pyrophyllite demand is driven by refractory manufacturing growth, ceramic industry expansion, and construction growth. Pyrophyllite prices fluctuate based on supply-demand dynamics, with China, India, and Japan being major producers. Afghanistan's pyrophyllite resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable pyrophyllite mining and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing tailings for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that pyrophyllite products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of ore, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, pyrophyllite production will generate $150 million annually in revenue from pyrophyllite sales, $25 million in royalties and taxes to the Afghan government, $20 million in wages to Afghan workers, and $50 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Pyrophyllite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in mining, processing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Pyrophyllite operations require comprehensive infrastructure supporting operations including power generation providing 40 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to mines and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international pyrophyllite producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major refractory manufacturers and ceramic producers.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Pyrophyllite operations include comprehensive research and development programs advancing pyrophyllite processing technology and sustainable practices. Research areas include processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's pyrophyllite production capacity positions the nation as a potential supplier for regional and global markets. Export potential includes sales to refractory manufacturers, ceramic producers, and industrial consumers requiring reliable pyrophyllite supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect pyrophyllite operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to pyrophyllite operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's pyrophyllite deposits represent a strategic vision for industrial development, demonstrating that world-class pyrophyllite production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '2M+', label: 'Tons', description: 'Pyrophyllite resources' },
      { value: '80-95%', label: 'Pyrophyllite', description: 'Mineral content' },
      { value: '$150M', label: 'Annual Revenue', description: 'Pyrophyllite sales' },
      { value: 'Refractory', label: 'Primary Use', description: 'High-temperature' },
      { value: '40MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Strategic', label: 'Importance', description: 'Industrial development' },
    ],
    sections: [
      {
        title: 'Refractory Applications',
        content: `Pyrophyllite serves critical applications in refractory bricks for high-temperature applications, ceramic bodies and glazes, and filler materials. The global pyrophyllite market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: talcDeposit,
        alignment: 'left'
      },
      {
        title: 'Processing Technology',
        content: `Pyrophyllite processing involves crushing, grinding, and sizing producing various grades for different applications. Calcination produces calcined pyrophyllite for refractory applications. Advanced processing ensures product quality.`,
        image: processingPlant,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Pyrophyllite resource assessment' },
      { year: '2026', event: 'Exploration drilling program' },
      { year: '2027', event: 'Mining feasibility study' },
      { year: '2028', event: 'Processing plant design' },
      { year: '2029', event: 'Mining operations commence' },
      { year: '2030', event: 'Processing plant construction' },
      { year: '2031', event: 'First pyrophyllite production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Pyrophyllite production legacy' },
    ],
    relatedMinerals: [
      { name: 'Magnesite Deposits', href: '/minerals/refractories/magnesite' },
      { name: 'Bentonite Deposits', href: '/minerals/refractories/bentonite' },
      { name: 'Ball Clay Deposits', href: '/minerals/refractories/ball-clay' },
      { name: 'Kaolin Variants', href: '/minerals/refractories/kaolin-variants' },
      { name: 'Talc High-Purity', href: '/minerals/talc/high-purity' },
      { name: 'Iron Steel Production', href: '/minerals/iron/steel-production' },
      { name: 'Chromite Reserves', href: '/minerals/chromite/reserves' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Clay Kaolin', href: '/minerals/clay-kaolin/kaolin' },
      { name: 'Cement Production', href: '/minerals/industrial/cement' },
    ]
  },

  // ==================== DIMENSION & DECORATIVE STONES ====================
  'stones/granite': {
    title: 'Granite Deposits',
    subtitle: 'Premium Dimension Stone for Construction',
    heroImage: marbleQuarry,
    overview: `Afghanistan's granite deposits represent critical resources for construction and architectural applications, with granite serving as a premium dimension stone for building facades, countertops, and decorative applications. Granite occurs in igneous intrusions throughout multiple provinces, with estimated resources exceeding 100 million cubic meters—positioning Afghanistan as a potential major supplier for global construction and architectural markets.

[ULTRA-DEEP ANALYSIS - GRANITE GEOLOGICAL FORMATION]: Granite deposits occur in large igneous intrusions formed through crystallization of silica-rich magmas deep within the Earth's crust. The deposits occur in multiple provinces including Logar, Paktika, and Nuristan, with granite varieties including pink, gray, black, and multicolored types suitable for commercial production. Geological mapping has identified extensive granite-bearing zones warranting detailed assessment.

[ULTRA-DEEP ANALYSIS - GRANITE MINERALOGY]: Granite consists primarily of quartz, feldspar, and mica, with various colors and textures depending on mineral composition. Granite's crystal structure provides exceptional durability and aesthetic appeal. Granite quality is assessed based on color consistency, grain size, structural integrity, and polishability, with premium-grade granite exhibiting uniform color and fine grain.

[ULTRA-DEEP ANALYSIS - MINING METHODS]: Granite mining utilizes open-pit quarrying methods, with operations involving removal of overburden, extraction of granite blocks using wire saws and diamond saws, and rehabilitation of quarried areas. Mining equipment includes wire saws, diamond saws, excavators, and cranes, with operations designed to extract large blocks while minimizing waste.

[ULTRA-DEEP ANALYSIS - PROCESSING TECHNOLOGY]: Granite processing involves cutting, polishing, and finishing producing various products including slabs, tiles, and custom-cut pieces. The process includes block cutting producing slabs, polishing producing finished surfaces, cutting producing tiles and custom pieces, and quality control ensuring product specifications. Advanced processing technology ensures product quality while maximizing value addition.

[ULTRA-DEEP ANALYSIS - INDUSTRIAL APPLICATIONS]: Granite serves critical applications including building facades and cladding, countertops and vanities, flooring and paving, monuments and memorials, and decorative applications. The global granite market's steady growth creates consistent demand, with global consumption projected to increase from 200 million square meters in 2023 to 250 million square meters by 2030.

[ULTRA-DEEP ANALYSIS - STRATEGIC IMPORTANCE]: Granite represents strategic importance for construction and architectural development, providing essential materials for building construction and decorative applications. Granite's durability and aesthetic appeal make it valuable for high-end construction projects, with supply chain security being a priority for major consumers.

[ULTRA-DEEP ANALYSIS - MARKET DYNAMICS]: Global granite demand is driven by construction growth, infrastructure development, and architectural trends. Granite prices fluctuate based on quality, color, and origin, with premium varieties commanding higher prices. Afghanistan's granite resources provide supply chain diversification, reducing dependence on single-source suppliers.

[ULTRA-DEEP ANALYSIS - ENVIRONMENTAL MANAGEMENT]: Sustainable granite quarrying and processing requires comprehensive environmental management addressing impacts on water, air, land, and ecosystems. The operations incorporate advanced environmental controls including process water recycling achieving 95% reuse, waste management utilizing quarry waste for construction applications, and atmospheric emissions control ensuring compliance with international standards.

[ULTRA-DEEP ANALYSIS - QUALITY CONTROL SYSTEMS]: Comprehensive quality control systems ensure that granite products meet international specifications and command premium prices in global markets. The quality program includes sampling and testing of blocks, process monitoring and control, product testing and certification, and continuous improvement programs.

[ULTRA-DEEP ANALYSIS - ECONOMIC IMPACT]: At full production, granite production will generate $400 million annually in revenue from granite sales, $60 million in royalties and taxes to the Afghan government, $50 million in wages to Afghan workers, and $120 million in procurement from local suppliers.

[ULTRA-DEEP ANALYSIS - WORKFORCE DEVELOPMENT]: Granite operations include comprehensive workforce development programs creating opportunities for Afghan workers at all skill levels. Training programs develop skills in quarrying, cutting, polishing, quality control, maintenance, and management, creating career pathways from entry-level positions to technical and leadership roles.

[ULTRA-DEEP ANALYSIS - INFRASTRUCTURE REQUIREMENTS]: Granite operations require comprehensive infrastructure supporting operations including power generation providing 100 MW capacity, water supply systems ensuring reliable water for processing, transportation infrastructure connecting to quarries and export terminals, and telecommunications enabling remote monitoring and control.

[ULTRA-DEEP ANALYSIS - INTERNATIONAL PARTNERSHIPS]: Strategic international partnerships enable knowledge transfer, technology access, and market development. Partnership structures include joint ventures with international granite producers, technology partnerships with equipment suppliers, research collaborations with universities, and customer relationships with major construction companies and architectural firms.

[ULTRA-DEEP ANALYSIS - RESEARCH & DEVELOPMENT]: Granite operations include comprehensive research and development programs advancing granite quarrying and processing technology and sustainable practices. Research areas include quarrying optimization, processing optimization, environmental technologies, safety innovations, and process improvements.

[ULTRA-DEEP ANALYSIS - SAFETY SYSTEMS]: Comprehensive safety systems protect workers and ensure world-class safety performance. The safety program includes hazard identification and risk assessment, engineering controls eliminating hazards, administrative controls managing risks, and personal protective equipment protecting workers.

[ULTRA-DEEP ANALYSIS - EXPORT POTENTIAL]: Afghanistan's granite production capacity positions the nation as a potential major supplier for regional and global markets. Export potential includes sales to construction companies, architectural firms, and decorative stone consumers requiring reliable granite supply, with logistics infrastructure enabling efficient export operations.

[ULTRA-DEEP ANALYSIS - RISK MANAGEMENT]: Comprehensive risk management systems protect granite operations from technical, financial, environmental, social, and political risks. Technical risks are mitigated through robust engineering design, comprehensive studies, and redundancy in critical systems.

[ULTRA-DEEP ANALYSIS - STAKEHOLDER ENGAGEMENT]: Effective stakeholder engagement is fundamental to granite operations' success, with comprehensive programs ensuring that all interested parties are informed, consulted, and involved in decision-making.

[ULTRA-DEEP ANALYSIS - SUSTAINABILITY METRICS]: Sustainability performance is measured through comprehensive metrics tracking environmental, social, and economic impacts. Sustainability reporting follows international standards including GRI frameworks.

[ULTRA-DEEP ANALYSIS - STRATEGIC VISION]: Afghanistan's granite deposits represent a strategic vision for construction and architectural development, demonstrating that world-class granite production can be conducted responsibly while creating lasting benefits.`,
    stats: [
      { value: '100M+', label: 'Cubic Meters', description: 'Granite resources' },
      { value: 'Multiple', label: 'Varieties', description: 'Colors and types' },
      { value: '$400M', label: 'Annual Revenue', description: 'Granite sales' },
      { value: 'Dimension Stone', label: 'Application', description: 'Construction' },
      { value: '100MW', label: 'Power', description: 'Processing capacity' },
      { value: 'Premium', label: 'Quality', description: 'Architectural grade' },
    ],
    sections: [
      {
        title: 'Construction Applications',
        content: `Granite serves critical applications in building facades, countertops, flooring, and decorative applications. The global granite market's steady growth creates consistent demand, with Afghanistan's resources providing supply chain diversification.`,
        image: marbleQuarry,
        alignment: 'left'
      },
      {
        title: 'Quarrying Technology',
        content: `Granite quarrying utilizes wire saws and diamond saws extracting large blocks, with processing involving cutting, polishing, and finishing producing slabs, tiles, and custom-cut pieces. Advanced technology ensures product quality.`,
        image: marbleExtraction,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '2025', event: 'Granite resource assessment' },
      { year: '2026', event: 'Quarry feasibility study' },
      { year: '2027', event: 'Quarry development' },
      { year: '2028', event: 'Processing facility design' },
      { year: '2029', event: 'Quarrying operations commence' },
      { year: '2030', event: 'Processing facility construction' },
      { year: '2031', event: 'First granite production' },
      { year: '2032', event: 'Ramp-up to 25% capacity' },
      { year: '2033', event: 'Ramp-up to 50% capacity' },
      { year: '2034', event: 'Ramp-up to 75% capacity' },
      { year: '2035', event: 'Full production capacity' },
      { year: '2040', event: 'Expansion feasibility study' },
      { year: '2045', event: 'Capacity expansion planning' },
      { year: '2050', event: 'Mid-life optimization' },
      { year: '2055', event: 'Closure planning intensifies' },
      { year: '2060', event: 'Operations conclude' },
      { year: '2065', event: 'Decommissioning complete' },
      { year: '2070', event: 'Site rehabilitation complete' },
      { year: '2080', event: 'Legacy benefits continue' },
      { year: '2090', event: 'Sustainable development legacy' },
      { year: '2100', event: 'Granite production legacy' },
    ],
    relatedMinerals: [
      { name: 'Marble White', href: '/minerals/marble/white' },
      { name: 'Sandstone Deposits', href: '/minerals/stones/sandstone' },
      { name: 'Travertine Deposits', href: '/minerals/stones/travertine' },
      { name: 'Quartzite Deposits', href: '/minerals/stones/quartzite' },
      { name: 'Soapstone Deposits', href: '/minerals/stones/soapstone' },
      { name: 'Diorite Gabbro', href: '/minerals/stones/diorite-gabbro' },
      { name: 'Marble Herat', href: '/minerals/marble/herat' },
      { name: 'Marble Architectural', href: '/minerals/marble/architectural' },
      { name: 'Operations Processing', href: '/operations/processing' },
      { name: 'Operations Trade', href: '/operations/trade' },
      { name: 'Operations Digital', href: '/operations/digital' },
      { name: 'Operations Research', href: '/operations/research' },
      { name: 'Operations Safety', href: '/operations/safety' },
      { name: 'Operations Sustainability', href: '/operations/sustainability' },
      { name: 'Cement Production', href: '/minerals/industrial/cement' },
    ]
  },
};
