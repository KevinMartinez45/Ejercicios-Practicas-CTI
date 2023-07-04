function steamrollArray(arr) {
    let newArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArray = newArray.concat(steamrollArray(arr[i]));
      } else {
        newArray.push(arr[i]);
      }
    }
  
    return newArray;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));
  