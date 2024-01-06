import React, { useState } from "react";
import {
  Table,
  Space,
  Tag,
  Flex,
  Button,
  ConfigProvider,
  Pagination,
  Input,
  Typography,
  Drawer,
} from "antd";
import {
  UserAddOutlined,
  UndoOutlined,
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import "./styles/styles.css";

const columns = [
  {
    title: "Họ Tên",
    dataIndex: "name",
    key: "name",
    fixed: "left",
    width: 150,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tài khoản",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Vai trò",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Ngày tạo",
    dataIndex: "create_date",
    key: "create_date",
  },
  {
    title: "Ngày cập nhật",
    dataIndex: "update_date",
    key: "update_date",
  },
  {
    title: "Trạng thái",
    key: "isActive",
    dataIndex: "isActive",
    render: (_, { isActive }) => (
      <>
        {isActive ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Đã khóa</Tag>
        )}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    fixed: "right",
    width: 100,
    render: (_, record) => (
      <Space size="small">
        <Button icon={<EditOutlined />} size="default" />
        <Button danger icon={<DeleteOutlined />} size="default" />
      </Space>
    ),
  },
];
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
    isActive: true,
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
const UserView = (props) => {
  const { onSearch } = props;
  const { Search } = Input;
  const { Title } = Typography;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Title level={4} strong type="secondary" className="title">
        QUẢN LÝ TÀI KHOẢN
      </Title>
      <Flex vertical>
        <Flex horizontal>
          <div className="user-advance-container">
            <Flex
              gap="small"
              justify="flex-start"
              align="center"
              style={{ padding: "10px" }}>
              <ConfigProvider
                theme={{
                  token: {
                    controlHeight: 34,
                  },
                }}>
                <Button onClick={showDrawer} icon={<FilterOutlined />}>
                  Tìm kiếm nâng cao
                </Button>
                <Drawer
                  title="Tìm kiếm nâng cao"
                  placement='left'
                  closable={false}
                  onClose={onClose}
                  open={open}
                  key='left'>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </ConfigProvider>
            </Flex>
          </div>
        </Flex>
        <Flex gap="small" vertical className="user-table-container">
          <Flex
            horizontal
            gap="small"
            justify="space-between"
            align="center"
            style={{ padding: "10px" }}>
            <Search
              placeholder="TÌm kiếm bằng tên..."
              allowClear
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
            <Flex wrap="wrap" gap="small">
              <ConfigProvider>
                <Button icon={<UndoOutlined />}>Reload</Button>
                <Button type="primary" icon={<UserAddOutlined />}>
                  Thêm
                </Button>
              </ConfigProvider>
            </Flex>
          </Flex>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{
              x: 1100,
            }}
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
      </Flex>
    </>
  );
};
export default UserView;
