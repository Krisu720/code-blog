import React, { ReactNode } from "react";

const ProductShowcaseComponent = ({children}:{children:ReactNode}) => {
  return (
    <div className="bg-gray-500/10 h-[35rem] rounded-xl border mt-8 flex justify-center items-center">{children}</div>
  );
};

export default ProductShowcaseComponent;
