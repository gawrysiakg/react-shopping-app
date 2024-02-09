import { useState } from "react";
import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

const ShopingList = (props) => {
  const { cart, removeFromCart, toggleCrossOut } = props;

  const handleRemoveFromCart = (event, item) => {
    event.preventDefault();
    removeFromCart(item);
  };

  const handleCrossOut = (event, index) => {
    event.preventDefault();
    toggleCrossOut(index);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {cart.map((produkt, index) => (
          <li
            key={index}
            onClick={(event) => handleRemoveFromCart(event, produkt)}
            onContextMenu={(event) => handleCrossOut(event, index)}
            style={{
              "text-decoration": `${
                produkt.isCrossOut ? "line-through" : "auto"
              }`,
            }}
          >
            {produkt.nazwa}
          </li>
        ))}
      </header>
    </div>
  );
};

export default ShopingList;
