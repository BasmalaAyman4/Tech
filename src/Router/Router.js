import { redirect, Route, Routes } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Login from "../Component/Login/Login"
import SignUp from '../Component/Sign-up/SignUp'
import SignupAdvisor from "../Component/Sign-upAdvisor/Advisor";
import Advisors from "../Component/Advisors/Advisors";
import Details from "./../Component/AdvisorsDetails/AdvisorsDetails"
import Home from "../Component/pages/Home";
import ChatWithEng from "../Component/ChatWithEng/ChatWithEng";

export default function Router() {
  
  const token = localStorage.getItem("token")
 
  return (
    <>
      <Routes>

        <Route path="/login" element={token ? <Home /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-advisor" element={<SignupAdvisor />} />
        <Route path="/advisor" element={<Advisors />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/chatwithEng" element={<ChatWithEng />} />
      </Routes>
    </>
  )
}