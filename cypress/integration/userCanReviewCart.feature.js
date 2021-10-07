describe("user can review their cart", () => {
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

  describe("clicking the cart button", () => {
    beforeEach(() => {
      cy.get("[data-cy=view-cart]").click();
      cy.get("[data-cy=cart-details]").should("be.visible");
    });

    it("is expected to display the current cart with products, status and total price", () => {
      cy.get("[data-cy=cart-details]").within(() => {
        cy.get("[data-cy=cart-products]").children().should("have.length", 1);
        cy.get("[data-cy=cart-status]").should("contain.text", "Status: open");
        cy.get("[data-cy=cart-total]").should("contain.text", "To pay: 40kr");
      });
    });
  });
});
