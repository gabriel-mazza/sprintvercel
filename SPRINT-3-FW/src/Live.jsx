import React from 'react';
import './Live.css'; // Estilos podem ser adaptados no CSS


const Live = () => {
  return (
    <main className="main-content">
      <section className="intro-section">
        <h1>Formula-E</h1>
        <p className="description">
          A Fórmula E é uma categoria de automobilismo muito especial, pois reúne a emoção das corridas com a tecnologia do futuro.
        </p>
      </section>

      <div className="content-layout">
        <div className="video-placeholder"></div>
        <div className="chat-section">
          <div className="chat-placeholder"></div>
          <div className="chat-footer">
            <input type="text" placeholder="Envie umamensagem" className="message-input" />
            <div className="viewer-count">👥 10 mil</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Live;
