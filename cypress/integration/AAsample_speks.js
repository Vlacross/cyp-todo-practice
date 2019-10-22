
describe('Init test pass', function() {
  it('Ensures the ground is where it should be!', function() {
    expect(true).to.equal(true)
  })
});

describe('site visit', function() {
  it('Obtains foreign content!', function() {
    cy.visit('https://example.cypress.io')

    cy.contains('filter').click()

    cy.url().should('include', '/commands/traversal')
  })
});

// describe('Init test fail', function() {
//   it('Ensures the ground is where it shouldn\'t be!', function() {
//     expect(true === false).to.equal(true)
//   })
// });



