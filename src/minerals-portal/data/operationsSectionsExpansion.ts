/**
 * MASSIVE OPERATIONS SECTIONS EXPANSION
 * Adds 8-12 deep sections per operation entry, plus new operation types
 */

import { Award, Building2, CheckCircle2, Compass, Factory, FileText, Flame, FlaskConical, Globe, Leaf, Scale, Shield, Target, Truck, Users, Zap } from 'lucide-react';

// Additional deep sections for PROCESSING
export const PROCESSING_EXTRA_SECTIONS = [
  {
    title: 'Flotation Circuit Design & Optimization',
    content: `Modern flotation circuits represent the backbone of copper and polymetallic ore processing in Afghanistan's mineral operations. The design philosophy centers on maximizing mineral recovery while minimizing energy consumption and reagent use. Rougher-scavenger-cleaner circuits with multiple stages achieve recoveries exceeding 93% for copper sulfide minerals. Each stage serves a distinct purpose: roughers capture bulk mineral content, scavengers recover remaining valuable particles from rougher tailings, and cleaners upgrade concentrate to marketable grades.

Column flotation cells complement conventional mechanical cells in cleaner applications, producing exceptionally clean concentrates with grades exceeding 30% copper. The tall, narrow geometry provides extended contact time between air bubbles and mineral particles, enabling sharp separation. Sparger systems generate fine bubbles maximizing bubble-particle collision probability. Wash water systems remove entrained gangue from the froth, achieving concentrate grades that command premium pricing.

Reagent optimization through automated dosing systems ensures consistent performance across varying ore types. Collector selection—xanthates for sulfide ores, hydroxamates for oxide ores—matches mineral surface chemistry. Frother addition controls bubble size and froth stability. pH modifiers create optimal conditions for selective flotation. Real-time monitoring of pulp chemistry enables rapid adjustment, maintaining optimal conditions despite ore variability. These sophisticated systems ensure that Afghanistan's processing operations achieve world-class metallurgical performance.`,
    icon: Factory,
    alignment: 'left' as const
  },
  {
    title: 'Comminution Technology & Energy Efficiency',
    content: `Comminution—the crushing and grinding of ore to liberation size—consumes 30-50% of total mine energy and represents the single largest operating cost in mineral processing. Afghanistan's processing facilities employ advanced comminution technologies that balance energy efficiency with particle size requirements. Primary crushers—jaw and gyratory types—reduce run-of-mine ore from 1,500mm to 200mm. Secondary cone crushers further reduce to 50mm before grinding circuits achieve final liberation sizes of 75-150 microns.

High-Pressure Grinding Rolls (HPGR) technology represents a step change in comminution efficiency. Inter-particle compression achieves size reduction with 20-40% less energy than conventional ball milling. The technology also generates micro-fractures along grain boundaries, improving downstream liberation and recovery. HPGR application in Afghan copper and iron processing circuits delivers both energy savings and metallurgical benefits, reducing operating costs while improving recovery.

Semi-autogenous grinding (SAG) mills combined with ball mills form the workhorse of large-scale grinding circuits. SAG mills use ore as grinding media, reducing steel consumption. Variable speed drives optimize mill performance across varying feed characteristics. Advanced instrumentation—bearing pressure, sound level, power draw—enables expert systems to maintain optimal mill loading. Pebble crushing circuits return critical-size material for re-grinding, preventing accumulation that reduces efficiency. These technologies ensure that Afghan processing facilities operate at the forefront of comminution practice.`,
    icon: Zap,
    alignment: 'right' as const
  },
  {
    title: 'Hydrometallurgical Processing & Solvent Extraction',
    content: `Hydrometallurgical processing transforms oxide and secondary sulfide ores through chemical dissolution and selective recovery. Heap leaching applies dilute acid or cyanide solutions to stacked ore, dissolving target metals over weeks to months. The pregnant leach solution (PLS) carries dissolved metals to recovery circuits. This approach enables economic processing of lower-grade ores that would be uneconomic through conventional flotation-smelting routes.

Solvent extraction-electrowinning (SX-EW) produces high-purity copper cathodes directly from leach solutions. The SX circuit uses organic extractants to selectively capture copper from PLS, separating it from impurities. Stripping transfers concentrated copper to an aqueous electrolyte. Electrowinning deposits pure copper onto cathodes through electrolysis, producing 99.99% pure metal meeting LME Grade A specifications. SX-EW cathodes from Afghan operations command premium prices due to exceptional purity.

Pressure oxidation and bio-leaching unlock value from refractory sulfide ores resistant to conventional processing. Autoclave technology applies heat and pressure in acidic solution, oxidizing sulfide minerals and releasing enclosed metals. Bio-leaching harnesses naturally occurring bacteria to oxidize sulfides at ambient temperature, offering lower capital cost but longer processing times. Research partnerships with international institutions advance these technologies for Afghan ore types, expanding the range of economically recoverable resources.`,
    icon: FlaskConical,
    alignment: 'left' as const
  },
  {
    title: 'Electrorefining & Cathode Production',
    content: `Electrorefining produces the highest-purity copper cathodes through electrochemical dissolution and deposition. Impure copper anodes—typically 99.5% pure from smelting—dissolve in sulfuric acid electrolyte under applied current. Pure copper deposits on thin starter cathodes, producing 99.99%+ metal. The process simultaneously recovers precious metals (gold, silver, platinum group metals) that accumulate in anode slimes, providing significant by-product revenue.

Modern tankhouse operations employ permanent stainless steel cathode blanks enabling automated stripping. Cathode quality depends on electrolyte composition, temperature, current density, and additive management. Automated electrolyte management systems maintain optimal conditions—55°C temperature, 180 g/L sulfuric acid, 40-50 g/L copper—ensuring consistent deposition. Leveling agents (thiourea, gelatin) promote smooth, dense deposits meeting LME specifications for surface quality and chemical composition.

Afghan electrorefining facilities produce 200,000+ tonnes annually of LME Grade A copper cathodes. Automated weighing, sampling, and bundling systems prepare cathodes for shipping. Quality control laboratories conduct spectrometric analysis confirming composition meets specifications. LME-registered brands from Afghan operations trade at benchmark prices on the London Metal Exchange, demonstrating international recognition of Afghan processing quality.`,
    icon: Award,
    alignment: 'right' as const
  },
  {
    title: 'Mineral Sands & Heavy Mineral Processing',
    content: `Afghanistan's alluvial deposits contain significant heavy mineral concentrations requiring specialized processing techniques. Gravity separation exploits density differences to concentrate valuable heavy minerals—gold, cassiterite, monazite, rutile—from lighter gangue. Spiral concentrators provide continuous gravity separation with minimal water consumption. Shaking tables achieve fine gravity separation for gold recovery from alluvial deposits along the Kokcha, Panj, and Helmand river systems.

Magnetic separation divides heavy mineral concentrates into magnetic and non-magnetic fractions. High-intensity magnetic separators recover weakly magnetic minerals including monazite (rare earth phosphate) and ilmenite (iron-titanium oxide). Electrostatic separation exploits differences in electrical conductivity to separate conducting minerals (rutile, ilmenite) from non-conductors (zircon, monazite). Sequential application of gravity, magnetic, and electrostatic separation produces individual mineral concentrates from complex heavy mineral assemblages.

Wet gravity processing circuits incorporate classification, desliming, and multi-stage concentration. Hydrocyclones classify feed by particle size, directing each size fraction to appropriate concentrating equipment. Centrifugal concentrators—Knelson, Falcon—achieve high gravity force enabling recovery of fine gold particles that escape conventional gravity circuits. These technologies enable efficient recovery of Afghanistan's diverse alluvial mineral resources including gold, rare earths, and industrial minerals.`,
    icon: Compass,
    alignment: 'left' as const
  },
  {
    title: 'Process Water Treatment & Zero Liquid Discharge',
    content: `Zero liquid discharge (ZLD) systems eliminate liquid waste streams from mineral processing operations, achieving complete water recycling in Afghanistan's arid environment. ZLD combines conventional treatment—neutralization, precipitation, clarification—with advanced technologies including ultrafiltration, reverse osmosis, and evaporation-crystallization. The system recovers 98%+ of process water for reuse while producing solid residues for safe disposal.

Acid mine drainage prevention begins with sulfide waste characterization and proactive management. Encapsulation, underwater storage, and alkaline covers prevent sulfide oxidation that generates acidic drainage. Where drainage occurs, active treatment removes dissolved metals through lime precipitation, sulfide precipitation, or biological treatment. Passive treatment systems using constructed wetlands and reactive barriers provide long-term treatment at lower cost for post-closure management.

Cyanide management in gold processing operations follows the International Cyanide Management Code. Cyanide destruction circuits convert residual cyanide to less harmful compounds before tailings discharge. The SO2/air process, hydrogen peroxide treatment, and natural degradation reduce cyanide levels below regulatory limits. Monitoring networks confirm compliance at discharge points and in surrounding groundwater. These comprehensive water management systems demonstrate that world-class mineral processing can operate with minimal environmental footprint in water-scarce regions.`,
    icon: Leaf,
    alignment: 'right' as const
  },
  {
    title: 'Laboratory Services & Analytical Chemistry',
    content: `On-site analytical laboratories provide rapid, accurate analysis supporting process control and quality assurance. Fire assay determines gold and platinum group metal content with detection limits below 0.01 g/t. Atomic absorption spectrometry (AAS) and inductively coupled plasma (ICP) analysis quantify base metal content across the periodic table. X-ray fluorescence (XRF) provides rapid elemental screening for process control applications.

Mineralogical analysis using QEMSCAN and MLA (Mineral Liberation Analysis) characterizes ore textures, mineral associations, and liberation characteristics. This information optimizes processing circuits by identifying optimal grind sizes and flotation conditions for each ore type. Automated mineralogy enables systematic characterization of thousands of particles, providing statistically robust data for circuit design and optimization.

Quality management systems (ISO 17025 accreditation) ensure analytical reliability. Certified reference materials, duplicate analyses, and inter-laboratory comparisons verify accuracy. Chain of custody procedures maintain sample integrity from collection through analysis. Electronic data management systems capture results and enable statistical process control. These laboratory capabilities support the full range of analytical needs from exploration through production to product certification.`,
    icon: FlaskConical,
    alignment: 'left' as const
  },
  {
    title: 'Concentrate Handling & Transportation',
    content: `Mineral concentrates require careful handling to maintain quality and prevent environmental contamination during transport from processing plants to smelters or ports. Concentrate filtration reduces moisture content to transportable levels—typically 8-12% for copper concentrates. Vacuum disc filters and pressure filters achieve target moisture while minimizing energy consumption. Low moisture content prevents liquefaction during transport—a critical safety consideration for bulk concentrate shipments.

Covered storage facilities protect concentrates from wind dispersal and rainfall. Concrete-pad storage with drainage collection prevents contamination of surrounding areas. Automated stacking and reclaiming systems manage concentrate inventories, blending material to meet quality specifications. Dust suppression systems—enclosed conveyors, misting, and sealed load-out—prevent airborne emissions during handling.

Rail transport in sealed hopper cars moves concentrates from processing facilities to border crossings and ports. Loading facilities use enclosed systems preventing dust emissions. Weighing and sampling at load-out enable accurate accounting and quality verification. GPS tracking and condition monitoring ensure shipment security and integrity. These handling systems ensure that Afghan mineral concentrates reach customers in optimal condition while meeting environmental and safety standards throughout the logistics chain.`,
    icon: Truck,
    alignment: 'right' as const
  },
];

