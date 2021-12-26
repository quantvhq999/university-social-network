import { Row } from 'antd'
import React from 'react'
import DocumentItem from './DocumentItem'

export default function DocumentsRecent() {
    return (
        <div className='documents-recent box'>
            <h3 className='title'>Tài liệu đã xem</h3>
            <Row>
            <DocumentItem name={'Học html từ cơ bản đến nâng cao'}/>
            <DocumentItem name={'Học html từ nâng cao đến cơ bản'}/>
            <DocumentItem name={'Học html từ trên xuống dưới'}/>
            <DocumentItem name={'Học html từ trái sang phải'}/>
            <DocumentItem name={'Học html từ trong ra ngoài'}/>
            <DocumentItem name={'Học html từ ngang sang dọc'}/>
            </Row>
        </div>
    )
}
