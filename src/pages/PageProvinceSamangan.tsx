import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceSamangan = () => {
  const province = provincesData.find(p => p.id === "samangan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceSamangan;
