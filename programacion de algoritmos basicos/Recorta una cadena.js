function truncateString(str, num) {
    let newStr = "";
    for(let i=0;i<num;i++){
      if(str[i] !== undefined){
      newStr += str[i];
      console.log(newStr);
      }
    }
    if(str.length > num){
      newStr += "...";
    }
    console.log(newStr);
    return newStr;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);