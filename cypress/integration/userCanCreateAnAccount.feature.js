describe("User can create an account", () => {
  beforeEach(() => {
    cy.intercept("**api/auth/**", {
      fixture: "userRegistrationResponse.json",
    });
    cy.visit("/");
    cy.get("[data-cy=btn-login]").click();
  });

  it("is expected to be able to register as an User", () => {
    cy.get("[data-cy=btn-signup]").should("be.visible");
  });

  it("is expected to have three input fields", () => {
    cy.get("form").children().should("have.length", 4);
  });

  it("is expected to make an API post call when signing up", () => {
    cy.get("[data-cy=email-input]").type("user@email.com");
    cy.get("[data-cy=password-input]").type("password");
    cy.get("[data-cy=confirm-password-input]").type("password");
    cy.get("[data-cy=btn-signup]").click();
    cy.get("[data-cy=registration-message]").should(
      "contain",
      "Registration successful"
    );
  });

  describe("Email validation", () => {
    it("is expected not to display error with valid email address", () => {
      cy.get("[data-cy=email-input]").type("user@email.com");
      cy.get("#form-input-control-error-email-error-message").should(
        "not.exist"
      );
    });

    it("is expected to display error with invalid email address", () => {
      cy.get("[data-cy=email-input]").type("useremail.com");
      cy.get("#form-input-control-error-email-error-message").should("exist");
    });
  });
});
