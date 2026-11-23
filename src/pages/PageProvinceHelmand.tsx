import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceHelmand = () => {
  const province = provincesData.find(p => p.id === "helmand");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceHelmand;
