import React from "react";

import HomeView from "./view";

const HomePage = () => {
  const onSearch = (val) => {
    console.log(val);
  }
  return <HomeView onSearch={onSearch} />;
};
export default HomePage;
