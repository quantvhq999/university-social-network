import { CameraOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

export default function Avatar() {
    return (
        <div className='avatar-container circle'>
            <img src="https://res.cloudinary.com/tlus-image/image/upload/v1638099764/3_hnwghk.jpg"/>
            <Button className="btn-add" size="large" shape="circle" icon={<CameraOutlined/>}/>
        </div>
    )
}
