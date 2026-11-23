import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceSarEPol = () => {
  const province = provincesData.find(p => p.id === "sar-e-pol");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceSarEPol;
