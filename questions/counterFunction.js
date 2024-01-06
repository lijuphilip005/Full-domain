

function first(){
    let count=0;
    function second(){
        count++
        console.log(count)
    }
    return second

}

let counter=first()
//counter()

// here closure is used to increase the count and the function is returned and stored to another variable ,then also it remember the reference to the count 
// which is declared inside another function  , 


// here implementing decrement and increment function with constructor function


function  Third(){
   let count=0

   this.incrementFunction =function(){
        count++
        console.log(count)
   }
   this.decrementFunction=function(){
    count--
       console.log(count)
   }
         
}

let count= new Third()
count.incrementFunction()
count.incrementFunction()
count.incrementFunction()
count.decrementFunction()

/**
 * here ,constructor function is used to increment and decrement the count , this.decrementFunction and this.increment fucntion = to the count functions.
 */