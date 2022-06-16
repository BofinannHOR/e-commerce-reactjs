import React, { useReducer } from "react";
import CartContext from "./cart-context";

//init state
const initialCartState = {
  items: [],
  totalAmount: 0,
};
// useReducer for manage complex state
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_CART") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // const updateCartItems = state.items.concat(action.item);
    // find exist item by id
    const exCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exCartItem = state.items[exCartItemIndex];
    let updateItems;

    if (exCartItem) {
      const updateItem = {
        ...exCartItem,
        amount: exCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[exCartItemIndex] = updateItem;
    } else {
      // updateItem = { ...action.item };
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM_CART",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM_CART",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
