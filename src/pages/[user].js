import { MoreOutlined } from "@ant-design/icons";
import { Button, Carousel, Divider } from "antd";
import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import Avatar from "../component/profile/Avatar";
import CoverImage from "../component/profile/CoverImage";
import Introduce from "../component/profile/Introduce";
import Friends from "../component/profile/Friends";
import Photos from "../component/profile/Photos";
import Posts from "../component/profile/Posts";
import Videos from "../component/profile/Videos";
import { useRouter } from "next/router";
import { fetchUserInfo } from "../apis/auth";

export default function User() {
  /// Initials
  const { user } = useSelector((state) => state.authReducer);
  const [slide, setSlide] = useState(0);
  const [userCurrent, setUserCurrent] = useState(user)
  const [reload, setReload] = useState(0)
  /// Hooks
  const slider = useRef();
  const router = useRouter();
  const userView = router.query;

  /// Effect get user
  useEffect(() => {
    const getUser = async () =>{
      try {
        const user = await fetchUserInfo(userView.user)
        setUserCurrent(user)
      } catch (error) {
        console.log('Failed to get user', error)
      }
    }
    getUser()
  }, [userView])
  return (
    <>
      <Head>
        <title>
          {(userCurrent && (userCurrent.last_name + " " + userCurrent.first_name)+ " | TLS") || "TLS"}
        </title>
      </Head>
      <div className="profile-wrapper scroll-gray">
        <div className="profile-container">
          <div className="profile-header">
            <CoverImage user={userCurrent} setLoad={setReload}/>
            <Avatar user={userCurrent}/>
          </div>
          <div className="profile-info">
            <div>
              <h1 className="name">
                {(userCurrent && (userCurrent.last_name + " " + userCurrent.first_name)) || ""}
              </h1>
              <h2 className="class">{"K59-TH01"}</h2>
            </div>
          </div>
          <Divider
            style={{ borderTop: "2px solid #3a2c8d", color: "#3a2c8d" }}
          />
          <div className="feature-group">
            <div>
              <a
                className={`btn-${slide === 0 ? 'primary': 'dark'}`}
                onClick={() => {
                  slider.current.goTo(0);
                  setSlide(0);
                }}
              >
                Bài viết
              </a>
              <a
                className={`btn-${slide === 1 ? 'primary': 'dark'}`}
                onClick={() => {
                  slider.current.goTo(1);
                  setSlide(1);
                }}
              >
                Giới thiệu
              </a>
              <a
                className={`btn-${slide === 2 ? 'primary': 'dark'}`}
                onClick={() => {
                  slider.current.goTo(2);
                  setSlide(2);
                }}
              >
                Bạn bè
              </a>
              <a
                className={`btn-${slide === 3 ? 'primary': 'dark'}`}
                onClick={() => {
                  slider.current.goTo(3);
                  setSlide(3);
                }}
              >
                Ảnh
              </a>
              <a
                className={`btn-${slide === 4 ? 'primary': 'dark'}`}
                onClick={() => {
                  slider.current.goTo(4);
                  setSlide(4);
                }}
              >
                Video
              </a>
            </div>
            <div>
            </div>
          </div>
          <div className="profile-body">
            <div className="profile-body-container">
              <Carousel dots={false} ref={slider}>
                <Posts reload={reload} user={userCurrent} friend={() => {
                  slider.current.goTo(2);
                  setSlide(2);
                }}/>
                <Introduce />
                <Friends user={userCurrent}/>
                <Photos />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
