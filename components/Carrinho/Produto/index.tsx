import React, { useState } from 'react';
import { Init, Item } from '../../../interfaces';
import Image from 'next/image'
import { useContext } from 'react';
import { CarrinhoContext } from '../../../context/Carrinho';
import { formatarNumero } from '../../../util/formatarNumero';
import { BsTrash } from 'react-icons/bs'

type Props = {
    item: Item,
    removerProduto: (id: number) => void
}

function Produto({ item, removerProduto }: Props) {

    const { incrementarProduto, decrementarProduto, alterarQuantidadeProduto } = useContext<Init>(CarrinhoContext);

    function alterarQuantidade(event: React.ChangeEvent<any>) {
        const { value } = event.currentTarget;
        if (value >= 0) {
            alterarQuantidadeProduto(item.produto.id, value);
        }
    }

    function incrementar() {
        incrementarProduto(item.produto.id);
    }

    function decrementar() {
        decrementarProduto(item.produto.id);
    }

    return <>
        {
            item !== null ?
                <div className="carrinho_produto">
                    <Image src={item.produto.imagem} alt={item.produto.nome} width={200} height={120} />
                    <div className="carrinho_nome_produto">
                        <span>{item.produto.nome}</span>
                    </div>
                    <div className="carrinho_quantidade_produto">
                        <button className="carrinho_btn_incrementar" type="button" onClick={incrementar}>+</button>
                        <input type="text" name="name" value={item.quantidade} onChange={alterarQuantidade} />
                        <button className="carrinho_btn_decrementar" type="button" onClick={decrementar}>-</button>
                    </div>
                    <div className="remover_carrinho">
                        <span className="btn_remover_carrinho" onClick={() => removerProduto(item.produto.id)}><BsTrash /></span>
                    </div>
                    <div className="carrinho_preco_produto">{formatarNumero(item.produto.preco)}</div>
                    <div className="carrinho_preco_produto">{formatarNumero(item.produto.preco * item.quantidade)}</div>
                </div>
                : null
        }
    </>
};

export default Produto;