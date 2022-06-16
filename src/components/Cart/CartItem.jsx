import React from "react";

const CartItem = (props) => {
  const price = `$${props.price}`;
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>
      <div className="relative mx-auto max-w-screen-2xl ">
        <div className="py-12 bg-gray-50 md:py-20">
          <div className="max-w-lg px-4 mx-auto lg:px-8">
            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-200">
                  <li className="flex items-center justify-between py-2">
                    <div className="flex items-start">
                      <img
                        className="flex-shrink-0 object-cover w-16 h-10 md:w-24 md:h-16 rounded-lg"
                        src={props.slug}
                        alt={props.title}
                      />
                    </div>
                    <h2 className="text-sm md:text-lg">{props.name}</h2>
                    <div className="flex flex-col">
                      <strong class="border border-red-500 text-white bg-red-500 uppercase px-2 py-0.5 md:px-5 md:py-1.5 rounded-full text-[10px] tracking-wide mb-2 md:text-base m-auto">
                        {price}
                      </strong>
                      <strong class="border text-red-500 border-current uppercase px-2 py-0.5 md:px-5 md:py-1.5 rounded-full text-[10px] tracking-wide m-auto">
                        X{props.amount}
                      </strong>
                    </div>
                    <div>
                      {/* <button >x</button> */}
                      <button
                        onClick={props.onAdd}
                        class="z-10 block p-2 text-green-700 transition-all bg-green-100 border-2 border-white rounded-full active:bg-green-50 hover:scale-110 focus:outline-none focus:ring mb-1"
                      >
                        <svg
                          class="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={props.onRemove}
                        class="z-30 block p-2 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
