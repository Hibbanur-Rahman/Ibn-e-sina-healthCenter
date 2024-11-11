import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Register from "./views/register";
import Login from "./views/login";
function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
