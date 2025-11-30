import styled, { keyframes } from "styled-components";

const flutuar = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const Section = styled.section`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  gap: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const OfertaImg = styled.img`
  width: 40%;
  max-width: 450px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  animation: ${flutuar} 6s ease-in-out infinite;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const CampoOfertas = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #3F3D56;
  text-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-family: Open Sans;

`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 0;
`;

export const Item = styled.li`
  background: ${({ theme }) => theme.colors.pink};
  padding: 20px;
  border-radius: 15px;
  transition: .3s ease;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);

  &.ativo {
    background: ${({ theme }) => theme.colors.pink};
    color: white;
    transform: scale(1.08);
  }

  &:hover {
    transform: scale(1.06);
    background: ${({ theme }) => theme.colors.purple};
    color: white;
  }
`;

export const ItemTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 5px;
  font-family: Open Sans;
  display: flex;
  justify-content: center;
`;

export const ItemText = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  font-family: 'Dosis';
  display: flex;
  justify-content: center;
`;