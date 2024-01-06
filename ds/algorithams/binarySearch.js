

function binary(arr,n){
       let left=0;
       let right=arr.length-1

       while(left<=right){
           let middle=Math.floor((left+right)/2)
           if(n==arr[middle]){
            return middle
           } else if(n<arr[middle]){
            right=middle-1

           }
           else {
            left=middle+1
           }
       }
       return -1;

}

let arr=[1,2,3,4,5,6]
console.log(binary(arr,4))