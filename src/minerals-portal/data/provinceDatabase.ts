// Comprehensive Province Database - All 34 Afghan Provinces
import { MineralData } from './mineralDatabase';

// Import province images
const badakhshan = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/badakhshan.jpg";
const logarProvince = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/logar-province.jpg";
const bamyanLandscape = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/bamyan-landscape-01.jpg";
const panjshirValley = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/minerals-portal/assets/minerals/panjshir-valley-01.jpg";
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

export interface ProvinceData {
  name: string;
  subtitle: string;
  heroImage: string;
  mapImage?: string;
  overview: string;
  stats: { value: string; label: string; description: string }[];
  minerals: { name: string; href: string; description: string }[];
  investmentOpportunities: { title: string; description: string; value: string; status: string }[];
  sections: {
    title: string;
    content: string;
    image: string;
    alignment: 'left' | 'right';
  }[];
  timeline: { year: string; event: string }[];
}

// All 34 Afghan Provinces
const afghanProvinces: Record<string, ProvinceData> = {
  // Major Mineral Provinces
  'badakhshan': {
    name: 'Badakhshan',
    subtitle: 'Gemstone Kingdom & Gold Belt',
    heroImage: badakhshan,
    overview: `Badakhshan Province, located in northeastern Afghanistan, is renowned as the world's oldest continuously mined gemstone source. The province has been producing lapis lazuli for over 6,000 years, supplying the finest azure gemstone to civilizations from ancient Egypt to Renaissance Europe. Beyond its legendary gemstones, Badakhshan contains substantial gold deposits along the Kokcha and Panj river systems, with estimated resources exceeding 500 tons of gold valued at $30 billion.

The province's mineral wealth extends to rare earth elements, emeralds, rubies, and other precious stones. Modern exploration has identified significant potential for systematic development, with opportunities spanning artisanal mining formalization, mechanized extraction, and value-added processing. The challenging terrain—with elevations ranging from 1,000 to 7,000 meters—requires innovative approaches but offers exceptional mineral grades and quality.

Investment in Badakhshan's mineral sector could transform the province's economy while preserving its ancient mining heritage. Development plans balance resource extraction with environmental conservation and cultural preservation, ensuring that Badakhshan's treasures benefit future generations.`,
    stats: [
      { value: '6,000+', label: 'Years', description: 'Mining heritage' },
      { value: '500', label: 'Tons', description: 'Gold resources' },
      { value: '$1.2T', label: 'Value', description: 'Mineral wealth' },
      { value: '20,000', label: 'Miners', description: 'Currently employed' },
      { value: '15+', label: 'Minerals', description: 'Active deposits' },
      { value: 'AAA', label: 'Quality', description: 'Premium grade' },
    ],
    minerals: [
      { name: 'Lapis Lazuli', href: '/minerals/gems/lapis', description: 'World\'s finest source for 6,000+ years' },
      { name: 'Gold', href: '/minerals/gold/badakhshan', description: '500+ tons in alluvial and lode deposits' },
      { name: 'Emeralds', href: '/minerals/gems/emeralds', description: 'High-quality gemstone deposits' },
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand', description: 'Strategic technology metals' },
      { name: 'Ruby & Sapphire', href: '/minerals/gems/rubies', description: 'Precious corundum gems' },
    ],
    investmentOpportunities: [
      {
        title: 'Lapis Lazuli Heritage Mining',
        description: 'Formalize and modernize ancient lapis mining operations while preserving cultural heritage',
        value: '$200M',
        status: 'Open for Investment'
      },
      {
        title: 'Gold Processing Complex',
        description: 'Establish LBMA-certified gold refining facility serving regional artisanal miners',
        value: '$150M',
        status: 'Feasibility Complete'
      },
      {
        title: 'Gemstone Cutting Center',
        description: 'Value-added processing facility for lapis, emeralds, and other gemstones',
        value: '$50M',
        status: 'Planning Phase'
      },
    ],
    sections: [
      {
        title: 'Ancient Mining Heritage',
        content: `Badakhshan's lapis lazuli mines represent the oldest continuously operated mines in human history, with archaeological evidence confirming mining activities dating to 4000 BCE. The mines supplied lapis for Tutankhamun's death mask, Cleopatra's cosmetics, and Renaissance masterpieces. This extraordinary heritage creates unique opportunities for heritage tourism combined with sustainable mining development.`,
        image: lapisLazuli,
        alignment: 'left'
      },
      {
        title: 'Modern Gold Potential',
        content: `Recent exploration has identified substantial gold resources in Badakhshan, including both alluvial placers in river systems and hard rock deposits. The Samti Gold deposit alone contains an estimated 200 tons of gold at grades averaging 5 grams per ton. Development could support 20 years of production at 10 tons annually, generating $600 million in annual revenue.`,
        image: goldMining,
        alignment: 'right'
      },
    ],
    timeline: [
      { year: '4000 BCE', event: 'Lapis lazuli mining begins' },
      { year: '1323 BCE', event: 'Tutankhamun burial includes Afghan lapis' },
      { year: '2010', event: 'Modern gold exploration begins' },
      { year: '2025', event: 'Heritage mining formalization' },
      { year: '2030', event: 'Gold processing facility operational' },
    ],
  },
  
  'logar': {
    name: 'Logar',
    subtitle: 'Copper Heartland of Afghanistan',
    heroImage: logarProvince,
    overview: `Logar Province, located just 40 kilometers southeast of Kabul, hosts Mes Aynak—one of the world's largest undeveloped copper deposits. The province's mineral wealth extends beyond copper to include chromite, coal, and other industrial minerals. Logar's strategic location near the capital provides excellent infrastructure access and proximity to markets.

The Mes Aynak deposit contains an estimated 12.5 million metric tons of copper—enough to supply 15% of global demand at full production. Development plans envision a $5 billion mining and processing complex that will employ 25,000 workers directly and generate $3 billion in annual revenue. The project balances resource extraction with preservation of the ancient Buddhist monastery complex discovered at the site.`,
    stats: [
      { value: '12.5M', label: 'Tons', description: 'Copper reserves' },
      { value: '$3.3T', label: 'Value', description: 'Copper resources' },
      { value: '25,000', label: 'Jobs', description: 'Direct employment' },
      { value: '40km', label: 'Distance', description: 'From Kabul' },
      { value: '2030', label: 'Target', description: 'Production start' },
      { value: '$3B', label: 'Annual', description: 'Revenue potential' },
    ],
    minerals: [
      { name: 'Copper', href: '/minerals/copper/mes-aynak', description: '12.5M tons at Mes Aynak deposit' },
      { name: 'Chromite', href: '/minerals/chromite/reserves', description: 'High-grade chromite deposits' },
      { name: 'Coal', href: '/minerals/coal/basins', description: 'Metallurgical coal resources' },
    ],
    investmentOpportunities: [
      {
        title: 'Mes Aynak Copper Complex',
        description: 'World-class copper mining and processing facility with integrated smelting',
        value: '$5B',
        status: 'Major Investment Opportunity'
      },
      {
        title: 'Chromite Mining & Processing',
        description: 'Develop chromite deposits with ferrochrome production facility',
        value: '$200M',
        status: 'Open for Investment'
      },
    ],
    sections: [
      {
        title: 'Mes Aynak Copper Deposit',
        content: `Mes Aynak represents one of the most significant mineral discoveries globally, containing 12.5 million tons of copper ore with grades averaging 2.3%—significantly higher than the global average. The deposit sits atop an ancient Buddhist monastery complex, creating unique challenges and opportunities for archaeological preservation alongside mining development.`,
        image: copperMine,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '1970s', event: 'Soviet geologists identify deposit' },
      { year: '2007', event: 'Comprehensive exploration begins' },
      { year: '2025', event: 'Construction phase commences' },
      { year: '2030', event: 'First copper production' },
    ],
  },

  'bamyan': {
    name: 'Bamyan',
    subtitle: 'Iron Mountain Province',
    heroImage: bamyanLandscape,
    overview: `Bamyan Province hosts the Hajigak Iron-Copper Complex—one of Asia's largest iron ore deposits, containing an estimated 2.2 billion metric tons of high-grade magnetite ore. The province's mineral wealth positions it as a potential regional steel manufacturing hub, with development plans envisioning integrated steel production facilities.

The Hajigak deposit's exceptional ore quality—averaging 63% iron content—meets the strictest specifications for premium steel production. Combined with substantial copper, gold, and rare earth element reserves, Hajigak represents a $420 billion mineral endowment that could transform Afghanistan's industrial base.`,
    stats: [
      { value: '2.2B', label: 'Tons', description: 'Iron ore reserves' },
      { value: '63%', label: 'Grade', description: 'Iron content' },
      { value: '$6.5T', label: 'Value', description: 'Total resources' },
      { value: '100,000', label: 'Jobs', description: 'Employment potential' },
      { value: '15M', label: 'Tons/Year', description: 'Steel capacity' },
      { value: '3,500m', label: 'Elevation', description: 'Mining altitude' },
    ],
    minerals: [
      { name: 'Iron Ore', href: '/minerals/iron/hajigak', description: '2.2B tons at Hajigak' },
      { name: 'Copper', href: '/minerals/copper/hajigak', description: 'Polymetallic deposits' },
      { name: 'Gold', href: '/minerals/gold/badakhshan', description: 'Associated gold zones' },
    ],
    investmentOpportunities: [
      {
        title: 'Hajigak Integrated Steel Complex',
        description: 'Develop Asia\'s largest iron deposit into regional steel manufacturing hub',
        value: '$12B',
        status: 'Strategic Investment'
      },
    ],
    sections: [
      {
        title: 'Hajigak Iron Deposit',
        content: `The Hajigak deposit contains 2.2 billion tons of high-grade magnetite ore with 63% iron content—among the highest grades globally. Development plans envision an integrated steel production facility capable of producing 15 million tons annually, transforming Afghanistan into Central Asia's steel manufacturing center.`,
        image: ironOre,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '1960s', event: 'Soviet discovery' },
      { year: '2011', event: 'International tender' },
      { year: '2030', event: 'Mining operations begin' },
      { year: '2035', event: 'Steel complex operational' },
    ],
  },

  'panjshir': {
    name: 'Panjshir',
    subtitle: 'Emerald Valley',
    heroImage: panjshirValley,
    overview: `Panjshir Valley produces emeralds of exceptional quality that rival Colombian stones prized by collectors worldwide. The valley's geological conditions create emeralds with distinctive deep green color and excellent clarity, with specimens reaching 50 carats in gem quality.

Current artisanal mining supports 5,000 workers and generates $150 million annually. Modern development could increase production tenfold while improving miner safety and environmental management. The proposed Panjshir Emerald District Development would transform artisanal mining into a sustainable industry supporting 25,000 workers.`,
    stats: [
      { value: '$150M', label: 'Annual', description: 'Current production' },
      { value: '50ct', label: 'Max Size', description: 'Gem specimens' },
      { value: '5,000', label: 'Miners', description: 'Currently employed' },
      { value: '1,000+', label: 'Years', description: 'Mining heritage' },
      { value: 'AAA', label: 'Quality', description: 'Premium grade' },
      { value: '$1.5B', label: 'Potential', description: 'Developed output' },
    ],
    minerals: [
      { name: 'Emeralds', href: '/minerals/gems/emeralds', description: 'World-class Panjshir emeralds' },
    ],
    investmentOpportunities: [
      {
        title: 'Panjshir Emerald Development',
        description: 'Modernize artisanal mining with processing and cutting facilities',
        value: '$300M',
        status: 'Open for Investment'
      },
    ],
    sections: [
      {
        title: 'Panjshir Emeralds',
        content: `Panjshir emeralds exhibit exceptional quality with deep green color and excellent clarity. The finest specimens achieve "pigeon blood" green coloration and command prices of $50,000-$100,000 per carat at international auctions. Geological surveys indicate substantial unexplored potential at depth.`,
        image: emeraldMine,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '1000 CE', event: 'Historical mining begins' },
      { year: '2020', event: 'Formalization efforts' },
      { year: '2025', event: 'Processing facility development' },
    ],
  },

  'ghazni': {
    name: 'Ghazni',
    subtitle: 'Lithium Belt',
    heroImage: lithiumDeposits,
    overview: `Ghazni Province may host the world's largest lithium reserves, with initial USGS estimates indicating 215 million metric tons of lithium carbonate equivalent—enough to supply global demand for centuries. The lithium occurs within spodumene-bearing pegmatites across a 200-kilometer belt.

At current lithium prices, this resource is valued at over $8 trillion, representing the foundation of Afghanistan's economic future. The deposits are particularly significant for the global energy transition, as lithium is essential for electric vehicle batteries and renewable energy systems.`,
    stats: [
      { value: '215M', label: 'Tons LCE', description: 'Lithium resources' },
      { value: '$4.2T', label: 'Value', description: 'At current prices' },
      { value: '#1', label: 'Global Rank', description: 'Largest reserves' },
      { value: '200km', label: 'Belt Length', description: 'Mineralized zone' },
      { value: '3.5%', label: 'Li2O Grade', description: 'High-grade zones' },
      { value: '45%', label: 'Market Share', description: 'Potential supply' },
    ],
    minerals: [
      { name: 'Lithium', href: '/minerals/lithium/ghazni', description: 'World\'s largest lithium reserves' },
    ],
    investmentOpportunities: [
      {
        title: 'Ghazni Lithium Complex',
        description: 'Develop world\'s largest lithium deposit with battery-grade processing',
        value: '$15B',
        status: 'Strategic Priority'
      },
    ],
    sections: [
      {
        title: 'Lithium Pegmatites',
        content: `Ghazni's lithium pegmatites formed during the Himalayan orogeny, creating spodumene-bearing deposits with lithium grades consistently above 2% Li2O. The proposed processing complex would produce 500,000 tons of battery-grade lithium chemicals annually—equivalent to 25% of current global production.`,
        image: lithiumDeposits,
        alignment: 'left'
      },
    ],
    timeline: [
      { year: '2010', event: 'USGS estimates potential' },
      { year: '2025', event: 'Feasibility study' },
      { year: '2030', event: 'First production' },
    ],
  },

  'badghis': {
    name: 'Badghis',
    subtitle: 'Western Minerals & Agricultural Borderlands',
    heroImage: copperMine,
    overview: `Badghis Province in western Afghanistan holds identified deposits of marble, limestone, and construction minerals, with potential for cement and building materials. The province's proximity to Herat and border corridors supports logistics for mineral development; transport routes toward Herat and Iran enable export-oriented development of dimension stone and cement raw materials.

Geological mapping continues to refine resource estimates and identify additional occurrences. Known occurrences of marble and limestone provide a base for feasibility studies and small- to medium-scale investment. Local employment and regional supply chains can be built around quarrying and crushing operations. Badghis also has agricultural and pastoral economy; mineral development can diversify income and create jobs.

Investment in marble and limestone quarrying, processing, and logistics will support domestic construction and regional export. Further systematic mapping will clarify extent and quality of deposits. Government and donor support for western corridor development aligns with provincial priorities.`,
    stats: [
      { value: '$520B', label: 'Estimated Value', description: 'Mineral potential' },
      { value: '5+', label: 'Deposits', description: 'Identified' },
      { value: 'Marble', label: 'Focus', description: 'Construction materials' },
      { value: 'Herat', label: 'Corridor', description: 'Export route' },
      { value: 'Cement', label: 'Potential', description: 'Raw materials' },
      { value: 'Mapping', label: 'Status', description: 'Refining estimates' },
    ],
    minerals: [
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Construction-grade dimension stone' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Cement and plaster' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Marble & Limestone Development', description: 'Quarrying and processing for domestic and export markets', value: '$80M', status: 'Open for Investment' },
      { title: 'Cement Raw Materials Hub', description: 'Integrated limestone and gypsum supply for cement plants', value: '$50M', status: 'Feasibility Phase' },
      { title: 'Dimension Stone Export', description: 'Export-oriented marble and stone processing for Iran and regional markets', value: '$40M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Western Corridor Potential', content: `Badghis sits on transport routes toward Herat and Iran, supporting export-oriented development of dimension stone and cement raw materials. Local employment and regional supply chains can be built around quarrying and crushing operations. Road and border infrastructure improvements will reduce logistics cost and support competitive export. Provincial authorities prioritize mineral development as a complement to agriculture.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Resource Base', content: `Known occurrences of marble and limestone provide a base for feasibility studies and small- to medium-scale investment. Further systematic mapping will clarify extent and quality. Marble varieties suitable for construction and decorative use have been identified; limestone quality for cement is being assessed. Gypsum occurrences support integrated cement raw material development.`, image: ironOre, alignment: 'right' },
      { title: 'Investment and Development Context', content: `Investment in quarrying, crushing, and logistics can create jobs and strengthen regional construction supply. Environmental and social planning—including land use and water—are integrated into development criteria. Partnership with Herat-based processors and exporters can secure offtake. Government support for western corridor development applies.`, image: copperMine, alignment: 'left' },
      { title: 'Markets and Logistics', content: `Domestic demand for construction materials (cement, dimension stone) is growing; regional export to Iran and Central Asia is possible. Logistics cost and border efficiency affect competitiveness. Certification of origin and quality supports premium positioning for marble. Timeline for production depends on permitting and investment.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2010s', event: 'Initial geological mapping' },
      { year: '2020', event: 'Resource and corridor studies' },
      { year: '2025', event: 'Investment outreach and feasibility' },
      { year: '2028', event: 'Target quarry and processing start' },
      { year: '2030', event: 'Production and export' },
    ],
  },

  'baghlan': {
    name: 'Baghlan',
    subtitle: 'Coal & Industrial Minerals Hub',
    heroImage: coalMining,
    overview: `Baghlan Province hosts significant coal reserves within Afghanistan's northern coal belt, supporting thermal and metallurgical applications. The province is a focus for energy and industrial mineral development; Soviet-era data and modern surveys underpin resource estimates. Rail and road links are improving access and logistics for coal and associated minerals.

Coal from Baghlan can supply domestic power generation and industrial use (cement, brick) and potentially metallurgical coke for steel (e.g. linkage with Hajigak). Multiple coal-bearing basins have been identified; quality varies from thermal to potential coking grades. Investment in extraction, washing, and logistics can create jobs and strengthen regional energy security.

Industrial minerals including talc and other deposits occur in the province; integrated development with coal can optimize infrastructure use. Environmental and social planning are integrated into development criteria. Government priority for energy and industrial development supports investment outreach.`,
    stats: [
      { value: 'Coal', label: 'Primary', description: 'Major reserves' },
      { value: 'Multiple', label: 'Basins', description: 'Coal-bearing' },
      { value: 'Rail', label: 'Access', description: 'Logistics potential' },
      { value: 'Thermal', label: 'Use', description: 'Metallurgical potential' },
      { value: 'Power', label: 'Link', description: 'Industry, steel' },
      { value: 'Soviet', label: 'Data', description: 'Modern surveys' },
    ],
    minerals: [
      { name: 'Coal', href: '/minerals/coal/thermal', description: 'Thermal and metallurgical coal' },
      { name: 'Coal Processing', href: '/minerals/coal/processing', description: 'Washing and preparation' },
      { name: 'Talc', href: '/minerals/talc/processing', description: 'Industrial minerals' },
      { name: 'Iron Hajigak', href: '/minerals/iron/hajigak', description: 'Steel linkage via coke' },
    ],
    investmentOpportunities: [
      { title: 'Coal Mining & Power', description: 'Develop coal reserves for domestic power and industry', value: '$300M', status: 'Open for Investment' },
      { title: 'Coal Washing & Logistics', description: 'Coal preparation and transport for power and coke markets', value: '$120M', status: 'Feasibility Phase' },
      { title: 'Integrated Energy-Industrial Hub', description: 'Coal-fed power and industrial minerals for regional growth', value: '$200M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Coal Belt Significance', content: `Baghlan's coal resources form part of the country's principal coal belt. Development could support power generation and industrial use, with rail connectivity improving export options. Coal quality assessment (thermal vs. metallurgical) guides development strategy. Proximity to Kabul and northern markets supports domestic offtake.`, image: coalMining, alignment: 'left' },
      { title: 'Development Context', content: `Investment in extraction, washing, and logistics can create jobs and strengthen regional energy security. Environmental and social planning are integrated into development criteria. Linkage with Hajigak steel (Bamyan) could create demand for metallurgical coal if quality is confirmed. Power plant and cement offtake are primary near-term markets.`, image: copperMine, alignment: 'right' },
      { title: 'Industrial Minerals and Integration', content: `Talc and other industrial minerals in Baghlan can be developed alongside or after coal. Shared infrastructure (power, transport) improves economics. Soviet-era and recent mapping support resource estimates. Partnership with power and industrial offtakers can secure demand.`, image: talcMining, alignment: 'left' },
      { title: 'Logistics and Markets', content: `Rail and road links connect Baghlan to Kabul, Mazar-e-Sharif, and northern corridors. Export to regional power and industry (e.g. Uzbekistan, Tajikistan) may be possible. Domestic offtake (power, cement, brick) is priority. Timeline depends on permitting and offtake agreements.`, image: coalMining, alignment: 'right' },
    ],
    timeline: [
      { year: '1960s', event: 'Soviet coal surveys' },
      { year: '2020', event: 'Updated assessments' },
      { year: '2025', event: 'Investment targeting' },
      { year: '2028', event: 'Coal and power development target' },
      { year: '2030', event: 'Production and offtake' },
    ],
  },

  'balkh': {
    name: 'Balkh',
    subtitle: 'Northern Gateway & Base Metals',
    heroImage: copperMine,
    overview: `Balkh Province in northern Afghanistan benefits from the Mazar-i-Sharif hub and transit corridors to Uzbekistan and Central Asia. The province has known occurrences of base metals (copper at Balkhab-style deposits), industrial minerals, and oil and gas potential. Its strategic location supports both domestic supply and regional export of concentrate and processed materials.

Soviet-era surveys and modern re-evaluation have identified copper, lead-zinc, and industrial mineral potential. Mazar-i-Sharif provides services, power, and connectivity for mining projects. Northern logistics enable efficient movement of concentrate and bulk minerals. Feasibility and environmental studies are prerequisites for licensing and investment.

Investment in base metal extraction and concentrate production (e.g. Balkhab-style development) could anchor provincial mineral sector growth. Industrial minerals and construction materials complement base metal potential. Government priority for northern development and transit supports investment.`,
    stats: [
      { value: 'Gateway', label: 'Role', description: 'North transport' },
      { value: 'Base Metals', label: 'Focus', description: 'Copper, lead-zinc' },
      { value: 'Multiple', label: 'Sectors', description: 'Minerals and energy' },
      { value: 'Mazar', label: 'Hub', description: 'Services, connectivity' },
      { value: 'Central Asia', label: 'Export', description: 'Transit corridors' },
      { value: 'Soviet', label: 'Surveys', description: 'Modern re-evaluation' },
    ],
    minerals: [
      { name: 'Copper', href: '/minerals/copper/mes-aynak', description: 'Balkhab and related deposits' },
      { name: 'Lead & Zinc', href: '/minerals/lead-zinc/aynak', description: 'Sulfide deposits' },
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Construction materials' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone' },
    ],
    investmentOpportunities: [
      { title: 'Balkhab-Style Development', description: 'Base metal extraction and concentrate production', value: '$500M', status: 'Strategic' },
      { title: 'Northern Concentrate Hub', description: 'Concentrate handling and logistics for regional export', value: '$80M', status: 'Feasibility Phase' },
      { title: 'Industrial Minerals & Construction', description: 'Gypsum, limestone, marble for domestic and export', value: '$60M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Northern Logistics', content: `Balkh's position on northern corridors enables efficient movement of concentrate and bulk minerals. Mazar-i-Sharif provides services, power, and connectivity for mining projects. Transit to Uzbekistan and Central Asia supports export-oriented development. Road and rail improvements enhance logistics.`, image: copperMine, alignment: 'left' },
      { title: 'Mineral Diversity', content: `Base metal (copper, lead-zinc) and industrial mineral occurrences offer a range of project scales. Soviet-era and modern surveys support resource estimates. Feasibility and environmental studies are prerequisites for licensing. Balkhab and similar deposits are strategic priorities.`, image: ironOre, alignment: 'right' },
      { title: 'Investment and Development', content: `Base metal extraction and concentrate production could anchor provincial growth. Partnership with smelter and international offtakers can secure demand. Industrial minerals (gypsum, limestone, marble) complement base metals and support construction sector. Government priority for northern development applies.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic offtake (processing, construction) and regional export (concentrate to smelters) are markets. Timeline depends on permitting, feasibility, and offtake agreements. Community engagement and environmental planning support social license.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: '1970s', event: 'Soviet surveys' },
      { year: '2010s', event: 'Re-evaluation and interest' },
      { year: '2025', event: 'Feasibility and licensing target' },
      { year: '2028', event: 'Development and production target' },
      { year: '2030', event: 'Production and export' },
    ],
  },

  'daykundi': {
    name: 'Daykundi',
    subtitle: 'Central Highlands Minerals',
    heroImage: ironOre,
    overview: `Daykundi Province in the central highlands has identified mineral potential including iron ore and other metals. The province is part of the broader central mineral belt extending through Bamyan and neighboring regions; coordination with Bamyan supports regional planning and shared infrastructure. Access and infrastructure are development priorities; road and power improvements will enable exploration and future production.

Industrial minerals including gypsum and construction materials occur in the province; iron ore potential links to the Hajigak-style belt. Exploration and feasibility work can be structured through standard licensing. Community engagement and environmental baseline studies are part of development planning. Investment in systematic exploration and feasibility for central belt deposits could unlock provincial mineral sector growth.`,
    stats: [
      { value: 'Central', label: 'Belt', description: 'Mineralized zone' },
      { value: 'Iron', label: 'Potential', description: 'Metal deposits' },
      { value: 'Infrastructure', label: 'Priority', description: 'Access development' },
      { value: 'Bamyan', label: 'Link', description: 'Regional belt' },
      { value: 'Gypsum', label: 'Industrial', description: 'Construction' },
      { value: 'Exploration', label: 'Phase', description: 'Feasibility' },
    ],
    minerals: [
      { name: 'Iron Ore', href: '/minerals/iron/hajigak', description: 'Regional iron potential' },
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Construction materials' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
    ],
    investmentOpportunities: [
      { title: 'Highlands Exploration', description: 'Systematic exploration and feasibility for central belt deposits', value: '$150M', status: 'Open for Investment' },
      { title: 'Central Belt Infrastructure', description: 'Access roads and power to enable mineral development', value: '$80M', status: 'Planning Phase' },
      { title: 'Industrial Minerals Development', description: 'Gypsum and limestone for construction and cement', value: '$50M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Central Belt Context', content: `Daykundi lies within the central Afghan mineral belt. Coordination with Bamyan and other provinces supports regional planning and shared infrastructure. Iron ore potential links to Hajigak-style deposits; industrial minerals (gypsum, limestone) provide near-term development options. Geological mapping continues to refine potential.`, image: ironOre, alignment: 'left' },
      { title: 'Investment Pathway', content: `Exploration and feasibility work can be structured through standard licensing. Community engagement and environmental baseline studies are part of development planning. Access and infrastructure development (roads, power) are prerequisites for larger-scale mining. Government and donor support for central highlands development applies.`, image: copperMine, alignment: 'right' },
      { title: 'Resource and Access', content: `Identified mineral potential includes iron and industrial minerals. Access and infrastructure are development priorities; improvements will enable exploration and future production. Partnership with Bamyan-based projects could support shared infrastructure. Timeline depends on exploration results and investment.`, image: ironOre, alignment: 'left' },
      { title: 'Markets and Development', content: `Domestic construction and regional cement demand could absorb industrial mineral production. Iron development would depend on resource confirmation and linkage to Hajigak or other steel strategy. Community benefits and local employment are integral to development planning.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Mapping emphasis' },
      { year: '2025', event: 'Exploration phase' },
      { year: '2028', event: 'Feasibility and infrastructure target' },
      { year: '2030', event: 'Possible production' },
      { year: '2032', event: 'Industrial mineral production' },
    ],
  },

  'farah': {
    name: 'Farah',
    subtitle: 'Western Border Minerals',
    heroImage: copperMine,
    overview: `Farah Province in western Afghanistan has documented potential for industrial minerals and base metals. Proximity to Iran and transit routes supports future export-oriented development. Gypsum, limestone, and related materials provide a basis for project development; detailed mapping continues through ongoing survey programs.

Farah's location supports logistics for bulk minerals toward Iran and regional markets. Security and infrastructure improvements enhance investment attractiveness. Quarrying and processing for domestic and cross-border markets could create jobs and diversify provincial economy. Government priority for western corridor development aligns with mineral investment.`,
    stats: [
      { value: 'Western', label: 'Corridor', description: 'Transit potential' },
      { value: 'Industrial', label: 'Minerals', description: 'Primary focus' },
      { value: 'Growing', label: 'Data', description: 'Survey updates' },
      { value: 'Iran', label: 'Export', description: 'Cross-border' },
      { value: 'Gypsum', label: 'Key', description: 'Limestone' },
      { value: 'Infrastructure', label: 'Priority', description: 'Logistics' },
    ],
    minerals: [
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement raw material' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Industrial Minerals Development', description: 'Quarrying and processing for domestic and cross-border markets', value: '$100M', status: 'Open for Investment' },
      { title: 'Western Export Corridor', description: 'Bulk mineral logistics and border facilitation for Iran market', value: '$40M', status: 'Feasibility Phase' },
      { title: 'Cement Raw Materials', description: 'Integrated gypsum and limestone for cement plants', value: '$60M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Western Access', content: `Farah's location supports logistics for bulk minerals toward Iran and regional markets. Security and infrastructure improvements enhance investment attractiveness. Road and border facilitation are priorities for export-oriented development. Provincial authorities support mineral sector growth.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Resource Inventory', content: `Identified occurrences of gypsum, limestone, and related materials provide a basis for project development. Detailed mapping continues. Quality and extent are being refined; feasibility studies can follow for priority deposits. Industrial minerals are primary focus; base metal potential may exist.`, image: saltMining, alignment: 'right' },
      { title: 'Investment and Markets', content: `Quarrying and processing for domestic and cross-border markets could create jobs and diversify economy. Cement and construction demand (domestic and Iran) could absorb production. Partnership with cement and construction offtakers can secure demand. Environmental and community engagement are part of development.`, image: copperMine, alignment: 'left' },
      { title: 'Timeline and Development', content: `Survey and mapping continue to improve geological coverage. Investment focus is targeting 2025; production potential follows permitting and feasibility. Government and donor support for western development applies.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2010s', event: 'Survey work' },
      { year: '2025', event: 'Investment focus' },
      { year: '2028', event: 'Quarry and processing target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Export corridor operational' },
    ],
  },

  'faryab': {
    name: 'Faryab',
    subtitle: 'Northern Minerals & Agriculture',
    heroImage: saltMining,
    overview: `Faryab Province in the north has potential for salt, gypsum, and other industrial minerals. The province combines agricultural activity with mineral development opportunities. Connectivity to Mazar-i-Sharif and northern corridors supports logistics for bulk minerals and processed products.

Faryab's salt and gypsum potential can support local industry and construction; small- to medium-scale operations can be developed with appropriate licensing and environmental measures. The province contributes to northern Afghanistan's diversified economy; mineral development can complement agriculture and trade. Extraction and processing for domestic and regional markets could create jobs and diversify income.`,
    stats: [
      { value: 'Salt', label: 'Potential', description: 'Evaporite resources' },
      { value: 'Industrial', label: 'Minerals', description: 'Gypsum, etc.' },
      { value: 'North', label: 'Hub', description: 'Mazar connectivity' },
      { value: 'Agriculture', label: 'Plus', description: 'Diversified economy' },
      { value: 'Domestic', label: 'Markets', description: 'Regional' },
      { value: 'Small-Medium', label: 'Scale', description: 'Operations' },
    ],
    minerals: [
      { name: 'Salt', href: '/minerals/gypsum/deposits', description: 'Evaporite and industrial' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Salt & Gypsum Development', description: 'Extraction and processing for domestic and regional markets', value: '$60M', status: 'Open for Investment' },
      { title: 'Northern Industrial Minerals', description: 'Quarrying and logistics for Mazar and regional offtake', value: '$40M', status: 'Feasibility Phase' },
      { title: 'Construction Materials Hub', description: 'Integrated salt, gypsum, limestone for construction sector', value: '$50M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Evaporite Resources', content: `Faryab's salt and gypsum potential can support local industry and construction. Small- to medium-scale operations can be developed with appropriate licensing and environmental measures. Evaporite geology is favorable; resource extent is being refined. Quality meets construction and industrial specs.`, image: saltMining, alignment: 'left' },
      { title: 'Regional Role', content: `The province contributes to northern Afghanistan's diversified economy. Mineral development can complement agriculture and trade. Connectivity to Mazar-i-Sharif supports logistics. Partnership with northern cement and construction offtakers can secure demand.`, image: copperMine, alignment: 'right' },
      { title: 'Investment and Development', content: `Extraction and processing for domestic and regional markets could create jobs. Licensing and environmental compliance are part of development. Government support for northern development applies. Timeline depends on permitting and investment.`, image: saltMining, alignment: 'left' },
      { title: 'Markets and Logistics', content: `Domestic construction and regional (Uzbekistan, Tajikistan) markets could absorb production. Logistics cost and border efficiency affect competitiveness. Road and rail connectivity to Mazar improve access.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Resource assessment' },
      { year: '2025', event: 'Licensing outreach' },
      { year: '2028', event: 'Target operations start' },
      { year: '2030', event: 'Target operations' },
      { year: '2032', event: 'Regional supply' },
    ],
  },

  'ghor': {
    name: 'Ghor',
    subtitle: 'Central Highlands Resources',
    heroImage: ironOre,
    overview: `Ghor Province in the central highlands has mineral potential linked to the same geological trends as Bamyan and Daykundi. Iron ore and industrial minerals (gypsum, limestone) are among the identified resources. Infrastructure development is key to unlocking investment; road and power improvements will enable exploration and future production.

Ghor shares geological affinities with neighboring mineral-rich provinces; systematic exploration can define economic deposits and development options. Road and power infrastructure will enable feasibility and mining. Community engagement and environmental planning are integral to project design. Investment in exploration and development of central belt resources could unlock provincial mineral sector growth.`,
    stats: [
      { value: 'Central', label: 'Highlands', description: 'Geological setting' },
      { value: 'Iron', label: 'Potential', description: 'Metal deposits' },
      { value: 'Infrastructure', label: 'Need', description: 'Access priority' },
      { value: 'Bamyan', label: 'Link', description: 'Daykundi belt' },
      { value: 'Gypsum', label: 'Industrial', description: 'Construction' },
      { value: 'Exploration', label: 'Phase', description: 'Systematic' },
    ],
    minerals: [
      { name: 'Iron Ore', href: '/minerals/iron/hajigak', description: 'Regional iron belt' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Industrial use' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
    ],
    investmentOpportunities: [
      { title: 'Highlands Mineral Development', description: 'Exploration and development of central belt resources', value: '$120M', status: 'Open for Investment' },
      { title: 'Central Belt Access', description: 'Road and power infrastructure for mineral development', value: '$70M', status: 'Planning Phase' },
      { title: 'Industrial Minerals', description: 'Gypsum and limestone for construction and cement', value: '$50M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Geological Setting', content: `Ghor shares geological affinities with neighboring mineral-rich provinces. Systematic exploration can define economic deposits and development options. Iron ore potential links to Hajigak-style belt; industrial minerals provide near-term options. Soviet-era and recent mapping support assessment.`, image: ironOre, alignment: 'left' },
      { title: 'Development Priorities', content: `Road and power infrastructure will enable feasibility and mining. Community engagement and environmental planning are integral to project design. Access is a priority; coordination with Bamyan and Daykundi supports regional planning. Government and donor support for central highlands applies.`, image: coalMining, alignment: 'right' },
      { title: 'Resource and Investment', content: `Identified resources include iron and industrial minerals. Exploration and feasibility can be structured through standard licensing. Partnership with central belt projects could support shared infrastructure. Timeline depends on exploration results and access improvement.`, image: ironOre, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic construction and cement demand could absorb industrial mineral production. Iron development would depend on resource confirmation and linkage to Hajigak or regional steel strategy. Community benefits and local employment are integral to planning.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Survey focus' },
      { year: '2025', event: 'Exploration phase' },
      { year: '2028', event: 'Infrastructure and feasibility target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Industrial mineral production' },
    ],
  },

  'helmand': {
    name: 'Helmand',
    subtitle: 'Rare Earth Elements & Strategic Minerals',
    heroImage: rareEarth,
    overview: `Helmand Province hosts significant rare earth element (REE) potential, positioning it as a strategic supplier for technology and green energy. USGS and other assessments have identified substantial REE resources in carbonatite and related settings. The province also has other mineral occurrences; security and infrastructure are considerations for large-scale development.

REE are critical for permanent magnets, batteries, and defense applications; Afghanistan aims to capture value through domestic concentration and, where feasible, separation. Development would require advanced processing and adherence to environmental and social standards (including thorium/uranium management). Investment in exploration, concentration, and separation is a strategic priority for government and international partners.`,
    stats: [
      { value: 'REE', label: 'Strategic', description: 'Rare earth potential' },
      { value: '$1.2T', label: 'Value', description: 'Resource potential' },
      { value: 'Technology', label: 'Metals', description: 'Global demand' },
      { value: 'Carbonatite', label: 'Setting', description: 'REE host' },
      { value: 'Concentration', label: 'Phase', description: 'Separation potential' },
      { value: 'Magnets', label: 'Use', description: 'Batteries, defense' },
    ],
    minerals: [
      { name: 'Rare Earth Elements', href: '/minerals/ree/helmand', description: 'Helmand REE deposits' },
      { name: 'REE Concentrate', href: '/minerals/ree/concentrate', description: 'Concentration technology' },
      { name: 'REE Separation', href: '/minerals/ree/separation', description: 'Separation and value add' },
      { name: 'Lithium', href: '/minerals/lithium/ghazni', description: 'Regional technology metals' },
    ],
    investmentOpportunities: [
      { title: 'REE Development', description: 'Exploration, concentration, and separation of rare earth elements', value: '$800M', status: 'Strategic Priority' },
      { title: 'REE Concentrator', description: 'Concentrate production for export or local separation', value: '$300M', status: 'Feasibility Phase' },
      { title: 'Strategic Minerals Partnership', description: 'International partnership for REE value chain', value: '$500M', status: 'Strategic' },
    ],
    sections: [
      { title: 'REE Significance', content: `Helmand's rare earth potential is of national and international interest. Development would require advanced processing (concentration, separation) and adherence to environmental and social standards. Thorium and uranium in REE ores require managed handling. Carbonatite-hosted REE resources have been assessed by USGS and others.`, image: rareEarth, alignment: 'left' },
      { title: 'Strategic Context', content: `REE are critical for magnets, batteries, and defense applications. Afghanistan aims to capture value through domestic processing where feasible. Partnership with separation and magnet producers can support technology and offtake. Government and strategic investors prioritize REE development.`, image: lithiumDeposits, alignment: 'right' },
      { title: 'Development Pathway', content: `Phased development may start with concentration (export concentrate) then add separation. Feasibility and environmental studies are prerequisites. Security and infrastructure are considerations; investment may be phased with conditions. Timeline from resource to production spans several years.`, image: rareEarth, alignment: 'left' },
      { title: 'Markets and Investment', content: `Global demand for REE (magnets, batteries) supports long-term offtake. Strategic partnerships with consuming countries or processors can secure market. Investment in concentrator and optional separation plant is capital-intensive. Government support for strategic minerals applies.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: '2010', event: 'USGS REE focus' },
      { year: '2020', event: 'Resource and feasibility studies' },
      { year: '2025', event: 'Feasibility and partnerships' },
      { year: '2028', event: 'Concentrator target' },
      { year: '2030', event: 'Production targets' },
    ],
  },

  'herat': {
    name: 'Herat',
    subtitle: 'Western Gateway & Marble Heritage',
    heroImage: marbleQuarry,
    overview: `Herat Province is a western gateway and hosts premium marble quarries, contributing to Afghanistan's dimension stone sector. The province benefits from trade routes to Iran and Central Asia; marble varieties (75+ types) and quality support both domestic use and export. Herat's marble sector has long supplied domestic and regional markets; modern quarrying and processing can increase value capture and employment.

Investment in processing and logistics strengthens the provincial economy. Expand extraction and cutting for architectural stone; export to Iran, Gulf, and regional markets is a priority. Government support for western corridor and dimension stone sector applies.`,
    stats: [
      { value: 'Marble', label: 'Premium', description: 'Quarry heritage' },
      { value: 'Gateway', label: 'Trade', description: 'Iran and CA' },
      { value: '75+', label: 'Varieties', description: 'Color range' },
      { value: 'Export', label: 'Focus', description: 'Dimension stone' },
      { value: 'Processing', label: 'Value Add', description: 'Cutting, polishing' },
      { value: 'Regional', label: 'Markets', description: 'Gulf, Iran' },
    ],
    minerals: [
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Herat quarries and varieties' },
      { name: 'Marble Processing', href: '/minerals/marble/processing', description: 'Cutting and polishing' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Marble Exports', href: '/minerals/marble/exports', description: 'International trade' },
    ],
    investmentOpportunities: [
      { title: 'Marble Quarrying & Processing', description: 'Expand extraction and cutting for architectural stone', value: '$200M', status: 'Open for Investment' },
      { title: 'Dimension Stone Export Hub', description: 'Processing and logistics for Iran and Gulf markets', value: '$100M', status: 'Open for Investment' },
      { title: 'Marble Certification & Brand', description: 'Origin certification and premium positioning', value: '$30M', status: 'Feasibility Phase' },
    ],
    sections: [
      { title: 'Marble Heritage', content: `Herat's marble sector has long supplied domestic and regional markets. Modern quarrying and processing can increase value capture and employment. Over 75 varieties of marble (white, green, black, etc.) support diversified product lines. Quality and origin support premium positioning.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Western Corridor', content: `Herat's location supports logistics for mineral exports to Iran and Central Asia. Investment in processing and logistics strengthens the provincial economy. Border and transit facilitation are priorities. Trade routes to Gulf and South Asia extend market access.`, image: copperMine, alignment: 'right' },
      { title: 'Processing and Value Addition', content: `Cutting, polishing, and certification add value over raw block export. Investment in saws and polishing lines increases capacity and product range. Certification of origin (Afghan/Herat marble) supports premium pricing. Partnership with international distributors can secure offtake.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic construction and regional export (Iran, Gulf, India) are markets. Export growth target aligns with processing capacity and certification. Government support for dimension stone and western corridor applies. Timeline depends on investment and market engagement.`, image: ironOre, alignment: 'right' },
    ],
    timeline: [
      { year: 'Traditional', event: 'Marble quarrying' },
      { year: '2000s', event: 'Modernization and export growth' },
      { year: '2020', event: 'Modernization focus' },
      { year: '2025', event: 'Processing and certification target' },
      { year: '2030', event: 'Export growth' },
    ],
  },

  'jowzjan': {
    name: 'Jowzjan',
    subtitle: 'Northern Oil, Gas & Minerals',
    heroImage: copperMine,
    overview: `Jowzjan Province in the north has hydrocarbon potential and mineral occurrences (gypsum, salt, industrial minerals). The province is part of the northern economic zone centered on Mazar-i-Sharif. Diversified development can include minerals alongside oil and gas; mineral and energy projects can share infrastructure and services.

Jowzjan benefits from proximity to Mazar-i-Sharif and northern transport networks. Identified mineral occurrences support feasibility and licensing; environmental and social impact assessment is part of the development process. Investment in multi-resource development (minerals and energy) in coordination with provincial planning could create jobs and diversify economy.`,
    stats: [
      { value: 'North', label: 'Zone', description: 'Economic hub' },
      { value: 'Oil & Gas', label: 'Plus', description: 'Mineral potential' },
      { value: 'Multiple', label: 'Sectors', description: 'Development options' },
      { value: 'Mazar', label: 'Proximity', description: 'Transport networks' },
      { value: 'Gypsum', label: 'Minerals', description: 'Salt, industrial' },
      { value: 'Shared', label: 'Infrastructure', description: 'Energy and minerals' },
    ],
    minerals: [
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Construction materials' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Cement and plaster' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Multi-Resource Development', description: 'Minerals and energy in coordination with provincial planning', value: '$150M', status: 'Open for Investment' },
      { title: 'Northern Industrial Minerals', description: 'Gypsum and construction materials for Mazar and region', value: '$60M', status: 'Feasibility Phase' },
      { title: 'Shared Infrastructure', description: 'Logistics and services for mineral and energy projects', value: '$40M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Northern Hub', content: `Jowzjan benefits from proximity to Mazar-i-Sharif and northern transport networks. Mineral and energy projects can share infrastructure and services. Diversified development reduces risk and supports provincial growth. Partnership with northern offtakers can secure demand.`, image: coalMining, alignment: 'left' },
      { title: 'Resource Base', content: `Identified mineral occurrences (gypsum, salt, industrial) support feasibility and licensing. Environmental and social impact assessment is part of the development process. Oil and gas potential may attract parallel investment; minerals can be developed in coordination.`, image: ironOre, alignment: 'right' },
      { title: 'Investment and Development', content: `Multi-resource development in coordination with provincial planning supports integrated growth. Licensing and environmental compliance are standard. Government support for northern development applies. Timeline depends on permitting and offtake.`, image: copperMine, alignment: 'left' },
      { title: 'Markets and Logistics', content: `Domestic construction and regional (Mazar, Uzbekistan) markets could absorb mineral production. Shared logistics with energy sector improves economics. Road and rail connectivity support export.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Assessment updates' },
      { year: '2025', event: 'Investment outreach' },
      { year: '2028', event: 'Target operations start' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Multi-sector development' },
    ],
  },

  'kabul': {
    name: 'Kabul',
    subtitle: 'Capital Province & Policy Hub',
    heroImage: copperMine,
    overview: `Kabul Province hosts the national capital and the Ministry of Mines and Petroleum. While not a major mining province, it has construction mineral and quarry potential to supply the capital region. The province is the center for policy, licensing, and investor engagement; proximity to government and technical institutions supports project development across Afghanistan.

Construction minerals and dimension stone can serve the capital's growth; sustainable quarrying and rehabilitation are part of development criteria. Quarrying and construction materials supply for the capital region supports infrastructure and building sector. Investment in quarrying and supply can create jobs and reduce transport cost for capital projects.`,
    stats: [
      { value: 'Capital', label: 'Role', description: 'Policy and licensing' },
      { value: 'Construction', label: 'Minerals', description: 'Quarry potential' },
      { value: 'Hub', label: 'Services', description: 'Mining sector' },
      { value: 'Policy', label: 'Center', description: 'Ministry of Mines' },
      { value: 'Supply', label: 'Local', description: 'Capital region' },
      { value: 'Sustainable', label: 'Quarrying', description: 'Rehabilitation' },
    ],
    minerals: [
      { name: 'Construction Materials', href: '/minerals/limestone/quarries', description: 'Aggregate and cement' },
      { name: 'Dimension Stone', href: '/minerals/marble/varieties', description: 'Local supply' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Cement and plaster' },
      { name: 'Cement Materials', href: '/minerals/gypsum-limestone/cement', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Quarrying & Construction Materials', description: 'Supply capital region construction and infrastructure', value: '$50M', status: 'Open for Investment' },
      { title: 'Capital Region Aggregate', description: 'Aggregate and crushed stone for Kabul infrastructure', value: '$30M', status: 'Open for Investment' },
      { title: 'Policy & Licensing Support', description: 'Investor services and licensing facilitation', value: 'Ongoing', status: 'Government' },
    ],
    sections: [
      { title: 'Policy and Services Hub', content: `Kabul is the center for mining policy, licensing, and investor support. Proximity to government and technical institutions supports project development nationwide. Ministry of Mines and Petroleum and related agencies are based in Kabul. Investor engagement and licensing are coordinated from the capital.`, image: copperMine, alignment: 'left' },
      { title: 'Local Mineral Use', content: `Construction minerals and dimension stone can serve the capital's growth. Sustainable quarrying and rehabilitation are part of development criteria. Capital region demand for aggregate, cement raw materials, and dimension stone is significant. Local supply reduces transport cost and supports infrastructure.`, image: marbleQuarry, alignment: 'right' },
      { title: 'Investment and Quarrying', content: `Quarrying and construction materials supply for the capital region is an investment priority. Licensing and environmental compliance (including rehabilitation) are required. Partnership with construction and infrastructure developers can secure offtake.`, image: ironOre, alignment: 'left' },
      { title: 'Sector Development', content: `Ongoing policy and licensing support sector development nationwide. Infrastructure growth in the capital drives local mineral demand. Timeline for quarry development depends on permitting and market.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: 'Ongoing', event: 'Policy and licensing' },
      { year: '2025', event: 'Infrastructure growth' },
      { year: '2028', event: 'Quarry and supply target' },
      { year: '2030', event: 'Sector development' },
      { year: '2032', event: 'Capital region supply' },
    ],
  },

  'kandahar': {
    name: 'Kandahar',
    subtitle: 'Southern Hub & Mineral Potential',
    heroImage: copperMine,
    overview: `Kandahar Province is a southern economic and transport hub with mineral potential including construction materials (limestone, gypsum) and other occurrences. The province's role in regional trade supports mineral logistics. Geological mapping continues to refine resource understanding.

Kandahar's position supports mineral supply to southern Afghanistan and transit to Pakistan and Iran. Investment in quarrying and processing can create jobs and regional value. Identified deposits can be developed under standard licensing; community and environmental considerations are part of project design. Southern mineral development could anchor provincial diversification.`,
    stats: [
      { value: 'Southern', label: 'Hub', description: 'Trade and transport' },
      { value: 'Construction', label: 'Minerals', description: 'Primary focus' },
      { value: 'Growing', label: 'Data', description: 'Survey updates' },
      { value: 'Pakistan', label: 'Transit', description: 'Iran' },
      { value: 'Quarrying', label: 'Investment', description: 'Processing' },
      { value: 'Regional', label: 'Value', description: 'Jobs' },
    ],
    minerals: [
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Southern Mineral Development', description: 'Quarrying and processing for regional markets', value: '$100M', status: 'Open for Investment' },
      { title: 'Southern Construction Hub', description: 'Cement raw materials and aggregate for Kandahar region', value: '$60M', status: 'Feasibility Phase' },
      { title: 'Transit and Export', description: 'Mineral logistics for Pakistan and Iran markets', value: '$40M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Southern Role', content: `Kandahar's position supports mineral supply to southern Afghanistan and transit to Pakistan and Iran. Investment in quarrying and processing can create jobs and regional value. Southern hub role enables logistics for bulk minerals. Provincial authorities support mineral sector development.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Resource Development', content: `Identified deposits (limestone, gypsum, marble) can be developed under standard licensing. Community and environmental considerations are part of project design. Geological mapping continues to refine resource understanding. Feasibility studies can prioritize deposits.`, image: ironOre, alignment: 'right' },
      { title: 'Investment and Markets', content: `Quarrying and processing for regional markets could create jobs and diversify economy. Domestic construction and regional export (Pakistan, Iran) could absorb production. Partnership with cement and construction offtakers can secure demand.`, image: copperMine, alignment: 'left' },
      { title: 'Timeline and Logistics', content: `Mapping emphasis and investment focus are ongoing. Production potential follows permitting and feasibility. Road and border infrastructure affect logistics cost. Government support for southern development applies.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Mapping emphasis' },
      { year: '2025', event: 'Investment focus' },
      { year: '2028', event: 'Quarry and processing target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Regional supply' },
    ],
  },

  'kapisa': {
    name: 'Kapisa',
    subtitle: 'Central Province Minerals',
    heroImage: ironOre,
    overview: `Kapisa Province in the central region has mineral potential linked to the Hindu Kush and central belt. Proximity to Kabul provides access to technical and policy support. Construction minerals (gypsum, limestone) and precious stone (gem) potential offer different scales of investment; exploration and small-scale development are viable pathways.

Kapisa lies within reach of Kabul and central mineral trends; feasibility and licensing can be coordinated with national institutions. Environmental and community engagement are standard requirements. Investment in exploration and small-scale mineral projects could unlock provincial mineral sector growth.`,
    stats: [
      { value: 'Central', label: 'Location', description: 'Near Kabul' },
      { value: 'Multiple', label: 'Minerals', description: 'Potential' },
      { value: 'Access', label: 'Advantage', description: 'Capital proximity' },
      { value: 'Construction', label: 'Focus', description: 'Gems' },
      { value: 'Kabul', label: 'Coordination', description: 'Licensing' },
      { value: 'Small-Scale', label: 'Pathway', description: 'Exploration' },
    ],
    minerals: [
      { name: 'Construction Minerals', href: '/minerals/gypsum/deposits', description: 'Gypsum and limestone' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Gems', href: '/minerals/gems/cutting', description: 'Gem potential' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
    ],
    investmentOpportunities: [
      { title: 'Central Province Development', description: 'Exploration and small-scale mineral projects', value: '$80M', status: 'Open for Investment' },
      { title: 'Construction Minerals', description: 'Gypsum and limestone for Kabul and central region', value: '$40M', status: 'Feasibility Phase' },
      { title: 'Gemstone Formalization', description: 'Support artisanal gem sector and value addition', value: '$20M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Central Belt Context', content: `Kapisa lies within reach of Kabul and central mineral trends. Feasibility and licensing can be coordinated with national institutions. Construction minerals and gem potential offer different scales of investment. Proximity to capital reduces logistics cost for construction materials.`, image: copperMine, alignment: 'left' },
      { title: 'Development Options', content: `Construction minerals (gypsum, limestone) and gem potential offer different scales of investment. Environmental and community engagement are standard requirements. Small-scale and exploration pathways are viable. Government support for central province development applies.`, image: lapisLazuli, alignment: 'right' },
      { title: 'Investment and Markets', content: `Exploration and small-scale mineral projects can be structured through standard licensing. Kabul and central region construction demand could absorb production. Gem formalization and value addition support artisanal sector.`, image: ironOre, alignment: 'left' },
      { title: 'Timeline', content: `Survey updates and exploration phase are ongoing. Production potential follows feasibility and permitting. Timeline depends on deposit qualification and market.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Survey updates' },
      { year: '2025', event: 'Exploration phase' },
      { year: '2028', event: 'Feasibility and licensing target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Central region supply' },
    ],
  },

  'khost': {
    name: 'Khost',
    subtitle: 'Eastern Minerals & Chromite',
    heroImage: chromite,
    overview: `Khost Province in eastern Afghanistan has documented chromite and other mineral occurrences. The province is part of the eastern mineral belt that extends into Paktia and neighboring regions. Khost's chromite contributes to Afghanistan's chromite potential; quality and logistics determine competitiveness in regional and global markets.

Development can support regional industry and export; mining and concentrate production for stainless steel feed is an investment priority. Coordinated development with Paktia and other eastern provinces can optimize infrastructure and shared services. Soviet-era chromite mapping and modern re-assessment support resource estimates.`,
    stats: [
      { value: 'Chromite', label: 'Known', description: 'Deposits' },
      { value: 'Eastern', label: 'Belt', description: 'Mineralized zone' },
      { value: 'Multiple', label: 'Minerals', description: 'Potential' },
      { value: 'Stainless', label: 'Steel', description: 'Feed' },
      { value: 'Paktia', label: 'Coordination', description: 'Eastern belt' },
      { value: 'Soviet', label: 'Mapping', description: 'Re-assessment' },
    ],
    minerals: [
      { name: 'Chromite', href: '/minerals/chromite/mining', description: 'Regional chromite' },
      { name: 'Chromite Ferrochrome', href: '/minerals/chromite/ferrochrome', description: 'Value addition' },
      { name: 'Chromite Logar', href: '/minerals/chromite/logar', description: 'Regional deposits' },
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Associated' },
    ],
    investmentOpportunities: [
      { title: 'Chromite & Eastern Belt Development', description: 'Mining and concentrate production for stainless steel feed', value: '$120M', status: 'Open for Investment' },
      { title: 'Eastern Belt Infrastructure', description: 'Shared infrastructure with Paktia for chromite logistics', value: '$50M', status: 'Feasibility Phase' },
      { title: 'Chromite Concentrate Export', description: 'Concentrate production for regional ferrochrome', value: '$80M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Chromite Significance', content: `Khost's chromite contributes to Afghanistan's chromite potential. Quality and logistics determine competitiveness in regional and global markets. Chromite feeds ferrochrome for stainless steel; Afghan concentrate can supply regional smelters. Soviet-era mapping and modern re-assessment support resource estimates.`, image: chromite, alignment: 'left' },
      { title: 'Eastern Belt', content: `Coordinated development with Paktia and other eastern provinces can optimize infrastructure and shared services. Eastern mineral belt extends across provinces; shared logistics and power improve economics. Government support for eastern development applies.`, image: ironOre, alignment: 'right' },
      { title: 'Investment and Development', content: `Mining and concentrate production for stainless steel feed is an investment priority. Feasibility and environmental studies are prerequisites. Partnership with ferrochrome or steel producers can secure offtake. Timeline depends on permitting and logistics.`, image: chromite, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Regional (Pakistan, India) ferrochrome and stainless steel producers are potential offtakers. Production target follows feasibility and investment. Community engagement and environmental planning support social license.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: 'Soviet era', event: 'Chromite mapping' },
      { year: '2020', event: 'Re-assessment' },
      { year: '2025', event: 'Feasibility and licensing target' },
      { year: '2028', event: 'Development target' },
      { year: '2030', event: 'Production target' },
    ],
  },

  'kunar': {
    name: 'Kunar',
    subtitle: 'Gemstone Valley & Eastern Minerals',
    heroImage: emeraldMine,
    overview: `Kunar Province is part of Afghanistan's gemstone-rich eastern belt, with aquamarine and other gem potential. The province shares geological affinities with Nuristan and neighboring gem districts. Artisanal mining and formalization are development themes; Kunar's aquamarine and related gems are known in regional and international markets.

Formalization can improve safety, revenue, and value capture. Partnerships with artisanal miners and investment in cutting and certification can strengthen the provincial gem sector. Gemstone formalization and value addition (support artisanal sector and cutting/export) is an investment priority. Government support for eastern gem sector applies.`,
    stats: [
      { value: 'Gems', label: 'Focus', description: 'Aquamarine, etc.' },
      { value: 'Eastern', label: 'Belt', description: 'Gem province' },
      { value: 'Artisanal', label: 'Sector', description: 'Formalization' },
      { value: 'Nuristan', label: 'Link', description: 'Gem districts' },
      { value: 'Cutting', label: 'Value Add', description: 'Certification' },
      { value: 'Regional', label: 'Markets', description: 'International' },
    ],
    minerals: [
      { name: 'Gems Cutting', href: '/minerals/gems/cutting', description: 'Value addition' },
      { name: 'Gems Certification', href: '/minerals/gems/certification', description: 'Origin and quality' },
      { name: 'Gems Trade', href: '/minerals/gems/trade', description: 'Export channels' },
      { name: 'Emeralds', href: '/minerals/gems/emeralds', description: 'Related gem potential' },
    ],
    investmentOpportunities: [
      { title: 'Gemstone Formalization & Value Addition', description: 'Support artisanal sector and cutting/export', value: '$40M', status: 'Open for Investment' },
      { title: 'Gemstone Cutting Center', description: 'Cutting and certification facility for eastern gems', value: '$25M', status: 'Feasibility Phase' },
      { title: 'Ethical Sourcing & Export', description: 'Traceability and export channels for certified gems', value: '$15M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Gemstone Heritage', content: `Kunar's aquamarine and related gems are known in regional and international markets. Formalization can improve safety, revenue, and value capture. Eastern belt geology supports diverse gem species. Artisanal mining has long history; structured development can add value.`, image: emeraldMine, alignment: 'left' },
      { title: 'Development Pathway', content: `Partnerships with artisanal miners and investment in cutting and certification can strengthen the provincial gem sector. Formalization programs and value addition (cutting, certification) are priorities. Environmental and community engagement are part of design.`, image: lapisLazuli, alignment: 'right' },
      { title: 'Investment and Markets', content: `Gemstone formalization and value addition attract investment. Cutting and certification support premium pricing. Export channels (Gems Trade) and ethical sourcing align with market demand. Timeline depends on formalization and facility development.`, image: emeraldMine, alignment: 'left' },
      { title: 'Regional Coordination', content: `Coordination with Nuristan and Nangarhar supports eastern gem belt development. Shared certification and export logistics can improve economics. Government support for gem sector applies.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: 'Traditional', event: 'Gem mining' },
      { year: '2020', event: 'Formalization planning' },
      { year: '2025', event: 'Formalization programs' },
      { year: '2028', event: 'Cutting and certification target' },
      { year: '2030', event: 'Value addition' },
    ],
  },

  'kunduz': {
    name: 'Kunduz',
    subtitle: 'Northern Transport & Minerals',
    heroImage: copperMine,
    overview: `Kunduz Province in the north is a transport node with mineral potential including industrial and construction minerals (salt, gypsum). Connectivity to Tajikistan and northern Afghanistan supports trade. Development can integrate minerals with regional logistics; Kunduz's position supports movement of bulk minerals to northern markets.

Investment in quarrying and processing can leverage this connectivity. Identified industrial and construction minerals provide a basis for feasibility; licensing and environmental steps follow standard procedures. Extraction and processing for regional markets could create jobs and diversify provincial economy.`,
    stats: [
      { value: 'North', label: 'Node', description: 'Transport' },
      { value: 'Industrial', label: 'Minerals', description: 'Potential' },
      { value: 'Cross-Border', label: 'Trade', description: 'Tajikistan link' },
      { value: 'Salt', label: 'Key', description: 'Gypsum' },
      { value: 'Bulk', label: 'Logistics', description: 'Northern markets' },
      { value: 'Regional', label: 'Offtake', description: 'Domestic, export' },
    ],
    minerals: [
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
      { name: 'Salt', href: '/minerals/gypsum/deposits', description: 'Evaporite resources' },
    ],
    investmentOpportunities: [
      { title: 'Northern Mineral Development', description: 'Extraction and processing for regional markets', value: '$70M', status: 'Open for Investment' },
      { title: 'Northern Transport & Logistics', description: 'Bulk mineral handling and cross-border logistics', value: '$40M', status: 'Feasibility Phase' },
      { title: 'Construction Materials', description: 'Gypsum and limestone for northern construction', value: '$50M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Transport Advantage', content: `Kunduz's position supports movement of bulk minerals to northern markets. Connectivity to Tajikistan and northern Afghanistan supports trade. Investment in quarrying and processing can leverage this connectivity. Cross-border and domestic offtake are potential markets.`, image: copperMine, alignment: 'left' },
      { title: 'Resource Base', content: `Identified industrial and construction minerals (salt, gypsum, limestone) provide a basis for feasibility. Licensing and environmental steps follow standard procedures. Quality and extent are being refined. Partnership with northern offtakers can secure demand.`, image: saltMining, alignment: 'right' },
      { title: 'Investment and Development', content: `Extraction and processing for regional markets could create jobs. Government support for northern development applies. Timeline depends on permitting and logistics. Security and infrastructure are considerations.`, image: ironOre, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic northern construction and regional (Tajikistan) export could absorb production. Assessment and investment outreach are ongoing. Production potential follows feasibility and permitting.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Assessment' },
      { year: '2025', event: 'Investment outreach' },
      { year: '2028', event: 'Quarry and processing target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Regional supply' },
    ],
  },

  'laghman': {
    name: 'Laghman',
    subtitle: 'Eastern Province Minerals',
    heroImage: copperMine,
    overview: `Laghman Province in eastern Afghanistan has mineral potential in the eastern belt context. Proximity to Jalalabad and transport routes supports development. Construction minerals (limestone) and gem potential provide development options; geological mapping and exploration can clarify economic potential.

Laghman shares geological and logistical features with other eastern provinces; coordination with Nangarhar and Kunar can support regional planning. Standard licensing and feasibility apply; community and environmental considerations are integral to project design. Investment in exploration and mineral project development could unlock provincial growth.`,
    stats: [
      { value: 'Eastern', label: 'Belt', description: 'Mineralized zone' },
      { value: 'Multiple', label: 'Potential', description: 'Deposits' },
      { value: 'Jalalabad', label: 'Access', description: 'Regional hub' },
      { value: 'Construction', label: 'Focus', description: 'Gems' },
      { value: 'Nangarhar', label: 'Coordination', description: 'Kunar' },
      { value: 'Exploration', label: 'Phase', description: 'Mapping' },
    ],
    minerals: [
      { name: 'Construction Minerals', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Gems', href: '/minerals/gems/cutting', description: 'Gem potential' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
    ],
    investmentOpportunities: [
      { title: 'Eastern Province Development', description: 'Exploration and mineral project development', value: '$90M', status: 'Open for Investment' },
      { title: 'Construction Minerals', description: 'Limestone and gypsum for eastern region', value: '$50M', status: 'Feasibility Phase' },
      { title: 'Regional Gem & Quarry', description: 'Gem potential and quarry development with Nangarhar', value: '$40M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Eastern Context', content: `Laghman shares geological and logistical features with other eastern provinces. Coordination with Nangarhar and Kunar can support regional planning. Eastern belt context supports construction minerals and gem potential. Jalalabad provides services and connectivity.`, image: ironOre, alignment: 'left' },
      { title: 'Investment Pathway', content: `Standard licensing and feasibility apply. Community and environmental considerations are integral to project design. Exploration and mineral project development can be structured through standard procedures. Timeline depends on mapping and feasibility results.`, image: emeraldMine, alignment: 'right' },
      { title: 'Resource and Development', content: `Construction minerals (limestone, gypsum) and gem potential offer different scales. Geological mapping and exploration can clarify economic potential. Partnership with eastern region offtakers can secure demand.`, image: copperMine, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic construction (Jalalabad, eastern region) and regional export could absorb production. Production potential follows exploration and permitting. Government support for eastern development applies.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Mapping' },
      { year: '2025', event: 'Exploration' },
      { year: '2028', event: 'Feasibility target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Eastern region supply' },
    ],
  },

  'nangarhar': {
    name: 'Nangarhar',
    subtitle: 'Eastern Hub & Multi-Mineral Province',
    heroImage: emeraldMine,
    overview: `Nangarhar Province is an eastern economic hub with diverse mineral potential including gemstones, construction materials, and industrial minerals. Jalalabad provides services and connectivity. The province supports both artisanal and larger-scale development; gemstone and construction mineral development can coexist with agriculture and trade.

Formalization of artisanal gem mining and investment in quarrying and processing are both viable. Environmental and social planning are required. Multi-mineral development (gem formalization and construction mineral quarrying) could create jobs and diversify economy. Government support for eastern hub development applies.`,
    stats: [
      { value: 'Eastern', label: 'Hub', description: 'Jalalabad' },
      { value: 'Diverse', label: 'Minerals', description: 'Gems, industrial' },
      { value: 'Multiple', label: 'Scales', description: 'Artisanal to large' },
      { value: 'Gem', label: 'Formalization', description: 'Quarrying' },
      { value: 'Construction', label: 'Materials', description: 'Cement, aggregate' },
      { value: 'Regional', label: 'Connectivity', description: 'Pakistan, etc.' },
    ],
    minerals: [
      { name: 'Gemstones', href: '/minerals/gems/cutting', description: 'Sapphire and related' },
      { name: 'Construction Materials', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Talc', href: '/minerals/talc/processing', description: 'Industrial minerals' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone' },
    ],
    investmentOpportunities: [
      { title: 'Multi-Mineral Development', description: 'Gem formalization and construction mineral quarrying', value: '$110M', status: 'Open for Investment' },
      { title: 'Eastern Gem & Construction Hub', description: 'Cutting, certification, and quarry supply for region', value: '$60M', status: 'Feasibility Phase' },
      { title: 'Talc & Industrial Minerals', description: 'Talc and industrial mineral development', value: '$40M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Eastern Hub Role', content: `Nangarhar's position and diversity support varied mineral projects. Gemstone and construction mineral development can coexist with agriculture and trade. Jalalabad provides services and connectivity for eastern Afghanistan. Multiple scales from artisanal to large-scale are viable.`, image: emeraldMine, alignment: 'left' },
      { title: 'Development Options', content: `Formalization of artisanal gem mining and investment in quarrying and processing are both viable. Environmental and social planning are required. Gem cutting and certification add value; construction materials supply regional demand. Government support for multi-mineral development applies.`, image: marbleQuarry, alignment: 'right' },
      { title: 'Investment and Markets', content: `Multi-mineral development attracts varied investment. Gem formalization and construction mineral quarrying can proceed in parallel. Partnership with regional offtakers (Pakistan, domestic) can secure demand. Timeline depends on permitting and market.`, image: ironOre, alignment: 'left' },
      { title: 'Timeline and Coordination', content: `Traditional gem and quarry activity continues; structured development targets 2025. Production growth follows formalization and investment. Coordination with Kunar and Laghman supports eastern belt development.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: 'Traditional', event: 'Gem and quarry activity' },
      { year: '2020', event: 'Formalization and quarry planning' },
      { year: '2025', event: 'Structured development' },
      { year: '2028', event: 'Multi-mineral production target' },
      { year: '2030', event: 'Production growth' },
    ],
  },

  'nimruz': {
    name: 'Nimruz',
    subtitle: 'Southwestern Minerals & Transit',
    heroImage: copperMine,
    overview: `Nimruz Province in the southwest has mineral potential and benefits from transit routes to Iran. Industrial and construction minerals (gypsum, salt) are among the identified resources. Development can support provincial and regional markets; Nimruz's routes to Iran can support mineral export and equipment import.

Identified occurrences support feasibility studies; standard licensing and environmental procedures apply. Security and infrastructure are considerations for project planning. Quarrying and processing for domestic and export could create jobs and diversify economy. Government support for southwestern development applies.`,
    stats: [
      { value: 'Southwest', label: 'Location', description: 'Iran border' },
      { value: 'Industrial', label: 'Minerals', description: 'Focus' },
      { value: 'Transit', label: 'Routes', description: 'Logistics' },
      { value: 'Iran', label: 'Export', description: 'Equipment import' },
      { value: 'Gypsum', label: 'Key', description: 'Salt' },
      { value: 'Feasibility', label: 'Status', description: 'Studies' },
    ],
    minerals: [
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
    ],
    investmentOpportunities: [
      { title: 'Southwestern Mineral Development', description: 'Quarrying and processing for domestic and export', value: '$75M', status: 'Open for Investment' },
      { title: 'Iran Transit & Export', description: 'Mineral export and logistics via Iran routes', value: '$40M', status: 'Feasibility Phase' },
      { title: 'Construction Materials Hub', description: 'Gypsum and limestone for southwestern region', value: '$50M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Transit Advantage', content: `Nimruz's routes to Iran can support mineral export and equipment import. Security and infrastructure are considerations for project planning. Southwestern location enables cross-border trade. Government priority for transit development applies.`, image: copperMine, alignment: 'left' },
      { title: 'Resource Base', content: `Identified occurrences (gypsum, salt, limestone) support feasibility studies. Standard licensing and environmental procedures apply. Quality and extent are being refined. Partnership with domestic and Iran offtakers can secure demand.`, image: saltMining, alignment: 'right' },
      { title: 'Investment and Development', content: `Quarrying and processing for domestic and export could create jobs. Investment focus and feasibility are ongoing. Timeline depends on permitting and infrastructure. Environmental and community engagement are part of design.`, image: ironOre, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic construction and regional export (Iran) could absorb production. Production potential follows assessment and investment. Government support for southwestern development applies.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Assessment' },
      { year: '2025', event: 'Investment focus' },
      { year: '2028', event: 'Quarry and processing target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Transit and export' },
    ],
  },

  'nuristan': {
    name: 'Nuristan',
    subtitle: 'Lithium Frontier & Gemstone Province',
    heroImage: lithiumDeposits,
    overview: `Nuristan Province hosts lithium pegmatites and gemstone deposits, positioning it as a frontier for battery materials and colored gems. The province shares geological features with Ghazni (lithium) and eastern gem districts. Access and infrastructure are development priorities; development would require infrastructure investment and adherence to environmental and social standards.

Nuristan's lithium pegmatites complement Ghazni's resources. Tourmaline and other gems from Nuristan are known in international markets; formalization and value addition can increase local benefit. Exploration and development of lithium and gem resources is a strategic priority. Government and international interest in critical minerals and gems supports investment outreach.`,
    stats: [
      { value: 'Lithium', label: 'Frontier', description: 'Pegmatite potential' },
      { value: 'Gems', label: 'Province', description: 'Tourmaline, etc.' },
      { value: 'Strategic', label: 'Role', description: 'Battery materials' },
      { value: 'Ghazni', label: 'Link', description: 'Lithium belt' },
      { value: 'Access', label: 'Priority', description: 'Infrastructure' },
      { value: 'Formalization', label: 'Gems', description: 'Value addition' },
    ],
    minerals: [
      { name: 'Lithium', href: '/minerals/lithium/ghazni', description: 'Pegmatite potential' },
      { name: 'Gems Cutting', href: '/minerals/gems/cutting', description: 'Tourmaline and gems' },
      { name: 'Gems Trade', href: '/minerals/gems/trade', description: 'Export channels' },
      { name: 'Mica', href: '/minerals/mica/deposits', description: 'Pegmatite minerals' },
    ],
    investmentOpportunities: [
      { title: 'Lithium & Gemstone Development', description: 'Exploration and development of lithium and gem resources', value: '$400M', status: 'Strategic' },
      { title: 'Access & Infrastructure', description: 'Road and power to enable lithium and gem development', value: '$150M', status: 'Planning Phase' },
      { title: 'Gemstone Formalization', description: 'Formalization and value addition for Nuristan gems', value: '$30M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Lithium Potential', content: `Nuristan's lithium pegmatites complement Ghazni's resources. Development would require infrastructure investment and adherence to environmental and social standards. Pegmatite-hosted lithium is strategic for battery supply chains. Exploration and partnerships are ongoing.`, image: lithiumDeposits, alignment: 'left' },
      { title: 'Gemstone Heritage', content: `Tourmaline and other gems from Nuristan are known in international markets. Formalization and value addition can increase local benefit. Eastern gem belt extends into Nuristan; artisanal mining has long history. Cutting and certification add value.`, image: emeraldMine, alignment: 'right' },
      { title: 'Access and Development', content: `Access and infrastructure are development priorities. Road and power investment would enable feasibility and mining. Government and strategic investors may support capital-intensive development. Timeline from exploration to production spans years.`, image: ironOre, alignment: 'left' },
      { title: 'Investment and Markets', content: `Lithium and gem development attracts strategic interest. Partnership with battery and gem sector can secure offtake. Environmental and community engagement are integral. Government support for frontier provinces applies.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: '2010', event: 'USGS lithium focus' },
      { year: '2020', event: 'Exploration and access planning' },
      { year: '2025', event: 'Exploration and partnerships' },
      { year: '2028', event: 'Infrastructure and feasibility target' },
      { year: '2030', event: 'Production targets' },
    ],
  },

  'paktia': {
    name: 'Paktia',
    subtitle: 'Eastern Chromite & Metals',
    heroImage: chromite,
    overview: `Paktia Province in eastern Afghanistan has documented chromite and other mineral deposits. The province is part of the eastern mineral belt; development can support regional industry and export of chromite concentrate. Paktia's chromite contributes to Afghanistan's chromite endowment; quality and logistics determine competitiveness.

Development can be coordinated with Khost and other eastern provinces for shared infrastructure and services. Chromite mining and processing for stainless steel feed is an investment priority. Soviet-era chromite mapping and modern re-assessment support resource estimates. Government support for eastern belt development applies.`,
    stats: [
      { value: 'Chromite', label: 'Deposits', description: 'Known' },
      { value: 'Eastern', label: 'Belt', description: 'Mineralized zone' },
      { value: 'Multiple', label: 'Minerals', description: 'Potential' },
      { value: 'Stainless', label: 'Steel', description: 'Feed' },
      { value: 'Khost', label: 'Coordination', description: 'Shared infra' },
      { value: 'Soviet', label: 'Mapping', description: 'Re-assessment' },
    ],
    minerals: [
      { name: 'Chromite', href: '/minerals/chromite/mining', description: 'Chromite mining' },
      { name: 'Chromite Ferrochrome', href: '/minerals/chromite/ferrochrome', description: 'Value addition' },
      { name: 'Chromite Logar', href: '/minerals/chromite/logar', description: 'Regional deposits' },
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Associated' },
    ],
    investmentOpportunities: [
      { title: 'Chromite Mining & Processing', description: 'Develop chromite for stainless steel feed', value: '$100M', status: 'Open for Investment' },
      { title: 'Eastern Belt Infrastructure', description: 'Shared infrastructure with Khost for chromite logistics', value: '$50M', status: 'Feasibility Phase' },
      { title: 'Chromite Concentrate Export', description: 'Concentrate production for regional ferrochrome', value: '$70M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Chromite Base', content: `Paktia's chromite contributes to Afghanistan's chromite endowment. Quality and logistics determine competitiveness in regional and global markets. Chromite feeds ferrochrome for stainless steel; Soviet-era mapping and re-assessment support estimates. Development can support regional industry and export.`, image: chromite, alignment: 'left' },
      { title: 'Regional Coordination', content: `Development can be coordinated with Khost and other eastern provinces for shared infrastructure and services. Eastern mineral belt extends across provinces; shared logistics improve economics. Partnership with ferrochrome or steel producers can secure offtake.`, image: ironOre, alignment: 'right' },
      { title: 'Investment and Development', content: `Chromite mining and processing for stainless steel feed is an investment priority. Feasibility and environmental studies are prerequisites. Licensing and permitting follow standard procedures. Timeline depends on logistics and offtake.`, image: chromite, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Regional (Pakistan, India) ferrochrome and stainless steel producers are potential offtakers. Production target follows feasibility and investment. Community engagement and environmental planning support social license.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: 'Soviet era', event: 'Chromite mapping' },
      { year: '2020', event: 'Re-assessment' },
      { year: '2025', event: 'Feasibility and licensing target' },
      { year: '2028', event: 'Development target' },
      { year: '2030', event: 'Production target' },
    ],
  },

  'paktika': {
    name: 'Paktika',
    subtitle: 'Southeastern Minerals',
    heroImage: copperMine,
    overview: `Paktika Province in the southeast has mineral potential in the eastern belt context. Industrial and construction minerals (chromite, gypsum) are among the identified resources. Development can support provincial and regional markets. Paktika shares geological features with other eastern provinces; coordination supports regional planning and infrastructure.

Standard licensing and feasibility apply; community and environmental considerations are part of project design. Exploration and mineral project development could create jobs and diversify economy. Survey updates continue to refine resource understanding. Government support for southeastern development applies.`,
    stats: [
      { value: 'Southeast', label: 'Location', description: 'Eastern belt' },
      { value: 'Industrial', label: 'Minerals', description: 'Focus' },
      { value: 'Growing', label: 'Data', description: 'Survey updates' },
      { value: 'Chromite', label: 'Key', description: 'Gypsum' },
      { value: 'Regional', label: 'Coordination', description: 'Eastern provinces' },
      { value: 'Exploration', label: 'Phase', description: 'Feasibility' },
    ],
    minerals: [
      { name: 'Chromite', href: '/minerals/chromite/mining', description: 'Regional chromite' },
      { name: 'Construction Materials', href: '/minerals/gypsum/deposits', description: 'Gypsum and related' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Chromite Ferrochrome', href: '/minerals/chromite/ferrochrome', description: 'Value addition' },
    ],
    investmentOpportunities: [
      { title: 'Southeastern Development', description: 'Exploration and mineral project development', value: '$85M', status: 'Open for Investment' },
      { title: 'Chromite & Construction', description: 'Chromite and construction materials for regional markets', value: '$60M', status: 'Feasibility Phase' },
      { title: 'Eastern Belt Coordination', description: 'Shared infrastructure with Paktia and Khost', value: '$40M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Eastern Belt Context', content: `Paktika shares geological features with other eastern provinces. Coordination supports regional planning and infrastructure. Chromite and construction minerals (gypsum, limestone) are identified; survey updates continue. Feasibility studies can prioritize deposits.`, image: chromite, alignment: 'left' },
      { title: 'Investment Pathway', content: `Standard licensing and feasibility apply. Community and environmental considerations are part of project design. Exploration and mineral project development can be structured through standard procedures. Timeline depends on mapping and feasibility results.`, image: copperMine, alignment: 'right' },
      { title: 'Resource and Development', content: `Identified resources support feasibility and licensing. Partnership with eastern region offtakers (chromite, construction) can secure demand. Government support for southeastern development applies.`, image: ironOre, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic construction and regional chromite/ferrochrome markets could absorb production. Production potential follows exploration and permitting. Coordination with Paktia and Khost supports eastern belt development.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Mapping' },
      { year: '2025', event: 'Exploration' },
      { year: '2028', event: 'Feasibility target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Southeastern supply' },
    ],
  },

  'parwan': {
    name: 'Parwan',
    subtitle: 'Central Province & Kabul Gateway',
    heroImage: ironOre,
    overview: `Parwan Province is central and provides a gateway between Kabul and the north. The province has mineral potential including construction materials (limestone, marble) and possible metal occurrences. Proximity to the capital supports access to technical and policy institutions.

Parwan's position supports mineral logistics for the capital and northern regions. Investment in quarrying can serve construction and infrastructure. Identified deposits can be developed under standard licensing; environmental and community engagement are required. Quarrying and processing for capital and regional supply could create jobs and reduce transport cost.`,
    stats: [
      { value: 'Central', label: 'Gateway', description: 'Kabul–north' },
      { value: 'Construction', label: 'Minerals', description: 'Primary' },
      { value: 'Access', label: 'Advantage', description: 'Capital proximity' },
      { value: 'Logistics', label: 'Role', description: 'Capital and north' },
      { value: 'Quarrying', label: 'Investment', description: 'Processing' },
      { value: 'Regional', label: 'Supply', description: 'Construction' },
    ],
    minerals: [
      { name: 'Construction Materials', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Cement and plaster' },
      { name: 'Cement Materials', href: '/minerals/gypsum-limestone/cement', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Central Province Mineral Development', description: 'Quarrying and processing for capital and regional supply', value: '$70M', status: 'Open for Investment' },
      { title: 'Kabul Gateway Quarries', description: 'Aggregate and dimension stone for capital region', value: '$40M', status: 'Feasibility Phase' },
      { title: 'Northern Supply Corridor', description: 'Mineral logistics for Kabul and northern markets', value: '$30M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Gateway Role', content: `Parwan's position supports mineral logistics for the capital and northern regions. Investment in quarrying can serve construction and infrastructure. Proximity to Kabul reduces transport cost for capital projects. Northern corridor connectivity supports regional supply.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Resource Development', content: `Identified deposits (limestone, marble, gypsum) can be developed under standard licensing. Environmental and community engagement are required. Construction materials and dimension stone are primary focus. Feasibility studies can prioritize deposits.`, image: copperMine, alignment: 'right' },
      { title: 'Investment and Markets', content: `Quarrying and processing for capital and regional supply could create jobs. Partnership with construction and infrastructure developers can secure offtake. Government support for central province development applies. Timeline depends on permitting and market.`, image: ironOre, alignment: 'left' },
      { title: 'Timeline', content: `Assessment and investment focus are ongoing. Production potential follows feasibility and permitting. Capital region and northern demand could absorb production.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Assessment' },
      { year: '2025', event: 'Investment focus' },
      { year: '2028', event: 'Quarry and processing target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Gateway supply' },
    ],
  },

  'samangan': {
    name: 'Samangan',
    subtitle: 'Northern Coal & Minerals',
    heroImage: coalMining,
    overview: `Samangan Province in the north hosts coal and other mineral resources. The province is part of the northern coal belt and has connectivity to Mazar-i-Sharif. Development can support energy and industrial mineral supply. Samangan's coal resources contribute to northern energy and industry; development can include washing and logistics for domestic and export.

Investment in extraction and processing can create jobs and support regional energy security. Environmental and social planning are integral. Soviet-era coal surveys and modern re-assessment support resource estimates. Industrial minerals (gypsum, etc.) complement coal development. Government support for northern development applies.`,
    stats: [
      { value: 'Coal', label: 'Belt', description: 'Northern reserves' },
      { value: 'Multiple', label: 'Minerals', description: 'Potential' },
      { value: 'North', label: 'Hub', description: 'Mazar connectivity' },
      { value: 'Washing', label: 'Development', description: 'Logistics' },
      { value: 'Energy', label: 'Support', description: 'Industrial' },
      { value: 'Soviet', label: 'Surveys', description: 'Re-assessment' },
    ],
    minerals: [
      { name: 'Coal', href: '/minerals/coal/thermal', description: 'Regional coal belt' },
      { name: 'Coal Processing', href: '/minerals/coal/processing', description: 'Washing and preparation' },
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
    ],
    investmentOpportunities: [
      { title: 'Coal & Mineral Development', description: 'Coal mining and industrial mineral extraction', value: '$180M', status: 'Open for Investment' },
      { title: 'Northern Coal Washing', description: 'Coal preparation and logistics for power and industry', value: '$80M', status: 'Feasibility Phase' },
      { title: 'Industrial Minerals', description: 'Gypsum and limestone for northern construction', value: '$50M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Northern Coal Belt', content: `Samangan's coal resources contribute to northern energy and industry. Development can include washing and logistics for domestic and export. Soviet-era surveys and re-assessment support estimates. Coal quality (thermal, potential metallurgical) guides development.`, image: coalMining, alignment: 'left' },
      { title: 'Development Context', content: `Investment in extraction and processing can create jobs and support regional energy security. Environmental and social planning are integral. Connectivity to Mazar-i-Sharif supports logistics. Partnership with power and industrial offtakers can secure demand.`, image: ironOre, alignment: 'right' },
      { title: 'Industrial Minerals', content: `Gypsum and other industrial minerals complement coal. Development can support northern construction and cement. Standard licensing and environmental procedures apply. Timeline depends on permitting and offtake.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic power and industry (cement, brick) are primary offtake. Regional export (Uzbekistan, Tajikistan) may be possible. Production target follows feasibility and investment. Government support for northern coal belt applies.`, image: copperMine, alignment: 'right' },
    ],
    timeline: [
      { year: 'Soviet era', event: 'Coal surveys' },
      { year: '2020', event: 'Re-assessment' },
      { year: '2025', event: 'Feasibility and licensing target' },
      { year: '2028', event: 'Development target' },
      { year: '2030', event: 'Production target' },
    ],
  },

  'sar-e-pol': {
    name: 'Sar-e Pol',
    subtitle: 'Northern Iron & Base Metals',
    heroImage: ironOre,
    overview: `Sar-e Pol Province in the north has significant iron ore and base metal potential. The province is part of the northern mineral belt and benefits from connectivity to Mazar-i-Sharif and regional transport. Development could support domestic steel (e.g. Hajigak linkage) and export. Sar-e Pol's iron and base metal resources are significant for national steel and export strategies; feasibility and infrastructure planning are priorities.

Coordination with Balkh and other northern provinces can optimize infrastructure and shared services for mining. Soviet-era surveys and updated assessments support resource estimates. Investment in exploration and development of northern belt resources is strategic. Government priority for northern mineral development applies.`,
    stats: [
      { value: 'Iron', label: 'Potential', description: 'Major' },
      { value: 'Base Metals', label: 'Also', description: 'Copper, etc.' },
      { value: 'North', label: 'Belt', description: 'Mineralized zone' },
      { value: 'Mazar', label: 'Connectivity', description: 'Regional transport' },
      { value: 'Steel', label: 'Link', description: 'Export' },
      { value: 'Soviet', label: 'Surveys', description: 'Updated assessments' },
    ],
    minerals: [
      { name: 'Iron Ore', href: '/minerals/iron/hajigak', description: 'Regional iron belt' },
      { name: 'Iron Bamyan', href: '/minerals/iron/bamyan', description: 'Hajigak and related' },
      { name: 'Copper', href: '/minerals/copper/mes-aynak', description: 'Base metal potential' },
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Construction' },
    ],
    investmentOpportunities: [
      { title: 'Iron & Base Metal Development', description: 'Exploration and development of northern belt resources', value: '$600M', status: 'Strategic' },
      { title: 'Northern Concentrate Hub', description: 'Concentrate handling and logistics for steel and export', value: '$100M', status: 'Feasibility Phase' },
      { title: 'Infrastructure & Access', description: 'Road and rail for northern mineral development', value: '$150M', status: 'Planning Phase' },
    ],
    sections: [
      { title: 'Northern Iron Potential', content: `Sar-e Pol's iron and base metal resources are significant for national steel and export strategies. Feasibility and infrastructure planning are priorities. Hajigak-style and related deposits support steel development. Soviet-era and updated assessments support resource estimates.`, image: ironOre, alignment: 'left' },
      { title: 'Regional Role', content: `Coordination with Balkh and other northern provinces can optimize infrastructure and shared services for mining. Northern transport corridors support concentrate export. Partnership with steel and smelter offtakers can secure demand. Government priority for northern mineral development applies.`, image: copperMine, alignment: 'right' },
      { title: 'Investment and Development', content: `Exploration and development of northern belt resources is strategic. Capital-intensive; feasibility and environmental studies are prerequisites. Timeline from resource to production spans years. International partnership may support financing.`, image: ironOre, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic steel (Hajigak linkage) and regional export (concentrate) are markets. Production targets follow feasibility and investment. Community engagement and environmental planning support social license.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '1970s', event: 'Soviet surveys' },
      { year: '2020', event: 'Updated assessments' },
      { year: '2025', event: 'Feasibility and partnership target' },
      { year: '2028', event: 'Development target' },
      { year: '2030', event: 'Production targets' },
    ],
  },

  'takhar': {
    name: 'Takhar',
    subtitle: 'Golden Rivers & Northern Minerals',
    heroImage: goldMining,
    overview: `Takhar Province in the north has documented gold potential along river systems (alluvial/placer) and in hard rock (lode). The province also has other mineral occurrences. Connectivity to Kunduz and northern corridors supports development. Takhar's gold resources include alluvial and hard rock; responsible development can support formalization and value capture.

The province benefits from northern transport and services. Environmental and social standards apply to all development. Gold exploration and development, alongside other minerals, could create jobs and diversify economy. Government support for northern development applies.`,
    stats: [
      { value: 'Gold', label: 'Potential', description: 'Alluvial and lode' },
      { value: 'Northern', label: 'Rivers', description: 'Placer potential' },
      { value: 'Multiple', label: 'Minerals', description: 'Other deposits' },
      { value: 'Kunduz', label: 'Connectivity', description: 'Northern corridors' },
      { value: 'Formalization', label: 'Development', description: 'Value capture' },
      { value: 'Responsible', label: 'Standards', description: 'Environmental, social' },
    ],
    minerals: [
      { name: 'Gold', href: '/minerals/gold/placer', description: 'Alluvial gold' },
      { name: 'Gold Lode', href: '/minerals/gold/lode', description: 'Hard rock gold' },
      { name: 'Gold Processing', href: '/minerals/gold/processing', description: 'Processing and refining' },
      { name: 'Industrial Minerals', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
    ],
    investmentOpportunities: [
      { title: 'Gold & Mineral Development', description: 'Gold exploration and development, other minerals', value: '$250M', status: 'Open for Investment' },
      { title: 'Gold Formalization', description: 'Formalize artisanal gold and support processing', value: '$60M', status: 'Feasibility Phase' },
      { title: 'Northern Mineral Hub', description: 'Gold and industrial minerals for northern markets', value: '$80M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Gold Potential', content: `Takhar's gold resources include alluvial and hard rock. Responsible development can support formalization and value capture. River systems host placer potential; lode deposits support longer-term production. Feasibility and licensing are ongoing.`, image: goldMining, alignment: 'left' },
      { title: 'Northern Context', content: `The province benefits from northern transport and services. Connectivity to Kunduz and northern corridors supports logistics. Environmental and social standards apply to all development. Partnership with refiners and offtakers can secure demand.`, image: copperMine, alignment: 'right' },
      { title: 'Investment and Development', content: `Gold exploration and development could create jobs. Formalization of artisanal sector and investment in processing add value. Standard licensing and environmental procedures apply. Timeline depends on feasibility and permitting.`, image: goldMining, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic and regional gold market could absorb production. Refined gold (LBMA-certified) supports premium pricing. Production target follows feasibility and licensing. Government support for northern development applies.`, image: ironOre, alignment: 'right' },
    ],
    timeline: [
      { year: '2010', event: 'Gold focus' },
      { year: '2020', event: 'Exploration and formalization' },
      { year: '2025', event: 'Feasibility and licensing' },
      { year: '2028', event: 'Development target' },
      { year: '2030', event: 'Production target' },
    ],
  },

  'uruzgan': {
    name: 'Uruzgan',
    subtitle: 'Central Minerals & Heritage',
    heroImage: copperMine,
    overview: `Uruzgan Province in the central region has mineral potential in the central belt context. Industrial and construction minerals (gypsum, limestone, talc) are among the identified resources. Development can support provincial and regional markets. Uruzgan shares geological features with other central provinces; coordination supports regional planning.

Standard licensing and feasibility apply; community and environmental considerations are part of project design. Exploration and mineral project development could create jobs and diversify economy. Survey updates continue to refine resource understanding. Government support for central province development applies.`,
    stats: [
      { value: 'Central', label: 'Belt', description: 'Mineralized zone' },
      { value: 'Industrial', label: 'Minerals', description: 'Focus' },
      { value: 'Growing', label: 'Data', description: 'Survey updates' },
      { value: 'Gypsum', label: 'Key', description: 'Talc, limestone' },
      { value: 'Regional', label: 'Coordination', description: 'Central provinces' },
      { value: 'Exploration', label: 'Phase', description: 'Feasibility' },
    ],
    minerals: [
      { name: 'Construction Materials', href: '/minerals/gypsum/deposits', description: 'Gypsum and limestone' },
      { name: 'Talc', href: '/minerals/talc/processing', description: 'Industrial minerals' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
    ],
    investmentOpportunities: [
      { title: 'Central Province Development', description: 'Exploration and mineral project development', value: '$95M', status: 'Open for Investment' },
      { title: 'Industrial Minerals', description: 'Talc and gypsum for regional markets', value: '$50M', status: 'Feasibility Phase' },
      { title: 'Construction Materials', description: 'Gypsum and limestone for central region', value: '$45M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Central Context', content: `Uruzgan shares geological features with other central provinces. Coordination supports regional planning. Industrial and construction minerals (gypsum, limestone, talc) are identified; survey updates continue. Feasibility studies can prioritize deposits.`, image: ironOre, alignment: 'left' },
      { title: 'Investment Pathway', content: `Standard licensing and feasibility apply. Community and environmental considerations are part of project design. Exploration and mineral project development can be structured through standard procedures. Timeline depends on mapping and feasibility results.`, image: talcMining, alignment: 'right' },
      { title: 'Resource and Development', content: `Identified resources support feasibility and licensing. Partnership with central region offtakers (construction, industrial) can secure demand. Government support for central province development applies.`, image: copperMine, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic construction and regional industrial markets could absorb production. Production potential follows exploration and permitting. Coordination with Daykundi and Ghazni supports central belt development.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Mapping' },
      { year: '2025', event: 'Exploration' },
      { year: '2028', event: 'Feasibility target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Central region supply' },
    ],
  },

  'wardak': {
    name: 'Wardak',
    subtitle: 'Central Province & Marble',
    heroImage: marbleQuarry,
    overview: `Wardak Province in the central region has marble and other construction mineral potential. Proximity to Kabul and central transport supports logistics. Development can supply the capital region and domestic markets. Wardak's marble can supply Kabul and regional construction; sustainable quarrying and rehabilitation are development criteria.

Proximity to the capital supports demand and logistics. Licensing and environmental procedures follow national standards. Quarrying and processing for capital and domestic supply could create jobs and reduce transport cost. Government support for central province development applies.`,
    stats: [
      { value: 'Marble', label: 'Potential', description: 'Dimension stone' },
      { value: 'Central', label: 'Location', description: 'Near Kabul' },
      { value: 'Construction', label: 'Minerals', description: 'Focus' },
      { value: 'Kabul', label: 'Supply', description: 'Capital region' },
      { value: 'Sustainable', label: 'Quarrying', description: 'Rehabilitation' },
      { value: 'Logistics', label: 'Advantage', description: 'Proximity' },
    ],
    minerals: [
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Marble Processing', href: '/minerals/marble/processing', description: 'Cutting and polishing' },
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Cement and plaster' },
    ],
    investmentOpportunities: [
      { title: 'Marble & Construction Minerals', description: 'Quarrying and processing for capital and domestic supply', value: '$80M', status: 'Open for Investment' },
      { title: 'Capital Region Marble', description: 'Dimension stone supply for Kabul construction', value: '$40M', status: 'Feasibility Phase' },
      { title: 'Sustainable Quarry Development', description: 'Quarrying with rehabilitation and community benefit', value: '$30M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Marble Potential', content: `Wardak's marble can supply Kabul and regional construction. Sustainable quarrying and rehabilitation are development criteria. Dimension stone quality and variety support market. Proximity to capital reduces logistics cost.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Central Access', content: `Proximity to the capital supports demand and logistics. Licensing and environmental procedures follow national standards. Construction materials (limestone, gypsum) complement marble. Partnership with capital region developers can secure offtake.`, image: copperMine, alignment: 'right' },
      { title: 'Investment and Development', content: `Quarrying and processing for capital and domestic supply could create jobs. Investment focus and feasibility are ongoing. Sustainable quarry development (rehabilitation, community benefit) supports social license. Timeline depends on permitting and market.`, image: ironOre, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Capital region and domestic construction could absorb production. Production potential follows assessment and investment. Government support for central province development applies. Coordination with Kabul and Parwan supports regional supply.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Assessment' },
      { year: '2025', event: 'Investment focus' },
      { year: '2028', event: 'Quarry and processing target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Capital region supply' },
    ],
  },

  'zabul': {
    name: 'Zabul',
    subtitle: 'Southern Minerals',
    heroImage: copperMine,
    overview: `Zabul Province in the south has mineral potential including industrial and construction minerals (gypsum, limestone). The province is part of the southern region and can benefit from regional transport and markets. Development can support provincial employment and supply. Zabul's mineral potential can be developed in coordination with Kandahar and other southern provinces; infrastructure is a shared priority.

Standard licensing and feasibility apply; community and environmental considerations are part of project design. Quarrying and mineral project development could create jobs and diversify economy. Survey updates continue to refine resource understanding. Government support for southern province development applies.`,
    stats: [
      { value: 'Southern', label: 'Region', description: 'Location' },
      { value: 'Industrial', label: 'Minerals', description: 'Focus' },
      { value: 'Growing', label: 'Data', description: 'Survey updates' },
      { value: 'Kandahar', label: 'Coordination', description: 'Southern provinces' },
      { value: 'Gypsum', label: 'Key', description: 'Limestone' },
      { value: 'Infrastructure', label: 'Priority', description: 'Shared' },
    ],
    minerals: [
      { name: 'Gypsum', href: '/minerals/gypsum/deposits', description: 'Construction and industry' },
      { name: 'Limestone', href: '/minerals/limestone/quarries', description: 'Cement and aggregate' },
      { name: 'Marble', href: '/minerals/marble/varieties', description: 'Dimension stone potential' },
      { name: 'Construction Materials', href: '/minerals/gypsum-limestone/construction', description: 'Integrated supply' },
    ],
    investmentOpportunities: [
      { title: 'Southern Province Development', description: 'Quarrying and mineral project development', value: '$75M', status: 'Open for Investment' },
      { title: 'Southern Construction Hub', description: 'Gypsum and limestone for Kandahar region', value: '$50M', status: 'Feasibility Phase' },
      { title: 'Regional Coordination', description: 'Shared infrastructure with Kandahar for mineral development', value: '$40M', status: 'Open for Investment' },
    ],
    sections: [
      { title: 'Southern Context', content: `Zabul's mineral potential can be developed in coordination with Kandahar and other southern provinces. Infrastructure is a shared priority. Industrial and construction minerals (gypsum, limestone) are identified; survey updates continue. Regional transport and markets support offtake.`, image: marbleQuarry, alignment: 'left' },
      { title: 'Investment Pathway', content: `Standard licensing and feasibility apply. Community and environmental considerations are part of project design. Quarrying and mineral project development can be structured through standard procedures. Timeline depends on mapping and feasibility results.`, image: ironOre, alignment: 'right' },
      { title: 'Resource and Development', content: `Identified resources (gypsum, limestone, marble potential) support feasibility and licensing. Partnership with southern region offtakers (Kandahar, construction) can secure demand. Government support for southern province development applies.`, image: copperMine, alignment: 'left' },
      { title: 'Markets and Timeline', content: `Domestic construction and regional (Kandahar, Pakistan) markets could absorb production. Production potential follows exploration and permitting. Coordination with Kandahar supports southern mineral development.`, image: marbleQuarry, alignment: 'right' },
    ],
    timeline: [
      { year: '2020', event: 'Mapping' },
      { year: '2025', event: 'Exploration' },
      { year: '2028', event: 'Feasibility target' },
      { year: '2030', event: 'Production potential' },
      { year: '2032', event: 'Southern region supply' },
    ],
  },
};

// Wire in massive province section expansions
import { getProvinceExtraSections } from './provinceSectionsExpansion';

Object.keys(afghanProvinces).forEach(key => {
  const extra = getProvinceExtraSections(key);
  afghanProvinces[key].sections.push(...extra);
});

export const provinceDatabase: Record<string, ProvinceData> = afghanProvinces;
