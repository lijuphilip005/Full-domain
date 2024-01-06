let array=[[1,2],[2,3],[4,5],[5,6]]

function nest(array){
    let sum=0;
     for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            console.log(array[i][j])
        }
     }
}

nest(array)