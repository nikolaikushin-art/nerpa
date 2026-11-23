import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvincePaktya = () => {
  const province = provincesData.find(p => p.id === "paktya");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvincePaktya;
