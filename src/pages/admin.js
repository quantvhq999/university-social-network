import React from 'react'
import Head from 'next/head'
import AdminAuth from '../component/admin/AdminAuth'
import AdminPage from '../component/admin/AdminPage'
            

export default function admin() {
    
    return (
        <div>
            <Head>
                <title>Admin | TLS</title>
            </Head>
            {/* <AdminAuth /> */}
            <AdminPage />
        </div>
    )
}
