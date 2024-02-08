import { useState } from "react";
import styles from "../../../common/styles/Headers.module.scss";

const ProductsFilters = (props) => {
  const { fullList, filteredList } = props;
  let categoryList = fullList
    .map((list) => list.kategoria)
    .reduce((acc, cat) => {
      if (!acc.includes(cat)) {
        acc.push(cat);
      }
      return acc;
    }, []);
  // const { categories, setCategories } = useState(
  //   Object.values(fullList.map((list) => list.kategoria))
  // );
  const [categories, setCategories] = useState(categoryList);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [itemToFind, setItemToFind] = useState("");

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFIlterButtn = () => {
    console.log(selectedCategory + " : " + itemToFind);
    filteredList(selectedCategory, itemToFind);
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
    </div>
  );
};

export default ProductsFilters;
