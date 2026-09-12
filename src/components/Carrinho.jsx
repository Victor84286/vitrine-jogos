import '../styles/Carrinho.css'

// Painel que lista os produtos adicionados ao carrinho.
// Recebe os itens já agrupados (com quantidade) e o valor total via props.
function Carrinho({ itens, total }) {
  const totalFormatado = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="carrinhoPainel">
      <h3 className="carrinhoPainelTitulo">Itens no carrinho</h3>

      {itens.length === 0 ? (
        <p className="carrinhoPainelVazio">
          Seu carrinho está vazio. Adicione um jogo!
        </p>
      ) : (
        <>
          <ul className="carrinhoPainelLista">
            {itens.map((item) => (
              <li key={item.id} className="carrinhoItem">
                <img
                  className="carrinhoItemImagem"
                  src={item.imagem}
                  alt={item.nome}
                />
                <div className="carrinhoItemInfo">
                  <span className="carrinhoItemNome">{item.nome}</span>
                  <span className="carrinhoItemQtd">
                    {item.quantidade}x{' '}
                    {item.preco.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                </div>
                <span className="carrinhoItemSubtotal">
                  {(item.preco * item.quantidade).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </li>
            ))}
          </ul>

          <div className="carrinhoPainelTotal">
            <span>Total</span>
            <strong>{totalFormatado}</strong>
          </div>
        </>
      )}
    </div>
  )
}

export default Carrinho
