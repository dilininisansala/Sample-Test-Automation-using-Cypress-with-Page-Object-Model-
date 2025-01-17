const CheckoutPageElements = {

    orderTotal: '.mark > strong',
    proceedtocheckoutBtn: '.checkout-methods-items > :nth-child(1) > .action',
    firstName: '[name="shippingAddress.firstname"]',
    lastName: '[name="shippingAddress.lastname"]',
    company: '[name="shippingAddress.company"]',
    address: 'input[name="street[0]"]',
    city: '[name="shippingAddress.city"]',
    state: 'select[name="region_id"]',
    zip: '[name="shippingAddress.postcode"]',
    country: 'select[name="country_id"]',
    phoneNumber: '[name="shippingAddress.telephone"]',
    shippingMethods: ':nth-child(1) > :nth-child(1) > .radio',
    nextBtn: '.button',
    checkOrder: '#billing-address-same-as-shipping-checkmo',
    placeorderBtn: '.payment-method-content > :nth-child(4) > div.primary > .action'
};

export default CheckoutPageElements;