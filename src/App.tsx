import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';
import { Privacy } from './sections/Privacy';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Services />
        <Contact />
        <About />
        <Privacy />
      </main>
      <Footer />
    </div>
  );
}
