import React from "react";

import UserView from "./view";

const UserAdmin = () => {
  const onSearch = (val) => {
    console.log(val);
  }
  return <UserView onSearch={onSearch} />;
};
export default UserAdmin;
