                 // 1=> function declaration

function demo(num){
    return num+num
}

//console.log(demo(5))
/*
  *function written in this proper syntax is known as function decalaration
 */

                  // 2=> function expression /annonymous functions

const sample= function(num){
    return num*num
}

//console.log(sample(2))

/* writting function in this syntax is known as function expression ,where function is assigned to a variable 
   and here also function is written without name this  function is also known as annonymous function.
 */

                    // 3=> firstClassFunctions/citizens

   const first= function(num){
    return num*num
   }

   const firstClass=function(fn){
    return ("first function is manipulated inside this function" +" "+ fn(5))
   }

    //console.log(firstClass(first))

    /*
          here function first is treated like a variable inside the firstClass function where ,function first is passed 
          as an argument into the firstclass function, and it is manipulated inside function firstClass and returned .
          So thus why function can be used like a variable so , function known as first class functions
          or citizens in javascript.
    
    */ 

                 // 4=> IIFE

    // (function immed(num){
    //     console.log(num * num);
    // })(5);

    /**
     * this is known as immediatly invoked function expression 
     * where function is clubed inside a paranthis and  after that it is invoked with a paranthesis 
     */
             //example for IIFE

        //    ( function first(x){
        //       return  function second(y){
        //             console.log(x)

        //         }(1)
        //    }) (2)
           /*
           Here, in this example x is consoled inside function y the result wil be one ,because of the lexical scope 
           when we console it will check its scope and its parents lexical enviroment so answer will be 2,this happens 
           because of closure.
           */
  
            // example for understanding function scope

 
        //   for(let i=0;i<=5;i++){
        //      setTimeout(()=>console.log(i),i*1000)
        //   }

          /*
          here let have block scope , so that for each iteration the value of i will be different .
          But, in case of var it is always pointing to a memory space , so it will print 5 through out each iteration.
          */

          // 5=> Hoisting
            // console.log(a)
             var a =10;
          /**
           * the output will be undefined , it is because the code is excecuted not in a single go ,
           * in the first phase memory is allocated  to the variable a ,but value will not be assigned in the first place
           * so when console a variable before assignment of value it will throw UNDEFINED .But if there is not decalartion in the 
           * first place it will throw an error of " notdefined".
           */
        //  console.log(b)
          let b=10;

          /**
           * here in case of let it will show an error because we cannot access the variable before assignment  variable 
           * cannot be used before assignment.
           */
           
         // samp(2)

          function samp(num){
            console.log(num)
          }
          /**
           * in this case function is saved as a whole in the memory in this first place itself so before assignment phase 
           * the function is stored as a whole ,so we can acces it above the function scope itself. 
           * it will print 2 it will not show an error 
           */

          // 6 => sample  question 

          var x=10

          function hoist(){
              console.log(x)
              var x=20;
          }
              //hoist()

/**
 * here the value of x will be undefined because here , inside the function value of x is reassigned it will shadow the value of value that is 
 * assigned earlier outside the function , and when we console the value before it , it will show undefined as usual , when we access it before assignment
 *  
 */

   //7 params & arguments

   function arg( num){ // this is parameter
       return num *num 
    }

   //console.log(arg(5)) // this is argument


   // => 8 spread and rest operator

     let arr=[1,2,3]
   function spread(...num){  // this is rest operator
       console.log(num)
   }

  // (spread(...arr)) // this is spread

     //=> 9 loops in js

//  1 for of

    let array=[5,4,3,4,5]

    for(const n of array){
       // console.log(n)
    }
    /**
     * here a variable is declared and it is used to iterate over the array and it will return the values inside the array
    * for of is usewd 
     */

    let obj={name:"liju",place:"tvm",age:"25"}
     for(const key in obj ){
        // console.log(key)
        // console.log(obj[key])
     }
     /**
      * for...in is used to examine the properties of an object
      * for in loop iterates over this object and then it will retun key in the first place when we console.log(key)
      * but when using this synatx console.log(obj[key]) => it will console the value 
      */

 // call back function
 var name="liju"
 function call(){
    console.log("your name is"+" " + name)
 }

 function back(fn){
    console.log("this is call back")
    fn()

 }

 (back(call))

 /**
  * this is just an example for call back where this function is passed as a argument into another function and invoked inside the function
  */

 