import { cleanup, render } from '@testing-library/react';
import Jobs from '../../../src/pages/jobs/index.page';
import { AppWrapper } from '../../../src/contexts/AppContext';

afterEach(cleanup);

describe('Jobs', () => {
  it('Should rendering the page', () => {
    const { getByTestId } = render(
      <AppWrapper>
        <Jobs />
      </AppWrapper>
    );

    expect(getByTestId('title-jobs')).toBeInTheDocument();
    expect(getByTestId('title-jobs')).toHaveTextContent('Empregos');

    expect(getByTestId('jobs-d1')).toBeInTheDocument();
    expect(getByTestId('jobs-d1').firstElementChild).toHaveTextContent(
      '2021 - Atualmente - Desenvolvedora júnior na D1 Smarkio'
    );
    expect(getByTestId('jobs-d1').lastElementChild).toHaveTextContent(
      'Desenvolvimento de API’s com nodejs, javascript, serverless, testes unitários, documentação para a criação de Chatbots. Criação de implementações direto com o cliente e a utilização da API da Zendesk.'
    );

    expect(getByTestId('jobs-kiina')).toBeInTheDocument();
    expect(getByTestId('jobs-kiina').firstElementChild).toHaveTextContent(
      '2019 - 2021 - Desenvolvedora de Software na Kiina.ai'
    );
    expect(getByTestId('jobs-kiina').lastElementChild).toHaveTextContent(
      'Desenvolvimento de integrações do Chatbots com redes social e conexão com a Zendesk utilizando nodejs, javascript e arquitetura serverless, conectava o Chatbot com as API’s dos clientes, fazia manutenção e adicionava novas funcionalidades a essas integrações, implementava novos projetos que o cliente solicitava.Também participei na criação de algumas POC’s, biliotecas, API’s, interfaces e uma CLI tudo para automatizar processos internos da empresa.'
    );
  });
});
