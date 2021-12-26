import { CameraOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import ModalImageUpdate from './components/ModalImageUpdate';

export default function Avatar() {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
      setIsModalVisible(true);
  };
    return (
        <div className='avatar-container circle'>
            <img src="https://res.cloudinary.com/tlus-image/image/upload/v1638099764/3_hnwghk.jpg"/>
            <Button onClick={showModal} className="btn-add" size="large" shape="circle" icon={<CameraOutlined/>}/>
            <ModalImageUpdate show={isModalVisible} setShow={setIsModalVisible} title={'Cập nhật ảnh cá nhân'}/>
        </div>
    )
}
