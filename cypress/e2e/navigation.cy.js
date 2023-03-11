describe('NavBar component', () => {
  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/explore-main'); // Replace with the actual URL you want to test
    cy.get('[data-cy="home"]').should('exist');
  });

  it('should exist on the page', () => {
    cy.visit('http://localhost:3000/reflect-add-image'); // Replace with the actual URL you want to test
    cy.get('[data-cy="add"]').should('exist');
  });
});