// Additional deep sections for SMELTING
export const SMELTING_EXTRA_SECTIONS = [
  {
    title: 'Flash Smelting Technology & Autogenous Operation',
    content: `Flash smelting represents the most energy-efficient pyrometallurgical technology for copper concentrate processing. The Outokumpu flash smelting process, employed in Afghan copper smelters, suspends dried concentrate in oxygen-enriched air within a vertical reaction shaft. The exothermic oxidation of iron sulfide provides process heat, enabling autogenous operation—the process generates its own energy without external fuel. This self-sustaining operation reduces energy costs by 40% compared to reverberatory furnace technology.

The reaction shaft operates at 1,250-1,350°C, producing two liquid phases that separate by density in the horizontal settler section. Copper-rich matte (60-70% Cu) sinks to the bottom while iron silicate slag floats on top. Magnetite control through careful oxygen and silica management prevents slag viscosity problems. Off-gas containing 30-60% SO2 feeds directly to acid plants for sulfuric acid production, achieving 99.5%+ sulfur capture.

Settler design optimizes phase separation and heat management. Electric supplemental heating in the settler maintains temperature for efficient tapping. Copper recovery from slag through slag cleaning furnaces or flotation ensures minimal metal loss—total copper recovery exceeds 98.5%. Modern flash smelters achieve throughputs of 300,000+ tonnes of concentrate annually while producing emission levels well below regulatory limits.`,
    icon: Flame,
    alignment: 'left' as const
  },
  {
    title: 'Converting & Blister Copper Production',
    content: `Peirce-Smith converters transform copper matte into blister copper (98.5-99.5% Cu) through oxidation of iron and sulfur. The converting process operates batchwise—charging molten matte, blowing oxygen-enriched air through tuyeres, and sequentially producing slag and metallic copper. Each converter cycle takes approximately 8 hours, producing 200-300 tonnes of blister copper per charge.

Modified converting technologies including the Mitsubishi continuous converting process offer advantages in gas capture and productivity. Continuous processes maintain steady-state operation, producing consistent off-gas composition suitable for efficient sulfuric acid production. However, batch Peirce-Smith converters remain widely used due to operational flexibility and proven reliability. Afghan smelting operations employ both technologies depending on facility scale and process requirements.

Blister copper undergoes fire refining in anode furnaces to remove residual sulfur and oxygen. Poling—injection of hydrocarbons or steam—reduces dissolved oxygen to 0.1-0.2%. The refined copper is cast into anodes weighing 300-400 kg each for electrorefining. Anode casting machines produce uniform anodes essential for consistent electrorefining performance. Fire refining and casting complete the pyrometallurgical chain, preparing copper for final purification through electrorefining.`,
    icon: Factory,
    alignment: 'right' as const
  },
  {
    title: 'Slag Processing & Metal Recovery',
    content: `Smelter and converter slags contain 1-5% copper representing significant economic value. Slag cleaning furnaces—electric resistance or electric arc type—heat slag to reduce viscosity and promote settling of entrained copper droplets. The cleaned slag exits with less than 0.5% copper, while a matte phase concentrating recovered copper returns to the smelter. This closed-loop approach ensures maximum metal recovery from all process streams.

Slag flotation provides an alternative approach, crushing and grinding cooled slag before recovering copper through conventional flotation circuits. This approach is particularly effective for finely disseminated copper that resists gravity settling. Slag flotation concentrates return to the smelter for reprocessing. The choice between pyrometallurgical and flotation-based slag cleaning depends on copper content, mineralogy, and economic analysis.

Cleaned slag finds application as construction aggregate, cement addite, and mine backfill material. The glassy, dense material provides excellent mechanical properties for road construction and concrete production. Utilization of slag as construction material eliminates disposal requirements while creating additional revenue. Afghan smelting operations target 100% slag utilization, converting this by-product from waste to valued construction material.`,
    icon: Building2,
    alignment: 'left' as const
  },
  {
    title: 'Sulfuric Acid Production & By-Product Management',
    content: `Smelter off-gases containing SO2 are converted to sulfuric acid through the double-absorption contact process. Gas cleaning removes dust and volatile impurities before SO2 conversion to SO3 over vanadium pentoxide catalyst. Two absorption stages achieve 99.7%+ sulfur capture, producing commercial-grade sulfuric acid (93-98% H2SO4). Annual acid production from Afghan smelters exceeds 1 million tonnes, creating a valuable by-product for fertilizer manufacturing and hydrometallurgical processing.

Acid production from smelter gas simultaneously solves an environmental problem (SO2 emission) and creates economic value. Revenue from acid sales offsets 15-20% of smelting costs. Integration with phosphate fertilizer production creates a domestic market for acid, reducing dependence on imported fertilizer while supporting agricultural development. This industrial synergy demonstrates the economic benefits of integrated mineral processing and manufacturing.

By-product management extends beyond acid to include precious metals, selenium, tellurium, and bismuth recovered from electrorefining anode slimes. Precious metals refinery processes anode slimes through smelting, electrolysis, and chemical treatment to produce refined gold (99.99%), silver (99.99%), and platinum group metals. These by-products provide significant additional revenue, with precious metal credits reducing net copper production costs by $0.20-0.40 per pound.`,
    icon: FlaskConical,
    alignment: 'right' as const
  },
  {
    title: 'Refractory Lining & Furnace Maintenance',
    content: `Smelting furnaces operate at temperatures exceeding 1,300°C, requiring advanced refractory lining systems that withstand extreme thermal, chemical, and mechanical conditions. Chrome-magnesite bricks line reaction shafts, providing resistance to fayalite slag attack at high temperatures. Magnesia-carbon bricks protect converter tuyere zones from intense oxidation. Refractory design balances wear resistance, thermal insulation, and structural integrity across furnace zones with different operating conditions.

Planned maintenance campaigns replace worn refractory sections before failure, preventing unplanned shutdowns that disrupt production and damage equipment. Advanced monitoring—fiber optic temperature measurement, acoustic emission analysis, and thermal imaging—tracks refractory condition in real-time. These technologies enable condition-based maintenance, maximizing campaign length while minimizing failure risk. Typical campaign lengths of 12-24 months balance maintenance cost against production continuity.

Refractory recycling recovers valuable chrome and magnesium from spent bricks. Sorting and processing enables reuse as ladle lining or aggregate. This circular approach reduces raw material consumption and waste disposal. Afghan smelting operations partner with refractory suppliers for technology development and performance optimization, ensuring access to latest materials and design innovations.`,
    icon: Shield,
    alignment: 'left' as const
  },
  {
    title: 'Direct Reduction Iron (DRI) Technology',
    content: `Direct reduction technology transforms Afghanistan's iron ore into metallic iron without the blast furnace process. Gas-based direct reduction using natural gas or syngas from coal converts iron oxide to metallic iron at temperatures below the melting point (900-1,050°C). The product—direct reduced iron (DRI) or hot briquetted iron (HBI)—contains 90-95% metallic iron suitable for electric arc furnace steelmaking. This route enables steel production at scales smaller than integrated blast furnace-converter operations.

Shaft furnace technology (Midrex, HYL/Energiron) provides continuous reduction, achieving metallization rates of 92-95%. Counter-current flow of gas and iron ore pellets within a vertical shaft ensures efficient heat and mass transfer. Product DRI is cooled under inert gas before discharge, preventing re-oxidation. Hot discharge to adjacent electric arc furnaces eliminates cooling and reheating energy, improving overall efficiency.

Coal-based reduction using rotary kilns or rotary hearth furnaces offers an alternative where natural gas is unavailable. Afghanistan's coal reserves in Samangan and Baghlan provinces provide domestic fuel for DRI production. Integration of DRI with electric arc furnace steelmaking positions Afghanistan to serve regional construction steel demand. Production capacity targets of 5 million tonnes annually by 2040 would make Afghanistan a significant regional steel producer.`,
    icon: Flame,
    alignment: 'right' as const
  },
];

