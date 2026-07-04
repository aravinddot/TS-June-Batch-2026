"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPage = exports.LoginPage = void 0;
class LoginPage {
    constructor() {
        this.user = 'Admin';
        this.pass = 12345;
    }
    userName() {
        console.log(`${this.user} Entered`);
    }
    password() {
        console.log(`${this.pass} Entered`);
    }
    userLogin() {
        this.userName();
        this.password();
        console.log('Click on login button');
        console.log('User logged in successfully');
    }
}
exports.LoginPage = LoginPage;
class ProductPage {
}
exports.ProductPage = ProductPage;
// const login = new LoginPage()
// // login.userName()
// // login.password()
// // login.userLogin()
// login.userLogin()
//# sourceMappingURL=fileOne.js.map