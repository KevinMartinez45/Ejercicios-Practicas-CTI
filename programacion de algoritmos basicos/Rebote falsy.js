function bouncer(arr) {
    let newArr = [];
  
    for(let i=0;i<arr.length;i++){
  
      if(Boolean(arr[i]) != false){
        newArr.push(arr[i]);
      }
    }
    console.log(newArr);
    return newArr;
  }
  
  bouncer([7, "ate", "", false, 9]);