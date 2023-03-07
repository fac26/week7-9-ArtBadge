context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Passes', () => {
    cy.get('.NavBar_vector__okJP0').should('exist');
  });
});
