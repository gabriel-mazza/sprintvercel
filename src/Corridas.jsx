import React from 'react';
import './Corridas.css';

const PaginaCorridas = ({ corridas, onProximaPagina }) => {
    return (
        <div className="pagina-corridas">
            {corridas.map((corrida, index) => (
                <div key={index} className="corrida-box">
                    <a href={corrida.link} className="link-corrida">
                        <div className="miniatura">
                            <img src={corrida.imagem} alt={`Miniatura ${corrida.nome}`} />
                        </div>
                        <div className="informacoes-corrida">
                            <h2>{corrida.nome}</h2>
                            <p>{corrida.descricao}</p>
                            <p>Data: {corrida.data}</p>
                            <p>Informações da corrida</p>
                        </div>
                    </a>
                </div>
            ))}
            <div className="navegacao-pagina">
                <button onClick={onProximaPagina}>Próxima Página</button>
                <div className="paginacao-info">
                    Página <span>1</span> de 10
                </div>
            </div>
        </div>
    );
};

export default PaginaCorridas;
