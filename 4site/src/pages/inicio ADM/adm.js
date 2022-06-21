import logo from '../../assets/images/logo certa.PNG'
import porta from '../../assets/images/sair.png'
import casa from '../../assets/images/casinha.png'
import pedidos from '../../assets/images/carrinho de compras.png'
import folha from '../../assets/images/papel e caneta.png'
import { Link } from 'react-router-dom'
import '../inicio ADM/adm.scss'
import '../../common.scss'

import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ADM() {
    const [usuario, setUsuario] = useState('-')
    
    const navigate = useNavigate();

    function sair() {
        storage.remove('usuario-logado');
        navigate('/login')
    }

    useEffect(() => {
        if (!storage('usuario-logado')){
            navigate('/login');
        } else{
            const usuarioLogado = storage('usuario-logado');
            setUsuario(usuarioLogado.nome)
        }
},[])

    return (
        <main>
            <section className="faixa1">
                <div>
                    <div className='tudinho'>
                        <div className="menuNavigation">
                            <h5>Marcenaria power</h5>
                            <h5>Painel administrativo</h5>
                            <Link to='/ADM' className="itemMenu">
                                <img src={casa} alt="" width="30" />
                                <div>Início</div>
                            </Link>
                            <Link to="/cadastro-pedidos" className="itemMenu">
                                <img src={pedidos} alt="" width="30" />
                                <div className='cadastro-p'>Cadastro de Pedidos</div>
                            </Link>
                            <Link to="/pedidos" className="itemMenu">
                                <img src={folha} alt="" width="30" />
                                <div>Pedidos</div>
                            </Link>

                            <div className="userAction">
                                <p>Logado: {usuario}</p>
                                <Link to="/login" onClick={sair}>Log Out <img src={porta} alt=""
                                    width="20" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="conta" onClick={sair}>
                        <p>Logado: Dono</p>
                        <p>Log out <img src={porta} alt="" width="20" /></p>
                    </div>
                </div>
                <h1 className='texto'>INICIO</h1>

                <img src={logo} alt="" width="" className='logo' />

            </section>

        </main>
    )
}