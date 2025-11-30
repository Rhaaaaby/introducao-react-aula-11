import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin-top: auto;
  position: relative;
  
  width: 100vw;        
  left: 50%;         
  right: 50%;
  margin-left: -50vw;  
  margin-right: -50vw;

  overflow: hidden; 

  .wave {
    width: 100vw;
    height: 104px;
    display: block;
  }
`;

export const Divider = styled.div`
  width: min(420px, 100%);
  height: 1px;
  background: #dad9d9ff;
  margin: 70px auto 20px;
`;

export const Nav = styled.nav`


  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 24px;
  font-family: Open Sans;
  padding: 10px 0px 25px 0px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.purple};
    font-weight: 700;

    &.active {
      color: ${({ theme }) => theme.colors.pink};
    }
  }

  @media (min-width: 1024px) {
    gap: 24px;
    margin-bottom: 12px;
  }
`;