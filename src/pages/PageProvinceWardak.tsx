import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceWardak = () => {
  const province = provincesData.find(p => p.id === "wardak");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceWardak;
