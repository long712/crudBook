import { Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";

const HeaderTable = () => {
  return (
    <div className="headertableContaier">
      <Typography>
        <h1 style={{ margin: "0px" }}>Welcome to Book!</h1>
      </Typography>
      {/* <AddNewBook /> */}
      <Space wrap>
        <Button type="primary">
          <Link to="/addNewBook">
            <Typography style={{ color: "white" }}>+ Add new Book</Typography>
          </Link>
        </Button>
      </Space>
    </div>
  );
};

export default HeaderTable;
