import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceJowzjan = () => {
  const province = provincesData.find(p => p.id === "jowzjan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceJowzjan;
