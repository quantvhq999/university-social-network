import React from 'react'
import { Input, Select } from 'antd'
const { Search } = Input
const { Option } = Select

export default function DocumentFilter() {
    return (
        <div className="document-filter">
            <Search placeholder="Tìm tài liệu" allowClear style={{ width: '100%' }} />
            <Select placeholder='Lọc theo chuyên ngành' style={{ width: '100%' }}>
                <Option value="-1">Tất cả</Option>
                <Option value="jack">Công nghệ thông tin</Option>
                <Option value="lucy">Kế Toán</Option>
            </Select>
        </div>
    )
}
