import { Row } from 'antd'
import React from 'react'
import DocumentItem from './DocumentItem'

export default function DocumentsAll() {
    return (
        <div className='documents-all box'>
            <h3 className='title'>Tài liệu</h3>
            <Row>
                <DocumentItem name='Học HTML từ cơ bản đến nâng cao' link={1}/>
                <DocumentItem name='Lịch sử đảng' link={1}/>
                <DocumentItem name='Khoa học máy tính' link={2}/>
                <DocumentItem name='Giải tích hàm một biến' link={2}/>
                <DocumentItem name='Giải tích hàm nhiều biến' link={2}/>
                <DocumentItem name='Toán rời rạc' link={2}/>
                <DocumentItem name='Xác suất thống kê' link={2}/>
                <DocumentItem name='Mẫu đồ án tốt nghiệp' link={2}/>
                <DocumentItem name='Đề cương đồ án' link={2}/>
                
            </Row>
        </div>
    )
}
