import React from 'react'
import { Avatar } from 'antd'
export default function Item(props) {
    return (
        <div className="menu__item">
            <Avatar src={props.url} shape={props.type} />
            <span>{props.title}</span>
        </div>
    )
}
