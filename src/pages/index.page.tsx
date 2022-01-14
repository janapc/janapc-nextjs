import type { NextPage } from 'next';
import Image from 'next/image';

import { Main, Description, Apresentation } from './styles';

const Home: NextPage = () => {
  return (
    <Main data-testid="page-home">
      <Image
        src="/images/profile.svg"
        alt="Janaina Pedrina"
        width="500"
        height="500"
        data-testid="image-home"
      />
      <Description>
        <Apresentation data-testid="apresention-home">Olá, sou</Apresentation>
        <h2 data-testid="name-home">Janaina Pedrina</h2>
        <span data-testid="job-home">Desenvolvedora júnior na D1 Smarkio</span>
        <p data-testid="details-home">
          Sou uma desenvolvedora backend que adora desafios e que se aventura um
          pouco no frontend.
        </p>
      </Description>
    </Main>
  );
};

export default Home;
