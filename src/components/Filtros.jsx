import '../styles/Filtros.css'

// Extra: campo de busca por nome + filtro por categoria.
function Filtros({
  busca,
  onBuscaChange,
  categorias,
  categoriaAtiva,
  onCategoriaChange,
}) {
  return (
    <div className="filtros">
      <input
        className="filtrosBusca"
        type="search"
        value={busca}
        onChange={(evento) => onBuscaChange(evento.target.value)}
        placeholder="Buscar jogo pelo nome..."
        aria-label="Buscar jogo pelo nome"
      />

      <div className="filtrosCategorias">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={`filtrosCategoria ${
              categoria === categoriaAtiva ? 'filtrosCategoriaAtiva' : ''
            }`}
            onClick={() => onCategoriaChange(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filtros
