function filteredArray(arr, elem) {
    let newArr = [];
    // Cambia solo el código debajo de esta línea
    for(let i=0;i < arr.length; i++){
      
      (arr[i].indexOf(elem) >= 0) ?  null:newArr.push(arr[i]);
      
        
    }
    // Cambia solo el código encima de esta línea
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));