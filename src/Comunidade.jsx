import React, { useState, useEffect } from 'react';
import './Comunidade.css';
import mensagensData from '../public/data/mensagensData.json'; 

const gruposExemplo = [
  { id: 1, nome: 'Corridas F1' },
  { id: 2, nome: 'Amigos da Velocidade' },
  { id: 3, nome: 'Campeonatos Regionais' }
];

const Comunidade = () => {
  const [grupoSelecionado, setGrupoSelecionado] = useState(null);
  const [mensagens, setMensagens] = useState({});
  const [novaMensagem, setNovaMensagem] = useState("");

  useEffect(() => {
    setMensagens(mensagensData); 
  }, []);

  const handleGrupoClick = (grupoId) => {
    setGrupoSelecionado(grupoId);
  };

  const handleInputChange = (event) => {
    setNovaMensagem(event.target.value);
  };

  const handleEnviarMensagem = () => {
    if (novaMensagem.trim() !== "") {
      const novaMsg = { remetente: 'Você', conteudo: novaMensagem };

      const mensagensAtualizadas = {
        ...mensagens,
        [grupoSelecionado]: [...(mensagens[grupoSelecionado] || []), novaMsg]
      };
      setMensagens(mensagensAtualizadas);

      setNovaMensagem("");
    }
  };

  return (
    <div className="comunidade-container">
      <div className="grupos">
        {gruposExemplo.map((grupo) => (
          <button key={grupo.id} onClick={() => handleGrupoClick(grupo.id)}>
            {grupo.nome}
          </button>
        ))}
      </div>
      <div className="conversa">
        {grupoSelecionado ? (
          <>
            <div className="conversa-header">
              <h3>Grupo {gruposExemplo.find(grupo => grupo.id === grupoSelecionado)?.nome}</h3>
            </div>
            <div className="mensagens">
              {mensagens[grupoSelecionado]?.map((mensagem, index) => (
                <div key={index} className="mensagem">
                  <strong>{mensagem.remetente}:</strong> {mensagem.conteudo}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={novaMensagem}
                onChange={handleInputChange}
                placeholder="Digite sua mensagem..."
              />
              <button onClick={handleEnviarMensagem}>Enviar</button>
            </div>
          </>
        ) : (
          <p>Selecione um grupo para ver as mensagens.</p>
        )}
      </div>
    </div>
  );
};

export default Comunidade;
