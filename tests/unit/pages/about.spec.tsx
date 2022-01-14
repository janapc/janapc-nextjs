import { render, cleanup } from '@testing-library/react';
import About from '../../../src/pages/about/index.page';
import { AppWrapper } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('About', () => {
  it('Should rendering the page', () => {
    const { getByTestId } = render(
      <AppWrapper>
        <About />
      </AppWrapper>
    );

    expect(getByTestId('details-about')).toBeInTheDocument();
    expect(getByTestId('details-about').firstElementChild).toHaveTextContent(
      'Sobre Mim'
    );
    expect(getByTestId('details-about').lastElementChild).toHaveTextContent(
      'Sou apaixonada pelo mundo da TI desde adolescência mesmo sem saber nada sobre programação eu já me aventurava com php, codorva, phonegap, ionic, angular 1 e me encantava por cada página que eu criava, isso me deu um impulso na hora de escolher oque eu queria fazer da minha vida profissional.Sou formada em Analise de Desenvolvimendo de Sistemas pela Unisepe. Faço projetos desde do backend até o frontend e ver tudo isso renderizando seja no browser ou no mobile me da uma satisfação tão grande.'
    );

    expect(getByTestId('hobby-about').firstElementChild).toHaveTextContent(
      'Hobbies'
    );
    expect(getByTestId('hobby-list').childElementCount).toEqual(4);
  });
});
