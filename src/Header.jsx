import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './Header.css'; // Estilos podem ser adaptados no CSS

const Header = () => {
  const navigate = useNavigate(); // Criar a função de navegação

  const handleCorridasClick = () => {
    navigate('/corridas'); // Navega para a página de corridas
  };

  const handleLiveClick = () => {
    navigate('/'); // Navega de volta para a página Live
  };

  return (
    <header className="header">
      <img src="../public/imagens/logo-Branco.png" alt="Logo" className="Logo" />
      <nav className="navbar">
        <a onClick={handleLiveClick} style={{ cursor: 'pointer' }}>Ao Vivo</a> {/* Atualizado para usar navigate */}
        <a onClick={handleCorridasClick} style={{ cursor: 'pointer' }}>+Corridas</a> {/* Modifiquei para usar navigate */}
        <a href="#community">Comunidade</a>
        <a href="#statistics">Estatísticas</a>
        <a href="#more">Mais</a>
      </nav>
      <button className="subscribe-button">+ Inscrever-se</button>
    </header>
  );
};

export default Header;
