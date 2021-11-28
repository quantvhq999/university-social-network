import { Button } from "antd";
import React from "react";
import { CameraTwoTone } from "@ant-design/icons";
export default function CoverImage() {
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
      >
        Chỉnh sửa ảnh bìa
      </Button>
    </div>
  );
}
