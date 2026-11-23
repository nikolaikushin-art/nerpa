import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceKabul = () => {
  const province = provincesData.find(p => p.id === "kabul");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceKabul;
