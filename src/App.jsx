import { useState } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros'
import ProductList from './components/ProductList'
import produtos from './data/produtos'
import './styles/App.css'

const TODAS = 'Todas'

// Lista de categorias montada a partir dos próprios produtos.
const categorias = [TODAS, ...new Set(produtos.map((p) => p.categoria))]

function App() {
  // Estado 1 — ids dos produtos adicionados ao carrinho (repetem se adicionar de novo)
  const [itensCarrinho, setItensCarrinho] = useState([])
  // Estado 2 — ids dos produtos favoritados
  const [favoritos, setFavoritos] = useState([])
  // Estado 3 — painel do carrinho aberto ou fechado
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)
  // Estado 4 (extra) — texto da busca
  const [busca, setBusca] = useState('')
  // Estado 5 (extra) — categoria selecionada
  const [categoriaAtiva, setCategoriaAtiva] = useState(TODAS)

  function adicionarAoCarrinho(id) {
    setItensCarrinho((atuais) => [...atuais, id])
  }

  function alternarFavorito(id) {
    setFavoritos((atuais) =>
      atuais.includes(id)
        ? atuais.filter((favoritoId) => favoritoId !== id)
        : [...atuais, id],
    )
  }

  // Agrupa os ids do carrinho em uma lista de produtos com quantidade.
  const carrinhoDetalhado = produtos
    .map((produto) => ({
      ...produto,
      quantidade: itensCarrinho.filter((id) => id === produto.id).length,
    }))
    .filter((produto) => produto.quantidade > 0)

  const valorCarrinho = carrinhoDetalhado.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0,
  )

  // Lista derivada: busca por nome + filtro por categoria.
  const produtosFiltrados = produtos.filter((produto) => {
    const combinaNome = produto.nome
      .toLowerCase()
      .includes(busca.trim().toLowerCase())
    const combinaCategoria =
      categoriaAtiva === TODAS || produto.categoria === categoriaAtiva
    return combinaNome && combinaCategoria
  })

  return (
    <div className="app">
      <Header
        loja="GameHub"
        subtitulo="Os melhores jogos, no preço que cabe no seu save"
        totalCarrinho={itensCarrinho.length}
        itensCarrinho={carrinhoDetalhado}
        valorCarrinho={valorCarrinho}
        carrinhoAberto={carrinhoAberto}
        onToggleCarrinho={() => setCarrinhoAberto((aberto) => !aberto)}
      />

      <main className="appConteudo">
        <Filtros
          busca={busca}
          onBuscaChange={setBusca}
          categorias={categorias}
          categoriaAtiva={categoriaAtiva}
          onCategoriaChange={setCategoriaAtiva}
        />

        <p className="appResumo">
          {produtosFiltrados.length} produto(s) • {favoritos.length} favorito(s)
        </p>

        <ProductList
          produtos={produtosFiltrados}
          favoritos={favoritos}
          onFavoritar={alternarFavorito}
          onAdicionar={adicionarAoCarrinho}
        />
      </main>

      <footer className="appRodape">
        <p>GameHub © 2026 — Atividade prática de React</p>
      </footer>
    </div>
  )
}

export default App
