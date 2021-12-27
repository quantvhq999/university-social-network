import React from 'react'

export default function Message(props) {
    const { own, message } = props
    return (
        <div className={`message-text${own? '-own': ''}`}>
            <span></span>
            <p>{message && message.text}</p>
        </div>
    )
}
