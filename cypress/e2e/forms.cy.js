describe("Forms spec", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.wait(3000);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.contains(/Successfully subbed: okkashaally.com/i).should("not.exist");
    cy.get("@subscribe-input").type("okkashaally.com");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/Successfully subbed: okkashaally.com/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: okkashaally.com/i).should("not.exist");

    cy.get("@subscribe-input").type("okkashaally.me");
    cy.contains(/invalid email: okkashaally.me/i).should("not.exist");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/invalid email: okkashaally.me/i).should("exist");
    cy.wait(3000);
    cy.contains(/invalid email: okkashaally.me/i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000);
    cy.contains(/fail!/i).should("not.exist");
  });
});
