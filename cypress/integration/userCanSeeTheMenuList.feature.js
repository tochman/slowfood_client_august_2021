describe("User can see menu", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
  });

  it("is expected to display the main menu", () => {
    cy.get("[data-cy=main-menu]").should("contain", "Main Menu");
  });

  it("is expected to show the first item on the menu", () => {
    cy.get("[data-cy=item-1").within(() => {
      cy.get(".header").should("contain", "Kangaroo Steak");
      cy.get(".description").should("contain", "Bouncy bouncy");
      cy.get(".value").should("contain", "500 kr");
      cy.get(".image").find("img").should("be.visible");
      cy.get("[data-cy=add-to-basket]").should("be.visible");
    });
  });
});
