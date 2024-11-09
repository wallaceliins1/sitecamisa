import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCustomizer from './components/ProductCustomizer';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductCustomizer />
      <Features />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;