describe('Login Page', () => {
  describe('Error messages', () => {
    it('email input throws error for emre@wit.', () => {
      cy.visit('http://localhost:5179/')
      cy.get('[data-cy="email-input"]').type("emre@wit.")
      cy.contains('Please enter a valid email address')
    })
    it('password input throws error for 1234', () => {
      cy.visit('http://localhost:5179/')
      cy.get('[data-cy="password-input"]').type("1234")
      cy.contains('Password must be at least 8 characters long')
    })
    it('button is disabled for unvalidated inputs.', () => {
      cy.visit('http://localhost:5179/')
      cy.get('[data-cy="submit-button"]').should("be.disabled")
     
    })
  })
})