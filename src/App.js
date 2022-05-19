import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Budget from './components/Budget';
import AddBudget from './components/AddBudget';
import Rewards from './components/Rewards';
import Home from './components/Home';
import React, { useState, useEffect } from "react";
import Login from './components/Login'
import ReactDOM from "react-dom";


function App() {
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
