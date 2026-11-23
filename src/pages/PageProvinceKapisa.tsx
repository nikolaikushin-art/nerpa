import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceKapisa = () => {
  const province = provincesData.find(p => p.id === "kapisa");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceKapisa;
