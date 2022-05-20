import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Budget from './components/Budget';
import Rewards from './components/Rewards';
import Home from './components/Home';
import React, { useEffect } from "react";
import Login from './components/Login'
import { setCookie, getCookie } from "./components/Cookies";

function App() {
  useEffect(() => {
    if (getCookie("necessitiesAmount") == null) {
      setCookie("necessitiesAmount", "21", 999)
    }

    if (getCookie("savingsAmount") == null) {
      setCookie("savingsAmount", "69", 999)
    }

    if (getCookie("discretionaryAmount") == null) {
      setCookie("discretionaryAmount", "420", 999)
    }
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/budget" element={<Budget/>}></Route>
          <Route path="/rewards" element={<Rewards/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
