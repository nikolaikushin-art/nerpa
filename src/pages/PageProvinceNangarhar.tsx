import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceNangarhar = () => {
  const province = provincesData.find(p => p.id === "nangarhar");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceNangarhar;
