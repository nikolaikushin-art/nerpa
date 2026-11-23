import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceBaghlan = () => {
  const province = provincesData.find(p => p.id === "baghlan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceBaghlan;
