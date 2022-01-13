import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import MessageAstir from './components/MessageAstir'
import { io } from "socket.io-client";
import { useSelector } from 'react-redux';
import { getMessages, postMessage } from '../../apis/message';
export default function Message(props) {
    const { user } = useSelector(state => state.authReducer)
    const [messageLocal, setMessageLocal] = useState('')
    const [listMessage, setListMessage] = useState([])
    const [onlineUser, setonlineUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const ref = useRef();
    const scrollRef = useRef();
    const socket = useRef(io("ws://localhost:8600"));


    const handleSendMessage = async () => {
        if (messageLocal !== '') {
            const message = {
                sender: user && user.mssv,
                conversationId: '61e038bf669df0f320f9d180',
                text: messageLocal,
            };

            socket.current.emit("sendMessage", {
                senderId: user && user.mssv,
                receiverId: 123456,
                text: messageLocal,
            });
            try {
                const res = await postMessage(message);
                setListMessage([...listMessage, res.data]);
                setMessageLocal("");
                setLoading(true)
                ref.current.value = ''
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false)
            }
        }
    }

    /// Effect send
    useEffect(() => {
        socket.current.emit("addUser", user && user.mssv);
        socket.current.on("getUser", (users) => {
            setonlineUser(users)
        });
    }, [user]);

    /// Effect connect
    useEffect(() => {
        socket.current = io("ws://localhost:8600");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createAt: Date.now(),
            });
        });
    }, []);

    /// Effect get message
    useEffect(() => {
        const getMessage = async () => {
            try {
                const messages = await getMessages('61e038bf669df0f320f9d180');
                if (messages) {
                    setListMessage(messages.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getMessage();
    }, []);

    useEffect(() => {
        arrivalMessage &&
            listMessage((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);
    return (
        <div className="message-container">
            <div className="astir">
                <p><b style={{ margin: "1rem" }}>Hoạt động chung</b></p>
                <div className="astir-items">
                    {listMessage && listMessage.length > 0 && listMessage.map((item, index) => (
                        <MessageAstir key={index} avatar="https://joeschmoe.io/api/v1/random" message={item.text} />
                    ))}
                </div>
            </div>
            <div className="message">
                <p><b style={{ margin: "1rem" }}>Tin nhắn chung</b></p>
                <div className='local_message'>
                    <textarea ref={ref} placeholder='Nhập nội dung' onChange={(e) => setMessageLocal(e.target.value)} />
                    <Button loading={loading} type="primary" style={{ marginLeft: "1vh" }} onClick={() => handleSendMessage()}>Đăng</Button>
                </div>
            </div>
        </div>
    )
}
