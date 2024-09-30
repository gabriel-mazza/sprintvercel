import React, { useState, useEffect } from 'react';
import estatisticasData from '../public/data/estatisticasData.json'; 
import './Estatisticas.css';

const Estatisticas = () => {
  const [pilotos, setPilotos] = useState([]);
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    setPilotos(estatisticasData.pilotos);
    setEquipes(estatisticasData.equipes);
  }, []);

  return (
    <div className="estatisticas-container">
    
    

      <h2>Pilotos</h2>
      <table className="estatisticas-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Equipe</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {pilotos.map((piloto, index) => (
            <tr key={index}>
              <td>{piloto.nome}</td>
              <td>{piloto.equipe}</td>
              <td>{piloto.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Equipes</h2>
      <table className="estatisticas-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Pontos</th>
          </tr>
        </thead>
        <tbody>
          {equipes.map((equipe, index) => (
            <tr key={index}>
              <td>{equipe.nome}</td>
              <td>{equipe.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estatisticas;
