import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceFaryab = () => {
  const province = provincesData.find(p => p.id === "faryab");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceFaryab;
