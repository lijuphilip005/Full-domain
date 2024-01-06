/**
 * spread operator is used in array and string
 *  it is used to separte indivdual values from array and string
 * it is used join two arrays into one 
 */

let arr=[1,2,3]
//console.log(...arr)
let arr1=[0,1,2,3,6]
let s=[...arr,...arr1]
//console.log(s)

const sum=(num1,num2,num3)=>{
    return num1+num2+num3

}

console.log(sum(...arr))
