

function check(condition){
   
    return new Promise((resolve,reject)=>{
        
        if(condition=="a"){
            resolve("true")
        }else{
            reject("false")
        }
    })
}

check("c").then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})