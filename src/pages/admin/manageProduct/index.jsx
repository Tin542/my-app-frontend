import React from "react";
import ProductView from "./view";
import { TASK_STATUS } from "../../../constants/app/task";

const TaskAdmin = () => {
  const data = [
    {
      key: "1",
      code: "24001",
      title: "Do something",
      deadline: "10/01/2024",
      create_date: "06/01/2024",
      assign_to: "AAA",
      status: TASK_STATUS.CREATED,
    },
    {
      key: "2",
      code: "24012",
      title: "Do something 2",
      deadline: "10/01/2024",
      create_date: "06/01/2024",
      assign_to: "BBB",
      status: TASK_STATUS.DONE,
    },
    {
      key: "3",
      code: "24003",
      title: "Do something 3",
      deadline: "10/01/2024",
      create_date: "06/01/2024",
      assign_to: "BBB",
      status: TASK_STATUS.INPROGRESS,
    },
    {
      key: "4",
      code: "24128",
      title: "Do something 4",
      deadline: "10/01/2024",
      create_date: "06/01/2024",
      assign_to: "DDD",
      status: TASK_STATUS.STUCK,
    },
    {
      key: "5",
      code: "25001",
      title: "Do something 5",
      deadline: "10/01/2025",
      create_date: "06/01/2025",
      assign_to: "BBB",
      status: TASK_STATUS.DEADLINE,
    },
    {
      key: "6",
      code: "25001",
      title: "Do something 6",
      deadline: "10/01/2025",
      create_date: "06/01/2025",
      assign_to: "EEE",
      status: TASK_STATUS.REJECTED,
    },
  ];
  const onSearch = (val) => {
    console.log(val);
  };
  return <ProductView onSearch={onSearch} data={data} />;
};
export default TaskAdmin;
