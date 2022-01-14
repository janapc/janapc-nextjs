import type { NextPage } from 'next';
import {
  IoRestaurantOutline,
  IoGameControllerOutline,
  IoFilmOutline,
  IoBookOutline,
} from 'react-icons/io5';

import { Main, IconsAbout, AboutContainer, HobbyContainer } from './styles';

const About: NextPage = () => {
  return (
    <Main data-testid="page-about">
      <AboutContainer data-testid="details-about">
        <h2>Sobre Mim</h2>
        <p>
          Sou apaixonada pelo mundo da TI desde adolescência mesmo sem saber
          nada sobre programação eu já me aventurava com php, codorva, phonegap,
          ionic, angular 1 e me encantava por cada página que eu criava, isso me
          deu um impulso na hora de escolher oque eu queria fazer da minha vida
          profissional.Sou formada em Analise de Desenvolvimendo de Sistemas
          pela Unisepe. Faço projetos desde do backend até o frontend e ver tudo
          isso renderizando seja no browser ou no mobile me da uma satisfação
          tão grande.
        </p>
      </AboutContainer>

      <HobbyContainer data-testid="hobby-about">
        <h2>Hobbies</h2>
        <IconsAbout data-testid="hobby-list">
          <li>
            <IoBookOutline size={54} color="#FD3A69" title="Livros" />
          </li>
          <li>
            <IoFilmOutline size={54} color="#FD3A69" title="Filmes" />
          </li>
          <li>
            <IoGameControllerOutline size={54} color="#FD3A69" title="Games" />
          </li>
          <li>
            <IoRestaurantOutline size={54} color="#FD3A69" title="Cozinhar" />
          </li>
        </IconsAbout>
      </HobbyContainer>
    </Main>
  );
};

export default About;