// Additional deep sections for RESEARCH
export const RESEARCH_EXTRA_SECTIONS = [
  {
    title: 'Airborne Geophysical Survey Programs',
    content: `Airborne geophysical surveys provide efficient, wide-coverage data acquisition essential for regional exploration in Afghanistan's vast and often inaccessible terrain. Fixed-wing aircraft carrying magnetometer, radiometer, and electromagnetic sensors collect data along closely spaced flight lines, mapping subsurface geology across thousands of square kilometers. Magnetic data reveals buried intrusions, structural corridors, and alteration zones associated with mineral deposits. Radiometric data maps surface geology through natural potassium, thorium, and uranium emissions.

Airborne electromagnetic (AEM) surveys detect conductive mineralization—massive sulfides, graphite, deep weathering—at depths up to 500 meters below surface. Time-domain electromagnetic systems provide superior depth penetration while frequency-domain systems offer high resolution near-surface mapping. Integration of magnetic, radiometric, and electromagnetic datasets creates multi-parameter models identifying exploration targets with greater confidence than any single method alone.

USGS airborne surveys flown between 2006-2012 covered major mineral provinces, creating foundational datasets. Current programs target gaps in coverage and high-priority exploration areas with enhanced resolution. Data processing advances—3D inversion, machine learning-assisted interpretation—extract maximum information from legacy datasets while guiding new data acquisition. These programs systematically reduce exploration risk by identifying targets before expensive ground follow-up.`,
    icon: Globe,
    alignment: 'left' as const
  },
  {
    title: 'Geochemical Exploration & Pathfinder Elements',
    content: `Multi-element geochemical analysis of soil, rock, and stream sediment samples identifies mineral systems through their chemical signatures. Each deposit type produces characteristic element associations—copper porphyries show Cu-Mo-Au-As-Sb halos, rare earth deposits show Ce-La-Nd-Y anomalies, and gold systems show As-Sb-Bi-Te pathfinders extending beyond ore zones. These pathfinder elements detect mineralization hundreds of meters beyond deposit margins, enlarging exploration targets.

Stream sediment geochemistry provides efficient regional coverage, with single samples integrating chemical signal from entire catchment areas. Systematic sampling at 1-2 km spacing across Afghanistan has generated regional geochemical maps identifying numerous anomalies requiring follow-up. Soil geochemistry at 50-100 meter spacing defines anomaly geometry for drill targeting. Rock chip and channel sampling quantify grade in exposed mineralization.

Analytical advances enable detection at parts-per-billion levels for most elements. Four-acid digestion with ICP-MS analysis provides near-total dissolution data for 60+ elements simultaneously. Partial extraction techniques (enzyme leach, ionic leach) detect deeply buried mineralization through subtle surface expression. Quality control through duplicate samples, field blanks, and certified reference materials ensures analytical reliability. These systematic geochemical programs have identified hundreds of exploration targets across Afghanistan's 34 provinces.`,
    icon: FlaskConical,
    alignment: 'right' as const
  },
  {
    title: 'Diamond Drilling & Core Recovery',
    content: `Diamond core drilling provides the highest-quality subsurface geological information, recovering continuous rock core for geological logging, assaying, and metallurgical testing. NQ-size core (47.6mm diameter) provides adequate sample volume for most analytical requirements while maintaining reasonable drilling costs. HQ-size (63.5mm) core is used where larger samples are needed for metallurgical testing. Core orientation using scribing or electronic tools enables structural measurements from core, critical for understanding deposit geometry.

Drilling programs at Afghan deposit investigations typically include 50-200 holes per project, with depths ranging from 100 meters for shallow oxide deposits to 1,500+ meters for deep porphyry systems. Directional drilling techniques enable intersection of steeply dipping targets from surface drill positions. Down-hole surveys using gyroscopic or electronic instruments confirm hole trajectory, ensuring that drill holes intersect targets as planned.

Core handling procedures maintain sample integrity from drill rig through assay laboratory. Core is photographed, geologically logged, marked for cutting, and half-core sampled at intervals matching geological domains. Sample preparation—crushing to 2mm, splitting, pulverizing to 75 microns—produces analytical pulps. Duplicate samples, blanks, and standards inserted into assay batches enable quality control. These systematic drilling programs provide the geological confidence necessary for resource estimation and investment decisions.`,
    icon: Target,
    alignment: 'left' as const
  },
  {
    title: 'Resource Estimation & JORC/NI 43-101 Compliance',
    content: `Resource estimation follows internationally recognized codes—JORC (Joint Ore Reserves Committee) and NI 43-101 (Canadian National Instrument)—ensuring that reported resources meet rigorous standards for geological confidence. These codes require that Competent Persons (qualified geologists with relevant experience) take responsibility for resource statements, ensuring accountability and professional standards.

Geostatistical estimation using ordinary kriging or its variants models grade distribution within geological domains. Variogram analysis characterizes spatial continuity, guiding search parameters and block sizes. Grade capping limits the influence of extreme assay values. Model validation through visual inspection, swath plots, and global reconciliation ensures estimate reliability. Classification into Measured, Indicated, and Inferred categories reflects geological confidence based on drill spacing, geological complexity, and data quality.

Afghan resource estimates encompass $30+ trillion in total mineral wealth across deposits including Mes Aynak copper (12.3Mt Cu), Hajigak iron (2.2Bt), lithium pegmatites (potential world's largest), and numerous gemstone, gold, and industrial mineral deposits. Independent technical reviews by qualified consulting firms verify estimates for investor confidence. These resource estimates form the foundation for investment decisions, project financing, and national mineral development strategy.`,
    icon: Scale,
    alignment: 'right' as const
  },
  {
    title: 'Satellite Remote Sensing & Hyperspectral Mapping',
    content: `Satellite remote sensing provides synoptic geological information across Afghanistan's 652,000 km² territory. ASTER (Advanced Spaceborne Thermal Emission and Reflection Radiometer) multispectral data maps iron oxide, clay, and carbonate alteration minerals associated with hydrothermal mineral systems. Band ratio processing highlights specific mineral assemblages—iron oxides in VNIR bands, clays and carbonates in SWIR bands, silica in TIR bands.

Hyperspectral sensors (Hyperion, PRISMA, EnMAP) provide near-laboratory spectral resolution from orbit, enabling identification of specific mineral species rather than mineral groups. Diagnostic absorption features at specific wavelengths identify minerals including alunite (epithermal gold indicator), jarosite (sulfide weathering product), epidote (porphyry copper alteration), and buddingtonite (ammonium-bearing alteration near hot springs). This spectral precision enables remote identification of alteration patterns diagnostic of specific deposit types.

SAR (Synthetic Aperture Radar) interferometry detects surface deformation at millimeter scale, monitoring ground subsidence from underground mining, slope stability in open pits, and structural movements. Time-series analysis reveals gradual deformation trends enabling proactive management. Integration of optical, hyperspectral, and radar data with geophysical and geochemical datasets creates comprehensive exploration models that maximize target identification while minimizing field investigation costs.`,
    icon: Compass,
    alignment: 'left' as const
  },
  {
    title: 'Petrographic & Mineralogical Studies',
    content: `Petrographic analysis using transmitted and reflected light microscopy provides fundamental understanding of rock types, mineral associations, and textural relationships. Thin section examination reveals igneous, sedimentary, and metamorphic textures informing geological interpretation. Reflected light microscopy identifies opaque minerals—sulfides, oxides, native metals—critical for understanding ore mineralogy and processing behavior.

Electron microprobe analysis (EMPA) provides quantitative chemical analysis of individual mineral grains at micron scale. This technique determines mineral compositions essential for understanding ore genesis, predicting processing behavior, and identifying deleterious elements. Scanning electron microscopy (SEM) with energy-dispersive spectroscopy (EDS) provides rapid mineral identification and textural characterization for large numbers of samples.

Fluid inclusion studies reveal temperature, pressure, and composition of ore-forming fluids. Microthermometric measurements on primary fluid inclusions within ore minerals constrain conditions of mineral deposition. Isotope studies (sulfur, oxygen, hydrogen, lead) fingerprint metal and fluid sources, enabling genetic classification of deposit types. These fundamental studies advance understanding of Afghan mineral systems while training domestic researchers in analytical techniques applied globally in mineral exploration.`,
    icon: FlaskConical,
    alignment: 'right' as const
  },
];

