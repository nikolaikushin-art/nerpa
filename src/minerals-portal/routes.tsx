import { Suspense } from "react";
import PortalShell from "@/minerals-portal/PortalShell";
import Index from "@/minerals-portal/pages/Index";
import MineralsIndex from "@/minerals-portal/pages/minerals/MineralsIndex";
import MineralDetailPage from "@/minerals-portal/pages/minerals/MineralDetailPage";
import ProvinceDetailPage from "@/minerals-portal/pages/provinces/ProvinceDetailPage";
import InvestmentDetailPage from "@/minerals-portal/pages/investment/InvestmentDetailPage";
import TimelineDetailPage from "@/minerals-portal/pages/timeline/TimelineDetailPage";
import ContactDetailPage from "@/minerals-portal/pages/contact/ContactDetailPage";
import OperationsDetailPage from "@/minerals-portal/pages/operations/OperationsDetailPage";

const wrap = (el: JSX.Element) => (
  <PortalShell>
    <Suspense fallback={null}>{el}</Suspense>
  </PortalShell>
);

export const PortalHome = () => wrap(<Index />);
export const PortalMineralsIndex = () => wrap(<MineralsIndex />);
export const PortalMineralDetail = () => wrap(<MineralDetailPage />);
export const PortalProvinceDetail = () => wrap(<ProvinceDetailPage />);
export const PortalInvestmentDetail = () => wrap(<InvestmentDetailPage />);
export const PortalTimelineDetail = () => wrap(<TimelineDetailPage />);
export const PortalContactDetail = () => wrap(<ContactDetailPage />);
export const PortalOperationsDetail = () => wrap(<OperationsDetailPage />);
