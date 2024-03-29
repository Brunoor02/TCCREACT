import m1 from '../../assets/images/1.png'
import m2 from '../../assets/images/movel.png'
import m3 from '../../assets/images/mesa.png'
import m4 from '../../assets/images/raque.png'
import m5 from '../../assets/images/caminha.png'
import m6 from '../../assets/images/estante.png'
import torradeira from '../../assets/images/torradeira.png'
import cama from '../../assets/images/cama.png'
import chuveiro from '../../assets/images/chuveiro.png'
import escritorio from '../../assets/images/predio.png'
import logo from '../../assets/images/logo certa.PNG'
import { Link } from 'react-router-dom'
import '../home/home.scss'
import '../../common.scss'





export default function Home() {
  return (
    <main>
      <section className='Fx1'>
        <div className='fx1-titulo'>

          <h1 className="fx1-ttl">marcearia power</h1>

          <h2 className="fx1-ttl2">moveis com o poder de redecorar o ambiente</h2>

        </div>

        <img src={logo} alt="" width="200" />

        <div className="d-md-none btn">
          <Link to="/Login"> LOGIN </Link>
        </div>
      </section>

      <section className="fx2">
        <div className="fx2-fundo">
          <h1>Um(A) artesão sem igual</h1>
          <p>integridade, confiabilidade e profissionalismo</p>
        </div>
      </section>

      <section className="fx3">
        <div>
          <h1 className="fx3-txt">Um pouco do que fazemos</h1>
        </div>
        <div className="fx3-quadrado">

          <div className="fx3-fz">
            <div className="fx3-fz2">
              <div className='tituloFz'>
                <img src={torradeira} alt="" width="45" left="25.6%" />
                <h1>cozinha</h1>
              </div>
              <div>
                <p>Armarios, gavetas, gabinetes, bancadas.Tudo para deixar sua cozinha organizada e charmosa </p>
              </div>
            </div>
            <div className="fx3-fz2">
              <div className='tituloFz'>
                <img src={cama} alt="" width="60" className="fx3-img3" />
                <h1>quartos</h1>
              </div>
              <p>Camas, guarda-roupas, sapateira, gavateiras, etc. Moveis para deixar o seu sono mais aconchegantes</p>
            </div>
          </div>
          <div className="fx3-fz">
            <div className="fx3-fz2">
              <div className='tituloFz'>
                <img src={chuveiro} alt="" className="fx3-img" width="60" left="20%" />
                <h1>banheiros</h1>
              </div>
              <div>
                <p>Gabinetes, armarios, suportes. Tudo para manter o seu local de banho ais arrumado</p>
              </div>
            </div>
            <div className="fx3-fz2">
              <div className='tituloFz'>
                <img src={escritorio} alt="" width="40" className="fx3-img2" />
                <h1>escritorio</h1>
              </div>
              <p>Escrivaninha, aramrios, gavetas, estantes. Mantenha o seu escritorio arrumado para você trabalhar bem</p>
            </div>
          </div>
        </div>
      </section>
      <section className="fx4">
        <div className="fx4-ligue">
          <h1 className="fx4-orça">Venha fazer um orçamento conosco</h1>
          <p className="fx4-btn">*Contato no rodapé*</p>
        </div>
        <div className="fx4-sobre">
          <h2>sobre</h2>
          <p>Uma verdadeira devoção ao ofício resulta da satisfação de transformar ideias em realidade. Fundei o(a) Marcenaria Power em ano X como uma plataforma para mostrar e vender produtos artesanais de qualidade. Às vezes, no mundo prático de hoje, podemos ignorar a beleza natural e artesanal. Entre em contato para iniciar seu projeto hoje.
          </p>
        </div>
      </section>
      <section className="fx5">
        <h1>Alguns dos nossos produtos.</h1>
        <div className="fx5-p1">
          <div className="fx5-img">
            <img src={m1} alt="" width="300" />
          </div>
          <div className="fx5-img">
            <img src={m2} alt="" width="300" />
          </div>
          <div className="fx5-img">
            <img src={m3} alt="" width="300" />
          </div>
        </div>
        <div className="fx5-p2">
          <div className="fx5-img">
            <img src={m4} alt="" width="300" />
          </div>
          <div className="fx5-img">
            <img src={m5} alt="" width="300" />
          </div>
          <div className="fx5-img">
            <img src={m6} alt="" width="300" />
          </div>
        </div>
      </section>
      <section className="fx6">
        <img src={logo} alt="" />
        <div>
          <p className="fx6-local">Rua Natal 210 - Diadema. São Paulo - SP CEP 09910-220</p>
          <p className="fx6-nome">Marcenaria Power</p>
        </div>
        <div className="fx6-info">
          <p>(11) 94562-1098</p>
          <p>(11) 4821-1921</p>
          <p>@marcenariapower</p>
          <p>marcenariapower@orçamento.com</p>
        </div>
      </section>

    </main>
  )
}