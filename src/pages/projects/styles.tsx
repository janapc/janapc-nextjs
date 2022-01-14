import styled, { keyframes } from 'styled-components';

interface Props {
  srcImage: string;
}

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
  width: 100%;

  h2 {
    font-size: 5rem;
    font-family: "Lora", serif;
    font-weight: bold;
    margin-bottom: 5rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ProjectsContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectItem = styled.li<Props>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.srcImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const ProjectDescription = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-weight: bold;
    font-size: 4rem;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 4rem;
  }

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    svg:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
`;
