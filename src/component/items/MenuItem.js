import React from 'react'
import Item from './Item'
import Link from "next/link";
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';

export default function MenuItem() {
    const {user} = useSelector(state => state.authReducer)
    return (
        <div className="menu">
            <Item url={'https://joeschmoe.io/api/v1/random'} title={user? (user.last_name +" "+user.first_name) : ""} type={''} />
            <Item url={'/assets/icon/friends.png'} title={'Bạn bè'} type={'square'} />
            <Item url={'/assets/icon/group.png'} title={'Nhóm'} />
            <Item url={'/assets/icon/file.png'} title={'Thư viện tài liệu'} type={'square'} />
            <Link href={"/confidential"}>
                <div className="menu__item">
                    <Avatar src={'/assets/icon/chat.png'} shape={'square'} />
                    <span>{'Tâm sự tuổi hồng'}</span>
                </div>
            </Link>
            <Item url={'/assets/icon/mailbox.png'} title={'Hộp thư góp ý'} type={'square'} />
            <Item url={'/assets/icon/sun.png'} title={'Thời tiết'} type={'square'} />
        </div>
    )
}
