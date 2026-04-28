import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import About from './components/About';
import Booking from './components/Booking';
import ContactForm from './components/ContactForm';
import ComingSoonBanner from './components/ComingSoonBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-noise overflow-x-hidden min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Philosophy />
        <HowItWorks />
        <Pricing />
        <About />
        <Booking />
        <ContactForm />
        <ComingSoonBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