// Additional deep sections for TRADE
export const TRADE_EXTRA_SECTIONS = [
  {
    title: 'Commodity Price Risk Management & Hedging',
    content: `Commodity price volatility creates significant revenue uncertainty for mineral exporters. Hedging strategies using futures contracts, options, and forward sales manage price risk. The London Metal Exchange (LME) provides the primary price benchmark for base metals, with three-month forward contracts the most liquid hedging instrument. Afghan copper producers hedge 30-50% of forward production, securing minimum revenue while retaining upside exposure.

Options strategies including protective puts and collar structures provide downside protection while limiting hedging costs. A put option guarantees a minimum selling price for a premium payment, while a collar combines a put purchase with a call sale, creating zero-cost protection within a price band. Structured products from international banks provide customized risk management solutions for larger producers.

Gemstone and rare earth pricing lacks exchange-traded benchmarks, requiring alternative risk management approaches. Long-term offtake contracts with fixed or formula-based pricing provide revenue certainty. Strategic stockpiling during high-price periods creates reserves for lower-price periods. Market intelligence and diversified customer bases reduce concentration risk. These sophisticated risk management tools ensure stable revenue despite global commodity price cycles.`,
    icon: Scale,
    alignment: 'left' as const
  },
  {
    title: 'International Trade Corridors & Multimodal Logistics',
    content: `Afghanistan's landlocked geography requires coordinated multimodal logistics connecting mineral production to global markets. Three primary export corridors—southern through Pakistan to Karachi/Gwadar, western through Iran to Bandar Abbas/Chabahar, and northern through Central Asia to Chinese and European markets—provide redundancy and flexibility. Corridor selection depends on destination market, cost, transit time, and political considerations.

The southern corridor through Pakistan serves South Asian and maritime markets. Road transport from mines to Torkham or Chaman border crossings connects to Pakistan Railways for onward movement to Karachi port. The Khyber Pass Economic Corridor (KPEC) development includes dedicated mineral transport infrastructure. Alternative routing through Gwadar port accesses Persian Gulf shipping lanes with shorter transit times to Middle Eastern and African markets.

The northern corridor through Uzbekistan and Turkmenistan accesses Trans-Caspian and Trans-Siberian railways connecting to Chinese and European markets. The Hairatan-Mazar-e-Sharif railway provides initial rail connection, with planned extensions to Herat creating an east-west mineral transport corridor. Container handling facilities at border crossings enable efficient mode transfer. Digital logistics platforms track shipments across borders, providing visibility and enabling proactive management of delays.`,
    icon: Truck,
    alignment: 'right' as const
  },
  {
    title: 'Mineral Certification & Conflict-Free Sourcing',
    content: `International mineral certification programs verify that Afghan minerals are produced responsibly and do not finance conflict. The OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from Conflict-Affected and High-Risk Areas provides the foundational framework. Certification requires documented supply chain traceability from mine to market, risk assessment, and independent verification.

Mine-level certification programs verify that operations meet environmental, social, and governance standards. Fairmined certification for artisanal gold guarantees minimum prices and environmental standards. The Responsible Jewellery Council (RJC) provides chain-of-custody certification for precious metals and gemstones. Alliance for Responsible Mining (ARM) certification supports responsible artisanal mining. These certifications enable access to premium markets requiring ethical sourcing documentation.

Blockchain-based traceability systems create tamper-proof records of mineral provenance from mine to final product. Each transaction in the supply chain is recorded, creating an immutable audit trail. Smart contracts automate compliance verification, reducing certification costs. Digital tagging and chemical fingerprinting provide physical verification complementing digital records. These advanced traceability systems position Afghan minerals for premium ethical markets while building international confidence in supply chain integrity.`,
    icon: Shield,
    alignment: 'left' as const
  },
  {
    title: 'Free Trade Zones & Special Economic Areas',
    content: `Mineral processing free trade zones offer significant economic advantages for value-added operations. Reduced or eliminated import duties on equipment, reagents, and consumables lower processing costs. Simplified customs procedures accelerate material movement. Tax incentives including corporate income tax holidays and accelerated depreciation attract processing investment. These zones create competitive conditions for converting raw minerals into high-value products within Afghanistan.

Special economic areas surrounding major mineral deposits integrate mining, processing, manufacturing, and support services in purpose-built industrial parks. Shared infrastructure—power, water, transport—reduces per-facility costs. Waste exchange between operations enables circular economy approaches. Workforce housing, training facilities, and social amenities attract and retain skilled workers. These integrated zones maximize economic impact while minimizing environmental footprint through shared systems and monitoring.

Industrial free zones in Kabul, Herat, and Mazar-e-Sharif provide manufacturing platforms for mineral-based products. Lapidary centers process gemstones for export. Metal fabrication facilities manufacture construction materials from domestic steel and copper. Ceramic and glass manufacturers use domestic minerals as raw materials. These zones create employment and capture value that would otherwise flow to overseas processors, building domestic manufacturing capacity.`,
    icon: Globe,
    alignment: 'right' as const
  },
];

