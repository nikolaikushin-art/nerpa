import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceGhazni = () => {
  const province = provincesData.find(p => p.id === "ghazni");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceGhazni;
