describe('About', () => {
  it('Should navigate to the about page', () => {
    cy.visit('http://localhost:3000/about');

    cy.url().should('include', '/about');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-about"]').should('be.visible');
    cy.get('[data-testid="link-about"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="theme-light"]').should('be.visible');
    cy.get('[data-testid="details-about"] > h2').contains('Sobre Mim');
    cy.get('[data-testid="details-about"] > p').contains(
      'Sou apaixonada pelo mundo da TI desde adolescência mesmo sem saber nada sobre programação eu já me aventurava com php, codorva, phonegap, ionic, angular 1 e me encantava por cada página que eu criava, isso me deu um impulso na hora de escolher oque eu queria fazer da minha vida profissional.Sou formada em Analise de Desenvolvimendo de Sistemas pela Unisepe. Faço projetos desde do backend até o frontend e ver tudo isso renderizando seja no browser ou no mobile me da uma satisfação tão grande.'
    );

    cy.get('[data-testid="hobby-about"] > h2').contains('Hobbies');

    cy.get('[data-testid="hobby-list"] > li').should(($lis) => {
      expect($lis).to.have.length(4);
      expect($lis.eq(0)).to.contain('Livros');
      expect($lis.eq(1)).to.contain('Filmes');
      expect($lis.eq(2)).to.contain('Games');
      expect($lis.eq(3)).to.contain('Cozinhar');
    });
  });

  it('Should change theme to light', () => {
    cy.visit('http://localhost:3000/about');

    cy.url().should('include', '/about');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="link-about"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="btn-change-theme"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
    cy.get('[data-testid="theme-dark"]').should('be.visible');
  });

  it('Should navigate to the jobs page', () => {
    cy.visit('http://localhost:3000/about');

    cy.url().should('include', '/about');

    cy.get('[data-testid="link-jobs"]').click();
    cy.url().should('include', '/jobs');
  });

  it('Should view page to mobile', () => {
    cy.visit('http://localhost:3000/about');

    cy.url().should('include', '/about');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-about"]').should('be.visible');

    cy.get('[data-testid="details-about"] > h2').contains('Sobre Mim');
    cy.get('[data-testid="details-about"] > p').contains(
      'Sou apaixonada pelo mundo da TI desde adolescência mesmo sem saber nada sobre programação eu já me aventurava com php, codorva, phonegap, ionic, angular 1 e me encantava por cada página que eu criava, isso me deu um impulso na hora de escolher oque eu queria fazer da minha vida profissional.Sou formada em Analise de Desenvolvimendo de Sistemas pela Unisepe. Faço projetos desde do backend até o frontend e ver tudo isso renderizando seja no browser ou no mobile me da uma satisfação tão grande.'
    );

    cy.get('[data-testid="hobby-about"] > h2').contains('Hobbies');

    cy.get('[data-testid="hobby-list"] > li').should(($lis) => {
      expect($lis).to.have.length(4);
      expect($lis.eq(0)).to.contain('Livros');
      expect($lis.eq(1)).to.contain('Filmes');
      expect($lis.eq(2)).to.contain('Games');
      expect($lis.eq(3)).to.contain('Cozinhar');
    });
    cy.get('[data-testid="theme-light"]').should('be.visible');
  });

  it('Should view page to mobile with theme light', () => {
    cy.visit('http://localhost:3000/about');

    cy.url().should('include', '/about');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="theme-light"]').click();

    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
    cy.get('[data-testid="theme-dark"]').should('be.visible');
  });

  it('Should view page to mobile and open menu', () => {
    cy.visit('http://localhost:3000/about');

    cy.url().should('include', '/about');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="mobile-menu"').should('have.css', 'display', 'block');
    cy.get('[data-testid="link-about"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );
  });

  it('Should view page to mobile and close menu', () => {
    cy.visit('http://localhost:3000/about');

    cy.url().should('include', '/about');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="mobile-menu"').should('have.css', 'display', 'block');
    cy.get('[data-testid="btn-close-mobile-menu"]').click();
  });
});
