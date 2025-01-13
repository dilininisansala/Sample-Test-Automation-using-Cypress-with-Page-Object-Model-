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
#### Example: Login Test (cypress/e2e/tests/loginPage.cy.js)
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
#### LoginAction.js
You can then modify your LoginAction.js to import and use LoginPageElements
```
import LoginPageElements from "../pageElements/LoginPageElements";

class LoginPage {

    typeUsername(username) {
        cy.get(LoginPageElements.txtUsername).type(username)
    }

    typePassword(password) {
        cy.get(LoginPageElements.txtPassword).type(password)
    }

    clickSubmit() {
        cy.get(LoginPageElements.btnSubmit).click()
    }

}
export default new LoginPage();
```
#### LoginPageElements.js
LoginPageElements.js file would typically contain the locators for the elements on the login page. If locators change, you only need to update them in one place (LoginPageElements.js)
```
const LoginPageElements = {

    txtUsername: '#email',
    txtPassword: '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass',
    btnSubmit: '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
};

export default LoginPageElements;
```
## Update cypress.config.js
![image](https://github.com/user-attachments/assets/d498a66d-49c6-4a1c-83a5-d6d28eadd30c)

## Custom Commands
Add frequently used actions in cypress/support/commands.js
![image](https://github.com/user-attachments/assets/be621631-17e0-4129-9c7c-075c93c1e71f)

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
