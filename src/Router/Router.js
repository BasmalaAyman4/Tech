import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import Login from "../Component/Login/Login"
import SignUp from '../Component/Sign-up/SignUp'
import SignupAdvisor from "../Component/Sign-upAdvisor/Advisor";
import Advisors from "../Component/Advisors/Advisors";
import Details from "./../Component/AdvisorsDetails/AdvisorsDetails"
import Home from "./../Global/Navbar/NavbarMenu"
import { AuthContext } from "./../Context/AuthContext";
export default function Router() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Routes>

        <Route path="/login" element={authContext.auth.email ? <Home /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-advisor" element={<SignupAdvisor />} />
        <Route path="/advisor" element={<Advisors />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  )
}