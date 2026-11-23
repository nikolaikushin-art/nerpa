import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceLogar = () => {
  const province = provincesData.find(p => p.id === "logar");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceLogar;
