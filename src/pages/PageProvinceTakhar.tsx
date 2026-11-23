import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceTakhar = () => {
  const province = provincesData.find(p => p.id === "takhar");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceTakhar;
