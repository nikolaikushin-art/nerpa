import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

// Import all gallery images per province
const kabulSkyline = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-modern-skyline.jpg";
const kabulFinancial = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-financial-district.jpg";
const kabulCity = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-city.jpg";
const kabulOld = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kabul-skyline.jpg";

const heratCitadel = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-citadel.jpg";
const heratAncient = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-ancient-citadel.jpg";
const heratGolden = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-citadel-golden.jpg";
const heratMosque = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/herat-friday-mosque.jpg";

const balkhMosque = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/balkh-blue-mosque.jpg";
const balkhDomes = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/balkh-blue-domes.jpg";
const balkhShrine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/balkh-shrine.jpg";

const kandaharPom = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate.jpg";
const kandaharHarvest = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate-harvest.jpg";
const kandaharFields = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate-fields.jpg";
const kandaharOrchards = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-orchards.jpg";

const bamyanBuddha = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/bamyan-buddha.jpg";
const bamyanNiches = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/bamyan-buddha-niches.jpg";
const bamyanSite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/bamyan-buddha-site.jpg";
const bamyanCliffs = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/bamyan-cliffs.jpg";

const nangarharValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-valley.jpg";
const nangarharOranges = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-orange-groves.jpg";
const nangarharOrangeValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-orange-valley.jpg";
const nangarharCitrus = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nangarhar-citrus.jpg";

const panjshirValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/panjshir-valley.jpg";
const panjshirRiver = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/panjshir-emerald-river.jpg";
const panjshirEmerald = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/panjshir-emerald-valley.jpg";
const panjshirGorge = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/panjshir-gorge.jpg";

const badakhshanGems = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badakhshan-gems.jpg";
const badakhshanLapis = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badakhshan-lapis-mines.jpg";
const badakhshanMountains = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badakhshan-mountains.jpg";
const badakhshanLapisOld = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badakhshan-lapis.jpg";

const helmandRiver = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/helmand-river.jpg";
const helmandGreen = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/helmand-green-valley.jpg";
const helmandIrrigation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/helmand-irrigation.jpg";
const helmandAgri = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/helmand-agricultural-valley.jpg";

const kunduzCotton = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunduz-cotton.jpg";
const kunduzHarvest = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunduz-cotton-harvest.jpg";
const kunduzPlains = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunduz-cotton-plains.jpg";

const faryabCarpets = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/faryab-carpets.jpg";
const faryabWeaving = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/faryab-carpet-weaving.jpg";
const faryabWorkshop = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/faryab-carpet-workshop.jpg";
const faryabLooms = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/faryab-looms.jpg";

const ghazniMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghazni-mining.jpg";
const ghazniHeritage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghazni-minaret-heritage.jpg";
const ghazniMinarets = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghazni-minarets.jpg";
const ghazniTowers = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghazni-towers.jpg";

const logarCopper = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/logar-copper.jpg";
const logarOperation = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/logar-copper-operation.jpg";
const logarSite = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/logar-copper-site.jpg";
const logarMining = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/logar-mining.jpg";

const jowzjanGas = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/jowzjan-gas.jpg";
const jowzjanPlant = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/jowzjan-gas-plant.jpg";

const ghorMinaret = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghor-minaret.jpg";
const ghorJam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghor-jam.jpg";
const ghorValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/ghor-minaret-valley.jpg";

const farahSolar = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/farah-solar.jpg";
const farahPanels = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/farah-solar-panels.jpg";
const farahFarm = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/farah-solar-farm.jpg";

const badghisPistachio = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badghis-pistachio.jpg";
const badghisHills = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badghis-pistachio-hills.jpg";
const badghisPistachios = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/badghis-pistachios.jpg";

const baghlanSugar = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/baghlan-sugar.jpg";
const baghlanFactory = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/baghlan-sugar-factory.jpg";

const kapisaGrapes = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kapisa-grapes.jpg";
const kapisaVineyard = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kapisa-vineyard-hills.jpg";

const khostTrade = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/khost-trade.jpg";
const khostBorder = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/khost-border-market.jpg";

const kunarHoney = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunar-honey.jpg";
const kunarBeekeeping = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kunar-mountain-beekeeping.jpg";

const laghmanCitrus = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/laghman-citrus.jpg";
const laghmanValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/laghman-citrus-valley.jpg";

const nimrozDesert = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nimroz-desert.jpg";
const nimrozDunes = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nimroz-sand-dunes.jpg";

const nuristanVillage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nuristan-village.jpg";
const nuristanHouses = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/nuristan-wooden-houses.jpg";

const paktyaForests = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktya-forests.jpg";
const paktyaPines = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktya-pine-mountains.jpg";

const paktikaPeaks = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktika-remote-peaks.jpg";
const paktikaWild = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/paktika-wilderness.jpg";

