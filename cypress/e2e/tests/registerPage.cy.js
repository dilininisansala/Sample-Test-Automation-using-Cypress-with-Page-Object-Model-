/// <reference types="cypress" />
import RegisterPage from "../pageObjects/pageActions/RegisterActions";

describe('Register Functionality', () => {
    let userData;

    before(() => {
        cy.fixture('registerUserData').then((data) => {
            userData = data; // Load the JSON data before the tests and assign the loaded data to the variable
        });
    });

    beforeEach(() => {
        cy.visit('/customer/account/create')
    });

    it('should register a new user successfully', () => {
        RegisterPage.typeFirstname(userData.validUser.firstName)
        RegisterPage.typeLastname(userData.validUser.lastName)
        RegisterPage.typeEmail(userData.validUser.email)
        RegisterPage.typePassword(userData.validUser.password)
        RegisterPage.typeConfirmpswd(userData.validUser.confirmpassword)
        RegisterPage.clickcreateButton()
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    })


    it('should show an error for invalid email during registration', () => {
        RegisterPage.typeFirstname(userData.validUser.firstName)
        RegisterPage.typeLastname(userData.validUser.lastName)
        RegisterPage.typeEmail(userData.invalidEmail)
        RegisterPage.typePassword(userData.validUser.password)
        RegisterPage.typeConfirmpswd(userData.validUser.confirmpassword)
        RegisterPage.clickcreateButton()
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
    })

    it('should show an error for duplicate email registration', () => {
        RegisterPage.typeFirstname(userData.validUser.firstName)
        RegisterPage.typeLastname(userData.validUser.lastName)
        RegisterPage.typeEmail(userData.duplicateEmail)
        RegisterPage.typePassword(userData.validUser.password)
        RegisterPage.typeConfirmpswd(userData.validUser.confirmpassword)
        RegisterPage.clickcreateButton()
        cy.contains('There is already an account with this email address.').should('be.visible')
    })

})