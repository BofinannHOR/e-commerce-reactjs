import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex flex-row justify-between mt-4 ">
      <label className="font-semibold" htmlFor={props.input.id}>
        {props.label}
      </label>
      <div className="relative">
        <input
          ref={ref}
          //   type="email"
          {...props.input}
          className="w-full md:p-2 p-4 pr-12 text-sm bg-gray-100 rounded-lg shadow-sm focus:border-blue-500 "
        />
      </div>
    </div>
  );
});

export default Input;
