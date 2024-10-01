import React from 'react';
import './Loja.css'; 

const produtos = [
  {
    id: 1,
    nome: 'Ingresso GP Interlagos',
    imagem: '/imagens/bilhete.png',
    preco: '12 mil pontos',
  },
  {
    id: 2,
    nome: 'Boné Mahindra',
    imagem: '/imagens/bone.png',
    preco: '2 mil pontos',
  },
  {
    id: 3,
    nome: 'Chaveiro Mahindra',
    imagem: '/imagens/chaveiro.png',
    preco: '700 pontos',
  },
  {
    id: 4,
    nome: 'Conhecer Pit Mahindra',
    imagem: '/imagens/bilhete.png',
    preco: '30 mil pontos',
  },
  {
    id: 5,
    nome: 'Caneca Mahindra',
    imagem: '/imagens/caneca.png',
    preco: '1.100 pontos',
  },
  {
    id: 6,
    nome: 'Capinha Mahindra',
    imagem: '/imagens/capinha.png',
    preco: '300 pontos',
  },
];

const Loja = () => {
  const handleComprar = () => {
    alert('Compra efetuada com sucesso!');
  };

  return (
    <div className="lojas-container">
      <h2>Nossos Produtos</h2>
      <div className="produtos-grid">
        {produtos.map(produto => (
          <div className="produto" key={produto.id}>
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.preco}</p>
            <button className="comprar-button" onClick={handleComprar}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loja;
