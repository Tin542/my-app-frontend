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
  PlusOutlined,
  UndoOutlined,
  FilterOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import "./styles/styles.css";
import { TASK_STATUS } from "../../../constants/app/task";

const columns = [
  {
    title: "Mã công việc",
    dataIndex: "code",
    key: "code",
    fixed: "left",
    width: 150,
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tiêu đề",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Deadline",
    dataIndex: "deadline",
    key: "deadline",
  },
  {
    title: "Ngày tạo",
    dataIndex: "create_date",
    key: "create_date",
  },
  {
    title: "Người thực hiện",
    dataIndex: "assign_to",
    key: "assign_to",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => {
      let color = '';
      let text = '';
      if (status === TASK_STATUS.CREATED) {
        color = "cyan";
        text = 'Đã tạo'
      } else if (status === TASK_STATUS.INPROGRESS) {
        color = "blue";
        text = 'Đang thực hiện'
      } else if (status === TASK_STATUS.STUCK) {
        color = "yellow";
        text = 'Đang gặp sự cố'
      } else if (status === TASK_STATUS.DONE) {
        color = "#87d068";
        text = 'Hoàn thành'
      } else if (status === TASK_STATUS.REJECTED) {
        color = "red";
        text = 'Từ chối'
      } else if (status === TASK_STATUS.DEADLINE) {
        color = "#f50";
        text = "Trễ Deadline"
      }
      return <Tag color={color}>{text}</Tag>;
    },
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

const ProductView = (props) => {
  const { onSearch, data } = props;
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
        QUẢN LÝ CÔNG VIỆC
      </Title>
      <Flex vertical>
        <Flex horizontal>
          <div className="task-advance-container">
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
                  placement="left"
                  closable={false}
                  onClose={onClose}
                  open={open}
                  key="left">
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Drawer>
              </ConfigProvider>
            </Flex>
          </div>
        </Flex>
        <Flex gap="small" vertical className="task-table-container">
          <Flex
            horizontal
            gap="small"
            justify="space-between"
            align="center"
            style={{ padding: "10px" }}>
            <Search
              placeholder="Mã công việc..."
              allowClear
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
            <Flex wrap="wrap" gap="small">
              <ConfigProvider>
                <Button icon={<UndoOutlined />}>Reload</Button>
                <Button type="primary" icon={<PlusOutlined />}>
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
export default ProductView;
