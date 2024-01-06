// let arr=["abcd","efghij","klmnopq","bgftryyuui"]
//  let l=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i].length>l){
//         l=arr[i].length
        
//     }
// }
// console.log(l)

var string = [
    "apple", "banana", "orange", "grape", "kiwi",
    "strawberry", "pineapple", "watermelon", "blueberry", "mango",
    "pear", "peach", "plum", "cherry", "lemon",
    "lime", "raspberry", "blackberry", "melon", "apricot",
    "avocado", "pomegranate", "fig", "coconut", "passion fruit",'unes',"ele",'imili', "apple", "banana", "orange", "grape", "kiwi",
    "strawberry", "pineapple", "watermelon", "blueberry", "mango",
    "pear", "peach", "plum", "cherry", "lemon",
  ];
  
  // non-repeating elements in array
  let arr = [];
  
  for (let i = 0; i < string.length; i++) {
      let flag = 0;
      for (let j = 0; j < string.length; j++) {
          if (string[i] !== string[j] && i !== j) {
              flag++;
              break;
          }
      }
      if (flag === 0) { 
          arr.push(string[i]);
      }
  }
  
  console.log(arr);
  