import React, { useState } from 'react';
import LandingPage from "./pages/LandingPage";
import UrlShortener from './pages/UrlShortener';

function App() {
  const [landingPage, setLandingPage] = useState(true);

  const router = (bool: boolean) => {
    setLandingPage(bool)
  }

  const renderPage = () => {
    if(landingPage) {
      return(
        <LandingPage router = {router}/>
      )
    } else {
      return(
        <UrlShortener/>
      )
    }
  }
  return (
    renderPage()
  );
}

export default App;
