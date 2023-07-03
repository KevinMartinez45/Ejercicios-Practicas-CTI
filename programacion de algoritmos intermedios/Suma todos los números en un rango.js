function sumAll(arr) {

    let sum = 0;
    let numMenor,numMayor;
  
    if(arr[0] < arr [1]){
       numMenor = arr[0];
       numMayor = arr[1];
    }else{
       numMenor = arr[1];
       numMayor = arr[0];
    }
  
    for(let i = numMenor;i <= numMayor;i++){
      sum += i;
    };
  
    return sum;
  }
  
  console.log(sumAll([10, 5]));