import { useState } from "react";
import styles from "../../../common/styles/Headers.module.scss";

const AddProducts = (props) => {
  const { addNewProduct } = props;
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [isFood, setIsFood] = useState(false);

  const handleAddProduct = () => {
    addNewProduct({
      nazwa: productName,
      kategoria: productCategory,
      produktSpozywczy: isFood,
    });
    setProductName("");
    setProductCategory("");
    setIsFood(false);
  };

  return (
    <div className={styles.Wrapper}>
      Add products
      <input
        type="text"
        placeholder="Nazwa produktu"
        value={productName}
        onChange={(e) => setProductName(e.target.value.trim())}
      />
      <input
        type="text"
        placeholder="Kategoria"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value.trim())}
      />
      <label>Food product</label>
      <input
        checked={isFood}
        type="checkbox"
        name="Only food products"
        onChange={(e) => setIsFood(e.target.checked)}
      />
      <button
        disabled={!productName || !productCategory}
        type="button"
        onClick={handleAddProduct}
      >
        Add
      </button>
    </div>
  );
};

export default AddProducts;
