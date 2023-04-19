import {Given,When,Then,And }from'cypress-cucumber-preprocessor/steps';

When(/^I open the browser$/,function () {

// Step vide, pas besoin d'implémentation !

});

When(/^I open Google$/,function () {

cy.visit('');// Take the URL (baseUrl) define in the cypress.config

cy.get('button[id="L2AGLb"]').click();// Find element by id

});

Then(/^I can search$/,function () {

cy.get('form input').should('be.visible');

});