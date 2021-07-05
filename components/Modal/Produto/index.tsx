import React, { useRef } from "react";
import Image from 'next/image'

import clickForaDeUmaDiv from "../../../util/clickForaDeUmaDiv";

import { Produto } from "../../../interfaces";
import { formatarNumero } from "../../../util/formatarNumero";

type Props = {
  fecharModal: () => void;
  estadoModal: boolean;
  produto: Produto;
};

const ModalProduto = ({ fecharModal, estadoModal, produto }: Props) => {
  const domNode = useRef<HTMLDivElement>();

  clickForaDeUmaDiv(fecharModal, domNode);

  return <>
    {
      (estadoModal && produto !== null) ?
        <div className="modalWrapper">
          <div className="corpo_modal" ref={domNode}>
            <Image src={produto.imagem} alt={produto.nome} width={500} height={300} />
            <div className="modal_detalhes">
              <span className="modal_nome">{produto.nome}</span>
              <span className="modal_preco">{formatarNumero(produto.preco)}</span>
            </div>
          </div>
        </div>
        :
        null
    }
  </>;
};


export default ModalProduto;
