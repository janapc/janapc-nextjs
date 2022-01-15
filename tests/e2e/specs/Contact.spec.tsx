describe('Contact', () => {
  it('Should navigate to the contact page', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="link-contact"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-contact"]').contains('Contato');
    cy.get('[data-testid="image-contact"]').should('be.visible');
    cy.get('[data-testid="container-contact"] >').should('have.length', 4);

    cy.get('[data-testid="github-contact"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc'
    );
    cy.get('[data-testid="github-contact"] > ').contains('Github');

    cy.get('[data-testid="twitter-contact"]').should(
      'have.attr',
      'href',
      'https://twitter.com/Janapc_'
    );
    cy.get('[data-testid="twitter-contact"] > ').contains('Twitter');

    cy.get('[data-testid="linkedin-contact"]').should(
      'have.attr',
      'href',
      'https://www.linkedin.com/in/janaina-pedrina/'
    );
    cy.get('[data-testid="linkedin-contact"] > ').contains('Linkedin');

    cy.get('[data-testid="mail-contact"]').should(
      'have.attr',
      'href',
      'mailto:jana-costa@outlook.com'
    );
    cy.get('[data-testid="mail-contact"] > ').contains('Mail');

    cy.get('[data-testid="page-contact"]').should('be.visible');
  });

  it('Should change theme to light', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');

    cy.get('[data-testid="theme-dark"]').should('be.visible');
  });

  it('Should navigate to the home page', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');

    cy.get('[data-testid="link-"]').click();
    cy.wait(500);
    cy.url().should('include', '/');
  });

  it('Should view page to mobile', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="link-contact"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-contact"]').contains('Contato');
    cy.get('[data-testid="image-contact"]').should('be.visible');
    cy.get('[data-testid="container-contact"] >').should('have.length', 4);

    cy.get('[data-testid="github-contact"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc'
    );
    cy.get('[data-testid="github-contact"] > ').contains('Github');

    cy.get('[data-testid="twitter-contact"]').should(
      'have.attr',
      'href',
      'https://twitter.com/Janapc_'
    );
    cy.get('[data-testid="twitter-contact"] > ').contains('Twitter');

    cy.get('[data-testid="linkedin-contact"]').should(
      'have.attr',
      'href',
      'https://www.linkedin.com/in/janaina-pedrina/'
    );
    cy.get('[data-testid="linkedin-contact"] > ').contains('Linkedin');

    cy.get('[data-testid="mail-contact"]').should(
      'have.attr',
      'href',
      'mailto:jana-costa@outlook.com'
    );
    cy.get('[data-testid="mail-contact"] > ').contains('Mail');

    cy.get('[data-testid="page-contact"]').should('be.visible');
  });

  it('Should view page to mobile with theme light', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should view page to mobile and open menu', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');
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

    cy.get('[data-testid="link-contact"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );
  });

  it('Should view page to mobile and close menu', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="btn-close-mobile-menu"]').click();
  });

  it('Should view page to mobile and navigate to the home page', () => {
    cy.visit('http://localhost:3000/contact');

    cy.url().should('include', '/contact');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="link-"]').click();
    cy.wait(500);
    cy.url().should('include', '/');
  });
});
