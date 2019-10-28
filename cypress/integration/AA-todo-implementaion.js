describe('Todo page loads', function() {
  
  it('loads all inputs', function() {
    cy.visit('http://localhost:3000/')

    expect(cy.get('.showAll')).to.exist
    expect(cy.get('.showActive')).to.exist
    expect(cy.get('.showCompleted')).to.exist
    
  })

  it('shows only one button disabled at a time', function() {
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

  it('label captures focus for input', function() {
    cy.visit('http://localhost:3000/')

    cy.get('.todo-input-label').click()
    cy.focused().should('have.prop', 'class', 'todo-input')
  })

  it('input captures value and adds todo', function() {
    
    cy.visit('http://localhost:3000/')

    /*check length of list before operation */
    cy.get('.todo-list').then(($ul) => {
      expect($ul[0].children.length).to.equal(2)
    })

    /* check the input is accepting user value*/
    cy.get('.todo-input').click()
    .type('newToDoEh?')
    .should('have.value', 'newToDoEh?')

    /*add todo*/
    cy.get('.todo-submit').click()

    /*check the input is emptied*/
    cy.get('.todo-input').click()
    .should('have.value', '')
    
    /*check the length of the list after adding element*/
    cy.get('.todo-list').then(($ul) => {
      expect($ul[0].children.length).to.equal(3)
    })
  })

})
