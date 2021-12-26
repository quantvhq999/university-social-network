import React, { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import Message from "./components/Message";

export default function MessageMain() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [message, setMessageForm] = useState("");
  const ref = useRef();

  const onEmojiClick = (event, emojiObject) => {
    const cursor = ref.current.selectionStart;
    const text =
      message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
    setMessageForm(text);
    /// For the new cursor
    const newCursor = cursor + emojiObject.emoji.length;
    setTimeout(() => ref.current.setSelectionRange(newCursor, newCursor), 50);
  };
  return (
    <div className="message-main">
      <div className="message-main__head box">
        <div className="avatar circle">
          <img src="https://res.cloudinary.com/tlus-image/image/upload/v1637611882/1_vzzaaj.jpg" />
        </div>
        <div className="content">
          <span className="name">Jisoo</span>
        </div>
      </div>
      <div className="chat-body">
        <div className="chat-filed scroll-dark">
            <Message own={true}/>
            <Message own={false}/>
            <Message own={true}/>
            <Message own={true}/>
            <Message own={true}/>
            <Message own={true}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
            <Message own={false}/>
        </div>
        <div className="chat-box box">
          <input
            ref={ref}
            placeholder="Aa"
            value={message}
            onChange={(e) => setMessageForm(e.target.value)}
            style={{ width: "100%" }}
          />
          <div
            className="emoji-chat"
            onClick={() => setChosenEmoji(!chosenEmoji)}
          >
            <img src="/assets/icon/emoji.png" />
          </div>
          {chosenEmoji ? (
            <div className="emoji-picker">
              <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                groupNames={{ smileys_people: "PEOPLE" }}
                native
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
