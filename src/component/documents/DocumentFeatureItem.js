import React, { useState } from 'react'

export default function DocumentFeatureItem(props) {
    
    return (
        <div className="feature-items">
            <span className='round'></span>
            <img src={props.icon}/>
            <p>{props.text}</p>
        </div>
    )
}
