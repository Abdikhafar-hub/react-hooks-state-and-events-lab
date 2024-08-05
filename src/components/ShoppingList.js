import React, { useState } from "react";
import Item from "./Item"; // Import your Item component

function ShoppingList({ items }) {
  // Step 1: Create state variable for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Step 3: Filter items based on the selected category
  const filteredItems = items.filter(item => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
        <option value="Category3">Category3</option>
        {/* Add more categories as needed */}
      </select>

      <ul>
        {filteredItems.map((item, index) => (
          <Item key={index} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
