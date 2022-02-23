// import logo from './logo.svg';
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Connectwithme from './components/Connectwithme';


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Connectwithme /> */}
    </main>
  )
}