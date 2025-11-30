import { useState, useEffect } from "react";

import brasil1 from "../assets/Destinos/Brasil/brasil1.jpg";
import brasil2 from "../assets/Destinos/Brasil/brasil2.jpg";
import brasil3 from "../assets/Destinos/Brasil/brasil3.jpg";

import italy1 from "../assets/Destinos/Italia/italy1.jpg";
import italy2 from "../assets/Destinos/Italia/italy2.jpg";
import italy3 from "../assets/Destinos/Italia/italy3.jpg";

import japan1 from "../assets/Destinos/Japao/japan1.jpg";
import japan2 from "../assets/Destinos/Japao/japan2.jpg";
import japan3 from "../assets/Destinos/Japao/japan3.jpg";

import { 
  CarrosselContainer, 
  Title, 
  BotoesPaises, 
  CarrosselBox, } 
from "../styles/DestinosStyles";


const Carrossel = () => {
  const [paisAtual, setPaisAtual] = useState("brasil");
  const [indiceAtual, setIndiceAtual] = useState(0);

  const imagens = {
    brasil: [brasil1, brasil2, brasil3],
    italia: [italy1, italy2, italy3],
    japao: [japan1, japan2, japan3],
  };

  const paises = Object.keys(imagens);

  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens[paisAtual].length);
  };

  const imagemAnterior = () => {
    setIndiceAtual(
      (prev) =>
        (prev - 1 + imagens[paisAtual].length) % imagens[paisAtual].length
    );
  };

  const trocarPais = (pais) => {
    setPaisAtual(pais);
    setIndiceAtual(0);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      proximaImagem();
    }, 2000); // troca a cada 3s

    return () => clearInterval(intervalo);
  }, [paisAtual, indiceAtual]);

  return (
    <CarrosselContainer>
      
      <Title> Conheça os nossos Destinos! </Title>

      <BotoesPaises>
        {paises.map((pais) => (
          <button
            key={pais}
            onClick={() => trocarPais(pais)}
            className={paisAtual === pais ? "ativo" : ""}
          >
            {pais.charAt(0).toUpperCase() + pais.slice(1)}
          </button>
        ))}
      </BotoesPaises>

      <CarrosselBox>
        <button onClick={imagemAnterior}>⟨</button>
        <img
          src={imagens[paisAtual][indiceAtual]}
          alt={`Imagem ${indiceAtual + 1} de ${paisAtual}`}
        />
        <button onClick={proximaImagem}>⟩</button>
      </CarrosselBox>
    </CarrosselContainer>
  );
};

export default Carrossel;