import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import React, { useState } from "react";

const ProductsList = (props) => {
  const { list, addToCart } = props;

  // const [selectedProducts, setSelectedProducts] = useState([]);

  // const handleSelectProduct = (item) => {
  //   setSelectedProducts((prevSelectedProducts) => [
  //     ...prevSelectedProducts,
  //     item,
  //   ]);
  // };

  const mappedProductsList = () => {
    let products = list;

    return (
      <ul>
        {products.map((item) => (
          <li key={item.nazwa} onClick={() => addToCart(item)}>
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
      </header>
    </div>
  );
};

export default ProductsList;
