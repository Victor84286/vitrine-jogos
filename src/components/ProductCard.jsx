import '../styles/ProductCard.css'

// Todos os dados do produto chegam por props — nada é fixo dentro do card.
function ProductCard({
  nome,
  preco,
  imagem,
  categoria,
  plataforma,
  favorito,
  onFavoritar,
  onAdicionar,
}) {
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className="card">
      <div className="cardImagemWrapper">
        <img className="cardImagem" src={imagem} alt={nome} loading="lazy" />
        <span className="cardCategoria">{categoria}</span>

        <button
          type="button"
          className={`cardFavorito ${favorito ? 'cardFavoritoAtivo' : ''}`}
          onClick={onFavoritar}
          aria-pressed={favorito}
          title={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {favorito ? '♥' : '♡'}
        </button>
      </div>

      <div className="cardConteudo">
        <h2 className="cardNome">{nome}</h2>
        <p className="cardPlataforma">{plataforma}</p>
        <p className="cardPreco">{precoFormatado}</p>

        <button type="button" className="cardBotao" onClick={onAdicionar}>
          Adicionar ao carrinho
        </button>

        <p className="cardStatus">
          {favorito ? '♥ Favoritado' : '♡ Não favoritado'}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
