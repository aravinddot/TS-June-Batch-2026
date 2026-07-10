




export class LoginNewPage {

    userNameValue: string
    passwordValue: number

    constructor(userName: string, password: number) {
        this.userNameValue = userName
        this.passwordValue = password
    }



    enterUserName() {
        console.log(this.userNameValue);
        
    }


    enterPassword() {
        console.log(this.passwordValue);
        
    }


}