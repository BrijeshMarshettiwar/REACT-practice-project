import React from 'react'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  // let foodItem = [];
  let foodItem = ["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"];

  // if (foodItem.length === 0){
  //   return <h3>I am still hungry</h3>
  // }

  // let emptyMessage = foodItem.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <>
      <h1 className='foodheading'>Healthy Food</h1>
      {/* {foodItem.length === 0 ? <h3>I am still hungry</h3> : null
        } */}
      {/* {emptyMessage} */}

      {/* {foodItem.length === 0 && <h3>I am still hungry</h3> } */}
        <ErrorMessage items={foodItem}></ErrorMessage>

        <FoodItems items={foodItem}></FoodItems>
    </>
  )
}

export default App
