describe("Forms spec", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest('subscribe-form').find('input').type('okkashaally.me')
  });
});
