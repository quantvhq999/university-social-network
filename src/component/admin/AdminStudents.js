import React from 'react'
import { Button, Input, Table } from 'antd';
import { Select } from 'antd';
import { PlusOutlined, FileAddFilled } from '@ant-design/icons';

const { Option } = Select;
const { Search } = Input;
const columns = [
    {
        title: 'STT',
        width: 100,
        dataIndex: 'key',
        key: 'name',
    },
    {
        title: 'Họ và tên',
        width: 100,
        dataIndex: 'name',
        key: 'age',
    },
    {
        title: 'Giới tính',
        dataIndex: 'address',
        key: '1',
        width: 150,
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'address',
        key: '2',
        width: 150,
    },
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: '3',
        width: 150,
    },
    {
        title: 'Khóa',
        dataIndex: 'address',
        key: '4',
        width: 150,
    },
    {
        title: 'Lớp',
        dataIndex: 'address',
        key: '5',
        width: 150,
    },
    {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150,
    },
    {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
        title: 'Thao tác',
        key: 'operation',
        fixed: 'right',
        width:150,
        render: () => <div style={{display:'flex'}}>
            <Button type='primary'>Chi tiết</Button>
            <Button type='danger'>Xóa</Button>
        </div>,
    },
];

const data = [];
for (let i = 1; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

export default function AdminStudents() {
    return (
        <div className='admin-students'>
            <div className='admin-head box'>
                <Search placeholder="input search text" />
                <Select defaultValue="Chọn theo lớp">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Select style={{ marginRight: '1vh' }} defaultValue="Chọn theo khóa">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Button style={{ marginRight: '1vh' }} type='primary' icon={<PlusOutlined />}>Thêm mới</Button>
                <Button style={{ marginRight: '1vh', backgroundColor: 'seagreen', color: 'white' }} icon={<FileAddFilled />}>Thêm từ file</Button>
            </div>
            <div className='admin-table box'>
                <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 469 }} />,
            </div>
        </div>
    )
}
