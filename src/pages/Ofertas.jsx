import oferta from "../assets/Ofertas/oferta.png";
import {
  Section,
  OfertaImg,
  CampoOfertas,
  Title,
  Lista,
  Item,
  ItemTitle,
  ItemText
} from "../styles/OfertasStyles.js";

function Ofertas() {
  return (
    <Section>
      <OfertaImg src={oferta} alt="Contato" />

      <CampoOfertas>
        <Title>Aproveite as nossas Ofertas!</Title>

        <Lista>
          <Item>
            <ItemTitle>COMBO FAMÍLIA</ItemTitle>
            <ItemText>traz todo mundo para cá e ganhe descontos de até 20%!</ItemText>
          </Item>

          <Item>
            <ItemTitle>DIA DOS NAMORADOS</ItemTitle>
            <ItemText>Pensando em fazer uma viagem romântica com o mozão? O seu lugar é na ConnectFlight!</ItemText>
          </Item>

          <Item>
            <ItemTitle>BATE E VOLTA</ItemTitle>
            <ItemText>Faça a sua viagem dos sonhos com precinhos que cabem no seu bolso!</ItemText>
          </Item>
        </Lista>
      </CampoOfertas>
    </Section>
  );
}

export default Ofertas;