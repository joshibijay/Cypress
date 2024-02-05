// second session in assertion
describe ('Citizen investment Trust', function(){
  beforeEach(()=>{
      cy.visit('/');
  })
  
  
  it('Login with valid credentials +input field + title + have text', () => { 
          cy.get('.form-group').should('have.length',2)
          
          cy.get('#Username').as('username').type('O045719', {delay:500});
          cy.get('@username').should('have.value', 'O045719');
          cy.get('#Password').as('password').type('Pass@1234', {delay:500});
          // have text for text in the page
          cy.get(':nth-child(4) > label').should('exist').and('have.text','Password');
          cy.get('.btn').eq(0).as('submit').click({ force: true });
          cy.title().should('eq', '- Citizen Investment trust from Specific');
          expect(cy.config('viewportWidth')).to.equal(1920);
          expect(cy.config('viewportHeight')).to.equal(1080);
          cy.get('.sidebar-search').find('.text-white').should('have.length',1);
          cy.get('.sidebar').should('have.class','sidebar');
          cy.pause();
          cy.get(':nth-child(7) > .nav-link').click();
          cy.get('#IndexCreate').click({force:true});
          cy.go('back');
          cy.pause();
          cy.go("forward");
  })
  it('Login with invalid username and valid password', () => {
      cy.get('#Username').type('O045718');
      cy.get('#Password').type('Pass@1234');
      cy.get('.btn').eq(0).as('submit').click({ force: true });
      cy.get('.alert').should('contain','Invalid username or password');
      // contains('Invalid username or password');


  })

  it('Login with valid username and invalid password', () => {
      cy.get('#Username').type('O045719');
      cy.get('#Password').type('Pass@123');
      cy.get('.btn').eq(0).as('submit').click({ force: true });
      cy.get('.nav > .sidebar > .navbar-brand > .img-fluid').should('be.visible');
  })

  it('Login with invalid username and invalid password', () => {
      cy.get('#Username').type('O045718');
      cy.get('#Password').type('Pass@124');
      cy.get('.btn').eq(0).as('submit').click({ force: true });
  })

  it.skip('URLinclude', () => {
      cy.get('#Username').type('O045718');
      cy.get('#Password').type('Pass@1234');
      cy.get('.btn').eq(0).as('submit').click({ force: true });

  })
  it('title check',() =>{
      cy.get('#Username').type('O045719');
      cy.get('#Password').type('Pass@1234');
      cy.get('.btn').eq(0).as('submit').click({ force: true });
      cy.title().should('include', 'Investment trust from Specific')
  })
  it('title check incorrect with eq',() =>{
      cy.get('#Username').type('O045719');
      cy.get('#Password').type('Pass@1234');
      cy.get('.btn').eq(0).as('submit').click({ force: true });
      cy.title().should('eq', 'Investment trust from Specific')
  })
      it.only('Check title after login',() =>{
      cy.get('#Username').type('O045719');
      cy.get('#Password').type('Pass@1234');
      cy.get('.btn').eq(0).as('submit').click({ force: true });
      cy.title().should('eq', '- Citizen Investment trust from Specific')
  })
  it('Logo test', () => { 
      cy.get('#Username').as('username').type('O045719');
      cy.get('#Password').as('password').type('Pass@1234');
      cy.get('.btn').eq(0).as('submit').click({ force: true }); 
      cy.get('.nav > .sidebar > .navbar-brand > .img-fluid').should('exist');
  })


})
