import React, { useState, useEffect, useRef } from "react";
import { Picker } from "emoji-mart";
import { useSelector } from "react-redux";
import Message from "./components/Message";
import { getMessages, postMessage } from "../../apis/message";
import { io } from "socket.io-client";
import { fetchUserInfo } from "../../apis/auth";

export default function MessageMain(props) {
  const { conversation, userCurrent, select } = props;
  const { user } = useSelector((state) => state.authReducer);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [onlineUser, setonlineUser ] = useState([])
  const [message, setMessageForm] = useState("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [chatUser, setChatUser] = useState(null)
  /// Ref
  const ref = useRef();
  const scrollRef = useRef();
  const socket = useRef(io("ws://localhost:8600"));

  const onEmojiClick = (event, emojiObject) => {
    const cursor = ref.current.selectionStart;
    const text =
      message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
    setMessageForm(text);
    /// For the new cursor
    const newCursor = cursor + emojiObject.emoji.length;
    setTimeout(() => ref.current.setSelectionRange(newCursor, newCursor), 50);
  };

  /// Handle send message
  const handleSendMessage = async (e) => {
    if (e.key === "Enter") {
      const message = {
        sender: user && user.mssv,
        conversationId: select && select._id,
        text: e.target.value,
      };
      const receiverId = select.member.find(
        (item) => item !== (user && user.mssv)
      );
      socket.current.emit("sendMessage", {
        senderId: user && user.mssv,
        receiverId: receiverId,
        text: e.target.value,
      });
      try {
        const res = await postMessage(message);
        setMessages([...messages, res.data]);
        setMessageForm("");
      } catch (error) {
        console.log(error);
      }
    }
  };

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

  useEffect(() => {
    arrivalMessage &&
      select?.member.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, select]);

  /// Effect send
  useEffect(() => {
    socket.current.emit("addUser", user && user.mssv);
    socket.current.on("getUser", (users) => {
      setonlineUser(users)
    });
  }, [user]);

  /// Effect get message
  useEffect(() => {
    const getMessage = async () => {
      try {
        const messages = await getMessages(select && select._id);
        if (messages) {
          setMessages(messages.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMessage();
  }, [select]);

  /// Handle messages scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /// Effect get chat user 
  useEffect(() => {
    const getUser = async () =>{
      const user = select?.member.find(
        (item) => item !== (userCurrent && userCurrent.mssv)
      );
      if(user){
        try {
          const res = await fetchUserInfo(user)
          setChatUser(res)
        } catch (error) {
          console.log('Failed to get user', error)
        }
      }
    }
    getUser()
  }, [select])
  return (
    <div className="message-main">
      <div className="message-main__head box">
        <div className="avatar circle">
          <img src={chatUser && chatUser.avatar} />
        </div>
        <div className="content">
          <span className="name">{chatUser && (chatUser.last_name+ " " + chatUser.first_name)}</span>
        </div>
      </div>
      <div className="chat-body">
        <div className="chat-filed scroll-dark">
          {select ? (
            <>
              {messages &&
                messages.map((item, index) => (
                  <div ref={scrollRef}>
                    <Message
                    key={index}
                      message={item}
                      own={item.sender === (user && user.mssv)}
                    />
                  </div>
                ))}
            </>
          ) : (
            <h3>Chọn một người bạn để chat</h3>
          )}
        </div>

        <div className="chat-box box">
          <input
            ref={ref}
            placeholder="Aa"
            value={message}
            style={{ width: "100%" }}
            onChange={(e) => setMessageForm(e.target.value)}
            onKeyDown={(e) => handleSendMessage(e)}
          />
          <div
            className="emoji-chat"
            onClick={() => setChosenEmoji(!chosenEmoji)}
          >
            <img src="/assets/icon/emoji.png" />
          </div>
          {/* {chosenEmoji ? (
            <div className="emoji-picker">
              <Picker
                onClick={onEmojiClick}
                disableAutoFocus={true}
                groupNames={{ smileys_people: "PEOPLE" }}
                native
              />
            </div>
          ) : (
            <></>
          )} */}
        </div>
      </div>
    </div>
  );
}
