import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvinceUruzgan = () => {
  const province = provincesData.find(p => p.id === "uruzgan");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvinceUruzgan;
