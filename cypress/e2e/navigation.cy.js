context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Contains all NavBar elements', () => {
    cy.get('nav').contains('/');
    cy.get('nav').contains('material-symbols:home');
    cy.get('nav').contains('material-symbols:help-center');
    cy.get('nav').contains('material-symbols:add');
    cy.get('nav').contains('fa6-solid:ranking-star');
    cy.get('nav').contains('fluent:book-contacts-20-filled');
  });

  it("cy.go() - go back or forward in the browser's history", () => {
    cy.location('pathname').should('include', 'navigation');

    cy.go('back');
    cy.location('pathname').should('not.include', 'navigation');

    cy.go('forward');
    cy.location('pathname').should('include', 'navigation');

    // clicking back
    cy.go(-1);
    cy.location('pathname').should('not.include', 'navigation');

    // clicking forward
    cy.go(1);
    cy.location('pathname').should('include', 'navigation');
  });

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload();

    // reload the page without using the cache
    cy.reload(true);
  });
});
