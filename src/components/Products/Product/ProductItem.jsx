import React, { useContext } from "react";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../context/cart-context";

const ProductItem = (props) => {
  //The toFixed() method formats a number using fixed-point notation.
  //   const price = `$${props.product_price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title: props.product_title,
      amount: amount,
      price: props.product_price,
      slug: props.product_slug,
    });
    // console.log("productItem", amount);
  };

  return (
    <div className="relative block border border-gray-100">
      <button
        type="button"
        name="wishlist"
        className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      </button>

      <img
        loading="lazy"
        alt="Build Your Own Drone"
        className="object-contain w-full h-56"
        src={props.product_slug}
      />

      <div className="p-6">
        <p className="text-sm font-medium text-gray-600">
          ${props.product_price}
        </p>

        <h5 className="mt-1 text-lg font-bold">{props.product_title}</h5>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default ProductItem;
