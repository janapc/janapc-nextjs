describe('Home', () => {
  it('Should navigate to the home page', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="link-"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="page-home"]').should('be.visible');

    cy.get('[data-testid="list-menu"] > li').should(($lis) => {
      expect($lis).to.have.length(6);
      expect($lis.eq(0)).to.contain('Inicio');
      expect($lis.eq(1)).to.contain('Sobre Mim');
      expect($lis.eq(2)).to.contain('Empregos');
      expect($lis.eq(3)).to.contain('Habilidades');
      expect($lis.eq(4)).to.contain('Projetos');
      expect($lis.eq(5)).to.contain('Contato');
    });

    cy.get('[data-testid="theme-light"]').should('be.visible');

    cy.get('[data-testid="image-home"]').should('be.visible');
    cy.get('[data-testid="apresention-home"]').contains('Olá, sou');
    cy.get('h2').contains('Janaina Pedrina');
    cy.get('span').contains('Desenvolvedora júnior na D1 Smarkio');
    cy.get('[data-testid="details-home"]').contains(
      'Sou uma desenvolvedora backend que adora desafios e que se aventura um pouco no frontend.'
    );
  });

  it('Should change theme to light', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
    
    cy.get('[data-testid="theme-dark"]').should('be.visible');
  });

  it('Should navigate to the about page', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');

    cy.get('[data-testid="link-about"]').click();
    cy.wait(500);
    cy.url().should('include', '/about');
  });

  it('Should view page to mobile', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-home"]').should('be.visible');

    cy.get('[data-testid="list-menu"] > li').should(($lis) => {
      expect($lis).to.have.length(6);
      expect($lis.eq(0)).to.contain('Inicio');
      expect($lis.eq(1)).to.contain('Sobre Mim');
      expect($lis.eq(2)).to.contain('Empregos');
      expect($lis.eq(3)).to.contain('Habilidades');
      expect($lis.eq(4)).to.contain('Projetos');
      expect($lis.eq(5)).to.contain('Contato');
    });

    cy.get('[data-testid="theme-light"]').should('be.visible');

    cy.get('[data-testid="image-home"]').should('be.visible');
    cy.get('[data-testid="apresention-home"]').contains('Olá, sou');
    cy.get('h2').contains('Janaina Pedrina');
    cy.get('span').contains('Desenvolvedora júnior na D1 Smarkio');
    cy.get('[data-testid="details-home"]').contains(
      'Sou uma desenvolvedora backend que adora desafios e que se aventura um pouco no frontend.'
    );
  });

  it('Should view page to mobile with theme light', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should view page to mobile and open menu', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');
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

    cy.get('[data-testid="link-"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );
  });

  it('Should view page to mobile and close menu', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="btn-close-mobile-menu"]').click();
  });

  it('Should view page to mobile and navigate to the about page', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('include', '/');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="link-about"]').click();
    
    cy.wait(500);
    cy.url().should('include', '/about');
  });
});
