import React from 'react'

export default function AdminSideBar(props) {
    const {side} = props
    return (
        <div className='admin-sidebar'>
            <div className='admin-sidebar__header box'>
                <img src='/assets/image/logo.png' width={90}/>
            </div>
            <div className='admin-sidebar__body box'>
                <ul>
                    <li onClick={()=>side(1)}>Trang chính</li>
                    <li onClick={()=>side(2)}>Quản lý sinh viên</li>
                    <li onClick={()=>side(3)}>Quản lý hoạt động</li>
                    <li onClick={()=>side(4)}>Quản lý thư viện</li>
                    <li onClick={()=>side(5)}>Quản lý nhóm</li>
                    <li onClick={()=>side(6)}>Quản lý banner</li>
                    <li onClick={()=>side(7)}>Góp ý</li>
                </ul>
            </div>
        </div>
    )
}
