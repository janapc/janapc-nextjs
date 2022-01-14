describe('404', () => {
  it('Should navigate to the 404 page', () => {
    cy.visit('http://localhost:3000/404', {failOnStatusCode: false});

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="page-notfound"]').should('be.visible');
    cy.get('[data-testid="image-cry"]').should('be.visible');
    cy.get('[data-testid="description-notfound"]').contains('Oh sorry this page is not found');
    
  });

  it('Should view page to mobile', () => {
    cy.visit('http://localhost:3000/404', {failOnStatusCode: false});
    cy.viewport('iphone-6');

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 29, 30)');
    cy.get('[data-testid="page-notfound"]').should('be.visible');
    cy.get('[data-testid="image-cry"]').should('be.visible');
    cy.get('[data-testid="description-notfound"]').contains('Oh sorry this page is not found');
  });
});
