

function prime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return ("its not prime")
        }else{
            return("its prime")
        }

    }
}

console.log(prime(7))

/// complexity 

/**
 * big -o-n is linerar o(n),
 * 
 */