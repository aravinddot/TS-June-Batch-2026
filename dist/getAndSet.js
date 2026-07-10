"use strict";
class Person {
    constructor() {
        this.personAge = 0;
    }
    set age(value) {
        this.personAge = value;
    }
    get age() {
        return this.personAge;
    }
}
const person = new Person();
person.age;
console.log(person.age);
//# sourceMappingURL=getAndSet.js.map