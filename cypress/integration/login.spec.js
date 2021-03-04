/// <reference types="cypress" />


it('should navigate to login to  ijsv', function() {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(4) > .nav-link").click();
    cy.get('[for="username"] > .sc-bkzZxe').type("anselmo");
    cy.get('[type="password"]').type("machado");
    cy.get(".sc-crrsfI").click();
    cy.get('[href="/addtemas"]');
    cy.get('[href="/editartemas"]');
    cy.get('[href="/borrartemas"]');
})

it('should add edit and delete a tema', function () {
    cy.get("#title").type("this is a test tema");
    cy.get("#body1").type(
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    );
    cy.get("#body2").type(
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum     lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    );
        cy.get("#body3").type(
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum     lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    );
    cy.get(".sc-iBPRYJ").click();
    
    //edit 

    cy.get(":nth-child(4) > a > .btn").click();
    cy.get("#title").type("1");
    cy.get("#body1").type("2");
    cy.get("#body2").type("3");
    cy.get("#body3").type("4");
    cy.get(".footer > .sc-iBPRYJ").click();

    //verifies it went back to edit
    cy.get(":nth-child(4) > .nav-link");

    //delete
    cy.get('[href="/borrartemas"]').click();
    cy.get(":nth-child(4) > .btn").click();
    



})
