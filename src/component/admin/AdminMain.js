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
            <div className='main-feature'>
                <div className='main-feature__item box' onClick={()=>side(5)}>
                    <img src='/assets/icon/group.png' width={69} />
                    <div style={{marginLeft:'5px'}}>
                        <b>Quản lý nhóm</b><br/>
                        <span>Xem thêm</span>
                    </div>
                </div>
                <div className='main-feature__item box' onClick={()=>side(6)}>
                    <img src='/assets/icon/carousel.png' width={69} />
                    <div style={{marginLeft:'5px'}}>
                        <b>Quản lý banner</b><br/>
                        <span>Xem thêm</span>
                    </div>
                </div>
                <div className='main-feature__item box' onClick={()=>side(7)}>
                    <img src='/assets/icon/mailbox.png' width={69} />
                    <div style={{marginLeft:'5px'}}>
                        <b>Góp ý</b><br/>
                        <span>Xem thêm</span>
                    </div>
                </div>
            </div>
            <div className='main-analyst'>
               <Row>
                   <Col className='box' span={17}>
                       <div className='analyst'>
                       <Statistic title="Tổng số sinh viên" value={7} />
                       <Statistic title="Sinh viên năm nay" value={7} />
                       </div>
                       <div className='analyst'>
                       <Statistic title="Tổng số tài liệu" value={7} />
                       <Statistic title="Hoạt động đang diễn ra" value={7} />
                       </div>
                   </Col>
                   <Col style={{marginLeft:'1vh'}} className='box' span={6}>
                       a
                   </Col>
               </Row>
            </div>
        </div>
    )
}
