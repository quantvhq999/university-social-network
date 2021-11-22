import React from "react";
import { Card, Progress } from "antd";
import { CommentOutlined, EyeOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import axios from "axios";

export default function ConfidentialItem(props) {
  const router = useRouter();
  return (
    <Card
      onClick={() => {
        localStorage.setItem('cfid',props.data._id)
        axios.post(`https://usn-app.herokuapp.com/confidential/views/${props.data._id}`)
        router.push(`/confidential/post/${props.data._id}`);
      }}
      title={props.data.title}
      className="confidental-card"
      hoverable
      actions={[
        <>
          <CommentOutlined
            style={{ color: "#3a2c8d", fontWeight: "500" }}
            key="comment"
          />
          Bình luận {props.data.comments.length}
        </>,
        <>
          <EyeOutlined
            style={{ color: "#3a2c8d", fontWeight: "500" }}
            key="like"
          />
          {props.data.views}
        </>,
      ]}
    >
      <p className="confidental-card-content">{props.data.content}</p>
    </Card>
  );
}
