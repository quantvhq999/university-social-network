import { CameraOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ModalImageUpdate from './components/ModalImageUpdate';

export default function Avatar(props) {
    const {user} = props
    const [isModalVisible, setIsModalVisible] = useState(false);
    const userCurrent = useSelector(state => state.authReducer.user)
  const [cover, setCover] = useState(null)
  const showModal = () => {
      setIsModalVisible(true);
  };
  useEffect(() => {
    setCover(userCurrent)
  }, [userCurrent])
    return (
        <div className='avatar-container circle'>
            <img src={user && user.avatar}/>
            {userCurrent?.mssv === user?.mssv ?<Button onClick={showModal} className="btn-add" size="large" shape="circle" icon={<CameraOutlined/>}/>:<></>}
            {userCurrent?.mssv === user?.mssv ?<ModalImageUpdate show={isModalVisible} setShow={setIsModalVisible} title={'Cập nhật ảnh cá nhân'} type={'avatar'}/>:<></>}
        
            
        </div>
    )
}
