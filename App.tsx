
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-12 bg-white">
          <AboutUs />
        </section>
        
        <section id="services" className="py-12 bg-surface">
          <Services />
        </section>
        
        <section id="signup" className="py-12 bg-white">
          <SignUp />
        </section>
        
        <section id="contact" className="py-12 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
