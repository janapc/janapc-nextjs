import styled, { keyframes } from 'styled-components';

interface Props {
  pathName: string;
}

const showMenu = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.tab};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 0px;
    width: 80px;

    li {
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }

  button {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 54px;
    justify-content: space-between;
    align-items: center;
    padding: 4px;

    ul {
      display: none;
    }

    button {
      display: block;
    }
  }
`;

export const Menu = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.tab};
  overflow: hidden;
  transition: transform 0.5s ease-out;
  animation: 1s ${showMenu};
  z-index: 1;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    li {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
`;

export const LinkPage = styled.a<Props>`
  padding: 1rem;
  display: flex;
  justify-content: center;
  color: ${(props) =>
    props.href === props.pathName
      ? props.theme.colors.primary
      : props.theme.colors.tabIcon};
  border-radius: 6px;
  background-color: ${(props) =>
    props.href === props.pathName ? 'rgba(253,58,105,0.22)' : 'transparent'};
  box-shadow: ${(props) =>
    props.href === props.pathName ? '0px 1px 3px rgba(0, 0, 0, 0.25)' : 'none'};
`;

export const TitleTab = styled.h2`
  background: ${(props) => props.theme.colors.tab};
  font-family: "Lora", serif;
  font-weight: bold;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  margin: 1rem;
`;

export const ThemeContainer = styled.a`
  width: 90%;
  background-color: #484848;
  border-radius: 15px;
  height: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  div {
    background-color: #f4f4f4;
    width: 80%;
    border-radius: 15px;
    height: 32px;
    align-items: center;
    padding: 4px;
    display: flex;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  @media (max-width: 768px) {
    width: 70px;
    margin-bottom: 0px;
  }
`;
