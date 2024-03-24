import React from "react";

import ServiceView from "./view";

const SerivePage = () => {
  const onSearch = (val) => {
    console.log(val);
  }
  return <ServiceView onSearch={onSearch} />;
};
export default SerivePage;
