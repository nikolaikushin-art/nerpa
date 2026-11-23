import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceParwan = () => {
  const province = provincesData.find(p => p.id === "parwan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceParwan;
