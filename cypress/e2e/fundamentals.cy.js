describe("Fundamentals spec", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("Page title", () => {
    // cy.get('[data-test="fundamental-title"]').contains(/Testing fundamental/i);
    cy.get('[data-test="fundamental-title"]').should(
      "have.text",
      "Testing Fundamentals"
    );
  });
  it.only("Accordion works", () => {
    cy.contains("Your tests will exist in a describe block.").should(
      "not.be.visible"
    );
    cy.get("[data-test='accordion-item-1'] div[role='button']").click();
    cy.contains("Your tests will exist in a describe block.").should(
      "be.visible"
    );
    cy.get("[data-test='accordion-item-1'] div[role='button']").click();
    cy.contains("Your tests will exist in a describe block.").should(
      "not.be.visible"
    );
  });
});
