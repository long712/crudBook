import { Button, Space, Table, Tag, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import { Link } from "react-router-dom";
import { DataType } from "../../interface/interfaceBookTitle";
import { data } from "../../test/test";
import PopUp from "../modal";
import "./index.scss";

const TableBook = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  console.log(isModalOpen);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      className: "text",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      className: "text",
    },
    {
      title: "Release Date",
      dataIndex: "category",
      key: "category",
      render: (_, { category }) => (
        <>
          {category.map((category) => {
            let color = category.length > 5 ? "geekblue" : "green";
            if (category === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={category}>
                {category.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "NumberOfPages",
      dataIndex: "numberOfPages",
      key: "numberOfPages",
      width: "100px",
      className: "cellTable",
    },
    {
      title: "Action",
      key: "action",
      width: "100px",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">
            <Link to="/viewBook">
              <Typography style={{ color: "#1677ff" }}>view</Typography>
            </Link>
          </Button>
          <Button type="link" onClick={handleDelete}>
            Delete
          </Button>
          <PopUp
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
            content="Do you want delete"
          />
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} className="table" />;
};

export default TableBook;
