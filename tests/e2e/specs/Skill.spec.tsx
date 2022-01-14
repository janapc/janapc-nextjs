describe('Skill', () => {
  it('Should navigate to the skill page', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('includes', '/skill');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-skill"]').should('be.visible');
    cy.get('[data-testid="link-skill"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-skill"]').contains('Habilidades');
    cy.get('[data-testid="list-skill"] > ').should(($lis) => {
      expect($lis).to.have.length(12);
      expect($lis.eq(0)).to.text('Cypress');
      expect($lis.eq(1)).to.text('Javascript');
      expect($lis.eq(2)).to.text('CSS');
      expect($lis.eq(3)).to.text('Typescript');
      expect($lis.eq(4)).to.text('Jest');
      expect($lis.eq(5)).to.text('Postgressql');
      expect($lis.eq(6)).to.text('HTML');
      expect($lis.eq(7)).to.text('Docker');
      expect($lis.eq(8)).to.text('Nodejs');
      expect($lis.eq(9)).to.text('MongoDB');
      expect($lis.eq(10)).to.text('Nextjs');
      expect($lis.eq(11)).to.text('Reactjs');
    });

    cy.get('[data-testid="theme-light"]').should('be.visible');
  });

  it('Should change theme to light', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('includes', '/skill');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should navigate to the projects page', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('includes', '/skill');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="link-projects"]').click();
    cy.url().should('includes', '/projects');
  });

  it('Should view page to mobile', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('includes', '/skill');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-skill"]').should('be.visible');
    cy.get('[data-testid="link-skill"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-skill"]').contains('Habilidades');
    cy.get('[data-testid="list-skill"] > ').should(($lis) => {
      expect($lis).to.have.length(12);
      expect($lis.eq(0)).to.text('Cypress');
      expect($lis.eq(1)).to.text('Javascript');
      expect($lis.eq(2)).to.text('CSS');
      expect($lis.eq(3)).to.text('Typescript');
      expect($lis.eq(4)).to.text('Jest');
      expect($lis.eq(5)).to.text('Postgressql');
      expect($lis.eq(6)).to.text('HTML');
      expect($lis.eq(7)).to.text('Docker');
      expect($lis.eq(8)).to.text('Nodejs');
      expect($lis.eq(9)).to.text('MongoDB');
      expect($lis.eq(10)).to.text('Nextjs');
      expect($lis.eq(11)).to.text('Reactjs');
    });

    cy.get('[data-testid="theme-light"]').should('be.visible');
  });

  it('Should view page to mobile with theme light', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('include', '/skill');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should view page to mobile and open menu', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('include', '/skill');
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

    cy.get('[data-testid="link-skill"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );
  });

  it('Should view page to mobile and close menu', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('include', '/skill');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="btn-close-mobile-menu"]').click();
  });

  it('Should view page to mobile and navigate to the skill page', () => {
    cy.visit('http://localhost:3000/skill');

    cy.url().should('include', '/skill');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="link-projects"]').click();
    cy.url().should('include', '/projects');
  });
});
