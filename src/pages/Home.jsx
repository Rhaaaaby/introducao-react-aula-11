import doodle from "../assets/Home/doodle.png";
import { Hero } from "../styles/HomeStyles";

function Home() {
    return (
        <Hero>
            <img src={doodle} alt="mulher segurando planeta Terra" className="doodle" />

            <h1> O seu próximo <span>destino</span> pode estar aqui...</h1>

            <p>
                Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
            </p>

            <p>
                No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <strong>preços arrasadores</strong>!
            </p>

            <p>
                Se você ainda não tem um destino definido, confira nossa seção de ofertas.
            </p>
        </Hero>
    )
}

export default Home;