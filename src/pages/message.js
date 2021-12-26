import { Col, Row } from 'antd'
import React from 'react'
import MessageDetail from '../component/chat/MessageDetail'
import MessageList from '../component/chat/MessageList'
import MessageMain from '../component/chat/MessageMain'
import Head from 'next/head'

export default function Message() {
    return (
        <div className="message-wrapper">
            <Head>
                <title>Tin nhắn | TLS</title>
            </Head>
            <Row>
                <Col span={6}>
                <MessageList />
                </Col>
                <Col span={12}>
                <MessageMain />
                </Col>
                <Col span={6}>
                <MessageDetail />
                </Col>
            </Row>
        </div>
    )
}
