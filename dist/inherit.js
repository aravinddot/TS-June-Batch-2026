"use strict";
// parent class
class ProductPages {
    pickTheProduct() {
        console.log('Product is picked');
    }
    checkoutThecart() {
        console.log('checkout the cart');
    }
}
class signUp {
}
// child class
class cartpage extends ProductPages {
    validateCartCheckout() {
        this.pickTheProduct();
        this.checkoutThecart();
        console.log('Validated cart');
    }
}
const cart = new cartpage();
cart.validateCartCheckout();
//# sourceMappingURL=inherit.js.map