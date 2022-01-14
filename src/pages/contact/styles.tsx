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
  width: 100%;
  animation: 1s ${showText};

  h2 {
    font-size: 5rem;
    font-family: "Lora", serif;
    font-weight: bold;
    margin-bottom: 5rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ContactContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
