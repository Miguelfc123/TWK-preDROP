import React from 'react';
import MixMatch from '../components/MixMatch';
import headerBg from '../assets/images/header.png';

function PaginaInicial() {
  return (
    <div className="page-home">
      <main className="main-content">
        {/* Seção Hero/Banner */}
        <section className="hero-banner" style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${headerBg}) center 40% / cover no-repeat`,
          padding: '160px 40px',
          borderRadius: '12px',
          marginBottom: '60px',
          textAlign: 'center',
          border: '1px solid #333'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '900',
            marginBottom: '15px',
            letterSpacing: '3px'
          }}>BEM-VINDO À TWK</h1>
          <p style={{
            fontSize: '16px',
            color: '#aaa',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px',
            lineHeight: '1.8'
          }}>
            Fique ligado! O site será lançado oficialmente junto do nosso drop no dia 7. Enquanto isso, aproveite o nosso provador virtual abaixo para montar seu look com os previews!
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '12px 40px',
              background: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: '30px',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '14px',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }} onClick={() => document.getElementById('mix-match-section')?.scrollIntoView({ behavior: 'smooth' })} onMouseEnter={(e) => e.target.style.background = '#eee'} onMouseLeave={(e) => e.target.style.background = '#fff'}>
              MONTAR MEU KIT
            </button>
            <button style={{
              padding: '12px 40px',
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              borderRadius: '30px',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '14px',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }} onClick={() => window.open('https://www.instagram.com/twk.club/', '_blank')} onMouseEnter={(e) => { e.target.style.background = '#fff'; e.target.style.color = '#000'; }} onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#fff'; }}>
              NOSSO INSTAGRAM
            </button>
          </div>
        </section>

        {/* Seção Mix & Match */}
        <section id="mix-match-section" className="mix-match-section" style={{ marginTop: '40px' }}>
          <MixMatch />
        </section>
      </main>
    </div>
  );
}

export default PaginaInicial;
