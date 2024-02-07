import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

const ShopingList = (props) => {
  const { cart, removeFromCart } = props;

  // const displayProductsInCart = () => {
  //   let products = cart.map((item) => {
  //     <li key={item.nazwa}>{item.nazwa}</li>;
  //   });

  //   return <ul>{products}</ul>;
  // };

  const handleRemoveFromCart = (event, item) => {
    event.preventDefault();
    removeFromCart(item);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Shoping List</p>
        {/* {displayProductsInCart()} */}
        {cart.map((item, index) => (
          <li
            key={index}
            onContextMenu={(event) => handleRemoveFromCart(event, item)}
          >
            {item.nazwa}
          </li>
        ))}
      </header>
    </div>
  );
};

export default ShopingList;
