function destroyer(arr ,...datos) {
    let newArray = [];
    
    newArray = arr.filter(arr => datos.indexOf(arr) === -1);
    
    return newArray;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));