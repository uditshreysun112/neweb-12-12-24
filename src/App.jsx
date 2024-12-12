import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Team } from './Team';
import { Header } from './Header';
import { Footer } from './Footer';
import { Testimonial } from './Testimonial';
import { Faq } from './Faq';
import { Projects } from './Projects';
import { Services } from './Services';
import { News } from './News';
import { Contact } from './Contact';



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App

