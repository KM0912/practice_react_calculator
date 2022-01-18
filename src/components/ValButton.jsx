import React from "react";

export const ValButton = (props) => {
  const { children, className, onClick } = props;

  return (
    <>
      <div className={className} onClick={() => onClick(children)}>
        {children}
      </div>
    </>
  );
};
