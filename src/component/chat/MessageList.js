import React, { useState } from 'react'
import { Button } from 'antd'
import { MoreOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import MessageChat from './MessageChat';

export default function MessageList(props) {
    const { conversation, user, select } = props

    return (
        <div className='message-list box'>
            <div className='message-list__head'>
                <h2 className='title'>Chat</h2>
                <div>
                    
                </div>
            </div>
            <div className="message-list__search">
                <h3>Danh sách tin nhắn</h3>
            </div>
            <div className="message-list__chat scroll-dark">
                {conversation && conversation.map((item, index) =>(
                    <MessageChat key={index} conversation={item} user={user} select={select}/>
                ))}
            </div>
        </div>
    )
}
