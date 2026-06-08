import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import PaginaProduto from './pages/PaginaProduto';
import Header from './components/Header';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';
import './assets/css/styles.css';

function App() {
  const basename = process.env.PUBLIC_URL || '/';
  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isSearching = new URLSearchParams(location.search).has('search');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(prev => {
        if (!prev && y > 90) return true;   // hide banner only after scrolling 90px down
        if (prev && y < 30) return false;   // show banner again only when nearly at top
        return prev;                         // no change in the dead zone → no flicker
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      <Header scrolled={scrolled} />
      {!isSearching && <TopBanner hidden={scrolled} />}
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/produto/:id" element={<PaginaProduto />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;