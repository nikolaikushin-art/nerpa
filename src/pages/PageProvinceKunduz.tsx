import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceKunduz = () => {
  const province = provincesData.find(p => p.id === "kunduz");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceKunduz;
