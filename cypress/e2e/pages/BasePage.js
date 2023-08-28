class BasePage {
  visit() {
    cy.visit("/");
  }

  enterText(element, text) {
    cy.get(element).should("be.visible").clear().click().type(text);
  }

  validateText(text) {
    cy.contains(text).should("be.visible");
  }

  validateUrl(url) {
    cy.url().should("contain", url);
  }
}

export default BasePage;
