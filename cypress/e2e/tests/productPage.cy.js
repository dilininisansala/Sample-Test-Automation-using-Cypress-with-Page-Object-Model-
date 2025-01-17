/// <reference types="cypress" />
import ProductPageElements from "../pageObjects/pageElements/ProductPageElements";
import ProductPage from "../pageObjects/pageActions/ProductActions";

const searchQuery = 'shirt';

describe('Add to Cart Functionality', () => {
    beforeEach(() => {
        cy.session('user-login', () => {
            cy.login('sebastianbeck104@example.com', 'Abcd123#$%')
            cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome')
        });
        // Ensure the session is restored by revisiting the page
        cy.visit('/')
    });

    it('should search for a product and verify the search results', () => {
        ProductPage.searchProduct()
        // Validate the URL after the search
        cy.url().should('include', `/catalogsearch/result/?q=${searchQuery}`)
        cy.get(ProductPageElements.productImage).should('be.visible').click()
    });

    it('should validate error when adding a product to the cart without required options', () => {
        ProductPage.searchProduct()
        cy.get(ProductPageElements.productImage).click()
        cy.get(ProductPageElements.addtocartButton).should('be.visible').click()
        cy.contains('This is a required field.').should('be.visible')
    });

    it('should add a product to the cart successfully and verify the cart contents', () => {
        ProductPage.searchProduct()
        cy.get(ProductPageElements.productImage).click()
        ProductPage.verifyProductDetails()
        ProductPage.updateQuantity(2)
        ProductPage.addproducttoCart()
        cy.contains('You added Radiant Tee to your shopping cart.').should('be.visible')
        ProductPage.clickcartIcon()
        ProductPage.clickvieweditHyperlink()
        cy.get(ProductPageElements.productitemDetails).should('contain', 'Radiant Tee')
        cy.get(ProductPageElements.Qty).should('have.value', '2')
        cy.get(ProductPageElements.price).should('be.visible')
    });
})
