context('Navigation', () => {
  cy.visit('http://localhost:3000');
  cy.visit('http://localhost:3000/explore-reflect');
  cy.visit('http://localhost:3000/reflect-add-image');
  cy.visit('http://localhost:3000/explore-rankings');
  cy.visit('http://localhost:3000//reflect-personal-contact');

  it('Passes', () => {
    cy.get('[data-cy="home"]').should('exist');
    cy.get('[data-cy="help"]').should('exist');
    cy.get('[data-cy="add"]').should('exist');
    cy.get('[data-cy="ranking-star"]').should('exist');
    cy.get('[data-cy="book-contacts"]').should('exist');
  });
});
