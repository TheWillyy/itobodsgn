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
import { Analytics } from '@vercel/analytics/react';
import MyPortfolio from './assets/Pages/CaseStudies/MyPortfolio';
import WorkoutTracker from './assets/Pages/CaseStudies/WorkoutTracker';
import APIConf from './assets/Pages/CaseStudies/APIConf';
import SeamlessUSSD from './assets/Pages/CaseStudies/SeamlessUSSD';
import KYCDashboard from './assets/Pages/CaseStudies/KYC Dashboard';
import PocketPay from './assets/Pages/CaseStudies/PocketPay';
import Coducate from './assets/Pages/CaseStudies/Coducate';

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
          <Route path="/work/InDriver" element={<InDriver/>} key="cs1"/>
          <Route path="/work/Bookateria" element={<Bookateria/>} key="cs1"/>
          <Route path="/work/SpicedUp" element={<SpicedUp/>} key="cs1"/>
          <Route path="/work/0xHuntBot" element={<HuntBot/>} key="cs1"/>
          <Route path="/work/WorkoutTracker" element={<WorkoutTracker/>} key="cs1"/>
          <Route path="/work/Itobodotxyz" element={<MyPortfolio/>} key="cs1"/>
          <Route path="/work/APIConf2024" element={<APIConf/>} key="cs1"/>
          <Route path="/work/SeamlessUSSD" element={<SeamlessUSSD/>} key="cs1"/>
          <Route path="/work/KYCDashboard" element={<KYCDashboard/>} key="cs1"/>
          <Route path="/work/PocketPay" element={<PocketPay/>} key="cs1"/>
          <Route path="/work/Coducate" element={<Coducate/>} key="cs1"/>
          
        </Routes>
        <Analytics/>
      </AnimatePresence>
    </>
  )
}

export default App
