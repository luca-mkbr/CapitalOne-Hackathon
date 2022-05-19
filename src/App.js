import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Budget from './components/Budget';
import Rewards from './components/Rewards';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/"></Route>
          <Route path="/budget" element={<Budget/>}></Route>
          <Route path="/rewards" element={<Rewards/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
