import styled, { keyframes } from 'styled-components';

const showText = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 0.5s ${showText};
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`;

export const Description = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  width: 100%;

  h2 {
    font-size: 8rem;
    font-family: "Lora", serif;
    font-weight: bold;
    background: -webkit-linear-gradient(#fd3a69, #ffdd67);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 2rem 0;
  }
`;

export const Apresentation = styled.p`
  font-size: 3rem;
`;
