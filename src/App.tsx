import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SitePasswordGate } from "@/components/SitePasswordGate";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmptyPage from "./pages/EmptyPage";
import SectorMining from "./pages/SectorMining";
import SectorAgriculture from "./pages/SectorAgriculture";
import SectorEnergy from "./pages/SectorEnergy";
import SectorHealthcare from "./pages/SectorHealthcare";
import SectorTechnology from "./pages/SectorTechnology";
import SectorInfrastructure from "./pages/SectorInfrastructure";
import SectorEducation from "./pages/SectorEducation";
import SectorFinance from "./pages/SectorFinance";
import SectorWater from "./pages/SectorWater";
import SectorHousing from "./pages/SectorHousing";
import PageTimeline from "./pages/PageTimeline";
import PageCalculator from "./pages/PageCalculator";
import PageDashboard from "./pages/PageDashboard";
import PageProvinces from "./pages/PageProvinces";
import PageManufacturing from "./pages/PageManufacturing";
import PageExplorer from "./pages/PageExplorer";
import PageIndustries from "./pages/PageIndustries";
import PagePublications from "./pages/PagePublications";
import PageEngagement from "./pages/PageEngagement";
import PageResourceCentre from "./pages/PageResourceCentre";
import PageConsortium from "./pages/PageConsortium";
import PageGovernance from "./pages/PageGovernance";
import PageContact from "./pages/PageContact";
import PageVision from "./pages/PageVision";
// All 34 Province Pages
import PageProvinceKabul from "./pages/PageProvinceKabul";
import PageProvinceHerat from "./pages/PageProvinceHerat";
import PageProvinceKandahar from "./pages/PageProvinceKandahar";
import PageProvinceBalkh from "./pages/PageProvinceBalkh";
import PageProvinceNangarhar from "./pages/PageProvinceNangarhar";
import PageProvinceBadakhshan from "./pages/PageProvinceBadakhshan";
import PageProvinceGhazni from "./pages/PageProvinceGhazni";
import PageProvinceLogar from "./pages/PageProvinceLogar";
import PageProvinceWardak from "./pages/PageProvinceWardak";
import PageProvinceParwan from "./pages/PageProvinceParwan";
import PageProvinceKapisa from "./pages/PageProvinceKapisa";
import PageProvinceBamyan from "./pages/PageProvinceBamyan";
import PageProvincePanjshir from "./pages/PageProvincePanjshir";
import PageProvinceDaikundi from "./pages/PageProvinceDaikundi";
import PageProvinceKunduz from "./pages/PageProvinceKunduz";
import PageProvinceBaghlan from "./pages/PageProvinceBaghlan";
import PageProvinceTakhar from "./pages/PageProvinceTakhar";
import PageProvinceFaryab from "./pages/PageProvinceFaryab";
import PageProvinceJowzjan from "./pages/PageProvinceJowzjan";
import PageProvinceSamangan from "./pages/PageProvinceSamangan";
import PageProvinceSarEPol from "./pages/PageProvinceSarEPol";
import PageProvinceGhor from "./pages/PageProvinceGhor";
import PageProvinceBadghis from "./pages/PageProvinceBadghis";
import PageProvinceFarah from "./pages/PageProvinceFarah";
import PageProvinceNimroz from "./pages/PageProvinceNimroz";
import PageProvinceHelmand from "./pages/PageProvinceHelmand";
import PageProvinceZabul from "./pages/PageProvinceZabul";
import PageProvinceUruzgan from "./pages/PageProvinceUruzgan";
import PageProvincePaktya from "./pages/PageProvincePaktya";
import PageProvincePaktika from "./pages/PageProvincePaktika";
import PageProvinceKhost from "./pages/PageProvinceKhost";
import PageProvinceKunar from "./pages/PageProvinceKunar";
import PageProvinceLaghman from "./pages/PageProvinceLaghman";
import PageProvinceNuristan from "./pages/PageProvinceNuristan";
// Comprehensive Province Pages
import ProvinceComprehensiveKabul from "./pages/ProvinceComprehensiveKabul";
import ProvinceComprehensiveHerat from "./pages/ProvinceComprehensiveHerat";
import ProvinceComprehensiveKandahar from "./pages/ProvinceComprehensiveKandahar";
import ProvinceComprehensiveBalkh from "./pages/ProvinceComprehensiveBalkh";
import ProvinceComprehensiveNangarhar from "./pages/ProvinceComprehensiveNangarhar";

// Lazily loaded so the homepage bundle is unaffected.
const NerpaCapital = lazy(() => import("./pages/NerpaCapital"));
const portal = (name: string) =>
  lazy(() => import("./minerals-portal/routes").then((m) => ({ default: (m as any)[name] })));
const PortalHome = portal("PortalHome");
const PortalMineralsIndex = portal("PortalMineralsIndex");
const PortalMineralDetail = portal("PortalMineralDetail");
const PortalProvinceDetail = portal("PortalProvinceDetail");
const PortalInvestmentDetail = portal("PortalInvestmentDetail");
const PortalTimelineDetail = portal("PortalTimelineDetail");
const PortalContactDetail = portal("PortalContactDetail");
const PortalOperationsDetail = portal("PortalOperationsDetail");

const queryClient = new QueryClient();

