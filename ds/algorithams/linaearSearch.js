

function linear(arr,n){
   for(let i=0;i<arr.length;i++){
       if(arr[i]==n){
        return i
       }
   }
   return -1
}

let arr=[1,2,3,4,5,6,7]

  console.log(linear(arr,5))

  //complexity is o(n)
  