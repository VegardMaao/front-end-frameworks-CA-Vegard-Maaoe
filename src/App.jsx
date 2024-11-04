import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import * as S from "./App.styles.js";

const products = [
  { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
  { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
  { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
  { id: 3, title: 'Water', price: 15.99, isOnSale: true },
];

function Logo() {
  return <img src="https://content.noroff.dev/images/front-end-frameworks/module-2/image-logo-example.png" alt="Noroff Logo"></img>
}

const ProductContext = createContext();

function TimerFunc() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeCount = setInterval(() => {
      console.log("TimerFunc Running");
      setCount(count + 1)
    }, 1000);

    return () => {clearInterval(timeCount)}; 
  }, )

  return <p>{`Count is ${count}`}</p>
};

const initialState = { enemyHitPoints: 100 }

function reducer(state, action) {
  switch (action.type) {
    case "attack":
      return { enemyHitPoints: state.enemyHitPoints - 10}
  
    case "crit":
      // enemy takes 40 hp of damage, critical hit
      return { enemyHitPoints: state.enemyHitPoints - 40}

    default:
      throw new Error();
  }
}

function App() {

  const [cool, setCool] = useState(false);

  function makeCool() {
    if (!cool) {
      setCool(true);
    } else (
      setCool(false)
    )
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Logo></Logo>

      <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <S.ListItem onSale={product.isOnSale} key={product.id}>{product.title} {product.isOnSale ? "On sale" : ""}</S.ListItem>
        ))}  
      </ul>
      </> 

      <>
      <button onClick={makeCool}>Click me to be cool</button>
      <div>{cool? <TimerFunc></TimerFunc> : null}</div>
      </>

      <>
      <label htmlFor="#attack">Enemy has {state.enemyHitPoints} HP!</label>
      <button id="attack" onClick={() => dispatch({ type: 'attack' })}>Hit the enemy!</button>
      </>

      <>
      <h2>Below I have recreated the  1st list by using createContext and useContext</h2>
      <ProductContext.Provider value={products}>
        <div>
          <ul>
          <UseContextComponent/>
          </ul>
        </div>
      </ProductContext.Provider>
      </>


    </div>
  );
}

function UseContextComponent() {
  const value = useContext(ProductContext);
  return value.map((val) => (
    <S.ListItem onSale={val.isOnSale} key={val.id}>{val.title} {val.isOnSale ? "On sale" : ""}</S.ListItem>
  ))
}  

export default App;
