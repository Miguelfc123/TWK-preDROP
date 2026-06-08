import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Enable debug layout overlay when ?debug=true is present in URL
const enableDebug = new URLSearchParams(window.location.search).has('debug');
// duplicate import removed

const Header = ({ scrolled }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (enableDebug) {
      const logRect = (el, name) => {
        const rect = el.getBoundingClientRect();
        console.log(`${name}: width=${rect.width.toFixed(0)}px, height=${rect.height.toFixed(0)}px, top=${rect.top.toFixed(0)}px, left=${rect.left.toFixed(0)}px`);
        el.style.outline = '2px dashed #ff00ff';
      };
      const headerEl = document.querySelector('.header');
      const leftEl = document.querySelector('.header-left');
      const logoEl = document.querySelector('.logo-center');
      const actionsEl = document.querySelector('.header-actions');
      const navEl = document.querySelector('.main-nav-centered');
      if (headerEl) logRect(headerEl, 'Header');
      if (leftEl) logRect(leftEl, 'Header Left');
      if (logoEl) logRect(logoEl, 'Logo Center');
      if (actionsEl) logRect(actionsEl, 'Header Actions');
      if (navEl) logRect(navEl, 'Main Nav');
    }
  }, []);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Se limpar a barra, volta ao normal imediatamente
    if (value === '') {
      navigate('/');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-top-row">
        <div className="header-left">
          {/* Left side actions (optional) */}
        </div>

        <div className="logo-center">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logo.transp.png" 
              alt="FIOTI Logo" 
              className="logo-img"
            />
          </Link>
        </div>
        
        <div className="header-actions">
          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="O que você está buscando?" 
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" className="search-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </form>
          <button className="cart-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>

      <nav className="main-nav-centered">
        <ul>
          <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>HOME</Link></li>
          <li><a href="https://www.instagram.com/twk.club/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
