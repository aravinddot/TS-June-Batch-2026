

type Users = {
    readonly name: string,
    age: number,
    ispopular?: boolean
}


const automationValue: Users  = {
    name: "playwright",
    age: 6,
    ispopular: true
}

type userTuple = [string, string, string, string]


const arrTuple2: userTuple  = ["Fname", "Lname", "address", "city"]




// union type



type Status = "active" | "inactive" | "pending"


const userStatus: Status = "active"





// intersection types



type one = {name: string}

type two = {age: number}

type three = one & two


const automationObject: three = {
    name: "playwright",
    age: 6
}










/* 

class 
constructor and this.keyword
encapsulation
inheritance
abstraction
polymorphism
access modifier
statis members


import and export




*/