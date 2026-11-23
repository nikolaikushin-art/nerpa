import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceNuristan = () => {
  const province = provincesData.find(p => p.id === "nuristan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceNuristan;
