import styles from "./FoodInput.module.css"

const FoodInput = ({handleOnChange}) =>{


  return <input type="text" placeholder="Enter Foood Item her" className={styles.foodInput}
  onChange={handleOnChange}
  />
}
export default FoodInput;