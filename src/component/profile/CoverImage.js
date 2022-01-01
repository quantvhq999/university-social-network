import { Button } from "antd";
import React, { useState } from "react";
import { CameraTwoTone } from "@ant-design/icons";
import ModalImageUpdate from "./components/ModalImageUpdate";
import { useSelector } from "react-redux";
export default function CoverImage(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {user} = props
  const showModal = () => {
      setIsModalVisible(true);
  };
  return (
    <div
      className="cover-image-container"
      style={{
        backgroundImage: `url('${user && user.cover}')`,
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
