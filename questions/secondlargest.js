let arr=[2,3,6,8,1]
let l1=0
let l2=0

for(let i=0;i<arr.length;i++){
    if(arr[i]>l1){
        l2=l1
        l1=arr[i]
        
    }else if(arr[i]>l2&&arr[i]!==l1){
        l2=arr[i]
    }
}
console.log(l2)