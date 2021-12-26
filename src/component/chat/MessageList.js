import React from 'react'
import { Button } from 'antd'
import { MoreOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import MessageChat from './MessageChat';

export default function MessageList() {
    return (
        <div className='message-list box'>
            <div className='message-list__head'>
                <h2 className='title'>Chat</h2>
                <div>
                    <Button className='more' type="primary" shape="circle" icon={<MoreOutlined />} size={'default'} />
                    <Button className='arrow' type="primary" shape="circle" icon={<ArrowLeftOutlined />} size={'default'} />
                </div>
            </div>
            <div className="message-list__search">
                <input type='text' placeholder='Tìm kiếm trong tin nhắn' />
            </div>
            <div className="message-list__chat scroll-dark">
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
                <MessageChat />
            </div>
        </div>
    )
}
