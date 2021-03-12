it("should not be able to access crud operations without being logged in", function () {
  cy.visit("http://localhost:3000/addtemas");
  //should be redirected to login
  cy.get(":nth-child(4) > .nav-link").click();
  cy.get('[for="username"] > .sc-cxFLnm').type("anselmo");
  cy.get('[type="password"]').type("machado");
  cy.get(".sc-dIUggk").click();
  cy.wait(500);
  cy.get('[href="/addtemas"]').click();
  cy.wait(500);
  cy.get('[href="/editartemas"]').click();
  cy.wait(500);
  cy.get('[href="/borrartemas"]').click();
  //logout
  cy.wait(500);
  cy.get(":nth-child(4) > .nav-link").click();
});
