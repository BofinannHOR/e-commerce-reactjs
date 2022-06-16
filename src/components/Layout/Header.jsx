import React, { Fragment } from "react";
import headerImage from "../../assets/header-img.jpg";
import HeaderAnnounment from "./HeaderAnnounment";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      {/* sticky top-0 z-50 */}
      <header className=" bg-white drop-shadow-xl">
        <nav className=" flex items-center justify-between max-w-3xl p-4 mx-auto">
          <a
            className="inline-flex items-center justify-center w-40 h-10  rounded-lg font-extrabold text-blue-500 sm:text-3xl text-xl"
            href="/"
          >
            Ma Tech
          </a>

          <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
            <li>
              <button className="px-3 py-2 rounded-lg" href="#">
                Home
              </button>
            </li>

            <li>
              <button
                className="inline-flex items-center px-3 py-2 rounded-lg"
                href="#"
                target="_blank"
              >
                <HeaderCartButton onClick={props.onOpenCart} />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <HeaderAnnounment />
      {/* header content */}
      <aside className="relative overflow-hidden text-gray-300 bg-gray-900 lg:flex">
        <div className="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
          <div className="max-w-xl mx-auto lg:ml-0">
            <p className="text-sm font-medium">Lorem ipsum dolor sit amet.</p>

            <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>

            <p className="hidden lg:mt-4 lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <button
              href=""
              className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Get started today
            </button>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <img
            src={headerImage}
            alt="header-img"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </aside>
    </Fragment>
  );
};

export default Header;
