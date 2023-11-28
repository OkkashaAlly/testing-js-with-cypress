describe("Forms spec", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.contains(/Successfully subbed: okkashaally.com/i).should("not.exist");
    cy.get("@subscribe-input").type("okkashaally.com");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/Successfully subbed: okkashaally.com/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: okkashaally.com/i).should("not.exist");

    cy.contains(/invalid: okkashaally.me/i).should("not.exist");
    cy.get("@subscribe-input").type("okkashaally.me");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/invalid: okkashaally.me/i).should("exist");
  });
});
