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