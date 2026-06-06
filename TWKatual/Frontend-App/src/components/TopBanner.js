import React from 'react';

const TopBanner = ({ hidden }) => {
  const content = (
    <div className="marquee-group">
      <span>AS PEÇAS MAIS BARATAS DA CENA! ●</span>
      <span>ENVIOS RÁPIDOS PARA TODO BRASIL ●</span>
      <span>AS PEÇAS MAIS BARATAS DA CENA! ●</span>
      <span>ENVIOS RÁPIDOS PARA TODO BRASIL ●</span>
      <span>AS PEÇAS MAIS BARATAS DA CENA! ●</span>
      <span>ENVIOS RÁPIDOS PARA TODO BRASIL ●</span>
      <span>ENVIOS RÁPIDOS PARA TODO BRASIL ●</span>
      <span>AS PEÇAS MAIS BARATAS DA CENA! ●</span>
      <span>ENVIOS RÁPIDOS PARA TODO BRASIL ●</span>
    </div>
  );

  return (
    <div className="top-banner" style={{ display: hidden ? 'none' : 'flex' }}>
      <div className="marquee-content">
        {content}
        {content}
      </div>
    </div>
  );
};

export default TopBanner;
