import { Fragment, useState } from "react";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const[cartIsShown,setCartIsShown]=useState(false);
  function showCartHandler(){
    setCartIsShown(true);
  }
  function hideCartHandler(){
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