// Additional deep sections for SUSTAINABILITY
export const SUSTAINABILITY_EXTRA_SECTIONS = [
  {
    title: 'Carbon Footprint Reduction & Climate Strategy',
    content: `Afghanistan's mining sector implements comprehensive climate strategies aligned with Paris Agreement objectives. Carbon footprint assessment following the Greenhouse Gas Protocol quantifies Scope 1 (direct emissions), Scope 2 (electricity), and Scope 3 (supply chain) emissions. Science-based targets guide emission reduction trajectories. Renewable energy integration, energy efficiency improvements, and process optimization reduce carbon intensity per tonne of mineral produced.

Solar photovoltaic installations at mine sites exploit Afghanistan's excellent solar resource—5.5+ kWh/m²/day average irradiance. Solar farms of 50-200 MW capacity provide daytime power for processing operations, reducing diesel generation by 40-60%. Battery energy storage systems extend solar contribution to evening operations. Wind energy supplements solar at elevated mine sites where wind resources are strong. These renewable installations reduce both emissions and energy costs.

Electrification of mining fleet—electric trucks, battery-powered underground equipment—eliminates diesel combustion in operations. Trolley-assist systems for haul trucks reduce fuel consumption by 30% on loaded uphill ramps. Hydrogen fuel cells provide zero-emission power for mobile equipment beyond battery range. Process heat electrification using electrode boilers and heat pumps replaces fossil fuel heating. These technologies chart a pathway to net-zero mining operations by 2045.`,
    icon: Leaf,
    alignment: 'left' as const
  },
  {
    title: 'Biodiversity Conservation & Ecosystem Restoration',
    content: `Mining operations interact with Afghanistan's diverse ecosystems spanning alpine meadows, montane forests, arid steppes, and riparian corridors. Biodiversity management plans based on the mitigation hierarchy—avoid, minimize, restore, offset—ensure that development does not cause net biodiversity loss. Pre-development baseline surveys document flora, fauna, and ecological processes. Avoidance of critical habitats receives highest priority in mine planning.

Ecosystem restoration transforms mined land into functional ecosystems supporting native species. Topsoil salvage and stockpiling preserves seed banks and soil biology for eventual rehabilitation. Progressive rehabilitation during operations reduces the disturbed area at any time. Revegetation with native species recreates plant communities adapted to local conditions. Fauna habitat creation—nesting structures, water features, rocky refugia—supports wildlife recolonization.

Biodiversity offset programs compensate for residual impacts after mitigation. Conservation of ecologically equivalent areas elsewhere in the province ensures no net loss. Offset areas receive protection and management, creating permanent conservation outcomes. Monitoring programs track biodiversity indicators over decades, verifying that offset areas deliver equivalent ecological value. These programs demonstrate that mining and biodiversity conservation can coexist through careful planning and sustained commitment.`,
    icon: Compass,
    alignment: 'right' as const
  },
  {
    title: 'Community Health & Social Impact Management',
    content: `Health impact assessment identifies potential effects of mining on community health and develops mitigation measures. Air quality monitoring networks around operations track particulate matter, SO2, and metals, ensuring compliance with WHO air quality guidelines. Noise monitoring at community boundaries verifies that operations remain within acceptable levels. Vibration monitoring from blasting ensures that ground-borne vibration does not affect community structures.

Community health programs address both mining-related risks and broader health needs. Occupational health services extend to contractor workers and community members. Water quality monitoring ensures that community water supplies remain unaffected by operations. Mobile health clinics serve remote communities near mining operations, providing healthcare access that would otherwise require long journeys to provincial centers.

Social impact monitoring tracks changes in community wellbeing indicators including employment, income, education enrollment, and health outcomes. Participatory monitoring engages community members in data collection and analysis, building ownership of monitoring processes. Adaptive management adjusts programs based on monitoring outcomes, ensuring that social investment delivers measurable benefits. Annual social performance reports provide transparency to stakeholders.`,
    icon: Users,
    alignment: 'left' as const
  },
  {
    title: 'Mine Closure Planning & Post-Mining Land Use',
    content: `Integrated mine closure planning begins at project design stage, ensuring that closure considerations influence mine layout, waste management, and infrastructure investment. Closure cost estimation using net present value analysis ensures that adequate financial provisioning accumulates during operations. Trust funds, bonds, or insurance instruments guarantee that closure obligations will be met regardless of operator financial condition.

Post-mining land use planning engages communities in determining preferred future land uses. Options include agriculture, forestry, recreation, industrial redevelopment, and conservation. Mine voids may serve as water storage reservoirs supporting irrigation. Tailings areas can support solar farms. Processing buildings may house manufacturing operations. Creative post-mining land use transforms mining sites into community assets.

Progressive rehabilitation during operations reduces closure liability while demonstrating rehabilitation techniques. Research plots test species selection, soil amendments, and establishment techniques before full-scale application. Long-term monitoring—25+ years post-closure—verifies that rehabilitation achieves target land use capability. Adaptive management addresses issues identified through monitoring. These comprehensive closure programs ensure that mining creates lasting positive legacies for communities and landscapes.`,
    icon: Target,
    alignment: 'right' as const
  },
];

