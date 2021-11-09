import React, { useState } from "react";
import { Modal, Button, notification, Space } from "antd";
import {  RadiusBottomleftOutlined, } from '@ant-design/icons';
const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
  });
};

export default function ActivitiesItem(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);


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
        footer={[
          <Button type="primary" key="back" onClick={handleCancel}>
            Thoát
          </Button>,
         
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={ handleOk}
          >
            Tham gia
          </Button>,
        ]}
      >
        <p>{props.item.descriptions}</p>
        <span className="bold">Thời gian: </span>
        <p>{props.item.time}</p>
        <span className="bold">Địa điểm: </span>
        <p>{props.item.location}</p>
        <span className="bold">Đã tham gia: </span>
        <p>{props.item.join}</p>
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
