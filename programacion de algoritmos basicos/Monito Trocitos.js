function chunkArrayInGroups(arr, size) {
    let arrReturn = [];
    
    for (var i = 0; i < arr.length; i += size) {
      arrReturn.push(arr.slice(i, i + size));
    }
    return arrReturn;
   
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);