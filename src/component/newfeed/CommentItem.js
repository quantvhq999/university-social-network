import { Avatar } from 'antd'
import React from 'react'

export default function CommentItem({user}) {
    return (
        <div className='comment-item'>
            <Avatar size="large"
            style={{ cursor: "pointer" }}
            src={'https://joeschmoe.io/api/v1/random'}
            />
            <div className='text box'>
                <b>Quan Truong</b><br/>
                <span>sadsdsadsads</span>
            </div>
            <span style={{marginLeft: '1vw'}}>8 giờ</span>
        </div>
    )
}
