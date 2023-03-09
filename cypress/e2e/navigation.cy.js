describe('Navigation Bar', () => {
  it('should have all required navigation bar elements', () => {
    cy.visit('http://www.localhost:3000/explore-reflect'); // navigate to the home/explore-reflect page containing the navigation bar
    cy.get('[data-cy="home"]').should('exist');
  });

  it('should have all required navigation bar elements', () => {
    cy.visit('http://www.localhost:3000'); // navigate to the help page containing the navigation bar
    cy.get('[data-cy="help"]').should('exist');
  });

  it('should have all required navigation bar elements', () => {
    cy.visit('http://www.localhost:3000/reflect-add-image'); // navigate to the add page containing the navigation bar
    cy.get('[data-cy="add"]').should('exist');
  });

  it('should have all required navigation bar elements', () => {
    cy.visit('http://www.localhost:3000/explore-rankings'); // navigate to the ranking star page containing the navigation bar
    cy.get('[data-cy="ranking-star"]').should('exist');
  });

  it('should have all required navigation bar elements', () => {
    cy.visit('http://www.localhost:3000/reflect-personal-contact'); // navigate to the book contacts page containing the navigation bar
    cy.get('[data-cy="book-contacts"]').should('exist');
  });
});
