import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import MessageDetail from "../component/chat/MessageDetail";
import MessageList from "../component/chat/MessageList";
import MessageMain from "../component/chat/MessageMain";
import Head from "next/head";
import { useSelector } from "react-redux";
import { getCoversation } from "../apis/message";

export default function Message() {
  const { user } = useSelector((state) => state.authReducer);
  const [coversation, setCoversation] = useState([]);
  const [conversationSelect, setConversationSelect] = useState(null)

  /// Handle selet conversation
  const selectConversation = (conversation) => {
      setConversationSelect(conversation)
  }
  /// Effect get conversation
  useEffect(() => {
    const fetchCoversation = async () => {
      if (user) {
        try {
          const res = await getCoversation(user && user.mssv);
          setCoversation(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchCoversation();
  }, [user && user.mssv]);
  return (
    <div className="message-wrapper">
      <Head>
        <title>Tin nhắn | TLS</title>
      </Head>
      <Row>
        <Col span={6}>
          <MessageList conversation={coversation} user={user} select={selectConversation}/>
        </Col>
        <Col span={12}>
          <MessageMain conversation={coversation} userCurrent={user} select={conversationSelect}/>
        </Col>
        <Col span={6}>
          <MessageDetail userCurrent={user} select={selectConversation}/>
        </Col>
      </Row>
    </div>
  );
}
