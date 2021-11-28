import React, { useEffect, useState } from "react";
import { Comment, Avatar, Form, Button, List, Input, Divider } from "antd";
import MenuTop from "../../../component/header/menu/MenuTop";
import Head from "next/head";
import ConfidentialComment from "./ConfidentialComment";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfidentialRequest } from "../../../redux/actions/getConfidental";
import { fetchCommentsRequest } from "../../../redux/actions/confidentialAction";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function Post() {
  const router = useRouter();
  const id =
    typeof localStorage !== "undefined" ? localStorage.getItem("cfid") : "";
  const { slug } = router.query;

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.confidentialReducer);

  useEffect(async () => {
    const action = fetchConfidentialRequest(slug);
    await dispatch(action);
  }, []);
  
  return (
    <div>
      <Head>
        <title>Bài viết</title>
      </Head>
      <div className="confidential-post">
        <span>
          <Button
            onClick={()=>{router.push("/confidential")}}
            type="primary"
            shape="circle"
            icon={<ArrowLeftOutlined />}
            size={"large"}
          />
        </span>
        <span>
          <Divider className="confidential-post__head" orientation="left" plain>
            {data && data.post ? data.post.title : ""}
          </Divider>
        </span>

        <div className="confidential-post__body">
          <p>{data && data.post ? data.post.content : ""}</p>
        </div>
        <ConfidentialComment  />
      </div>
    </div>
  );
}
