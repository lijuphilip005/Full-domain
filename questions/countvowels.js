

let arr=['a','e','i','o','u']

function dummy(arr,input){
    let count=0
    for(let i=0;i<input.length;i++){
        if(arr.includes(input[i])){
            count++

        }
    }
    return count
}

console.log(dummy(arr,"liju philip"))

