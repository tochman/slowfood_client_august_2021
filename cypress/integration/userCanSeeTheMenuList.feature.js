describe("User can see menu", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
  });

  it("is expected to show the first item in the Starters menu", () => {
    cy.get("[data-cy=item-1]").within(() => {
      cy.get(".header").should("contain", "Insect")
      cy.get(".description").should("contain", "Bouncy bouncy");
      cy.get(".item").should("contain", "500 kr");
      cy.get(".image").should("be.visible");
      cy.get("[data-cy=add-to-basket]").should("be.visible");
    });
  });
});