// Additional deep sections for COMMUNITY
export const COMMUNITY_EXTRA_SECTIONS = [
  {
    title: 'Vocational Training & Skills Development Centers',
    content: `Mining-linked vocational training centers establish world-class skills development programs across Afghanistan's mineral provinces. Centers offer 6-24 month programs in welding, electrical work, heavy equipment operation, laboratory analysis, and process plant operations. Curriculum development with international mining companies ensures that graduates meet industry requirements. Practical training on operational equipment provides hands-on experience alongside theoretical knowledge.

Apprenticeship programs place trainees with operating mines for 12-24 months of supervised practical experience. Structured rotations through different departments build broad operational understanding. Mentoring by experienced operators transfers tacit knowledge that classroom instruction cannot provide. Assessment against national competency standards ensures consistent qualification levels across centers.

Women's participation programs target 30% female enrollment through scholarships, childcare, and supportive policies. Technical roles in geology, laboratory analysis, environmental monitoring, and community relations offer career pathways. Outreach to secondary schools encourages STEM education among girls, building the pipeline for future technical workers. These inclusive programs ensure that mining development benefits all community members.`,
    icon: Users,
    alignment: 'left' as const
  },
  {
    title: 'Local Procurement & Small Business Development',
    content: `Local procurement policies direct 40-60% of mine spending to Afghan suppliers, creating substantial economic multiplier effects. Procurement categories include transport services, construction materials, food and catering, equipment maintenance, and professional services. Supplier development programs help local businesses meet quality, safety, and delivery standards required by mining operations.

Small business incubators supported by mining companies nurture enterprises that can serve mining supply chains. Business planning, financial management, and technical training prepare entrepreneurs for commercial operation. Seed financing and guarantee programs provide access to capital that formal banking systems may not extend to early-stage enterprises. Market linkages connect incubator graduates to mining company procurement departments.

Joint ventures between international suppliers and local companies transfer technology while building domestic capacity. International partners provide technical expertise and quality systems while local partners provide workforce, local knowledge, and market access. Over time, local partners assume increasing responsibility as capabilities develop. These partnerships create sustainable businesses that serve mining operations while building Afghanistan's industrial base.`,
    icon: Building2,
    alignment: 'right' as const
  },
  {
    title: 'Infrastructure Sharing & Regional Development',
    content: `Mining infrastructure investments create lasting benefits for communities through shared-use arrangements. Roads built for mine access serve community transport needs—connecting villages to markets, schools, and healthcare facilities. Power transmission lines built for mine supply extend electrification to adjacent communities. Water infrastructure developed for mining operations provides improved community water supply.

Community infrastructure investment programs funded by mining revenues build schools, health clinics, irrigation systems, and community centers. Infrastructure design incorporates community input ensuring that facilities meet local needs and preferences. Maintenance training and funding ensure that community infrastructure remains functional beyond initial construction. These investments transform provincial infrastructure while meeting mining operational needs.

Regional development planning integrates mining infrastructure with broader development strategies. Provincial master plans coordinate mining, agriculture, transport, and social infrastructure. Multi-sector coordination prevents duplication while maximizing synergies. Long-term planning ensures that infrastructure serves post-mining economic diversification. These integrated approaches multiply the development impact of mining investment.`,
    icon: Globe,
    alignment: 'left' as const
  },
  {
    title: 'Cultural Heritage Preservation & Archaeological Cooperation',
    content: `Afghanistan's mining regions contain significant archaeological and cultural heritage requiring protection during development. The Mes Aynak Buddhist monastery complex—one of the world's most important archaeological sites—demonstrates the scale of heritage management challenges. Comprehensive archaeological investigation before mining development has recovered over 5,000 artifacts spanning 2,000 years of history.

Heritage management plans identify, assess, and protect cultural sites within project areas. Archaeological survey precedes any ground disturbance, with salvage excavation documenting and recovering artifacts from development areas. Museum development in provincial centers preserves and displays recovered artifacts, creating cultural tourism opportunities. Digital documentation—3D scanning, photogrammetry—creates permanent records of sites and artifacts.

Community cultural programs preserve intangible heritage including traditional mining knowledge, craft techniques, and oral history. Documentation projects record traditional practices before they are lost to modernization. Integration of traditional knowledge with modern techniques enriches both approaches. Cultural heritage preservation demonstrates that mineral development can coexist with—and indeed support—cultural conservation, creating a legacy beyond economic benefit.`,
    icon: Award,
    alignment: 'right' as const
  },
];

