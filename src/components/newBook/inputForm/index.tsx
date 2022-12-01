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
  { value: 1, label: "Chính trị – pháp luật" },
  { value: 2, label: "Khoa học công nghệ – Kinh tế" },
  { value: 3, label: "Văn học nghệ thuật" },
  { value: 4, label: "Văn hóa xã hội – Lịch sử" },
  { value: 5, label: "Giáo trình" },
  { value: 6, label: "Truyện, tiểu thuyết" },
  { value: 7, label: "Tâm lý, tâm linh, tôn giáo" },
  { value: 8, label: "Sách thiếu nhi" },
];

export default InputFrom;
