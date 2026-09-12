import Carrinho from './Carrinho'
import '../styles/Header.css'

// Recebe tudo via props: nome da loja, subtítulo, itens do carrinho e o
// controle de abrir/fechar o painel.
function Header({
  loja,
  subtitulo,
  totalCarrinho,
  itensCarrinho,
  valorCarrinho,
  carrinhoAberto,
  onToggleCarrinho,
}) {
  return (
    <header className="header">
      <div className="headerMarca">
        <h1 className="headerTitulo">{loja}</h1>
        <p className="headerSubtitulo">{subtitulo}</p>
      </div>

      <div className="headerCarrinhoArea">
        <button
          type="button"
          className={`headerCarrinho ${carrinhoAberto ? 'headerCarrinhoAberto' : ''}`}
          onClick={onToggleCarrinho}
          aria-expanded={carrinhoAberto}
          title="Ver itens do carrinho"
        >
          <span className="headerCarrinhoIcone" aria-hidden="true">🛒</span>
          <span className="headerCarrinhoTexto">Carrinho</span>
          <span className="headerBadge">{totalCarrinho}</span>
        </button>

        {carrinhoAberto && (
          <Carrinho itens={itensCarrinho} total={valorCarrinho} />
        )}
      </div>
    </header>
  )
}

export default Header
