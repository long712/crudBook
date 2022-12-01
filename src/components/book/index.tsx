import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import HeaderApp from "../header";
import HeaderTable from "../headerTable";
import TableBook from "../tableBook";

const Book = () => {
  return (
    <Layout>
      <Header>
        <HeaderApp />
      </Header>
      <Content>
        <HeaderTable />
        <TableBook />
      </Content>
    </Layout>
  );
};

export default Book;
