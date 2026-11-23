import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceBalkh = () => {
  const province = provincesData.find(p => p.id === "balkh");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceBalkh;
