const siteUrl =/* 'http://localhost:5173/'; */'https://dito-artist.netlify.app/'


describe('template spec', () => {
  it('passes', () => {
    cy.visit(siteUrl)
  })
})