import React, { ReactNode } from "react";

const ProductShowcaseComponent = ({children}:{children:ReactNode}) => {
  return (
    <div className="bg-gray-500/10 rounded-xl border mt-8 flex justify-center items-center p-4">{children}</div>
  );
};

export default ProductShowcaseComponent;
