import { Button, Input, Layout, Space, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import "./index.scss";
const LogIn = () => {
  return (
    <Layout>
      <Header></Header>
      <Content style={{ height: "943px" }}>
        <div className="form-input-container">
          <div className="form-input-content">
            <h1 className="title-login">Login Book</h1>
            <Space direction="vertical" style={{ width: "600px" }}>
              <div style={{ padding: "16px" }}>
                <Typography style={style.typography}>Username</Typography>
                <Input placeholder="Input User name" size="large" />
              </div>
              <div style={{ padding: "16px" }}>
                <Typography style={style.typography}>Password</Typography>
                <Input.Password placeholder="Input password" size="large" />
              </div>
            </Space>
            <div className="btnLogin">
              <Button
                className="btn-login"
                style={{ backgroundColor: "#00152" }}
                size='large'
              >
                <Link to="/book">
                  <Typography style={{ color: "#fff" }}> login</Typography>
                </Link>
              </Button>
              {/* <Button>
                <Link to="/book">
                  <Typography> cancel</Typography>
                </Link>
              </Button> */}
            </div>
            <div style={{ padding: "16px" }}>
              <Button type="text">
                <Link to="/book">
                  <Typography> back to home</Typography>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

const style = {
  typography: {
    fontSize: "18px",
    fontWeight: "600",
    // color: "#fff",
  },
};

export default LogIn;
