import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UrlShortener from './pages/UrlShortener';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<UrlShortener/>}/>
      </Routes>
    </Router>
  );
}

export default App;
