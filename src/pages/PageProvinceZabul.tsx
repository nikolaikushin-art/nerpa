import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceZabul = () => {
  const province = provincesData.find(p => p.id === "zabul");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceZabul;
