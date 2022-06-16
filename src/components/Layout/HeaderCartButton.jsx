import React, { useContext, useEffect } from "react";
import ShopCartIcon from "../Cart/ShopCartIcon";
import CartContext from "../context/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const totalCartItem = cartCtx.items.reduce((currentItem, item) => {
    // console.log(item);
    return currentItem + item.amount;
  }, 0);
  // console.log(totalCartItem);
  const btnClasses = `${classes.button} ${classes.bump}`;
  return (
    <strong className="inline-flex items-center border border-red-500 text-red-500 border-current uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide">
      Cart
      <span className="ml-3">{totalCartItem}</span>
      <button className={btnClasses} type="button" onClick={props.onClick}>
        <ShopCartIcon />
      </button>
    </strong>
  );
};

export default HeaderCartButton;
