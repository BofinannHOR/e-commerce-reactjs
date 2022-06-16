import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    //convert enteredAmountToString from number to string
    const enteredAmountToString = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountToString < 1 ||
      enteredAmountToString > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountToString);
    // console.log(enteredAmountToString);
    // console.log(amountIsValid);
  };
  // console.log(enteredAmountToString);

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        // type="button"
        className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-400 rounded-sm hover:bg-yellow-500"
      >
        Add to Cart
        {/* <svg
          className="w-5 h-5 ml-1.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg> */}
      </button>
      {!amountIsValid && <p>Please enter an amount 1-5</p>}
    </form>
  );
};

export default ProductItemForm;
