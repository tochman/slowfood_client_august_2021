describe("user can review their cart", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/products", {
      fixture: "menuItems.json",
    });
    cy.intercept("POST", "**api/carts", {
      statusCode: 201,
      fixture: "successfulAddOrderResponse.json",
    }).as("firstProductRequest");
    cy.intercept("PUT", "**api/carts", {
      statusCode: 200,
      fixture: "successfulAddSecondProductToOrderResponse.json",
    }).as("secondProductRequest");
  });

  describe("clicking the cart button", () => {
    it("is expected to display the current cart with products, status and total price", () => {
      cy.visit("/");
      cy.get("[data-cy=menu]").click();
      cy.get("[data-cy=add-to-basket-1]").click();
      cy.get("[data-cy=view-cart]").click();
      cy.get("[data-cy=cart-details]").should("be.visible");
      cy.get("[data-cy=cart-details]").within(() => {
        cy.get("[data-cy=cart-products]").children().should("have.length", 1);
        cy.get("[data-cy=cart-status]").should("contain.text", "Status: open");
        cy.get("[data-cy=cart-total]").should("contain.text", "To pay: 40kr");
      });
    });
    it("is expected to display a success message", () => {
      cy.get("[data-cy=view-cart]").click();
      cy.get("[data-cy=add-to-basket-2]").click();
      cy.wait("@secondProductRequest")
        .its("response.statusCode")
        .should("eq", 200);
      cy.get("[data-cy=flash-message]").should(
        "contain.text",
        "Fecies Lava Mountain was added to your cart!"
      );
    });
    it("is expected to display the current cart with products, status and total price", () => {
      cy.get("[data-cy=view-cart]").click();
      cy.get("[data-cy=cart-details]").within(() => {
        cy.get("[data-cy=cart-products]").children().should("have.length", 2);
        cy.get("[data-cy=cart-status]").should("contain.text", "Status: open");
        cy.get("[data-cy=cart-total]").should("contain.text", "To pay: 80kr");
      });
    });
  });
  // describe("when the server responds with a 200 status", () => {
  //   beforeEach(() => {
  //     // cy.get("[data-cy=menu]").click();
  //     // cy.get("[data-cy=view-cart]").click();
  //     // cy.get("[data-cy=cart-details]").should("be.visible");
  //   });

  // });
});
