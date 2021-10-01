describe("User can create an account", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to be able to register as an User", () => {
    cy.get("[data-cy=btn-login]").click();
    cy.get("[data-cy=btn-signup]").should("be.visible")
  });
});
