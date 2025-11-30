import styled from "styled-components";

export const Hero = styled.main`
  text-align: center;

  img.doodle {
    width: min(460px, 92%);
    display: block;
    margin: 0 auto 12px;
    padding: 64px 0px 65px 0px;
  }

  h1 {
    font-size: clamp(1.5rem, 1.3rem + 1.8vw, 2.4rem);
    font-weight: 500;
    color: ${({ theme }) => theme.colors.purple};
    margin: 16px 0 12px;
    font-family: 'Dosis', sans-serif;
    padding: 40px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  span {
    color: ${({ theme }) => theme.colors.pink};
    font-family: 'Dosis', sans-serif;
    font-weight: 700;
  }

  p {
    margin: 0 auto 8px;
    max-width: 70ch;
    color: #828282;
    font-family: Open Sans;
    padding: 10px;
  }

  bold {
    color: #3F3D56;
    font-weight: 700;
    font-family: Open Sans;
  }
`;