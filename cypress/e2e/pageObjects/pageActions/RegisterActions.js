import RegisterPageElements from "../pageElements/RegisterPageElements"

class RegisterPage {

    typeFirstname(firstname) {
        cy.get(RegisterPageElements.firstNametxt).type(firstname)
    }

    typeLastname(lastname) {
        cy.get(RegisterPageElements.lastNametxt).type(lastname)
    }

    typeEmail(email) {
        cy.get(RegisterPageElements.emailtxt).type(email)
    }

    typePassword(password) {
        cy.get(RegisterPageElements.passwordtxt).type(password)
    }

    typeConfirmpswd(confirmpassword) {
        cy.get(RegisterPageElements.confirmpswdtxt).type(confirmpassword)

    }

    clickcreateButton() {
        cy.get(RegisterPageElements.btncreateAccount).click()
    }

}

export default new RegisterPage();