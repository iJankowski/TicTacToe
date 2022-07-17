import React from "react";

const Wrapper = ({ className, children }) => {
  return (
    <div
      className={`${className} sm:px-2 md:px-6 lg:px-10 max-w-screen-3xl mx-auto`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
