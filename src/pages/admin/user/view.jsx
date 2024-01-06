import React from "react";
import {
  Table,
  Typography,
  Flex,
  Button,
  ConfigProvider,
  Pagination,
} from "antd";
import {
  UserAddOutlined,
  UndoOutlined
} from '@ant-design/icons';

import "./styles/styles.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Category 1",
        value: "Category 1",
      },
      {
        text: "Category 2",
        value: "Category 2",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: "30%",
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
const UserView = () => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <>
      <Flex gap="middle" vertical className="user-table-container">
        <Flex
          gap="small"
          justify="flex-end"
          align="center" 
          style={{padding: '10px'}}>
          <ConfigProvider>
            <Button icon={<UndoOutlined />}>Reload</Button>
            <Button type="primary" icon={<UserAddOutlined />}>Thêm</Button>
          </ConfigProvider>
        </Flex>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={false}
        />
        <Flex
          gap="middle"
          wrap="wrap"
          justify="flex-end"
          align="center"
          style={{ padding: "15px" }}>
          <Pagination defaultCurrent={1} total={data.length} pageSize={5} />
        </Flex>
      </Flex>
    </>
  );
};
export default UserView;
