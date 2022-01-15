describe('Projects', () => {
  it('Should navigate to the projects page', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('includes', '/projects');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-projects"]').should('be.visible');
    cy.get('[data-testid="link-projects"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-projects"]').contains('Projetos');
    cy.get('[data-testid="container-projects"] > ').should('have.length', 3);

    cy.get('[data-testid="moveit-project"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc/move.it'
    );
    cy.get('[data-testid="moveit-project"] > h4').contains('Move.it');
    cy.get('[data-testid="moveit-list"] > ').should(($lis) => {
      expect($lis).to.length(4);
      expect($lis.eq(0)).to.text('Reactjs');
      expect($lis.eq(1)).to.text('Nextjs');
      expect($lis.eq(2)).to.text('Cypress');
      expect($lis.eq(3)).to.text('Jest');
    });

    cy.get('[data-testid="proffy-project"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc/proffy'
    );
    cy.get('[data-testid="proffy-project"] > h4').contains('Proffy');
    cy.get('[data-testid="proffy-list"] > ').should(($lis) => {
      expect($lis).to.length(4);
      expect($lis.eq(0)).to.text('Reactjs');
      expect($lis.eq(1)).to.text('Typescript');
      expect($lis.eq(2)).to.text('Postgresql');
      expect($lis.eq(3)).to.text('Nodejs');
    });

    cy.get('[data-testid="sofaapp-project"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc/sofaapp'
    );
    cy.get('[data-testid="sofaapp-project"] > h4').contains('SofaApp');
    cy.get('[data-testid="sofaapp-list"] > ').should(($lis) => {
      expect($lis).to.length(4);
      expect($lis.eq(0)).to.text('Reactjs');
      expect($lis.eq(1)).to.text('Typescript');
      expect($lis.eq(2)).to.text('Postgresql');
      expect($lis.eq(3)).to.text('Styledcomponents');
    });

    cy.get('[data-testid="theme-light"]').should('be.visible');
  });

  it('Should change theme to light', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('includes', '/projects');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should navigate to the contact page', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('includes', '/projects');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="link-contact"]').click();
    cy.wait(1000);
    cy.url().should('includes', '/contact');
  });

  it('Should view page to mobile', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('includes', '/projects');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="menu"]').should('be.visible');
    cy.get('[data-testid="page-projects"]').should('be.visible');
    cy.get('[data-testid="link-projects"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );

    cy.get('[data-testid="title-projects"]').contains('Projetos');
    cy.get('[data-testid="container-projects"] > ').should('have.length', 3);

    cy.get('[data-testid="moveit-project"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc/move.it'
    );
    cy.get('[data-testid="moveit-project"] > h4').contains('Move.it');
    cy.get('[data-testid="moveit-list"] > ').should(($lis) => {
      expect($lis).to.length(4);
      expect($lis.eq(0)).to.text('Reactjs');
      expect($lis.eq(1)).to.text('Nextjs');
      expect($lis.eq(2)).to.text('Cypress');
      expect($lis.eq(3)).to.text('Jest');
    });

    cy.get('[data-testid="proffy-project"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc/proffy'
    );
    cy.get('[data-testid="proffy-project"] > h4').contains('Proffy');
    cy.get('[data-testid="proffy-list"] > ').should(($lis) => {
      expect($lis).to.length(4);
      expect($lis.eq(0)).to.text('Reactjs');
      expect($lis.eq(1)).to.text('Typescript');
      expect($lis.eq(2)).to.text('Postgresql');
      expect($lis.eq(3)).to.text('Nodejs');
    });

    cy.get('[data-testid="sofaapp-project"]').should(
      'have.attr',
      'href',
      'https://github.com/janapc/sofaapp'
    );
    cy.get('[data-testid="sofaapp-project"] > h4').contains('SofaApp');
    cy.get('[data-testid="sofaapp-list"] > ').should(($lis) => {
      expect($lis).to.length(4);
      expect($lis.eq(0)).to.text('Reactjs');
      expect($lis.eq(1)).to.text('Typescript');
      expect($lis.eq(2)).to.text('Postgresql');
      expect($lis.eq(3)).to.text('Styledcomponents');
    });

    cy.get('[data-testid="theme-light"]').should('be.visible');
  });

  it('Should view page to mobile with theme light', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('include', '/projects');
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');

    cy.get('[data-testid="theme-light"]').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(251, 251, 251)');
  });

  it('Should view page to mobile and open menu', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('include', '/projects');
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

    cy.get('[data-testid="link-projects"]').should(
      'have.css',
      'background-color',
      'rgba(253, 58, 105, 0.22)'
    );
  });

  it('Should view page to mobile and close menu', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('include', '/projects');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="btn-close-mobile-menu"]').click();
  });

  it('Should view page to mobile and navigate to the contact page', () => {
    cy.visit('http://localhost:3000/projects');

    cy.url().should('include', '/projects');
    cy.viewport('iphone-6');

    cy.get('[data-testid="btn-menu"]').click();
    cy.get('[data-testid="link-contact"]').click();
    
    cy.wait(500);
    cy.url().should('include', '/contact');
  });
});
