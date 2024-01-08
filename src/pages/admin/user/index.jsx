import React from "react";

import UserView from "./view";

const UserAdmin = () => {
  const data = [
    {
      key: "1",
      name: "Nguyễn Văn A",
      username: "AAA",
      create_date: "06/01/2024",
      update_date: "06/01/2024",
      role: "manager",
      isActive: true,
    },
    {
      key: "2",
      name: "Nguyễn Văn C",
      username: "CCC",
      role: "staff",
      create_date: "06/01/2024",
      update_date: "06/01/2024",
      isActive: true,
    },
    {
      key: "3",
      name: "Nguyễn Văn B",
      username: "BBB",
      role: "staff",
      create_date: "06/01/2024",
      update_date: "06/01/2024",
      isActive: true,
    },
    {
      key: "4",
      name: "Nguyễn Văn D",
      username: "DDD",
      role: "staff",
      create_date: "06/01/2024",
      update_date: "06/01/2024",
      isActive: false,
    },
    {
      key: "5",
      name: "Nguyễn Văn E",
      username: "EEE",
      role: "staff",
      create_date: "06/01/2024",
      update_date: "06/01/2024",
      isActive: true,
    },
  ];
  const onSearch = (val) => {
    console.log(val);
  }
  return <UserView data={data} onSearch={onSearch} />;
};
export default UserAdmin;
