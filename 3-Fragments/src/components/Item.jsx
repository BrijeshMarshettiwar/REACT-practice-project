import styles from "./Item.module.css";

const Item = ({ foodItem }) =>{

  const handleBuyButtonClick = (event) =>{
    console.log(event);
    console.log(`${foodItem} being bought`);
  }

  return (
    <li className={`${styles["Kg-item"]} list-group-item`}>
      <span className={styles["Kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`}
      onClick={(event) => handleBuyButtonClick(event)}
      >Buy</button>
    </li>
  )
}
export default Item;