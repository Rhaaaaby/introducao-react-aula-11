import styled from "styled-components";

export const CarrosselContainer = styled.div`
  text-align: center;
  padding: 40px 0;
`;

export const Title = styled.h1`
  font-family: Open Sans;
  font-weight: 700;
  font-size: clamp(1.6rem, 2vw, 2.3rem);
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const BotoesPaises = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;

  button {
    padding: 8px 18px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.purple};
    font-weight: 600;
    transition: all 0.3s ease;

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
  }
`;

export const CarrosselBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  position: relative;

  img {
    width: 520px;
    height: 340px;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: 0 6px 22px rgba(0,0,0,0.16);
    transition: transform 0.5s ease, opacity 0.6s ease-in-out;

    &:hover {
      transform: scale(1.03);
    }
  }

  button {
    background: rgba(255, 255, 255, 0.7);
    border: none;
    font-size: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    backdrop-filter: blur(6px);
    transition: all 0.3s ease;

    &:hover {
      background: white;
      transform: scale(1.15);
    }
  }
`;