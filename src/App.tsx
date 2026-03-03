import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BetProvider } from './context/BetContext';
import { Home } from './pages/Home';
import { Suggestion } from './pages/Suggestion';
import { History } from './pages/History';
import './App.css';

function App() {
  return (
    <BetProvider>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palpite" element={<Suggestion />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BetProvider>
  );
}

export default App;
