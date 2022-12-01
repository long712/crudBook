import { Modal } from "antd";
import "./index.scss";
interface Iprops {
  setIsModalOpen: (a: boolean) => void;
  isModalOpen: boolean;
  title?: string;
  content: string;
}
const PopUp = (props: Iprops) => {
  const { setIsModalOpen, isModalOpen, title, content } = props;

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="styleModal"
      maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.1" }}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default PopUp;
