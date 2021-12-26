import React from 'react'
import DocumentFeatureItem from './DocumentFeatureItem'

export default function DocumentsHeader() {
    return (
        <div className="documents-header">
            <DocumentFeatureItem icon={'/assets/icon/book.png'} text={'Giáo trình'}/>
            <DocumentFeatureItem icon={'/assets/icon/paper.png'} text={'Tài liệu đọc thêm'}/>
            <DocumentFeatureItem icon={'/assets/icon/syllabus.png'} text={'Đề tài tham khảo'}/>
            <DocumentFeatureItem icon={'/assets/icon/text-format.png'} text={'Văn bản '}/>
        </div>
    )
}
