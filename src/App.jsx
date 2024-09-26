import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Live from './Live';  // A página principal será Live
import Corridas from './Corridas';
import './App.css'; // Importando o CSS
import './index.css'; // Aqui você pode adicionar algum estilo global, se precisar

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [corridas, setCorridas] = useState([]);

  // Função para lidar com o login
  const handleLogin = (email, password) => {
    console.log('Autenticado com:', email, password);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Fazendo o fetch do arquivo JSON apenas após a autenticação
      fetch('/data/corridas.json')
        .then((response) => response.json())
        .then((data) => setCorridas(data))
        .catch((error) => console.error("Erro ao carregar os dados das corridas:", error));
    }
  }, [isAuthenticated]);

  // Hook de navegação
  const navigate = useNavigate();

  const handleProximaPagina = () => {
    console.log("Ir para a próxima página");
    navigate('/corridas'); // Redireciona para a página de corridas
  };

  return (
    <div className="app-container">
      {isAuthenticated ? (
        <>
          <Header />  {/* Exibe o Header após o login */}
          <Routes>
            {/* A rota principal será Live */}
            <Route path="/" element={<Live />} />
            {/* Rota para a página de corridas */}
            <Route 
              path="/corridas" 
              element={
                <Corridas 
                  corridas={corridas} 
                  onProximaPagina={handleProximaPagina} 
                />
              } 
            />
          </Routes>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
