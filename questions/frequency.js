const arr=[1,2,1,3,5,1,2]

  function dummy(arr){
    let count=1
    let drr=[]
      let a= arr.sort((a,b)=>a-b)
       for(let i=0;i<a.length;i++){
             if(a[i]==a[i+1]){
                count++
             }
             if(!drr.includes(a[i])){
                 drr.push(a[i],count)
             }
            }
    return drr
  }

  console.log(dummy(arr))