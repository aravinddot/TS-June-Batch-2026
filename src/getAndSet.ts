





class Person {

    private personAge: number


    constructor() {
        this.personAge = 0
    }


    set age(value: number) {
        this.personAge = value
    }


    get age() {
        return this.personAge
    }


}

const person = new Person()

person.age

console.log(person.age);
