import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Carrinho from '../components/Carrinho';
import ModalConfirmarExclusao from '../components/Modal/ConfirmarExclusao';
import { CarrinhoContext } from '../context/Carrinho';
import { Init } from '../interfaces';

function CarrinhoPage() {

    const { limpar, removerProduto } = useContext<Init>(CarrinhoContext);
    const [tamanhoDaTela, setTamanhoDaTela] = useState<number>(0);
    const [modalLimparCarrinho, setModalLimparCarrinho] = useState<boolean>(false)
    const [modalRemoverProduto, setModalRemoverProduto] = useState<boolean>(false)
    const [idProduto, setIdProduto] = useState<number>(null);

    useEffect(() => {
        if (tamanhoDaTela === 0) setTamanhoDaTela(window.innerHeight - 170)
    });

    function abrirModalLimparCarrinho() {
        setModalLimparCarrinho(true);
    }

    function fecharModalLimparCarrinho() {
        setModalLimparCarrinho(false);
    }

    function limparCarrinho() {
        limpar();
        setModalLimparCarrinho(false);
    }

    function abrirModalRemoverProduto(id: number) {
        setIdProduto(id);
        setModalRemoverProduto(true);
    }

    function fecharModalRemoverProduto() {
        setModalRemoverProduto(false);
    }

    function excluirProduto() {
        removerProduto(idProduto);
        setModalRemoverProduto(false);
    }

    return <>
        <div className="container-fluid bg-light p-5" style={{ minHeight: `${tamanhoDaTela}px` }}>
            <Carrinho abrirModalLimparCarrinho={abrirModalLimparCarrinho} abrirModalRemoverProduto={abrirModalRemoverProduto} />
        </div>
        <ModalConfirmarExclusao
            estadoModal={modalLimparCarrinho}
            mensagem="Tem certeza que deseja limpar o carrinho? Todos os itens presentes nele serão removidos!"
            fecharModal={fecharModalLimparCarrinho}
            acao={limparCarrinho} />
            <ModalConfirmarExclusao
                estadoModal={modalRemoverProduto}
                mensagem="Tem certeza que deseja excluir esse item?"
                fecharModal={fecharModalRemoverProduto}
                acao={excluirProduto} />
    </>
}
export default CarrinhoPage;