function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea
  
   return arr.every(valor => {
  
      return valor > 0;
  
    })
  
    // Cambia solo el código encima de esta línea
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));