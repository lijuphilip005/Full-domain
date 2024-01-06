//   what is an algorithm ?

 /** =>
  *  it is a set of instructions to solve a problem 
  * 
  * 
  */

 // what is Asymtotic notations ?
 /**
  *  Asymptotic notation is the mathematical tool for repersenting space and time complexity
  *   There are three types to repersent space and time complexities 
  *   1 => Big o notation (worst-case complexity).
  *   2=> thetta (average case complexity).
  *   3=> omega (best case complexity).
  */

 // Big-o-notation ?

 /**
  * maninly we are not evaluating the time taken to complete exection of the code
  *  in notation we are finding how many times  the statement excecutes  with respect to the input
  * here we are finding the worst case complexity with big o notation
  *    
  * eg => function asym(n){ 
  *      let sum=0; -----> 1
  *      for(let i=0;i<n;i++){ ----> n
  *       sum=sum+i          
  * }
  * return sum;--->1
  * 
  * } 
  * so here the complexity will be o(n) , the complexity will be linear , we are focusing in the bigger picture 
  * only so we avoid the statements which executes only once.
  * 
  * eg 2 => 
  *   function add (n){
  *      return(n*(n+1)/2)----> o(1)         
  * }
  * here the statement only excecutes once so the complexity will be constant;
  */
