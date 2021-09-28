describe("User can see menu", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
  });

  it("is expected to show the first item in the Starters menu", () => {
    cy.get("[data-cy=starter-list]").should("contain", "InsectsCreepy Crawlies250kr");
    
    // cy.get(".desc").should("contain", "Bouncy bouncy");
    // cy.get(".price").should("contain", "500 kr");
    // cy.get(".image").should("be.visible");
    // cy.get("[data-cy=add-to-basket]").should("be.visible");
  });

  // it("is expected to display the main menu", () => {
  //   cy.get("[data-cy=main-menu-header]").should("contain", "Main Menu");
  // });
  // it("is expected to show the first item on the menu", () => {
  //   cy.get("[data-cy=main-menu").next(() => {
  //     cy.get(".dish").should("contain", "Kangaroo Steak");
  //     cy.get(".description").should("contain", "Bouncy bouncy");
  //     cy.get(".price").should("contain", "500 kr");
  //     // cy.get(".image").should("be.visible");
  //     // cy.get("[data-cy=add-to-basket]").should("be.visible");
  //   });
  // });
  // it("is expected to show the first item on the menu", () => {
  //   cy.get("[data-cy=main-menu").children(() => {
  //     cy.get(".dish").should("contain", "Kangaroo Steak");
  //     cy.get(".description").should("contain", "Bouncy bouncy");
  //     cy.get(".price").should("contain", "500 kr");
  //     // cy.get(".image").should("be.visible");
  //     // cy.get("[data-cy=add-to-basket]").should("be.visible");
  //   });
  // });
});
