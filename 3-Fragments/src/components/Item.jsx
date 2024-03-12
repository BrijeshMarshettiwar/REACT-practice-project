import styles from "./Item.module.css";

const Item = ({ foodItem }) =>{

  return (
    <li className={`${styles["Kg-item"]} list-group-item`}>
      <span className={styles["Kg-span"]}>{foodItem}</span></li>
  )
}
export default Item;