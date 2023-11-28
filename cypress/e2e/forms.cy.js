describe("Forms spec", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    // cy.contains(/Successfully subbed: okkashaally.com/i).should("not.exist");
    cy.getDataTest("subscribe-form").find("input").type("okkashaally.com");
    cy.getDataTest("subscribe-btn").click();
    // cy.contains(/Successfully subbed: okkashaally.com/i).should("exist");
  });
});
