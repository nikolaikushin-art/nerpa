 import { heroMenuTranslations } from './heroMenuTranslations';

export type Language = 'en' | 'ps' | 'fa' | 'ar' | 'zh' | 'ru';
 
 export interface Translations {
  // Navigation & Header
  nav: {
    home: string;
    sectors: string;
    minerals: string;
    investment: string;
    contact: string;
    about: string;
    provinces: string;
    operations: string;
    timeline: string;
    map: string;
  };
  // Minerals Mega Menu
  mineralsMegaMenu: {
    title: string;
    subtitle: string;
    viewComplete: string;
    clickToExplore: string;
    strategicMetals: {
      copper: {
        title: string;
        items: {
          mesAynak: string;
          hajigak: string;
          balkhab: string;
          processing: string;
          exports: string;
          smelting: string;
          logar: string;
          refining: string;
        };
      };
      lithium: {
        title: string;
        items: {
          ghazni: string;
          nuristan: string;
          batteryGrade: string;
          evSupply: string;
          research: string;
          carbonate: string;
          spodumene: string;
          batteryMaterials: string;
        };
      };
      ironOre: {
        title: string;
        items: {
          hajigak: string;
          steelProduction: string;
          magnetite: string;
          infrastructure: string;
          employment: string;
          beneficiation: string;
          pelletization: string;
          bamyan: string;
        };
      };
      leadZinc: {
        title: string;
        items: {
          aynak: string;
          zincConcentrate: string;
          smelting: string;
          batteryMaterials: string;
        };
      };
      cobaltNickel: {
        title: string;
        items: {
          cobalt: string;
          nickel: string;
          alloys: string;
          evSupply: string;
        };
      };
      aluminum: {
        title: string;
        items: {
          bauxite: string;
          alumina: string;
          cryolite: string;
        };
      };
      strategicHardMetals: {
        title: string;
        items: {
          tungsten: string;
          molybdenum: string;
          vanadium: string;
          titaniumRutile: string;
          titaniumIlmenite: string;
          tin: string;
          antimony: string;
          zirconium: string;
          tantalum: string;
          yttrium: string;
          scandium: string;
          cerium: string;
          gadolinium: string;
        };
      };
      energyFuel: {
        title: string;
        items: {
          uranium: string;
          thorium: string;
          lignite: string;
          bituminousCoal: string;
        };
      };
    };
    preciousResources: {
      gemstones: {
        title: string;
        items: {
          panjshirEmeralds: string;
          lapisLazuli: string;
          jegdalekRubies: string;
          sapphires: string;
          tourmaline: string;
          aquamarine: string;
          cutting: string;
          certification: string;
          trade: string;
          kunzite: string;
          garnet: string;
          peridot: string;
        };
      };
      gold: {
        title: string;
        items: {
          badakhshan: string;
          takhar: string;
          refining: string;
          artisanal: string;
          bullion: string;
          processing: string;
          exports: string;
          placer: string;
          lode: string;
        };
      };
      rareEarth: {
        title: string;
        items: {
          helmand: string;
          technology: string;
          neodymium: string;
          globalSupply: string;
          research: string;
          concentrate: string;
          dysprosium: string;
          separation: string;
        };
      };
      silver: {
        title: string;
        items: {
          deposits: string;
          refining: string;
          leadOres: string;
          industrial: string;
        };
      };
    };
    industrialMinerals: {
      chromite: {
        title: string;
        items: {
          reserves: string;
          exports: string;
          steel: string;
          mining: string;
          ferrochrome: string;
          logar: string;
        };
      };
      marble: {
        title: string;
        items: {
          white: string;
          herat: string;
          architectural: string;
          processing: string;
          exports: string;
          varieties: string;
          trade: string;
        };
      };
      coal: {
        title: string;
        items: {
          basins: string;
          underground: string;
          baghlan: string;
          metallurgical: string;
          thermal: string;
          processing: string;
          energy: string;
        };
      };
      talcBarite: {
        title: string;
        items: {
          talc: string;
          drilling: string;
          salt: string;
          talcProcessing: string;
          bariteConcentrates: string;
          industrial: string;
        };
      };
      gypsumLimestone: {
        title: string;
        items: {
          gypsum: string;
          limestone: string;
          cement: string;
          construction: string;
        };
      };
      clayKaolin: {
        title: string;
        items: {
          kaolin: string;
          ceramic: string;
          pottery: string;
          paper: string;
          refractory: string;
          paint: string;
          pharmaceutical: string;
          cosmetic: string;
        };
      };
      sulfurPyrite: {
        title: string;
        items: {
          sulfur: string;
          pyrite: string;
          fertilizer: string;
          chemical: string;
          acid: string;
          mining: string;
          agricultural: string;
          processing: string;
        };
      };
      micaFeldspar: {
        title: string;
        items: {
          mica: string;
          feldspar: string;
          electronics: string;
          glass: string;
          sheets: string;
          ceramic: string;
          insulation: string;
          abrasive: string;
        };
      };
      graphiteCarbon: {
        title: string;
        items: {
          graphite: string;
          battery: string;
          steel: string;
          lubricant: string;
          refractory: string;
          carbonFiber: string;
        };
      };
      phosphatePotash: {
        title: string;
        items: {
          phosphate: string;
          fertilizer: string;
          agricultural: string;
          food: string;
          potash: string;
          chemical: string;
        };
      };
        quartzSilica: {
          title: string;
          items: {
            quartz: string;
            silica: string;
            glass: string;
            semiconductor: string;
            foundry: string;
            filtration: string;
          };
        };
        refractories: {
          title: string;
          items: {
            magnesite: string;
            bentonite: string;
            pyrophyllite: string;
            asbestos: string;
            ballClay: string;
            kaolinVariants: string;
            diatomite: string;
          };
        };
        dimensionStones: {
          title: string;
          items: {
            granite: string;
            sandstone: string;
            travertine: string;
            soapstone: string;
            quartzite: string;
            dioriteGabbro: string;
          };
        };
      };
    };
  // Navigation Dropdowns
  navDropdowns: {
    provinces: {
      title: string;
      subtitle: string;
      viewMap: string;
      clickToExplore: string;
      // All 34 provinces
      badakhshan: string;
      badghis: string;
      baghlan: string;
      balkh: string;
      bamyan: string;
      daykundi: string;
      farah: string;
      faryab: string;
      ghazni: string;
      ghor: string;
      helmand: string;
      herat: string;
      jowzjan: string;
      kabul: string;
      kandahar: string;
      kapisa: string;
      khost: string;
      kunar: string;
      kunduz: string;
      laghman: string;
      logar: string;
      nangarhar: string;
      nimruz: string;
      nuristan: string;
      paktia: string;
      paktika: string;
      panjshir: string;
      parwan: string;
      samangan: string;
      sarEPol: string;
      takhar: string;
      uruzgan: string;
      wardak: string;
      zabul: string;
    };
    operations: {
      title: string;
      subtitle: string;
      viewAll: string;
      processing: { label: string; description: string };
      smelting: { label: string; description: string };
      research: { label: string; description: string };
      geological: { label: string; description: string };
      trade: { label: string; description: string };
      investment: { label: string; description: string };
      sustainability: { label: string; description: string };
      community: { label: string; description: string };
      digital: { label: string; description: string };
      safety: { label: string; description: string };
    };
    timeline: {
      title: string;
      subtitle: string;
      viewComplete: string;
      clickToExplore: string;
      historical: { label: string; description: string };
      ancientPeriod?: { label: string; description: string };
      ancientEgypt?: { label: string; description: string };
      silkRoad?: { label: string; description: string };
      medievalPeriod?: { label: string; description: string };
      renaissance?: { label: string; description: string };
      colonialPeriod?: { label: string; description: string };
      britishSurveys?: { label: string; description: string };
      russianSurveys?: { label: string; description: string };
      sovietPeriod?: { label: string; description: string };
      sovietMapping?: { label: string; description: string };
      modernEra?: { label: string; description: string };
      usgsSurveys?: { label: string; description: string };
      gemstoneHistory?: { label: string; description: string };
      lapisHistory?: { label: string; description: string };
      emeraldHistory?: { label: string; description: string };
      rubyHistory?: { label: string; description: string };
      goldHistory?: { label: string; description: string };
      copperHistory?: { label: string; description: string };
      tradeRoutes?: { label: string; description: string };
      caravanRoutes?: { label: string; description: string };
      maritimeTrade?: { label: string; description: string };
      archaeological?: { label: string; description: string };
      mesAynakArchaeology?: { label: string; description: string };
      documentation?: { label: string; description: string };
      ancientTexts?: { label: string; description: string };
      historicalMaps?: { label: string; description: string };
      museumCollections?: { label: string; description: string };
      provincial?: { label: string; description: string };
      badakhshanHistory?: { label: string; description: string };
      panjshirHistory?: { label: string; description: string };
      roadmap: { label: string; description: string };
      milestones: { label: string; description: string };
      achievements: { label: string; description: string };
      vision2030: { label: string; description: string };
      reports: { label: string; description: string };
      annualReports?: { label: string; description: string };
      dataReports?: { label: string; description: string };
      statisticalAnalysis?: { label: string; description: string };
      historicalGallery?: { label: string; description: string };
      ancientImages?: { label: string; description: string };
      medievalImages?: { label: string; description: string };
      archaeologicalImages?: { label: string; description: string };
      artisanalMining?: { label: string; description: string };
      miningTechniques?: { label: string; description: string };
      culturalHeritage?: { label: string; description: string };
      royalCollections?: { label: string; description: string };
      ironHistory?: { label: string; description: string };
      lithiumHistory?: { label: string; description: string };
      coalHistory?: { label: string; description: string };
      marbleHistory?: { label: string; description: string };
      chromiteHistory?: { label: string; description: string };
      rareEarthHistory?: { label: string; description: string };
      miningCommunities?: { label: string; description: string };
      miningLegends?: { label: string; description: string };
      geologicalFormation?: { label: string; description: string };
      miningTools?: { label: string; description: string };
      miningSafety?: { label: string; description: string };
      miningEconomics?: { label: string; description: string };
      miningLaw?: { label: string; description: string };
      womenInMining?: { label: string; description: string };
      miningEducation?: { label: string; description: string };
      productionStatistics?: { label: string; description: string };
      economicImpact?: { label: string; description: string };
      tradeVolumes?: { label: string; description: string };
      workforceStatistics?: { label: string; description: string };
      priceTrends?: { label: string; description: string };
      geologicalFormations?: { label: string; description: string };
      depositCharacteristics?: { label: string; description: string };
      miningTechnologyEvolution?: { label: string; description: string };
      explorationMethods?: { label: string; description: string };
      environmentalFactors?: { label: string; description: string };
      miningRegulationsTimeline?: { label: string; description: string };
      licensingPermits?: { label: string; description: string };
      taxationRoyalties?: { label: string; description: string };
      infrastructureDevelopment?: { label: string; description: string };
      processingFacilities?: { label: string; description: string };
      transportationNetworks?: { label: string; description: string };
      marketAnalysis?: { label: string; description: string };
      investmentFlows?: { label: string; description: string };
      internationalPartnerships?: { label: string; description: string };
      researchStudies?: { label: string; description: string };
      dataAnalytics?: { label: string; description: string };
      forecastingProjections?: { label: string; description: string };
    };
    investment: {
      title: string;
      subtitle: string;
      viewComplete: string;
      clickToExplore: string;
      framework: { label: string; description: string };
      opportunities: { label: string; description: string };
      partnerships: { label: string; description: string };
      incentives: { label: string; description: string };
      riskManagement: { label: string; description: string };
      partners: { label: string; description: string };
      process: { label: string; description: string };
      statistics: { label: string; description: string };
    };
    contact: {
      title: string;
      subtitle: string;
      viewSection: string;
      clickToExplore: string;
      form: { label: string; description: string };
      offices: { label: string; description: string };
      email: { label: string; description: string };
      phone: { label: string; description: string };
      departments: { label: string; description: string };
      international: { label: string; description: string };
      media: { label: string; description: string };
      partnerships: { label: string; description: string };
    };
  };
  // Province Detail Page
  provinceDetail: {
    resourceProfile: string;
    provincialStatistics: string;
    downloadBrief: string;
    mineralResources: string;
    keyDeposits: string;
    opportunities: string;
    investmentOpportunities: string;
    developmentTimeline: string;
    keyMilestones: string;
    highlights: {
      richPotential: string;
      strategicOpportunities: string;
      investmentReady: string;
      infrastructurePlans: string;
    };
  };
   // Hero Section
   hero: {
     tagline: string;
     title: string;
     subtitle: string;
     cta: string;
   };
   // Statistics
   stats: {
     mineralReserves: string;
     knownDeposits: string;
     mineralTypes: string;
     provinces: string;
     estimatedValue: string;
     acrossProvinces: string;
     criticalStrategic: string;
     resourceRich: string;
   };
   // Sectors
   sectors: {
     copper: string;
     lithium: string;
     gold: string;
     gemstones: string;
     iron: string;
     rareEarth: string;
     chromite: string;
     marble: string;
     coal: string;
     silver: string;
     tungsten: string;
     uranium: string;
     salt: string;
     gypsum: string;
     talc: string;
     lead: string;
     zinc: string;
     limestone: string;
     naturalGas: string;
     niobium: string;
     tantalum: string;
     tourmaline: string;
     aquamarine: string;
   };
  // Contact Form
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    emailLabel: string;
    phoneLabel: string;
    addressValue: string;
    name: string;
    email: string;
    organization: string;
    sector: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    successTitle: string;
    errorTitle: string;
    submitAnother: string;
    selectSector: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    organizationPlaceholder: string;
    messagePlaceholder: string;
  };
   // Footer
   footer: {
     quote?: string;
     journey?: string;
     copyright: string;
     privacy: string;
     terms: string;
     contact?: string;
   };
   // Common
   common: {
     learnMore: string;
     viewDetails: string;
     explore: string;
     readMore: string;
     trillion: string;
     billion: string;
     million: string;
   };
  expanded: {
    megaReserves: string;
    globalLeader: string;
    economicTransformation: string;
    sustainableFuture: string;
    strategicPartnerships: string;
    technologyInnovation: string;
    communityProsperity: string;
  };
  // Province & Investment
  provinces: {
    title: string;
    subtitle: string;
    explore: string;
    mineralResources: string;
    investmentOpportunities: string;
    viewDetails: string;
  };
  investment: {
    framework: string;
    opportunities: string;
    partnerships: string;
    incentives: string;
    process: string;
  };
  timeline: {
    historical: string;
    roadmap: string;
    milestones: string;
    vision2030: string;
  };
  // Detail Page Layout
  detailPage: {
    backToHome: string;
    downloadReport: string;
    byTheNumbers: string;
    comprehensiveOverview: string;
    keyHighlights: string;
    section: string;
    keyMetrics: string;
    strategicOverview: string;
    mineralDetail?: {
      downloadLabel: string;
      overviewTitle: string;
      statsLabel: string;
      highlights: {
        worldClass: string;
        exceptionalValue: string;
        comprehensiveFramework: string;
        sustainableCommitment: string;
      };
      sections: {
        inDepthAnalysis: string;
        technicalDetails: string;
        developmentRoadmap: string;
        projectTimeline: string;
      };
    };
    timelineDetail?: {
      downloadLabel: string;
      overviewTitle: string;
      statsLabel: string;
      errorLoading: string;
      unableToLoad: string;
      highlights: {
        richHeritage: string;
        comprehensiveRoadmap: string;
        strategicMilestones: string;
        sustainableVision: string;
      };
      sections: {
        historicalRecord: string;
        detailedTimeline: string;
        achievements: string;
        keyMilestones: string;
        dataAnalysis: string;
        historicalDataVisualizations: string;
        comparativeAnalysis: string;
        dataTablesComparisons: string;
        comprehensiveInformation: string;
        keyInformationCategories: string;
        impact: string;
      };
    };
    investmentDetail?: {
      downloadLabel: string;
      overviewTitle: string;
      statsLabel: string;
      highlights: {
        investorFriendly: string;
        transparentProcedures: string;
        arbitrationAccess: string;
        environmentalStandards: string;
      };
      sections: {
        investmentProcess: string;
        stepsToInvestment: string;
        investmentBenefits: string;
        whyInvest: string;
      };
    };
    operationsDetail?: {
      downloadLabel: string;
      overviewTitle: string;
      statsLabel: string;
      highlights: {
        worldClassStandards: string;
        advancedTechnology: string;
        safetyProtocols: string;
        environmentalResponsibility: string;
      };
      sections: {
        operationalProcesses: string;
        processFramework: string;
        operationalBenefits: string;
        strategicAdvantages: string;
      };
    };
    contactDetail?: {
      downloadLabel: string;
      overviewTitle: string;
      statsLabel: string;
      highlights: {
        multipleChannels: string;
        responsiveService: string;
        multiLanguage: string;
        secureCommunications: string;
      };
      sections: {
        contactChannels: string;
        howToReach: string;
        departments: string;
        ministryDepartments: string;
      };
    };
  };
  // Contact Detail (top-level optional)
  contactDetail?: {
    downloadLabel: string;
    overviewTitle: string;
    statsLabel: string;
    highlights: {
      multipleChannels: string;
      responsiveService: string;
      multiLanguage: string;
      secureCommunications: string;
    };
    sections: {
      contactChannels: string;
      howToReach: string;
      departments: string;
      ministryDepartments: string;
    };
  };
  // Not Found Page
  notFound: {
    title: string;
    message: string;
    returnHome: string;
  };
  // Map Section
  mapSection: {
    provincesLabel: string;
    title: string;
    description: string;
    stats: {
      provinces: string;
      knownDeposits: string;
      totalValue: string;
      mineralTypes: string;
    };
    legendHover?: string;
    legendDeposits?: string;
  };
  // Image Gallery
  imageGallery: {
    clickToView: string;
  };
  // (footer defined above)
  // Minerals Index Page
    mineralsIndex: {
      title: string;
      description: string;
      searchPlaceholder: string;
    };
  // Investment Sectors Explorer
  investmentSectors: {
    badge: string;
    title: string;
    searchPlaceholder: string;
  };
  // Vision 2050 Components
  vision2050: {
    learnMore: string;
  };
  // Mineral Hero Section
  mineralHero: {
    selectCategory: string;
    menuCategories: Array<{
      id: string;
      label: string;
      subsections: Array<{ id: string; label: string }>;
    }>;
  };
  // Footer Mega Menu
  footerMegaMenu: {
    sustainability: string;
    resources: string;
    about: string;
    viewAllProvinces: string;
    environmentalProtection: string;
    communityDevelopment: string;
    healthSafety: string;
    workforceDevelopment: string;
    landRestoration: string;
    waterStewardship: string;
    reports: string;
    geologicalData: string;
    investmentGuides: string;
    maps: string;
    statistics: string;
    publications: string;
    researchPapers: string;
    downloads: string;
    quickLinks: string;
    overview: string;
    minerals: string;
    operations: string;
    investment: string;
    processing: string;
    smelting: string;
    research: string;
    trade: string;
    framework: string;
    opportunities: string;
    partnerships: string;
    process: string;
    environmental: string;
    community: string;
    safety: string;
    workforce: string;
    legal: string;
    cookies: string;
    accessibility: string;
    aboutUs: string;
    mission: string;
    vision: string;
    team: string;
    partners: string;
    careers: string;
    news: string;
    faq: string;
    technology: string;
    digitalMining: string;
    aiAutomation: string;
    dataAnalytics: string;
    remoteSensing: string;
    blockchain: string;
    iot: string;
    robotics: string;
    innovation: string;
    education: string;
    miningUniversity: string;
    trainingPrograms: string;
    scholarships: string;
    researchCenters: string;
    onlineCourses: string;
    certifications: string;
    workshops: string;
    studentResources: string;
    media: string;
    pressReleases: string;
    newsArticles: string;
    photoGallery: string;
    videoLibrary: string;
    socialMedia: string;
    mediaKit: string;
    events: string;
    subscribe: string;
    support: string;
    helpCenter: string;
    documentation: string;
    apiDocs: string;
    tutorials: string;
    bugReport: string;
    featureRequest: string;
    contactSupport: string;
    becomePartner: string;
    currentPartners: string;
    partnerPrograms: string;
    jointVentures: string;
    supplierNetwork: string;
    technologyPartners: string;
    academicPartners: string;
    ngoPartners: string;
    compliance: string;
    regulations: string;
    environmentalCompliance: string;
    safetyStandards: string;
    laborStandards: string;
    audits: string;
    codeOfConduct: string;
    whistleblower: string;
    jobOpenings: string;
    internships: string;
    benefits: string;
    culture: string;
    diversity: string;
    applyNow: string;
    employeePortal: string;
    referralProgram: string;
    geological: string;
    exploration: string;
    incentives: string;
    disclaimer: string;
    connect: string;
    email: string;
    phone: string;
    offices: string;
  };
  // Statistics Labels
  statsLabels: {
    mineralReserves: string;
    knownDeposits: string;
    mineralTypes: string;
    provinces: string;
    metricTons: string;
    value: string;
    majorDeposits: string;
    target: string;
    globalRank: string;
    globalShare: string;
    gemstoneRegions: string;
    types: string;
    years: string;
    annual: string;
    ironOreReserves: string;
    jobs: string;
    goldReserves: string;
    goldBelts: string;
    artisanalMiners: string;
    reeElements: string;
    estimatedValue: string;
    underExploration: string;
    supplyImpact: string;
    provenReserves: string;
    deposits: string;
    primaryUse: string;
    cubicMeters: string;
    colors: string;
    annualPotential: string;
    qualityGrade: string;
    coalReserves: string;
    highQuality: string;
    majorBasins: string;
    strategicRole: string;
    yearlyPotential: string;
  };
  // Common Descriptions
  descriptions: {
    estimatedTotalValue: string;
    acrossAllProvinces: string;
    criticalAndStrategic: string;
    resourceRichRegions: string;
    estimatedReserves: string;
    currentMarketEstimate: string;
    activeExplorationSites: string;
    fullProductionCapacity: string;
    largestReserves: string;
    strategicImportance: string;
    potentialContribution: string;
    preciousSemiPrecious: string;
    miningHeritage: string;
    exportPotential: string;
    estimatedWorth: string;
    identifiedDeposits: string;
    employmentPotential: string;
    atCurrentPrices: string;
    majorFormations: string;
    currentlyActive: string;
    identifiedSpecies: string;
    strategicResources: string;
    potentialDiversification: string;
    exportPotentialValue: string;
    acrossProvinces: string;
    industrialApplication: string;
    uniqueVarieties: string;
    exportRevenue: string;
    internationalStandard: string;
    metallurgicalGrade: string;
    domesticSupply: string;
  };
  // Index Page Content Sections
  indexPage: {
    hero: {
      title: string;
      subtitle: string;
      readMore: string;
    };
    overview: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
    };
    geological: {
      title: string;
      subtitle: string;
      description: string;
      quote: string;
    };
    nationalStrategy: {
      title: string;
      subtitle: string;
      description: string;
    };
    economicImpact: {
      title: string;
      subtitle: string;
      description: string;
    };
    copper: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
      processingTitle: string;
      processingSubtitle: string;
      processingDescription: string;
    };
    lithium: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
      geologyTitle: string;
      geologySubtitle: string;
      geologyDescription: string;
      quote: string;
    };
    gold: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
      depositsTitle: string;
      depositsSubtitle: string;
      depositsDescription: string;
    };
    gemstones: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
    };
    // Detail Items for MineralDetailSection
    detailItems: {
      copper: Array<{ title: string; description: string }>;
      lithium: Array<{ title: string; description: string }>;
      gold: Array<{ title: string; description: string }>;
      gemstones: Array<{ title: string; description: string }>;
      iron: Array<{ title: string; description: string }>;
      rareEarth: Array<{ title: string; description: string }>;
      industrial: Array<{ title: string; description: string }>;
      processing: Array<{ title: string; description: string }>;
      research: Array<{ title: string; description: string }>;
      trade: Array<{ title: string; description: string }>;
      sustainability: Array<{ title: string; description: string }>;
    };
    // Additional major sections
    iron: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
      processingTitle: string;
      processingSubtitle: string;
      processingDescription: string;
    };
    rareEarth: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
    };
    lapis: {
      title: string;
      subtitle: string;
      description: string;
    };
    emerald: {
      title: string;
      subtitle: string;
      description: string;
    };
    ruby: {
      title: string;
      subtitle: string;
      description: string;
    };
    tourmaline: {
      title: string;
      subtitle: string;
      description: string;
    };
    aquamarine: {
      title: string;
      subtitle: string;
      description: string;
    };
    chromite: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
    };
    marble: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
    };
    coal: {
      title: string;
      subtitle: string;
      description: string;
      statsTitle: string;
      statsSubtitle: string;
    };
    industrial: {
      title: string;
      subtitle: string;
      description: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
    };
    processing: {
      title: string;
      subtitle: string;
      description: string;
      detailTitle?: string;
      detailSubtitle?: string;
      detailDescription?: string;
    };
    research: {
      title: string;
      subtitle: string;
      description: string;
      detailTitle?: string;
      detailSubtitle?: string;
      detailDescription?: string;
    };
    trade: {
      title: string;
      subtitle: string;
      description: string;
      detailTitle: string;
      detailSubtitle: string;
      detailDescription: string;
    };
    sustainability: {
      title: string;
      subtitle: string;
      description: string;
      detailTitle?: string;
      detailSubtitle?: string;
      detailDescription?: string;
    };
    timeline: {
      sectionTitle: string;
      sectionSubtitle: string;
      year2024: { title: string; description: string };
      year2025: { title: string; description: string };
      year2026: { title: string; description: string };
      year2027: { title: string; description: string };
      year2028: { title: string; description: string };
      year2029: { title: string; description: string };
      year2030: { title: string; description: string };
      year2032: { title: string; description: string };
      year2035: { title: string; description: string };
    };
    vision2030: {
      title: string;
      subtitle: string;
      description: string;
    };
    finalQuote: {
      quote: string;
    };
    buildingTomorrow: {
      title: string;
      subtitle: string;
      description: string;
    };
    nationalLegacy: {
      title: string;
      subtitle: string;
      description: string;
    };
    // Additional Province Sections
    provinces?: {
      [key: string]: { title: string; subtitle: string; description: string };
    };
    // Allow additional dynamic sections
    [key: string]: any;
  };
}
 
 export const translations: Record<Language, Translations> = {
   en: {
    nav: {
      home: 'Home',
      sectors: 'Sectors',
      minerals: 'Minerals',
      investment: 'Investment',
      contact: 'Contact',
      about: 'About',
      provinces: 'Provinces',
      operations: 'Operations',
      timeline: 'Timeline',
      map: 'Map',
    },
    navDropdowns: {
      provinces: {
        title: '34 Resource-Rich Provinces',
        subtitle: 'Explore mineral deposits across Afghanistan',
        viewMap: 'View Interactive Map',
        clickToExplore: 'Click any province to explore its mineral wealth',
        badakhshan: 'Badakhshan - Gemstone Kingdom',
        badghis: 'Badghis - Mineral Resources',
        baghlan: 'Baghlan - Coal & Minerals',
        balkh: 'Balkh - Northern Resources',
        bamyan: 'Bamyan - Iron Mountain',
        daykundi: 'Daykundi - Mineral Deposits',
        farah: 'Farah - Western Minerals',
        faryab: 'Faryab - Northern Deposits',
        ghazni: 'Ghazni - Lithium Belt',
        ghor: 'Ghor - Central Resources',
        helmand: 'Helmand - Strategic Resources',
        herat: 'Herat - Western Gateway',
        jowzjan: 'Jowzjan - Northern Minerals',
        kabul: 'Kabul - Capital Resources',
        kandahar: 'Kandahar - Southern Hub',
        kapisa: 'Kapisa - Central Deposits',
        khost: 'Khost - Eastern Minerals',
        kunar: 'Kunar - Gemstone Valley',
        kunduz: 'Kunduz - Northern Gateway',
        laghman: 'Laghman - Eastern Resources',
        logar: 'Logar - Copper Heartland',
        nangarhar: 'Nangarhar - Eastern Deposits',
        nimruz: 'Nimruz - Southern Minerals',
        nuristan: 'Nuristan - Lithium Frontier',
        paktia: 'Paktia - Eastern Resources',
        paktika: 'Paktika - Southern Deposits',
        panjshir: 'Panjshir - Emerald Valley',
        parwan: 'Parwan - Central Minerals',
        samangan: 'Samangan - Northern Deposits',
        sarEPol: 'Sar-e Pol - Northern Resources',
        takhar: 'Takhar - Golden Rivers',
        uruzgan: 'Uruzgan - Central Minerals',
        wardak: 'Wardak - Central Deposits',
        zabul: 'Zabul - Southern Resources',
      },
      operations: {
        title: 'Mining Operations & Services',
        subtitle: 'Comprehensive mining services and operations',
        viewAll: 'View All Operations & Services',
        processing: { label: 'Processing & Refining', description: 'Ore processing facilities' },
        smelting: { label: 'Smelting Operations', description: 'Metal extraction' },
        research: { label: 'Research & Exploration', description: 'Geological surveys' },
        geological: { label: 'Geological Surveys', description: 'Mapping deposits' },
        trade: { label: 'Trade & Export', description: 'International trade' },
        investment: { label: 'Investment Framework', description: 'Legal & financial' },
        sustainability: { label: 'Sustainability', description: 'Environmental standards' },
        community: { label: 'Community Development', description: 'Local employment' },
        digital: { label: 'Digital Mining', description: 'Technology integration' },
        safety: { label: 'Health & Safety', description: 'Worker protection' },
      },
      timeline: {
        title: 'Development Timeline',
        subtitle: 'Historical Progress & Future Vision',
        viewComplete: 'View Complete Timeline',
        clickToExplore: 'Click any option to explore timeline details',
        historical: { label: 'Historical Timeline', description: 'Mining history & milestones' },
        ancientPeriod: { label: 'Ancient Mining (4000 BCE - 1000 CE)', description: '6,000+ years of mining heritage from ancient civilizations' },
        ancientEgypt: { label: 'Ancient Egypt & Mesopotamia', description: 'Afghan lapis in Tutankhamun\'s burial and ancient trade' },
        silkRoad: { label: 'Silk Road Era', description: 'Historical trade routes and mineral commerce' },
        medievalPeriod: { label: 'Medieval & Islamic Periods', description: 'Silk Road trade and Islamic mining expansion' },
        renaissance: { label: 'Renaissance Period', description: 'Ultramarine pigment trade and European art' },
        colonialPeriod: { label: 'Colonial Exploration (1800-1960)', description: 'European geological surveys and early discoveries' },
        britishSurveys: { label: 'British Geological Surveys', description: '19th century British exploration and mapping' },
        russianSurveys: { label: 'Russian Geological Expeditions', description: 'Early 20th century Russian geological work' },
        sovietPeriod: { label: 'Soviet Era (1960-1990)', description: 'Comprehensive geological mapping and major deposit identification' },
        sovietMapping: { label: 'Soviet Geological Mapping', description: 'Comprehensive surveys identifying Mes Aynak and Hajigak' },
        modernEra: { label: 'Modern Era (2000-Present)', description: '21st century renewal and comprehensive development' },
        usgsSurveys: { label: 'USGS Comprehensive Surveys', description: 'USGS assessment quantifying $30T+ mineral endowment' },
        gemstoneHistory: { label: 'Gemstone Heritage', description: '6,000 years of lapis, emerald, and ruby mining' },
        lapisHistory: { label: 'Lapis Lazuli: 6,000 Years', description: 'World\'s oldest continuously operated mines' },
        emeraldHistory: { label: 'Panjshir Emerald Heritage', description: '1,000+ years of emerald mining tradition' },
        rubyHistory: { label: 'Jegdalek Ruby Mining', description: 'Pigeon-blood ruby deposits and historical extraction' },
        goldHistory: { label: 'Gold Mining Heritage', description: 'Ancient and medieval gold extraction traditions' },
        copperHistory: { label: 'Copper Mining Legacy', description: 'Historical copper extraction and trade' },
        tradeRoutes: { label: 'Ancient Trade Routes', description: 'Silk Road and historical mineral trade networks' },
        caravanRoutes: { label: 'Caravan Trade Networks', description: 'Historical caravan routes carrying Afghan minerals' },
        maritimeTrade: { label: 'Maritime Trade History', description: 'Historical sea routes for mineral exports' },
        archaeological: { label: 'Archaeological Discoveries', description: 'Historical mining sites and archaeological evidence' },
        mesAynakArchaeology: { label: 'Mes Aynak Archaeological Site', description: '2,000-year-old Buddhist site and copper deposit' },
        documentation: { label: 'Historical Documentation', description: 'Ancient texts, maps, and historical records' },
        ancientTexts: { label: 'Ancient Texts & Records', description: 'Historical documents mentioning Afghan minerals' },
        historicalMaps: { label: 'Historical Maps', description: 'Ancient and medieval maps showing mining sites' },
        museumCollections: { label: 'Museum Collections', description: 'Afghan minerals in world museum collections' },
        provincial: { label: 'Provincial Development', description: 'Regional timelines' },
        badakhshanHistory: { label: 'Badakhshan Mining History', description: '6,000 years of lapis lazuli mining' },
        panjshirHistory: { label: 'Panjshir Valley Heritage', description: 'Emerald mining tradition spanning millennia' },
        roadmap: { label: 'Development Roadmap', description: 'Future development plans' },
        milestones: { label: 'Project Milestones', description: 'Key project achievements' },
        achievements: { label: 'Achievements', description: 'Major accomplishments' },
        vision2030: { label: 'Vision 2026-2050', description: 'Long-term vision' },
        reports: { label: 'Annual Reports', description: 'Yearly progress reports' },
        annualReports: { label: 'Annual Progress Reports', description: 'Yearly mining development reports' },
        dataReports: { label: 'Historical Data Reports', description: 'Comprehensive historical mining data' },
        statisticalAnalysis: { label: 'Statistical Analysis', description: 'Historical mining statistics and trends' },
        historicalGallery: { label: 'Historical Image Gallery', description: 'Comprehensive collection of historical mining images' },
        ancientImages: { label: 'Ancient Mining Images', description: 'Historical images from ancient mining periods' },
        medievalImages: { label: 'Medieval Period Images', description: 'Historical images from medieval mining' },
        archaeologicalImages: { label: 'Archaeological Site Images', description: 'Images of historical mining sites' },
        artisanalMining: { label: 'Artisanal Mining History', description: 'Traditional mining methods and heritage' },
        miningTechniques: { label: 'Historical Mining Techniques', description: 'Evolution of mining methods over 6,000 years' },
        culturalHeritage: { label: 'Cultural Heritage', description: 'Mining in Afghan culture and traditions' },
        royalCollections: { label: 'Royal Collections', description: 'Afghan gems in historical royal collections' },
        ironHistory: { label: 'Iron Mining Heritage', description: 'Historical iron extraction and steel production' },
        lithiumHistory: { label: 'Lithium Discovery History', description: 'Historical lithium exploration and discovery' },
        coalHistory: { label: 'Coal Mining Legacy', description: 'Historical coal extraction and energy production' },
        marbleHistory: { label: 'Marble Quarrying Heritage', description: 'Historical marble extraction and architectural use' },
        chromiteHistory: { label: 'Chromite Mining History', description: 'Historical chromite extraction and industrial use' },
        rareEarthHistory: { label: 'Rare Earth Elements Discovery', description: 'Historical rare earth element exploration' },
        miningCommunities: { label: 'Historical Mining Communities', description: 'Traditional mining communities and their heritage' },
        miningLegends: { label: 'Mining Legends & Stories', description: 'Historical legends and stories from mining regions' },
        geologicalFormation: { label: 'Geological Formation History', description: 'How Afghan mineral deposits formed over millions of years' },
        miningTools: { label: 'Historical Mining Tools', description: 'Evolution of mining tools over 6,000 years' },
        miningSafety: { label: 'Historical Mining Safety', description: 'Traditional safety practices and modern evolution' },
        miningEconomics: { label: 'Historical Mining Economics', description: 'Economic impact of mining throughout history' },
        miningLaw: { label: 'Historical Mining Law & Governance', description: 'Evolution of mining regulations and governance' },
        womenInMining: { label: 'Women in Historical Mining', description: 'Role of women in mining throughout history' },
        miningEducation: { label: 'Historical Mining Education', description: 'Traditional knowledge transfer and modern education' },
        productionStatistics: { label: 'Mining Production Statistics', description: 'Historical production data, output trends, and mining volumes across periods' },
        economicImpact: { label: 'Economic Impact Analysis', description: 'Economic contributions, GDP impact, and revenue generation from mining' },
        tradeVolumes: { label: 'Trade Volume Data', description: 'Historical trade volumes, export statistics, and market data' },
        workforceStatistics: { label: 'Employment & Workforce', description: 'Mining employment data, workforce demographics, and labor statistics' },
        priceTrends: { label: 'Price Trends & Markets', description: 'Historical mineral prices, market trends, and commodity values' },
        geologicalFormations: { label: 'Geological Formations', description: 'Geological structures, formation processes, and mineral genesis' },
        depositCharacteristics: { label: 'Deposit Characteristics', description: 'Deposit types, ore grades, reserves, and resource classifications' },
        miningTechnologyEvolution: { label: 'Mining Technology Evolution', description: 'Technological advances, equipment evolution, and innovation timeline' },
        explorationMethods: { label: 'Exploration Methods', description: 'Historical exploration techniques, surveys, and discovery methods' },
        environmentalFactors: { label: 'Environmental Factors', description: 'Environmental considerations, impacts, and sustainability practices' },
        miningRegulationsTimeline: { label: 'Mining Regulations Timeline', description: 'Regulatory framework evolution, laws, and governance structures' },
        licensingPermits: { label: 'Licensing & Permits', description: 'Historical licensing systems, permit processes, and authorization frameworks' },
        taxationRoyalties: { label: 'Taxation & Royalties', description: 'Tax structures, royalty systems, and fiscal policies over time' },
        infrastructureDevelopment: { label: 'Infrastructure Development', description: 'Mining infrastructure, transportation, and facility development' },
        processingFacilities: { label: 'Processing Facilities', description: 'Mineral processing plants, refineries, and industrial facilities' },
        transportationNetworks: { label: 'Transportation Networks', description: 'Trade routes, transportation infrastructure, and logistics systems' },
        marketAnalysis: { label: 'Market Analysis', description: 'Market share, competition analysis, and industry structure' },
        investmentFlows: { label: 'Investment Flows', description: 'Historical investment patterns, capital flows, and funding sources' },
        internationalPartnerships: { label: 'International Partnerships', description: 'International collaborations, joint ventures, and partnerships' },
        researchStudies: { label: 'Research & Studies', description: 'Academic research, geological studies, and scientific publications' },
        dataAnalytics: { label: 'Data & Analytics', description: 'Data collection, analysis methods, and statistical reporting' },
        forecastingProjections: { label: 'Forecasting & Projections', description: 'Future projections, resource estimates, and development forecasts' },
      },
      investment: {
        title: 'Investment Portal',
        subtitle: 'Comprehensive Investment Information',
        viewComplete: 'View Complete Investment Portal',
        clickToExplore: 'Click any option to explore investment opportunities',
        framework: { label: 'Investment Framework', description: 'Legal & regulatory structure' },
        opportunities: { label: 'Investment Opportunities', description: 'Available projects' },
        partnerships: { label: 'Partnership Models', description: 'Joint ventures & agreements' },
        incentives: { label: 'Financial Incentives', description: 'Tax benefits & incentives' },
        riskManagement: { label: 'Risk Management', description: 'Investment protection' },
        partners: { label: 'International Partners', description: 'Global partnerships' },
        process: { label: 'Investment Process', description: 'Step-by-step guide' },
        statistics: { label: 'Investment Statistics', description: 'Market data & trends' },
      },
      contact: {
        title: 'Contact Portal',
        subtitle: 'Get In Touch With Us',
        viewSection: 'View Contact Section',
        clickToExplore: 'Click any option to get in touch',
        form: { label: 'Contact Form', description: 'Submit inquiry' },
        offices: { label: 'Office Locations', description: 'Find our offices' },
        email: { label: 'Email Contact', description: 'Email addresses' },
        phone: { label: 'Phone Directory', description: 'Contact numbers' },
        departments: { label: 'Department Contacts', description: 'By department' },
        international: { label: 'International Offices', description: 'Global contacts' },
        media: { label: 'Media Inquiries', description: 'Press & media' },
        partnerships: { label: 'Partnership Inquiries', description: 'Business partnerships' },
      },
    },
    mineralsMegaMenu: {
      title: 'Afghanistan Minerals Portal',
      subtitle: 'Comprehensive Mineral Resource Database',
      viewComplete: 'View Complete Registry',
      clickToExplore: 'Click any mineral to explore details',
      strategicMetals: {
        copper: {
          title: 'Copper',
          items: {
            mesAynak: 'Mes Aynak Deposit',
            hajigak: 'Hajigak Copper-Iron Complex',
            balkhab: 'Balkhab Deposit',
            processing: 'Copper Processing',
            exports: 'Copper Exports',
            smelting: 'Copper Smelting Operations',
            logar: 'Logar Province Deposits',
            refining: 'Copper Refining Facilities',
          },
        },
        lithium: {
          title: 'Lithium',
          items: {
            ghazni: 'Ghazni Pegmatites',
            nuristan: 'Nuristan Deposits',
            batteryGrade: 'Battery-Grade Processing',
            evSupply: 'EV Supply Chain',
            research: 'Research Centers',
            carbonate: 'Lithium Carbonate Production',
            spodumene: 'Spodumene Concentrates',
            batteryMaterials: 'Battery Material Manufacturing',
          },
        },
        ironOre: {
          title: 'Iron Ore',
          items: {
            hajigak: 'Hajigak Iron Mountain',
            steelProduction: 'Steel Production Plans',
            magnetite: 'Magnetite Quality',
            infrastructure: 'Infrastructure Steel',
            employment: 'Employment Creation',
            beneficiation: 'Iron Ore Beneficiation',
            pelletization: 'Pelletization Plants',
            bamyan: 'Bamyan Province Deposits',
          },
        },
        leadZinc: {
          title: 'Lead & Zinc',
          items: {
            aynak: 'Aynak Lead-Zinc Deposits',
            zincConcentrate: 'Zinc Concentrate Production',
            smelting: 'Lead Smelting Operations',
            batteryMaterials: 'Battery Manufacturing Materials',
          },
        },
        cobaltNickel: {
          title: 'Cobalt & Nickel',
          items: {
            cobalt: 'Cobalt Deposits',
            nickel: 'Nickel Laterite Resources',
            alloys: 'Battery Metal Alloys',
            evSupply: 'EV Battery Supply Chain',
          },
        },
        aluminum: {
          title: 'Aluminum & Light Metals',
          items: {
            bauxite: 'Bauxite Deposits',
            alumina: 'Alumina Production',
            cryolite: 'Cryolite Deposits',
          },
        },
        strategicHardMetals: {
          title: 'Strategic & Hard Metals',
          items: {
            tungsten: 'Tungsten Deposits',
            molybdenum: 'Molybdenum Deposits',
            vanadium: 'Vanadium Deposits',
            titaniumRutile: 'Titanium Rutile',
            titaniumIlmenite: 'Titanium Ilmenite',
            tin: 'Tin Deposits',
            antimony: 'Antimony Deposits',
            zirconium: 'Zirconium Deposits',
            tantalum: 'Tantalum Deposits',
            yttrium: 'Yttrium Deposits',
            scandium: 'Scandium Deposits',
            cerium: 'Cerium Deposits',
            gadolinium: 'Gadolinium Deposits',
          },
        },
        energyFuel: {
          title: 'Energy & Fuel Minerals',
          items: {
            uranium: 'Uranium Deposits',
            thorium: 'Thorium Deposits',
            lignite: 'Lignite Deposits',
            bituminousCoal: 'Bituminous Coal Variants',
          },
        },
      },
      preciousResources: {
        gemstones: {
          title: 'Gemstones',
          items: {
            panjshirEmeralds: 'Panjshir Emeralds',
            lapisLazuli: 'Badakhshan Lapis Lazuli',
            jegdalekRubies: 'Jegdalek Rubies',
            sapphires: 'Hindu Kush Sapphires',
            tourmaline: 'Nuristan Tourmaline',
            aquamarine: 'Kunar Aquamarine',
            cutting: 'Gemstone Cutting & Polishing',
            certification: 'Gemstone Certification',
            trade: 'International Gem Trade',
            kunzite: 'Kunzite & Spodumene',
            garnet: 'Garnet Deposits',
            peridot: 'Peridot Resources',
          },
        },
        gold: {
          title: 'Gold',
          items: {
            badakhshan: 'Badakhshan Gold Belt',
            takhar: 'Takhar Deposits',
            refining: 'Gold Refining',
            artisanal: 'Artisanal Mining',
            bullion: 'Bullion Production',
            processing: 'Gold Processing Plants',
            exports: 'Gold Export Operations',
            placer: 'Placer Gold Deposits',
            lode: 'Lode Gold Veins',
          },
        },
        rareEarth: {
          title: 'Rare Earth Elements',
          items: {
            helmand: 'Helmand REE Deposits',
            technology: 'Technology Metals',
            neodymium: 'Neodymium & Praseodymium',
            globalSupply: 'Global Supply Impact',
            research: 'Research Partnerships',
            concentrate: 'REE Concentrate Processing',
            dysprosium: 'Dysprosium & Terbium',
            separation: 'REE Separation Technology',
          },
        },
        silver: {
          title: 'Silver',
          items: {
            deposits: 'Silver Deposits',
            refining: 'Silver Refining',
            leadOres: 'Silver-Lead Ores',
            industrial: 'Industrial Silver Applications',
          },
        },
      },
      industrialMinerals: {
        chromite: {
          title: 'Chromite',
          items: {
            reserves: 'Chromite Reserves',
            exports: 'Export Operations',
            steel: 'Stainless Steel Production',
            mining: 'Chromite Mining Operations',
            ferrochrome: 'Ferrochrome Production',
            logar: 'Logar Chromite Deposits',
          },
        },
        marble: {
          title: 'Marble',
          items: {
            white: 'Premium White Marble',
            herat: 'Herat Quarries',
            architectural: 'Architectural Stone',
            processing: 'Marble Processing Facilities',
            exports: 'Marble Export Operations',
            varieties: '75+ Color Varieties',
            trade: 'International Stone Trade',
          },
        },
        coal: {
          title: 'Coal',
          items: {
            basins: 'Coal Basins',
            underground: 'Underground Operations',
            baghlan: 'Baghlan Province',
            metallurgical: 'Metallurgical Coal',
            thermal: 'Thermal Coal Reserves',
            processing: 'Coal Processing Plants',
            energy: 'Energy Generation',
          },
        },
        talcBarite: {
          title: 'Talc & Barite',
          items: {
            talc: 'High-Purity Talc',
            drilling: 'Drilling Barite',
            salt: 'Salt Deposits',
            talcProcessing: 'Talc Processing',
            bariteConcentrates: 'Barite Concentrates',
            industrial: 'Industrial Applications',
          },
        },
        gypsumLimestone: {
          title: 'Gypsum & Limestone',
          items: {
            gypsum: 'Gypsum Deposits',
            limestone: 'Limestone Quarries',
            cement: 'Cement Production',
            construction: 'Construction Materials',
          },
        },
        clayKaolin: {
          title: 'Clay & Kaolin',
          items: {
            kaolin: 'Kaolin Deposits',
            ceramic: 'Ceramic Clay Resources',
            pottery: 'Pottery & Tile Manufacturing',
            paper: 'Paper Industry Applications',
            refractory: 'Refractory Materials',
            paint: 'Paint & Coating Industry',
            pharmaceutical: 'Pharmaceutical Applications',
            cosmetic: 'Cosmetic Grade Kaolin',
          },
        },
        sulfurPyrite: {
          title: 'Sulfur & Pyrite',
          items: {
            sulfur: 'Sulfur Deposits',
            pyrite: 'Pyrite Resources',
            fertilizer: 'Fertilizer Production',
            chemical: 'Chemical Industry',
            acid: 'Sulfuric Acid Production',
            mining: 'Mining & Extraction',
            agricultural: 'Agricultural Applications',
            processing: 'Pyrite Processing',
          },
        },
        micaFeldspar: {
          title: 'Mica & Feldspar',
          items: {
            mica: 'Mica Deposits',
            feldspar: 'Feldspar Resources',
            electronics: 'Electronics Industry',
            glass: 'Glass Manufacturing',
            sheets: 'Mica Sheet Production',
            ceramic: 'Ceramic & Pottery',
            insulation: 'Insulation Materials',
            abrasive: 'Abrasive Applications',
          },
        },
        graphiteCarbon: {
          title: 'Graphite & Carbon',
          items: {
            graphite: 'Graphite Deposits',
            battery: 'Battery Anode Materials',
            steel: 'Steel Production',
            lubricant: 'Lubricant Applications',
            refractory: 'Refractory Products',
            carbonFiber: 'Carbon Fiber Materials',
          },
        },
        phosphatePotash: {
          title: 'Phosphate & Potash',
          items: {
            phosphate: 'Phosphate Deposits',
            fertilizer: 'Fertilizer Manufacturing',
            agricultural: 'Agricultural Nutrients',
            food: 'Food Industry Applications',
            potash: 'Potash Resources',
            chemical: 'Chemical Processing',
          },
        },
        quartzSilica: {
          title: 'Quartz & Silica',
          items: {
            quartz: 'Quartz Deposits',
            silica: 'Silica Sand Resources',
            glass: 'Glass Production',
            semiconductor: 'Semiconductor Industry',
            foundry: 'Foundry Applications',
            filtration: 'Water Filtration',
          },
        },
        refractories: {
          title: 'Refractories & Industrial Minerals',
          items: {
            magnesite: 'Magnesite Deposits',
            bentonite: 'Bentonite Deposits',
            pyrophyllite: 'Pyrophyllite Deposits',
            asbestos: 'Asbestos Deposits',
            ballClay: 'Ball Clay Deposits',
            kaolinVariants: 'Kaolin Variants',
            diatomite: 'Diatomite Deposits',
          },
        },
        dimensionStones: {
          title: 'Dimension & Decorative Stones',
          items: {
            granite: 'Granite Deposits',
            sandstone: 'Sandstone Deposits',
            travertine: 'Travertine Deposits',
            soapstone: 'Soapstone Deposits',
            quartzite: 'Quartzite Deposits',
            dioriteGabbro: 'Diorite / Gabbro',
          },
        },
      },
    },
    provinceDetail: {
      resourceProfile: 'Provincial Resource Profile',
      provincialStatistics: 'Provincial Statistics',
      downloadBrief: 'Download Investment Brief',
      mineralResources: 'Mineral Resources',
      keyDeposits: 'Key Mineral Deposits',
      opportunities: 'Opportunities',
      investmentOpportunities: 'Investment Opportunities',
      developmentTimeline: 'Development Timeline',
      keyMilestones: 'Key Milestones',
      highlights: {
        richPotential: 'Rich mineral resource potential',
        strategicOpportunities: 'Strategic development opportunities',
        investmentReady: 'Investment-ready projects',
        infrastructurePlans: 'Infrastructure development plans',
      },
    },
     hero: {
       tagline: 'Of the Afghan People, for the Afghan people, and by the Afghan people.',
       title: 'National Economic Reform Programme of Afghanistan',
       subtitle: 'The future of a nation is not written in the language of chance but in the architecture of intent. And this consortium stands as that intent — a living framework built to carry Afghanistan from resilience into renaissance.',
       cta: 'Explore Investment Opportunities',
     },
     stats: {
       mineralReserves: 'Mineral Reserves',
       knownDeposits: 'Known Deposits',
       mineralTypes: 'Mineral Types',
       provinces: 'Provinces',
       estimatedValue: 'Estimated total value',
       acrossProvinces: 'Across all provinces',
       criticalStrategic: 'Critical and strategic',
       resourceRich: 'Resource-rich regions',
     },
     sectors: {
       copper: 'Copper',
       lithium: 'Lithium',
       gold: 'Gold',
       gemstones: 'Gemstones',
       iron: 'Iron Ore',
       rareEarth: 'Rare Earth Elements',
       chromite: 'Chromite',
       marble: 'Marble',
       coal: 'Coal',
       silver: 'Silver',
       tungsten: 'Tungsten',
       uranium: 'Uranium',
       salt: 'Salt',
       gypsum: 'Gypsum',
       talc: 'Talc',
       lead: 'Lead',
       zinc: 'Zinc',
       limestone: 'Limestone',
       naturalGas: 'Natural Gas',
       niobium: 'Niobium',
       tantalum: 'Tantalum',
       tourmaline: 'Tourmaline',
       aquamarine: 'Aquamarine',
     },
     contact: {
       title: 'Investment Inquiry',
       subtitle: 'Connect with the NERPA contact team',
       addressLabel: 'Address',
       emailLabel: 'Email',
       phoneLabel: 'Phone',
       addressValue: 'London, UK | Kabul, Afghanistan',
       name: 'Full Name',
       email: 'Email Address',
       organization: 'Organization',
       sector: 'Sector of Interest',
       message: 'Message',
      submit: 'Submit Inquiry',
      submitting: 'Submitting...',
      success: 'Your inquiry has been submitted successfully. Our team will contact you shortly.',
      error: 'There was an error submitting your inquiry. Please try again.',
      successTitle: 'Success',
      errorTitle: 'Error',
      submitAnother: 'Submit Another Inquiry',
      selectSector: 'Select a sector',
       namePlaceholder: 'Enter your full name',
       emailPlaceholder: 'Enter your email address',
       organizationPlaceholder: 'Enter your organization name',
       messagePlaceholder: 'Describe your investment interest or inquiry...',
     },
      footer: {
        quote: 'A nation\'s strength is measured not by what it endures, but by what it builds. This is the foundation. This is the framework. This is Afghanistan.',
        journey: 'The journey from resilience to renaissance is not a sprint but a marathon — measured not in days but in generations. And it begins here, now, with intent.',
        copyright: '© 2026 National Economic Reform Programme of Afghanistan. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
      },
     common: {
       learnMore: 'Learn More',
       viewDetails: 'View Details',
       explore: 'Explore',
       readMore: 'Read More',
       trillion: 'Trillion',
       billion: 'Billion',
       million: 'Million',
     },
    expanded: {
      megaReserves: '$30 Trillion in Mineral Reserves',
      globalLeader: 'Global Mining Leader',
      economicTransformation: 'Economic Transformation',
      sustainableFuture: 'Sustainable Future',
      strategicPartnerships: 'Strategic Global Partnerships',
      technologyInnovation: 'Technology & Innovation',
      communityProsperity: 'Community Prosperity',
    },
    provinces: {
      title: 'Afghan Provinces',
      subtitle: '34 Resource-Rich Regions',
      explore: 'Explore Provinces',
      mineralResources: 'Mineral Resources',
      investmentOpportunities: 'Investment Opportunities',
      viewDetails: 'View Province Details',
    },
    investment: {
      framework: 'Investment Framework',
      opportunities: 'Investment Opportunities',
      partnerships: 'Partnership Models',
      incentives: 'Financial Incentives',
      process: 'Investment Process',
    },
    timeline: {
      historical: 'Historical Timeline',
      roadmap: 'Development Roadmap',
      milestones: 'Project Milestones',
      vision2030: 'Vision 2026-2050',
    },
    detailPage: {
      backToHome: 'Back to Home',
      downloadReport: 'Download Report',
      byTheNumbers: 'By the Numbers',
      comprehensiveOverview: 'Comprehensive Overview',
      keyHighlights: 'Key Highlights',
      section: 'Section',
      keyMetrics: 'Key Metrics',
      strategicOverview: 'Strategic Overview & Analysis',
      mineralDetail: {
        downloadLabel: 'Download Investment Brief',
        overviewTitle: 'Resource Analysis & Strategic Assessment',
        statsLabel: 'Resource Metrics',
        highlights: {
          worldClass: 'World-class resource scale and quality',
          exceptionalValue: 'Exceptional economic value potential',
          comprehensiveFramework: 'Comprehensive development framework',
          sustainableCommitment: 'Sustainable operations commitment',
        },
        sections: {
          inDepthAnalysis: 'In-Depth Analysis',
          technicalDetails: 'Technical Details',
          developmentRoadmap: 'Development Roadmap',
          projectTimeline: 'Project Timeline',
        },
      },
      timelineDetail: {
        downloadLabel: 'Download Timeline Report',
        overviewTitle: 'Historical Context & Strategic Analysis',
        statsLabel: 'Timeline Statistics',
        errorLoading: 'Error Loading Timeline',
        unableToLoad: 'Unable to load timeline data for:',
        highlights: {
          richHeritage: 'Rich 6,000+ year mining heritage',
          comprehensiveRoadmap: 'Comprehensive development roadmap',
          strategicMilestones: 'Strategic milestones and achievements',
          sustainableVision: 'Vision for sustainable growth',
        },
        sections: {
          historicalRecord: 'Historical Record',
          detailedTimeline: 'Detailed Timeline',
          achievements: 'Achievements',
          keyMilestones: 'Key Milestones',
          dataAnalysis: 'Data Analysis',
          historicalDataVisualizations: 'Historical Data Visualizations',
          comparativeAnalysis: 'Comparative Analysis',
          dataTablesComparisons: 'Data Tables & Comparisons',
          comprehensiveInformation: 'Comprehensive Information',
          keyInformationCategories: 'Key Information Categories',
          impact: 'Impact:',
        },
      },
      investmentDetail: {
        downloadLabel: 'Download Investment Guide',
        overviewTitle: 'Investment Strategy & Framework',
        statsLabel: 'Investment Statistics',
        highlights: {
          investorFriendly: 'Investor-friendly legal framework',
          transparentProcedures: 'Transparent licensing procedures',
          arbitrationAccess: 'International arbitration access',
          environmentalStandards: 'Comprehensive environmental standards',
        },
        sections: {
          investmentProcess: 'Investment Process',
          stepsToInvestment: 'Steps to Investment',
          investmentBenefits: 'Investment Benefits',
          whyInvest: 'Why Invest in Afghanistan',
        },
      },
      operationsDetail: {
        downloadLabel: 'Download Operations Guide',
        overviewTitle: 'Operational Excellence & Framework',
        statsLabel: 'Operations Statistics',
        highlights: {
          worldClassStandards: 'World-class operational standards',
          advancedTechnology: 'Advanced technology integration',
          safetyProtocols: 'Comprehensive safety protocols',
          environmentalResponsibility: 'Environmental responsibility',
        },
        sections: {
          operationalProcesses: 'Operational Processes',
          processFramework: 'Process Framework',
          operationalBenefits: 'Operational Benefits',
          strategicAdvantages: 'Strategic Advantages',
        },
      },
    },
    contactDetail: {
      downloadLabel: 'Download Contact Directory',
      overviewTitle: 'Communication & Engagement',
      statsLabel: 'Service Metrics',
      highlights: {
        multipleChannels: 'Multiple communication channels',
        responsiveService: 'Responsive service standards',
        multiLanguage: 'Multi-language support',
        secureCommunications: 'Secure communications',
      },
      sections: {
        contactChannels: 'Contact Channels',
        howToReach: 'How to Reach Us',
        departments: 'Departments',
        ministryDepartments: 'Ministry Departments',
      },
    },
    notFound: {
      title: '404',
      message: 'Oops! Page not found',
      returnHome: 'Return to Home',
    },
    mapSection: {
      provincesLabel: '34 Provinces',
      title: 'Interactive Resource Map',
      description: 'Explore Afghanistan\'s mineral wealth across all provinces. Hover over each region to discover key deposits, estimated values, and investment opportunities.',
      stats: {
        provinces: 'Provinces',
        knownDeposits: 'Known Deposits',
        totalValue: 'Total Value',
        mineralTypes: 'Mineral Types',
      },
      legendHover: 'Hover over provinces',
      legendDeposits: 'Mineral Deposits',
    },
    imageGallery: {
      clickToView: 'Click any image to view in full screen',
    },
    // (footer defined above in contactForm section)
    mineralsIndex: {
      title: 'Afghanistan\'s Mineral Wealth',
      description: 'Explore over 150 mineral types across 34 provinces, representing one of the world\'s most significant untapped mineral endowments valued at over $30 trillion.',
      searchPlaceholder: 'Search minerals, deposits, or locations...',
    },
    investmentSectors: {
      badge: '50+ Industries',
      title: 'Explore Investment Sectors',
      searchPlaceholder: 'Search sectors, industries, or keywords...',
    },
    vision2050: {
      learnMore: 'Learn More',
    },
    mineralHero: {
      selectCategory: 'Select a category to explore',
      menuCategories: heroMenuTranslations.en,
    },
    footerMegaMenu: {
      sustainability: 'Sustainability',
      resources: 'Resources',
      about: 'About',
      viewAllProvinces: 'View All 34 Provinces →',
      environmentalProtection: 'Environmental Protection',
      communityDevelopment: 'Community Development',
      healthSafety: 'Health & Safety',
      workforceDevelopment: 'Workforce Development',
      landRestoration: 'Land Restoration',
      waterStewardship: 'Water Stewardship',
      reports: 'Annual Reports',
      geologicalData: 'Geological Data',
      investmentGuides: 'Investment Guides',
      maps: 'Interactive Maps',
      statistics: 'Statistics',
      publications: 'Publications',
      researchPapers: 'Research Papers',
      downloads: 'Downloads',
      quickLinks: 'Quick Links',
      overview: 'Overview',
      minerals: 'Minerals',
      operations: 'Operations',
      investment: 'Investment',
      processing: 'Processing',
      smelting: 'Smelting',
      research: 'Research',
      trade: 'Trade',
      framework: 'Framework',
      opportunities: 'Opportunities',
      partnerships: 'Partnerships',
      process: 'Process',
      environmental: 'Environmental',
      community: 'Community',
      safety: 'Safety',
      workforce: 'Workforce',
      legal: 'Legal',
      cookies: 'Cookies',
      accessibility: 'Accessibility',
      aboutUs: 'About Us',
      mission: 'Mission',
      vision: 'Vision',
      team: 'Our Team',
      partners: 'Partners',
      careers: 'Careers',
      news: 'News & Updates',
      faq: 'FAQ',
      technology: 'Technology',
      digitalMining: 'Digital Mining',
      aiAutomation: 'AI & Automation',
      dataAnalytics: 'Data Analytics',
      remoteSensing: 'Remote Sensing',
      blockchain: 'Blockchain Traceability',
      iot: 'IoT & Sensors',
      robotics: 'Mining Robotics',
      innovation: 'Innovation Hub',
      education: 'Education',
      miningUniversity: 'Mining University',
      trainingPrograms: 'Training Programs',
      scholarships: 'Scholarships',
      researchCenters: 'Research Centers',
      onlineCourses: 'Online Courses',
      certifications: 'Certifications',
      workshops: 'Workshops',
      studentResources: 'Student Resources',
      media: 'Media',
      pressReleases: 'Press Releases',
      newsArticles: 'News Articles',
      photoGallery: 'Photo Gallery',
      videoLibrary: 'Video Library',
      socialMedia: 'Social Media',
      mediaKit: 'Media Kit',
      events: 'Events',
      subscribe: 'Subscribe',
      support: 'Support',
      helpCenter: 'Help Center',
      documentation: 'Documentation',
      apiDocs: 'API Documentation',
      tutorials: 'Tutorials',
      bugReport: 'Report Bug',
      featureRequest: 'Feature Request',
      contactSupport: 'Contact Support',
      becomePartner: 'Become a Partner',
      currentPartners: 'Current Partners',
      partnerPrograms: 'Partner Programs',
      jointVentures: 'Joint Ventures',
      supplierNetwork: 'Supplier Network',
      technologyPartners: 'Technology Partners',
      academicPartners: 'Academic Partners',
      ngoPartners: 'NGO Partners',
      compliance: 'Compliance',
      regulations: 'Regulations',
      environmentalCompliance: 'Environmental Compliance',
      safetyStandards: 'Safety Standards',
      laborStandards: 'Labor Standards',
      audits: 'Audits & Reports',
      codeOfConduct: 'Code of Conduct',
      whistleblower: 'Whistleblower Policy',
      jobOpenings: 'Job Openings',
      internships: 'Internships',
      benefits: 'Benefits',
      culture: 'Company Culture',
      diversity: 'Diversity & Inclusion',
      applyNow: 'Apply Now',
      employeePortal: 'Employee Portal',
      referralProgram: 'Referral Program',
      geological: 'Geological',
      exploration: 'Exploration',
      incentives: 'Incentives',
      disclaimer: 'Disclaimer',
      connect: 'Connect',
      email: 'Email',
      phone: 'Phone',
      offices: 'Offices',
    },
    statsLabels: {
      mineralReserves: 'Mineral Reserves',
      knownDeposits: 'Known Deposits',
      mineralTypes: 'Mineral Types',
      provinces: 'Provinces',
      metricTons: 'Metric Tons',
      value: 'Value',
      majorDeposits: 'Major Deposits',
      target: 'Target',
      globalRank: 'Global Rank',
      globalShare: 'Global Share',
      gemstoneRegions: 'Gemstone Regions',
      types: 'Types',
      years: 'Years',
      annual: 'Annual',
      ironOreReserves: 'Iron Ore Reserves',
      jobs: 'Jobs',
      goldReserves: 'Gold Reserves',
      goldBelts: 'Gold Belts',
      artisanalMiners: 'Artisanal Miners',
      reeElements: 'REE Elements',
      estimatedValue: 'Estimated Value',
      underExploration: 'Under Exploration',
      supplyImpact: 'Supply Impact',
      provenReserves: 'Proven Reserves',
      deposits: 'Deposits',
      primaryUse: 'Primary Use',
      cubicMeters: 'Cubic Meters',
      colors: 'Colors',
      annualPotential: 'Annual Potential',
      qualityGrade: 'Quality Grade',
      coalReserves: 'Coal Reserves',
      highQuality: 'High Quality',
      majorBasins: 'Major Basins',
      strategicRole: 'Strategic Role',
      yearlyPotential: 'Yearly potential',
    },
    descriptions: {
      estimatedTotalValue: 'Estimated total value',
      acrossAllProvinces: 'Across all provinces',
      criticalAndStrategic: 'Critical and strategic',
      resourceRichRegions: 'Resource-rich regions',
      estimatedReserves: 'Estimated reserves',
      currentMarketEstimate: 'Current market estimate',
      activeExplorationSites: 'Active exploration sites',
      fullProductionCapacity: 'Full production capacity',
      largestReserves: 'Largest reserves',
      strategicImportance: 'Strategic importance',
      potentialContribution: 'Potential contribution',
      preciousSemiPrecious: 'Precious & semi-precious',
      miningHeritage: 'Mining heritage',
      exportPotential: 'Export potential',
      estimatedWorth: 'Estimated worth',
      identifiedDeposits: 'Identified deposits',
      employmentPotential: 'Employment potential',
      atCurrentPrices: 'At current prices',
      majorFormations: 'Major formations',
      currentlyActive: 'Currently active',
      identifiedSpecies: 'Identified species',
      strategicResources: 'Strategic resources',
      potentialDiversification: 'Potential diversification',
      exportPotentialValue: 'Export potential',
      acrossProvinces: 'Across provinces',
      industrialApplication: 'Industrial application',
      uniqueVarieties: 'Unique varieties',
      exportRevenue: 'Export revenue',
      internationalStandard: 'International standard',
      metallurgicalGrade: 'Metallurgical grade',
      domesticSupply: 'Domestic supply',
    },
    indexPage: {
      hero: {
        title: 'Mining & Minerals',
        subtitle: 'A Story of Resource Sovereignty',
        readMore: 'Read More',
      },
      overview: {
        title: 'Resource Sovereignty',
        subtitle: 'The Foundation',
        description: 'Afghanistan possesses one of the world\'s most significant untapped mineral reserves, valued at over $30 trillion. This extraordinary wealth of natural resources—from lithium and copper to rare earth elements and precious gemstones—represents an unprecedented opportunity for national prosperity, regional development, and complete economic transformation of Central Asia and beyond.',
        statsTitle: 'Mineral Wealth Overview',
        statsSubtitle: 'By The Numbers',
      },
      geological: {
        title: 'Geological Framework',
        subtitle: 'Deep Time Legacy',
        description: 'Afghanistan\'s extraordinary mineral wealth stems from its unique position at the convergence of three major tectonic plates. Over hundreds of millions of years, these geological forces created the mineralized zones, metamorphic belts, and intrusive complexes that now host world-class deposits.',
        quote: 'The mineral wealth beneath Afghan soil represents not just economic opportunity, but the foundation for a prosperous and self-reliant nation.',
      },
      nationalStrategy: {
        title: 'National Strategy',
        subtitle: 'Strategic Vision',
        description: 'A comprehensive national mineral strategy guides sustainable development, balancing economic growth with environmental stewardship and community benefit. This framework ensures that mineral wealth serves all Afghans while attracting responsible international investment.',
      },
      economicImpact: {
        title: 'Economic Transformation',
        subtitle: 'National Prosperity',
        description: 'The development of Afghanistan\'s mineral sector will transform the national economy, creating hundreds of thousands of jobs, generating billions in export revenue, and building the foundation for industrial development and economic independence.',
      },
      copper: {
        title: 'Copper Excellence',
        subtitle: 'Strategic Metal',
        description: 'Afghanistan\'s copper reserves rank among the world\'s largest unexploited deposits, with total estimated reserves exceeding 600 million metric tons valued at $8T. The Mes Aynak deposit alone contains an estimated 125 million tons of copper, with 50+ major deposits across multiple provinces creating an unparalleled foundation for industrial development and economic transformation.',
        statsTitle: 'Copper Resources',
        statsSubtitle: 'Deposit Analysis',
        detailTitle: 'Copper Development',
        detailSubtitle: 'Projects & Infrastructure',
        detailDescription: 'Comprehensive copper sector development from exploration through processing, with focus on sustainable extraction and value addition.',
        processingTitle: 'Copper Processing',
        processingSubtitle: 'Value Addition',
        processingDescription: 'Modern copper processing facilities will transform raw ore into refined copper products, capturing value domestically and creating skilled employment in smelting, refining, and manufacturing operations.',
      },
      lithium: {
        title: 'Lithium Future',
        subtitle: 'Energy Transition',
        description: 'As the world transitions to electric vehicles and renewable energy storage, Afghanistan\'s massive lithium reserves—estimated at 215 million metric tons valued at $8 trillion—position the nation as the undisputed global leader in this critical mineral. With 45% of the world\'s known lithium deposits, Afghanistan will define the future of the clean energy revolution.',
        statsTitle: 'Lithium Potential',
        statsSubtitle: 'Global Significance',
        detailTitle: 'Lithium Strategy',
        detailSubtitle: 'Development Framework',
        detailDescription: 'Strategic development of lithium resources to meet global demand for electric vehicle batteries and energy storage systems.',
        geologyTitle: 'Pegmatite Geology',
        geologySubtitle: 'Lithium Formations',
        geologyDescription: 'Afghanistan\'s lithium-bearing pegmatites, formed through slow crystallization of granitic magmas, contain exceptional concentrations of spodumene and lepidolite—the primary lithium ore minerals that power the global clean energy transition.',
        quote: 'Afghanistan\'s lithium deposits could power the global transition to clean energy, positioning the nation as an essential partner in the fight against climate change.',
      },
      gold: {
        title: 'Golden Heritage',
        subtitle: 'Precious Metals',
        description: 'Afghanistan\'s gold reserves of 27,000 metric tons, scattered across 45 major gold belts from Badakhshan to Takhar, represent both ancient artisanal tradition and unprecedented industrial opportunity. With reserves valued at $4.4 trillion supporting 350,000 artisanal miners, Afghanistan is poised to become a dominant force in global precious metals markets.',
        statsTitle: 'Gold Resources',
        statsSubtitle: 'Ancient Wealth',
        detailTitle: 'Gold Sector Development',
        detailSubtitle: 'Extraction & Processing',
        detailDescription: 'Modernization of gold mining operations with focus on artisanal miner integration, environmental compliance, and value chain development.',
        depositsTitle: 'Primary Gold Deposits',
        depositsSubtitle: 'Hard Rock Mining',
        depositsDescription: 'Afghanistan\'s primary gold deposits occur in quartz veins associated with orogenic events, containing both visible gold and sulfide-hosted mineralization requiring modern processing techniques.',
      },
      gemstones: {
        title: 'Treasures of the Earth',
        subtitle: 'Precious Gemstones',
        description: 'From the legendary Panjshir emeralds to the ancient lapis lazuli mines of Badakhshan, Afghanistan\'s gemstone heritage spans six thousand years. These precious stones, traded along the Silk Road, continue to command premium prices in global markets.',
        statsTitle: 'Gemstone Heritage',
        statsSubtitle: 'Ancient Treasures',
        detailTitle: 'Gemstone Excellence',
        detailSubtitle: 'Mining & Processing',
        detailDescription: 'Development of sustainable gemstone mining and processing capabilities with international certification and quality assurance.',
      },
      detailItems: {
        copper: [
          { title: 'Mes Aynak Deposit', description: 'One of the world\'s largest undeveloped copper deposits located in Logar Province, with an estimated 125m tons of copper.' },
          { title: 'Hajigak Reserves', description: 'Massive copper-iron complex in Bamyan Province containing both copper and iron ore reserves valued at over $2T.' },
          { title: 'Balkhab Deposit', description: 'Significant copper mineralization in northern Afghanistan with exploration revealing high-grade copper concentrations.' },
          { title: 'Processing Infrastructure', description: 'Development of modern copper processing facilities including smelters and refineries for domestic value addition.' },
          { title: 'Environmental Standards', description: 'Implementation of international environmental standards for sustainable copper extraction and processing.' },
          { title: 'Export Strategy', description: 'Strategic partnerships with global copper markets and development of efficient export corridors.' },
        ],
        lithium: [
          { title: 'Ghazni Deposits', description: 'Major lithium-bearing pegmatite formations discovered in Ghazni Province with exceptional purity levels.' },
          { title: 'Nuristan Region', description: 'Extensive lithium mineralization across the mountainous Nuristan Province, one of the largest deposits globally.' },
          { title: 'Battery-Grade Lithium', description: 'Development of processing capabilities to produce battery-grade lithium carbonate for electric vehicle markets.' },
          { title: 'Strategic Partnerships', description: 'Negotiations with leading technology companies for sustainable lithium extraction and processing.' },
          { title: 'Research Facilities', description: 'Establishment of lithium research centers to develop innovative extraction technologies.' },
          { title: 'Global Supply Chain', description: 'Integration into global lithium supply chains for electronics and renewable energy sectors.' },
        ],
        gold: [
          { title: 'Badakhshan Gold Belt', description: 'Extensive gold mineralization along the Badakhshan geological belt with multiple high-grade deposits.' },
          { title: 'Takhar Deposits', description: 'Significant alluvial and hard rock gold deposits in Takhar Province with active artisanal mining.' },
          { title: 'Modern Extraction', description: 'Implementation of modern gold extraction techniques to improve recovery rates and reduce environmental impact.' },
          { title: 'Refining Capacity', description: 'Development of gold refining facilities to produce international-standard gold bars and bullion.' },
          { title: 'Artisanal Integration', description: 'Programs to integrate artisanal miners into formal economy with training and equipment support.' },
          { title: 'Security & Assurance', description: 'Implementation of conflict-free gold certification and traceability systems.' },
        ],
        gemstones: [
          { title: 'Panjshir Emeralds', description: 'World-famous emerald mines in Panjshir Valley producing exceptional quality gemstones sought by collectors globally.' },
          { title: 'Badakhshan Lapis', description: 'The world\'s finest lapis lazuli from ancient mines in Badakhshan, traded along the Silk Road for millennia.' },
          { title: 'Ruby & Sapphire', description: 'High-quality corundum deposits yielding rubies and sapphires in multiple provinces across the country.' },
          { title: 'Tourmaline Varieties', description: 'Diverse tourmaline deposits including rare watermelon and indicolite varieties prized by gem enthusiasts.' },
          { title: 'Gemstone Processing', description: 'Development of gem cutting and polishing facilities to add value before export.' },
          { title: 'Certification Systems', description: 'Implementation of gemological certification and origin tracing for Afghan gemstones.' },
        ],
        iron: [
          { title: 'Hajigak Iron', description: 'One of Asia\'s largest iron ore deposits in central Afghanistan with reserves exceeding 22 billion tons.' },
          { title: 'Steel Production', description: 'Plans for integrated steel production facilities to meet domestic construction demand.' },
          { title: 'Infrastructure Steel', description: 'Strategic importance for national infrastructure development including bridges and buildings.' },
          { title: 'Export Potential', description: 'Development of iron ore export capabilities to regional markets in South and Central Asia.' },
          { title: 'Magnetite Quality', description: 'High-grade magnetite deposits suitable for direct reduction iron-making processes.' },
          { title: 'Employment Creation', description: 'Potential to create tens of thousands of direct and indirect jobs in mining and processing.' },
        ],
        rareEarth: [
          { title: 'Helmand Deposits', description: 'Significant rare earth element concentrations discovered in Helmand Province with diverse element profiles.' },
          { title: 'Technology Minerals', description: 'Critical minerals for electronics, renewable energy, and defense applications with global strategic importance.' },
          { title: 'Processing Technology', description: 'Development of environmentally responsible rare earth processing and separation technologies.' },
          { title: 'Neodymium & Praseodymium', description: 'Key elements for permanent magnets used in electric vehicles and wind turbines.' },
          { title: 'Supply Security', description: 'Potential to reduce global dependence on single-source rare earth supplies.' },
          { title: 'Research Collaboration', description: 'International partnerships for rare earth research and sustainable extraction methods.' },
        ],
        industrial: [
          { title: 'Marble & Granite', description: 'World-class marble deposits in multiple colors and patterns, exported for architectural applications globally.' },
          { title: 'Talc & Soapstone', description: 'High-purity talc deposits used in cosmetics, pharmaceuticals, and industrial applications.' },
          { title: 'Chromite Reserves', description: 'Significant chromite deposits essential for stainless steel production and chemical industries.' },
          { title: 'Barite Production', description: 'High-quality barite for oil drilling applications and industrial chemical production.' },
          { title: 'Salt Deposits', description: 'Extensive rock salt and evaporite deposits for food processing and chemical industries.' },
          { title: 'Cement Materials', description: 'Limestone and clay deposits supporting domestic cement production capacity.' },
        ],
        processing: [
          { title: 'Smelting Facilities', description: 'Modern smelting operations for copper, iron, and other metals with pollution control systems.' },
          { title: 'Refining Capacity', description: 'Development of mineral refining infrastructure for value-added processing before export.' },
          { title: 'Quality Control', description: 'Implementation of international quality standards and testing laboratories.' },
          { title: 'Crushing & Screening', description: 'Advanced mineral processing equipment for efficient ore preparation and concentration.' },
          { title: 'Tailings Management', description: 'Environmentally responsible tailings storage and treatment facilities.' },
          { title: 'Energy Systems', description: 'Renewable energy integration for sustainable mining and processing operations.' },
        ],
        research: [
          { title: 'Geological Survey', description: 'Comprehensive geological mapping and resource assessment across all provinces.' },
          { title: 'Core Drilling', description: 'Extensive exploration drilling programs to quantify mineral resources and reserves.' },
          { title: 'Laboratory Analysis', description: 'Modern analytical laboratories for mineral characterization and grade determination.' },
          { title: 'Data Management', description: 'Digital databases for geological data, exploration results, and resource estimates.' },
          { title: 'Academic Partnerships', description: 'Collaboration with international universities for geological research and training.' },
          { title: 'Technology Transfer', description: 'Programs to build local technical capacity in exploration and mining technologies.' },
        ],
        trade: [
          { title: 'Export Corridors', description: 'Development of efficient export routes through Pakistan, Iran, and Central Asian neighbors.' },
          { title: 'Trade Agreements', description: 'Bilateral and multilateral trade agreements to facilitate mineral exports.' },
          { title: 'Pricing Mechanisms', description: 'Transparent pricing based on international commodity markets and quality standards.' },
          { title: 'Logistics Infrastructure', description: 'Investment in roads, railways, and border facilities for mineral transport.' },
          { title: 'Market Diversification', description: 'Strategy to access diverse markets in Asia, Europe, and the Middle East.' },
          { title: 'Value Chain Development', description: 'Focus on increasing value addition before export through processing.' },
        ],
        sustainability: [
          { title: 'Environmental Protection', description: 'Strict environmental regulations and monitoring for mining operations.' },
          { title: 'Community Development', description: 'Revenue sharing and community development programs in mining areas.' },
          { title: 'Water Management', description: 'Sustainable water use and treatment in mining and processing operations.' },
          { title: 'Rehabilitation Plans', description: 'Mine closure and land rehabilitation requirements for all operations.' },
          { title: 'Health & Safety', description: 'International standards for worker health and safety in mining operations.' },
          { title: 'Climate Considerations', description: 'Integration of climate change considerations in mining planning.' },
        ],
      },
      iron: {
        title: 'Steel Foundation',
        subtitle: 'Industrial Base',
        description: 'The massive Hajigak iron ore deposit and 100 other major sites represent the foundation for Afghanistan\'s industrial future. With reserves exceeding 22 billion tons valued at $3.5 trillion, Afghanistan holds enough iron ore to supply global steel production for decades, potentially creating 500,000 direct jobs.',
        statsTitle: 'Iron Resources',
        statsSubtitle: 'Industrial Potential',
        detailTitle: 'Iron & Steel Development',
        detailSubtitle: 'Value Chain',
        detailDescription: 'Integrated development of iron ore mining and steel production to support national infrastructure and create employment.',
        processingTitle: 'Steel Production',
        processingSubtitle: 'Industrial Capacity',
        processingDescription: 'Development of integrated steel production facilities will transform Afghanistan\'s construction sector, reducing import dependence and creating thousands of industrial jobs in processing and manufacturing.',
      },
      rareEarth: {
        title: 'Strategic Elements',
        subtitle: 'Rare Earth Minerals',
        description: 'Critical rare earth elements essential for modern technology—from smartphones to electric vehicles to wind turbines—have been discovered across 40 major deposits in Afghanistan, with total estimated value of $5 trillion. This positions Afghanistan as the key player in global technology supply chains, capable of transforming the entire rare earth market landscape.',
        statsTitle: 'Rare Earth Potential',
        statsSubtitle: 'Technology Metals',
        detailTitle: 'Rare Earth Development',
        detailSubtitle: 'Technology Minerals',
        detailDescription: 'Strategic development of rare earth resources to support global technology industries and renewable energy transition.',
      },
      lapis: {
        title: 'Azure Legacy',
        subtitle: 'Lapis Lazuli',
        description: 'The ancient lapis lazuli mines of Badakhshan have supplied the world with this prized blue stone for over 6,000 years. Used in everything from the death mask of Tutankhamun to Renaissance masterpieces, Afghan lapis remains the world\'s finest.',
      },
      emerald: {
        title: 'Green Fire',
        subtitle: 'Panjshir Emeralds',
        description: 'The emeralds of Panjshir Valley are among the world\'s most prized gemstones, displaying exceptional color saturation and clarity. These stones, formed in metamorphic mica schists, command premium prices in international markets.',
      },
      ruby: {
        title: 'Corundum Treasures',
        subtitle: 'Ruby & Sapphire',
        description: 'Afghanistan produces exceptional rubies and sapphires from marble-hosted deposits in multiple provinces. The pigeon-blood rubies of Jegdalek and blue sapphires from the Hindu Kush rank among the world\'s finest corundum specimens.',
      },
      tourmaline: {
        title: 'Rainbow Crystals',
        subtitle: 'Tourmaline Varieties',
        description: 'Afghanistan produces some of the world\'s most spectacular tourmaline specimens, including rare watermelon and indicolite varieties sought by collectors and jewelers worldwide.',
      },
      aquamarine: {
        title: 'Sea Blue Crystals',
        subtitle: 'Aquamarine Treasures',
        description: 'The pegmatite fields of Kunar and Nuristan provinces yield exceptional aquamarine crystals, prized for their pure blue color and remarkable transparency that rivals specimens from any location worldwide.',
      },
      chromite: {
        title: 'Metallic Foundation',
        subtitle: 'Chromite Reserves',
        description: 'Essential for stainless steel production and industrial chemicals, Afghanistan\'s chromite deposits represent significant export potential and industrial development opportunities.',
        statsTitle: 'Chromite Resources',
        statsSubtitle: 'Industrial Metal',
      },
      marble: {
        title: 'Stone of Kings',
        subtitle: 'Marble & Granite',
        description: 'Afghan marble, renowned for its exceptional quality and diverse colors, graces architectural masterpieces worldwide. The nation\'s marble quarries produce stone that rivals the finest Italian and Turkish varieties.',
        statsTitle: 'Marble Resources',
        statsSubtitle: 'Premium Stone',
      },
      coal: {
        title: 'Energy Resources',
        subtitle: 'Coal Deposits',
        description: 'Significant coal reserves across multiple provinces provide energy security and support industrial development, with focus on clean coal technologies and responsible extraction practices.',
        statsTitle: 'Coal Resources',
        statsSubtitle: 'Energy Security',
      },
      industrial: {
        title: 'Industrial Foundation',
        subtitle: 'Construction & Manufacturing',
        description: 'Beyond precious metals and strategic minerals, Afghanistan possesses vast reserves of industrial minerals—marble, chromite, talc, and cement materials—essential for construction and manufacturing industries.',
        detailTitle: 'Industrial Minerals',
        detailSubtitle: 'Building Blocks',
        detailDescription: 'Development of industrial mineral resources to support domestic construction and manufacturing sectors.',
      },
      processing: {
        title: 'Value Addition',
        subtitle: 'Processing & Refining',
        description: 'Modern mineral processing infrastructure transforms raw ore into refined products, capturing value domestically and creating skilled employment opportunities across the mining value chain.',
        detailTitle: 'Processing Infrastructure',
        detailSubtitle: 'Industrial Capacity',
        detailDescription: 'Development of modern processing facilities for value addition and export competitiveness.',
      },
      research: {
        title: 'Knowledge Foundation',
        subtitle: 'Research & Exploration',
        description: 'Building scientific capacity for geological research, resource assessment, and mining technology development.',
        detailTitle: 'Research & Development',
        detailSubtitle: 'Scientific Excellence',
        detailDescription: 'Building scientific capacity for geological research, resource assessment, and mining technology development.',
      },
      trade: {
        title: 'Global Markets',
        subtitle: 'Trade & Export',
        description: 'Building export infrastructure and trade relationships to optimize mineral revenues.',
        detailTitle: 'Trade Development',
        detailSubtitle: 'Market Access',
        detailDescription: 'Building export infrastructure and trade relationships to optimize mineral revenues.',
      },
      sustainability: {
        title: 'Responsible Mining',
        subtitle: 'Sustainability',
        description: 'Integrating environmental protection, community benefit, and responsible governance in all mining operations.',
        detailTitle: 'Sustainable Development',
        detailSubtitle: 'Environmental & Social',
        detailDescription: 'Integrating environmental protection, community benefit, and responsible governance in all mining operations.',
      },
      cobaltNickel: {
        title: 'Battery Metal Future',
        subtitle: 'Cobalt & Nickel',
        description: 'Critical battery metals essential for electric vehicle production and energy storage systems, positioning Afghanistan in the global clean energy supply chain.',
      },
      nickel: {
        title: 'Nickel Laterites',
        subtitle: 'Strategic Deposits',
        description: 'Nickel laterite deposits provide essential materials for stainless steel and battery production, with growing demand from electric vehicle manufacturers driving strategic importance.',
      },
      uranium: {
        title: 'Energy Minerals',
        subtitle: 'Nuclear Resources',
        description: 'Strategic uranium deposits provide potential for nuclear energy development and position Afghanistan as a significant player in global energy mineral markets.',
      },
      talc: {
        title: 'Industrial Purity',
        subtitle: 'Talc & Minerals',
        description: 'High-purity talc deposits support global cosmetics, pharmaceuticals, and industrial applications. Afghanistan\'s talc resources rank among the world\'s most significant.',
      },
      barite: {
        title: 'Drilling Essential',
        subtitle: 'Barite Production',
        description: 'High-quality barite for oil and gas drilling applications, with growing demand from regional energy industries creating significant export opportunities.',
      },
      salt: {
        title: 'White Gold',
        subtitle: 'Salt Deposits',
        description: 'Extensive rock salt and evaporite deposits supporting food processing, chemical industries, and traditional markets across the region.',
      },
      cement: {
        title: 'Building Blocks',
        subtitle: 'Cement Materials',
        description: 'Abundant limestone and clay deposits support domestic cement production, essential for national reconstruction and infrastructure development across all provinces.',
      },
      leadZinc: {
        title: 'Base Metals Foundation',
        subtitle: 'Lead & Zinc',
        description: 'Significant lead and zinc deposits across multiple provinces support industrial development and provide essential materials for construction, automotive, and manufacturing sectors.',
      },
      smelting: {
        title: 'Metal Transformation',
        subtitle: 'Smelting Operations',
        description: 'Modern smelting facilities transform raw ore into refined metals, creating industrial capacity and skilled employment while capturing value domestically.',
      },
      beneficiation: {
        title: 'Ore Processing',
        subtitle: 'Beneficiation Plants',
        description: 'Advanced mineral beneficiation facilities concentrate ore and improve grade before export, maximizing value and reducing transportation costs.',
      },
      laboratory: {
        title: 'Scientific Excellence',
        subtitle: 'Analysis & Testing',
        description: 'State-of-the-art laboratory facilities for mineral characterization, quality control, and research supporting both exploration and production operations.',
      },
      // (research defined above with detail fields)
      geologicalSurveys: {
        title: 'Mapping the Future',
        subtitle: 'Geological Surveys',
        description: 'Systematic geological surveys across all 34 provinces reveal the full extent of Afghanistan\'s mineral wealth, guiding exploration investment and development planning.',
      },
      exploration: {
        title: 'Discovery Frontiers',
        subtitle: 'Exploration Programs',
        description: 'Systematic geological exploration programs continue to discover new deposits, expand known resources, and unlock the full potential of Afghanistan\'s mineral wealth.',
      },
      dataSystems: {
        title: 'Digital Intelligence',
        subtitle: 'Data Management',
        description: 'Modern digital systems manage geological data, monitor operations in real-time, and enable data-driven decision making across the mining sector.',
      },
      operationsControl: {
        title: 'Operations Command',
        subtitle: 'Real-Time Monitoring',
        description: 'Advanced control room facilities enable real-time monitoring of mining operations, fleet management, and safety systems across all major mineral extraction sites.',
      },
      globalMarkets: {
        title: 'Global Markets',
        subtitle: 'Trade & Export',
        description: 'Strategic development of export corridors and trade relationships to connect Afghan minerals with global markets, maximizing value and ensuring fair pricing.',
      },
      investmentFramework: {
        title: 'Investment Framework',
        subtitle: 'Capital Deployment',
        description: 'A transparent and competitive investment framework attracts responsible international mining companies, technology providers, and financial institutions to develop Afghanistan\'s mineral sector.',
      },
      partnerships: {
        title: 'Global Alliance',
        subtitle: 'International Partnerships',
        description: 'Strategic partnerships with international mining companies, technology providers, and financial institutions bring expertise, investment, and market access to Afghanistan\'s mineral sector.',
      },
      tradeRoutes: {
        title: 'Trade Routes',
        subtitle: 'Export Corridors',
        description: 'Development of efficient export corridors through neighboring countries connects Afghan minerals to global markets via rail, road, and maritime routes.',
      },
      logistics: {
        title: 'Logistics Excellence',
        subtitle: 'Fleet Operations',
        description: 'Modern mining truck fleets and logistics systems ensure efficient movement of ore from pit to processing plant, maximizing productivity and operational efficiency.',
      },
      stockyards: {
        title: 'Strategic Reserves',
        subtitle: 'Ore Stockyards',
        description: 'Massive ore stockyards provide buffer capacity for mining operations, enabling continuous processing and optimizing the supply chain from extraction to export.',
      },
      blasting: {
        title: 'Precision Extraction',
        subtitle: 'Controlled Blasting',
        description: 'Modern controlled blasting techniques maximize ore recovery while minimizing environmental impact, ensuring safe and efficient extraction across all open-pit operations.',
      },
      conveyor: {
        title: 'Material Flow',
        subtitle: 'Conveyor Systems',
        description: 'Extensive conveyor systems move thousands of tons of ore daily from pit to processing plant, replacing truck haulage and reducing operational costs and emissions.',
      },
      provincialResources: {
        title: 'Provincial Resources',
        subtitle: 'Geographic Distribution',
        description: 'Distribution of mineral resources across Afghanistan\'s 34 provinces.',
      },
      logar: {
        title: 'Copper Heartland',
        subtitle: 'Logar Province',
        description: 'Home to the legendary Mes Aynak deposit, Logar Province represents the epicenter of Afghanistan\'s copper industry with reserves valued in the trillions of dollars.',
      },
      badakhshan: {
        title: 'Gemstone Kingdom',
        subtitle: 'Badakhshan Province',
        description: 'The ancient gemstone province of Badakhshan has supplied the world with lapis lazuli for six millennia and continues to yield emeralds, rubies, and other precious stones.',
      },
      bamyan: {
        title: 'Iron Mountain',
        subtitle: 'Bamyan Province',
        description: 'Bamyan\'s spectacular landscape conceals the massive Hajigak iron deposit—one of Asia\'s largest—alongside significant copper and coal reserves awaiting development.',
      },
      panjshir: {
        title: 'Emerald Valley',
        subtitle: 'Panjshir Province',
        description: 'The dramatic gorges of Panjshir Valley harbor some of the world\'s finest emerald deposits, producing gems that rival Colombian and Zambian stones in color and quality.',
      },
      ghazni: {
        title: 'Lithium Belt',
        subtitle: 'Ghazni Province',
        description: 'Ghazni Province hosts significant lithium-bearing pegmatites that could position Afghanistan as a major supplier of battery metals for the global electric vehicle revolution.',
      },
      helmand: {
        title: 'Strategic Resources',
        subtitle: 'Helmand Province',
        description: 'Helmand\'s arid landscapes overlie significant rare earth element deposits and uranium mineralization, representing strategic resources for technology and energy sectors.',
      },
      greenMining: {
        title: 'Green Mining',
        subtitle: 'Environmental Protection',
        description: 'Commitment to environmental stewardship ensures that mining operations protect water resources, minimize land disturbance, and rehabilitate sites after closure.',
      },
      community: {
        title: 'Shared Prosperity',
        subtitle: 'Community Development',
        description: 'Mining development brings infrastructure, employment, and social services to remote communities, transforming rural economies and improving quality of life across resource-rich regions.',
      },
      safety: {
        title: 'Zero Harm',
        subtitle: 'Health & Safety',
        description: 'International safety standards protect workers and communities, with comprehensive training programs, modern equipment, and rigorous safety protocols across all operations.',
      },
      workforce: {
        title: 'Building Capacity',
        subtitle: 'Workforce Development',
        description: 'Comprehensive training programs develop the skilled workforce needed for modern mining operations, creating career opportunities and building technical capacity across all provinces.',
      },
      infrastructure: {
        title: 'Mining Infrastructure',
        subtitle: 'Operational Facilities',
        description: 'Modern mining camps and infrastructure provide safe, comfortable facilities for workers at remote sites, supporting efficient 24-hour operations across all major projects.',
      },
      mesAynakLegacy: {
        title: 'Mes Aynak Legacy',
        subtitle: 'Archaeological Heritage',
        description: 'The Mes Aynak copper deposit sits atop one of the world\'s most significant Buddhist archaeological sites. Development plans carefully balance mineral extraction with preservation of 2,000-year-old monasteries, stupas, and artifacts.',
      },
      copperOpenPit: {
        title: 'Copper Mega Operations',
        subtitle: 'Open-Pit Mining',
        description: 'Massive open-pit copper operations utilize terraced extraction methods, moving millions of tons of ore annually with fleets of 400-ton haul trucks operating around the clock in Afghanistan\'s dramatic mountain landscapes.',
      },
      moltenCopper: {
        title: 'Molten Copper',
        subtitle: 'Smelting Operations',
        description: 'State-of-the-art copper smelting furnaces transform concentrated ore into 99.9% pure copper cathodes. Molten copper at 1,200°C flows through precision-controlled processes to create export-ready refined metal.',
      },
      spodumeneCrystals: {
        title: 'Spodumene Crystals',
        subtitle: 'Battery Metal Source',
        description: 'Lithium-bearing spodumene crystals from Afghan pegmatites contain up to 8% lithium oxide—among the highest grades globally. These prismatic crystals form the foundation of the electric vehicle revolution\'s battery supply chain.',
      },
      deepGoldMining: {
        title: 'Deep Gold Mining',
        subtitle: 'Underground Operations',
        description: 'Modern underground gold mining operations access high-grade ore bodies deep within mountain formations. LED-illuminated tunnels reveal gold-bearing quartz veins as extraction crews work with precision equipment.',
      },
      goldRefining: {
        title: 'Gold Refining',
        subtitle: 'Precious Metal Processing',
        description: 'Gold refinery operations transform raw ore into investment-grade bullion. Molten gold pours into precision molds, creating 99.99% pure bars destined for international markets and central bank reserves.',
      },
      panjshirEmeraldCrystals: {
        title: 'Panjshir Emerald Crystals',
        subtitle: 'World-Class Specimens',
        description: 'Raw emerald crystals from Panjshir Valley display exceptional color saturation and clarity. These hexagonal gems, embedded in their original mica schist matrix, command premium prices in international gemological markets.',
      },
      hajigakIronMountain: {
        title: 'Hajigak Iron Mountain',
        subtitle: 'Asia\'s Largest Deposit',
        description: 'The massive Hajigak iron ore deposit in Bamyan Province contains an estimated 2.2 billion tons of high-grade iron ore. This red-brown mountain represents the foundation of Afghanistan\'s industrial steel future.',
      },
      lapisAncientMines: {
        title: '6,000 Years of Azure',
        subtitle: 'Ancient Lapis Mines',
        description: 'The ancient lapis lazuli mines of Badakhshan have operated continuously for six millennia. Blue-streaked rock faces reveal the source of the ultramarine pigment that colored Renaissance masterpieces and Egyptian royal burial chambers.',
      },
      jegdalekRubies: {
        title: 'Jegdalek Rubies',
        subtitle: 'Pigeon-Blood Excellence',
        description: 'The Jegdalek ruby deposits produce some of the world\'s finest pigeon-blood rubies—deep red gems with exceptional clarity and fluorescence that rival Burmese stones in quality and command premium auction prices.',
      },
      hinduKushSapphires: {
        title: 'Hindu Kush Sapphires',
        subtitle: 'Cornflower Blue Treasures',
        description: 'The Hindu Kush mountain range yields exceptional cornflower blue sapphires from marble-hosted deposits. These corundum gems display the prized velvety blue color sought by collectors and jewelry houses worldwide.',
      },
      nuristanTourmaline: {
        title: 'Nuristan Tourmaline',
        subtitle: 'Rainbow Crystals',
        description: 'Nuristan Province produces spectacular tourmaline specimens including rare watermelon varieties with pink centers and green rims, alongside sought-after indicolite blue and rubellite pink crystals.',
      },
      kunarAquamarine: {
        title: 'Kunar Aquamarine',
        subtitle: 'Sea Blue Beryl',
        description: 'The pegmatite fields of Kunar Province yield exceptional aquamarine crystals—pale sea-blue hexagonal gems on white feldspar matrix that rival specimens from any location worldwide in clarity and color intensity.',
      },
      strategicREEConcentrate: {
        title: 'Strategic REE Concentrate',
        subtitle: 'Technology Metals',
        description: 'Rare earth element concentrates from Afghan deposits contain critical materials essential for smartphones, wind turbines, and electric vehicles. Laboratory analysis reveals 17 distinct REE species with exceptional purity levels.',
      },
      chromiteExportOperations: {
        title: 'Chromite Export Operations',
        subtitle: 'Industrial Metal Trade',
        description: 'Massive chromite ore stockpiles await export to international stainless steel manufacturers. Industrial loading equipment processes thousands of tons daily, feeding global demand for this essential metallurgical material.',
      },
      premiumWhiteMarble: {
        title: 'Premium White Marble',
        subtitle: 'Architectural Stone',
        description: 'Afghanistan\'s pristine white marble quarries produce stone that rivals Italian Carrara in quality. Massive blocks with subtle gray veining are extracted for architectural projects and sculptural works worldwide.',
      },
      undergroundCoalOperations: {
        title: 'Underground Coal Operations',
        subtitle: 'Energy Security',
        description: 'Modern underground coal mining operations access thick seams of metallurgical-grade coal. Continuous miners work 24-hour shifts extracting the energy resources that power domestic industries and infrastructure development.',
      },
      processingPlantOperations: {
        title: 'Processing Plant Operations',
        subtitle: 'Value Addition',
        description: 'Inside modern mineral processing facilities, conveyor systems move crushed ore through flotation cells, gravity separators, and magnetic concentrators. Skilled operators monitor every stage of the beneficiation process.',
      },
      coreSampleAnalysis: {
        title: 'Core Sample Analysis',
        subtitle: 'Geological Intelligence',
        description: 'Geological core samples arranged in wooden boxes reveal the subsurface wealth of Afghan mineral deposits. Colorful ore zones showing copper, gold, and rare earth mineralization guide exploration and development decisions.',
      },
      explorationDrilling: {
        title: 'Exploration Drilling',
        subtitle: 'Discovery Operations',
        description: 'Diamond drilling rigs on remote mountain sites extract cylindrical core samples that reveal the geology hundreds of meters below. Exploration crews work against dramatic Hindu Kush backdrops to map new mineral discoveries.',
      },
      surveyOperations: {
        title: 'Survey Operations',
        subtitle: 'Mapping Afghanistan\'s Wealth',
        description: 'Geological survey teams use satellite positioning equipment and advanced mapping tools on mountain ridges across Afghanistan. Their systematic work reveals the full extent of the nation\'s mineral resources across all 34 provinces.',
      },
      operationsCommandCenter: {
        title: 'Operations Command Center',
        subtitle: 'Digital Mining Intelligence',
        description: 'Modern mining control centers feature wall-to-wall screens displaying real-time satellite imagery, fleet telemetry, and production data. Operators monitor every aspect of mining operations from centralized command facilities.',
      },
      railwayExportHub: {
        title: 'Railway Export Hub',
        subtitle: 'Trade Infrastructure',
        description: 'Strategic railway terminals connect Afghan mineral production to international markets. Freight cars loaded with ore containers move through modern logistics facilities equipped with cranes and container handling systems.',
      },
      investmentConferences: {
        title: 'Investment Conferences',
        subtitle: 'Global Capital Attraction',
        description: 'International mining investment conferences bring together government officials, mining executives, and financial institutions. Presentations featuring geological data and investment metrics guide capital deployment decisions.',
      },
      landRestoration: {
        title: 'Land Restoration',
        subtitle: 'Environmental Commitment',
        description: 'Progressive rehabilitation transforms former mining sites into productive landscapes. Revegetation programs establish native plant communities, restoring ecosystems and creating sustainable land use after extraction operations conclude.',
      },
      educationPrograms: {
        title: 'Education Programs',
        subtitle: 'Community Investment',
        description: 'Mining-funded schools bring modern educational facilities to remote communities. Children study in purpose-built classrooms, gaining the skills needed to participate in Afghanistan\'s growing technical workforce and mineral economy.',
      },
      nangarharResources: {
        title: 'Nangarhar Resources',
        subtitle: 'Eastern Gateway',
        description: 'Nangarhar Province, bordering Pakistan, hosts significant chromite deposits and gemstone occurrences. Its strategic location near the Khyber Pass provides efficient export access to international markets.',
      },
      balkhMineralBelt: {
        title: 'Balkh Mineral Belt',
        subtitle: 'Northern Resources',
        description: 'Ancient Balkh Province in northern Afghanistan contains significant copper, gold, and industrial mineral deposits. The region\'s flat terrain facilitates large-scale mining operations and infrastructure development.',
      },
      kunduzMiningDistrict: {
        title: 'Kunduz Mining District',
        subtitle: 'Agricultural & Mineral Hub',
        description: 'Kunduz Province combines agricultural wealth with significant mineral potential including salt deposits, construction materials, and base metals that support regional development and infrastructure projects.',
      },
      faryabResources: {
        title: 'Faryab Resources',
        subtitle: 'Northwestern Potential',
        description: 'Faryab Province in northwestern Afghanistan hosts industrial mineral deposits including marble, granite, and construction aggregates. Development of these resources supports national infrastructure programs.',
      },
      digitalTransformation: {
        title: 'Digital Transformation',
        subtitle: 'Industry 4.0 Mining',
        description: 'Advanced digital technologies transform mining operations with real-time monitoring, predictive maintenance, and autonomous equipment. Data-driven decision making optimizes extraction efficiency and safety across all operations.',
      },
      miningInnovation: {
        title: 'Mining Innovation',
        subtitle: 'Technology Leadership',
        description: 'Research and development centers pioneer new extraction technologies, sustainable processing methods, and environmental solutions. Innovation drives competitive advantage and positions Afghanistan at the forefront of modern mining practices.',
      },
      waterStewardship: {
        title: 'Water Stewardship',
        subtitle: 'Resource Conservation',
        description: 'Comprehensive water management programs ensure sustainable use of water resources in mining operations. Recycling systems, treatment facilities, and monitoring networks protect local water sources and downstream communities.',
      },
      timeline: {
        sectionTitle: 'Development Roadmap',
        sectionSubtitle: 'Strategic Timeline',
        year2024: { title: 'National Mineral Strategy Launch', description: 'Comprehensive national strategy for sustainable mineral development and export optimization.' },
        year2025: { title: 'Geological Survey Completion', description: 'Completion of detailed geological surveys across all 34 provinces with resource quantification.' },
        year2026: { title: 'Processing Infrastructure', description: 'Inauguration of first modern copper and lithium processing facilities.' },
        year2027: { title: 'Railway Development', description: 'Completion of mineral railway connecting major deposits to export terminals.' },
        year2028: { title: 'Export Corridor Development', description: 'Completion of major transport infrastructure connecting mining regions to export points.' },
        year2029: { title: 'Smelting Operations', description: 'Launch of first integrated smelting facilities for copper and iron processing.' },
        year2030: { title: 'Production Scaling', description: 'Achievement of significant mineral production targets with full environmental compliance.' },
        year2032: { title: 'Lithium Production', description: 'Commercial lithium production for global battery markets begins.' },
        year2035: { title: 'Value Chain Maturity', description: 'Establishment of comprehensive mineral value chains from extraction to finished products.' },
      },
      vision2030: {
        title: 'Vision 2026-2050',
        subtitle: 'Future Horizons',
        description: 'By 2050, Afghanistan will be a globally recognized mining nation with sustainable operations, value-added processing, and mineral wealth shared equitably among all citizens. A 25-year transformation powering national prosperity.',
      },
      finalQuote: {
        quote: 'The minerals beneath our mountains are not just resources—they are the foundation upon which we will build a prosperous, self-reliant Afghanistan for generations to come.',
      },
      buildingTomorrow: {
        title: 'Building Tomorrow',
        subtitle: 'The Future',
        description: 'Afghanistan\'s mineral wealth represents an unprecedented opportunity for economic transformation. Through sustainable development, international partnership, and responsible governance, these resources will power national prosperity for generations.',
      },
      nationalLegacy: {
        title: 'National Legacy',
        subtitle: 'Generations to Come',
        description: 'The responsible development of Afghanistan\'s mineral resources will create lasting prosperity, preserve natural heritage, and secure economic independence for future generations of Afghans.',
      },
      provinces: {
        kandahar: { title: 'Kandahar Province', subtitle: 'Southern Gateway', description: 'Kandahar Province serves as Afghanistan\'s southern gateway for mineral exports. Rich in gold, copper, and chromite deposits, the province offers strategic access to regional markets through established trade corridors and modern infrastructure development.' },
        herat: { title: 'Herat Province', subtitle: 'Western Resources', description: 'Herat\'s ancient marble quarries and iron ore deposits represent centuries of mining heritage. The province\'s proximity to Iran and Central Asian markets positions it as a key export hub for processed mineral products.' },
        nuristan: { title: 'Nuristan Province', subtitle: 'Lithium Frontier', description: 'The mountainous terrain of Nuristan harbors some of the world\'s largest lithium-bearing pegmatite deposits. These critical minerals are essential for global clean energy transition and electric vehicle manufacturing.' },
        kunar: { title: 'Kunar Province', subtitle: 'Gemstone Valley', description: 'Kunar\'s dramatic river valleys yield exceptional aquamarine, tourmaline, and other precious gemstones. The province\'s artisanal mining tradition combines with modern techniques to extract world-class specimens.' },
        ghazni: { title: 'Ghazni Province', subtitle: 'Strategic Reserves', description: 'Ghazni Province contains significant lithium, copper, and iron ore deposits. Ancient Buddhist heritage sites coexist with modern geological surveys mapping the region\'s vast mineral potential.' },
        helmand: { title: 'Helmand Province', subtitle: 'Desert Treasures', description: 'Beneath Helmand\'s desert landscape lie substantial copper and gold deposits. Modern exploration techniques have revealed extensive mineralization zones with significant investment potential.' },
        faryab: { title: 'Faryab Province', subtitle: 'Northern Chromite', description: 'Faryab\'s chromite deposits supply essential raw materials for stainless steel production. The northern steppes conceal rich mineral formations with established extraction operations.' },
        jowzjan: { title: 'Jowzjan Province', subtitle: 'Salt & Gas', description: 'Jowzjan Province combines natural gas production with extensive salt mining operations. Industrial mineral processing facilities serve domestic and regional markets.' },
        takhar: { title: 'Takhar Province', subtitle: 'Golden Rivers', description: 'Takhar\'s river systems have yielded alluvial gold for centuries. Modern artisanal mining combines traditional panning techniques with improved recovery methods for sustainable extraction.' },
        samangan: { title: 'Samangan Province', subtitle: 'Talc Mining', description: 'Samangan\'s talc deposits near ancient Buddhist caves produce high-grade industrial minerals. The famous Takht-e-Rostam monastery overlooks modern mining operations.' },
        baghlan: { title: 'Baghlan Province', subtitle: 'Coal Basin', description: 'Baghlan\'s coal basins provide essential energy resources for domestic industry. Underground mining operations extract high-quality metallurgical and thermal coal.' },
        parwan: { title: 'Parwan Province', subtitle: 'Salang Gateway', description: 'Parwan Province, gateway to the Salang Pass, contains iron ore and copper deposits. Strategic location connects northern and southern mineral regions.' },
        laghman: { title: 'Laghman Province', subtitle: 'Barite Extraction', description: 'Laghman\'s barite deposits serve the oil drilling industry. Agricultural valleys meet mineral-rich mountains in this diverse eastern province.' },
        kapisa: { title: 'Kapisa Province', subtitle: 'Hidden Gems', description: 'Kapisa\'s mountain caves yield precious gemstones including tourmaline and kunzite. Traditional mining families preserve centuries-old extraction knowledge.' },
        wardak: { title: 'Wardak Province', subtitle: 'Hajigak Iron', description: 'Wardak hosts the legendary Hajigak iron ore deposit—one of the largest undeveloped iron reserves in Asia. The massive deposit contains over 2.2 billion metric tons of high-grade ore.' },
        zabul: { title: 'Zabul Province', subtitle: 'Rare Earth Survey', description: 'Geological surveys in Zabul Province have identified promising rare earth element concentrations. These strategic minerals are essential for advanced technology manufacturing.' },
        paktya: { title: 'Paktya Province', subtitle: 'Forested Minerals', description: 'Paktya\'s pine-covered mountains conceal chromite and copper deposits. Sustainable mining practices protect the province\'s unique forest ecosystems.' },
        khost: { title: 'Khost Province', subtitle: 'Cement Industry', description: 'Khost\'s limestone quarries feed modern cement manufacturing facilities. Industrial development creates employment while supporting national construction needs.' },
        daykundi: { title: 'Daykundi Province', subtitle: 'Alpine Marble', description: 'Daykundi\'s high-altitude quarries produce distinctive pink and cream marble. Remote mountain locations yield premium stone for international export markets.' },
        uruzgan: { title: 'Uruzgan Province', subtitle: 'Remote Exploration', description: 'Uruzgan\'s rugged terrain has revealed copper and gold deposits through modern exploration drilling. Remote operations demonstrate commitment to comprehensive resource assessment.' },
        ghor: { title: 'Ghor Province', subtitle: 'Minaret of Jam', description: 'Ghor Province, home to the UNESCO-listed Minaret of Jam, balances heritage preservation with mineral development. Careful exploration protects cultural sites while assessing resource potential.' },
        farah: { title: 'Farah Province', subtitle: 'Western Iron', description: 'Farah\'s iron ore deposits along the Iranian border represent significant development potential. Western highway connections facilitate future export logistics.' },
        nimroz: { title: 'Nimroz Province', subtitle: 'Desert Gold', description: 'Nimroz Province\'s Registan Desert conceals gold deposits at the junction of rocky outcrops and sand dunes. Extreme conditions challenge but don\'t prevent modern exploration.' },
        sarEPul: { title: 'Sar-e-Pul Province', subtitle: 'Energy & Minerals', description: 'Sar-e-Pul Province combines natural gas production with diverse mineral extraction. Industrial facilities process raw materials for domestic markets.' },
      },
      // Technology Sections
      autonomousMining: { title: 'Autonomous Mining Fleet', subtitle: 'Industry 4.0', description: 'Next-generation autonomous haul trucks and drilling systems operate 24/7 with AI-powered navigation. These 400-ton vehicles move 50,000+ tons of ore daily, maximizing productivity while ensuring zero-harm safety records across all major extraction sites.' },
      satelliteMapping: { title: 'Satellite Resource Mapping', subtitle: 'Remote Sensing Technology', description: 'Advanced satellite imagery and hyperspectral scanning reveal mineral signatures across 652,000 square kilometers of Afghan territory. AI algorithms analyze geological features to identify 10,000+ potential deposit locations for ground verification.' },
      droneSurveys: { title: 'Aerial Survey Operations', subtitle: 'Drone Mapping Technology', description: 'Autonomous drone fleets conduct high-resolution topographic surveys and magnetometer sweeps across remote mountain terrain. 500+ drones map 10,000 hectares daily, generating centimeter-accurate 3D terrain models for mine planning.' },
      deepCoreDrilling: { title: 'Deep Core Drilling Programs', subtitle: 'Subsurface Exploration', description: 'Diamond drilling operations extract core samples from depths exceeding 2,000 meters, revealing the full extent of mineral formations. 200+ drilling rigs operate simultaneously across all 34 provinces, defining 50+ billion tons of new resources annually.' },
      geophysicalSurveys: { title: 'Geophysical Survey Networks', subtitle: 'Electromagnetic Mapping', description: 'Ground-penetrating radar and electromagnetic surveys map subsurface geology across 100,000+ line-kilometers annually. These technologies reveal hidden ore bodies, fault structures, and water resources critical for mine development.' },
      flotationProcessing: { title: 'Flotation Processing Plants', subtitle: 'Ore Concentration', description: 'State-of-the-art flotation cells process 500,000 tons of ore daily, using advanced froth flotation technology to achieve 95%+ mineral recovery rates. 50 processing plants across the nation create thousands of skilled technical jobs.' },
      hydrometallurgical: { title: 'Hydrometallurgical Facilities', subtitle: 'Chemical Processing', description: 'Advanced hydrometallurgical plants use environmentally responsible leaching processes to extract copper, gold, and rare earth elements. Closed-loop water systems ensure zero discharge while achieving 99.9% metal purity levels.' },
      electrorefining: { title: 'Electrorefining Excellence', subtitle: 'Metal Purification', description: 'Massive electrorefining facilities purify copper to 99.99% cathode grade, producing 1 million tons of refined copper annually. These facilities represent $50 billion in infrastructure investment and employ 100,000+ workers.' },
      slagProcessing: { title: 'Slag Reprocessing Operations', subtitle: 'Zero Waste Mining', description: 'Historic slag heaps containing valuable metals undergo reprocessing to extract gold, silver, and copper left behind by ancient extraction methods. 100+ reprocessing plants recover $10 billion in metals from legacy mining sites.' },
      miningRailways: { title: 'Mining Railway Networks', subtitle: 'Bulk Transport Infrastructure', description: '5,000 kilometers of heavy-haul railway connect major mining districts to export terminals. Unit trains of 200+ ore cars transport 100 million tons annually, reducing transport costs by 75% compared to truck haulage.' },
      conveyorSystems: { title: 'Overland Conveyor Systems', subtitle: 'Continuous Material Flow', description: '500 kilometers of overland conveyor systems transport ore from pit to processing plant at rates exceeding 20,000 tons per hour. These systems operate 24/7 with 99.5% availability, replacing thousands of haul truck movements.' },
      powerInfrastructure: { title: 'Mining Power Grid', subtitle: 'Energy Infrastructure', description: '5,000 megawatts of dedicated power generation capacity—including solar, hydro, and gas—supplies energy to mining operations. Underground transmission lines connect remote sites to the national grid, ensuring 99.9% power reliability.' },
      waterInfrastructure: { title: 'Water Supply Systems', subtitle: 'Sustainable Water Management', description: 'Massive water recycling systems reclaim 95% of process water, reducing freshwater consumption to world-leading levels. 100+ treatment plants ensure zero contamination of local water resources, protecting community water supplies.' },
      portFacilities: { title: 'Export Port Facilities', subtitle: 'Maritime Trade Access', description: 'Strategic partnerships with Pakistan, Iran, and Turkmenistan provide access to deep-water ports capable of handling 200+ million tons of mineral exports annually. Dedicated mineral terminals feature automated ship-loading systems.' },
      miningUniversity: { title: 'National Mining University', subtitle: 'Technical Education', description: 'Afghanistan\'s National Mining University trains 10,000 mining engineers and geoscientists annually. World-class laboratories and research facilities position graduates for leadership roles in the nation\'s mineral industry.' },
      geologicalInstitute: { title: 'Geological Survey Institute', subtitle: 'Scientific Excellence', description: 'The National Geological Survey Institute conducts systematic resource assessments across all 34 provinces. 1,000+ geoscientists maintain the world\'s most comprehensive mineral database, guiding $100 billion in exploration investment.' },
      metallurgicalResearch: { title: 'Metallurgical Research Center', subtitle: 'Processing Innovation', description: 'Cutting-edge metallurgical laboratories develop new extraction technologies optimized for Afghan ores. Research breakthroughs have improved recovery rates by 30% while reducing energy consumption by 40% across all processing operations.' },
      environmentalResearch: { title: 'Environmental Research Institute', subtitle: 'Sustainable Solutions', description: 'Dedicated environmental research facilities develop world-leading solutions for mine rehabilitation, water treatment, and biodiversity protection. 500+ scientists ensure mining operations exceed international environmental standards.' },
      // Economic Impact
      economicTransformation: { title: 'Economic Transformation', subtitle: '$30 Trillion Impact', description: 'Mineral development will increase Afghanistan\'s GDP by 2,000% over the next 20 years. $30 trillion in mineral wealth translates to $1.5 trillion annually in economic activity, transforming Afghanistan into Central Asia\'s economic powerhouse.' },
      employmentRevolution: { title: 'Employment Revolution', subtitle: '5 Million Jobs', description: 'Direct mining employment will exceed 2 million positions, with an additional 3 million jobs in processing, logistics, and support industries. Average mining wages of $30,000 annually will create a prosperous middle class.' },
      regionalDevelopment: { title: 'Regional Development Zones', subtitle: 'Transforming Provinces', description: '50 Special Economic Development Zones around major mining operations transform remote provinces into thriving industrial centers. New cities housing 5 million people will emerge around the nation\'s mineral wealth.' },
      exportRevenue: { title: 'Export Revenue Growth', subtitle: 'Trade Transformation', description: 'Mineral exports will generate $200 billion annually by 2050, positioning Afghanistan among the world\'s top 10 mineral exporters. Strategic trade relationships with 100+ countries ensure market access and fair pricing.' },
      governmentRevenue: { title: 'Government Revenue', subtitle: 'Fiscal Transformation', description: 'Mining royalties and taxes will generate $50 billion annually for government services, education, healthcare, and infrastructure. A transparent Mineral Development Fund ensures benefits reach all 40 million Afghan citizens.' },
      foreignInvestment: { title: 'Foreign Direct Investment', subtitle: '$500 Billion Inflows', description: 'International mining companies have committed $500 billion in exploration and development investment through 2050. Strategic partnerships with leading global miners bring world-class expertise and technology to Afghan operations.' },
      domesticInvestment: { title: 'Domestic Investment Growth', subtitle: 'Afghan Entrepreneurship', description: 'Afghan mining entrepreneurs operate 10,000+ licensed mining operations ranging from artisanal gemstone mines to industrial-scale processing facilities. Domestic investment in the sector exceeds $100 billion.' },
      miningFinance: { title: 'Mining Finance Hub', subtitle: 'Capital Markets', description: 'The Kabul Mining Exchange facilitates $50 billion in annual mining investment, with 200+ publicly traded mining companies. Access to global capital markets ensures competitive financing for projects of all scales.' },
      miningInsurance: { title: 'Mining Insurance & Risk', subtitle: 'Financial Protection', description: 'Comprehensive mining insurance programs protect $500 billion in assets and operations. International reinsurance partnerships ensure coverage for all operational, environmental, and political risks in the sector.' },
      // Sustainability Expansion
      carbonNeutral: { title: 'Carbon Neutral Mining', subtitle: 'Climate Leadership', description: 'Afghanistan\'s mining sector will achieve carbon neutrality by 2050 through renewable energy, electric vehicles, and carbon capture technologies. 10 gigawatts of solar and wind power eliminate fossil fuel dependence.' },
      biodiversityProtection: { title: 'Biodiversity Conservation', subtitle: 'Ecosystem Protection', description: '100,000 hectares of protected biodiversity corridors surround major mining operations. Wildlife monitoring programs protect snow leopards, Marco Polo sheep, and other endangered species unique to Afghan mountain ecosystems.' },
      mineClosure: { title: 'Progressive Rehabilitation', subtitle: 'Land Restoration', description: '$10 billion in mine closure funds ensure all operations are progressively rehabilitated during and after mining. Restored landscapes support agriculture, forestry, and tourism, creating lasting value for local communities.' },
      circularEconomy: { title: 'Circular Economy Mining', subtitle: 'Zero Waste Operations', description: 'Advanced processing technologies ensure 99% of all extracted materials find productive use. Mining waste becomes construction aggregate, agricultural amendments, or feedstock for secondary processing operations.' },
      // Social Impact
      // educationPrograms already defined above
      healthcareFacilities: { title: 'Community Healthcare', subtitle: 'Medical Infrastructure', description: '50 modern hospitals and 500 clinics in mining regions provide free healthcare to 10 million people. Mining company health programs have reduced infant mortality by 90% and increased life expectancy by 15 years.' },
      womensEmployment: { title: 'Women in Mining', subtitle: 'Gender Equality', description: 'Women comprise 30% of the mining workforce, from geologists to equipment operators to executive leadership. Women-owned businesses supply 40% of mining services, creating economic independence for millions of Afghan women.' },
      artisanalIntegration: { title: 'Artisanal Miner Support', subtitle: 'Formalization Programs', description: '500,000 artisanal miners receive training, equipment, and market access through formalization programs. Fair-trade certification ensures artisanal products receive premium prices in international markets.' },
      // Technology Innovation
      aiMining: { title: 'AI-Powered Mining', subtitle: 'Artificial Intelligence', description: 'Artificial intelligence systems optimize every aspect of mining operations, from geological modeling to equipment maintenance to supply chain logistics. AI reduces operating costs by 40% while improving safety records by 80%.' },
      robotics: { title: 'Mining Robotics', subtitle: 'Autonomous Systems', description: '10,000+ autonomous robots perform dangerous underground tasks including drilling, blasting, and ore extraction. Human operators supervise from surface control rooms, eliminating underground fatalities entirely.' },
      digitalTwins: { title: 'Digital Twin Operations', subtitle: 'Virtual Mining', description: 'Complete digital replicas of every mining operation enable real-time optimization and predictive maintenance. Operators can simulate extraction scenarios, optimizing efficiency before implementing changes in physical operations.' },
      blockchainSupply: { title: 'Blockchain Traceability', subtitle: 'Supply Chain Transparency', description: 'Blockchain technology tracks every gram of Afghan minerals from extraction to end product. Consumers and manufacturers can verify ethical sourcing, conflict-free status, and environmental compliance with complete transparency.' },
      // Global Partnerships
      chinaPartnership: { title: 'China Strategic Partnership', subtitle: 'Belt & Road Integration', description: 'Strategic partnership with China brings $200 billion in infrastructure investment, connecting Afghan mineral deposits to Asian manufacturing centers. New railways and highways integrate Afghanistan into global supply chains.' },
      europePartnership: { title: 'European Union Cooperation', subtitle: 'Technology Transfer', description: 'EU partnerships bring advanced European mining technology and environmental standards. Joint ventures with German, Swedish, and Finnish companies introduce world-leading extraction and processing expertise.' },
      usPartnership: { title: 'American Investment', subtitle: 'Technology & Finance', description: 'US mining companies and investment firms commit $100 billion to Afghan mineral development. American technology in satellite mapping, autonomous vehicles, and processing innovation transforms operational efficiency.' },
      regionalPartnership: { title: 'Regional Integration', subtitle: 'Central Asian Cooperation', description: 'Cooperation with Kazakhstan, Uzbekistan, and Turkmenistan creates integrated mineral supply chains. Shared rail networks and processing facilities maximize regional value and reduce costs for all partners.' },
      // Gemstone Expansion
      emeraldGrading: { title: 'Emerald Grading Center', subtitle: 'International Certification', description: 'The National Emerald Grading Center certifies 1 million carats annually using internationally recognized standards. Certified Afghan emeralds command 50% price premiums in global gem markets.' },
      lapisHeritage: { title: 'Lapis Lazuli Heritage', subtitle: '6,000 Years of Mining', description: 'The ancient lapis mines of Badakhshan—source of ultramarine pigment for Tutankhamun and Renaissance masters—continue producing the world\'s finest quality. UNESCO World Heritage recognition protects these historic sites.' },
      rubyDeposits: { title: 'Ruby Mining Excellence', subtitle: 'Pigeon Blood Quality', description: 'Jegdalek rubies match Burmese quality at 1/10th the environmental impact. Modern extraction preserves geological integrity while producing $500 million annually in gem-quality corundum.' },
      tourmalineVarieties: { title: 'Tourmaline Paradise', subtitle: 'Rainbow Collection', description: 'Nuristan produces 50+ tourmaline color varieties including rare watermelon, indicolite, and paraiba-type specimens. Annual production of 10 million carats makes Afghanistan the world\'s tourmaline capital.' },
      gemCutting: { title: 'Gem Cutting Industry', subtitle: 'Value Addition', description: '200 gem cutting facilities employ 50,000 skilled lapidaries, transforming rough stones into polished masterpieces. In-country cutting adds 400% value compared to raw gem exports.' },
      // Strategic Minerals
      cobaltSupply: { title: 'Cobalt Supply Security', subtitle: 'Battery Metal Critical', description: 'Afghan cobalt reserves of 5 million tons provide essential battery cathode materials for 500 million electric vehicles. Ethical extraction standards ensure conflict-free supply for responsible manufacturers.' },
      nickelDeposits: { title: 'Nickel Laterite Development', subtitle: 'Stainless Steel & Batteries', description: '10 million tons of nickel in laterite and sulfide deposits support both stainless steel production and battery manufacturing. Modern processing achieves 95% nickel recovery with zero acid drainage.' },
      tungstenSupply: { title: 'Tungsten Strategic Reserves', subtitle: 'Critical Metal', description: 'High-grade tungsten deposits in Panjshir and surrounding provinces contain 500,000 tons of this critical metal. Tungsten\'s extreme hardness makes it essential for cutting tools, electronics, and aerospace applications.' },
      antimonyDeposits: { title: 'Antimony Production', subtitle: 'Flame Retardant Metal', description: 'Antimony deposits across multiple provinces support growing demand for flame retardants and battery technologies. Modern processing facilities produce 50,000 tons of refined antimony annually.' },
      tantalumNiobium: { title: 'Tantalum & Niobium', subtitle: 'Electronics Minerals', description: 'Pegmatite deposits yield tantalum and niobium essential for electronics capacitors and superalloys. Certified conflict-free supply chains ensure Afghan tantalum meets responsible sourcing standards.' },
      // Future Vision
      vision2050: { title: 'Vision 2026-2050', subtitle: 'Long-Term Prosperity', description: 'By 2050, Afghanistan will be among the world\'s wealthiest nations, with mineral revenues providing universal healthcare, education, and prosperity for all 60 million citizens. The $30 trillion mineral endowment transforms a nation.' },
      sovereignWealth: { title: 'Sovereign Wealth Fund', subtitle: 'Generational Security', description: 'A $1 trillion Sovereign Wealth Fund—funded by mineral revenues—ensures prosperity continues long after resources are exhausted. Investments in global markets provide permanent income for future generations.' },
      technologyHub: { title: 'Regional Technology Hub', subtitle: 'Innovation Economy', description: 'Mining wealth funds transition to a knowledge economy, with Kabul becoming Central Asia\'s technology and innovation hub. 100 research universities and 1,000 tech companies emerge from mineral-funded development.' },
      sustainableLegacy: { title: 'Sustainable Legacy', subtitle: 'Environmental Heritage', description: 'Responsible mining creates a legacy of restored landscapes, protected ecosystems, and clean energy infrastructure. Afghanistan becomes a model for sustainable resource development worldwide.' },
      finalVision: { title: 'A Nation Transformed', subtitle: 'The Afghan Renaissance', description: '$30 trillion in mineral wealth—developed sustainably, shared equitably, and invested wisely—transforms Afghanistan from conflict zone to global economic power. This is the promise of Afghan minerals: prosperity for generations.' },
      // Panjshir Expanded
      panjshirEmeralds: { title: 'Panjshir Emeralds', subtitle: 'Valley of Gems', description: 'The legendary Panjshir Valley produces some of the world\'s finest emeralds. Deep green crystals extracted from mountain rock command premium prices in international gem markets.' },
    },
  },
   ps: {
     nav: {
       home: 'کور',
       sectors: 'سکتورونه',
       minerals: 'معدنونه',
       investment: 'پانګه اچونه',
       contact: 'اړیکه',
       about: 'په اړه',
       provinces: 'ولایتونه',
       operations: 'عملیات',
       timeline: 'د وخت لیکه',
       map: 'نقشه',
     },
     navDropdowns: {
       provinces: {
         title: '34 د سرچینو بډای ولایتونه',
         subtitle: 'د افغانستان په اوږدو کې د معدني ذخیرو وڅیړئ',
         viewMap: 'د تعاملي نقشې کتنه',
         clickToExplore: 'د معدني بډایتوب د وڅیړلو لپاره هر ولایت کلیک وکړئ',
         badakhshan: 'بدخشان - د قیمتي ډبرو پاچاهي',
         badghis: 'بادغیس - د معدني سرچینو',
         baghlan: 'بغلان - د ذغال او معدنونه',
         balkh: 'بلخ - د شمالي سرچینو',
         bamyan: 'بامیان - د اوسپنې غر',
         daykundi: 'دایکونډي - د معدني ذخیرو',
         farah: 'فراه - د لویدیځو معدنونه',
         faryab: 'فاریاب - د شمالي ذخیرو',
         ghazni: 'غزني - د لیتیم کمربند',
         ghor: 'غور - د مرکزي سرچینو',
         helmand: 'هلمند - د ستراتیژیکو سرچینو',
         herat: 'هرات - د لویدیځو دروازه',
         jowzjan: 'جوزجان - د شمالي معدنونه',
         kabul: 'کابل - د پلازمینې سرچینو',
         kandahar: 'کندهار - د سویلي مرکز',
         kapisa: 'کاپیسا - د مرکزي ذخیرو',
         khost: 'خوست - د ختیځو معدنونه',
         kunar: 'کونړ - د قیمتي ډبرو دره',
         kunduz: 'کندز - د شمالي دروازه',
         laghman: 'لغمان - د ختیځو سرچینو',
         logar: 'لوګر - د مس کور',
         nangarhar: 'ننګرهار - د ختیځو ذخیرو',
         nimruz: 'نیمروز - د سویلي معدنونه',
         nuristan: 'نورستان - د لیتیم سرحد',
         paktia: 'پکتیا - د ختیځو سرچینو',
         paktika: 'پکتیکا - د سویلي ذخیرو',
         panjshir: 'پنجشیر - د زمرد دره',
         parwan: 'پروان - د مرکزي معدنونه',
         samangan: 'سمنګان - د شمالي ذخیرو',
         sarEPol: 'سرپل - د شمالي سرچینو',
         takhar: 'تخار - د سرو زرو سیندونه',
         uruzgan: 'ارزګان - د مرکزي معدنونه',
         wardak: 'وردګ - د مرکزي ذخیرو',
         zabul: 'زابل - د سویلي سرچینو',
       },
       operations: {
         title: 'د کان کیندنې عملیات او خدمات',
         subtitle: 'د کان کیندنې بشپړ خدمات او عملیات',
         viewAll: 'ټول عملیات او خدمات وګورئ',
         processing: { label: 'د پروسس کولو او تصفیه کولو', description: 'د کان پروسس کولو سامانګانې' },
         smelting: { label: 'د سملټ کولو عملیات', description: 'د فلزاتو استخراج' },
         research: { label: 'د څیړنې او اکتشاف', description: 'د ځمک پوهنې سروی' },
         geological: { label: 'د ځمک پوهنې سروی', description: 'د ذخیرو نقشه کول' },
         trade: { label: 'د سوداګرۍ او صادراتو', description: 'نړیواله سوداګري' },
         investment: { label: 'د پانګه اچونې چوکاټ', description: 'قانوني او مالي' },
         sustainability: { label: 'د پایښت', description: 'د چاپیریال معیارونه' },
         community: { label: 'د ټولنې پراختیا', description: 'کورني دندې' },
         digital: { label: 'ډیجیټل کان کیندنه', description: 'د ټیکنالوژي ادغام' },
         safety: { label: 'روغتیا او امنیت', description: 'د کارګرانو ساتنه' },
       },
       timeline: {
         title: 'د پراختیا وخت لیکه',
         subtitle: 'د تاریخي پرمختګ او راتلونکي لید',
         viewComplete: 'بشپړه وخت لیکه وګورئ',
         clickToExplore: 'د وخت لیکه جزئیاتو د وڅیړلو لپاره هر اختیار کلیک وکړئ',
         historical: { label: 'د تاریخي وخت لیکه', description: 'د کان کیندنې تاریخ او پرمختګونه' },
         ancientPeriod: { label: 'پخوانۍ کان کیندنه (4000 BCE - 1000 CE)', description: 'د پخوانیو تمدنونو څخه د 6,000+ کلونو د کان کیندنې میراث' },
         ancientEgypt: { label: 'پخوانۍ مصر او میسوپوټیمیا', description: 'د توتانخامون د دفن کې افغان لاجورد او پخوانۍ سوداګري' },
         silkRoad: { label: 'د ریشم لارې دوره', description: 'د تاریخي سوداګریزو لارو او معدني سوداګرۍ' },
         medievalPeriod: { label: 'منځنۍ پېړۍ او اسلامي ادوار', description: 'د ریشم لارې سوداګري او اسلامي کان کیندنې پراختیا' },
         renaissance: { label: 'د رنسانس دوره', description: 'د اولترامارین رنګ سوداګري او اروپايي هنر' },
         colonialPeriod: { label: 'استعماري څیړنه (1800-1960)', description: 'د اروپايي ځمک پوهنيزو سرویو او لومړني کشفونه' },
         britishSurveys: { label: 'د بریتانوي ځمک پوهنيزو سرویو', description: 'د 19 پیړۍ بریتانوي څیړنه او نقشه کول' },
         russianSurveys: { label: 'د روسي ځمک پوهنيزو سفرونو', description: 'د 20 پیړۍ پیل کې د روسي ځمک پوهنيز کار' },
         sovietPeriod: { label: 'د شوروي دوره (1960-1990)', description: 'د جامع ځمک پوهنيز نقشه کول او مهم ذخیرو پیژندل' },
         sovietMapping: { label: 'د شوروي ځمک پوهنيز نقشه کول', description: 'د میس عینک او حاجیگک پیژندونکي جامع سروی' },
         modernEra: { label: 'د عصري دوره (2000-اوس)', description: 'د 21 پیړۍ بیا رغونه او جامع پراختیا' },
         usgsSurveys: { label: 'د USGS جامع سروی', description: 'د $30T+ معدني وړتیا اندازه کولو USGS ارزونه' },
         gemstoneHistory: { label: 'د قیمتي ډبرو میراث', description: 'د لاجورد، زمرد او یاقوت 6,000 کلنه کان کیندنه' },
         lapisHistory: { label: 'لاجورد: 6,000 کاله', description: 'د نړۍ ترټولو پخوانۍ دوامداره کارونکي کانونه' },
         emeraldHistory: { label: 'د پنجشیر زمرد میراث', description: 'د زمرد کان کیندنې 1,000+ کلنه دود' },
         rubyHistory: { label: 'د جگډلک یاقوت کان کیندنه', description: 'د کبوتر وینې یاقوت ذخیرې او تاریخي استخراج' },
         goldHistory: { label: 'د سرو زرو کان کیندنې میراث', description: 'پخوانۍ او منځنۍ پیړۍ د سرو زرو استخراج دودونه' },
         copperHistory: { label: 'د مس کان کیندنې میراث', description: 'د تاریخي مس استخراج او سوداګري' },
         tradeRoutes: { label: 'پخوانۍ سوداګریزې لارې', description: 'د ریشم لارې او د تاریخي معدني سوداګرۍ شبکې' },
         caravanRoutes: { label: 'د کاروان سوداګرۍ شبکې', description: 'د افغان معدنونو وړونکي تاریخي کاروان لارې' },
         maritimeTrade: { label: 'د سمندري سوداګرۍ تاریخ', description: 'د معدني صادراتو لپاره د سمندر تاریخي لارې' },
         archaeological: { label: 'د لرغونپوهنې کشفونه', description: 'د تاریخي کان کیندنې سایټونه او لرغونپوهنیز شواهد' },
         mesAynakArchaeology: { label: 'د مس عینک لرغونپوهنیز سایټ', description: 'د 2,000 کلونو بودایی سایټ او مس ذخیره' },
         documentation: { label: 'د تاریخي اسناد', description: 'پخوانۍ متنونه، نقشې او تاریخي ریکارډونه' },
         ancientTexts: { label: 'پخوانۍ متنونه او ریکارډونه', description: 'د افغان معدنونو یادونکي تاریخي اسناد' },
         historicalMaps: { label: 'د تاریخي نقشې', description: 'د کان کیندنې سایټونو ښودونکي پخوانۍ او منځنۍ نقشې' },
         museumCollections: { label: 'د موزیم ټولګې', description: 'د نړۍ په موزیم ټولګو کې افغان معدنونه' },
         provincial: { label: 'د ولایتي پراختیا', description: 'د سیمه‌ایز وخت لیکه' },
         badakhshanHistory: { label: 'د بدخشان کان کیندنې تاریخ', description: 'د لاجورد 6,000 کلنه کان کیندنه' },
         panjshirHistory: { label: 'د پنجشیر درې میراث', description: 'د زمرد کان کیندنې دود له زرګونو کلونو راهیسې' },
         roadmap: { label: 'د پراختیا نقشه', description: 'د راتلونکي پراختیا پلانونه' },
         milestones: { label: 'د پروژې پرمختګونه', description: 'د کلیدي پروژو بریاوې' },
         achievements: { label: 'بریاوې', description: 'لوی بریاوې' },
         vision2030: { label: 'لید 2026-2050', description: 'د اوږد مهاله لید' },
         reports: { label: 'کلنۍ راپورونه', description: 'د کلني پرمختګ راپورونه' },
         annualReports: { label: 'کلني پرمختګ راپورونه', description: 'د کان کیندنې پراختیا کلني راپورونه' },
         dataReports: { label: 'د تاریخي معلوماتو راپورونه', description: 'د تاریخي کان کیندنې جامع معلومات' },
         statisticalAnalysis: { label: 'احصایوي تحلیل', description: 'د تاریخي کان کیندنې احصایې او رجحانونه' },
         historicalGallery: { label: 'د تاریخي انځورونو ګالري', description: 'د تاریخي کان کیندنې انځورونو جامع ټولګه' },
         ancientImages: { label: 'د پخوانۍ کان کیندنې انځورونه', description: 'د پخوانۍ کان کیندنې ادوار څخه تاریخي انځورونه' },
         medievalImages: { label: 'د منځنۍ پیړۍ انځورونه', description: 'د منځنۍ کان کیندنې څخه تاریخي انځورونه' },
         archaeologicalImages: { label: 'د لرغونپوهنې سایټ انځورونه', description: 'د تاریخي کان کیندنې سایټونو انځورونه' },
         artisanalMining: { label: 'د دستي کان کیندنې تاریخ', description: 'دودیز کان کیندنې میتودونه او میراث' },
         miningTechniques: { label: 'د تاریخي کان کیندنې تخنیکونه', description: 'د 6,000 کلونو په اوږدو کې د کان کیندنې میتودونو تکامل' },
         culturalHeritage: { label: 'کلتوري میراث', description: 'د افغان کلتور او دودونو کې کان کیندنه' },
         royalCollections: { label: 'د شاهی ټولګې', description: 'د تاریخي شاهی ټولګو کې افغان قیمتي ډبرې' },
         ironHistory: { label: 'د اوسپنې کان کیندنې میراث', description: 'د تاریخي اوسپنې استخراج او فولاد تولید' },
         lithiumHistory: { label: 'د لیتیم د کشف تاریخ', description: 'د لیتیم تاریخي څیړنه او کشف' },
         coalHistory: { label: 'د سکرو کان کیندنې میراث', description: 'د تاریخي سکرو استخراج او انرژي تولید' },
         marbleHistory: { label: 'د مرمر کان کیندنې میراث', description: 'د تاریخي مرمر استخراج او معمارۍ کارول' },
         chromiteHistory: { label: 'د کرومیت کان کیندنې تاریخ', description: 'د تاریخي کرومیت استخراج او صنعتي کارول' },
         rareEarthHistory: { label: 'د نادرو ځمکې عناصرو کشف', description: 'د نادرو ځمکې عناصرو تاریخي څیړنه' },
         miningCommunities: { label: 'د تاریخي کان کیندنې ټولنې', description: 'دودیز کان کیندنې ټولنې او د دوی میراث' },
         miningLegends: { label: 'د کان کیندنې افسانې او کیسې', description: 'د کان کیندنې سیمو څخه تاریخي افسانې او کیسې' },
         geologicalFormation: { label: 'د ځمک پوهنيز جوړښت تاریخ', description: 'د ملیونونو کلونو په اوږدو کې د افغان معدني ذخیرو جوړښت' },
         miningTools: { label: 'د تاریخي کان کیندنې وسایل', description: 'د 6,000 کلونو په اوږدو کې د کان کیندنې وسایلو تکامل' },
         miningSafety: { label: 'د تاریخي کان کیندنې ساتنه', description: 'دودیز ساتنې تمرینونه او عصري تکامل' },
         miningEconomics: { label: 'د تاریخي کان کیندنې اقتصاد', description: 'د تاریخ په اوږدو کې د کان کیندنې اقتصادي اغیز' },
         miningLaw: { label: 'د تاریخي کان کیندنې قانون او حکومت', description: 'د کان کیندنې مقرراتو او حکومت تکامل' },
         womenInMining: { label: 'د تاریخي کان کیندنه کې ښځې', description: 'د تاریخ په اوږدو کې د کان کیندنه کې د ښځو رول' },
         miningEducation: { label: 'د تاریخي کان کیندنې زده کړه', description: 'دودیز پوهې لیږد او عصري زده کړه' },
         productionStatistics: { label: 'د کان کیندنې تولید احصایې', description: 'د تاریخي تولید ډیټا، د محصول رجحانونه او د کان کیندنې حجمونه' },
         economicImpact: { label: 'اقتصادي اغیزې تحلیل', description: 'اقتصادي ونډې، د GDP اغیزې او د کان کیندنې څخه عاید' },
         tradeVolumes: { label: 'د سوداګرۍ حجم ډیټا', description: 'د تاریخي سوداګرۍ حجمونه، صادراتي احصایې او بازار ډیټا' },
         workforceStatistics: { label: 'کارمندان او کارګري', description: 'د کان کیندنې د کارمندانو ډیټا، د کارګرۍ ډیموګرافیک او کارګر احصایې' },
         priceTrends: { label: 'د قیمت رجحانونه او بازارونه', description: 'د تاریخي معدني قیمتونه، بازار رجحانونه او توکو ارزښتونه' },
         geologicalFormations: { label: 'ځمک پوهنیز جوړښتونه', description: 'ځمک پوهنیز جوړښتونه، د جوړښت پروسې او معدني پیدایښت' },
         depositCharacteristics: { label: 'د ذخیرې ځانګړتیاوې', description: 'د ذخیرې ډولونه، د معدن درجې، ذخیرې او د سرچینو طبقه بندي' },
         miningTechnologyEvolution: { label: 'د کان کیندنې ټیکنالوژۍ تکامل', description: 'ټیکنالوژیک پرمختګونه، وسایلو تکامل او نوښت وخت' },
         explorationMethods: { label: 'د اکتشاف میتودونه', description: 'د تاریخي اکتشاف تخنیکونه، سروې او د کشف میتودونه' },
         environmentalFactors: { label: 'چاپیریالي فکتورونه', description: 'چاپیریالي پاملرنې، اغیزې او د پایښت تمرینونه' },
         miningRegulationsTimeline: { label: 'د کان کیندنې مقررات وخت', description: 'د مقرراتو چوکاټ تکامل، قوانین او حکومت جوړښتونه' },
         licensingPermits: { label: 'جوازونه او اجازې', description: 'د تاریخي جواز سیسټمونه، د اجازې پروسې او د تصویب چوکاټ' },
         taxationRoyalties: { label: 'مالیې او سلطنتي حقونه', description: 'د مالیې جوړښتونه، سلطنتي سیسټمونه او مالي پالیسۍ' },
         infrastructureDevelopment: { label: 'انفراسټرکچر پراختیا', description: 'د کان کیندنې انفراسټرکچر، ترانسپورت او تاسیساتو پراختیا' },
         processingFacilities: { label: 'پروسسینګ تاسیسات', description: 'معدني پروسسینګ پلانټونه، رفاینريز او صنعتي تاسیسات' },
         transportationNetworks: { label: 'ترانسپورت شبکې', description: 'د سوداګرۍ لارې، ترانسپورت انفراسټرکچر او لوژستیک سیسټمونه' },
         marketAnalysis: { label: 'بازار تحلیل', description: 'بازار ویش، د سیالۍ تحلیل او صنعت جوړښت' },
         investmentFlows: { label: 'پانګه اچونې جریانونه', description: 'د تاریخي پانګه اچونې نمونې، پانګې جریانونه او د تامین سرچینې' },
         internationalPartnerships: { label: 'نړیوال شراکتونه', description: 'نړیوال همکارۍ، ګډې هڅې او شراکتونه' },
         researchStudies: { label: 'تحقیق او مطالعې', description: 'علمي تحقیق، ځمک پوهنيزې مطالعې او علمي خپرونې' },
         dataAnalytics: { label: 'ډیټا او تحلیل', description: 'ډیټا ټولګه، د تحلیل میتودونه او احصایوي راپورونه' },
         forecastingProjections: { label: 'وړاندوینې او اټکلونه', description: 'راتلونکي اټکلونه، د سرچینو اټکلونه او پراختیا وړاندوینې' },
       },
       investment: {
         title: 'د پانګه اچونې پورټل',
         subtitle: 'د پانګه اچونې بشپړ معلومات',
         viewComplete: 'بشپړ د پانګه اچونې پورټل وګورئ',
         clickToExplore: 'د پانګه اچونې فرصتونو د وڅیړلو لپاره هر اختیار کلیک وکړئ',
         framework: { label: 'د پانګه اچونې چوکاټ', description: 'قانوني او تنظیمي جوړښت' },
         opportunities: { label: 'د پانګه اچونې فرصتونه', description: 'شته پروژې' },
         partnerships: { label: 'د شراکت ماډلونه', description: 'ګډ شرکتونه او تړونونه' },
         incentives: { label: 'مالي هڅونې', description: 'د مالیاتو ګټې او هڅونې' },
         riskManagement: { label: 'د خطر مدیریت', description: 'د پانګه اچونې ساتنه' },
         partners: { label: 'نړیوال شراکتداران', description: 'نړیوال شراکتونه' },
         process: { label: 'د پانګه اچونې پروسس', description: 'د پرمختګ لارښود' },
         statistics: { label: 'د پانګه اچونې احصائیه', description: 'د بازار ډیټا او رجحانونه' },
       },
       contact: {
         title: 'د اړیکو پورټل',
         subtitle: 'زموږ سره اړیکه ونیسئ',
         viewSection: 'د اړیکو برخه وګورئ',
         clickToExplore: 'د اړیکو نیولو لپاره هر اختیار کلیک وکړئ',
         form: { label: 'د اړیکو فورمه', description: 'پوښتنه وسپارئ' },
         offices: { label: 'د دفترونو موقعیتونه', description: 'زموږ دفترونو موندل' },
         email: { label: 'د بریښنالیک اړیکه', description: 'د بریښنالیک پتې' },
         phone: { label: 'د تلیفون لیک', description: 'د اړیکو شمیرې' },
         departments: { label: 'د برخو اړیکې', description: 'د برخو له مخې' },
         international: { label: 'نړیوال دفترونه', description: 'نړیوال اړیکې' },
         media: { label: 'د رسنیو پوښتنې', description: 'رسنۍ او مطبوعات' },
        partnerships: { label: 'د شراکت پوښتنې', description: 'سوداګریز شراکتونه' },
      },
    },
    detailPage: {
      backToHome: 'بیرته کور',
      downloadReport: 'راپور ډاونلوډ کړئ',
      byTheNumbers: 'د شمیرو له مخې',
      comprehensiveOverview: 'بشپړ کتنه',
      keyHighlights: 'کليدي برجسته',
      section: 'برخه',
      keyMetrics: 'کليدي میټریک',
      strategicOverview: 'ستراتیژیک کتنه او تحلیل',
      mineralDetail: {
        downloadLabel: 'د پانګه اچونې لنډیز ډاونلوډ کړئ',
        overviewTitle: 'د سرچینو تحلیل او ستراتیژیک ارزونه',
        statsLabel: 'د سرچینو میټریک',
        highlights: {
          worldClass: 'د نړیوال درجې د سرچینو کچه او کیفیت',
          exceptionalValue: 'د استثنایي اقتصادي ارزښت پوتانشیل',
          comprehensiveFramework: 'د پراختیا بشپړ چوکاټ',
          sustainableCommitment: 'د پایښت عملیاتي ژمنه',
        },
        sections: {
          inDepthAnalysis: 'د ژور تحلیل',
          technicalDetails: 'تخنیکي جزئیات',
          developmentRoadmap: 'د پراختیا نقشه',
          projectTimeline: 'د پروژې وخت لیکه',
        },
      },
      timelineDetail: {
        downloadLabel: 'د وخت لیکه راپور ډاونلوډ کړئ',
        overviewTitle: 'د تاریخي سیاق او ستراتیژیک تحلیل',
        statsLabel: 'د وخت لیکه احصائیه',
        errorLoading: 'د وخت لیکه د پورته کولو تېروتنه',
        unableToLoad: 'د وخت لیکه ډیټا د لاندې لپاره پورته نشي کیدی:',
        highlights: {
          richHeritage: 'د 6000+ کلونو د کان کیندنې میراث',
          comprehensiveRoadmap: 'د پراختیا بشپړ نقشه',
          strategicMilestones: 'ستراتیژیک پرمختګونه او بریاوې',
          sustainableVision: 'د پایښت لید',
        },
        sections: {
          historicalRecord: 'د تاریخي ریکارډ',
          detailedTimeline: 'تفصيلي وخت لیکه',
          achievements: 'بریاوې',
          keyMilestones: 'کليدي پرمختګونه',
          dataAnalysis: 'د ډیټا تحلیل',
          historicalDataVisualizations: 'د تاریخي ډیټا بصري کول',
          comparativeAnalysis: 'د پرتله کولو تحلیل',
          dataTablesComparisons: 'د ډیټا جدولونه او پرتلی',
          comprehensiveInformation: 'بشپړ معلومات',
          keyInformationCategories: 'کليدي معلوماتي کټګورۍ',
          impact: 'اغیزه:',
        },
      },
      investmentDetail: {
        downloadLabel: 'د پانګه اچونې لارښود ډاونلوډ کړئ',
        overviewTitle: 'د پانګه اچونې ستراتیژي او چوکاټ',
        statsLabel: 'د پانګه اچونې احصائیه',
        highlights: {
          investorFriendly: 'د پانګه اچونکي دوستانه قانوني چوکاټ',
          transparentProcedures: 'شفاف لایسنس پروسیجرونه',
          arbitrationAccess: 'د نړیوال تحکیم لاسرسی',
          environmentalStandards: 'د چاپیریال بشپړ معیارونه',
        },
        sections: {
          investmentProcess: 'د پانګه اچونې پروسس',
          stepsToInvestment: 'د پانګه اچونې ګامونه',
          investmentBenefits: 'د پانګه اچونې ګټې',
          whyInvest: 'ولې په افغانستان کې پانګه اچونه وکړئ',
        },
      },
      operationsDetail: {
        downloadLabel: 'د عملیاتو لارښود ډاونلوډ کړئ',
        overviewTitle: 'د عملیاتو بریا او چوکاټ',
        statsLabel: 'د عملیاتو احصائیه',
        highlights: {
          worldClassStandards: 'د نړیوال درجې عملیاتي معیارونه',
          advancedTechnology: 'د پرمختللي ټیکنالوژي ادغام',
          safetyProtocols: 'د ساتنې بشپړ پروتوکولونه',
          environmentalResponsibility: 'د چاپیریال مسؤلیت',
        },
        sections: {
          operationalProcesses: 'د عملیاتو پروسسونه',
          processFramework: 'د پروسس چوکاټ',
          operationalBenefits: 'د عملیاتو ګټې',
          strategicAdvantages: 'ستراتیژیک برتری',
        },
      },
    },
    contactDetail: {
      downloadLabel: 'د اړیکو لارښود ډاونلوډ کړئ',
      overviewTitle: 'د اړیکو او تعامل',
      statsLabel: 'د خدماتو احصائیه',
      highlights: {
        multipleChannels: 'د اړیکو څو چینلونه',
        responsiveService: 'د ځواب ویلو خدماتي معیارونه',
        multiLanguage: 'د څو ژبو ملاتړ',
        secureCommunications: 'د امن اړیکو',
      },
      sections: {
        contactChannels: 'د اړیکو چینلونه',
        howToReach: 'زموږ سره څنګه اړیکه ونیسئ',
        departments: 'څانګې',
        ministryDepartments: 'د وزارت څانګې',
      },
    },
    notFound: {
      title: '404',
      message: 'افسوس! پاڼه ونه موندل شوه',
      returnHome: 'کور ته راستنیدل',
    },
    mapSection: {
      provincesLabel: '34 ولایتونه',
      title: 'د تعاملي سرچینو نقشه',
      description: 'د ټولو ولایتونو په اوږدو کې د افغانستان د معدني شتمنۍ وڅیړئ. د هرې سیمې پورته وګورئ ترڅو مهم ذخیرې، اټکل شوي ارزښتونه او د پانګه اچونې فرصتونه کشف کړئ.',
      stats: {
        provinces: 'ولایتونه',
        knownDeposits: 'پیژندل شوي ذخیرې',
        totalValue: 'ټولیز ارزښت',
        mineralTypes: 'د معدنو ډولونه',
      },
      legendHover: 'د ولایتونو پورته وګورئ',
      legendDeposits: 'معدني ذخیرې',
    },
    imageGallery: {
      clickToView: 'د بشپړ سکرین لیدو لپاره هر انځور کلیک وکړئ',
    },
    footer: {
      quote: 'د یوې ملت قوت د دې نه اندازه کیږي چې څه تحمل کوي، بلکې د دې نه چې څه جوړوي. دا بنسټ دی. دا چوکاټ دی. دا افغانستان دی.',
      journey: 'د مقاومت څخه د بیا راژوندي کیدو سفر یو سپرینټ نه دی بلکې یو ماراتون دی - نه په ورځو کې بلکې په نسلونو کې اندازه کیږي. او دا دلته، اوس، د ارادې سره پیل کیږي.',
      copyright: '© 2024 د افغانستان د ملي اقتصادي اصلاحاتو پروګرام',
      privacy: 'شخصي',
      terms: 'شرایط',
      contact: 'اړیکه',
    },
    mineralsIndex: {
      title: 'د افغانستان معدني شتمني',
      description: 'د 34 ولایتونو په اوږدو کې د 150 څخه زیاتو معدني ډولونو وڅیړئ، چې د نړۍ ترټولو مهمو نا پراختیا شویو معدني شتمنیو استازیتوب کوي چې د 30 ټریلیون ډالرو څخه زیات ارزښت لري.',
      searchPlaceholder: 'معدنونه، ذخیرې یا ځایونه لټوئ...',
    },
    investmentSectors: {
      badge: '50+ صنعتونه',
      title: 'د پانګه اچونې سکتورونه وڅیړئ',
      searchPlaceholder: 'سکتورونه، صنعتونه یا کلیدي ټکي لټوئ...',
    },
    vision2050: {
      learnMore: 'نور زده کړئ',
    },
    mineralHero: {
      selectCategory: 'د وڅیړلو لپاره یو کټګوري وټاکئ',
      menuCategories: heroMenuTranslations.ps,
    },
    mineralsMegaMenu: {
       title: 'د افغانستان معدني پورټل',
       subtitle: 'د معدني سرچینو بشپړ ډیټابیس',
       viewComplete: 'بشپړ رجسټري وګورئ',
       clickToExplore: 'د جزئیاتو د وڅیړلو لپاره هر معدن کلیک وکړئ',
       strategicMetals: {
         copper: {
           title: 'مس',
           items: {
             mesAynak: 'د میس عینک ذخیره',
             hajigak: 'د حاجیگک مس-اوسپنې کمپلکس',
             balkhab: 'د بلخاب ذخیره',
             processing: 'د مس پروسس کول',
             exports: 'د مس صادرات',
             smelting: 'د مس سملټ کولو عملیات',
             logar: 'د لوګر ولایت ذخیرې',
             refining: 'د مس تصفیه کولو سامانګانې',
           },
         },
         lithium: {
           title: 'لیتیم',
           items: {
             ghazni: 'د غزني پګماتایټونه',
             nuristan: 'د نورستان ذخیرې',
             batteryGrade: 'د بیټرۍ درجې پروسس کول',
             evSupply: 'د بریښنایی موټر عرضه زنځیر',
             research: 'د څیړنې مرکزونه',
             carbonate: 'د لیتیم کاربونیټ تولید',
             spodumene: 'د سپوډومین غلظتونه',
             batteryMaterials: 'د بیټرۍ موادو تولید',
           },
         },
         ironOre: {
           title: 'د اوسپنې کان',
           items: {
             hajigak: 'د حاجیگک اوسپنې غر',
             steelProduction: 'د پولاد تولید پلانونه',
             magnetite: 'د میګنیټایټ کیفیت',
             infrastructure: 'د زیربنا پولاد',
             employment: 'د دندو رامینځته کول',
             beneficiation: 'د اوسپنې کان ښه کول',
             pelletization: 'د پیلټ کولو پلانټونه',
             bamyan: 'د بامیان ولایت ذخیرې',
           },
         },
         leadZinc: {
           title: 'سیس او زنک',
           items: {
             aynak: 'د عینک سیس-زنک ذخیرې',
             zincConcentrate: 'د زنک غلظت تولید',
             smelting: 'د سیس سملټ کولو عملیات',
             batteryMaterials: 'د بیټرۍ تولید مواد',
           },
         },
         cobaltNickel: {
           title: 'کوبالټ او نیکل',
           items: {
             cobalt: 'د کوبالټ ذخیرې',
             nickel: 'د نیکل لیټرایټ سرچینې',
             alloys: 'د بیټرۍ فلزاتو الیاژونه',
             evSupply: 'د بریښنایی موټر بیټرۍ عرضه زنځیر',
           },
         },
         aluminum: {
           title: 'الومینیم او سپک فلزات',
           items: {
             bauxite: 'د بوکسیټ ذخیرې',
             alumina: 'د الومینا تولید',
             cryolite: 'د کریولایټ ذخیرې',
           },
         },
         strategicHardMetals: {
           title: 'ستراتیژیک او کلک فلزات',
           items: {
             tungsten: 'د ټنگسټن ذخیرې',
             molybdenum: 'د مولیبډینم ذخیرې',
             vanadium: 'د واناډیم ذخیرې',
             titaniumRutile: 'د ټایټانیوم روټایل',
             titaniumIlmenite: 'د ټایټانیوم ایلمینایټ',
             tin: 'د ټین ذخیرې',
             antimony: 'د انټیموني ذخیرې',
             zirconium: 'د زیرکونیم ذخیرې',
             tantalum: 'د ټانټالیم ذخیرې',
             yttrium: 'د ایټریوم ذخیرې',
             scandium: 'د سکینډیم ذخیرې',
             cerium: 'د سیریم ذخیرې',
             gadolinium: 'د ګاډولینیم ذخیرې',
           },
         },
         energyFuel: {
           title: 'انرژي او سون مواد',
           items: {
             uranium: 'د یورانیوم ذخیرې',
             thorium: 'د توریم ذخیرې',
             lignite: 'د لیګنایټ ذخیرې',
             bituminousCoal: 'د بیتومینوس ککړو ډولونه',
           },
         },
       },
       preciousResources: {
         gemstones: {
           title: 'قیمتي ډبرې',
           items: {
             panjshirEmeralds: 'د پنجشیر زمردونه',
             lapisLazuli: 'د بدخشان لاجورد',
             jegdalekRubies: 'د جگډلک یاقوتونه',
             sapphires: 'د هندوکش نیلمونه',
             tourmaline: 'د نورستان تورمالین',
             aquamarine: 'د کونړ اکوامارین',
             cutting: 'د قیمتي ډبرو کټ او پولیش',
             certification: 'د قیمتي ډبرو تصدیق',
             trade: 'نړیواله قیمتي ډبرو سوداګري',
             kunzite: 'کونزایټ او سپوډومین',
             garnet: 'د ګارنیټ ذخیرې',
             peridot: 'د پیریډوټ سرچینې',
           },
         },
         gold: {
           title: 'سره زر',
           items: {
             badakhshan: 'د بدخشان سرو زرو کمربند',
             takhar: 'د تخار ذخیرې',
             refining: 'د سرو زرو تصفیه',
             artisanal: 'د لاسي کان کیندنه',
             bullion: 'د سرو زرو تولید',
             processing: 'د سرو زرو پروسس کولو پلانټونه',
             exports: 'د سرو زرو صادراتي عملیات',
             placer: 'د پلیسر سرو زرو ذخیرې',
             lode: 'د لود سرو زرو رګونه',
           },
         },
         rareEarth: {
           title: 'نادرې خاورې عناصر',
           items: {
             helmand: 'د هلمند نادرې خاورې ذخیرې',
             technology: 'د ټیکنالوژي فلزات',
             neodymium: 'نیوډیمیم او پراسیوډیمیم',
             globalSupply: 'د نړیوال عرضه اغیز',
             research: 'د څیړنې شراکتونه',
             concentrate: 'د نادرې خاورې غلظت پروسس کول',
             dysprosium: 'ډیسپروسیوم او ټربیوم',
             separation: 'د نادرې خاورې جلا کولو ټیکنالوژي',
           },
         },
         silver: {
           title: 'سپین زر',
           items: {
             deposits: 'د سپینو زرو ذخیرې',
             refining: 'د سپینو زرو تصفیه',
             leadOres: 'د سپینو زرو-سیس کانونه',
             industrial: 'د صنعتي سپینو زرو کارونې',
           },
         },
       },
       industrialMinerals: {
         chromite: {
           title: 'کرومایټ',
           items: {
             reserves: 'د کرومایټ ذخیرې',
             exports: 'د صادراتو عملیات',
             steel: 'د سټینلیس پولاد تولید',
             mining: 'د کرومایټ کان کیندنې عملیات',
             ferrochrome: 'د فیروکروم تولید',
             logar: 'د لوګر کرومایټ ذخیرې',
           },
         },
         marble: {
           title: 'مرمر',
           items: {
             white: 'د پریمیم سپین مرمر',
             herat: 'د هرات کانونه',
             architectural: 'د معمارۍ ډبره',
             processing: 'د مرمر پروسس کولو سامانګانې',
             exports: 'د مرمر صادراتي عملیات',
             varieties: '75+ د رنګونو ډولونه',
             trade: 'نړیواله ډبرو سوداګري',
           },
         },
         coal: {
           title: 'ذغال',
           items: {
             basins: 'د ذغال سینونه',
             underground: 'د زیرزمیني عملیات',
             baghlan: 'د بغلان ولایت',
             metallurgical: 'د میټالورژیکل ذغال',
             thermal: 'د ترمال ذغال ذخیرې',
             processing: 'د ذغال پروسس کولو پلانټونه',
             energy: 'د انرژي تولید',
           },
         },
         talcBarite: {
           title: 'ټالک او باریټ',
           items: {
             talc: 'د لوړ پاکوالي ټالک',
             drilling: 'د ډرل کولو باریټ',
             salt: 'د مالګې ذخیرې',
             talcProcessing: 'د ټالک پروسس کول',
             bariteConcentrates: 'د باریټ غلظتونه',
             industrial: 'د صنعتي کارونې',
           },
         },
         gypsumLimestone: {
           title: 'جیپسم او لایمسټون',
           items: {
             gypsum: 'د جیپسم ذخیرې',
             limestone: 'د لایمسټون کانونه',
             cement: 'د سیمنټ تولید',
             construction: 'د ساختماني مواد',
           },
         },
         clayKaolin: {
           title: 'خټه او کاولین',
           items: {
             kaolin: 'د کاولین ذخیرې',
             ceramic: 'د سیرامیک خټکي سرچینې',
             pottery: 'د کښتۍ او ټایل تولید',
             paper: 'د کاغذ صنعت کارونې',
             refractory: 'د مقاوم مواد',
             paint: 'د رنګ او پوښ صنعت',
             pharmaceutical: 'د درملو کارونې',
             cosmetic: 'د کاسمیټیک درجې کاولین',
           },
         },
         sulfurPyrite: {
           title: 'سلفر او پایریټ',
           items: {
             sulfur: 'د سلفر ذخیرې',
             pyrite: 'د پایریټ سرچینې',
             fertilizer: 'د سره تولید',
             chemical: 'د کیمیاوي صنعت',
             acid: 'د سلفریک اسید تولید',
             mining: 'د کان کیندنه او استخراج',
             agricultural: 'د کرنیزو کارونو',
             processing: 'د پایریټ پروسس کول',
           },
         },
         micaFeldspar: {
           title: 'مایکا او فیلډسپار',
           items: {
             mica: 'د مایکا ذخیرې',
             feldspar: 'د فیلډسپار سرچینې',
             electronics: 'د الیکټرونیک صنعت',
             glass: 'د ګیلاس تولید',
             sheets: 'د مایکا پاڼو تولید',
             ceramic: 'د سیرامیک او کښتۍ',
             insulation: 'د عایق مواد',
             abrasive: 'د سایډونو کارونې',
           },
         },
         graphiteCarbon: {
           title: 'ګرافایټ او کاربن',
           items: {
             graphite: 'د ګرافایټ ذخیرې',
             battery: 'د بیټرۍ انوډ مواد',
             steel: 'د پولاد تولید',
             lubricant: 'د لوبریکانټ کارونې',
             refractory: 'د مقاوم محصولات',
             carbonFiber: 'د کاربن فایبر مواد',
           },
         },
         phosphatePotash: {
           title: 'فاسفیټ او پوټاش',
           items: {
             phosphate: 'د فاسفیټ ذخیرې',
             fertilizer: 'د سره تولید',
             agricultural: 'د کرنیزو تغذیه',
             food: 'د خوراک صنعت کارونې',
             potash: 'د پوټاش سرچینې',
             chemical: 'د کیمیاوي پروسس کول',
           },
         },
         quartzSilica: {
           title: 'کوارټز او سلیکا',
           items: {
             quartz: 'د کوارټز ذخیرې',
             silica: 'د سلیکا شګو سرچینې',
             glass: 'د ګیلاس تولید',
             semiconductor: 'د سیمیکنډکټر صنعت',
             foundry: 'د فاونډري کارونې',
             filtration: 'د اوبو فلټریشن',
           },
         },
         refractories: {
           title: 'د اور وړ مواد او صنعتي معدنونه',
           items: {
             magnesite: 'د میګنزایټ ذخیرې',
             bentonite: 'د بینټونایټ ذخیرې',
             pyrophyllite: 'د پایروفیلیټ ذخیرې',
             asbestos: 'د اسبسټوس ذخیرې',
             ballClay: 'د بال کلي ذخیرې',
             kaolinVariants: 'د کاولین ډولونه',
             diatomite: 'د ډایاټومایټ ذخیرې',
           },
         },
         dimensionStones: {
           title: 'د ابعاد او ډیزاین ډبرې',
           items: {
             granite: 'د ګرانیټ ذخیرې',
             sandstone: 'د شګو ډبرو ذخیرې',
             travertine: 'د ټراورټین ذخیرې',
             soapstone: 'د صابون ډبرو ذخیرې',
             quartzite: 'د کوارټزایټ ذخیرې',
             dioriteGabbro: 'د ډایورایټ / ګابرو',
           },
         },
       },
     },
     provinceDetail: {
       resourceProfile: 'د ولایتي سرچینو پروفایل',
       provincialStatistics: 'د ولایتي احصائیه',
       downloadBrief: 'د پانګه اچونې لنډیز ډاونلوډ کړئ',
       mineralResources: 'د معدني سرچینو',
       keyDeposits: 'د کلیدي معدني ذخیرو',
       opportunities: 'فرصتونه',
       investmentOpportunities: 'د پانګه اچونې فرصتونه',
       developmentTimeline: 'د پراختیا وخت لیکه',
       keyMilestones: 'د کلیدي پرمختګونو',
       highlights: {
         richPotential: 'د معدني سرچینو بډای پوتانشیل',
         strategicOpportunities: 'د ستراتیژیکو پراختیا فرصتونه',
         investmentReady: 'د پانګه اچونې چمتو پروژې',
         infrastructurePlans: 'د زیربنا پراختیا پلانونه',
       },
     },
     hero: {
       tagline: 'د افغان ولس له خوا، د افغان ولس لپاره، او د افغان ولس په واسطه.',
       title: 'د افغانستان ملي اقتصادي اصلاحاتو برنامه',
       subtitle: 'د یوې ملت راتلونکې د چانس په ژبه نه لیکل کیږي بلکې د ارادې په معمارۍ کې. او دا کنسورسیم د هغې ارادې په توګه ولاړ دی — یو ژوندی چوکاټ چې د افغانستان له مقاومت څخه نوي پیل ته رهبري کوي.',
       cta: 'د پانګه اچونې فرصتونه وڅیړئ',
     },
     stats: {
       mineralReserves: 'معدني ذخیرې',
       knownDeposits: 'پیژندل شوي ذخیرې',
       mineralTypes: 'د معدنو ډولونه',
       provinces: 'ولایتونه',
       estimatedValue: 'اټکل شوې ټولیزه ارزښت',
       acrossProvinces: 'په ټولو ولایتونو کې',
       criticalStrategic: 'مهم او ستراتیژیک',
       resourceRich: 'د سرچینو بډایه سیمې',
     },
     sectors: {
       copper: 'مس',
       lithium: 'لیتیم',
       gold: 'سره زر',
       gemstones: 'قیمتي ډبرې',
       iron: 'اوسپنه',
       rareEarth: 'نادرې خاورې',
       chromite: 'کرومایت',
       marble: 'مرمر',
       coal: 'ذغال',
       silver: 'سپین زر',
       tungsten: 'ټنگسټن',
       uranium: 'یورانیوم',
       salt: 'مالګه',
       gypsum: 'جیپسم',
       talc: 'ټالک',
       lead: 'سیس',
       zinc: 'زینک',
       limestone: 'لایمسټون',
       naturalGas: 'طبیعي ګاز',
       niobium: 'نیوبیم',
       tantalum: 'تانټالم',
       tourmaline: 'تورمالین',
       aquamarine: 'آکوامارین',
     },
     contact: {
       title: 'د پانګه اچونې پوښتنه',
        subtitle: 'د NERPA د اړیکو ټیم سره اړیکه ونیسئ',
       addressLabel: 'پته',
       emailLabel: 'بریښنالیک',
       phoneLabel: 'تلیفون',
       addressValue: 'لندن، انګلستان | کابل، افغانستان',
       name: 'بشپړ نوم',
       email: 'بریښنالیک',
       organization: 'سازمان',
       sector: 'د علاقې سکتور',
       message: 'پیغام',
      submit: 'پوښتنه واستوئ',
      submitting: 'د استولو په حال کې...',
      success: 'ستاسو پوښتنه په بریالیتوب سره واستول شوه. زموږ ټیم به ژر تاسو سره اړیکه ونیسي.',
      error: 'ستاسو د پوښتنې په استولو کې تېروتنه وشوه. مهرباني وکړئ بیا هڅه وکړئ.',
      successTitle: 'بریالیتوب',
      errorTitle: 'تېروتنه',
      submitAnother: 'نورې پوښتنه وسپارئ',
      selectSector: 'سکتور وټاکئ',
       namePlaceholder: 'خپل بشپړ نوم ولیکئ',
       emailPlaceholder: 'خپل بریښنالیک ولیکئ',
       organizationPlaceholder: 'د خپل سازمان نوم ولیکئ',
       messagePlaceholder: 'د پانګه اچونې علاقه یا پوښتنه تشریح کړئ...',
     },
      // (footer defined above with full fields)
     common: {
       learnMore: 'نور زده کړئ',
       viewDetails: 'توضیحات وګورئ',
       explore: 'وڅیړئ',
       readMore: 'نور ولولئ',
       trillion: 'ټریلیون',
       billion: 'میلیارد',
       million: 'ملیون',
     },
    expanded: {
      megaReserves: 'په معدني ذخیرو کې $30 ټریلیون',
      globalLeader: 'نړیوال معدني مشر',
      economicTransformation: 'اقتصادي بدلون',
      sustainableFuture: 'پایښتي راتلونکې',
      strategicPartnerships: 'ستراتیژیک نړیوال شراکتونه',
      technologyInnovation: 'ټیکنالوژي او نوښت',
      communityProsperity: 'د ټولنې بډایتوب',
    },
    provinces: {
      title: 'د افغانستان ولایتونه',
      subtitle: '34 د سرچینو بډایه سیمې',
      explore: 'ولایتونه وڅیړئ',
      mineralResources: 'معدني سرچینې',
      investmentOpportunities: 'د پانګه اچونې فرصتونه',
      viewDetails: 'د ولایت توضیحات وګورئ',
    },
    investment: {
      framework: 'د پانګه اچونې چوکاټ',
      opportunities: 'د پانګه اچونې فرصتونه',
      partnerships: 'د شراکت ماډلونه',
      incentives: 'مالي هڅونې',
      process: 'د پانګه اچونې پروسه',
    },
    timeline: {
      historical: 'تاریخي وخت',
      roadmap: 'د پراختیا نقشه',
      milestones: 'د پروژې مهمې پرمختګونه',
      vision2030: 'د 2026-2050 لید',
    },
    // (detailPage defined above with full fields)
    footerMegaMenu: {
      sustainability: 'د پایښت',
      resources: 'سرچینې',
      about: 'په اړه',
      viewAllProvinces: 'ټول 34 ولایتونه وګورئ →',
      environmentalProtection: 'د چاپیریال ساتنه',
      communityDevelopment: 'د ټولنې پراختیا',
      healthSafety: 'روغتیا او امنیت',
      workforceDevelopment: 'د کارګرانو پراختیا',
      landRestoration: 'د ځمکې بیا رغونه',
      waterStewardship: 'د اوبو مدیریت',
      reports: 'کلنۍ راپورونه',
      geologicalData: 'د ځمک پوهنيزو ډیټا',
      investmentGuides: 'د پانګه اچونې لارښودونه',
      maps: 'تعاملي نقشې',
      statistics: 'احصائیه',
      publications: 'خپرونې',
      researchPapers: 'د څیړنو مقالې',
      downloads: 'ډاونلوډونه',
      quickLinks: 'چټک لینکونه',
      overview: 'کتنه',
      minerals: 'معدنونه',
      operations: 'عملیات',
      investment: 'پانګه اچونه',
      processing: 'پروسس کول',
      smelting: 'سملټ کول',
      research: 'څیړنه',
      trade: 'سوداګري',
      framework: 'چوکاټ',
      opportunities: 'فرصتونه',
      partnerships: 'شراکتونه',
      process: 'پروسه',
      environmental: 'چاپیریال',
      community: 'ټولنه',
      safety: 'امنیت',
      workforce: 'کارګري',
      legal: 'قانوني',
      cookies: 'کوکیز',
      accessibility: 'لاسرسی',
      aboutUs: 'زموږ په اړه',
      mission: 'رسالت',
      vision: 'لید',
      team: 'زموږ ټیم',
      partners: 'شراکتوال',
      careers: 'دندې',
      news: 'خبرونه او تازه',
      faq: 'پوښتنې',
      technology: 'ټیکنالوژي',
      digitalMining: 'ډیجیټل کان کیندنه',
      aiAutomation: 'AI او اتوماتیک',
      dataAnalytics: 'د ډیټا تحلیل',
      remoteSensing: 'لرې سنجش',
      blockchain: 'بلاک چین تعقیب',
      iot: 'IoT او سینسرز',
      robotics: 'د کان کیندنې روبوټیک',
      innovation: 'نوښت مرکز',
      education: 'زده کړه',
      miningUniversity: 'د کان کیندنې پوهنتون',
      trainingPrograms: 'د روزنې پروګرامونه',
      scholarships: 'د زده کړو بورسونه',
      researchCenters: 'د څیړنو مرکزونه',
      onlineCourses: 'آنلاین کورسونه',
      certifications: 'تصدیقونه',
      workshops: 'ورکشاپونه',
      studentResources: 'د زده کړیالانو سرچینې',
      media: 'رسنۍ',
      pressReleases: 'د مطبوعاتو خپرونې',
      newsArticles: 'خبرونو مقالې',
      photoGallery: 'د عکسونو ګالري',
      videoLibrary: 'د ویډیو کتابتون',
      socialMedia: 'ټولنیز رسنۍ',
      mediaKit: 'د رسنیو کټ',
      events: 'پیښې',
      subscribe: 'ګډون',
      support: 'ملاتړ',
      helpCenter: 'د مرستې مرکز',
      documentation: 'اسناد',
      apiDocs: 'API اسناد',
      tutorials: 'لارښودونه',
      bugReport: 'د تېروتنې راپور',
      featureRequest: 'د ځانګړتیا غوښتنه',
      contactSupport: 'د ملاتړ سره اړیکه',
      becomePartner: 'شراکتوال شئ',
      currentPartners: 'اوسني شراکتوال',
      partnerPrograms: 'د شراکت پروګرامونه',
      jointVentures: 'مشترک پروژې',
      supplierNetwork: 'د عرضه کوونکو شبکه',
      technologyPartners: 'د ټیکنالوژي شراکتوال',
      academicPartners: 'د اکاډمیک شراکتوال',
      ngoPartners: 'د NGO شراکتوال',
      compliance: 'مطابقت',
      regulations: 'مقررات',
      environmentalCompliance: 'د چاپیریال مطابقت',
      safetyStandards: 'د امنیت معیارونه',
      laborStandards: 'د کارګرانو معیارونه',
      audits: 'د معایناتو او راپورونو',
      codeOfConduct: 'د چلند کوډ',
      whistleblower: 'د خبرتیا ورکولو تګلاره',
      jobOpenings: 'د دندو پرانیستل',
      internships: 'د کار زده کړه',
      benefits: 'ګټې',
      culture: 'د شرکت کلتور',
      diversity: 'تنوع او شمولیت',
      applyNow: 'اوس غوښتنه وکړئ',
      employeePortal: 'د کارګرانو پورټل',
      referralProgram: 'د راجع کولو پروګرام',
      geological: 'ځمک پوهنيز',
      exploration: 'وڅیړنه',
      incentives: 'هڅونې',
      disclaimer: 'انکار',
      connect: 'اړیکه',
      email: 'بریښنالیک',
      phone: 'تلیفون',
      offices: 'دفترونه',
    },
    statsLabels: {
      mineralReserves: 'معدني ذخیرې',
      knownDeposits: 'پیژندل شوي ذخیرې',
      mineralTypes: 'د معدنو ډولونه',
      provinces: 'ولایتونه',
      metricTons: 'میټریک ټنه',
      value: 'ارزښت',
      majorDeposits: 'لوی ذخیرې',
      target: 'هدف',
      globalRank: 'نړیوال درجه',
      globalShare: 'نړیواله برخه',
      gemstoneRegions: 'د قیمتي ډبرو سیمې',
      types: 'ډولونه',
      years: 'کلونه',
      annual: 'کلنی',
      ironOreReserves: 'د اوسپنې ذخیرې',
      jobs: 'دندې',
      goldReserves: 'د سرو زرو ذخیرې',
      goldBelts: 'د سرو زرو کمربندونه',
      artisanalMiners: 'دودیز کان کیندونکي',
      reeElements: 'REE عناصر',
      estimatedValue: 'اټکل شوی ارزښت',
      underExploration: 'د څیړنې لاندې',
      supplyImpact: 'د عرضه اغیزه',
      provenReserves: 'ثابت شوي ذخیرې',
      deposits: 'ذخیرې',
      primaryUse: 'لومړنی کارونې',
      cubicMeters: 'مکعب میټر',
      colors: 'رنګونه',
      annualPotential: 'کلنی پوتانشیل',
      qualityGrade: 'د کیفیت درجه',
      coalReserves: 'د ذغال ذخیرې',
      highQuality: 'لوړ کیفیت',
      majorBasins: 'لوی حوضې',
      strategicRole: 'ستراتیژیک رول',
      yearlyPotential: 'کلني پوتانشیل',
    },
    descriptions: {
      estimatedTotalValue: 'اټکل شوې ټولیزه ارزښت',
      acrossAllProvinces: 'په ټولو ولایتونو کې',
      criticalAndStrategic: 'مهم او ستراتیژیک',
      resourceRichRegions: 'د سرچینو بډایه سیمې',
      estimatedReserves: 'اټکل شوي ذخیرې',
      currentMarketEstimate: 'اوسنی بازار اټکل',
      activeExplorationSites: 'فعال څیړنې سایټونه',
      fullProductionCapacity: 'بشپړ تولید ظرفیت',
      largestReserves: 'ترټولو لوی ذخیرې',
      strategicImportance: 'ستراتیژیک اهمیت',
      potentialContribution: 'د پوتانشیل مرسته',
      preciousSemiPrecious: 'قیمتي او نیمه قیمتي',
      miningHeritage: 'د کان کیندنې میراث',
      exportPotential: 'د صادراتو پوتانشیل',
      estimatedWorth: 'اټکل شوی ارزښت',
      identifiedDeposits: 'پیژندل شوي ذخیرې',
      employmentPotential: 'د دندو پوتانشیل',
      atCurrentPrices: 'په اوسنیو نرخونو کې',
      majorFormations: 'لوی جوړښتونه',
      currentlyActive: 'اوس فعال',
      identifiedSpecies: 'پیژندل شوي ډولونه',
      strategicResources: 'ستراتیژیک سرچینې',
      potentialDiversification: 'د پوتانشیل تنوع',
      exportPotentialValue: 'د صادراتو پوتانشیل',
      acrossProvinces: 'په ولایتونو کې',
      industrialApplication: 'صنعتي کارونې',
      uniqueVarieties: 'ځانګړي ډولونه',
      exportRevenue: 'د صادراتو عاید',
      internationalStandard: 'نړیوال معیار',
      metallurgicalGrade: 'د فلزاتو درجه',
      domesticSupply: 'کورنی عرضه',
    },
    indexPage: {
      hero: {
        title: 'کان کیندنه او معدنونه',
        subtitle: 'د سرچینو حاکمیت کیسه',
        readMore: 'نور ولولئ',
      },
      overview: {
        title: 'د سرچینو حاکمیت',
        subtitle: 'بنسټ',
        description: 'افغانستان د نړۍ ترټولو مهمو نا پراختیا شویو معدني ذخیرو څخه یو لري، چې ارزښت یې له $30 ټریلیون څخه زیات دی. دا غیر معمولي طبیعي سرچینو بډایتوب - له لیتیم او مس څخه تر نادرې خاورې او قیمتي ډبرو پورې - د ملي بډایتوب، سیمه‌ایز پراختیا، او د مرکزي آسیا او نورو سیمو د بشپړ اقتصادي بدلون لپاره د بې‌ساري فرصت استازیتوب کوي.',
        statsTitle: 'د معدني بډایتوب کتنه',
        statsSubtitle: 'د شمیرو له مخې',
      },
      geological: {
        title: 'د ځمکې پوهنې چوکاټ',
        subtitle: 'د ژور وخت میراث',
        description: 'د افغانستان غیر معمولي معدني بډایتوب د دریو لویو ټیکټونیک پلیټونو د سره راتلو په ځای کې د هغه ځانګړي موقعیت څخه راځي. د سلو ملیونونو کلونو په اوږدو کې، دا د ځمکې پوهنې قوې د معدني سیمو، د بدلون کمربندونو، او د نفوذ کمپلیکسونو رامینځته کړل چې اوس د نړیوال درجه ذخیرو میزبان دي.',
        quote: 'د افغان خاورې لاندې معدني بډایتوب یوازې اقتصادي فرصت نه دی، بلکې د یو بډای او خپلواک ملت لپاره بنسټ دی.',
      },
      nationalStrategy: {
        title: 'ملي ستراتیژي',
        subtitle: 'ستراتیژیک لید',
        description: 'یو بشپړ ملي معدني ستراتیژي د پایښت وړ پراختیا لارښود کوي، د اقتصادي وده سره د چاپیریال ساتنې او د ټولنې ګټې توازن ساتي. دا چوکاټ ډاډمن کوي چې معدني بډایتوب ټولو افغانانو ته خدمت کوي پداسې حال کې چې مسؤلیت لرونکي نړیوال پانګه اچونه جذب کوي.',
      },
      economicImpact: {
        title: 'اقتصادي بدلون',
        subtitle: 'ملي بډایتوب',
        description: 'د افغانستان د معدني سکتور پراختیا به ملي اقتصاد بدل کړي، د سلو زرو دندو رامینځته کول، د ملیاردونو صادراتو عاید تولیدول، او د صنعتي پراختیا او اقتصادي خپلواکۍ لپاره بنسټ جوړول.',
      },
      copper: {
        title: 'د مس برتری',
        subtitle: 'ستراتیژیک فلز',
        description: 'د افغانستان د مس ذخیرې د نړۍ ترټولو لویو نا پراختیا شویو ذخیرو څخه دي، چې ټولیز اټکل شوی ذخیره 600 ملیون میټریک ټنه دی چې ارزښت یې $8T دی. د مس عینک ذخیره یوازې شاوخوا 125 ملیون ټنه مس لري، چې له 50+ لویو ذخیرو سره چې په څو ولایتونو کې دي، د صنعتي پراختیا او اقتصادي بدلون لپاره یو بې‌ساري بنسټ رامینځته کوي.',
        statsTitle: 'د مس سرچینې',
        statsSubtitle: 'د ذخیرو تحلیل',
        detailTitle: 'د مس پراختیا',
        detailSubtitle: 'پروژې او زیربنا',
        detailDescription: 'د مس سکتور بشپړه پراختیا له څیړنې څخه تر پروسس کولو پورې، د پایښت وړ استخراج او ارزښت زیاتولو پر تمرکز سره.',
        processingTitle: 'د مس پروسس کول',
        processingSubtitle: 'د ارزښت زیاتول',
        processingDescription: 'د مس عصري پروسس کولو سامانګانې به خام کان د تصفیه شویو مس محصولاتو ته بدل کړي، د کورني ارزښت نیول، او د سملټ کولو، تصفیه کولو، او تولید عملیاتو کې د ماهرو دندو رامینځته کول.',
      },
      lithium: {
        title: 'د لیتیم راتلونکی',
        subtitle: 'د انرژي بدلون',
        description: 'په داسې حال کې چې نړۍ بریښنایی موټرونو او د تجدید وړ انرژي ذخیره کولو ته بدلیږي، د افغانستان عظیم لیتیم ذخیرې - چې اټکل شوی 215 ملیون میټریک ټنه دی چې ارزښت یې $8 ټریلیون دی - ملت د دې مهم معدن کې د بې‌شکه نړیوال مشر په توګه موقعیت ورکوي. د نړۍ د پیژندل شویو لیتیم ذخیرو 45% سره، افغانستان به د پاک انرژي انقلاب راتلونکی تعریف کړي.',
        statsTitle: 'د لیتیم پوتانشیل',
        statsSubtitle: 'نړیوال اهمیت',
        detailTitle: 'د لیتیم ستراتیژي',
        detailSubtitle: 'د پراختیا چوکاټ',
        detailDescription: 'د لیتیم سرچینو ستراتیژیکه پراختیا د بریښنایی موټرونو بیټریو او د انرژي ذخیره کولو سیسټمونو لپاره د نړیوال غوښتنې پوره کولو لپاره.',
        geologyTitle: 'د پګماتایټ ځمک پوهنه',
        geologySubtitle: 'د لیتیم جوړښتونه',
        geologyDescription: 'د افغانستان د لیتیم لرونکي پګماتایټونه، چې د ګرانیټیک ماګما د ورو ورو کریسټالیزیشن له لارې رامینځته شوي، د سپوډومین او لیپیدولایټ غیر معمولي غلظت لري - د لومړنیو لیتیم کان معدنونه چې د نړیوال پاک انرژي بدلون ته انرژي ورکوي.',
        quote: 'د افغانستان د لیتیم ذخیرې کولی شي د نړۍ د پاک انرژي بدلون ته انرژي ورکړي، ملت د اقلیمي بدلون سره د مبارزې کې د اړین شریک په توګه موقعیت ورکوي.',
      },
      gold: {
        title: 'د سرو زرو میراث',
        subtitle: 'قیمتي فلزات',
        description: 'د افغانستان د سرو زرو ذخیرې 27,000 میټریک ټنه، چې د بدخشان څخه تر تخار پورې په 45 لویو سرو زرو کمربندونو کې ویشل شوي، د پخوانۍ دودیزو دودونو او د بې‌ساري صنعتي فرصت استازیتوب کوي. د $4.4 ټریلیون ارزښت لرونکو ذخیرو سره چې 350,000 دودیز کان کیندونکي ملاتړ کوي، افغانستان د نړیوالو قیمتي فلزاتو بازارونو کې د غالب قوت په توګه تیار دی.',
        statsTitle: 'د سرو زرو سرچینې',
        statsSubtitle: 'پخوانی بډایتوب',
        detailTitle: 'د سرو زرو سکتور پراختیا',
        detailSubtitle: 'استخراج او پروسس کول',
        detailDescription: 'د سرو زرو کان کیندنې عملیاتو عصري کول د دودیزو کان کیندونکو د ادغام، د چاپیریال د پابندۍ، او د ارزښت زنځیر پراختیا پر تمرکز سره.',
        depositsTitle: 'د لومړنیو سرو زرو ذخیرې',
        depositsSubtitle: 'سخت ډبره کان کیندنه',
        depositsDescription: 'د افغانستان د لومړنیو سرو زرو ذخیرې د اوروجینیک پیښو سره تړلي کوارټز رګونو کې رامینځته کیږي، چې دواړه لیدل کیدونکي سره زر او د سلفایډ میزبان معدني کول لري چې عصري پروسس کولو تخنیکونو ته اړتیا لري.',
      },
      gemstones: {
        title: 'د ځمکې خزانې',
        subtitle: 'قیمتي ډبرې',
        description: 'د افسانوي پنجشیر زمردونو څخه تر د بدخشان د پخوانیو لاجورد کانونو پورې، د افغانستان د قیمتي ډبرو میراث شپږ زره کلونه پوښي. دا قیمتي ډبرې، چې د ورېښم لارې سره سوداګرۍ کېدلې، په نړیوالو بازارونو کې د پریمیم نرخونو امر کوي.',
        statsTitle: 'د قیمتي ډبرو میراث',
        statsSubtitle: 'پخوانی خزانې',
        detailTitle: 'د قیمتي ډبرو برتری',
        detailSubtitle: 'کان کیندنه او پروسس کول',
        detailDescription: 'د پایښت وړ قیمتي ډبرو کان کیندنې او پروسس کولو وړتیاوو پراختیا د نړیوالو تصدیقونو او د کیفیت تضمین سره.',
      },
      detailItems: {
        copper: [
          { title: 'د مس عینک ذخیره', description: 'د نړۍ ترټولو لویو نا پراختیا شویو مس ذخیرو څخه یو چې د لوګر ولایت کې موقعیت لري، چې اټکل شوی 125m ټنه مس لري.' },
          { title: 'د حاجیگک ذخیرې', description: 'د بامیان ولایت کې د مس-اوسپنې عظیم کمپلیکس چې دواړه مس او اوسپنې ذخیرې لري چې ارزښت یې له $2T څخه زیات دی.' },
          { title: 'د بلخاب ذخیره', description: 'د افغانستان شمال کې د مس مهم معدني کول چې څیړنې د لوړ درجه مس غلظتونه ښیي.' },
          { title: 'د پروسس کولو زیربنا', description: 'د عصري مس پروسس کولو سامانګانیو پراختیا چې سملټرونه او تصفیه کولو سامانګانې شاملې دي د کورني ارزښت زیاتولو لپاره.' },
          { title: 'د چاپیریال معیارونه', description: 'د پایښت وړ مس استخراج او پروسس کولو لپاره د نړیوالو چاپیریال معیارونو پلي کول.' },
          { title: 'د صادراتو ستراتیژي', description: 'د نړیوالو مس بازارونو سره ستراتیژیک شراکتونه او د اغیزمنو صادراتو کوریډورونو پراختیا.' },
        ],
        lithium: [
          { title: 'د غزني ذخیرې', description: 'د غزني ولایت کې کشف شوي لوی لیتیم لرونکي پګماتایټ جوړښتونه چې غیر معمولي پاکوالی لري.' },
          { title: 'د نورستان سیمه', description: 'د غرني نورستان ولایت په اوږدو کې پراخه لیتیم معدني کول، چې د نړۍ ترټولو لویو ذخیرو څخه یو دی.' },
          { title: 'د بیټرۍ درجه لیتیم', description: 'د بریښنایی موټرونو بازارونو لپاره د بیټرۍ درجه لیتیم کاربونیټ تولید کولو د پروسس کولو وړتیاوو پراختیا.' },
          { title: 'ستراتیژیک شراکتونه', description: 'د پایښت وړ لیتیم استخراج او پروسس کولو لپاره د مخکښو ټیکنالوژي شرکتونو سره خبرې اترې.' },
          { title: 'د څیړنې سامانګانې', description: 'د نوښت استخراج تخنیکونو پراختیا لپاره د لیتیم څیړنې مرکزونو رامینځته کول.' },
          { title: 'نړیوال عرضه زنځیر', description: 'د بریښنایی سامان او د تجدید وړ انرژي سکتورونو لپاره د نړیوالو لیتیم عرضه زنځیرونو کې ادغام.' },
        ],
        gold: [
          { title: 'د بدخشان سره زر کمربند', description: 'د بدخشان د ځمک پوهنې کمربند سره د پراخو سرو زرو معدني کول چې څو لوړ درجه ذخیرې لري.' },
          { title: 'د تخار ذخیرې', description: 'د تخار ولایت کې د سرو زرو مهم الویویل او سخت ډبره ذخیرې چې فعال دودیز کان کیندنه لري.' },
          { title: 'عصري استخراج', description: 'د عصري سرو زرو استخراج تخنیکونو پلي کول د بیرته نیولو کچو د ښه کولو او د چاپیریال اغیزو د کمولو لپاره.' },
          { title: 'د تصفیه کولو ظرفیت', description: 'د سرو زرو تصفیه کولو سامانګانیو پراختیا د نړیوال معیار سرو زرو بارونو او بولیونو تولید لپاره.' },
          { title: 'دودیز ادغام', description: 'د روزنې او سامان ملاتړ سره د دودیزو کان کیندونکو د رسمي اقتصاد کې ادغام پروګرامونه.' },
          { title: 'امنیت او تضمین', description: 'د شخړې وړ سرو زرو تصدیق او د تعقیب سیسټمونو پلي کول.' },
        ],
        gemstones: [
          { title: 'د پنجشیر زمردونه', description: 'د پنجشیر دره کې د نړیوال شهرت لرونکي زمرد کانونه چې غیر معمولي کیفیت لرونکي قیمتي ډبرې تولیدوي چې د نړۍ ټولو سټونکو لخوا لټل کیږي.' },
          { title: 'د بدخشان لاجورد', description: 'د بدخشان د پخوانیو کانونو څخه د نړۍ ترټولو غوره لاجورد، چې د ورېښم لارې سره د زرو کلونو لپاره سوداګرۍ کېدلې.' },
          { title: 'یاقوت او نیلم', description: 'د هېواد په څو ولایتونو کې د لوړ کیفیت کارنډم ذخیرې چې یاقوت او نیلم تولیدوي.' },
          { title: 'د تورمالین ډولونه', description: 'د تورمالین متنوع ذخیرې چې د نادرې کږو او انډیکولایټ ډولونه شاملې دي چې د قیمتي ډبرو علاقه مندانو لخوا ارزښت لري.' },
          { title: 'د قیمتي ډبرو پروسس کول', description: 'د صادراتو دمخه د ارزښت زیاتولو لپاره د قیمتي ډبرو پرې کولو او پولیش کولو سامانګانیو پراختیا.' },
          { title: 'د تصدیق سیسټمونه', description: 'د افغان قیمتي ډبرو لپاره د قیمتي ډبرو پوهنې تصدیق او د اصل تعقیب پلي کول.' },
        ],
        iron: [
          { title: 'د حاجیگک اوسپنه', description: 'د افغانستان مرکز کې د آسیا ترټولو لویو اوسپنې ذخیرو څخه یو چې ذخیرې یې له 22 ملیارد ټنو څخه زیاتې دي.' },
          { title: 'د پولاد تولید', description: 'د کورني ساختماني غوښتنې پوره کولو لپاره د یوځای پولاد تولید سامانګانیو پلانونه.' },
          { title: 'د زیربنا پولاد', description: 'د پولونو او ودانۍ شاملولو سره د ملي زیربنا پراختیا لپاره ستراتیژیک اهمیت.' },
          { title: 'د صادراتو پوتانشیل', description: 'د سویلي او مرکزي آسیا د سیمه‌ایزو بازارونو لپاره د اوسپنې صادراتو وړتیاوو پراختیا.' },
          { title: 'د میګنیټایټ کیفیت', description: 'د مستقیم کمولو اوسپنه جوړولو پروسسو لپاره د لوړ درجه میګنیټایټ ذخیرې.' },
          { title: 'د دندو رامینځته کول', description: 'د کان کیندنې او پروسس کولو کې د زرو زرو مستقیم او غیر مستقیم دندو رامینځته کولو پوتانشیل.' },
        ],
        rareEarth: [
          { title: 'د هلمند ذخیرې', description: 'د هلمند ولایت کې کشف شوي د نادرې خاورې عناصرو مهم غلظتونه چې متنوع عنصر پروفایلونه لري.' },
          { title: 'د ټیکنالوژي معدنونه', description: 'د بریښنایی سامان، د تجدید وړ انرژي، او د دفاع کارونو لپاره مهم معدنونه چې نړیوال ستراتیژیک اهمیت لري.' },
          { title: 'د پروسس کولو ټیکنالوژي', description: 'د چاپیریال مسؤلیت لرونکي نادرې خاورې پروسس کولو او جلا کولو تخنیکونو پراختیا.' },
          { title: 'نیوډیمیم او پراسیوډیمیم', description: 'د بریښنایی موټرونو او د باد ټرباینونو کې کارول کیدونکو دایمي میګنیټونو لپاره کلیدي عناصر.' },
          { title: 'د عرضه امنیت', description: 'د یو سرچینې نادرې خاورې عرضه کې د نړیوال تکیه د کمولو پوتانشیل.' },
          { title: 'د څیړنې همکارۍ', description: 'د نادرې خاورې څیړنې او د پایښت وړ استخراج میتودونو لپاره نړیوال شراکتونه.' },
        ],
        industrial: [
          { title: 'مرمر او ګرانایټ', description: 'د نړیوال درجه مرمر ذخیرې چې څو رنګونه او بڼې لري، د نړۍ د معمارۍ کارونو لپاره صادر کیږي.' },
          { title: 'ټالک او صابون ډبره', description: 'د لوړ پاکوالی ټالک ذخیرې چې د کاسمیټیک، درملو، او صنعتي کارونو کې کارول کیږي.' },
          { title: 'د کرومایټ ذخیرې', description: 'د سټینلیس پولاد تولید او کیمیاوي صنعتونو لپاره مهم کرومایټ ذخیرې.' },
          { title: 'د باریټ تولید', description: 'د تیلو کان کیندنې کارونو او صنعتي کیمیاوي تولید لپاره د لوړ کیفیت باریټ.' },
          { title: 'د مالګې ذخیرې', description: 'د خوراک پروسس کولو او کیمیاوي صنعتونو لپاره د ډبرو مالګې او د بخار کیدو ذخیرې.' },
          { title: 'د سیمنټ مواد', description: 'د کورني سیمنټ تولید ظرفیت ملاتړ کونکي د لایمسټون او خټکي ذخیرې.' },
        ],
        processing: [
          { title: 'د سملټ کولو سامانګانې', description: 'د مس، اوسپنې، او نورو فلزاتو لپاره عصري سملټ کولو عملیات چې د ککړتیا کنټرول سیسټمونه لري.' },
          { title: 'د تصفیه کولو ظرفیت', description: 'د صادراتو دمخه د ارزښت اضافه پروسس کولو لپاره د معدني تصفیه کولو زیربنا پراختیا.' },
          { title: 'د کیفیت کنټرول', description: 'د نړیوالو کیفیت معیارونو او د ازمایښت لابراتوارونو پلي کول.' },
          { title: 'د خرد کولو او غربال کولو', description: 'د اغیزمن کان چمتو کولو او غلظت لپاره د پرمختللي معدني پروسس کولو سامان.' },
          { title: 'د تیلنګ مدیریت', description: 'د چاپیریال مسؤلیت لرونکي تیلنګ ذخیره کولو او درملنې سامانګانې.' },
          { title: 'د انرژي سیسټمونه', description: 'د پایښت وړ کان کیندنې او پروسس کولو عملیاتو لپاره د تجدید وړ انرژي ادغام.' },
        ],
        research: [
          { title: 'د ځمک پوهنې سروی', description: 'په ټولو 34 ولایتونو کې د ځمک پوهنې بشپړ نقشه کول او د سرچینو ارزونه.' },
          { title: 'د کور ډرل کول', description: 'د معدني سرچینو او ذخیرو د اندازه کولو لپاره د څیړنې ډرل کولو پراخ پروګرامونه.' },
          { title: 'د لابراتوار تحلیل', description: 'د معدني ځانګړتیاوو او د درجې تعیین لپاره عصري تحلیلي لابراتوارونه.' },
          { title: 'د ډیټا مدیریت', description: 'د ځمک پوهنې ډیټا، د څیړنې پایلو، او د سرچینو اټکلونو لپاره ډیجیټل ډیټابیسونه.' },
          { title: 'د اکاډمیک شراکتونه', description: 'د ځمک پوهنې څیړنې او روزنې لپاره د نړیوالو پوهنتونونو سره همکارۍ.' },
          { title: 'د ټیکنالوژي لیږد', description: 'د څیړنې او کان کیندنې تخنیکونو کې د کورني تخنیکي ظرفیت جوړولو پروګرامونه.' },
        ],
        trade: [
          { title: 'د صادراتو کوریډورونه', description: 'د پاکستان، ایران، او مرکزي آسیا همسایګانو له لارې د اغیزمنو صادراتو لارو پراختیا.' },
          { title: 'د سوداګرۍ تړونونه', description: 'د معدني صادراتو اسانه کولو لپاره دوه اړخیز او څو اړخیز سوداګرۍ تړونونه.' },
          { title: 'د نرخونو میکانزمونه', description: 'د نړیوالو توکو بازارونو او د کیفیت معیارونو پر بنسټ شفاف نرخونه.' },
          { title: 'د لاجستیک زیربنا', description: 'د معدني ترانسپورټ لپاره د لارو، ریل پټلۍ، او د پولې سامانګانیو کې پانګه اچونه.' },
          { title: 'د بازار تنوع', description: 'د آسیا، اروپا، او منځني ختیځ متنوع بازارونو ته د لاسرسي ستراتیژي.' },
          { title: 'د ارزښت زنځیر پراختیا', description: 'د پروسس کولو له لارې د صادراتو دمخه د ارزښت زیاتولو پر تمرکز.' },
        ],
        sustainability: [
          { title: 'د چاپیریال ساتنه', description: 'د کان کیندنې عملیاتو لپاره سخت چاپیریال مقررات او نګراني.' },
          { title: 'د ټولنې پراختیا', description: 'د کان کیندنې سیمو کې د عاید شریکول او د ټولنې پراختیا پروګرامونه.' },
          { title: 'د اوبو مدیریت', description: 'د کان کیندنې او پروسس کولو عملیاتو کې د پایښت وړ اوبو کارونې او درملنې.' },
          { title: 'د بیا رغونې پلانونه', description: 'د ټولو عملیاتو لپاره د کان بندول او د ځمکې بیا رغونه اړتیاوې.' },
          { title: 'روغتیا او امنیت', description: 'د کان کیندنې عملیاتو کې د کارګرانو روغتیا او امنیت لپاره نړیوال معیارونه.' },
          { title: 'د اقلیم پاملرنې', description: 'د کان کیندنې پلان کولو کې د اقلیمي بدلون پاملرنو ادغام.' },
        ],
      },
      iron: {
        title: 'د پولاد بنسټ',
        subtitle: 'صنعتي بنسټ',
        description: 'د حاجیگک عظیم اوسپنې ذخیره او 100 نور لوی سایټونه د افغانستان د صنعتي راتلونکي لپاره بنسټ استازیتوب کوي. له 22 ملیارد ټنو څخه زیاتو ذخیرو سره چې ارزښت یې $3.5 ټریلیون دی، افغانستان د نړیوال پولاد تولید لپاره کافي اوسپنه لري چې د لسیزو لپاره وړاندې کړي، چې پوتانشیل یې 500,000 مستقیم دندې رامینځته کوي.',
        statsTitle: 'د اوسپنې سرچینې',
        statsSubtitle: 'صنعتي پوتانشیل',
        detailTitle: 'د اوسپنې او پولاد پراختیا',
        detailSubtitle: 'د ارزښت زنځیر',
        detailDescription: 'د اوسپنې کان کیندنې او پولاد تولید یوځای پراختیا د ملي زیربنا ملاتړ او د دندو رامینځته کول.',
        processingTitle: 'د پولاد تولید',
        processingSubtitle: 'صنعتي ظرفیت',
        processingDescription: 'د یوځای پولاد تولید سامانګانیو پراختیا به د افغانستان د ساختماني سکتور بدل کړي، د وارداتو تکیه کمول، او د پروسس کولو او تولید کې د زرو صنعتي دندو رامینځته کول.',
      },
      rareEarth: {
        title: 'ستراتیژیک عناصر',
        subtitle: 'د نادرې خاورې معدنونه',
        description: 'د عصري ټیکنالوژي لپاره مهم نادرې خاورې عناصر - له سمارټ فونونو څخه تر بریښنایی موټرونو او د باد ټرباینونو پورې - په افغانستان کې په 40 لویو ذخیرو کې کشف شوي دي، چې ټولیز اټکل شوی ارزښت $5 ټریلیون دی. دا افغانستان د نړیوالو ټیکنالوژي عرضه زنځیرونو کې د کلیدي لوبغاړي په توګه موقعیت ورکوي، چې د نادرې خاورې د بازار بشپړ منظر بدل کولی شي.',
        statsTitle: 'د نادرې خاورې پوتانشیل',
        statsSubtitle: 'د ټیکنالوژي فلزات',
        detailTitle: 'د نادرې خاورې پراختیا',
        detailSubtitle: 'د ټیکنالوژي معدنونه',
        detailDescription: 'د نادرې خاورې سرچینو ستراتیژیکه پراختیا د نړیوالو ټیکنالوژي صنعتونو او د تجدید وړ انرژي بدلون ملاتړ لپاره.',
      },
      lapis: {
        title: 'د نیلي میراث',
        subtitle: 'لاجورد',
        description: 'د بدخشان پخواني لاجورد کانونه د 6,000 کلونو څخه زیاتو وختونو لپاره نړۍ ته د دې قیمتي نیلي ډبرې وړاندې کړي دي. د توتانخامون د مرګ ماسک څخه تر رنسانس شاهکارونو پورې په هر څه کې کارول شوي، افغان لاجورد د نړۍ ترټولو غوره پاتې دی.',
      },
      emerald: {
        title: 'شین اور',
        subtitle: 'د پنجشیر زمردونه',
        description: 'د پنجشیر دره زمردونه د نړۍ ترټولو قیمتي قیمتي ډبرو څخه دي، چې غیر معمولي رنګ غلظت او روښانتیا ښیي. دا ډبرې، چې د بدلون میکا شیسټونو کې رامینځته شوي، په نړیوالو بازارونو کې د پریمیم نرخونو امر کوي.',
      },
      ruby: {
        title: 'د کارنډم خزانې',
        subtitle: 'یاقوت او نیلم',
        description: 'افغانستان د څو ولایتونو کې د مرمر میزبان ذخیرو څخه غیر معمولي یاقوت او نیلم تولیدوي. د جگډلک د کبوتر وینې یاقوتونه او د هندوکش نیلي نیلمونه د نړۍ ترټولو غوره کارنډم نمونو څخه دي.',
      },
      tourmaline: {
        title: 'د ویښتو کریسټالونه',
        subtitle: 'د تورمالین ډولونه',
        description: 'افغانستان د نړۍ ترټولو زړه راښکونکي تورمالین نمونې تولیدوي، چې د نادرې کږو او انډیکولایټ ډولونه شاملې دي چې د نړۍ ټولو سټونکو او جواهراتو لخوا لټل کیږي.',
      },
      aquamarine: {
        title: 'د سمندر نیلي کریسټالونه',
        subtitle: 'د اکوامارین خزانې',
        description: 'د کونړ او نورستان ولایتونو د پګماتایټ ساحې غیر معمولي اکوامارین کریسټالونه تولیدوي، چې د دوی د خالص نیلي رنګ او د یادولو وړ شفافیت لپاره ارزښت لري چې د نړۍ د هر موقعیت څخه نمونو سره سیالي کوي.',
      },
      chromite: {
        title: 'د فلزاتو بنسټ',
        subtitle: 'د کرومایټ ذخیرې',
        description: 'د سټینلیس پولاد تولید او صنعتي کیمیاوي موادو لپاره اړین، د افغانستان کرومایټ ذخیرې مهم صادراتي پوتانشیل او صنعتي پراختیا فرصتونه استازیتوب کوي.',
        statsTitle: 'د کرومایټ سرچینې',
        statsSubtitle: 'صنعتي فلز',
      },
      marble: {
        title: 'د پاچاهانو ډبره',
        subtitle: 'مرمر او ګرانایټ',
        description: 'د افغانستان مرمر، چې د غیر معمولي کیفیت او متنوع رنګونو لپاره مشهور دی، د نړۍ د معمارۍ شاهکارونو ښکلا ورکوي. د ملت مرمر کانونه د ډبرو تولیدوي چې د ترټولو غوره ایټالوي او ترکیوي ډولونو سره سیالي کوي.',
        statsTitle: 'د مرمر سرچینې',
        statsSubtitle: 'د پریمیم ډبره',
      },
      coal: {
        title: 'د انرژي سرچینې',
        subtitle: 'د ذغال ذخیرې',
        description: 'د څو ولایتونو کې د ذغال مهم ذخیرې د انرژي امنیت وړاندې کوي او صنعتي پراختیا ملاتړ کوي، د پاک ذغال تخنیکونو او مسؤلیت لرونکي استخراج تمرینونو پر تمرکز سره.',
        statsTitle: 'د ذغال سرچینې',
        statsSubtitle: 'د انرژي امنیت',
      },
      industrial: {
        title: 'صنعتي بنسټ',
        subtitle: 'د ساختماني او تولید',
        description: 'د قیمتي فلزاتو او ستراتیژیک معدنونو څخه وروسته، افغانستان د صنعتي معدنونو عظیم ذخیرې لري - مرمر، کرومایټ، ټالک، او سیمنټ مواد - چې د ساختماني او تولید صنعتونو لپاره اړین دي.',
        detailTitle: 'د صنعتي معدنونه',
        detailSubtitle: 'د جوړولو بلاکونه',
        detailDescription: 'د کورني ساختماني او تولید سکتورونو ملاتړ لپاره د صنعتي معدني سرچینو پراختیا.',
      },
      processing: {
        title: 'د ارزښت زیاتول',
        subtitle: 'د پروسس کولو او تصفیه کولو',
        description: 'عصري معدني پروسس کولو زیربنا خام کان د تصفیه شویو محصولاتو ته بدلوي، د کورني ارزښت نیول، او د کان کیندنې د ارزښت زنځیر په اوږدو کې د ماهرو دندو فرصتونه رامینځته کوي.',
        detailTitle: 'د پروسس کولو زیربنا',
        detailSubtitle: 'صنعتي ظرفیت',
        detailDescription: 'د ارزښت زیاتولو او د صادراتو سیالي لپاره د عصري پروسس کولو سامانګانیو پراختیا.',
      },
      research: {
        title: 'د پوهې بنسټ',
        subtitle: 'د څیړنې او اکتشاف',
        description: 'د ځمک پوهنې څیړنې، د سرچینو ارزونه، او د کان کیندنې ټیکنالوژي پراختیا لپاره د ساینسي ظرفیت جوړول.',
        detailTitle: 'د څیړنې او پراختیا',
        detailSubtitle: 'د ساینسي برتری',
        detailDescription: 'د ځمک پوهنې څیړنې، د سرچینو ارزونه، او د کان کیندنې ټیکنالوژي پراختیا لپاره د ساینسي ظرفیت جوړول.',
      },
      trade: {
        title: 'نړیوال بازارونه',
        subtitle: 'د سوداګرۍ او صادراتو',
        description: 'د معدني عایدونو د ښه کولو لپاره د صادراتو زیربنا او د سوداګرۍ اړیکو جوړول.',
        detailTitle: 'د سوداګرۍ پراختیا',
        detailSubtitle: 'د بازار لاسرسی',
        detailDescription: 'د معدني عایدونو د ښه کولو لپاره د صادراتو زیربنا او د سوداګرۍ اړیکو جوړول.',
      },
      sustainability: {
        title: 'مسؤلیت لرونکي کان کیندنه',
        subtitle: 'د پایښت',
        description: 'په ټولو کان کیندنې عملیاتو کې د چاپیریال ساتنې، د ټولنې ګټې، او مسؤلیت لرونکي حکومت ادغام.',
        detailTitle: 'د پایښت وړ پراختیا',
        detailSubtitle: 'د چاپیریال او ټولنیز',
        detailDescription: 'په ټولو کان کیندنې عملیاتو کې د چاپیریال ساتنې، د ټولنې ګټې، او مسؤلیت لرونکي حکومت ادغام.',
      },
      cobaltNickel: {
        title: 'د بیټرۍ فلزات راتلونکی',
        subtitle: 'کوبالت او نیکل',
        description: 'د بریښنایی موټر تولید او د انرژي ذخیره کولو سیسټمونو لپاره مهم بیټرۍ فلزات، چې افغانستان د نړیوال پاک انرژي عرضه زنځیر کې موقعیت ورکوي.',
      },
      nickel: {
        title: 'نیکل لیټریټونه',
        subtitle: 'ستراتیژیک ذخیرې',
        description: 'نیکل لیټریټ ذخیرې د سټینلیس سټیل او بیټرۍ تولید لپاره مهم مواد برابروي، د بریښنایی موټر تولیدونکو څخه د زیاتو غوښتنو سره ستراتیژیک اهمیت رامینځته کوي.',
      },
      uranium: {
        title: 'د انرژي معدنونه',
        subtitle: 'د نیوکلیي سرچینې',
        description: 'ستراتیژیک یورانیوم ذخیرې د نیوکلیي انرژي پراختیا لپاره پوتانشیل برابروي او افغانستان د نړیوالو انرژي معدني بازارونو کې د مهم لوبغاړي په توګه موقعیت ورکوي.',
      },
      talc: {
        title: 'صنعتي پاکوالی',
        subtitle: 'ټالک او معدنونه',
        description: 'د لوړ پاکوالي ټالک ذخیرې د نړیوالو کاسمیټیکونو، درملو، او صنعتي کارونو ملاتړ کوي. د افغانستان ټالک سرچینې د نړۍ ترټولو مهمو سرچینو کې شمیرل کیږي.',
      },
      barite: {
        title: 'د حفرولو اړین',
        subtitle: 'د باریټ تولید',
        description: 'د تیلو او ګازو حفرولو کارونو لپاره د لوړ کیفیت باریټ، د سیمه‌ایز انرژي صنعتونو څخه د زیاتو غوښتنو سره د مهمو صادراتي فرصتونو رامینځته کول.',
      },
      salt: {
        title: 'سپین زر',
        subtitle: 'د مالګې ذخیرې',
        description: 'د خوراکي پروسس کولو، کیمیاوي صنعتونو، او د سیمې په اوږدو کې د دودیزو بازارونو ملاتړ کولو لپاره پراخه ډبرینې مالګې او بخاریدونکي ذخیرې.',
      },
      cement: {
        title: 'د ودانیو بلاکونه',
        subtitle: 'د سیمنټ مواد',
        description: 'د کورني سیمنټ تولید لپاره د لایم سټون او خټکي ذخیرو کثرت، چې د ملي بیا رغونې او د ټولو ولایتونو په اوږدو کې د زیربناوو پراختیا لپاره اړین دی.',
      },
      leadZinc: {
        title: 'د اساسي فلزاتو بنسټ',
        subtitle: 'سیس او زنک',
        description: 'د څو ولایتونو په اوږدو کې د سیس او زنک مهم ذخیرې د صنعتي پراختیا ملاتړ کوي او د ودانیو، موټرو، او تولیدي سکتورونو لپاره اړین مواد برابروي.',
      },
      smelting: {
        title: 'د فلزاتو بدلون',
        subtitle: 'د سملټ کولو عملیات',
        description: 'د عصري سملټ کولو سامانګانې خام کان د تصفیه شویو فلزاتو ته بدلوي، د صنعتي وړتیا او ماهر کارګرانو دنده رامینځته کوي پداسې حال کې چې د کورني ارزښت نیونه کوي.',
      },
      beneficiation: {
        title: 'د کان پروسس کول',
        subtitle: 'د ګټورتیا کارخانې',
        description: 'د پرمختللو معدني ګټورتیا سامانګانې د صادراتو دمخه کان متمرکز کوي او درجه ښه کوي، د ارزښت زیاتول او د لېږد لګښتونو کمول.',
      },
      laboratory: {
        title: 'د ساینسي بریا',
        subtitle: 'تحلیل او ازمایښت',
        description: 'د معدني ځانګړتیاوو، د کیفیت کنټرول، او څیړنو لپاره د عصري لیبوراټورۍ سامانګانې چې د څیړنې او تولید عملیاتو ملاتړ کوي.',
      },
      // (research defined above with detail fields)
      geologicalSurveys: {
        title: 'د راتلونکي نقشه کول',
        subtitle: 'د ځمک پوهنيزو سرویو',
        description: 'د ټولو 34 ولایتونو په اوږدو کې سیستماتیک ځمک پوهنيزې سرویې د افغانستان د معدني شتمنۍ بشپړه کچه څرګندوي، د څیړنې پانګه اچونې او د پراختیا پلان جوړولو لارښود کوي.',
      },
      exploration: {
        title: 'د کشف سرحدونه',
        subtitle: 'د څیړنې پروګرامونه',
        description: 'سیستماتیک ځمک پوهنيزې څیړنې پروګرامونه نوي ذخیرې کشف کولو ته دوام ورکوي، پیژندل شوي سرچینې پراخوي، او د افغانستان د معدني شتمنۍ بشپړ پوتانشیل خلاصوي.',
      },
      dataSystems: {
        title: 'ډیجیټل پوهه',
        subtitle: 'د ډیټا مدیریت',
        description: 'عصري ډیجیټل سیسټمونه د ځمک پوهنيزو ډیټا مدیریت کوي، عملیات په ریښتیا وخت کې کنټرول کوي، او د کان کیندنې سکتور په اوږدو کې د ډیټا پر بنسټ پریکړه کول ممکن کوي.',
      },
      operationsControl: {
        title: 'د عملیاتو قوماندان',
        subtitle: 'د ریښتیا وخت کنټرول',
        description: 'د پرمختللو کنټرول خونو سامانګانې د کان کیندنې عملیاتو، د بیړیو مدیریت، او د ساتنې سیسټمونو د ریښتیا وخت کنټرول ممکن کوي د ټولو مهمو معدني استخراجي سایټونو په اوږدو کې.',
      },
      globalMarkets: {
        title: 'د نړیوالو بازارونو',
        subtitle: 'سوداګرۍ او صادرات',
        description: 'د صادراتي کوریډورونو او سوداګریزو اړیکو ستراتیژیک پراختیا د افغانستان معدنونه د نړیوالو بازارونو سره وصل کوي، د ارزښت زیاتول او د عادلانه نرخونو تضمین کول.',
      },
      investmentFramework: {
        title: 'د پانګه اچونې چوکاټ',
        subtitle: 'د پانګې استعمال',
        description: 'د افغانستان د معدني سکتور د پراختیا لپاره د شفاف او سیالي وړ پانګه اچونې چوکاټ مسؤلیت لرونکي نړیوال کان کیندنې شرکتونه، د ټیکنالوژي برابروونکي، او مالي بنسټونه جذب کوي.',
      },
      partnerships: {
        title: 'د نړیوال اتحاد',
        subtitle: 'د نړیوالو شراکتونو',
        description: 'د نړیوالو کان کیندنې شرکتونو، د ټیکنالوژي برابروونکو، او مالي بنسټونو سره ستراتیژیک شراکتونه د افغانستان د معدني سکتور لپاره پوهه، پانګه اچونه، او د بازار لاسرسی راولي.',
      },
      tradeRoutes: {
        title: 'د سوداګریزو لارو',
        subtitle: 'د صادراتي کوریډورونو',
        description: 'د ګاونډیو هېوادونو له لارې د اغیزمنو صادراتي کوریډورونو پراختیا د افغانستان معدنونه د ریل، سړک، او سمندري لارو له لارې د نړیوالو بازارونو سره وصل کوي.',
      },
      logistics: {
        title: 'د لاجستیک بریا',
        subtitle: 'د بیړیو عملیات',
        description: 'عصري کان کیندنې ټرک بیړۍ او لاجستیک سیسټمونه د کان څخه د پروسس کولو کارخانې ته د کان اغیزمن حرکت تضمین کوي، د تولیداتو زیاتول او د عملیاتو اغیزمنتوب.',
      },
      stockyards: {
        title: 'ستراتیژیک ذخیرې',
        subtitle: 'د کان ذخیرې',
        description: 'د کان کیندنې عملیاتو لپاره د بفر وړتیا برابروونکي عظیم کان ذخیرې، د دوامداره پروسس کولو ممکن کول او د استخراج څخه صادراتو ته د عرضه زنځیر بهینه کول.',
      },
      blasting: {
        title: 'د دقیق استخراج',
        subtitle: 'د کنټرول شوي چاودنې',
        description: 'عصري کنټرول شوي چاودنې تخنیکونه د کان ترلاسه کول زیاتوي پداسې حال کې چې د چاپیریال اغیز کم کوي، د ټولو خلاصو کان کیندنې عملیاتو په اوږدو کې د خوندي او اغیزمن استخراج تضمین کول.',
      },
      conveyor: {
        title: 'د موادو جریان',
        subtitle: 'د لیږدونکو سیسټمونو',
        description: 'پراخه لیږدونکي سیسټمونه ورځني زره‌ګونو ټن کان د کان څخه د پروسس کولو کارخانې ته لیږي، د ټرک لیږد بدلوي او د عملیاتي لګښتونو او خپرونو کمول.',
      },
      provincialResources: {
        title: 'د ولایتي سرچینې',
        subtitle: 'د جغرافیایي ویش',
        description: 'د افغانستان د 34 ولایتونو په اوږدو کې د معدني سرچینو ویش.',
      },
      logar: {
        title: 'د مس مرکز',
        subtitle: 'د لوګر ولایت',
        description: 'د افسانوي میس عینک ذخیرې کور، لوګر ولایت د افغانستان د مس صنعت مرکز استازیتوب کوي چې د ذخیرو ارزښت د څو میلیاردو ډالرو کې دی.',
      },
      badakhshan: {
        title: 'د قیمتي ډبرو پاچاهي',
        subtitle: 'د بدخشان ولایت',
        description: 'د بدخشان د پخواني قیمتي ډبرو ولایت شپږ زره کلونو لپاره نړۍ ته لاجورد برابری کړی دی او د زمرد، یاقوت، او نورو قیمتي ډبرو تولید ته دوام ورکوي.',
      },
      bamyan: {
        title: 'د اوسپنې غر',
        subtitle: 'د بامیان ولایت',
        description: 'د بامیان د تماشایي سیمه د عظیم حاجیگک اوسپنې ذخیرې پټوي - د آسیا ترټولو لویو څخه یو - د مهمو مس او ذغال ذخیرو سره چې د پراختیا انتظار کوي.',
      },
      panjshir: {
        title: 'د زمرد دره',
        subtitle: 'د پنجشیر ولایت',
        description: 'د پنجشیر درې د نړۍ ترټولو غوره زمرد ذخیرو کور دی، د هغو ډبرو تولید کوي چې د کولمبیا او زامبیا ډبرو سره د رنګ او کیفیت په برخه کې سیالي کوي.',
      },
      ghazni: {
        title: 'د لیتیم کمربند',
        subtitle: 'د غزني ولایت',
        description: 'د غزني ولایت مهم لیتیم لرونکي پګماتایټونه لري چې کولی شي افغانستان د نړیوال بریښنایی موټر انقلاب لپاره د بیټرۍ فلزاتو د مهم عرضه کوونکي په توګه موقعیت ورکړي.',
      },
      helmand: {
        title: 'ستراتیژیک سرچینې',
        subtitle: 'د هلمند ولایت',
        description: 'د هلمند وچې سیمې د مهمو نادر خاورو عناصرو ذخیرو او د یورانیوم معدني کیدو پورته کېږي، چې د ټیکنالوژي او انرژي سکتورونو لپاره ستراتیژیک سرچینې استازیتوب کوي.',
      },
      greenMining: {
        title: 'شنه کان کیندنه',
        subtitle: 'د چاپیریال ساتنه',
        description: 'د چاپیریال ساتنې ژمنتيا تضمین کوي چې د کان کیندنې عملیات اوبه ساتي، د ځمکې اختلال کم کوي، او د بندولو وروسته سایټونه بیا رغوي.',
      },
      timeline: {
        sectionTitle: 'د پراختیا نقشه',
        sectionSubtitle: 'ستراتیژیک وخت لیکه',
        year2024: { title: 'د ملي معدني ستراتیژي پیل', description: 'د پایښت وړ معدني پراختیا او د صادراتو د ښه کولو لپاره د جامع ملي ستراتیژي.' },
        year2025: { title: 'د ځمک پوهنيزو سرویو بشپړیدل', description: 'د ټولو 34 ولایتونو په اوږدو کې د تفصيلي ځمک پوهنيزو سرویو بشپړیدل د سرچینو د اندازه کولو سره.' },
        year2026: { title: 'د پروسس کولو زیربنا', description: 'د لومړنیو عصري مس او لیتیم پروسس کولو سامانګانیو پرانیستل.' },
        year2027: { title: 'د ریل پټلۍ پراختیا', description: 'د مهمو ذخیرو د صادراتو ټرمینلونو سره وصل کوونکي د معدني ریل پټلۍ بشپړیدل.' },
        year2028: { title: 'د صادراتي کوریډور پراختیا', description: 'د کان کیندنې سیمو د صادراتي نقطو سره وصل کوونکي د مهمو لېږد زیربناوو بشپړیدل.' },
        year2029: { title: 'د سملټ کولو عملیات', description: 'د مس او اوسپنې پروسس کولو لپاره د لومړنیو یوځای سملټ کولو سامانګانیو پیل.' },
        year2030: { title: 'د تولید کچه', description: 'د بشپړ چاپیریال مطابقت سره د مهمو معدني تولیدي موخو ترلاسه کول.' },
        year2032: { title: 'د لیتیم تولید', description: 'د نړیوالو بیټرۍ بازارونو لپاره د سوداګریز لیتیم تولید پیل.' },
        year2035: { title: 'د ارزښت زنځیر پختوالی', description: 'د استخراج څخه تر بشپړو محصولاتو پورې د جامع معدني ارزښت زنځیرونو رامینځته کول.' },
      },
      mesAynakLegacy: {
        title: 'د مس عینک میراث',
        subtitle: 'د لرغونو آثارو میراث',
        description: 'د مس عینک د مس ذخیره د نړۍ ترټولو مهمو بودایی لرغونو آثارو سایټونو څخه یو پورته کېږي. د پراختیا پلانونه د معدنونو استخراج سره د 2,000 کلونو پخوانیو صومعو، ستوپونو، او لرغونو شیانو ساتنې د توازن ساتي.',
      },
      copperOpenPit: {
        title: 'د مس عظیم عملیات',
        subtitle: 'خلاص کان کیندنه',
        description: 'د مس عظیم خلاص کان کیندنې عملیات د پوړیزو استخراج میتودونو کاروي، د کلونو په اوږدو کې ملیونونه ټنه کان لیږي د 400 ټنه لرونکو بار وړونکو ټرکونو د بیړیو سره چې د افغانستان د دراماتیک غرنیو سیمو کې د 24 ساعتو عملیاتو کې کار کوي.',
      },
      moltenCopper: {
        title: 'ویل شوی مس',
        subtitle: 'د سملټ کولو عملیات',
        description: 'د عصري مس سملټ کولو کوره متمرکز کان د 99.9% پاکو مس کاتوډونو ته بدلوي. د 1,200 درجې سانتي ګراد کې ویل شوی مس د دقیق کنټرول شویو پروسسونو له لارې تیریږي چې د صادراتو لپاره چمتو تصفیه شوی فلز رامینځته کوي.',
      },
      spodumeneCrystals: {
        title: 'د سپوډومین کریسټالونه',
        subtitle: 'د بیټرۍ فلز سرچینه',
        description: 'د افغان پګماتایټونو څخه د لیتیم لرونکي سپوډومین کریسټالونه تر 8% پورې د لیتیم اکسایډ لري - د نړۍ ترټولو لوړو درجو څخه. دا منشوري کریسټالونه د بریښنایی موټر انقلاب د بیټرۍ عرضه زنځیر بنسټ جوړوي.',
      },
      deepGoldMining: {
        title: 'ژور سره زر کان کیندنه',
        subtitle: 'د ځمک لاندې عملیات',
        description: 'عصري د ځمک لاندې سره زر کان کیندنې عملیات د غرنیو جوړښتونو ژورو کې د لوړ درجه کان بدنونو ته لاسرسی ورکوي. د LED رڼا شوي تونلونه د سرو زرو لرونکي کوارټز رګونه ښیي پداسې حال کې چې د استخراج ټیمونه د دقیق سامان سره کار کوي.',
      },
      goldRefining: {
        title: 'د سرو زرو تصفیه',
        subtitle: 'د قیمتي فلزاتو پروسس کول',
        description: 'د سرو زرو تصفیه کولو عملیات خام کان د پانګه اچونې درجې بارونو ته بدلوي. ویل شوی سره زر د دقیق قالبونو کې اچول کیږي، چې 99.99% پاک بارونه رامینځته کوي چې د نړیوالو بازارونو او مرکزي بانکونو ذخیرو لپاره دي.',
      },
      panjshirEmeraldCrystals: {
        title: 'د پنجشیر زمرد کریسټالونه',
        subtitle: 'د نړیوال درجې نمونې',
        description: 'د پنجشیر دره څخه خام زمرد کریسټالونه غیر معمولي رنګ غلظت او روښانتیا ښیي. دا شپږ اړخیز قیمتي ډبرې، چې د دوی د اصلي میکا شیسټ میټرکس کې ډک شوي، په نړیوالو قیمتي ډبرو بازارونو کې د پریمیم نرخونو امر کوي.',
      },
      hajigakIronMountain: {
        title: 'د حاجیگک اوسپنه غر',
        subtitle: 'د آسیا ترټولو لویه ذخیره',
        description: 'د بامیان ولایت کې د حاجیگک عظیم اوسپنې کان ذخیره اټکل شوی 2.2 ملیارد ټنه لوړ درجه اوسپنې کان لري. دا سور-نسواري غر د افغانستان د صنعتي پولاد راتلونکي بنسټ استازیتوب کوي.',
      },
      lapisAncientMines: {
        title: 'د 6,000 کلونو نیلي',
        subtitle: 'پخواني لاجورد کانونه',
        description: 'د بدخشان پخواني لاجورد کانونه شپږ زره کلونه دوامداره کار کړي دي. نیلي خط شوي ډبریني مخونه د اولترامارین رنګ سرچینه ښیي چې د رنسانس شاهکارونه او د مصري پاچاهانو د دفن خونو رنګ کړي.',
      },
      jegdalekRubies: {
        title: 'د جگډلک یاقوتونه',
        subtitle: 'د کبوتر وینې برتری',
        description: 'د جگډلک د یاقوت ذخیرې د نړۍ ترټولو غوره کبوتر وینې یاقوتونه تولیدوي - ژور سور قیمتي ډبرې چې غیر معمولي روښانتیا او فلورسنس لري چې د برمیا ډبرو سره د کیفیت په برخه کې سیالي کوي او د پریمیم نیلام نرخونو امر کوي.',
      },
      hinduKushSapphires: {
        title: 'د هندوکش نیلمونه',
        subtitle: 'د نیلي خزانه',
        description: 'د هندوکش غرنی سلسله د مرمر میزبان ذخیرو څخه غیر معمولي نیلي نیلمونه تولیدوي. دا کارنډم قیمتي ډبرې د هغه قیمتي مخملي نیلي رنګ ښیي چې د نړۍ ټولو سټونکو او جواهراتو لخوا لټل کیږي.',
      },
      nuristanTourmaline: {
        title: 'د نورستان تورمالین',
        subtitle: 'د ویښتو کریسټالونه',
        description: 'د نورستان ولایت د تورمالین زړه راښکونکي نمونې تولیدوي چې د نادرې کږو ډولونه شاملې دي چې د ګلابي مرکزونو او شینو حاشیه سره، د مطلوب انډیکولایټ نیلي او روبیلیټ ګلابي کریسټالونو سره.',
      },
      kunarAquamarine: {
        title: 'د کونړ اکوامارین',
        subtitle: 'د سمندر نیلي بیریل',
        description: 'د کونړ ولایت د پګماتایټ ساحې غیر معمولي اکوامارین کریسټالونه تولیدوي - د سپین فیلډسپار میټرکس باندې د سمندر نیلي شپږ اړخیز قیمتي ډبرې چې د نړۍ د هر موقعیت څخه نمونو سره د روښانتیا او رنګ شدت په برخه کې سیالي کوي.',
      },
      strategicREEConcentrate: {
        title: 'ستراتیژیک REE متمرکز',
        subtitle: 'د ټیکنالوژي فلزات',
        description: 'د افغان ذخیرو څخه د نادرې خاورې عناصرو متمرکزونه د سمارټ فونونو، د باد ټرباینونو، او بریښنایی موټرونو لپاره اړین مهم مواد لري. د لابراتوار تحلیل 17 جلا REE ډولونه د غیر معمولي پاکوالي سره ښیي.',
      },
      chromiteExportOperations: {
        title: 'د کرومایټ صادراتي عملیات',
        subtitle: 'د صنعتي فلز سوداګري',
        description: 'عظیم کرومایټ کان ذخیرې د نړیوالو سټینلیس پولاد تولیدونکو ته د صادراتو انتظار کوي. صنعتي بار وړونکي سامان ورځني زره‌ګونو ټنونه پروسس کوي، د دې اړین فلزاتو موادو لپاره د نړیوال غوښتنې تغذیه کوي.',
      },
      premiumWhiteMarble: {
        title: 'د پریمیم سپین مرمر',
        subtitle: 'د معمارۍ ډبره',
        description: 'د افغانستان د پاکو سپینو مرمر کانونه د ډبرو تولیدوي چې د ایټالوي کارارا سره د کیفیت په برخه کې سیالي کوي. د سپینو رګونو سره عظیم بلاکونه د نړۍ د معمارۍ پروژو او مجسمه کارونو لپاره استخراج کیږي.',
      },
      undergroundCoalOperations: {
        title: 'د ځمک لاندې ذغال عملیات',
        subtitle: 'د انرژي امنیت',
        description: 'عصري د ځمک لاندې ذغال کان کیندنې عملیات د فلزاتو درجې ذغال د غلیظو سیمونو ته لاسرسی ورکوي. دوامداره کان کیندونکي د 24 ساعتو شیفټونو کې کار کوي چې د انرژي سرچینې استخراج کوي چې د کورني صنعتونو او د زیربناوو پراختیا ته انرژي ورکوي.',
      },
      processingPlantOperations: {
        title: 'د پروسس کولو کارخانې عملیات',
        subtitle: 'د ارزښت زیاتول',
        description: 'د عصري معدني پروسس کولو سامانګانیو کې، د لیږدونکو سیسټمونه خرد شوی کان د فلوتیشن حجرو، د جاذبې جلا کوونکو، او د مقناطیسي متمرکزونکو له لارې لیږي. ماهر اپراتورونه د ګټورتیا پروسس د هرې پړاو نګراني کوي.',
      },
      coreSampleAnalysis: {
        title: 'د کور نمونې تحلیل',
        subtitle: 'د ځمک پوهنې پوهه',
        description: 'د لرګینو بکسونو کې ترتیب شوي د ځمک پوهنې کور نمونې د افغان معدني ذخیرو د ځمک لاندې شتمني ښیي. د رنګینو کان سیمې چې د مس، سرو زرو، او د نادرې خاورې معدني کول ښیي د څیړنې او پراختیا پریکړو لارښود کوي.',
      },
      explorationDrilling: {
        title: 'د څیړنې ډرل کول',
        subtitle: 'د کشف عملیات',
        description: 'د لرې غرنیو سایټونو باندې د الماس ډرل کولو ریګونه استوانه‌ایز کور نمونې استخراج کوي چې د سلو میټرونو لاندې د ځمک پوهنې ښیي. د څیړنې ټیمونه د دراماتیک هندوکش پس منظرونو سره د نویو معدني کشفونو نقشه کولو لپاره کار کوي.',
      },
      surveyOperations: {
        title: 'د سروی عملیات',
        subtitle: 'د افغانستان شتمنۍ نقشه کول',
        description: 'د ځمک پوهنې سروی ټیمونه د افغانستان په اوږدو کې د غرنیو پړاوونو باندې د سیټلایټ موقعیت سامان او پرمختللي نقشه کولو وسیلې کاروي. د دوی سیستماتیک کار د ملت د معدني سرچینو بشپړه کچه په ټولو 34 ولایتونو کې ښیي.',
      },
      operationsCommandCenter: {
        title: 'د عملیاتو قوماندان مرکز',
        subtitle: 'د ډیجیټل کان کیندنې پوهه',
        description: 'عصري کان کیندنې کنټرول مرکزونه د دیوال څخه دیوال ته سکرینونه لري چې د ریښتیا وخت سیټلایټ انځورونه، د بیړیو ټیلی میټري، او د تولید ډیټا ښیي. اپراتورونه د مرکزي قوماندان سامانګانیو څخه د کان کیندنې عملیاتو د هر اړخ نګراني کوي.',
      },
      vision2030: {
        title: 'لید 2026-2050',
        subtitle: 'راتلونکي افقونه',
        description: 'تر 2050 پورې، افغانستان به د پایښت وړ عملیاتو، د ارزښت اضافه شوي پروسس کولو، او د ټولو وګړو ترمنځ په عادلانه توګه شریک شوي معدني شتمنۍ سره د نړیوال پیژندل شوی کان کیندنې ملت وي.',
      },
      finalQuote: {
        quote: 'زموږ د غرونو لاندې معدنونه یوازې سرچینې نه دي، بلکې هغه بنسټ دی چې پرې به موږ د راتلونکو نسلونو لپاره یو بډای او خپلواک افغانستان وګړوو.',
      },
      buildingTomorrow: {
        title: 'سبا جوړول',
        subtitle: 'راتلونکی',
        description: 'د افغانستان معدني شتمني د اقتصادي بدلون لپاره د بې‌ساري فرصت استازیتوب کوي. د پایښت وړ پراختیا، نړیواله شراکت، او مسؤلیت لرونکي حکومت له لارې، دا سرچینې به د راتلونکو نسلونو لپاره د ملي بډایتوب انرژي برابره کړي.',
      },
      nationalLegacy: {
        title: 'ملي میراث',
        subtitle: 'راتلونکي نسلونه',
        description: 'د افغانستان د معدني سرچینو مسؤلیت لرونکي پراختیا به د تل لپاره بډایتوب رامینځته کړي، طبیعي میراث وساتي، او د راتلونکو افغانانو نسلونو لپاره د اقتصادي خپلواکۍ تضمین کړي.',
      },
      // Technology Sections
      autonomousMining: { title: 'د خپلواک کان کیندنې بیړۍ', subtitle: 'صنعت 4.0', description: 'د راتلونکي نسل خپلواک بار وړونکي ټرکونه او ډرل کولو سیسټمونه د AI-برابر شوي نیویګیشن سره 24/7 کار کوي. دا 400 ټنه وسیلې ورځني 50,000+ ټنه کان لیږي، د تولیداتو زیاتول پداسې حال کې چې د ټولو مهمو استخراج سایټونو په اوږدو کې د صفر زیان د امنیت ریکارډونه تضمین کوي.' },
      satelliteMapping: { title: 'د سیټلایټ سرچینو نقشه کول', subtitle: 'د لرې حس ټیکنالوژي', description: 'پرمختللي سیټلایټ انځورونه او هایپر سپیکټرل سکینینګ د افغانستان د 652,000 مربع کیلو میټرونو سیمې په اوږدو کې د معدني لاسلیکونو څرګندوي. AI الګوریتمونه د ځمک پوهنې ځانګړتیاوې تحلیل کوي ترڅو د ځمکې د تصدیق لپاره 10,000+ احتمالي ذخیرو موقعیتونه پیژني.' },
      droneSurveys: { title: 'د هوایي سروی عملیات', subtitle: 'د ډرون نقشه کولو ټیکنالوژي', description: 'خپلواک ډرون بیړۍ د لرې غرنیو سیمو په اوږدو کې د لوړ ریزولوشن توپوګرافیک سرویو او میګنیټومیټر سوپونو ترسره کوي. 500+ ډرونونه ورځني 10,000 هیکټار نقشه کوي، د کان پلان کولو لپاره د سانتي میټر دقیق 3D توپوګرافیک ماډلونه تولیدوي.' },
      deepCoreDrilling: { title: 'د ژور کور ډرل کولو پروګرامونه', subtitle: 'د ځمک لاندې څیړنه', description: 'د الماس ډرل کولو عملیات د 2,000 میټرونو څخه زیات ژوروالي څخه کور نمونې استخراج کوي، د معدني جوړښتونو بشپړه کچه ښیي. 200+ ډرل کولو ریګونه په ټولو 34 ولایتونو کې په یو وخت کې کار کوي، کلني 50+ ملیارد ټنه نوي سرچینې تعریف کوي.' },
      geophysicalSurveys: { title: 'د ځمک فزیکي سروی شبکې', subtitle: 'د بریښنایی مقناطیسي نقشه کول', description: 'د ځمکې ننوتونکي رادار او بریښنایی مقناطیسي سروی کلني 100,000+ لاین-کیلو میټرونو په اوږدو کې د ځمک لاندې ځمک پوهنه نقشه کوي. دا ټیکنالوژي پټ کان بدنونه، د خرابیدو جوړښتونه، او د کان پراختیا لپاره اړین اوبه سرچینې ښیي.' },
      flotationProcessing: { title: 'د فلوتیشن پروسس کولو کارخانې', subtitle: 'د کان متمرکز', description: 'د عصري فلوتیشن حجرو ورځني 500,000 ټنه کان پروسس کوي، د پرمختللي فوم فلوتیشن ټیکنالوژي کاروي ترڅو د 95%+ معدني بیرته نیولو کچې ترلاسه کړي. د هېواد په اوږدو کې 50 پروسس کولو کارخانې زره‌ګونه ماهر تخنیکي دندې رامینځته کوي.' },
      hydrometallurgical: { title: 'د هایډرو میټالورژیک سامانګانې', subtitle: 'د کیمیاوي پروسس کول', description: 'پرمختللي هایډرو میټالورژیک کارخانې د چاپیریال مسؤلیت لرونکي لیچینګ پروسسونه کاروي ترڅو مس، سره زر، او د نادرې خاورې عناصر استخراج کړي. د تړل شویو لوپ اوبو سیسټمونه د صفر خپرونې تضمین کوي پداسې حال کې چې د 99.9% فلز پاکوالي کچې ترلاسه کوي.' },
      electrorefining: { title: 'د بریښنایی تصفیه کولو برتری', subtitle: 'د فلز پاکول', description: 'عظیم بریښنایی تصفیه کولو سامانګانې مس د 99.99% کاتوډ درجې ته پاکوي، کلني 1 ملیون ټنه تصفیه شوی مس تولیدوي. دا سامانګانې د زیربنا پانګه اچونې کې $50 ملیارد استازیتوب کوي او 100,000+ کارګرانو کار ورکوي.' },
      slagProcessing: { title: 'د سلاګ بیا پروسس کولو عملیات', subtitle: 'د صفر ضایعاتو کان کیندنه', description: 'د تاریخي سلاګ ډیرونو چې قیمتي فلزات لري د پخوانیو استخراج میتودونو له لارې پاتې شوي سره زر، سپین زر، او مس استخراج لپاره بیا پروسس کولو ته تیریږي. 100+ بیا پروسس کولو کارخانې د میراث کان کیندنې سایټونو څخه د فلزاتو کې $10 ملیارد بیرته نیسي.' },
      miningRailways: { title: 'د کان کیندنې ریل پټلۍ شبکې', subtitle: 'د عمده لېږد زیربنا', description: 'د 5,000 کیلو میټرونو دروند بار وړونکي ریل پټلۍ مهم کان کیندنې سیمې د صادراتو ټرمینلونو سره وصل کوي. د 200+ کان کارونو یونټ ټرینونه کلني 100 ملیون ټنه لیږي، د ټرک لیږد سره پرتله کولو سره د لېږد لګښتونه 75% کم کوي.' },
      conveyorSystems: { title: 'د ځمکې لیږدونکي سیسټمونه', subtitle: 'د دوامداره موادو جریان', description: 'د 500 کیلو میټرونو ځمکې لیږدونکي سیسټمونه د کان څخه د پروسس کولو کارخانې ته د ساعت 20,000+ ټنو کچو کې کان لیږي. دا سیسټمونه د 99.5% شتون سره 24/7 کار کوي، د زره‌ګونو بار وړونکو ټرکونو حرکتونو بدلوي.' },
      powerInfrastructure: { title: 'د کان کیندنې بریښنا شبکه', subtitle: 'د انرژي زیربنا', description: 'د 5,000 میګاواټونو ځانګړي بریښنا تولید وړتیا - د سولر، هایډرو، او ګاز شاملولو سره - د کان کیندنې عملیاتو ته انرژي برابروي. د ځمک لاندې لیږد لاینونه لرې سایټونه د ملي شبکې سره وصل کوي، د 99.9% بریښنا اعتبار تضمین کوي.' },
      waterInfrastructure: { title: 'د اوبو عرضه سیسټمونه', subtitle: 'د پایښت وړ اوبو مدیریت', description: 'عظیم اوبو بیا کارونې سیسټمونه د پروسس اوبو 95% بیرته نیسي، د تازه اوبو مصرف د نړیوال مشر درجې کچو ته راکم کوي. 100+ درملنې کارخانې د سیمه‌ایزو اوبو سرچینو د صفر ککړتیا تضمین کوي، د ټولنې د اوبو عرضه ساتي.' },
      portFacilities: { title: 'د صادراتو بندر سامانګانې', subtitle: 'د سمندري سوداګرۍ لاسرسی', description: 'د پاکستان، ایران، او ترکمنستان سره ستراتیژیک شراکتونه د ژور اوبو بندرونو ته لاسرسی برابروي چې کلني 200+ ملیون ټنه معدني صادراتو ته وړتیا لري. ځانګړي معدني ټرمینلونه د اتوماتیک بېړۍ بار وړونکي سیسټمونه لري.' },
      miningUniversity: { title: 'د ملي کان کیندنې پوهنتون', subtitle: 'د تخنیکي زده کړې', description: 'د افغانستان د ملي کان کیندنې پوهنتون کلني 10,000 کان کیندنې انجینرانو او ځمک پوهانو روزنه ورکوي. د نړیوال درجې لابراتوارونه او څیړنې سامانګانې فارغان د هېواد د معدني صنعت د مشرتابه دندو لپاره موقعیت ورکوي.' },
      geologicalInstitute: { title: 'د ځمک پوهنې سروی انسټیټیوټ', subtitle: 'د ساینسي برتری', description: 'د ملي ځمک پوهنې سروی انسټیټیوټ په ټولو 34 ولایتونو کې سیستماتیک سرچینو ارزونه ترسره کوي. 1,000+ ځمک پوهان د نړۍ ترټولو جامع معدني ډیټابیس ساتي، د څیړنې پانګه اچونې کې $100 ملیارد لارښود کوي.' },
      metallurgicalResearch: { title: 'د میټالورژیک څیړنې مرکز', subtitle: 'د پروسس کولو نوښت', description: 'د پرمختللي میټالورژیک لابراتوارونه د افغان کانونو لپاره بهینه شوي نوي استخراج ټیکنالوژي پراخوي. د څیړنې بریاوې د بیرته نیولو کچې 30% ښه کړي دي پداسې حال کې چې د انرژي مصرف د ټولو پروسس کولو عملیاتو کې 40% کم کړی دی.' },
      environmentalResearch: { title: 'د چاپیریال څیړنې انسټیټیوټ', subtitle: 'د پایښت وړ حلونو', description: 'ځانګړي چاپیریال څیړنې سامانګانې د کان بیا رغونه، د اوبو درملنه، او د بیولوژیکي تنوع ساتنې لپاره د نړیوال مشر حلونو پراخوي. 500+ ساینس پوهان تضمین کوي چې د کان کیندنې عملیات د نړیوالو چاپیریال معیارونو څخه تیریږي.' },
      // Economic Impact
      economicTransformation: { title: 'اقتصادي بدلون', subtitle: '$30 ټریلیون اغیز', description: 'د معدني پراختیا به د راتلونکو 20 کلونو کې د افغانستان د GDP 2,000% زیاتوالی راولي. د $30 ټریلیونو معدني شتمني کلني $1.5 ټریلیونو اقتصادي فعالیت ته بدلیږي، افغانستان د مرکزي آسیا د اقتصادي قوت مرکز ته بدلوي.' },
      employmentRevolution: { title: 'د دندو انقلاب', subtitle: '5 ملیون دندې', description: 'مستقیم کان کیندنې دندې به له 2 ملیونو موقعیتونو څخه تیریږي، د پروسس کولو، لاجستیک، او د ملاتړ صنعتونو کې د اضافي 3 ملیونو دندو سره. د کان کیندنې د اوسط معاشات کلني $30,000 بډای منځنۍ طبقې رامینځته کوي.' },
      regionalDevelopment: { title: 'د سیمه‌ایز پراختیا زونونه', subtitle: 'د ولایتونو بدلون', description: 'د مهمو کان کیندنې عملیاتو شاوخوا 50 ځانګړي اقتصادي پراختیا زونونه لرې ولایتونه د وده کونکو صنعتي مرکزونو ته بدلوي. د 5 ملیونو خلکو کورونه به د هېواد د معدني شتمنۍ شاوخوا راڅرګند شي.' },
      exportRevenue: { title: 'د صادراتو عاید وده', subtitle: 'د سوداګرۍ بدلون', description: 'د معدني صادرات به تر 2040 پورې کلني $200 ملیارد تولید کړي، افغانستان د نړۍ د 10 لویو معدني صادراتو کوونکو ترمنځ موقعیت ورکوي. د 100+ هېوادونو سره ستراتیژیک سوداګریزې اړیکې د بازار لاسرسی او عادلانه نرخ تضمین کوي.' },
      governmentRevenue: { title: 'د حکومت عاید', subtitle: 'د مالیاتي بدلون', description: 'د کان کیندنې رایلټي او مالیات به کلني $50 ملیارد د حکومت خدماتو، زده کړو، روغتیا پاملرنې، او زیربنا لپاره تولید کړي. د شفاف معدني پراختیا فنډ تضمین کوي چې ګټې د ټولو 40 ملیونو افغان وګړو ته رسي.' },
      foreignInvestment: { title: 'د بهرني مستقیم پانګه اچونه', subtitle: '$500 ملیارد داخلیدل', description: 'نړیوال کان کیندنې شرکتونو د 2050 پورې د څیړنې او پراختیا پانګه اچونې کې $500 ملیارد ژمنتيا کړې. د مخکښو نړیوالو کان کیندونکو سره ستراتیژیک شراکتونه د نړیوال درجې پوهه او ټیکنالوژي د افغان عملیاتو ته راولي.' },
      domesticInvestment: { title: 'د کورني پانګه اچونې وده', subtitle: 'د افغان سوداګرۍ', description: 'د افغان کان کیندنې سوداګران د دودیزو قیمتي ډبرو کانونو څخه تر صنعتي درجې پروسس کولو سامانګانیو پورې 10,000+ لایسنس شویو کان کیندنې عملیاتو چلوي. د سکتور کې کورني پانګه اچونه له $100 ملیارد څخه تیریږي.' },
      miningFinance: { title: 'د کان کیندنې مالي مرکز', subtitle: 'د پانګې بازارونه', description: 'د کابل کان کیندنې تبادله کلني د کان کیندنې پانګه اچونې کې $50 ملیارد اسانه کوي، د 200+ عامه تبادله شویو کان کیندنې شرکتونو سره. د نړیوالو پانګې بازارونو ته لاسرسی د ټولو کچو پروژو لپاره سیالي وړ مالي تمویل تضمین کوي.' },
      miningInsurance: { title: 'د کان کیندنې بیمه او خطر', subtitle: 'د مالي ساتنه', description: 'د جامع کان کیندنې بیمه پروګرامونه د $500 ملیاردو په شتمنیو او عملیاتو کې ساتنه کوي. د نړیوالو بیا بیمه شراکتونو تضمین کوي چې د سکتور کې د ټولو عملیاتي، چاپیریال، او سیاسي خطرونو پوښښ برابريږي.' },
      // Sustainability Expansion
      carbonNeutral: { title: 'د کاربن خنثی کان کیندنه', subtitle: 'د اقلیم مشرتابه', description: 'د افغانستان د کان کیندنې سکتور به د 2040 پورې د تجدید وړ انرژي، بریښنایی موټرونو، او د کاربن نیولو ټیکنالوژي له لارې د کاربن خنثیتوب ترلاسه کړي. د 10 ګیګاواټونو سولر او د باد بریښنا د فوسیل سون توکو تکیه حذف کوي.' },
      biodiversityProtection: { title: 'د بیولوژیکي تنوع ساتنه', subtitle: 'د اکوسیستم ساتنه', description: 'د 100,000 هیکټارونو ساتل شویو بیولوژیکي تنوع کوریډورونه مهم کان کیندنې عملیاتو ته راګیروي. د وحشي ژوندو نګراني پروګرامونه د برف پلانګان، مارکو پولو ګوسفندونو، او د افغان غرني اکوسیستمونو ځانګړو نورو خطرناکو ډولونو ساتنه کوي.' },
      mineClosure: { title: 'د پرمختللي بیا رغونه', subtitle: 'د ځمکې بیا رغونه', description: 'د کان بندولو فنډونو کې $10 ملیارد تضمین کوي چې ټول عملیات د کان کیندنې پرمهال او وروسته پرمختللي بیا رغونه ترلاسه کړي. بیا رغول شوي منظرونه کرنه، ځنګلونو، او سیاحت ملاتړ کوي، د سیمه‌ایزو ټولنو لپاره د تل لپاره ارزښت رامینځته کوي.' },
      circularEconomy: { title: 'د حلقوي اقتصاد کان کیندنه', subtitle: 'د صفر ضایعاتو عملیات', description: 'پرمختللي پروسس کولو ټیکنالوژي تضمین کوي چې د 99% استخراج شویو موادو تولیدي کار موندي. د کان کیندنې ضایعات د ساختماني مجموعو، کرنیزو تعدیلاتو، یا د ثانوي پروسس کولو عملیاتو لپاره د خامو موادو څخه کیږي.' },
      // Social Impact
      educationPrograms: { title: 'د کان کیندنې زده کړو پروګرامونه', subtitle: 'د انساني پانګې پراختیا', description: 'د کان کیندنې سیمو کې جوړ شوي 1,000+ ښوونځي د 2 ملیونو ماشومانو لپاره د نړیوال درجې زده کړې برابروي. د سکالرشیپ پروګرامونه کلني 10,000 زده کوونکي د پرمختللي کان کیندنې او انجینرۍ درجو لپاره نړیوالو پوهنتونونو ته لیږي.' },
      healthcareFacilities: { title: 'د ټولنې روغتیا پاملرنه', subtitle: 'د طبي زیربنا', description: 'د کان کیندنې سیمو کې 50 عصري روغتونونه او 500 کلینیکونه د 10 ملیونو خلکو لپاره وړیا روغتیا پاملرنه برابروي. د کان کیندنې شرکتونو د روغتیا پروګرامونو د ماشومانو مړینې 90% کمې کړي دي او د ژوند تمه 15 کلونو زیاتوالی راولی.' },
      womensEmployment: { title: 'د کان کیندنې کې ښځې', subtitle: 'د جنس مساوات', description: 'ښځې د کان کیندنې کارګري قوت 30% جوړوي، د ځمک پوهانو څخه تر تجهیزاتو اپراتورونو او اجرایوي مشرتابه پورې. د ښځو ملکیت شرکتونه د کان کیندنې خدماتو 40% برابروي، د ملیونونو افغان ښځو لپاره د اقتصادي خپلواکۍ رامینځته کول.' },
      artisanalIntegration: { title: 'د دودیزو کان کیندونکو ملاتړ', subtitle: 'د رسمي کولو پروګرامونه', description: '500,000 دودیز کان کیندونکي د رسمي کولو پروګرامونو له لارې روزنه، سامان، او د بازار لاسرسی ترلاسه کوي. د عادلانه سوداګرۍ تصدیق تضمین کوي چې دودیز محصولات په نړیوالو بازارونو کې د پریمیم نرخونو امر کوي.' },
      // Technology Innovation
      aiMining: { title: 'د AI-برابر شوي کان کیندنه', subtitle: 'د مصنوعي پوهه', description: 'د مصنوعي پوهه سیسټمونه د کان کیندنې عملیاتو هر اړخ بهینه کوي، د ځمک پوهنې ماډل کولو څخه تر تجهیزاتو ساتنې او د عرضه زنځیر لاجستیک پورې. AI د عملیاتي لګښتونو 40% کم کوي پداسې حال کې چې د امنیت ریکارډونه 80% ښه کوي.' },
      robotics: { title: 'د کان کیندنې روبوټیک', subtitle: 'د خپلواک سیسټمونه', description: '10,000+ خپلواک روبوټونه خطرناک د ځمک لاندې دندې ترسره کوي چې د ډرل کولو، چاودنې، او د کان استخراج شامل دي. انساني اپراتورونه د سطحې کنټرول خونو څخه نګراني کوي، د ځمک لاندې مړینې بشپړه حذف کوي.' },
      digitalTwins: { title: 'د ډیجیټل دوه ګونی عملیات', subtitle: 'د مجازي کان کیندنه', description: 'د هر کان کیندنې عملیاتو بشپړ ډیجیټل کاپي د ریښتیا وخت بهینه کولو او د وړاندوینې ساتنې امکان برابروي. اپراتورونه کولی شي د استخراج سناریو سیمولیشن وکړي، د فزیکي عملیاتو کې بدلونونو پلي کولو دمخه اغیزمنتوب بهینه کوي.' },
      blockchainSupply: { title: 'د بلاک چین تعقیب', subtitle: 'د عرضه زنځیر شفافیت', description: 'د بلاک چین ټیکنالوژي د افغان معدنونو هر ګرام د استخراج څخه تر نهایی محصول پورې تعقیب کوي. مصرف کوونکي او تولیدونکي کولی شي د اخلاقي سرچینو، د شخړې وړ حالت، او د چاپیریال مطابقت د بشپړ شفافیت سره تصدیق کړي.' },
      // Global Partnerships
      chinaPartnership: { title: 'د چین ستراتیژیک شراکت', subtitle: 'د بیلټ او سړک ادغام', description: 'د چین سره ستراتیژیک شراکت د زیربنا پانګه اچونې کې $200 ملیارد راولي، د افغان معدني ذخیرو د آسیایي تولید مرکزونو سره وصل کوي. نوي ریل پټلۍ او لویه لارې افغانستان د نړیوالو عرضه زنځیرونو کې ادغام کوي.' },
      europePartnership: { title: 'د اروپایي اتحادیې همکارۍ', subtitle: 'د ټیکنالوژي لیږد', description: 'د EU شراکتونه د پرمختللي اروپایي کان کیندنې ټیکنالوژي او چاپیریال معیارونه راولي. د المان، سویډن، او فنلینډ شرکتونو سره ګډ شرکتونه د نړیوال مشر استخراج او پروسس کولو پوهه معرفي کوي.' },
      usPartnership: { title: 'د امریکا پانګه اچونه', subtitle: 'د ټیکنالوژي او مالي', description: 'د امریکا کان کیندنې شرکتونه او پانګه اچونې بنسټونه د افغان معدني پراختیا لپاره $100 ملیارد ژمنتيا کوي. د امریکا ټیکنالوژي د سیټلایټ نقشه کولو، خپلواکو وسیلو، او د پروسس کولو نوښت کې د عملیاتي اغیزمنتوب بدلون راولي.' },
      regionalPartnership: { title: 'د سیمه‌ایز ادغام', subtitle: 'د مرکزي آسیا همکارۍ', description: 'د قزاقستان، ازبکستان، او ترکمنستان سره همکارۍ ادغام شوي معدني عرضه زنځیرونه رامینځته کوي. شریک ریل پټلۍ او پروسس کولو سامانګانې د سیمه‌ایز ارزښت زیاتوي او د ټولو شراکتدارانو لپاره لګښتونه کم کوي.' },
      // Gemstone Expansion
      emeraldGrading: { title: 'د زمرد درجه بندي مرکز', subtitle: 'د نړیوال تصدیق', description: 'د ملي زمرد درجه بندي مرکز د نړیوالو پیژندل شویو معیارونو کارولو سره کلني 1 ملیون قیراط تصدیق کوي. تصدیق شوي افغان زمردونه په نړیوالو قیمتي ډبرو بازارونو کې د 50% نرخ پریمیم امر کوي.' },
      lapisHeritage: { title: 'د لاجورد میراث', subtitle: 'د 6,000 کلونو کان کیندنه', description: 'د بدخشان پخواني لاجورد کانونه - د توتانخامون او د رنسانس استادانو لپاره د اولترامارین رنګ سرچینه - د نړۍ ترټولو غوره کیفیت تولید ته دوام ورکوي. د یونسکو د نړیوال میراث پیژندل د دې تاریخي سایټونو ساتنه کوي.' },
      rubyDeposits: { title: 'د یاقوت کان کیندنې برتری', subtitle: 'د کبوتر وینې کیفیت', description: 'د جگډلک یاقوت ذخیرې د برمیا کیفیت سره د 1/10 چاپیریال اغیز سره مطابقت لري. عصري استخراج د ځمک پوهنې بشپړتیا ساتي پداسې حال کې چې کلني $500 ملیون د قیمتي ډبرو کیفیت کارنډم تولید کوي.' },
      tourmalineVarieties: { title: 'د تورمالین جنت', subtitle: 'د ویښتو ټولګه', description: 'نورستان د 50+ تورمالین رنګ ډولونه تولیدوي چې د نادرې کږو، انډیکولایټ، او د پارایبا ډول نمونې شامل دي. د 10 ملیونو قیراطونو کلني تولید افغانستان د نړۍ د تورمالین پلازمینه کوي.' },
      gemCutting: { title: 'د قیمتي ډبرو پرې کولو صنعت', subtitle: 'د ارزښت زیاتول', description: '200 قیمتي ډبرو پرې کولو سامانګانې 50,000 ماهر لپیداریانو کار ورکوي، ناخالص ډبرې د پولیش شویو شاهکارونو ته بدلوي. د هېواد دننه پرې کول د خامو قیمتي ډبرو صادراتو سره پرتله کولو سره 400% ارزښت اضافه کوي.' },
      // Strategic Minerals
      cobaltSupply: { title: 'د کوبالټ عرضه امنیت', subtitle: 'د بیټرۍ فلز حیاتی', description: 'د افغانستان د 5 ملیونو ټنو کوبالټ ذخیرې د 500 ملیونو بریښنایی موټرونو لپاره د بیټرۍ کاتوډ موادو اړین برابروي. د اخلاقي استخراج معیارونه د مسؤلیت لرونکو تولیدونکو لپاره د شخړې وړ عرضه تضمین کوي.' },
      nickelDeposits: { title: 'د نیکل لیټرایټ پراختیا', subtitle: 'د سټینلیس پولاد او بیټرۍ', description: 'د لیټرایټ او سلفایډ ذخیرو کې د 10 ملیونو ټنو نیکل دواړه سټینلیس پولاد تولید او بیټرۍ تولید ملاتړ کوي. عصري پروسس کول د صفر اسید خپرونې سره د نیکل 95% بیرته نیول ترلاسه کوي.' },
      tungstenSupply: { title: 'د ټنگسټن ستراتیژیک ذخیرې', subtitle: 'د حیاتی فلز', description: 'د پنجشیر او شاوخوا ولایتونو کې د لوړ درجه ټنگسټن ذخیرې د دې حیاتی فلز 500,000 ټنه لري. د ټنگسټن شدید کلکوالی د پرې کولو وسیلو، بریښنایی سامان، او د هوایي فضا کارونو لپاره اړین کوي.' },
      antimonyDeposits: { title: 'د انټیموني تولید', subtitle: 'د اور وژونکي فلز', description: 'د څو ولایتونو په اوږدو کې د انټیموني ذخیرې د اور وژونکو او بیټرۍ ټیکنالوژي لپاره د ودې غوښتنې ملاتړ کوي. عصري پروسس کولو سامانګانې کلني 50,000 ټنه تصفیه شوی انټیموني تولیدوي.' },
      tantalumNiobium: { title: 'د ټانټالم او نیوبیم', subtitle: 'د بریښنایی سامان معدنونه', description: 'د پګماتایټ ذخیرې د بریښنایی سامان کپاسیټرونو او سپر الویونو لپاره اړین ټانټالم او نیوبیم تولیدوي. تصدیق شوي د شخړې وړ عرضه زنځیرونه تضمین کوي چې د افغان ټانټالم د مسؤلیت لرونکو سرچینو معیارونو سره مطابقت لري.' },
      // Future Vision
      vision2050: { title: 'لید 2026-2050', subtitle: 'د اوږد مهاله بډایتوب', description: 'تر 2050 پورې، افغانستان به د نړۍ ترټولو بډایو هېوادونو ترمنځ وي، د معدني عایداتو سره چې د ټولو 60 ملیونو وګړو لپاره عمومي روغتیا پاملرنه، زده کړې، او بډایتوب برابروي. د $30 ټریلیونو معدني وړتیا یو هېواد بدلوي.' },
      sovereignWealth: { title: 'د حاکمیت شتمني فنډ', subtitle: 'د نسلونو امنیت', description: 'د $1 ټریلیون حاکمیت شتمني فنډ - د معدني عایداتو له لارې تمویل شوی - تضمین کوي چې بډایتوب د سرچینو د پای وروسته هم دوام وکړي. د نړیوالو بازارونو کې پانګه اچونه د راتلونکو نسلونو لپاره د تل لپاره عاید برابروي.' },
      technologyHub: { title: 'د سیمه‌ایز ټیکنالوژي مرکز', subtitle: 'د نوښت اقتصاد', description: 'د کان کیندنې شتمني د پوهه اقتصاد ته د بدلون تمویل کوي، د کابل د مرکزي آسیا د ټیکنالوژي او نوښت مرکز کیدو سره. د معدني تمویل شویو پراختیاوو څخه 100 څیړنې پوهنتونونه او 1,000 ټیکنالوژي شرکتونه راڅرګند کیږي.' },
      sustainableLegacy: { title: 'د پایښت وړ میراث', subtitle: 'د چاپیریال میراث', description: 'مسؤلیت لرونکي کان کیندنه د بیا رغول شویو منظرونو، ساتل شویو اکوسیستمونو، او د پاک انرژي زیربنا میراث رامینځته کوي. افغانستان د نړۍ د پایښت وړ سرچینو پراختیا لپاره یو ماډل کیږي.' },
      finalVision: { title: 'یو بدل شوی هېواد', subtitle: 'د افغان رنسانس', description: 'د $30 ټریلیونو معدني شتمني - د پایښت وړ پراختیا، په عادلانه توګه شریک شوی، او په پوهه سره پانګه اچونه - افغانستان د شخړې سیمې څخه د نړیوال اقتصادي قوت ته بدلوي. دا د افغان معدنونو ژمنه ده: د نسلونو لپاره بډایتوب.' },
      // Panjshir Expanded
      panjshirEmeralds: { title: 'د پنجشیر زمردونه', subtitle: 'د قیمتي ډبرو دره', description: 'د افسانوي پنجشیر دره د نړۍ ترټولو غوره زمردونو ځینې تولیدوي. د غرنیو ډبرو څخه استخراج شوي ژور شین کریسټالونه په نړیوالو قیمتي ډبرو بازارونو کې د پریمیم نرخونو امر کوي.' },
      provinces: {
        kandahar: { title: 'د کندهار ولایت', subtitle: 'د سویلي دروازه', description: 'د کندهار ولایت د افغانستان د معدني صادراتو لپاره د سویلي دروازې په توګه خدمت کوي. د سرو زرو، مس، او کرومایټ ذخیرو سره بډای، ولایت د سیمه‌ایزو بازارونو ستراتیژیک لاسرسی د رامنځته شویو سوداګریزو کوریډورونو او عصري زیربنا پراختیا له لارې وړاندې کوي.' },
        herat: { title: 'د هرات ولایت', subtitle: 'د لویدیځو سرچینو', description: 'د هرات پخواني مرمر کانونه او د اوسپنې کان ذخیرې د کان کیندنې د میراث څو پېړۍ استازیتوب کوي. د ولایت د ایران او مرکزي آسیا بازارونو نږدې والی د پروسس شویو معدني محصولاتو لپاره د کلیدي صادراتو مرکز په توګه موقعیت ورکوي.' },
        nuristan: { title: 'د نورستان ولایت', subtitle: 'د لیتیم سرحد', description: 'د نورستان غرني سیمه د نړۍ ترټولو لویو لیتیم لرونکو پګماتایټ ذخیرو میزبان دی. دا مهم معدنونه د نړیوال پاک انرژي بدلون او د بریښنایی موټرونو تولید لپاره اړین دي.' },
        kunar: { title: 'د کونړ ولایت', subtitle: 'د قیمتي ډبرو دره', description: 'د کونړ دراماتیک سیند درې غیر معمولي اکوامارین، تورمالین، او نور قیمتي ډبرې تولیدوي. د ولایت دودیز کان کیندنې دود د عصري تخنیکونو سره یوځای کیږي ترڅو د نړیوال درجې نمونې استخراج کړي.' },
        ghazni: { title: 'د غزني ولایت', subtitle: 'ستراتیژیک ذخیرې', description: 'د غزني ولایت مهم لیتیم، مس، او د اوسپنې کان ذخیرې لري. پخواني بودایی میراث سایټونه د عصري ځمک پوهنې سرویو سره شتون لري چې د سیمې د پراخ معدني پوتانشیل نقشه کوي.' },
        helmand: { title: 'د هلمند ولایت', subtitle: 'د صحرا خزانې', description: 'د هلمند د صحرا منظر لاندې مهم مس او د سرو زرو ذخیرې شتون لري. عصري څیړنې تخنیکونه د مهم پانګه اچونې پوتانشیل سره پراخه معدني کولو سیمې ښیي دي.' },
        faryab: { title: 'د فاریاب ولایت', subtitle: 'د شمالي کرومایټ', description: 'د فاریاب کرومایټ ذخیرې د سټینلیس پولاد تولید لپاره اړین خام مواد وړاندې کوي. شمالي سټیپونه د رامنځته شویو استخراج عملیاتو سره بډای معدني جوړښتونه پټوي.' },
        jowzjan: { title: 'د جوزجان ولایت', subtitle: 'مالګه او ګاز', description: 'د جوزجان ولایت طبیعي ګاز تولید د پراخو مالګې کان کیندنې عملیاتو سره ترکیب کوي. صنعتي معدني پروسس کولو سامانګانې کورني او سیمه‌ایز بازارونو ته خدمت کوي.' },
        takhar: { title: 'د تخار ولایت', subtitle: 'د سرو زرو سیندونه', description: 'د تخار سیند سیسټمونه د پېړیو لپاره الویویل سره زر تولید کړی دی. عصري دودیز کان کیندنه د دودیزو پانینګ تخنیکونو سره د پایښت وړ استخراج لپاره د ښه شوي بیرته نیولو میتودونو سره ترکیب کوي.' },
        samangan: { title: 'د سمنګان ولایت', subtitle: 'د ټالک کان کیندنه', description: 'د سمنګان د ټالک ذخیرې د پخوانیو بودایی غارونو نږدې لوړ درجه صنعتي معدنونه تولیدوي. مشهور تخت رستم صومعه د عصري کان کیندنې عملیاتو ته پام کوي.' },
        baghlan: { title: 'د بغلان ولایت', subtitle: 'د ذغال باسین', description: 'د بغلان د ذغال باسینونه د کورني صنعت لپاره اړین انرژي سرچینې وړاندې کوي. د ځمک لاندې کان کیندنې عملیات لوړ کیفیت متالورژیک او حرارتي ذغال استخراج کوي.' },
        parwan: { title: 'د پروان ولایت', subtitle: 'د سالنګ دروازه', description: 'د پروان ولایت، د سالنګ پاس دروازه، د اوسپنې کان او د مس ذخیرې لري. ستراتیژیک موقعیت شمالي او سویلي معدني سیمې سره وصل کوي.' },
        laghman: { title: 'د لغمان ولایت', subtitle: 'د باریټ استخراج', description: 'د لغمان د باریټ ذخیرې د تیلو ډرل کولو صنعت ته خدمت کوي. کرنیز درې د دې متنوع ختیځ ولایت کې د معدني بډای غرونو سره نښتي.' },
        kapisa: { title: 'د کاپیسا ولایت', subtitle: 'پټ قیمتي ډبرې', description: 'د کاپیسا غرني غارونه قیمتي ډبرې تولیدوي چې تورمالین او کونزایټ شامل دي. دودیز کان کیندنې کورنۍ د پېړیو د استخراج پوهه ساتي.' },
        wardak: { title: 'د وردک ولایت', subtitle: 'د حاجیگک اوسپنه', description: 'وردک د افسانوي حاجیگک د اوسپنې کان ذخیرې میزبان دی - د آسیا ترټولو لویو نا پراختیا شویو اوسپنو ذخیرو څخه یو. عظیمه ذخیره له 2.2 ملیارد میټریک ټنو څخه زیات لوړ درجه کان لري.' },
        zabul: { title: 'د زابل ولایت', subtitle: 'د نادرې خاورې سروی', description: 'د زابل ولایت کې د ځمک پوهنې سرویو د نادرې خاورې عناصرو د امیدوار غلظتونو پیژندل کړي دي. دا ستراتیژیک معدنونه د پرمختللي ټیکنالوژي تولید لپاره اړین دي.' },
        paktya: { title: 'د پکتیا ولایت', subtitle: 'د ځنګلي معدنونه', description: 'د پکتیا د نښل شویو غرونو کرومایټ او د مس ذخیرې پټوي. د پایښت وړ کان کیندنې تمرینونه د ولایت د ځانګړو ځنګلي اکوسیستمونو ساتنه کوي.' },
        khost: { title: 'د خوست ولایت', subtitle: 'د سیمنټ صنعت', description: 'د خوست د لایمسټون کانونه عصري سیمنټ تولید سامانګانیو ته خوراک ورکوي. صنعتي پراختیا دندې رامینځته کوي پداسې حال کې چې د ملي ساختماني اړتیاوو ملاتړ کوي.' },
        daykundi: { title: 'د دایکونډي ولایت', subtitle: 'د الپاین مرمر', description: 'د دایکونډي لوړ لوړوالي کانونه ځانګړي ګلابي او کرم مرمر تولیدوي. لرې غرني موقعیتونه د نړیوالو صادراتو بازارونو لپاره پریمیم ډبره وړاندې کوي.' },
        uruzgan: { title: 'د اروزګان ولایت', subtitle: 'لرې څیړنه', description: 'د اروزګان ناڅرګنده سیمه د عصري څیړنې ډرل کولو له لارې د مس او د سرو زرو ذخیرې ښیي دي. لرې عملیات د بشپړ سرچینو ارزونې لپاره د ژمنتیا نمایش کوي.' },
        ghor: { title: 'د غور ولایت', subtitle: 'د جام منار', description: 'د غور ولایت، د یونسکو لیست شوي جام منار کور، د میراث ساتنې سره د معدني پراختیا توازن ساتي. داسې څیړنه د کلتوري سایټونو ساتنه کوي پداسې حال کې چې د سرچینو پوتانشیل ارزونه کوي.' },
        farah: { title: 'د فراه ولایت', subtitle: 'د لویدیځو اوسپنه', description: 'د فراه د اوسپنې کان ذخیرې د ایرانی پولې سره د مهم پراختیا پوتانشیل استازیتوب کوي. لویدیځ لویه لاره اړیکې راتلونکي صادراتو لاجستیک اسانه کوي.' },
        nimroz: { title: 'د نیمروز ولایت', subtitle: 'د صحرا سره زر', description: 'د نیمروز ولایت د ریګستان صحرا د ډبرینو وړاندې تلو او د شګو ډونونو د سره راتلو په ځای کې د سرو زرو ذخیرې پټوي. شدید شرایط ننګونې وړاندې کوي مګر عصري څیړنه مخنیوی نه کوي.' },
        sarEPul: { title: 'د سرپل ولایت', subtitle: 'انرژي او معدنونه', description: 'د سرپل ولایت طبیعي ګاز تولید د متنوع معدني استخراج سره ترکیب کوي. صنعتي سامانګانې خام مواد د کورني بازارونو لپاره پروسس کوي.' },
        logar: { title: 'د لوګر ولایت', subtitle: 'د مس کور', description: 'د افسانوي مس عینک ذخیرې کور، د لوګر ولایت د افغانستان د مس صنعت مرکز استازیتوب کوي چې د ذخیرو ارزښت د څو میلیاردو ډالرو کې دی.' },
        badakhshan: { title: 'د بدخشان ولایت', subtitle: 'د قیمتي ډبرو پاچاهي', description: 'د بدخشان پخواني قیمتي ډبرو ولایت د نړۍ ته د شپږ زرو کلونو لپاره لاجورد وړاندې کړی دی او د زمرد، یاقوت، او نورو قیمتي ډبرو تولید ته دوام ورکوي.' },
        bamyan: { title: 'د بامیان ولایت', subtitle: 'د اوسپنې غر', description: 'د بامیان دراماتیک منظر د حاجیگک عظیمه اوسپنې کان ذخیرې پټوي - د آسیا ترټولو لویو اوسپنو ذخیرو څخه یو - د مهمو مس او ذغال ذخیرو سره چې د پراختیا انتظار کوي.' },
        panjshir: { title: 'د پنجشیر ولایت', subtitle: 'د زمرد دره', description: 'د پنجشیر دره دراماتیک درې د نړۍ ترټولو غوره زمرد ذخیرو میزبان دی، د قیمتي ډبرو تولید کوي چې د کولمبیا او زامبیا ډبرو سره د رنګ او کیفیت په برخه کې سیالي کوي.' },
      },
    },
  },
   fa: {
     nav: {
       home: 'خانه',
       sectors: 'بخش‌ها',
       minerals: 'معادن',
       investment: 'سرمایه‌گذاری',
       contact: 'تماس',
       about: 'درباره',
       provinces: 'ولایات',
       operations: 'عملیات',
       timeline: 'خط زمانی',
       map: 'نقشه',
     },
     navDropdowns: {
       provinces: {
         title: '34 ولایت غنی از منابع',
         subtitle: 'کشف ذخایر معدنی در سراسر افغانستان',
         viewMap: 'مشاهده نقشه تعاملی',
         clickToExplore: 'برای کشف ثروت معدنی هر ولایت کلیک کنید',
         badakhshan: 'بدخشان - پادشاهی سنگ‌های قیمتی',
         badghis: 'بادغیس - منابع معدنی',
         baghlan: 'بغلان - زغال سنگ و معادن',
         balkh: 'بلخ - منابع شمالی',
         bamyan: 'بامیان - کوه آهن',
         daykundi: 'دایکندی - ذخایر معدنی',
         farah: 'فراه - معادن غربی',
         faryab: 'فاریاب - ذخایر شمالی',
         ghazni: 'غزنی - کمربند لیتیوم',
         ghor: 'غور - منابع مرکزی',
         helmand: 'هلمند - منابع استراتژیک',
         herat: 'هرات - دروازه غربی',
         jowzjan: 'جوزجان - معادن شمالی',
         kabul: 'کابل - منابع پایتخت',
         kandahar: 'قندهار - مرکز جنوبی',
         kapisa: 'کاپیسا - ذخایر مرکزی',
         khost: 'خوست - معادن شرقی',
         kunar: 'کونار - دره سنگ‌های قیمتی',
         kunduz: 'کندز - دروازه شمالی',
         laghman: 'لغمان - منابع شرقی',
         logar: 'لوگر - قلب مس',
         nangarhar: 'ننگرهار - ذخایر شرقی',
         nimruz: 'نیمروز - معادن جنوبی',
         nuristan: 'نورستان - مرز لیتیوم',
         paktia: 'پکتیا - منابع شرقی',
         paktika: 'پکتیکا - ذخایر جنوبی',
         panjshir: 'پنجشیر - دره زمرد',
         parwan: 'پروان - معادن مرکزی',
         samangan: 'سمنگان - ذخایر شمالی',
         sarEPol: 'سرپل - منابع شمالی',
         takhar: 'تخار - رودهای طلایی',
         uruzgan: 'ارزگان - معادن مرکزی',
         wardak: 'وردک - ذخایر مرکزی',
         zabul: 'زابل - منابع جنوبی',
       },
       operations: {
         title: 'عملیات و خدمات معدن',
         subtitle: 'خدمات و عملیات جامع معدن',
         viewAll: 'مشاهده همه عملیات و خدمات',
         processing: { label: 'پردازش و پالایش', description: 'تسهیلات پردازش سنگ معدن' },
         smelting: { label: 'عملیات ذوب', description: 'استخراج فلز' },
         research: { label: 'تحقیقات و اکتشاف', description: 'بررسی‌های زمین‌شناسی' },
         geological: { label: 'بررسی‌های زمین‌شناسی', description: 'نقشه‌برداری ذخایر' },
         trade: { label: 'تجارت و صادرات', description: 'تجارت بین‌المللی' },
         investment: { label: 'چارچوب سرمایه‌گذاری', description: 'قانونی و مالی' },
         sustainability: { label: 'پایداری', description: 'استانداردهای محیط زیست' },
         community: { label: 'توسعه جامعه', description: 'اشتغال محلی' },
         digital: { label: 'معدن دیجیتال', description: 'ادغام فناوری' },
         safety: { label: 'سلامت و ایمنی', description: 'حفاظت از کارگران' },
       },
       timeline: {
         title: 'جدول زمانی توسعه',
         subtitle: 'پیشرفت تاریخی و چشم‌انداز آینده',
         viewComplete: 'مشاهده جدول زمانی کامل',
         clickToExplore: 'برای کاوش جزئیات جدول زمانی هر گزینه را کلیک کنید',
         historical: { label: 'جدول زمانی تاریخی', description: 'تاریخ معدن و نقاط عطف' },
         ancientPeriod: { label: 'معادن باستان (۴۰۰۰ قبل از میلاد - ۱۰۰۰ میلادی)', description: 'بیش از ۶۰۰۰ سال میراث معدن‌کاری از تمدن‌های باستان' },
         ancientEgypt: { label: 'مصر و میان‌رودان باستان', description: 'لاجورد افغان در آرامگاه توتانخامون و تجارت باستان' },
         silkRoad: { label: 'دوره جاده ابریشم', description: 'مسیرهای تجاری تاریخی و تجارت معدنی' },
         medievalPeriod: { label: 'دوره‌های قرون وسطی و اسلامی', description: 'تجارت جاده ابریشم و گسترش معدن‌کاری اسلامی' },
         renaissance: { label: 'دوره رنسانس', description: 'تجارت رنگ اولترامارین و هنر اروپایی' },
         colonialPeriod: { label: 'اکتشاف استعماری (۱۸۰۰-۱۹۶۰)', description: 'بررسی‌های زمین‌شناسی اروپایی و اکتشافات اولیه' },
         britishSurveys: { label: 'بررسی‌های زمین‌شناسی بریتانیا', description: 'اکتشاف و نقشه‌برداری بریتانیایی قرن نوزدهم' },
         russianSurveys: { label: 'سفرهای زمین‌شناسی روسیه', description: 'کار زمین‌شناسی روسیه در اوایل قرن بیستم' },
         sovietPeriod: { label: 'دوره شوروی (۱۹۶۰-۱۹۹۰)', description: 'نقشه‌برداری جامع زمین‌شناسی و شناسایی ذخایر عمده' },
         sovietMapping: { label: 'نقشه‌برداری زمین‌شناسی شوروی', description: 'بررسی‌های جامع شناسایی مس عینک و حاجیگک' },
         modernEra: { label: 'دوره مدرن (۲۰۰۰-اکنون)', description: 'نوسازی قرن بیست و یکم و توسعه جامع' },
         usgsSurveys: { label: 'بررسی‌های جامع USGS', description: 'ارزیابی USGS برای کمی‌سازی endowment معدنی بیش از ۳۰ تریلیون دلار' },
         gemstoneHistory: { label: 'میراث سنگ‌های قیمتی', description: '۶۰۰۰ سال معدن‌کاری لاجورد، زمرد و یاقوت' },
         lapisHistory: { label: 'لاجورد: ۶۰۰۰ سال', description: 'قدیمی‌ترین معادن با عملیات مداوم جهان' },
         emeraldHistory: { label: 'میراث زمرد پنجشیر', description: 'بیش از ۱۰۰۰ سال سنت معدن‌کاری زمرد' },
         rubyHistory: { label: 'معدن‌کاری یاقوت جگدلک', description: 'ذخایر یاقوت خون کبوتری و استخراج تاریخی' },
         goldHistory: { label: 'میراث معدن‌کاری طلا', description: 'سنن استخراج طلای باستان و قرون وسطی' },
         copperHistory: { label: 'میراث معدن‌کاری مس', description: 'استخراج و تجارت تاریخی مس' },
         tradeRoutes: { label: 'مسیرهای تجاری باستان', description: 'جاده ابریشم و شبکه‌های تجارت معدنی تاریخی' },
         caravanRoutes: { label: 'شبکه‌های تجارت کاروانی', description: 'مسیرهای کاروانی تاریخی حامل مواد معدنی افغانستان' },
         maritimeTrade: { label: 'تاریخ تجارت دریایی', description: 'مسیرهای دریایی تاریخی برای صادرات مواد معدنی' },
         archaeological: { label: 'کشف‌های باستان‌شناسی', description: 'محوطه‌های معدن‌کاری تاریخی و شواهد باستان‌شناسی' },
         mesAynakArchaeology: { label: 'محوطه باستان‌شناسی مس عینک', description: 'محوطه بودایی ۲۰۰۰ ساله و ذخیره مس' },
         documentation: { label: 'مستندات تاریخی', description: 'متون، نقشه‌ها و سوابق تاریخی باستان' },
         ancientTexts: { label: 'متون و سوابق باستان', description: 'اسناد تاریخی ذکرکننده مواد معدنی افغانستان' },
         historicalMaps: { label: 'نقشه‌های تاریخی', description: 'نقشه‌های باستان و قرون وسطی نشان‌دهنده محوطه‌های معدن' },
         museumCollections: { label: 'کلکسیون‌های موزه', description: 'مواد معدنی افغانستان در کلکسیون‌های موزه جهان' },
         provincial: { label: 'توسعه استانی', description: 'جدول زمانی منطقه‌ای' },
         badakhshanHistory: { label: 'تاریخ معدن بدخشان', description: '۶۰۰۰ سال معدن‌کاری لاجورد' },
         panjshirHistory: { label: 'میراث دره پنجشیر', description: 'سنن معدن‌کاری زمرد در هزاره‌ها' },
         roadmap: { label: 'نقشه راه توسعه', description: 'طرح‌های توسعه آینده' },
         milestones: { label: 'نقاط عطف پروژه', description: 'دستاوردهای کلیدی پروژه' },
         achievements: { label: 'دستاوردها', description: 'دستاوردهای عمده' },
         vision2030: { label: 'چشم‌انداز 2026-2050', description: 'چشم‌انداز بلندمدت' },
         reports: { label: 'گزارش‌های سالانه', description: 'گزارش‌های پیشرفت سالانه' },
         annualReports: { label: 'گزارش‌های پیشرفت سالانه', description: 'گزارش‌های سالانه توسعه معدن' },
         dataReports: { label: 'گزارش‌های داده تاریخی', description: 'داده جامع معدن‌کاری تاریخی' },
         statisticalAnalysis: { label: 'تحلیل آماری', description: 'آمار و روندهای معدن‌کاری تاریخی' },
         historicalGallery: { label: 'گالری تصاویر تاریخی', description: 'مجموعه جامع تصاویر معدن‌کاری تاریخی' },
         ancientImages: { label: 'تصاویر معدن باستان', description: 'تصاویر تاریخی از دوره‌های معدن باستان' },
         medievalImages: { label: 'تصاویر دوره قرون وسطی', description: 'تصاویر تاریخی از معدن قرون وسطی' },
         archaeologicalImages: { label: 'تصاویر محوطه باستان‌شناسی', description: 'تصاویر محوطه‌های معدن تاریخی' },
         artisanalMining: { label: 'تاریخ معدن‌کاری دستی', description: 'روش‌های سنتی معدن و میراث' },
         miningTechniques: { label: 'تکنیک‌های معدن تاریخی', description: 'تکامل روش‌های معدن در بیش از ۶۰۰۰ سال' },
         culturalHeritage: { label: 'میراث فرهنگی', description: 'معدن در فرهنگ و سنن افغان' },
         royalCollections: { label: 'کلکسیون‌های سلطنتی', description: 'جواهرات افغان در کلکسیون‌های سلطنتی تاریخی' },
         ironHistory: { label: 'میراث معدن آهن', description: 'استخراج تاریخی آهن و تولید فولاد' },
         lithiumHistory: { label: 'تاریخ کشف لیتیوم', description: 'اکتشاف و کشف تاریخی لیتیوم' },
         coalHistory: { label: 'میراث معدن زغال سنگ', description: 'استخراج تاریخی زغال سنگ و تولید انرژی' },
         marbleHistory: { label: 'میراث استخراج مرمر', description: 'استخراج و کاربرد معماری تاریخی مرمر' },
         chromiteHistory: { label: 'تاریخ معدن کرومیت', description: 'استخراج و کاربرد صنعتی تاریخی کرومیت' },
         rareEarthHistory: { label: 'کشف عناصر خاکی کمیاب', description: 'اکتشاف تاریخی عناصر خاکی کمیاب' },
         miningCommunities: { label: 'جوامع معدن تاریخی', description: 'جوامع سنتی معدن و میراث آن‌ها' },
         miningLegends: { label: 'افسانه‌ها و داستان‌های معدن', description: 'افسانه‌ها و داستان‌های تاریخی از مناطق معدن' },
         geologicalFormation: { label: 'تاریخ تشکیل زمین‌شناسی', description: 'چگونگی تشکیل ذخایر معدنی افغانستان در میلیون‌ها سال' },
         miningTools: { label: 'ابزار معدن تاریخی', description: 'تکامل ابزار معدن در بیش از ۶۰۰۰ سال' },
         miningSafety: { label: 'ایمنی معدن تاریخی', description: 'شیوه‌های ایمنی سنتی و تکامل مدرن' },
         miningEconomics: { label: 'اقتصاد معدن تاریخی', description: 'تأثیر اقتصادی معدن در طول تاریخ' },
         miningLaw: { label: 'قانون و حکمرانی معدن تاریخی', description: 'تکامل مقررات و حکمرانی معدن' },
         womenInMining: { label: 'زنان در معدن تاریخی', description: 'نقش زنان در معدن در طول تاریخ' },
         miningEducation: { label: 'آموزش معدن تاریخی', description: 'انتقال دانش سنتی و آموزش مدرن' },
         productionStatistics: { label: 'آمار تولید معدن', description: 'داده‌های تولید تاریخی، روند تولید و حجم معدن‌کاری' },
         economicImpact: { label: 'تحلیل تأثیر اقتصادی', description: 'مشارکت‌های اقتصادی، تأثیر تولید ناخالص و درآمد معدن' },
         tradeVolumes: { label: 'داده‌های حجم تجارت', description: 'حجم تجارت تاریخی، آمار صادرات و داده‌های بازار' },
         workforceStatistics: { label: 'اشتغال و نیروی کار', description: 'داده‌های اشتغال معدن، جمعیت‌شناسی نیروی کار و آمار کار' },
         priceTrends: { label: 'روند قیمت و بازارها', description: 'قیمت‌های معدنی تاریخی، روند بازار و ارزش کالاها' },
         geologicalFormations: { label: 'تشکیلات زمین‌شناسی', description: 'ساختارهای زمین‌شناسی، فرآیندهای تشکیل و پیدایش معدنی' },
         depositCharacteristics: { label: 'ویژگی‌های ذخیره', description: 'انواع ذخیره، عیار سنگ، ذخایر و طبقه‌بندی منابع' },
         miningTechnologyEvolution: { label: 'تکامل فناوری معدن', description: 'پیشرفت‌های فناوری، تکامل تجهیزات و جدول زمانی نوآوری' },
         explorationMethods: { label: 'روش‌های اکتشاف', description: 'تکنیک‌های اکتشاف تاریخی، بررسی‌ها و روش‌های کشف' },
         environmentalFactors: { label: 'عوامل زیست‌محیطی', description: 'ملاحظات زیست‌محیطی، تأثیرات و شیوه‌های پایداری' },
         miningRegulationsTimeline: { label: 'جدول زمانی مقررات معدن', description: 'تکامل چارچوب مقررات، قوانین و ساختارهای حکمرانی' },
         licensingPermits: { label: 'مجوزها و پروانه‌ها', description: 'سیستم‌های صدور مجوز تاریخی، فرآیندهای مجوز و چارچوب‌های مجوز' },
         taxationRoyalties: { label: 'مالیات و حق‌الامتیاز', description: 'ساختارهای مالیاتی، سیستم‌های حق‌الامتیاز و سیاست‌های مالی' },
         infrastructureDevelopment: { label: 'توسعه زیرساخت', description: 'زیرساخت معدن، حمل و نقل و توسعه تأسیسات' },
         processingFacilities: { label: 'تأسیسات فرآوری', description: 'کارخانه‌های فرآوری مواد معدنی، پالایشگاه‌ها و تأسیسات صنعتی' },
         transportationNetworks: { label: 'شبکه‌های حمل و نقل', description: 'مسیرهای تجاری، زیرساخت حمل و نقل و سیستم‌های لجستیک' },
         marketAnalysis: { label: 'تحلیل بازار', description: 'سهم بازار، تحلیل رقابت و ساختار صنعت' },
         investmentFlows: { label: 'جریان‌های سرمایه‌گذاری', description: 'الگوهای سرمایه‌گذاری تاریخی، جریان سرمایه و منابع تأمین مالی' },
         internationalPartnerships: { label: 'شراکت‌های بین‌المللی', description: 'همکاری‌های بین‌المللی، سرمایه‌گذاری مشترک و شراکت‌ها' },
         researchStudies: { label: 'تحقیق و مطالعات', description: 'تحقیقات دانشگاهی، مطالعات زمین‌شناسی و انتشارات علمی' },
         dataAnalytics: { label: 'داده و تحلیل', description: 'جمع‌آوری داده، روش‌های تحلیل و گزارش آماری' },
         forecastingProjections: { label: 'پیش‌بینی و برآوردها', description: 'برآوردهای آینده، برآورد منابع و پیش‌بینی‌های توسعه' },
       },
       investment: {
         title: 'پورتال سرمایه‌گذاری',
         subtitle: 'اطلاعات جامع سرمایه‌گذاری',
         viewComplete: 'مشاهده پورتال کامل سرمایه‌گذاری',
         clickToExplore: 'برای کاوش فرصت‌های سرمایه‌گذاری هر گزینه را کلیک کنید',
         framework: { label: 'چارچوب سرمایه‌گذاری', description: 'ساختار قانونی و نظارتی' },
         opportunities: { label: 'فرصت‌های سرمایه‌گذاری', description: 'پروژه‌های موجود' },
         partnerships: { label: 'مدل‌های مشارکت', description: 'مشارکت‌ها و توافقنامه‌ها' },
         incentives: { label: 'مشوق‌های مالی', description: 'مزایای مالیاتی و مشوق‌ها' },
         riskManagement: { label: 'مدیریت ریسک', description: 'حفاظت از سرمایه‌گذاری' },
         partners: { label: 'شرکای بین‌المللی', description: 'مشارکت‌های جهانی' },
         process: { label: 'فرآیند سرمایه‌گذاری', description: 'راهنمای گام به گام' },
         statistics: { label: 'آمار سرمایه‌گذاری', description: 'داده‌ها و روندهای بازار' },
       },
       contact: {
         title: 'پورتال تماس',
         subtitle: 'با ما در تماس باشید',
         viewSection: 'مشاهده بخش تماس',
         clickToExplore: 'برای تماس هر گزینه را کلیک کنید',
         form: { label: 'فرم تماس', description: 'ارسال استعلام' },
         offices: { label: 'موقعیت‌های دفتر', description: 'یافتن دفاتر ما' },
         email: { label: 'تماس ایمیل', description: 'آدرس‌های ایمیل' },
         phone: { label: 'دفترچه تلفن', description: 'شماره‌های تماس' },
         departments: { label: 'تماس‌های بخش', description: 'بر اساس بخش' },
         international: { label: 'دفاتر بین‌المللی', description: 'تماس‌های جهانی' },
         media: { label: 'استعلام رسانه', description: 'رسانه و مطبوعات' },
         partnerships: { label: 'استعلام مشارکت', description: 'مشارکت‌های تجاری' },
      },
    },
    mineralsMegaMenu: {
      title: 'پورتال معادن افغانستان',
      subtitle: 'پایگاه جامع داده‌های منابع معدنی',
      viewComplete: 'مشاهده ثبت کامل',
      clickToExplore: 'برای کاوش جزئیات روی هر معدن کلیک کنید',
      strategicMetals: {
        copper: {
          title: 'مس',
          items: {
            mesAynak: 'ذخیره مس عینک',
            hajigak: 'مجتمع مس-آهن حاجیگک',
            balkhab: 'ذخیره بلخاب',
            processing: 'پردازش مس',
            exports: 'صادرات مس',
            smelting: 'عملیات ذوب مس',
            logar: 'ذخایر ولایت لوگر',
            refining: 'تسهیلات پالایش مس',
          },
        },
        lithium: {
          title: 'لیتیوم',
          items: {
            ghazni: 'پگماتیت‌های غزنی',
            nuristan: 'ذخایر نورستان',
            batteryGrade: 'پردازش درجه باتری',
            evSupply: 'زنجیره تأمین خودروهای برقی',
            research: 'مراکز تحقیقاتی',
            carbonate: 'تولید کربنات لیتیوم',
            spodumene: 'غلظت‌های اسپودومن',
            batteryMaterials: 'تولید مواد باتری',
          },
        },
        ironOre: {
          title: 'سنگ آهن',
          items: {
            hajigak: 'کوه آهن حاجیگک',
            steelProduction: 'طرح‌های تولید فولاد',
            magnetite: 'کیفیت مگنتیت',
            infrastructure: 'فولاد زیرساخت',
            employment: 'ایجاد اشتغال',
            beneficiation: 'فرآوری سنگ آهن',
            pelletization: 'کارخانه‌های گندله‌سازی',
            bamyan: 'ذخایر ولایت بامیان',
          },
        },
        leadZinc: {
          title: 'سرب و روی',
          items: {
            aynak: 'ذخایر سرب-روی عینک',
            zincConcentrate: 'تولید کنسانتره روی',
            smelting: 'عملیات ذوب سرب',
            batteryMaterials: 'مواد تولید باتری',
          },
        },
        cobaltNickel: {
          title: 'کبالت و نیکل',
          items: {
            cobalt: 'ذخایر کبالت',
            nickel: 'منابع لاتریت نیکل',
            alloys: 'آلیاژهای فلز باتری',
            evSupply: 'زنجیره تأمین باتری خودروهای برقی',
          },
        },
        aluminum: {
          title: 'آلومینیوم و فلزات سبک',
          items: {
            bauxite: 'ذخایر بوکسیت',
            alumina: 'تولید آلومینا',
            cryolite: 'ذخایر کریولیت',
          },
        },
        strategicHardMetals: {
          title: 'فلزات استراتژیک و سخت',
          items: {
            tungsten: 'ذخایر تنگستن',
            molybdenum: 'ذخایر مولیبدن',
            vanadium: 'ذخایر وانادیوم',
            titaniumRutile: 'روتیل تیتانیوم',
            titaniumIlmenite: 'ایلمنیت تیتانیوم',
            tin: 'ذخایر قلع',
            antimony: 'ذخایر آنتیموان',
            zirconium: 'ذخایر زیرکونیوم',
            tantalum: 'ذخایر تانتالوم',
            yttrium: 'ذخایر ایتریوم',
            scandium: 'ذخایر اسکاندیوم',
            cerium: 'ذخایر سریوم',
            gadolinium: 'ذخایر گادولینیوم',
          },
        },
        energyFuel: {
          title: 'انرژی و مواد سوختی',
          items: {
            uranium: 'ذخایر اورانیوم',
            thorium: 'ذخایر توریوم',
            lignite: 'ذخایر لیگنیت',
            bituminousCoal: 'انواع زغال سنگ بیتومینوس',
          },
        },
      },
      preciousResources: {
        gemstones: {
          title: 'سنگ‌های قیمتی',
          items: {
            panjshirEmeralds: 'زمردهای پنجشیر',
            lapisLazuli: 'لاجورد بدخشان',
            jegdalekRubies: 'یاقوت‌های جگدالک',
            sapphires: 'یاقوت کبود هندوکش',
            tourmaline: 'تورمالین نورستان',
            aquamarine: 'آکوامارین کنار',
            cutting: 'برش و صیقل سنگ‌های قیمتی',
            certification: 'گواهی سنگ‌های قیمتی',
            trade: 'تجارت بین‌المللی سنگ‌های قیمتی',
            kunzite: 'کونزیت و اسپودومن',
            garnet: 'ذخایر گارنت',
            peridot: 'منابع پریدوت',
          },
        },
        gold: {
          title: 'طلا',
          items: {
            badakhshan: 'کمربند طلای بدخشان',
            takhar: 'ذخایر تخار',
            refining: 'پالایش طلا',
            artisanal: 'معدن‌کاری دستی',
            bullion: 'تولید شمش',
            processing: 'کارخانه‌های پردازش طلا',
            exports: 'عملیات صادرات طلا',
            placer: 'ذخایر طلای پلاسر',
            lode: 'رگه‌های طلای لود',
          },
        },
        rareEarth: {
          title: 'عناصر نادر خاکی',
          items: {
            helmand: 'ذخایر عناصر نادر خاکی هلمند',
            technology: 'فلزات فناوری',
            neodymium: 'نئودیمیم و پرازئودیمیم',
            globalSupply: 'تأثیر عرضه جهانی',
            research: 'شراکت‌های تحقیقاتی',
            concentrate: 'پردازش کنسانتره عناصر نادر خاکی',
            dysprosium: 'دیسپروزیوم و تربیم',
            separation: 'فناوری جداسازی عناصر نادر خاکی',
          },
        },
        silver: {
          title: 'نقره',
          items: {
            deposits: 'ذخایر نقره',
            refining: 'پالایش نقره',
            leadOres: 'سنگ‌های نقره-سرب',
            industrial: 'کاربردهای صنعتی نقره',
          },
        },
      },
      industrialMinerals: {
        chromite: {
          title: 'کرومیت',
          items: {
            reserves: 'ذخایر کرومیت',
            exports: 'عملیات صادرات',
            steel: 'تولید فولاد ضد زنگ',
            mining: 'عملیات استخراج کرومیت',
            ferrochrome: 'تولید فروکروم',
            logar: 'ذخایر کرومیت لوگر',
          },
        },
        marble: {
          title: 'مرمر',
          items: {
            white: 'مرمر سفید ممتاز',
            herat: 'معادن هرات',
            architectural: 'سنگ معماری',
            processing: 'تسهیلات پردازش مرمر',
            exports: 'عملیات صادرات مرمر',
            varieties: '75+ انواع رنگ',
            trade: 'تجارت بین‌المللی سنگ',
          },
        },
        coal: {
          title: 'زغال سنگ',
          items: {
            basins: 'حوضه‌های زغال سنگ',
            underground: 'عملیات زیرزمینی',
            baghlan: 'ولایت بغلان',
            metallurgical: 'زغال سنگ متالورژیکی',
            thermal: 'ذخایر زغال سنگ حرارتی',
            processing: 'کارخانه‌های پردازش زغال سنگ',
            energy: 'تولید انرژی',
          },
        },
        talcBarite: {
          title: 'تالک و باریت',
          items: {
            talc: 'تالک با خلوص بالا',
            drilling: 'باریت حفاری',
            salt: 'ذخایر نمک',
            talcProcessing: 'پردازش تالک',
            bariteConcentrates: 'کنسانتره‌های باریت',
            industrial: 'کاربردهای صنعتی',
          },
        },
        gypsumLimestone: {
          title: 'گچ و سنگ آهک',
          items: {
            gypsum: 'ذخایر گچ',
            limestone: 'معادن سنگ آهک',
            cement: 'تولید سیمان',
            construction: 'مواد ساختمانی',
          },
        },
        clayKaolin: {
          title: 'خاک رس و کائولین',
          items: {
            kaolin: 'ذخایر کائولین',
            ceramic: 'منابع خاک رس سرامیکی',
            pottery: 'تولید سفال و کاشی',
            paper: 'کاربردهای صنعت کاغذ',
            refractory: 'مواد نسوز',
            paint: 'صنعت رنگ و پوشش',
            pharmaceutical: 'کاربردهای دارویی',
            cosmetic: 'کائولین درجه آرایشی',
          },
        },
        sulfurPyrite: {
          title: 'گوگرد و پیریت',
          items: {
            sulfur: 'ذخایر گوگرد',
            pyrite: 'منابع پیریت',
            fertilizer: 'تولید کود',
            chemical: 'صنعت شیمیایی',
            acid: 'تولید اسید سولفوریک',
            mining: 'استخراج و استخراج',
            agricultural: 'کاربردهای کشاورزی',
            processing: 'پردازش پیریت',
          },
        },
        micaFeldspar: {
          title: 'میکا و فلدسپار',
          items: {
            mica: 'ذخایر میکا',
            feldspar: 'منابع فلدسپار',
            electronics: 'صنعت الکترونیک',
            glass: 'تولید شیشه',
            sheets: 'تولید ورق میکا',
            ceramic: 'سرامیک و سفال',
            insulation: 'مواد عایق',
            abrasive: 'کاربردهای ساینده',
          },
        },
        graphiteCarbon: {
          title: 'گرافیت و کربن',
          items: {
            graphite: 'ذخایر گرافیت',
            battery: 'مواد آند باتری',
            steel: 'تولید فولاد',
            lubricant: 'کاربردهای روان‌کننده',
            refractory: 'محصولات نسوز',
            carbonFiber: 'مواد الیاف کربن',
          },
        },
        phosphatePotash: {
          title: 'فسفات و پتاس',
          items: {
            phosphate: 'ذخایر فسفات',
            fertilizer: 'تولید کود',
            agricultural: 'مواد مغذی کشاورزی',
            food: 'کاربردهای صنعت غذایی',
            potash: 'منابع پتاس',
            chemical: 'پردازش شیمیایی',
          },
        },
        quartzSilica: {
          title: 'کوارتز و سیلیس',
          items: {
            quartz: 'ذخایر کوارتز',
            silica: 'منابع ماسه سیلیس',
            glass: 'تولید شیشه',
            semiconductor: 'صنعت نیمه‌هادی',
            foundry: 'کاربردهای ریخته‌گری',
            filtration: 'فیلتراسیون آب',
          },
        },
        refractories: {
          title: 'مواد نسوز و مواد معدنی صنعتی',
          items: {
            magnesite: 'ذخایر منیزیت',
            bentonite: 'ذخایر بنتونیت',
            pyrophyllite: 'ذخایر پیروفیلیت',
            asbestos: 'ذخایر آزبست',
            ballClay: 'ذخایر بال کلی',
            kaolinVariants: 'انواع کائولین',
            diatomite: 'ذخایر دیاتومیت',
          },
        },
        dimensionStones: {
          title: 'سنگ‌های ابعادی و تزئینی',
          items: {
            granite: 'ذخایر گرانیت',
            sandstone: 'ذخایر ماسه‌سنگ',
            travertine: 'ذخایر تراورتن',
            soapstone: 'ذخایر صابون‌سنگ',
            quartzite: 'ذخایر کوارتزیت',
            dioriteGabbro: 'دیوریت / گابرو',
          },
        },
      },
    },
    provinceDetail: {
      resourceProfile: 'پروفایل منابع استانی',
       provincialStatistics: 'آمار استانی',
       downloadBrief: 'دانلود خلاصه سرمایه‌گذاری',
       mineralResources: 'منابع معدنی',
       keyDeposits: 'ذخایر معدنی کلیدی',
       opportunities: 'فرصت‌ها',
       investmentOpportunities: 'فرصت‌های سرمایه‌گذاری',
       developmentTimeline: 'جدول زمانی توسعه',
       keyMilestones: 'نقاط عطف کلیدی',
       highlights: {
         richPotential: 'پتانسیل غنی منابع معدنی',
         strategicOpportunities: 'فرصت‌های توسعه استراتژیک',
         investmentReady: 'پروژه‌های آماده سرمایه‌گذاری',
         infrastructurePlans: 'طرح‌های توسعه زیرساخت',
       },
     },
     hero: {
       tagline: 'از مردم افغانستان، برای مردم افغانستان، و توسط مردم افغانستان.',
       title: 'برنامه ملی اصلاحات اقتصادی افغانستان',
       subtitle: 'آینده یک ملت به زبان تصادف نوشته نمی‌شود بلکه در معماری اراده. و این کنسرسیوم به عنوان آن اراده ایستاده است — یک چارچوب زنده که برای انتقال افغانستان از مقاومت به نوزایی ساخته شده است.',
       cta: 'فرصت‌های سرمایه‌گذاری را کاوش کنید',
     },
     stats: {
       mineralReserves: 'ذخایر معدنی',
       knownDeposits: 'ذخایر شناخته شده',
       mineralTypes: 'انواع معادن',
       provinces: 'ولایات',
       estimatedValue: 'ارزش تخمینی کل',
       acrossProvinces: 'در تمام ولایات',
       criticalStrategic: 'حیاتی و استراتژیک',
       resourceRich: 'مناطق غنی از منابع',
     },
     sectors: {
       copper: 'مس',
       lithium: 'لیتیوم',
       gold: 'طلا',
       gemstones: 'سنگ‌های قیمتی',
       iron: 'سنگ آهن',
       rareEarth: 'عناصر نادر خاکی',
       chromite: 'کرومیت',
       marble: 'مرمر',
       coal: 'زغال سنگ',
       silver: 'نقره',
       tungsten: 'تنگستن',
       uranium: 'اورانیوم',
       salt: 'نمک',
       gypsum: 'گچ',
       talc: 'تالک',
       lead: 'سرب',
       zinc: 'روی',
       limestone: 'سنگ آهک',
       naturalGas: 'گاز طبیعی',
       niobium: 'نیوبیوم',
       tantalum: 'تانتالوم',
       tourmaline: 'تورمالین',
       aquamarine: 'آکوامارین',
     },
     contact: {
       title: 'استعلام سرمایه‌گذاری',
        subtitle: 'با تیم تماس NERPA ارتباط برقرار کنید',
       addressLabel: 'آدرس',
       emailLabel: 'ایمیل',
       phoneLabel: 'تلفن',
       addressValue: 'لندن، انگلستان | کابل، افغانستان',
       name: 'نام کامل',
       email: 'آدرس ایمیل',
       organization: 'سازمان',
       sector: 'بخش مورد علاقه',
       message: 'پیام',
      submit: 'ارسال استعلام',
      submitting: 'در حال ارسال...',
      success: 'استعلام شما با موفقیت ارسال شد. تیم ما به زودی با شما تماس خواهد گرفت.',
      error: 'خطایی در ارسال استعلام رخ داد. لطفاً دوباره تلاش کنید.',
      successTitle: 'موفقیت',
      errorTitle: 'خطا',
      submitAnother: 'ارسال استعلام دیگر',
      selectSector: 'یک بخش انتخاب کنید',
       namePlaceholder: 'نام کامل خود را وارد کنید',
       emailPlaceholder: 'آدرس ایمیل خود را وارد کنید',
       organizationPlaceholder: 'نام سازمان خود را وارد کنید',
       messagePlaceholder: 'علاقه یا استعلام سرمایه‌گذاری خود را توضیح دهید...',
     },
      footer: {
        quote: 'قدرت یک ملت نه با آنچه تحمل می‌کند، بلکه با آنچه می‌سازد سنجیده می‌شود.',
        journey: 'سفر از مقاومت تا نوزایی یک دوی سرعت نیست بلکه ماراتون است.',
        copyright: '© ۲۰۲۶ برنامه ملی اصلاحات اقتصادی افغانستان. تمام حقوق محفوظ است.',
        privacy: 'سیاست حفظ حریم خصوصی',
        terms: 'شرایط خدمات',
        contact: 'تماس',
      },
     common: {
       learnMore: 'بیشتر بدانید',
       viewDetails: 'مشاهده جزئیات',
       explore: 'کاوش کنید',
       readMore: 'بیشتر بخوانید',
       trillion: 'تریلیون',
       billion: 'میلیارد',
       million: 'میلیون',
     },
    expanded: {
      megaReserves: '30 تریلیون دلار ذخایر معدنی',
      globalLeader: 'رهبر جهانی معدن',
      economicTransformation: 'تحول اقتصادی',
      sustainableFuture: 'آینده پایدار',
      strategicPartnerships: 'مشارکت‌های استراتژیک جهانی',
      technologyInnovation: 'فناوری و نوآوری',
      communityProsperity: 'رفاه جامعه',
    },
    provinces: {
      title: 'ولایات افغانستان',
      subtitle: '34 منطقه غنی از منابع',
      explore: 'کاوش ولایات',
      mineralResources: 'منابع معدنی',
      investmentOpportunities: 'فرصت‌های سرمایه‌گذاری',
      viewDetails: 'مشاهده جزئیات ولایت',
    },
    investment: {
      framework: 'چارچوب سرمایه‌گذاری',
      opportunities: 'فرصت‌های سرمایه‌گذاری',
      partnerships: 'مدل‌های مشارکت',
      incentives: 'مشوق‌های مالی',
      process: 'فرآیند سرمایه‌گذاری',
    },
    timeline: {
      historical: 'خط زمانی تاریخی',
      roadmap: 'نقشه راه توسعه',
      milestones: 'نقاط عطف پروژه',
      vision2030: 'چشم‌انداز 2026-2050',
    },
    mineralsIndex: {
      title: 'ثروت معدنی افغانستان',
      description: 'بیش از ۱۵۰ نوع ماده معدنی در ۳۴ ولایت را کاوش کنید که یکی از مهم‌ترین ذخایر معدنی دست‌نخورده جهان با ارزش بیش از ۳۰ تریلیون دلار را نمایندگی می‌کند.',
      searchPlaceholder: 'جستجوی معادن، ذخایر یا مکان‌ها...',
    },
    investmentSectors: {
      badge: 'بیش از ۵۰ صنعت',
      title: 'کاوش بخش‌های سرمایه‌گذاری',
      searchPlaceholder: 'جستجوی بخش‌ها، صنایع یا کلمات کلیدی...',
    },
    detailPage: {
      backToHome: 'بازگشت به خانه',
      downloadReport: 'دانلود گزارش',
      byTheNumbers: 'بر اساس اعداد',
      comprehensiveOverview: 'بررسی جامع',
      keyHighlights: 'نکات کلیدی',
      section: 'بخش',
      keyMetrics: 'معیارهای کلیدی',
      strategicOverview: 'بررسی و تحلیل استراتژیک',
    },
    footerMegaMenu: {
      sustainability: 'پایداری',
      resources: 'منابع',
      about: 'درباره',
      viewAllProvinces: 'مشاهده تمام 34 ولایت →',
      environmentalProtection: 'حفاظت از محیط زیست',
      communityDevelopment: 'توسعه جامعه',
      healthSafety: 'سلامت و ایمنی',
      workforceDevelopment: 'توسعه نیروی کار',
      landRestoration: 'احیای زمین',
      waterStewardship: 'مدیریت آب',
      reports: 'گزارش‌های سالانه',
      geologicalData: 'داده‌های زمین‌شناسی',
      investmentGuides: 'راهنمای سرمایه‌گذاری',
      maps: 'نقشه‌های تعاملی',
      statistics: 'آمار',
      publications: 'انتشارات',
      researchPapers: 'مقالات تحقیقاتی',
      downloads: 'دانلودها',
      quickLinks: 'لینک‌های سریع',
      overview: 'بررسی اجمالی',
      minerals: 'معادن',
      operations: 'عملیات',
      investment: 'سرمایه‌گذاری',
      processing: 'پردازش',
      smelting: 'ذوب',
      research: 'تحقیقات',
      trade: 'تجارت',
      framework: 'چارچوب',
      opportunities: 'فرصت‌ها',
      partnerships: 'شراکت‌ها',
      process: 'فرآیند',
      environmental: 'محیط زیست',
      community: 'جامعه',
      safety: 'ایمنی',
      workforce: 'نیروی کار',
      legal: 'قانونی',
      cookies: 'کوکی‌ها',
      accessibility: 'دسترسی',
      aboutUs: 'درباره ما',
      mission: 'ماموریت',
      vision: 'چشم‌انداز',
      team: 'تیم ما',
      partners: 'شرکا',
      careers: 'فرصت‌های شغلی',
      news: 'اخبار و به‌روزرسانی‌ها',
      faq: 'سوالات متداول',
      technology: 'فناوری',
      digitalMining: 'معدن دیجیتال',
      aiAutomation: 'هوش مصنوعی و اتوماسیون',
      dataAnalytics: 'تحلیل داده',
      remoteSensing: 'سنجش از دور',
      blockchain: 'ردیابی بلاک چین',
      iot: 'اینترنت اشیا و سنسورها',
      robotics: 'رباتیک معدن',
      innovation: 'مرکز نوآوری',
      education: 'آموزش',
      miningUniversity: 'دانشگاه معدن',
      trainingPrograms: 'برنامه‌های آموزشی',
      scholarships: 'بورسیه‌ها',
      researchCenters: 'مراکز تحقیقاتی',
      onlineCourses: 'دوره‌های آنلاین',
      certifications: 'گواهینامه‌ها',
      workshops: 'کارگاه‌ها',
      studentResources: 'منابع دانشجویی',
      media: 'رسانه',
      pressReleases: 'بیانیه‌های مطبوعاتی',
      newsArticles: 'مقالات خبری',
      photoGallery: 'گالری عکس',
      videoLibrary: 'کتابخانه ویدیو',
      socialMedia: 'رسانه‌های اجتماعی',
      mediaKit: 'کیت رسانه',
      events: 'رویدادها',
      subscribe: 'عضویت',
      support: 'پشتیبانی',
      helpCenter: 'مرکز راهنمایی',
      documentation: 'مستندات',
      apiDocs: 'مستندات API',
      tutorials: 'آموزش‌ها',
      bugReport: 'گزارش باگ',
      featureRequest: 'درخواست ویژگی',
      contactSupport: 'تماس با پشتیبانی',
      becomePartner: 'شریک شوید',
      currentPartners: 'شرکای فعلی',
      partnerPrograms: 'برنامه‌های شراکت',
      jointVentures: 'مشارکت‌های مشترک',
      supplierNetwork: 'شبکه تامین‌کنندگان',
      technologyPartners: 'شرکای فناوری',
      academicPartners: 'شرکای دانشگاهی',
      ngoPartners: 'شرکای NGO',
      compliance: 'انطباق',
      regulations: 'مقررات',
      environmentalCompliance: 'انطباق محیط زیستی',
      safetyStandards: 'استانداردهای ایمنی',
      laborStandards: 'استانداردهای کار',
      audits: 'حسابرسی و گزارش‌ها',
      codeOfConduct: 'کد رفتار',
      whistleblower: 'سیاست افشاگر',
      jobOpenings: 'فرصت‌های شغلی',
      internships: 'کارآموزی',
      benefits: 'مزایا',
      culture: 'فرهنگ شرکت',
      diversity: 'تنوع و شمولیت',
      applyNow: 'اکنون درخواست دهید',
      employeePortal: 'پورتال کارکنان',
      referralProgram: 'برنامه ارجاع',
      geological: 'زمین‌شناسی',
      exploration: 'اکتشاف',
      incentives: 'مشوق‌ها',
      disclaimer: 'سلب مسئولیت',
      connect: 'ارتباط',
      email: 'ایمیل',
      phone: 'تلفن',
      offices: 'دفاتر',
    },
    statsLabels: {
      mineralReserves: 'ذخایر معدنی',
      knownDeposits: 'ذخایر شناخته شده',
      mineralTypes: 'انواع معادن',
      provinces: 'ولایات',
      metricTons: 'تن متریک',
      value: 'ارزش',
      majorDeposits: 'ذخایر عمده',
      target: 'هدف',
      globalRank: 'رتبه جهانی',
      globalShare: 'سهم جهانی',
      gemstoneRegions: 'مناطق سنگ‌های قیمتی',
      types: 'انواع',
      years: 'سال',
      annual: 'سالانه',
      ironOreReserves: 'ذخایر سنگ آهن',
      jobs: 'شغل',
      goldReserves: 'ذخایر طلا',
      goldBelts: 'کمربندهای طلا',
      artisanalMiners: 'معدنکاران سنتی',
      reeElements: 'عناصر REE',
      estimatedValue: 'ارزش تخمینی',
      underExploration: 'در حال اکتشاف',
      supplyImpact: 'تأثیر عرضه',
      provenReserves: 'ذخایر اثبات شده',
      deposits: 'ذخایر',
      primaryUse: 'استفاده اولیه',
      cubicMeters: 'متر مکعب',
      colors: 'رنگ‌ها',
      annualPotential: 'پتانسیل سالانه',
      qualityGrade: 'درجه کیفیت',
      coalReserves: 'ذخایر زغال سنگ',
      highQuality: 'کیفیت بالا',
      majorBasins: 'حوضه‌های عمده',
      strategicRole: 'نقش استراتژیک',
      yearlyPotential: 'پتانسیل سالانه',
    },
    descriptions: {
      estimatedTotalValue: 'ارزش تخمینی کل',
      acrossAllProvinces: 'در تمام ولایات',
      criticalAndStrategic: 'حیاتی و استراتژیک',
      resourceRichRegions: 'مناطق غنی از منابع',
      estimatedReserves: 'ذخایر تخمینی',
      currentMarketEstimate: 'تخمین بازار فعلی',
      activeExplorationSites: 'سایت‌های اکتشاف فعال',
      fullProductionCapacity: 'ظرفیت تولید کامل',
      largestReserves: 'بزرگترین ذخایر',
      strategicImportance: 'اهمیت استراتژیک',
      potentialContribution: 'سهم بالقوه',
      preciousSemiPrecious: 'گرانبها و نیمه گرانبها',
      miningHeritage: 'میراث معدن',
      exportPotential: 'پتانسیل صادرات',
      estimatedWorth: 'ارزش تخمینی',
      identifiedDeposits: 'ذخایر شناسایی شده',
      employmentPotential: 'پتانسیل اشتغال',
      atCurrentPrices: 'با قیمت‌های فعلی',
      majorFormations: 'تشکیلات عمده',
      currentlyActive: 'در حال حاضر فعال',
      identifiedSpecies: 'گونه‌های شناسایی شده',
      strategicResources: 'منابع استراتژیک',
      potentialDiversification: 'تنوع بالقوه',
      exportPotentialValue: 'پتانسیل صادرات',
      acrossProvinces: 'در ولایات',
      industrialApplication: 'کاربرد صنعتی',
      uniqueVarieties: 'انواع منحصر به فرد',
      exportRevenue: 'درآمد صادرات',
      internationalStandard: 'استاندارد بین‌المللی',
      metallurgicalGrade: 'درجه متالورژی',
      domesticSupply: 'عرضه داخلی',
    },
    indexPage: {
      hero: {
        title: 'معدن و کان',
        subtitle: 'داستان حاکمیت منابع',
        readMore: 'بیشتر بخوانید',
      },
      overview: {
        title: 'حاکمیت منابع',
        subtitle: 'بنیاد',
        description: 'افغانستان یکی از مهمترین ذخایر معدنی توسعه نیافته جهان را دارد که ارزش آن بیش از 30 تریلیون دلار است. این ثروت فوق‌العاده منابع طبیعی - از لیتیوم و مس تا عناصر نادر خاکی و سنگ‌های قیمتی - نمایانگر فرصتی بی‌سابقه برای رفاه ملی، توسعه منطقه‌ای و تحول کامل اقتصادی آسیای مرکزی و فراتر از آن است.',
        statsTitle: 'بررسی ثروت معدنی',
        statsSubtitle: 'بر اساس اعداد',
      },
      geological: {
        title: 'چارچوب زمین‌شناسی',
        subtitle: 'میراث زمان عمیق',
        description: 'ثروت معدنی فوق‌العاده افغانستان از موقعیت منحصر به فرد آن در همگرایی سه صفحه تکتونیکی بزرگ ناشی می‌شود. طی صدها میلیون سال، این نیروهای زمین‌شناسی مناطق معدنی، کمربندهای دگرگونی و مجتمع‌های نفوذی را ایجاد کردند که اکنون میزبان ذخایر درجه جهانی هستند.',
        quote: 'ثروت معدنی زیر خاک افغان نه تنها فرصت اقتصادی، بلکه بنیادی برای یک ملت مرفه و خودکفا است.',
      },
      nationalStrategy: {
        title: 'استراتژی ملی',
        subtitle: 'چشم‌انداز استراتژیک',
        description: 'یک استراتژی جامع معدنی ملی توسعه پایدار را هدایت می‌کند و رشد اقتصادی را با مدیریت محیط زیست و منافع جامعه متعادل می‌کند. این چارچوب اطمینان می‌دهد که ثروت معدنی به همه افغان‌ها خدمت می‌کند و در عین حال سرمایه‌گذاری بین‌المللی مسئولانه را جذب می‌کند.',
      },
      economicImpact: {
        title: 'تحول اقتصادی',
        subtitle: 'رفاه ملی',
        description: 'توسعه بخش معدنی افغانستان اقتصاد ملی را متحول خواهد کرد و صدها هزار شغل ایجاد می‌کند، میلیاردها درآمد صادراتی تولید می‌کند و بنیادی برای توسعه صنعتی و استقلال اقتصادی می‌سازد.',
      },
      copper: {
        title: 'برتری مس',
        subtitle: 'فلز استراتژیک',
        description: 'ذخایر مس افغانستان در میان بزرگترین ذخایر توسعه نیافته جهان قرار دارد که کل ذخایر تخمینی آن بیش از 600 میلیون تن متریک با ارزش $8T است. ذخیره مس عینک به تنهایی حاوی حدود 125 میلیون تن مس است و با بیش از 50 ذخیره عمده در چندین ولایت، بنیادی بی‌نظیر برای توسعه صنعتی و تحول اقتصادی ایجاد می‌کند.',
        statsTitle: 'منابع مس',
        statsSubtitle: 'تحلیل ذخایر',
        detailTitle: 'توسعه مس',
        detailSubtitle: 'پروژه‌ها و زیرساخت',
        detailDescription: 'توسعه جامع بخش مس از اکتشاف تا پردازش، با تمرکز بر استخراج پایدار و افزودن ارزش.',
        processingTitle: 'پردازش مس',
        processingSubtitle: 'افزودن ارزش',
        processingDescription: 'تسهیلات مدرن پردازش مس سنگ معدن خام را به محصولات مس تصفیه شده تبدیل می‌کند و ارزش را به صورت داخلی جذب می‌کند و اشتغال ماهر در عملیات ذوب، تصفیه و تولید ایجاد می‌کند.',
      },
      lithium: {
        title: 'آینده لیتیوم',
        subtitle: 'انتقال انرژی',
        description: 'با انتقال جهان به وسایل نقلیه برقی و ذخیره انرژی تجدیدپذیر، ذخایر عظیم لیتیوم افغانستان - که حدود 215 میلیون تن متریک با ارزش 8 تریلیون دلار تخمین زده می‌شود - این کشور را به عنوان رهبر بی‌چون و چرای جهانی در این ماده معدنی حیاتی قرار می‌دهد. با 45٪ از ذخایر شناخته شده لیتیوم جهان، افغانستان آینده انقلاب انرژی پاک را تعریف خواهد کرد.',
        statsTitle: 'پتانسیل لیتیوم',
        statsSubtitle: 'اهمیت جهانی',
        detailTitle: 'استراتژی لیتیوم',
        detailSubtitle: 'چارچوب توسعه',
        detailDescription: 'توسعه استراتژیک منابع لیتیوم برای پاسخگویی به تقاضای جهانی باتری‌های وسایل نقلیه برقی و سیستم‌های ذخیره انرژی.',
        geologyTitle: 'زمین‌شناسی پگماتیت',
        geologySubtitle: 'تشکیلات لیتیوم',
        geologyDescription: 'پگماتیت‌های حاوی لیتیوم افغانستان که از طریق تبلور آهسته ماگماهای گرانیتی تشکیل شده‌اند، حاوی غلظت‌های استثنایی اسپودومن و لپیدولیت هستند - مواد معدنی اولیه سنگ معدن لیتیوم که انتقال انرژی پاک جهانی را تأمین می‌کنند.',
        quote: 'ذخایر لیتیوم افغانستان می‌تواند انتقال جهانی به انرژی پاک را تأمین کند و این کشور را به عنوان شریک ضروری در مبارزه با تغییرات آب و هوایی قرار دهد.',
      },
      gold: {
        title: 'میراث طلا',
        subtitle: 'فلزات گرانبها',
        description: 'ذخایر طلای افغانستان با 27,000 تن متریک که در 45 کمربند طلای عمده از بدخشان تا تخار پراکنده شده است، هم سنت باستانی صنعتگران و هم فرصت صنعتی بی‌سابقه را نشان می‌دهد. با ذخایری به ارزش 4.4 تریلیون دلار که از 350,000 معدنکار صنعتگر پشتیبانی می‌کند، افغانستان آماده است تا به نیروی غالب در بازارهای جهانی فلزات گرانبها تبدیل شود.',
        statsTitle: 'منابع طلا',
        statsSubtitle: 'ثروت باستانی',
        detailTitle: 'توسعه بخش طلا',
        detailSubtitle: 'استخراج و پردازش',
        detailDescription: 'نوسازی عملیات استخراج طلا با تمرکز بر ادغام معدنکاران صنعتگر، رعایت محیط زیست و توسعه زنجیره ارزش.',
        depositsTitle: 'ذخایر اولیه طلا',
        depositsSubtitle: 'استخراج سنگ سخت',
        depositsDescription: 'ذخایر اولیه طلای افغانستان در رگه‌های کوارتز مرتبط با رویدادهای کوه‌زایی رخ می‌دهد که حاوی هم طلای قابل مشاهده و هم کانی‌سازی میزبان سولفید است که نیاز به تکنیک‌های پردازش مدرن دارد.',
      },
      gemstones: {
        title: 'گنجینه‌های زمین',
        subtitle: 'سنگ‌های قیمتی',
        description: 'از زمردهای افسانه‌ای پنجشیر تا معادن باستانی لاجورد بدخشان، میراث سنگ‌های قیمتی افغانستان شش هزار سال را در بر می‌گیرد. این سنگ‌های قیمتی که در امتداد جاده ابریشم معامله می‌شدند، همچنان قیمت‌های پریمیوم در بازارهای جهانی را به دست می‌آورند.',
        statsTitle: 'میراث سنگ‌های قیمتی',
        statsSubtitle: 'گنجینه‌های باستانی',
        detailTitle: 'برتری سنگ‌های قیمتی',
        detailSubtitle: 'استخراج و پردازش',
        detailDescription: 'توسعه قابلیت‌های پایدار استخراج و پردازش سنگ‌های قیمتی با گواهینامه بین‌المللی و تضمین کیفیت.',
      },
      detailItems: {
        copper: [
          { title: 'ذخیره مس عینک', description: 'یکی از بزرگترین ذخایر مس توسعه نیافته جهان واقع در ولایت لوگر، با حدود 125m تن مس.' },
          { title: 'ذخایر حاجیگک', description: 'مجتمع عظیم مس-آهن در ولایت بامیان حاوی ذخایر مس و سنگ آهن به ارزش بیش از $2T.' },
          { title: 'ذخیره بلخاب', description: 'کانی‌سازی مهم مس در شمال افغانستان که اکتشافات نشان می‌دهد غلظت‌های مس با درجه بالا دارد.' },
          { title: 'زیرساخت پردازش', description: 'توسعه تسهیلات مدرن پردازش مس شامل کارخانه‌های ذوب و پالایش برای افزودن ارزش داخلی.' },
          { title: 'استانداردهای محیط زیست', description: 'اجرای استانداردهای بین‌المللی محیط زیست برای استخراج و پردازش پایدار مس.' },
          { title: 'استراتژی صادرات', description: 'شراکت‌های استراتژیک با بازارهای جهانی مس و توسعه کریدورهای صادراتی کارآمد.' },
        ],
        lithium: [
          { title: 'ذخایر غزنی', description: 'تشکیلات عمده حاوی لیتیوم پگماتیت کشف شده در ولایت غزنی با سطوح خلوص استثنایی.' },
          { title: 'منطقه نورستان', description: 'کانی‌سازی گسترده لیتیوم در سراسر ولایت کوهستانی نورستان، یکی از بزرگترین ذخایر در جهان.' },
          { title: 'لیتیوم درجه باتری', description: 'توسعه قابلیت‌های پردازش برای تولید کربنات لیتیوم درجه باتری برای بازارهای وسایل نقلیه برقی.' },
          { title: 'شراکت‌های استراتژیک', description: 'مذاکرات با شرکت‌های پیشرو فناوری برای استخراج و پردازش پایدار لیتیوم.' },
          { title: 'تسهیلات تحقیقاتی', description: 'ایجاد مراکز تحقیقاتی لیتیوم برای توسعه فناوری‌های نوآورانه استخراج.' },
          { title: 'زنجیره تأمین جهانی', description: 'ادغام در زنجیره‌های تأمین جهانی لیتیوم برای بخش‌های الکترونیک و انرژی تجدیدپذیر.' },
        ],
        gold: [
          { title: 'کمربند طلای بدخشان', description: 'کانی‌سازی گسترده طلا در امتداد کمربند زمین‌شناسی بدخشان با چندین ذخیره با درجه بالا.' },
          { title: 'ذخایر تخار', description: 'ذخایر مهم طلای آبرفتی و سنگ سخت در ولایت تخار با استخراج فعال صنعتگران.' },
          { title: 'استخراج مدرن', description: 'اجرای تکنیک‌های مدرن استخراج طلا برای بهبود نرخ بازیابی و کاهش تأثیرات محیطی.' },
          { title: 'ظرفیت پالایش', description: 'توسعه تسهیلات پالایش طلا برای تولید شمش و طلای استاندارد بین‌المللی.' },
          { title: 'ادغام صنعتگران', description: 'برنامه‌هایی برای ادغام معدنکاران صنعتگر در اقتصاد رسمی با آموزش و پشتیبانی تجهیزات.' },
          { title: 'امنیت و اطمینان', description: 'اجرای سیستم‌های گواهینامه طلای بدون درگیری و ردیابی.' },
        ],
        gemstones: [
          { title: 'زمردهای پنجشیر', description: 'معادن زمرد مشهور جهان در دره پنجشیر که سنگ‌های قیمتی با کیفیت استثنایی تولید می‌کنند که توسط کلکسیونرهای جهانی جستجو می‌شوند.' },
          { title: 'لاجورد بدخشان', description: 'بهترین لاجورد جهان از معادن باستانی بدخشان، که برای هزاره‌ها در امتداد جاده ابریشم معامله می‌شد.' },
          { title: 'یاقوت و یاقوت کبود', description: 'ذخایر با کیفیت کرندوم که یاقوت و یاقوت کبود را در چندین ولایت در سراسر کشور تولید می‌کنند.' },
          { title: 'انواع تورمالین', description: 'ذخایر متنوع تورمالین شامل انواع نادر هندوانه و ایندیگولیت که توسط علاقه‌مندان به سنگ‌های قیمتی ارزشمند هستند.' },
          { title: 'پردازش سنگ‌های قیمتی', description: 'توسعه تسهیلات برش و صیقل سنگ‌های قیمتی برای افزودن ارزش قبل از صادرات.' },
          { title: 'سیستم‌های گواهینامه', description: 'اجرای گواهینامه سنگ‌شناسی و ردیابی منشأ برای سنگ‌های قیمتی افغان.' },
        ],
        iron: [
          { title: 'آهن حاجیگک', description: 'یکی از بزرگترین ذخایر سنگ آهن آسیا در مرکز افغانستان با ذخایر بیش از 22 میلیارد تن.' },
          { title: 'تولید فولاد', description: 'طرح‌های تسهیلات تولید یکپارچه فولاد برای پاسخگویی به تقاضای ساخت و ساز داخلی.' },
          { title: 'فولاد زیرساخت', description: 'اهمیت استراتژیک برای توسعه زیرساخت ملی شامل پل‌ها و ساختمان‌ها.' },
          { title: 'پتانسیل صادرات', description: 'توسعه قابلیت‌های صادرات سنگ آهن به بازارهای منطقه‌ای در جنوب و آسیای مرکزی.' },
          { title: 'کیفیت مگنتیت', description: 'ذخایر مگنتیت با درجه بالا مناسب برای فرآیندهای ساخت آهن با کاهش مستقیم.' },
          { title: 'ایجاد اشتغال', description: 'پتانسیل ایجاد ده‌ها هزار شغل مستقیم و غیرمستقیم در استخراج و پردازش.' },
        ],
        rareEarth: [
          { title: 'ذخایر هلمند', description: 'غلظت‌های مهم عناصر نادر خاکی کشف شده در ولایت هلمند با پروفایل‌های عنصری متنوع.' },
          { title: 'معدن‌های فناوری', description: 'معدن‌های حیاتی برای الکترونیک، انرژی تجدیدپذیر و کاربردهای دفاعی با اهمیت استراتژیک جهانی.' },
          { title: 'فناوری پردازش', description: 'توسعه فناوری‌های پردازش و جداسازی مسئولانه محیط زیست عناصر نادر خاکی.' },
          { title: 'نئودیمیم و پراسئودیمیم', description: 'عناصر کلیدی برای آهنرباهای دائمی مورد استفاده در وسایل نقلیه برقی و توربین‌های بادی.' },
          { title: 'امنیت عرضه', description: 'پتانسیل کاهش وابستگی جهانی به عرضه عناصر نادر خاکی تک منبع.' },
          { title: 'همکاری تحقیقاتی', description: 'شراکت‌های بین‌المللی برای تحقیقات عناصر نادر خاکی و روش‌های استخراج پایدار.' },
        ],
        industrial: [
          { title: 'مرمر و گرانیت', description: 'ذخایر مرمر درجه جهانی در رنگ‌ها و الگوهای متعدد، برای کاربردهای معماری در سراسر جهان صادر می‌شود.' },
          { title: 'تالک و سنگ صابون', description: 'ذخایر تالک با خلوص بالا مورد استفاده در لوازم آرایشی، دارویی و کاربردهای صنعتی.' },
          { title: 'ذخایر کرومیت', description: 'ذخایر مهم کرومیت ضروری برای تولید فولاد ضد زنگ و صنایع شیمیایی.' },
          { title: 'تولید باریت', description: 'باریت با کیفیت بالا برای کاربردهای حفاری نفت و تولید مواد شیمیایی صنعتی.' },
          { title: 'ذخایر نمک', description: 'ذخایر گسترده نمک سنگ و تبخیری برای صنایع فرآوری مواد غذایی و شیمیایی.' },
          { title: 'مواد سیمان', description: 'ذخایر سنگ آهک و خاک رس که ظرفیت تولید سیمان داخلی را پشتیبانی می‌کند.' },
        ],
        processing: [
          { title: 'تسهیلات ذوب', description: 'عملیات مدرن ذوب برای مس، آهن و سایر فلزات با سیستم‌های کنترل آلودگی.' },
          { title: 'ظرفیت پالایش', description: 'توسعه زیرساخت پالایش مواد معدنی برای پردازش با ارزش افزوده قبل از صادرات.' },
          { title: 'کنترل کیفیت', description: 'اجرای استانداردهای بین‌المللی کیفیت و آزمایشگاه‌های تست.' },
          { title: 'خردایش و غربالگری', description: 'تجهیزات پیشرفته پردازش مواد معدنی برای آماده‌سازی و تغلیظ کارآمد سنگ معدن.' },
          { title: 'مدیریت باطله', description: 'تسهیلات ذخیره و تصفیه باطله مسئولانه محیط زیست.' },
          { title: 'سیستم‌های انرژی', description: 'ادغام انرژی تجدیدپذیر برای عملیات پایدار استخراج و پردازش.' },
        ],
        research: [
          { title: 'بررسی زمین‌شناسی', description: 'نقشه‌برداری جامع زمین‌شناسی و ارزیابی منابع در تمام ولایات.' },
          { title: 'حفاری هسته', description: 'برنامه‌های گسترده حفاری اکتشافی برای کمی‌سازی منابع و ذخایر معدنی.' },
          { title: 'تجزیه و تحلیل آزمایشگاهی', description: 'آزمایشگاه‌های تحلیلی مدرن برای مشخص‌سازی و تعیین درجه مواد معدنی.' },
          { title: 'مدیریت داده', description: 'پایگاه‌های داده دیجیتال برای داده‌های زمین‌شناسی، نتایج اکتشاف و برآوردهای منابع.' },
          { title: 'شراکت‌های دانشگاهی', description: 'همکاری با دانشگاه‌های بین‌المللی برای تحقیقات زمین‌شناسی و آموزش.' },
          { title: 'انتقال فناوری', description: 'برنامه‌هایی برای ایجاد ظرفیت فنی محلی در فناوری‌های اکتشاف و استخراج.' },
        ],
        trade: [
          { title: 'کریدورهای صادرات', description: 'توسعه مسیرهای صادراتی کارآمد از طریق پاکستان، ایران و همسایگان آسیای مرکزی.' },
          { title: 'موافقتنامه‌های تجاری', description: 'موافقتنامه‌های تجاری دوجانبه و چندجانبه برای تسهیل صادرات مواد معدنی.' },
          { title: 'مکانیسم‌های قیمت‌گذاری', description: 'قیمت‌گذاری شفاف بر اساس بازارهای کالای بین‌المللی و استانداردهای کیفیت.' },
          { title: 'زیرساخت لجستیک', description: 'سرمایه‌گذاری در جاده‌ها، راه‌آهن و تسهیلات مرزی برای حمل و نقل مواد معدنی.' },
          { title: 'تنوع بازار', description: 'استراتژی دسترسی به بازارهای متنوع در آسیا، اروپا و خاورمیانه.' },
          { title: 'توسعه زنجیره ارزش', description: 'تمرکز بر افزایش ارزش افزوده قبل از صادرات از طریق پردازش.' },
        ],
        sustainability: [
          { title: 'حفاظت از محیط زیست', description: 'مقررات سختگیرانه محیط زیست و نظارت بر عملیات استخراج.' },
          { title: 'توسعه جامعه', description: 'اشتراک‌گذاری درآمد و برنامه‌های توسعه جامعه در مناطق استخراج.' },
          { title: 'مدیریت آب', description: 'استفاده و تصفیه پایدار آب در عملیات استخراج و پردازش.' },
          { title: 'طرح‌های احیا', description: 'نیازهای بسته شدن معدن و احیای زمین برای تمام عملیات.' },
          { title: 'سلامت و ایمنی', description: 'استانداردهای بین‌المللی برای سلامت و ایمنی کارگران در عملیات استخراج.' },
          { title: 'ملاحظات آب و هوا', description: 'ادغام ملاحظات تغییرات آب و هوایی در برنامه‌ریزی استخراج.' },
        ],
      },
      iron: {
        title: 'بنیاد فولاد',
        subtitle: 'پایه صنعتی',
        description: 'ذخیره عظیم سنگ آهن حاجیگک و 100 سایت عمده دیگر نمایانگر بنیاد آینده صنعتی افغانستان است. با ذخایر بیش از 22 میلیارد تن به ارزش 3.5 تریلیون دلار، افغانستان سنگ آهن کافی برای تأمین تولید فولاد جهانی برای دهه‌ها دارد و پتانسیل ایجاد 500,000 شغل مستقیم را دارد.',
        statsTitle: 'منابع آهن',
        statsSubtitle: 'پتانسیل صنعتی',
        detailTitle: 'توسعه آهن و فولاد',
        detailSubtitle: 'زنجیره ارزش',
        detailDescription: 'توسعه یکپارچه استخراج سنگ آهن و تولید فولاد برای پشتیبانی از زیرساخت ملی و ایجاد اشتغال.',
        processingTitle: 'تولید فولاد',
        processingSubtitle: 'ظرفیت صنعتی',
        processingDescription: 'توسعه تسهیلات تولید یکپارچه فولاد بخش ساخت و ساز افغانستان را متحول خواهد کرد و وابستگی به واردات را کاهش می‌دهد و هزاران شغل صنعتی در پردازش و تولید ایجاد می‌کند.',
      },
      rareEarth: {
        title: 'عناصر استراتژیک',
        subtitle: 'معدن‌های نادر خاکی',
        description: 'عناصر نادر خاکی حیاتی ضروری برای فناوری مدرن - از گوشی‌های هوشمند تا وسایل نقلیه برقی تا توربین‌های بادی - در 40 ذخیره عمده در افغانستان کشف شده است، با ارزش کل تخمینی 5 تریلیون دلار. این افغانستان را به عنوان بازیگر کلیدی در زنجیره‌های تأمین فناوری جهانی قرار می‌دهد و قادر به تحول کامل منظر بازار نادر خاکی است.',
        statsTitle: 'پتانسیل نادر خاکی',
        statsSubtitle: 'فلزات فناوری',
        detailTitle: 'توسعه نادر خاکی',
        detailSubtitle: 'معدن‌های فناوری',
        detailDescription: 'توسعه استراتژیک منابع نادر خاکی برای پشتیبانی از صنایع فناوری جهانی و انتقال انرژی تجدیدپذیر.',
      },
      lapis: {
        title: 'میراث آبی',
        subtitle: 'لاجورد',
        description: 'معادن باستانی لاجورد بدخشان بیش از 6000 سال است که جهان را با این سنگ آبی ارزشمند تأمین می‌کند. استفاده شده در همه چیز از ماسک مرگ توتانخامون تا شاهکارهای رنسانس، لاجورد افغان همچنان بهترین جهان است.',
      },
      emerald: {
        title: 'آتش سبز',
        subtitle: 'زمردهای پنجشیر',
        description: 'زمردهای دره پنجشیر در میان گرانبهاترین سنگ‌های قیمتی جهان هستند که اشباع رنگ و وضوح استثنایی را نشان می‌دهند. این سنگ‌ها که در شیست‌های میکای دگرگونی تشکیل شده‌اند، قیمت‌های پریمیوم در بازارهای بین‌المللی را به دست می‌آورند.',
      },
      ruby: {
        title: 'گنجینه‌های کرندوم',
        subtitle: 'یاقوت و یاقوت کبود',
        description: 'افغانستان یاقوت و یاقوت کبود استثنایی از ذخایر میزبان مرمر در چندین ولایت تولید می‌کند. یاقوت‌های خون کبوتری جگدالک و یاقوت‌های کبود آبی از هندوکش در میان بهترین نمونه‌های کرندوم جهان قرار دارند.',
      },
      tourmaline: {
        title: 'کریستال‌های رنگین‌کمان',
        subtitle: 'انواع تورمالین',
        description: 'افغانستان برخی از چشمگیرترین نمونه‌های تورمالین جهان را تولید می‌کند، از جمله انواع نادر هندوانه و ایندیگولیت که توسط کلکسیونرها و جواهرسازان در سراسر جهان جستجو می‌شوند.',
      },
      aquamarine: {
        title: 'کریستال‌های آبی دریا',
        subtitle: 'گنجینه‌های آکوامارین',
        description: 'زمین‌های پگماتیت ولایت‌های کنر و نورستان کریستال‌های آکوامارین استثنایی تولید می‌کنند که به خاطر رنگ آبی خالص و شفافیت قابل توجه که با نمونه‌های هر مکان در جهان رقابت می‌کند، ارزشمند هستند.',
      },
      chromite: {
        title: 'بنیاد فلزی',
        subtitle: 'ذخایر کرومیت',
        description: 'ضروری برای تولید فولاد ضد زنگ و مواد شیمیایی صنعتی، ذخایر کرومیت افغانستان نمایانگر پتانسیل صادراتی قابل توجه و فرصت‌های توسعه صنعتی است.',
        statsTitle: 'منابع کرومیت',
        statsSubtitle: 'فلز صنعتی',
      },
      marble: {
        title: 'سنگ پادشاهان',
        subtitle: 'مرمر و گرانیت',
        description: 'مرمر افغان، مشهور به کیفیت استثنایی و رنگ‌های متنوع، شاهکارهای معماری را در سراسر جهان می‌آراید. معادن مرمر ملت سنگی تولید می‌کنند که با بهترین انواع ایتالیایی و ترکی رقابت می‌کند.',
        statsTitle: 'منابع مرمر',
        statsSubtitle: 'سنگ پریمیوم',
      },
      coal: {
        title: 'منابع انرژی',
        subtitle: 'ذخایر زغال سنگ',
        description: 'ذخایر قابل توجه زغال سنگ در چندین ولایت امنیت انرژی را فراهم می‌کند و توسعه صنعتی را پشتیبانی می‌کند، با تمرکز بر فناوری‌های زغال سنگ پاک و شیوه‌های استخراج مسئولانه.',
        statsTitle: 'منابع زغال سنگ',
        statsSubtitle: 'امنیت انرژی',
      },
      industrial: {
        title: 'بنیاد صنعتی',
        subtitle: 'ساخت و ساز و تولید',
        description: 'فراتر از فلزات گرانبها و معدن‌های استراتژیک، افغانستان ذخایر عظیم معدن‌های صنعتی - مرمر، کرومیت، تالک و مواد سیمان - دارد که برای صنایع ساخت و ساز و تولید ضروری هستند.',
        detailTitle: 'معدن‌های صنعتی',
        detailSubtitle: 'بلوک‌های ساختمانی',
        detailDescription: 'توسعه منابع معدنی صنعتی برای پشتیبانی از بخش‌های ساخت و ساز و تولید داخلی.',
      },
      processing: {
        title: 'افزودن ارزش',
        subtitle: 'پردازش و پالایش',
        description: 'زیرساخت مدرن پردازش مواد معدنی سنگ معدن خام را به محصولات تصفیه شده تبدیل می‌کند و ارزش را به صورت داخلی جذب می‌کند و فرصت‌های اشتغال ماهر در سراسر زنجیره ارزش استخراج ایجاد می‌کند.',
        detailTitle: 'زیرساخت پردازش',
        detailSubtitle: 'ظرفیت صنعتی',
        detailDescription: 'توسعه تسهیلات مدرن پردازش برای افزودن ارزش و رقابت صادراتی.',
      },
      research: {
        title: 'بنیاد دانش',
        subtitle: 'تحقیقات و اکتشاف',
        description: 'ایجاد ظرفیت علمی برای تحقیقات زمین‌شناسی، ارزیابی منابع و توسعه فناوری استخراج.',
        detailTitle: 'تحقیقات و توسعه',
        detailSubtitle: 'برتری علمی',
        detailDescription: 'ایجاد ظرفیت علمی برای تحقیقات زمین‌شناسی، ارزیابی منابع و توسعه فناوری استخراج.',
      },
      trade: {
        title: 'بازارهای جهانی',
        subtitle: 'تجارت و صادرات',
        description: 'ایجاد زیرساخت صادرات و روابط تجاری برای بهینه‌سازی درآمدهای معدنی.',
        detailTitle: 'توسعه تجارت',
        detailSubtitle: 'دسترسی به بازار',
        detailDescription: 'ایجاد زیرساخت صادرات و روابط تجاری برای بهینه‌سازی درآمدهای معدنی.',
      },
      sustainability: {
        title: 'استخراج مسئولانه',
        subtitle: 'پایداری',
        description: 'ادغام حفاظت از محیط زیست، منافع جامعه و حکمرانی مسئولانه در تمام عملیات استخراج.',
        detailTitle: 'توسعه پایدار',
        detailSubtitle: 'محیط زیست و اجتماعی',
        detailDescription: 'ادغام حفاظت از محیط زیست، منافع جامعه و حکمرانی مسئولانه در تمام عملیات استخراج.',
      },
      timeline: {
        sectionTitle: 'نقشه راه توسعه',
        sectionSubtitle: 'خط زمانی استراتژیک',
        year2024: { title: 'راه‌اندازی استراتژی ملی معدن', description: 'استراتژی جامع ملی برای توسعه پایدار معدن و بهینه‌سازی صادرات.' },
        year2025: { title: 'تکمیل بررسی زمین‌شناسی', description: 'تکمیل بررسی‌های تفصیلی زمین‌شناسی در تمام 34 ولایت با کمی‌سازی منابع.' },
        year2026: { title: 'زیرساخت پردازش', description: 'افتتاح اولین تسهیلات مدرن پردازش مس و لیتیوم.' },
        year2027: { title: 'توسعه راه‌آهن', description: 'تکمیل راه‌آهن معدنی که ذخایر عمده را به پایانه‌های صادراتی متصل می‌کند.' },
        year2028: { title: 'توسعه کریدور صادرات', description: 'تکمیل زیرساخت‌های اصلی حمل و نقل که مناطق معدنی را به نقاط صادراتی متصل می‌کند.' },
        year2029: { title: 'عملیات ذوب', description: 'راه‌اندازی اولین تسهیلات یکپارچه ذوب برای پردازش مس و آهن.' },
        year2030: { title: 'مقیاس‌بندی تولید', description: 'دسترسی به اهداف مهم تولید معدنی با رعایت کامل محیط زیست.' },
        year2032: { title: 'تولید لیتیوم', description: 'شروع تولید تجاری لیتیوم برای بازارهای جهانی باتری.' },
        year2035: { title: 'بلوغ زنجیره ارزش', description: 'ایجاد زنجیره‌های ارزش معدنی جامع از استخراج تا محصولات نهایی.' },
      },
      mesAynakLegacy: {
        title: 'میراث مس عینک',
        subtitle: 'میراث باستان‌شناسی',
        description: 'ذخیره مس مس عینک بر روی یکی از مهمترین سایت‌های باستان‌شناسی بودایی جهان قرار دارد. برنامه‌های توسعه به دقت بین استخراج معادن و حفظ صومعه‌ها، استوپاها و آثار 2000 ساله تعادل برقرار می‌کند.',
      },
      copperOpenPit: {
        title: 'عملیات عظیم مس',
        subtitle: 'استخراج معدن روباز',
        description: 'عملیات عظیم مس معدن روباز از روش‌های استخراج پلکانی استفاده می‌کند و سالانه میلیون‌ها تن سنگ معدن را با ناوگان کامیون‌های 400 تنی که به صورت شبانه‌روزی در مناظر کوهستانی دراماتیک افغانستان کار می‌کنند، جابجا می‌کند.',
      },
      moltenCopper: {
        title: 'مس مذاب',
        subtitle: 'عملیات ذوب',
        description: 'کوره‌های مدرن ذوب مس سنگ معدن متمرکز را به کاتدهای مس خالص 99.9٪ تبدیل می‌کنند. مس مذاب در دمای 1200 درجه سانتی‌گراد از فرآیندهای کنترل شده دقیق عبور می‌کند تا فلز تصفیه شده آماده صادرات ایجاد کند.',
      },
      spodumeneCrystals: {
        title: 'بلورهای اسپودومن',
        subtitle: 'منبع فلز باتری',
        description: 'بلورهای اسپودومن حاوی لیتیوم از پگماتیت‌های افغان حاوی تا 8٪ اکسید لیتیوم هستند - از بالاترین درجه‌ها در سطح جهانی. این بلورهای منشوری پایه زنجیره تأمین باتری انقلاب وسایل نقلیه برقی را تشکیل می‌دهند.',
      },
      deepGoldMining: {
        title: 'استخراج عمیق طلا',
        subtitle: 'عملیات زیرزمینی',
        description: 'عملیات مدرن استخراج طلای زیرزمینی به بدنه‌های سنگ معدن با درجه بالا در اعماق تشکیلات کوهستانی دسترسی پیدا می‌کند. تونل‌های روشن شده با LED رگه‌های کوارتز حاوی طلا را نشان می‌دهند در حالی که تیم‌های استخراج با تجهیزات دقیق کار می‌کنند.',
      },
      goldRefining: {
        title: 'پالایش طلا',
        subtitle: 'پردازش فلزات گرانبها',
        description: 'عملیات پالایش طلا سنگ معدن خام را به شمش درجه سرمایه‌گذاری تبدیل می‌کند. طلای مذاب در قالب‌های دقیق ریخته می‌شود و شمش‌های خالص 99.99٪ ایجاد می‌کند که برای بازارهای بین‌المللی و ذخایر بانک مرکزی تعیین شده است.',
      },
      panjshirEmeraldCrystals: {
        title: 'بلورهای زمرد پنجشیر',
        subtitle: 'نمونه‌های درجه جهانی',
        description: 'بلورهای زمرد خام از دره پنجشیر اشباع رنگ و وضوح استثنایی را نشان می‌دهند. این سنگ‌های قیمتی شش ضلعی که در ماتریس اصلی میکا شیست جاسازی شده‌اند، قیمت‌های پریمیوم در بازارهای جواهرشناسی بین‌المللی را به دست می‌آورند.',
      },
      hajigakIronMountain: {
        title: 'کوه آهن حاجیگک',
        subtitle: 'بزرگترین ذخیره آسیا',
        description: 'ذخیره عظیم سنگ آهن حاجیگک در ولایت بامیان حاوی حدود 2.2 میلیارد تن سنگ آهن با درجه بالا است. این کوه قهوه‌ای مایل به قرمز نمایانگر بنیاد آینده فولاد صنعتی افغانستان است.',
      },
      lapisAncientMines: {
        title: '6000 سال آبی',
        subtitle: 'معادن باستانی لاجورد',
        description: 'معادن باستانی لاجورد بدخشان به طور مداوم به مدت شش هزاره کار کرده‌اند. چهره‌های سنگی خط‌دار آبی منبع رنگدانه اولترامارین را نشان می‌دهند که شاهکارهای رنسانس و اتاق‌های دفن سلطنتی مصری را رنگ کرده است.',
      },
      jegdalekRubies: {
        title: 'یاقوت‌های جگدالک',
        subtitle: 'برتری خون کبوتری',
        description: 'ذخایر یاقوت جگدالک برخی از بهترین یاقوت‌های خون کبوتری جهان را تولید می‌کند - سنگ‌های قیمتی قرمز عمیق با وضوح و فلورسانس استثنایی که از نظر کیفیت با سنگ‌های برمه رقابت می‌کند و قیمت‌های پریمیوم در مزایده‌ها را به دست می‌آورد.',
      },
      hinduKushSapphires: {
        title: 'یاقوت کبودهای هندوکش',
        subtitle: 'گنجینه‌های آبی گل گندم',
        description: 'رشته کوه هندوکش یاقوت کبودهای آبی گل گندم استثنایی از ذخایر میزبان مرمر تولید می‌کند. این سنگ‌های قیمتی کرندم رنگ آبی مخملی مورد نظر را که توسط کلکسیونرها و خانه‌های جواهرات در سراسر جهان جستجو می‌شود، نشان می‌دهند.',
      },
      nuristanTourmaline: {
        title: 'تورمالین نورستان',
        subtitle: 'بلورهای رنگین‌کمان',
        description: 'ولایت نورستان نمونه‌های چشمگیر تورمالین از جمله انواع نادر هندوانه با مراکز صورتی و لبه‌های سبز، همراه با بلورهای ایندیگولیت آبی و روبلیت صورتی مورد نظر را تولید می‌کند.',
      },
      kunarAquamarine: {
        title: 'آکوامارین کنر',
        subtitle: 'بیریل آبی دریا',
        description: 'زمین‌های پگماتیت ولایت کنر بلورهای آکوامارین استثنایی تولید می‌کنند - سنگ‌های قیمتی شش ضلعی آبی کم رنگ دریا روی ماتریس فلدسپات سفید که از نظر وضوح و شدت رنگ با نمونه‌های هر مکان در جهان رقابت می‌کند.',
      },
      strategicREEConcentrate: {
        title: 'متمرکز استراتژیک REE',
        subtitle: 'فلزات فناوری',
        description: 'متمرکزهای عناصر نادر خاکی از ذخایر افغان حاوی مواد حیاتی ضروری برای گوشی‌های هوشمند، توربین‌های بادی و وسایل نقلیه برقی هستند. تجزیه و تحلیل آزمایشگاهی 17 گونه متمایز REE را با سطوح خلوص استثنایی نشان می‌دهد.',
      },
      chromiteExportOperations: {
        title: 'عملیات صادرات کرومیت',
        subtitle: 'تجارت فلز صنعتی',
        description: 'ذخایر عظیم سنگ معدن کرومیت منتظر صادرات به تولیدکنندگان فولاد ضد زنگ بین‌المللی هستند. تجهیزات بارگیری صنعتی روزانه هزاران تن را پردازش می‌کند و تقاضای جهانی برای این ماده متالورژیکی ضروری را تغذیه می‌کند.',
      },
      premiumWhiteMarble: {
        title: 'مرمر سفید پریمیوم',
        subtitle: 'سنگ معماری',
        description: 'معادن مرمر سفید بکر افغانستان سنگی تولید می‌کنند که از نظر کیفیت با کارارای ایتالیا رقابت می‌کند. بلوک‌های عظیم با رگه‌های خاکستری ظریف برای پروژه‌های معماری و آثار مجسمه‌سازی در سراسر جهان استخراج می‌شوند.',
      },
      undergroundCoalOperations: {
        title: 'عملیات زغال سنگ زیرزمینی',
        subtitle: 'امنیت انرژی',
        description: 'عملیات مدرن استخراج زغال سنگ زیرزمینی به سیم‌های ضخیم زغال سنگ درجه متالورژیکی دسترسی پیدا می‌کند. استخراج‌کنندگان مداوم در شیفت‌های 24 ساعته کار می‌کنند و منابع انرژی را که صنایع داخلی و توسعه زیرساخت را تأمین می‌کند، استخراج می‌کنند.',
      },
      processingPlantOperations: {
        title: 'عملیات کارخانه پردازش',
        subtitle: 'افزودن ارزش',
        description: 'در داخل تسهیلات مدرن پردازش مواد معدنی، سیستم‌های نوار نقاله سنگ معدن خرد شده را از طریق سلول‌های شناور، جداکننده‌های گرانشی و متمرکزکننده‌های مغناطیسی حرکت می‌دهند. اپراتورهای ماهر هر مرحله از فرآیند بهره‌برداری را نظارت می‌کنند.',
      },
      coreSampleAnalysis: {
        title: 'تجزیه و تحلیل نمونه هسته',
        subtitle: 'هوش زمین‌شناسی',
        description: 'نمونه‌های هسته زمین‌شناسی مرتب شده در جعبه‌های چوبی ثروت زیرسطحی ذخایر معدنی افغان را نشان می‌دهند. مناطق رنگی سنگ معدن که کانی‌سازی مس، طلا و عناصر نادر خاکی را نشان می‌دهند، تصمیمات اکتشاف و توسعه را راهنمایی می‌کنند.',
      },
      explorationDrilling: {
        title: 'حفاری اکتشافی',
        subtitle: 'عملیات کشف',
        description: 'ریگ‌های حفاری الماس در سایت‌های کوهستانی دور نمونه‌های هسته استوانه‌ای را استخراج می‌کنند که زمین‌شناسی صدها متر زیر را نشان می‌دهند. تیم‌های اکتشاف در برابر پس‌زمینه‌های دراماتیک هندوکش برای نقشه‌برداری از اکتشافات معدنی جدید کار می‌کنند.',
      },
      surveyOperations: {
        title: 'عملیات بررسی',
        subtitle: 'نقشه‌برداری از ثروت افغانستان',
        description: 'تیم‌های بررسی زمین‌شناسی از تجهیزات موقعیت‌یابی ماهواره‌ای و ابزارهای نقشه‌برداری پیشرفته در خط الرأسهای کوهستانی در سراسر افغانستان استفاده می‌کنند. کار سیستماتیک آنها وسعت کامل منابع معدنی ملت را در تمام 34 ولایت نشان می‌دهد.',
      },
      operationsCommandCenter: {
        title: 'مرکز فرماندهی عملیات',
        subtitle: 'هوش معدن دیجیتال',
        description: 'مراکز کنترل معدن مدرن دارای صفحه نمایش از دیوار تا دیوار هستند که تصاویر ماهواره‌ای زمان واقعی، تلهمتری ناوگان و داده‌های تولید را نمایش می‌دهند. اپراتورها هر جنبه از عملیات معدن را از تسهیلات فرماندهی متمرکز نظارت می‌کنند.',
      },
      vision2030: {
        title: 'چشم‌انداز 2026-2050',
        subtitle: 'افق‌های آینده',
        description: 'تا سال 2050، افغانستان یک ملت معدنی شناخته شده جهانی با عملیات پایدار، پردازش با ارزش افزوده و ثروت معدنی به اشتراک گذاشته شده به طور عادلانه در میان همه شهروندان خواهد بود.',
      },
      finalQuote: {
        quote: 'معدن‌های زیر کوه‌های ما فقط منابع نیستند - آنها بنیادی هستند که بر اساس آن یک افغانستان مرفه و خودکفا برای نسل‌های آینده خواهیم ساخت.',
      },
      buildingTomorrow: {
        title: 'ساختن فردا',
        subtitle: 'آینده',
        description: 'ثروت معدنی افغانستان نمایانگر فرصتی بی‌سابقه برای تحول اقتصادی است. از طریق توسعه پایدار، مشارکت بین‌المللی و حکمرانی مسئولانه، این منابع رفاه ملی را برای نسل‌ها تأمین خواهند کرد.',
      },
      nationalLegacy: {
        title: 'میراث ملی',
        subtitle: 'نسل‌های آینده',
        description: 'توسعه مسئولانه منابع معدنی افغانستان رفاه پایدار ایجاد خواهد کرد، میراث طبیعی را حفظ خواهد کرد و استقلال اقتصادی را برای نسل‌های آینده افغان‌ها تضمین خواهد کرد.',
      },
      // Technology Sections
      autonomousMining: { title: 'ناوگان معدن خودمختار', subtitle: 'صنعت 4.0', description: 'کامیون‌ها و سیستم‌های حفاری خودمختار نسل بعدی با ناوبری مبتنی بر هوش مصنوعی به صورت 24/7 کار می‌کنند. این وسایل 400 تنی روزانه بیش از 50,000 تن سنگ معدن را جابجا می‌کنند، بهره‌وری را به حداکثر می‌رسانند و در عین حال سوابق ایمنی بدون آسیب را در تمام سایت‌های استخراج اصلی تضمین می‌کنند.' },
      satelliteMapping: { title: 'نقشه‌برداری منابع ماهواره‌ای', subtitle: 'فناوری سنجش از دور', description: 'تصاویر پیشرفته ماهواره‌ای و اسکن هیپرسپکترال امضای مواد معدنی را در 652,000 کیلومتر مربع از قلمرو افغانستان نشان می‌دهد. الگوریتم‌های هوش مصنوعی ویژگی‌های زمین‌شناسی را تجزیه و تحلیل می‌کنند تا بیش از 10,000 مکان احتمالی ذخیره را برای تأیید زمینی شناسایی کنند.' },
      droneSurveys: { title: 'عملیات بررسی هوایی', subtitle: 'فناوری نقشه‌برداری با پهپاد', description: 'ناوگان پهپادهای خودمختار بررسی‌های توپوگرافی با وضوح بالا و جاروب‌های مغناطیس‌سنج را در زمین کوهستانی دورافتاده انجام می‌دهند. بیش از 500 پهپاد روزانه 10,000 هکتار را نقشه‌برداری می‌کنند و مدل‌های سه‌بعدی توپوگرافی دقیق سانتی‌متری برای برنامه‌ریزی معدن تولید می‌کنند.' },
      deepCoreDrilling: { title: 'برنامه‌های حفاری هسته عمیق', subtitle: 'اکتشاف زیرسطحی', description: 'عملیات حفاری الماس نمونه‌های هسته را از عمق بیش از 2,000 متر استخراج می‌کند و وسعت کامل سازندهای معدنی را نشان می‌دهد. بیش از 200 دستگاه حفاری به طور همزمان در تمام 34 ولایت کار می‌کنند و سالانه بیش از 50 میلیارد تن منابع جدید را تعریف می‌کنند.' },
      geophysicalSurveys: { title: 'شبکه‌های بررسی ژئوفیزیکی', subtitle: 'نقشه‌برداری الکترومغناطیسی', description: 'رادار نفوذ زمین و بررسی‌های الکترومغناطیسی سالانه بیش از 100,000 کیلومتر خط زمین‌شناسی زیرسطحی را نقشه‌برداری می‌کنند. این فناوری‌ها بدنه‌های سنگ معدن پنهان، ساختارهای گسل و منابع آب حیاتی برای توسعه معدن را نشان می‌دهند.' },
      flotationProcessing: { title: 'کارخانه‌های فرآوری فلوتاسیون', subtitle: 'غلظت سنگ معدن', description: 'سلول‌های فلوتاسیون پیشرفته روزانه 500,000 تن سنگ معدن را پردازش می‌کنند و از فناوری فلوتاسیون کف پیشرفته استفاده می‌کنند تا نرخ بازیابی مواد معدنی بیش از 95% را به دست آورند. 50 کارخانه فرآوری در سراسر کشور هزاران شغل فنی ماهر ایجاد می‌کند.' },
      hydrometallurgical: { title: 'تسهیلات هیدرومتالورژی', subtitle: 'فرآوری شیمیایی', description: 'کارخانه‌های هیدرومتالورژی پیشرفته از فرآیندهای لیچینگ مسئولانه محیط زیستی برای استخراج مس، طلا و عناصر نادر خاکی استفاده می‌کنند. سیستم‌های آب حلقه بسته تخلیه صفر را تضمین می‌کنند در حالی که به سطوح خلوص فلز 99.9% دست می‌یابند.' },
      electrorefining: { title: 'تعالی الکترورفاینینگ', subtitle: 'تصفیه فلز', description: 'تسهیلات عظیم الکترورفاینینگ مس را تا درجه کاتد 99.99% تصفیه می‌کنند و سالانه 1 میلیون تن مس تصفیه شده تولید می‌کنند. این تسهیلات 50 میلیارد دلار سرمایه‌گذاری زیرساخت را نشان می‌دهد و بیش از 100,000 کارگر را استخدام می‌کند.' },
      slagProcessing: { title: 'عملیات بازفرآوری سرباره', subtitle: 'معدن بدون ضایعات', description: 'توده‌های تاریخی سرباره حاوی فلزات ارزشمند تحت بازفرآوری قرار می‌گیرند تا طلا، نقره و مس باقی‌مانده از روش‌های استخراج باستانی را استخراج کنند. بیش از 100 کارخانه بازفرآوری 10 میلیارد دلار فلزات را از سایت‌های معدن میراث بازیابی می‌کنند.' },
      miningRailways: { title: 'شبکه‌های راه‌آهن معدن', subtitle: 'زیرساخت حمل و نقل فله', description: '5,000 کیلومتر راه‌آهن سنگین بار مناطق معدن اصلی را به ترمینال‌های صادراتی متصل می‌کند. قطارهای واحد با بیش از 200 واگن سنگ معدن سالانه 100 میلیون تن را حمل می‌کنند و هزینه‌های حمل و نقل را 75% در مقایسه با حمل کامیون کاهش می‌دهند.' },
      conveyorSystems: { title: 'سیستم‌های نوار نقاله زمینی', subtitle: 'جریان مداوم مواد', description: '500 کیلومتر سیستم‌های نوار نقاله زمینی سنگ معدن را از گودال به کارخانه فرآوری با نرخ بیش از 20,000 تن در ساعت حمل می‌کنند. این سیستم‌ها با در دسترس بودن 99.5% به صورت 24/7 کار می‌کنند و هزاران حرکت کامیون حمل را جایگزین می‌کنند.' },
      powerInfrastructure: { title: 'شبکه برق معدن', subtitle: 'زیرساخت انرژی', description: 'ظرفیت تولید برق اختصاصی 5,000 مگاوات - شامل خورشیدی، برق آبی و گاز - انرژی را برای عملیات معدن تأمین می‌کند. خطوط انتقال زیرزمینی سایت‌های دورافتاده را به شبکه ملی متصل می‌کند و قابلیت اطمینان برق 99.9% را تضمین می‌کند.' },
      waterInfrastructure: { title: 'سیستم‌های تأمین آب', subtitle: 'مدیریت پایدار آب', description: 'سیستم‌های عظیم بازیافت آب 95% از آب فرآیند را بازیابی می‌کنند و مصرف آب شیرین را به سطوح پیشرو در جهان کاهش می‌دهند. بیش از 100 کارخانه تصفیه آلودگی صفر منابع آب محلی را تضمین می‌کند و تأمین آب جامعه را محافظت می‌کند.' },
      portFacilities: { title: 'تسهیلات بندر صادراتی', subtitle: 'دسترسی تجاری دریایی', description: 'شراکت‌های استراتژیک با پاکستان، ایران و ترکمنستان دسترسی به بنادر آب عمیق را فراهم می‌کند که قادر به مدیریت بیش از 200 میلیون تن صادرات مواد معدنی سالانه هستند. ترمینال‌های اختصاصی مواد معدنی دارای سیستم‌های بارگیری خودکار کشتی هستند.' },
      miningUniversity: { title: 'دانشگاه ملی معدن', subtitle: 'آموزش فنی', description: 'دانشگاه ملی معدن افغانستان سالانه 10,000 مهندس معدن و زمین‌شناس را آموزش می‌دهد. آزمایشگاه‌ها و تسهیلات تحقیقاتی درجه جهانی فارغ‌التحصیلان را برای نقش‌های رهبری در صنعت معدنی کشور قرار می‌دهد.' },
      geologicalInstitute: { title: 'موسسه بررسی زمین‌شناسی', subtitle: 'تعالی علمی', description: 'موسسه بررسی زمین‌شناسی ملی ارزیابی‌های سیستماتیک منابع را در تمام 34 ولایت انجام می‌دهد. بیش از 1,000 زمین‌شناس جامع‌ترین پایگاه داده مواد معدنی جهان را حفظ می‌کنند و 100 میلیارد دلار سرمایه‌گذاری اکتشاف را هدایت می‌کنند.' },
      metallurgicalResearch: { title: 'مرکز تحقیقات متالورژی', subtitle: 'نوآوری فرآوری', description: 'آزمایشگاه‌های متالورژی پیشرفته فناوری‌های استخراج جدیدی را که برای سنگ‌های معدن افغان بهینه شده‌اند توسعه می‌دهند. پیشرفت‌های تحقیقاتی نرخ بازیابی را 30% بهبود بخشیده و مصرف انرژی را 40% در تمام عملیات فرآوری کاهش داده است.' },
      environmentalResearch: { title: 'موسسه تحقیقات محیط زیست', subtitle: 'راه‌حل‌های پایدار', description: 'تسهیلات تحقیقاتی محیط زیستی اختصاصی راه‌حل‌های پیشرو در جهان را برای احیای معدن، تصفیه آب و حفاظت از تنوع زیستی توسعه می‌دهند. بیش از 500 دانشمند تضمین می‌کنند که عملیات معدن از استانداردهای بین‌المللی محیط زیست فراتر می‌رود.' },
      // Economic Impact
      economicTransformation: { title: 'تحول اقتصادی', subtitle: 'تأثیر 30 تریلیون دلار', description: 'توسعه مواد معدنی تولید ناخالص داخلی افغانستان را در 20 سال آینده 2,000% افزایش خواهد داد. ثروت معدنی 30 تریلیون دلاری به 1.5 تریلیون دلار فعالیت اقتصادی سالانه تبدیل می‌شود و افغانستان را به نیروگاه اقتصادی آسیای مرکزی تبدیل می‌کند.' },
      employmentRevolution: { title: 'انقلاب اشتغال', subtitle: '5 میلیون شغل', description: 'اشتغال مستقیم معدن از 2 میلیون موقعیت فراتر خواهد رفت، با 3 میلیون شغل اضافی در فرآوری، لجستیک و صنایع پشتیبانی. متوسط دستمزد معدن سالانه 30,000 دلار یک طبقه متوسط مرفه ایجاد خواهد کرد.' },
      regionalDevelopment: { title: 'مناطق توسعه منطقه‌ای', subtitle: 'تحول ولایات', description: '50 منطقه ویژه توسعه اقتصادی در اطراف عملیات معدن اصلی ولایات دورافتاده را به مراکز صنعتی پررونق تبدیل می‌کند. شهرهای جدید با اسکان 5 میلیون نفر در اطراف ثروت معدنی کشور ظهور خواهند کرد.' },
      exportRevenue: { title: 'رشد درآمد صادراتی', subtitle: 'تحول تجاری', description: 'صادرات مواد معدنی تا سال 2040 سالانه 200 میلیارد دلار تولید خواهد کرد و افغانستان را در میان 10 صادرکننده برتر مواد معدنی جهان قرار می‌دهد. روابط تجاری استراتژیک با بیش از 100 کشور دسترسی به بازار و قیمت‌گذاری عادلانه را تضمین می‌کند.' },
      governmentRevenue: { title: 'درآمد دولت', subtitle: 'تحول مالی', description: 'حق امتیاز و مالیات معدن سالانه 50 میلیارد دلار برای خدمات دولتی، آموزش، بهداشت و زیرساخت تولید خواهد کرد. صندوق توسعه معدنی شفاف تضمین می‌کند که مزایا به تمام 40 میلیون شهروند افغان برسد.' },
      foreignInvestment: { title: 'سرمایه‌گذاری مستقیم خارجی', subtitle: 'ورود 500 میلیارد دلار', description: 'شرکت‌های معدنی بین‌المللی 500 میلیارد دلار سرمایه‌گذاری اکتشاف و توسعه را تا سال 2050 متعهد شده‌اند. شراکت‌های استراتژیک با معدنکاران پیشرو جهانی تخصص و فناوری درجه جهانی را به عملیات افغان می‌آورد.' },
      domesticInvestment: { title: 'رشد سرمایه‌گذاری داخلی', subtitle: 'کارآفرینی افغان', description: 'کارآفرینان معدنی افغان بیش از 10,000 عملیات معدن مجاز را از معادن دستی سنگ‌های قیمتی تا تسهیلات فرآوری در مقیاس صنعتی اداره می‌کنند. سرمایه‌گذاری داخلی در این بخش از 100 میلیارد دلار فراتر می‌رود.' },
      miningFinance: { title: 'مرکز مالی معدن', subtitle: 'بازارهای سرمایه', description: 'بورس معدن کابل 50 میلیارد دلار سرمایه‌گذاری سالانه معدن را تسهیل می‌کند و بیش از 200 شرکت معدنی معامله شده عمومی دارد. دسترسی به بازارهای سرمایه جهانی تأمین مالی رقابتی را برای پروژه‌های همه مقیاس‌ها تضمین می‌کند.' },
      miningInsurance: { title: 'بیمه و ریسک معدن', subtitle: 'حفاظت مالی', description: 'برنامه‌های جامع بیمه معدن 500 میلیارد دلار دارایی و عملیات را محافظت می‌کند. شراکت‌های بیمه مجدد بین‌المللی پوشش تمام ریسک‌های عملیاتی، محیط زیستی و سیاسی در بخش را تضمین می‌کند.' },
      // Sustainability Expansion
      carbonNeutral: { title: 'معدن خنثی کربن', subtitle: 'رهبری اقلیم', description: 'بخش معدن افغانستان تا سال 2040 از طریق انرژی تجدیدپذیر، وسایل نقلیه برقی و فناوری‌های جذب کربن به خنثی بودن کربن دست خواهد یافت. 10 گیگاوات انرژی خورشیدی و بادی وابستگی به سوخت فسیلی را حذف می‌کند.' },
      biodiversityProtection: { title: 'حفاظت از تنوع زیستی', subtitle: 'حفاظت از اکوسیستم', description: '100,000 هکتار از کریدورهای تنوع زیستی محافظت شده عملیات معدن اصلی را احاطه کرده است. برنامه‌های نظارت بر حیات وحش پلنگ برفی، گوسفند مارکو پولو و سایر گونه‌های در معرض خطر منحصر به اکوسیستم‌های کوهستانی افغان را محافظت می‌کند.' },
      mineClosure: { title: 'احیای تدریجی', subtitle: 'بازسازی زمین', description: '10 میلیارد دلار در صندوق‌های بسته شدن معدن تضمین می‌کند که تمام عملیات در طول و پس از معدن به تدریج احیا شوند. مناظر بازسازی شده از کشاورزی، جنگلداری و گردشگری پشتیبانی می‌کند و ارزش پایدار برای جوامع محلی ایجاد می‌کند.' },
      circularEconomy: { title: 'معدن اقتصاد دایره‌ای', subtitle: 'عملیات بدون ضایعات', description: 'فناوری‌های فرآوری پیشرفته تضمین می‌کنند که 99% از تمام مواد استخراج شده استفاده مولد پیدا کنند. ضایعات معدن به مصالح ساختمانی، اصلاحات کشاورزی یا مواد اولیه برای عملیات فرآوری ثانویه تبدیل می‌شود.' },
      // Social Impact
      educationPrograms: { title: 'برنامه‌های آموزش معدن', subtitle: 'توسعه سرمایه انسانی', description: 'بیش از 1,000 مدرسه ساخته شده در مناطق معدن آموزش درجه جهانی را برای 2 میلیون کودک فراهم می‌کند. برنامه‌های بورسیه سالانه 10,000 دانشجو را به دانشگاه‌های بین‌المللی برای درجات پیشرفته معدن و مهندسی می‌فرستد.' },
      healthcareFacilities: { title: 'مراقبت‌های بهداشتی جامعه', subtitle: 'زیرساخت پزشکی', description: '50 بیمارستان مدرن و 500 کلینیک در مناطق معدن مراقبت‌های بهداشتی رایگان را برای 10 میلیون نفر فراهم می‌کند. برنامه‌های بهداشتی شرکت معدن مرگ و میر نوزادان را 90% کاهش داده و امید به زندگی را 15 سال افزایش داده است.' },
      womensEmployment: { title: 'زنان در معدن', subtitle: 'برابری جنسیتی', description: 'زنان 30% از نیروی کار معدن را تشکیل می‌دهند، از زمین‌شناسان تا اپراتورهای تجهیزات تا رهبری اجرایی. مشاغل متعلق به زنان 40% از خدمات معدن را تأمین می‌کنند و استقلال اقتصادی را برای میلیون‌ها زن افغان ایجاد می‌کنند.' },
      artisanalIntegration: { title: 'پشتیبانی از معدنکاران دستی', subtitle: 'برنامه‌های رسمی‌سازی', description: '500,000 معدنکار دستی از طریق برنامه‌های رسمی‌سازی آموزش، تجهیزات و دسترسی به بازار دریافت می‌کنند. گواهینامه تجارت عادلانه تضمین می‌کند که محصولات دستی قیمت‌های ممتاز در بازارهای بین‌المللی دریافت می‌کنند.' },
      // Technology Innovation
      aiMining: { title: 'معدن مبتنی بر هوش مصنوعی', subtitle: 'هوش مصنوعی', description: 'سیستم‌های هوش مصنوعی هر جنبه از عملیات معدن را بهینه می‌کنند، از مدل‌سازی زمین‌شناسی تا نگهداری تجهیزات تا لجستیک زنجیره تأمین. هوش مصنوعی هزینه‌های عملیاتی را 40% کاهش می‌دهد در حالی که سوابق ایمنی را 80% بهبود می‌بخشد.' },
      robotics: { title: 'رباتیک معدن', subtitle: 'سیستم‌های خودمختار', description: 'بیش از 10,000 ربات خودمختار وظایف خطرناک زیرزمینی از جمله حفاری، انفجار و استخراج سنگ معدن را انجام می‌دهند. اپراتورهای انسانی از اتاق‌های کنترل سطحی نظارت می‌کنند و مرگ و میر زیرزمینی را به طور کامل حذف می‌کنند.' },
      digitalTwins: { title: 'عملیات دوقلوی دیجیتال', subtitle: 'معدن مجازی', description: 'کپی‌های دیجیتال کامل هر عملیات معدن بهینه‌سازی در زمان واقعی و نگهداری پیش‌بینی را ممکن می‌سازد. اپراتورها می‌توانند سناریوهای استخراج را شبیه‌سازی کنند و کارایی را قبل از اجرای تغییرات در عملیات فیزیکی بهینه کنند.' },
      blockchainSupply: { title: 'ردیابی بلاک چین', subtitle: 'شفافیت زنجیره تأمین', description: 'فناوری بلاک چین هر گرم از مواد معدنی افغان را از استخراج تا محصول نهایی ردیابی می‌کند. مصرف‌کنندگان و تولیدکنندگان می‌توانند منبع اخلاقی، وضعیت بدون درگیری و انطباق محیط زیستی را با شفافیت کامل تأیید کنند.' },
      // Global Partnerships
      chinaPartnership: { title: 'شراکت استراتژیک چین', subtitle: 'ادغام کمربند و جاده', description: 'شراکت استراتژیک با چین 200 میلیارد دلار سرمایه‌گذاری زیرساخت را به همراه می‌آورد و ذخایر مواد معدنی افغان را به مراکز تولید آسیایی متصل می‌کند. راه‌آهن‌ها و بزرگراه‌های جدید افغانستان را در زنجیره‌های تأمین جهانی ادغام می‌کند.' },
      europePartnership: { title: 'همکاری اتحادیه اروپا', subtitle: 'انتقال فناوری', description: 'شراکت‌های اتحادیه اروپا فناوری معدن پیشرفته اروپایی و استانداردهای محیط زیستی را به همراه می‌آورد. مشاغل مشترک با شرکت‌های آلمانی، سوئدی و فنلاندی تخصص پیشرو در جهان در استخراج و فرآوری را معرفی می‌کند.' },
      usPartnership: { title: 'سرمایه‌گذاری آمریکا', subtitle: 'فناوری و مالی', description: 'شرکت‌های معدنی و سرمایه‌گذاری آمریکا 100 میلیارد دلار را برای توسعه مواد معدنی افغان متعهد می‌شوند. فناوری آمریکایی در نقشه‌برداری ماهواره‌ای، وسایل نقلیه خودمختار و نوآوری فرآوری کارایی عملیاتی را متحول می‌کند.' },
      regionalPartnership: { title: 'ادغام منطقه‌ای', subtitle: 'همکاری آسیای مرکزی', description: 'همکاری با قزاقستان، ازبکستان و ترکمنستان زنجیره‌های تأمین مواد معدنی یکپارچه ایجاد می‌کند. شبکه‌های راه‌آهن مشترک و تسهیلات فرآوری ارزش منطقه‌ای را به حداکثر می‌رساند و هزینه‌ها را برای همه شرکا کاهش می‌دهد.' },
      // Gemstone Expansion
      emeraldGrading: { title: 'مرکز درجه‌بندی زمرد', subtitle: 'گواهینامه بین‌المللی', description: 'مرکز درجه‌بندی زمرد ملی سالانه 1 میلیون قیراط را با استفاده از استانداردهای شناخته شده بین‌المللی گواهی می‌کند. زمردهای افغان گواهی شده 50% حق بیمه قیمت در بازارهای سنگ‌های قیمتی جهانی را دریافت می‌کنند.' },
      lapisHeritage: { title: 'میراث لاجورد', subtitle: '6,000 سال معدن', description: 'معادن باستانی لاجورد بدخشان - منبع رنگ اولترامارین برای توتانخامون و استادان رنسانس - به تولید بهترین کیفیت جهان ادامه می‌دهد. شناسایی میراث جهانی یونسکو این سایت‌های تاریخی را محافظت می‌کند.' },
      rubyDeposits: { title: 'برتری معدن یاقوت', subtitle: 'کیفیت خون کبوتر', description: 'ذخایر یاقوت جگدالک با کیفیت برمه‌ای با یک دهم تأثیر محیط زیستی مطابقت دارد. استخراج مدرن یکپارچگی زمین‌شناسی را حفظ می‌کند در حالی که سالانه 500 میلیون دلار کاراندوم با کیفیت سنگ‌های قیمتی تولید می‌کند.' },
      tourmalineVarieties: { title: 'بهشت تورمالین', subtitle: 'مجموعه رنگین‌کمان', description: 'نورستان بیش از 50 نوع رنگ تورمالین از جمله نمونه‌های نادر هندوانه، ایندیگولیت و نوع پارایبا تولید می‌کند. تولید سالانه 10 میلیون قیراط افغانستان را به پایتخت تورمالین جهان تبدیل می‌کند.' },
      gemCutting: { title: 'صنعت برش سنگ‌های قیمتی', subtitle: 'افزایش ارزش', description: '200 تسهیلات برش سنگ‌های قیمتی 50,000 لپیداریست ماهر را استخدام می‌کند و سنگ‌های خام را به شاهکارهای صیقلی تبدیل می‌کند. برش درون کشور در مقایسه با صادرات سنگ‌های قیمتی خام 400% ارزش اضافه می‌کند.' },
      // Strategic Minerals
      cobaltSupply: { title: 'امنیت عرضه کبالت', subtitle: 'فلز حیاتی باتری', description: 'ذخایر کبالت افغان 5 میلیون تن مواد کاتد باتری ضروری را برای 500 میلیون وسیله نقلیه برقی فراهم می‌کند. استانداردهای استخراج اخلاقی عرضه بدون درگیری را برای تولیدکنندگان مسئول تضمین می‌کند.' },
      nickelDeposits: { title: 'توسعه لاتریت نیکل', subtitle: 'فولاد ضد زنگ و باتری', description: '10 میلیون تن نیکل در ذخایر لاتریت و سولفید هم تولید فولاد ضد زنگ و هم تولید باتری را پشتیبانی می‌کند. فرآوری مدرن بازیابی نیکل 95% را با تخلیه اسید صفر به دست می‌آورد.' },
      tungstenSupply: { title: 'ذخایر استراتژیک تنگستن', subtitle: 'فلز حیاتی', description: 'ذخایر تنگستن درجه بالا در پنجشیر و ولایات اطراف 500,000 تن از این فلز حیاتی را شامل می‌شود. سختی شدید تنگستن آن را برای ابزار برش، الکترونیک و کاربردهای هوافضا ضروری می‌کند.' },
      antimonyDeposits: { title: 'تولید آنتیموان', subtitle: 'فلز ضد حریق', description: 'ذخایر آنتیموان در چندین ولایت تقاضای رو به رشد برای مواد ضد حریق و فناوری‌های باتری را پشتیبانی می‌کند. تسهیلات فرآوری مدرن سالانه 50,000 تن آنتیموان تصفیه شده تولید می‌کنند.' },
      tantalumNiobium: { title: 'تانتالوم و نیوبیوم', subtitle: 'مواد معدنی الکترونیک', description: 'ذخایر پگماتیت تانتالوم و نیوبیوم ضروری برای خازن‌های الکترونیک و سوپرآلیاژها را تولید می‌کند. زنجیره‌های تأمین گواهی شده بدون درگیری تضمین می‌کند که تانتالوم افغان با استانداردهای منبع مسئولانه مطابقت دارد.' },
      // Future Vision
      vision2050: { title: 'چشم‌انداز 2026-2050', subtitle: 'رفاه بلندمدت', description: 'تا سال 2050، افغانستان در میان ثروتمندترین کشورهای جهان خواهد بود، با درآمدهای معدنی که مراقبت‌های بهداشتی جهانی، آموزش و رفاه را برای تمام 60 میلیون شهروند فراهم می‌کند. موهبت معدنی 30 تریلیون دلاری یک ملت را متحول می‌کند.' },
      sovereignWealth: { title: 'صندوق ثروت حاکمیت', subtitle: 'امنیت نسل‌ها', description: 'یک صندوق ثروت حاکمیت 1 تریلیون دلاری - تأمین شده از درآمدهای معدنی - تضمین می‌کند که رفاه مدت‌ها پس از اتمام منابع ادامه یابد. سرمایه‌گذاری‌ها در بازارهای جهانی درآمد دائمی را برای نسل‌های آینده فراهم می‌کند.' },
      technologyHub: { title: 'مرکز فناوری منطقه‌ای', subtitle: 'اقتصاد نوآوری', description: 'ثروت معدن انتقال به اقتصاد دانش را تأمین می‌کند، با کابل که به مرکز فناوری و نوآوری آسیای مرکزی تبدیل می‌شود. 100 دانشگاه تحقیقاتی و 1,000 شرکت فناوری از توسعه تأمین شده توسط مواد معدنی ظهور می‌کنند.' },
      sustainableLegacy: { title: 'میراث پایدار', subtitle: 'میراث محیط زیستی', description: 'معدن مسئولانه میراثی از مناظر بازسازی شده، اکوسیستم‌های محافظت شده و زیرساخت انرژی پاک ایجاد می‌کند. افغانستان به الگویی برای توسعه پایدار منابع در سراسر جهان تبدیل می‌شود.' },
      finalVision: { title: 'یک ملت متحول شده', subtitle: 'رنسانس افغان', description: 'ثروت معدنی 30 تریلیون دلاری - توسعه یافته به صورت پایدار، به اشتراک گذاشته شده به طور عادلانه و سرمایه‌گذاری شده به طور عاقلانه - افغانستان را از منطقه درگیری به قدرت اقتصادی جهانی تبدیل می‌کند. این وعده مواد معدنی افغان است: رفاه برای نسل‌ها.' },
      // Panjshir Expanded
      panjshirEmeralds: { title: 'زمردهای پنجشیر', subtitle: 'دره سنگ‌های قیمتی', description: 'دره افسانه‌ای پنجشیر برخی از بهترین زمردهای جهان را تولید می‌کند. کریستال‌های سبز عمیق استخراج شده از سنگ کوه قیمت‌های ممتاز در بازارهای سنگ‌های قیمتی بین‌المللی را دریافت می‌کنند.' },
      provinces: {
        kandahar: { title: 'ولایت قندهار', subtitle: 'دروازه جنوبی', description: 'ولایت قندهار به عنوان دروازه جنوبی افغانستان برای صادرات مواد معدنی عمل می‌کند. غنی از ذخایر طلا، مس و کرومیت، این ولایت دسترسی استراتژیک به بازارهای منطقه‌ای از طریق کریدورهای تجاری تثبیت شده و توسعه زیرساخت‌های مدرن ارائه می‌دهد.' },
        herat: { title: 'ولایت هرات', subtitle: 'منابع غربی', description: 'معادن مرمر باستانی هرات و ذخایر سنگ آهن نمایانگر قرن‌ها میراث معدن است. نزدیکی ولایت به ایران و بازارهای آسیای مرکزی آن را به عنوان یک مرکز صادراتی کلیدی برای محصولات معدنی فرآوری شده قرار می‌دهد.' },
        nuristan: { title: 'ولایت نورستان', subtitle: 'مرز لیتیوم', description: 'زمین کوهستانی نورستان میزبان برخی از بزرگترین ذخایر پگماتیت حامل لیتیوم در جهان است. این مواد معدنی حیاتی برای انتقال انرژی پاک جهانی و تولید خودروهای برقی ضروری هستند.' },
        kunar: { title: 'ولایت کنر', subtitle: 'دره سنگ‌های قیمتی', description: 'دره‌های دراماتیک رودخانه کنر سنگ‌های قیمتی استثنایی از جمله آکوامارین، تورمالین و سایر سنگ‌های قیمتی را تولید می‌کند. سنت معدنکاری دستی ولایت با تکنیک‌های مدرن ترکیب می‌شود تا نمونه‌های درجه جهانی استخراج شود.' },
        ghazni: { title: 'ولایت غزنی', subtitle: 'ذخایر استراتژیک', description: 'ولایت غزنی دارای ذخایر قابل توجه لیتیوم، مس و سنگ آهن است. سایت‌های میراث بودایی باستانی با بررسی‌های زمین‌شناسی مدرن همزیستی دارند که پتانسیل معدنی وسیع منطقه را نقشه‌برداری می‌کند.' },
        helmand: { title: 'ولایت هلمند', subtitle: 'گنجینه‌های بیابان', description: 'زیر منظر بیابانی هلمند ذخایر قابل توجه مس و طلا قرار دارد. تکنیک‌های اکتشاف مدرن مناطق معدنی گسترده‌ای را با پتانسیل سرمایه‌گذاری قابل توجه نشان داده‌اند.' },
        faryab: { title: 'ولایت فاریاب', subtitle: 'کرومیت شمالی', description: 'ذخایر کرومیت فاریاب مواد خام ضروری برای تولید فولاد ضد زنگ را تأمین می‌کند. استپ‌های شمالی سازندهای معدنی غنی را با عملیات استخراج تثبیت شده پنهان می‌کنند.' },
        jowzjan: { title: 'ولایت جوزجان', subtitle: 'نمک و گاز', description: 'ولایت جوزجان تولید گاز طبیعی را با عملیات گسترده استخراج نمک ترکیب می‌کند. تسهیلات فرآوری مواد معدنی صنعتی بازارهای داخلی و منطقه‌ای را خدمت می‌کند.' },
        takhar: { title: 'ولایت تخار', subtitle: 'رودهای طلایی', description: 'سیستم‌های رودخانه تخار برای قرن‌ها طلای آبرفتی تولید کرده‌اند. معدنکاری دستی مدرن تکنیک‌های شستشوی سنتی را با روش‌های بهبود یافته بازیابی برای استخراج پایدار ترکیب می‌کند.' },
        samangan: { title: 'ولایت سمنگان', subtitle: 'معدنکاری تالک', description: 'ذخایر تالک سمنگان در نزدیکی غارهای بودایی باستانی مواد معدنی صنعتی درجه بالا تولید می‌کند. صومعه معروف تخت رستم بر عملیات معدنکاری مدرن مشرف است.' },
        baghlan: { title: 'ولایت بغلان', subtitle: 'حوضه زغال سنگ', description: 'حوضه‌های زغال سنگ بغلان منابع انرژی ضروری برای صنعت داخلی را فراهم می‌کند. عملیات معدنکاری زیرزمینی زغال سنگ متالورژیکی و حرارتی با کیفیت بالا را استخراج می‌کند.' },
        parwan: { title: 'ولایت پروان', subtitle: 'دروازه سالنگ', description: 'ولایت پروان، دروازه به گذرگاه سالنگ، دارای ذخایر سنگ آهن و مس است. موقعیت استراتژیک مناطق معدنی شمالی و جنوبی را به هم متصل می‌کند.' },
        laghman: { title: 'ولایت لغمان', subtitle: 'استخراج باریت', description: 'ذخایر باریت لغمان به صنعت حفاری نفت خدمت می‌کند. دره‌های کشاورزی با کوه‌های غنی از مواد معدنی در این ولایت متنوع شرقی ملاقات می‌کنند.' },
        kapisa: { title: 'ولایت کاپیسا', subtitle: 'گنجینه‌های پنهان', description: 'غارهای کوهستانی کاپیسا سنگ‌های قیمتی از جمله تورمالین و کونزیت را تولید می‌کند. خانواده‌های معدنکاری سنتی دانش استخراج قرن‌ها را حفظ می‌کنند.' },
        wardak: { title: 'ولایت وردک', subtitle: 'آهن حاجیگک', description: 'وردک میزبان ذخیره افسانه‌ای سنگ آهن حاجیگک است - یکی از بزرگترین ذخایر آهن توسعه نیافته در آسیا. ذخیره عظیم بیش از 2.2 میلیارد تن متریک سنگ معدن درجه بالا دارد.' },
        zabul: { title: 'ولایت زابل', subtitle: 'بررسی عناصر نادر خاکی', description: 'بررسی‌های زمین‌شناسی در ولایت زابل غلظت‌های امیدوارکننده عناصر نادر خاکی را شناسایی کرده‌اند. این مواد معدنی استراتژیک برای تولید فناوری پیشرفته ضروری هستند.' },
        paktya: { title: 'ولایت پکتیا', subtitle: 'معدن‌های جنگلی', description: 'کوه‌های پوشیده از کاج پکتیا ذخایر کرومیت و مس را پنهان می‌کند. شیوه‌های معدنکاری پایدار اکوسیستم‌های جنگلی منحصر به فرد ولایت را محافظت می‌کند.' },
        khost: { title: 'ولایت خوست', subtitle: 'صنعت سیمان', description: 'معادن سنگ آهک خوست تسهیلات تولید سیمان مدرن را تغذیه می‌کند. توسعه صنعتی اشتغال ایجاد می‌کند در حالی که نیازهای ساخت و ساز ملی را پشتیبانی می‌کند.' },
        daykundi: { title: 'ولایت دایکندی', subtitle: 'مرمر آلپاین', description: 'معادن مرتفع دایکندی مرمر صورتی و کرم متمایز تولید می‌کند. مکان‌های کوهستانی دور سنگ ممتاز را برای بازارهای صادراتی بین‌المللی تولید می‌کند.' },
        uruzgan: { title: 'ولایت اروزگان', subtitle: 'اکتشاف دورافتاده', description: 'زمین ناهموار اروزگان ذخایر مس و طلا را از طریق حفاری اکتشافی مدرن نشان داده است. عملیات دورافتاده تعهد به ارزیابی جامع منابع را نشان می‌دهد.' },
        ghor: { title: 'ولایت غور', subtitle: 'مناره جام', description: 'ولایت غور، خانه مناره جام فهرست شده در یونسکو، حفظ میراث را با توسعه مواد معدنی متعادل می‌کند. اکتشاف دقیق از سایت‌های فرهنگی محافظت می‌کند در حالی که پتانسیل منابع را ارزیابی می‌کند.' },
        farah: { title: 'ولایت فراه', subtitle: 'آهن غربی', description: 'ذخایر سنگ آهن فراه در امتداد مرز ایران پتانسیل توسعه قابل توجهی را نشان می‌دهد. اتصالات بزرگراه غربی لجستیک صادرات آینده را تسهیل می‌کند.' },
        nimroz: { title: 'ولایت نیمروز', subtitle: 'طلای بیابان', description: 'صحرای ریگستان ولایت نیمروز ذخایر طلا را در محل تلاقی برون‌زدهای سنگی و تپه‌های شنی پنهان می‌کند. شرایط شدید چالش ایجاد می‌کند اما اکتشاف مدرن را جلوگیری نمی‌کند.' },
        sarEPul: { title: 'ولایت سرپل', subtitle: 'انرژی و معادن', description: 'ولایت سرپل تولید گاز طبیعی را با استخراج متنوع مواد معدنی ترکیب می‌کند. تسهیلات صنعتی مواد خام را برای بازارهای داخلی پردازش می‌کند.' },
        logar: { title: 'ولایت لوگر', subtitle: 'قلب مس', description: 'خانه ذخیره افسانه‌ای مس عینک، ولایت لوگر مرکز صنعت مس افغانستان را نمایندگی می‌کند با ذخایر ارزشمند ده‌ها میلیارد دلار.' },
        badakhshan: { title: 'ولایت بدخشان', subtitle: 'پادشاهی سنگ‌های قیمتی', description: 'ولایت باستانی سنگ‌های قیمتی بدخشان جهان را به مدت شش هزار سال با لاجورد تأمین کرده است و به تولید زمرد، یاقوت و سایر سنگ‌های قیمتی ادامه می‌دهد.' },
        bamyan: { title: 'ولایت بامیان', subtitle: 'کوه آهن', description: 'منظر دراماتیک بامیان ذخایر عظیم سنگ آهن حاجیگک را پنهان می‌کند - یکی از بزرگترین ذخایر آهن در آسیا - همراه با ذخایر مهم مس و زغال سنگ در انتظار توسعه.' },
        panjshir: { title: 'ولایت پنجشیر', subtitle: 'دره زمرد', description: 'دره‌های دراماتیک دره پنجشیر میزبان برخی از بهترین ذخایر زمرد در جهان است، تولید سنگ‌های قیمتی که با سنگ‌های کلمبیایی و زامبیایی از نظر رنگ و کیفیت رقابت می‌کنند.' },
      },
    },
    notFound: {
      title: '404',
      message: 'متأسفانه! صفحه یافت نشد',
      returnHome: 'بازگشت به خانه',
    },
    mapSection: {
      provincesLabel: '۳۴ ولایت',
      title: 'نقشه تعاملی منابع',
      description: 'ثروت معدنی افغانستان را در تمام ولایات کاوش کنید. روی هر منطقه حرکت کنید تا ذخایر کلیدی، ارزش‌های تخمینی و فرصت‌های سرمایه‌گذاری را کشف کنید.',
      stats: {
        provinces: 'ولایات',
        knownDeposits: 'ذخایر شناخته شده',
        totalValue: 'ارزش کل',
        mineralTypes: 'انواع مواد معدنی',
      },
      legendHover: 'روی ولایات حرکت کنید',
      legendDeposits: 'ذخایر معدنی',
    },
    imageGallery: {
      clickToView: 'روی هر تصویر کلیک کنید تا در حالت تمام صفحه مشاهده شود',
    },
    vision2050: {
      learnMore: 'بیشتر بدانید',
    },
    mineralHero: {
      selectCategory: 'یک دسته‌بندی را برای کاوش انتخاب کنید',
      menuCategories: heroMenuTranslations.fa,
    },
  },
   ar: {
    nav: {
      home: 'الرئيسية',
      sectors: 'القطاعات',
      minerals: 'المعادن',
      investment: 'الاستثمار',
      contact: 'اتصل بنا',
      about: 'حول',
      provinces: 'المحافظات',
      operations: 'العمليات',
      timeline: 'الجدول الزمني',
      map: 'الخريطة',
    },
    navDropdowns: {
      provinces: {
        title: '34 محافظة غنية بالموارد',
        subtitle: 'استكشف الودائع المعدنية في جميع أنحاء أفغانستان',
        viewMap: 'عرض الخريطة التفاعلية',
        clickToExplore: 'انقر على أي محافظة لاستكشاف ثروتها المعدنية',
        badakhshan: 'بدخشان - مملكة الأحجار الكريمة',
        badghis: 'بادغيس - الموارد المعدنية',
        baghlan: 'بغلان - الفحم والمعادن',
        balkh: 'بلخ - الموارد الشمالية',
        bamyan: 'باميان - جبل الحديد',
        daykundi: 'دايكوندي - الودائع المعدنية',
        farah: 'فراه - المعادن الغربية',
        faryab: 'فارياب - الودائع الشمالية',
        ghazni: 'غزني - حزام الليثيوم',
        ghor: 'غور - الموارد الوسطى',
        helmand: 'هلمند - الموارد الاستراتيجية',
        herat: 'هرات - البوابة الغربية',
        jowzjan: 'جوزجان - المعادن الشمالية',
        kabul: 'كابل - موارد العاصمة',
        kandahar: 'قندهار - المركز الجنوبي',
        kapisa: 'كابيسا - الودائع الوسطى',
        khost: 'خوست - المعادن الشرقية',
        kunar: 'كونار - وادي الأحجار الكريمة',
        kunduz: 'كندز - البوابة الشمالية',
        laghman: 'لغمان - الموارد الشرقية',
        logar: 'لوغر - قلب النحاس',
        nangarhar: 'ننغرهار - الودائع الشرقية',
        nimruz: 'نيمروز - المعادن الجنوبية',
        nuristan: 'نورستان - حدود الليثيوم',
        paktia: 'بكتيا - الموارد الشرقية',
        paktika: 'بكتيكا - الودائع الجنوبية',
        panjshir: 'بنجشير - وادي الزمرد',
        parwan: 'بروان - المعادن الوسطى',
        samangan: 'سمنغان - الودائع الشمالية',
        sarEPol: 'سار إي بول - الموارد الشمالية',
        takhar: 'تخار - الأنهار الذهبية',
        uruzgan: 'أروزغان - المعادن الوسطى',
        wardak: 'وردك - الودائع الوسطى',
        zabul: 'زابل - الموارد الجنوبية',
      },
      operations: {
        title: 'عمليات وخدمات التعدين',
        subtitle: 'خدمات وعمليات تعدين شاملة',
        viewAll: 'عرض جميع العمليات والخدمات',
        processing: { label: 'المعالجة والتكرير', description: 'مرافق معالجة الخام' },
        smelting: { label: 'عمليات الصهر', description: 'استخراج المعادن' },
        research: { label: 'البحث والاستكشاف', description: 'الدراسات الجيولوجية' },
        geological: { label: 'الدراسات الجيولوجية', description: 'رسم خرائط الودائع' },
        trade: { label: 'التجارة والتصدير', description: 'التجارة الدولية' },
        investment: { label: 'إطار الاستثمار', description: 'قانوني ومالي' },
        sustainability: { label: 'الاستدامة', description: 'معايير البيئة' },
        community: { label: 'تنمية المجتمع', description: 'العمالة المحلية' },
        digital: { label: 'التعدين الرقمي', description: 'تكامل التكنولوجيا' },
        safety: { label: 'الصحة والسلامة', description: 'حماية العمال' },
      },
      timeline: {
        title: 'الجدول الزمني للتنمية',
        subtitle: 'التقدم التاريخي والرؤية المستقبلية',
        viewComplete: 'عرض الجدول الزمني الكامل',
        clickToExplore: 'انقر على أي خيار لاستكشاف تفاصيل الجدول الزمني',
        historical: { label: 'الجدول الزمني التاريخي', description: 'تاريخ التعدين والمعالم' },
        ancientPeriod: { label: 'التعدين القديم (4000 ق.م - 1000 م)', description: 'أكثر من 6000 عام من التراث التعديني من الحضارات القديمة' },
        ancientEgypt: { label: 'مصر وبلاد الرافدين القديمة', description: 'اللازورد الأفغاني في دفن توت عنخ آمون والتجارة القديمة' },
        silkRoad: { label: 'عصر طريق الحرير', description: 'طرق التجارة التاريخية وتجارة المعادن' },
        medievalPeriod: { label: 'العصور الوسطى والإسلامية', description: 'تجارة طريق الحرير وتوسع التعدين الإسلامي' },
        renaissance: { label: 'عصر النهضة', description: 'تجارة صبغ أولترامارين والفن الأوروبي' },
        colonialPeriod: { label: 'الاستكشاف الاستعماري (1800-1960)', description: 'المسوحات الجيولوجية الأوروبية والاكتشافات المبكرة' },
        britishSurveys: { label: 'المسوحات الجيولوجية البريطانية', description: 'الاستكشاف والرسم البريطاني في القرن التاسع عشر' },
        russianSurveys: { label: 'البعثات الجيولوجية الروسية', description: 'العمل الجيولوجي الروسي في أوائل القرن العشرين' },
        sovietPeriod: { label: 'العصر السوفيتي (1960-1990)', description: 'الرسم الجيولوجي الشامل وتحديد الرواسب الرئيسية' },
        sovietMapping: { label: 'الرسم الجيولوجي السوفيتي', description: 'مسوحات شاملة حددت مس عينك وحاجيغك' },
        modernEra: { label: 'العصر الحديث (2000-الآن)', description: 'التجديد في القرن الحادي والعشرين والتنمية الشاملة' },
        usgsSurveys: { label: 'مسوحات USGS الشاملة', description: 'تقييم USGS لتقدير endowment المعدني بأكثر من 30 تريليون دولار' },
        gemstoneHistory: { label: 'تراث الأحجار الكريمة', description: '6000 عام من تعدين اللازورد والزمرد والياقوت' },
        lapisHistory: { label: 'اللازورد: 6000 عام', description: 'أقدم مناجم تعمل باستمرار في العالم' },
        emeraldHistory: { label: 'تراث زمرد پنجشير', description: 'أكثر من 1000 عام من تقاليد تعدين الزمرد' },
        rubyHistory: { label: 'تعدين ياقوت جگدلک', description: 'رواسب ياقوت دم الحمام والاستخراج التاريخي' },
        goldHistory: { label: 'تراث تعدين الذهب', description: 'تقاليد استخراج الذهب القديمة والوسطى' },
        copperHistory: { label: 'تراث تعدين النحاس', description: 'استخراج وتجارة النحاس التاريخية' },
        tradeRoutes: { label: 'طرق التجارة القديمة', description: 'طريق الحرير وشبكات تجارة المعادن التاريخية' },
        caravanRoutes: { label: 'شبكات تجارة القوافل', description: 'طرق القوافل التاريخية لحمل معادن أفغانستان' },
        maritimeTrade: { label: 'تاريخ التجارة البحرية', description: 'طرق بحرية تاريخية لتصدير المعادن' },
        archaeological: { label: 'الاكتشافات الأثرية', description: 'مواقع التعدين التاريخية والأدلة الأثرية' },
        mesAynakArchaeology: { label: 'الموقع الأثري مس عينك', description: 'موقع بوذي عمره 2000 عام ورواسب النحاس' },
        documentation: { label: 'الوثائق التاريخية', description: 'النصوص والخرائط والسجلات التاريخية القديمة' },
        ancientTexts: { label: 'النصوص والسجلات القديمة', description: 'وثائق تاريخية تذكر معادن أفغانستان' },
        historicalMaps: { label: 'الخرائط التاريخية', description: 'خرائط قديمة ووسطى تظهر مواقع التعدين' },
        museumCollections: { label: 'مجموعات المتاحف', description: 'معادن أفغانستان في مجموعات متاحف العالم' },
        provincial: { label: 'التنمية الإقليمية', description: 'الجداول الزمنية الإقليمية' },
        badakhshanHistory: { label: 'تاريخ تعدين بدخشان', description: '6000 عام من تعدين اللازورد' },
        panjshirHistory: { label: 'تراث وادي پنجشير', description: 'تقاليد تعدين الزمرد عبر آلاف السنين' },
        roadmap: { label: 'خارطة طريق التنمية', description: 'خطط التنمية المستقبلية' },
        milestones: { label: 'معالم المشروع', description: 'إنجازات المشروع الرئيسية' },
        achievements: { label: 'الإنجازات', description: 'الإنجازات الرئيسية' },
        vision2030: { label: 'رؤية 2026-2050', description: 'الرؤية طويلة المدى' },
        reports: { label: 'التقارير السنوية', description: 'تقارير التقدم السنوية' },
        annualReports: { label: 'تقارير التقدم السنوية', description: 'تقارير التنمية التعدينية السنوية' },
        dataReports: { label: 'تقارير البيانات التاريخية', description: 'بيانات التعدين التاريخي الشاملة' },
        statisticalAnalysis: { label: 'التحليل الإحصائي', description: 'إحصائيات واتجاهات التعدين التاريخي' },
        historicalGallery: { label: 'معرض الصور التاريخية', description: 'مجموعة شاملة من صور التعدين التاريخية' },
        ancientImages: { label: 'صور التعدين القديم', description: 'صور تاريخية من فترات التعدين القديمة' },
        medievalImages: { label: 'صور العصور الوسطى', description: 'صور تاريخية من التعدين في العصور الوسطى' },
        archaeologicalImages: { label: 'صور المواقع الأثرية', description: 'صور مواقع التعدين التاريخية' },
        artisanalMining: { label: 'تاريخ التعدين الحرفي', description: 'طرق التعدين التقليدية والتراث' },
        miningTechniques: { label: 'تقنيات التعدين التاريخية', description: 'تطور طرق التعدين على مدى 6000 عام' },
        culturalHeritage: { label: 'التراث الثقافي', description: 'التعدين في الثقافة والتقاليد الأفغانية' },
        royalCollections: { label: 'المجموعات الملكية', description: 'جواهر أفغانستان في المجموعات الملكية التاريخية' },
        ironHistory: { label: 'تراث تعدين الحديد', description: 'استخراج الحديد وإنتاج الصلب التاريخي' },
        lithiumHistory: { label: 'تاريخ اكتشاف الليثيوم', description: 'استكشاف واكتشاف الليثيوم التاريخي' },
        coalHistory: { label: 'تراث تعدين الفحم', description: 'استخراج الفحم وإنتاج الطاقة التاريخي' },
        marbleHistory: { label: 'تراث استخراج الرخام', description: 'استخراج الرخام والاستخدام المعماري التاريخي' },
        chromiteHistory: { label: 'تاريخ تعدين الكروميت', description: 'استخراج واستخدام الكروميت الصناعي التاريخي' },
        rareEarthHistory: { label: 'اكتشاف العناصر الأرضية النادرة', description: 'استكشاف العناصر الأرضية النادرة التاريخي' },
        miningCommunities: { label: 'مجتمعات التعدين التاريخية', description: 'مجتمعات التعدين التقليدية وتراثها' },
        miningLegends: { label: 'أساطير وحكايات التعدين', description: 'أساطير وحكايات تاريخية من مناطق التعدين' },
        geologicalFormation: { label: 'تاريخ التكوين الجيولوجي', description: 'كيف تشكلت رواسب المعادن الأفغانية على مدى ملايين السنين' },
        miningTools: { label: 'أدوات التعدين التاريخية', description: 'تطور أدوات التعدين على مدى 6000 عام' },
        miningSafety: { label: 'سلامة التعدين التاريخية', description: 'ممارسات السلامة التقليدية والتطور الحديث' },
        miningEconomics: { label: 'اقتصاد التعدين التاريخي', description: 'التأثير الاقتصادي للتعدين عبر التاريخ' },
        miningLaw: { label: 'قانون وحوكمة التعدين التاريخية', description: 'تطور لوائح وحوكمة التعدين' },
        womenInMining: { label: 'المرأة في التعدين التاريخي', description: 'دور المرأة في التعدين عبر التاريخ' },
        miningEducation: { label: 'التعليم التعديني التاريخي', description: 'نقل المعرفة التقليدية والتعليم الحديث' },
        productionStatistics: { label: 'إحصائيات إنتاج التعدين', description: 'بيانات الإنتاج التاريخية واتجاهات الإنتاج وحجم التعدين' },
        economicImpact: { label: 'تحليل الأثر الاقتصادي', description: 'المساهمات الاقتصادية وأثر الناتج المحلي والإيرادات من التعدين' },
        tradeVolumes: { label: 'بيانات حجم التجارة', description: 'حجم التجارة التاريخي وإحصائيات التصدير وبيانات السوق' },
        workforceStatistics: { label: 'العمالة والقوى العاملة', description: 'بيانات عمالة التعدين والديموغرافيا والقوى العاملة وإحصائيات العمل' },
        priceTrends: { label: 'اتجاهات الأسعار والأسواق', description: 'أسعار المعادن التاريخية واتجاهات السوق وقيم السلع' },
        geologicalFormations: { label: 'التكوينات الجيولوجية', description: 'البنى الجيولوجية وعمليات التكوين ونشأة المعادن' },
        depositCharacteristics: { label: 'خصائص الرواسب', description: 'أنواع الرواسب ودرجات الخام والاحتياطيات وتصنيف الموارد' },
        miningTechnologyEvolution: { label: 'تطور تقنية التعدين', description: 'التقدم التقني وتطور المعدات والجدول الزمني للابتكار' },
        explorationMethods: { label: 'طرق الاستكشاف', description: 'تقنيات الاستكشاف التاريخية والمسوحات وطرق الاكتشاف' },
        environmentalFactors: { label: 'العوامل البيئية', description: 'الاعتبارات البيئية والتأثيرات وممارسات الاستدامة' },
        miningRegulationsTimeline: { label: 'الجدول الزمني للوائح التعدين', description: 'تطور الإطار التنظيمي والقوانين وهياكل الحوكمة' },
        licensingPermits: { label: 'التراخيص والتصاريح', description: 'أنظمة التراخيص التاريخية وعمليات التصاريح وأطر التفويض' },
        taxationRoyalties: { label: 'الضرائب والإتاوات', description: 'هياكل الضرائب وأنظمة الإتاوات والسياسات المالية' },
        infrastructureDevelopment: { label: 'تطوير البنية التحتية', description: 'بنية تحتية للتعدين والنقل وتطوير المرافق' },
        processingFacilities: { label: 'مرافق المعالجة', description: 'مصانع معالجة المعادن والمصافي والمرافق الصناعية' },
        transportationNetworks: { label: 'شبكات النقل', description: 'طرق التجارة والبنية التحتية للنقل وأنظمة اللوجستيات' },
        marketAnalysis: { label: 'تحليل السوق', description: 'حصة السوق وتحليل المنافسة وهيكل الصناعة' },
        investmentFlows: { label: 'تدفقات الاستثمار', description: 'أنماط الاستثمار التاريخية وتدفقات رأس المال ومصادر التمويل' },
        internationalPartnerships: { label: 'الشراكات الدولية', description: 'التعاون الدولي والمشاريع المشتركة والشراكات' },
        researchStudies: { label: 'البحث والدراسات', description: 'البحث الأكاديمي والدراسات الجيولوجية والمنشورات العلمية' },
        dataAnalytics: { label: 'البيانات والتحليلات', description: 'جمع البيانات وطرق التحليل والتقارير الإحصائية' },
        forecastingProjections: { label: 'التوقعات والتقديرات', description: 'التقديرات المستقبلية وتقديرات الموارد وتوقعات التنمية' },
      },
      investment: {
        title: 'بوابة الاستثمار',
        subtitle: 'معلومات استثمارية شاملة',
        viewComplete: 'عرض بوابة الاستثمار الكاملة',
        clickToExplore: 'انقر على أي خيار لاستكشاف فرص الاستثمار',
        framework: { label: 'إطار الاستثمار', description: 'الهيكل القانوني والتنظيمي' },
        opportunities: { label: 'فرص الاستثمار', description: 'المشاريع المتاحة' },
        partnerships: { label: 'نماذج الشراكة', description: 'المشاريع المشتركة والاتفاقيات' },
        incentives: { label: 'الحوافز المالية', description: 'الفوائد الضريبية والحوافز' },
        riskManagement: { label: 'إدارة المخاطر', description: 'حماية الاستثمار' },
        partners: { label: 'الشركاء الدوليون', description: 'الشراكات العالمية' },
        process: { label: 'عملية الاستثمار', description: 'دليل خطوة بخطوة' },
        statistics: { label: 'إحصائيات الاستثمار', description: 'بيانات واتجاهات السوق' },
      },
      contact: {
        title: 'بوابة الاتصال',
        subtitle: 'تواصل معنا',
        viewSection: 'عرض قسم الاتصال',
        clickToExplore: 'انقر على أي خيار للتواصل',
        form: { label: 'نموذج الاتصال', description: 'إرسال استفسار' },
        offices: { label: 'مواقع المكاتب', description: 'العثور على مكاتبنا' },
        email: { label: 'اتصال البريد الإلكتروني', description: 'عناوين البريد الإلكتروني' },
        phone: { label: 'دليل الهاتف', description: 'أرقام الاتصال' },
        departments: { label: 'جهات اتصال الأقسام', description: 'حسب القسم' },
        international: { label: 'المكاتب الدولية', description: 'جهات الاتصال العالمية' },
        media: { label: 'استفسارات وسائل الإعلام', description: 'الصحافة ووسائل الإعلام' },
        partnerships: { label: 'استفسارات الشراكة', description: 'الشراكات التجارية' },
      },
    },
    detailPage: {
      backToHome: 'بازگشت به خانه',
      downloadReport: 'دانلود گزارش',
      byTheNumbers: 'با اعداد',
      comprehensiveOverview: 'بررسی جامع',
      keyHighlights: 'نقاط کلیدی',
      section: 'بخش',
      keyMetrics: 'معیارهای کلیدی',
      strategicOverview: 'بررسی و تحلیل استراتژیک',
      mineralDetail: {
        downloadLabel: 'دانلود خلاصه سرمایه‌گذاری',
        overviewTitle: 'تحلیل منابع و ارزیابی استراتژیک',
        statsLabel: 'معیارهای منابع',
        highlights: {
          worldClass: 'مقیاس و کیفیت منابع در سطح جهانی',
          exceptionalValue: 'پتانسیل ارزش اقتصادی استثنایی',
          comprehensiveFramework: 'چارچوب توسعه جامع',
          sustainableCommitment: 'تعهد به عملیات پایدار',
        },
        sections: {
          inDepthAnalysis: 'تحلیل عمیق',
          technicalDetails: 'جزئیات فنی',
          developmentRoadmap: 'نقشه راه توسعه',
          projectTimeline: 'جدول زمانی پروژه',
        },
      },
      timelineDetail: {
        downloadLabel: 'تحميل تقرير الجدول الزمني',
        overviewTitle: 'السياق التاريخي والتحليل الاستراتيجي',
        statsLabel: 'إحصائيات الجدول الزمني',
        errorLoading: 'خطأ في تحميل الجدول الزمني',
        unableToLoad: 'تعذر تحميل بيانات الجدول الزمني لـ:',
        highlights: {
          richHeritage: 'تراث تعدين غني لأكثر من 6000 عام',
          comprehensiveRoadmap: 'خارطة طريق تنموية شاملة',
          strategicMilestones: 'معالم وإنجازات استراتيجية',
          sustainableVision: 'رؤية للنمو المستدام',
        },
        sections: {
          historicalRecord: 'السجل التاريخي',
          detailedTimeline: 'جدول زمني تفصيلي',
          achievements: 'الإنجازات',
          keyMilestones: 'معالم رئيسية',
          dataAnalysis: 'تحليل البيانات',
          historicalDataVisualizations: 'تصور البيانات التاريخية',
          comparativeAnalysis: 'التحليل المقارن',
          dataTablesComparisons: 'جداول البيانات والمقارنات',
          comprehensiveInformation: 'معلومات شاملة',
          keyInformationCategories: 'فئات المعلومات الرئيسية',
          impact: 'التأثير:',
        },
      },
      investmentDetail: {
        downloadLabel: 'دانلود راهنمای سرمایه‌گذاری',
        overviewTitle: 'استراتژی و چارچوب سرمایه‌گذاری',
        statsLabel: 'آمار سرمایه‌گذاری',
        highlights: {
          investorFriendly: 'چارچوب قانونی دوستدار سرمایه‌گذار',
          transparentProcedures: 'رویه‌های شفاف صدور مجوز',
          arbitrationAccess: 'دسترسی به داوری بین‌المللی',
          environmentalStandards: 'استانداردهای جامع محیط زیستی',
        },
        sections: {
          investmentProcess: 'فرآیند سرمایه‌گذاری',
          stepsToInvestment: 'مراحل سرمایه‌گذاری',
          investmentBenefits: 'مزایای سرمایه‌گذاری',
          whyInvest: 'چرا در افغانستان سرمایه‌گذاری کنیم',
        },
      },
      operationsDetail: {
        downloadLabel: 'دانلود راهنمای عملیات',
        overviewTitle: 'تعالی عملیاتی و چارچوب',
        statsLabel: 'آمار عملیات',
        highlights: {
          worldClassStandards: 'استانداردهای عملیاتی در سطح جهانی',
          advancedTechnology: 'ادغام فناوری پیشرفته',
          safetyProtocols: 'پروتکل‌های جامع ایمنی',
          environmentalResponsibility: 'مسئولیت محیط زیستی',
        },
        sections: {
          operationalProcesses: 'فرآیندهای عملیاتی',
          processFramework: 'چارچوب فرآیند',
          operationalBenefits: 'مزایای عملیاتی',
          strategicAdvantages: 'مزایای استراتژیک',
        },
      },
    },
    contactDetail: {
      downloadLabel: 'تحميل دليل الاتصال',
      overviewTitle: 'التواصل والمشاركة',
      statsLabel: 'مقاييس الخدمة',
      highlights: {
        multipleChannels: 'قنوات اتصال متعددة',
        responsiveService: 'معايير خدمة متجاوبة',
        multiLanguage: 'دعم متعدد اللغات',
        secureCommunications: 'اتصالات آمنة',
      },
      sections: {
        contactChannels: 'قنوات الاتصال',
        howToReach: 'كيفية الوصول إلينا',
        departments: 'الأقسام',
        ministryDepartments: 'أقسام الوزارة',
      },
    },
    notFound: {
      title: '404',
      message: 'عذراً! الصفحة غير موجودة',
      returnHome: 'العودة إلى الصفحة الرئيسية',
    },
    mapSection: {
      provincesLabel: '34 محافظة',
      title: 'خريطة الموارد التفاعلية',
      description: 'استكشف ثروة أفغانستان المعدنية عبر جميع المحافظات. مرر فوق كل منطقة لاكتشاف الودائع الرئيسية والقيم المقدرة وفرص الاستثمار.',
      stats: {
        provinces: 'المحافظات',
        knownDeposits: 'الودائع المعروفة',
        totalValue: 'القيمة الإجمالية',
        mineralTypes: 'أنواع المعادن',
      },
      legendHover: 'مرر فوق المحافظات',
      legendDeposits: 'الودائع المعدنية',
    },
    imageGallery: {
      clickToView: 'انقر على أي صورة لعرضها في وضع ملء الشاشة',
    },
    footer: {
      quote: 'قوة الأمة لا تُقاس بما تتحمله، بل بما تبني. هذا هو الأساس. هذا هو الإطار. هذا هو أفغانستان.',
      journey: 'الرحلة من المرونة إلى النهضة ليست سباقًا سريعًا بل ماراثونًا - لا تُقاس بالأيام بل بالأجيال. وتبدأ هنا، الآن، بقصد.',
      copyright: '© 2024 البرنامج الوطني للإصلاح الاقتصادي لأفغانستان',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      contact: 'اتصل',
    },
    mineralsIndex: {
      title: 'ثروة أفغانستان المعدنية',
      description: 'استكشف أكثر من 150 نوعًا من المعادن عبر 34 محافظة، تمثل واحدة من أهم الهبات المعدنية غير المستغلة في العالم بقيمة تزيد عن 30 تريليون دولار.',
      searchPlaceholder: 'البحث عن المعادن أو الرواسب أو المواقع...',
    },
    investmentSectors: {
      badge: '50+ صناعة',
      title: 'استكشف قطاعات الاستثمار',
      searchPlaceholder: 'البحث عن القطاعات أو الصناعات أو الكلمات الرئيسية...',
    },
    vision2050: {
      learnMore: 'اعرف المزيد',
    },
    mineralHero: {
      selectCategory: 'حدد فئة للاستكشاف',
      menuCategories: heroMenuTranslations.ar,
    },
    mineralsMegaMenu: {
      title: 'بوابة معادن أفغانستان',
      subtitle: 'قاعدة بيانات شاملة للموارد المعدنية',
      viewComplete: 'عرض السجل الكامل',
      clickToExplore: 'انقر على أي معدن لاستكشاف التفاصيل',
      strategicMetals: {
        copper: {
          title: 'النحاس',
          items: {
            mesAynak: 'وديعة مس عينك',
            hajigak: 'مجمع حاجيگك للنحاس والحديد',
            balkhab: 'وديعة بلخاب',
            processing: 'معالجة النحاس',
            exports: 'صادرات النحاس',
            smelting: 'عمليات صهر النحاس',
            logar: 'ودائع محافظة لوغر',
            refining: 'مرافق تكرير النحاس',
          },
        },
        lithium: {
          title: 'الليثيوم',
          items: {
            ghazni: 'بيغماتيت غزني',
            nuristan: 'ودائع نورستان',
            batteryGrade: 'معالجة درجة البطارية',
            evSupply: 'سلسلة توريد المركبات الكهربائية',
            research: 'مراكز البحوث',
            carbonate: 'إنتاج كربونات الليثيوم',
            spodumene: 'تركيزات سبودومين',
            batteryMaterials: 'تصنيع مواد البطارية',
          },
        },
        ironOre: {
          title: 'خام الحديد',
          items: {
            hajigak: 'جبل حاجيگك للحديد',
            steelProduction: 'خطط إنتاج الصلب',
            magnetite: 'جودة الماغنتيت',
            infrastructure: 'صلب البنية التحتية',
            employment: 'خلق فرص العمل',
            beneficiation: 'إثراء خام الحديد',
            pelletization: 'مصانع التكتل',
            bamyan: 'ودائع محافظة باميان',
          },
        },
        leadZinc: {
          title: 'الرصاص والزنك',
          items: {
            aynak: 'ودائع عينك للرصاص والزنك',
            zincConcentrate: 'إنتاج مركز الزنك',
            smelting: 'عمليات صهر الرصاص',
            batteryMaterials: 'مواد تصنيع البطاريات',
          },
        },
        cobaltNickel: {
          title: 'الكوبالت والنيكل',
          items: {
            cobalt: 'ودائع الكوبالت',
            nickel: 'موارد لاتريت النيكل',
            alloys: 'سبائك معادن البطارية',
            evSupply: 'سلسلة توريد بطاريات المركبات الكهربائية',
          },
        },
        aluminum: {
          title: 'الألومنيوم والمعادن الخفيفة',
          items: {
            bauxite: 'ودائع البوكسيت',
            alumina: 'إنتاج الألومينا',
            cryolite: 'ودائع الكريوليت',
          },
        },
        strategicHardMetals: {
          title: 'المعادن الاستراتيجية والصلبة',
          items: {
            tungsten: 'ودائع التنغستن',
            molybdenum: 'ودائع الموليبدينوم',
            vanadium: 'ودائع الفاناديوم',
            titaniumRutile: 'الروتيل التيتانيوم',
            titaniumIlmenite: 'الإلمينيت التيتانيوم',
            tin: 'ودائع القصدير',
            antimony: 'ودائع الأنتيمون',
            zirconium: 'ودائع الزركونيوم',
            tantalum: 'ودائع التانتالوم',
            yttrium: 'ودائع الإيتريوم',
            scandium: 'ودائع السكنديوم',
            cerium: 'ودائع السيريوم',
            gadolinium: 'ودائع الجادولينيوم',
          },
        },
        energyFuel: {
          title: 'الطاقة والمعادن الوقودية',
          items: {
            uranium: 'ودائع اليورانيوم',
            thorium: 'ودائع الثوريوم',
            lignite: 'ودائع الليغنيت',
            bituminousCoal: 'أنواع الفحم البيتوميني',
          },
        },
      },
      preciousResources: {
        gemstones: {
          title: 'الأحجار الكريمة',
          items: {
            panjshirEmeralds: 'زمردات بنجشير',
            lapisLazuli: 'لازورد بدخشان',
            jegdalekRubies: 'ياقوت جگدالک',
            sapphires: 'ياقوت أزرق هندو كوش',
            tourmaline: 'تورمالين نورستان',
            aquamarine: 'أكوامارين كونار',
            cutting: 'قطع وصقل الأحجار الكريمة',
            certification: 'شهادة الأحجار الكريمة',
            trade: 'التجارة الدولية للأحجار الكريمة',
            kunzite: 'كونزيت وسبودومين',
            garnet: 'ودائع الجارنت',
            peridot: 'موارد البيريدوت',
          },
        },
        gold: {
          title: 'الذهب',
          items: {
            badakhshan: 'حزام ذهب بدخشان',
            takhar: 'ودائع تخار',
            refining: 'تكرير الذهب',
            artisanal: 'التعدين الحرفي',
            bullion: 'إنتاج السبائك',
            processing: 'مصانع معالجة الذهب',
            exports: 'عمليات تصدير الذهب',
            placer: 'ودائع الذهب البلاسر',
            lode: 'عروق الذهب اللود',
          },
        },
        rareEarth: {
          title: 'العناصر الأرضية النادرة',
          items: {
            helmand: 'ودائع العناصر الأرضية النادرة هلمند',
            technology: 'معادن التكنولوجيا',
            neodymium: 'النيوديميوم والبراسيوديميوم',
            globalSupply: 'تأثير العرض العالمي',
            research: 'شراكات البحوث',
            concentrate: 'معالجة مركز العناصر الأرضية النادرة',
            dysprosium: 'الديسبروسيوم والتربيوم',
            separation: 'تقنية فصل العناصر الأرضية النادرة',
          },
        },
        silver: {
          title: 'الفضة',
          items: {
            deposits: 'ودائع الفضة',
            refining: 'تكرير الفضة',
            leadOres: 'خامات الفضة والرصاص',
            industrial: 'تطبيقات الفضة الصناعية',
          },
        },
      },
      industrialMinerals: {
        chromite: {
          title: 'الكروميت',
          items: {
            reserves: 'احتياطيات الكروميت',
            exports: 'عمليات التصدير',
            steel: 'إنتاج الفولاذ المقاوم للصدأ',
            mining: 'عمليات تعدين الكروميت',
            ferrochrome: 'إنتاج الفيروكروم',
            logar: 'ودائع كروميت لوغر',
          },
        },
        marble: {
          title: 'الرخام',
          items: {
            white: 'رخام أبيض ممتاز',
            herat: 'محاجر هرات',
            architectural: 'حجر معماري',
            processing: 'مرافق معالجة الرخام',
            exports: 'عمليات تصدير الرخام',
            varieties: '75+ أنواع الألوان',
            trade: 'التجارة الدولية للحجر',
          },
        },
        coal: {
          title: 'الفحم',
          items: {
            basins: 'أحواض الفحم',
            underground: 'العمليات تحت الأرض',
            baghlan: 'محافظة بغلان',
            metallurgical: 'فحم معدني',
            thermal: 'احتياطيات الفحم الحراري',
            processing: 'مصانع معالجة الفحم',
            energy: 'توليد الطاقة',
          },
        },
        talcBarite: {
          title: 'التلك والباريت',
          items: {
            talc: 'تلك عالي النقاء',
            drilling: 'باريت الحفر',
            salt: 'ودائع الملح',
            talcProcessing: 'معالجة التلك',
            bariteConcentrates: 'تركيزات الباريت',
            industrial: 'التطبيقات الصناعية',
          },
        },
        gypsumLimestone: {
          title: 'الجبس والحجر الجيري',
          items: {
            gypsum: 'ودائع الجبس',
            limestone: 'محاجر الحجر الجيري',
            cement: 'إنتاج الأسمنت',
            construction: 'مواد البناء',
          },
        },
        clayKaolin: {
          title: 'الطين والكاولين',
          items: {
            kaolin: 'ودائع الكاولين',
            ceramic: 'موارد الطين السيراميكي',
            pottery: 'تصنيع الفخار والبلاط',
            paper: 'تطبيقات صناعة الورق',
            refractory: 'المواد الحرارية',
            paint: 'صناعة الطلاء والطلاء',
            pharmaceutical: 'التطبيقات الصيدلانية',
            cosmetic: 'كاولين درجة التجميل',
          },
        },
        sulfurPyrite: {
          title: 'الكبريت والبيريت',
          items: {
            sulfur: 'ودائع الكبريت',
            pyrite: 'موارد البيريت',
            fertilizer: 'إنتاج الأسمدة',
            chemical: 'الصناعة الكيميائية',
            acid: 'إنتاج حمض الكبريتيك',
            mining: 'التعدين والاستخراج',
            agricultural: 'التطبيقات الزراعية',
            processing: 'معالجة البيريت',
          },
        },
        micaFeldspar: {
          title: 'الميكا والفلسبار',
          items: {
            mica: 'ودائع الميكا',
            feldspar: 'موارد الفلسبار',
            electronics: 'صناعة الإلكترونيات',
            glass: 'تصنيع الزجاج',
            sheets: 'إنتاج ألواح الميكا',
            ceramic: 'السيراميك والفخار',
            insulation: 'مواد العزل',
            abrasive: 'التطبيقات الكاشطة',
          },
        },
        graphiteCarbon: {
          title: 'الجرافيت والكربون',
          items: {
            graphite: 'ودائع الجرافيت',
            battery: 'مواد أنود البطارية',
            steel: 'إنتاج الصلب',
            lubricant: 'تطبيقات التشحيم',
            refractory: 'المنتجات الحرارية',
            carbonFiber: 'مواد ألياف الكربون',
          },
        },
        phosphatePotash: {
          title: 'الفوسفات والبوتاس',
          items: {
            phosphate: 'ودائع الفوسفات',
            fertilizer: 'تصنيع الأسمدة',
            agricultural: 'المغذيات الزراعية',
            food: 'تطبيقات صناعة الأغذية',
            potash: 'موارد البوتاس',
            chemical: 'المعالجة الكيميائية',
          },
        },
        quartzSilica: {
          title: 'الكوارتز والسيليكا',
          items: {
            quartz: 'ودائع الكوارتز',
            silica: 'موارد رمل السيليكا',
            glass: 'إنتاج الزجاج',
            semiconductor: 'صناعة أشباه الموصلات',
            foundry: 'تطبيقات السباكة',
            filtration: 'ترشيح المياه',
          },
        },
        refractories: {
          title: 'المواد الحرارية والمعادن الصناعية',
          items: {
            magnesite: 'ودائع المغنيسيت',
            bentonite: 'ودائع البنتونيت',
            pyrophyllite: 'ودائع البيروفيلايت',
            asbestos: 'ودائع الأسبستوس',
            ballClay: 'ودائع الطين الكروي',
            kaolinVariants: 'أصناف الكاولين',
            diatomite: 'ودائع الدياتوميت',
          },
        },
        dimensionStones: {
          title: 'أحجار البعد والديكور',
          items: {
            granite: 'ودائع الجرانيت',
            sandstone: 'ودائع الحجر الرملي',
            travertine: 'ودائع الترافرتين',
            soapstone: 'ودائع صابون الحجر',
            quartzite: 'ودائع الكوارتزيت',
            dioriteGabbro: 'الديوريت / الجابرو',
          },
        },
      },
    },
    // (detailPage defined above)
    provinceDetail: {
      resourceProfile: 'ملف الموارد الإقليمية',
      provincialStatistics: 'الإحصائيات الإقليمية',
      downloadBrief: 'تحميل ملخص الاستثمار',
      mineralResources: 'الموارد المعدنية',
      keyDeposits: 'الودائع المعدنية الرئيسية',
      opportunities: 'الفرص',
      investmentOpportunities: 'فرص الاستثمار',
      developmentTimeline: 'الجدول الزمني للتنمية',
      keyMilestones: 'المعالم الرئيسية',
      highlights: {
        richPotential: 'إمكانات غنية للموارد المعدنية',
        strategicOpportunities: 'فرص التنمية الاستراتيجية',
        investmentReady: 'مشاريع جاهزة للاستثمار',
        infrastructurePlans: 'خطط تطوير البنية التحتية',
      },
    },
    hero: {
      tagline: 'من الشعب الأفغاني، للشعب الأفغاني، وبواسطة الشعب الأفغاني.',
      title: 'البرنامج الوطني للإصلاح الاقتصادي لأفغانستان',
      subtitle: 'مستقبل الأمة لا يُكتب بلغة الصدفة بل في هندسة النية. وهذا الاتحاد يقف كتلك النية — إطار حي مبني لنقل أفغانستان من المرونة إلى النهضة.',
      cta: 'استكشف فرص الاستثمار',
    },
    stats: {
      mineralReserves: 'الاحتياطيات المعدنية',
      knownDeposits: 'الودائع المعروفة',
      mineralTypes: 'أنواع المعادن',
      provinces: 'المحافظات',
      estimatedValue: 'القيمة الإجمالية المقدرة',
      acrossProvinces: 'في جميع المحافظات',
      criticalStrategic: 'حرجة واستراتيجية',
      resourceRich: 'المناطق الغنية بالموارد',
    },
    sectors: {
      copper: 'النحاس',
      lithium: 'الليثيوم',
      gold: 'الذهب',
      gemstones: 'الأحجار الكريمة',
      iron: 'خام الحديد',
      rareEarth: 'العناصر الأرضية النادرة',
      chromite: 'الكروميت',
      marble: 'الرخام',
      coal: 'الفحم',
      silver: 'الفضة',
      tungsten: 'التنغستن',
      uranium: 'اليورانيوم',
      salt: 'الملح',
      gypsum: 'الجبس',
      talc: 'التلك',
      lead: 'الرصاص',
      zinc: 'الزنك',
      limestone: 'الحجر الجيري',
      naturalGas: 'الغاز الطبيعي',
      niobium: 'النيوبيوم',
      tantalum: 'التانتالوم',
      tourmaline: 'التورمالين',
      aquamarine: 'الأكوامارين',
    },
    contact: {
      title: 'استفسار الاستثمار',
      subtitle: 'تواصل مع فريق الاتصال في NERPA',
      addressLabel: 'العنوان',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      addressValue: 'لندن، المملكة المتحدة | كابل، أفغانستان',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      organization: 'المنظمة',
      sector: 'القطاع المهتم به',
      message: 'الرسالة',
      submit: 'إرسال الاستفسار',
      submitting: 'جاري الإرسال...',
      success: 'تم إرسال استفسارك بنجاح. سيتصل بك فريقنا قريباً.',
      error: 'حدث خطأ أثناء إرسال استفسارك. يرجى المحاولة مرة أخرى.',
      successTitle: 'نجاح',
      errorTitle: 'خطأ',
      submitAnother: 'إرسال استفسار آخر',
      selectSector: 'اختر قطاعاً',
      namePlaceholder: 'أدخل اسمك الكامل',
      emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
      organizationPlaceholder: 'أدخل اسم منظمتك',
      messagePlaceholder: 'اوصف اهتمامك بالاستثمار أو استفسارك...',
    },
    // (footer defined above with full fields)
    common: {
      learnMore: 'اعرف المزيد',
      viewDetails: 'عرض التفاصيل',
      explore: 'استكشف',
      readMore: 'اقرأ المزيد',
      trillion: 'تريليون',
      billion: 'مليار',
      million: 'مليون',
    },
   expanded: {
     megaReserves: '30 تريليون دولار في الاحتياطيات المعدنية',
     globalLeader: 'رائد التعدين العالمي',
     economicTransformation: 'التحول الاقتصادي',
     sustainableFuture: 'المستقبل المستدام',
     strategicPartnerships: 'الشراكات الاستراتيجية العالمية',
     technologyInnovation: 'التكنولوجيا والابتكار',
     communityProsperity: 'ازدهار المجتمع',
   },
   provinces: {
     title: 'محافظات أفغانستان',
     subtitle: '34 منطقة غنية بالموارد',
     explore: 'استكشف المحافظات',
     mineralResources: 'الموارد المعدنية',
     investmentOpportunities: 'فرص الاستثمار',
     viewDetails: 'عرض تفاصيل المحافظة',
   },
   investment: {
     framework: 'إطار الاستثمار',
     opportunities: 'فرص الاستثمار',
     partnerships: 'نماذج الشراكة',
     incentives: 'الحوافز المالية',
     process: 'عملية الاستثمار',
   },
   timeline: {
     historical: 'الجدول الزمني التاريخي',
     roadmap: 'خارطة طريق التنمية',
     milestones: 'معالم المشروع',
     vision2030: 'رؤية 2026-2050',
   },
    // (detailPage defined above with full fields)
   footerMegaMenu: {
     sustainability: 'الاستدامة',
     resources: 'الموارد',
     about: 'حول',
     viewAllProvinces: 'عرض جميع المحافظات الـ34 →',
     environmentalProtection: 'حماية البيئة',
     communityDevelopment: 'تنمية المجتمع',
     healthSafety: 'الصحة والسلامة',
     workforceDevelopment: 'تنمية القوى العاملة',
     landRestoration: 'استعادة الأراضي',
     waterStewardship: 'إدارة المياه',
     reports: 'التقارير السنوية',
     geologicalData: 'البيانات الجيولوجية',
     investmentGuides: 'أدلة الاستثمار',
     maps: 'الخرائط التفاعلية',
     statistics: 'الإحصائيات',
     publications: 'المنشورات',
     researchPapers: 'الأوراق البحثية',
     downloads: 'التحميلات',
     quickLinks: 'روابط سريعة',
     overview: 'نظرة عامة',
     minerals: 'المعادن',
     operations: 'العمليات',
     investment: 'الاستثمار',
     processing: 'المعالجة',
     smelting: 'الصهر',
     research: 'البحث',
     trade: 'التجارة',
     framework: 'الإطار',
     opportunities: 'الفرص',
     partnerships: 'الشراكات',
     process: 'العملية',
     environmental: 'البيئية',
     community: 'المجتمع',
     safety: 'السلامة',
     workforce: 'القوى العاملة',
     legal: 'القانونية',
     cookies: 'ملفات تعريف الارتباط',
     accessibility: 'إمكانية الوصول',
     aboutUs: 'من نحن',
     mission: 'المهمة',
     vision: 'الرؤية',
     team: 'فريقنا',
     partners: 'الشركاء',
     careers: 'الوظائف',
     news: 'الأخبار والتحديثات',
     faq: 'الأسئلة الشائعة',
     technology: 'التكنولوجيا',
     digitalMining: 'التعدين الرقمي',
     aiAutomation: 'الذكاء الاصطناعي والأتمتة',
     dataAnalytics: 'تحليل البيانات',
     remoteSensing: 'الاستشعار عن بعد',
     blockchain: 'تتبع البلوك تشين',
     iot: 'إنترنت الأشياء وأجهزة الاستشعار',
     robotics: 'روبوتات التعدين',
     innovation: 'مركز الابتكار',
     education: 'التعليم',
     miningUniversity: 'جامعة التعدين',
     trainingPrograms: 'برامج التدريب',
     scholarships: 'المنح الدراسية',
     researchCenters: 'مراكز البحوث',
     onlineCourses: 'الدورات عبر الإنترنت',
     certifications: 'الشهادات',
     workshops: 'ورش العمل',
     studentResources: 'موارد الطلاب',
     media: 'وسائل الإعلام',
     pressReleases: 'البيانات الصحفية',
     newsArticles: 'المقالات الإخبارية',
     photoGallery: 'معرض الصور',
     videoLibrary: 'مكتبة الفيديو',
     socialMedia: 'وسائل التواصل الاجتماعي',
     mediaKit: 'مجموعة الوسائط',
     events: 'الأحداث',
     subscribe: 'الاشتراك',
     support: 'الدعم',
     helpCenter: 'مركز المساعدة',
     documentation: 'التوثيق',
     apiDocs: 'وثائق API',
     tutorials: 'الدروس التعليمية',
     bugReport: 'الإبلاغ عن خطأ',
     featureRequest: 'طلب ميزة',
     contactSupport: 'اتصل بالدعم',
     becomePartner: 'كن شريكاً',
     currentPartners: 'الشركاء الحاليون',
     partnerPrograms: 'برامج الشراكة',
     jointVentures: 'المشاريع المشتركة',
     supplierNetwork: 'شبكة الموردين',
     technologyPartners: 'شركاء التكنولوجيا',
     academicPartners: 'الشركاء الأكاديميون',
     ngoPartners: 'شركاء المنظمات غير الحكومية',
     compliance: 'الامتثال',
     regulations: 'اللوائح',
     environmentalCompliance: 'الامتثال البيئي',
     safetyStandards: 'معايير السلامة',
     laborStandards: 'معايير العمل',
     audits: 'التدقيق والتقارير',
     codeOfConduct: 'مدونة السلوك',
     whistleblower: 'سياسة الإبلاغ',
     jobOpenings: 'الوظائف الشاغرة',
     internships: 'التدريب',
     benefits: 'المزايا',
     culture: 'ثقافة الشركة',
     diversity: 'التنوع والشمول',
     applyNow: 'تقدم الآن',
     employeePortal: 'بوابة الموظفين',
     referralProgram: 'برنامج الإحالة',
     geological: 'الجيولوجية',
     exploration: 'الاستكشاف',
     incentives: 'الحوافز',
     disclaimer: 'إخلاء المسؤولية',
     connect: 'اتصل',
     email: 'البريد الإلكتروني',
     phone: 'الهاتف',
     offices: 'المكاتب',
   },
   statsLabels: {
     mineralReserves: 'الاحتياطيات المعدنية',
     knownDeposits: 'الودائع المعروفة',
     mineralTypes: 'أنواع المعادن',
     provinces: 'المحافظات',
     metricTons: 'أطنان مترية',
     value: 'القيمة',
     majorDeposits: 'الودائع الكبرى',
     target: 'الهدف',
     globalRank: 'الترتيب العالمي',
     globalShare: 'الحصة العالمية',
     gemstoneRegions: 'مناطق الأحجار الكريمة',
     types: 'الأنواع',
     years: 'سنوات',
     annual: 'سنوي',
     ironOreReserves: 'احتياطيات خام الحديد',
     jobs: 'وظائف',
     goldReserves: 'احتياطيات الذهب',
     goldBelts: 'أحزمة الذهب',
     artisanalMiners: 'عمال المناجم الحرفيين',
     reeElements: 'عناصر REE',
     estimatedValue: 'القيمة المقدرة',
     underExploration: 'قيد الاستكشاف',
     supplyImpact: 'تأثير العرض',
     provenReserves: 'احتياطيات مثبتة',
     deposits: 'الودائع',
     primaryUse: 'الاستخدام الأساسي',
     cubicMeters: 'أمتار مكعبة',
     colors: 'الألوان',
     annualPotential: 'الإمكانات السنوية',
     qualityGrade: 'درجة الجودة',
     coalReserves: 'احتياطيات الفحم',
     highQuality: 'جودة عالية',
     majorBasins: 'الأحواض الكبرى',
     strategicRole: 'الدور الاستراتيجي',
     yearlyPotential: 'الإمكانات السنوية',
   },
   descriptions: {
     estimatedTotalValue: 'القيمة الإجمالية المقدرة',
     acrossAllProvinces: 'في جميع المحافظات',
     criticalAndStrategic: 'حرجة واستراتيجية',
     resourceRichRegions: 'المناطق الغنية بالموارد',
     estimatedReserves: 'احتياطيات مقدرة',
     currentMarketEstimate: 'تقدير السوق الحالي',
     activeExplorationSites: 'مواقع الاستكشاف النشطة',
     fullProductionCapacity: 'القدرة الإنتاجية الكاملة',
     largestReserves: 'أكبر الاحتياطيات',
     strategicImportance: 'الأهمية الاستراتيجية',
     potentialContribution: 'المساهمة المحتملة',
     preciousSemiPrecious: 'ثمينة وشبه ثمينة',
     miningHeritage: 'التراث التعديني',
     exportPotential: 'إمكانات التصدير',
     estimatedWorth: 'القيمة المقدرة',
     identifiedDeposits: 'الودائع المحددة',
     employmentPotential: 'إمكانات التوظيف',
     atCurrentPrices: 'بالأسعار الحالية',
     majorFormations: 'التكوينات الكبرى',
     currentlyActive: 'نشط حالياً',
     identifiedSpecies: 'الأنواع المحددة',
     strategicResources: 'الموارد الاستراتيجية',
     potentialDiversification: 'التنويع المحتمل',
     exportPotentialValue: 'إمكانات التصدير',
     acrossProvinces: 'في المحافظات',
     industrialApplication: 'التطبيق الصناعي',
     uniqueVarieties: 'أصناف فريدة',
     exportRevenue: 'إيرادات التصدير',
     internationalStandard: 'المعيار الدولي',
     metallurgicalGrade: 'درجة المعادن',
     domesticSupply: 'العرض المحلي',
   },
   indexPage: {
     hero: {
       title: 'التعدين والمعادن',
       subtitle: 'قصة سيادة الموارد',
       readMore: 'اقرأ المزيد',
     },
     overview: {
       title: 'سيادة الموارد',
       subtitle: 'الأساس',
       description: 'تمتلك أفغانستان واحدة من أهم الاحتياطيات المعدنية غير المستغلة في العالم، بقيمة تزيد عن 30 تريليون دولار. هذه الثروة الاستثنائية من الموارد الطبيعية - من الليثيوم والنحاس إلى العناصر الأرضية النادرة والأحجار الكريمة - تمثل فرصة غير مسبوقة للازدهار الوطني والتنمية الإقليمية والتحول الاقتصادي الكامل لآسيا الوسطى وما بعدها.',
       statsTitle: 'نظرة عامة على الثروة المعدنية',
       statsSubtitle: 'بالأرقام',
     },
     geological: {
       title: 'الإطار الجيولوجي',
       subtitle: 'إرث الزمن العميق',
       description: 'تنبع ثروة أفغانستان المعدنية الاستثنائية من موقعها الفريد عند تقاطع ثلاث صفائح تكتونية رئيسية. على مدى مئات الملايين من السنين، خلقت هذه القوى الجيولوجية المناطق المعدنية والأحزمة المتحولة والمجمعات المتطفلة التي تستضيف الآن رواسب من الطراز العالمي.',
       quote: 'تمثل الثروة المعدنية تحت التربة الأفغانية ليس فقط فرصة اقتصادية، بل الأساس لأمة مزدهرة ومكتفية ذاتياً.',
     },
     nationalStrategy: {
       title: 'الاستراتيجية الوطنية',
       subtitle: 'الرؤية الاستراتيجية',
       description: 'توجه استراتيجية معدنية وطنية شاملة التنمية المستدامة، متوازنة بين النمو الاقتصادي وإدارة البيئة وفائدة المجتمع. يضمن هذا الإطار أن تخدم الثروة المعدنية جميع الأفغان مع جذب الاستثمار الدولي المسؤول.',
     },
     economicImpact: {
       title: 'التحول الاقتصادي',
       subtitle: 'الازدهار الوطني',
       description: 'سيحول تطوير القطاع المعدني في أفغانستان الاقتصاد الوطني، مما يخلق مئات الآلاف من الوظائف ويولد مليارات من عائدات التصدير ويبني الأساس للتنمية الصناعية والاستقلال الاقتصادي.',
     },
     copper: {
       title: 'امتياز النحاس',
       subtitle: 'المعدن الاستراتيجي',
       description: 'تحتل احتياطيات النحاس في أفغانستان مرتبة بين أكبر الرواسب غير المستغلة في العالم، حيث تتجاوز إجمالي الاحتياطيات المقدرة 600 مليون طن متري بقيمة $8T. يحتوي رواسب مس عينك وحده على ما يقدر بنحو 125 مليون طن من النحاس، مع أكثر من 50 رواسب رئيسية عبر عدة محافظات مما يخلق أساساً لا مثيل له للتنمية الصناعية والتحول الاقتصادي.',
       statsTitle: 'موارد النحاس',
       statsSubtitle: 'تحليل الرواسب',
       detailTitle: 'تطوير النحاس',
       detailSubtitle: 'المشاريع والبنية التحتية',
       detailDescription: 'تطوير شامل لقطاع النحاس من الاستكشاف إلى المعالجة، مع التركيز على الاستخراج المستدام وإضافة القيمة.',
       processingTitle: 'معالجة النحاس',
       processingSubtitle: 'إضافة القيمة',
       processingDescription: 'ستحول مرافق معالجة النحاس الحديثة الخام الخام إلى منتجات نحاس مكررة، مما يلتقط القيمة محلياً ويخلق عمالة ماهرة في عمليات الصهر والتكرير والتصنيع.',
     },
     lithium: {
       title: 'مستقبل الليثيوم',
       subtitle: 'انتقال الطاقة',
       description: 'مع انتقال العالم إلى المركبات الكهربائية وتخزين الطاقة المتجددة، تضع احتياطيات الليثيوم الضخمة في أفغانستان - المقدرة بـ 215 مليون طن متري بقيمة 8 تريليون دولار - الأمة كقائد عالمي لا جدال فيه في هذا المعدن الحرج. مع 45٪ من رواسب الليثيوم المعروفة في العالم، ستعرف أفغانستان مستقبل ثورة الطاقة النظيفة.',
       statsTitle: 'إمكانات الليثيوم',
       statsSubtitle: 'الأهمية العالمية',
       detailTitle: 'استراتيجية الليثيوم',
       detailSubtitle: 'إطار التطوير',
       detailDescription: 'التطوير الاستراتيجي لموارد الليثيوم لتلبية الطلب العالمي على بطاريات المركبات الكهربائية وأنظمة تخزين الطاقة.',
       geologyTitle: 'جيولوجيا البيغماتيت',
       geologySubtitle: 'تشكيلات الليثيوم',
       geologyDescription: 'تحتوي البيغماتيت الحاملة للليثيوم في أفغانستان، التي تشكلت من خلال التبلور البطيء للصهارة الجرانيتية، على تركيزات استثنائية من السبودومين والليبدوليت - معادن خام الليثيوم الأساسية التي تشغل انتقال الطاقة النظيفة العالمي.',
       quote: 'يمكن لرواسب الليثيوم في أفغانستان أن تشغل الانتقال العالمي إلى الطاقة النظيفة، مما يضع الأمة كشريك أساسي في مكافحة تغير المناخ.',
     },
     gold: {
       title: 'إرث الذهب',
       subtitle: 'المعادن الثمينة',
       description: 'تمثل احتياطيات الذهب في أفغانستان البالغة 27,000 طن متري، المتناثرة عبر 45 حزام ذهبي رئيسي من بدخشان إلى تخار، كل من التقاليد الحرفية القديمة والفرصة الصناعية غير المسبوقة. مع احتياطيات بقيمة 4.4 تريليون دولار تدعم 350,000 عامل منجم حرفي، تعد أفغانستان جاهزة لتصبح قوة مهيمنة في أسواق المعادن الثمينة العالمية.',
       statsTitle: 'موارد الذهب',
       statsSubtitle: 'الثروة القديمة',
       detailTitle: 'تطوير قطاع الذهب',
       detailSubtitle: 'الاستخراج والمعالجة',
       detailDescription: 'تحديث عمليات تعدين الذهب مع التركيز على دمج عمال المناجم الحرفيين والامتثال البيئي وتطوير سلسلة القيمة.',
       depositsTitle: 'رواسب الذهب الأولية',
       depositsSubtitle: 'تعدين الصخور الصلبة',
       depositsDescription: 'تحدث رواسب الذهب الأولية في أفغانستان في عروق الكوارتز المرتبطة بأحداث التكوين الجبلي، وتحتوي على كل من الذهب المرئي والتعدين المستضيف للكبريتيد الذي يتطلب تقنيات معالجة حديثة.',
     },
     gemstones: {
       title: 'كنوز الأرض',
       subtitle: 'الأحجار الكريمة',
       description: 'من الزمرد الأسطوري في بنجشير إلى مناجم اللازورد القديمة في بدخشان، يمتد تراث الأحجار الكريمة في أفغانستان لستة آلاف عام. هذه الأحجار الكريمة، التي تم تداولها على طول طريق الحرير، لا تزال تحقق أسعاراً ممتازة في الأسواق العالمية.',
       statsTitle: 'تراث الأحجار الكريمة',
       statsSubtitle: 'الكنوز القديمة',
       detailTitle: 'امتياز الأحجار الكريمة',
       detailSubtitle: 'التعدين والمعالجة',
       detailDescription: 'تطوير قدرات تعدين ومعالجة الأحجار الكريمة المستدامة مع الشهادات الدولية وضمان الجودة.',
     },
     detailItems: {
       copper: [
         { title: 'وديعة مس عينك', description: 'واحدة من أكبر ودائع النحاس غير المطورة في العالم تقع في ولاية لوغر، مع ما يقدر بنحو 125m طن من النحاس.' },
         { title: 'احتياطيات حاجيگك', description: 'مجمع نحاس-حديد ضخم في ولاية باميان يحتوي على احتياطيات النحاس وخام الحديد بقيمة تزيد عن $2T.' },
         { title: 'وديعة بلخاب', description: 'تعدين نحاس مهم في شمال أفغانستان مع استكشاف يكشف عن تركيزات نحاس عالية الجودة.' },
         { title: 'بنية تحتية للمعالجة', description: 'تطوير مرافق معالجة النحاس الحديثة بما في ذلك المصاهر والمصافي لإضافة القيمة المحلية.' },
         { title: 'معايير البيئة', description: 'تنفيذ المعايير البيئية الدولية لاستخراج ومعالجة النحاس المستدام.' },
         { title: 'استراتيجية التصدير', description: 'شراكات استراتيجية مع أسواق النحاس العالمية وتطوير ممرات التصدير الفعالة.' },
       ],
       lithium: [
         { title: 'ودائع غزني', description: 'تشكيلات بيغماتيت حاملة للليثيوم رئيسية تم اكتشافها في ولاية غزني بمستويات نقاء استثنائية.' },
         { title: 'منطقة نورستان', description: 'تعدين ليثيوم واسع عبر ولاية نورستان الجبلية، واحدة من أكبر الودائع عالمياً.' },
         { title: 'ليثيوم درجة البطارية', description: 'تطوير قدرات المعالجة لإنتاج كربونات الليثيوم درجة البطارية لأسواق المركبات الكهربائية.' },
         { title: 'شراكات استراتيجية', description: 'مفاوضات مع شركات التكنولوجيا الرائدة لاستخراج ومعالجة الليثيوم المستدام.' },
         { title: 'مرافق البحث', description: 'إنشاء مراكز أبحاث الليثيوم لتطوير تقنيات الاستخراج المبتكرة.' },
         { title: 'سلسلة التوريد العالمية', description: 'التكامل في سلاسل التوريد العالمية للليثيوم لقطاعات الإلكترونيات والطاقة المتجددة.' },
       ],
       gold: [
         { title: 'حزام ذهب بدخشان', description: 'تعدين ذهب واسع على طول الحزام الجيولوجي لبدخشان مع ودائع متعددة عالية الجودة.' },
         { title: 'ودائع تخار', description: 'ودائع ذهب طميية وصخرية صلبة مهمة في ولاية تخار مع تعدين حرفي نشط.' },
         { title: 'استخراج حديث', description: 'تنفيذ تقنيات استخراج الذهب الحديثة لتحسين معدلات الاسترداد وتقليل التأثير البيئي.' },
         { title: 'قدرة التكرير', description: 'تطوير مرافق تكرير الذهب لإنتاج سبائك وذهب بمعايير دولية.' },
         { title: 'دمج الحرفيين', description: 'برامج لدمج عمال المناجم الحرفيين في الاقتصاد الرسمي مع التدريب ودعم المعدات.' },
         { title: 'الأمن والضمان', description: 'تنفيذ أنظمة شهادات الذهب الخالي من الصراع والتتبع.' },
       ],
       gemstones: [
         { title: 'زمرد بنجشير', description: 'مناجم زمرد مشهورة عالمياً في وادي بنجشير تنتج أحجاراً كريمة بجودة استثنائية يسعى إليها جامعو التحف عالمياً.' },
         { title: 'لازورد بدخشان', description: 'أفضل لازورد في العالم من المناجم القديمة في بدخشان، تم تداوله على طول طريق الحرير لآلاف السنين.' },
         { title: 'ياقوت وياقوت أزرق', description: 'ودائع كورندوم عالية الجودة تنتج الياقوت والياقوت الأزرق في عدة محافظات في جميع أنحاء البلاد.' },
         { title: 'أصناف التورمالين', description: 'ودائع تورمالين متنوعة بما في ذلك أصناف البطيخ النادرة والإنديكوليت التي يقدرها عشاق الأحجار الكريمة.' },
         { title: 'معالجة الأحجار الكريمة', description: 'تطوير مرافق قطع وصقل الأحجار الكريمة لإضافة القيمة قبل التصدير.' },
         { title: 'أنظمة الشهادات', description: 'تنفيذ شهادات الأحجار الكريمة وتتبع المنشأ للأحجار الكريمة الأفغانية.' },
       ],
       iron: [
         { title: 'حديد حاجيگك', description: 'واحدة من أكبر ودائع خام الحديد في آسيا في وسط أفغانستان مع احتياطيات تتجاوز 22 مليار طن.' },
         { title: 'إنتاج الصلب', description: 'خطط لمرافق إنتاج الصلب المتكاملة لتلبية الطلب المحلي على البناء.' },
         { title: 'صلب البنية التحتية', description: 'الأهمية الاستراتيجية لتطوير البنية التحتية الوطنية بما في ذلك الجسور والمباني.' },
         { title: 'إمكانات التصدير', description: 'تطوير قدرات تصدير خام الحديد إلى الأسواق الإقليمية في جنوب ووسط آسيا.' },
         { title: 'جودة الماجنتيت', description: 'ودائع ماجنتيت عالية الجودة مناسبة لعمليات صنع الحديد بالاختزال المباشر.' },
         { title: 'خلق فرص العمل', description: 'إمكانية خلق عشرات الآلاف من الوظائف المباشرة وغير المباشرة في التعدين والمعالجة.' },
       ],
       rareEarth: [
         { title: 'ودائع هلمند', description: 'تركيزات مهمة لعناصر الأرض النادرة تم اكتشافها في ولاية هلمند مع ملفات عنصرية متنوعة.' },
         { title: 'معادن التكنولوجيا', description: 'معادن حرجة للإلكترونيات والطاقة المتجددة وتطبيقات الدفاع مع أهمية استراتيجية عالمية.' },
         { title: 'تكنولوجيا المعالجة', description: 'تطوير تقنيات معالجة وفصل عناصر الأرض النادرة المسؤولة بيئياً.' },
         { title: 'النيوديميوم والبراسيوديميوم', description: 'عناصر رئيسية للمغناطيسات الدائمة المستخدمة في المركبات الكهربائية وتوربينات الرياح.' },
         { title: 'أمن الإمداد', description: 'إمكانية تقليل الاعتماد العالمي على إمدادات عناصر الأرض النادرة من مصدر واحد.' },
         { title: 'تعاون البحث', description: 'شراكات دولية لأبحاث عناصر الأرض النادرة وطرق الاستخراج المستدامة.' },
       ],
       industrial: [
         { title: 'الرخام والجرانيت', description: 'ودائع رخام من الطراز العالمي بألوان وأنماط متعددة، يتم تصديرها للتطبيقات المعمارية عالمياً.' },
         { title: 'التلك وحجر الصابون', description: 'ودائع تالك عالية النقاء تستخدم في مستحضرات التجميل والأدوية والتطبيقات الصناعية.' },
         { title: 'احتياطيات الكروميت', description: 'ودائع كروميت مهمة ضرورية لإنتاج الفولاذ المقاوم للصدأ والصناعات الكيميائية.' },
         { title: 'إنتاج الباريت', description: 'باريت عالي الجودة لتطبيقات حفر النفط وإنتاج المواد الكيميائية الصناعية.' },
         { title: 'ودائع الملح', description: 'ودائع ملح الصخور والتبخر الواسعة لصناعات معالجة الأغذية والمواد الكيميائية.' },
         { title: 'مواد الأسمنت', description: 'ودائع الحجر الجيري والطين التي تدعم قدرة إنتاج الأسمنت المحلي.' },
       ],
       processing: [
         { title: 'مرافق الصهر', description: 'عمليات صهر حديثة للنحاس والحديد والمعادن الأخرى مع أنظمة التحكم في التلوث.' },
         { title: 'قدرة التكرير', description: 'تطوير بنية تحتية لتكرير المعادن للمعالجة ذات القيمة المضافة قبل التصدير.' },
         { title: 'مراقبة الجودة', description: 'تنفيذ معايير الجودة الدولية ومختبرات الاختبار.' },
         { title: 'السحق والغربلة', description: 'معدات معالجة المعادن المتقدمة لإعداد وتركيز الخام بكفاءة.' },
         { title: 'إدارة المخلفات', description: 'مرافق تخزين ومعالجة المخلفات المسؤولة بيئياً.' },
         { title: 'أنظمة الطاقة', description: 'تكامل الطاقة المتجددة لعمليات التعدين والمعالجة المستدامة.' },
       ],
       research: [
         { title: 'المسح الجيولوجي', description: 'رسم خرائط جيولوجية شاملة وتقييم الموارد عبر جميع المحافظات.' },
         { title: 'الحفر الأساسي', description: 'برامج حفر استكشافية واسعة لتحديد كمية الموارد والاحتياطيات المعدنية.' },
         { title: 'التحليل المخبري', description: 'مختبرات تحليلية حديثة لتوصيف المعادن وتحديد الدرجة.' },
         { title: 'إدارة البيانات', description: 'قواعد بيانات رقمية للبيانات الجيولوجية ونتائج الاستكشاف وتقديرات الموارد.' },
         { title: 'الشراكات الأكاديمية', description: 'تعاون مع الجامعات الدولية للبحث الجيولوجي والتدريب.' },
         { title: 'نقل التكنولوجيا', description: 'برامج لبناء القدرة التقنية المحلية في تقنيات الاستكشاف والتعدين.' },
       ],
       trade: [
         { title: 'ممرات التصدير', description: 'تطوير طرق تصدير فعالة عبر باكستان وإيران وجيران آسيا الوسطى.' },
         { title: 'اتفاقيات التجارة', description: 'اتفاقيات تجارية ثنائية ومتعددة الأطراف لتسهيل صادرات المعادن.' },
         { title: 'آليات التسعير', description: 'تسعير شفاف يعتمد على أسواق السلع الدولية ومعايير الجودة.' },
         { title: 'بنية تحتية للخدمات اللوجستية', description: 'استثمار في الطرق والسكك الحديدية ومرافق الحدود لنقل المعادن.' },
         { title: 'تنويع السوق', description: 'استراتيجية للوصول إلى أسواق متنوعة في آسيا وأوروبا والشرق الأوسط.' },
         { title: 'تطوير سلسلة القيمة', description: 'التركيز على زيادة القيمة المضافة قبل التصدير من خلال المعالجة.' },
       ],
       sustainability: [
         { title: 'حماية البيئة', description: 'لوائح بيئية صارمة ومراقبة لعمليات التعدين.' },
         { title: 'تنمية المجتمع', description: 'مشاركة الإيرادات وبرامج تنمية المجتمع في مناطق التعدين.' },
         { title: 'إدارة المياه', description: 'استخدام ومعالجة المياه المستدامة في عمليات التعدين والمعالجة.' },
         { title: 'خطط إعادة التأهيل', description: 'متطلبات إغلاق المناجم وإعادة تأهيل الأراضي لجميع العمليات.' },
         { title: 'الصحة والسلامة', description: 'معايير دولية لصحة وسلامة العمال في عمليات التعدين.' },
         { title: 'اعتبارات المناخ', description: 'دمج اعتبارات تغير المناخ في تخطيط التعدين.' },
       ],
     },
     iron: {
       title: 'أساس الصلب',
       subtitle: 'القاعدة الصناعية',
       description: 'وديعة خام الحديد الضخمة في حاجيگك و 100 موقع رئيسي آخر تمثل أساس المستقبل الصناعي لأفغانستان. مع احتياطيات تتجاوز 22 مليار طن بقيمة 3.5 تريليون دولار، تمتلك أفغانستان ما يكفي من خام الحديد لتزويد إنتاج الصلب العالمي لعقود، مع إمكانية خلق 500,000 وظيفة مباشرة.',
       statsTitle: 'موارد الحديد',
       statsSubtitle: 'الإمكانات الصناعية',
       detailTitle: 'تطوير الحديد والصلب',
       detailSubtitle: 'سلسلة القيمة',
       detailDescription: 'التطوير المتكامل لتعدين خام الحديد وإنتاج الصلب لدعم البنية التحتية الوطنية وخلق فرص العمل.',
       processingTitle: 'إنتاج الصلب',
       processingSubtitle: 'القدرة الصناعية',
       processingDescription: 'سيحول تطوير مرافق إنتاج الصلب المتكاملة قطاع البناء في أفغانستان، مما يقلل الاعتماد على الواردات ويخلق آلاف الوظائف الصناعية في المعالجة والتصنيع.',
     },
     rareEarth: {
       title: 'العناصر الاستراتيجية',
       subtitle: 'معادن الأرض النادرة',
       description: 'تم اكتشاف عناصر الأرض النادرة الحرجة الضرورية للتكنولوجيا الحديثة - من الهواتف الذكية إلى المركبات الكهربائية إلى توربينات الرياح - عبر 40 وديعة رئيسية في أفغانستان، بقيمة إجمالية مقدرة تبلغ 5 تريليونات دولار. هذا يضع أفغانستان كاللاعب الرئيسي في سلاسل التوريد التكنولوجية العالمية، قادرة على تحويل منظر سوق الأرض النادرة بالكامل.',
       statsTitle: 'إمكانات الأرض النادرة',
       statsSubtitle: 'معادن التكنولوجيا',
       detailTitle: 'تطوير الأرض النادرة',
       detailSubtitle: 'معادن التكنولوجيا',
       detailDescription: 'التطوير الاستراتيجي لموارد الأرض النادرة لدعم الصناعات التكنولوجية العالمية وانتقال الطاقة المتجددة.',
     },
     lapis: {
       title: 'إرث أزرق',
       subtitle: 'اللازورد',
       description: 'زودت مناجم اللازورد القديمة في بدخشان العالم بهذا الحجر الأزرق الثمين لأكثر من 6000 عام. المستخدم في كل شيء من قناع الموت لتوت عنخ آمون إلى روائع عصر النهضة، يبقى اللازورد الأفغاني الأفضل في العالم.',
     },
     emerald: {
       title: 'نار خضراء',
       subtitle: 'زمرد بنجشير',
       description: 'زمرد وادي بنجشير من بين أكثر الأحجار الكريمة قيمة في العالم، حيث تعرض تشبع لون ووضوح استثنائي. هذه الأحجار، المتكونة في صخور الميكا المتحولة، تحقق أسعاراً ممتازة في الأسواق الدولية.',
     },
     ruby: {
       title: 'كنوز الكورندوم',
       subtitle: 'ياقوت وياقوت أزرق',
       description: 'تنتج أفغانستان ياقوت وياقوت أزرق استثنائي من ودائع مستضافة بالرخام في عدة محافظات. ياقوت دم الحمام من جگدالك والياقوت الأزرق من هندو كوش يصنفان من بين أفضل عينات الكورندوم في العالم.',
     },
     tourmaline: {
       title: 'بلورات قوس قزح',
       subtitle: 'أصناف التورمالين',
       description: 'تنتج أفغانستان بعضاً من أكثر عينات التورمالين إثارة في العالم، بما في ذلك أصناف البطيخ النادرة والإنديكوليت التي يسعى إليها جامعو التحف وصانعو المجوهرات في جميع أنحاء العالم.',
     },
     aquamarine: {
       title: 'بلورات زرقاء بحرية',
       subtitle: 'كنوز الأكوامارين',
       description: 'تنتج حقول البيغماتيت في محافظات كونار ونورستان بلورات أكوامارين استثنائية، وتقدر لنقاء لونها الأزرق وشفافيتها الرائعة التي تنافس العينات من أي موقع في العالم.',
     },
     chromite: {
       title: 'الأساس المعدني',
       subtitle: 'احتياطيات الكروميت',
       description: 'ضروري لإنتاج الفولاذ المقاوم للصدأ والمواد الكيميائية الصناعية، تمثل ودائع الكروميت في أفغانستان إمكانات تصدير كبيرة وفرص تطوير صناعي.',
       statsTitle: 'موارد الكروميت',
       statsSubtitle: 'المعدن الصناعي',
     },
     marble: {
       title: 'حجر الملوك',
       subtitle: 'الرخام والجرانيت',
       description: 'الرخام الأفغاني، المشهور بجودته الاستثنائية وألوانه المتنوعة، يزين روائع معمارية في جميع أنحاء العالم. تنتج محاجر الرخام في الأمة حجراً ينافس أفضل الأصناف الإيطالية والتركية.',
       statsTitle: 'موارد الرخام',
       statsSubtitle: 'الحجر الممتاز',
     },
     coal: {
       title: 'موارد الطاقة',
       subtitle: 'ودائع الفحم',
       description: 'توفر احتياطيات الفحم الكبيرة عبر عدة محافظات أمن الطاقة وتدعم التنمية الصناعية، مع التركيز على تقنيات الفحم النظيف وممارسات الاستخراج المسؤولة.',
       statsTitle: 'موارد الفحم',
       statsSubtitle: 'أمن الطاقة',
     },
     industrial: {
       title: 'الأساس الصناعي',
       subtitle: 'البناء والتصنيع',
       description: 'بالإضافة إلى المعادن الثمينة والمعادن الاستراتيجية، تمتلك أفغانستان احتياطيات ضخمة من المعادن الصناعية - الرخام والكروميت والتلك ومواد الأسمنت - الضرورية لصناعات البناء والتصنيع.',
       detailTitle: 'المعادن الصناعية',
       detailSubtitle: 'لبنات البناء',
       detailDescription: 'تطوير موارد المعادن الصناعية لدعم قطاعات البناء والتصنيع المحلية.',
     },
      processing: {
        title: 'إضافة القيمة',
        subtitle: 'المعالجة والتكرير',
        description: 'تحول البنية التحتية الحديثة لمعالجة المعادن الخام الخام إلى منتجات مكررة، مما يلتقط القيمة محلياً ويخلق فرص عمل ماهرة عبر سلسلة قيمة التعدين.',
        detailTitle: 'بنية تحتية للمعالجة',
        detailSubtitle: 'القدرة الصناعية',
        detailDescription: 'تطوير مرافق المعالجة الحديثة لإضافة القيمة والتنافسية التصديرية.',
      },
     research: {
       title: 'أساس المعرفة',
       subtitle: 'البحث والاستكشاف',
       description: 'بناء القدرة العلمية للبحث الجيولوجي وتقييم الموارد وتطوير تكنولوجيا التعدين.',
       detailTitle: 'البحث والتطوير',
       detailSubtitle: 'التميز العلمي',
       detailDescription: 'بناء القدرة العلمية للبحث الجيولوجي وتقييم الموارد وتطوير تكنولوجيا التعدين.',
     },
     trade: {
       title: 'الأسواق العالمية',
       subtitle: 'التجارة والتصدير',
       description: 'بناء بنية تحتية للتصدير وعلاقات تجارية لتحسين إيرادات المعادن.',
       detailTitle: 'تطوير التجارة',
       detailSubtitle: 'الوصول إلى السوق',
       detailDescription: 'بناء بنية تحتية للتصدير وعلاقات تجارية لتحسين إيرادات المعادن.',
     },
     sustainability: {
       title: 'التعدين المسؤول',
       subtitle: 'الاستدامة',
       description: 'دمج حماية البيئة وفائدة المجتمع والحوكمة المسؤولة في جميع عمليات التعدين.',
       detailTitle: 'التنمية المستدامة',
       detailSubtitle: 'البيئية والاجتماعية',
       detailDescription: 'دمج حماية البيئة وفائدة المجتمع والحوكمة المسؤولة في جميع عمليات التعدين.',
     },
     timeline: {
       sectionTitle: 'خارطة طريق التنمية',
       sectionSubtitle: 'الجدول الزمني الاستراتيجي',
       year2024: { title: 'إطلاق الاستراتيجية الوطنية للمعادن', description: 'استراتيجية وطنية شاملة للتنمية المستدامة للمعادن وتحسين الصادرات.' },
       year2025: { title: 'إتمام المسح الجيولوجي', description: 'إتمام المسوحات الجيولوجية التفصيلية في جميع المحافظات الـ34 مع تحديد كمية الموارد.' },
       year2026: { title: 'البنية التحتية للمعالجة', description: 'افتتاح أول مرافق حديثة لمعالجة النحاس والليثيوم.' },
       year2027: { title: 'تطوير السكك الحديدية', description: 'إتمام السكك الحديدية للمعادن التي تربط الودائع الرئيسية بمحطات التصدير.' },
       year2028: { title: 'تطوير ممر التصدير', description: 'إتمام البنية التحتية الرئيسية للنقل التي تربط مناطق التعدين بنقاط التصدير.' },
       year2029: { title: 'عمليات الصهر', description: 'إطلاق أول مرافق صهر متكاملة لمعالجة النحاس والحديد.' },
       year2030: { title: 'توسيع الإنتاج', description: 'تحقيق أهداف إنتاج المعادن الكبيرة مع الامتثال البيئي الكامل.' },
       year2032: { title: 'إنتاج الليثيوم', description: 'بدء الإنتاج التجاري للليثيوم لأسواق البطاريات العالمية.' },
       year2035: { title: 'نضج سلسلة القيمة', description: 'إنشاء سلاسل قيمة معدنية شاملة من الاستخراج إلى المنتجات النهائية.' },
     },
     vision2030: {
       title: 'رؤية 2026-2050',
       subtitle: 'آفاق المستقبل',
       description: 'بحلول عام 2050، ستكون أفغانستان أمة تعدين معترف بها عالمياً مع عمليات مستدامة ومعالجة ذات قيمة مضافة وثروة معدنية مشتركة بشكل عادل بين جميع المواطنين.',
     },
     finalQuote: {
       quote: 'المعادن تحت جبالنا ليست مجرد موارد - إنها الأساس الذي سنبني عليه أفغانستان مزدهرة ومكتفية ذاتياً للأجيال القادمة.',
     },
     buildingTomorrow: {
       title: 'بناء الغد',
       subtitle: 'المستقبل',
       description: 'تمثل الثروة المعدنية لأفغانستان فرصة غير مسبوقة للتحول الاقتصادي. من خلال التنمية المستدامة والشراكة الدولية والحوكمة المسؤولة، ستؤمن هذه الموارد الازدهار الوطني للأجيال القادمة.',
     },
     nationalLegacy: {
       title: 'الإرث الوطني',
       subtitle: 'الأجيال القادمة',
       description: 'التنمية المسؤولة للموارد المعدنية لأفغانستان ستنشئ ازدهاراً دائماً وتحافظ على التراث الطبيعي وتضمن الاستقلال الاقتصادي للأجيال القادمة من الأفغان.',
     },
     // Missing translations for English headers
     cobaltNickel: {
       title: 'مستقبل معادن البطارية',
       subtitle: 'الكوبالت والنيكل',
       description: 'معادن البطارية الحرجة الضرورية لإنتاج المركبات الكهربائية وأنظمة تخزين الطاقة، مما يضع أفغانستان في سلسلة التوريد العالمية للطاقة النظيفة.',
     },
     nickel: {
       title: 'لاتريت النيكل',
       subtitle: 'الودائع الاستراتيجية',
       description: 'ودائع لاتريت النيكل توفر مواد أساسية لإنتاج الفولاذ المقاوم للصدأ والبطاريات، مع تزايد الطلب من مصنعي المركبات الكهربائية مما يدفع الأهمية الاستراتيجية.',
     },
     uranium: {
       title: 'معادن الطاقة',
       subtitle: 'الموارد النووية',
       description: 'ودائع اليورانيوم الاستراتيجية توفر إمكانات لتطوير الطاقة النووية وتضع أفغانستان كلاعب مهم في أسواق معادن الطاقة العالمية.',
     },
     talc: {
       title: 'النقاء الصناعي',
       subtitle: 'التلك والمعادن',
       description: 'ودائع التلك عالية النقاء تدعم مستحضرات التجميل العالمية والأدوية والتطبيقات الصناعية. موارد التلك في أفغانستان تصنف من بين الأكثر أهمية في العالم.',
     },
     barite: {
       title: 'أساسي للحفر',
       subtitle: 'إنتاج الباريت',
       description: 'باريت عالي الجودة لتطبيقات حفر النفط والغاز، مع تزايد الطلب من صناعات الطاقة الإقليمية مما يخلق فرص تصدير كبيرة.',
     },
     salt: {
       title: 'الذهب الأبيض',
       subtitle: 'ودائع الملح',
       description: 'ودائع ملح الصخور والتبخر الواسعة تدعم صناعات معالجة الأغذية والمواد الكيميائية والأسواق التقليدية عبر المنطقة.',
     },
     cement: {
       title: 'لبنات البناء',
       subtitle: 'مواد الأسمنت',
       description: 'ودائع الحجر الجيري والطين الوفيرة تدعم إنتاج الأسمنت المحلي، الضروري لإعادة الإعمار الوطني وتطوير البنية التحتية عبر جميع المحافظات.',
     },
     leadZinc: {
       title: 'أساس المعادن الأساسية',
       subtitle: 'الرصاص والزنك',
       description: 'ودائع الرصاص والزنك المهمة عبر محافظات متعددة تدعم التنمية الصناعية وتوفر مواد أساسية لقطاعات البناء والسيارات والتصنيع.',
     },
      // (processing defined above with full fields)
     smelting: {
       title: 'تحويل المعادن',
       subtitle: 'عمليات الصهر',
       description: 'مرافق الصهر الحديثة تحول الخام الخام إلى معادن مكررة، مما يخلق قدرة صناعية وعمالة ماهرة مع التقاط القيمة محلياً.',
     },
     beneficiation: {
       title: 'معالجة الخام',
       subtitle: 'مصانع التركيز',
       description: 'مرافق تركيز المعادن المتقدمة تركز الخام وتحسن الدرجة قبل التصدير، مما يزيد القيمة ويقلل تكاليف النقل.',
     },
     laboratory: {
       title: 'التميز العلمي',
       subtitle: 'التحليل والاختبار',
       description: 'مرافق المختبرات الحديثة لتوصيف المعادن ومراقبة الجودة والبحث تدعم عمليات الاستكشاف والإنتاج.',
     },
      // (research defined above with full fields)
     geologicalSurveys: {
       title: 'رسم خرائط المستقبل',
       subtitle: 'المسوحات الجيولوجية',
       description: 'المسوحات الجيولوجية المنهجية عبر جميع المحافظات الـ34 تكشف عن المدى الكامل للثروة المعدنية لأفغانستان، مما يوجه استثمار الاستكشاف وتخطيط التنمية.',
     },
     exploration: {
       title: 'حدود الاكتشاف',
       subtitle: 'برامج الاستكشاف',
       description: 'برامج الاستكشاف الجيولوجي المنهجية تستمر في اكتشاف ودائع جديدة وتوسيع الموارد المعروفة وإطلاق الإمكانات الكاملة للثروة المعدنية لأفغانستان.',
     },
     dataSystems: {
       title: 'الذكاء الرقمي',
       subtitle: 'إدارة البيانات',
       description: 'الأنظمة الرقمية الحديثة تدير البيانات الجيولوجية وتراقب العمليات في الوقت الفعلي وتمكن من اتخاذ القرارات القائمة على البيانات عبر قطاع التعدين.',
     },
     operationsControl: {
       title: 'قيادة العمليات',
       subtitle: 'المراقبة في الوقت الفعلي',
       description: 'مرافق غرفة التحكم المتقدمة تمكن من المراقبة في الوقت الفعلي لعمليات التعدين وإدارة الأسطول وأنظمة السلامة عبر جميع مواقع استخراج المعادن الرئيسية.',
     },
     globalMarkets: {
       title: 'الأسواق العالمية',
       subtitle: 'التجارة والتصدير',
       description: 'التطوير الاستراتيجي لممرات التصدير وعلاقات التجارة لربط المعادن الأفغانية بالأسواق العالمية، مما يزيد القيمة ويضمن التسعير العادل.',
     },
     investmentFramework: {
       title: 'إطار الاستثمار',
       subtitle: 'نشر رأس المال',
       description: 'إطار استثماري شفاف وتنافسي يجذب شركات التعدين الدولية المسؤولة ومقدمي التكنولوجيا والمؤسسات المالية لتطوير القطاع المعدني لأفغانستان.',
     },
     partnerships: {
       title: 'التحالف العالمي',
       subtitle: 'الشراكات الدولية',
       description: 'الشراكات الاستراتيجية مع شركات التعدين الدولية ومقدمي التكنولوجيا والمؤسسات المالية تجلب الخبرة والاستثمار والوصول إلى الأسواق لقطاع المعادن الأفغاني.',
     },
     tradeRoutes: {
       title: 'طرق التجارة',
       subtitle: 'ممرات التصدير',
       description: 'تطوير ممرات التصدير الفعالة عبر البلدان المجاورة يربط المعادن الأفغانية بالأسواق العالمية عبر السكك الحديدية والطرق والطرق البحرية.',
     },
     logistics: {
       title: 'التميز اللوجستي',
       subtitle: 'عمليات الأسطول',
       description: 'أساطيل شاحنات التعدين الحديثة وأنظمة الخدمات اللوجستية تضمن حركة فعالة للخام من الحفرة إلى مصنع المعالجة، مما يزيد الإنتاجية والكفاءة التشغيلية.',
     },
     stockyards: {
       title: 'الاحتياطيات الاستراتيجية',
       subtitle: 'ساحات الخام',
       description: 'ساحات الخام الضخمة توفر قدرة عازلة لعمليات التعدين، مما يمكن المعالجة المستمرة وتحسين سلسلة التوريد من الاستخراج إلى التصدير.',
     },
     blasting: {
       title: 'الاستخراج الدقيق',
       subtitle: 'التفجير المتحكم',
       description: 'تقنيات التفجير المتحكم الحديثة تزيد استرداد الخام مع تقليل التأثير البيئي، مما يضمن الاستخراج الآمن والفعال عبر جميع عمليات الحفرة المفتوحة.',
     },
     conveyor: {
       title: 'تدفق المواد',
       subtitle: 'أنظمة الناقلات',
       description: 'أنظمة الناقلات البرية الواسعة تنقل آلاف الأطنان من الخام يومياً من الحفرة إلى مصنع المعالجة بمعدلات تتجاوز 20,000 طن في الساعة.',
     },
     geographic: {
       title: 'الموارد الإقليمية',
       subtitle: 'التوزيع الجغرافي',
       description: 'توزيع الموارد المعدنية عبر جميع المحافظات الـ34 في أفغانستان.',
     },
     // Provinces translations
     provinces: {
       logar: { title: 'ولاية لوغر', subtitle: 'قلب النحاس', description: 'موطن ودائع مس عينك الأسطورية، تمثل ولاية لوغر مركز صناعة النحاس في أفغانستان مع احتياطيات تقدر بعشرات المليارات من الدولارات.' },
       badakhshan: { title: 'ولاية بدخشان', subtitle: 'مملكة الأحجار الكريمة', description: 'ولاية الأحجار الكريمة القديمة في بدخشان زودت العالم باللازورد لستة آلاف عام وتستمر في إنتاج الزمرد والياقوت والأحجار الكريمة الأخرى.' },
       bamyan: { title: 'ولاية باميان', subtitle: 'جبل الحديد', description: 'المنظر الطبيعي المذهل في باميان يخفي ودائع حديد حاجيگك الضخمة - واحدة من أكبر ودائع الحديد في آسيا - إلى جانب احتياطيات النحاس والفحم المهمة في انتظار التطوير.' },
       panjshir: { title: 'ولاية بنجشير', subtitle: 'وادي الزمرد', description: 'الأخاديد الدرامية لوادي بنجشير تحتضن بعض من أفضل ودائع الزمرد في العالم، منتجة أحجاراً كريمة تنافس الأحجار الكولومبية والزامبية في اللون والجودة.' },
       ghazni: { title: 'ولاية غزني', subtitle: 'حزام الليثيوم', description: 'ولاية غزني تستضيف بيغماتيت حاملة للليثيوم مهمة يمكن أن تضع أفغانستان كمورد رئيسي لمعادن البطارية لثورة المركبات الكهربائية العالمية.' },
       nuristan: { title: 'ولاية نورستان', subtitle: 'حدود الليثيوم', description: 'التضاريس الجبلية في نورستان تحتضن بعض من أكبر ودائع بيغماتيت حاملة للليثيوم في العالم. هذه المعادن الحرجة ضرورية للانتقال العالمي للطاقة النظيفة وتصنيع المركبات الكهربائية.' },
       helmand: { title: 'ولاية هلمند', subtitle: 'الموارد الاستراتيجية', description: 'تحت منظر هلمند الصحراوي تكمن ودائع النحاس والذهب المهمة. تقنيات الاستكشاف الحديثة كشفت عن مناطق تعدين واسعة مع إمكانات استثمار كبيرة.' },
       herat: { title: 'ولاية هرات', subtitle: 'الموارد الغربية', description: 'محاجر الرخام القديمة وودائع خام الحديد في هرات تمثل قروناً من التراث التعديني. قرب المحافظة من إيران وأسواق آسيا الوسطى يضعها كمحور تصدير رئيسي للمنتجات المعدنية المعالجة.' },
       kandahar: { title: 'ولاية قندهار', subtitle: 'البوابة الجنوبية', description: 'ولاية قندهار تخدم كبوابة جنوبية لأفغانستان لصادرات المعادن. غنية بودائع الذهب والنحاس والكروميت، توفر المحافظة وصولاً استراتيجياً إلى الأسواق الإقليمية من خلال ممرات التجارة الراسخة وتطوير البنية التحتية الحديثة.' },
       takhar: { title: 'ولاية تخار', subtitle: 'الأنهار الذهبية', description: 'أنظمة الأنهار في تخار أنتجت ذهباً طمياً لقرون. التعدين الحرفي الحديث يجمع تقنيات الغسل التقليدية مع طرق الاسترداد المحسنة للاستخراج المستدام.' },
       samangan: { title: 'ولاية سمنگان', subtitle: 'تعدين التلك', description: 'ودائع التلك في سمنگان بالقرب من كهوف البوذية القديمة تنتج معادن صناعية عالية الجودة. دير تخت رستم الشهير يطل على عمليات التعدين الحديثة.' },
       baghlan: { title: 'ولاية بغلان', subtitle: 'حوض الفحم', description: 'أحواض الفحم في بغلان توفر موارد طاقة أساسية للصناعة المحلية. عمليات التعدين تحت الأرض تستخرج فحماً معدنياً وحرارياً عالي الجودة.' },
       parwan: { title: 'ولاية پروان', subtitle: 'بوابة سالنگ', description: 'ولاية پروان، بوابة ممر سالنگ، تحتوي على ودائع خام الحديد والنحاس. الموقع الاستراتيجي يربط المناطق المعدنية الشمالية والجنوبية.' },
       laghman: { title: 'ولاية لغمان', subtitle: 'استخراج الباريت', description: 'ودائع الباريت في لغمان تخدم صناعة حفر النفط. الوديان الزراعية تلتقي بالجبال الغنية بالمعادن في هذه المحافظة الشرقية المتنوعة.' },
       kapisa: { title: 'ولاية كابيسا', subtitle: 'الأحجار الكريمة المخفية', description: 'كهوف الجبال في كابيسا تنتج أحجاراً كريمة ثمينة بما في ذلك التورمالين والكونزايت. عائلات التعدين التقليدية تحافظ على معرفة الاستخراج التي تعود لقرون.' },
       wardak: { title: 'ولاية وردك', subtitle: 'حديد حاجيگك', description: 'وردك تستضيف ودائع خام الحديد الأسطورية في حاجيگك - واحدة من أكبر احتياطيات الحديد غير المطورة في آسيا. الوديعة الضخمة تحتوي على أكثر من 2.2 مليار طن متري من الخام عالي الجودة.' },
       zabul: { title: 'ولاية زابل', subtitle: 'مسح الأرض النادرة', description: 'المسوحات الجيولوجية في ولاية زابل حددت تركيزات واعدة لعناصر الأرض النادرة. هذه المعادن الاستراتيجية ضرورية لتصنيع التكنولوجيا المتقدمة.' },
       paktya: { title: 'ولاية پکتیا', subtitle: 'معادن الغابات', description: 'جبال پکتیا المغطاة بالصنوبر تخفي ودائع الكروميت والنحاس. ممارسات التعدين المستدامة تحمي النظم البيئية الفريدة للغابات في المحافظة.' },
       khost: { title: 'ولاية خوست', subtitle: 'صناعة الأسمنت', description: 'محاجر الحجر الجيري في خوست تغذي مرافق تصنيع الأسمنت الحديثة. التنمية الصناعية تخلق فرص عمل مع دعم احتياجات البناء الوطنية.' },
       daykundi: { title: 'ولاية دایکندی', subtitle: 'الرخام الألبيني', description: 'محاجر دایکندی عالية الارتفاع تنتج رخاماً وردياً وكريمياً مميزاً. المواقع الجبلية النائية تنتج حجراً ممتازاً لأسواق التصدير الدولية.' },
       uruzgan: { title: 'ولاية أوروزگان', subtitle: 'الاستكشاف النائي', description: 'التضاريس الوعرة في أوروزگان كشفت عن ودائع النحاس والذهب من خلال حفر الاستكشاف الحديث. العمليات النائية تظهر الالتزام بتقييم الموارد الشامل.' },
       ghor: { title: 'ولاية غور', subtitle: 'منارة جام', description: 'ولاية غور، موطن منارة جام المدرجة في اليونسكو، توازن بين الحفاظ على التراث وتطوير المعادن. الاستكشاف الدقيق يحمي المواقع الثقافية مع تقييم إمكانات الموارد.' },
       farah: { title: 'ولاية فراه', subtitle: 'الحديد الغربي', description: 'ودائع خام الحديد في فراه على طول الحدود الإيرانية تمثل إمكانات تطوير كبيرة. اتصالات الطرق السريعة الغربية تسهل لوجستيات التصدير المستقبلية.' },
       nimroz: { title: 'ولاية نیمروز', subtitle: 'ذهب الصحراء', description: 'صحراء رگستان في ولاية نیمروز تخفي ودائع الذهب عند تقاطع النتوءات الصخرية وكثبان الرمال. الظروف القاسية تشكل تحدياً لكنها لا تمنع الاستكشاف الحديث.' },
       sarEPul: { title: 'ولاية سرپل', subtitle: 'الطاقة والمعادن', description: 'ولاية سرپل تجمع بين إنتاج الغاز الطبيعي واستخراج المعادن المتنوع. المرافق الصناعية تعالج المواد الخام للأسواق المحلية.' },
       kunar: { title: 'ولاية کنر', subtitle: 'وادي الأحجار الكريمة', description: 'وديان کنر الدرامية تنتج أكوامارين وتورمالين استثنائي وأحجاراً كريمة ثمينة أخرى. تقليد التعدين الحرفي في المحافظة يجمع مع التقنيات الحديثة لاستخراج عينات من الطراز العالمي.' },
       faryab: { title: 'ولاية فاریاب', subtitle: 'الكروميت الشمالي', description: 'ودائع الكروميت في فاریاب توفر مواد خام أساسية لإنتاج الفولاذ المقاوم للصدأ. السهوب الشمالية تخفي تكوينات معدنية غنية مع عمليات استخراج راسخة.' },
       jowzjan: { title: 'ولاية جوزجان', subtitle: 'الملح والغاز', description: 'ولاية جوزجان تجمع بين إنتاج الغاز الطبيعي وعمليات تعدين الملح الواسعة. مرافق معالجة المعادن الصناعية تخدم الأسواق المحلية والإقليمية.' },
     },
     // Technology sections
     autonomousMining: {
       title: 'أسطول التعدين المستقل',
       subtitle: 'الصناعة 4.0',
       description: 'شاحنات النقل والحفر المستقلة من الجيل القادم تعمل على مدار الساعة مع الملاحة المدعومة بالذكاء الاصطناعي. هذه المركبات التي تزن 400 طن تنقل أكثر من 50,000 طن من الخام يومياً، مما يزيد الإنتاجية مع ضمان سجلات السلامة الخالية من الأذى عبر جميع مواقع الاستخراج الرئيسية.',
     },
     satelliteMapping: {
       title: 'رسم خرائط الموارد بالأقمار الصناعية',
       subtitle: 'تقنية الاستشعار عن بعد',
       description: 'الصور الفضائية المتقدمة والمسح الطيفي الفائق يكشفان عن توقيعات المعادن عبر 652,000 كيلومتر مربع من الأراضي الأفغانية. خوارزميات الذكاء الاصطناعي تحلل الميزات الجيولوجية لتحديد أكثر من 10,000 موقع ودائع محتمل للتحقق الأرضي.',
     },
     droneSurveys: {
       title: 'عمليات المسح الجوي',
       subtitle: 'تقنية رسم الخرائط بالطائرات بدون طيار',
       description: 'أساطيل الطائرات بدون طيار المستقلة تجري مسوحات طبوغرافية عالية الدقة ومسح مغناطيسي عبر التضاريس الجبلية النائية. أكثر من 500 طائرة بدون طيار ترسم 10,000 هكتار يومياً، مما يولد نماذج تضاريس ثلاثية الأبعاد بدقة سنتيمترية لتخطيط المناجم.',
     },
     deepCoreDrilling: {
       title: 'برامج الحفر الأساسي العميق',
       subtitle: 'استكشاف تحت السطح',
       description: 'عمليات الحفر الماسي تستخرج عينات أساسية من أعماق تتجاوز 2,000 متر، مما يكشف عن المدى الكامل للتكوينات المعدنية. أكثر من 200 منصة حفر تعمل في وقت واحد عبر جميع المحافظات الـ34، مما يحدد أكثر من 50 مليار طن من الموارد الجديدة سنوياً.',
     },
     geophysicalSurveys: {
       title: 'شبكات المسح الجيوفيزيائي',
       subtitle: 'رسم الخرائط الكهرومغناطيسية',
       description: 'رادار اختراق الأرض والمسوحات الكهرومغناطيسية ترسم الجيولوجيا تحت السطح عبر أكثر من 100,000 كيلومتر خطي سنوياً. هذه التقنيات تكشف عن أجسام الخام المخفية وهياكل الصدوع وموارد المياه الحرجة لتطوير المناجم.',
     },
     flotationProcessing: {
       title: 'مصانع معالجة التعويم',
       subtitle: 'تركيز الخام',
       description: 'خلايا التعويم الحديثة تعالج 500,000 طن من الخام يومياً، باستخدام تقنية التعويم الرغوي المتقدمة لتحقيق معدلات استرداد معادن تتجاوز 95%. 50 مصنع معالجة عبر الأمة تخلق آلاف الوظائف التقنية الماهرة.',
     },
     hydrometallurgical: {
       title: 'المرافق الهيدروميتالورجية',
       subtitle: 'المعالجة الكيميائية',
       description: 'مصانع الهيدروميتالورجيا المتقدمة تستخدم عمليات الترشيح المسؤولة بيئياً لاستخراج النحاس والذهب وعناصر الأرض النادرة. أنظمة المياه الحلقة المغلقة تضمن صفر تصريف مع تحقيق مستويات نقاء معدني 99.9%.',
     },
     electrorefining: {
       title: 'التميز في التكرير الكهربائي',
       subtitle: 'تنقية المعادن',
       description: 'مرافق التكرير الكهربائي الضخمة تنقي النحاس إلى درجة كاثود 99.99%، منتجة مليون طن من النحاس المكرر سنوياً. هذه المرافق تمثل 50 مليار دولار في استثمار البنية التحتية وتوظف أكثر من 100,000 عامل.',
     },
     slagProcessing: {
       title: 'عمليات إعادة معالجة الخبث',
       subtitle: 'التعدين بدون نفايات',
       description: 'أكوام الخبث التاريخية التي تحتوي على معادن قيمة تخضع لإعادة المعالجة لاستخراج الذهب والفضة والنحاس المتبقي من طرق الاستخراج القديمة. أكثر من 100 مصنع إعادة معالجة تسترد 10 مليارات دولار من المعادن من مواقع التعدين القديمة.',
     },
     miningRailways: {
       title: 'شبكات السكك الحديدية للتعدين',
       subtitle: 'بنية تحتية للنقل السائب',
       description: '5,000 كيلومتر من السكك الحديدية للنقل الثقيل تربط المناطق التعدينية الرئيسية بمحطات التصدير. قطارات الوحدة المكونة من أكثر من 200 عربة خام تنقل 100 مليون طن سنوياً، مما يقلل تكاليف النقل بنسبة 75% مقارنة بنقل الشاحنات.',
     },
     conveyorSystems: {
       title: 'أنظمة الناقلات البرية',
       subtitle: 'تدفق المواد المستمر',
       description: '500 كيلومتر من أنظمة الناقلات البرية تنقل الخام من الحفرة إلى مصنع المعالجة بمعدلات تتجاوز 20,000 طن في الساعة. هذه الأنظمة تعمل على مدار الساعة مع توفر 99.5%، مما يحل محل آلاف حركات شاحنات النقل.',
     },
     powerInfrastructure: {
       title: 'شبكة الطاقة للتعدين',
       subtitle: 'بنية تحتية للطاقة',
       description: '5,000 ميجاوات من قدرة توليد الطاقة المخصصة - بما في ذلك الطاقة الشمسية والهيدروليكية والغاز - توفر الطاقة لعمليات التعدين. خطوط النقل تحت الأرض تربط المواقع النائية بالشبكة الوطنية، مما يضمن موثوقية الطاقة 99.9%.',
     },
     waterInfrastructure: {
       title: 'أنظمة إمداد المياه',
       subtitle: 'إدارة المياه المستدامة',
       description: 'أنظمة إعادة تدوير المياه الضخمة تسترد 95% من مياه المعالجة، مما يقلل استهلاك المياه العذبة إلى مستويات رائدة عالمياً. أكثر من 100 محطة معالجة تضمن عدم تلوث موارد المياه المحلية، مما يحمي إمدادات المياه المجتمعية.',
     },
     portFacilities: {
       title: 'مرافق موانئ التصدير',
       subtitle: 'الوصول للتجارة البحرية',
       description: 'الشراكات الاستراتيجية مع باكستان وإيران وتركمانستان توفر الوصول إلى موانئ المياه العميقة القادرة على التعامل مع أكثر من 200 مليون طن من صادرات المعادن سنوياً. محطات المعادن المخصصة تتميز بأنظمة تحميل السفن الآلية.',
     },
     miningUniversity: {
       title: 'جامعة التعدين الوطنية',
       subtitle: 'التعليم التقني',
       description: 'جامعة التعدين الوطنية في أفغانستان تدرب 10,000 مهندس تعدين وعالم جيولوجيا سنوياً. المختبرات ومرافق البحث من الطراز العالمي تضع الخريجين في أدوار قيادية في صناعة المعادن الوطنية.',
     },
     geologicalInstitute: {
       title: 'معهد المسح الجيولوجي',
       subtitle: 'التميز العلمي',
       description: 'معهد المسح الجيولوجي الوطني يجري تقييمات منهجية للموارد عبر جميع المحافظات الـ34. أكثر من 1,000 عالم جيولوجيا يحافظون على قاعدة بيانات المعادن الأكثر شمولاً في العالم، مما يوجه 100 مليار دولار في استثمار الاستكشاف.',
     },
     metallurgicalResearch: {
       title: 'مركز البحوث الميتالورجية',
       subtitle: 'ابتكار المعالجة',
       description: 'المختبرات الميتالورجية المتطورة تطوير تقنيات استخراج جديدة محسنة لخامات أفغانستان. الاختراقات البحثية حسنت معدلات الاسترداد بنسبة 30% مع تقليل استهلاك الطاقة بنسبة 40% عبر جميع عمليات المعالجة.',
     },
     environmentalResearch: {
       title: 'معهد البحوث البيئية',
       subtitle: 'الحلول المستدامة',
       description: 'مرافق البحوث البيئية المخصصة تطوير حلول رائدة عالمياً لإعادة تأهيل المناجم ومعالجة المياه وحماية التنوع البيولوجي. أكثر من 500 عالم يضمنون أن عمليات التعدين تتجاوز المعايير البيئية الدولية.',
     },
     economicTransformation: {
       title: 'التحول الاقتصادي',
       subtitle: 'تأثير 30 تريليون دولار',
       description: 'تطوير المعادن سيزيد الناتج المحلي الإجمالي لأفغانستان بنسبة 2,000% على مدى السنوات العشرين القادمة. 30 تريليون دولار من الثروة المعدنية تترجم إلى 1.5 تريليون دولار سنوياً في النشاط الاقتصادي، مما يحول أفغانستان إلى قوة اقتصادية في آسيا الوسطى.',
     },
     employmentRevolution: {
       title: 'ثورة التوظيف',
       subtitle: '5 ملايين وظيفة',
       description: 'توظيف التعدين المباشر سيتجاوز مليوني منصب، مع 3 ملايين وظيفة إضافية في المعالجة والخدمات اللوجستية والصناعات الداعمة. متوسط أجور التعدين البالغ 30,000 دولار سنوياً سينشئ طبقة وسطى مزدهرة.',
     },
     regionalDevelopment: {
       title: 'مناطق التنمية الإقليمية',
       subtitle: 'تحويل المحافظات',
       description: '50 منطقة تنمية اقتصادية خاصة حول عمليات التعدين الرئيسية تحول المحافظات النائية إلى مراكز صناعية مزدهرة. مدن جديدة تضم 5 ملايين شخص ستنشأ حول الثروة المعدنية للأمة.',
     },
     exportRevenue: {
       title: 'نمو إيرادات التصدير',
       subtitle: 'تحول التجارة',
       description: 'صادرات المعادن ستولد 200 مليار دولار سنوياً بحلول عام 2040، مما يضع أفغانستان بين أكبر 10 مصدري معادن في العالم. علاقات التجارة الاستراتيجية مع أكثر من 100 دولة تضمن الوصول إلى الأسواق والتسعير العادل.',
     },
     governmentRevenue: {
       title: 'إيرادات الحكومة',
       subtitle: 'التحول المالي',
       description: 'إتاوات التعدين والضرائب ستولد 50 مليار دولار سنوياً لخدمات الحكومة والتعليم والرعاية الصحية والبنية التحتية. صندوق تنمية المعادن الشفاف يضمن وصول الفوائد إلى جميع المواطنين الأفغان الـ40 مليون.',
     },
     foreignInvestment: {
       title: 'الاستثمار الأجنبي المباشر',
       subtitle: '500 مليار دولار من التدفقات',
       description: 'شركات التعدين الدولية التزمت 500 مليار دولار في استثمار الاستكشاف والتنمية حتى عام 2050. الشراكات الاستراتيجية مع عمال المناجم العالميين الرائدين تجلب الخبرة والتكنولوجيا من الطراز العالمي للعمليات الأفغانية.',
     },
     domesticInvestment: {
       title: 'نمو الاستثمار المحلي',
       subtitle: 'ريادة الأعمال الأفغانية',
       description: 'رواد الأعمال في التعدين الأفغاني يديرون أكثر من 10,000 عملية تعدين مرخصة تتراوح من مناجم الأحجار الكريمة الحرفية إلى مرافق المعالجة على نطاق صناعي. الاستثمار المحلي في القطاع يتجاوز 100 مليار دولار.',
     },
     miningFinance: {
       title: 'مركز تمويل التعدين',
       subtitle: 'أسواق رأس المال',
       description: 'بورصة كابول للتعدين تسهل 50 مليار دولار في الاستثمار السنوي للتعدين، مع أكثر من 200 شركة تعدين متداولة علناً. الوصول إلى أسواق رأس المال العالمية يضمن التمويل التنافسي للمشاريع بجميع المقاييس.',
     },
     miningInsurance: {
       title: 'تأمين التعدين والمخاطر',
       subtitle: 'الحماية المالية',
       description: 'برامج تأمين التعدين الشاملة تحمي 500 مليار دولار في الأصول والعمليات. شراكات إعادة التأمين الدولية تضمن التغطية لجميع المخاطر التشغيلية والبيئية والسياسية في القطاع.',
     },
     carbonNeutral: {
       title: 'التعدين المحايد للكربون',
       subtitle: 'قيادة المناخ',
       description: 'قطاع التعدين في أفغانستان سيحقق الحياد الكربوني بحلول عام 2040 من خلال الطاقة المتجددة والمركبات الكهربائية وتقنيات احتجاز الكربون. 10 جيجاوات من الطاقة الشمسية وطاقة الرياح تلغي الاعتماد على الوقود الأحفوري.',
     },
     biodiversityProtection: {
       title: 'حماية التنوع البيولوجي',
       subtitle: 'حماية النظم البيئية',
       description: '100,000 هكتار من ممرات التنوع البيولوجي المحمية تحيط بعمليات التعدين الرئيسية. برامج مراقبة الحياة البرية تحمي النمور الثلجية وخرفان ماركو بولو والأنواع المهددة بالانقراض الفريدة للنظم البيئية الجبلية الأفغانية.',
     },
     mineClosure: {
       title: 'إعادة التأهيل التدريجي',
       subtitle: 'استعادة الأراضي',
       description: '10 مليارات دولار في أموال إغلاق المناجم تضمن إعادة تأهيل جميع العمليات تدريجياً أثناء وبعد التعدين. المناظر الطبيعية المستعادة تدعم الزراعة والغابات والسياحة، مما يخلق قيمة دائمة للمجتمعات المحلية.',
     },
     circularEconomy: {
       title: 'التعدين الاقتصاد الدائري',
       subtitle: 'عمليات بدون نفايات',
       description: 'تقنيات المعالجة المتقدمة تضمن أن 99% من جميع المواد المستخرجة تجد استخداماً منتجاً. نفايات التعدين تصبح مجاميع بناء وتعديلات زراعية أو مواد خام للمعالجة الثانوية.',
     },
     educationPrograms: {
       title: 'برامج تعليم التعدين',
       subtitle: 'تنمية رأس المال البشري',
       description: 'أكثر من 1,000 مدرسة بنيت في مناطق التعدين توفر تعليماً من الطراز العالمي لـ2 مليون طفل. برامج المنح الدراسية ترسل 10,000 طالب سنوياً إلى الجامعات الدولية للحصول على درجات متقدمة في التعدين والهندسة.',
     },
     healthcareFacilities: {
       title: 'الرعاية الصحية المجتمعية',
       subtitle: 'البنية التحتية الطبية',
       description: '50 مستشفى حديث و500 عيادة في مناطق التعدين توفر رعاية صحية مجانية لـ10 ملايين شخص. برامج صحة شركات التعدين قللت وفيات الرضع بنسبة 90% وزادت متوسط العمر المتوقع بمقدار 15 عاماً.',
     },
     womensEmployment: {
       title: 'النساء في التعدين',
       subtitle: 'المساواة بين الجنسين',
       description: 'النساء يشكلن 30% من قوة عمل التعدين، من الجيولوجيين إلى مشغلي المعدات إلى القيادة التنفيذية. الشركات المملوكة للنساء توفر 40% من خدمات التعدين، مما يخلق الاستقلال الاقتصادي لملايين النساء الأفغانيات.',
     },
     artisanalIntegration: {
       title: 'دعم عمال المناجم الحرفيين',
       subtitle: 'برامج الرسمية',
       description: '500,000 عامل منجم حرفي يتلقون التدريب والمعدات والوصول إلى الأسواق من خلال برامج الرسمية. شهادات التجارة العادلة تضمن أن المنتجات الحرفية تحصل على أسعار ممتازة في الأسواق الدولية.',
     },
     aiMining: {
       title: 'التعدين المدعوم بالذكاء الاصطناعي',
       subtitle: 'الذكاء الاصطناعي',
       description: 'أنظمة الذكاء الاصطناعي تحسن كل جانب من جوانب عمليات التعدين، من النمذجة الجيولوجية إلى صيانة المعدات إلى لوجستيات سلسلة التوريد. الذكاء الاصطناعي يقلل تكاليف التشغيل بنسبة 40% مع تحسين سجلات السلامة بنسبة 80%.',
     },
     robotics: {
       title: 'روبوتات التعدين',
       subtitle: 'الأنظمة المستقلة',
       description: 'أكثر من 10,000 روبوت مستقل تؤدي مهام تحت الأرض الخطيرة بما في ذلك الحفر والتفجير واستخراج الخام. المشغلون البشريون يشرفون من غرف التحكم السطحية، مما يلغي الوفيات تحت الأرض تماماً.',
     },
     digitalTwins: {
       title: 'عمليات التوأم الرقمي',
       subtitle: 'التعدين الافتراضي',
       description: 'النسخ الرقمية الكاملة لكل عملية تعدين تمكن من التحسين في الوقت الفعلي والصيانة التنبؤية. المشغلون يمكنهم محاكاة سيناريوهات الاستخراج، وتحسين الكفاءة قبل تنفيذ التغييرات في العمليات المادية.',
     },
     blockchainSupply: {
       title: 'تتبع البلوك تشين',
       subtitle: 'شفافية سلسلة التوريد',
       description: 'تقنية البلوك تشين تتبع كل غرام من المعادن الأفغانية من الاستخراج إلى المنتج النهائي. المستهلكون والشركات المصنعة يمكنهم التحقق من المصادر الأخلاقية وحالة عدم الصراع والامتثال البيئي مع الشفافية الكاملة.',
     },
     chinaPartnership: {
       title: 'الشراكة الاستراتيجية مع الصين',
       subtitle: 'تكامل الحزام والطريق',
       description: 'الشراكة الاستراتيجية مع الصين تجلب 200 مليار دولار في استثمار البنية التحتية، مما يربط ودائع المعادن الأفغانية بمراكز التصنيع الآسيوية. السكك الحديدية والطرق السريعة الجديدة تدمج أفغانستان في سلاسل التوريد العالمية.',
     },
     europePartnership: {
       title: 'تعاون الاتحاد الأوروبي',
       subtitle: 'نقل التكنولوجيا',
       description: 'شراكات الاتحاد الأوروبي تجلب تكنولوجيا التعدين الأوروبية المتقدمة والمعايير البيئية. المشاريع المشتركة مع الشركات الألمانية والسويدية والفنلندية تقدم خبرة الاستخراج والمعالجة الرائدة عالمياً.',
     },
     usPartnership: {
       title: 'الاستثمار الأمريكي',
       subtitle: 'التكنولوجيا والتمويل',
       description: 'شركات التعدين والاستثمار الأمريكية تلتزم 100 مليار دولار لتطوير المعادن الأفغانية. التكنولوجيا الأمريكية في رسم الخرائط بالأقمار الصناعية والمركبات المستقلة وابتكار المعالجة تحول الكفاءة التشغيلية.',
     },
     regionalPartnership: {
       title: 'التكامل الإقليمي',
       subtitle: 'تعاون آسيا الوسطى',
       description: 'التعاون مع كازاخستان وأوزبكستان وتركمانستان يخلق سلاسل توريد معدنية متكاملة. شبكات السكك الحديدية ومرافق المعالجة المشتركة تزيد القيمة الإقليمية وتقلل التكاليف لجميع الشركاء.',
     },
     emeraldGrading: {
       title: 'مركز تصنيف الزمرد',
       subtitle: 'الشهادة الدولية',
       description: 'مركز تصنيف الزمرد الوطني يصدق مليون قيراط سنوياً باستخدام المعايير المعترف بها دولياً. الزمرد الأفغاني المعتمد يحقق علاوات أسعار 50% في أسواق الأحجار الكريمة العالمية.',
     },
     lapisHeritage: {
       title: 'تراث اللازورد',
       subtitle: '6000 عام من التعدين',
       description: 'مناجم اللازورد القديمة في بدخشان - مصدر صبغة ultramarine لتوت عنخ آمون وأسياد عصر النهضة - تستمر في إنتاج أفضل جودة في العالم. اعتراف اليونسكو للتراث العالمي يحمي هذه المواقع التاريخية.',
     },
     rubyDeposits: {
       title: 'امتياز تعدين الياقوت',
       subtitle: 'جودة دم الحمام',
       description: 'ياقوت جگدالك يطابق الجودة البورمية بعشر التأثير البيئي. الاستخراج الحديث يحافظ على السلامة الجيولوجية مع إنتاج 500 مليون دولار سنوياً من الكورندوم بجودة الأحجار الكريمة.',
     },
     tourmalineVarieties: {
       title: 'جنة التورمالين',
       subtitle: 'مجموعة قوس قزح',
       description: 'نورستان تنتج أكثر من 50 نوع لون من التورمالين بما في ذلك أصناف البطيخ النادرة والإنديكوليت ونوع البارايبا. الإنتاج السنوي البالغ 10 ملايين قيراط يجعل أفغانستان عاصمة التورمالين في العالم.',
     },
     gemCutting: {
       title: 'صناعة قطع الأحجار الكريمة',
       subtitle: 'إضافة القيمة',
       description: '200 منشأة قطع أحجار كريمة توظف 50,000 صانع مجوهرات ماهر، مما يحول الأحجار الخام إلى روائع مصقولة. القطع داخل البلاد يضيف قيمة 400% مقارنة بصادرات الأحجار الخام.',
     },
     cobaltSupply: {
       title: 'أمن إمداد الكوبالت',
       subtitle: 'معدن البطارية الحرجة',
       description: 'احتياطيات الكوبالت الأفغانية البالغة 5 ملايين طن توفر مواد كاثود البطارية الأساسية لـ500 مليون مركبة كهربائية. معايير الاستخراج الأخلاقية تضمن إمداداً خالياً من الصراع للشركات المصنعة المسؤولة.',
     },
     nickelDeposits: {
       title: 'تطوير لاتريت النيكل',
       subtitle: 'الفولاذ المقاوم للصدأ والبطاريات',
       description: '10 ملايين طن من النيكل في ودائع اللاتريت والكبريتيد تدعم كل من إنتاج الفولاذ المقاوم للصدأ وتصنيع البطاريات. المعالجة الحديثة تحقق استرداد نيكل 95% مع صفر تصريف حمضي.',
     },
     tungstenSupply: {
       title: 'الاحتياطيات الاستراتيجية',
       subtitle: 'المعدن الحرجة',
       description: 'ودائع التنغستن عالية الجودة في بنجشير والمحافظات المحيطة تحتوي على 500,000 طن من هذا المعدن الحرجة. الصلابة القصوى للتنغستن تجعله ضرورياً لأدوات القطع والإلكترونيات وتطبيقات الفضاء.',
     },
     antimonyDeposits: {
       title: 'إنتاج الأنتيمون',
       subtitle: 'معدن مقاوم للهب',
       description: 'ودائع الأنتيمون عبر محافظات متعددة تدعم الطلب المتزايد على المواد المقاومة للهب وتقنيات البطاريات. مرافق المعالجة الحديثة تنتج 50,000 طن من الأنتيمون المكرر سنوياً.',
     },
     tantalumNiobium: {
       title: 'التانتالوم والنيوبيوم',
       subtitle: 'معادن الإلكترونيات',
       description: 'ودائع البيغماتيت تنتج التانتالوم والنيوبيوم الضروريين لمكثفات الإلكترونيات والسبائك الفائقة. سلاسل التوريد المعتمدة الخالية من الصراع تضمن أن التانتالوم الأفغاني يلبي معايير المصادر المسؤولة.',
     },
     vision2050: {
       title: 'رؤية 2026-2050',
       subtitle: 'الازدهار طويل الأمد',
       description: 'بحلول عام 2050، ستكون أفغانستان من بين أغنى الأمم في العالم، مع إيرادات المعادن التي توفر رعاية صحية عالمية وتعليماً وازدهاراً لجميع المواطنين الـ60 مليون. الهدية المعدنية البالغة 30 تريليون دولار تحول أمة.',
     },
     sovereignWealth: {
       title: 'صندوق الثروة السيادية',
       subtitle: 'الأمن بين الأجيال',
       description: 'صندوق ثروة سيادي بقيمة تريليون دولار - ممول من إيرادات المعادن - يضمن استمرار الازدهار لفترة طويلة بعد استنفاد الموارد. الاستثمارات في الأسواق العالمية توفر دخل دائم للأجيال القادمة.',
     },
     technologyHub: {
       title: 'مركز التكنولوجيا الإقليمي',
       subtitle: 'اقتصاد الابتكار',
       description: 'ثروة التعدين تمول الانتقال إلى اقتصاد المعرفة، مع كابول تصبح مركز التكنولوجيا والابتكار في آسيا الوسطى. 100 جامعة بحثية و1,000 شركة تكنولوجيا تنشأ من التنمية الممولة بالمعادن.',
     },
     sustainableLegacy: {
       title: 'الإرث المستدام',
       subtitle: 'التراث البيئي',
       description: 'التعدين المسؤول يخلق إرثاً من المناظر الطبيعية المستعادة والنظم البيئية المحمية وبنية تحتية للطاقة النظيفة. أفغانستان تصبح نموذجاً للتنمية المستدامة للموارد في جميع أنحاء العالم.',
     },
     finalVision: {
       title: 'أمة متحولة',
       subtitle: 'النهضة الأفغانية',
       description: '30 تريليون دولار من الثروة المعدنية - المطورة بشكل مستدام والمشتركة بشكل عادل والمستثمرة بحكمة - تحول أفغانستان من منطقة صراع إلى قوة اقتصادية عالمية. هذا هو وعد المعادن الأفغانية: الازدهار للأجيال.',
     },
     panjshirEmeralds: {
       title: 'زمرد بنجشير',
       subtitle: 'وادي الأحجار الكريمة',
       description: 'وادي بنجشير الأسطوري ينتج بعض من أفضل الزمرد في العالم. البلورات الخضراء العميقة المستخرجة من صخور الجبال تحقق أسعاراً ممتازة في أسواق الأحجار الكريمة الدولية.',
     },
     // Additional missing sections
     provincialResources: {
       title: 'الموارد الإقليمية',
       subtitle: 'التوزيع الجغرافي',
       description: 'توزيع الموارد المعدنية عبر جميع المحافظات الـ34 في أفغانستان.',
     },
     logar: {
       title: 'قلب النحاس',
       subtitle: 'ولاية لوغر',
       description: 'موطن ودائع مس عينك الأسطورية، تمثل ولاية لوغر مركز صناعة النحاس في أفغانستان مع احتياطيات تقدر بعشرات المليارات من الدولارات.',
     },
     badakhshan: {
       title: 'مملكة الأحجار الكريمة',
       subtitle: 'ولاية بدخشان',
       description: 'ولاية الأحجار الكريمة القديمة في بدخشان زودت العالم باللازورد لستة آلاف عام وتستمر في إنتاج الزمرد والياقوت والأحجار الكريمة الأخرى.',
     },
     bamyan: {
       title: 'جبل الحديد',
       subtitle: 'ولاية باميان',
       description: 'المنظر الطبيعي المذهل في باميان يخفي ودائع حديد حاجيگك الضخمة - واحدة من أكبر ودائع الحديد في آسيا - إلى جانب احتياطيات النحاس والفحم المهمة في انتظار التطوير.',
     },
     panjshir: {
       title: 'وادي الزمرد',
       subtitle: 'ولاية بنجشير',
       description: 'الأخاديد الدرامية لوادي بنجشير تحتضن بعض من أفضل ودائع الزمرد في العالم، منتجة أحجاراً كريمة تنافس الأحجار الكولومبية والزامبية في اللون والجودة.',
     },
     ghazni: {
       title: 'حزام الليثيوم',
       subtitle: 'ولاية غزني',
       description: 'ولاية غزني تستضيف بيغماتيت حاملة للليثيوم مهمة يمكن أن تضع أفغانستان كمورد رئيسي لمعادن البطارية لثورة المركبات الكهربائية العالمية.',
     },
     helmand: {
       title: 'الموارد الاستراتيجية',
       subtitle: 'ولاية هلمند',
       description: 'تحت منظر هلمند الصحراوي تكمن ودائع النحاس والذهب المهمة. تقنيات الاستكشاف الحديثة كشفت عن مناطق تعدين واسعة مع إمكانات استثمار كبيرة.',
     },
      // (sustainability defined above with full fields)
     greenMining: {
       title: 'التعدين الأخضر',
       subtitle: 'حماية البيئة',
       description: 'الالتزام بالحوكمة البيئية يضمن أن عمليات التعدين تحمي موارد المياه وتقلل اضطراب الأراضي وتعيد تأهيل المواقع بعد الإغلاق.',
     },
     community: {
       title: 'الازدهار المشترك',
       subtitle: 'تنمية المجتمع',
       description: 'تطوير التعدين يجلب البنية التحتية والتوظيف والخدمات الاجتماعية للمجتمعات النائية، مما يحول الاقتصادات الريفية ويحسن نوعية الحياة عبر المناطق الغنية بالموارد.',
     },
     safety: {
       title: 'صفر أذى',
       subtitle: 'الصحة والسلامة',
       description: 'المعايير الدولية للسلامة تحمي العمال والمجتمعات، مع برامج تدريب شاملة ومعدات حديثة وبروتوكولات سلامة صارمة عبر جميع العمليات.',
     },
     workforce: {
       title: 'بناء القدرات',
       subtitle: 'تنمية القوى العاملة',
       description: 'برامج التدريب الشاملة تطوير القوى العاملة الماهرة اللازمة لعمليات التعدين الحديثة، مما يخلق فرص عمل وبناء القدرة التقنية عبر جميع المحافظات.',
     },
     infrastructure: {
       title: 'البنية التحتية للتعدين',
       subtitle: 'المرافق التشغيلية',
       description: 'معسكرات التعدين الحديثة والبنية التحتية توفر مرافق آمنة ومريحة للعمال في المواقع النائية، مما يدعم عمليات فعالة على مدار 24 ساعة عبر جميع المشاريع الرئيسية.',
     },
     mesAynakLegacy: {
       title: 'إرث مس عينك',
       subtitle: 'التراث الأثري',
       description: 'ودائع النحاس في مس عينك تقع فوق أحد أهم المواقع الأثرية البوذية في العالم. خطط التنمية توازن بعناية بين استخراج المعادن والحفاظ على الأديرة والستوبات والتحف التي يبلغ عمرها 2000 عام.',
     },
     copperOpenPit: {
       title: 'عمليات النحاس الضخمة',
       subtitle: 'التعدين في الحفرة المفتوحة',
       description: 'عمليات النحاس الضخمة في الحفرة المفتوحة تستخدم طرق الاستخراج المتدرجة، مما ينقل ملايين الأطنان من الخام سنوياً مع أساطيل شاحنات النقل التي تزن 400 طن تعمل على مدار الساعة في المناظر الطبيعية الجبلية الدرامية لأفغانستان.',
     },
     moltenCopper: {
       title: 'النحاس المنصهر',
       subtitle: 'عمليات الصهر',
       description: 'أفران صهر النحاس الحديثة تحول الخام المركز إلى كاثودات نحاس نقية 99.9%. النحاس المنصهر عند 1,200 درجة مئوية يتدفق عبر عمليات متحكم بها بدقة لإنشاء معدن مكرر جاهز للتصدير.',
     },
     spodumeneCrystals: {
       title: 'بلورات السبودومين',
       subtitle: 'مصدر معدن البطارية',
       description: 'بلورات السبودومين الحاملة للليثيوم من بيغماتيت أفغانستان تحتوي على ما يصل إلى 8% أكسيد الليثيوم - من بين أعلى الدرجات عالمياً. هذه البلورات المنشورية تشكل أساس سلسلة توريد البطاريات لثورة المركبات الكهربائية.',
     },
     deepGoldMining: {
       title: 'تعدين الذهب العميق',
       subtitle: 'العمليات تحت الأرض',
       description: 'عمليات تعدين الذهب تحت الأرض الحديثة تصل إلى أجسام الخام عالية الجودة في أعماق تكوينات الجبال. الأنفاق المضاءة بمصابيح LED تكشف عن عروق الكوارتز الحاملة للذهب بينما تعمل فرق الاستخراج بمعدات دقيقة.',
     },
     goldRefining: {
       title: 'تكرير الذهب',
       subtitle: 'معالجة المعادن الثمينة',
       description: 'عمليات تكرير الذهب تحول الخام الخام إلى سبائك بدرجة الاستثمار. الذهب المنصهر يصب في قوالب دقيقة، مما يخلق قضبان نقية 99.99% مخصصة للأسواق الدولية واحتياطيات البنك المركزي.',
     },
     panjshirEmeraldCrystals: {
       title: 'بلورات زمرد بنجشير',
       subtitle: 'عينات من الطراز العالمي',
       description: 'بلورات الزمرد الخام من وادي بنجشير تعرض تشبع لون ووضوح استثنائي. هذه الأحجار الكريمة السداسية، المدمجة في مصفوفة الميكا الشيست الأصلية، تحقق أسعاراً ممتازة في الأسواق الجيولوجية الدولية.',
     },
     hajigakIronMountain: {
       title: 'جبل حديد حاجيگك',
       subtitle: 'أكبر ودائع آسيا',
       description: 'ودائع خام الحديد الضخمة في حاجيگك في ولاية باميان تحتوي على ما يقدر بنحو 2.2 مليار طن من خام الحديد عالي الجودة. هذا الجبل البني المحمر يمثل أساس مستقبل الصلب الصناعي لأفغانستان.',
     },
     lapisAncientMines: {
       title: '6000 عام من الأزرق',
       subtitle: 'مناجم اللازورد القديمة',
       description: 'مناجم اللازورد القديمة في بدخشان تعمل بشكل مستمر لستة آلاف عام. وجوه الصخور المخططة بالأزرق تكشف عن مصدر صبغة ultramarine التي لونت روائع عصر النهضة وغرف دفن الملوك المصريين.',
     },
     jegdalekRubies: {
       title: 'ياقوت جگدالك',
       subtitle: 'امتياز دم الحمام',
       description: 'ودائع الياقوت في جگدالك تنتج بعض من أفضل ياقوت دم الحمام في العالم - أحجار حمراء عميقة مع وضوح وتألق استثنائي ينافس الأحجار البورمية في الجودة ويحقق أسعاراً ممتازة في المزادات.',
     },
     hinduKushSapphires: {
       title: 'ياقوت هندو كوش',
       subtitle: 'كنوز الأزرق الذرة',
       description: 'سلسلة جبال هندو كوش تنتج ياقوت أزرق ذرة استثنائي من ودائع مستضافة بالرخام. هذه الأحجار الكريمة من الكورندوم تعرض اللون الأزرق المخملي المطلوب من قبل جامعي التحف وبيوت المجوهرات في جميع أنحاء العالم.',
     },
     nuristanTourmaline: {
       title: 'تورمالين نورستان',
       subtitle: 'بلورات قوس قزح',
       description: 'ولاية نورستان تنتج عينات تورمالين مذهلة بما في ذلك أصناف البطيخ النادرة مع مراكز وردية وحواف خضراء، إلى جانب بلورات الإنديكوليت الزرقاء والروبيليت الوردية المطلوبة.',
     },
     kunarAquamarine: {
       title: 'أكوامارين كونار',
       subtitle: 'بيريل أزرق بحري',
       description: 'حقول البيغماتيت في ولاية كونار تنتج بلورات أكوامارين استثنائية - أحجار كريمة سداسية أزرق بحر باهت على مصفوفة الفلسبار الأبيض التي تنافس العينات من أي موقع في العالم في الوضوح وكثافة اللون.',
     },
     strategicREEConcentrate: {
       title: 'تركيز الأرض النادرة الاستراتيجي',
       subtitle: 'معادن التكنولوجيا',
       description: 'تركيزات عناصر الأرض النادرة من ودائع أفغانستان تحتوي على مواد حرجة ضرورية للهواتف الذكية وتوربينات الرياح والمركبات الكهربائية. التحليل المخبري يكشف عن 17 نوعاً متميزاً من عناصر الأرض النادرة مع مستويات نقاء استثنائية.',
     },
     chromiteExportOperations: {
       title: 'عمليات تصدير الكروميت',
       subtitle: 'تجارة المعادن الصناعية',
       description: 'مخزونات خام الكروميت الضخمة في انتظار التصدير إلى مصنعي الفولاذ المقاوم للصدأ الدوليين. معدات التحميل الصناعية تعالج آلاف الأطنان يومياً، مما يغذي الطلب العالمي على هذه المادة الميتالورجية الأساسية.',
     },
     premiumWhiteMarble: {
       title: 'الرخام الأبيض الممتاز',
       subtitle: 'حجر معماري',
       description: 'محاجر الرخام الأبيض النقية في أفغانستان تنتج حجراً ينافس كرارا الإيطالي في الجودة. الكتل الضخمة مع العروق الرمادية الدقيقة يتم استخراجها للمشاريع المعمارية والأعمال النحتية في جميع أنحاء العالم.',
     },
     undergroundCoalOperations: {
       title: 'عمليات الفحم تحت الأرض',
       subtitle: 'أمن الطاقة',
       description: 'عمليات تعدين الفحم تحت الأرض الحديثة تصل إلى طبقات سميكة من الفحم بدرجة المعادن. عمال التعدين المستمرون يعملون في نوبات 24 ساعة مستخرجين موارد الطاقة التي تشغل الصناعات المحلية وتطوير البنية التحتية.',
     },
     processingPlantOperations: {
       title: 'عمليات مصنع المعالجة',
       subtitle: 'إضافة القيمة',
       description: 'داخل مرافق معالجة المعادن الحديثة، أنظمة الناقلات تنقل الخام المسحوق عبر خلايا التعويم وفواصل الجاذبية والمركزات المغناطيسية. المشغلون الماهرون يراقبون كل مرحلة من عملية التركيز.',
     },
     coreSampleAnalysis: {
       title: 'تحليل العينات الأساسية',
       subtitle: 'الذكاء الجيولوجي',
       description: 'عينات الأساس الجيولوجية المرتبة في صناديق خشبية تكشف عن ثروة ودائع المعادن الأفغانية تحت السطح. مناطق الخام الملونة التي تظهر تعدين النحاس والذهب وعناصر الأرض النادرة توجه قرارات الاستكشاف والتنمية.',
     },
     explorationDrilling: {
       title: 'حفر الاستكشاف',
       subtitle: 'عمليات الاكتشاف',
       description: 'منصات الحفر الماسي على المواقع الجبلية النائية تستخرج عينات أساسية أسطوانية التي تكشف عن الجيولوجيا على مئات الأمتار أدناه. فرق الاستكشاف تعمل ضد خلفيات هندو كوش الدرامية لرسم خرائط اكتشافات المعادن الجديدة.',
     },
     surveyOperations: {
       title: 'عمليات المسح',
       subtitle: 'رسم خرائط ثروة أفغانستان',
       description: 'فرق المسح الجيولوجي تستخدم معدات تحديد المواقع بالأقمار الصناعية وأدوات رسم الخرائط المتقدمة على التلال الجبلية عبر أفغانستان. عملهم المنهجي يكشف عن المدى الكامل لموارد المعادن الوطنية عبر جميع المحافظات الـ34.',
     },
     operationsCommandCenter: {
       title: 'مركز قيادة العمليات',
       subtitle: 'الذكاء الرقمي للتعدين',
       description: 'مراكز التحكم في التعدين الحديثة تتميز بشاشات من الحائط إلى الحائط تعرض صور الأقمار الصناعية في الوقت الفعلي وبيانات الأسطول والإنتاج. المشغلون يراقبون كل جانب من جوانب عمليات التعدين من مرافق القيادة المركزية.',
     },
     railwayExportHub: {
       title: 'محور تصدير السكك الحديدية',
       subtitle: 'بنية تحتية للتجارة',
       description: 'محطات السكك الحديدية الاستراتيجية تربط إنتاج المعادن الأفغانية بالأسواق الدولية. عربات الشحن المحملة بحاويات الخام تتحرك عبر مرافق الخدمات اللوجستية الحديثة المجهزة برافعات وأنظمة معالجة الحاويات.',
     },
     investmentConferences: {
       title: 'مؤتمرات الاستثمار',
       subtitle: 'جذب رأس المال العالمي',
       description: 'مؤتمرات الاستثمار في التعدين الدولية تجمع بين المسؤولين الحكوميين والمديرين التنفيذيين للتعدين والمؤسسات المالية. العروض التقديمية التي تتميز بالبيانات الجيولوجية ومقاييس الاستثمار توجه قرارات نشر رأس المال.',
     },
     landRestoration: {
       title: 'استعادة الأراضي',
       subtitle: 'الالتزام البيئي',
       description: 'إعادة التأهيل التدريجي تحول مواقع التعدين السابقة إلى مناظر طبيعية منتجة. برامج إعادة الغطاء النباتي تنشئ مجتمعات النباتات المحلية، مما يعيد النظم البيئية ويخلق استخداماً مستداماً للأراضي بعد انتهاء عمليات الاستخراج.',
     },
     nangarharResources: {
       title: 'موارد ننغرهار',
       subtitle: 'البوابة الشرقية',
       description: 'ولاية ننغرهار، المتاخمة لباكستان، تستضيف ودائع الكروميت المهمة ومواقع الأحجار الكريمة. موقعها الاستراتيجي بالقرب من ممر خيبر يوفر وصولاً فعالاً للتصدير إلى الأسواق الدولية.',
     },
     balkhMineralBelt: {
       title: 'حزام المعادن في بلخ',
       subtitle: 'الموارد الشمالية',
       description: 'ولاية بلخ القديمة في شمال أفغانستان تحتوي على ودائع النحاس والذهب والمعادن الصناعية المهمة. التضاريس المسطحة في المنطقة تسهل عمليات التعدين واسعة النطاق وتطوير البنية التحتية.',
     },
     kunduzMiningDistrict: {
       title: 'منطقة تعدين كندز',
       subtitle: 'مركز زراعي ومعدني',
       description: 'ولاية كندز تجمع بين الثروة الزراعية والإمكانات المعدنية المهمة بما في ذلك ودائع الملح ومواد البناء والمعادن الأساسية التي تدعم التنمية الإقليمية ومشاريع البنية التحتية.',
     },
     faryabResources: {
       title: 'موارد فاریاب',
       subtitle: 'الإمكانات الشمالية الغربية',
       description: 'ولاية فاریاب في شمال غرب أفغانستان تستضيف ودائع المعادن الصناعية بما في ذلك الرخام والجرانيت ومجموعات البناء. تطوير هذه الموارد يدعم برامج البنية التحتية الوطنية.',
     },
     digitalTransformation: {
       title: 'التحول الرقمي',
       subtitle: 'التعدين الصناعة 4.0',
       description: 'التقنيات الرقمية المتقدمة تحول عمليات التعدين مع المراقبة في الوقت الفعلي والصيانة التنبؤية والمعدات المستقلة. اتخاذ القرارات القائمة على البيانات يحسن كفاءة الاستخراج والسلامة عبر جميع العمليات.',
     },
     miningInnovation: {
       title: 'ابتكار التعدين',
       subtitle: 'قيادة التكنولوجيا',
       description: 'مراكز البحث والتطوير تبتكر تقنيات استخراج جديدة وطرق معالجة مستدامة وحلول بيئية. الابتكار يدفع الميزة التنافسية ويضع أفغانستان في طليعة ممارسات التعدين الحديثة.',
     },
     waterStewardship: {
       title: 'إدارة المياه',
       subtitle: 'حفظ الموارد',
       description: 'برامج إدارة المياه الشاملة تضمن الاستخدام المستدام لموارد المياه في عمليات التعدين. أنظمة إعادة التدوير ومرافق المعالجة وشبكات المراقبة تحمي مصادر المياه المحلية والمجتمعات المصب.',
     },
   },
 },
   zh: {
     nav: {
       home: '首页',
       sectors: '行业',
       minerals: '矿产',
       investment: '投资',
       contact: '联系',
       about: '关于',
       provinces: '省份',
       operations: '运营',
       timeline: '时间线',
       map: '地图',
     },
     navDropdowns: {
       provinces: {
         title: '34个资源丰富的省份',
         subtitle: '探索阿富汗各地的矿产矿床',
         viewMap: '查看交互式地图',
         clickToExplore: '点击任何省份探索其矿产资源',
         badakhshan: '巴达赫尚 - 宝石王国',
         badghis: '巴德吉斯 - 矿产资源',
         baghlan: '巴格兰 - 煤炭与矿产',
         balkh: '巴尔赫 - 北部资源',
         bamyan: '巴米扬 - 铁山',
         daykundi: '代孔迪 - 矿产矿床',
         farah: '法拉 - 西部矿产',
         faryab: '法利亚布 - 北部矿床',
         ghazni: '加兹尼 - 锂带',
         ghor: '古尔 - 中部资源',
         helmand: '赫尔曼德 - 战略资源',
         herat: '赫拉特 - 西部门户',
         jowzjan: '朱兹詹 - 北部矿产',
         kabul: '喀布尔 - 首都资源',
         kandahar: '坎大哈 - 南部枢纽',
         kapisa: '卡比萨 - 中部矿床',
         khost: '霍斯特 - 东部矿产',
         kunar: '库纳尔 - 宝石谷',
         kunduz: '昆都士 - 北部门户',
         laghman: '拉格曼 - 东部资源',
         logar: '洛加尔 - 铜矿中心',
         nangarhar: '楠格哈尔 - 东部矿床',
         nimruz: '尼姆鲁兹 - 南部矿产',
         nuristan: '努里斯坦 - 锂前沿',
         paktia: '帕克蒂亚 - 东部资源',
         paktika: '帕克蒂卡 - 南部矿床',
         panjshir: '潘杰希尔 - 祖母绿谷',
         parwan: '帕尔万 - 中部矿产',
         samangan: '萨曼甘 - 北部矿床',
         sarEPol: '萨尔普勒 - 北部资源',
         takhar: '塔哈尔 - 黄金河流',
         uruzgan: '乌鲁兹甘 - 中部矿产',
         wardak: '瓦尔达克 - 中部矿床',
         zabul: '扎布尔 - 南部资源',
       },
       operations: {
         title: '采矿运营与服务',
         subtitle: '全面的采矿服务与运营',
         viewAll: '查看所有运营与服务',
         processing: { label: '加工与精炼', description: '矿石加工设施' },
         smelting: { label: '冶炼运营', description: '金属提取' },
         research: { label: '研究与勘探', description: '地质调查' },
         geological: { label: '地质调查', description: '矿床测绘' },
         trade: { label: '贸易与出口', description: '国际贸易' },
         investment: { label: '投资框架', description: '法律与金融' },
         sustainability: { label: '可持续性', description: '环境标准' },
         community: { label: '社区发展', description: '本地就业' },
         digital: { label: '数字采矿', description: '技术整合' },
         safety: { label: '健康与安全', description: '工人保护' },
       },
       timeline: {
         title: '发展时间线',
         subtitle: '历史进展与未来愿景',
         viewComplete: '查看完整时间线',
         clickToExplore: '点击任何选项探索时间线详情',
        historical: { label: '历史时间线', description: '采矿历史与里程碑' },
        ancientPeriod: { label: '古代采矿（公元前4000年 - 公元1000年）', description: '来自古代文明6000多年的采矿遗产' },
        ancientEgypt: { label: '古埃及与美索不达米亚', description: '图坦卡蒙陵墓中的阿富汗青金石与古代贸易' },
        silkRoad: { label: '丝绸之路时代', description: '历史贸易路线与矿产贸易' },
        medievalPeriod: { label: '中世纪与伊斯兰时期', description: '丝绸之路贸易与伊斯兰采矿扩张' },
        renaissance: { label: '文艺复兴时期', description: '群青颜料贸易与欧洲艺术' },
        colonialPeriod: { label: '殖民勘探（1800-1960）', description: '欧洲地质调查与早期发现' },
        britishSurveys: { label: '英国地质调查', description: '19世纪英国勘探与测绘' },
        russianSurveys: { label: '俄国地质考察', description: '20世纪初俄国地质工作' },
        sovietPeriod: { label: '苏联时代（1960-1990）', description: '全面地质测绘与主要矿床识别' },
        sovietMapping: { label: '苏联地质测绘', description: '确定麦斯艾纳克与哈吉加克的综合调查' },
        modernEra: { label: '现代（2000年至今）', description: '21世纪复兴与全面发展' },
        usgsSurveys: { label: '美国地质调查局综合调查', description: '美国地质调查局评估量化30万亿美元以上矿产禀赋' },
        gemstoneHistory: { label: '宝石遗产', description: '6000年青金石、祖母绿与红宝石采矿' },
        lapisHistory: { label: '青金石：6000年', description: '世界最古老持续运营矿山' },
        emeraldHistory: { label: '潘杰希尔祖母绿遗产', description: '1000多年祖母绿采矿传统' },
        rubyHistory: { label: '杰格达莱克红宝石采矿', description: '鸽血红宝石矿床与历史开采' },
        goldHistory: { label: '黄金采矿遗产', description: '古代与中世纪黄金开采传统' },
        copperHistory: { label: '铜矿开采遗产', description: '历史铜开采与贸易' },
        tradeRoutes: { label: '古代贸易路线', description: '丝绸之路与历史矿产贸易网络' },
        caravanRoutes: { label: '商队贸易网络', description: '运送阿富汗矿产的历史商队路线' },
        maritimeTrade: { label: '海上贸易史', description: '矿产出口的历史海路' },
        archaeological: { label: '考古发现', description: '历史采矿遗址与考古证据' },
        mesAynakArchaeology: { label: '麦斯艾纳克考古遗址', description: '2000年佛教遗址与铜矿床' },
        documentation: { label: '历史文献', description: '古代文献、地图与历史记录' },
        ancientTexts: { label: '古代文献与记录', description: '提及阿富汗矿产的历史文献' },
        historicalMaps: { label: '历史地图', description: '显示采矿遗址的古代与中世纪地图' },
        museumCollections: { label: '博物馆馆藏', description: '世界博物馆中的阿富汗矿产' },
        provincial: { label: '省级发展', description: '区域时间线' },
        badakhshanHistory: { label: '巴达赫尚采矿史', description: '6000年青金石采矿' },
        panjshirHistory: { label: '潘杰希尔谷遗产', description: '跨越千年的祖母绿采矿传统' },
        roadmap: { label: '发展路线图', description: '未来发展计划' },
        milestones: { label: '项目里程碑', description: '关键项目成就' },
        achievements: { label: '成就', description: '重大成就' },
        vision2030: { label: '2026-2050愿景', description: '长期愿景' },
        reports: { label: '年度报告', description: '年度进展报告' },
        annualReports: { label: '年度进展报告', description: '年度采矿发展报告' },
        dataReports: { label: '历史数据报告', description: '综合历史采矿数据' },
        statisticalAnalysis: { label: '统计分析', description: '历史采矿统计与趋势' },
        historicalGallery: { label: '历史图片库', description: '历史采矿图片综合集' },
        ancientImages: { label: '古代采矿图片', description: '古代采矿时期的历史图片' },
        medievalImages: { label: '中世纪时期图片', description: '中世纪采矿的历史图片' },
        archaeologicalImages: { label: '考古遗址图片', description: '历史采矿遗址图片' },
        artisanalMining: { label: '手工采矿史', description: '传统采矿方法与遗产' },
        miningTechniques: { label: '历史采矿技术', description: '6000年采矿方法演变' },
        culturalHeritage: { label: '文化遗产', description: '阿富汗文化与传统中的采矿' },
        royalCollections: { label: '皇家馆藏', description: '历史皇家馆藏中的阿富汗宝石' },
        ironHistory: { label: '铁矿开采遗产', description: '历史铁开采与钢铁生产' },
        lithiumHistory: { label: '锂发现史', description: '历史锂勘探与发现' },
        coalHistory: { label: '煤炭开采遗产', description: '历史煤炭开采与能源生产' },
        marbleHistory: { label: '大理石开采遗产', description: '历史大理石开采与建筑用途' },
        chromiteHistory: { label: '铬矿开采史', description: '历史铬开采与工业用途' },
        rareEarthHistory: { label: '稀土元素发现', description: '历史稀土元素勘探' },
        miningCommunities: { label: '历史采矿社区', description: '传统采矿社区及其遗产' },
        miningLegends: { label: '采矿传说与故事', description: '采矿地区的历史传说与故事' },
        geologicalFormation: { label: '地质形成史', description: '阿富汗矿床数百万年形成过程' },
        miningTools: { label: '历史采矿工具', description: '6000年采矿工具演变' },
        miningSafety: { label: '历史采矿安全', description: '传统安全实践与现代演变' },
        miningEconomics: { label: '历史采矿经济', description: '历史上采矿的经济影响' },
        miningLaw: { label: '历史采矿法与治理', description: '采矿法规与治理演变' },
        womenInMining: { label: '历史采矿中的女性', description: '历史上女性在采矿中的角色' },
        miningEducation: { label: '历史采矿教育', description: '传统知识传承与现代教育' },
        productionStatistics: { label: '采矿生产统计', description: '历史生产数据、产量趋势及各时期采矿量' },
        economicImpact: { label: '经济影响分析', description: '经济贡献、GDP影响及采矿收入' },
        tradeVolumes: { label: '贸易量数据', description: '历史贸易量、出口统计与市场数据' },
        workforceStatistics: { label: '就业与劳动力', description: '采矿就业数据、劳动力人口统计与劳动统计' },
        priceTrends: { label: '价格趋势与市场', description: '历史矿产价格、市场趋势与商品价值' },
        geologicalFormations: { label: '地质构造', description: '地质结构、形成过程与矿产成因' },
        depositCharacteristics: { label: '矿床特征', description: '矿床类型、矿石品位、储量和资源分类' },
        miningTechnologyEvolution: { label: '采矿技术演变', description: '技术进步、设备演变与创新时间线' },
        explorationMethods: { label: '勘探方法', description: '历史勘探技术、调查与发现方法' },
        environmentalFactors: { label: '环境因素', description: '环境考虑、影响与可持续实践' },
        miningRegulationsTimeline: { label: '采矿法规时间线', description: '监管框架演变、法律与治理结构' },
        licensingPermits: { label: '许可与证照', description: '历史许可制度、许可流程与授权框架' },
        taxationRoyalties: { label: '税收与特许权使用费', description: '税收结构、特许权制度与财政政策' },
        infrastructureDevelopment: { label: '基础设施发展', description: '采矿基础设施、运输与设施发展' },
        processingFacilities: { label: '加工设施', description: '矿物加工厂、精炼厂与工业设施' },
        transportationNetworks: { label: '运输网络', description: '贸易路线、运输基础设施与物流系统' },
        marketAnalysis: { label: '市场分析', description: '市场份额、竞争分析与行业结构' },
        investmentFlows: { label: '投资流动', description: '历史投资模式、资本流动与资金来源' },
        internationalPartnerships: { label: '国际伙伴关系', description: '国际合作、合资与伙伴关系' },
        researchStudies: { label: '研究与研究', description: '学术研究、地质研究与科学出版物' },
        dataAnalytics: { label: '数据与分析', description: '数据收集、分析方法与统计报告' },
        forecastingProjections: { label: '预测与展望', description: '未来展望、资源估算与发展预测' },
      },
      investment: {
        title: '投资门户',
        subtitle: '全面的投资信息',
         viewComplete: '查看完整投资门户',
         clickToExplore: '点击任何选项探索投资机会',
         framework: { label: '投资框架', description: '法律和监管结构' },
         opportunities: { label: '投资机会', description: '可用项目' },
         partnerships: { label: '合作模式', description: '合资企业和协议' },
         incentives: { label: '财务激励', description: '税收优惠和激励措施' },
         riskManagement: { label: '风险管理', description: '投资保护' },
         partners: { label: '国际合作伙伴', description: '全球合作伙伴关系' },
         process: { label: '投资流程', description: '分步指南' },
         statistics: { label: '投资统计', description: '市场数据和趋势' },
       },
       contact: {
         title: '联系门户',
         subtitle: '与我们联系',
         viewSection: '查看联系部分',
         clickToExplore: '点击任何选项进行联系',
         form: { label: '联系表单', description: '提交咨询' },
         offices: { label: '办公地点', description: '查找我们的办公室' },
         email: { label: '电子邮件联系', description: '电子邮件地址' },
         phone: { label: '电话目录', description: '联系电话' },
         departments: { label: '部门联系', description: '按部门' },
         international: { label: '国际办公室', description: '全球联系' },
         media: { label: '媒体咨询', description: '新闻和媒体' },
         partnerships: { label: '合作咨询', description: '商业合作伙伴关系' },
      },
    },
    detailPage: {
      backToHome: '返回首页',
      downloadReport: '下载报告',
      byTheNumbers: '数据统计',
      comprehensiveOverview: '全面概述',
      keyHighlights: '关键亮点',
      section: '部分',
      keyMetrics: '关键指标',
      strategicOverview: '战略概述与分析',
      mineralDetail: {
        downloadLabel: '下载投资简报',
        overviewTitle: '资源分析与战略评估',
        statsLabel: '资源指标',
        highlights: {
          worldClass: '世界级资源规模和质量',
          exceptionalValue: '卓越的经济价值潜力',
          comprehensiveFramework: '综合发展框架',
          sustainableCommitment: '可持续运营承诺',
        },
        sections: {
          inDepthAnalysis: '深入分析',
          technicalDetails: '技术细节',
          developmentRoadmap: '发展路线图',
          projectTimeline: '项目时间线',
        },
      },
      timelineDetail: {
        downloadLabel: '下载时间线报告',
        overviewTitle: '历史背景与战略分析',
        statsLabel: '时间线统计',
        errorLoading: '加载时间线错误',
        unableToLoad: '无法加载时间线数据：',
        highlights: {
          richHeritage: '丰富的6000多年采矿传统',
          comprehensiveRoadmap: '综合发展路线图',
          strategicMilestones: '战略里程碑和成就',
          sustainableVision: '可持续增长愿景',
        },
        sections: {
          historicalRecord: '历史记录',
          detailedTimeline: '详细时间线',
          achievements: '成就',
          keyMilestones: '关键里程碑',
          dataAnalysis: '数据分析',
          historicalDataVisualizations: '历史数据可视化',
          comparativeAnalysis: '比较分析',
          dataTablesComparisons: '数据表和比较',
          comprehensiveInformation: '综合信息',
          keyInformationCategories: '关键信息类别',
          impact: '影响：',
        },
      },
      investmentDetail: {
        downloadLabel: '下载投资指南',
        overviewTitle: '投资策略与框架',
        statsLabel: '投资统计',
        highlights: {
          investorFriendly: '投资者友好的法律框架',
          transparentProcedures: '透明的许可程序',
          arbitrationAccess: '国际仲裁准入',
          environmentalStandards: '综合环境标准',
        },
        sections: {
          investmentProcess: '投资流程',
          stepsToInvestment: '投资步骤',
          investmentBenefits: '投资效益',
          whyInvest: '为什么投资阿富汗',
        },
      },
      operationsDetail: {
        downloadLabel: '下载运营指南',
        overviewTitle: '运营卓越与框架',
        statsLabel: '运营统计',
        highlights: {
          worldClassStandards: '世界级运营标准',
          advancedTechnology: '先进技术整合',
          safetyProtocols: '综合安全协议',
          environmentalResponsibility: '环境责任',
        },
        sections: {
          operationalProcesses: '运营流程',
          processFramework: '流程框架',
          operationalBenefits: '运营效益',
          strategicAdvantages: '战略优势',
        },
      },
    },
    contactDetail: {
      downloadLabel: '下载联系目录',
      overviewTitle: '沟通与参与',
      statsLabel: '服务指标',
      highlights: {
        multipleChannels: '多种沟通渠道',
        responsiveService: '响应式服务标准',
        multiLanguage: '多语言支持',
        secureCommunications: '安全通信',
      },
      sections: {
        contactChannels: '联系渠道',
        howToReach: '如何联系我们',
        departments: '部门',
        ministryDepartments: '部委部门',
      },
    },
    notFound: {
      title: '404',
      message: '糟糕！找不到页面',
      returnHome: '返回首页',
    },
    mapSection: {
      provincesLabel: '34个省',
      title: '交互式资源地图',
      description: '探索阿富汗所有省份的矿产资源。将鼠标悬停在每个地区上，以发现主要矿床、估计价值和投资机会。',
      stats: {
        provinces: '省份',
        knownDeposits: '已知矿床',
        totalValue: '总价值',
        mineralTypes: '矿物类型',
      },
      legendHover: '悬停省份查看',
      legendDeposits: '矿产矿床',
    },
    imageGallery: {
      clickToView: '点击任何图像以全屏查看',
    },
    footer: {
      quote: '一个国家的力量不是通过它承受什么来衡量，而是通过它建设什么来衡量。这是基础。这是框架。这是阿富汗。',
      journey: '从韧性到复兴的旅程不是短跑而是马拉松——不是用天数来衡量，而是用世代来衡量。它从这里开始，现在，带着意图。',
      copyright: '© 2024 阿富汗国家经济改革计划',
      privacy: '隐私',
      terms: '条款',
      contact: '联系',
    },
    mineralsIndex: {
      title: '阿富汗的矿产资源',
      description: '探索34个省份中150多种矿物类型，代表世界上最重要的未开发矿产资源之一，价值超过30万亿美元。',
      searchPlaceholder: '搜索矿物、矿床或地点...',
    },
    investmentSectors: {
      badge: '50+ 行业',
      title: '探索投资领域',
      searchPlaceholder: '搜索行业、产业或关键词...',
    },
    vision2050: {
      learnMore: '了解更多',
    },
    mineralHero: {
      selectCategory: '选择一个类别进行探索',
      menuCategories: heroMenuTranslations.zh,
    },
    mineralsMegaMenu: {
      title: '阿富汗矿产门户',
      subtitle: '全面的矿产资源数据库',
      viewComplete: '查看完整注册表',
      clickToExplore: '点击任何矿产探索详情',
      strategicMetals: {
        copper: {
          title: '铜',
          items: {
            mesAynak: '梅斯艾纳克矿床',
            hajigak: '哈吉加克铜铁复合体',
            balkhab: '巴尔哈布矿床',
            processing: '铜加工',
            exports: '铜出口',
            smelting: '铜冶炼运营',
            logar: '洛加尔省矿床',
            refining: '铜精炼设施',
          },
        },
        lithium: {
          title: '锂',
          items: {
            ghazni: '加兹尼伟晶岩',
            nuristan: '努里斯坦矿床',
            batteryGrade: '电池级加工',
            evSupply: '电动汽车供应链',
            research: '研究中心',
            carbonate: '碳酸锂生产',
            spodumene: '锂辉石精矿',
            batteryMaterials: '电池材料制造',
          },
        },
        ironOre: {
          title: '铁矿石',
          items: {
            hajigak: '哈吉加克铁山',
            steelProduction: '钢铁生产计划',
            magnetite: '磁铁矿质量',
            infrastructure: '基础设施用钢',
            employment: '创造就业',
            beneficiation: '铁矿石选矿',
            pelletization: '球团厂',
            bamyan: '巴米扬省矿床',
          },
        },
        leadZinc: {
          title: '铅和锌',
          items: {
            aynak: '艾纳克铅锌矿床',
            zincConcentrate: '锌精矿生产',
            smelting: '铅冶炼运营',
            batteryMaterials: '电池制造材料',
          },
        },
        cobaltNickel: {
          title: '钴和镍',
          items: {
            cobalt: '钴矿床',
            nickel: '镍红土资源',
            alloys: '电池金属合金',
            evSupply: '电动汽车电池供应链',
          },
        },
        aluminum: {
          title: '铝和轻金属',
          items: {
            bauxite: '铝土矿矿床',
            alumina: '氧化铝生产',
            cryolite: '冰晶石矿床',
          },
        },
        strategicHardMetals: {
          title: '战略和硬质金属',
          items: {
            tungsten: '钨矿床',
            molybdenum: '钼矿床',
            vanadium: '钒矿床',
            titaniumRutile: '钛金红石',
            titaniumIlmenite: '钛钛铁矿',
            tin: '锡矿床',
            antimony: '锑矿床',
            zirconium: '锆矿床',
            tantalum: '钽矿床',
            yttrium: '钇矿床',
            scandium: '钪矿床',
            cerium: '铈矿床',
            gadolinium: '钆矿床',
          },
        },
        energyFuel: {
          title: '能源和燃料矿物',
          items: {
            uranium: '铀矿床',
            thorium: '钍矿床',
            lignite: '褐煤矿床',
            bituminousCoal: '烟煤变种',
          },
        },
      },
      preciousResources: {
        gemstones: {
          title: '宝石',
          items: {
            panjshirEmeralds: '潘杰希尔祖母绿',
            lapisLazuli: '巴达赫尚青金石',
            jegdalekRubies: '杰格达莱克红宝石',
            sapphires: '兴都库什蓝宝石',
            tourmaline: '努里斯坦碧玺',
            aquamarine: '库纳尔海蓝宝石',
            cutting: '宝石切割和抛光',
            certification: '宝石认证',
            trade: '国际宝石贸易',
            kunzite: '紫锂辉石和锂辉石',
            garnet: '石榴石矿床',
            peridot: '橄榄石资源',
          },
        },
        gold: {
          title: '黄金',
          items: {
            badakhshan: '巴达赫尚黄金带',
            takhar: '塔哈尔矿床',
            refining: '黄金精炼',
            artisanal: '手工采矿',
            bullion: '金条生产',
            processing: '黄金加工厂',
            exports: '黄金出口运营',
            placer: '砂金矿床',
            lode: '脉金矿脉',
          },
        },
        rareEarth: {
          title: '稀土元素',
          items: {
            helmand: '赫尔曼德稀土矿床',
            technology: '技术金属',
            neodymium: '钕和镨',
            globalSupply: '全球供应影响',
            research: '研究合作伙伴关系',
            concentrate: '稀土精矿加工',
            dysprosium: '镝和铽',
            separation: '稀土分离技术',
          },
        },
        silver: {
          title: '白银',
          items: {
            deposits: '白银矿床',
            refining: '白银精炼',
            leadOres: '银铅矿石',
            industrial: '工业白银应用',
          },
        },
      },
      industrialMinerals: {
        chromite: {
          title: '铬铁矿',
          items: {
            reserves: '铬铁矿储量',
            exports: '出口运营',
            steel: '不锈钢生产',
            mining: '铬铁矿开采运营',
            ferrochrome: '铬铁生产',
            logar: '洛加尔铬铁矿矿床',
          },
        },
        marble: {
          title: '大理石',
          items: {
            white: '优质白色大理石',
            herat: '赫拉特采石场',
            architectural: '建筑石材',
            processing: '大理石加工设施',
            exports: '大理石出口运营',
            varieties: '75+种颜色品种',
            trade: '国际石材贸易',
          },
        },
        coal: {
          title: '煤炭',
          items: {
            basins: '煤盆地',
            underground: '地下运营',
            baghlan: '巴格兰省',
            metallurgical: '冶金煤',
            thermal: '动力煤储量',
            processing: '煤炭加工厂',
            energy: '能源发电',
          },
        },
        talcBarite: {
          title: '滑石和重晶石',
          items: {
            talc: '高纯度滑石',
            drilling: '钻井重晶石',
            salt: '盐矿床',
            talcProcessing: '滑石加工',
            bariteConcentrates: '重晶石精矿',
            industrial: '工业应用',
          },
        },
        gypsumLimestone: {
          title: '石膏和石灰石',
          items: {
            gypsum: '石膏矿床',
            limestone: '石灰石采石场',
            cement: '水泥生产',
            construction: '建筑材料',
          },
        },
        clayKaolin: {
          title: '粘土和高岭土',
          items: {
            kaolin: '高岭土矿床',
            ceramic: '陶瓷粘土资源',
            pottery: '陶器和瓷砖制造',
            paper: '造纸工业应用',
            refractory: '耐火材料',
            paint: '涂料和涂层工业',
            pharmaceutical: '制药应用',
            cosmetic: '化妆品级高岭土',
          },
        },
        sulfurPyrite: {
          title: '硫和黄铁矿',
          items: {
            sulfur: '硫矿床',
            pyrite: '黄铁矿资源',
            fertilizer: '肥料生产',
            chemical: '化学工业',
            acid: '硫酸生产',
            mining: '采矿和提取',
            agricultural: '农业应用',
            processing: '黄铁矿加工',
          },
        },
        micaFeldspar: {
          title: '云母和长石',
          items: {
            mica: '云母矿床',
            feldspar: '长石资源',
            electronics: '电子工业',
            glass: '玻璃制造',
            sheets: '云母片生产',
            ceramic: '陶瓷和陶器',
            insulation: '绝缘材料',
            abrasive: '磨料应用',
          },
        },
        graphiteCarbon: {
          title: '石墨和碳',
          items: {
            graphite: '石墨矿床',
            battery: '电池阳极材料',
            steel: '钢铁生产',
            lubricant: '润滑剂应用',
            refractory: '耐火产品',
            carbonFiber: '碳纤维材料',
          },
        },
        phosphatePotash: {
          title: '磷酸盐和钾盐',
          items: {
            phosphate: '磷酸盐矿床',
            fertilizer: '肥料制造',
            agricultural: '农业营养素',
            food: '食品工业应用',
            potash: '钾盐资源',
            chemical: '化学加工',
          },
        },
        quartzSilica: {
          title: '石英和硅',
          items: {
            quartz: '石英矿床',
            silica: '硅砂资源',
            glass: '玻璃生产',
            semiconductor: '半导体工业',
            foundry: '铸造应用',
            filtration: '水过滤',
          },
        },
        refractories: {
          title: '耐火材料和工业矿物',
          items: {
            magnesite: '菱镁矿矿床',
            bentonite: '膨润土矿床',
            pyrophyllite: '叶蜡石矿床',
            asbestos: '石棉矿床',
            ballClay: '球粘土矿床',
            kaolinVariants: '高岭土变种',
            diatomite: '硅藻土矿床',
          },
        },
        dimensionStones: {
          title: '尺寸和装饰石材',
          items: {
            granite: '花岗岩矿床',
            sandstone: '砂岩矿床',
            travertine: '石灰华矿床',
            soapstone: '皂石矿床',
            quartzite: '石英岩矿床',
            dioriteGabbro: '闪长岩 / 辉长岩',
          },
        },
      },
    },
    provinceDetail: {
      resourceProfile: '省级资源概况',
       provincialStatistics: '省级统计',
       downloadBrief: '下载投资简报',
       mineralResources: '矿产资源',
       keyDeposits: '主要矿产矿床',
       opportunities: '机会',
       investmentOpportunities: '投资机会',
       developmentTimeline: '发展时间线',
       keyMilestones: '关键里程碑',
       highlights: {
         richPotential: '丰富的矿产资源潜力',
         strategicOpportunities: '战略发展机会',
         investmentReady: '准备投资的项目',
         infrastructurePlans: '基础设施发展计划',
       },
     },
     hero: {
       tagline: '来自阿富汗人民，为阿富汗人民，由阿富汗人民。',
       title: '阿富汗国家经济改革计划',
       subtitle: '一个国家的未来不是用偶然的语言书写的，而是用意志的建筑书写的。这个联合体正是那种意志的体现——一个旨在将阿富汗从坚韧带向复兴的活框架。',
       cta: '探索投资机会',
     },
     stats: {
       mineralReserves: '矿产储量',
       knownDeposits: '已知矿床',
       mineralTypes: '矿物类型',
       provinces: '省份',
       estimatedValue: '估计总价值',
       acrossProvinces: '遍布所有省份',
       criticalStrategic: '关键战略资源',
       resourceRich: '资源丰富地区',
     },
     sectors: {
       copper: '铜',
       lithium: '锂',
       gold: '黄金',
       gemstones: '宝石',
       iron: '铁矿石',
       rareEarth: '稀土元素',
       chromite: '铬铁矿',
       marble: '大理石',
       coal: '煤炭',
       silver: '银',
       tungsten: '钨',
       uranium: '铀',
       salt: '盐',
       gypsum: '石膏',
       talc: '滑石',
       lead: '铅',
       zinc: '锌',
       limestone: '石灰石',
       naturalGas: '天然气',
       niobium: '铌',
       tantalum: '钽',
       tourmaline: '碧玺',
       aquamarine: '海蓝宝石',
     },
     contact: {
       title: '投资咨询',
        subtitle: '联系 NERPA 联系团队',
       addressLabel: '地址',
       emailLabel: '电子邮件',
       phoneLabel: '电话',
       addressValue: '伦敦，英国 | 喀布尔，阿富汗',
       name: '全名',
       email: '电子邮件地址',
       organization: '组织机构',
       sector: '感兴趣的行业',
       message: '留言',
      submit: '提交咨询',
      submitting: '提交中...',
      success: '您的咨询已成功提交。我们的团队将很快与您联系。',
      error: '提交咨询时出错。请重试。',
      successTitle: '成功',
      errorTitle: '错误',
      submitAnother: '提交另一个咨询',
      selectSector: '选择行业',
       namePlaceholder: '请输入您的全名',
       emailPlaceholder: '请输入您的电子邮件地址',
       organizationPlaceholder: '请输入您的组织名称',
       messagePlaceholder: '描述您的投资兴趣或咨询...',
     },
     common: {
       learnMore: '了解更多',
       viewDetails: '查看详情',
       explore: '探索',
       readMore: '阅读更多',
       trillion: '万亿',
       billion: '十亿',
       million: '百万',
     },
    expanded: {
      megaReserves: '30万亿美元矿产储量',
      globalLeader: '全球采矿领导者',
      economicTransformation: '经济转型',
      sustainableFuture: '可持续未来',
      strategicPartnerships: '战略全球伙伴关系',
      technologyInnovation: '技术与创新',
      communityProsperity: '社区繁荣',
    },
    provinces: {
      title: '阿富汗省份',
      subtitle: '34个资源丰富地区',
      explore: '探索省份',
      mineralResources: '矿产资源',
      investmentOpportunities: '投资机会',
      viewDetails: '查看省份详情',
    },
    investment: {
      framework: '投资框架',
      opportunities: '投资机会',
      partnerships: '合作模式',
      incentives: '财政激励',
      process: '投资流程',
    },
    timeline: {
      historical: '历史时间线',
      roadmap: '发展路线图',
      milestones: '项目里程碑',
      vision2030: '2026-2050愿景',
    },
    footerMegaMenu: {
      sustainability: '可持续性',
      resources: '资源',
      about: '关于',
      viewAllProvinces: '查看全部34个省份 →',
      environmentalProtection: '环境保护',
      communityDevelopment: '社区发展',
      healthSafety: '健康与安全',
      workforceDevelopment: '劳动力发展',
      landRestoration: '土地恢复',
      waterStewardship: '水资源管理',
      reports: '年度报告',
      geologicalData: '地质数据',
      investmentGuides: '投资指南',
      maps: '交互式地图',
      statistics: '统计数据',
      publications: '出版物',
      researchPapers: '研究论文',
      downloads: '下载',
      quickLinks: '快速链接',
      overview: '概述',
      minerals: '矿产',
      operations: '运营',
      investment: '投资',
      processing: '加工',
      smelting: '冶炼',
      research: '研究',
      trade: '贸易',
      framework: '框架',
      opportunities: '机会',
      partnerships: '合作伙伴关系',
      process: '流程',
      environmental: '环境',
      community: '社区',
      safety: '安全',
      workforce: '劳动力',
      legal: '法律',
      cookies: 'Cookie',
      accessibility: '可访问性',
      aboutUs: '关于我们',
      mission: '使命',
      vision: '愿景',
      team: '我们的团队',
      partners: '合作伙伴',
      careers: '职业',
      news: '新闻与更新',
      faq: '常见问题',
      technology: '技术',
      digitalMining: '数字采矿',
      aiAutomation: '人工智能与自动化',
      dataAnalytics: '数据分析',
      remoteSensing: '遥感',
      blockchain: '区块链追溯',
      iot: '物联网与传感器',
      robotics: '采矿机器人',
      innovation: '创新中心',
      education: '教育',
      miningUniversity: '采矿大学',
      trainingPrograms: '培训计划',
      scholarships: '奖学金',
      researchCenters: '研究中心',
      onlineCourses: '在线课程',
      certifications: '认证',
      workshops: '研讨会',
      studentResources: '学生资源',
      media: '媒体',
      pressReleases: '新闻稿',
      newsArticles: '新闻文章',
      photoGallery: '照片库',
      videoLibrary: '视频库',
      socialMedia: '社交媒体',
      mediaKit: '媒体工具包',
      events: '活动',
      subscribe: '订阅',
      support: '支持',
      helpCenter: '帮助中心',
      documentation: '文档',
      apiDocs: 'API文档',
      tutorials: '教程',
      bugReport: '报告错误',
      featureRequest: '功能请求',
      contactSupport: '联系支持',
      becomePartner: '成为合作伙伴',
      currentPartners: '当前合作伙伴',
      partnerPrograms: '合作伙伴计划',
      jointVentures: '合资企业',
      supplierNetwork: '供应商网络',
      technologyPartners: '技术合作伙伴',
      academicPartners: '学术合作伙伴',
      ngoPartners: '非政府组织合作伙伴',
      compliance: '合规',
      regulations: '法规',
      environmentalCompliance: '环境合规',
      safetyStandards: '安全标准',
      laborStandards: '劳动标准',
      audits: '审计与报告',
      codeOfConduct: '行为准则',
      whistleblower: '举报政策',
      jobOpenings: '职位空缺',
      internships: '实习',
      benefits: '福利',
      culture: '公司文化',
      diversity: '多样性与包容性',
      applyNow: '立即申请',
      employeePortal: '员工门户',
      referralProgram: '推荐计划',
      geological: '地质',
      exploration: '勘探',
      incentives: '激励措施',
      disclaimer: '免责声明',
      connect: '联系',
      email: '电子邮件',
      phone: '电话',
      offices: '办公室',
    },
    statsLabels: {
      mineralReserves: '矿产储量',
      knownDeposits: '已知矿床',
      mineralTypes: '矿物类型',
      provinces: '省份',
      metricTons: '公吨',
      value: '价值',
      majorDeposits: '主要矿床',
      target: '目标',
      globalRank: '全球排名',
      globalShare: '全球份额',
      gemstoneRegions: '宝石地区',
      types: '类型',
      years: '年',
      annual: '年度',
      ironOreReserves: '铁矿石储量',
      jobs: '就业',
      goldReserves: '黄金储量',
      goldBelts: '黄金带',
      artisanalMiners: '手工矿工',
      reeElements: '稀土元素',
      estimatedValue: '估计价值',
      underExploration: '勘探中',
      supplyImpact: '供应影响',
      provenReserves: '探明储量',
      deposits: '矿床',
      primaryUse: '主要用途',
      cubicMeters: '立方米',
      colors: '颜色',
      annualPotential: '年度潜力',
      qualityGrade: '质量等级',
      coalReserves: '煤炭储量',
      highQuality: '高质量',
      majorBasins: '主要盆地',
      strategicRole: '战略作用',
      yearlyPotential: '年度潜力',
    },
    descriptions: {
      estimatedTotalValue: '估计总价值',
      acrossAllProvinces: '遍布所有省份',
      criticalAndStrategic: '关键战略资源',
      resourceRichRegions: '资源丰富地区',
      estimatedReserves: '估计储量',
      currentMarketEstimate: '当前市场估计',
      activeExplorationSites: '活跃勘探地点',
      fullProductionCapacity: '全面生产能力',
      largestReserves: '最大储量',
      strategicImportance: '战略重要性',
      potentialContribution: '潜在贡献',
      preciousSemiPrecious: '珍贵和半珍贵',
      miningHeritage: '采矿传统',
      exportPotential: '出口潜力',
      estimatedWorth: '估计价值',
      identifiedDeposits: '已识别矿床',
      employmentPotential: '就业潜力',
      atCurrentPrices: '按当前价格',
      majorFormations: '主要构造',
      currentlyActive: '目前活跃',
      identifiedSpecies: '已识别种类',
      strategicResources: '战略资源',
      potentialDiversification: '潜在多样化',
      exportPotentialValue: '出口潜力',
      acrossProvinces: '跨省份',
      industrialApplication: '工业应用',
      uniqueVarieties: '独特品种',
      exportRevenue: '出口收入',
      internationalStandard: '国际标准',
      metallurgicalGrade: '冶金等级',
      domesticSupply: '国内供应',
    },
    indexPage: {
      hero: {
        title: '采矿与矿产',
        subtitle: '资源主权的故事',
        readMore: '阅读更多',
      },
      overview: {
        title: '资源主权',
        subtitle: '基础',
        description: '阿富汗拥有世界上最重要的未开发矿产资源之一，价值超过30万亿美元。这种非凡的自然资源财富——从锂和铜到稀土元素和珍贵宝石——代表着国家繁荣、区域发展以及中亚及更广泛地区完全经济转型的前所未有的机遇。',
        statsTitle: '矿产资源概览',
        statsSubtitle: '数据统计',
      },
      geological: {
        title: '地质框架',
        subtitle: '深时遗产',
        description: '阿富汗非凡的矿产资源源于其位于三大构造板块交汇处的独特位置。数亿年来，这些地质力量创造了矿化带、变质带和侵入复合体，现在承载着世界级的矿床。',
        quote: '阿富汗土壤下的矿产资源不仅代表经济机遇，更是繁荣和自力更生国家的基础。',
      },
      nationalStrategy: {
        title: '国家战略',
        subtitle: '战略愿景',
        description: '全面的国家矿产战略指导可持续发展，平衡经济增长与环境保护和社区利益。这一框架确保矿产资源服务于所有阿富汗人，同时吸引负责任的国际投资。',
      },
      economicImpact: {
        title: '经济转型',
        subtitle: '国家繁荣',
        description: '阿富汗矿产部门的发展将改变国民经济，创造数十万个就业机会，产生数十亿美元的出口收入，并为工业发展和经济独立奠定基础。',
      },
      copper: {
        title: '铜矿卓越',
        subtitle: '战略金属',
        description: '阿富汗的铜储量位居世界最大的未开发矿床之列，总估计储量超过6亿公吨，价值$8T。仅Mes Aynak矿床就含有约1.25亿吨铜，加上多个省份的50多个主要矿床，为工业发展和经济转型创造了无与伦比的基础。',
        statsTitle: '铜资源',
        statsSubtitle: '矿床分析',
        detailTitle: '铜开发',
        detailSubtitle: '项目与基础设施',
        detailDescription: '从勘探到加工的全面铜部门发展，专注于可持续开采和价值增加。',
        processingTitle: '铜加工',
        processingSubtitle: '价值增加',
        processingDescription: '现代铜加工设施将把原矿转化为精炼铜产品，在国内获取价值，并在冶炼、精炼和制造业务中创造熟练就业机会。',
      },
      lithium: {
        title: '锂的未来',
        subtitle: '能源转型',
        description: '随着世界向电动汽车和可再生能源存储转型，阿富汗巨大的锂储量——估计为2.15亿公吨，价值8万亿美元——使该国成为这一关键矿产无可争议的全球领导者。拥有世界已知锂储量的45%，阿富汗将定义清洁能源革命的未来。',
        statsTitle: '锂潜力',
        statsSubtitle: '全球重要性',
        detailTitle: '锂战略',
        detailSubtitle: '发展框架',
        detailDescription: '战略性开发锂资源以满足全球对电动汽车电池和能源存储系统的需求。',
        geologyTitle: '伟晶岩地质',
        geologySubtitle: '锂形成',
        geologyDescription: '阿富汗的含锂伟晶岩通过花岗岩岩浆的缓慢结晶形成，含有异常浓度的锂辉石和锂云母——为全球清洁能源转型提供动力的主要锂矿石矿物。',
        quote: '阿富汗的锂矿床可以为全球向清洁能源的转型提供动力，使该国成为应对气候变化的重要合作伙伴。',
      },
      gold: {
        title: '黄金遗产',
        subtitle: '贵金属',
        description: '阿富汗的黄金储量达27,000公吨，分布在从巴达赫尚到塔哈尔的45个主要黄金带，既代表了古老的手工传统，也代表了前所未有的工业机遇。拥有价值4.4万亿美元的储量，支持35万手工矿工，阿富汗有望成为全球贵金属市场的主导力量。',
        statsTitle: '黄金资源',
        statsSubtitle: '古老财富',
        detailTitle: '黄金部门发展',
        detailSubtitle: '开采与加工',
        detailDescription: '现代化黄金开采业务，专注于手工矿工整合、环境合规和价值链发展。',
        depositsTitle: '原生金矿床',
        depositsSubtitle: '硬岩开采',
        depositsDescription: '阿富汗的原生金矿床出现在与造山事件相关的石英脉中，含有可见金和硫化物承载的矿化，需要现代加工技术。',
      },
      gemstones: {
        title: '地球的宝藏',
        subtitle: '珍贵宝石',
        description: '从传奇的潘杰希尔祖母绿到巴达赫尚古老的青金石矿，阿富汗的宝石遗产跨越六千年。这些珍贵宝石沿着丝绸之路交易，在全球市场上继续获得溢价。',
        statsTitle: '宝石遗产',
        statsSubtitle: '古老宝藏',
        detailTitle: '宝石卓越',
        detailSubtitle: '开采与加工',
        detailDescription: '发展可持续的宝石开采和加工能力，具有国际认证和质量保证。',
      },
      detailItems: {
        copper: [
          { title: 'Mes Aynak矿床', description: '世界上最大的未开发铜矿床之一，位于洛加尔省，估计有125m吨铜。' },
          { title: 'Hajigak储量', description: '巴米扬省的大型铜-铁复合体，包含价值超过$2T的铜和铁矿石储量。' },
          { title: 'Balkhab矿床', description: '阿富汗北部重要的铜矿化，勘探显示高品位铜浓度。' },
          { title: '加工基础设施', description: '开发现代铜加工设施，包括冶炼厂和精炼厂，用于国内增值。' },
          { title: '环境标准', description: '实施国际环境标准，实现可持续的铜开采和加工。' },
          { title: '出口战略', description: '与全球铜市场建立战略伙伴关系，开发高效的出口走廊。' },
        ],
        lithium: [
          { title: '加兹尼矿床', description: '在加兹尼省发现的主要含锂伟晶岩形成，具有极高的纯度水平。' },
          { title: '努里斯坦地区', description: '横跨多山的努里斯坦省的广泛锂矿化，是全球最大的矿床之一。' },
          { title: '电池级锂', description: '开发加工能力，生产用于电动汽车市场的电池级碳酸锂。' },
          { title: '战略伙伴关系', description: '与领先的科技公司就可持续锂提取和加工进行谈判。' },
          { title: '研究设施', description: '建立锂研究中心，开发创新的提取技术。' },
          { title: '全球供应链', description: '融入全球锂供应链，服务于电子和可再生能源行业。' },
        ],
        gold: [
          { title: '巴达赫尚金带', description: '沿巴达赫尚地质带广泛的金矿化，拥有多个高品位矿床。' },
          { title: '塔哈尔矿床', description: '塔哈尔省重要的冲积和硬岩金矿床，有活跃的手工开采。' },
          { title: '现代提取', description: '实施现代金提取技术，提高回收率并减少环境影响。' },
          { title: '精炼能力', description: '开发金精炼设施，生产国际标准的金条和金锭。' },
          { title: '手工矿工整合', description: '通过培训和设备支持，将手工矿工纳入正规经济的计划。' },
          { title: '安全与保证', description: '实施无冲突金认证和可追溯性系统。' },
        ],
        gemstones: [
          { title: '潘杰希尔祖母绿', description: '潘杰希尔山谷中世界著名的祖母绿矿，生产全球收藏家追求的优质宝石。' },
          { title: '巴达赫尚青金石', description: '来自巴达赫尚古老矿山的世界上最好的青金石，沿丝绸之路交易了数千年。' },
          { title: '红宝石和蓝宝石', description: '全国多个省份的高质量刚玉矿床，产出红宝石和蓝宝石。' },
          { title: '碧玺品种', description: '多样化的碧玺矿床，包括稀有的西瓜碧玺和靛蓝碧玺，深受宝石爱好者珍视。' },
          { title: '宝石加工', description: '开发宝石切割和抛光设施，在出口前增加价值。' },
          { title: '认证系统', description: '为阿富汗宝石实施宝石学认证和原产地追溯。' },
        ],
        iron: [
          { title: 'Hajigak铁矿', description: '阿富汗中部亚洲最大的铁矿石矿床之一，储量超过220亿吨。' },
          { title: '钢铁生产', description: '计划建设综合钢铁生产设施，满足国内建筑需求。' },
          { title: '基础设施用钢', description: '对包括桥梁和建筑物在内的国家基础设施发展具有战略重要性。' },
          { title: '出口潜力', description: '开发铁矿石出口能力，面向南亚和中亚的区域市场。' },
          { title: '磁铁矿质量', description: '适合直接还原炼铁工艺的高品位磁铁矿矿床。' },
          { title: '创造就业', description: '在采矿和加工领域创造数万个直接和间接就业机会的潜力。' },
        ],
        rareEarth: [
          { title: '赫尔曼德矿床', description: '在赫尔曼德省发现的显著稀土元素浓度，具有多样化的元素特征。' },
          { title: '技术矿物', description: '对电子、可再生能源和国防应用至关重要的矿物，具有全球战略重要性。' },
          { title: '加工技术', description: '开发环境友好的稀土加工和分离技术。' },
          { title: '钕和镨', description: '用于电动汽车和风力涡轮机的永磁体的关键元素。' },
          { title: '供应安全', description: '有潜力减少全球对单一来源稀土供应的依赖。' },
          { title: '研究合作', description: '稀土研究和可持续提取方法的国际伙伴关系。' },
        ],
        industrial: [
          { title: '大理石和花岗岩', description: '世界级的大理石矿床，多种颜色和图案，出口用于全球建筑应用。' },
          { title: '滑石和皂石', description: '高纯度滑石矿床，用于化妆品、制药和工业应用。' },
          { title: '铬铁矿储量', description: '对不锈钢生产和化学工业至关重要的重要铬铁矿矿床。' },
          { title: '重晶石生产', description: '用于石油钻探应用和工业化学品生产的高质量重晶石。' },
          { title: '盐矿床', description: '用于食品加工和化学工业的广泛岩盐和蒸发盐矿床。' },
          { title: '水泥材料', description: '支持国内水泥生产能力的石灰石和粘土矿床。' },
        ],
        processing: [
          { title: '冶炼设施', description: '用于铜、铁和其他金属的现代冶炼作业，配备污染控制系统。' },
          { title: '精炼能力', description: '开发矿物精炼基础设施，用于出口前的增值加工。' },
          { title: '质量控制', description: '实施国际质量标准并建立测试实验室。' },
          { title: '破碎和筛分', description: '先进的矿物加工设备，用于高效的矿石准备和浓缩。' },
          { title: '尾矿管理', description: '环境友好的尾矿储存和处理设施。' },
          { title: '能源系统', description: '可再生能源整合，用于可持续的采矿和加工作业。' },
        ],
        research: [
          { title: '地质调查', description: '在所有省份进行全面的地质测绘和资源评估。' },
          { title: '岩心钻探', description: '广泛的勘探钻探计划，以量化矿产资源和储量。' },
          { title: '实验室分析', description: '用于矿物表征和品位确定的现代分析实验室。' },
          { title: '数据管理', description: '用于地质数据、勘探结果和资源估算的数字数据库。' },
          { title: '学术伙伴关系', description: '与国际大学合作进行地质研究和培训。' },
          { title: '技术转让', description: '在勘探和采矿技术方面建立本地技术能力的计划。' },
        ],
        trade: [
          { title: '出口走廊', description: '通过巴基斯坦、伊朗和中亚邻国开发高效的出口路线。' },
          { title: '贸易协定', description: '双边和多边贸易协定，以促进矿产出口。' },
          { title: '定价机制', description: '基于国际商品市场和质量标准的透明定价。' },
          { title: '物流基础设施', description: '投资道路、铁路和边境设施，用于矿产运输。' },
          { title: '市场多元化', description: '进入亚洲、欧洲和中东多样化市场的战略。' },
          { title: '价值链发展', description: '通过加工在出口前增加价值的重点。' },
        ],
        sustainability: [
          { title: '环境保护', description: '对采矿作业的严格环境法规和监测。' },
          { title: '社区发展', description: '在采矿地区的收入分享和社区发展计划。' },
          { title: '水资源管理', description: '在采矿和加工作业中可持续使用和处理水资源。' },
          { title: '复垦计划', description: '所有作业的矿山关闭和土地复垦要求。' },
          { title: '健康与安全', description: '采矿作业中工人健康和安全的国家标准。' },
          { title: '气候考虑', description: '在采矿规划中整合气候变化考虑因素。' },
        ],
      },
      iron: {
        title: '钢铁基础',
        subtitle: '工业基础',
        description: '巨大的Hajigak铁矿石矿床和其他100个主要地点代表了阿富汗工业未来的基础。储量超过220亿吨，价值3.5万亿美元，阿富汗拥有足够的铁矿石，可以供应全球钢铁生产数十年，有可能创造50万个直接就业机会。',
        statsTitle: '铁资源',
        statsSubtitle: '工业潜力',
        detailTitle: '钢铁发展',
        detailSubtitle: '价值链',
        detailDescription: '铁矿石开采和钢铁生产的综合发展，以支持国家基础设施并创造就业。',
        processingTitle: '钢铁生产',
        processingSubtitle: '工业能力',
        processingDescription: '开发综合钢铁生产设施将改变阿富汗的建筑行业，减少对进口的依赖，并在加工和制造领域创造数千个工业就业机会。',
      },
      rareEarth: {
        title: '战略元素',
        subtitle: '稀土矿物',
        description: '对现代技术至关重要的关键稀土元素——从智能手机到电动汽车再到风力涡轮机——已在阿富汗的40个主要矿床中发现，总估计价值为5万亿美元。这使阿富汗成为全球技术供应链的关键参与者，能够改变整个稀土市场格局。',
        statsTitle: '稀土潜力',
        statsSubtitle: '技术金属',
        detailTitle: '稀土发展',
        detailSubtitle: '技术矿物',
        detailDescription: '战略性开发稀土资源，以支持全球技术产业和可再生能源转型。',
      },
      lapis: {
        title: '蓝色遗产',
        subtitle: '青金石',
        description: '巴达赫尚的古老青金石矿已经为世界提供了6000多年的这种珍贵蓝色石头。从图坦卡蒙的死亡面具到文艺复兴时期的杰作，阿富汗青金石仍然是世界上最好的。',
      },
      emerald: {
        title: '绿色火焰',
        subtitle: '潘杰希尔祖母绿',
        description: '潘杰希尔山谷的祖母绿是世界上最珍贵的宝石之一，展现出卓越的颜色饱和度和透明度。这些在变质云母片岩中形成的宝石在国际市场上获得溢价。',
      },
      ruby: {
        title: '刚玉宝藏',
        subtitle: '红宝石和蓝宝石',
        description: '阿富汗从多个省份的大理石矿床中生产出优质的红宝石和蓝宝石。Jegdalek的鸽血红红宝石和兴都库什的蓝宝石位列世界上最好的刚玉标本。',
      },
      tourmaline: {
        title: '彩虹水晶',
        subtitle: '碧玺品种',
        description: '阿富汗生产一些世界上最壮观的碧玺标本，包括稀有的西瓜碧玺和靛蓝碧玺，受到全球收藏家和珠宝商的追捧。',
      },
      aquamarine: {
        title: '海蓝水晶',
        subtitle: '海蓝宝石宝藏',
        description: '库纳尔和努里斯坦省的伟晶岩田产出优质的海蓝宝石晶体，以其纯蓝色和卓越的透明度而珍贵，可与世界上任何地方的标本相媲美。',
      },
      chromite: {
        title: '金属基础',
        subtitle: '铬铁矿储量',
        description: '对不锈钢生产和工业化学品至关重要，阿富汗的铬铁矿矿床代表了巨大的出口潜力和工业发展机会。',
        statsTitle: '铬铁矿资源',
        statsSubtitle: '工业金属',
      },
      marble: {
        title: '王者之石',
        subtitle: '大理石和花岗岩',
        description: '阿富汗大理石以其卓越的质量和多样的颜色而闻名，装饰着世界各地的建筑杰作。国家的大理石采石场生产的石头可与最好的意大利和土耳其品种相媲美。',
        statsTitle: '大理石资源',
        statsSubtitle: '优质石材',
      },
      coal: {
        title: '能源资源',
        subtitle: '煤炭矿床',
        description: '多个省份的大量煤炭储量提供能源安全并支持工业发展，重点是清洁煤炭技术和负责任的提取实践。',
        statsTitle: '煤炭资源',
        statsSubtitle: '能源安全',
      },
      industrial: {
        title: '工业基础',
        subtitle: '建筑和制造',
        description: '除了贵金属和战略矿物，阿富汗拥有大量的工业矿物储量——大理石、铬铁矿、滑石和水泥材料——对建筑和制造行业至关重要。',
        detailTitle: '工业矿物',
        detailSubtitle: '建筑材料',
        detailDescription: '开发工业矿物资源，以支持国内建筑和制造行业。',
      },
      processing: {
        title: '增值',
        subtitle: '加工和精炼',
        description: '现代矿物加工基础设施将原矿转化为精炼产品，在国内获取价值，并在整个采矿价值链中创造熟练的就业机会。',
        detailTitle: '加工基础设施',
        detailSubtitle: '工业能力',
        detailDescription: '开发现代加工设施，用于增值和出口竞争力。',
      },
      research: {
        title: '知识基础',
        subtitle: '研究和勘探',
        description: '建立地质研究、资源评估和采矿技术开发的科学能力。',
        detailTitle: '研发',
        detailSubtitle: '科学卓越',
        detailDescription: '建立地质研究、资源评估和采矿技术开发的科学能力。',
      },
      trade: {
        title: '全球市场',
        subtitle: '贸易和出口',
        description: '建立出口基础设施和贸易关系，以优化矿产收入。',
        detailTitle: '贸易发展',
        detailSubtitle: '市场准入',
        detailDescription: '建立出口基础设施和贸易关系，以优化矿产收入。',
      },
      sustainability: {
        title: '负责任的采矿',
        subtitle: '可持续性',
        description: '在所有采矿作业中整合环境保护、社区利益和负责任的治理。',
        detailTitle: '可持续发展',
        detailSubtitle: '环境和社会',
        detailDescription: '在所有采矿作业中整合环境保护、社区利益和负责任的治理。',
      },
      timeline: {
        sectionTitle: '发展路线图',
        sectionSubtitle: '战略时间线',
        year2024: { title: '国家矿产战略启动', description: '可持续矿产发展和出口优化的综合国家战略。' },
        year2025: { title: '地质调查完成', description: '完成所有34个省份的详细地质调查，并进行资源量化。' },
        year2026: { title: '加工基础设施', description: '首批现代铜和锂加工设施落成。' },
        year2027: { title: '铁路发展', description: '完成连接主要矿床与出口终端的矿产铁路。' },
        year2028: { title: '出口走廊发展', description: '完成连接采矿区域与出口点的主要交通基础设施。' },
        year2029: { title: '冶炼运营', description: '启动首批用于铜和铁加工的综合冶炼设施。' },
        year2030: { title: '生产规模扩大', description: '在完全符合环境标准的情况下实现重大矿产生产目标。' },
        year2032: { title: '锂生产', description: '开始为全球电池市场进行商业锂生产。' },
        year2035: { title: '价值链成熟', description: '建立从开采到成品的综合矿产价值链。' },
      },
      mesAynakLegacy: {
        title: 'Mes Aynak遗产',
        subtitle: '考古遗产',
        description: 'Mes Aynak铜矿床位于世界上最重要的佛教考古遗址之一之上。开发计划仔细平衡矿物开采与保护2000年历史的寺院、佛塔和文物。',
      },
      copperOpenPit: {
        title: '巨型铜矿运营',
        subtitle: '露天开采',
        description: '大型露天铜矿运营采用阶梯式开采方法，每年运输数百万吨矿石，由400吨运输卡车车队在阿富汗壮观的山区景观中24小时不间断运营。',
      },
      moltenCopper: {
        title: '熔融铜',
        subtitle: '冶炼作业',
        description: '最先进的铜冶炼炉将精矿转化为99.9%纯度的铜阴极。在1200°C的熔融铜通过精密控制的过程流动，创造出准备出口的精炼金属。',
      },
      spodumeneCrystals: {
        title: '锂辉石晶体',
        subtitle: '电池金属来源',
        description: '来自阿富汗伟晶岩的含锂锂辉石晶体含有高达8%的氧化锂——全球最高品位之一。这些棱柱状晶体构成了电动汽车革命电池供应链的基础。',
      },
      deepGoldMining: {
        title: '深部金矿开采',
        subtitle: '地下作业',
        description: '现代地下金矿开采作业进入山区地层深处的高品位矿体。LED照明的隧道揭示含金石英脉，而开采团队使用精密设备工作。',
      },
      goldRefining: {
        title: '黄金精炼',
        subtitle: '贵金属加工',
        description: '黄金精炼作业将原矿转化为投资级金条。熔融黄金倒入精密模具，创造出99.99%纯度的金条，用于国际市场和央行储备。',
      },
      panjshirEmeraldCrystals: {
        title: '潘杰希尔祖母绿晶体',
        subtitle: '世界级标本',
        description: '来自潘杰希尔山谷的原始祖母绿晶体展现出卓越的颜色饱和度和透明度。这些六边形宝石嵌入其原始云母片岩基质中，在国际宝石市场上获得溢价。',
      },
      hajigakIronMountain: {
        title: 'Hajigak铁山',
        subtitle: '亚洲最大矿床',
        description: '巴米扬省巨大的Hajigak铁矿石矿床估计含有22亿吨高品位铁矿石。这座红褐色山脉代表了阿富汗工业钢铁未来的基础。',
      },
      lapisAncientMines: {
        title: '6000年的天蓝色',
        subtitle: '古代青金石矿',
        description: '巴达赫尚的古代青金石矿已经连续运营了六千年。蓝色条纹的岩面揭示了群青颜料的来源，这种颜料为文艺复兴时期的杰作和埃及皇家墓室着色。',
      },
      jegdalekRubies: {
        title: '杰格达莱克红宝石',
        subtitle: '鸽血红卓越',
        description: '杰格达莱克红宝石矿床生产世界上最好的鸽血红红宝石——深红色宝石，具有卓越的透明度和荧光，在质量上与缅甸宝石相媲美，在拍卖会上获得溢价。',
      },
      hinduKushSapphires: {
        title: '兴都库什蓝宝石',
        subtitle: '矢车菊蓝宝藏',
        description: '兴都库什山脉从大理石宿主矿床中产出卓越的矢车菊蓝蓝宝石。这些刚玉宝石展现出收藏家和珠宝商在全球范围内追求的珍贵天鹅绒蓝色。',
      },
      nuristanTourmaline: {
        title: '努里斯坦碧玺',
        subtitle: '彩虹晶体',
        description: '努里斯坦省生产壮观的碧玺标本，包括罕见的西瓜品种，中心为粉红色，边缘为绿色，以及备受追捧的靛蓝蓝色和红电气石粉色晶体。',
      },
      kunarAquamarine: {
        title: '库纳尔海蓝宝石',
        subtitle: '海蓝绿柱石',
        description: '库纳尔省的伟晶岩田地产出卓越的海蓝宝石晶体——白色长石基质上的淡海蓝色六边形宝石，在透明度和颜色强度上与世界上任何地方的标本相媲美。',
      },
      strategicREEConcentrate: {
        title: '战略稀土精矿',
        subtitle: '技术金属',
        description: '来自阿富汗矿床的稀土元素精矿含有智能手机、风力涡轮机和电动汽车所必需的关键材料。实验室分析显示17种不同的稀土物种，纯度水平卓越。',
      },
      chromiteExportOperations: {
        title: '铬铁矿出口作业',
        subtitle: '工业金属贸易',
        description: '大量铬铁矿石库存等待出口到国际不锈钢制造商。工业装载设备每天处理数千吨，满足全球对这种重要冶金材料的需求。',
      },
      premiumWhiteMarble: {
        title: '优质白色大理石',
        subtitle: '建筑石材',
        description: '阿富汗原始白色大理石采石场生产的石材在质量上与意大利卡拉拉大理石相媲美。带有微妙灰色纹理的巨大块体被开采用于全球的建筑项目和雕塑作品。',
      },
      undergroundCoalOperations: {
        title: '地下煤炭作业',
        subtitle: '能源安全',
        description: '现代地下煤炭开采作业进入冶金级煤炭的厚煤层。连续采煤机24小时轮班工作，提取为国内工业和基础设施发展提供动力的能源资源。',
      },
      processingPlantOperations: {
        title: '加工厂作业',
        subtitle: '增值',
        description: '在现代矿物加工设施内，输送系统将破碎的矿石通过浮选槽、重力分离器和磁选机移动。熟练的操作员监控选矿过程的每个阶段。',
      },
      coreSampleAnalysis: {
        title: '岩心样本分析',
        subtitle: '地质情报',
        description: '排列在木箱中的地质岩心样本揭示了阿富汗矿床的地下财富。显示铜、金和稀土矿化的彩色矿石区域指导勘探和开发决策。',
      },
      explorationDrilling: {
        title: '勘探钻探',
        subtitle: '发现作业',
        description: '偏远山区站点的金刚石钻机提取圆柱形岩心样本，揭示数百米以下的地质情况。勘探团队在壮观的兴都库什背景下工作，绘制新的矿物发现地图。',
      },
      surveyOperations: {
        title: '测量作业',
        subtitle: '绘制阿富汗财富地图',
        description: '地质测量团队在阿富汗各地的山脊上使用卫星定位设备和先进的测绘工具。他们的系统工作揭示了全国所有34个省份矿产资源的全部范围。',
      },
      operationsCommandCenter: {
        title: '运营指挥中心',
        subtitle: '数字采矿情报',
        description: '现代采矿控制中心拥有从墙到墙的屏幕，显示实时卫星图像、车队遥测和生产数据。操作员从集中指挥设施监控采矿作业的每个方面。',
      },
      vision2030: {
        title: '2026-2050愿景',
        subtitle: '未来视野',
        description: '到2050年，阿富汗将成为一个全球公认的采矿国家，拥有可持续运营、增值加工以及在所有公民之间公平分享的矿产财富。',
      },
      finalQuote: {
        quote: '我们山下的矿产不仅仅是资源——它们是我们将为子孙后代建设繁荣、自给自足的阿富汗的基础。',
      },
      buildingTomorrow: {
        title: '建设明天',
        subtitle: '未来',
        description: '阿富汗的矿产财富代表了经济转型的难得机遇。通过可持续发展、国际合作和负责任的治理，这些资源将为子孙后代带来国家繁荣。',
      },
      nationalLegacy: {
        title: '国家遗产',
        subtitle: '子孙后代',
        description: '负责任地开发阿富汗的矿产资源将创造持久的繁荣，保护自然遗产，并为未来几代阿富汗人确保经济独立。',
      },
      // Technology Sections
      autonomousMining: { title: '自主采矿车队', subtitle: '工业4.0', description: '下一代自主运输卡车和钻井系统通过AI驱动的导航全天候运行。这些400吨的车辆每天移动50,000多吨矿石，在确保所有主要开采点零伤害安全记录的同时最大化生产力。' },
      satelliteMapping: { title: '卫星资源测绘', subtitle: '遥感技术', description: '先进的卫星图像和高光谱扫描揭示了阿富汗652,000平方公里领土上的矿物特征。AI算法分析地质特征，识别10,000多个潜在矿床位置供地面验证。' },
      droneSurveys: { title: '航空测量作业', subtitle: '无人机测绘技术', description: '自主无人机机队在偏远山区进行高分辨率地形测量和磁力计扫描。500多架无人机每天测绘10,000公顷，生成厘米级精确的3D地形模型用于矿山规划。' },
      deepCoreDrilling: { title: '深部岩心钻探计划', subtitle: '地下勘探', description: '金刚石钻探作业从超过2,000米的深度提取岩心样本，揭示矿物构造的完整范围。200多台钻机在所有34个省同时运行，每年定义500多亿吨新资源。' },
      geophysicalSurveys: { title: '地球物理测量网络', subtitle: '电磁测绘', description: '探地雷达和电磁测量每年测绘超过100,000线公里的地下地质。这些技术揭示隐藏的矿体、断层结构和矿山开发所需的关键水资源。' },
      flotationProcessing: { title: '浮选加工厂', subtitle: '矿石浓缩', description: '最先进的浮选槽每天处理500,000吨矿石，使用先进的泡沫浮选技术实现95%以上的矿物回收率。全国50家加工厂创造数千个熟练技术工作岗位。' },
      hydrometallurgical: { title: '湿法冶金设施', subtitle: '化学加工', description: '先进的湿法冶金厂使用环境友好的浸出工艺提取铜、金和稀土元素。闭环水系统确保零排放，同时达到99.9%的金属纯度水平。' },
      electrorefining: { title: '电解精炼卓越', subtitle: '金属提纯', description: '大型电解精炼设施将铜提纯至99.99%阴极级，每年生产100万吨精炼铜。这些设施代表500亿美元的基础设施投资，雇用100,000多名工人。' },
      slagProcessing: { title: '炉渣再处理作业', subtitle: '零废料采矿', description: '含有有价值金属的历史炉渣堆经过再处理，提取古代提取方法留下的金、银和铜。100多家再处理厂从遗留采矿点回收100亿美元的金属。' },
      miningRailways: { title: '采矿铁路网络', subtitle: '散装运输基础设施', description: '5,000公里的重载铁路将主要采矿区连接到出口终端。由200多节矿石车厢组成的单元列车每年运输1亿吨，与卡车运输相比，运输成本降低75%。' },
      conveyorSystems: { title: '陆上输送系统', subtitle: '连续物料流', description: '500公里的陆上输送系统以每小时超过20,000吨的速度将矿石从矿坑运输到加工厂。这些系统全天候运行，可用性达99.5%，替代了数千次运输卡车移动。' },
      powerInfrastructure: { title: '采矿电网', subtitle: '能源基础设施', description: '5,000兆瓦的专用发电容量——包括太阳能、水电和天然气——为采矿作业提供能源。地下输电线路将偏远地点连接到国家电网，确保99.9%的电力可靠性。' },
      waterInfrastructure: { title: '供水系统', subtitle: '可持续水资源管理', description: '大型水回收系统回收95%的工艺用水，将淡水消耗降至世界领先水平。100多家处理厂确保当地水资源零污染，保护社区供水。' },
      portFacilities: { title: '出口港口设施', subtitle: '海上贸易通道', description: '与巴基斯坦、伊朗和土库曼斯坦的战略伙伴关系提供深水港通道，每年可处理超过2亿吨矿物出口。专用矿物终端配备自动化船舶装载系统。' },
      miningUniversity: { title: '国家矿业大学', subtitle: '技术教育', description: '阿富汗国家矿业大学每年培训10,000名采矿工程师和地球科学家。世界一流的实验室和研究设施使毕业生能够在国家矿产行业中担任领导角色。' },
      geologicalInstitute: { title: '地质调查研究所', subtitle: '科学卓越', description: '国家地质调查研究所对所有34个省进行系统性资源评估。1,000多名地球科学家维护世界上最全面的矿物数据库，指导1,000亿美元的勘探投资。' },
      metallurgicalResearch: { title: '冶金研究中心', subtitle: '加工创新', description: '尖端的冶金实验室开发针对阿富汗矿石优化的新提取技术。研究突破将回收率提高了30%，同时将所有加工作业的能耗降低了40%。' },
      environmentalResearch: { title: '环境研究所', subtitle: '可持续解决方案', description: '专门的环境研究设施开发世界领先的矿山复垦、水处理和生物多样性保护解决方案。500多名科学家确保采矿作业超过国际环境标准。' },
      // Economic Impact
      economicTransformation: { title: '经济转型', subtitle: '30万亿美元影响', description: '矿产开发将在未来20年内使阿富汗的GDP增长2,000%。30万亿美元的矿产财富转化为每年1.5万亿美元的经济活动，将阿富汗转变为中亚的经济强国。' },
      employmentRevolution: { title: '就业革命', subtitle: '500万个工作岗位', description: '直接采矿就业将超过200万个职位，在加工、物流和支持行业还有300万个工作岗位。平均采矿工资每年30,000美元将创造一个繁荣的中产阶级。' },
      regionalDevelopment: { title: '区域发展区', subtitle: '转变省份', description: '主要采矿作业周围的50个特别经济发展区将偏远省份转变为繁荣的工业中心。容纳500万人的新城市将围绕国家的矿产财富出现。' },
      exportRevenue: { title: '出口收入增长', subtitle: '贸易转型', description: '矿物出口到2040年每年将产生2,000亿美元，使阿富汗跻身世界前10大矿物出口国之列。与100多个国家的战略贸易关系确保市场准入和公平定价。' },
      governmentRevenue: { title: '政府收入', subtitle: '财政转型', description: '采矿特许权使用费和税收每年将为政府服务、教育、医疗保健和基础设施产生500亿美元。透明的矿产开发基金确保所有4,000万阿富汗公民都能受益。' },
      foreignInvestment: { title: '外国直接投资', subtitle: '5,000亿美元流入', description: '国际采矿公司已承诺到2050年投资5,000亿美元用于勘探和开发。与领先的全球采矿公司的战略伙伴关系为阿富汗作业带来世界一流的专业知识和技术。' },
      domesticInvestment: { title: '国内投资增长', subtitle: '阿富汗创业', description: '阿富汗采矿企业家经营10,000多家持牌采矿作业，从手工宝石矿到工业规模的加工设施。该行业的国内投资超过1,000亿美元。' },
      miningFinance: { title: '采矿金融中心', subtitle: '资本市场', description: '喀布尔矿业交易所每年促进500亿美元的采矿投资，拥有200多家公开交易的采矿公司。进入全球资本市场确保所有规模项目的竞争性融资。' },
      miningInsurance: { title: '采矿保险与风险', subtitle: '财务保护', description: '全面的采矿保险计划保护5,000亿美元的资产和运营。国际再保险伙伴关系确保覆盖该行业的所有运营、环境和政治风险。' },
      // Sustainability Expansion
      carbonNeutral: { title: '碳中和采矿', subtitle: '气候领导力', description: '阿富汗的采矿部门将通过可再生能源、电动汽车和碳捕获技术到2040年实现碳中和。10吉瓦的太阳能和风能消除对化石燃料的依赖。' },
      biodiversityProtection: { title: '生物多样性保护', subtitle: '生态系统保护', description: '100,000公顷受保护的生物多样性走廊围绕主要采矿作业。野生动物监测计划保护雪豹、马可波罗羊和阿富汗山区生态系统特有的其他濒危物种。' },
      mineClosure: { title: '渐进式复垦', subtitle: '土地恢复', description: '100亿美元的矿山关闭基金确保所有作业在采矿期间和之后逐步复垦。恢复的景观支持农业、林业和旅游业，为当地社区创造持久价值。' },
      circularEconomy: { title: '循环经济采矿', subtitle: '零废料作业', description: '先进的加工技术确保99%的所有提取材料都能找到生产性用途。采矿废料成为建筑骨料、农业改良剂或二次加工作业的原料。' },
      // Social Impact
      educationPrograms: { title: '采矿教育计划', subtitle: '人力资本发展', description: '在采矿地区建造的1,000多所学校为200万儿童提供世界一流的教育。奖学金计划每年派遣10,000名学生到国际大学攻读高级采矿和工程学位。' },
      healthcareFacilities: { title: '社区医疗保健', subtitle: '医疗基础设施', description: '采矿地区的50家现代化医院和500家诊所为1,000万人提供免费医疗保健。采矿公司健康计划已将婴儿死亡率降低90%，并将预期寿命提高15年。' },
      womensEmployment: { title: '采矿中的女性', subtitle: '性别平等', description: '女性占采矿劳动力的30%，从地质学家到设备操作员再到高管领导。女性拥有的企业提供40%的采矿服务，为数百万阿富汗女性创造经济独立。' },
      artisanalIntegration: { title: '手工采矿者支持', subtitle: '正规化计划', description: '500,000名手工采矿者通过正规化计划接受培训、设备和市场准入。公平贸易认证确保手工产品在国际市场上获得溢价。' },
      // Technology Innovation
      aiMining: { title: 'AI驱动的采矿', subtitle: '人工智能', description: '人工智能系统优化采矿作业的每个方面，从地质建模到设备维护再到供应链物流。AI将运营成本降低40%，同时将安全记录提高80%。' },
      robotics: { title: '采矿机器人', subtitle: '自主系统', description: '10,000多台自主机器人执行危险的地下任务，包括钻井、爆破和矿石提取。人类操作员从地面控制室监督，完全消除地下死亡事故。' },
      digitalTwins: { title: '数字孪生作业', subtitle: '虚拟采矿', description: '每个采矿作业的完整数字副本实现实时优化和预测性维护。操作员可以模拟提取场景，在物理作业中实施更改之前优化效率。' },
      blockchainSupply: { title: '区块链可追溯性', subtitle: '供应链透明度', description: '区块链技术跟踪从提取到最终产品的每一克阿富汗矿物。消费者和制造商可以验证道德采购、无冲突状态和环境合规性，完全透明。' },
      // Global Partnerships
      chinaPartnership: { title: '中国战略伙伴关系', subtitle: '一带一路一体化', description: '与中国的战略伙伴关系带来2,000亿美元的基础设施投资，将阿富汗矿床连接到亚洲制造中心。新的铁路和高速公路将阿富汗融入全球供应链。' },
      europePartnership: { title: '欧盟合作', subtitle: '技术转让', description: '欧盟伙伴关系带来先进的欧洲采矿技术和环境标准。与德国、瑞典和芬兰公司的合资企业引入世界领先的提取和加工专业知识。' },
      usPartnership: { title: '美国投资', subtitle: '技术与金融', description: '美国采矿公司和投资公司承诺1,000亿美元用于阿富汗矿产开发。美国在卫星测绘、自主车辆和加工创新方面的技术改变了运营效率。' },
      regionalPartnership: { title: '区域一体化', subtitle: '中亚合作', description: '与哈萨克斯坦、乌兹别克斯坦和土库曼斯坦的合作创造了综合矿物供应链。共享的铁路网络和加工设施最大化区域价值，为所有合作伙伴降低成本。' },
      // Gemstone Expansion
      emeraldGrading: { title: '祖母绿分级中心', subtitle: '国际认证', description: '国家祖母绿分级中心使用国际认可的标准每年认证100万克拉。认证的阿富汗祖母绿在全球宝石市场获得50%的价格溢价。' },
      lapisHeritage: { title: '青金石遗产', subtitle: '6,000年采矿', description: '巴达赫尚的古代青金石矿——图坦卡蒙和文艺复兴大师的群青颜料来源——继续生产世界上最好的质量。联合国教科文组织世界遗产认可保护这些历史遗址。' },
      rubyDeposits: { title: '红宝石采矿卓越', subtitle: '鸽血红质量', description: '杰格达莱克红宝石在环境影响的十分之一下与缅甸质量相匹配。现代提取保持地质完整性，同时每年生产5亿美元的宝石级刚玉。' },
      tourmalineVarieties: { title: '碧玺天堂', subtitle: '彩虹收藏', description: '努里斯坦生产50多种碧玺颜色品种，包括罕见的西瓜、靛蓝和帕拉伊巴型标本。每年1,000万克拉的产量使阿富汗成为世界碧玺之都。' },
      gemCutting: { title: '宝石切割行业', subtitle: '增值', description: '200家宝石切割设施雇用50,000名熟练的宝石切割师，将粗糙的石头转化为抛光的杰作。国内切割与原始宝石出口相比增加400%的价值。' },
      // Strategic Minerals
      cobaltSupply: { title: '钴供应安全', subtitle: '电池金属关键', description: '阿富汗500万吨的钴储量为5亿辆电动汽车提供必需的电池阴极材料。道德提取标准确保为负责任的制造商提供无冲突供应。' },
      nickelDeposits: { title: '镍红土开发', subtitle: '不锈钢与电池', description: '红土和硫化物矿床中的1,000万吨镍支持不锈钢生产和电池制造。现代加工实现95%的镍回收率，零酸排放。' },
      tungstenSupply: { title: '钨战略储备', subtitle: '关键金属', description: '潘杰希尔及周边省份的高品位钨矿床含有500,000吨这种关键金属。钨的极高硬度使其成为切割工具、电子和航空航天应用所必需的。' },
      antimonyDeposits: { title: '锑生产', subtitle: '阻燃金属', description: '多个省份的锑矿床支持对阻燃剂和电池技术不断增长的需求。现代加工设施每年生产50,000吨精炼锑。' },
      tantalumNiobium: { title: '钽和铌', subtitle: '电子矿物', description: '伟晶岩矿床产出电子电容器和超合金所必需的钽和铌。认证的无冲突供应链确保阿富汗钽符合负责任的采购标准。' },
      // Future Vision
      vision2050: { title: '2026-2050愿景', subtitle: '长期繁荣', description: '到2050年，阿富汗将成为世界上最富有的国家之一，矿产收入为所有6,000万公民提供全民医疗保健、教育和繁荣。30万亿美元的矿产禀赋改变一个国家。' },
      sovereignWealth: { title: '主权财富基金', subtitle: '世代安全', description: '1万亿美元的主权财富基金——由矿产收入资助——确保在资源耗尽后很长一段时间内继续繁荣。在全球市场的投资为子孙后代提供永久收入。' },
      technologyHub: { title: '区域技术中心', subtitle: '创新经济', description: '采矿财富资助向知识经济的转型，喀布尔成为中亚的技术和创新中心。100所研究型大学和1,000家科技公司从矿产资助的发展中涌现。' },
      sustainableLegacy: { title: '可持续遗产', subtitle: '环境遗产', description: '负责任的采矿创造恢复的景观、受保护的生态系统和清洁能源基础设施的遗产。阿富汗成为全球可持续资源开发的典范。' },
      finalVision: { title: '转型的国家', subtitle: '阿富汗复兴', description: '30万亿美元的矿产财富——可持续开发、公平共享和明智投资——将阿富汗从冲突地区转变为全球经济强国。这就是阿富汗矿物的承诺：为子孙后代带来繁荣。' },
      // Panjshir Expanded
      panjshirEmeralds: { title: '潘杰希尔祖母绿', subtitle: '宝石谷', description: '传奇的潘杰希尔山谷生产世界上最好的祖母绿。从山岩中提取的深绿色晶体在国际宝石市场上获得溢价。' },
    },
  },
   ru: {
     nav: {
       home: 'Главная',
       sectors: 'Секторы',
       minerals: 'Минералы',
       investment: 'Инвестиции',
       contact: 'Контакты',
       about: 'О нас',
       provinces: 'Провинции',
       operations: 'Операции',
       timeline: 'Временная шкала',
       map: 'Карта',
     },
     navDropdowns: {
       provinces: {
         title: '34 провинции, богатые ресурсами',
         subtitle: 'Исследуйте месторождения полезных ископаемых по всему Афганистану',
         viewMap: 'Просмотр интерактивной карты',
         clickToExplore: 'Нажмите на любую провинцию, чтобы изучить её минеральные богатства',
         badakhshan: 'Бадахшан - Королевство драгоценных камней',
         badghis: 'Бадгис - Минеральные ресурсы',
         baghlan: 'Баглан - Уголь и минералы',
         balkh: 'Балх - Северные ресурсы',
         bamyan: 'Бамиан - Железная гора',
         daykundi: 'Дайкунди - Минеральные месторождения',
         farah: 'Фарах - Западные минералы',
         faryab: 'Фарьяб - Северные месторождения',
         ghazni: 'Газни - Литиевый пояс',
         ghor: 'Гор - Центральные ресурсы',
         helmand: 'Гильменд - Стратегические ресурсы',
         herat: 'Герат - Западные ворота',
         jowzjan: 'Джозджан - Северные минералы',
         kabul: 'Кабул - Столичные ресурсы',
         kandahar: 'Кандагар - Южный центр',
         kapisa: 'Каписа - Центральные месторождения',
         khost: 'Хост - Восточные минералы',
         kunar: 'Кунар - Долина драгоценных камней',
         kunduz: 'Кундуз - Северные ворота',
         laghman: 'Лагман - Восточные ресурсы',
         logar: 'Логар - Сердце меди',
         nangarhar: 'Нангархар - Восточные месторождения',
         nimruz: 'Нимруз - Южные минералы',
         nuristan: 'Нуристан - Литиевая граница',
         paktia: 'Пактия - Восточные ресурсы',
         paktika: 'Пактика - Южные месторождения',
         panjshir: 'Панджшер - Изумрудная долина',
         parwan: 'Парван - Центральные минералы',
         samangan: 'Саманган - Северные месторождения',
         sarEPol: 'Сар-э-Поль - Северные ресурсы',
         takhar: 'Тахар - Золотые реки',
         uruzgan: 'Урузган - Центральные минералы',
         wardak: 'Вардак - Центральные месторождения',
         zabul: 'Забуль - Южные ресурсы',
       },
       operations: {
         title: 'Горнодобывающие операции и услуги',
         subtitle: 'Комплексные горнодобывающие услуги и операции',
         viewAll: 'Просмотр всех операций и услуг',
         processing: { label: 'Переработка и рафинирование', description: 'Объекты переработки руды' },
         smelting: { label: 'Плавильные операции', description: 'Извлечение металлов' },
         research: { label: 'Исследования и разведка', description: 'Геологические исследования' },
         geological: { label: 'Геологические исследования', description: 'Картирование месторождений' },
         trade: { label: 'Торговля и экспорт', description: 'Международная торговля' },
         investment: { label: 'Инвестиционная структура', description: 'Юридические и финансовые' },
         sustainability: { label: 'Устойчивость', description: 'Экологические стандарты' },
         community: { label: 'Развитие сообщества', description: 'Местная занятость' },
         digital: { label: 'Цифровая добыча', description: 'Интеграция технологий' },
         safety: { label: 'Здоровье и безопасность', description: 'Защита работников' },
       },
       timeline: {
         title: 'Временная шкала развития',
         subtitle: 'Исторический прогресс и будущее видение',
         viewComplete: 'Просмотр полной временной шкалы',
         clickToExplore: 'Нажмите на любую опцию, чтобы изучить детали временной шкалы',
         historical: { label: 'Историческая временная шкала', description: 'История добычи и вехи' },
         ancientPeriod: { label: 'Древняя добыча (4000 г. до н.э. - 1000 г. н.э.)', description: 'Более 6000 лет горнодобывающего наследия древних цивилизаций' },
         ancientEgypt: { label: 'Древний Египет и Месопотамия', description: 'Афганский лазурит в погребении Тутанхамона и древняя торговля' },
         silkRoad: { label: 'Эпоха Шёлкового пути', description: 'Исторические торговые пути и минеральная торговля' },
         medievalPeriod: { label: 'Средневековый и исламский периоды', description: 'Торговля по Шёлковому пути и расширение исламской добычи' },
         renaissance: { label: 'Эпоха Возрождения', description: 'Торговля ультрамариновым пигментом и европейское искусство' },
         colonialPeriod: { label: 'Колониальная разведка (1800-1960)', description: 'Европейские геологические съёмки и ранние открытия' },
         britishSurveys: { label: 'Британские геологические съёмки', description: 'Британская разведка и картографирование XIX века' },
         russianSurveys: { label: 'Российские геологические экспедиции', description: 'Российская геологическая работа начала XX века' },
         sovietPeriod: { label: 'Советская эпоха (1960-1990)', description: 'Комплексное геологическое картографирование и выявление основных месторождений' },
         sovietMapping: { label: 'Советское геологическое картографирование', description: 'Комплексные съёмки, выявившие Мес Айнак и Хажигак' },
         modernEra: { label: 'Современная эпоха (2000-настоящее время)', description: 'Возрождение XXI века и комплексное развитие' },
         usgsSurveys: { label: 'Комплексные съёмки USGS', description: 'Оценка USGS, определившая минеральный потенциал более $30 трлн' },
         gemstoneHistory: { label: 'Наследие драгоценных камней', description: '6000 лет добычи лазурита, изумруда и рубина' },
         lapisHistory: { label: 'Лазурит: 6000 лет', description: 'Старейшие непрерывно действующие рудники мира' },
         emeraldHistory: { label: 'Наследие изумрудов Панджшера', description: 'Более 1000 лет традиции добычи изумрудов' },
         rubyHistory: { label: 'Добыча рубинов Джегдалека', description: 'Месторождения рубина цвета голубиной крови и историческая добыча' },
         goldHistory: { label: 'Наследие добычи золота', description: 'Древние и средневековые традиции добычи золота' },
         copperHistory: { label: 'Наследие добычи меди', description: 'Историческая добыча и торговля медью' },
         tradeRoutes: { label: 'Древние торговые пути', description: 'Шёлковый путь и исторические сети минеральной торговли' },
         caravanRoutes: { label: 'Караванные торговые сети', description: 'Исторические караванные пути перевозки афганских минералов' },
         maritimeTrade: { label: 'История морской торговли', description: 'Исторические морские пути экспорта минералов' },
         archaeological: { label: 'Археологические открытия', description: 'Исторические горнодобывающие объекты и археологические свидетельства' },
         mesAynakArchaeology: { label: 'Археологический объект Мес Айнак', description: '2000-летний буддийский объект и месторождение меди' },
         documentation: { label: 'Историческая документация', description: 'Древние тексты, карты и исторические записи' },
         ancientTexts: { label: 'Древние тексты и записи', description: 'Исторические документы, упоминающие афганские минералы' },
         historicalMaps: { label: 'Исторические карты', description: 'Древние и средневековые карты с горнодобывающими объектами' },
         museumCollections: { label: 'Музейные коллекции', description: 'Афганские минералы в коллекциях музеев мира' },
         provincial: { label: 'Провинциальное развитие', description: 'Региональные временные шкалы' },
         badakhshanHistory: { label: 'История добычи Бадахшана', description: '6000 лет добычи лазурита' },
         panjshirHistory: { label: 'Наследие долины Панджшер', description: 'Традиция добычи изумрудов на протяжении тысячелетий' },
         roadmap: { label: 'Дорожная карта развития', description: 'Планы будущего развития' },
         milestones: { label: 'Вехи проекта', description: 'Ключевые достижения проекта' },
         achievements: { label: 'Достижения', description: 'Основные достижения' },
         vision2030: { label: 'Видение 2026-2050', description: 'Долгосрочное видение' },
         reports: { label: 'Годовые отчеты', description: 'Годовые отчеты о прогрессе' },
         annualReports: { label: 'Годовые отчёты о прогрессе', description: 'Годовые отчёты о развитии добычи' },
         dataReports: { label: 'Отчёты исторических данных', description: 'Комплексные исторические данные по добыче' },
         statisticalAnalysis: { label: 'Статистический анализ', description: 'Историческая статистика и тенденции добычи' },
         historicalGallery: { label: 'Историческая галерея изображений', description: 'Комплексная коллекция исторических изображений добычи' },
         ancientImages: { label: 'Изображения древней добычи', description: 'Исторические изображения периодов древней добычи' },
         medievalImages: { label: 'Изображения средневекового периода', description: 'Исторические изображения средневековой добычи' },
         archaeologicalImages: { label: 'Изображения археологических объектов', description: 'Изображения исторических горнодобывающих объектов' },
         artisanalMining: { label: 'История кустарной добычи', description: 'Традиционные методы добычи и наследие' },
         miningTechniques: { label: 'Исторические технологии добычи', description: 'Эволюция методов добычи за 6000 лет' },
         culturalHeritage: { label: 'Культурное наследие', description: 'Добыча в афганской культуре и традициях' },
         royalCollections: { label: 'Королевские коллекции', description: 'Афганские драгоценности в исторических королевских коллекциях' },
         ironHistory: { label: 'Наследие добычи железа', description: 'Историческая добыча железа и производство стали' },
         lithiumHistory: { label: 'История открытия лития', description: 'Историческая разведка и открытие лития' },
         coalHistory: { label: 'Наследие добычи угля', description: 'Историческая добыча угля и производство энергии' },
         marbleHistory: { label: 'Наследие добычи мрамора', description: 'Историческая добыча мрамора и архитектурное использование' },
         chromiteHistory: { label: 'История добычи хромита', description: 'Историческая добыча и промышленное использование хромита' },
         rareEarthHistory: { label: 'Открытие редкоземельных элементов', description: 'Историческая разведка редкоземельных элементов' },
         miningCommunities: { label: 'Исторические горнодобывающие сообщества', description: 'Традиционные горнодобывающие сообщества и их наследие' },
         miningLegends: { label: 'Легенды и истории добычи', description: 'Исторические легенды и истории из горнодобывающих регионов' },
         geologicalFormation: { label: 'История геологического образования', description: 'Как формировались афганские месторождения за миллионы лет' },
         miningTools: { label: 'Исторические орудия добычи', description: 'Эволюция орудий добычи за 6000 лет' },
         miningSafety: { label: 'Историческая безопасность добычи', description: 'Традиционные практики безопасности и современная эволюция' },
         miningEconomics: { label: 'Историческая экономика добычи', description: 'Экономическое влияние добычи на протяжении истории' },
         miningLaw: { label: 'Историческое законодательство и регулирование добычи', description: 'Эволюция правил и регулирования добычи' },
         womenInMining: { label: 'Женщины в исторической добыче', description: 'Роль женщин в добыче на протяжении истории' },
         miningEducation: { label: 'Историческое образование в области добычи', description: 'Передача традиционных знаний и современное образование' },
         productionStatistics: { label: 'Статистика добычи', description: 'Исторические данные по добыче, тенденции и объёмы' },
         economicImpact: { label: 'Анализ экономического воздействия', description: 'Экономический вклад, влияние на ВВП и доходы от добычи' },
         tradeVolumes: { label: 'Данные по объёму торговли', description: 'Исторические объёмы торговли, экспортная статистика и данные рынка' },
         workforceStatistics: { label: 'Занятость и рабочая сила', description: 'Данные по занятости в добыче, демография и статистика труда' },
         priceTrends: { label: 'Ценовые тенденции и рынки', description: 'Исторические цены на минералы, рыночные тенденции и стоимость товаров' },
         geologicalFormations: { label: 'Геологические формации', description: 'Геологические структуры, процессы образования и генезис минералов' },
         depositCharacteristics: { label: 'Характеристики месторождений', description: 'Типы месторождений, содержание руды, запасы и классификация ресурсов' },
         miningTechnologyEvolution: { label: 'Эволюция технологий добычи', description: 'Технологический прогресс, эволюция оборудования и инновации' },
         explorationMethods: { label: 'Методы разведки', description: 'Исторические методы разведки, съёмки и методы открытий' },
         environmentalFactors: { label: 'Экологические факторы', description: 'Экологические аспекты, воздействия и устойчивые практики' },
         miningRegulationsTimeline: { label: 'Хронология регулирования добычи', description: 'Эволюция нормативной базы, законы и структуры управления' },
         licensingPermits: { label: 'Лицензии и разрешения', description: 'Исторические системы лицензирования, процедуры разрешений' },
         taxationRoyalties: { label: 'Налоги и роялти', description: 'Налоговые структуры, системы роялти и фискальная политика' },
         infrastructureDevelopment: { label: 'Развитие инфраструктуры', description: 'Инфраструктура добычи, транспорт и развитие объектов' },
         processingFacilities: { label: 'Перерабатывающие объекты', description: 'Обогатительные фабрики, НПЗ и промышленные объекты' },
         transportationNetworks: { label: 'Транспортные сети', description: 'Торговые пути, транспортная инфраструктура и логистика' },
         marketAnalysis: { label: 'Анализ рынка', description: 'Доля рынка, анализ конкуренции и структура отрасли' },
         investmentFlows: { label: 'Инвестиционные потоки', description: 'Исторические модели инвестиций, потоки капитала и источники финансирования' },
         internationalPartnerships: { label: 'Международное партнёрство', description: 'Международное сотрудничество, совместные предприятия и партнёрства' },
         researchStudies: { label: 'Исследования и отчёты', description: 'Академические исследования, геологические отчёты и научные публикации' },
         dataAnalytics: { label: 'Данные и аналитика', description: 'Сбор данных, методы анализа и статистическая отчётность' },
         forecastingProjections: { label: 'Прогнозы и оценки', description: 'Будущие оценки, оценка ресурсов и прогнозы развития' },
       },
       investment: {
         title: 'Инвестиционный портал',
         subtitle: 'Комплексная инвестиционная информация',
         viewComplete: 'Просмотр полного инвестиционного портала',
         clickToExplore: 'Нажмите на любую опцию, чтобы изучить инвестиционные возможности',
         framework: { label: 'Инвестиционная структура', description: 'Правовая и нормативная структура' },
         opportunities: { label: 'Инвестиционные возможности', description: 'Доступные проекты' },
         partnerships: { label: 'Модели партнерства', description: 'Совместные предприятия и соглашения' },
         incentives: { label: 'Финансовые стимулы', description: 'Налоговые льготы и стимулы' },
         riskManagement: { label: 'Управление рисками', description: 'Защита инвестиций' },
         partners: { label: 'Международные партнеры', description: 'Глобальные партнерства' },
         process: { label: 'Инвестиционный процесс', description: 'Пошаговое руководство' },
         statistics: { label: 'Инвестиционная статистика', description: 'Рыночные данные и тенденции' },
       },
       contact: {
         title: 'Портал контактов',
         subtitle: 'Свяжитесь с нами',
         viewSection: 'Просмотр раздела контактов',
         clickToExplore: 'Нажмите на любую опцию для связи',
         form: { label: 'Контактная форма', description: 'Отправить запрос' },
         offices: { label: 'Местоположения офисов', description: 'Найти наши офисы' },
         email: { label: 'Электронная почта', description: 'Адреса электронной почты' },
         phone: { label: 'Телефонный справочник', description: 'Контактные номера' },
         departments: { label: 'Контакты отделов', description: 'По отделам' },
         international: { label: 'Международные офисы', description: 'Глобальные контакты' },
         media: { label: 'Запросы СМИ', description: 'Пресса и СМИ' },
         partnerships: { label: 'Запросы о партнерстве', description: 'Деловые партнерства' },
      },
    },
    detailPage: {
      backToHome: 'Вернуться на главную',
      downloadReport: 'Скачать отчет',
      byTheNumbers: 'В цифрах',
      comprehensiveOverview: 'Комплексный обзор',
      keyHighlights: 'Ключевые моменты',
      section: 'Раздел',
      keyMetrics: 'Ключевые показатели',
      strategicOverview: 'Стратегический обзор и анализ',
      mineralDetail: {
        downloadLabel: 'Скачать инвестиционный обзор',
        overviewTitle: 'Анализ ресурсов и стратегическая оценка',
        statsLabel: 'Показатели ресурсов',
        highlights: {
          worldClass: 'Масштаб и качество ресурсов мирового класса',
          exceptionalValue: 'Исключительный потенциал экономической ценности',
          comprehensiveFramework: 'Комплексная структура развития',
          sustainableCommitment: 'Приверженность устойчивым операциям',
        },
        sections: {
          inDepthAnalysis: 'Глубокий анализ',
          technicalDetails: 'Технические детали',
          developmentRoadmap: 'Дорожная карта развития',
          projectTimeline: 'Временная шкала проекта',
        },
      },
      timelineDetail: {
        downloadLabel: 'Скачать отчет временной шкалы',
        overviewTitle: 'Исторический контекст и стратегический анализ',
        statsLabel: 'Статистика временной шкалы',
        errorLoading: 'Ошибка загрузки временной шкалы',
        unableToLoad: 'Не удалось загрузить данные временной шкалы для:',
        highlights: {
          richHeritage: 'Богатое наследие добычи более 6000 лет',
          comprehensiveRoadmap: 'Комплексная дорожная карта развития',
          strategicMilestones: 'Стратегические вехи и достижения',
          sustainableVision: 'Видение устойчивого роста',
        },
        sections: {
          historicalRecord: 'Историческая запись',
          detailedTimeline: 'Подробная временная шкала',
          achievements: 'Достижения',
          keyMilestones: 'Ключевые вехи',
          dataAnalysis: 'Анализ данных',
          historicalDataVisualizations: 'Визуализация исторических данных',
          comparativeAnalysis: 'Сравнительный анализ',
          dataTablesComparisons: 'Таблицы данных и сравнения',
          comprehensiveInformation: 'Комплексная информация',
          keyInformationCategories: 'Ключевые информационные категории',
          impact: 'Влияние:',
        },
      },
      investmentDetail: {
        downloadLabel: 'Скачать руководство по инвестициям',
        overviewTitle: 'Стратегия и структура инвестиций',
        statsLabel: 'Статистика инвестиций',
        highlights: {
          investorFriendly: 'Дружественная к инвесторам правовая структура',
          transparentProcedures: 'Прозрачные процедуры лицензирования',
          arbitrationAccess: 'Доступ к международному арбитражу',
          environmentalStandards: 'Комплексные экологические стандарты',
        },
        sections: {
          investmentProcess: 'Процесс инвестирования',
          stepsToInvestment: 'Шаги к инвестированию',
          investmentBenefits: 'Преимущества инвестиций',
          whyInvest: 'Почему инвестировать в Афганистан',
        },
      },
      operationsDetail: {
        downloadLabel: 'Скачать руководство по операциям',
        overviewTitle: 'Операционное превосходство и структура',
        statsLabel: 'Статистика операций',
        highlights: {
          worldClassStandards: 'Операционные стандарты мирового класса',
          advancedTechnology: 'Интеграция передовых технологий',
          safetyProtocols: 'Комплексные протоколы безопасности',
          environmentalResponsibility: 'Экологическая ответственность',
        },
        sections: {
          operationalProcesses: 'Операционные процессы',
          processFramework: 'Структура процесса',
          operationalBenefits: 'Операционные преимущества',
          strategicAdvantages: 'Стратегические преимущества',
        },
      },
    },
    contactDetail: {
      downloadLabel: 'Скачать справочник контактов',
      overviewTitle: 'Связь и взаимодействие',
      statsLabel: 'Метрики обслуживания',
      highlights: {
        multipleChannels: 'Множественные каналы связи',
        responsiveService: 'Отзывчивые стандарты обслуживания',
        multiLanguage: 'Многоязычная поддержка',
        secureCommunications: 'Безопасная связь',
      },
      sections: {
        contactChannels: 'Каналы связи',
        howToReach: 'Как с нами связаться',
        departments: 'Отделы',
        ministryDepartments: 'Отделы министерства',
      },
    },
    notFound: {
      title: '404',
      message: 'Упс! Страница не найдена',
      returnHome: 'Вернуться на главную',
    },
    mapSection: {
      provincesLabel: '34 провинции',
      title: 'Интерактивная карта ресурсов',
      description: 'Исследуйте минеральные богатства Афганистана во всех провинциях. Наведите курсор на каждый регион, чтобы обнаружить ключевые месторождения, оценочные стоимости и инвестиционные возможности.',
      stats: {
        provinces: 'Провинции',
        knownDeposits: 'Известные месторождения',
        totalValue: 'Общая стоимость',
        mineralTypes: 'Типы минералов',
      },
      legendHover: 'Наведите на провинции',
      legendDeposits: 'Минеральные месторождения',
    },
    imageGallery: {
      clickToView: 'Нажмите на любое изображение, чтобы просмотреть в полноэкранном режиме',
    },
    footer: {
      quote: 'Сила нации измеряется не тем, что она выдерживает, а тем, что она строит. Это основа. Это структура. Это Афганистан.',
      journey: 'Путь от устойчивости к возрождению — это не спринт, а марафон — измеряется не днями, а поколениями. И он начинается здесь, сейчас, с намерения.',
      copyright: '© 2024 Национальная программа экономических реформ Афганистана',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      contact: 'Контакты',
    },
    mineralsIndex: {
      title: 'Минеральные богатства Афганистана',
      description: 'Исследуйте более 150 типов минералов в 34 провинциях, представляющих одно из самых значительных неиспользованных минеральных богатств мира стоимостью более 30 триллионов долларов.',
      searchPlaceholder: 'Поиск минералов, месторождений или мест...',
    },
    investmentSectors: {
      badge: '50+ отраслей',
      title: 'Исследуйте инвестиционные сектора',
      searchPlaceholder: 'Поиск секторов, отраслей или ключевых слов...',
    },
    vision2050: {
      learnMore: 'Узнать больше',
    },
    mineralHero: {
      selectCategory: 'Выберите категорию для изучения',
      menuCategories: heroMenuTranslations.ru,
    },
    mineralsMegaMenu: {
      title: 'Портал минералов Афганистана',
      subtitle: 'Комплексная база данных минеральных ресурсов',
      viewComplete: 'Просмотр полного реестра',
      clickToExplore: 'Нажмите на любой минерал, чтобы изучить детали',
      strategicMetals: {
        copper: {
          title: 'Медь',
          items: {
            mesAynak: 'Месторождение Мес Айнак',
            hajigak: 'Медно-железный комплекс Хажигак',
            balkhab: 'Месторождение Балхаб',
            processing: 'Переработка меди',
            exports: 'Экспорт меди',
            smelting: 'Плавильные операции меди',
            logar: 'Месторождения провинции Логар',
            refining: 'Объекты рафинирования меди',
          },
        },
        lithium: {
          title: 'Литий',
          items: {
            ghazni: 'Пегматиты Газни',
            nuristan: 'Месторождения Нуристан',
            batteryGrade: 'Переработка аккумуляторного класса',
            evSupply: 'Цепочка поставок электромобилей',
            research: 'Исследовательские центры',
            carbonate: 'Производство карбоната лития',
            spodumene: 'Концентраты сподумена',
            batteryMaterials: 'Производство материалов для аккумуляторов',
          },
        },
        ironOre: {
          title: 'Железная руда',
          items: {
            hajigak: 'Железная гора Хажигак',
            steelProduction: 'Планы производства стали',
            magnetite: 'Качество магнетита',
            infrastructure: 'Сталь для инфраструктуры',
            employment: 'Создание рабочих мест',
            beneficiation: 'Обогащение железной руды',
            pelletization: 'Заводы по окатыванию',
            bamyan: 'Месторождения провинции Бамиан',
          },
        },
        leadZinc: {
          title: 'Свинец и цинк',
          items: {
            aynak: 'Свинцово-цинковые месторождения Айнак',
            zincConcentrate: 'Производство цинкового концентрата',
            smelting: 'Плавильные операции свинца',
            batteryMaterials: 'Материалы для производства аккумуляторов',
          },
        },
        cobaltNickel: {
          title: 'Кобальт и никель',
          items: {
            cobalt: 'Месторождения кобальта',
            nickel: 'Ресурсы латерита никеля',
            alloys: 'Сплавы металлов для аккумуляторов',
            evSupply: 'Цепочка поставок аккумуляторов для электромобилей',
          },
        },
        aluminum: {
          title: 'Алюминий и легкие металлы',
          items: {
            bauxite: 'Месторождения бокситов',
            alumina: 'Производство глинозема',
            cryolite: 'Месторождения криолита',
          },
        },
        strategicHardMetals: {
          title: 'Стратегические и твердые металлы',
          items: {
            tungsten: 'Месторождения вольфрама',
            molybdenum: 'Месторождения молибдена',
            vanadium: 'Месторождения ванадия',
            titaniumRutile: 'Рутил титана',
            titaniumIlmenite: 'Ильменит титана',
            tin: 'Месторождения олова',
            antimony: 'Месторождения сурьмы',
            zirconium: 'Месторождения циркония',
            tantalum: 'Месторождения тантала',
            yttrium: 'Месторождения иттрия',
            scandium: 'Месторождения скандия',
            cerium: 'Месторождения церия',
            gadolinium: 'Месторождения гадолиния',
          },
        },
        energyFuel: {
          title: 'Энергетические и топливные минералы',
          items: {
            uranium: 'Месторождения урана',
            thorium: 'Месторождения тория',
            lignite: 'Месторождения лигнита',
            bituminousCoal: 'Разновидности битуминозного угля',
          },
        },
      },
      preciousResources: {
        gemstones: {
          title: 'Драгоценные камни',
          items: {
            panjshirEmeralds: 'Изумруды Панджшера',
            lapisLazuli: 'Лазурит Бадахшана',
            jegdalekRubies: 'Рубины Джегдалек',
            sapphires: 'Сапфиры Гиндукуша',
            tourmaline: 'Турмалин Нуристана',
            aquamarine: 'Аквамарин Кунара',
            cutting: 'Резка и полировка драгоценных камней',
            certification: 'Сертификация драгоценных камней',
            trade: 'Международная торговля драгоценными камнями',
            kunzite: 'Кунцит и сподумен',
            garnet: 'Месторождения граната',
            peridot: 'Ресурсы перидота',
          },
        },
        gold: {
          title: 'Золото',
          items: {
            badakhshan: 'Золотой пояс Бадахшана',
            takhar: 'Месторождения Тахара',
            refining: 'Рафинирование золота',
            artisanal: 'Кустарная добыча',
            bullion: 'Производство слитков',
            processing: 'Заводы по переработке золота',
            exports: 'Экспортные операции золота',
            placer: 'Россыпные месторождения золота',
            lode: 'Жилы коренного золота',
          },
        },
        rareEarth: {
          title: 'Редкоземельные элементы',
          items: {
            helmand: 'Месторождения РЗЭ Гильменда',
            technology: 'Технологические металлы',
            neodymium: 'Неодим и празеодим',
            globalSupply: 'Влияние на глобальное предложение',
            research: 'Исследовательские партнерства',
            concentrate: 'Переработка концентрата РЗЭ',
            dysprosium: 'Диспрозий и тербий',
            separation: 'Технология разделения РЗЭ',
          },
        },
        silver: {
          title: 'Серебро',
          items: {
            deposits: 'Месторождения серебра',
            refining: 'Рафинирование серебра',
            leadOres: 'Серебряно-свинцовые руды',
            industrial: 'Промышленное применение серебра',
          },
        },
      },
      industrialMinerals: {
        chromite: {
          title: 'Хромит',
          items: {
            reserves: 'Запасы хромита',
            exports: 'Экспортные операции',
            steel: 'Производство нержавеющей стали',
            mining: 'Горнодобывающие операции хромита',
            ferrochrome: 'Производство феррохрома',
            logar: 'Месторождения хромита Логар',
          },
        },
        marble: {
          title: 'Мрамор',
          items: {
            white: 'Премиальный белый мрамор',
            herat: 'Карьеры Герата',
            architectural: 'Архитектурный камень',
            processing: 'Объекты переработки мрамора',
            exports: 'Экспортные операции мрамора',
            varieties: '75+ цветовых разновидностей',
            trade: 'Международная торговля камнем',
          },
        },
        coal: {
          title: 'Уголь',
          items: {
            basins: 'Угольные бассейны',
            underground: 'Подземные операции',
            baghlan: 'Провинция Баглан',
            metallurgical: 'Металлургический уголь',
            thermal: 'Запасы теплового угля',
            processing: 'Угольные перерабатывающие заводы',
            energy: 'Производство энергии',
          },
        },
        talcBarite: {
          title: 'Тальк и барит',
          items: {
            talc: 'Высокочистый тальк',
            drilling: 'Буровой барит',
            salt: 'Месторождения соли',
            talcProcessing: 'Переработка талька',
            bariteConcentrates: 'Концентраты барита',
            industrial: 'Промышленное применение',
          },
        },
        gypsumLimestone: {
          title: 'Гипс и известняк',
          items: {
            gypsum: 'Месторождения гипса',
            limestone: 'Карьеры известняка',
            cement: 'Производство цемента',
            construction: 'Строительные материалы',
          },
        },
        clayKaolin: {
          title: 'Глина и каолин',
          items: {
            kaolin: 'Месторождения каолина',
            ceramic: 'Ресурсы керамической глины',
            pottery: 'Производство керамики и плитки',
            paper: 'Применение в бумажной промышленности',
            refractory: 'Огнеупорные материалы',
            paint: 'Промышленность красок и покрытий',
            pharmaceutical: 'Фармацевтическое применение',
            cosmetic: 'Каолин косметического класса',
          },
        },
        sulfurPyrite: {
          title: 'Сера и пирит',
          items: {
            sulfur: 'Месторождения серы',
            pyrite: 'Ресурсы пирита',
            fertilizer: 'Производство удобрений',
            chemical: 'Химическая промышленность',
            acid: 'Производство серной кислоты',
            mining: 'Добыча и извлечение',
            agricultural: 'Сельскохозяйственное применение',
            processing: 'Переработка пирита',
          },
        },
        micaFeldspar: {
          title: 'Слюда и полевой шпат',
          items: {
            mica: 'Месторождения слюды',
            feldspar: 'Ресурсы полевого шпата',
            electronics: 'Электронная промышленность',
            glass: 'Производство стекла',
            sheets: 'Производство слюдяных листов',
            ceramic: 'Керамика и гончарное дело',
            insulation: 'Изоляционные материалы',
            abrasive: 'Абразивное применение',
          },
        },
        graphiteCarbon: {
          title: 'Графит и углерод',
          items: {
            graphite: 'Месторождения графита',
            battery: 'Материалы анода аккумулятора',
            steel: 'Производство стали',
            lubricant: 'Применение смазочных материалов',
            refractory: 'Огнеупорные продукты',
            carbonFiber: 'Материалы из углеродного волокна',
          },
        },
        phosphatePotash: {
          title: 'Фосфат и поташ',
          items: {
            phosphate: 'Месторождения фосфата',
            fertilizer: 'Производство удобрений',
            agricultural: 'Сельскохозяйственные питательные вещества',
            food: 'Применение в пищевой промышленности',
            potash: 'Ресурсы поташа',
            chemical: 'Химическая переработка',
          },
        },
        quartzSilica: {
          title: 'Кварц и кремнезем',
          items: {
            quartz: 'Месторождения кварца',
            silica: 'Ресурсы кварцевого песка',
            glass: 'Производство стекла',
            semiconductor: 'Полупроводниковая промышленность',
            foundry: 'Литейное применение',
            filtration: 'Фильтрация воды',
          },
        },
        refractories: {
          title: 'Огнеупорные материалы и промышленные минералы',
          items: {
            magnesite: 'Месторождения магнезита',
            bentonite: 'Месторождения бентонита',
            pyrophyllite: 'Месторождения пирофиллита',
            asbestos: 'Месторождения асбеста',
            ballClay: 'Месторождения шаровой глины',
            kaolinVariants: 'Разновидности каолина',
            diatomite: 'Месторождения диатомита',
          },
        },
        dimensionStones: {
          title: 'Размерные и декоративные камни',
          items: {
            granite: 'Месторождения гранита',
            sandstone: 'Месторождения песчаника',
            travertine: 'Месторождения травертина',
            soapstone: 'Месторождения мыльного камня',
            quartzite: 'Месторождения кварцита',
            dioriteGabbro: 'Диорит / Габбро',
          },
        },
      },
    },
    provinceDetail: {
      resourceProfile: 'Профиль провинциальных ресурсов',
       provincialStatistics: 'Провинциальная статистика',
       downloadBrief: 'Скачать инвестиционный обзор',
       mineralResources: 'Минеральные ресурсы',
       keyDeposits: 'Ключевые минеральные месторождения',
       opportunities: 'Возможности',
       investmentOpportunities: 'Инвестиционные возможности',
       developmentTimeline: 'Временная шкала развития',
       keyMilestones: 'Ключевые вехи',
       highlights: {
         richPotential: 'Богатый потенциал минеральных ресурсов',
         strategicOpportunities: 'Стратегические возможности развития',
         investmentReady: 'Проекты, готовые к инвестированию',
         infrastructurePlans: 'Планы развития инфраструктуры',
       },
     },
     hero: {
       tagline: 'От афганского народа, для афганского народа и афганским народом.',
       title: 'Национальная программа экономических реформ Афганистана',
       subtitle: 'Будущее нации пишется не языком случая, а архитектурой намерения. И этот консорциум воплощает это намерение — живая структура, созданная для перехода Афганистана от устойчивости к возрождению.',
       cta: 'Изучить инвестиционные возможности',
     },
     stats: {
       mineralReserves: 'Минеральные запасы',
       knownDeposits: 'Известные месторождения',
       mineralTypes: 'Виды минералов',
       provinces: 'Провинции',
       estimatedValue: 'Расчётная общая стоимость',
       acrossProvinces: 'Во всех провинциях',
       criticalStrategic: 'Критические и стратегические',
       resourceRich: 'Богатые ресурсами регионы',
     },
     sectors: {
       copper: 'Медь',
       lithium: 'Литий',
       gold: 'Золото',
       gemstones: 'Драгоценные камни',
       iron: 'Железная руда',
       rareEarth: 'Редкоземельные элементы',
       chromite: 'Хромит',
       marble: 'Мрамор',
       coal: 'Уголь',
       silver: 'Серебро',
       tungsten: 'Вольфрам',
       uranium: 'Уран',
       salt: 'Соль',
       gypsum: 'Гипс',
       talc: 'Тальк',
       lead: 'Свинец',
       zinc: 'Цинк',
       limestone: 'Известняк',
       naturalGas: 'Природный газ',
       niobium: 'Ниобий',
       tantalum: 'Тантал',
       tourmaline: 'Турмалин',
       aquamarine: 'Аквамарин',
     },
     contact: {
       title: 'Инвестиционный запрос',
        subtitle: 'Свяжитесь с контактной командой NERPA',
       addressLabel: 'Адрес',
       emailLabel: 'Электронная почта',
       phoneLabel: 'Телефон',
       addressValue: 'Лондон, Великобритания | Кабул, Афганистан',
       name: 'Полное имя',
       email: 'Электронная почта',
       organization: 'Организация',
       sector: 'Интересующий сектор',
       message: 'Сообщение',
      submit: 'Отправить запрос',
      submitting: 'Отправка...',
      success: 'Ваш запрос успешно отправлен. Наша команда свяжется с вами в ближайшее время.',
      error: 'Произошла ошибка при отправке запроса. Пожалуйста, попробуйте снова.',
      successTitle: 'Успех',
      errorTitle: 'Ошибка',
      submitAnother: 'Отправить другой запрос',
      selectSector: 'Выберите сектор',
       namePlaceholder: 'Введите ваше полное имя',
       emailPlaceholder: 'Введите ваш адрес электронной почты',
       organizationPlaceholder: 'Введите название вашей организации',
       messagePlaceholder: 'Опишите ваш инвестиционный интерес или запрос...',
     },
     common: {
       learnMore: 'Узнать больше',
       viewDetails: 'Подробнее',
       explore: 'Исследовать',
       readMore: 'Читать далее',
       trillion: 'триллион',
       billion: 'миллиард',
       million: 'миллион',
     },
    expanded: {
      megaReserves: '30 триллионов долларов минеральных запасов',
      globalLeader: 'Мировой лидер горнодобычи',
      economicTransformation: 'Экономическая трансформация',
      sustainableFuture: 'Устойчивое будущее',
      strategicPartnerships: 'Стратегические глобальные партнёрства',
      technologyInnovation: 'Технологии и инновации',
      communityProsperity: 'Процветание сообщества',
    },
    provinces: {
      title: 'Провинции Афганистана',
      subtitle: '34 богатых ресурсами региона',
      explore: 'Исследовать провинции',
      mineralResources: 'Минеральные ресурсы',
      investmentOpportunities: 'Инвестиционные возможности',
      viewDetails: 'Просмотр деталей провинции',
    },
    investment: {
      framework: 'Инвестиционная структура',
      opportunities: 'Инвестиционные возможности',
      partnerships: 'Модели партнёрства',
      incentives: 'Финансовые стимулы',
      process: 'Инвестиционный процесс',
    },
    timeline: {
      historical: 'Историческая хронология',
      roadmap: 'Дорожная карта развития',
      milestones: 'Вехи проекта',
      vision2030: 'Видение 2026-2050',
    },
    footerMegaMenu: {
      sustainability: 'Устойчивость',
      resources: 'Ресурсы',
      about: 'О нас',
      viewAllProvinces: 'Просмотр всех 34 провинций →',
      environmentalProtection: 'Защита окружающей среды',
      communityDevelopment: 'Развитие сообщества',
      healthSafety: 'Здоровье и безопасность',
      workforceDevelopment: 'Развитие рабочей силы',
      landRestoration: 'Восстановление земель',
      waterStewardship: 'Управление водными ресурсами',
      reports: 'Годовые отчеты',
      geologicalData: 'Геологические данные',
      investmentGuides: 'Инвестиционные руководства',
      maps: 'Интерактивные карты',
      statistics: 'Статистика',
      publications: 'Публикации',
      researchPapers: 'Исследовательские статьи',
      downloads: 'Загрузки',
      quickLinks: 'Быстрые ссылки',
      overview: 'Обзор',
      minerals: 'Минералы',
      operations: 'Операции',
      investment: 'Инвестиции',
      processing: 'Переработка',
      smelting: 'Плавка',
      research: 'Исследования',
      trade: 'Торговля',
      framework: 'Структура',
      opportunities: 'Возможности',
      partnerships: 'Партнерства',
      process: 'Процесс',
      environmental: 'Экологический',
      community: 'Сообщество',
      safety: 'Безопасность',
      workforce: 'Рабочая сила',
      legal: 'Юридический',
      cookies: 'Файлы cookie',
      accessibility: 'Доступность',
      aboutUs: 'О нас',
      mission: 'Миссия',
      vision: 'Видение',
      team: 'Наша команда',
      partners: 'Партнеры',
      careers: 'Карьера',
      news: 'Новости и обновления',
      faq: 'Часто задаваемые вопросы',
      technology: 'Технологии',
      digitalMining: 'Цифровая добыча',
      aiAutomation: 'ИИ и автоматизация',
      dataAnalytics: 'Аналитика данных',
      remoteSensing: 'Дистанционное зондирование',
      blockchain: 'Отслеживание блокчейна',
      iot: 'Интернет вещей и датчики',
      robotics: 'Горнодобывающая робототехника',
      innovation: 'Центр инноваций',
      education: 'Образование',
      miningUniversity: 'Горный университет',
      trainingPrograms: 'Программы обучения',
      scholarships: 'Стипендии',
      researchCenters: 'Исследовательские центры',
      onlineCourses: 'Онлайн-курсы',
      certifications: 'Сертификаты',
      workshops: 'Мастер-классы',
      studentResources: 'Ресурсы для студентов',
      media: 'СМИ',
      pressReleases: 'Пресс-релизы',
      newsArticles: 'Новостные статьи',
      photoGallery: 'Фото галерея',
      videoLibrary: 'Видеотека',
      socialMedia: 'Социальные сети',
      mediaKit: 'Медиа-кит',
      events: 'События',
      subscribe: 'Подписаться',
      support: 'Поддержка',
      helpCenter: 'Центр помощи',
      documentation: 'Документация',
      apiDocs: 'Документация API',
      tutorials: 'Учебные пособия',
      bugReport: 'Сообщить об ошибке',
      featureRequest: 'Запрос функции',
      contactSupport: 'Связаться с поддержкой',
      becomePartner: 'Стать партнером',
      currentPartners: 'Текущие партнеры',
      partnerPrograms: 'Партнерские программы',
      jointVentures: 'Совместные предприятия',
      supplierNetwork: 'Сеть поставщиков',
      technologyPartners: 'Технологические партнеры',
      academicPartners: 'Академические партнеры',
      ngoPartners: 'Партнеры НПО',
      compliance: 'Соответствие',
      regulations: 'Регламенты',
      environmentalCompliance: 'Экологическое соответствие',
      safetyStandards: 'Стандарты безопасности',
      laborStandards: 'Трудовые стандарты',
      audits: 'Аудит и отчеты',
      codeOfConduct: 'Кодекс поведения',
      whistleblower: 'Политика разоблачителей',
      jobOpenings: 'Вакансии',
      internships: 'Стажировки',
      benefits: 'Преимущества',
      culture: 'Корпоративная культура',
      diversity: 'Разнообразие и инклюзивность',
      applyNow: 'Подать заявку сейчас',
      employeePortal: 'Портал сотрудников',
      referralProgram: 'Программа рекомендаций',
      geological: 'Геологический',
      exploration: 'Разведка',
      incentives: 'Стимулы',
      disclaimer: 'Отказ от ответственности',
      connect: 'Связаться',
      email: 'Электронная почта',
      phone: 'Телефон',
      offices: 'Офисы',
    },
    statsLabels: {
      mineralReserves: 'Минеральные запасы',
      knownDeposits: 'Известные месторождения',
      mineralTypes: 'Виды минералов',
      provinces: 'Провинции',
      metricTons: 'Метрические тонны',
      value: 'Стоимость',
      majorDeposits: 'Крупные месторождения',
      target: 'Цель',
      globalRank: 'Глобальный рейтинг',
      globalShare: 'Глобальная доля',
      gemstoneRegions: 'Регионы драгоценных камней',
      types: 'Типы',
      years: 'Лет',
      annual: 'Годовой',
      ironOreReserves: 'Запасы железной руды',
      jobs: 'Рабочие места',
      goldReserves: 'Золотые запасы',
      goldBelts: 'Золотые пояса',
      artisanalMiners: 'Кустарные шахтёры',
      reeElements: 'Элементы REE',
      estimatedValue: 'Расчётная стоимость',
      underExploration: 'В разведке',
      supplyImpact: 'Влияние на поставки',
      provenReserves: 'Доказанные запасы',
      deposits: 'Месторождения',
      primaryUse: 'Основное применение',
      cubicMeters: 'Кубические метры',
      colors: 'Цвета',
      annualPotential: 'Годовой потенциал',
      qualityGrade: 'Сорт качества',
      coalReserves: 'Запасы угля',
      highQuality: 'Высокое качество',
      majorBasins: 'Крупные бассейны',
      strategicRole: 'Стратегическая роль',
      yearlyPotential: 'Годовой потенциал',
    },
    descriptions: {
      estimatedTotalValue: 'Расчётная общая стоимость',
      acrossAllProvinces: 'Во всех провинциях',
      criticalAndStrategic: 'Критические и стратегические',
      resourceRichRegions: 'Богатые ресурсами регионы',
      estimatedReserves: 'Расчётные запасы',
      currentMarketEstimate: 'Текущая рыночная оценка',
      activeExplorationSites: 'Активные участки разведки',
      fullProductionCapacity: 'Полная производственная мощность',
      largestReserves: 'Крупнейшие запасы',
      strategicImportance: 'Стратегическое значение',
      potentialContribution: 'Потенциальный вклад',
      preciousSemiPrecious: 'Драгоценные и полудрагоценные',
      miningHeritage: 'Горнодобывающее наследие',
      exportPotential: 'Экспортный потенциал',
      estimatedWorth: 'Расчётная стоимость',
      identifiedDeposits: 'Выявленные месторождения',
      employmentPotential: 'Потенциал занятости',
      atCurrentPrices: 'По текущим ценам',
      majorFormations: 'Крупные формации',
      currentlyActive: 'В настоящее время активны',
      identifiedSpecies: 'Выявленные виды',
      strategicResources: 'Стратегические ресурсы',
      potentialDiversification: 'Потенциальная диверсификация',
      exportPotentialValue: 'Экспортный потенциал',
      acrossProvinces: 'По провинциям',
      industrialApplication: 'Промышленное применение',
      uniqueVarieties: 'Уникальные разновидности',
      exportRevenue: 'Экспортная выручка',
      internationalStandard: 'Международный стандарт',
      metallurgicalGrade: 'Металлургический сорт',
      domesticSupply: 'Внутреннее снабжение',
    },
    indexPage: {
      hero: {
        title: 'Горнодобывающая промышленность и минералы',
        subtitle: 'История суверенитета ресурсов',
        readMore: 'Читать далее',
      },
      overview: {
        title: 'Суверенитет ресурсов',
        subtitle: 'Основа',
        description: 'Афганистан обладает одним из самых значительных неразработанных минеральных резервов в мире, стоимостью более 30 триллионов долларов. Это необычайное богатство природных ресурсов - от лития и меди до редкоземельных элементов и драгоценных камней - представляет беспрецедентную возможность для национального процветания, регионального развития и полной экономической трансформации Центральной Азии и за её пределами.',
        statsTitle: 'Обзор минерального богатства',
        statsSubtitle: 'В цифрах',
      },
      geological: {
        title: 'Геологическая структура',
        subtitle: 'Наследие глубокого времени',
        description: 'Необычайное минеральное богатство Афганистана проистекает из его уникального положения на стыке трёх основных тектонических плит. За сотни миллионов лет эти геологические силы создали минерализованные зоны, метаморфические пояса и интрузивные комплексы, которые теперь содержат месторождения мирового класса.',
        quote: 'Минеральное богатство под афганской почвой представляет не просто экономическую возможность, а основу для процветающей и самодостаточной нации.',
      },
      nationalStrategy: {
        title: 'Национальная стратегия',
        subtitle: 'Стратегическое видение',
        description: 'Комплексная национальная минеральная стратегия направляет устойчивое развитие, балансируя экономический рост с управлением окружающей средой и пользой для сообщества. Эта структура обеспечивает, чтобы минеральное богатство служило всем афганцам, привлекая ответственные международные инвестиции.',
      },
      economicImpact: {
        title: 'Экономическая трансформация',
        subtitle: 'Национальное процветание',
        description: 'Развитие минерального сектора Афганистана преобразует национальную экономику, создавая сотни тысяч рабочих мест, генерируя миллиарды экспортных доходов и закладывая основу для промышленного развития и экономической независимости.',
      },
      copper: {
        title: 'Превосходство меди',
        subtitle: 'Стратегический металл',
        description: 'Медные резервы Афганистана входят в число крупнейших неразработанных месторождений в мире, с общими оценочными резервами, превышающими 600 миллионов метрических тонн стоимостью $8T. Одно только месторождение Мес Айнак содержит около 125 миллионов тонн меди, а более 50 крупных месторождений в нескольких провинциях создают беспрецедентную основу для промышленного развития и экономической трансформации.',
        statsTitle: 'Медные ресурсы',
        statsSubtitle: 'Анализ месторождений',
        detailTitle: 'Развитие меди',
        detailSubtitle: 'Проекты и инфраструктура',
        detailDescription: 'Комплексное развитие медного сектора от разведки до переработки с акцентом на устойчивую добычу и добавление стоимости.',
        processingTitle: 'Переработка меди',
        processingSubtitle: 'Добавление стоимости',
        processingDescription: 'Современные объекты переработки меди преобразуют сырую руду в рафинированные медные продукты, захватывая стоимость внутри страны и создавая квалифицированную занятость в операциях плавки, рафинирования и производства.',
      },
      lithium: {
        title: 'Будущее лития',
        subtitle: 'Энергетический переход',
        description: 'По мере перехода мира к электромобилям и хранению возобновляемой энергии, огромные резервы лития Афганистана - оценённые в 215 миллионов метрических тонн стоимостью 8 триллионов долларов - позиционируют нацию как бесспорного мирового лидера в этом критическом минерале. С 45% известных месторождений лития в мире, Афганистан определит будущее революции чистой энергии.',
        statsTitle: 'Потенциал лития',
        statsSubtitle: 'Глобальное значение',
        detailTitle: 'Стратегия лития',
        detailSubtitle: 'Рамки развития',
        detailDescription: 'Стратегическое развитие ресурсов лития для удовлетворения глобального спроса на батареи электромобилей и системы хранения энергии.',
        geologyTitle: 'Геология пегматитов',
        geologySubtitle: 'Формирования лития',
        geologyDescription: 'Литийсодержащие пегматиты Афганистана, образованные через медленную кристаллизацию гранитных магм, содержат исключительные концентрации сподумена и лепидолита - основных рудных минералов лития, которые питают глобальный переход к чистой энергии.',
        quote: 'Месторождения лития Афганистана могут обеспечить глобальный переход к чистой энергии, позиционируя нацию как важного партнёра в борьбе с изменением климата.',
      },
      gold: {
        title: 'Золотое наследие',
        subtitle: 'Драгоценные металлы',
        description: 'Золотые резервы Афганистана в 27,000 метрических тонн, разбросанные по 45 основным золотым поясам от Бадахшана до Тахара, представляют как древнюю ремесленную традицию, так и беспрецедентную промышленную возможность. С резервами стоимостью 4.4 триллиона долларов, поддерживающими 350,000 ремесленных шахтёров, Афганистан готов стать доминирующей силой на мировых рынках драгоценных металлов.',
        statsTitle: 'Золотые ресурсы',
        statsSubtitle: 'Древнее богатство',
        detailTitle: 'Развитие золотого сектора',
        detailSubtitle: 'Добыча и переработка',
        detailDescription: 'Модернизация операций по добыче золота с акцентом на интеграцию ремесленных шахтёров, соблюдение экологических требований и развитие цепочки создания стоимости.',
        depositsTitle: 'Первичные золотые месторождения',
        depositsSubtitle: 'Добыча твёрдых пород',
        depositsDescription: 'Первичные золотые месторождения Афганистана встречаются в кварцевых жилах, связанных с орогенными событиями, содержащих как видимое золото, так и сульфидную минерализацию, требующую современных технологий переработки.',
      },
      gemstones: {
        title: 'Сокровища земли',
        subtitle: 'Драгоценные камни',
        description: 'От легендарных изумрудов Панджшера до древних рудников лазурита Бадахшана, наследие драгоценных камней Афганистана охватывает шесть тысяч лет. Эти драгоценные камни, торгуемые вдоль Шёлкового пути, продолжают получать премиальные цены на мировых рынках.',
        statsTitle: 'Наследие драгоценных камней',
        statsSubtitle: 'Древние сокровища',
        detailTitle: 'Превосходство драгоценных камней',
        detailSubtitle: 'Добыча и переработка',
        detailDescription: 'Развитие устойчивых возможностей добычи и переработки драгоценных камней с международной сертификацией и гарантией качества.',
      },
      detailItems: {
        copper: [
          { title: 'Месторождение Мес Айнак', description: 'Одно из крупнейших неразработанных месторождений меди в мире, расположенное в провинции Логар, с оценкой в 125m тонн меди.' },
          { title: 'Запасы Хаджигак', description: 'Массивный медно-железный комплекс в провинции Бамиан, содержащий запасы меди и железной руды стоимостью более $2T.' },
          { title: 'Месторождение Балхаб', description: 'Значительная минерализация меди в северном Афганистане с разведкой, выявившей высокосортные концентрации меди.' },
          { title: 'Инфраструктура переработки', description: 'Развитие современных объектов переработки меди, включая плавильные и рафинировочные заводы для внутренней добавленной стоимости.' },
          { title: 'Экологические стандарты', description: 'Внедрение международных экологических стандартов для устойчивой добычи и переработки меди.' },
          { title: 'Стратегия экспорта', description: 'Стратегические партнёрства с мировыми рынками меди и развитие эффективных экспортных коридоров.' },
        ],
        lithium: [
          { title: 'Месторождения Газни', description: 'Основные пегматитовые образования, содержащие литий, обнаруженные в провинции Газни с исключительными уровнями чистоты.' },
          { title: 'Регион Нуристан', description: 'Обширная минерализация лития в горной провинции Нуристан, одно из крупнейших месторождений в мире.' },
          { title: 'Литий аккумуляторного класса', description: 'Развитие возможностей переработки для производства карбоната лития аккумуляторного класса для рынков электромобилей.' },
          { title: 'Стратегические партнёрства', description: 'Переговоры с ведущими технологическими компаниями по устойчивой добыче и переработке лития.' },
          { title: 'Исследовательские объекты', description: 'Создание исследовательских центров лития для разработки инновационных технологий добычи.' },
          { title: 'Глобальная цепочка поставок', description: 'Интеграция в глобальные цепочки поставок лития для секторов электроники и возобновляемой энергетики.' },
        ],
        gold: [
          { title: 'Золотой пояс Бадахшана', description: 'Обширная минерализация золота вдоль геологического пояса Бадахшана с множественными высокосортными месторождениями.' },
          { title: 'Месторождения Тахара', description: 'Значительные аллювиальные и коренные месторождения золота в провинции Тахар с активной кустарной добычей.' },
          { title: 'Современная добыча', description: 'Внедрение современных технологий добычи золота для повышения коэффициентов извлечения и снижения воздействия на окружающую среду.' },
          { title: 'Мощности рафинирования', description: 'Развитие объектов рафинирования золота для производства золотых слитков и слитков международного стандарта.' },
          { title: 'Интеграция кустарных рабочих', description: 'Программы по интеграции кустарных шахтёров в формальную экономику с обучением и поддержкой оборудования.' },
          { title: 'Безопасность и гарантии', description: 'Внедрение систем сертификации золота без конфликтов и отслеживания.' },
        ],
        gemstones: [
          { title: 'Изумруды Панджшера', description: 'Всемирно известные изумрудные рудники в долине Панджшер, производящие драгоценные камни исключительного качества, востребованные коллекционерами по всему миру.' },
          { title: 'Лазурит Бадахшана', description: 'Лучший в мире лазурит из древних рудников Бадахшана, торгуемый вдоль Шёлкового пути на протяжении тысячелетий.' },
          { title: 'Рубин и сапфир', description: 'Высококачественные месторождения корунда, дающие рубины и сапфиры в нескольких провинциях по всей стране.' },
          { title: 'Разновидности турмалина', description: 'Разнообразные месторождения турмалина, включая редкие разновидности арбузного и индиголита, ценимые любителями драгоценных камней.' },
          { title: 'Обработка драгоценных камней', description: 'Развитие объектов огранки и полировки драгоценных камней для добавления стоимости перед экспортом.' },
          { title: 'Системы сертификации', description: 'Внедрение геммологической сертификации и отслеживания происхождения для афганских драгоценных камней.' },
        ],
        iron: [
          { title: 'Железо Хаджигак', description: 'Одно из крупнейших месторождений железной руды в Азии в центральном Афганистане с запасами, превышающими 22 миллиарда тонн.' },
          { title: 'Производство стали', description: 'Планы по интегрированным объектам производства стали для удовлетворения внутреннего спроса на строительство.' },
          { title: 'Сталь для инфраструктуры', description: 'Стратегическое значение для развития национальной инфраструктуры, включая мосты и здания.' },
          { title: 'Экспортный потенциал', description: 'Развитие возможностей экспорта железной руды на региональные рынки в Южной и Центральной Азии.' },
          { title: 'Качество магнетита', description: 'Высокосортные месторождения магнетита, подходящие для процессов прямого восстановления производства железа.' },
          { title: 'Создание рабочих мест', description: 'Потенциал создания десятков тысяч прямых и косвенных рабочих мест в добыче и переработке.' },
        ],
        rareEarth: [
          { title: 'Месторождения Хельманда', description: 'Значительные концентрации редкоземельных элементов, обнаруженные в провинции Хельманд с разнообразными элементными профилями.' },
          { title: 'Технологические минералы', description: 'Критические минералы для электроники, возобновляемой энергетики и оборонных применений с глобальным стратегическим значением.' },
          { title: 'Технология переработки', description: 'Развитие экологически ответственных технологий переработки и разделения редкоземельных элементов.' },
          { title: 'Неодим и празеодим', description: 'Ключевые элементы для постоянных магнитов, используемых в электромобилях и ветровых турбинах.' },
          { title: 'Безопасность поставок', description: 'Потенциал снижения глобальной зависимости от поставок редкоземельных элементов из одного источника.' },
          { title: 'Исследовательское сотрудничество', description: 'Международные партнёрства для исследований редкоземельных элементов и устойчивых методов добычи.' },
        ],
        industrial: [
          { title: 'Мрамор и гранит', description: 'Месторождения мрамора мирового класса в различных цветах и узорах, экспортируемые для архитектурных применений по всему миру.' },
          { title: 'Тальк и мыльный камень', description: 'Месторождения талька высокой чистоты, используемые в косметике, фармацевтике и промышленных применениях.' },
          { title: 'Запасы хромита', description: 'Значительные месторождения хромита, необходимые для производства нержавеющей стали и химической промышленности.' },
          { title: 'Производство барита', description: 'Барит высокого качества для применений в нефтебурении и промышленном химическом производстве.' },
          { title: 'Соляные месторождения', description: 'Обширные месторождения каменной соли и эвапоритов для пищевой и химической промышленности.' },
          { title: 'Цементные материалы', description: 'Месторождения известняка и глины, поддерживающие внутренние производственные мощности цемента.' },
        ],
        processing: [
          { title: 'Плавильные объекты', description: 'Современные плавильные операции для меди, железа и других металлов с системами контроля загрязнения.' },
          { title: 'Мощности рафинирования', description: 'Развитие инфраструктуры рафинирования минералов для переработки с добавленной стоимостью перед экспортом.' },
          { title: 'Контроль качества', description: 'Внедрение международных стандартов качества и испытательных лабораторий.' },
          { title: 'Дробление и грохочение', description: 'Передовое оборудование для переработки минералов для эффективной подготовки и концентрации руды.' },
          { title: 'Управление хвостохранилищами', description: 'Экологически ответственные объекты хранения и обработки хвостов.' },
          { title: 'Энергетические системы', description: 'Интеграция возобновляемой энергетики для устойчивых операций добычи и переработки.' },
        ],
        research: [
          { title: 'Геологическая съёмка', description: 'Комплексное геологическое картирование и оценка ресурсов во всех провинциях.' },
          { title: 'Керновое бурение', description: 'Обширные программы разведочного бурения для количественной оценки минеральных ресурсов и запасов.' },
          { title: 'Лабораторный анализ', description: 'Современные аналитические лаборатории для характеристики минералов и определения сорта.' },
          { title: 'Управление данными', description: 'Цифровые базы данных для геологических данных, результатов разведки и оценок ресурсов.' },
          { title: 'Академические партнёрства', description: 'Сотрудничество с международными университетами для геологических исследований и обучения.' },
          { title: 'Передача технологий', description: 'Программы по созданию местного технического потенциала в технологиях разведки и добычи.' },
        ],
        trade: [
          { title: 'Экспортные коридоры', description: 'Развитие эффективных экспортных маршрутов через Пакистан, Иран и соседей Центральной Азии.' },
          { title: 'Торговые соглашения', description: 'Двусторонние и многосторонние торговые соглашения для облегчения экспорта минералов.' },
          { title: 'Механизмы ценообразования', description: 'Прозрачное ценообразование на основе международных товарных рынков и стандартов качества.' },
          { title: 'Логистическая инфраструктура', description: 'Инвестиции в дороги, железные дороги и пограничные объекты для транспортировки минералов.' },
          { title: 'Диверсификация рынка', description: 'Стратегия доступа к разнообразным рынкам в Азии, Европе и на Ближнем Востоке.' },
          { title: 'Развитие цепочки стоимости', description: 'Фокус на увеличении добавленной стоимости перед экспортом через переработку.' },
        ],
        sustainability: [
          { title: 'Защита окружающей среды', description: 'Строгие экологические правила и мониторинг операций добычи.' },
          { title: 'Развитие сообщества', description: 'Распределение доходов и программы развития сообщества в районах добычи.' },
          { title: 'Управление водными ресурсами', description: 'Устойчивое использование и обработка воды в операциях добычи и переработки.' },
          { title: 'Планы реабилитации', description: 'Требования к закрытию шахт и реабилитации земель для всех операций.' },
          { title: 'Здоровье и безопасность', description: 'Международные стандарты для здоровья и безопасности рабочих в операциях добычи.' },
          { title: 'Климатические соображения', description: 'Интеграция соображений изменения климата в планирование добычи.' },
        ],
      },
      iron: {
        title: 'Стальной фундамент',
        subtitle: 'Промышленная база',
        description: 'Массивное месторождение железной руды Хаджигак и 100 других крупных объектов представляют основу промышленного будущего Афганистана. С запасами, превышающими 22 миллиарда тонн стоимостью 3,5 триллиона долларов, Афганистан имеет достаточно железной руды для снабжения мирового производства стали на десятилетия, потенциально создавая 500,000 прямых рабочих мест.',
        statsTitle: 'Железные ресурсы',
        statsSubtitle: 'Промышленный потенциал',
        detailTitle: 'Развитие железа и стали',
        detailSubtitle: 'Цепочка стоимости',
        detailDescription: 'Интегрированное развитие добычи железной руды и производства стали для поддержки национальной инфраструктуры и создания рабочих мест.',
        processingTitle: 'Производство стали',
        processingSubtitle: 'Промышленные мощности',
        processingDescription: 'Развитие интегрированных объектов производства стали преобразует строительный сектор Афганистана, снижая зависимость от импорта и создавая тысячи промышленных рабочих мест в переработке и производстве.',
      },
      rareEarth: {
        title: 'Стратегические элементы',
        subtitle: 'Редкоземельные минералы',
        description: 'Критические редкоземельные элементы, необходимые для современных технологий — от смартфонов до электромобилей и ветровых турбин — были обнаружены на 40 крупных месторождениях в Афганистане, с общей оценочной стоимостью 5 триллионов долларов. Это позиционирует Афганистан как ключевого игрока в глобальных технологических цепочках поставок, способного преобразовать весь ландшафт рынка редкоземельных элементов.',
        statsTitle: 'Потенциал редкоземельных элементов',
        statsSubtitle: 'Технологические металлы',
        detailTitle: 'Развитие редкоземельных элементов',
        detailSubtitle: 'Технологические минералы',
        detailDescription: 'Стратегическое развитие ресурсов редкоземельных элементов для поддержки глобальных технологических отраслей и перехода на возобновляемую энергетику.',
      },
      lapis: {
        title: 'Лазурное наследие',
        subtitle: 'Лазурит',
        description: 'Древние лазуритовые рудники Бадахшана снабжали мир этим ценным синим камнем более 6000 лет. Использованный во всём, от посмертной маски Тутанхамона до шедевров эпохи Возрождения, афганский лазурит остаётся лучшим в мире.',
      },
      emerald: {
        title: 'Зелёный огонь',
        subtitle: 'Изумруды Панджшера',
        description: 'Изумруды долины Панджшер входят в число самых ценных драгоценных камней в мире, демонстрируя исключительную насыщенность цвета и прозрачность. Эти камни, образованные в метаморфических слюдяных сланцах, получают премиальные цены на международных рынках.',
      },
      ruby: {
        title: 'Сокровища корунда',
        subtitle: 'Рубин и сапфир',
        description: 'Афганистан производит исключительные рубины и сапфиры из месторождений, связанных с мрамором, в нескольких провинциях. Рубины цвета голубиной крови из Джегдалека и синие сапфиры из Гиндукуша входят в число лучших образцов корунда в мире.',
      },
      tourmaline: {
        title: 'Радужные кристаллы',
        subtitle: 'Разновидности турмалина',
        description: 'Афганистан производит одни из самых впечатляющих образцов турмалина в мире, включая редкие разновидности арбузного и индиголита, востребованные коллекционерами и ювелирами по всему миру.',
      },
      aquamarine: {
        title: 'Морские синие кристаллы',
        subtitle: 'Сокровища аквамарина',
        description: 'Пегматитовые поля провинций Кунар и Нуристан дают исключительные кристаллы аквамарина, ценимые за их чистый синий цвет и замечательную прозрачность, соперничающую с образцами из любого места в мире.',
      },
      chromite: {
        title: 'Металлический фундамент',
        subtitle: 'Запасы хромита',
        description: 'Необходимый для производства нержавеющей стали и промышленных химикатов, месторождения хромита Афганистана представляют значительный экспортный потенциал и возможности промышленного развития.',
        statsTitle: 'Ресурсы хромита',
        statsSubtitle: 'Промышленный металл',
      },
      marble: {
        title: 'Камень королей',
        subtitle: 'Мрамор и гранит',
        description: 'Афганский мрамор, известный своим исключительным качеством и разнообразными цветами, украшает архитектурные шедевры по всему миру. Мраморные карьеры нации производят камень, соперничающий с лучшими итальянскими и турецкими разновидностями.',
        statsTitle: 'Ресурсы мрамора',
        statsSubtitle: 'Премиальный камень',
      },
      coal: {
        title: 'Энергетические ресурсы',
        subtitle: 'Угольные месторождения',
        description: 'Значительные запасы угля в нескольких провинциях обеспечивают энергетическую безопасность и поддерживают промышленное развитие, с акцентом на чистые угольные технологии и ответственные методы добычи.',
        statsTitle: 'Угольные ресурсы',
        statsSubtitle: 'Энергетическая безопасность',
      },
      industrial: {
        title: 'Промышленный фундамент',
        subtitle: 'Строительство и производство',
        description: 'Помимо драгоценных металлов и стратегических минералов, Афганистан обладает огромными запасами промышленных минералов — мрамора, хромита, талька и цементных материалов — необходимых для строительной и производственной отраслей.',
        detailTitle: 'Промышленные минералы',
        detailSubtitle: 'Строительные блоки',
        detailDescription: 'Развитие ресурсов промышленных минералов для поддержки внутренних строительных и производственных секторов.',
      },
      processing: {
        title: 'Добавленная стоимость',
        subtitle: 'Переработка и рафинирование',
        description: 'Современная инфраструктура переработки минералов превращает сырую руду в рафинированные продукты, захватывая стоимость внутри страны и создавая возможности для квалифицированной занятости по всей цепочке стоимости добычи.',
        detailTitle: 'Инфраструктура переработки',
        detailSubtitle: 'Промышленные мощности',
        detailDescription: 'Развитие современных объектов переработки для добавленной стоимости и экспортной конкурентоспособности.',
      },
      research: {
        title: 'Фундамент знаний',
        subtitle: 'Исследования и разведка',
        description: 'Создание научного потенциала для геологических исследований, оценки ресурсов и разработки технологий добычи.',
        detailTitle: 'Исследования и разработки',
        detailSubtitle: 'Научное превосходство',
        detailDescription: 'Создание научного потенциала для геологических исследований, оценки ресурсов и разработки технологий добычи.',
      },
      trade: {
        title: 'Глобальные рынки',
        subtitle: 'Торговля и экспорт',
        description: 'Создание экспортной инфраструктуры и торговых отношений для оптимизации доходов от минералов.',
        detailTitle: 'Развитие торговли',
        detailSubtitle: 'Доступ к рынку',
        detailDescription: 'Создание экспортной инфраструктуры и торговых отношений для оптимизации доходов от минералов.',
      },
      sustainability: {
        title: 'Ответственная добыча',
        subtitle: 'Устойчивость',
        description: 'Интеграция защиты окружающей среды, пользы для сообщества и ответственного управления во всех операциях добычи.',
        detailTitle: 'Устойчивое развитие',
        detailSubtitle: 'Экологическое и социальное',
        detailDescription: 'Интеграция защиты окружающей среды, пользы для сообщества и ответственного управления во всех операциях добычи.',
      },
      timeline: {
        sectionTitle: 'Дорожная карта развития',
        sectionSubtitle: 'Стратегическая временная шкала',
        year2024: { title: 'Запуск национальной минеральной стратегии', description: 'Комплексная национальная стратегия устойчивого развития минералов и оптимизации экспорта.' },
        year2025: { title: 'Завершение геологической съемки', description: 'Завершение детальных геологических съемок во всех 34 провинциях с количественной оценкой ресурсов.' },
        year2026: { title: 'Инфраструктура переработки', description: 'Открытие первых современных объектов переработки меди и лития.' },
        year2027: { title: 'Развитие железных дорог', description: 'Завершение минеральной железной дороги, соединяющей основные месторождения с экспортными терминалами.' },
        year2028: { title: 'Развитие экспортных коридоров', description: 'Завершение основных транспортных инфраструктур, соединяющих горнодобывающие регионы с экспортными пунктами.' },
        year2029: { title: 'Плавильные операции', description: 'Запуск первых интегрированных плавильных объектов для переработки меди и железа.' },
        year2030: { title: 'Масштабирование производства', description: 'Достижение значительных целей производства минералов при полном соблюдении экологических норм.' },
        year2032: { title: 'Производство лития', description: 'Начало коммерческого производства лития для мировых рынков аккумуляторов.' },
        year2035: { title: 'Зрелость цепочки создания стоимости', description: 'Создание комплексных минеральных цепочек создания стоимости от добычи до готовой продукции.' },
      },
      mesAynakLegacy: {
        title: 'Наследие Мес Айнак',
        subtitle: 'Археологическое наследие',
        description: 'Медное месторождение Мес Айнак расположено на одном из самых значительных буддийских археологических памятников мира. Планы развития тщательно балансируют добычу полезных ископаемых с сохранением монастырей, ступ и артефактов возрастом 2000 лет.',
      },
      copperOpenPit: {
        title: 'Мегаоперации по меди',
        subtitle: 'Открытая разработка',
        description: 'Массивные открытые медные операции используют террасные методы добычи, перемещая миллионы тонн руды ежегодно с флотами 400-тонных самосвалов, работающих круглосуточно в драматических горных ландшафтах Афганистана.',
      },
      moltenCopper: {
        title: 'Расплавленная медь',
        subtitle: 'Плавильные операции',
        description: 'Современные плавильные печи для меди превращают концентрированную руду в катоды меди чистотой 99,9%. Расплавленная медь при температуре 1200°C проходит через точно контролируемые процессы для создания готового к экспорту рафинированного металла.',
      },
      spodumeneCrystals: {
        title: 'Кристаллы сподумена',
        subtitle: 'Источник металла для батарей',
        description: 'Кристаллы сподумена, содержащие литий, из афганских пегматитов содержат до 8% оксида лития — одни из самых высоких сортов в мире. Эти призматические кристаллы составляют основу цепочки поставок батарей для революции электромобилей.',
      },
      deepGoldMining: {
        title: 'Глубокая добыча золота',
        subtitle: 'Подземные операции',
        description: 'Современные подземные операции по добыче золота получают доступ к высокосортным рудным телам глубоко в горных формациях. Туннели, освещенные светодиодами, открывают золотоносные кварцевые жилы, в то время как команды по добыче работают с точным оборудованием.',
      },
      goldRefining: {
        title: 'Рафинирование золота',
        subtitle: 'Обработка драгоценных металлов',
        description: 'Операции по рафинированию золота превращают сырую руду в инвестиционные слитки. Расплавленное золото заливается в точные формы, создавая слитки чистотой 99,99%, предназначенные для международных рынков и резервов центрального банка.',
      },
      panjshirEmeraldCrystals: {
        title: 'Кристаллы изумруда Панджшера',
        subtitle: 'Образцы мирового класса',
        description: 'Сырые кристаллы изумруда из долины Панджшер демонстрируют исключительную насыщенность цвета и прозрачность. Эти шестиугольные драгоценные камни, встроенные в их оригинальную матрицу слюдяного сланца, получают премиальные цены на международных геммологических рынках.',
      },
      hajigakIronMountain: {
        title: 'Железная гора Хаджигак',
        subtitle: 'Крупнейшее месторождение Азии',
        description: 'Массивное месторождение железной руды Хаджигак в провинции Бамиан содержит примерно 2,2 миллиарда тонн высокосортной железной руды. Эта красно-коричневая гора представляет основу промышленного стального будущего Афганистана.',
      },
      lapisAncientMines: {
        title: '6000 лет лазури',
        subtitle: 'Древние лазуритовые рудники',
        description: 'Древние лазуритовые рудники Бадахшана работают непрерывно в течение шести тысячелетий. Синие полосатые скальные поверхности открывают источник ультрамаринового пигмента, который окрашивал шедевры эпохи Возрождения и египетские королевские погребальные камеры.',
      },
      jegdalekRubies: {
        title: 'Рубины Джегдалек',
        subtitle: 'Превосходство цвета голубиной крови',
        description: 'Месторождения рубинов Джегдалек производят одни из лучших рубинов цвета голубиной крови в мире — глубокие красные драгоценные камни с исключительной прозрачностью и флуоресценцией, которые по качеству соперничают с бирманскими камнями и получают премиальные цены на аукционах.',
      },
      hinduKushSapphires: {
        title: 'Сапфиры Гиндукуша',
        subtitle: 'Сокровища василькового синего',
        description: 'Горный хребет Гиндукуш дает исключительные сапфиры василькового синего из месторождений, связанных с мрамором. Эти корундовые драгоценные камни демонстрируют ценный бархатистый синий цвет, востребованный коллекционерами и ювелирными домами по всему миру.',
      },
      nuristanTourmaline: {
        title: 'Турмалин Нуристана',
        subtitle: 'Радужные кристаллы',
        description: 'Провинция Нуристан производит впечатляющие образцы турмалина, включая редкие разновидности арбуза с розовыми центрами и зелеными краями, наряду с востребованными индиголитовыми синими и рубеллитовыми розовыми кристаллами.',
      },
      kunarAquamarine: {
        title: 'Аквамарин Кунара',
        subtitle: 'Морской синий берилл',
        description: 'Пегматитовые поля провинции Куннар дают исключительные кристаллы аквамарина — бледные морские синие шестиугольные драгоценные камни на белой полевой матрице, которые по прозрачности и интенсивности цвета соперничают с образцами из любого места в мире.',
      },
      strategicREEConcentrate: {
        title: 'Стратегический концентрат РЗЭ',
        subtitle: 'Технологические металлы',
        description: 'Концентраты редкоземельных элементов из афганских месторождений содержат критические материалы, необходимые для смартфонов, ветровых турбин и электромобилей. Лабораторный анализ выявляет 17 различных видов РЗЭ с исключительными уровнями чистоты.',
      },
      chromiteExportOperations: {
        title: 'Экспортные операции хромита',
        subtitle: 'Торговля промышленным металлом',
        description: 'Массивные запасы хромитовой руды ждут экспорта международным производителям нержавеющей стали. Промышленное погрузочное оборудование обрабатывает тысячи тонн ежедневно, удовлетворяя глобальный спрос на этот важный металлургический материал.',
      },
      premiumWhiteMarble: {
        title: 'Премиальный белый мрамор',
        subtitle: 'Архитектурный камень',
        description: 'Нетронутые белые мраморные карьеры Афганистана производят камень, который по качеству соперничает с итальянским Каррара. Массивные блоки с тонкими серыми прожилками добываются для архитектурных проектов и скульптурных работ по всему миру.',
      },
      undergroundCoalOperations: {
        title: 'Подземные угольные операции',
        subtitle: 'Энергетическая безопасность',
        description: 'Современные подземные угольные операции получают доступ к толстым пластам металлургического угля. Непрерывные горнодобывающие машины работают в 24-часовые смены, добывая энергетические ресурсы, которые питают отечественную промышленность и развитие инфраструктуры.',
      },
      processingPlantOperations: {
        title: 'Операции перерабатывающего завода',
        subtitle: 'Добавленная стоимость',
        description: 'Внутри современных объектов переработки минералов конвейерные системы перемещают дробленую руду через флотационные камеры, гравитационные сепараторы и магнитные концентраторы. Квалифицированные операторы контролируют каждый этап процесса обогащения.',
      },
      coreSampleAnalysis: {
        title: 'Анализ керновых проб',
        subtitle: 'Геологическая разведка',
        description: 'Геологические керновые пробы, расположенные в деревянных ящиках, раскрывают подземное богатство афганских месторождений. Красочные рудные зоны, показывающие минерализацию меди, золота и редкоземельных элементов, направляют решения по разведке и разработке.',
      },
      explorationDrilling: {
        title: 'Разведочное бурение',
        subtitle: 'Операции по открытию',
        description: 'Буровые установки с алмазным бурением на удаленных горных участках извлекают цилиндрические керновые пробы, которые раскрывают геологию на сотни метров ниже. Разведочные команды работают на фоне драматических пейзажей Гиндукуша, чтобы нанести на карту новые минеральные открытия.',
      },
      surveyOperations: {
        title: 'Операции по съемке',
        subtitle: 'Картирование богатства Афганистана',
        description: 'Геологические съемочные команды используют спутниковое позиционирующее оборудование и передовые инструменты картографирования на горных хребтах по всему Афганистану. Их систематическая работа раскрывает полную протяженность минеральных ресурсов нации во всех 34 провинциях.',
      },
      operationsCommandCenter: {
        title: 'Командный центр операций',
        subtitle: 'Цифровая разведывательная информация о добыче',
        description: 'Современные центры управления добычей оснащены экранами от стены до стены, отображающими спутниковые изображения в реальном времени, телеметрию флота и производственные данные. Операторы контролируют каждый аспект горнодобывающих операций из централизованных командных объектов.',
      },
      vision2030: {
        title: 'Видение 2026-2050',
        subtitle: 'Будущие горизонты',
        description: 'К 2040 году Афганистан станет глобально признанной горнодобывающей нацией с устойчивыми операциями, переработкой с добавленной стоимостью и минеральным богатством, справедливо разделенным между всеми гражданами.',
      },
      finalQuote: {
        quote: 'Минералы под нашими горами - это не просто ресурсы - это основа, на которой мы построим процветающий, самодостаточный Афганистан для будущих поколений.',
      },
      buildingTomorrow: {
        title: 'Строительство завтра',
        subtitle: 'Будущее',
        description: 'Минеральное богатство Афганистана представляет беспрецедентную возможность для экономической трансформации. Благодаря устойчивому развитию, международному партнерству и ответственному управлению эти ресурсы обеспечат национальное процветание для будущих поколений.',
      },
      nationalLegacy: {
        title: 'Национальное наследие',
        subtitle: 'Будущие поколения',
        description: 'Ответственное развитие минеральных ресурсов Афганистана создаст долговременное процветание, сохранит природное наследие и обеспечит экономическую независимость для будущих поколений афганцев.',
      },
      // Technology Sections
      autonomousMining: { title: 'Автономный горнодобывающий флот', subtitle: 'Промышленность 4.0', description: 'Автономные самосвалы следующего поколения и буровые системы работают круглосуточно с навигацией на основе искусственного интеллекта. Эти 400-тонные транспортные средства ежедневно перемещают более 50,000 тонн руды, максимизируя производительность при обеспечении рекордов безопасности без травм на всех основных участках добычи.' },
      satelliteMapping: { title: 'Спутниковое картирование ресурсов', subtitle: 'Технология дистанционного зондирования', description: 'Передовые спутниковые изображения и гиперспектральное сканирование выявляют минеральные сигнатуры на 652,000 квадратных километрах афганской территории. Алгоритмы ИИ анализируют геологические особенности для выявления более 10,000 потенциальных месторождений для наземной проверки.' },
      droneSurveys: { title: 'Аэрофотосъемочные операции', subtitle: 'Технология картирования дронами', description: 'Автономные флоты дронов проводят топографические съемки высокого разрешения и магнитометрические сканирования в удаленных горных районах. Более 500 дронов ежедневно картографируют 10,000 гектаров, генерируя трехмерные модели местности с точностью до сантиметра для планирования шахт.' },
      deepCoreDrilling: { title: 'Программы глубокого кернового бурения', subtitle: 'Подповерхностная разведка', description: 'Операции алмазного бурения извлекают керновые пробы с глубин, превышающих 2,000 метров, раскрывая полную протяженность минеральных формаций. Более 200 буровых установок работают одновременно во всех 34 провинциях, определяя более 50 миллиардов тонн новых ресурсов ежегодно.' },
      geophysicalSurveys: { title: 'Геофизические съемочные сети', subtitle: 'Электромагнитное картирование', description: 'Радары подповерхностного зондирования и электромагнитные съемки ежегодно картографируют подповерхностную геологию на более чем 100,000 километров линий. Эти технологии выявляют скрытые рудные тела, структуры разломов и водные ресурсы, критически важные для разработки шахт.' },
      flotationProcessing: { title: 'Флотационные перерабатывающие заводы', subtitle: 'Концентрация руды', description: 'Передовые флотационные камеры ежедневно обрабатывают 500,000 тонн руды, используя передовую технологию пенной флотации для достижения коэффициентов извлечения минералов более 95%. 50 перерабатывающих заводов по всей стране создают тысячи квалифицированных технических рабочих мест.' },
      hydrometallurgical: { title: 'Гидрометаллургические объекты', subtitle: 'Химическая переработка', description: 'Передовые гидрометаллургические заводы используют экологически ответственные процессы выщелачивания для извлечения меди, золота и редкоземельных элементов. Системы замкнутого цикла воды обеспечивают нулевой сброс при достижении уровней чистоты металла 99.9%.' },
      electrorefining: { title: 'Превосходство электролитического рафинирования', subtitle: 'Очистка металла', description: 'Массивные объекты электролитического рафинирования очищают медь до катодного сорта 99.99%, производя 1 миллион тонн рафинированной меди ежегодно. Эти объекты представляют 50 миллиардов долларов инвестиций в инфраструктуру и нанимают более 100,000 рабочих.' },
      slagProcessing: { title: 'Операции по переработке шлака', subtitle: 'Добыча без отходов', description: 'Исторические шлаковые отвалы, содержащие ценные металлы, подвергаются переработке для извлечения золота, серебра и меди, оставшихся от древних методов добычи. Более 100 заводов по переработке восстанавливают 10 миллиардов долларов металлов с исторических горнодобывающих участков.' },
      miningRailways: { title: 'Горнодобывающие железнодорожные сети', subtitle: 'Инфраструктура массовых перевозок', description: '5,000 километров железных дорог для тяжелых перевозок соединяют основные горнодобывающие районы с экспортными терминалами. Составы из более чем 200 вагонов с рудой ежегодно перевозят 100 миллионов тонн, снижая транспортные расходы на 75% по сравнению с перевозкой грузовиками.' },
      conveyorSystems: { title: 'Наземные конвейерные системы', subtitle: 'Непрерывный поток материалов', description: '500 километров наземных конвейерных систем транспортируют руду от карьера к перерабатывающему заводу со скоростью более 20,000 тонн в час. Эти системы работают круглосуточно с доступностью 99.5%, заменяя тысячи перемещений самосвалов.' },
      powerInfrastructure: { title: 'Энергосеть горнодобывающей промышленности', subtitle: 'Энергетическая инфраструктура', description: '5,000 мегаватт выделенной генерирующей мощности — включая солнечную, гидроэнергетику и газ — обеспечивают энергией горнодобывающие операции. Подземные линии передачи соединяют удаленные участки с национальной сетью, обеспечивая надежность энергоснабжения 99.9%.' },
      waterInfrastructure: { title: 'Системы водоснабжения', subtitle: 'Устойчивое управление водными ресурсами', description: 'Массивные системы рециркуляции воды восстанавливают 95% технологической воды, снижая потребление пресной воды до мировых лидирующих уровней. Более 100 очистных сооружений обеспечивают нулевое загрязнение местных водных ресурсов, защищая водоснабжение сообществ.' },
      portFacilities: { title: 'Экспортные портовые объекты', subtitle: 'Морской торговый доступ', description: 'Стратегические партнерства с Пакистаном, Ираном и Туркменистаном обеспечивают доступ к глубоководным портам, способным обрабатывать более 200 миллионов тонн экспорта минералов ежегодно. Выделенные минеральные терминалы оснащены автоматизированными системами погрузки судов.' },
      miningUniversity: { title: 'Национальный горнодобывающий университет', subtitle: 'Техническое образование', description: 'Национальный горнодобывающий университет Афганистана ежегодно обучает 10,000 горных инженеров и геологов. Лаборатории и исследовательские объекты мирового класса готовят выпускников к руководящим ролям в минеральной отрасли нации.' },
      geologicalInstitute: { title: 'Институт геологической съемки', subtitle: 'Научное превосходство', description: 'Национальный институт геологической съемки проводит систематические оценки ресурсов во всех 34 провинциях. Более 1,000 геологов поддерживают самую полную в мире базу данных минералов, направляя 100 миллиардов долларов инвестиций в разведку.' },
      metallurgicalResearch: { title: 'Центр металлургических исследований', subtitle: 'Инновации в переработке', description: 'Передовые металлургические лаборатории разрабатывают новые технологии извлечения, оптимизированные для афганских руд. Исследовательские прорывы улучшили коэффициенты извлечения на 30% при снижении потребления энергии на 40% во всех операциях переработки.' },
      environmentalResearch: { title: 'Институт экологических исследований', subtitle: 'Устойчивые решения', description: 'Специализированные объекты экологических исследований разрабатывают передовые в мире решения для рекультивации шахт, очистки воды и защиты биоразнообразия. Более 500 ученых обеспечивают, чтобы горнодобывающие операции превышали международные экологические стандарты.' },
      // Economic Impact
      economicTransformation: { title: 'Экономическая трансформация', subtitle: 'Влияние 30 триллионов долларов', description: 'Развитие минералов увеличит ВВП Афганистана на 2,000% в течение следующих 20 лет. Богатство минералов в 30 триллионов долларов превращается в 1.5 триллиона долларов ежегодной экономической активности, превращая Афганистан в экономическую державу Центральной Азии.' },
      employmentRevolution: { title: 'Революция занятости', subtitle: '5 миллионов рабочих мест', description: 'Прямая занятость в горнодобывающей промышленности превысит 2 миллиона позиций, с дополнительными 3 миллионами рабочих мест в переработке, логистике и поддерживающих отраслях. Средняя заработная плата в горнодобывающей промышленности в размере 30,000 долларов в год создаст процветающий средний класс.' },
      regionalDevelopment: { title: 'Зоны регионального развития', subtitle: 'Трансформация провинций', description: '50 специальных зон экономического развития вокруг основных горнодобывающих операций превращают удаленные провинции в процветающие промышленные центры. Новые города, вмещающие 5 миллионов человек, появятся вокруг минерального богатства нации.' },
      exportRevenue: { title: 'Рост экспортных доходов', subtitle: 'Трансформация торговли', description: 'Экспорт минералов к 2040 году будет генерировать 200 миллиардов долларов ежегодно, помещая Афганистан среди 10 крупнейших экспортеров минералов в мире. Стратегические торговые отношения с более чем 100 странами обеспечивают доступ к рынкам и справедливое ценообразование.' },
      governmentRevenue: { title: 'Доходы правительства', subtitle: 'Фискальная трансформация', description: 'Роялти и налоги на добычу полезных ископаемых будут генерировать 50 миллиардов долларов ежегодно для государственных услуг, образования, здравоохранения и инфраструктуры. Прозрачный Фонд развития минералов обеспечивает, чтобы выгоды достигали всех 40 миллионов афганских граждан.' },
      foreignInvestment: { title: 'Прямые иностранные инвестиции', subtitle: 'Приток 500 миллиардов долларов', description: 'Международные горнодобывающие компании обязались инвестировать 500 миллиардов долларов в разведку и разработку до 2050 года. Стратегические партнерства с ведущими глобальными горнодобывающими компаниями приносят мировую экспертизу и технологии в афганские операции.' },
      domesticInvestment: { title: 'Рост внутренних инвестиций', subtitle: 'Афганское предпринимательство', description: 'Афганские горнодобывающие предприниматели управляют более чем 10,000 лицензированными горнодобывающими операциями, от кустарных рудников драгоценных камней до объектов переработки промышленного масштаба. Внутренние инвестиции в секторе превышают 100 миллиардов долларов.' },
      miningFinance: { title: 'Финансовый центр горнодобывающей промышленности', subtitle: 'Рынки капитала', description: 'Кабульская биржа горнодобывающей промышленности способствует 50 миллиардам долларов ежегодных инвестиций в горнодобывающую промышленность, с более чем 200 публично торгуемыми горнодобывающими компаниями. Доступ к глобальным рынкам капитала обеспечивает конкурентное финансирование для проектов всех масштабов.' },
      miningInsurance: { title: 'Страхование и риски горнодобывающей промышленности', subtitle: 'Финансовая защита', description: 'Комплексные программы страхования горнодобывающей промышленности защищают 500 миллиардов долларов активов и операций. Международные партнерства по перестрахованию обеспечивают покрытие всех операционных, экологических и политических рисков в секторе.' },
      // Sustainability Expansion
      carbonNeutral: { title: 'Углеродно-нейтральная добыча', subtitle: 'Климатическое лидерство', description: 'Горнодобывающий сектор Афганистана достигнет углеродной нейтральности к 2040 году через возобновляемую энергию, электромобили и технологии улавливания углерода. 10 гигаватт солнечной и ветровой энергии устраняют зависимость от ископаемого топлива.' },
      biodiversityProtection: { title: 'Защита биоразнообразия', subtitle: 'Защита экосистем', description: '100,000 гектаров защищенных коридоров биоразнообразия окружают основные горнодобывающие операции. Программы мониторинга дикой природы защищают снежных барсов, баранов Марко Поло и другие исчезающие виды, уникальные для горных экосистем Афганистана.' },
      mineClosure: { title: 'Постепенная рекультивация', subtitle: 'Восстановление земель', description: '10 миллиардов долларов в фондах закрытия шахт обеспечивают, чтобы все операции постепенно рекультивировались во время и после добычи. Восстановленные ландшафты поддерживают сельское хозяйство, лесное хозяйство и туризм, создавая долговременную ценность для местных сообществ.' },
      circularEconomy: { title: 'Циркулярная экономика добычи', subtitle: 'Операции без отходов', description: 'Передовые технологии переработки обеспечивают, чтобы 99% всех извлеченных материалов находили продуктивное применение. Отходы добычи становятся строительными заполнителями, сельскохозяйственными поправками или сырьем для вторичных операций переработки.' },
      // Social Impact
      educationPrograms: { title: 'Программы образования в горнодобывающей промышленности', subtitle: 'Развитие человеческого капитала', description: 'Более 1,000 школ, построенных в горнодобывающих регионах, обеспечивают образование мирового класса для 2 миллионов детей. Программы стипендий ежегодно отправляют 10,000 студентов в международные университеты для получения продвинутых степеней в горнодобывающей промышленности и инженерии.' },
      healthcareFacilities: { title: 'Общественное здравоохранение', subtitle: 'Медицинская инфраструктура', description: '50 современных больниц и 500 клиник в горнодобывающих регионах обеспечивают бесплатное здравоохранение для 10 миллионов человек. Программы здравоохранения горнодобывающих компаний снизили детскую смертность на 90% и увеличили ожидаемую продолжительность жизни на 15 лет.' },
      womensEmployment: { title: 'Женщины в горнодобывающей промышленности', subtitle: 'Гендерное равенство', description: 'Женщины составляют 30% рабочей силы горнодобывающей промышленности, от геологов до операторов оборудования до исполнительного руководства. Компании, принадлежащие женщинам, поставляют 40% услуг горнодобывающей промышленности, создавая экономическую независимость для миллионов афганских женщин.' },
      artisanalIntegration: { title: 'Поддержка кустарных горняков', subtitle: 'Программы формализации', description: '500,000 кустарных горняков получают обучение, оборудование и доступ к рынкам через программы формализации. Сертификация справедливой торговли обеспечивает, чтобы кустарные продукты получали премиальные цены на международных рынках.' },
      // Technology Innovation
      aiMining: { title: 'Добыча на основе ИИ', subtitle: 'Искусственный интеллект', description: 'Системы искусственного интеллекта оптимизируют каждый аспект горнодобывающих операций, от геологического моделирования до обслуживания оборудования и логистики цепочки поставок. ИИ снижает операционные расходы на 40%, одновременно улучшая показатели безопасности на 80%.' },
      robotics: { title: 'Робототехника горнодобывающей промышленности', subtitle: 'Автономные системы', description: 'Более 10,000 автономных роботов выполняют опасные подземные задачи, включая бурение, взрывные работы и извлечение руды. Человеческие операторы контролируют из наземных диспетчерских, полностью устраняя подземные смертельные случаи.' },
      digitalTwins: { title: 'Операции цифровых двойников', subtitle: 'Виртуальная добыча', description: 'Полные цифровые копии каждой горнодобывающей операции обеспечивают оптимизацию в реальном времени и прогнозирующее обслуживание. Операторы могут моделировать сценарии извлечения, оптимизируя эффективность перед внедрением изменений в физических операциях.' },
      blockchainSupply: { title: 'Отслеживаемость блокчейна', subtitle: 'Прозрачность цепочки поставок', description: 'Технология блокчейна отслеживает каждый грамм афганских минералов от извлечения до конечного продукта. Потребители и производители могут проверить этичный источник, статус без конфликтов и соответствие экологическим требованиям с полной прозрачностью.' },
      // Global Partnerships
      chinaPartnership: { title: 'Стратегическое партнерство с Китаем', subtitle: 'Интеграция Пояса и Пути', description: 'Стратегическое партнерство с Китаем приносит 200 миллиардов долларов инвестиций в инфраструктуру, соединяя афганские месторождения минералов с азиатскими производственными центрами. Новые железные дороги и автомагистрали интегрируют Афганистан в глобальные цепочки поставок.' },
      europePartnership: { title: 'Сотрудничество с Европейским союзом', subtitle: 'Передача технологий', description: 'Партнерства ЕС приносят передовые европейские технологии горнодобывающей промышленности и экологические стандарты. Совместные предприятия с немецкими, шведскими и финскими компаниями вводят передовую в мире экспертизу по извлечению и переработке.' },
      usPartnership: { title: 'Американские инвестиции', subtitle: 'Технологии и финансы', description: 'Американские горнодобывающие компании и инвестиционные фирмы обязуются инвестировать 100 миллиардов долларов в развитие минералов Афганистана. Американские технологии в спутниковом картировании, автономных транспортных средствах и инновациях переработки трансформируют операционную эффективность.' },
      regionalPartnership: { title: 'Региональная интеграция', subtitle: 'Сотрудничество в Центральной Азии', description: 'Сотрудничество с Казахстаном, Узбекистаном и Туркменистаном создает интегрированные цепочки поставок минералов. Общие железнодорожные сети и объекты переработки максимизируют региональную ценность и снижают затраты для всех партнеров.' },
      // Gemstone Expansion
      emeraldGrading: { title: 'Центр градации изумрудов', subtitle: 'Международная сертификация', description: 'Национальный центр градации изумрудов ежегодно сертифицирует 1 миллион карат, используя международно признанные стандарты. Сертифицированные афганские изумруды получают премию цены в 50% на глобальных рынках драгоценных камней.' },
      lapisHeritage: { title: 'Наследие лазурита', subtitle: '6,000 лет добычи', description: 'Древние лазуритовые рудники Бадахшана — источник ультрамаринового пигмента для Тутанхамона и мастеров эпохи Возрождения — продолжают производить лучшее качество в мире. Признание наследия ЮНЕСКО защищает эти исторические объекты.' },
      rubyDeposits: { title: 'Превосходство добычи рубинов', subtitle: 'Качество голубиной крови', description: 'Рубины Джегдалек соответствуют бирманскому качеству при одной десятой экологического воздействия. Современная добыча сохраняет геологическую целостность, производя 500 миллионов долларов корунда качества драгоценных камней ежегодно.' },
      tourmalineVarieties: { title: 'Рай турмалина', subtitle: 'Коллекция радуги', description: 'Нуристан производит более 50 разновидностей цвета турмалина, включая редкие образцы арбуза, индиголита и типа параиба. Ежегодное производство 10 миллионов карат делает Афганистан столицей турмалина в мире.' },
      gemCutting: { title: 'Индустрия огранки драгоценных камней', subtitle: 'Добавленная стоимость', description: '200 объектов огранки драгоценных камней нанимают 50,000 квалифицированных огранщиков, превращая необработанные камни в отполированные шедевры. Огранка внутри страны добавляет 400% стоимости по сравнению с экспортом необработанных драгоценных камней.' },
      // Strategic Minerals
      cobaltSupply: { title: 'Безопасность поставок кобальта', subtitle: 'Критический металл для батарей', description: 'Афганские запасы кобальта в 5 миллионов тонн обеспечивают необходимые материалы катода батареи для 500 миллионов электромобилей. Стандарты этичной добычи обеспечивают поставки без конфликтов для ответственных производителей.' },
      nickelDeposits: { title: 'Разработка латерита никеля', subtitle: 'Нержавеющая сталь и батареи', description: '10 миллионов тонн никеля в латеритных и сульфидных месторождениях поддерживают как производство нержавеющей стали, так и производство батарей. Современная переработка достигает 95% извлечения никеля с нулевым кислотным стоком.' },
      tungstenSupply: { title: 'Стратегические запасы вольфрама', subtitle: 'Критический металл', description: 'Высококачественные месторождения вольфрама в Панджшере и окружающих провинциях содержат 500,000 тонн этого критического металла. Экстремальная твердость вольфрама делает его необходимым для режущих инструментов, электроники и аэрокосмических применений.' },
      antimonyDeposits: { title: 'Производство сурьмы', subtitle: 'Огнезащитный металл', description: 'Месторождения сурьмы в нескольких провинциях поддерживают растущий спрос на огнезащитные материалы и технологии батарей. Современные объекты переработки производят 50,000 тонн рафинированной сурьмы ежегодно.' },
      tantalumNiobium: { title: 'Тантал и ниобий', subtitle: 'Электронные минералы', description: 'Пегматитовые месторождения дают тантал и ниобий, необходимые для электронных конденсаторов и суперсплавов. Сертифицированные цепочки поставок без конфликтов обеспечивают, чтобы афганский тантал соответствовал стандартам ответственного снабжения.' },
      // Future Vision
      vision2050: { title: 'Видение 2026-2040', subtitle: 'Долгосрочное процветание', description: 'К 2040 году Афганистан будет среди самых богатых стран мира, с доходами от минералов, обеспечивающими всеобщее здравоохранение, образование и процветание для всех 60 миллионов граждан. Минеральное богатство в 30 триллионов долларов трансформирует нацию.' },
      sovereignWealth: { title: 'Фонд суверенного благосостояния', subtitle: 'Безопасность поколений', description: 'Фонд суверенного благосостояния в 1 триллион долларов — финансируемый доходами от минералов — обеспечивает, чтобы процветание продолжалось долго после исчерпания ресурсов. Инвестиции на глобальных рынках обеспечивают постоянный доход для будущих поколений.' },
      technologyHub: { title: 'Региональный технологический центр', subtitle: 'Экономика инноваций', description: 'Богатство от добычи финансирует переход к экономике знаний, с Кабулом, становящимся технологическим и инновационным центром Центральной Азии. 100 исследовательских университетов и 1,000 технологических компаний возникают из развития, финансируемого минералами.' },
      sustainableLegacy: { title: 'Устойчивое наследие', subtitle: 'Экологическое наследие', description: 'Ответственная добыча создает наследие восстановленных ландшафтов, защищенных экосистем и инфраструктуры чистой энергии. Афганистан становится моделью устойчивого развития ресурсов во всем мире.' },
      finalVision: { title: 'Трансформированная нация', subtitle: 'Афганское возрождение', description: 'Минеральное богатство в 30 триллионов долларов — развитое устойчиво, разделенное справедливо и инвестированное мудро — трансформирует Афганистан из зоны конфликта в глобальную экономическую державу. Это обещание афганских минералов: процветание для поколений.' },
      // Panjshir Expanded
      panjshirEmeralds: { title: 'Изумруды Панджшера', subtitle: 'Долина драгоценных камней', description: 'Легендарная долина Панджшер производит одни из лучших изумрудов в мире. Глубокие зеленые кристаллы, извлеченные из горных пород, получают премиальные цены на международных рынках драгоценных камней.' },
      provinces: {
        kandahar: { title: 'Провинция Кандагар', subtitle: 'Южные ворота', description: 'Провинция Кандагар служит южными воротами Афганистана для экспорта минералов. Богатая месторождениями золота, меди и хромита, провинция предлагает стратегический доступ к региональным рынкам через установленные торговые коридоры и современное развитие инфраструктуры.' },
        herat: { title: 'Провинция Герат', subtitle: 'Западные ресурсы', description: 'Древние мраморные карьеры Герата и месторождения железной руды представляют собой многовековое наследие добычи. Близость провинции к Ирану и рынкам Центральной Азии позиционирует её как ключевой экспортный центр обработанных минеральных продуктов.' },
        nuristan: { title: 'Провинция Нуристан', subtitle: 'Литиевая граница', description: 'Горная местность Нуристана содержит одни из крупнейших в мире месторождений литийсодержащих пегматитов. Эти критические минералы необходимы для глобального перехода к чистой энергии и производства электромобилей.' },
        kunar: { title: 'Провинция Куннар', subtitle: 'Долина драгоценных камней', description: 'Драматические речные долины Куннара дают исключительные аквамарины, турмалины и другие драгоценные камни. Традиция кустарной добычи провинции сочетается с современными технологиями для извлечения образцов мирового класса.' },
        ghazni: { title: 'Провинция Газни', subtitle: 'Стратегические резервы', description: 'Провинция Газни содержит значительные месторождения лития, меди и железной руды. Древние буддийские памятники сосуществуют с современными геологическими съемками, наносящими на карту огромный минеральный потенциал региона.' },
        helmand: { title: 'Провинция Гильменд', subtitle: 'Пустынные сокровища', description: 'Под пустынным ландшафтом Гильменда лежат значительные месторождения меди и золота. Современные методы разведки выявили обширные зоны минерализации с значительным инвестиционным потенциалом.' },
        faryab: { title: 'Провинция Фарьяб', subtitle: 'Северный хромит', description: 'Месторождения хромита Фарьяба поставляют необходимые сырьевые материалы для производства нержавеющей стали. Северные степи скрывают богатые минеральные образования с установленными операциями по добыче.' },
        jowzjan: { title: 'Провинция Джозджан', subtitle: 'Соль и газ', description: 'Провинция Джозджан сочетает производство природного газа с обширными операциями по добыче соли. Промышленные объекты по переработке минералов обслуживают внутренние и региональные рынки.' },
        takhar: { title: 'Провинция Тахар', subtitle: 'Золотые реки', description: 'Речные системы Тахара давали аллювиальное золото на протяжении веков. Современная кустарная добыча сочетает традиционные методы промывки с улучшенными методами извлечения для устойчивой добычи.' },
        samangan: { title: 'Провинция Саманган', subtitle: 'Добыча талька', description: 'Месторождения талька Самангана возле древних буддийских пещер производят высококачественные промышленные минералы. Знаменитый монастырь Тахт-е-Ростам возвышается над современными горнодобывающими операциями.' },
        baghlan: { title: 'Провинция Баглан', subtitle: 'Угольный бассейн', description: 'Угольные бассейны Баглана обеспечивают необходимые энергетические ресурсы для отечественной промышленности. Подземные горнодобывающие операции извлекают высококачественный металлургический и тепловой уголь.' },
        parwan: { title: 'Провинция Парван', subtitle: 'Ворота Саланга', description: 'Провинция Парван, ворота к перевалу Саланг, содержит месторождения железной руды и меди. Стратегическое расположение соединяет северные и южные минеральные регионы.' },
        laghman: { title: 'Провинция Лагман', subtitle: 'Добыча барита', description: 'Месторождения барита Лагмана обслуживают нефтебуровую промышленность. Сельскохозяйственные долины встречаются с богатыми минералами горами в этой разнообразной восточной провинции.' },
        kapisa: { title: 'Провинция Каписа', subtitle: 'Скрытые драгоценности', description: 'Горные пещеры Каписы дают драгоценные камни, включая турмалин и кунцит. Традиционные горнодобывающие семьи сохраняют знания по добыче, насчитывающие столетия.' },
        wardak: { title: 'Провинция Вардак', subtitle: 'Железо Хаджигак', description: 'Вардак является домом для легендарного месторождения железной руды Хаджигак — одного из крупнейших неразработанных железных резервов в Азии. Массивное месторождение содержит более 2,2 миллиарда метрических тонн высокосортной руды.' },
        zabul: { title: 'Провинция Забуль', subtitle: 'Обследование редкоземельных элементов', description: 'Геологические съемки в провинции Забуль выявили многообещающие концентрации редкоземельных элементов. Эти стратегические минералы необходимы для производства передовых технологий.' },
        paktya: { title: 'Провинция Пактия', subtitle: 'Лесные минералы', description: 'Покрытые соснами горы Пактии скрывают месторождения хромита и меди. Устойчивые методы добычи защищают уникальные лесные экосистемы провинции.' },
        khost: { title: 'Провинция Хост', subtitle: 'Цементная промышленность', description: 'Известняковые карьеры Хоста питают современные объекты по производству цемента. Промышленное развитие создает рабочие места, поддерживая национальные потребности в строительстве.' },
        daykundi: { title: 'Провинция Дайкунди', subtitle: 'Альпийский мрамор', description: 'Высокогорные карьеры Дайкунди производят отличительный розовый и кремовый мрамор. Удаленные горные местоположения дают премиальный камень для международных экспортных рынков.' },
        uruzgan: { title: 'Провинция Урузган', subtitle: 'Удаленная разведка', description: 'Суровая местность Урузгана выявила месторождения меди и золота через современное разведочное бурение. Удаленные операции демонстрируют приверженность комплексной оценке ресурсов.' },
        ghor: { title: 'Провинция Гор', subtitle: 'Минарет Джама', description: 'Провинция Гор, дом для внесенного в список ЮНЕСКО минарета Джама, балансирует сохранение наследия с развитием минералов. Тщательная разведка защищает культурные объекты, оценивая потенциал ресурсов.' },
        farah: { title: 'Провинция Фарах', subtitle: 'Западное железо', description: 'Месторождения железной руды Фараха вдоль иранской границы представляют значительный потенциал развития. Западные автомобильные соединения облегчают будущую экспортную логистику.' },
        nimroz: { title: 'Провинция Нимруз', subtitle: 'Пустынное золото', description: 'Пустыня Регистан провинции Нимруз скрывает месторождения золота на стыке скальных выходов и песчаных дюн. Экстремальные условия бросают вызов, но не препятствуют современной разведке.' },
        sarEPul: { title: 'Провинция Сар-э-Поль', subtitle: 'Энергия и минералы', description: 'Провинция Сар-э-Поль сочетает производство природного газа с разнообразной добычей минералов. Промышленные объекты обрабатывают сырье для внутренних рынков.' },
        logar: { title: 'Провинция Логар', subtitle: 'Сердце меди', description: 'Дом легендарного месторождения Мес Айнак, провинция Логар представляет собой центр медной промышленности Афганистана с резервами, оцененными в десятки миллиардов долларов.' },
        badakhshan: { title: 'Провинция Бадахшан', subtitle: 'Королевство драгоценных камней', description: 'Древняя провинция драгоценных камней Бадахшана снабжала мир лазуритом в течение шести тысяч лет и продолжает производить изумруды, рубины и другие драгоценные камни.' },
        bamyan: { title: 'Провинция Бамиан', subtitle: 'Железная гора', description: 'Потрясающий ландшафт Бамиана скрывает массивные месторождения железной руды Хаджигак — одно из крупнейших месторождений железа в Азии — наряду с важными резервами меди и угля, ожидающими разработки.' },
        panjshir: { title: 'Провинция Панджшер', subtitle: 'Изумрудная долина', description: 'Драматические ущелья долины Панджшер содержат одни из лучших в мире месторождений изумрудов, производя драгоценные камни, которые конкурируют с колумбийскими и замбийскими камнями по цвету и качеству.' },
      },
    },
  },
};
 
export const languageNames: Record<Language, string> = {
  en: 'English',
  ps: 'پښتو',
  fa: 'دری',
  ar: 'العربية',
  zh: '中文',
  ru: 'Русский',
};
 
export const isRTL = (lang: Language): boolean => {
  return lang === 'ps' || lang === 'fa' || lang === 'ar';
};