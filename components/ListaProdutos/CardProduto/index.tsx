import React, { useState } from 'react'
import Image from 'next/image'
import { formatarNumero } from '../../../util/formatarNumero'

import { Item, Produto } from '../../../interfaces'
import { useEffect } from 'react'

type Props = {
    produto: Produto
    adicionarAoCarrinho: (item: Item) => void;
    abrirModal: (produto: Produto) => void;
}

function CardProduto({ produto, adicionarAoCarrinho, abrirModal }: Props) {

    const [quantidade, setQuantidade] = useState<number>(1);
    const [foiAdicionado, setFoiAdicionado] = useState<boolean>(false);

    useEffect(() => {
        if (!foiAdicionado) {
            return;
        }
        const timer = setTimeout(() => setFoiAdicionado(false), 3500);
        return () => {
            clearTimeout(timer);
        };
    }, [foiAdicionado]);

    function incrementar() {
        setQuantidade(quantidade + 1);
    }

    function decrementar() {
        setQuantidade(quantidade - 1);
    }

    function alterarQuantidade(event: React.ChangeEvent<any>) {
        const { value } = event.currentTarget;
        if (value >= 0 ) {
            setQuantidade(Number(value))
        }
    }

    function adicionar() {
        if (!foiAdicionado) {
            const item: Item = {
                produto: produto,
                quantidade: quantidade
            }
            adicionarAoCarrinho(item);
            setFoiAdicionado(true);
        }
    }

    return (
        <div className="card_produto">
            <div className="card_imagem" onClick={() => abrirModal(produto)}>
                <Image src={produto.imagem} alt={produto.nome} width={500} height={300} />
            </div>
            <div className="card_produto_conteudo">
                <h5 className="card_produto_nome">{produto.nome}</h5>
                <p className="card_produto_preco">{formatarNumero(produto.preco)}</p>
                <div className="quantidade">
                    <input className="input_qtd-produto" type="number" onChange={alterarQuantidade} value={quantidade} />
                    <div className="alterar_qtd_produto">
                        <i className="btn_alterar_qtd_produto" onClick={incrementar}>+</i>
                        <i className="btn_alterar_qtd_produto" onClick={decrementar}>-</i>
                    </div>
                </div>
                <button className={foiAdicionado ? "adicionar-carrinho adicionado" : "adicionar-carrinho"} onClick={adicionar}>{foiAdicionado ? "✔ Adicionado" : "Adicionar ao Carrinho"}</button>
            </div>
        </div>
    )
}

export default CardProduto
