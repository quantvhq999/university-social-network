import React, { useState } from "react";
import { Modal } from "antd";
export default function ActivitiesItem(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title={props.item.title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={690}
        style={{ top: 60 }}
        
      >
        <p>{props.item.descriptions}</p>
        <span className="bold">Thời gian: </span>
        <span>{props.item.time}</span>
        <span className="bold">Địa điểm: </span>
        <span>{props.item.location}</span>
        <span className="bold">Đã tham gia: </span>
        <span>{props.item.join}</span>
        <img src={props.item.image} />
      </Modal>
      <div className="activities-container" onClick={showModal}>
        <div className="activities-item">
          <img src={props.item.image} />
          <p className="text">{props.item.title}</p>
        </div>
      </div>
    </>
  );
}
