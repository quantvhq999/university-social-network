import React, { useEffect, useState } from "react";
import Item from "./Item";
import Link from "next/link";
import { Avatar, Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Binh%20Duong&units=metric&lang=vi&appid=65acd53686a5876474975c0cce9e3ad1";
export default function MenuItem() {
  const { user } = useSelector((state) => state.authReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState("");
  const router = useRouter();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(async () => {
    try {
      const result = await axios.get(url);
      if (result) {
        setWeather(result && result.data);
        setIcon(
          `https://openweathermap.org/img/wn/${
            result && result.data.weather[0].icon
          }@4x.png`
        );
      }
    } catch (error) {
      console.log("Failed to get weather", error);
    }
  }, []);
  return (
    <div className="menu">
      <Item
        url={user?.avatar}
        title={user ? user.last_name + " " + user.first_name : ""}
        type={""}
        to={user && user.mssv}
      />
      <Item url={'/assets/icon/message.png'} title={'Tin nhắn'} type={"square"} to={'message'}/>
      <Item url={"/assets/icon/friends.png"} title={"Bạn bè"} type={"square"} to={'friends'}/>
      <Item
        url={"/assets/icon/file.png"}
        title={"Thư viện tài liệu"}
        type={"square"}
        to="documents"
      />
      <Link href={"/confidential"}>
        <div className="menu__item">
          <Avatar src={"/assets/icon/chat.png"} shape={"square"} />
          <span>{"Tâm sự tuổi hồng"}</span>
        </div>
      </Link>
      <Item
        url={"/assets/icon/mailbox.png"}
        title={"Hộp thư góp ý"}
        type={"square"}
        to={false}
      />
      <div onClick={showModal}>
        <Item
          url={"/assets/icon/sun.png"}
          title={"Thời tiết"}
          type={"square"}
          to={false}
        />
      </div>
      <Modal
        title={`Thời tiết ${"TP. HCM"} hôm nay`}
        onOk={handleOk}
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={[
          <Button type="primary" onClick={handleOk}>
            Ok
          </Button>,
        ]}
      >
        <div className="weather">
          <img src={icon} />
          <div className="text">
            <h3>Nhiệt độ</h3>
            <span>
              {Math.round(parseInt(weather && weather.main.feels_like))}°C
            </span>
            <h2>{weather && weather.weather[0].description}</h2>
          </div>
        </div>
      </Modal>
    </div>
  );
}
