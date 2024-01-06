

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i-1
        let nti=arr[i]
        while(j>=0&&arr[j]>nti){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=nti
    }
}

let arr=[5,3,4,2,1]
insertionSort(arr)
console.log(arr)