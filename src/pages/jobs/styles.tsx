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
  z-index: -1;

  h2 {
    font-size: 5rem;
    font-family: "Lora", serif;
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 6rem;
    animation: 1s ${showText};
  }
`;
export const Timeline = styled.div`
  position: fixed;
  width: 3px;
  top: 0;
  left: 12rem;
  height: 100%;
  background: linear-gradient(#fd3a69, #ffdd67);

  @media (max-width: 768px) {
    left: 2rem;
  }
`;

export const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 0px 0px 4rem 6rem;
    animation: 1s ${showText};

    h4 {
      font-size: 2.4rem;
      color: ${(props) => props.theme.colors.primary};
      font-family: "Lora", serif;
      margin-bottom: 10px;
      padding: 1rem;
      border-radius: 4px;
      background-color: ${(props) => props.theme.colors.tab};
    }

    p {
      font-size: 2rem;
      width: 90%;
    }

    h4::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      left: 11rem;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 16%;
    }
  }

  @media (max-width: 768px) {
    div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 4rem;

      h4::before {
        left: 1.2rem;
      }
    }
  }
`;