// Additional deep sections for DIGITAL
export const DIGITAL_EXTRA_SECTIONS = [
  {
    title: 'Digital Twin Technology & Mine Simulation',
    content: `Digital twin technology creates virtual replicas of physical mining operations, enabling simulation, optimization, and predictive analysis. High-fidelity 3D models incorporate geological, structural, and operational data to represent mine geometry, equipment, and processes. Real-time sensor data feeds update digital twins continuously, maintaining synchronization between virtual and physical operations. Operators can test scenarios—blast designs, equipment routing, ventilation changes—in the digital twin before implementing changes underground or in the pit.

Process plant digital twins model material flows, equipment performance, and chemical reactions. Simulation of alternative circuit configurations identifies optimization opportunities without disrupting production. Equipment condition monitoring data feeds predictive maintenance algorithms, forecasting failures before they occur. Integration with enterprise resource planning (ERP) systems enables holistic business optimization spanning geology through processing to market.

Mine planning digital twins simulate long-term development scenarios. Alternative pit designs, extraction sequences, and processing configurations are evaluated against economic, environmental, and social criteria. Monte Carlo simulation incorporates commodity price, grade, and cost uncertainty to assess project risk. These sophisticated planning tools ensure that Afghan mining operations develop optimally from both economic and sustainability perspectives.`,
    icon: Globe,
    alignment: 'left' as const
  },
  {
    title: 'Autonomous Mining Equipment & Robotics',
    content: `Autonomous haul trucks operate 24 hours per day without fatigue, achieving 15-20% higher utilization than manned trucks. GPS guidance, LIDAR obstacle detection, and radar proximity sensing enable safe operation in complex pit environments. Fleet management systems optimize truck dispatch, reducing wait times and fuel consumption. Afghan mining operations deploy autonomous trucks at Mes Aynak and Hajigak, achieving industry-leading productivity while eliminating exposure of workers to hazardous conditions.

Underground autonomous systems include self-driving load-haul-dump (LHD) machines, autonomous drill rigs, and robotic inspection platforms. Tele-remote operation enables control from surface facilities, removing operators from underground hazards. Progressive automation transitions from tele-remote (human-controlled from distance) through semi-autonomous (human-supervised) to fully autonomous (human-monitored) operation. Each step reduces exposure while building operational confidence.

Drone technology serves multiple mining applications. Survey drones equipped with LIDAR and photogrammetry cameras conduct volumetric surveys of stockpiles and pit progression. Inspection drones examine highwalls, conveyors, and structures in locations hazardous for human access. Environmental monitoring drones sample air and water quality across wide areas. Autonomous drone operations—programmed flight paths, automated charging—provide continuous monitoring without pilot intervention.`,
    icon: Zap,
    alignment: 'right' as const
  },
  {
    title: 'Artificial Intelligence & Machine Learning in Mining',
    content: `Machine learning algorithms process vast geological, operational, and market datasets to identify patterns invisible to human analysis. Geological ML models predict ore grade between drill holes, improving resource estimation confidence. Processing ML optimizes flotation, grinding, and leaching parameters in real-time, adapting to changing ore characteristics faster than human operators. Predictive maintenance ML identifies equipment degradation patterns, scheduling maintenance before failure occurs.

Computer vision systems analyze conveyor belt loads, detecting oversize material, foreign objects, and grade variations. Automated ore sorting using sensor-based systems—X-ray transmission, near-infrared, laser—separates ore from waste at the rock-by-rock level, reducing dilution and improving feed grade. These systems process millions of rocks per hour, each classified and routed in milliseconds.

Natural language processing (NLP) automates geological report analysis, extracting key information from decades of exploration reports. Knowledge graphs connect geological observations, analytical results, and interpretive conclusions across thousands of documents. These AI systems accelerate geological understanding while preserving institutional knowledge. Afghan mining operations partner with technology companies to deploy cutting-edge AI solutions while building domestic expertise in data science and machine learning.`,
    icon: Target,
    alignment: 'left' as const
  },
  {
    title: 'Cybersecurity & Operational Technology Protection',
    content: `Industrial control systems protecting mining operations require robust cybersecurity frameworks. The convergence of information technology (IT) and operational technology (OT) creates new attack surfaces that must be defended. Network segmentation isolates critical control systems from corporate networks and the internet. Firewalls, intrusion detection systems, and encrypted communications protect data in transit. Multi-factor authentication controls access to critical systems.

Cyber threat intelligence monitors emerging threats targeting mining and industrial operations. Security operations centers (SOCs) provide 24/7 monitoring of network activity, identifying and responding to anomalous behavior. Incident response plans prepare for cyber events including ransomware, industrial espionage, and sabotage. Regular penetration testing identifies vulnerabilities before they can be exploited. Employee cybersecurity training reduces the human element of cyber risk.

Data governance frameworks manage classification, access control, retention, and disposal of operational and geological data. Geological data—worth billions in exploration investment—receives protection commensurate with its value. Cloud-based backup and disaster recovery ensure business continuity following cyber events or natural disasters. These cybersecurity measures protect Afghanistan's digital mining assets while enabling the productivity benefits of connected operations.`,
    icon: Shield,
    alignment: 'right' as const
  },
];

