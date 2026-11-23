import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceLaghman = () => {
  const province = provincesData.find(p => p.id === "laghman");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceLaghman;
