import React, { useEffect, useState } from "react";
import { Avatar, Tooltip, Button, Popover , notification} from "antd";
import {
  MoreOutlined,
  MessageOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  ShareAltOutlined
} from "@ant-design/icons";
import { fetchUserInfo } from "../../apis/auth";
import moment from "moment";
import "moment/locale/vi";
import { votePost } from "../../apis/post";

const Context = React.createContext({ name: 'Default' });

export default function FeedItem(props) {
  const { post, userCurrent } = props;
  const [currentPost, setCurrentPost] = useState(post);
  const [user, setUser] = useState({});
  const [more, setMore] = useState(false);
  const [vote, setVote] = useState(0);
  const [isVote, setIsVote] = useState(null);
  moment.locale("vi");

  /// Notification
  const openNotification = (placement) => {
    notification.success({
      message: `Thông báo`,
      description: "Sao chép đường dẫn thành công",
      placement,
    });
  };

  /// Handle more
  const handleVisibleChange = () => {
    setMore(!more);
  };

  /// Handle vote
  const checkVote = (votes) => {
    if (votes.length === 0) {
      return setVote(0);
    }
    let up = votes.filter(function (item) {
      return item.type === "up";
    }).length;
    let down = votes.filter(function (item) {
      return item.type === "down";
    }).length;
    return setVote(up - down);
  };

  /// Handle vote click
  const handleVoteClick = async (type) => {
    if (isVote === type) {
      return;
    }
    setIsVote(type);
    try {
      const data = {
        mssv: userCurrent && userCurrent.mssv,
        id: currentPost._id,
        type: type,
      };
      if (type === "up") {
        setVote(vote + 1);
      } else if (type === "down") {
        setVote(vote - 1);
      }
      // const res = await votePost(data)
      // setCurrentPost(res.data)
    } catch (error) {
      console.log("Failed to vote", error);
    }
  };
  useEffect(() => {
    if (currentPost) {
      const getUserPost = async () => {
        const user = await fetchUserInfo(currentPost && currentPost.mssv);
        setUser(user);
      };
      checkVote(currentPost && currentPost.vote);
      getUserPost();
    }
  }, [currentPost]);

  /// Effect vote
  useEffect(() => {
    if (currentPost && currentPost.vote.length > 0) {
      const userVote = currentPost.vote.find(
        (item) => item.mssv === (userCurrent && userCurrent.mssv)
      );
      if (userVote) {
        setIsVote(userVote.type);
      }
    }
  }, [currentPost]);
  const moreContent = (
    <div>
      <a>
        <p>Báo cáo bài viết</p>
      </a>
      <a>
        <p>Copy link bài viết</p>
      </a>
      <a>
        <p>Báo cáo</p>
      </a>
    </div>
  );
  return (
    <div className="feed-item">
      <div className="feed-item__head">
        <div className="feed-avatar">
          <Avatar
            size="large"
            style={{ cursor: "pointer" }}
            src={user && user.avatar}
          />
        </div>
        <div className="feed-name">
          <div>
            <a className="name">
              <b>{user && user.last_name + " " + user.first_name}</b>
            </a>
            <br />
            <a className="feed-name__time">
              {moment
                .utc(currentPost && currentPost.createdAt)
                .local()
                .startOf("seconds")
                .fromNow()}
            </a>
          </div>
          <div className="more">
            <Popover
              placement="bottomRight"
              content={moreContent}
              trigger="click"
              visible={more}
              onVisibleChange={handleVisibleChange}
            >
              <Tooltip title="Thêm">
                <Button
                  size="small"
                  type="primary"
                  shape="circle"
                  icon={<MoreOutlined />}
                />
              </Tooltip>
            </Popover>
          </div>
        </div>
      </div>
      <div className="feed-item__body">
        <p className={currentPost && currentPost.image ? "" : "just-title"}>
          {currentPost && currentPost.title}
        </p>
        {currentPost && currentPost.image ? (
          <img src={currentPost.image} />
        ) : (
          <></>
        )}
      </div>
      <div className="feed-item__footer">
        <div className="vote">
          <div className="vote-btn" style={{ fontSize: "1.25rem" }}>
            <CaretUpOutlined
              onClick={() => handleVoteClick("up")}
              className={`up_arrow ${isVote === "up" ? "up" : ""}`}
            />
            <CaretDownOutlined
              onClick={() => handleVoteClick("down")}
              className={`down_arrow ${isVote === "down" ? "down" : ""}`}
            />
          </div>
          <b>{vote}</b>
        </div>
        <div className="comment">
          <MessageOutlined /> Bình luận
        </div>
        <div className="share" onClick={() => openNotification('bottomLeft')}>
          <ShareAltOutlined /> Chia sẻ
        </div>
      </div>
    </div>
  );
}
