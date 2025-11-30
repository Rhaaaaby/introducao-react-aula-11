import { Link } from 'react-router-dom';
import Wave from "../assets/Footer/Wave.png";
import { FooterWrapper, Nav, Divider } from '../styles/FooterStyles';

function Footer() {
    return (

        <FooterWrapper>

            < Divider />
            
            <Nav>
                <Link to="/destinos">Destinos</Link>
                <Link to="/ofertas">Ofertas</Link>
                <Link to="/contato">Contato</Link>
            </Nav>
            <img src={Wave} alt="Wave" className="wave" />
        </FooterWrapper>
    );
}

export default Footer;