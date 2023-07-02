function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
  
    return arr.sort((a,b) => {
      return a === b ? 0: a > b ? 1:-1;
    })
  
    return arr
    // Cambia solo el código encima de esta línea
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));