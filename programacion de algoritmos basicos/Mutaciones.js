function mutation(arr) {

    let newArr1;
    let newArr2;
  
    newArr1 = arr[0].toLowerCase();
    newArr2 = arr[1].toLowerCase();
  
  
    for(let i=0;i<newArr2.length;i++){
     if (newArr1.indexOf(newArr2[i]) < 0){
       return false;
     }
    }
  
    return true;
  }
  
  mutation(["floor", "for"])
  
  
  