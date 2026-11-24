// Mineral Hero & Mega Sections
import MineralHeroSection from "@/minerals-portal/components/minerals/MineralHeroSection";
import MineralMegaSection from "@/minerals-portal/components/minerals/MineralMegaSection";
import MineralStatsSection from "@/minerals-portal/components/minerals/MineralStatsSection";
import MineralDetailSection from "@/minerals-portal/components/minerals/MineralDetailSection";
import MineralQuoteSection from "@/minerals-portal/components/minerals/MineralQuoteSection";
import MineralTimelineSection from "@/minerals-portal/components/minerals/MineralTimelineSection";
import MineralRegionsSection from "@/minerals-portal/components/minerals/MineralRegionsSection";

// Original Mineral Images
const copperMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-mine.jpg";
const lithiumDeposits = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-deposits.jpg";
const rareEarth = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth.jpg";
const goldMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-mining.jpg";
const emeraldMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/emerald-mine.jpg";
const lapisLazuli = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lapis-lazuli.jpg";
const ironOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/iron-ore.jpg";
const chromite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite.jpg";
const marbleQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-quarry.jpg";
const coalMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-mining.jpg";
const talcMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-mining.jpg";
const barite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite.jpg";
const laboratory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/laboratory.jpg";
const geologicalSurvey = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/geological-survey.jpg";
const refinery = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/refinery.jpg";
const exportLogistics = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/export-logistics.jpg";
const rubySapphire = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/ruby-sapphire.jpg";
const geologicalLayers = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/geological-layers.jpg";
const saltMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/salt-mining.jpg";
const cementFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cement-factory.jpg";

// Additional Mineral Images
const cobaltNickel = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cobalt-nickel.jpg";
const leadZinc = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lead-zinc.jpg";
const tourmaline = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/tourmaline.jpg";
const uranium = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/uranium.jpg";
const beneficiation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/beneficiation.jpg";
const smelting = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/smelting.jpg";
const exploration = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/exploration.jpg";
const partnership = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/partnership.jpg";
const community = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/community.jpg";
const environmental = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/environmental.jpg";
const safety = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/safety.jpg";
const dataCenter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/data-center.jpg";
const maritimeExport = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/maritime-export.jpg";
const logarProvince = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/logar-province.jpg";
const badakhshan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/badakhshan.jpg";
const vision2030 = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/vision-2030.jpg";

// NEW MEGA Images - First Batch
const megaCopperPit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/mega-copper-pit-01.jpg";
const lithiumSpecimen = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-specimen-01.jpg";
const goldVein = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-vein-01.jpg";
const emeraldCrystal = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/emerald-crystal-01.jpg";
const ironMegaStockpile = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/iron-mega-stockpile-01.jpg";
const lapisPremium = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lapis-premium-01.jpg";
const rareEarthMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth-mine-01.jpg";
const chromiteOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite-ore-01.jpg";
const marbleMegaQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-mega-quarry-01.jpg";
const coalMegaSeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-mega-seam-01.jpg";
const talcDeposit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-deposit-01.jpg";
const rubyMatrix = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/ruby-matrix-01.jpg";
const processingMegaPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/processing-mega-plant-01.jpg";
const coreSamples = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/core-samples-01.jpg";
const megaHaulTruck = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/mega-haul-truck-01.jpg";
const uraniumOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/uranium-ore-01.jpg";
const bariteMegaMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite-mega-mine-01.jpg";
const tourmalineCollection = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/tourmaline-collection-01.jpg";
const cobaltSpecimen = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cobalt-specimen-01.jpg";
const saltMegaMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/salt-mega-mine-01.jpg";
const leadZincOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lead-zinc-ore-01.jpg";
const copperMegaSmelter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-mega-smelter-01.jpg";
const cementMegaPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cement-mega-plant-01.jpg";
const aquamarineMega = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/aquamarine-mega-01.jpg";
const exportMegaTerminal = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/export-mega-terminal-01.jpg";
const undergroundMegaTunnel = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/underground-mega-tunnel-01.jpg";
const surveyMegaTeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/survey-mega-team-01.jpg";
const beneficiationMega = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/beneficiation-mega-01.jpg";
const logarMegaAerial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/logar-mega-aerial-01.jpg";
const badakhshanMegaLandscape = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/badakhshan-mega-landscape-01.jpg";
const hajigakMegaDeposit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/hajigak-mega-deposit-01.jpg";
const panjshirMegaValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/panjshir-mega-valley-01.jpg";
const dataMegaCenter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/data-mega-center-01.jpg";
const communityMegaDev = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/community-mega-dev-01.jpg";
const environmentalMegaRehab = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/environmental-mega-rehab-01.jpg";
const safetyMegaTraining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/safety-mega-training-01.jpg";
const partnershipMegaSummit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/partnership-mega-summit-01.jpg";
const visionStrategicMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/vision-strategic-mining-01.jpg";
const nationalLegacyLandscape = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/national-legacy-landscape-01.jpg";
const futureVisionSustainable = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/future-vision-sustainable-01.jpg";
const drillingMegaRig = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/drilling-mega-rig-01.jpg";
const blastingMega = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/blasting-mega-01.jpg";
const conveyorMegaSystem = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/conveyor-mega-system-01.jpg";
const labMegaXrf = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lab-mega-xrf-01.jpg";
const controlMegaRoom = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/control-mega-room-01.jpg";
const stockyardMega = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/stockyard-mega-01.jpg";
const portMegaExport = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/port-mega-export-01.jpg";
const nickelMegaDeposit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/nickel-mega-deposit-01.jpg";
const truckMegaFleet = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/truck-mega-fleet-01.jpg";
const crushedMegaOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/crushed-mega-ore-01.jpg";
const bamyanMegaProvince = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/bamyan-mega-province-01.jpg";

// Previous Generated Images
const mineAerial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/mine-aerial-01.jpg";
const undergroundMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/underground-mining-01.jpg";
const lapisDetail = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lapis-detail-01.jpg";
const emeraldExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/emerald-extraction-01.jpg";
const processingPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/processing-plant-01.jpg";
const geologicalCross = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/geological-cross-01.jpg";
const goldOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/gold-ore-01.jpg";
const lithiumExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-extraction-01.jpg";
const rubyCollection = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/ruby-collection-01.jpg";
const marbleExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/marble-extraction-01.jpg";
const copperSmelting = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-smelting-01.jpg";
const labAnalysis = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lab-analysis-01.jpg";
const rareEarthDetail = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rare-earth-detail-01.jpg";
const infrastructure = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/infrastructure-01.jpg";
const ironStockpile = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/iron-stockpile-01.jpg";
const panjshirValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/panjshir-valley-01.jpg";
const chromiteMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/chromite-mining-01.jpg";
const coalSeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/coal-seam-01.jpg";
const saltExtraction = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/salt-extraction-01.jpg";
const talcMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/talc-mine-01.jpg";
const bariteDeposit = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/barite-deposit-01.jpg";
const cementPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cement-plant-01.jpg";
const exportTrain = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/export-train-01.jpg";
const drilling = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/drilling-01.jpg";
const workers = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/workers-01.jpg";
const tourmalineCrystals = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/tourmaline-crystals-01.jpg";
const badakhshanAerial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/badakhshan-aerial-01.jpg";
const haulTrucks = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/haul-trucks-01.jpg";
const cobaltOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/cobalt-ore-01.jpg";
const controlRoom = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/control-room-01.jpg";
const stockyard = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/stockyard-01.jpg";
const testingEquipment = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/testing-equipment-01.jpg";
const logarLandscape = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/logar-landscape-01.jpg";
const rehabilitation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/rehabilitation-01.jpg";
const copperOreCrystals = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/copper-ore-crystals-01.jpg";
const lithiumPegmatite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/lithium-pegmatite-01.jpg";
const miningCamp = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/mining-camp-01.jpg";
const sunsetMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/sunset-mining-01.jpg";
const partnershipMeeting = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/partnership-meeting-01.jpg";
const governmentRevenueImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/government-revenue-01.jpg";
const domesticInvestmentImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/domestic-investment-01.jpg";
const partnershipHubImg = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/partnership-hub-01.jpg";
const globalPartnershipMinerals = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/global-partnership-minerals-01.jpg";
const hajigakIron = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/hajigak-iron-01.jpg";
const blasting = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/blasting-01.jpg";
const conveyorSystem = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/conveyor-system-01.jpg";
const bamyanLandscape = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/bamyan-landscape-01.jpg";
const aquamarine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/aquamarine-01.jpg";
const portFacility = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/port-facility-01.jpg";
const nickelOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/nickel-ore-01.jpg";
const truckFleet = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/truck-fleet-01.jpg";
const crushedOre = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/crushed-ore-01.jpg";

// NEW EXPANDED Images - 50x Expansion
const copperOpenpitAerial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/copper-openpit-aerial-01.jpg";
const lithiumSpodumene = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/lithium-spodumene-01.jpg";
const goldUnderground = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/gold-underground-01.jpg";
const emeraldPanjshirMatrix = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/emerald-panjshir-matrix-01.jpg";
const hajigakOverview = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/hajigak-overview-01.jpg";
const lapisAncientMine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/lapis-ancient-mine-01.jpg";
const rareEarthConcentrate = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/rare-earth-concentrate-01.jpg";
const chromiteStockpile = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/chromite-stockpile-01.jpg";
const marbleWhiteQuarry = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/marble-white-quarry-01.jpg";
const coalUndergroundSeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/coal-underground-seam-01.jpg";
const rubyJegdalekGem = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/ruby-jegdalek-gem-01.jpg";
const sapphireHindukush = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/sapphire-hindukush-01.jpg";
const tourmalineNuristanCollection = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/tourmaline-nuristan-collection-01.jpg";
const aquamarineKunar = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/aquamarine-kunar-01.jpg";
const mesAynakArchaeological = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/mes-aynak-archaeological-01.jpg";
const processingPlantInterior = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/processing-plant-interior-01.jpg";
const coreSamplesLaboratory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/core-samples-laboratory-01.jpg";
const drillingExploration = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/drilling-exploration-01.jpg";
const geologicalSurveyTeam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/geological-survey-team-01.jpg";
const controlCenterOperations = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/control-center-operations-01.jpg";
const copperSmeltingFurnace = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/copper-smelting-furnace-01.jpg";
const goldRefineryCasting = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/gold-refinery-casting-01.jpg";
const railwayExportTerminal = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/railway-export-terminal-01.jpg";
const investmentConference = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/investment-conference-01.jpg";
const environmentalRehabilitation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/environmental-rehabilitation-01.jpg";
const communitySchool = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/expanded/community-school-01.jpg";

// NEW PROVINCE Images - 25 Province-Specific Images
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

// Components
import MegaNavigationV2 from "@/minerals-portal/components/MegaNavigationV2";
import MapSection from "@/minerals-portal/components/MapSection";
import ContactSection from "@/minerals-portal/components/ContactSection";
import FooterMegaMenu from "@/minerals-portal/components/FooterMegaMenu";
import HomeVisualGallery from "@/minerals-portal/components/HomeVisualGallery";
import { useLanguage } from "@/minerals-portal/contexts/LanguageContext";

import {
  Mountain, Gem, Pickaxe, Atom, Crown, Factory, Flame, Hammer, Sparkles,
  FlaskConical, Microscope, Database, TrendingUp, Globe, Ship, Truck, 
  Shield, Leaf, Users, Building, FileText, BarChart, Award, Target,
  Compass, Layers, Search, Map, Shovel, Scale, Cog, Zap
} from "lucide-react";

