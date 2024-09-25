import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Live from './Live';  // A página principal será Live
import './App.css'; // Importando o CSS

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Exemplo de lógica de login (pode ser substituído por uma autenticação real)
    console.log('Autenticado com:', email, password);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated ? (
          <>
            <Header />  {/* Exibe o Header após o login */}
            <Routes>
              {/* A rota principal será Live */}
              <Route path="/" element={<Live />} />
            </Routes>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
