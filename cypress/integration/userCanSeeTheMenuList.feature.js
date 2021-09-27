describe('User can see menu', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.get("[data-cy=menu]").click()
  });

  it('is expected to display the main menu', () => {
    cy.get("[data-cy=main-menu]").should("contain", "Main Menu")
  });

  it('is expected to show the first item on the menu', () => {
    cy.get("[data-cy=item-1").within(() =>{
      cy.get("[data-cy=id]").should("contain", 1)
      cy.get("[data-cy=dish]").should("contain","Kangaroo Steak")
      cy.get("[data-cy=description]").should("contain", "Bouncy bouncy")
      cy.get("[data-cy=price]").should("contain", "500 kr")
      // a picture?
      cy.get("[data-cy=add-to-basket]").should("be.visible")
    })
  });

});