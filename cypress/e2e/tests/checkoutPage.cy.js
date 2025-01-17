/// <reference types="cypress" />
import CheckoutPage from "../pageObjects/pageActions/CheckoutActions";
import ProductPage from "../pageObjects/pageActions/ProductActions";

describe('Checkout Tests', () => {
    beforeEach(() => {
        cy.session('user-login', () => {
            cy.login('sebastianbeck103@example.com', 'Abcd123#$%')
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome')
        });
        cy.visit('/')
    });

    it('should display error for invalid shipping address details', () => {
        ProductPage.clickcartIcon()
        ProductPage.clickvieweditHyperlink()
        cy.url().should('include', '/checkout/cart/')
        CheckoutPage.clickProceedToCheckout()

        // Load invalid shipping details from JSON fixture
        cy.fixture('invalidshippingDetails').then((invalidshippingDetails) => {
            CheckoutPage.fillShippingInformation(invalidshippingDetails)
            CheckoutPage.clickNext()
            cy.contains('This is a required field').should('be.visible')

        });
    });

    it('should ot allow order placement without payment method selection', () => {
        ProductPage.clickcartIcon()
        ProductPage.clickvieweditHyperlink()
        cy.url().should('include', '/checkout/cart/')
        CheckoutPage.clickProceedToCheckout()

        cy.fixture('ShippingDetails').then((shippingDetails) => {
            CheckoutPage.fillShippingInformation(shippingDetails)
            CheckoutPage.clickNext()
            cy.contains('The shipping method is missing. Select the shipping method and try again.').should('be.visible')

        });
    });

    it('should verify order confirmation page and summary details', () => {
        ProductPage.clickcartIcon()
        ProductPage.clickvieweditHyperlink()
        cy.url().should('include', '/checkout/cart/')
        cy.contains('Order Total').should('be.visible')

        // Load valid shipping details from JSON fixture
        cy.fixture('ShippingDetails').then((shippingDetails) => {
            CheckoutPage.clickProceedToCheckout()
            CheckoutPage.fillShippingInformation(shippingDetails)
            CheckoutPage.selectShippingMethod()
            CheckoutPage.clickNext()
            cy.contains('Payment Method').should('be.visible')
            CheckoutPage.placeOrder()
            cy.url().should('include', '/checkout/onepage/success/')
            cy.contains('Thank you for your purchase!').should('be.visible')
        });
    });
});
