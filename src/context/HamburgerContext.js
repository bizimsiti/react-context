import React, { createContext, useState } from "react";

export const HamburgerContext = createContext();

const Hamburger = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const getCalculatedTotalPrice = () => {
    return selectedIngredients
      .reduce((acc, item) => {
        acc += item.count * item.price;
        return acc;
      }, 4)
      .toFixed(2);
  };
  const values = {
    selectedIngredients,
    setSelectedIngredients,
    getCalculatedTotalPrice
  };
  return (
    <HamburgerContext.Provider value={values}>
      {children}
    </HamburgerContext.Provider>
  );
};

export default Hamburger;
