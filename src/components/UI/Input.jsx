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
          className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
});

export default Input;
