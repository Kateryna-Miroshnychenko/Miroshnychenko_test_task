/// <reference types="Cypress"/>

describe('Scroll page test', () => {
    beforeEach(() => {
        cy.viewport("macbook-15")
        cy.visit('http://quotes.toscrape.com/scroll')
      })

//Checking that logo is visible and redirecting to the home page 
it("Check logo",()=>{
    cy.contains('Quotes to Scrape').should('be.visible').click()
    cy.url().should('eq','http://quotes.toscrape.com/')
    
})      

//Checking that the login button is visible and redirected to the login page
it("Check login button",()=>{
    cy.contains('Login').should('be.visible').click()
    cy.url().should('eq','http://quotes.toscrape.com/login')   
    
})

//Checking the scroll works correctly
it("Check scroll",()=>{
    cy.get('.quote').eq(7).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(27).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(38).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(45).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(60).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(72).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(80).scrollIntoView().should('be.visible')
    cy.get('footer').scrollIntoView().should('be.visible')

})

//Check the content of 51th card
it("Check content 51th card",()=>{
    cy.get('.quote').eq(9).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(19).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(29).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(39).scrollIntoView().should('be.visible')
    cy.get('.quote').eq(49).scrollIntoView().should('be.visible')
    cy.get('.quote').find('.text').eq(50).should('contain.text','“There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.”')
    cy.get('.quote').find('.author').eq(50).should('contain.text','Jane Austen')
    cy.get('.quote').find('.tags').eq(50).should('contain.text','friendship love')
    })


})