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

export const ContatoImage = styled.img`
  width: 40%;
  max-width: 450px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  animation: ${flutuar} 6s ease-in-out infinite;
  display: column;
  margin-left: 200px;


  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fffff;
  text-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-family: "Open Sans", sans-serif;
`;

export const ContatoCard = styled.div`
  background: ${({ theme }) => theme.colors.purple};
  padding: 30px;
  border-radius: 20px;
  width: 320px;
  margin: auto;
  color: white;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  text-align: center;
  margin-right: 250px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  li {
    font-family: 'Dosis', sans-serif;
    font-size: 1.1rem;
    background: rgba(255,255,255,0.12);
    padding: 14px 20px;
    border-radius: 12px;
    transition: 0.3s ease;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 3px;

    span {
      font-size: 0.95rem;
      font-weight: 700;
      opacity: 0.9;
      color: ${({ theme }) => theme.colors.pink};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.pink};
      transform: translateY(-3px);
      cursor: pointer;

      span {
        color: white;
        opacity: 1;
      }
    }
  }
`;