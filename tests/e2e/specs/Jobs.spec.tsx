describe('Jobs', () => {
  it('Should navigate to the jobs page', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('includes', '/jobs');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-jobs"]').should('be.visible');
    cy.get('[data-testid="link-jobs"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-jobs"]').contains('Empregos');
    cy.get('[data-testid="jobs-d1"] > h4').contains(
      '2021 - Atualmente - Desenvolvedora júnior na D1 Smarkio'
    );
    cy.get('[data-testid="jobs-d1"] > p').contains(
      'Desenvolvimento de API’s com nodejs, javascript, serverless, testes unitários, documentação para a criação de Chatbots. Criação de implementações direto com o cliente e a utilização da API da Zendesk.'
    );
    cy.get('[data-testid="jobs-kiina"] > h4').contains(
      '2019 - 2021 - Desenvolvedora de Software na Kiina.ai'
    );
    cy.get('[data-testid="jobs-kiina"] > p').contains(
      'Desenvolvimento de integrações do Chatbots com redes social e conexão com a Zendesk utilizando nodejs, javascript e arquitetura serverless, conectava o Chatbot com as API’s dos clientes, fazia manutenção e adicionava novas funcionalidades a essas integrações, implementava novos projetos que o cliente solicitava.Também participei na criação de algumas POC’s, biliotecas, API’s, interfaces e uma CLI tudo para automatizar processos internos da empresa.'
    );
    cy.get('[data-testid="theme-light"]').should('be.visible');
  });

  it('Should change theme to light', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('includes', '/jobs');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should navigate to the skill page', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('includes', '/jobs');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="link-skill"]').click();
    cy.url().should('includes', '/skill');
  });

  it('Should view page to mobile', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('includes', '/jobs');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-jobs"]').should('be.visible');
    cy.get('[data-testid="link-jobs"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-jobs"]').contains('Empregos');
    cy.get('[data-testid="jobs-d1"] > h4').contains(
      '2021 - Atualmente - Desenvolvedora júnior na D1 Smarkio'
    );
    cy.get('[data-testid="jobs-d1"] > p').contains(
      'Desenvolvimento de API’s com nodejs, javascript, serverless, testes unitários, documentação para a criação de Chatbots. Criação de implementações direto com o cliente e a utilização da API da Zendesk.'
    );
    cy.get('[data-testid="jobs-kiina"] > h4').contains(
      '2019 - 2021 - Desenvolvedora de Software na Kiina.ai'
    );
    cy.get('[data-testid="jobs-kiina"] > p').contains(
      'Desenvolvimento de integrações do Chatbots com redes social e conexão com a Zendesk utilizando nodejs, javascript e arquitetura serverless, conectava o Chatbot com as API’s dos clientes, fazia manutenção e adicionava novas funcionalidades a essas integrações, implementava novos projetos que o cliente solicitava.Também participei na criação de algumas POC’s, biliotecas, API’s, interfaces e uma CLI tudo para automatizar processos internos da empresa.'
    );
    cy.get('[data-testid="theme-light"]').should('be.visible');
  });

  it('Should view page to mobile with theme light', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('include', '/jobs');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should view page to mobile and open menu', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('include', '/jobs');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();

    cy.get('[data-testid="list-mobile-menu"] >li').should(($lis) => {
      expect($lis).to.have.length(6);
      expect($lis.eq(0)).to.contain('Inicio');
      expect($lis.eq(1)).to.contain('Sobre Mim');
      expect($lis.eq(2)).to.contain('Empregos');
      expect($lis.eq(3)).to.contain('Habilidades');
      expect($lis.eq(4)).to.contain('Projetos');
      expect($lis.eq(5)).to.contain('Contato');
    });

    cy.get('[data-testid="link-jobs"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );
  });

  it('Should view page to mobile and close menu', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('include', '/jobs');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="btn-close-mobile-menu"]').click();
  });

  it('Should view page to mobile and navigate to the skill page', () => {
    cy.visit('http://localhost:3000/jobs');

    cy.url().should('include', '/jobs');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="link-skill"]').click();
    cy.url().should('include', '/skill');
  });
});
