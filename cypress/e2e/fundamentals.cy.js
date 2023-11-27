describe("Fundamentals spec", () => {
  it("Page title", () => {
    cy.visit("http://localhost:3000/fundamentals");
    // cy.get('[data-test="fundamental-title"]').contains(/Testing fundamental/i);
    cy.get('[data-test="fundamental-title"]').should('have.text', 'Testing Fundamentals');
  });
});
