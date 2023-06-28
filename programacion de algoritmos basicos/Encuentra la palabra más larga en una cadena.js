function findLongestWordLength(str) {
    let palabraLarga = str[0].length;
    let words = str.split(' '); //convertimos la cadena a un vector 
  
    for(let i=0;i< words.length;i++){
      if(palabraLarga < words[i].length){
        palabraLarga = words[i].length
      }
    }
    
    return palabraLarga;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));