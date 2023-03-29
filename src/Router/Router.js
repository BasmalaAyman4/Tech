import { Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
<<<<<<< HEAD
import Login from "../Component/Login/Login"
import SignUp from '../Component/Sign-up/SignUp'
import SignupAdvisor from "../Component/Sign-upAdvisor/Advisor";
import Advisors from "../Component/Advisors/Advisors";
import Details from "./../Component/AdvisorsDetails/AdvisorsDetails"
import Home from "./../Global/Navbar/NavbarMenu"
import { AuthContext } from "./../Context/AuthContext";
=======
import Home from "../Pages/Home";
import Login from "../Components/Login/Login"
import SignUp from './../Components/Sign-up/SignUp'
import Forget from './../Components/Forget/Forget'
import { AuthContext } from "../Components/Context/AuthContext";
import Projects from "../Pages/Projects";
import CardDetails from './../Components/ProjectsDetails/ProjectsDetails'
import AskForVoluntary from "../Components/AskForVoluntary/AskForVoluntary";
import CharitySignUp from "../Components/CharitySignUp/CharitySignUp";
import Events from "../Pages/Events";
>>>>>>> a9ac2e75672a78262145c338d078c1d70106e5a2
export default function Router() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <Routes>
<<<<<<< HEAD

        <Route path="/login" element={authContext.auth.email ? <Home /> : <Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-advisor" element={<SignupAdvisor />} />
        <Route path="/advisor" element={<Advisors />} />
        <Route path="/details" element={<Details />} />
=======
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={authContext.auth.email ? <Home /> : <Login />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/charitySign-up" element={<CharitySignUp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/card-details" element={<CardDetails />} />
        <Route path="/askForVoluntary" element={<AskForVoluntary />} />
        <Route path="/event" element={<Events />} />
>>>>>>> a9ac2e75672a78262145c338d078c1d70106e5a2
      </Routes>
    </>
  )
}