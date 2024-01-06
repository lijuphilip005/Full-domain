const obj ={
    obj2:[1,3,4,3],
    arr : [4,12,89],
    arr4 : [4,13,89],
    ob:[11,3,4,3],
    a : [65,12,89]
    
}
   let arr=[]
   let sum=0;
for(const sum in obj){
    arr.push ((obj[sum]))
}

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        sum=sum+arr[i][j]
    }
}
console.log(sum);