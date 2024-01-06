
function bubble(arr){
    let swapped
    do{
         swapped =false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp;
                swapped=true;
            }
             
        }

    }while(swapped)

}

let arr=[5,2,6,3,1]
bubble(arr);
console.log(arr);

/**logic
 * first we check whether the first elements is greater than the adjacent elements ,if it is greater we will swap the positions using a temp variable 
 * and we will continue sorting till every elements comes in ascending order . to track this we will club this logic with a do while loop to check whether 
 * the array is swapped or not with the help of a variable , if in any iteration there if no arr[i]>arr[i+1] the swapped variable will remain false and 
 * the array is sorted and the do while loop get exited and we will print the array 
 */