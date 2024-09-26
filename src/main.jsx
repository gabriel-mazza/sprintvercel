import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Certifique-se de que o caminho está correto
import './index.css'; // Estilos globais

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
