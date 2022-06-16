import React from "react";

const HeaderAnnounment = () => {
  return (
    <div className="px-4 py-3 text-white bg-indigo-600 sm:justify-between sm:items-center sm:flex sm:px-6 lg:px-8">
      <p className="font-medium text-center sm:text-left">
        It's a beta version, so there will be content some bugs.
      </p>

      <a
        className="block px-5 py-3 mt-4 text-sm font-medium text-center text-indigo-600 transition bg-white rounded-lg sm:mt-0 hover:bg-white/90 active:text-indigo-500 focus:outline-none focus:ring"
        href="https://github.com/BofinannHOR?tab=repositories"
      >
        Visit Our Github
      </a>
    </div>
  );
};

export default HeaderAnnounment;
