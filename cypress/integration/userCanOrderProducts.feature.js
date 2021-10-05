describe("user adds a product to cart", () => {
  beforeEach(() => {
    cy.intercept("GET", "**api/products", {
      fixture: "menuItems.json",
    });
    cy.intercept("POST", "**api/carts", {
      statusCode: 201,
      fixture: "successfulAddOrderResponse.json",
    }).as("firstProductRequest")
    cy.visit("/");
    cy.get("[data-cy=menu]").click();
  });

  describe('clicking add to cart button', () => {
    it('is expected to display a success message', () => {
      cy.get("[data-cy=add-to-basket-1]").click()
      cy.wait('@firstProductRequest').its('response.statusCode').should('eq', 201)
      cy.get("[data-cy=flash-message]").should("contain.text", "Insects was added to your cart!")
    });
  });
});
