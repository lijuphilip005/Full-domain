hello()


function hello (){
    console.log("hello world")
}

varx=10
//console.log(x)

let x=20
console.log(x)
/**
 * hoisting is accesing variables and functions before intializing values . it will show undefined ,it will not show errors 
 * but in case of let and const  it will be in temporal dead zone it will show error but in case of var and functions we can access it berfore intialization.
 */


function first(x){
    console.log("hello" )

} 

function second(first){
    first()
}
second(first)