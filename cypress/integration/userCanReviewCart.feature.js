describe('user can review their cart with one product', () => {
  beforeEach(() => {
    cy.intercept('GET', '**api/products', {
      fixture: 'menuItems.json',
    });
    cy.intercept('POST', '**api/carts', {
      statusCode: 201,
      fixture: 'successfulAddOrderResponse.json',
    }).as('firstProductRequest');
    cy.visit('/');
    cy.get('[data-cy=menu]').click();
    cy.get('[data-cy=add-to-basket-1]').click();
  });

  describe('clicking the cart button', () => {
    beforeEach(() => {
      cy.get('[data-cy=view-cart]').click();
      cy.get('[data-cy=cart-details]').should('be.visible');
    });

    it('is expected to display the current cart with products, status and total price', () => {
      cy.get('[data-cy=cart-details]').within(() => {
        cy.get('[data-cy=cart-products]').children().should('have.length', 1);
        cy.get('[data-cy=cart-status]').should('contain.text', 'Status: open');
        cy.get('[data-cy=cart-products]').should('contain.text', 'Insects');
        cy.get('[data-cy=cart-total]').should('contain.text', 'To pay: 40kr');
      });
    });
  });

  describe('user can review their cart with multiple products', () => {
    beforeEach(() => {
      cy.intercept('PUT', '**api/carts', {
        statusCode: 200,
        fixture: 'successfulAddSecondProductToOrderResponse.json',
      }).as('secondProductRequest');
      // cy.get('[data-cy=view-cart]').click();
      cy.get('[data-cy=desserts-tab]').click();
      cy.get('[data-cy=add-to-basket-5]').click();
      cy.get('[data-cy=view-cart]').click();
    });

    it('is expected to display multiple produtcts in the cart', () => {
      cy.get('[data-cy=cart-details]').within(() => {
        cy.get('[data-cy=cart-products]').children().should('have.length', 2);
        cy.get('[data-cy=cart-status]').should('contain.text', 'Status: open');
        cy.get('[data-cy=cart-products]').should(
          'contain.text',
          'Insects' && 'Fecies Lava Mountain'
        );
        cy.get('[data-cy=cart-total]').should('contain.text', 'To pay: 80kr');
      });
    });
  });
});
