





class HomePage {

    private valueOne: string // inside class
    protected valueTwo: string // inside class + child class
    readonly valueThree: string

    constructor() {
        this.valueOne = 'Selenium'
        this.valueTwo = 'Cypress'
        this.valueThree = 'Playwright'
    }




    automation() {
       // this.valueThree = "night watch"
        console.log(this.valueOne);
        console.log(this.valueTwo);

        
        
    }

}


// const home = new HomePage()

// home.


class HomePageTwo extends HomePage {




    func() {
        console.log(this.valueTwo);
        
    }





}