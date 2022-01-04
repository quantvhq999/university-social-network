import { Button } from "antd";
import React, { useState } from "react";
import { CameraTwoTone } from "@ant-design/icons";
import ModalImageUpdate from "./components/ModalImageUpdate";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function CoverImage(props) {
  const {setLoad, user} = props
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userCurrent = useSelector(state => state.authReducer.user)
  const [cover, setCover] = useState(null)
  const showModal = () => {
      setIsModalVisible(true);
  };
  useEffect(() => {
    setCover(userCurrent)
  }, [userCurrent])
  return (
    <div
      className="cover-image-container"
      style={{
        backgroundImage: `url('${user && user.cover}')`,
      }}
    >
      {userCurrent?.mssv == user?.mssv ? <Button
        className="edit-btn"
        icon={<CameraTwoTone twoToneColor="#3a2c8d" />}
        onClick={showModal}
      >
        Chỉnh sửa ảnh bìa
      </Button>: <></>}
      <ModalImageUpdate show={isModalVisible} setShow={setIsModalVisible} title={'Cập nhật ảnh bìa'} type={'cover'} setLoad={setLoad}/>
    </div>
  );
}
