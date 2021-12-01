import React from 'react'

export default function IconText(props) {
    const {icon, text, color} = props
    return (
        <div className="icon-text">
            <img src={icon}/>
            <span style={{color: color}}>{text}</span>
        </div>
    )
}
