import { ProvinceDetailPage } from "@/components/ProvinceDetailPage";
import { provincesData } from "@/data/provinces";

const PageProvincePaktika = () => {
  const province = provincesData.find(p => p.id === "paktika");
  if (!province) return null;
  return <ProvinceDetailPage province={province} />;
};

export default PageProvincePaktika;
