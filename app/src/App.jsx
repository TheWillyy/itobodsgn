import { useState, useEffect } from 'react'
import {Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Home from './assets/Pages/Home'
import Navbar from './assets/Components/Navbar'
import Dump from './assets/Pages/Dump'
import NotFound from './assets/Pages/NotFound';
// import CaseStudy from './assets/Pages/CaseStudies/CaseStudy'
import InDriver from './assets/Pages/CaseStudies/InDriver'
import Bookateria from './assets/Pages/CaseStudies/Bookateria'
import SpicedUp from './assets/Pages/CaseStudies/SpicedUp'
import HuntBot from './assets/Pages/CaseStudies/0xHuntBot'
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
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Home/>} key="home"/>
          <Route path="/dump" element={<Dump/>} key="dump"/>
          <Route path="/casestudies/InDriver" element={<InDriver/>} key="cs1"/>
          <Route path="/casestudies/Bookateria" element={<Bookateria/>} key="cs1"/>
          <Route path="/casestudies/SpicedUp" element={<SpicedUp/>} key="cs1"/>
          <Route path="/casestudies/0xHuntBot" element={<HuntBot/>} key="cs1"/>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
