import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Clients from "@/pages/Clients";
import Connect from "@/pages/Connect";
import HelenDillerProject from "@/pages/HelenDillerProject";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/projects/ucsf-helen-diller" element={<HelenDillerProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
