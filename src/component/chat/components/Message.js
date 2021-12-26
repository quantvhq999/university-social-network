import React from 'react'

export default function Message(props) {
    const { own } = props
    return (
        <div className={`message-text${own? '-own': ''}`}>
            <span></span>
            <p>ádasdddddddddddddddddddddddddddddddsd</p>
        </div>
    )
}
