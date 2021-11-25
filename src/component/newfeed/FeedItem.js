import React, { useState } from 'react'
import { Avatar, Tooltip, Button, Popover } from 'antd'
import { MoreOutlined, MessageOutlined, CaretUpOutlined, CaretDownOutlined, ShareAltOutlined } from "@ant-design/icons"


export default function FeedItem(props) {
    const [more, setMore] = useState(false)
    
    const handleVisibleChange = () => {
        setMore(!more)
    };

    const moreContent = (
        <div>
            <a><p>Báo cáo bài viết</p></a>
            <a><p>Copy link bài viết</p></a>
            <a><p>Báo cáo</p></a>
        </div>
    )
    return (
        <div className="feed-item">
            <div className="feed-item__head">
                <div className="feed-avatar">
                    <Avatar size="large" style={{ cursor: 'pointer' }} src="https://joeschmoe.io/api/v1/random" />
                </div>
                <div className="feed-name" >
                    <div>
                        <a className="name"><b>Quân Trương</b></a><br />
                        <a className="feed-name__time">8 giờ trước</a>
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
                                <Button size="small" type="primary" shape="circle" icon={<MoreOutlined />} />
                            </Tooltip>
                        </Popover>

                    </div>
                </div>
            </div>
            <div className="feed-item__body">
                <p>Bạn thân</p>
                <img src='https://i.stack.imgur.com/H5FjW.png' />
            </div>
            <div className="feed-item__footer">
                <div className="vote">
                    <div className="vote-btn" style={{fontSize: "1.25rem"}}>
                        <CaretUpOutlined className="up_arrow" />
                        <CaretDownOutlined className="down_arrow" />
                    </div>
                    <b>360</b>
                </div>
                <div className="comment">
                    <MessageOutlined  /> Bình luận

                </div>
                <div className="share">
                    <ShareAltOutlined  /> Chia sẻ
                </div>
            </div>
        </div>
    )
}
