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
    cy.get("[data-cy=view-cart]").click();
  });

  describe("when clicking on the finalize order button", () => {
    beforeEach(() => {
      cy.intercept("PUT", "**api/carts?=125&finalized=true", {
        statusCode: 200,
        fixture: "finaliseOrder.json",
      }).as("finalizeOrderRequest");
    });

    it("is expected to display a success message once finalize order btn is clicked ", () => {
      cy.get("[data-cy=finalize-order]").should("be.visible");
      cy.get("[data-cy=finalize-order]").click();
      cy.wait("@finalizeOrderRequest")
        .its("response.statusCode")
        .should("eq", 200);
    });

    it("is expected to receive a response message with the pickup time from the api", () => {
      cy.get("[data-cy=finalise-response-message]").should(
        "contain.text",
        "Your order is ready for pickup at 21:00"
      );
      cy.get("[data-cy=cart-status]").should("contain.text", "Status: closed");
    });
  });
});
