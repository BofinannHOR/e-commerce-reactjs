import React, { useRef, useState } from "react";

const Checkout = (props) => {
  const [formValid, setFormValid] = useState({
    name: true,
    lastName: true,
    address: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const LastNameInputRef = useRef();
  const AddressInputRef = useRef();
  const postalInputRef = useRef();

  // validation
  const isEmpty = (value) => value.trim() === "";
  const isValidForPostal = (value) => value.trim().length !== 5;

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredlastName = LastNameInputRef.current.value;
    const enteredAddress = AddressInputRef.current.value;
    const enteredpostal = postalInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const LastNameIsValid = !isEmpty(enteredlastName);
    const addressIsValid = !isEmpty(enteredAddress);
    const postalIsValid = isValidForPostal(enteredpostal);

    setFormValid({
      name: nameIsValid,
      lastName: LastNameIsValid,
      address: addressIsValid,
      postal: postalIsValid,
    });
    const formIsValid =
      nameIsValid && LastNameIsValid && addressIsValid && postalIsValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      lastName: enteredlastName,
      address: enteredAddress,
      postal: enteredpostal,
    });
  };

  const inputError = (
    <div
      class="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
      role="alert"
    >
      <strong class="text-sm font-medium"> Input is empty! </strong>
    </div>
  );
  const postalError = (
    <div
      class="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
      role="alert"
    >
      <strong class="text-sm font-medium"> Input must be more than 5! </strong>
    </div>
  );
  return (
    <section>
      <div className="m-auto">Checkout</div>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1">
          <div className="py-12 bg-white md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <form
                onSubmit={confirmHandler}
                className="grid grid-cols-6 gap-4"
              >
                <div className="col-span-3">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="  rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5 mb-1"
                    type="text"
                    id="frst_name"
                    ref={nameInputRef}
                  />
                  {!formValid.name && inputError}
                </div>
                <div class="col-span-3">
                  <label
                    class="block mb-1 text-sm text-gray-600"
                    for="last_name"
                  >
                    Last Name
                  </label>
                  <input
                    class="mb-1 rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    ref={LastNameInputRef}
                    type="text"
                    id="last_name"
                  />
                  {!formValid.lastName && inputError}
                </div>
                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    for="text"
                  >
                    Address
                  </label>
                  <input
                    className="mb-1 rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    ref={AddressInputRef}
                    type="text"
                    id="text"
                  />
                  {!formValid.address && inputError}
                </div>
                <fieldset className="col-span-6">
                  <legend className="block mb-1 text-sm text-gray-600">
                    Billing Address
                  </legend>
                  <div className="-space-y-px bg-white rounded-lg shadow-sm">
                    <div>
                      <label className="sr-only" for="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        className="border-gray-200 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                        ref={postalInputRef}
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autocomplete="postal-code"
                        placeholder="ZIP/Post Code"
                      />
                      {!formValid.postal && postalError}
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    className="rounded-lg bg-black text-sm hover:bg-gray-600 p-2.5 text-white w-full block"
                    type="submit"
                  >
                    Confirm and pay now!
                  </button>
                  <button
                    className="rounded-lg bg-red-600 hover:bg-red-800 text-sm p-2.5 text-white w-full block mt-2"
                    type="button"
                    onClick={props.onCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
