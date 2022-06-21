import logo from '../../assets/images/logo certa.PNG'
import { logar } from '../../api/usuarioAPI'

import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

import '../../common.scss'
import './login.scss'



export default function Logar() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false)

    
    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if (storage('usuario-logado')) {
            navigate('/ADM')
        }
    })

    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);

        try {
            const r = await logar(email, senha);
            storage('usuario-logado', r)

            setTimeout(() => {
                navigate('/ADM');
            }, 1000);

        } catch (err) {
            ref.current.complete();
            setCarregando(false);

            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }


    return (
        <main>
            <LoadingBar color='#ffff96' ref={ref} />

            <section className="fax1 fax1-img">
                <div className="login">
                    <div>
                        <img src={logo} alt="" width="100" className="fax1-logo" />
                    </div>
                    <div className='grid'>
                        <h2>Marcenaria power</h2>

                        <div className='grid grid-template-columns-2'>
                            <label >
                                Usuário:
                            </label>
                            <input type="text" placeholder='Informe seu email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='grid grid-template-columns-2'>
                            <label>
                                Senha:
                            </label>
                            <input type="password" placeholder='***' value={senha} onChange={e => setSenha(e.target.value)} />
                        </div>


                        <button onClick={entrarClick} disabled={carregando} >Login</button>

                        <div className='invalido'>
                            {erro}
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}