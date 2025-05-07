import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // Import the Navbar component
import Aboutme from './Components/Aboutme';
import Portfolio from './Components/Portfolio';
import PortfolioCard from './Components/PortfolioCards';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <Aboutme /> {/* Render the Aboutme component */}
      <Portfolio /> {/* Render the Portfolio component */}
      <Contact /> {/* Render the Contact component */}
      <Resume /> {/* Render the Resume component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
}



export default App;