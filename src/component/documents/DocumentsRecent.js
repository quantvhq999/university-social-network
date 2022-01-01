import { Row } from 'antd'
import React from 'react'
import DocumentItem from './DocumentItem'

export default function DocumentsRecent() {
    return (
        <div className='documents-recent box'>
            <h3 className='title'>Tài liệu đã xem</h3>
            <Row>
            <DocumentItem name={'Học html từ cơ bản đến nâng cao'}/>
            <DocumentItem name={'Học lập trình C#'}/>
            </Row>
        </div>
    )
}
