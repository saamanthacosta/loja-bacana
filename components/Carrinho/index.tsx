import * as React from 'react';
import { useContext } from 'react';
import { CarrinhoContext } from '../../context/Carrinho';
import { Init, Item } from '../../interfaces';
import { formatarNumero } from '../../util/formatarNumero';
import { MdRemoveShoppingCart } from 'react-icons/md'
import Produto from './Produto';

type Props = {
    abrirModalLimparCarrinho: () => void,
    abrirModalRemoverProduto: (id: number) => void
}

function Carrinho({ abrirModalLimparCarrinho, abrirModalRemoverProduto }: Props) {
    const { carrinho, totalAPagar, totalItens } = useContext<Init>(CarrinhoContext);

    return <>
        <div className="carrinho">
            <div className="carrinho_titulo">Carrinho</div>
            {
                carrinho.produtos.length > 0 ?
                    <>
                        {
                            carrinho.produtos.map((item: Item) => (
                                <Produto item={item} key={item.produto.id} removerProduto={abrirModalRemoverProduto} />
                            ))
                        }
                        <div className="informacoes_carrinho">
                            <div className="total_itens">Total de Itens: {totalItens}</div>
                        </div>
                        <div className="informacoes_carrinho">
                            <div className="valor_total">Total do Carrinho: {formatarNumero(totalAPagar)}</div>
                            <button className="limpar_carrinho" onClick={abrirModalLimparCarrinho}>Limpar Carrinho</button>
                        </div>
                    </>
                    :
                    <div className="carrinho_vazio">
                        <div className="alert alert-danger" role="alert">
                            <MdRemoveShoppingCart /> Carrinho vazio! Adicione itens no seu carrinho para que eles apareçam aqui!
                        </div>
                    </div>
            }
        </div>
    </>
}

export default Carrinho;