const parwanSalang = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/parwan-salang.jpg";
const parwanHighway = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/parwan-salang-highway.jpg";

const samanganStupa = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/samangan-stupa.jpg";
const samanganBuddhist = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/samangan-buddhist-site.jpg";

const sarEPolSheep = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/sar-e-pol-sheep.jpg";
const sarEPolShepherds = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/sar-e-pol-shepherds.jpg";

const takharRice = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/takhar-rice.jpg";
const takharTerraces = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/takhar-rice-terraces.jpg";

const uruzganValleys = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/uruzgan-valleys.jpg";
const uruzganHighland = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/uruzgan-highland-villages.jpg";

const wardakApples = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/wardak-apples.jpg";
const wardakHarvest = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/wardak-apple-harvest.jpg";

const zabulFortress = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/zabul-fortress.jpg";
const zabulRuins = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/zabul-qalat-ruins.jpg";

const daykundiLakes = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/daykundi-lakes.jpg";
const daykundiAlpine = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/daykundi-alpine-lakes.jpg";

interface GalleryImage {
  src: string;
  caption: string;
}

const provinceGalleries: Record<string, GalleryImage[]> = {
  kabul: [
    { src: kabulSkyline, caption: "Modern Kabul Skyline" },
    { src: kabulFinancial, caption: "Financial District" },
    { src: kabulCity, caption: "Kabul Cityscape" },
    { src: kabulOld, caption: "Historic Panorama" },
  ],
  herat: [
    { src: heratCitadel, caption: "Herat Citadel" },
    { src: heratAncient, caption: "Ancient Fortress Walls" },
    { src: heratGolden, caption: "Golden Hour at Citadel" },
    { src: heratMosque, caption: "Friday Mosque" },
  ],
  balkh: [
    { src: balkhMosque, caption: "Blue Mosque of Mazar" },
    { src: balkhDomes, caption: "Turquoise Domes" },
    { src: balkhShrine, caption: "Shrine of Hazrat Ali" },
  ],
  kandahar: [
    { src: kandaharPom, caption: "Pomegranate Harvest" },
    { src: kandaharHarvest, caption: "Orchards at Dawn" },
    { src: kandaharFields, caption: "Pomegranate Fields" },
    { src: kandaharOrchards, caption: "Kandahari Orchards" },
  ],
  bamyan: [
    { src: bamyanBuddha, caption: "Buddha Niches" },
    { src: bamyanNiches, caption: "Carved Cliff Niches" },
    { src: bamyanSite, caption: "Archaeological Site" },
    { src: bamyanCliffs, caption: "Valley Cliffs" },
  ],
  nangarhar: [
    { src: nangarharValley, caption: "Nangarhar Valley" },
    { src: nangarharOranges, caption: "Orange Groves" },
    { src: nangarharOrangeValley, caption: "Citrus Valley" },
    { src: nangarharCitrus, caption: "Citrus Orchards" },
  ],
  panjshir: [
    { src: panjshirValley, caption: "Panjshir Valley" },
    { src: panjshirRiver, caption: "Emerald River" },
    { src: panjshirEmerald, caption: "Emerald Valley" },
    { src: panjshirGorge, caption: "Mountain Gorge" },
  ],
  badakhshan: [
    { src: badakhshanGems, caption: "Gemstone Mining" },
    { src: badakhshanLapis, caption: "Lapis Lazuli Mines" },
    { src: badakhshanMountains, caption: "Mountain Peaks" },
    { src: badakhshanLapisOld, caption: "Raw Lapis" },
  ],
  helmand: [
    { src: helmandRiver, caption: "Helmand River" },
    { src: helmandGreen, caption: "Green Valley" },
    { src: helmandIrrigation, caption: "Irrigation Systems" },
    { src: helmandAgri, caption: "Agricultural Valley" },
  ],
  kunduz: [
    { src: kunduzCotton, caption: "Cotton Fields" },
    { src: kunduzHarvest, caption: "Cotton Harvest" },
    { src: kunduzPlains, caption: "Cotton Plains" },
  ],
  faryab: [
    { src: faryabCarpets, caption: "Carpet Art" },
    { src: faryabWeaving, caption: "Carpet Weaving" },
    { src: faryabWorkshop, caption: "Workshop" },
    { src: faryabLooms, caption: "Traditional Looms" },
  ],
  ghazni: [
    { src: ghazniMining, caption: "Mining Operations" },
    { src: ghazniHeritage, caption: "Minaret Heritage" },
    { src: ghazniMinarets, caption: "Historic Minarets" },
    { src: ghazniTowers, caption: "Ghazni Towers" },
  ],
  logar: [
    { src: logarCopper, caption: "Copper Deposits" },
    { src: logarOperation, caption: "Mining Operation" },
    { src: logarSite, caption: "Copper Site" },
    { src: logarMining, caption: "Mining Activity" },
  ],
  jowzjan: [
    { src: jowzjanGas, caption: "Natural Gas" },
    { src: jowzjanPlant, caption: "Gas Processing" },
  ],
  ghor: [
    { src: ghorMinaret, caption: "Minaret of Jam" },
    { src: ghorJam, caption: "Jam Heritage" },
    { src: ghorValley, caption: "Minaret Valley" },
  ],
  farah: [
    { src: farahSolar, caption: "Solar Energy" },
    { src: farahPanels, caption: "Solar Panels" },
    { src: farahFarm, caption: "Solar Farm" },
  ],
  badghis: [
    { src: badghisPistachio, caption: "Pistachio Forests" },
    { src: badghisHills, caption: "Green Hills" },
    { src: badghisPistachios, caption: "Pistachio Harvest" },
  ],
  baghlan: [
    { src: baghlanSugar, caption: "Sugar Industry" },
    { src: baghlanFactory, caption: "Sugar Factory" },
  ],
  kapisa: [
    { src: kapisaGrapes, caption: "Grape Vineyards" },
    { src: kapisaVineyard, caption: "Vineyard Hills" },
  ],
  khost: [
    { src: khostTrade, caption: "Border Trade" },
    { src: khostBorder, caption: "Border Market" },
  ],
  kunar: [
    { src: kunarHoney, caption: "Mountain Honey" },
    { src: kunarBeekeeping, caption: "Beekeeping" },
  ],
  laghman: [
    { src: laghmanCitrus, caption: "Citrus Groves" },
    { src: laghmanValley, caption: "Citrus Valley" },
  ],
  nimroz: [
    { src: nimrozDesert, caption: "Desert Landscape" },
    { src: nimrozDunes, caption: "Sand Dunes" },
  ],
  nuristan: [
    { src: nuristanVillage, caption: "Mountain Village" },
    { src: nuristanHouses, caption: "Wooden Architecture" },
  ],
  paktya: [
    { src: paktyaForests, caption: "Pine Forests" },
    { src: paktyaPines, caption: "Mountain Pines" },
  ],
  paktika: [
    { src: paktikaPeaks, caption: "Remote Peaks" },
    { src: paktikaWild, caption: "Wilderness" },
  ],
  parwan: [
    { src: parwanSalang, caption: "Salang Pass" },
    { src: parwanHighway, caption: "Salang Highway" },
  ],
  samangan: [
    { src: samanganStupa, caption: "Takht-i-Rustam" },
    { src: samanganBuddhist, caption: "Buddhist Site" },
  ],
  "sar-e-pol": [
    { src: sarEPolSheep, caption: "Sheep Herding" },
    { src: sarEPolShepherds, caption: "Shepherds" },
  ],
  takhar: [
    { src: takharRice, caption: "Rice Paddies" },
    { src: takharTerraces, caption: "Rice Terraces" },
  ],
  uruzgan: [
    { src: uruzganValleys, caption: "Mountain Valleys" },
    { src: uruzganHighland, caption: "Highland Villages" },
  ],
  wardak: [
    { src: wardakApples, caption: "Apple Orchards" },
    { src: wardakHarvest, caption: "Apple Harvest" },
  ],
  zabul: [
    { src: zabulFortress, caption: "Ancient Fortress" },
    { src: zabulRuins, caption: "Qalat Ruins" },
  ],
  daykundi: [
    { src: daykundiLakes, caption: "Alpine Lakes" },
    { src: daykundiAlpine, caption: "Mountain Lakes" },
  ],
};

