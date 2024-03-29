import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import React from "react";

const ProductsList = (props) => {
  const { list, addToCart } = props;

  const mappedProductsList = () => {
    let products = list;

    return (
      <ul>
        {products.map((item) => (
          <li key={item.id} onClick={() => addToCart(item)}>
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
