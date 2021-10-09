describe("user can finalise their order", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/products", {
      fixture: "menuItems.json",
    });
    cy.intercept("POST", "**api/carts", {
      statusCode: 201,
      fixture: "successfulAddOrderResponse.json",
    }).as("firstProductRequest");
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
    cy.get("[data-cy=add-to-basket-1]").click();
  });

  describe("by clicking on the finalise order button", () => {
    beforeEach(() => {
      cy.get("[data-cy=view-cart]").click();
    });

    it("is expected that the finalise order button is visible", () => {
      cy.get("[data-cy=finalise-order]").should("be.visible");
    });

    it("is expected to receive a response message from the api", () => {
      cy.get("[data-cy=finalise-response-message]").should(
        "contain",
        "You're order has been finalised"
      );
      cy.get("[data-cy=cart-status]").should("contain.text", "Status: closed");
    });
  });
});
