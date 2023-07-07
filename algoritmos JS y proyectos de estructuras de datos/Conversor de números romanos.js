function convertToRoman(num) {
    let romano = "";
    let numerosRomanos = {
   
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
   
    for(let numero in numerosRomanos){
       while(num >= numerosRomanos[numero]){
         romano = romano.concat(numero);
         num -= numerosRomanos[numero]
       }
    }
   
    return romano;
   }
   
   console.log(convertToRoman(36));