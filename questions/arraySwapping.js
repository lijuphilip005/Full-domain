let arr=[1,2,3,4,5,6,7,8,9]
//[3,2,1,6,5,4,9,8,7]

for(let i=0;i<arr.length;i++){
    if(arr[i]%3==0){
        let temp=arr[i]
         arr[i]=arr[i-2]
         arr[i-2]=temp
        
    }
}

console.log(arr)

