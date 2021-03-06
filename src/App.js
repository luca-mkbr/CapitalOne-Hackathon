import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Budget from './components/Budget';
import Rewards from './components/Rewards';
import Home from './components/Home';
import React, { useEffect } from "react";
import Login from './components/Login'
import { setCookie, getCookie } from "./components/Cookies";
import PickReward from './components/PickReward';

function App() {
  useEffect(() => {
    if (getCookie("necessitiesAmount") == null) {
      setCookie("necessitiesAmount", "870", 999)
    }

    if (getCookie("savingsAmount") == null) {
      setCookie("savingsAmount", "120", 999)
    }

    if (getCookie("discretionaryAmount") == null) {
      setCookie("discretionaryAmount", "350", 999)
    }

    if (getCookie("loanPayments") == null) {
      setCookie("loanPayments", "1500", 999)
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
          <Route path="/reward" element={<PickReward/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
