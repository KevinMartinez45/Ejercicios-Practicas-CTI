function largestOfFour(arr) {

    let numMayores = [];
  
    for(let i=0;i<arr.length;i++){
      let aux = arr[i][0];
      for(let j=0;j<arr[i].length;j++){
        if(aux < arr[i][j]){
          aux = arr[i][j];
        }
      }
      numMayores.push(aux);
    }
    return numMayores;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));