// Additional deep sections for SAFETY
export const SAFETY_EXTRA_SECTIONS = [
  {
    title: 'Underground Mine Ventilation & Gas Monitoring',
    content: `Underground mine ventilation systems maintain breathable atmosphere, control temperature, and dilute harmful gases throughout working areas. Primary ventilation fans—typically 500-3,000 kW—establish airflow circuits through the mine using intake shafts, development headings, and return airways. Auxiliary fans and ducting direct fresh air to development faces and work areas. Ventilation modeling using computational fluid dynamics (CFD) optimizes airflow distribution, ensuring adequate air quality while minimizing energy consumption.

Real-time gas monitoring networks detect dangerous atmospheres before workers are exposed. Methane, carbon monoxide, carbon dioxide, nitrogen dioxide, sulfur dioxide, and hydrogen sulfide are monitored continuously at strategic locations. Telemetry systems transmit sensor data to surface control rooms for immediate display and alarm activation. Personal gas detectors provide individual protection, alerting workers to localized gas accumulations. Automated ventilation control responds to gas events, increasing airflow to affected areas.

Refrigeration systems manage heat in deep underground mines where geothermal gradients and equipment operation create extreme temperatures. Bulk air cooling using surface or underground refrigeration plants reduces intake air temperature. Secondary cooling using chilled water sprays and cooling coils provides additional cooling at working faces. Heat management enables productive work at depths exceeding 1,000 meters, accessing deep mineral resources safely.`,
    icon: Shield,
    alignment: 'left' as const
  },
  {
    title: 'Slope Stability & Geotechnical Engineering',
    content: `Open pit slope stability is critical for worker safety and mine economics. Geotechnical investigation programs characterize rock mass strength, structure, and groundwater conditions. Kinematic analysis identifies potential failure mechanisms—planar sliding, wedge failure, toppling—based on discontinuity orientation relative to slope geometry. Numerical modeling using finite element and distinct element methods analyzes complex rock mass behavior under excavation loading.

Design criteria balance safety (acceptable probability of failure) with economics (steeper slopes reduce waste stripping). Bench design parameters—face angle, bench width, bench height—control overall slope angles while providing catch capacity for small rockfalls. Groundwater depressurization using horizontal drains and vertical wells reduces pore pressure, increasing effective stress and stability. Buttressing with waste rock provides additional support in areas of marginal stability.

Monitoring systems detect slope movements before failure occurs. Prism surveys using robotic total stations track surface displacement at sub-millimeter precision. Slope stability radar provides continuous monitoring of entire pit walls, detecting accelerating movement indicative of impending failure. Piezometers monitor groundwater pressure changes that influence stability. Integration of monitoring data with geotechnical models enables predictive assessment, triggering evacuation procedures when movement rates exceed thresholds. These comprehensive geotechnical programs ensure safe operation of Afghanistan's open pit mines.`,
    icon: Target,
    alignment: 'right' as const
  },
  {
    title: 'Emergency Response & Mine Rescue Operations',
    content: `Mine rescue teams maintain readiness for underground emergencies including fires, explosions, and ground collapses. Teams of 6-8 trained rescuers equipped with self-contained breathing apparatus can operate in irrespirable atmospheres for up to 4 hours. Regular training exercises simulate emergency scenarios, testing team response and equipment function. Inter-mine competitions maintain skills and build camaraderie among rescue personnel.

Emergency refuge chambers provide safe haven for trapped workers, supplying breathable air, water, and communication for 36-96 hours. Chambers are positioned within 500 meters of all work areas, ensuring accessibility during emergencies. Stocking includes food, water, medical supplies, and sanitation. Communication systems maintain contact with surface allowing coordination of rescue efforts. Regular inspection and servicing ensure readiness.

Surface emergency response includes firefighting capability, hazardous materials response, and medical evacuation. Mine site emergency medical technicians (EMTs) provide first response. Helicopter landing pads enable rapid evacuation to provincial hospitals. Coordination agreements with regional emergency services ensure mutual aid availability. Emergency management plans are tested through regular drills, reviewed annually, and updated to reflect lessons learned from incidents. These comprehensive emergency programs protect workers and communities across Afghanistan's mining operations.`,
    icon: Award,
    alignment: 'left' as const
  },
  {
    title: 'Fatigue Management & Human Factors Engineering',
    content: `Fatigue represents a leading contributing factor to mining incidents globally. Afghan mining operations implement comprehensive fatigue risk management systems (FRMS) addressing work scheduling, individual fitness, and environmental factors. Roster design limits consecutive shifts and ensures adequate rest periods between rotations. Night shift management includes controlled napping, caffeine protocols, and activity scheduling to maintain alertness during circadian low periods.

In-vehicle fatigue monitoring systems use camera-based eye tracking to detect microsleep events and drowsiness. Alert systems wake drowsy operators before incidents occur. Fleet management systems record fatigue events, enabling trend analysis and individual intervention. Fitness-for-duty assessment at shift start identifies workers unfit due to fatigue, illness, or impairment, preventing exposure to safety risks.

Human factors engineering designs workplaces and equipment to match human capabilities and limitations. Ergonomic control room design reduces cognitive load and error probability. Equipment cab design provides comfortable, distraction-free operating environments. Alarm management reduces false alarms that contribute to alarm fatigue and delayed response. Task analysis identifies error-prone steps for additional procedural controls. These human factors approaches complement traditional safety engineering, addressing the human element that contributes to most mining incidents.`,
    icon: Users,
    alignment: 'right' as const
  },
];
