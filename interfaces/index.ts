export type Produto = {
  id: number,
  nome: string,
  preco: number,
  imagem: string,
  estoque: number,
  criadoEm: string
}

export type ProdutoRequisicao = {
  id: string, 
  name: string, 
  price: string, 
  image: string, 
  stock: number, 
  createdAt: string,
}

export type Carrinho = {
  produtos: Item[]
}

export type Item = {
  produto: Produto,
  quantidade: number
}

export interface Init {
  carrinho: Carrinho;
  totalItens: number;
  totalAPagar: number;
  removerProduto?: (id: number) => void;
  incrementarProduto?: (id: number) => void;
  decrementarProduto?: (id: number) => void;
  alterarQuantidadeProduto?: (id: number, quantidade: number) => void;
  adicionarProduto?: (item: Item) => void;
  limpar?: () => void;
}

