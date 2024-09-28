import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleCorridasClick = () => {
    navigate('/corridas');
  };

  const handleLiveClick = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <img src="../public/imagens/logo-Branco.png" alt="Logo" className="Logo" />
      <nav className="navbar">
        <a onClick={handleLiveClick} style={{ cursor: 'pointer' }}>Ao Vivo</a>
        <a onClick={handleCorridasClick} style={{ cursor: 'pointer' }}>+Corridas</a>
        <a href="#community">Comunidade</a>
        <a href="#statistics">Estatísticas</a>
        <a href="#more">Mais</a>
      </nav>
      <button className="subscribe-button">+ Inscrever-se</button>
    </header>
  );
};

export default Header;
