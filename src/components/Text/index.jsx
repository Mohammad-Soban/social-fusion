import React from "react";

const sizeClasses = {
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsBold16Bluegray50: "font-bold font-poppins",
  txtRobotoBold14: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
