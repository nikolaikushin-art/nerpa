import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceKhost = () => {
  const province = provincesData.find(p => p.id === "khost");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceKhost;