const Index = () => {
  const { t } = useLanguage();
  
  // OVERVIEW STATISTICS
  const overviewStats = [
    { value: "$30T+", label: t.statsLabels.mineralReserves, description: t.descriptions.estimatedTotalValue },
    { value: "1400+", label: t.statsLabels.knownDeposits, description: t.descriptions.acrossAllProvinces },
    { value: "150+", label: t.statsLabels.mineralTypes, description: t.descriptions.criticalAndStrategic },
    { value: "34", label: t.statsLabels.provinces, description: t.descriptions.resourceRichRegions },
  ];

  // COPPER STATISTICS
  const copperStats = [
    { value: "600M", label: t.statsLabels.metricTons, description: t.descriptions.estimatedReserves },
    { value: "$8T", label: t.statsLabels.value, description: t.descriptions.currentMarketEstimate },
    { value: "50", label: t.statsLabels.majorDeposits, description: t.descriptions.activeExplorationSites },
    { value: "2035", label: t.statsLabels.target, description: t.descriptions.fullProductionCapacity },
  ];

  // LITHIUM STATISTICS
  const lithiumStats = [
    { value: "215M", label: t.statsLabels.metricTons, description: t.descriptions.estimatedReserves },
    { value: "#1", label: t.statsLabels.globalRank, description: t.descriptions.largestReserves },
    { value: "$8T", label: t.statsLabels.value, description: t.descriptions.strategicImportance },
    { value: "45%", label: t.statsLabels.globalShare, description: t.descriptions.potentialContribution },
  ];

  // GEMSTONE STATISTICS
  const gemstoneStats = [
    { value: "18", label: t.statsLabels.provinces, description: t.statsLabels.gemstoneRegions },
    { value: "85+", label: t.statsLabels.types, description: t.descriptions.preciousSemiPrecious },
    { value: "6,000", label: t.statsLabels.years, description: t.descriptions.miningHeritage },
    { value: "$2B", label: t.statsLabels.annual, description: t.descriptions.exportPotential },
  ];

  // IRON & STEEL STATISTICS
  const ironStats = [
    { value: "22B", label: t.statsLabels.metricTons, description: t.statsLabels.ironOreReserves },
    { value: "$3.5T", label: t.statsLabels.value, description: t.descriptions.estimatedWorth },
    { value: "100", label: t.statsLabels.majorDeposits, description: t.descriptions.identifiedDeposits },
    { value: "500K", label: t.statsLabels.jobs, description: t.descriptions.employmentPotential },
  ];

  // GOLD STATISTICS
  const goldStats = [
    { value: "27,000", label: t.statsLabels.metricTons, description: t.statsLabels.goldReserves },
    { value: "$4.4T", label: t.statsLabels.value, description: t.descriptions.atCurrentPrices },
    { value: "45", label: t.statsLabels.goldBelts, description: t.descriptions.majorFormations },
    { value: "350K", label: t.statsLabels.artisanalMiners, description: t.descriptions.currentlyActive },
  ];

  // RARE EARTH STATISTICS
  const rareEarthStats = [
    { value: "17", label: t.statsLabels.reeElements, description: t.descriptions.identifiedSpecies },
    { value: "$5T", label: t.statsLabels.estimatedValue, description: t.descriptions.strategicResources },
    { value: "40", label: t.statsLabels.majorDeposits, description: t.statsLabels.underExploration },
    { value: "Global", label: t.statsLabels.supplyImpact, description: t.descriptions.potentialDiversification },
  ];

  // CHROMITE STATISTICS
  const chromiteStats = [
    { value: "30M", label: t.statsLabels.metricTons, description: t.statsLabels.provenReserves },
    { value: "$12B", label: t.statsLabels.yearlyPotential, description: t.descriptions.exportPotentialValue },
    { value: "120", label: t.statsLabels.deposits, description: t.descriptions.acrossProvinces },
    { value: "Stainless Steel", label: t.statsLabels.primaryUse, description: t.descriptions.industrialApplication },
  ];

  // MARBLE STATISTICS
  const marbleStats = [
    { value: "5B", label: t.statsLabels.cubicMeters, description: t.descriptions.estimatedReserves },
    { value: "75+", label: t.statsLabels.colors, description: t.descriptions.uniqueVarieties },
    { value: "$20B", label: t.statsLabels.annualPotential, description: t.descriptions.exportRevenue },
    { value: "Premium", label: t.statsLabels.qualityGrade, description: t.descriptions.internationalStandard },
  ];

  // COAL STATISTICS
  const coalStats = [
    { value: "4B", label: t.statsLabels.metricTons, description: t.statsLabels.coalReserves },
    { value: "73%", label: t.statsLabels.highQuality, description: t.descriptions.metallurgicalGrade },
    { value: "35", label: t.statsLabels.majorBasins, description: t.statsLabels.deposits },
    { value: "Energy Security", label: t.statsLabels.strategicRole, description: t.descriptions.domesticSupply },
  ];

  // COPPER DETAIL ITEMS
  const copperItems = t.indexPage.detailItems.copper.map((item, index) => ({
    ...item,
    icon: [Mountain, Pickaxe, Gem, Factory, Leaf, Globe][index],
  }));

  // LITHIUM DETAIL ITEMS
  const lithiumItems = t.indexPage.detailItems.lithium.map((item, index) => ({
    ...item,
    icon: [Sparkles, Mountain, Zap, Users, FlaskConical, Globe][index],
  }));

  // GOLD DETAIL ITEMS
  const goldItems = t.indexPage.detailItems.gold.map((item, index) => ({
    ...item,
    icon: [Crown, Pickaxe, Cog, Factory, Users, Shield][index],
  }));

  // GEMSTONE DETAIL ITEMS
  const gemstoneItems = t.indexPage.detailItems.gemstones.map((item, index) => ({
    ...item,
    icon: [Gem, Sparkles, Crown, Mountain, Factory, Award][index],
  }));

  // IRON DETAIL ITEMS
  const ironItems = t.indexPage.detailItems.iron.map((item, index) => ({
    ...item,
    icon: [Mountain, Factory, Building, Truck, Compass, Users][index],
  }));

  // RARE EARTH DETAIL ITEMS
  const rareEarthItems = t.indexPage.detailItems.rareEarth.map((item, index) => ({
    ...item,
    icon: [Atom, Cog, FlaskConical, Zap, Shield, Globe][index],
  }));

  // INDUSTRIAL MINERALS
  const industrialItems = t.indexPage.detailItems.industrial.map((item, index) => ({
    ...item,
    icon: [Layers, Sparkles, Mountain, Shovel, Factory, Building][index],
  }));

  // PROCESSING DETAIL ITEMS
  const processingItems = t.indexPage.detailItems.processing.map((item, index) => ({
    ...item,
    icon: [Flame, Factory, Microscope, Cog, Leaf, Zap][index],
  }));

  // RESEARCH DETAIL ITEMS
  const researchItems = t.indexPage.detailItems.research.map((item, index) => ({
    ...item,
    icon: [Map, Shovel, FlaskConical, Database, Building, Users][index],
  }));

  // TRADE DETAIL ITEMS
  const tradeItems = t.indexPage.detailItems.trade.map((item, index) => ({
    ...item,
    icon: [Truck, FileText, BarChart, Building, Globe, TrendingUp][index],
  }));

  // SUSTAINABILITY DETAIL ITEMS
  const sustainabilityItems = t.indexPage.detailItems.sustainability.map((item, index) => ({
    ...item,
    icon: [Leaf, Users, Scale, Compass, Shield, Globe][index],
  }));

  // TIMELINE DATA
  const timelineItems = [
    { year: "2024", title: t.indexPage.timeline?.year2024?.title  ?? '', description: t.indexPage.timeline?.year2024?.description  ?? '' },
    { year: "2025", title: t.indexPage.timeline?.year2025?.title  ?? '', description: t.indexPage.timeline?.year2025?.description  ?? '' },
    { year: "2026", title: t.indexPage.timeline?.year2026?.title  ?? '', description: t.indexPage.timeline?.year2026?.description  ?? '' },
    { year: "2027", title: t.indexPage.timeline?.year2027?.title  ?? '', description: t.indexPage.timeline?.year2027?.description  ?? '' },
    { year: "2028", title: t.indexPage.timeline?.year2028?.title  ?? '', description: t.indexPage.timeline?.year2028?.description  ?? '' },
    { year: "2029", title: t.indexPage.timeline?.year2029?.title  ?? '', description: t.indexPage.timeline?.year2029?.description  ?? '' },
    { year: "2030", title: t.indexPage.timeline?.year2030?.title  ?? '', description: t.indexPage.timeline?.year2030?.description  ?? '' },
    { year: "2032", title: t.indexPage.timeline?.year2032?.title  ?? '', description: t.indexPage.timeline?.year2032?.description  ?? '' },
    { year: "2035", title: t.indexPage.timeline?.year2035?.title  ?? '', description: t.indexPage.timeline?.year2035?.description  ?? '' },
  ];

  // REGIONS DATA - Expanded
  const regionsData = [
    { name: t.indexPage.provinces?.logar?.title  ?? '', minerals: [t.sectors?.copper  ?? '', t.sectors?.iron  ?? '', t.sectors?.chromite  ?? '', t.sectors?.marble  ?? ''] },
    { name: t.indexPage.provinces?.badakhshan?.title  ?? '', minerals: [t.sectors?.gemstones  ?? '', t.sectors?.gold  ?? '', t.sectors?.gemstones  ?? '', t.sectors?.gemstones  ?? ''] },
    { name: t.indexPage.provinces?.bamyan?.title  ?? '', minerals: [t.sectors?.iron  ?? '', t.sectors?.copper  ?? '', t.sectors?.coal  ?? '', t.sectors?.gold  ?? ''] },
    { name: t.indexPage.provinces?.panjshir?.title  ?? '', minerals: [t.sectors?.gemstones  ?? '', t.sectors?.silver  ?? '', t.sectors?.tungsten  ?? '', t.sectors?.aquamarine  ?? ''] },
    { name: t.indexPage.provinces?.ghazni?.title  ?? '', minerals: [t.sectors?.lithium  ?? '', t.sectors?.copper  ?? '', t.sectors?.gold  ?? '', t.sectors?.tantalum  ?? ''] },
    { name: t.indexPage.provinces?.nuristan?.title  ?? '', minerals: [t.sectors?.lithium  ?? '', t.sectors?.niobium  ?? '', t.sectors?.tantalum  ?? '', t.sectors?.tourmaline  ?? ''] },
    { name: t.indexPage.provinces?.helmand?.title  ?? '', minerals: [t.sectors?.rareEarth  ?? '', t.sectors?.uranium  ?? '', t.sectors?.marble  ?? ''] },
    { name: t.indexPage.provinces?.herat?.title  ?? '', minerals: [t.sectors?.iron  ?? '', t.sectors?.marble  ?? '', t.sectors?.salt  ?? '', t.sectors?.gypsum  ?? ''] },
    { name: t.indexPage.provinces?.kandahar?.title  ?? '', minerals: [t.sectors?.gold  ?? '', t.sectors?.chromite  ?? '', t.sectors?.talc  ?? '', t.sectors?.marble  ?? ''] },
    { name: t.indexPage.provinces?.takhar?.title  ?? '', minerals: [t.sectors?.gold  ?? '', t.sectors?.silver  ?? '', t.sectors?.lead  ?? '', t.sectors?.zinc  ?? ''] },
    { name: t.indexPage.provinces?.baghlan?.title  ?? '', minerals: [t.sectors?.coal  ?? '', t.sectors?.copper  ?? '', t.sectors?.iron  ?? '', t.sectors?.salt  ?? ''] },
    { name: t.indexPage.provinces?.parwan?.title  ?? '', minerals: [t.sectors?.gemstones  ?? '', t.sectors?.gold  ?? '', t.sectors?.silver  ?? '', t.sectors?.copper  ?? ''] },
    { name: t.indexPage.provinces?.kunduz?.title  ?? '', minerals: [t.sectors?.coal  ?? '', t.sectors?.salt  ?? '', t.sectors?.gypsum  ?? '', t.sectors?.limestone  ?? ''] },
    { name: t.indexPage.provinces?.balkh?.title  ?? '', minerals: [t.sectors?.naturalGas  ?? '', t.sectors?.salt  ?? '', t.sectors?.marble  ?? '', t.sectors?.gold  ?? ''] },
    { name: t.indexPage.provinces?.samangan?.title  ?? '', minerals: [t.sectors?.coal  ?? '', t.sectors?.copper  ?? '', t.sectors?.iron  ?? '', t.sectors?.talc  ?? ''] },
    { name: t.indexPage.provinces?.faryab?.title  ?? '', minerals: [t.sectors?.gold  ?? '', t.sectors?.copper  ?? '', t.sectors?.salt  ?? '', t.sectors?.gypsum  ?? ''] },
  ];

  return (
    <div id="page-top" className="min-h-screen bg-background">
      {/* ==================== TOP NAVIGATION ==================== */}
      <MegaNavigationV2 />

      {/* ==================== HERO ==================== */}
      <MineralHeroSection backgroundImage={megaCopperPit} />

      {/* ==================== OVERVIEW ==================== */}
      <MineralMegaSection
        id="overview"
        title={t.indexPage.overview.title}
        subtitle={t.indexPage.overview.subtitle}
        description={t.indexPage.overview.description}
        backgroundImage={geologicalCross}
        variant="light"
      />

      <MineralStatsSection
        stats={overviewStats}
        title={t.indexPage.overview.statsTitle}
        subtitle={t.indexPage.overview.statsSubtitle}
      />

      {/* ==================== GEOLOGICAL FRAMEWORK ==================== */}
      <MineralMegaSection
        id="geological"
        title={t.indexPage.geological.title}
        subtitle={t.indexPage.geological.subtitle}
        description={t.indexPage.geological.description}
        backgroundImage={geologicalLayers}
      />

      <MineralQuoteSection
        quote={t.indexPage.geological.quote}
        backgroundImage={mineAerial}
      />

      {/* ==================== NATIONAL STRATEGY ==================== */}
      <MineralMegaSection
        id="national-strategy"
        title={t.indexPage.nationalStrategy.title}
        subtitle={t.indexPage.nationalStrategy.subtitle}
        description={t.indexPage.nationalStrategy.description}
        backgroundImage={partnershipMegaSummit}
        alignment="center"
      />

      {/* ==================== ECONOMIC IMPACT ==================== */}
      <MineralMegaSection
        id="economic-impact"
        title={t.indexPage.economicImpact.title}
        subtitle={t.indexPage.economicImpact.subtitle}
        description={t.indexPage.economicImpact.description}
        backgroundImage={sunsetMining}
        variant="light"
      />

      {/* ==================== COPPER ==================== */}
      <MineralMegaSection
        id="copper"
        title={t.indexPage.copper.title}
        subtitle={t.indexPage.copper.subtitle}
        description={t.indexPage.copper.description}
        backgroundImage={megaCopperPit}
      />

      <MineralStatsSection
        stats={copperStats}
        title={t.indexPage.copper.statsTitle}
        subtitle={t.indexPage.copper.statsSubtitle}
        backgroundImage={copperSmelting}
      />

      <MineralDetailSection
        title={t.indexPage.copper.detailTitle}
        subtitle={t.indexPage.copper.detailSubtitle}
        description={t.indexPage.copper.detailDescription}
        items={copperItems}
        backgroundImage={copperOreCrystals}
      />

      <MineralMegaSection
        id="copper-processing"
        title={t.indexPage.copper.processingTitle}
        subtitle={t.indexPage.copper.processingSubtitle}
        description={t.indexPage.copper.processingDescription}
        backgroundImage={copperMegaSmelter}
        alignment="right"
      />

      {/* ==================== LITHIUM ==================== */}
      <MineralMegaSection
        id="lithium"
        title={t.indexPage.lithium.title}
        subtitle={t.indexPage.lithium.subtitle}
        description={t.indexPage.lithium.description}
        backgroundImage={lithiumSpecimen}
        alignment="center"
        variant="light"
      />

      <MineralStatsSection
        stats={lithiumStats}
        title={t.indexPage.lithium.statsTitle}
        subtitle={t.indexPage.lithium.statsSubtitle}
      />

      <MineralDetailSection
        id="lithium-detail"
        title={t.indexPage.lithium.detailTitle}
        subtitle={t.indexPage.lithium.detailSubtitle}
        description={t.indexPage.lithium.detailDescription}
        items={lithiumItems}
        backgroundImage={lithiumPegmatite}
        reversed
      />

      <MineralMegaSection
        id="lithium-geology"
        title={t.indexPage.lithium.geologyTitle}
        subtitle={t.indexPage.lithium.geologySubtitle}
        description={t.indexPage.lithium.geologyDescription}
        backgroundImage={lithiumSpecimen}
      />

      <MineralQuoteSection
        quote={t.indexPage.lithium.quote}
        backgroundImage={lithiumDeposits}
      />

      {/* ==================== GOLD ==================== */}
      <MineralMegaSection
        id="gold"
        title={t.indexPage.gold.title}
        subtitle={t.indexPage.gold.subtitle}
        description={t.indexPage.gold.description}
        backgroundImage={goldVein}
      />

      <MineralStatsSection
        stats={goldStats}
        title={t.indexPage.gold.statsTitle}
        subtitle={t.indexPage.gold.statsSubtitle}
        backgroundImage={goldOre}
      />

      <MineralDetailSection
        title={t.indexPage.gold.detailTitle}
        subtitle={t.indexPage.gold.detailSubtitle}
        description={t.indexPage.gold.detailDescription}
        items={goldItems}
        backgroundImage={goldMining}
      />

      <MineralMegaSection
        id="gold-veins"
        title={t.indexPage.gold.depositsTitle}
        subtitle={t.indexPage.gold.depositsSubtitle}
        description={t.indexPage.gold.depositsDescription}
        backgroundImage={undergroundMegaTunnel}
        alignment="center"
        variant="light"
      />

      {/* ==================== GEMSTONES ==================== */}
      <MineralMegaSection
        id="gemstones"
        title={t.indexPage.gemstones.title}
        subtitle={t.indexPage.gemstones.subtitle}
        description={t.indexPage.gemstones.description}
        backgroundImage={emeraldCrystal}
        alignment="center"
      />

      <MineralStatsSection
        stats={gemstoneStats}
        title={t.indexPage.gemstones.statsTitle}
        subtitle={t.indexPage.gemstones.statsSubtitle}
        backgroundImage={lapisDetail}
      />

      <MineralDetailSection
        title={t.indexPage.gemstones.detailTitle}
        subtitle={t.indexPage.gemstones.detailSubtitle}
        description={t.indexPage.gemstones.detailDescription}
        items={gemstoneItems}
        backgroundImage={rubyCollection}
        reversed
      />

      {/* ==================== LAPIS LAZULI ==================== */}
      <MineralMegaSection
        id="lapis"
        title={t.indexPage.lapis.title}
        subtitle={t.indexPage.lapis.subtitle}
        description={t.indexPage.lapis.description}
        backgroundImage={lapisPremium}
        variant="light"
      />

      {/* ==================== EMERALD ==================== */}
      <MineralMegaSection
        id="emerald"
        title={t.indexPage.emerald.title}
        subtitle={t.indexPage.emerald.subtitle}
        description={t.indexPage.emerald.description}
        backgroundImage={emeraldExtraction}
      />

      {/* ==================== RUBY & SAPPHIRE ==================== */}
      <MineralMegaSection
        id="ruby"
        title={t.indexPage.ruby.title}
        subtitle={t.indexPage.ruby.subtitle}
        description={t.indexPage.ruby.description}
        backgroundImage={rubyMatrix}
        alignment="right"
        variant="light"
      />

      {/* ==================== TOURMALINE ==================== */}
      <MineralMegaSection
        id="tourmaline"
        title={t.indexPage.tourmaline.title}
        subtitle={t.indexPage.tourmaline.subtitle}
        description={t.indexPage.tourmaline.description}
        backgroundImage={tourmalineCollection}
        alignment="center"
      />

      {/* ==================== AQUAMARINE ==================== */}
      <MineralMegaSection
        id="aquamarine"
        title={t.indexPage.aquamarine.title}
        subtitle={t.indexPage.aquamarine.subtitle}
        description={t.indexPage.aquamarine.description}
        backgroundImage={aquamarineMega}
        variant="light"
      />

      {/* ==================== IRON & STEEL ==================== */}
      <MineralMegaSection
        id="iron"
        title={t.indexPage.iron.title}
        subtitle={t.indexPage.iron.subtitle}
        description={t.indexPage.iron.description}
        backgroundImage={hajigakMegaDeposit}
      />

      <MineralStatsSection
        stats={ironStats}
        title={t.indexPage.iron.statsTitle}
        subtitle={t.indexPage.iron.statsSubtitle}
        backgroundImage={ironMegaStockpile}
      />

      <MineralDetailSection
        title={t.indexPage.iron.detailTitle}
        subtitle={t.indexPage.iron.detailSubtitle}
        description={t.indexPage.iron.detailDescription}
        items={ironItems}
        backgroundImage={hajigakIron}
      />

      <MineralMegaSection
        id="iron-processing"
        title={t.indexPage.iron.processingTitle}
        subtitle={t.indexPage.iron.processingSubtitle}
        description={t.indexPage.iron.processingDescription}
        backgroundImage={ironStockpile}
        alignment="center"
        variant="light"
      />

      {/* ==================== RARE EARTH ==================== */}
      <MineralMegaSection
        id="rare-earth"
        title={t.indexPage.rareEarth.title}
        subtitle={t.indexPage.rareEarth.subtitle}
        description={t.indexPage.rareEarth.description}
        backgroundImage={rareEarthMine}
        alignment="right"
      />

      <MineralStatsSection
        stats={rareEarthStats}
        title={t.indexPage.rareEarth.statsTitle}
        subtitle={t.indexPage.rareEarth.statsSubtitle}
        backgroundImage={rareEarthDetail}
      />

      <MineralDetailSection
        title={t.indexPage.rareEarth.detailTitle}
        subtitle={t.indexPage.rareEarth.detailSubtitle}
        description={t.indexPage.rareEarth.detailDescription}
        items={rareEarthItems}
        backgroundImage={rareEarth}
        reversed
      />

      {/* ==================== COBALT & NICKEL ==================== */}
      <MineralMegaSection
        id="cobalt"
        title={t.indexPage.cobaltNickel?.title  ?? ''}
        subtitle={t.indexPage.cobaltNickel?.subtitle  ?? ''}
        description={t.indexPage.cobaltNickel?.description  ?? ''}
        backgroundImage={cobaltSpecimen}
      />

      <MineralMegaSection
        id="nickel"
        title={t.indexPage.nickel?.title  ?? ''}
        subtitle={t.indexPage.nickel?.subtitle  ?? ''}
        description={t.indexPage.nickel?.description  ?? ''}
        backgroundImage={nickelMegaDeposit}
        variant="light"
        alignment="center"
      />

      {/* ==================== URANIUM ==================== */}
      <MineralMegaSection
        id="uranium"
        title={t.indexPage.uranium?.title  ?? ''}
        subtitle={t.indexPage.uranium?.subtitle  ?? ''}
        description={t.indexPage.uranium?.description  ?? ''}
        backgroundImage={uraniumOre}
        alignment="right"
      />

      {/* ==================== INDUSTRIAL MINERALS ==================== */}
      <MineralMegaSection
        id="industrial"
        title={t.indexPage.industrial.title}
        subtitle={t.indexPage.industrial.subtitle}
        description={t.indexPage.industrial.description}
        backgroundImage={marbleMegaQuarry}
        variant="light"
      />

      <MineralDetailSection
        title={t.indexPage.industrial.detailTitle}
        subtitle={t.indexPage.industrial.detailSubtitle}
        description={t.indexPage.industrial.detailDescription}
        items={industrialItems}
        backgroundImage={cementMegaPlant}
      />

      {/* ==================== CHROMITE ==================== */}
      <MineralMegaSection
        id="chromite"
        title={t.indexPage.chromite.title}
        subtitle={t.indexPage.chromite.subtitle}
        description={t.indexPage.chromite.description}
        backgroundImage={chromiteOre}
      />

      <MineralStatsSection
        stats={chromiteStats}
        title={t.indexPage.chromite.statsTitle}
        subtitle={t.indexPage.chromite.statsSubtitle}
        backgroundImage={chromiteMining}
      />

      {/* ==================== MARBLE ==================== */}
      <MineralMegaSection
        id="marble"
        title={t.indexPage.marble.title}
        subtitle={t.indexPage.marble.subtitle}
        description={t.indexPage.marble.description}
        backgroundImage={marbleExtraction}
        alignment="center"
      />

      <MineralStatsSection
        stats={marbleStats}
        title={t.indexPage.marble.statsTitle}
        subtitle={t.indexPage.marble.statsSubtitle}
        backgroundImage={marbleMegaQuarry}
      />

      {/* ==================== COAL ==================== */}
      <MineralMegaSection
        id="coal"
        title={t.indexPage.coal.title}
        subtitle={t.indexPage.coal.subtitle}
        description={t.indexPage.coal.description}
        backgroundImage={coalMegaSeam}
      />

      <MineralStatsSection
        stats={coalStats}
        title={t.indexPage.coal.statsTitle}
        subtitle={t.indexPage.coal.statsSubtitle}
        backgroundImage={coalSeam}
      />

      {/* ==================== TALC ==================== */}
      <MineralMegaSection
        id="talc"
        title={t.indexPage.talc?.title  ?? ''}
        subtitle={t.indexPage.talc?.subtitle  ?? ''}
        description={t.indexPage.talc?.description  ?? ''}
        backgroundImage={talcDeposit}
        variant="light"
      />

      {/* ==================== BARITE ==================== */}
      <MineralMegaSection
        id="barite"
        title={t.indexPage.barite?.title  ?? ''}
        subtitle={t.indexPage.barite?.subtitle  ?? ''}
        description={t.indexPage.barite?.description  ?? ''}
        backgroundImage={bariteMegaMine}
        alignment="right"
      />

      {/* ==================== SALT ==================== */}
      <MineralMegaSection
        id="salt"
        title={t.indexPage.salt?.title  ?? ''}
        subtitle={t.indexPage.salt?.subtitle  ?? ''}
        description={t.indexPage.salt?.description  ?? ''}
        backgroundImage={saltMegaMine}
        variant="light"
      />

      {/* ==================== CEMENT ==================== */}
      <MineralMegaSection
        id="cement"
        title={t.indexPage.cement?.title  ?? ''}
        subtitle={t.indexPage.cement?.subtitle  ?? ''}
        description={t.indexPage.cement?.description  ?? ''}
        backgroundImage={cementMegaPlant}
      />

      {/* ==================== LEAD & ZINC ==================== */}
      <MineralMegaSection
        id="lead-zinc"
        title={t.indexPage.leadZinc?.title  ?? ''}
        subtitle={t.indexPage.leadZinc?.subtitle  ?? ''}
        description={t.indexPage.leadZinc?.description  ?? ''}
        backgroundImage={leadZincOre}
        alignment="center"
        variant="light"
      />

      {/* ==================== PROCESSING ==================== */}
      <MineralMegaSection
        id="processing"
        title={t.indexPage.processing?.detailTitle  ?? ''}
        subtitle={t.indexPage.processing?.detailSubtitle  ?? ''}
        description={t.indexPage.processing?.detailDescription  ?? ''}
        backgroundImage={processingMegaPlant}
      />

      <MineralDetailSection
        title={t.indexPage.processing.detailTitle}
        subtitle={t.indexPage.processing.detailSubtitle}
        description={t.indexPage.processing.detailDescription}
        items={processingItems}
        backgroundImage={beneficiationMega}
      />

      {/* ==================== SMELTING ==================== */}
      <MineralMegaSection
        id="smelting"
        title={t.indexPage.smelting?.title  ?? ''}
        subtitle={t.indexPage.smelting?.subtitle  ?? ''}
        description={t.indexPage.smelting?.description  ?? ''}
        backgroundImage={copperMegaSmelter}
        variant="light"
      />

      {/* ==================== BENEFICIATION ==================== */}
      <MineralMegaSection
        id="beneficiation"
        title={t.indexPage.beneficiation?.title  ?? ''}
        subtitle={t.indexPage.beneficiation?.subtitle  ?? ''}
        description={t.indexPage.beneficiation?.description  ?? ''}
        backgroundImage={crushedMegaOre}
      />

      {/* ==================== LABORATORY ==================== */}
      <MineralMegaSection
        id="laboratory"
        title={t.indexPage.laboratory?.title  ?? ''}
        subtitle={t.indexPage.laboratory?.subtitle  ?? ''}
        description={t.indexPage.laboratory?.description  ?? ''}
        backgroundImage={labMegaXrf}
        alignment="center"
        variant="light"
      />

      {/* ==================== RESEARCH ==================== */}
      <MineralMegaSection
        id="research"
        title={t.indexPage.research?.title  ?? ''}
        subtitle={t.indexPage.research?.subtitle  ?? ''}
        description={t.indexPage.research?.description  ?? ''}
        backgroundImage={surveyMegaTeam}
        alignment="center"
      />

      <MineralDetailSection
        title={t.indexPage.research.detailTitle}
        subtitle={t.indexPage.research.detailSubtitle}
        description={t.indexPage.research.detailDescription}
        items={researchItems}
        backgroundImage={coreSamples}
        reversed
      />

      {/* ==================== GEOLOGICAL SURVEY ==================== */}
      <MineralMegaSection
        id="geological-survey"
        title={t.indexPage.geologicalSurveys?.title  ?? ''}
        subtitle={t.indexPage.geologicalSurveys?.subtitle  ?? ''}
        description={t.indexPage.geologicalSurveys?.description  ?? ''}
        backgroundImage={drilling}
        variant="light"
      />

      {/* ==================== EXPLORATION ==================== */}
      <MineralMegaSection
        id="exploration"
        title={t.indexPage.exploration?.title  ?? ''}
        subtitle={t.indexPage.exploration?.subtitle  ?? ''}
        description={t.indexPage.exploration?.description  ?? ''}
        backgroundImage={drillingMegaRig}
        alignment="center"
      />

      {/* ==================== DATA SYSTEMS ==================== */}
      <MineralMegaSection
        id="data-systems"
        title={t.indexPage.dataSystems?.title  ?? ''}
        subtitle={t.indexPage.dataSystems?.subtitle  ?? ''}
        description={t.indexPage.dataSystems?.description  ?? ''}
        backgroundImage={dataMegaCenter}
        variant="light"
      />

      {/* ==================== CONTROL ROOM ==================== */}
      <MineralMegaSection
        id="operations-control"
        title={t.indexPage.operationsControl?.title  ?? ''}
        subtitle={t.indexPage.operationsControl?.subtitle  ?? ''}
        description={t.indexPage.operationsControl?.description  ?? ''}
        backgroundImage={controlMegaRoom}
      />

      {/* ==================== TRADE & EXPORT ==================== */}
      <MineralMegaSection
        id="trade"
        title={t.indexPage.globalMarkets?.title ?? ''}
        subtitle={t.indexPage.globalMarkets?.subtitle ?? ''}
        description={t.indexPage.globalMarkets?.description ?? ''}
        backgroundImage={exportMegaTerminal}
      />

      <MineralDetailSection
        title={t.indexPage.trade.detailTitle}
        subtitle={t.indexPage.trade.detailSubtitle}
        description={t.indexPage.trade.detailDescription}
        items={tradeItems}
        backgroundImage={portMegaExport}
      />

      {/* ==================== INVESTMENT ==================== */}
      <MineralMegaSection
        id="investment"
        title={t.indexPage.investmentFramework?.title  ?? ''}
        subtitle={t.indexPage.investmentFramework?.subtitle  ?? ''}
        description={t.indexPage.investmentFramework?.description  ?? ''}
        backgroundImage={partnershipHubImg}
        alignment="right"
        variant="light"
      />

      {/* ==================== PARTNERSHIPS ==================== */}
      <MineralMegaSection
        id="partnerships"
        title={t.indexPage.partnerships?.title  ?? ''}
        subtitle={t.indexPage.partnerships?.subtitle  ?? ''}
        description={t.indexPage.partnerships?.description  ?? ''}
        backgroundImage={partnershipMegaSummit}
        alignment="center"
      />

      {/* ==================== EXPORT CORRIDORS ==================== */}
      <MineralMegaSection
        id="corridors"
        title={t.indexPage.tradeRoutes?.title  ?? ''}
        subtitle={t.indexPage.tradeRoutes?.subtitle  ?? ''}
        description={t.indexPage.tradeRoutes?.description  ?? ''}
        backgroundImage={portMegaExport}
        variant="light"
      />

      {/* ==================== TRUCK FLEET ==================== */}
      <MineralMegaSection
        id="logistics"
        title={t.indexPage.logistics?.title  ?? ''}
        subtitle={t.indexPage.logistics?.subtitle  ?? ''}
        description={t.indexPage.logistics?.description  ?? ''}
        backgroundImage={truckMegaFleet}
      />

      {/* ==================== STOCKYARD ==================== */}
      <MineralMegaSection
        id="stockyard"
        title={t.indexPage.stockyards?.title  ?? ''}
        subtitle={t.indexPage.stockyards?.subtitle  ?? ''}
        description={t.indexPage.stockyards?.description  ?? ''}
        backgroundImage={stockyardMega}
        alignment="center"
        variant="light"
      />

      {/* ==================== BLASTING ==================== */}
      <MineralMegaSection
        id="extraction"
        title={t.indexPage.blasting?.title  ?? ''}
        subtitle={t.indexPage.blasting?.subtitle  ?? ''}
        description={t.indexPage.blasting?.description  ?? ''}
        backgroundImage={blastingMega}
      />

      {/* ==================== CONVEYOR SYSTEMS ==================== */}
      <MineralMegaSection
        id="material-handling"
        title={t.indexPage.conveyor?.title  ?? ''}
        subtitle={t.indexPage.conveyor?.subtitle  ?? ''}
        description={t.indexPage.conveyor?.description  ?? ''}
        backgroundImage={conveyorMegaSystem}
        variant="light"
      />

      {/* ==================== REGIONAL RESOURCES ==================== */}
      <MineralRegionsSection
        title={t.indexPage.provincialResources?.title  ?? ''}
        subtitle={t.indexPage.provincialResources?.subtitle  ?? ''}
        regions={regionsData}
        backgroundImage={mineAerial}
      />

      {/* ==================== LOGAR PROVINCE ==================== */}
      <MineralMegaSection
        id="logar"
        title={t.indexPage.logar?.title  ?? ''}
        subtitle={t.indexPage.logar?.subtitle  ?? ''}
        description={t.indexPage.logar?.description  ?? ''}
        backgroundImage={logarMegaAerial}
        alignment="right"
      />

      {/* ==================== BADAKHSHAN ==================== */}
      <MineralMegaSection
        id="badakhshan"
        title={t.indexPage.badakhshan?.title  ?? ''}
        subtitle={t.indexPage.badakhshan?.subtitle  ?? ''}
        description={t.indexPage.badakhshan?.description  ?? ''}
        backgroundImage={badakhshanMegaLandscape}
        variant="light"
      />

      {/* ==================== BAMYAN ==================== */}
      <MineralMegaSection
        id="bamyan"
        title={t.indexPage.bamyan?.title ?? ''}
        subtitle={t.indexPage.bamyan?.subtitle ?? ''}
        description={t.indexPage.bamyan?.description ?? ''}
        backgroundImage={bamyanMegaProvince}
      />

      {/* ==================== PANJSHIR ==================== */}
      <MineralMegaSection
        id="panjshir"
        title={t.indexPage.panjshir?.title  ?? ''}
        subtitle={t.indexPage.panjshir?.subtitle  ?? ''}
        description={t.indexPage.panjshir?.description  ?? ''}
        backgroundImage={panjshirMegaValley}
        alignment="center"
        variant="light"
      />

      {/* ==================== GHAZNI ==================== */}
      <MineralMegaSection
        id="ghazni"
        title={t.indexPage.ghazni?.title ?? ''}
        subtitle={t.indexPage.ghazni?.subtitle ?? ''}
        description={t.indexPage.ghazni?.description ?? ''}
        backgroundImage={lithiumPegmatite}
      />

      {/* ==================== HELMAND ==================== */}
      <MineralMegaSection
        id="helmand"
        title={t.indexPage.helmand?.title  ?? ''}
        subtitle={t.indexPage.helmand?.subtitle  ?? ''}
        description={t.indexPage.helmand?.description  ?? ''}
        backgroundImage={rareEarthMine}
        variant="light"
      />

      {/* ==================== SUSTAINABILITY ==================== */}
      <MineralMegaSection
        id="sustainability"
        title={t.indexPage.sustainability?.title  ?? ''}
        subtitle={t.indexPage.sustainability?.subtitle  ?? ''}
        description={t.indexPage.sustainability?.description  ?? ''}
        backgroundImage={environmentalMegaRehab}
        alignment="center"
      />

      <MineralDetailSection
        title={t.indexPage.sustainability.detailTitle}
        subtitle={t.indexPage.sustainability.detailSubtitle}
        description={t.indexPage.sustainability.detailDescription}
        items={sustainabilityItems}
        backgroundImage={rehabilitation}
      />

      {/* ==================== ENVIRONMENTAL ==================== */}
      <MineralMegaSection
        id="environmental"
        title={t.indexPage.greenMining?.title  ?? ''}
        subtitle={t.indexPage.greenMining?.subtitle  ?? ''}
        description={t.indexPage.greenMining?.description  ?? ''}
        backgroundImage={environmentalMegaRehab}
        alignment="center"
        variant="light"
      />

      {/* ==================== COMMUNITY ==================== */}
      <MineralMegaSection
        id="community"
        title={t.indexPage.community?.title  ?? ''}
        subtitle={t.indexPage.community?.subtitle  ?? ''}
        description={t.indexPage.community?.description  ?? ''}
        backgroundImage={communityMegaDev}
      />

      {/* ==================== SAFETY ==================== */}
      <MineralMegaSection
        id="safety"
        title={t.indexPage.safety?.title ?? ''}
        subtitle={t.indexPage.safety?.subtitle ?? ''}
        description={t.indexPage.safety?.description ?? ''}
        backgroundImage={safetyMegaTraining}
        variant="light"
      />

      {/* ==================== WORKERS ==================== */}
      <MineralMegaSection
        id="workforce"
        title={t.indexPage.workforce?.title  ?? ''}
        subtitle={t.indexPage.workforce?.subtitle  ?? ''}
        description={t.indexPage.workforce?.description  ?? ''}
        backgroundImage={workers}
      />

      {/* ==================== MINING CAMP ==================== */}
      <MineralMegaSection
        id="infrastructure"
        title={t.indexPage.infrastructure?.title  ?? ''}
        subtitle={t.indexPage.infrastructure?.subtitle  ?? ''}
        description={t.indexPage.infrastructure?.description  ?? ''}
        backgroundImage={miningCamp}
        alignment="center"
        variant="light"
      />

      {/* ==================== EXPANDED SECTIONS - 50X EXPANSION ==================== */}

      {/* ==================== MES AYNAK ARCHAEOLOGICAL ==================== */}
      <MineralMegaSection
        id="mes-aynak"
        title={t.indexPage.mesAynakLegacy?.title  ?? ''}
        subtitle={t.indexPage.mesAynakLegacy?.subtitle  ?? ''}
        description={t.indexPage.mesAynakLegacy?.description  ?? ''}
        backgroundImage={mesAynakArchaeological}
        alignment="right"
      />

      {/* ==================== COPPER OPENPIT MEGA ==================== */}
      <MineralMegaSection
        id="copper-openpit"
        title={t.indexPage.copperOpenPit?.title  ?? ''}
        subtitle={t.indexPage.copperOpenPit?.subtitle  ?? ''}
        description={t.indexPage.copperOpenPit?.description  ?? ''}
        backgroundImage={copperOpenpitAerial}
        variant="light"
      />

      {/* ==================== COPPER SMELTING FURNACE ==================== */}
      <MineralMegaSection
        id="copper-smelting"
        title={t.indexPage.moltenCopper?.title  ?? ''}
        subtitle={t.indexPage.moltenCopper?.subtitle  ?? ''}
        description={t.indexPage.moltenCopper?.description  ?? ''}
        backgroundImage={copperSmeltingFurnace}
      />

      {/* ==================== LITHIUM SPODUMENE ==================== */}
      <MineralMegaSection
        id="lithium-spodumene"
        title={t.indexPage.spodumeneCrystals?.title  ?? ''}
        subtitle={t.indexPage.spodumeneCrystals?.subtitle  ?? ''}
        description={t.indexPage.spodumeneCrystals?.description  ?? ''}
        backgroundImage={lithiumSpodumene}
        alignment="center"
        variant="light"
      />

      {/* ==================== GOLD UNDERGROUND ==================== */}
      <MineralMegaSection
        id="gold-underground"
        title={t.indexPage.deepGoldMining?.title  ?? ''}
        subtitle={t.indexPage.deepGoldMining?.subtitle  ?? ''}
        description={t.indexPage.deepGoldMining?.description  ?? ''}
        backgroundImage={goldUnderground}
      />

      {/* ==================== GOLD REFINERY ==================== */}
      <MineralMegaSection
        id="gold-refinery"
        title={t.indexPage.goldRefining?.title  ?? ''}
        subtitle={t.indexPage.goldRefining?.subtitle  ?? ''}
        description={t.indexPage.goldRefining?.description  ?? ''}
        backgroundImage={goldRefineryCasting}
        alignment="right"
        variant="light"
      />

      {/* ==================== EMERALD PANJSHIR MATRIX ==================== */}
      <MineralMegaSection
        id="emerald-panjshir"
        title={t.indexPage.panjshirEmeraldCrystals?.title  ?? ''}
        subtitle={t.indexPage.panjshirEmeraldCrystals?.subtitle  ?? ''}
        description={t.indexPage.panjshirEmeraldCrystals?.description  ?? ''}
        backgroundImage={emeraldPanjshirMatrix}
        alignment="center"
      />

      {/* ==================== HAJIGAK OVERVIEW ==================== */}
      <MineralMegaSection
        id="hajigak"
        title={t.indexPage.hajigakIronMountain?.title  ?? ''}
        subtitle={t.indexPage.hajigakIronMountain?.subtitle  ?? ''}
        description={t.indexPage.hajigakIronMountain?.description  ?? ''}
        backgroundImage={hajigakOverview}
        variant="light"
      />

      {/* ==================== LAPIS ANCIENT MINE ==================== */}
      <MineralMegaSection
        id="lapis-ancient"
        title={t.indexPage.lapisAncientMines?.title  ?? ''}
        subtitle={t.indexPage.lapisAncientMines?.subtitle  ?? ''}
        description={t.indexPage.lapisAncientMines?.description  ?? ''}
        backgroundImage={lapisAncientMine}
        alignment="right"
      />

      {/* ==================== RUBY JEGDALEK ==================== */}
      <MineralMegaSection
        id="ruby-jegdalek"
        title={t.indexPage.jegdalekRubies?.title  ?? ''}
        subtitle={t.indexPage.jegdalekRubies?.subtitle  ?? ''}
        description={t.indexPage.jegdalekRubies?.description  ?? ''}
        backgroundImage={rubyJegdalekGem}
        variant="light"
        alignment="center"
      />

      {/* ==================== SAPPHIRE HINDUKUSH ==================== */}
      <MineralMegaSection
        id="sapphire-hindukush"
        title={t.indexPage.hinduKushSapphires?.title  ?? ''}
        subtitle={t.indexPage.hinduKushSapphires?.subtitle  ?? ''}
        description={t.indexPage.hinduKushSapphires?.description  ?? ''}
        backgroundImage={sapphireHindukush}
      />

      {/* ==================== TOURMALINE NURISTAN ==================== */}
      <MineralMegaSection
        id="tourmaline-nuristan"
        title={t.indexPage.nuristanTourmaline?.title  ?? ''}
        subtitle={t.indexPage.nuristanTourmaline?.subtitle  ?? ''}
        description={t.indexPage.nuristanTourmaline?.description  ?? ''}
        backgroundImage={tourmalineNuristanCollection}
        alignment="right"
        variant="light"
      />

      {/* ==================== AQUAMARINE KUNAR ==================== */}
      <MineralMegaSection
        id="aquamarine-kunar"
        title={t.indexPage.kunarAquamarine?.title  ?? ''}
        subtitle={t.indexPage.kunarAquamarine?.subtitle  ?? ''}
        description={t.indexPage.kunarAquamarine?.description  ?? ''}
        backgroundImage={aquamarineKunar}
        alignment="center"
      />

      {/* ==================== RARE EARTH CONCENTRATE ==================== */}
      <MineralMegaSection
        id="ree-concentrate"
        title={t.indexPage.strategicREEConcentrate?.title  ?? ''}
        subtitle={t.indexPage.strategicREEConcentrate?.subtitle  ?? ''}
        description={t.indexPage.strategicREEConcentrate?.description  ?? ''}
        backgroundImage={rareEarthConcentrate}
        variant="light"
      />

      {/* ==================== CHROMITE STOCKPILE ==================== */}
      <MineralMegaSection
        id="chromite-export"
        title={t.indexPage.chromiteExportOperations?.title  ?? ''}
        subtitle={t.indexPage.chromiteExportOperations?.subtitle  ?? ''}
        description={t.indexPage.chromiteExportOperations?.description  ?? ''}
        backgroundImage={chromiteStockpile}
        alignment="right"
      />

      {/* ==================== MARBLE WHITE QUARRY ==================== */}
      <MineralMegaSection
        id="marble-white"
        title={t.indexPage.premiumWhiteMarble?.title  ?? ''}
        subtitle={t.indexPage.premiumWhiteMarble?.subtitle  ?? ''}
        description={t.indexPage.premiumWhiteMarble?.description  ?? ''}
        backgroundImage={marbleWhiteQuarry}
        variant="light"
      />

      {/* ==================== COAL UNDERGROUND ==================== */}
      <MineralMegaSection
        id="coal-underground"
        title={t.indexPage.undergroundCoalOperations?.title  ?? ''}
        subtitle={t.indexPage.undergroundCoalOperations?.subtitle  ?? ''}
        description={t.indexPage.undergroundCoalOperations?.description  ?? ''}
        backgroundImage={coalUndergroundSeam}
        alignment="center"
      />

      {/* ==================== PROCESSING INTERIOR ==================== */}
      <MineralMegaSection
        id="processing-interior"
        title={t.indexPage.processingPlantOperations?.title  ?? ''}
        subtitle={t.indexPage.processingPlantOperations?.subtitle  ?? ''}
        description={t.indexPage.processingPlantOperations?.description  ?? ''}
        backgroundImage={processingPlantInterior}
        variant="light"
      />

      {/* ==================== CORE SAMPLES LAB ==================== */}
      <MineralMegaSection
        id="core-samples"
        title={t.indexPage.coreSampleAnalysis?.title  ?? ''}
        subtitle={t.indexPage.coreSampleAnalysis?.subtitle  ?? ''}
        description={t.indexPage.coreSampleAnalysis?.description  ?? ''}
        backgroundImage={coreSamplesLaboratory}
        alignment="right"
      />

      {/* ==================== DRILLING EXPLORATION ==================== */}
      <MineralMegaSection
        id="drilling"
        title={t.indexPage.explorationDrilling?.title  ?? ''}
        subtitle={t.indexPage.explorationDrilling?.subtitle  ?? ''}
        description={t.indexPage.explorationDrilling?.description  ?? ''}
        backgroundImage={drillingExploration}
      />

      {/* ==================== GEOLOGICAL SURVEY TEAM ==================== */}
      <MineralMegaSection
        id="survey-team"
        title={t.indexPage.surveyOperations?.title  ?? ''}
        subtitle={t.indexPage.surveyOperations?.subtitle  ?? ''}
        description={t.indexPage.surveyOperations?.description  ?? ''}
        backgroundImage={geologicalSurveyTeam}
        alignment="center"
        variant="light"
      />

      {/* ==================== CONTROL CENTER OPERATIONS ==================== */}
      <MineralMegaSection
        id="control-center"
        title={t.indexPage.operationsCommandCenter?.title  ?? ''}
        subtitle={t.indexPage.operationsCommandCenter?.subtitle  ?? ''}
        description={t.indexPage.operationsCommandCenter?.description  ?? ''}
        backgroundImage={controlCenterOperations}
      />

      {/* ==================== RAILWAY EXPORT TERMINAL ==================== */}
      <MineralMegaSection
        id="railway-terminal"
        title={t.indexPage.railwayExportHub?.title  ?? ''}
        subtitle={t.indexPage.railwayExportHub?.subtitle  ?? ''}
        description={t.indexPage.railwayExportHub?.description  ?? ''}
        backgroundImage={railwayExportTerminal}
        alignment="right"
        variant="light"
      />

      {/* ==================== INVESTMENT SUMMIT ==================== */}
      <MineralMegaSection
        id="investment-summit"
        title={t.indexPage.investmentConferences?.title  ?? ''}
        subtitle={t.indexPage.investmentConferences?.subtitle  ?? ''}
        description={t.indexPage.investmentConferences?.description  ?? ''}
        backgroundImage={investmentConference}
        alignment="center"
      />

      {/* ==================== ENVIRONMENTAL REHABILITATION ==================== */}
      <MineralMegaSection
        id="rehabilitation"
        title={t.indexPage.landRestoration?.title  ?? ''}
        subtitle={t.indexPage.landRestoration?.subtitle  ?? ''}
        description={t.indexPage.landRestoration?.description  ?? ''}
        backgroundImage={environmentalRehabilitation}
        variant="light"
      />

      {/* ==================== COMMUNITY SCHOOL ==================== */}
      <MineralMegaSection
        id="community-school"
        title={t.indexPage.educationPrograms?.title  ?? ''}
        subtitle={t.indexPage.educationPrograms?.subtitle  ?? ''}
        description={t.indexPage.educationPrograms?.description  ?? ''}
        backgroundImage={communitySchool}
        alignment="right"
      />

      {/* ==================== ADDITIONAL PROVINCIAL SECTIONS ==================== */}

      {/* ==================== NANGARHAR PROVINCE ==================== */}
      <MineralMegaSection
        id="nangarhar"
        title={t.indexPage.nangarharResources?.title  ?? ''}
        subtitle={t.indexPage.nangarharResources?.subtitle  ?? ''}
        description={t.indexPage.nangarharResources?.description  ?? ''}
        backgroundImage={chromiteStockpile}
        variant="light"
        alignment="center"
      />

      {/* ==================== BALKH PROVINCE ==================== */}
      <MineralMegaSection
        id="balkh"
        title={t.indexPage.balkhMineralBelt?.title  ?? ''}
        subtitle={t.indexPage.balkhMineralBelt?.subtitle  ?? ''}
        description={t.indexPage.balkhMineralBelt?.description  ?? ''}
        backgroundImage={copperOpenpitAerial}
      />

      {/* ==================== KUNDUZ PROVINCE ==================== */}
      <MineralMegaSection
        id="kunduz"
        title={t.indexPage.kunduzMiningDistrict?.title  ?? ''}
        subtitle={t.indexPage.kunduzMiningDistrict?.subtitle  ?? ''}
        description={t.indexPage.kunduzMiningDistrict?.description  ?? ''}
        backgroundImage={saltMegaMine}
        alignment="right"
        variant="light"
      />

      {/* ==================== FARYAB PROVINCE ==================== */}
      <MineralMegaSection
        id="faryab"
        title={t.indexPage.faryabResources?.title  ?? ''}
        subtitle={t.indexPage.faryabResources?.subtitle  ?? ''}
        description={t.indexPage.faryabResources?.description  ?? ''}
        backgroundImage={marbleWhiteQuarry}
        alignment="center"
      />

      {/* ==================== DIGITAL MINING ==================== */}
      <MineralMegaSection
        id="digital-mining"
        title={t.indexPage.digitalTransformation?.title  ?? ''}
        subtitle={t.indexPage.digitalTransformation?.subtitle  ?? ''}
        description={t.indexPage.digitalTransformation?.description  ?? ''}
        backgroundImage={controlCenterOperations}
        variant="light"
      />

      {/* ==================== INNOVATION HUB ==================== */}
      <MineralMegaSection
        id="innovation"
        title={t.indexPage.miningInnovation?.title  ?? ''}
        subtitle={t.indexPage.miningInnovation?.subtitle  ?? ''}
        description={t.indexPage.miningInnovation?.description  ?? ''}
        backgroundImage={dataMegaCenter}
        alignment="right"
      />

      {/* ==================== WATER MANAGEMENT ==================== */}
      <MineralMegaSection
        id="water-management"
        title={t.indexPage.waterStewardship?.title  ?? ''}
        subtitle={t.indexPage.waterStewardship?.subtitle  ?? ''}
        description={t.indexPage.waterStewardship?.description  ?? ''}
        backgroundImage={environmentalRehabilitation}
        variant="light"
        alignment="center"
      />

      {/* ==================== TIMELINE ==================== */}
      <div id="timeline">
        <MineralTimelineSection
          title={t.indexPage.timeline?.sectionTitle  ?? ''}
          subtitle={t.indexPage.timeline?.sectionSubtitle  ?? ''}
          items={timelineItems}
        />
      </div>

      {/* ==================== VISION 2026-2040 ==================== */}
      <MineralMegaSection
        id="vision"
        title={t.indexPage.vision2030?.title  ?? ''}
        subtitle={t.indexPage.vision2030?.subtitle  ?? ''}
        description={t.indexPage.vision2030?.description  ?? ''}
        backgroundImage={visionStrategicMining}
        alignment="center"
      />

      {/* ==================== FINAL QUOTE ==================== */}
      <MineralQuoteSection
        quote={t.indexPage.finalQuote?.quote  ?? ''}
        backgroundImage={megaCopperPit}
      />

      {/* ==================== CLOSING ==================== */}
      <MineralMegaSection
        id="conclusion"
        title={t.indexPage.buildingTomorrow?.title  ?? ''}
        subtitle={t.indexPage.buildingTomorrow?.subtitle  ?? ''}
        description={t.indexPage.buildingTomorrow?.description  ?? ''}
        backgroundImage={sunsetMining}
        alignment="center"
      />

      {/* ==================== LEGACY ==================== */}
      <MineralMegaSection
        id="legacy"
        title={t.indexPage.nationalLegacy?.title  ?? ''}
        subtitle={t.indexPage.nationalLegacy?.subtitle  ?? ''}
        description={t.indexPage.nationalLegacy?.description  ?? ''}
        backgroundImage={nationalLegacyLandscape}
        variant="light"
      />

      {/* ==================== INTERACTIVE MAP ==================== */}
      <MapSection />

      {/* ==================== EXPANDED PROVINCE SECTIONS ==================== */}
      <MineralMegaSection
        id="kandahar-province"
        title={t.indexPage.provinces?.kandahar?.title  ?? ''}
        subtitle={t.indexPage.provinces?.kandahar?.subtitle  ?? ''}
        description={t.indexPage.provinces?.kandahar?.description  ?? ''}
        backgroundImage={kandaharSurvey}
      />

      <MineralMegaSection
        id="herat-province"
        title={t.indexPage.provinces?.herat?.title  ?? ''}
        subtitle={t.indexPage.provinces?.herat?.subtitle  ?? ''}
        description={t.indexPage.provinces?.herat?.description  ?? ''}
        backgroundImage={heratMarble}
        alignment="right"
      />

      <MineralMegaSection
        id="nuristan-province"
        title={t.indexPage.provinces?.nuristan?.title  ?? ''}
        subtitle={t.indexPage.provinces?.nuristan?.subtitle  ?? ''}
        description={t.indexPage.provinces?.nuristan?.description  ?? ''}
        backgroundImage={nuristanLithium}
      />

      <MineralMegaSection
        id="kunar-province"
        title={t.indexPage.provinces?.kunar?.title  ?? ''}
        subtitle={t.indexPage.provinces?.kunar?.subtitle  ?? ''}
        description={t.indexPage.provinces?.kunar?.description  ?? ''}
        backgroundImage={kunarGemstone}
        alignment="right"
      />

      <MineralMegaSection
        id="ghazni-province"
        title={t.indexPage.provinces?.ghazni?.title  ?? ''}
        subtitle={t.indexPage.provinces?.ghazni?.subtitle  ?? ''}
        description={t.indexPage.provinces?.ghazni?.description  ?? ''}
        backgroundImage={ghazniLithium}
      />

      <MineralMegaSection
        id="helmand-province"
        title={t.indexPage.provinces?.helmand?.title  ?? ''}
        subtitle={t.indexPage.provinces?.helmand?.subtitle  ?? ''}
        description={t.indexPage.provinces?.helmand?.description  ?? ''}
        backgroundImage={helmandCopper}
        alignment="right"
      />

      <MineralMegaSection
        id="faryab-province"
        title={t.indexPage.provinces?.faryab?.title  ?? ''}
        subtitle={t.indexPage.provinces?.faryab?.subtitle  ?? ''}
        description={t.indexPage.provinces?.faryab?.description  ?? ''}
        backgroundImage={faryabChromite}
      />

      <MineralMegaSection
        id="jowzjan-province"
        title={t.indexPage.provinces?.jowzjan?.title  ?? ''}
        subtitle={t.indexPage.provinces?.jowzjan?.subtitle  ?? ''}
        description={t.indexPage.provinces?.jowzjan?.description  ?? ''}
        backgroundImage={jowzjanSalt}
        alignment="right"
      />

      <MineralMegaSection
        id="takhar-province"
        title={t.indexPage.provinces?.takhar?.title  ?? ''}
        subtitle={t.indexPage.provinces?.takhar?.subtitle  ?? ''}
        description={t.indexPage.provinces?.takhar?.description  ?? ''}
        backgroundImage={takharGold}
      />

      <MineralMegaSection
        id="samangan-province"
        title={t.indexPage.provinces?.samangan?.title  ?? ''}
        subtitle={t.indexPage.provinces?.samangan?.subtitle  ?? ''}
        description={t.indexPage.provinces?.samangan?.description  ?? ''}
        backgroundImage={samanganTalc}
        alignment="right"
      />

      <MineralMegaSection
        id="baghlan-province"
        title={t.indexPage.provinces?.baghlan?.title  ?? ''}
        subtitle={t.indexPage.provinces?.baghlan?.subtitle  ?? ''}
        description={t.indexPage.provinces?.baghlan?.description  ?? ''}
        backgroundImage={baghlanCoal}
      />

      <MineralMegaSection
        id="parwan-province"
        title={t.indexPage.provinces?.parwan?.title  ?? ''}
        subtitle={t.indexPage.provinces?.parwan?.subtitle  ?? ''}
        description={t.indexPage.provinces?.parwan?.description  ?? ''}
        backgroundImage={parwanIron}
        alignment="right"
      />

      <MineralMegaSection
        id="laghman-province"
        title={t.indexPage.provinces?.laghman?.title  ?? ''}
        subtitle={t.indexPage.provinces?.laghman?.subtitle  ?? ''}
        description={t.indexPage.provinces?.laghman?.description  ?? ''}
        backgroundImage={laghmanBarite}
      />

      <MineralMegaSection
        id="kapisa-province"
        title={t.indexPage.provinces?.kapisa?.title  ?? ''}
        subtitle={t.indexPage.provinces?.kapisa?.subtitle  ?? ''}
        description={t.indexPage.provinces?.kapisa?.description  ?? ''}
        backgroundImage={kapisaGems}
        alignment="right"
      />

      <MineralMegaSection
        id="wardak-province"
        title={t.indexPage.provinces?.wardak?.title  ?? ''}
        subtitle={t.indexPage.provinces?.wardak?.subtitle  ?? ''}
        description={t.indexPage.provinces?.wardak?.description  ?? ''}
        backgroundImage={wardakHajigak}
      />

      <MineralMegaSection
        id="zabul-province"
        title={t.indexPage.provinces?.zabul?.title  ?? ''}
        subtitle={t.indexPage.provinces?.zabul?.subtitle  ?? ''}
        description={t.indexPage.provinces?.zabul?.description  ?? ''}
        backgroundImage={zabulRee}
        alignment="right"
      />

      <MineralMegaSection
        id="paktya-province"
        title={t.indexPage.provinces?.paktya?.title  ?? ''}
        subtitle={t.indexPage.provinces?.paktya?.subtitle  ?? ''}
        description={t.indexPage.provinces?.paktya?.description  ?? ''}
        backgroundImage={paktyaChromite}
      />

      <MineralMegaSection
        id="khost-province"
        title={t.indexPage.provinces?.khost?.title  ?? ''}
        subtitle={t.indexPage.provinces?.khost?.subtitle  ?? ''}
        description={t.indexPage.provinces?.khost?.description  ?? ''}
        backgroundImage={khostCement}
        alignment="right"
      />

      <MineralMegaSection
        id="daykundi-province"
        title={t.indexPage.provinces?.daykundi?.title  ?? ''}
        subtitle={t.indexPage.provinces?.daykundi?.subtitle  ?? ''}
        description={t.indexPage.provinces?.daykundi?.description  ?? ''}
        backgroundImage={daykundiMarble}
      />

      <MineralMegaSection
        id="uruzgan-province"
        title={t.indexPage.provinces?.uruzgan?.title  ?? ''}
        subtitle={t.indexPage.provinces?.uruzgan?.subtitle  ?? ''}
        description={t.indexPage.provinces?.uruzgan?.description  ?? ''}
        backgroundImage={uruzganCopper}
        alignment="right"
      />

      <MineralMegaSection
        id="ghor-province"
        title={t.indexPage.provinces?.ghor?.title  ?? ''}
        subtitle={t.indexPage.provinces?.ghor?.subtitle  ?? ''}
        description={t.indexPage.provinces?.ghor?.description  ?? ''}
        backgroundImage={ghorMinerals}
      />

      <MineralMegaSection
        id="farah-province"
        title={t.indexPage.provinces?.farah?.title  ?? ''}
        subtitle={t.indexPage.provinces?.farah?.subtitle  ?? ''}
        description={t.indexPage.provinces?.farah?.description  ?? ''}
        backgroundImage={farahIron}
        alignment="right"
      />

      <MineralMegaSection
        id="nimroz-province"
        title={t.indexPage.provinces?.nimroz?.title  ?? ''}
        subtitle={t.indexPage.provinces?.nimroz?.subtitle  ?? ''}
        description={t.indexPage.provinces?.nimroz?.description  ?? ''}
        backgroundImage={nimrozGold}
      />

      <MineralMegaSection
        id="sar-e-pul-province"
        title={t.indexPage.provinces?.sarEPul?.title  ?? ''}
        subtitle={t.indexPage.provinces?.sarEPul?.subtitle  ?? ''}
        description={t.indexPage.provinces?.sarEPul?.description  ?? ''}
        backgroundImage={sarEPulGas}
        alignment="right"
      />

      <MineralMegaSection
        id="panjshir-expanded"
        title={t.indexPage.panjshirEmeralds?.title  ?? ''}
        subtitle={t.indexPage.panjshirEmeralds?.subtitle  ?? ''}
        description={t.indexPage.panjshirEmeralds?.description  ?? ''}
        backgroundImage={panjshirEmerald02}
      />

      {/* ==================== MEGA EXPANSION - 100+ NEW SECTIONS ==================== */}

      {/* ==================== MINING TECHNOLOGY ==================== */}
      <MineralMegaSection
        id="autonomous-mining"
        title={t.indexPage.autonomousMining?.title  ?? ''}
        subtitle={t.indexPage.autonomousMining?.subtitle  ?? ''}
        description={t.indexPage.autonomousMining?.description  ?? ''}
        backgroundImage={megaHaulTruck}
        alignment="center"
      />

      <MineralMegaSection
        id="satellite-exploration"
        title={t.indexPage.satelliteMapping?.title  ?? ''}
        subtitle={t.indexPage.satelliteMapping?.subtitle  ?? ''}
        description={t.indexPage.satelliteMapping?.description  ?? ''}
        backgroundImage={geologicalSurvey}
        variant="light"
      />

      <MineralMegaSection
        id="drone-surveys"
        title={t.indexPage.droneSurveys?.title  ?? ''}
        subtitle={t.indexPage.droneSurveys?.subtitle  ?? ''}
        description={t.indexPage.droneSurveys?.description  ?? ''}
        backgroundImage={mineAerial}
        alignment="right"
      />

      <MineralMegaSection
        id="deep-core-drilling"
        title={t.indexPage.deepCoreDrilling?.title  ?? ''}
        subtitle={t.indexPage.deepCoreDrilling?.subtitle  ?? ''}
        description={t.indexPage.deepCoreDrilling?.description  ?? ''}
        backgroundImage={drilling}
      />

      <MineralMegaSection
        id="geophysical-surveys"
        title={t.indexPage.geophysicalSurveys?.title  ?? ''}
        subtitle={t.indexPage.geophysicalSurveys?.subtitle  ?? ''}
        description={t.indexPage.geophysicalSurveys?.description  ?? ''}
        backgroundImage={geologicalLayers}
        alignment="center"
        variant="light"
      />

      {/* ==================== PROCESSING EXPANSION ==================== */}
      <MineralMegaSection
        id="flotation-processing"
        title={t.indexPage.flotationProcessing?.title  ?? ''}
        subtitle={t.indexPage.flotationProcessing?.subtitle  ?? ''}
        description={t.indexPage.flotationProcessing?.description  ?? ''}
        backgroundImage={beneficiation}
      />

      <MineralMegaSection
        id="hydrometallurgical"
        title={t.indexPage.hydrometallurgical?.title  ?? ''}
        subtitle={t.indexPage.hydrometallurgical?.subtitle  ?? ''}
        description={t.indexPage.hydrometallurgical?.description  ?? ''}
        backgroundImage={laboratory}
        alignment="right"
        variant="light"
      />

      <MineralMegaSection
        id="electrorefining"
        title={t.indexPage.electrorefining?.title  ?? ''}
        subtitle={t.indexPage.electrorefining?.subtitle  ?? ''}
        description={t.indexPage.electrorefining?.description  ?? ''}
        backgroundImage={refinery}
      />

      <MineralMegaSection
        id="slag-processing"
        title={t.indexPage.slagProcessing?.title  ?? ''}
        subtitle={t.indexPage.slagProcessing?.subtitle  ?? ''}
        description={t.indexPage.slagProcessing?.description  ?? ''}
        backgroundImage={smelting}
        alignment="center"
        variant="light"
      />

      {/* ==================== INFRASTRUCTURE EXPANSION ==================== */}
      <MineralMegaSection
        id="mining-railways"
        title={t.indexPage.miningRailways?.title  ?? ''}
        subtitle={t.indexPage.miningRailways?.subtitle  ?? ''}
        description={t.indexPage.miningRailways?.description  ?? ''}
        backgroundImage={exportTrain}
      />

      <MineralMegaSection
        id="conveyor-systems"
        title={t.indexPage.conveyorSystems?.title  ?? ''}
        subtitle={t.indexPage.conveyorSystems?.subtitle  ?? ''}
        description={t.indexPage.conveyorSystems?.description  ?? ''}
        backgroundImage={conveyorSystem}
        alignment="right"
        variant="light"
      />

      <MineralMegaSection
        id="power-infrastructure"
        title={t.indexPage.powerInfrastructure?.title  ?? ''}
        subtitle={t.indexPage.powerInfrastructure?.subtitle  ?? ''}
        description={t.indexPage.powerInfrastructure?.description  ?? ''}
        backgroundImage={infrastructure}
      />

      <MineralMegaSection
        id="water-infrastructure"
        title={t.indexPage.waterInfrastructure?.title  ?? ''}
        subtitle={t.indexPage.waterInfrastructure?.subtitle  ?? ''}
        description={t.indexPage.waterInfrastructure?.description  ?? ''}
        backgroundImage={rehabilitation}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="port-facilities"
        title={t.indexPage.portFacilities?.title  ?? ''}
        subtitle={t.indexPage.portFacilities?.subtitle  ?? ''}
        description={t.indexPage.portFacilities?.description  ?? ''}
        backgroundImage={portFacility}
      />

      {/* ==================== RESEARCH & DEVELOPMENT ==================== */}
      <MineralMegaSection
        id="mining-university"
        title={t.indexPage.miningUniversity?.title  ?? ''}
        subtitle={t.indexPage.miningUniversity?.subtitle  ?? ''}
        description={t.indexPage.miningUniversity?.description  ?? ''}
        backgroundImage={testingEquipment}
        alignment="right"
        variant="light"
      />

      <MineralMegaSection
        id="geological-institute"
        title={t.indexPage.geologicalInstitute?.title  ?? ''}
        subtitle={t.indexPage.geologicalInstitute?.subtitle  ?? ''}
        description={t.indexPage.geologicalInstitute?.description  ?? ''}
        backgroundImage={coreSamples}
      />

      <MineralMegaSection
        id="metallurgical-research"
        title={t.indexPage.metallurgicalResearch?.title  ?? ''}
        subtitle={t.indexPage.metallurgicalResearch?.subtitle  ?? ''}
        description={t.indexPage.metallurgicalResearch?.description  ?? ''}
        backgroundImage={labAnalysis}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="environmental-research"
        title={t.indexPage.environmentalResearch?.title  ?? ''}
        subtitle={t.indexPage.environmentalResearch?.subtitle  ?? ''}
        description={t.indexPage.environmentalResearch?.description  ?? ''}
        backgroundImage={environmental}
      />

      {/* ==================== ECONOMIC IMPACT EXPANSION ==================== */}
      <MineralMegaSection
        id="gdp-contribution"
        title={t.indexPage.economicTransformation?.title  ?? ''}
        subtitle={t.indexPage.economicTransformation?.subtitle  ?? ''}
        description={t.indexPage.economicTransformation?.description  ?? ''}
        backgroundImage={sunsetMining}
        alignment="right"
        variant="light"
      />

      <MineralMegaSection
        id="employment-creation"
        title={t.indexPage.employmentRevolution?.title  ?? ''}
        subtitle={t.indexPage.employmentRevolution?.subtitle  ?? ''}
        description={t.indexPage.employmentRevolution?.description  ?? ''}
        backgroundImage={workers}
      />

      <MineralMegaSection
        id="regional-development"
        title={t.indexPage.regionalDevelopment?.title  ?? ''}
        subtitle={t.indexPage.regionalDevelopment?.subtitle  ?? ''}
        description={t.indexPage.regionalDevelopment?.description  ?? ''}
        backgroundImage={miningCamp}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="export-revenue"
        title={t.indexPage.exportRevenue?.title  ?? ''}
        subtitle={t.indexPage.exportRevenue?.subtitle  ?? ''}
        description={t.indexPage.exportRevenue?.description  ?? ''}
        backgroundImage={exportLogistics}
      />

      <MineralMegaSection
        id="tax-revenue"
        title={t.indexPage.governmentRevenue?.title  ?? ''}
        subtitle={t.indexPage.governmentRevenue?.subtitle  ?? ''}
        description={t.indexPage.governmentRevenue?.description  ?? ''}
        backgroundImage={governmentRevenueImg}
        alignment="right"
        variant="light"
      />

      {/* ==================== INVESTMENT EXPANSION ==================== */}
      <MineralMegaSection
        id="foreign-investment"
        title={t.indexPage.foreignInvestment?.title  ?? ''}
        subtitle={t.indexPage.foreignInvestment?.subtitle  ?? ''}
        description={t.indexPage.foreignInvestment?.description  ?? ''}
        backgroundImage={investmentConference}
      />

      <MineralMegaSection
        id="domestic-investment"
        title={t.indexPage.domesticInvestment?.title  ?? ''}
        subtitle={t.indexPage.domesticInvestment?.subtitle  ?? ''}
        description={t.indexPage.domesticInvestment?.description  ?? ''}
        backgroundImage={domesticInvestmentImg}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="mining-finance"
        title={t.indexPage.miningFinance?.title  ?? ''}
        subtitle={t.indexPage.miningFinance?.subtitle  ?? ''}
        description={t.indexPage.miningFinance?.description  ?? ''}
        backgroundImage={dataCenter}
      />

      <MineralMegaSection
        id="insurance-services"
        title={t.indexPage.miningInsurance?.title  ?? ''}
        subtitle={t.indexPage.miningInsurance?.subtitle  ?? ''}
        description={t.indexPage.miningInsurance?.description  ?? ''}
        backgroundImage={controlRoom}
        alignment="right"
        variant="light"
      />

      {/* ==================== SUSTAINABILITY EXPANSION ==================== */}
      <MineralMegaSection
        id="carbon-neutral"
        title={t.indexPage.carbonNeutral?.title  ?? ''}
        subtitle={t.indexPage.carbonNeutral?.subtitle  ?? ''}
        description={t.indexPage.carbonNeutral?.description  ?? ''}
        backgroundImage={environmentalRehabilitation}
      />

      <MineralMegaSection
        id="biodiversity-protection"
        title={t.indexPage.biodiversityProtection?.title  ?? ''}
        subtitle={t.indexPage.biodiversityProtection?.subtitle  ?? ''}
        description={t.indexPage.biodiversityProtection?.description  ?? ''}
        backgroundImage={rehabilitation}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="mine-closure"
        title={t.indexPage.mineClosure?.title  ?? ''}
        subtitle={t.indexPage.mineClosure?.subtitle  ?? ''}
        description={t.indexPage.mineClosure?.description  ?? ''}
        backgroundImage={environmental}
      />

      <MineralMegaSection
        id="circular-economy"
        title={t.indexPage.circularEconomy?.title  ?? ''}
        subtitle={t.indexPage.circularEconomy?.subtitle  ?? ''}
        description={t.indexPage.circularEconomy?.description  ?? ''}
        backgroundImage={stockyard}
        alignment="right"
        variant="light"
      />

      {/* ==================== SOCIAL IMPACT ==================== */}
      <MineralMegaSection
        id="education-programs"
        title={t.indexPage.educationPrograms?.title  ?? ''}
        subtitle={t.indexPage.educationPrograms?.subtitle  ?? ''}
        description={t.indexPage.educationPrograms?.description  ?? ''}
        backgroundImage={communitySchool}
      />

      <MineralMegaSection
        id="healthcare-facilities"
        title={t.indexPage.healthcareFacilities?.title  ?? ''}
        subtitle={t.indexPage.healthcareFacilities?.subtitle  ?? ''}
        description={t.indexPage.healthcareFacilities?.description  ?? ''}
        backgroundImage={community}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="womens-employment"
        title={t.indexPage.womensEmployment?.title  ?? ''}
        subtitle={t.indexPage.womensEmployment?.subtitle  ?? ''}
        description={t.indexPage.womensEmployment?.description  ?? ''}
        backgroundImage={workers}
      />

      <MineralMegaSection
        id="artisanal-integration"
        title={t.indexPage.artisanalIntegration?.title  ?? ''}
        subtitle={t.indexPage.artisanalIntegration?.subtitle  ?? ''}
        description={t.indexPage.artisanalIntegration?.description  ?? ''}
        backgroundImage={goldMining}
        alignment="right"
        variant="light"
      />

      {/* ==================== TECHNOLOGY INNOVATION ==================== */}
      <MineralMegaSection
        id="ai-mining"
        title={t.indexPage.aiMining?.title  ?? ''}
        subtitle={t.indexPage.aiMining?.subtitle  ?? ''}
        description={t.indexPage.aiMining?.description  ?? ''}
        backgroundImage={dataMegaCenter}
      />

      <MineralMegaSection
        id="robotics"
        title={t.indexPage.robotics?.title  ?? ''}
        subtitle={t.indexPage.robotics?.subtitle  ?? ''}
        description={t.indexPage.robotics?.description  ?? ''}
        backgroundImage={undergroundMining}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="digital-twins"
        title={t.indexPage.digitalTwins?.title  ?? ''}
        subtitle={t.indexPage.digitalTwins?.subtitle  ?? ''}
        description={t.indexPage.digitalTwins?.description  ?? ''}
        backgroundImage={controlCenterOperations}
      />

      <MineralMegaSection
        id="blockchain-supply"
        title={t.indexPage.blockchainSupply?.title  ?? ''}
        subtitle={t.indexPage.blockchainSupply?.subtitle  ?? ''}
        description={t.indexPage.blockchainSupply?.description  ?? ''}
        backgroundImage={dataCenter}
        alignment="right"
        variant="light"
      />

      {/* ==================== GLOBAL PARTNERSHIPS ==================== */}
      <MineralMegaSection
        id="china-partnership"
        title={t.indexPage.chinaPartnership?.title  ?? ''}
        subtitle={t.indexPage.chinaPartnership?.subtitle  ?? ''}
        description={t.indexPage.chinaPartnership?.description  ?? ''}
        backgroundImage={partnershipMegaSummit}
      />

      <MineralMegaSection
        id="europe-partnership"
        title={t.indexPage.europePartnership?.title  ?? ''}
        subtitle={t.indexPage.europePartnership?.subtitle  ?? ''}
        description={t.indexPage.europePartnership?.description  ?? ''}
        backgroundImage={globalPartnershipMinerals}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="us-partnership"
        title={t.indexPage.usPartnership?.title  ?? ''}
        subtitle={t.indexPage.usPartnership?.subtitle  ?? ''}
        description={t.indexPage.usPartnership?.description  ?? ''}
        backgroundImage={investmentConference}
      />

      <MineralMegaSection
        id="regional-partnership"
        title={t.indexPage.regionalPartnership?.title  ?? ''}
        subtitle={t.indexPage.regionalPartnership?.subtitle  ?? ''}
        description={t.indexPage.regionalPartnership?.description  ?? ''}
        backgroundImage={railwayExportTerminal}
        alignment="right"
        variant="light"
      />

      {/* ==================== GEMSTONE MEGA EXPANSION ==================== */}
      <MineralMegaSection
        id="emerald-grading"
        title={t.indexPage.emeraldGrading?.title  ?? ''}
        subtitle={t.indexPage.emeraldGrading?.subtitle  ?? ''}
        description={t.indexPage.emeraldGrading?.description  ?? ''}
        backgroundImage={emeraldMine}
      />

      <MineralMegaSection
        id="lapis-heritage"
        title={t.indexPage.lapisHeritage?.title  ?? ''}
        subtitle={t.indexPage.lapisHeritage?.subtitle  ?? ''}
        description={t.indexPage.lapisHeritage?.description  ?? ''}
        backgroundImage={lapisLazuli}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="ruby-deposits"
        title={t.indexPage.rubyDeposits?.title  ?? ''}
        subtitle={t.indexPage.rubyDeposits?.subtitle  ?? ''}
        description={t.indexPage.rubyDeposits?.description  ?? ''}
        backgroundImage={rubySapphire}
      />

      <MineralMegaSection
        id="tourmaline-varieties"
        title={t.indexPage.tourmalineVarieties?.title  ?? ''}
        subtitle={t.indexPage.tourmalineVarieties?.subtitle  ?? ''}
        description={t.indexPage.tourmalineVarieties?.description  ?? ''}
        backgroundImage={tourmaline}
        alignment="right"
        variant="light"
      />

      <MineralMegaSection
        id="gem-cutting"
        title={t.indexPage.gemCutting?.title  ?? ''}
        subtitle={t.indexPage.gemCutting?.subtitle  ?? ''}
        description={t.indexPage.gemCutting?.description  ?? ''}
        backgroundImage={rubyCollection}
      />

      {/* ==================== STRATEGIC MINERALS EXPANSION ==================== */}
      <MineralMegaSection
        id="cobalt-supply"
        title={t.indexPage.cobaltSupply?.title  ?? ''}
        subtitle={t.indexPage.cobaltSupply?.subtitle  ?? ''}
        description={t.indexPage.cobaltSupply?.description  ?? ''}
        backgroundImage={cobaltOre}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="nickel-deposits"
        title={t.indexPage.nickelDeposits?.title  ?? ''}
        subtitle={t.indexPage.nickelDeposits?.subtitle  ?? ''}
        description={t.indexPage.nickelDeposits?.description  ?? ''}
        backgroundImage={nickelOre}
      />

      <MineralMegaSection
        id="tungsten-supply"
        title={t.indexPage.tungstenSupply?.title  ?? ''}
        subtitle={t.indexPage.tungstenSupply?.subtitle  ?? ''}
        description={t.indexPage.tungstenSupply?.description  ?? ''}
        backgroundImage={panjshirValley}
        alignment="right"
        variant="light"
      />

      <MineralMegaSection
        id="antimony-deposits"
        title={t.indexPage.antimonyDeposits?.title  ?? ''}
        subtitle={t.indexPage.antimonyDeposits?.subtitle  ?? ''}
        description={t.indexPage.antimonyDeposits?.description  ?? ''}
        backgroundImage={leadZinc}
      />

      <MineralMegaSection
        id="tantalum-niobium"
        title={t.indexPage.tantalumNiobium?.title  ?? ''}
        subtitle={t.indexPage.tantalumNiobium?.subtitle  ?? ''}
        description={t.indexPage.tantalumNiobium?.description  ?? ''}
        backgroundImage={rareEarth}
        alignment="center"
        variant="light"
      />

      {/* ==================== FUTURE VISION ==================== */}
      <MineralMegaSection
        id="vision-2050"
        title={t.indexPage.vision2050?.title  ?? ''}
        subtitle={t.indexPage.vision2050?.subtitle  ?? ''}
        description={t.indexPage.vision2050?.description  ?? ''}
        backgroundImage={futureVisionSustainable}
      />

      <MineralMegaSection
        id="sovereign-wealth"
        title={t.indexPage.sovereignWealth?.title  ?? ''}
        subtitle={t.indexPage.sovereignWealth?.subtitle  ?? ''}
        description={t.indexPage.sovereignWealth?.description  ?? ''}
        backgroundImage={sunsetMining}
        alignment="right"
        variant="light"
      />

      <MineralMegaSection
        id="technology-hub"
        title={t.indexPage.technologyHub?.title  ?? ''}
        subtitle={t.indexPage.technologyHub?.subtitle  ?? ''}
        description={t.indexPage.technologyHub?.description  ?? ''}
        backgroundImage={dataMegaCenter}
      />

      <MineralMegaSection
        id="sustainable-legacy"
        title={t.indexPage.sustainableLegacy?.title  ?? ''}
        subtitle={t.indexPage.sustainableLegacy?.subtitle  ?? ''}
        description={t.indexPage.sustainableLegacy?.description  ?? ''}
        backgroundImage={environmentalRehabilitation}
        alignment="center"
        variant="light"
      />

      <MineralMegaSection
        id="final-vision"
        title={t.indexPage.finalVision?.title  ?? ''}
        subtitle={t.indexPage.finalVision?.subtitle  ?? ''}
        description={t.indexPage.finalVision?.description  ?? ''}
        backgroundImage={megaCopperPit}
      />



      {/* ==================== CONTACT SECTION ==================== */}
      <ContactSection />

      {/* ==================== FOOTER MEGA MENU ==================== */}
      <FooterMegaMenu />
    </div>
  );
};

export default Index;
