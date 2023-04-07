import {  Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "../Component/Login/Login"
import SignUp from '../Component/Sign-up/SignUp'
import SignupAdvisor from "../Component/Sign-upAdvisor/Advisor";
import Advisors from "../Component/Advisors/Advisors";
import Details from "./../Component/AdvisorsDetails/AdvisorsDetails"
import Home from "../Component/pages/Home";
import ChatWithEng from "../Component/ChatWithEng/ChatWithEng";
import ContactUs from "../Component/ContactUs/ContactUs";
import UserUpdate from "../Component/UserUpdate/UserUpdate";
import ProviderUpdate from "../Component/ProviderUpdate/ProviderUpdate";
import jwt_decode from "jwt-decode";
export default function Router() {
  // const token = localStorage.getItem("token")
  // const [userType,setUserType] = useState()
  // useEffect(()=>{
  //   if(token){
  //   const decoded = jwt_decode(token)
  //   console.log( decoded.user_type)
  //   decoded.user_type === 'user' ? setUserType('user') : setUserType('provider')
  //   }else return
   
  // },[token])
   
 


  return (
    <>
      <Routes>

        {/* <Route path="/login" element={token ? <Home /> : <Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-advisor" element={<SignupAdvisor />} />
        <Route path="/advisor" element={<Advisors />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/chatwithEng" element={<ChatWithEng />} />
        <Route path="/contactUs" element={<ContactUs />} />
        {/* <Route path="/user-update" element={userType === 'provider' ? <UserUpdate /> : <ProviderUpdate />} /> */}
        <Route path="/provider-update/:id" element={<ProviderUpdate />} />
        <Route path="/user-update/:id" element={<UserUpdate />} />
      </Routes>
    </>
  )
}