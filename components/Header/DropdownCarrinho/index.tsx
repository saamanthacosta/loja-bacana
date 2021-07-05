import React, { useRef } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CarrinhoContext } from '../../../context/Carrinho';
import { Init, Item } from '../../../interfaces';
import { formatarNumero } from '../../../util/formatarNumero';
import { MdRemoveShoppingCart } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link';
import { routes } from '../../../config/routes';
import clickForaDeUmaDiv from '../../../util/clickForaDeUmaDiv';

type Props = {
    estadoDropdown: boolean,
    fecharDropdown: () => void
}

function DropdownCarrinho({ estadoDropdown, fecharDropdown }: Props) {
    const [tamanhoDaTelaGrande, setTamanhoDaTela] = useState<boolean>(null);
    const { carrinho, totalItens, totalAPagar } = useContext<Init>(CarrinhoContext);

    const domNode = useRef<HTMLDivElement>();

    clickForaDeUmaDiv(fecharDropdown, domNode);

    useEffect(() => {
        if (tamanhoDaTelaGrande === null) setTamanhoDaTela(window.innerWidth > 990)
    })

    return <>
        {
            (estadoDropdown && tamanhoDaTelaGrande) ?
                <div className="modalWrapper">
                    <div className="container_dropdown">
                        <div className="dropdown_carrinho" ref={domNode}>
                            <div className="dropdown_carrinho_header">
                                <AiOutlineShoppingCart /> <span className="badge">{totalItens}</span>
                                <div className="dropdown_carrinho_total">
                                    <span className="lighter-text">Total:</span>
                                    <span className="main-color-text"> {formatarNumero(totalAPagar)}</span>
                                </div>
                            </div>
                            {
                                carrinho.produtos.length > 0 ?
                                    <>
                                        <ul className="dropdown_carrinho_items">
                                            {
                                                carrinho.produtos.map((item: Item, index: number) => (
                                                    <>
                                                        {
                                                            index < 3 &&
                                                            <li className="clearfix" key={item.produto.id}>
                                                                <div className="dropdown_produto_imagem">
                                                                    <Image src={item.produto.imagem} alt={item.produto.nome} width={120} height={80} />
                                                                </div>
                                                                <span className="dropdown_produto_nome">{item.produto.nome}</span>
                                                                <span className="dropdown_produto_quantidade">Quantidade: {item.quantidade}</span>
                                                                <span className="dropdown_produto_preco">Total: {formatarNumero(item.produto.preco * item.quantidade)}</span>
                                                            </li>
                                                        }
                                                    </>
                                                ))
                                            }
                                        </ul>
                                        <Link href={routes.CARRINHO}>
                                            <a className="botao_dropdown" onClick={fecharDropdown}>{carrinho.produtos.length > 3 ? "Ver Mais" : "Verificar Carrinho"}</a>
                                        </Link>
                                    </>
                                    : 
                                    <div className="carrinho_vazio">
                                        <div className="alert alert-danger" role="alert">
                                            <MdRemoveShoppingCart /> Carrinho vazio!
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                : null
        }
    </>
}

export default DropdownCarrinho;