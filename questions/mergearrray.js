//[1,10,3,14,5,6,7]

let nums = [1,3,5,7]
let nums2=[10,14,6,9]
let arr=[]

for(let i=0;i<nums.length;i++){
    for(let j=i;j<nums2.length;j++){
        arr.push(nums[j],nums2[i])
        break;
    }
    
}
console.log(arr)
