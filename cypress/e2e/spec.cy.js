const siteUrl ='http://localhost:5173/';/* 'https://dito-artist.netlify.app/' */
const testUser = Cypress.env('testUser')
const testPsswd1 = Cypress.env('testPsswd1')
const testPsswd2 = Cypress.env('testPsswd2')
const testPsswd3 = Cypress.env('testPsswd3')

describe('template spec', () => {
  it('The homepage renders properly', () => { //HomePage
    
    cy.visit(siteUrl)
    cy.get('.social-links-container') //links to Social Networks appear
    cy.get('h5');  //title for latest release renders. Please note if title changes to a different h then this needs to be changed too
    cy.get('img'); // image for latets release renders
    cy.get('h1'); //artist name renders
    cy.get('.menu-btn').click(); //Navbar check
    cy.contains('HomePage');
    cy.contains('Releases');
    cy.contains('Merch');
    cy.contains('Bio');
  })
  it('Releases page from user perspective renders', () => {
    cy.visit(siteUrl)
    cy.get('.menu-btn').click();
    cy.contains('Releases').click (); //Link to Releases works 
    cy.wait(1500);
    cy.get('.card-info'); // Releases page renders releases
    cy.url().should('include', '/releases'); // renders page url works
    cy.get('h3'); //releases page renders a title. Please note if title changes to a different h then this needs to be changed too
    cy.get('img'); // releases page renders an image
  })
  it('Merch page from user perspective renders', () => {
    cy.visit(siteUrl)
    cy.get('.menu-btn').click();
    cy.contains('Merch').click (); //Link to Merch works 
    cy.wait(1500);
    cy.url().should('include', '/products'); //merch page url works
    cy.get('h2'); //merch page renders a title. Please note if title changes to a different h then this needs to be changed too
    cy.get('h3'); //merch page renders a price. Please note if title changes to a different h then this needs to be changed too
    cy.get('img'); //merch page renders an image
    cy.get('.purchase-btn'); //merch page has a purchase button 
  })
  it('Bio page from user perspective renders', () => {
    cy.visit(siteUrl)
    cy.get('.menu-btn').click();
    cy.contains('Bio').click ();  //Link to Bio works
    cy.get('.bio-section');
    cy.url().should('include', '/bio'); //Bio page url works
    cy.get('h1'); //Bio renders an h1, pleso note if h size changes it needs to be changed here too
    cy.get('h3'); //Bio renders artist name, pleso note if h size changes it needs to be changed here too
    cy.get('p'); //Bio renders a description
  })
  it('Login user', () => { //Login
    cy.visit(`${siteUrl}/#/login`)
    cy.get('.menu-btn');
    cy.get('.login-form'); //login site renders a login form
    cy.contains('Email');
    cy.contains('Password');
    cy.contains('Log In');
    cy.get('#email').type(testUser);
    cy.get('#password').type(testPsswd3); 
    cy.get('button.login-btn').click(); //testing login button
    cy.get('.error').contains('Please try again, the email and password did not matched'); //testing if a wrong password sends the correct message to the user
    cy.get('#email').clear().type(testUser);
    cy.get('#password').clear().type(testPsswd2);
    cy.get('button.login-btn').click(); //testing a correct password
    cy.get('.social-links-container') //testing that user was redirected to homepage
    cy.get('h5'); 
    cy.get('h1'); 
    cy.get('img'); 
    cy.get('.menu-btn').click();
    cy.contains('Log Out'); //testing that Navbar now contains a Log Out button
  })
  it('CRUD RELEASES', () => { //Releases CRUD
    cy.visit(`${siteUrl}/#/login`);
    cy.get('#email').clear().type(testUser);
    cy.get('#password').clear().type(testPsswd2);
    cy.get('button.login-btn').click(); //login in first in order for testbot to pass auth and create CRUDs
    cy.get('.menu-btn').click();
    cy.contains('Releases').click();
    cy.wait(1500); // Adjust as needed
    cy.contains('Edit');
    cy.contains('Delete');
    cy.contains('Make Release').click(); //creating a test release
    
    
    cy.get('input#title', { timeout: 10000 }).should('exist').and('be.visible').clear().type('test');
    cy.get('input#date').should('exist').and('be.visible').clear().type('2024-08-23');
    cy.get('input#producer').should('exist').and('be.visible').clear().type('test');
    cy.get('button.save-btn').click(); //test release created
    cy.wait(200);
    
    cy.get('button.edit-btn').last().click(); //editing the test release
    cy.wait(1000);
    cy.get('input#title').should('exist').and('be.visible').clear().type('test2'); //editing the release
    cy.get('button.save-btn').click();
    
    cy.contains('h3', 'test2'); //checking if release edits worked
    cy.get('button.delete-btn').last().click(); //trying to delete release
    cy.get('button.no-btn').click(); //clicking No in warning to see if that works
    cy.get('button.delete-btn').last().click(); 
    cy.get('button.yes-btn').click(); //clicking yes in warning and deleting. If tests faile dprior to this step test needs to be deleted manually
    
    // Ensure the element no longer exists
    cy.contains('h3', 'test2').should('not.exist'); 
  });
  it('MERCH CRUD', () => { //Merch CRUD
    cy.visit(`${siteUrl}/#/login`)
    cy.get('#email').clear().type(testUser);
    cy.get('#password').clear().type(testPsswd2);
    cy.get('button.login-btn').click();  //login in first in order for testbot to pass auth and create CRUDs
    cy.get('.menu-btn').click();
    cy.contains('Merch').click (); 
    cy.wait(1000);
    
    cy.contains('Add Product').click(); //creating new product
    cy.get('input[type="text"]').should('exist').clear().type("sandia");
    cy.get('input[type="number"]').should('exist').clear().type("9.99");
    cy.get('button.save-btn').click();
    cy.wait(200);
    cy.contains('sandia'); //checking if new product was created properly
    cy.contains('9.99');
    cy.get('button.edit-btn').last().click(); //editing the created product
    cy.wait(200);
    cy.get('input[type="number"]').should('exist').clear().type("99.99");
    cy.get('button.save-btn').click();
    cy.contains('sandia');
    cy.contains('99.99'); //checking changing price works well
    cy.get('.menu-btn').click();
    cy.contains('Merch').click (); 
    cy.get('button.delete-btn').last().click(); //testing delete button
    cy.get('button.no-btn').click(); //testing warning flow
    cy.get('button.delete-btn').last().click();
    cy.get('button.yes-btn').click(); //deleting tested product. If test failed prior to this step the test product needs to be deleted manually
    cy.get('.product-relative').contains('sandia').should('not.exist'); //ensuring delete worked. If any real product is called sandia this will fail
  })
})