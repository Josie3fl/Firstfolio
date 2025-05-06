import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'; // Import the Navbar component
import Aboutme from './Components/Aboutme';
import Portfolio from './Components/Portfolio';
import PortfolioCard from './Components/PortfolioCards';
import FlipCard from './Components/FlipCard'; // Ensure the file exists at this path
import Contact from './Components/Contact';
import Resume from './Components/Resume';

function App() {
  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <Aboutme /> {/* Render the Aboutme component */}
      <Portfolio /> {/* Render the Portfolio component */}
      <PortfolioCard 
        screenshot="src/assets/EMP-Racetrack.png" 
        githubLink="https://github.com/Josie3fl/EMP-Racetrack" 
      /> {/* Render the PortfolioCard component */}
      <FlipCard /> {/* Render the PCFlipCard component */}
      <Contact /> {/* Render the Contact component */}
      <Resume /> {/* Render the Resume component */}
    </>
  );
}

export default App;