import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Team from './components/Team';
import Values from './components/Values';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Team />
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;