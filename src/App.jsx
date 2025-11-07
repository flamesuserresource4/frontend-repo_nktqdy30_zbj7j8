import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Craftsmanship from './components/Craftsmanship';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#212121]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collection />
        <Craftsmanship />
      </main>
      <Footer />
    </div>
  );
}

export default App;
