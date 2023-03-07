context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Contains all Nav elements', () => {
    cy.get('nav').contains('/');
    cy.get('nav').contains('Sign In');
    cy.get('nav').contains('Sign Up');
  });

  it("Home click takes to route '/'", () => {
    cy.get('nav').contains('Home').click();
    cy.location('pathname').should('include', '');
  });

  it("Login click takes to route '/sign-in'", () => {
    cy.get('nav').contains('Sign In').click();
    cy.location('pathname').should('include', 'sign-in');
  });

  it("Sign Up click takes to route '/sign-up'", () => {
    cy.get('nav').contains('Sign Up').click();
    cy.location('pathname').should('include', 'sign-up');
  });

  it("Logo Click takes to home route '/'", () => {
    cy.get('#logo').contains('ArtBadge').click();
    cy.location('pathname').should('include', '');
  });
});
