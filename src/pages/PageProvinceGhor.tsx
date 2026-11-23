import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceGhor = () => {
  const province = provincesData.find(p => p.id === "ghor");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceGhor;
