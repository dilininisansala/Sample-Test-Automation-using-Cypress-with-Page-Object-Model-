import CheckoutPageElements from "../pageElements/CheckoutPageElements";

class CheckoutPage {
    clickProceedToCheckout() {
        cy.get(CheckoutPageElements.proceedtocheckoutBtn).click()
    }

    fillShippingInformation(details) {
        cy.get(CheckoutPageElements.firstName).type(details.firstName);
        cy.get(CheckoutPageElements.lastName).type(details.lastName);
        cy.get(CheckoutPageElements.company).type(details.company);
        cy.get(CheckoutPageElements.address).type(details.address);
        cy.get(CheckoutPageElements.city).type(details.city);
        cy.get(CheckoutPageElements.state).select(details.state);
        cy.get(CheckoutPageElements.zip).type(details.zip);
        cy.get(CheckoutPageElements.country).select(details.country);
        cy.get(CheckoutPageElements.phoneNumber).type(details.phone);
    }

    selectShippingMethod() {
        cy.get(CheckoutPageElements.shippingMethods).check();
    }

    clickNext() {
        cy.get(CheckoutPageElements.nextBtn).click();
    }

    placeOrder() {
        cy.get(CheckoutPageElements.placeorderBtn).click();
    }
}

export default new CheckoutPage();