interface ProvincePhotoGalleryProps {
  provinceId: string;
  provinceName: string;
}

export const ProvincePhotoGallery = ({ provinceId, provinceName }: ProvincePhotoGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const gallery = provinceGalleries[provinceId] || [];

  if (gallery.length === 0) return null;

  const openLightbox = (i: number) => {
    setActiveIndex(i);
    setLightboxOpen(true);
  };

  const next = () => setActiveIndex((prev) => (prev + 1) % gallery.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <section className="py-20 px-6 lg:px-12 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Photo Gallery — {provinceName}</h2>
          <p className="text-muted-foreground mb-10">Cinematic perspectives of {provinceName}'s landscapes, heritage, and economic potential</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3]"
              onClick={() => openLightbox(i)}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-semibold">{img.caption}</p>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-primary/80 rounded-full p-1.5">
                  <ZoomIn className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }} className="absolute top-6 right-6 z-10 text-white/80 hover:text-white">
              <X className="w-8 h-8" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 z-10 text-white/60 hover:text-white p-2">
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 z-10 text-white/60 hover:text-white p-2">
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={gallery[activeIndex].src} alt={gallery[activeIndex].caption} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
              <p className="text-white text-center mt-4 text-lg font-medium">{gallery[activeIndex].caption}</p>
              <p className="text-white/50 text-center text-sm">{activeIndex + 1} / {gallery.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
