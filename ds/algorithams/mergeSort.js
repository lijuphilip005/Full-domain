function mergesort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor((arr.length)/2)
    let leftarr=arr.slice(0,mid)
    let rightarr=arr.slice(mid)
    return merge(mergesort(leftarr),mergesort(rightarr))
}

function merge(leftarr,rightarr){
    let sorted=[]
    while(leftarr.length&&rightarr.length){
           if(leftarr[0]<rightarr[0]){
               sorted.push(leftarr.shift())
           }else{
               sorted.push(rightarr.shift())
           }
    }
    return [...sorted,...leftarr,...rightarr]
}


let arr=[4,6,7,2,3,0,1]
console.log(mergesort(arr))