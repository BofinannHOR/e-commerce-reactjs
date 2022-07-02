import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../context/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  let emptyCart = "Your Cart is Empty!";

  const [openCheckout, setOpenCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount}`;
  const AvaiableItem = cartCtx.items.length > 0;

  const API_URL =
    "https://matech-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json";

  const CartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const CartAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const openCheckoutHanlder = () => {
    setOpenCheckout(true);
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
  const submitOrderHandler = async (inputData) => {
    setIsSubmiting(true);
    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        input: inputData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmiting(false);
    setAlreadySubmitted(true);
    cartCtx.resetCart();
  };
  console.log(cartCtx.items);
  const modal = (
    <div className="flex items-center justify-end mt-8 text-sm mb-4">
      {AvaiableItem && (
        <button
          onClick={openCheckoutHanlder}
          className="px-4 py-2 font-medium text-green-600 rounded bg-green-50"
        >
          Order
        </button>
      )}

      <button
        onClick={props.onCloseCart}
        className="px-4 py-2 ml-2 font-medium text-red-600 rounded bg-red-50"
      >
        Close
      </button>
    </div>
  );
  // console.log(amountItem);'
  const modalContext = (
    <>
      {" "}
      {amountItem < 1 ? (
        <h2 className="text-lg font-semibold">{emptyCart}</h2>
      ) : (
        <div className="modal_class p-4">
          <h2 className="text-2xl font-semibold">{totalAmount}</h2>
          <span className="mb-4">For the purchase of</span>
          <div className="p-4 ">{productItem}</div>
          {openCheckout && (
            <Checkout
              onConfirm={submitOrderHandler}
              onCancel={props.onCloseCart}
            />
          )}
        </div>
      )}
      {!openCheckout && modal}
    </>
  );
  const isSumbittingContent = (
    <div
      className="p-4 border rounded text-sky-700 bg-sky-50 border-sky-900/10"
      role="alert"
    >
      <strong class="text-sm font-medium">
        {" "}
        Your order is in progress...{" "}
      </strong>

      <p className="mt-1 text-xs">it will take a few minutes</p>
    </div>
  );
  const alreadySubmittedContent = (
    <div
      className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
      role="alert"
    >
      <strong class="text-sm font-medium"> Your order is on the way! </strong>

      <p className="mt-1 text-xs">Successful order.</p>
      <button
        className="rounded-lg bg-red-600 hover:bg-red-800 text-sm p-2.5 text-white w-36 block mt-2 mx-auto"
        type="button"
        onClick={props.onCloseCart}
      >
        close
      </button>
    </div>
  );
  return (
    <Modal>
      {!isSubmiting && !alreadySubmitted && modalContext}
      {isSubmiting && isSumbittingContent}
      {!isSubmiting && alreadySubmitted && alreadySubmittedContent}
    </Modal>
  );
};

export default Cart;
