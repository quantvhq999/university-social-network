import React from 'react'
import Head from 'next/head'
import MenuTop from '../component/header/menu/MenuTop'
import Confidential from './confidential/Confidential'

export default function confidential() {
    return (
        <div>
            <Head>
                <title>Tâm sự tuổi hồng</title>
            </Head>
            <Confidential />
        </div>
    )
}
