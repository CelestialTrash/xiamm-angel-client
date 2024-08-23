const siteUrl ='http://localhost:5173/';/* 'https://dito-artist.netlify.app/' */
const testUser = Cypress.env('testUser')
const testPsswd1 = Cypress.env('testPsswd1')
const testPsswd2 = Cypress.env('testPsswd2')
const testPsswd3 = Cypress.env('testPsswd3')

describe('template spec', () => {
  it('The homepage renders properly', () => { //HomePage
    
    cy.visit(siteUrl)
    cy.get('.social-links-container')
    cy.get('h5'); 
    cy.get('h1'); 
    cy.get('img'); 
    cy.get('.menu-btn').click();
    cy.contains('HomePage');
    cy.contains('Releases');
    cy.contains('Merch');
    cy.contains('Bio');
  })
  it('Releases page from user perspective renders', () => {
    cy.visit(siteUrl)
    cy.get('.menu-btn').click();
    cy.contains('Releases').click (); 
    cy.wait(1500);
    cy.get('.card-info');
    cy.url().should('include', '/releases');
    cy.get('h3'); 
    cy.get('img'); 
  })
  it('Merch page from user perspective renders', () => {
    cy.visit(siteUrl)
    cy.get('.menu-btn').click();
    cy.contains('Merch').click (); 
    cy.wait(1500);
    cy.url().should('include', '/products');
    cy.get('h2'); 
    cy.get('h3'); 
    cy.get('img');
    cy.get('.purchase-btn');  
  })
  it('Bio page from user perspective renders', () => {
    cy.visit(siteUrl)
    cy.get('.menu-btn').click();
    cy.contains('Bio').click (); 
    cy.get('.bio-section');
    cy.url().should('include', '/bio');
    cy.get('h1'); 
    cy.get('h3'); 
    cy.get('p'); 
  })
  it('Login user', () => { //Login
    cy.visit(`${siteUrl}/#/login`)
    cy.get('.menu-btn');
    cy.get('.login-form');
    cy.contains('Email');
    cy.contains('Password');
    cy.contains('Log In');
    cy.get('#email').type(testUser);
    cy.get('#password').type(testPsswd3); 
    cy.get('button.login-btn').click();
    cy.get('.error').contains('Please try again, the email and password did not matched');
    cy.get('#email').clear().type(testUser);
    cy.get('#password').clear().type(testPsswd2);
    cy.get('button.login-btn').click();
    cy.get('.social-links-container')
    cy.get('h5'); 
    cy.get('h1'); 
    cy.get('img'); 
    cy.get('.menu-btn').click();
    cy.contains('Log Out');
  })
  it('CRUD RELEASES', () => { //Releases CRUD
    cy.visit(`${siteUrl}/#/login`);
    cy.get('#email').clear().type(testUser);
    cy.get('#password').clear().type(testPsswd2);
    cy.get('button.login-btn').click();
    cy.get('.menu-btn').click();
    cy.contains('Releases').click();
    cy.wait(1500); // Adjust as needed
    cy.contains('Edit');
    cy.contains('Delete');
    cy.contains('Make Release').click();
    
    // Ensure the input field exists and is available before interacting
    cy.get('input#title', { timeout: 10000 }).should('exist').and('be.visible').clear().type('test');
    cy.get('input#date').should('exist').and('be.visible').clear().type('2024-08-23');
    cy.get('input#producer').should('exist').and('be.visible').clear().type('test');
    cy.get('button.save-btn').click();
    cy.wait(200);
    
    cy.get('button.edit-btn').last().click();
    cy.wait(1000);
    cy.get('input#title').should('exist').and('be.visible').clear().type('test2');
    cy.get('button.save-btn').click();
    
    cy.contains('h3', 'test2');
    cy.get('button.delete-btn').last().click();
    cy.get('button.no-btn').click();
    cy.get('button.delete-btn').last().click();
    cy.get('button.yes-btn').click();
    
    // Ensure the element no longer exists
    cy.contains('h3', 'test2').should('not.exist');
  });
  it('MERCH CRUD', () => { //Merch CRUD
    cy.visit(`${siteUrl}/#/login`)
    cy.get('#email').clear().type(testUser);
    cy.get('#password').clear().type(testPsswd2);
    cy.get('button.login-btn').click();
    cy.get('.menu-btn').click();
    cy.contains('Merch').click (); 
    cy.wait(1000);
    cy.contains('Edit'); 
    cy.contains('Add Product').click();
    cy.get('input[type="text"]').should('exist').clear().type("sandia");
    cy.get('input[type="number"]').should('exist').clear().type("9.99");
    cy.get('button.save-btn').click();
    cy.wait(200);
    cy.contains('sandia');
    cy.contains('9.99');
    cy.get('.menu-btn').click();
    cy.contains('Merch').click (); 
    cy.get('button.edit-btn').last().click();
    cy.wait(200);
    cy.get('input[type="number"]').should('exist').clear().type("99.99");
    cy.get('button.save-btn').click();
    cy.contains('sandia');
    cy.contains('99.99');
    cy.contains('h3','test2');
    cy.get('button.delete-btn').last().click();
    cy.get('button.no-btn').click();
    cy.get('button.delete-btn').last().click();
    cy.get('button.yes-btn').click();
    cy.contains('h2','sandia').last().should('not.exist');
  })
})