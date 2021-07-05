import React, { useRef } from "react";
import clickForaDeUmaDiv from "../../../util/clickForaDeUmaDiv";

type Props = {
  fecharModal: () => void;
  acao: () => void;
  estadoModal: boolean;
  mensagem: string;
};

function ModalConfirmarExclusao({ fecharModal, acao, estadoModal, mensagem }: Props) {
  const domNode = useRef<HTMLDivElement>();

  clickForaDeUmaDiv(fecharModal, domNode);

  return <>
    {
      (estadoModal && mensagem !== null) ?
        <div className="modalWrapper">
          <div className="corpo_modal" ref={domNode}>
            <div className="modal_detalhes">
                <p>{mensagem}</p>
            </div>
            <button className="botao_modal" onClick={acao}>Confirmar</button>
          </div>
        </div>
        :
        null
    }
  </>;
};


export default ModalConfirmarExclusao;
