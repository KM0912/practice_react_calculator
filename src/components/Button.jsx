import React from "react";

export const Button = (props) => {
  const { children, className } = props;
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};
