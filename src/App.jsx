import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
