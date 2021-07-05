import React, { useState } from 'react'
import Link from 'next/link'
import { routes } from '../../config/routes'
import { useRouter } from 'next/dist/client/router'
import DropdownCarrinho from './DropdownCarrinho'
import { useContext } from 'react'
import { CarrinhoContext } from '../../context/Carrinho'
import { Init } from '../../interfaces'

function Header() {
    const router = useRouter();
    const [colapsado, setColapsado] = useState<boolean>(false)
    const [dropdownAtivo, setDropdownAtivo] = useState<boolean>(false);
    const { totalItens } = useContext<Init>(CarrinhoContext);

    function abrirColapsavel() {
        setColapsado(!colapsado)
    }

    function ativarDropdown() {
        setDropdownAtivo(!dropdownAtivo)
    }

    return <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <Link href={routes.HOME}>
                        <a className="nome-da-loja navbar-brand p-4">Loja Bacana</a>
                    </Link>
                    <button className="navbar-toggler" data-toggle="collapse" onClick={abrirColapsavel} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end">
                        <ul className={colapsado ? "hide" : "navbar-nav"}>
                            <Link href={routes.HOME}>
                                <li className={router.pathname == routes.HOME ? "nav-link active" : "nav-link"}>
                                    <a>Home</a>
                                </li>
                            </Link>
                            <li className={router.pathname == routes.CARRINHO ? "nav-link active" : "nav-link"} onClick={ativarDropdown}>
                                <a>Carrinho <span className="badge">{totalItens}</span></a>
                            </li>
                            <Link href={routes.QUEM_SOMOS}>
                                <li className={router.pathname == routes.QUEM_SOMOS ? "nav-link active" : "nav-link"}>
                                    <a>Quem Somos</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <DropdownCarrinho estadoDropdown={dropdownAtivo} fecharDropdown={ativarDropdown} />
    </>
}

export default Header
