import React, { useContext } from "react";
import { CarrinhoContext } from "../../context/Carrinho";
import { Init, Produto } from "../../interfaces";
import CardProduto from "./CardProduto";

type Props = {
    produtos: Produto[],
    pesquisa: string
    abrirModal: (produto: Produto) => void;
}

const ListarProdutos = ({ produtos, pesquisa, abrirModal }: Props) => {
    const { adicionarProduto } = useContext<Init>(CarrinhoContext);

    function pesquisar(pesquisa: string) {
        return (produto: Produto) => {
            return (
                produto.nome.toLowerCase().includes(pesquisa.toLowerCase()) || !pesquisa
            );
        };
    }

    return (
        <div className="container-fluid bg-light p-5">
            <ul className="cards">
                {produtos
                    .filter(pesquisar(pesquisa))
                    .map((produto) => (
                        <li className="cards_item" key={produto.id}>
                            <CardProduto produto={produto} adicionarAoCarrinho={adicionarProduto} abrirModal={abrirModal} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}
export default ListarProdutos;