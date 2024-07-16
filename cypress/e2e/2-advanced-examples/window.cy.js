/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/window')
  })

  it('cy.window() - get the global window object', () => {
    // https://on.cypress.io/window
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    if(window.Cypress) window.appReady = true
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    //useless asertion
    cy.document().its('head').should('have.property','nodeName','HEAD')
    cy.document().then((DOM)=>{
      cy.wrap(DOM.head).as('head')
      cy.wrap(DOM.body).as('body')
    })
  })
  it.only('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().then((title) => {
      const trimmedTitle = title.trim();
      cy.wrap(trimmedTitle).as('title');
    });
    //cy.title().should('include', 'Kitchen Sink')
    cy.get('@title').should('include','Kitchen Sink')
    cy.get('@title').should('eql','Cypress.io: Kitchen Sink')
  })
})
