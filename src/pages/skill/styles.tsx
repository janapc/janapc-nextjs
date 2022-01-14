import styled, { keyframes } from 'styled-components';


const pulse = keyframes`
  0% {
    transform: scale(.3);
  }

  50% {
    transform: scale(1.3);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 5rem;
    font-family: "Lora", serif;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 6rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  div {
    svg:nth-child(odd) {
      width: 10%;
    }
    svg:nth-child(even) {
      width: 20%;
    }
    svg:nth-child(2),
    svg:nth-child(4),
    svg:nth-child(9) {
      width: 60%;
    }

    animation: ${pulse} 5s;
  }
`;
