import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import View from "./view";

const ViewBook = () => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <View />
      </Content>
    </Layout>
  );
};

export default ViewBook;
