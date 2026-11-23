import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceBadakhshan = () => {
  const province = provincesData.find(p => p.id === "badakhshan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceBadakhshan;
