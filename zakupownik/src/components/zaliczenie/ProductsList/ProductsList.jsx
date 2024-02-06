import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import list from "../../../common/consts/produkty";
import React, { useState } from "react";
function ProductsList() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (item) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      item,
    ]);
  };

  const mappedProductsList = () => {
    let products = list;

    return (
      <ul>
        {products.map((item) => (
          <li key={item.nazwa} onClick={() => handleSelectProduct(item)}>
            {item.nazwa}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Products list</p>
        {mappedProductsList()}
        <p>
          Selected Products:{" "}
          {selectedProducts.map((product) => product.nazwa).join(", ")}
        </p>
      </header>
    </div>
  );
}

export default ProductsList;
