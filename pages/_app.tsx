import '../components/Header/index.css'
import '../components/Sobre/index.css'
import '../assets/css/style.css'
import '../components/ListaProdutos/CardProduto/index.css'
import '../components/Modal/index.css'
import '../components/Carrinho/index.css'
import '../components/Header/DropdownCarrinho/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Page from '../components/Page'
import { CarrinhoProvider } from '../context/Carrinho'

export default function LojaBacana({ Component, pageProps }) {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <CarrinhoProvider>
            <Page children={<Component {...pageProps} />} />
        </CarrinhoProvider>
    </>
}