import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceKunar = () => {
  const province = provincesData.find(p => p.id === "kunar");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceKunar;
