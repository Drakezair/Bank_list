/// <reference types="cypress" />
describe('Bank List', () => {
  it('Api load ok', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('GET', '/catom/api/challenge/banks', {
      fixture: 'bank.json'
    });
    cy.get('#loading').should('exist');
    cy.get('#title').should('exist').should('have.text', 'Bank list');
    cy.get('#Banregio').should('exist');
  });

  it('Api load empty', () => {
    cy.reload();

    cy.intercept('GET', '/catom/api/challenge/banks', {
      fixture: 'empty.json'
    });
    cy.get('#no-banks', { timeout: 20000 })
      .should('exist')
      .should('have.text', 'There is no banks at this moment');
    cy.get('#Banregio').should('not.exist');
  });

  it('Api load wrong', () => {
    cy.reload();

    cy.intercept('GET', '/catom/api/challenge/banks', {
      statusCode: 500
    });
    cy.get('#wrong-title', { timeout: 20000 })
      .should('exist')
      .should('have.text', 'Something wrong');
    cy.get('#Banregio').should('not.exist');
  });
});
