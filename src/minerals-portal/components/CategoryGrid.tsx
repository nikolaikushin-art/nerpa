import { LucideIcon } from "lucide-react";
import CategoryCard from "./CategoryCard";

interface Category {
  title: string;
  icon: LucideIcon;
  description?: string;
}

interface CategoryGridProps {
  categories: Category[];
  columns?: 2 | 3 | 4 | 5 | 6;
}

const CategoryGrid = ({ categories, columns = 4 }: CategoryGridProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
    5: "md:grid-cols-3 lg:grid-cols-5",
    6: "md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className="w-full bg-background px-6 py-16 md:px-12 lg:px-24">
      <div className={`grid grid-cols-1 gap-4 ${gridCols[columns]}`}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;