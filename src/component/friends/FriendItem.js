import { notification } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function FriendItem(props) {
  const { friend } = props;
  const router = useRouter();
  const [unFriend, setUnFriend] = useState(true);

  const openUnfriend = (placement) => {
    setUnFriend(!unFriend)
    notification.success({
      message: `Thông báo`,
      description: "Hủy kết bạn thành công",
      placement,
    });
  };

  const openAddfriend = (placement) => {
    setUnFriend(!unFriend)
    notification.success({
      message: `Thông báo`,
      description: "Gửi lời mời kết bạn thành công",
      placement,
    });
  };
  return (
    <div className="friend-request box">
      <div
        className="friend-request__avatar"
        style={{ backgroundImage: `url("${friend.avatar}")` }}
        onClick={() => router.push(`/${friend.mssv}`)}
      ></div>
      <h3>{friend && friend.last_name + " " + friend.first_name}</h3>
      <div className="friend-request__feature">
        {unFriend ? (
          <button onClick={() => openUnfriend("bottomLeft")}>Xóa</button>
        ) : (
          <button className="primary" onClick={() => openAddfriend("bottomLeft")}>Kết bạn</button>
        )}
      </div>
    </div>
  );
}
