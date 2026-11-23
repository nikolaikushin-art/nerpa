import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceKandahar = () => {
  const province = provincesData.find(p => p.id === "kandahar");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceKandahar;
