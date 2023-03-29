import { Route, Routes } from "react-router-dom";
import React from "react";


import Home from "../Components/pages/Home";
export default function Router() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  )
}