import { HeroSlideshow } from "@/components/HeroSlideshow";
import { LargeTextSection } from "@/components/LargeTextSection";
import { StatsBar } from "@/components/StatsBar";
import { VideoSection } from "@/components/VideoSection";
import { SectorGrid } from "@/components/SectorGrid";
import { SectorDetailSection } from "@/components/SectorDetailSection";
import { FullWidthImageSection } from "@/components/FullWidthImageSection";
import { InitiativeCard } from "@/components/InitiativeCard";
import { AfghanistanMap } from "@/components/AfghanistanMap";
import { ProvinceShowcase } from "@/components/ProvinceShowcase";
import { DetailedIndustrySection } from "@/components/DetailedIndustrySection";
import { ExpandedPublicationsSection } from "@/components/ExpandedPublicationsSection";
import { ExpandedEngagementSection } from "@/components/ExpandedEngagementSection";
import { ExpandedResourceCentre } from "@/components/ExpandedResourceCentre";
import { ExpandedConsortiumSection } from "@/components/ExpandedConsortiumSection";
import { TopNavigation } from "@/components/TopNavigation";
import { Footer } from "@/components/Footer";
import { InteractiveSectorExplorer } from "@/components/InteractiveSectorExplorer";
import { ExpandedManufacturingSection } from "@/components/ExpandedManufacturingSection";
import { GovernanceSection } from "@/components/GovernanceSection";
import { ANDSFoundationSection } from "@/components/ANDSFoundationSection";
import { ANDSCrossCuttingSection } from "@/components/ANDSCrossCuttingSection";
import { NERPAExtendedContentSection } from "@/components/NERPAExtendedContentSection";
import { NERPAPartnershipFrameworkSection } from "@/components/NERPAPartnershipFrameworkSection";
import { NERPADeepContentSection } from "@/components/NERPADeepContentSection";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { InvestmentCalculator } from "@/components/InvestmentCalculator";
import { ProvinceInfrastructureMap } from "@/components/ProvinceInfrastructureMap";
import { PartnersInvestorsSection } from "@/components/PartnersInvestorsSection";
import { NewsUpdatesSection } from "@/components/NewsUpdatesSection";
import { AdditionalMegaSections } from "@/components/AdditionalMegaSections";
import { LiveDashboard } from "@/components/LiveDashboard";
import { InvestorContactForm } from "@/components/InvestorContactForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Pickaxe, Wheat, Home, Zap, Heart, GraduationCap, Droplets, Landmark,
  Cpu, Building2, Truck, Wifi, Briefcase, Globe, TrendingUp, Leaf,
  Handshake, Lightbulb, Network, Target, Scale, DollarSign, Building,
  ShoppingBag, HardHat, Ruler, Shield, FlaskConical, BookOpen, Users,
  Factory, Rocket, Gem, TreeDeciduous, Sun, Stethoscope, School, Waves,
  CreditCard, MonitorSmartphone, Building as CityIcon, TrainFront, 
  Package, CircuitBoard, Palette, HeartHandshake, Cog, Award, FileText,
  MessageSquare, Calendar, Database, Search, ChartBar, MapPin, Phone
} from "lucide-react";

// Sector Images - All New Unique Images
const miningCopper = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/mining-aynak-copper.jpg";
const agricultureSaffron = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/saffron-harvest-herat.jpg";
const energySolar = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/solar-farm-afghanistan.jpg";
const healthcareHospital = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/modern-hospital-kabul.jpg";
const educationClassroom = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/university-classroom-modern.jpg";
const waterDam = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/hydro-dam-kajaki.jpg";
const bankingModern = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/banking-headquarters.jpg";
const smartCity = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/smart-city-vision.jpg";
const infrastructureBridge = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/highway-bridge-mountains.jpg";
const housingDevelopment = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/urban-housing-kabul.jpg";
const digitalTech = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/tech-startup-kabul.jpg";
const energyWind = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/wind-farm-highlands.jpg";
const logisticsTransport = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/logistics-hub-kabul.jpg";
const cultureHeritage = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/heritage-herat-citadel.jpg";
const businessConference = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/business-summit.jpg";
const agriculturePomegranate = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/provinces/kandahar-pomegranate-harvest.jpg";

