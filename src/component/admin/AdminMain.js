import { Row, Col, Statistic } from 'antd'
import React from 'react'

export default function AdminMain(props) {
    const {side} = props
    return (
        <div className='admin-main'>
            <div className='main-feature'>
                <div className='main-feature__item box' onClick={()=>side(2)}>
                    <img src='/assets/icon/student.png' width={69} />
                    <div style={{marginLeft:'5px'}}>
                        <b>Quản lý sinh viên</b><br/>
                        <span>Xem thêm</span>
                    </div>
                </div>
                <div className='main-feature__item box' onClick={()=>side(3)}>
                    <img src='/assets/icon/lifestyle2.png' width={69} />
                    <div style={{marginLeft:'5px'}}>
                        <b>Quản lý hoạt động</b><br/>
                        <span>Xem thêm</span>
                    </div>
                </div>
                <div className='main-feature__item box' onClick={()=>side(4)}>
                    <img src='/assets/icon/book2.png' width={69} />
                    <div style={{marginLeft:'5px'}}>
                        <b>Quản lý thư viện</b><br/>
                        <span>Xem thêm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
