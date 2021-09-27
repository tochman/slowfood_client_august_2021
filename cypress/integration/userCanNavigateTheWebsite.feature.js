describe("User can browser through the app", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to display the name of the resturant", () => {
    cy.get("[data-cy=resturant-name]").should(
      "contain",
      "To Gross For Comfort?"
    );
  });
  it("it is expected to display a header", () => {
    cy.get("[data-cy=header]").should("be.visible");
  });
  it('is expected to display a Home button', () => {
    cy.get("[data-cy=home]").should("be.visible")
  });
  it('is expected to display a Menu button', () => {
    cy.get("[data-cy=menu]").should("be.visible")
  });
  it('is expected to display a About button', () => {
    cy.get("[data-cy=about]").should("be.visible")
  });
  it("is expected to display a cart icon", () => {
    cy.get("[data-cy=shopping-cart]").should("be.visible");
  });
  it("is expected to display a login button", () => {
    cy.get("[data-cy=btn-login]").should("be.visible");
  });

});
