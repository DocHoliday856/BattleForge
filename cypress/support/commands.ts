// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/// <reference types="cypress" />


declare namespace Cypress {
    interface Chainable<Subject> {
        seedAndVisit: typeof seedAndVisit;
    }
}

function seedAndVisit(seedData = 'fixture:multiFaction'): any {
    cy.server();
    cy.route('GET', 'http://localhost:3000/factions', seedData).as('seed');
    cy.visit("/factions");
    cy.wait('@seed');
};

Cypress.Commands.add('seedAndVisit', seedAndVisit);