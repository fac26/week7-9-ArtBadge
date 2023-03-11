context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Passes', () => {
    cy.get('.Layout').within(() => {
      cy.get('[data-cy="home"]').should('exist');
      cy.get('[data-cy="help"]').should('exist');
      cy.get('[data-cy="add"]').should('exist');
      cy.get('[data-cy="ranking-star"]').should('exist');
      cy.get('[data-cy="book-contacts"]').should('exist');
    });
  });
});
