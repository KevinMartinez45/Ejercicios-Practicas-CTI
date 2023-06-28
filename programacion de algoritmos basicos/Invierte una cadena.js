function reverseString(str) {
    let invertStr = "";
    for(let i=str.length-1;i>=0;i--){
      invertStr += str[i]; 
    }
    return invertStr;
  }
  
  reverseString("hello");