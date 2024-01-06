function* trail (){
    yield 5
    yield 10
    
    
    yield 1000
   }
   
   let a=trail()
   
   console.log(a.next().value)
   console.log(a.next().value)
   console.log(a.next().value)  