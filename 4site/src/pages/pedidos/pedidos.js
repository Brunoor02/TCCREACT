import { Link } from 'react-router-dom'
import porta from '../../assets/images/sair.png'
import casa from '../../assets/images/casinha.png'
import pedido from '../../assets/images/carrinho de compras.png'
import folha from '../../assets/images/papel e caneta.png'
import lixo from '../../assets/images/lixo.png'
import lapis from '../../assets/images/lapis.png'


import { deletarPedido, listarTodosPedidos } from '../../api/pedidoApi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import storage from 'local-storage'

import './pedidos.scss';
import '../../common.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Pedidos() {
    const [pedd, setPedd] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [usuario, setUsuario] = useState('-')

    const navigate = useNavigate();

    function editarPedido(id) {
        navigate(`/alterar/${id}`)
    }


    async function removerPedidoClick(id, nome) {

        confirmAlert({
            title: 'Remover Pedido',
            message: `Deseja remover o pedido ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await deletarPedido(id, nome);
                        if (filtro === '') {
                            carregarTodosOsPedidos();
                        }

                        toast('Pedido removido');

                    }
                },
                {
                    label: 'Não',
                    onClick: () => toast('Pedido não foi removido')
                }
            ],
        })
    }



    async function carregarTodosOsPedidos() {
        const resp = await listarTodosPedidos();
        setPedd(resp);
    }

    useEffect(() => {
        carregarTodosOsPedidos();
    }, [])

    

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
        <main className='tudoo'>
            <ToastContainer />
            <section className="menuNavigation">
                <h5>Marcenaria power</h5>
                <h5>Painel administrativo</h5>
                <Link to='/ADM' className="itemMenu">
                    <img src={casa} alt="" width="30" />
                    <div>Início</div>
                </Link>
                <Link to="/cadastro-pedidos" className="itemMenu">
                    <img src={pedido} alt="" width="30" />
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
            </section>
            <section className="conteudoPagina">
                <div className="tituloPagina">
                    <h3>Pedidos</h3>
                    <Link to='/cadastro-pedidos'> Novo pedido</Link>
                </div>
                <div className="cardsPagina">


                    {pedd.map(item =>


                        <div className="card">
                            <div className="row">
                                <span><b>Id: {item.id}</b></span>
                                <span><b>Produto: {item.nome}</b></span>
                                <div className="tipoProduto">
                                    <div for="gotaPlus">Tipo de madeira: {item.madeira}</div>
                                </div>
                                <div>
                                    <img src={lixo} alt="" width="35" onClick={() => removerPedidoClick(item.id, item.nome)} />
                                    <img src={lapis} alt="" width="32" onClick={() => editarPedido(item.id)} />
                                </div>
                            </div>
                            <div className="row">
                                <span><b>Endereço: {item.endereco}</b></span>
                                <span><b>Medidas: {item.medida}</b></span>
                                <span><b>Cor: {item.corEmadeira}</b></span>
                            </div>
                            <div className="row">
                                <div><b>Data: {String(item.data).substr(0, 10)}</b></div>
                                <span><b>Valor: {item.valor}</b></span>
                            </div>
                        </div>


                    )}

                </div>

            </section>
        </main>
    )

}