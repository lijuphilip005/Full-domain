
const a = [-1,36,11,12,63,231,56,236,4,63]





//4 63 56 236 63 231 11 12 -1  36
 let arr=[]
for(let i=a.length-1;i>=0;i=i-2){
    arr.push(a[i-1])
    arr.push(a[i])
     
}

console.log(arr)
