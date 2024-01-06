function deepFreeze(obj){
    Object.freeze(obj)
    for(let key in obj){
        if(obj.hasOwnProperty(key)&& typeof obj[key]=="object"){
            deepFreeze(obj[key])
        }
    }
}





let obj={
    name:"liju",
    place:{
        town:"tvm"
    }
    
}

deepFreeze(obj)

obj.name="kiran"
console.log(obj.name)
