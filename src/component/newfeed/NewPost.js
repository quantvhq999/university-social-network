import { Avatar, Col, Input, Row, Modal, Button } from 'antd'
import React, { useRef, useState } from 'react'
import "../../../public/assets/icon/camera.png"
import { useSelector } from "react-redux";
import moment from 'moment';


export default function NewPost() {
    const { user } = useSelector(state => state.authReducer)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [file, setFile] = useState(null)
    const [imageUpload, setImageUpload] = useState(null)
    const [title, setTitle] = useState(null)
    const [loading, setLoading] = useState(false)
    const ref = useRef(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        console.log(imageUpload)
        console.log(title)
        setLoading(true)
    };

    const handleCancel = () => {
        setFile(null)
        setImageUpload(null)
        setIsModalVisible(false);
    };

    const handleClickUpload = () => {
        ref.current.click();
      };

    const handleFile = (e) =>{
        let reader = new FileReader();
        let files = e.target.files[0];
        reader.onloadend = () => {
            setFile(reader.result);
          }
          reader.readAsDataURL(files)
    }

    const handleTitle = (value) =>{
        setTitle(value)
    }
    return (
        <div className="new-post">
            <div className="new-post__container">
                <Row style={{ height: '100%' }}>
                    <Col span={4} style={{ marginTop: '21px' }}>
                        <Avatar size="large" style={{ cursor: 'pointer' }} src={user && user.avatar} />
                    </Col>
                    <Col span={20} style={{ marginTop: '21px' }}>
                        <Input placeholder="Bạn đang nghĩ gì?" readOnly onClick={() => showModal()} />
                    </Col>
                </Row>
            </div>
            <Row className="btn_container">
                <Col span={24}>
                    <div className="post_btn" onClick={() => showModal()}>
                        <img src='/assets/icon/camera.png' />
                        <span>Bài viết</span>
                    </div>
                </Col>
            </Row>
            <Modal title="Thêm bài viết" visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={() => handleCancel()}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={() => handleOk()}>
                        Đăng
                    </Button>,
                ]}
            >
                <Input placeholder="Nội dung bài viết" onChange={(e)=> handleTitle(e.target.value)}/>
                <input ref={ref} type={"file"} hidden accept="image/*" onChange={e =>handleFile(e)}/>
                {file !== null? <div className='newpost-image'>
                    <img src={file} />
                </div>:<></>}
                <a className='btn-primary' onClick={()=>handleClickUpload()}>{file?'Chọn ảnh khác': 'Chọn ảnh'}</a>
            </Modal>
        </div>
    )
}
