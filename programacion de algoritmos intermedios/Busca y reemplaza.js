function myReplace(str, before, after) {

    let position = str.indexOf(before);
    console.log(position);
   if( str[position] === str[position].toUpperCase()){
     after = after.charAt(0).toUpperCase() + after.slice(1);
   }else{
     after = after.charAt(0).toLowerCase() + after.slice(1);
   }
     
   str = str.replace(before, after);

  return str;
}

console.log(myReplace("Let us go to the store", "store", "mall"));