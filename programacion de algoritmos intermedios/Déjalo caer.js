function dropElements(arr, func) {  
    let newArray = [...arr];
    
    for (let i = 0; i < arr.length; i++) {
      if(func(arr[i])) {
        return newArray;
      } else {
        newArray.shift();
      }   
      console.log(newArray); 
    }
    
    return [];
  }
  
  
  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));