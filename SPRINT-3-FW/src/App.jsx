import React, { useState } from 'react';
import Login from './Login'; // Importando o componente Login

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Exemplo de lógica de login (pode ser substituído por uma autenticação real)
    console.log('Autenticado com:', email, password);
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <h1>Bem-vindo ao aplicativo!</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
