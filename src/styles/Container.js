import styled from "styled-components";

export const Container = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.container});
  margin-inline: auto;
  padding: 48px 20px 24px;

  @media (min-width: 1024px) {
    flex: 1;
    padding: 24px 20px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;