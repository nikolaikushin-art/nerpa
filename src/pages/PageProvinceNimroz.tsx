import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceNimroz = () => {
  const province = provincesData.find(p => p.id === "nimroz");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceNimroz;
