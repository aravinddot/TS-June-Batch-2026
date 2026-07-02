


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


