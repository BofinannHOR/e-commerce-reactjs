import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../context/cart-context";
import CartItem from "./CartItem";
import Order from "../Order/Order";

const Cart = (props) => {
  let emptyCart = "Your Cart is Empty!";
  const [openOrder, setOpenOrder] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;
  const AvaiableItem = cartCtx.items.length > 0;
  const CartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const CartAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setOpenOrder(true);
  };
  const productItem = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          amount={item.amount}
          price={item.price}
          slug={item.slug}
          onRemove={CartRemoveItemHandler.bind(null, item.id)}
          onAdd={CartAddItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const amountItem = cartCtx.items.map((item) => item.amount);
  console.log(amountItem);
  return (
    <Modal>
      {openOrder && <Order />}
      {amountItem < 1 ? (
        <h2 className="text-lg font-semibold">{emptyCart}</h2>
      ) : (
        <div className="modal_class p-4">
          <h2 className="text-2xl font-semibold">{totalAmount}</h2>
          <span className="mb-4">For the purchase of</span>
          <div className="p-4 ">{productItem}</div>
        </div>
      )}
      <div className="flex items-center justify-end mt-8 text-sm mb-4">
        {AvaiableItem && (
          <button
            onClick={orderHandler}
            className="px-4 py-2 font-medium text-green-600 rounded bg-green-50"
          >
            Order
          </button>
        )}

        <button
          onClick={props.onCloseCart}
          type="button"
          className="px-4 py-2 ml-2 font-medium text-red-600 rounded bg-red-50"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
