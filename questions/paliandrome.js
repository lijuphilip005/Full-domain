let s='cack'
let a=[]
for(let i=s.length-1;i>=0;i--){
    a.push(s[i])
}
let c= a.join('')
console.log(a)
if(s===c){
    console.log ("palindrome")
}else{
    console.log("its not palindrome")
}
