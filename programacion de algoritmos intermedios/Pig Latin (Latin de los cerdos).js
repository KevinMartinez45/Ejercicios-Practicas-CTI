function translatePigLatin(str) {


    let consonante = str.match(/^[^aeiou]+/);
    return consonante !== null ? 
           str.replace(/^[^aeiou]+/, "").concat(consonante).concat("ay"): str.concat("way");
      
  }
  
  translatePigLatin("consonant");
  
  console.log(translatePigLatin("consonant"));