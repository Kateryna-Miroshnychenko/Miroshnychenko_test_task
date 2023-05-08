/// <reference types="Cypress"/>

describe('API Test', () => {
  

//Check that page has 200 response
    it("Check status",()=>{
        cy.request('http://quotes.toscrape.com/api/quotes')
        .then((response)=>{
        expect(response).to.have.property('status').to.equal(200)
        expect(response).to.have.property('statusText').to.equal("OK")        
        console.log(response)})
    })

//Check that is first-page 
    it("Check first-page",()=>{
        cy.request('http://quotes.toscrape.com/api/quotes')
        .then((response)=>{
        expect(response.body).to.have.property('has_next').to.equal(true)
        expect(response.body).to.have.property('page').to.equal(1)
        console.log(response)})
    })

//Check the 10th block in quotes block
    it("Check 10th block",()=>{
        cy.request('http://quotes.toscrape.com/api/quotes')
        .then((response)=>{
        expect(response.body.quotes[9].author).to.have.property('goodreads_link').to.equal('/author/show/7103.Steve_Martin')
        expect(response.body.quotes[9].author).to.have.property('name').to.equal('Steve Martin')
        expect(response.body.quotes[9].author).to.have.property('slug').to.equal('Steve-Martin')
        expect(response.body.quotes[9].tags[0]).to.equal('humor')
        expect(response.body.quotes[9].tags[1]).to.equal('obvious')
        expect(response.body.quotes[9].tags[2]).to.equal('simile')
        expect(response.body.quotes[9]).to.have.property('text').to.equal('“A day without sunshine is like, you know, night.”')
        console.log(response)})
    })

//Check 7th tag    
    it("Check first-page",()=>{
        cy.request('http://quotes.toscrape.com/api/quotes')
        .then((response)=>{
        expect(response.body).to.have.property('tag').to.equal(null)
        expect(response.body.top_ten_tags[6][0]).to.equal("friendship")
        expect(response.body.top_ten_tags[6][1]).to.equal(5)
        console.log(response)})
})


})