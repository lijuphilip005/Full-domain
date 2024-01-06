let arr=[1,2,3,2,1,4,5]
  let uni=[]
  for(let i=0;i<arr.length;i++){
      let flag= 0
      for(let j=0;j<arr.length;j++){
          if(arr[i]==arr[j]&&i!=j){
              flag++
          }
      }
      if(flag==0){
          uni.push(arr[i])
      }
  }
  console.log(uni)

