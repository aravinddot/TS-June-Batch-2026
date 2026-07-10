"use strict";
class Product {
    navigateTo() {
        console.log("navigate to product page");
    }
}
class Cart extends Product {
    navigateTo() {
        console.log("navigate to cart page");
    }
}
// const c = new Cart()
// c.navigateTo()
const p = new Product();
p.navigateTo();
//# sourceMappingURL=poly.js.map