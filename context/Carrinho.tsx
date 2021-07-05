import React, { createContext, useReducer } from "react";
import { Init, Item } from "../interfaces";
import CartReducer from "../reducer/CarrinhoReducer";

const stateInicial = {
  carrinho: {
    produtos: []
  },
  totalItens: 0,
  totalAPagar: 0
};

export const CarrinhoContext = createContext<Init>(stateInicial);

export const CarrinhoProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(CartReducer, stateInicial);

  const adicionarProduto = (item: Item) => {
    dispatch({
      type: "ADICIONAR_PRODUTO",
      payload: item,
    });
  };

  const alterarQuantidadeProduto = (id: number, quantidade: number) => {
    dispatch({
      type: "ALTERAR_QTD_PRODUTO",
      payload: id, quantidade
    });
  }

  const removerProduto = (id: number) => {
    dispatch({
      type: "REMOVER_PRODUTO",
      payload: id,
    });
  };
  
  const incrementarProduto = (id: number) => {
    dispatch({
      type: "INCREMENTAR_PRODUTO",
      payload: id,
    });
  };
  
  const decrementarProduto = (id: number) => {
    dispatch({
      type: "DECREMENTAR_PRODUTO",
      payload: id,
    });
  };

  const limpar = () => {
    dispatch({
      type: "LIMPAR",
    });
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho: state.carrinho,
        totalItens: state.totalItens,
        totalAPagar: state.totalAPagar,
        removerProduto,
        adicionarProduto,
        incrementarProduto,
        decrementarProduto,
        alterarQuantidadeProduto,
        limpar,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
