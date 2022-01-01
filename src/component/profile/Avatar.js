import { CameraOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ModalImageUpdate from './components/ModalImageUpdate';

export default function Avatar(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {user} = props
  const showModal = () => {
      setIsModalVisible(true);
  };
    return (
        <div className='avatar-container circle'>
            <img src={user && user.avatar}/>
            <Button onClick={showModal} className="btn-add" size="large" shape="circle" icon={<CameraOutlined/>}/>
            <ModalImageUpdate show={isModalVisible} setShow={setIsModalVisible} title={'Cập nhật ảnh cá nhân'}/>
        </div>
    )
}
