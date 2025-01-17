/// <reference types="cypress" />
import LoginPage from "../pageObjects/pageActions/LoginActions";


describe('Login Functionality', () => {
    let loginData;

    // Load the fixture data before the tests
    before(() => {
        cy.fixture('loginUserData').then((data) => {
            loginData = data;
        });
    });

    beforeEach(() => {
        cy.visit('/customer/account/login')
    });

    it('should log in successfully with valid credentials', () => {
        LoginPage.typeUsername(loginData.validUser.email)
        LoginPage.typePassword(loginData.validUser.password)
        LoginPage.clickSubmit()
        cy.get(':nth-child(2) > .greet > .logged-in')
            .should('be.visible')
            .and('have.class', 'logged-in')
    })

    it('should display an error for an invalid email', () => {
        LoginPage.typeUsername(loginData.invalidEmail)
        LoginPage.typePassword(loginData.validUser.password)
        LoginPage.clickSubmit()
        cy.contains(loginData.loginError)
            .should('be.visible')
    })

    it('should display an error for an invalid password', () => {
        LoginPage.typeUsername(loginData.validUser.email)
        LoginPage.typePassword(loginData.invalidPassword)
        LoginPage.clickSubmit()
        cy.contains(loginData.loginError)
            .should('be.visible')
    })

    it('should display an error when fields are left empty', () => {
        LoginPage.clickSubmit()
        cy.contains(loginData.emptyFieldsError).should('be.visible')
    })
})