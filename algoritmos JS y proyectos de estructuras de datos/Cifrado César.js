function rot13(str) {
    let textoCifrado = "";
  
    for(let i = 0; i<str.length;i++){
      let ascci = str.charCodeAt([i]);
      let codigoAscci = 0;
  ;
      if(ascci >= 65 && ascci <= 90){
  
        (ascci >= 78) ? codigoAscci = ascci -13: codigoAscci = ascci + 13;
        
        textoCifrado += String.fromCharCode(codigoAscci)
  
      }else{
        textoCifrado += str[i];
      }
    }
  
  
    return textoCifrado;
  }
  
  console.log(rot13("SERR PBQR PNZC"));