import { Typography } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
const HeaderApp = () => {
  return (
    <div>
      <Typography>
        <Link to="/login">
          <h1 style={style.Typography} className="login">
            Sign in/Log in
          </h1>
        </Link>
      </Typography>
    </div>
  );
};

const style = {
  Typography: {
    color: "white",
    margin: "0",
    fontSize: "18px",
    fontWeight: "400",
    padding: "16px",
  },
};

export default HeaderApp;
