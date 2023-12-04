describe("Various Examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav-forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("nav-examples").click();
    cy.location("pathname").should("equal", "/examples");
  });
  it("intercept request", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.wait(3000);
    cy.getDataTest("post-btn").click();
  });
  it.only("grudge list work", () => {
    cy.wait(3000);
    cy.contains(/add some grudge/i);

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0);
    });

    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("Some grudge");
    });
    cy.getDataTest("grudge-btn").click();
    cy.wait(2000);

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });

    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("number 2");
    });
    cy.getDataTest("grudge-btn").click();
    cy.wait(2000);

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2);
      cy.get("li").its(0).should("contains.text", "Some grudge");
    });

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });

    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1);
    });
  });
});
