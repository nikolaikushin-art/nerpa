import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvincePanjshir = () => {
  const province = provincesData.find(p => p.id === "panjshir");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvincePanjshir;
