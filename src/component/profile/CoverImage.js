import { Button } from "antd";
import React, { useState } from "react";
import { CameraTwoTone } from "@ant-design/icons";
import ModalImageUpdate from "./components/ModalImageUpdate";
export default function CoverImage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };
  return (
    <div
      className="cover-image-container"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/tlus-image/image/upload/v1637611882/1_vzzaaj.jpg')`,
      }}
    >
      <Button
        className="edit-btn"
        icon={<CameraTwoTone twoToneColor="#3a2c8d" />}
        onClick={showModal}
      >
        Chỉnh sửa ảnh bìa
      </Button>
      <ModalImageUpdate show={isModalVisible} setShow={setIsModalVisible} title={'Cập nhật ảnh bìa'}/>
    </div>
  );
}
