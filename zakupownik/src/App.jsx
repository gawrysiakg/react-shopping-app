import styles from "./App.module.scss";
import products from "../src/common/consts/produkty";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState(products);
  const [productsToDisplay, setProductsToDisplay] = useState(productList);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    console.log(item);
    setCart((cart) => [...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    const indexToRemove = cart.findIndex((inCart) => inCart === item);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexToRemove, 1); // Usuń jedno wystąpienie produktu
      setCart(updatedCart);
    }
  };

  const handleFiltering = (selectedCategory, itemToFind) => {
    console.log("filtering...");
    if (selectedCategory === "All categories") {
      if (itemToFind === "") {
        setProductsToDisplay([...productList]);
      } else {
        setProductsToDisplay(
          productList.filter((singleProduct) =>
            singleProduct.nazwa.includes(itemToFind)
          )
        );
      }
    } else {
      if (itemToFind === "") {
        setProductsToDisplay(
          productList.filter(
            (singleProduct) => singleProduct.kategoria === selectedCategory
          )
        );
      } else {
        let filteredList = [...productList];
        filteredList = filteredList
          .filter(
            (singleProduct) => singleProduct.kategoria === selectedCategory
          )
          .filter((singleProduct) => singleProduct.nazwa.includes(itemToFind));
        setProductsToDisplay(filteredList);
      }
    }
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters fullList={productList} filteredList={handleFiltering} />
      <div className={styles.columnsWrapper}>
        <ProductsList list={productsToDisplay} addToCart={handleAddToCart} />
        <ShopingList cart={cart} removeFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;
