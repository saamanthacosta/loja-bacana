import { Carrinho, Item } from '../interfaces/index';
import { Init } from "../interfaces";

const carrinhoReducer = (state: Init, action) => {

  function _calcularValorAPagar(carrinho: Carrinho) {
    return carrinho.produtos.reduce((acumulador, itemAtual) => {
      return acumulador + itemAtual.produto.preco * itemAtual.quantidade;
    }, 0);
  }

  function _encontrarIndexProduto(carrinho: Carrinho, id: number) {
    return carrinho.produtos.findIndex((item: Item) => item.produto.id === id)
  }

  switch (action.type) {
    case "ADICIONAR_PRODUTO": {
      const novoCarrinho: Carrinho = {
        produtos: [...state.carrinho.produtos]
      };
      const idProduto = action.payload.produto.id;
      const quantidade = action.payload.quantidade;
      const indexProdutoNoCarrinho: number = _encontrarIndexProduto(novoCarrinho, idProduto);
      if (indexProdutoNoCarrinho !== -1) {
        novoCarrinho.produtos[indexProdutoNoCarrinho].quantidade += quantidade;
      } else {
        novoCarrinho.produtos.push(action.payload);
      }

      return {
        ...state,
        carrinho: novoCarrinho,
        totalItens: novoCarrinho.produtos.length,
        totalAPagar: _calcularValorAPagar(novoCarrinho),
      };
    }
    case "ALTERAR_QTD_PRODUTO": {
      const novoCarrinho: Carrinho = {
        produtos: [...state.carrinho.produtos]
      };
      const idProduto = action.payload.id;
      const quantidade = action.payload.quantidade;
      const indexProdutoNoCarrinho: number = _encontrarIndexProduto(novoCarrinho, idProduto);
      if (indexProdutoNoCarrinho !== -1) novoCarrinho.produtos[indexProdutoNoCarrinho].quantidade = quantidade

      return {
        ...state,
        carrinho: novoCarrinho,
        totalItens: novoCarrinho.produtos.length,
        totalAPagar: _calcularValorAPagar(novoCarrinho),
      };
    }
    case "REMOVER_PRODUTO": {
      const novoCarrinho: Carrinho = {
        produtos: state.carrinho.produtos.filter((x) => x.produto.id !== action.payload)
      };
      return {
        ...state,
        carrinho: novoCarrinho,
        totalItens: novoCarrinho.produtos.length,
        totalAPagar: _calcularValorAPagar(novoCarrinho),
      };
    }
    case "LIMPAR": {
      return {
        carrinho: {
          produtos: []
        },
        totalItens: 0,
        totalAPagar: 0
      }
    }
    case "INCREMENTAR_PRODUTO": {
      const novoCarrinho: Carrinho = {
        produtos: [...state.carrinho.produtos]
      };
      const idProduto = action.payload;
      const indexProdutoNoCarrinho: number = _encontrarIndexProduto(novoCarrinho, idProduto);
      if (indexProdutoNoCarrinho !== -1) novoCarrinho.produtos[indexProdutoNoCarrinho].quantidade++

      return {
        ...state,
        carrinho: novoCarrinho,
        totalItens: novoCarrinho.produtos.length,
        totalAPagar: _calcularValorAPagar(novoCarrinho),
      };
    }
    case "DECREMENTAR_PRODUTO": {
      const novoCarrinho: Carrinho = {
        produtos: [...state.carrinho.produtos]
      };
      const idProduto = action.payload;
      const indexProdutoNoCarrinho: number = _encontrarIndexProduto(novoCarrinho, idProduto);
      if (indexProdutoNoCarrinho !== -1 && novoCarrinho.produtos[indexProdutoNoCarrinho].quantidade > 0) novoCarrinho.produtos[indexProdutoNoCarrinho].quantidade--

      return {
        ...state,
        carrinho: novoCarrinho,
        totalItens: novoCarrinho.produtos.length,
        totalAPagar: _calcularValorAPagar(novoCarrinho),
      };
    }
    default:
      return state;
  }
};

export default carrinhoReducer;
