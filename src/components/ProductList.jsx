import ProductCard from './ProductCard'
import '../styles/ProductList.css'

// Recebe a lista já filtrada e renderiza um ProductCard para cada produto.
function ProductList({ produtos, favoritos, onFavoritar, onAdicionar }) {
  if (produtos.length === 0) {
    return (
      <p className="listaVazia">
        Nenhum produto encontrado. Tente outra busca ou categoria.
      </p>
    )
  }

  return (
    <section className="lista">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          categoria={produto.categoria}
          plataforma={produto.plataforma}
          favorito={favoritos.includes(produto.id)}
          onFavoritar={() => onFavoritar(produto.id)}
          onAdicionar={() => onAdicionar(produto.id)}
        />
      ))}
    </section>
  )
}

export default ProductList
