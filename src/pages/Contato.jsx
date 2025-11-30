import contatos from "../assets/Contato/contatos.png";
import { Section, ContatoImage, Title, ContatoCard } from "../styles/ContatoStyles";


function Contato() {
    return (
        <Section>
            <ContatoImage src={contatos} alt="Contato" />

            <ContatoCard>
                <Title> Fale Conosco! </Title>

                <ul>
                    <li> Telefone 
                        <span> 99 9 0000-0000 </span> 
                    </li>
                    <li> E-mail 
                        <span> connecflightcontato@email.com</span>
                    </li>
                    <li> Instagram 
                        <span> @ConnectFlight </span>
                    </li>
                </ul>
                
            </ContatoCard>
        </Section>
    )
}

export default Contato;