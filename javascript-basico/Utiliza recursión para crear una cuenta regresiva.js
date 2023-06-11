// Cambia solo el código debajo de esta línea
function countdown(n){
    if (n < 1) {
      return [];
    }else{
      
      const array = countdown(n - 1);
      array.unshift(n);
      return array;
    }
  }
  // Cambia solo el código encima de esta línea