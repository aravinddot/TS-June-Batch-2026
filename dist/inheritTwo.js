"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheritOne_1 = require("./inheritOne");
class SignUpNewPage extends inheritOne_1.LoginNewPage {
    constructor(user, pass) {
        super(user, pass);
    }
    performLoginin() {
        this.enterUserName();
        this.enterPassword();
        console.log("Logged successfully");
    }
}
const signUp = new SignUpNewPage('Admin', 12345);
signUp.performLoginin();
//# sourceMappingURL=inheritTwo.js.map