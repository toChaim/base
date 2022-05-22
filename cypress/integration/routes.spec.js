// routes.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('base test', () => {
  it('should alway pass', () => {
    expect(true).to.equal(true);
  });
});

describe('check routes', () => {
  it('/api', () => {
    cy.request({ url: 'http://localhost:3001/api' }).then((resp) => {
      expect(resp.status).to.eq(200)
    });
  });
});
