import React from "react";

const FAQNavigation = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <nav className="sticky top-0 bg-yellow-50 p-4 ">
      <ul className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`px-4 py-2 rounded-full transition duration-300 font-bold ${
                activeCategory === category
                  ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                  : "bg-yellow-100 text-gray-700 hover:bg-yellow-200"
              }`}
              onClick={() => setActiveCategory(category)}
              aria-label={`Navigate to category: ${category}`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FAQNavigation;