import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceBadghis = () => {
  const province = provincesData.find(p => p.id === "badghis");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceBadghis;
