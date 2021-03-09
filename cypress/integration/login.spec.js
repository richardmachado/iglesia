/// <reference types="cypress" />

it("should navigate to login to  ijsv", function () {
  cy.visit("http://localhost:3000");
  cy.get(":nth-child(4) > .nav-link").click();
  cy.get('[for="username"] > .sc-bkzZxe').type("anselmo");
  cy.get('[type="password"]').type("machado");
  cy.get(".sc-crrsfI").click();
  cy.get('[href="/addtemas"]');
  cy.get('[href="/editartemas"]');
  cy.get('[href="/borrartemas"]');
  //logout
  cy.get(":nth-child(4) > .nav-link").click();
});
