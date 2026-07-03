


// primitive data types


let str: string  = "typescript"

let num : number = 10

let bool: boolean = true

let nullValue: null | string = null

let undefinedValue: undefined | number = undefined



// disable type checking

// don't use

let anyDataType: any = "playwright"

anyDataType = 10

anyDataType = true



let value: unknown = 23

value = "typescript"

if(typeof value === "string") {

console.log(value.toUpperCase()) 

}



// array


const arr: (number | string | boolean | (string| number)[])[] = [1, 2, 3, "string", true, 1, ["playwright", "cypress"]]

console.log(arr)


const obj: {name: string, age: number, isActive: boolean} = {
    name: "playwright",
    age: 6,
    isActive: true
}


console.log(obj)


function print(): string[] {
    return ["automation"]
}


const func = print()

console.log(func)




function printUserValues(name: string, age: number) {
    console.log(name, age)
}


printUserValues('Admin', 12345)











