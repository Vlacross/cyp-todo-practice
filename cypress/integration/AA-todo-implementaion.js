describe('Todo page loads', function() {
  
  it('loads all inputs', function() {
    cy.visit('http://localhost:3000/')

    expect(cy.get('.showAll')).to.exist
    expect(cy.get('.showActive')).to.exist
    expect(cy.get('.showCompleted')).to.exist
    
  })

  it.only('shows only one button disabled at a time', function() {
    cy.visit('http://localhost:3000/')

    /*check the default button is the only button disabled */
    cy.get(['.showAll', 'showActive', '.showCompleted'])
    cy.get('.showAll')
    .should('have.prop', 'disabled', true)
    cy.get('.showActive')
    .should('have.prop', 'disabled', false)
    cy.get('.showCompleted')
    .should('have.prop', 'disabled', false)

    /*check the next button */
    cy.get('.showActive').click()
    cy.get('.showActive')
    .should('have.prop', 'disabled', true)
    cy.get('.showAll')
    .should('have.prop', 'disabled', false)
    cy.get('.showCompleted')
    .should('have.prop', 'disabled', false)

    /*check the last button */
    cy.get('.showCompleted').click()
    cy.get('.showCompleted')
    .should('have.prop', 'disabled', true)
    cy.get('.showAll')
    .should('have.prop', 'disabled', false)
    cy.get('.showActive')
    .should('have.prop', 'disabled', false)

   
    
  })


})



// cy.get(['.showAll', 'showActive', '.showCompleted'])
// // cy.get('.showAll').to.have.attr('disabled')
// cy.get('.showAll')
// .should('have.prop', 'disabled', true)
// cy.get('.showActive')
// .should('have.prop', 'disabled', false)
// cy.get('.showCompleted')
// .should('have.prop', 'disabled', false)