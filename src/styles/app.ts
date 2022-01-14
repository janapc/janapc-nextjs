import styled from 'styled-components';


export const PageApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;