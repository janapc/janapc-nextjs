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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 1s ${showText};

  h2 {
    font-size: 5rem;
    font-family: "Lora", serif;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    width: 80%;
    font-size: 2.2rem;
  }
`;

export const HobbyContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const IconsAbout = styled.ul`
  display: flex;

  li:not(:last-child) {
    margin-right: 3rem;
  }
`;
