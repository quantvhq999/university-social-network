import React from 'react'
import { Avatar } from 'antd'
import { useRouter } from 'next/dist/client/router'
export default function Item(props) {
    const router = useRouter()
    return (
            <div className="menu__item" onClick={()=> {
                props.to === false ? 
                '':router.push(`/${props.to}`)
            }}>
                {props.url && <Avatar src={props.url} shape={props.type} />}
                <span>{props.title}</span>
            </div>
    )
}
