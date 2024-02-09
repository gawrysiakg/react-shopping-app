import { useEffect, useState } from "react";
import styles from "../../../common/styles/Headers.module.scss";

const ProductsFilters = (props) => {
  const { fullList, filteredList } = props;
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [itemToFind, setItemToFind] = useState("");
  const [onlyFood, setOnlyFood] = useState(false);

  let categoryList = fullList
    .map((list) => list.kategoria)
    .reduce((acc, cat) => {
      if (!acc.includes(cat)) {
        acc.push(cat);
      }
      return acc;
    }, []);

  useEffect(() => {
    filteredList(selectedCategory, itemToFind, onlyFood);
  }, [selectedCategory, itemToFind, onlyFood]);

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
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
      <label>Only food products</label>
      <input
        checked={onlyFood}
        type="checkbox"
        name="Only food products"
        onChange={(e) => handleOnlyFoodFilter(e)}
      />
    </div>
  );
};

export default ProductsFilters;
