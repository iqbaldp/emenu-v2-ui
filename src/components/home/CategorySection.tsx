"use client";

interface Category {
  id: string;
  name: string;
}

interface CategorySectionProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategorySection({
  categories,
  activeCategory,
  onCategoryChange,
}: CategorySectionProps) {
  return (
    <div className="categories">
      <div className="categories-title">Kategori</div>
      <div className="category-pills">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-pill ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}
