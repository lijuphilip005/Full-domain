const arr = [[2,3],[3,1],[3,12]]
   let sum=0
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        sum =sum+arr[i][j]
    }
}
console.log(sum)