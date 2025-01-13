# Cypress Automation Testing with Page Object Model
## Project Overview 
Automate key functionalities of an e-commerce website using the Page Object Model design pattern to organize the code for reusability, readability, and maintainability.
![Screenshot 2025-01-13 163525](https://github.com/user-attachments/assets/e14207b7-8431-4d7f-82bc-97dd264dc0e0)

## Set Up the Cypress Project 
```
npm init -y
npm install cypress --save-dev
npx cypress open
```

## Directory Structure with POM
Organize the project directory for POM
![Screenshot 2025-01-13 165117](https://github.com/user-attachments/assets/87f9d028-83e5-4330-8a8d-c993fb8bd322)

## Write and Organize Tests
Inside the cypress/e2e directory, create test files for each functionality:
* registerPage.cy.js
* loginPage.cy.js
* productPage.cy.js
* checkoutPage.cy.js

## Write Tests Using Page Classes
#### Login Test (cypress/e2e/tests/loginPage.cy.js)
```
/// <reference types="cypress" />
import LoginPage from "../pageObjects/pageActions/LoginActions";


describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('/customer/account/login')
    });

    // Positive Test Case: Login with valid credentials
    it('should log in successfully with valid credentials', () => {
        LoginPage.typeUsername('sebastianbeck66@example.com')
        LoginPage.typePassword('Abcd123#$%')
        LoginPage.clickSubmit()

        cy.get(':nth-child(2) > .greet > .logged-in')
            .should('be.visible')
            .and('have.class', 'logged-in')
    })

    // Negative Test Case: Invalid email
    it('should display an error for an invalid email', () => {
        LoginPage.typeUsername('sebastian@example.com')
        LoginPage.typePassword('Abcd123#$%')
        LoginPage.clickSubmit()

        // Verify that the error message is shown
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible')
    })

    // Negative Test Case: Invalid Password
    it('should display an error for an invalid password', () => {
        LoginPage.typeUsername('sebastianbeck1@example.com')
        LoginPage.typePassword('Abcd123')
        LoginPage.clickSubmit()

        // Verify that the error message is shown
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible')
    })

    // Negative Test Case: Empty Fields
    it('should display an error when fields are left empty', () => {
        // Click the Login button without entering any data
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()

        // Assert that the error message appears
        cy.contains('This is a required field.').should('be.visible')
        // cy.contains('A login and a password are required.').should('be.visible')
    })
})
```

## Custom Commands
Add frequently used actions in cypress/support/commands.js
```
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.get('#send2').click();
});
```
Example usage in a test
![image](https://github.com/user-attachments/assets/290cb702-fb3b-4328-98a4-f1da144c4445)

## Execute Tests
Run in Cypress GUI
```
npx cypress open
```
Run in Headless Mode
```
npx cypress run
```
