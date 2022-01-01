import { Row } from 'antd'
import React from 'react'
import DocumentItem from './DocumentItem'

export default function DocumentsAll() {
    return (
        <div className='documents-all box'>
            <h3 className='title'>Tài liệu</h3>
            <Row>
                <DocumentItem name='Lịch sử đảng'/>
                <DocumentItem name='Khoa học máy tính'/>
                <DocumentItem name='Giải tích hàm một biến'/>
                <DocumentItem name='Giải tích hàm nhiều biến'/>
                <DocumentItem name='Toán rời rạc'/>
                <DocumentItem name='Xác suất thống kê'/>
                <DocumentItem name='Lịch sử đảng'/>
                <DocumentItem name='Khoa học máy tính'/>
            </Row>
        </div>
    )
}
