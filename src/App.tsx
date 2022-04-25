import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Layout from "./components/layout";
import ContentHome from "./components/home";
import ContentConfess from "./components/confess";
import ContentMisdemeanours from "./components/misdemeanours";
import ContentNoPage from "./components/nopage";

import Navbar from './NavMenu/Navbar';
import logoSVG from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      {
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<Navbar />}>
              <Route index element={<ContentHome />} />
              <Route path="/Confess" element={<ContentConfess />} />
              <Route path="/Misdemeanours" element={<ContentMisdemeanours />} />
              <Route path="*" element={<ContentNoPage />} />
          </Route>
          </Routes>
          </BrowserRouter>                    
      }
      <footer>
        <div><img src={logoSVG} alt="logo techreturners" width="25" height="25"/></div>
        <div><label></label></div>
        <div><label>Tech Returners</label></div>
      </footer>
    </div> 
    </>
  );
}

export default App;
