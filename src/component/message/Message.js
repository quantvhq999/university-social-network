import React from 'react'
import MessageAstir from './components/MessageAstir'

export default function Message(props) {
    return (
        <div className="message-container">
            <div className="astir">
                <p><b style={{ margin: "1rem" }}>Hoạt động khác</b></p>
                <div className="astir-items">
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Tìm đồng đội leo rank ưu tiên nữ" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Câu lạc bộ những người yêu nồi cơm điện tuyển thành viên" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Tìm người yêu ra mắt gia đình" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Tìm bạn nhậu chí cốt" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Cần khoảng 50 bạn đi tỷ thí võ công" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Hacker đây" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="Trứng rán cần mỡ bắp cần bơ" />
                    <MessageAstir avatar="https://joeschmoe.io/api/v1/random" message="提供日本时事新闻、娱乐快报、潮流趋势、传统与流行文化、科学技术、旅游美食、生活方式等方面的信息" />
                </div>
            </div>
            <div className="message">

            </div>
        </div>
    )
}
