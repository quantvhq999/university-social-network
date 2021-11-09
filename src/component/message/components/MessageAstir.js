import React from 'react'
import { Avatar } from 'antd'

export default function MessageAstir(props) {
    return (
        <div className="item">
            <Avatar size="large" style={{ cursor: 'pointer', marginRight: '1vh' }} src={props.avatar} />
            {props.message}
        </div>
    )
}
