import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceHerat = () => {
  const province = provincesData.find(p => p.id === "herat");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceHerat;