// Additional New Sector Images
const energyControlCenter = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/energy-control-center.jpg";
const dataCenterFacility = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/data-center-facility.jpg";
const agriculturalResearch = "https://pub-a8f03458547b480a8e1f00c152001820.r2.dev/assets/sectors/agricultural-research.jpg";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* Top Navigation - Only the top mini-bar and search */}
      <TopNavigation />
      {/* ============================================
          HERO SECTION - SLIDESHOW
      ============================================ */}
      <HeroSlideshow
        tagline={t("hero.tagline")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      {/* Vision Statement */}
      <div id="vision">
        <LargeTextSection
          title={t("page.vision.title")}
          description={t("page.vision.desc")}
          alignment="center"
        />
      </div>

      {/* NERPA Vision 2026–2040 */}
      <ANDSFoundationSection />
      <NERPAExtendedContentSection />
      <NERPAPartnershipFrameworkSection />
      <NERPADeepContentSection />

      {/* ============================================
          SECTOR 1: MINERALS & MINING
      ============================================ */}
      <div id="sectors">
      <div id="minerals">
      <FullWidthImageSection
        backgroundImage={miningCopper}
        title={t("page.mining.title")}
        description={t("page.mining.desc")}
        overlay="gradient"
      />

      <SectorDetailSection
        title={t("page.mining.subtitle")}
        subtitle={t("page.mining.subtitle2")}
        description={t("page.mining.desc2")}
        icon={Pickaxe}
        backgroundImage={miningCopper}
        imagePosition="right"
        points={[
          "Lithium reserves in Ghazni Province estimated among the world's largest, critical for electric vehicle batteries and energy storage systems",
          "The Aynak copper deposit in Logar Province ranks among the world's largest copper deposits",
          "Rare earth elements including neodymium and lanthanum essential for renewable energy technologies and advanced electronics",
          "Precious and semi-precious gemstones including world-renowned emeralds, rubies, and lapis lazuli with established international markets",
          "Iron ore deposits at Hajigak sufficient to supply regional steel industries for decades",
          "Gold deposits across multiple provinces with modern exploration identifying significant untapped reserves",
          "Development of sustainable extraction practices ensuring environmental protection and community benefit",
          "Technology transfer partnerships with international mining corporations bringing world-class expertise",
        ]}
        stats={[
          { value: "34", label: t("stats.provinces") },
          { value: "Major", label: t("stats.mineralValue") },
          { value: "Nationwide", label: t("stats.mineralSites") },
          { value: "High", label: t("stats.jobs") },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.mining")}
        </p>
      </div>

      {/* Mining Video Section */}
      <VideoSection
        title={t("page.mining.video.title")}
        description={t("page.mining.video.desc")}
      />
      <div className="text-center py-8">
        <Link to="/sector/mining" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          {t("page.mining.explore")}
        </Link>
      </div>
      </div> {/* End minerals */}

      {/* ============================================
          SECTOR 2: AGRICULTURE & FOOD
      ============================================ */}
      <div id="agriculture">
      <FullWidthImageSection
        backgroundImage={agricultureSaffron}
        title="Agriculture & Food Security"
        description="Agriculture forms the backbone of Afghanistan's economy, employing over 60% of the workforce and contributing significantly to GDP. From the saffron fields of Herat to the pomegranate orchards of Kandahar, Afghan agriculture combines ancient traditions with modern innovation to feed the nation and compete in global markets."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Agricultural Renaissance"
        subtitle="Food Sovereignty"
        description="The Agriculture & Food Security sector encompasses a comprehensive transformation of Afghanistan's agricultural landscape. Through precision farming technologies, sustainable irrigation systems, and value-added processing facilities, we are building an agricultural sector that ensures food security whilst generating significant export revenues."
        icon={Wheat}
        backgroundImage={agricultureSaffron}
        imagePosition="left"
        points={[
          "Afghan saffron recognised as the world's finest quality, commanding premium prices in international markets across Europe, Asia, and the Middle East",
          "Pomegranate cultivation expansion with state-of-the-art cold storage and processing facilities for export-ready products",
          "Pistachio forest rehabilitation covering 500,000 hectares, restoring Afghanistan's historic position as a leading pistachio exporter",
          "Wheat production modernisation through drought-resistant varieties and precision irrigation, targeting national food self-sufficiency",
          "Almond cultivation programmes establishing Afghanistan as a major competitor in global nut markets",
          "Dried fruit processing facilities adding value to traditional products including apricots, raisins, and figs",
          "Organic certification programmes enabling Afghan farmers to access premium markets in Europe and North America",
          "Agricultural technology centres training farmers in modern techniques whilst preserving traditional knowledge",
        ]}
        stats={[
          { value: "60%", label: "Workforce" },
          { value: "#1", label: "Saffron Quality" },
          { value: "500K", label: "Hectares Planned" },
          { value: "$2B", label: "Export Target" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.agriculture")}
        </p>
      </div>

      {/* Agriculture Additional Visual */}
      <LargeTextSection
        backgroundImage={agriculturePomegranate}
        title="From Field to Global Market"
        description="Afghanistan's legendary pomegranates, known for their exceptional sweetness and nutritional value, are finding their way to tables across the world. Modern processing facilities ensure quality whilst preserving the authentic taste that has made Afghan produce famous for millennia."
        alignment="left"
      />
      <div className="text-center py-8">
        <Link to="/sector/agriculture" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Agriculture & Food Sector →
        </Link>
      </div>
      </div> {/* End agriculture */}

      {/* ============================================
          SECTOR 3: HOUSING & URBAN DEVELOPMENT
      ============================================ */}
      <div id="housing">
      <FullWidthImageSection
        backgroundImage={housingDevelopment}
        title="Housing & Urban Development"
        description="Creating dignified, affordable housing for every Afghan family whilst developing sustainable urban communities that honour cultural traditions and embrace modern living standards. From social housing programmes to mixed-use developments, we are building the neighbourhoods where Afghanistan's future will flourish."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Building Communities, Crafting Futures"
        subtitle="Urban Renaissance"
        description="The Housing & Urban Development sector addresses Afghanistan's critical housing shortage whilst establishing new paradigms for sustainable urban living. Through innovative financing mechanisms, public-private partnerships, and community-centred design, we are creating residential environments that enhance quality of life for all citizens."
        icon={Home}
        backgroundImage={housingDevelopment}
        imagePosition="right"
        points={[
          "Social housing programmes delivering 100,000 affordable homes for low and middle-income families across major urban centres",
          "Mixed-use developments integrating residential, commercial, and recreational spaces within walkable neighbourhood designs",
          "Traditional architectural elements incorporated into modern designs, preserving Afghan aesthetic heritage in contemporary contexts",
          "Green building standards mandatory for all new developments, reducing energy consumption and environmental impact",
          "Community facilities including schools, clinics, and markets integrated within residential developments",
          "Mortgage financing programmes enabling home ownership for families previously excluded from property markets",
          "Urban renewal initiatives transforming informal settlements into planned communities with full infrastructure",
          "Construction industry development creating sustainable employment in building trades and related professions",
        ]}
        stats={[
          { value: "100K", label: "Homes Planned" },
          { value: "5M", label: "Beneficiaries" },
          { value: "20+", label: "Cities" },
          { value: "Green", label: "Standards" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.urban")}
        </p>
      </div>
      <div className="text-center py-8">
        <Link to="/sector/housing" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Housing & Urban Development →
        </Link>
      </div>
      </div> {/* End housing */}

      {/* ============================================
          SECTOR 4: ENERGY & SUSTAINABILITY
      ============================================ */}
      <div id="energy">
      <FullWidthImageSection
        backgroundImage={energySolar}
        title="Energy & Sustainability"
        description="Afghanistan's abundant renewable energy resources—over 300 days of sunshine annually, significant wind corridors, and hydroelectric potential—position the nation to achieve complete energy independence whilst establishing export capacity to neighbouring countries."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Powering Afghanistan's Future"
        subtitle="Energy Independence"
        description="The Energy & Sustainability sector represents Afghanistan's transition from energy importer to energy exporter. Through strategic development of solar, wind, and hydroelectric resources, combined with modern grid infrastructure and energy storage solutions, we are building an energy system that powers economic growth whilst protecting the environment."
        icon={Zap}
        backgroundImage={energySolar}
        imagePosition="left"
        points={[
          "Solar energy installations across southern and western provinces, leveraging 300+ annual sunshine days for reliable power generation",
          "Wind energy development in the Herat corridor and northern highlands, tapping into consistent wind resources",
          "Hydroelectric expansion utilising Afghanistan's river systems, building upon existing capacity whilst respecting environmental considerations",
          "National grid modernisation connecting all provinces with reliable electricity access for the first time in history",
          "Energy storage systems including battery installations and pumped hydro, ensuring stable supply despite variable generation",
          "Rural electrification programmes bringing power to remote communities through decentralised renewable systems",
          "Energy efficiency standards for buildings and industry, reducing demand whilst maintaining productivity",
          "Cross-border energy trade agreements positioning Afghanistan as a regional energy hub connecting Central and South Asia",
        ]}
        stats={[
          { value: "300+", label: "Sunny Days" },
          { value: "100%", label: "Access Target" },
          { value: "5GW", label: "Capacity Goal" },
          { value: "Zero", label: "Carbon Target" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.energy")}
        </p>
      </div>

      {/* Wind Energy Visual */}
      <LargeTextSection
        backgroundImage={energyWind}
        title="Harnessing Nature's Power"
        description="From the wind corridors of western Afghanistan to the sun-drenched deserts of the south, Afghanistan's renewable energy potential rivals the world's leading clean energy nations. Every turbine erected and solar panel installed represents a step toward energy independence and environmental stewardship."
        alignment="right"
      />

      {/* Energy Stats */}
      <StatsBar
        stats={[
          { value: "5GW", label: "Target Capacity" },
          { value: "100%", label: "Renewable Goal" },
          { value: "2040", label: "Independence" },
          { value: "$10B", label: "Investment" },
        ]}
      />
      <div className="text-center py-8">
        <Link to="/sector/energy" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Energy & Sustainability Sector →
        </Link>
      </div>
      </div> {/* End energy */}

      {/* ============================================
          SECTOR 5: HEALTH & MEDICINE
      ============================================ */}
      <div id="healthcare">
      <FullWidthImageSection
        backgroundImage={healthcareHospital}
        title="Health & Medicine"
        description="Establishing a world-class healthcare system that ensures every Afghan has access to quality medical services, from primary care clinics in remote villages to specialised tertiary hospitals in major cities. Health is the foundation of national productivity and prosperity."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Healthcare for Every Afghan"
        subtitle="Universal Access"
        description="The Health & Medicine sector transforms Afghanistan's healthcare landscape through systematic investment in infrastructure, workforce development, and innovative service delivery models. From maternal and child health to chronic disease management, we are building a healthcare system that serves all citizens throughout their lives."
        icon={Heart}
        backgroundImage={healthcareHospital}
        imagePosition="right"
        points={[
          "Construction of 500 new primary health centres ensuring every community has access to essential healthcare services within 30 minutes",
          "Regional hospital development with specialised services including cardiology, oncology, and paediatric care",
          "Medical education expansion training 10,000 new physicians, nurses, and allied health professionals over the next decade",
          "Telemedicine networks connecting rural clinics with specialist physicians in urban centres",
          "Pharmaceutical manufacturing development to ensure reliable supply of essential medicines at affordable prices",
          "Mental health services integration addressing the psychological impacts of decades of conflict",
          "Emergency medical services with ambulance networks and trauma centres across all provinces",
          "Traditional medicine integration recognising the value of Afghan healing traditions within modern healthcare frameworks",
        ]}
        stats={[
          { value: "500", label: "New Clinics" },
          { value: "10K", label: "Health Workers" },
          { value: "100%", label: "Coverage Goal" },
          { value: "30min", label: "Access Target" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.health")}
        </p>
      </div>
      <div className="text-center py-8">
        <Link to="/sector/healthcare" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Healthcare Sector →
        </Link>
      </div>
      </div> {/* End healthcare */}

      {/* ============================================
          SECTOR 6: EDUCATION & LEARNING
      ============================================ */}
      <div id="education">
      <FullWidthImageSection
        backgroundImage={educationClassroom}
        title="Education & Learning"
        description="Education is the cornerstone of Afghanistan's future prosperity. From early childhood education to postgraduate research, we are building an education system that develops the knowledge, skills, and character needed to lead the nation's transformation."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Knowledge is Power"
        subtitle="Educational Excellence"
        description="The Education & Learning sector encompasses comprehensive reform of Afghanistan's educational institutions at every level. Through curriculum modernisation, teacher training, technology integration, and infrastructure development, we are creating learning environments that prepare Afghan youth to compete globally whilst honouring national heritage and values."
        icon={GraduationCap}
        backgroundImage={educationClassroom}
        imagePosition="left"
        points={[
          "Universal primary education ensuring every child has access to quality schooling regardless of location or circumstance",
          "Secondary education reform introducing STEM curricula alongside humanities and vocational pathways",
          "Technical and vocational training centres preparing youth for employment in priority economic sectors",
          "Higher education expansion establishing new universities and research centres across all regions",
          "Teacher training academies developing a professional teaching workforce with modern pedagogical skills",
          "Digital literacy programmes ensuring all students develop essential technology competencies",
          "Scholarship programmes enabling talented students to pursue advanced education internationally",
          "Adult education initiatives providing lifelong learning opportunities for all age groups",
        ]}
        stats={[
          { value: "10M", label: "Students" },
          { value: "100K", label: "Teachers" },
          { value: "500", label: "Schools" },
          { value: "25", label: "Universities" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.education")}
        </p>
      </div>

      {/* Education Video */}
      <VideoSection
        title="Investing in Tomorrow's Leaders"
        description="Every classroom we build, every teacher we train, and every student we educate represents an investment in Afghanistan's future. Education transforms individuals, families, communities, and ultimately the entire nation."
      />
      <div className="text-center py-8">
        <Link to="/sector/education" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Education Sector →
        </Link>
      </div>
      </div> {/* End education */}

      {/* ============================================
          SECTOR 7: WATER & MANAGEMENT
      ============================================ */}
      <div id="water">
      <FullWidthImageSection
        backgroundImage={waterDam}
        title="Water & Resource Management"
        description="Water is Afghanistan's most precious natural resource. Through strategic dam construction, efficient irrigation networks, and sustainable management practices, we are securing water for agriculture, industry, and communities whilst protecting this vital resource for future generations."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Securing Water, Securing Life"
        subtitle="Water Security"
        description="The Water & Resource Management sector addresses Afghanistan's critical water infrastructure needs through comprehensive programmes spanning dam construction, irrigation modernisation, urban water supply, and transboundary water diplomacy. Every drop of water is managed for maximum benefit to Afghan agriculture, industry, and communities."
        icon={Droplets}
        backgroundImage={waterDam}
        imagePosition="right"
        points={[
          "Major dam construction projects providing water storage, flood control, and hydroelectric generation capacity",
          "Irrigation system modernisation converting flood irrigation to efficient drip and sprinkler systems",
          "Urban water supply expansion ensuring every city household has access to clean, reliable potable water",
          "Watershed management programmes protecting upstream catchments and preventing erosion",
          "Groundwater monitoring systems preventing over-extraction and ensuring aquifer sustainability",
          "Water treatment facilities providing safe drinking water and managing wastewater responsibly",
          "Transboundary water agreements securing Afghanistan's rights to shared river systems",
          "Climate adaptation strategies preparing water infrastructure for changing precipitation patterns",
        ]}
        stats={[
          { value: "20+", label: "Dams Planned" },
          { value: "1M", label: "Hectares Irrigated" },
          { value: "100%", label: "Urban Access" },
          { value: "50+", label: "Treatment Plants" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.water")}
        </p>
      </div>
      <div className="text-center py-8">
        <Link to="/sector/water" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Water & Resource Sector →
        </Link>
      </div>
      </div> {/* End water */}

      {/* ============================================
          SECTOR 8: BANKING & FINANCE
      ============================================ */}
      <div id="finance">
      <FullWidthImageSection
        backgroundImage={bankingModern}
        title="Banking & Finance"
        description="A modern, inclusive financial system is essential for economic development. From mobile banking reaching remote villages to sophisticated capital markets facilitating major investments, Afghanistan's financial sector is being transformed to serve all citizens and enable business growth."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Financial Empowerment for All"
        subtitle="Inclusive Finance"
        description="The Banking & Finance sector develops comprehensive financial infrastructure that serves all segments of Afghan society. From microfinance enabling small entrepreneurs to capital markets facilitating major infrastructure investments, we are building a financial system that drives economic growth whilst ensuring stability and inclusion."
        icon={Landmark}
        backgroundImage={bankingModern}
        imagePosition="left"
        points={[
          "Banking sector reform establishing prudential standards, deposit insurance, and consumer protection frameworks",
          "Microfinance expansion providing credit access for small businesses and entrepreneurs throughout the country",
          "Mobile banking platforms bringing financial services to remote communities without traditional bank branches",
          "Islamic finance development offering Sharia-compliant products meeting the preferences of Afghan customers",
          "Insurance market development protecting families and businesses against life's uncertainties",
          "Capital market establishment enabling companies to raise equity and debt financing for growth",
          "Payment system modernisation supporting electronic transactions and reducing cash dependency",
          "Financial literacy programmes helping citizens make informed decisions about savings, borrowing, and investment",
        ]}
        stats={[
          { value: "80%", label: "Financial Inclusion" },
          { value: "500+", label: "Branches" },
          { value: "10M", label: "Mobile Banking" },
          { value: "$5B", label: "Credit Target" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.finance")}
        </p>
      </div>
      <div className="text-center py-8">
        <Link to="/sector/finance" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Banking & Finance Sector →
        </Link>
      </div>
      </div> {/* End finance */}

      {/* ============================================
          SECTOR 9: DIGITALISATION, IT & AI
      ============================================ */}
      <div id="technology">
      <FullWidthImageSection
        backgroundImage={digitalTech}
        title="Digitalisation, IT & AI"
        description="Afghanistan's digital transformation represents a generational leap forward. From e-government services to artificial intelligence research centres, we are building the digital infrastructure and human capital needed to compete in the global knowledge economy."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Digital Afghanistan"
        subtitle="Technology Leadership"
        description="The Digitalisation, IT & AI sector positions Afghanistan at the forefront of technological innovation. Through investment in digital infrastructure, technology education, and research and development, we are creating an ecosystem that nurtures local tech companies whilst attracting international investment and talent."
        icon={Cpu}
        backgroundImage={digitalTech}
        imagePosition="right"
        points={[
          "National broadband network providing high-speed internet connectivity to all urban areas and major rural centres",
          "E-government platform digitising public services for citizen convenience and administrative efficiency",
          "Technology parks establishing innovation hubs where startups and established companies collaborate",
          "Coding academies training the next generation of software developers and digital professionals",
          "Artificial intelligence research centre developing AI applications for Afghan contexts and challenges",
          "Cybersecurity infrastructure protecting national digital assets and citizen data",
          "Digital payment ecosystem reducing cash transactions and enabling e-commerce growth",
          "Tech startup incubators providing mentorship, funding, and resources for Afghan entrepreneurs",
        ]}
        stats={[
          { value: "100%", label: "Urban Broadband" },
          { value: "50K", label: "Tech Jobs" },
          { value: "1,000", label: "Startups" },
          { value: "100+", label: "E-Services" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.ict")}
        </p>
      </div>

      {/* Digital Transformation Video */}
      <VideoSection
        title="Coding Afghanistan's Future"
        description="In technology hubs across the nation, young Afghans are learning to code, developing applications, and building businesses that compete globally. Afghanistan's digital generation is writing the next chapter of national development."
      />
      <div className="text-center py-8">
        <Link to="/sector/technology" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Technology & AI Sector →
        </Link>
      </div>
      </div> {/* End technology */}

      {/* ============================================
          SECTOR 10: SMART CITIES & INNOVATION
      ============================================ */}
      <FullWidthImageSection
        backgroundImage={smartCity}
        title="Smart Cities & Innovation"
        description="Afghanistan's cities are being reimagined for the 21st century. Through integrated urban planning, smart infrastructure, and sustainable design, we are creating cities that are efficient, liveable, and ready for the challenges of tomorrow."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Cities of Tomorrow"
        subtitle="Urban Innovation"
        description="The Smart Cities & Innovation sector transforms Afghanistan's urban centres into models of sustainable, technology-enabled living. From intelligent traffic management to integrated service delivery, smart city initiatives enhance quality of life whilst promoting economic productivity and environmental sustainability."
        icon={Building2}
        backgroundImage={smartCity}
        imagePosition="left"
        points={[
          "Smart traffic systems reducing congestion and improving road safety through real-time monitoring and adaptive signals",
          "Integrated command centres coordinating city services including emergency response, utilities, and public transport",
          "Smart street lighting reducing energy consumption whilst improving public safety through LED and sensor technologies",
          "Public WiFi networks ensuring free internet access in public spaces, parks, and transportation hubs",
          "Smart waste management optimising collection routes and promoting recycling through sensor-equipped bins",
          "Urban air quality monitoring with real-time data informing policy interventions and public health advisories",
          "Smart parking systems guiding drivers to available spaces, reducing traffic and emissions from circling vehicles",
          "Citizen engagement platforms enabling residents to report issues and participate in urban governance",
        ]}
        stats={[
          { value: "5", label: "Smart Cities" },
          { value: "30%", label: "Energy Reduction" },
          { value: "Real-time", label: "Monitoring" },
          { value: "24/7", label: "Services" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.urban")}
        </p>
      </div>

      {/* ============================================
          SECTOR 11: TRANSPORT & INFRASTRUCTURE
      ============================================ */}
      <div id="infrastructure">
      <div id="transport">
      <FullWidthImageSection
        backgroundImage={infrastructureBridge}
        title="Transport & Infrastructure"
        description="Connecting every province, every district, and every community. Afghanistan's infrastructure renaissance encompasses highways, railways, airports, and urban transit systems that facilitate trade, enable mobility, and unite the nation."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Building the Backbone of Development"
        subtitle="National Connectivity"
        description="The Transport & Infrastructure sector delivers the physical connections essential for economic development. From mountain highways linking remote provinces to international airports enabling global connectivity, infrastructure investment creates the foundation upon which all other sectors depend."
        icon={Truck}
        backgroundImage={infrastructureBridge}
        imagePosition="right"
        points={[
          "National highway network connecting all provincial capitals with modern, all-weather roads",
          "Railway development linking Afghanistan to regional rail networks for efficient freight transport",
          "International airport upgrades expanding capacity and improving services at major gateways",
          "Domestic aviation ensuring air connectivity for remote regions lacking road access",
          "Urban transit systems including bus rapid transit and future metro lines for major cities",
          "Bridge and tunnel construction overcoming geographical barriers in mountainous terrain",
          "Border crossing modernisation facilitating trade with neighbouring countries",
          "Road safety programmes reducing accidents through engineering, education, and enforcement",
        ]}
        stats={[
          { value: "10,000km", label: "Roads Planned" },
          { value: "2,000km", label: "Railways" },
          { value: "5", label: "Int'l Airports" },
          { value: "100+", label: "Bridges" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.transport")}
        </p>
      </div>

      {/* Transport Stats */}
      <StatsBar
        stats={[
          { value: "10,000km", label: "New Roads" },
          { value: "2,000km", label: "Rail Network" },
          { value: "5", label: "International Airports" },
          { value: "100+", label: "Major Bridges" },
        ]}
      />
      <div className="text-center py-8">
        <Link to="/sector/infrastructure" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all text-lg">
          Explore Infrastructure Sector →
        </Link>
      </div>
      </div> {/* End transport */}
      </div> {/* End infrastructure */}

      {/* ============================================
          SECTOR 12: CONNECTIVITY & LOGISTICS
      ============================================ */}
      <FullWidthImageSection
        backgroundImage={logisticsTransport}
        title="Connectivity & Logistics"
        description="Afghanistan's strategic location at the crossroads of Central and South Asia positions it as a natural trade and logistics hub. Modern logistics infrastructure and trade facilitation measures are transforming this geographical advantage into economic opportunity."
        overlay="gradient"
      />

      <SectorDetailSection
        title="The Heart of the Silk Road"
        subtitle="Regional Hub"
        description="The Connectivity & Logistics sector leverages Afghanistan's strategic location to establish it as a vital link in regional and global supply chains. Through logistics infrastructure development, trade facilitation, and international partnerships, we are reviving Afghanistan's historic role as a crossroads of commerce."
        icon={Wifi}
        backgroundImage={logisticsTransport}
        imagePosition="left"
        points={[
          "Logistics parks and dry ports providing modern facilities for cargo handling and storage",
          "Customs modernisation streamlining procedures and reducing delays at border crossings",
          "Transit corridor development enabling efficient movement of goods between neighbouring countries",
          "Cold chain infrastructure supporting export of agricultural products to international markets",
          "E-commerce logistics networks enabling domestic and international online retail delivery",
          "Warehousing and distribution centres strategically located to serve regional markets",
          "Trade financing solutions supporting importers and exporters with working capital needs",
          "Freight forwarding industry development creating professional logistics service capacity",
        ]}
        stats={[
          { value: "5", label: "Logistics Parks" },
          { value: "10+", label: "Dry Ports" },
          { value: "6", label: "Transit Routes" },
          { value: "24hr", label: "Customs Target" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.transport")}
        </p>
      </div>

      {/* ============================================
          SECTOR 13: BUSINESS & ECONOMICS
      ============================================ */}
      <FullWidthImageSection
        backgroundImage={businessConference}
        title="Business & Economics"
        description="Creating an enabling environment where businesses of all sizes can thrive. From policy reforms to business development services, we are building an economy that rewards entrepreneurship, attracts investment, and creates opportunities for all Afghans."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Enterprise Afghanistan"
        subtitle="Economic Growth"
        description="The Business & Economics sector creates the policy environment, institutional frameworks, and support services that enable private sector growth. From regulatory reform to business incubation, we are building an economy where Afghan entrepreneurs can innovate, compete, and succeed."
        icon={Briefcase}
        backgroundImage={businessConference}
        imagePosition="right"
        points={[
          "Business registration reform reducing time and cost for company establishment",
          "Investment promotion attracting foreign direct investment in priority sectors",
          "Small and medium enterprise support through training, financing, and market access programmes",
          "Industrial zone development providing serviced land and facilities for manufacturing businesses",
          "Trade promotion helping Afghan companies access international markets and buyers",
          "Competition policy ensuring level playing fields and preventing market abuses",
          "Intellectual property protection encouraging innovation and creativity",
          "Public-private partnerships leveraging private sector efficiency for public benefit",
        ]}
        stats={[
          { value: "100K", label: "New Businesses" },
          { value: "$10B", label: "FDI Target" },
          { value: "20", label: "Industrial Zones" },
          { value: "500K", label: "SME Jobs" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.privatesector")}
        </p>
      </div>

      {/* ============================================
          SECTOR 14: CULTURE & VALUES
      ============================================ */}
      <FullWidthImageSection
        backgroundImage={cultureHeritage}
        title="Culture & Values"
        description="Afghanistan's rich cultural heritage spanning millennia is a source of national pride and identity. From the ancient traditions of carpet weaving to the poetry of Rumi, we are preserving, promoting, and sharing Afghan culture with the world."
        overlay="gradient"
      />

      <SectorDetailSection
        title="Guardians of Heritage"
        subtitle="Cultural Pride"
        description="The Culture & Values sector preserves Afghanistan's extraordinary cultural heritage whilst fostering contemporary artistic expression. Through heritage conservation, cultural industries development, and arts education, we celebrate the traditions that define Afghan identity whilst encouraging creative innovation."
        icon={Palette}
        backgroundImage={cultureHeritage}
        imagePosition="left"
        points={[
          "UNESCO World Heritage Site preservation protecting Afghanistan's irreplaceable archaeological and architectural treasures",
          "Traditional crafts promotion supporting artisans in carpet weaving, ceramics, woodwork, and metalwork",
          "Museum development creating world-class institutions to house and display Afghan cultural artefacts",
          "Performing arts support nurturing music, dance, and theatre traditions",
          "Film industry development establishing Afghanistan as a location for international productions",
          "Literary heritage promotion translating and publishing classical and contemporary Afghan literature",
          "Cultural tourism development attracting visitors to experience Afghanistan's rich heritage",
          "Arts education ensuring young Afghans have opportunities to develop creative talents",
        ]}
        stats={[
          { value: "5", label: "UNESCO Sites" },
          { value: "100K", label: "Artisans" },
          { value: "50", label: "Museums" },
          { value: "1000+", label: "Cultural Events" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-4">
        <p className="text-sm text-muted-foreground border-l-4 border-primary/50 pl-4 bg-muted/20 rounded-r-lg py-2">
          <span className="font-semibold text-foreground/90">Strategy:</span> {t("ands.sector.culture")}
        </p>
      </div>

      {/* ============================================
          STRATEGIC INITIATIVES SECTION
      ============================================ */}
      <section className="py-32 px-6 lg:px-12 bg-[hsl(var(--nerpa-dark-elevated))]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-6 block">
              Strategic Framework
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">National Initiatives</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Coordinated programmes driving transformation across every dimension of Afghanistan's economy and society.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InitiativeCard
              title="Humanity & Sustainability"
              description="Placing human dignity at the centre of development whilst ensuring environmental sustainability for future generations. Every programme is designed to enhance human welfare and protect natural resources."
              icon={HeartHandshake}
              index={0}
            />
            <InitiativeCard
              title="Innovation & Coordination"
              description="Fostering creative solutions to development challenges through coordinated action across government, private sector, and civil society. Innovation drives efficiency and effectiveness."
              icon={Lightbulb}
              index={1}
            />
            <InitiativeCard
              title="Digitalisation & Automation"
              description="Leveraging digital technologies and automation to enhance productivity, improve service delivery, and create new economic opportunities in the knowledge economy."
              icon={Cpu}
              index={2}
            />
            <InitiativeCard
              title="Augmentation & Acceleration"
              description="Amplifying development impact through strategic partnerships, technology adoption, and programme scaling. Speed and scale are essential for transformative change."
              icon={Rocket}
              index={3}
            />
            <InitiativeCard
              title="Qualification & Quantification"
              description="Building human capital through education and training whilst measuring progress through robust monitoring and evaluation. What gets measured gets managed."
              icon={Award}
              index={4}
            />
            <InitiativeCard
              title="Integration & Synchronisation"
              description="Ensuring coherence across programmes through integrated planning and coordinated implementation. Synergies multiply impact and reduce duplication."
              icon={Network}
              index={5}
            />
            <InitiativeCard
              title="Standardisation & Certification"
              description="Establishing quality standards and certification systems that enable Afghan products and services to compete in international markets."
              icon={Shield}
              index={6}
            />
            <InitiativeCard
              title="Empowerment & Enhancement"
              description="Building capacity at individual, organisational, and institutional levels. Empowered people and organisations drive sustainable development."
              icon={Target}
              index={7}
            />
            <InitiativeCard
              title="Infrastructure & Industrialisation"
              description="Constructing the physical foundations for economic development whilst building industrial capacity for value addition and employment creation."
              icon={Factory}
              index={8}
            />
            <InitiativeCard
              title="Transformation & Modernisation"
              description="Reforming institutions and updating practices to meet 21st century requirements. Transformation is continuous as global standards evolve."
              icon={TrendingUp}
              index={9}
            />
            <InitiativeCard
              title="Governance & Representation"
              description="Strengthening governance institutions and ensuring citizen participation in decision-making. Good governance is the foundation of development."
              icon={Scale}
              index={10}
            />
            <InitiativeCard
              title="Capitalisation & Monetisation"
              description="Mobilising financial resources from domestic and international sources whilst ensuring efficient deployment for maximum development impact."
              icon={DollarSign}
              index={11}
            />
          </div>
        </div>
      </section>
      </div> {/* End of sectors div */}

      {/* NERPA Cross-Cutting Priorities */}
      <ANDSCrossCuttingSection />

      {/* ============================================
          INTERACTIVE TIMELINE 2025-2035
      ============================================ */}
      <div id="timeline">
        <InteractiveTimeline />
      </div>

      {/* ============================================
          INVESTMENT ROI CALCULATOR
      ============================================ */}
      <div id="calculator">
        <InvestmentCalculator />
      </div>

      {/* ============================================
          INTERACTIVE AFGHANISTAN MAP
      ============================================ */}
      <AfghanistanMap />

      {/* ============================================
          MANUFACTURING & INDUSTRIAL SECTORS (50+)
      ============================================ */}
      <div id="manufacturing">
        <ExpandedManufacturingSection />
      </div>

      {/* ============================================
          INTERACTIVE SECTOR EXPLORER
      ============================================ */}
      <div id="explorer">
        <InteractiveSectorExplorer />
      </div>

      {/* ============================================
          KEY INDUSTRIES SECTION (Expanded)
      ============================================ */}
      <div id="industries">
        <DetailedIndustrySection
          title="Key Industries"
        subtitle="Investment Opportunities"
        description="Afghanistan's strategic industries offer exceptional growth potential across diverse sectors, from natural resources to technology and infrastructure. Each industry presents unique opportunities for investment, development, and sustainable economic impact."
        industries={[
          {
            title: "Mining & Minerals",
            description: "Afghanistan possesses some of the world's largest untapped mineral reserves, including lithium, copper, iron ore, and rare earth elements. The mining sector represents a cornerstone of the nation's economic transformation, with estimated reserves valued at over $30 trillion.",
            opportunities: [
              "Lithium extraction and processing",
              "Copper mining operations",
              "Iron ore development",
              "Gemstone mining and cutting",
              "Rare earth elements extraction",
              "Coal mining and power generation",
              "Marble and construction materials",
              "Gold and precious metals"
            ],
            marketSize: "$30T+",
            growthRate: "25%",
            keyPlayers: "100+",
            icon: Pickaxe
          },
          {
            title: "Agriculture & Food Processing",
            description: "With fertile valleys and diverse climates, Afghanistan produces world-class agricultural products including saffron, pomegranates, almonds, and grapes. Modern processing facilities and value-added production create opportunities across the entire agricultural value chain.",
            opportunities: [
              "Saffron cultivation and export",
              "Fruit processing and packaging",
              "Dairy and livestock development",
              "Organic farming initiatives",
              "Agricultural technology solutions",
              "Food processing facilities",
              "Export-oriented production",
              "Cold chain infrastructure"
            ],
            marketSize: "$8B",
            growthRate: "12%",
            keyPlayers: "200+",
            icon: Wheat
          },
          {
            title: "Energy & Power",
            description: "Afghanistan's abundant water resources, solar potential, and wind corridors position it as a future energy exporter. Hydropower, solar, and wind projects are transforming the energy landscape while creating regional connectivity opportunities.",
            opportunities: [
              "Hydropower development",
              "Solar energy projects",
              "Wind farm installations",
              "Energy transmission infrastructure",
              "Regional energy exports",
              "Rural electrification",
              "Energy storage solutions",
              "Smart grid technology"
            ],
            marketSize: "$15B",
            growthRate: "20%",
            keyPlayers: "30+",
            icon: Zap
          },
          {
            title: "Technology & Digital Services",
            description: "A young, tech-savvy population and growing digital infrastructure are driving rapid expansion in technology services, software development, and digital innovation. Tech parks and startup ecosystems are emerging as engines of economic growth.",
            opportunities: [
              "Software development",
              "IT services and outsourcing",
              "E-commerce platforms",
              "Fintech solutions",
              "Digital payment systems",
              "Telecommunications infrastructure",
              "Data centers",
              "Tech education and training"
            ],
            marketSize: "$2B",
            growthRate: "25%",
            keyPlayers: "150+",
            icon: Cpu
          },
          {
            title: "Infrastructure & Construction",
            description: "Massive infrastructure development needs across transportation, housing, and urban development create sustained demand. Modern construction techniques and materials are transforming cities and connecting regions.",
            opportunities: [
              "Road and highway construction",
              "Residential and commercial development",
              "Bridge and tunnel projects",
              "Airport and port development",
              "Smart city infrastructure",
              "Industrial parks and zones",
              "Water and sanitation systems",
              "Public facilities construction"
            ],
            marketSize: "$50B",
            growthRate: "18%",
            keyPlayers: "100+",
            icon: Building2
          },
          {
            title: "Healthcare & Pharmaceuticals",
            description: "Expanding healthcare infrastructure and pharmaceutical manufacturing capabilities address critical needs while creating export opportunities. Modern hospitals, medical equipment, and pharmaceutical production are priorities.",
            opportunities: [
              "Hospital and clinic development",
              "Pharmaceutical manufacturing",
              "Medical equipment supply",
              "Telemedicine services",
              "Healthcare training",
              "Medical tourism",
              "Traditional medicine production",
              "Public health programs"
            ],
            marketSize: "$3B",
            growthRate: "14%",
            keyPlayers: "80+",
            icon: Heart
          },
          {
            title: "Education & Training",
            description: "Investment in education infrastructure, vocational training, and higher education institutions builds human capital while creating opportunities in educational technology, training services, and academic partnerships.",
            opportunities: [
              "University and college development",
              "Vocational training centers",
              "Educational technology",
              "Online learning platforms",
              "Teacher training programs",
              "Research and development",
              "International partnerships",
              "Skills development initiatives"
            ],
            marketSize: "$4B",
            growthRate: "16%",
            keyPlayers: "120+",
            icon: GraduationCap
          },
          {
            title: "Transport & Logistics",
            description: "Afghanistan's strategic location as a regional transit hub creates opportunities in transportation, logistics, and trade facilitation. Modern transport infrastructure connects Central Asia, South Asia, and the Middle East.",
            opportunities: [
              "Railway development",
              "Logistics and warehousing",
              "Freight forwarding",
              "Border crossing facilities",
              "Air cargo services",
              "Transit trade facilitation",
              "Transport technology",
              "Supply chain management"
            ],
            marketSize: "$6B",
            growthRate: "17%",
            keyPlayers: "60+",
            icon: Truck
          }
        ]}
        />
      </div> {/* End of industries div */}

      {/* ============================================
          PUBLICATIONS & RESEARCH (Expanded)
      ============================================ */}
      <div id="publications">
        <ExpandedPublicationsSection />
      </div>

      {/* ============================================
          ENGAGEMENT & OUTREACH (Expanded)
      ============================================ */}
      <div id="engagement">
        <ExpandedEngagementSection />
      </div>

      {/* ============================================
          RESOURCE CENTRE (Expanded)
      ============================================ */}
      <div id="resource">
        <ExpandedResourceCentre />
      </div>

      {/* ============================================
          GOVERNANCE & INSTITUTIONAL REFORM
      ============================================ */}
      <GovernanceSection />

      {/* ============================================
          ABOUT CONSORTIUM (Expanded)
      ============================================ */}
      <div id="consortium">
        <ExpandedConsortiumSection />
      </div>

      {/* ============================================
          FINAL VISION SECTION
      ============================================ */}
      <LargeTextSection
        title="Together, We Build Afghanistan's Future"
        description="NERPA is more than a programme—it's a movement. A collective commitment to transform Afghanistan into a beacon of prosperity, innovation, and sustainable development. Every sector, every initiative, every partnership contributes to a future where every Afghan can thrive."
        alignment="center"
      >
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {["Of the People", "For the People", "By the People"].map((text) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-8 py-4 border-2 border-primary text-primary font-semibold text-lg tracking-wider uppercase hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </LargeTextSection>

      {/* Province Infrastructure Maps */}
      <ProvinceInfrastructureMap />

      {/* Partners & Investors Section */}
      <PartnersInvestorsSection />

      {/* ============================================
          ALL 34 PROVINCE PROFILES (bottom of home)
      ============================================ */}
      <div id="provinces">
        <ProvinceShowcase />
      </div>

      {/* News & Updates Section */}
      <NewsUpdatesSection />

      {/* 20 Additional Mega Sectors */}
      <AdditionalMegaSections />

      {/* Final Stats */}
      <StatsBar
        stats={[
          { value: "34", label: "Provinces" },
          { value: "60+", label: "Sectors" },
          { value: "100+", label: "Partners" },
          { value: "2040", label: "Vision Year" },
        ]}
      />

      {/* Live Economic Dashboard */}
      <div id="dashboard">
        <LiveDashboard />
      </div>

      {/* Investor Contact Form */}
      <InvestorContactForm />

      {/* Closing Statement */}
      <section className="py-32 px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-4xl font-light leading-relaxed text-muted-foreground mb-8">
            "The future of Afghanistan is being written today, by the hands of its people, guided by their vision, and shaped by their determination."
          </p>
          <p className="text-primary text-xl font-semibold tracking-wider">
            National Economic Reform Programme of Afghanistan
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
