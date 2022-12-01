import { Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import book from "../../../assets/img/book.png";
import ButtonBase from "../../button";
import "./index.scss";

const View = () => {
  return (
    <div style={{ height: "900px" }}>
      <div className="viewBookContainer">
        <div className="viewHeader">
          <h1 style={{ margin: "0" }}>A Book</h1>
          <Space wrap>
            <Button type="primary">
              <Link to="/viewBook/editBook">
                <Typography style={{ color: "white" }}>Edit Book</Typography>
              </Link>
            </Button>
          </Space>
        </div>
        <div>
          <div className="imgAndText">
            <img src={book} alt="" width="200px" />
            <div>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <b style={style.text}>Title: </b>
                <p style={{ fontSize: "18px", margin: "0" }}>lao hac</p>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <b style={style.text}>Author: </b>
                <p style={{ fontSize: "18px", margin: "0" }}>nam cao</p>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <b style={style.text}>Release Date: </b>
                <p style={{ fontSize: "18px", margin: "0" }}>20/22/2011</p>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <b style={style.text}>NumberOfPages: </b>
                <p style={{ fontSize: "18px", margin: "0" }}>20</p>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <b style={style.text}>Category : </b>
                <p style={{ fontSize: "18px", margin: "0" }}>van hoc, aaaaaa</p>
              </Typography>
            </div>
          </div>
          <Typography>
            <h2 style={{ paddingLeft: "16px" }}>Describe</h2>
            <p style={style.paragraph}>
              Đắc nhân tâm, tên tiếng Anh là How to Win Friends and Influence
              People là một quyển sách nhằm tự giúp bản thân bán chạy nhất từ
              trước đến nay. Quyển sách này do Dale Carnegie viết và đã được
              xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên
              khắp thế giới. Đắc nhân tâm, tên tiếng Anh là How to Win Friends
              and Influence People là một quyển sách nhằm tự giúp bản thân bán
              chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết
              và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu
              bản trên khắp thế giới. Đắc nhân tâm, tên tiếng Anh là How to Win
              Friends and Influence People là một quyển sách nhằm tự giúp bản
              thân bán chạy nhất từ trước đến nay. Quyển sách này do Dale
              Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được
              bán 15 triệu bản trên khắp thế giới. Đắc nhân tâm, tên tiếng Anh
              là How to Win Friends and Influence People là một quyển sách nhằm
              tự giúp bản thân bán chạy nhất từ trước đến nay. Quyển sách này do
              Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã
              được bán 15 triệu bản trên khắp thế giới.
            </p>
          </Typography>
        </div>
        <div className="btn">
          {/* <div className="btnAction">
            <ButtonBase
              linkBtn="/book"
              nameBtn="Save"
              type="primary"
              className="btnSave"
            />
          </div> */}
          <div className="btnAction">
            <ButtonBase linkBtn="/book" nameBtn="Cancel" type="default" />
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  text: {
    margin: "0",
    padding: "6px",
    fontSize: "18px",
  },
  paragraph: {
    padding: "16px",
    fontSize: "18px",
  },
  h2: {
    padding: "16px",
  },
};

export default View;
