import React from 'react'

export default function DocumentItem(props) {
    return (
        <a className='document-item' target="_blank" href={'chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/file:///D:/[Apress]%20-%20Pro%20HTML5%20Programming%20-%20[Lubbers,%20Albers].pdf'} rel="noopener noreferrer">
            <div className="icon">
            <img src={'/assets/icon/pdf.png'}/>
            </div>
            <p>{props.name}</p>
        </a>
    )
}
