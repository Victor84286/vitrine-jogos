# GameHub — Vitrine de Produtos (React)

Atividade prática de React: componentes, props, `useState` e CSS puro.
Vitrine de uma loja fictícia de games, com carrinho, favoritos, busca e filtro por categoria.

🔗 **Site publicado:** _(cole aqui o link do GitHub Pages)_
🔗 **Repositório:** https://github.com/Victor84286/vitrine-jogos

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Requisitos atendidos

### 1. Componentes
- `Header` — nome da loja, subtítulo e contador do carrinho.
- `ProductCard` — um produto (imagem, nome, plataforma, preço, botões).
- `ProductList` — recebe a lista e renderiza um `ProductCard` por item.
- `Carrinho` — painel que lista os produtos adicionados (aberto pelo botão do Header).
- `Filtros` — extra: busca e categorias.

### 2. Props
- `ProductCard` recebe **todos** os dados por props; nada é fixo dentro do card.
- `src/data/produtos.js` tem **8 produtos** (mínimo pedido: 6).

### 3. useState (5 estados)
| Estado | Função |
|---|---|
| `itensCarrinho` | ids dos produtos adicionados; o total aparece no `Header` |
| `carrinhoAberto` | abre/fecha o painel com a lista de itens do carrinho |
| `favoritos` | lista de ids; cada card alterna entre favoritado (♥) e não favoritado (♡) |
| `busca` | extra: filtra os produtos pelo nome |
| `categoriaAtiva` | extra: filtra os produtos por categoria |

### 4. CSS
- CSS próprio, sem Bootstrap/Tailwind.
- Grade responsiva com `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))`
  e media queries em 900px e 520px (vira 1 coluna no celular).
- Efeitos de hover nos cards, botões, filtros e no carrinho.

### Extras
- Campo de busca por nome.
- Filtro por categoria (PlayStation, Xbox, Nintendo, PC).

## Publicar no GitHub Pages

1. Crie um repositório **público** no GitHub chamado `vitrinejogos`.
2. Na raiz do projeto:

```bash
git init
git add .
git commit -m "Vitrine de produtos em React"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/vitrine-games.git
git push -u origin main
npm run deploy
```

3. No GitHub: **Settings → Pages → Branch: `gh-pages` / root → Save**.
4. O site fica em `https://<seu-usuario>.github.io/vitrine-games/`.

> Se o repositório tiver outro nome, ajuste `base` em `vite.config.js` para `/<nome-do-repo>/`.

## Estrutura

```
src/
├── App.jsx                 estados e composição
├── main.jsx
├── data/produtos.js        array de produtos
├── components/             Header, Carrinho, ProductCard, ProductList, Filtros
└── styles/                 um CSS por componente + global.css
```
