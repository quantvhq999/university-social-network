import React, { useState } from "react";
import { Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
export default function MessageChat() {
  const [more, setMore] = useState(false);

  return (
    <div className="chat-item">
      <div className="avatar circle">
        <img src="https://res.cloudinary.com/tlus-image/image/upload/v1637611882/1_vzzaaj.jpg" />
      </div>
      <div className="content">
        <b className="name">Jisoo</b>
        <br />
        <span className="text">❤️ you 3000. 3 giờ</span>
      </div>
    </div>
  );
}
