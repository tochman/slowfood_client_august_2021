describe("User can see menu", () => {
  beforeEach(() => {
    cy.intercept("https://localhost:3000/api/menu", {
      fixture: "menuItems.json",
    });
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
  });

  it("is expected to show the first item in the Starters menu", () => {
    cy.get("[data-cy=item-1]").within(() => {
      cy.get("[data-cy=dish]").should("contain", "Insect");
      cy.get("[data-cy=description]").should("contain", "Creepy Crawlies");
      cy.get("[data-cy=price]").should("contain", "250 kr");
      cy.get("[data-cy=image]").should("be.visible");
      cy.get("[data-cy=add-to-basket]").should("be.visible");
    });
  });

  it("is expected to show six items in the menu", () => {
    cy.get("[data-cy=menu-section]").children().should("have.length", 6);
  });
});
