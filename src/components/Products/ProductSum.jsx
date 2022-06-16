import React from "react";

const ProductSum = () => {
  return (
    <section>
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-28 mx-auto lg:h-2/4 lg:items-center lg:flex">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Explore our products
              <strong className="font-extrabold text-red-700 sm:block">
                Make it yours.
              </strong>
            </h1>

            <p className="mt-4 sm:leading-relaxed sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring"
                href="#product_list"
              >
                Get Started
              </a>

              <a
                className="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductSum;
