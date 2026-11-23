// Section-level images for detail page content blocks
const copperOre = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/copper-ore-specimen.jpg';
const lithiumPegmatite = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/lithium-pegmatite-specimen.jpg';
const emeraldCrystals = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/emerald-crystals-matrix.jpg';
const lapisLazuli = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/lapis-lazuli-raw.jpg';
const goldQuartz = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/gold-quartz-specimens.jpg';
const chromiteOre = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/chromite-ore-specimen.jpg';
const marbleSlab = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/marble-polished-slab.jpg';
const ironOre = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/iron-ore-magnetite.jpg';
const rubyCorundum = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ruby-corundum-matrix.jpg';
const rareEarth = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/rare-earth-minerals.jpg';
const coalAnthracite = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/coal-anthracite-specimen.jpg';
const sapphireCrystals = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/sapphire-crystals-rough.jpg';
const tourmalineCrystals = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/tourmaline-crystals.jpg';
const aquamarineBeryl = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/aquamarine-beryl-crystal.jpg';
const processingFacility = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/processing-facility-aerial.jpg';
const coreSamples = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/geological-core-samples.jpg';

// Province-specific section images (unique)
const provinceTerracedValley = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-terraced-valley.jpg';
const provinceMountainVillage = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-mountain-village.jpg';
const provinceGeologicalSurvey = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-geological-survey.jpg';
const provinceRiverGorge = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-river-gorge.jpg';
const provinceDesertPlateau = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-desert-plateau.jpg';
const provinceAlpinePeaks = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-alpine-peaks.jpg';
const provinceMineralMarket = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-mineral-market.jpg';
const provinceInfrastructure = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/province-infrastructure.jpg';

// Operations-specific section images (unique)
const opsCrushingPlant = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-crushing-plant.jpg';
const opsLaboratory = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-laboratory.jpg';
const opsDrillingRig = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-drilling-rig.jpg';
const opsSafetyGear = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-safety-gear.jpg';
const opsEnvironmental = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-environmental.jpg';
const opsControlRoom = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-control-room.jpg';
const opsTransport = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-transport.jpg';
const opsWarehouse = 'https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/sections/ops-warehouse.jpg';

// Map mineral category prefixes to relevant section images (cycled through)
const mineralSectionImages: Record<string, string[]> = {
  'copper': [copperOre, opsCrushingPlant, ironOre, coreSamples],
  'lithium': [lithiumPegmatite, coreSamples, opsLaboratory, rareEarth],
  'gems/emeralds': [emeraldCrystals, coreSamples, provinceMineralMarket, goldQuartz],
  'gems/lapis': [lapisLazuli, coreSamples, provinceMineralMarket, goldQuartz],
  'gems/rubies': [rubyCorundum, coreSamples, emeraldCrystals, opsLaboratory],
  'gems/sapphires': [sapphireCrystals, coreSamples, rubyCorundum, provinceMineralMarket],
  'gems/tourmaline': [tourmalineCrystals, coreSamples, emeraldCrystals, opsLaboratory],
  'gems/aquamarine': [aquamarineBeryl, coreSamples, tourmalineCrystals, provinceMineralMarket],
  'gold': [goldQuartz, opsCrushingPlant, coreSamples, copperOre],
  'ree': [rareEarth, coreSamples, opsLaboratory, lithiumPegmatite],
  'chromite': [chromiteOre, opsCrushingPlant, ironOre, coreSamples],
  'marble': [marbleSlab, opsCrushingPlant, coreSamples, opsWarehouse],
  'coal': [coalAnthracite, opsTransport, ironOre, coreSamples],
  'iron': [ironOre, opsCrushingPlant, copperOre, coreSamples],
  'silver': [goldQuartz, chromiteOre, opsLaboratory, coreSamples],
  'lead-zinc': [chromiteOre, copperOre, opsCrushingPlant, coreSamples],
  'cobalt-nickel': [rareEarth, chromiteOre, opsLaboratory, coreSamples],
  'aluminum': [marbleSlab, opsCrushingPlant, coreSamples, ironOre],
  'strategic-metals': [rareEarth, ironOre, chromiteOre, opsControlRoom],
  'uranium': [rareEarth, coreSamples, opsLaboratory, chromiteOre],
  'talc-barite': [marbleSlab, coreSamples, opsCrushingPlant, coalAnthracite],
  'gypsum-limestone': [marbleSlab, opsCrushingPlant, coreSamples, opsWarehouse],
  'clay-kaolin': [marbleSlab, coreSamples, opsLaboratory, coalAnthracite],
};

// Operations section images - ALL UNIQUE
const operationsSectionImages: string[] = [
  opsCrushingPlant, opsLaboratory, opsDrillingRig, opsSafetyGear,
  opsEnvironmental, opsControlRoom, opsTransport, opsWarehouse,
];

// Province section images - ALL UNIQUE
const provinceSectionImages: string[] = [
  provinceTerracedValley, provinceMountainVillage, provinceGeologicalSurvey, provinceRiverGorge,
  provinceDesertPlateau, provinceAlpinePeaks, provinceMineralMarket, provinceInfrastructure,
];

// Timeline section images - MIX OF UNIQUE
const timelineSectionImages: string[] = [
  provinceTerracedValley, provinceRiverGorge, provinceMountainVillage, provinceGeologicalSurvey,
  provinceDesertPlateau, provinceAlpinePeaks, opsLaboratory, opsDrillingRig,
];

// Investment section images - MIX OF UNIQUE
const investmentSectionImages: string[] = [
  opsCrushingPlant, opsControlRoom, provinceInfrastructure, opsTransport,
  opsEnvironmental, opsWarehouse, opsDrillingRig, opsLaboratory,
];

export const getSectionImage = (
  pageType: 'mineral' | 'operations' | 'province' | 'timeline' | 'investment',
  pagePath: string,
  sectionIndex: number
): string => {
  if (pageType === 'mineral') {
    const key = Object.keys(mineralSectionImages).find(
      k => pagePath.startsWith(k)
    );
    const images = key ? mineralSectionImages[key] : [copperOre, opsCrushingPlant, coreSamples, goldQuartz];
    return images[sectionIndex % images.length];
  }
  
  if (pageType === 'operations') {
    return operationsSectionImages[sectionIndex % operationsSectionImages.length];
  }
  
  if (pageType === 'province') {
    return provinceSectionImages[sectionIndex % provinceSectionImages.length];
  }
  
  if (pageType === 'timeline') {
    return timelineSectionImages[sectionIndex % timelineSectionImages.length];
  }
  
  if (pageType === 'investment') {
    return investmentSectionImages[sectionIndex % investmentSectionImages.length];
  }
  
  return copperOre;
};
