import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from 'next/head'
import LayoutHome from "../component/layout/LayoutHome";
import HomePage from "./hompages/homepage";
import MenuTop from "../component/header/menu/MenuTop";
export default function Home() {
  const router = useRouter()
  const [userLogged, setUserLogged] = useState(<LayoutHome/>)
  const { isLoggedIn } = useSelector(state => state.authReducer)
  useEffect(() => {
    if(isLoggedIn){
        setUserLogged(<HomePage/>)
    }else{
        setUserLogged(<LayoutHome/>)
    }
  }, [isLoggedIn])
  return (
    <div>
      <Head>
        <title>TLS</title>
        <meta name="Mạng xã hội sinh viên" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>{userLogged}</div>
    </div>
  )
}
