import { useState } from "react";
import styles from "../../../common/styles/Headers.module.scss";

const ProductsFilters = (props) => {
  const { fullList, filteredList, showOnlyFood } = props;
  let categoryList = fullList
    .map((list) => list.kategoria)
    .reduce((acc, cat) => {
      if (!acc.includes(cat)) {
        acc.push(cat);
      }
      return acc;
    }, []);

  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [itemToFind, setItemToFind] = useState("");
  const [onlyFood, setOnlyFood] = useState(false);

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFIlterButtn = () => {
    filteredList(selectedCategory, itemToFind);
  };

  const handleOnlyFoodFilter = (event) => {
    setOnlyFood(event.target.checked);
    showOnlyFood(event.target.checked);
  };

  return (
    <div className={styles.Wrapper}>
      Find product
      <input
        type="text"
        placeholder="Wpisz nazwę produktu"
        value={itemToFind}
        onChange={(e) => setItemToFind(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => handleSelectCategory(e)}
      >
        <option key={"All categories"} value={"All categories"}>
          {"All categories"}
        </option>
        {categoryList.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleFIlterButtn}>
        Find
      </button>
      Only food products
      <input
        checked={onlyFood}
        type="checkbox"
        // name={simpleFoodFromList.name}
        name="Only food products"
        onChange={(e) => handleOnlyFoodFilter(e)}
      />
    </div>
  );
};

export default ProductsFilters;
