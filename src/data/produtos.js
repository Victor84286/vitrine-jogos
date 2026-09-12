// Lista de produtos da loja. Nenhum dado fica fixo dentro dos componentes:
// tudo daqui é passado para o ProductCard via props.
const produtos = [
  {
    id: 1,
    nome: 'Elden Ring',
    preco: 249.9,
    imagem: 'https://picsum.photos/seed/eldenring/400/300',
    categoria: 'PlayStation',
    plataforma: 'PS5',
  },
  {
    id: 2,
    nome: 'God of War Ragnarök',
    preco: 299.9,
    imagem: 'https://picsum.photos/seed/godofwar/400/300',
    categoria: 'PlayStation',
    plataforma: 'PS5',
  },
  {
    id: 3,
    nome: 'Halo Infinite',
    preco: 189.9,
    imagem: 'https://picsum.photos/seed/halo/400/300',
    categoria: 'Xbox',
    plataforma: 'Xbox Series X',
  },
  {
    id: 4,
    nome: 'Forza Horizon 5',
    preco: 199.9,
    imagem: 'https://picsum.photos/seed/forza/400/300',
    categoria: 'Xbox',
    plataforma: 'Xbox Series X',
  },
  {
    id: 5,
    nome: 'The Legend of Zelda: Tears of the Kingdom',
    preco: 349.9,
    imagem: 'https://picsum.photos/seed/zelda/400/300',
    categoria: 'Nintendo',
    plataforma: 'Switch',
  },
  {
    id: 6,
    nome: 'Super Mario Odyssey',
    preco: 279.9,
    imagem: 'https://picsum.photos/seed/mario/400/300',
    categoria: 'Nintendo',
    plataforma: 'Switch',
  },
  {
    id: 7,
    nome: 'Cyberpunk 2077',
    preco: 129.9,
    imagem: 'https://picsum.photos/seed/cyberpunk/400/300',
    categoria: 'PC',
    plataforma: 'Steam',
  },
  {
    id: 8,
    nome: 'Baldur’s Gate 3',
    preco: 199.9,
    imagem: 'https://picsum.photos/seed/baldursgate/400/300',
    categoria: 'PC',
    plataforma: 'Steam',
  },
]

export default produtos
