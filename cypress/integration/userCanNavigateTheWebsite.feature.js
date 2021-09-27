describe('User can browser through the app', () => {
  beforeEach(() =>{
    cy.visit("/")
  })
  it('is expected to display the name of the resturant', () => {
    cy.get("[data-cy=resturant-name]").should("contain", "To Gross For Comfort")
  });
});;
