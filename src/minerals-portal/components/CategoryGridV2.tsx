import { LucideIcon } from "lucide-react";
import CategoryCardV2 from "./CategoryCardV2";

interface Category {
  title: string;
  icon: LucideIcon;
}

interface CategoryGridV2Props {
  categories: Category[];
  columns?: 3 | 4 | 5 | 6;
  activeIndex?: number;
}

const CategoryGridV2 = ({ categories, columns = 5, activeIndex = 0 }: CategoryGridV2Props) => {
  const gridCols = {
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className="w-full bg-background px-8 py-16 md:px-16 lg:px-24">
      <div className={`grid gap-px ${gridCols[columns]}`}>
        {categories.map((category, index) => (
          <CategoryCardV2
            key={index}
            title={category.title}
            icon={category.icon}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGridV2;