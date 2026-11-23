import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceDaikundi = () => {
  const province = provincesData.find(p => p.id === "daikundi");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceDaikundi;
