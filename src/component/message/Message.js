import { Button } from 'antd'
import React from 'react'
import MessageAstir from './components/MessageAstir'

export default function Message(props) {
    return (
        <div className="message-container">
            <div className="astir">
                <p><b style={{ margin: "1rem" }}>Hoạt động chung</b></p>
                <div className="astir-items">
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Cần 1 bạn đến thư viện phụ chút việc" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Lớp 59TH ai rảnh ra cafe đầu trường" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Ai nhặt được thẻ xe số 123 không?" />
                </div>
            </div>
            <div className="message">
            <p><b style={{ margin: "1rem" }}>Tin nhắn chung</b></p>
            <div className='local_message'>
            <textarea placeholder='Nhập nội dung'/>
            <Button type="primary" style={{marginLeft: "1vh"}}>Đăng</Button>
            </div>
            </div>
        </div>
    )
}
