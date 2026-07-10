import { LoginNewPage } from "./inheritOne";






class SignUpNewPage extends LoginNewPage {


    constructor(user: string, pass: number) {
        super(user, pass)
    }



    performLoginin() {
        this.enterUserName()
        this.enterPassword()
        console.log("Logged successfully");

    }


}




const signUp = new SignUpNewPage('Admin', 12345)

signUp.performLoginin()
