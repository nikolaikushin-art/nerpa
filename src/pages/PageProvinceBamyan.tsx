import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceBamyan = () => {
  const province = provincesData.find(p => p.id === "bamyan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceBamyan;
