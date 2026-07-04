




export class LoginPage {


    user: string
    pass: number

    constructor() {
        this.user = 'Admin'
        this.pass = 12345
    }


    userName() {

        console.log(`${this.user} Entered`)

    }


    password() {

        console.log(`${this.pass} Entered`)

    }


    userLogin() {
        this.userName()
        this.password()
        console.log('Click on login button')
        console.log('User logged in successfully')
    }


}



export class ProductPage {




}


// const login = new LoginPage()

// // login.userName()
// // login.password()
// // login.userLogin()


// login.userLogin()

