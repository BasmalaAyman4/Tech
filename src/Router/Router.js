import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../Component/Login/Login"
import SignUp from '../Component/Sign-up/SignUp'
import Advisor from "../Component/Sign-upAdvisor/Advisor";
export default function Router() {
  return (
    <>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/advisor" element={<Advisor />} />
      </Routes>
    </>
  )
}