import ProductPageElements from "../pageElements/ProductPageElements";

const searchQuery = 'shirt';

class ProductPage {

    searchProduct() {
        cy.get(ProductPageElements.searchBar)
            .should('be.visible')
            .type(`${searchQuery}{enter}`)
    }

    verifyProductDetails() {
        cy.get(ProductPageElements.productSize).click();
        cy.get(ProductPageElements.productColor).click();
    }

    updateQuantity(quantity) {
        cy.get(ProductPageElements.quantity).clear().type(quantity);
        cy.get(ProductPageElements.addtocartButton).click();
    }

    addproducttoCart() {
        cy.get(ProductPageElements.addtocartButton).click();
    }

    clickcartIcon() {
        cy.get(ProductPageElements.cartIcon).click();
    }

    clickvieweditHyperlink() {
        cy.get(ProductPageElements.vieweditHyperlink).click();
    }
}

export default new ProductPage();