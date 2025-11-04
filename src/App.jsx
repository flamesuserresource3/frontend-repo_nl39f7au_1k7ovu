import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

const COLORS = {
  text: '#555555',
  textLight: '#777777',
  greyyellow: '#B0B596',
};

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm" style={{ color: COLORS.textLight }}>
            © {new Date().getFullYear()} Aegis SecOps. All rights reserved.
          </p>
          <div className="flex items-center gap-4" style={{ color: COLORS.text }}>
            <a href="#services" className="text-sm hover:opacity-70">Services</a>
            <a href="#about" className="text-sm hover:opacity-70">About</a>
            <a href="#contact" className="text-sm hover:opacity-70">Contact</a>
            <div className="h-6 w-6 rounded-sm" style={{ background: COLORS.greyyellow }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
