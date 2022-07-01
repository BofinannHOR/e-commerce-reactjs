import { useState } from "react";
import CartProvider from "./components/context/CartProvider";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Footer from "./components/Layout/Footer";
import Checkout from "./components/Cart/Checkout";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const opencartHandler = () => {
    setOpenCart(true);
    console.log("open cart");
  };
  const hideCartHandler = () => {
    setOpenCart(false);
    console.log("close cart");
  };

  return (
    <CartProvider className="App">
      {openCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onOpenCart={opencartHandler} />
      <main>
        {/* <Checkout /> */}
        <Products />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
