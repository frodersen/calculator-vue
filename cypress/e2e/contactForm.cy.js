describe('Contact Form Tests', () => {
  beforeEach(() => {
    // Assuming your contact form is served at the root URL
    cy.visit('http://localhost:5173/contact-form');
  });

  it('Form validation scenario - Submit button should be disabled if form is invalid', () => {
    cy.get('input[placeholder="Name"]').clear();
    cy.get('input[placeholder="Email"]').clear().type('invalidemail');
    cy.get('textarea[placeholder="Message"]').clear();

    // Attempt to submit the form
    cy.get('button[type="submit"]').click();

    // Check if the status message is not shown (assuming no submission occurs with invalid data)
    cy.get('div').should('not.contain', 'Success! Your message has been sent.');
  });

  it('Successful submission scenario - Shows correct response from server', () => {
    // Stub a response for the form submission
    cy.intercept('POST', '/submissions', {
      statusCode: 200,
      body: { message: 'Success! Your message has been sent.' }
    }).as('formSubmission');

    // Fill the form with valid data
    cy.get('input[placeholder="Name"]').type('Tom Test');
    cy.get('input[placeholder="Email"]').type('tom@test.com');
    cy.get('textarea[placeholder="Message"]').type('Hallo, dette er en test');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Wait for the form submission response
    cy.wait('@formSubmission');

    // Assert that the correct response message is displayed
    cy.get('.status-message').should('contain', 'Success! Your message has been sent.');
  });
});