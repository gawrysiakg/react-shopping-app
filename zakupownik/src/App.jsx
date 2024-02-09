import styles from "./App.module.scss";
import products from "../src/common/consts/produkty";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((cart) => [...cart, { ...item, isCrossOut: false }]);
  };

  const handleRemoveFromCart = (item) => {
    const indexToRemove = cart.findIndex((inCart) => inCart === item);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart);
    }
  };

  const handleFiltering = (selectedCategory, itemToFind, isOnlyFoodChecked) => {
    let filteredList;
    let filteredProducts = [];

    if (isOnlyFoodChecked) {
      filteredProducts = productList.filter(
        (singleProduct) => singleProduct.produktSpozywczy === true
      );
    } else {
      filteredProducts = [...productList];
    }

    if (selectedCategory === "All categories") {
      filteredList = filteredProducts.filter((singleProduct) =>
        singleProduct.nazwa.toLowerCase().includes(itemToFind.toLowerCase())
      );
    } else {
      filteredList = filteredProducts
        .filter((singleProduct) => singleProduct.kategoria === selectedCategory)
        .filter((singleProduct) =>
          singleProduct.nazwa.toLowerCase().includes(itemToFind.toLowerCase())
        );
    }

    setFilteredProducts(filteredList);
  };

  const addNewProduct = (product) => {
    setProductList((prevProductList) => [...prevProductList, product]);
    setFilteredProducts((prevProductList) => [...prevProductList, product]);
    //  bo useState nie gwarantuje natychmiastowego zaktualizowania stanu
    // oraz chcemy bazować na poprzednim stanie i go zmienić
  };

  const handleToggleCrossOutProduct = (index) => {
    setCart((prevCart) =>
      prevCart.map((item, currentIndex) => {
        if (currentIndex === index) {
          return { ...item, isCrossOut: !item.isCrossOut };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts addNewProduct={addNewProduct} />
      <ProductsFilters fullList={productList} filteredList={handleFiltering} />
      <div className={styles.columnsWrapper}>
        <ProductsList list={filteredProducts} addToCart={handleAddToCart} />
        <ShopingList
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          toggleCrossOut={handleToggleCrossOutProduct}
        />
      </div>
    </div>
  );
}

export default App;
