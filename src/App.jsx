import { useState, useEffect } from 'react'
import {Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Home from './assets/Pages/Home'
import Navbar from './assets/Components/Navbar'
import Dump from './assets/Pages/Dump'
import NotFound from './assets/Pages/NotFound';
import CaseStudy from './assets/Pages/CaseStudy'
import CaseStudy1 from './assets/Pages/CaseStudy1'
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
      <Navbar/>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} key="home"/>
          <Route path="/dump" element={<Dump/>} key="dump"/>
          <Route path="/casestudies/1" element={<CaseStudy1/>} key="cs1"/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
