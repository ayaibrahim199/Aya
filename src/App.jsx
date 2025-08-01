import React from 'react';
import './styles/global.css';  // Make sure this path is correct

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
