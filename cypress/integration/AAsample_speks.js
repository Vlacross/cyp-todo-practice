
describe('Init test pass', function() {
  it('Ensures the ground is where it should be!', function() {
    expect(true).to.equal(true)
  })
});

describe('site visit', function() {
  it('Obtains foreign content!', function() {
    cy.visit('https://example.cypress.io')

    // cy.contains('filter').click()
    cy.contains('type').click()

    // cy.url().should('include', '/commands/traversal')
    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type("lacksam.splinters@scoars.grum")
      .should('have.value', 'lacksam.splinters@scoars.grum')
      console.log('flooring')
  })
  
});

// describe('Init test fail', function() {
//   it('Ensures the ground is where it shouldn\'t be!', function() {
//     expect(true === false).to.equal(true)
//   })
// });



