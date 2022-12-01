import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import InputFrom from "./inputForm";

const AddNewBook = () => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <InputFrom />
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default AddNewBook;
