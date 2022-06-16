import React from "react";

const Card = (props) => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Card;
