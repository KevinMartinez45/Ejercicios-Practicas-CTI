function getIndexToIns(arr, num) {


    for(let i=0;i<arr.length;i++){
      let aux = 0;
      for(let j=0;j<arr.length;j++){
        if(arr[j] > arr[j + 1]){
          aux = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = aux;
        }
  
     } 
    }
  
      for(let i=0;i<arr.length;i++){
       
        if(num <= arr[i]){
          return i;
        }
      }
  
  
    console.log(arr);
    return arr.length;
  
  }
  
  getIndexToIns([3, 10, 5], 3);