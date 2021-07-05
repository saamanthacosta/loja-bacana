import { GetStaticProps } from 'next'
import React, { useState } from 'react';
import ListaProdutos from '../components/ListaProdutos'
import ModalProduto from '../components/Modal/Produto';
import Sobre from '../components/Sobre';
import { Produto } from '../interfaces'
import ProdutoService from '../services/ProdutoService'

type Props = {
  produtos: Produto[],
  erro: string
}

function Home({ produtos, erro }: Props) {

  const [pesquisa, setPesquisa] = useState<string>("");

  const [modalProduto, setModalProduto] = useState<Produto>(null);
  const [estadoModalProduto, mudarEstadoModalProduto] = useState<boolean>(false);

  function pesquisar(event: React.ChangeEvent<HTMLInputElement>) {
    setPesquisa(event.target.value);
  }

  function restaurarPesquisa() {
    setPesquisa("");
  }

  function abrirModal(produto: Produto) {
    setModalProduto(produto);
    mudarEstadoModalProduto(true);
  }

  function fecharModal() {
    setModalProduto(null);
    mudarEstadoModalProduto(false);
  }

  return <>
    <Sobre titulo="Loja Bacana" descricao="Aqui você encontrará vários produtos diferentes!" />
    {
      erro === null ?
        <>
          <ListaProdutos produtos={produtos} pesquisa={pesquisa} abrirModal={abrirModal} />
          <ModalProduto fecharModal={fecharModal} estadoModal={estadoModalProduto} produto={modalProduto} />
        </>
        :
        erro
    }
  </>
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  let produtos: Produto[] = [];
  let erro: string = null;
  await ProdutoService.listarTodos().then(
    listaProdutos => produtos = listaProdutos
  ).catch(
    mensagemErro => erro = mensagemErro
  );
  return { props: { produtos, erro } }
}
