import React from 'react'
import Item from './Item'
export default function MenuItem() {
    return (
        <div className="menu">
            <Item url={'https://joeschmoe.io/api/v1/random'} title={'Trương Văn Hồng Quân'} type={''}/>
            <Item url={'/assets/icon/friends.png'} title={'Bạn bè'} type={'square'}/>
            <Item url={'/assets/icon/group.png'} title={'Nhóm'}/>
            <Item url={'/assets/icon/file.png'} title={'Thư viện tài liệu'} type={'square'}/>
            <Item url={'/assets/icon/chat.png'} title={'Tâm sự tuổi hồng'} type={'square'}/>
            <Item url={'/assets/icon/mailbox.png'} title={'Hộp thư góp ý'} type={'square'}/>
            <Item url={'/assets/icon/sun.png'} title={'Thời tiết'} type={'square'}/>
        </div>
    )
}
