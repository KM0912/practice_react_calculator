import React from "react";

export const Button = (props) => {
  const { children } = props;
  return (
    <>
      <div className="btn">{children}</div>
    </>
  );
};
