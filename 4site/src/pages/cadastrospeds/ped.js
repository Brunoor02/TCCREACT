import { Link } from 'react-router-dom'
import escudo from '../../assets/images/escudo.png'
import gota from '../../assets/images/gota.png'
import porta from '../../assets/images/sair.png'
import casa from '../../assets/images/casinha.png'
import pedido from '../../assets/images/carrinho de compras.png'
import folha from '../../assets/images/papel e caneta.png'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { alterarPedido, buscarPorId, cadastrarPedido } from '../../api/pedidoApi';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import storage from 'local-storage'






import './ped.scss'
import '../../common.scss'
import { set } from 'local-storage'

export default function CadastroPedidos() {

    const [nome, setNome] = useState('');
    const [corEmadeira, setCorEMadeira] = useState('');
    const [endereco, setEndereco] = useState('');
    const [data, setData] = useState('');
    const [valor, setValor] = useState(0);
    const [madeira, setMadeira] = useState('');
    const [medida, setMedida] = useState('');
    const [id, setId] = useState(0);

    const [usuario, setUsuario] = useState('-')

    const { idParam } = useParams();

    useEffect(() => {
        if (idParam) {
            carregarPedido();
        }
    }, []);

    async function carregarPedido() {
        const resposta = await buscarPorId(idParam);
        setNome(resposta.nome);
        setCorEMadeira(resposta.corEmadeira);
        setEndereco(resposta.endereco);
        setData(resposta.data.substr(0, 10));
        setValor(resposta.valor);
        setMadeira(resposta.madeira);
        setMedida(resposta.medida);
        setId(resposta.id);

    }

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


    async function salvarClick() {
        try {

            let ifPedido = 0

            if (id === 0) {
                const r = await cadastrarPedido(nome, corEmadeira, endereco, data, valor, madeira, medida);
                setId(r);
                toast('Pedido cadastrado com sucesso')
            }
            else {
                await alterarPedido(id, nome, corEmadeira, endereco, data, valor, madeira, medida);
                console.log(alterarPedido);
                toast('Pedido alterado com sucesso')
            }

        } catch (err) {
            toast(err.response.data.erro);
        }
    }

    function novoClick() {
        setId(0);
        setNome('');
        setCorEMadeira('');
        setEndereco('');
        setData('');
        setValor(0);
        setMadeira('');
        setMedida('');
    }


    return (
        <main>
            <ToastContainer />

            <section className="fx1">
                <div className='tudoo'>
                    <ToastContainer />
                    <div className="menuNavigation">
                        <h5>Marcenaria power</h5>
                        <h5>Painel administrativo</h5>
                        <Link to='/ADM' className="itemMenu">
                            <img src={casa} alt="" width="30" />
                            <div>Início</div>
                        </Link>
                        <Link to="/cadastro-pedidos" className="itemMenu">
                            <img src={pedido} alt="" width="30" />
                            <div>Cadastro de Pedidos</div>
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

            <div className='cadastro-pag'>
                <h1>Cadastrar pedidos</h1>
                <div className="cadastro">
                    <div className='cad'>
                        <div className="cadastro1">
                            <p>Produto <input type="text" placeholder='nome do produto' value={nome} onChange={e => setNome(e.target.value)} /></p>
                            <p>Medidas <input type="text" placeholder='medidas do produto' value={medida} onChange={e => setMedida(e.target.value)} /></p>
                            <p>Data <input type="date" placeholder='data de entrega' value={data} onChange={e => setData(e.target.value)} /></p>
                            <p>Madeira <input type="text" placeholder='resistencia da madeira' value={madeira} onChange={e => setMadeira(e.target.value)} /></p>
                        </div>
                        <div className="cadastro1">
                            <p>Endereço <input type="text" placeholder='endereço do cliente' value={endereco} onChange={e => setEndereco(e.target.value)} /></p>
                            <p>Cor <input type="text" placeholder='cor do produto' value={corEmadeira} onChange={e => setCorEMadeira(e.target.value)} /></p>
                            <p>Valor <input type="number" placeholder='preço do produto' value={valor} onChange={e => setValor(e.target.value)} /></p>
                        </div>
                    </div>
                    <div className='botao'>
                        <button className="btnn" onClick={salvarClick}>Cadastrar/Alterar pedido</button>
                        <button className="btnn" onClick={novoClick}>Limpar</button>
                    </div>
                </div>
            </div>
        </section>
    </main >


    )
}