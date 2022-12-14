import { InboxOutlined } from "@ant-design/icons";
import { Col, DatePicker, Input, Row, Select, SelectProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import moment from "moment";
import ButtonBase from "../../button";
import "./index.scss";

const InputFrom = () => {
  return (
    <div style={{ minHeight: "788px" }}>
      <div className="inputContainer">
        <h1 style={{ margin: "0" }}>A new Book</h1>
        <div className="inputFrom">
          <div className="inputContent">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <h3 style={style.text}>Title</h3>
                <Input placeholder="input title" allowClear />
              </Col>
              <Col span={12}>
                <h3 style={style.text}>Author</h3>
                <Input placeholder="input author" allowClear />
              </Col>
              <Col span={24}>
                <h3 style={style.text}>Describe</h3>
                <TextArea placeholder="input describe" allowClear rows={4} />
              </Col>
              <Col span={12}>
                <h3 style={style.text}>Release Date</h3>
                <DatePicker
                  style={{ width: "100%" }}
                  format={moment().format("LL")}
                />
              </Col>
              <Col span={12}>
                <h3 style={style.text}>NumberOfPages</h3>
                <Input placeholder="input numberOfPages" allowClear />
              </Col>
              <Col span={12}>
                <h3 style={style.text}>Category</h3>
                <Select
                  style={{ width: "100%" }}
                  mode="multiple"
                  allowClear
                  options={options}
                />
              </Col>
            </Row>
          </div>
          <div className="upLoadImg">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint" style={{ padding: "10px" }}>
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </p>
            </Dragger>
          </div>
        </div>

        <div className="btn">
          <div className="btnAction">
            <ButtonBase
              linkBtn="/book"
              nameBtn="Save"
              type="primary"
              className="btnSave"
            />
          </div>
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
    padding: "10px",
  },
};

const options: SelectProps["options"] = [
  { value: 1, label: "Ch??nh tr??? ??? ph??p lu???t" },
  { value: 2, label: "Khoa h???c c??ng ngh??? ??? Kinh t???" },
  { value: 3, label: "V??n h???c ngh??? thu???t" },
  { value: 4, label: "V??n h??a x?? h???i ??? L???ch s???" },
  { value: 5, label: "Gi??o tr??nh" },
  { value: 6, label: "Truy???n, ti???u thuy???t" },
  { value: 7, label: "T??m l??, t??m linh, t??n gi??o" },
  { value: 8, label: "S??ch thi???u nhi" },
];

export default InputFrom;
