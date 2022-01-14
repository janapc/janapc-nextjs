import type { NextPage } from 'next';

import { Main, JobsContainer, Timeline } from './styles';

const Jobs: NextPage = () => {
  return (
    <Main data-testid="page-jobs">
      <h2 data-testid="title-jobs">Empregos</h2>
      <Timeline></Timeline>
      <JobsContainer>
        <div data-testid="jobs-d1">
          <h4>2021 - Atualmente - Desenvolvedora júnior na D1 Smarkio</h4>
          <p>
            Desenvolvimento de API’s com nodejs, javascript, serverless, testes
            unitários, documentação para a criação de Chatbots. Criação de
            implementações direto com o cliente e a utilização da API da
            Zendesk.
          </p>
        </div>
        <div data-testid="jobs-kiina">
          <h4>2019 - 2021 - Desenvolvedora de Software na Kiina.ai</h4>
          <p>
            Desenvolvimento de integrações do Chatbots com redes social e
            conexão com a Zendesk utilizando nodejs, javascript e arquitetura
            serverless, conectava o Chatbot com as API’s dos clientes, fazia
            manutenção e adicionava novas funcionalidades a essas integrações,
            implementava novos projetos que o cliente solicitava.Também
            participei na criação de algumas POC’s, biliotecas, API’s,
            interfaces e uma CLI tudo para automatizar processos internos da
            empresa.
          </p>
        </div>
      </JobsContainer>
    </Main>
  );
};

export default Jobs;
