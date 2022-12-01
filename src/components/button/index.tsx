import { Button, Typography } from "antd";
import { ButtonType } from "antd/es/button";
import { Link } from "react-router-dom";
interface IProps {
  linkBtn: string;
  nameBtn: string;
  type: ButtonType;
  className?: string;
}
const ButtonBase = (props: IProps) => {
  const { linkBtn, nameBtn, type, className } = props;
  return (
    <Button type={type} className={className}>
      <Link to={linkBtn}>
        <Typography>{nameBtn}</Typography>
      </Link>
    </Button>
  );
};

export default ButtonBase;
