/// <reference types="Cypress"/>

describe('Scroll page test', () => {
    beforeEach(() => {
        cy.viewport("macbook-15")
        cy.visit('http://quotes.toscrape.com/js-delayed/')
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


//Check the content of 2ed card on 2nd page
it("Check content 5th card",()=>{
    
    cy.get('.next > a').scrollIntoView().should('be.visible').click()
    cy.get('.quote').eq(1).scrollIntoView().should('be.visible')
    cy.get('.quote').find('.text').eq(1).should('contain.text','“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”')
    cy.get('.quote').find('.author').eq(1).should('contain.text','J.K. Rowling')
    cy.get('.quote').find('.tags').eq(1).should('contain.text','courage friends')
    })

//Check the Previous/Next botton
it("Check the Previous/Next botton",()=>{
    cy.contains("Next").scrollIntoView().should('be.visible').click()
    cy.url().should('eq','http://quotes.toscrape.com/js-delayed/page/2/')   
    cy.get('.quote').find('.author').eq(8).should('contain.text','Mark Twain')
    cy.contains("Previous").scrollIntoView().should('be.visible').click()
    cy.url().should('eq','http://quotes.toscrape.com/js-delayed/page/1/')  
    cy.get('.quote').find('.author').eq(3).should('contain.text','Jane Austen')
    })










    })


