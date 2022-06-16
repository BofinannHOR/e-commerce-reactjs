import React from "react";
import Modal from "../UI/Modal";
import CartContext from "../context/cart-context";

const Order = () => {
  return (
    <Modal>
      <section class="pb-10 rounded-3xl">
        <div class="p-8 text-center sm:p-12">
          <p class="text-sm font-semibold tracking-widest text-pink-500 uppercase">
            Your order is on the way
          </p>

          <h5 class="mt-6 text-3xl font-bold">
            Thanks for your purchase, we're getting it ready!
          </h5>

          <a
            class="inline-block w-full py-4 mt-8 text-sm font-bold text-white bg-pink-600 rounded-full shadow-xl"
            href="App"
          >
            Track Order
          </a>
        </div>
      </section>
    </Modal>
  );
};

export default Order;