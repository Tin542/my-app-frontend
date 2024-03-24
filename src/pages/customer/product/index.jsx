import React from "react";

import ProductView from "./view";

const ProductPage = () => {
  const onSearch = (val) => {
    console.log(val);
  }
  return <ProductView onSearch={onSearch} />;
};
export default ProductPage;