const App = () => (
  <SitePasswordGate>
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
            <Route path="/" element={<Index />} />
            {/* Empty navigation destinations - to be replaced with real pages */}
            <Route path="/nerpa-capital" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><NerpaCapital /></Suspense>} />
            <Route path="/minerals-portal" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalHome /></Suspense>} />
            {/* Minerals Portal sub-pages */}
            <Route path="/minerals" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalMineralsIndex /></Suspense>} />
            <Route path="/minerals/:category/:deposit" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalMineralDetail /></Suspense>} />
            <Route path="/provinces/:province" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalProvinceDetail /></Suspense>} />
            <Route path="/investment/:category" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalInvestmentDetail /></Suspense>} />
            <Route path="/timeline/:category" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalTimelineDetail /></Suspense>} />
            <Route path="/contact/:category" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalContactDetail /></Suspense>} />
            <Route path="/operations/:operation" element={<Suspense fallback={<div className="min-h-screen bg-background" />}><PortalOperationsDetail /></Suspense>} />
            <Route path="/investor-intelligence" element={<EmptyPage />} />
            <Route path="/consortium-overview" element={<EmptyPage />} />
            <Route path="/collaborate-together" element={<EmptyPage />} />
            {/* Sector Pages */}
            <Route path="/sector/mining" element={<SectorMining />} />
            <Route path="/sector/agriculture" element={<SectorAgriculture />} />
            <Route path="/sector/energy" element={<SectorEnergy />} />
            <Route path="/sector/healthcare" element={<SectorHealthcare />} />
            <Route path="/sector/technology" element={<SectorTechnology />} />
            <Route path="/sector/infrastructure" element={<SectorInfrastructure />} />
            <Route path="/sector/education" element={<SectorEducation />} />
            <Route path="/sector/finance" element={<SectorFinance />} />
            <Route path="/sector/water" element={<SectorWater />} />
            <Route path="/sector/housing" element={<SectorHousing />} />
            {/* Comprehensive Section Pages */}
            <Route path="/vision" element={<PageVision />} />
            <Route path="/timeline" element={<PageTimeline />} />
            <Route path="/calculator" element={<PageCalculator />} />
            <Route path="/dashboard" element={<PageDashboard />} />
            <Route path="/provinces" element={<PageProvinces />} />
            <Route path="/manufacturing" element={<PageManufacturing />} />
            <Route path="/explorer" element={<PageExplorer />} />
            <Route path="/industries" element={<PageIndustries />} />
            <Route path="/publications" element={<PagePublications />} />
            <Route path="/engagement" element={<PageEngagement />} />
            <Route path="/resource" element={<PageResourceCentre />} />
            <Route path="/consortium" element={<PageConsortium />} />
            <Route path="/governance" element={<PageGovernance />} />
            <Route path="/contact" element={<PageContact />} />
            {/* All 34 Province Detail Pages */}
            <Route path="/province/kabul" element={<PageProvinceKabul />} />
            <Route path="/province/herat" element={<PageProvinceHerat />} />
            <Route path="/province/kandahar" element={<PageProvinceKandahar />} />
            <Route path="/province/balkh" element={<PageProvinceBalkh />} />
            <Route path="/province/nangarhar" element={<PageProvinceNangarhar />} />
            <Route path="/province/badakhshan" element={<PageProvinceBadakhshan />} />
            <Route path="/province/ghazni" element={<PageProvinceGhazni />} />
            <Route path="/province/logar" element={<PageProvinceLogar />} />
            <Route path="/province/wardak" element={<PageProvinceWardak />} />
            <Route path="/province/parwan" element={<PageProvinceParwan />} />
            <Route path="/province/kapisa" element={<PageProvinceKapisa />} />
            <Route path="/province/bamyan" element={<PageProvinceBamyan />} />
            <Route path="/province/panjshir" element={<PageProvincePanjshir />} />
            <Route path="/province/daikundi" element={<PageProvinceDaikundi />} />
            <Route path="/province/kunduz" element={<PageProvinceKunduz />} />
            <Route path="/province/baghlan" element={<PageProvinceBaghlan />} />
            <Route path="/province/takhar" element={<PageProvinceTakhar />} />
            <Route path="/province/faryab" element={<PageProvinceFaryab />} />
            <Route path="/province/jowzjan" element={<PageProvinceJowzjan />} />
            <Route path="/province/samangan" element={<PageProvinceSamangan />} />
            <Route path="/province/sar-e-pol" element={<PageProvinceSarEPol />} />
            <Route path="/province/ghor" element={<PageProvinceGhor />} />
            <Route path="/province/badghis" element={<PageProvinceBadghis />} />
            <Route path="/province/farah" element={<PageProvinceFarah />} />
            <Route path="/province/nimroz" element={<PageProvinceNimroz />} />
            <Route path="/province/helmand" element={<PageProvinceHelmand />} />
            <Route path="/province/zabul" element={<PageProvinceZabul />} />
            <Route path="/province/uruzgan" element={<PageProvinceUruzgan />} />
            <Route path="/province/paktya" element={<PageProvincePaktya />} />
            <Route path="/province/paktika" element={<PageProvincePaktika />} />
            <Route path="/province/khost" element={<PageProvinceKhost />} />
            <Route path="/province/kunar" element={<PageProvinceKunar />} />
            <Route path="/province/laghman" element={<PageProvinceLaghman />} />
            <Route path="/province/nuristan" element={<PageProvinceNuristan />} />
            {/* Comprehensive Province Pages */}
            <Route path="/province-comprehensive/kabul" element={<ProvinceComprehensiveKabul />} />
            <Route path="/province-comprehensive/herat" element={<ProvinceComprehensiveHerat />} />
            <Route path="/province-comprehensive/kandahar" element={<ProvinceComprehensiveKandahar />} />
            <Route path="/province-comprehensive/balkh" element={<ProvinceComprehensiveBalkh />} />
            <Route path="/province-comprehensive/nangarhar" element={<ProvinceComprehensiveNangarhar />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
  </SitePasswordGate>
);

export default App;
