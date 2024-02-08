import styles from "./App.module.scss";
import products from "../src/common/consts/produkty";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import { useEffect, useState } from "react";

function App() {
  const [productList, setProductList] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [cart, setCart] = useState([]);
  const [isOnlyFoodChecked, setIsOnlyFoodChecked] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [itemToFind, setItemToFind] = useState("");

  useEffect(() => {
    filterProductsList();
  }, [isOnlyFoodChecked, selectedCategory, itemToFind]);
  // useEffect jest więc używany, aby kontrolować moment, w którym ma zostać wykonany kod zależny od zmiany stanu

  const handleAddToCart = (item) => {
    setCart((cart) => [...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    const indexToRemove = cart.findIndex((inCart) => inCart === item);
    if (indexToRemove !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(indexToRemove, 1);
      setCart(updatedCart);
    }
  };

  const filterProductsList = () => {
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

  const handleFiltering = (selectedCategory, itemToFind) => {
    setSelectedCategory(selectedCategory);
    setItemToFind(itemToFind);
    // filterProductsList();
  };

  const handleShowOnlyFood = (onlyFood) => {
    setIsOnlyFoodChecked(onlyFood);
    //  filterProductsList();
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters
        fullList={productList}
        filteredList={handleFiltering}
        showOnlyFood={handleShowOnlyFood}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList list={filteredProducts} addToCart={handleAddToCart} />
        <ShopingList cart={cart} removeFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
}

export default App;
