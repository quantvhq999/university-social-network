import React from 'react'
import Head from 'next/head'
import DocumentsHeader from '../component/documents/DocumentsHeader'
import DocumentFilter from '../component/documents/DocumentFilter'
import DocumentsRecent from '../component/documents/DocumentsRecent'
import DocumentsAll from '../component/documents/DocumentsAll'

export default function documents() {
    return (
        <div>
            <Head>
                <title>Thư viện tài liệu | TLS</title>
            </Head>
            <div className="documents-container">
                <h2 style={{ textAlign: "center" }} className="title">
                    Thư viện tài liệu
                </h2>
                <DocumentsHeader />
                <DocumentFilter />
                {/* <DocumentsRecent /> */}
                <DocumentsAll />
            </div>
        </div>
    )
}
