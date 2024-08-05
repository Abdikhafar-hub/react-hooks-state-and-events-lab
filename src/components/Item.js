import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Set up the state variable for whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Function to toggle the item's cart status
  const toggleInCart = () => {
    setIsInCart(prevState => !prevState);
  };

  return (
    // Step 3: Update the class name based on the state variable
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleInCart}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
