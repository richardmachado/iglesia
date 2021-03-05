it('should not be able to access crud operations without being logged in', function () {
  cy.visit("http://localhost:3000/addtemas");
  //should be redirected to login
  cy.get(":nth-child(4) > .nav-link").click();
  cy.get('[for="username"] > .sc-bkzZxe').type("anselmo");
  cy.get('[type="password"]').type("machado");
  cy.get(".sc-crrsfI").click();
  cy.get('[href="/addtemas"]');
  cy.get('[href="/editartemas"]');
  cy.get('[href="/borrartemas"]');
  //logout
  cy.get(":nth-child(4) > .nav-link").click();
})