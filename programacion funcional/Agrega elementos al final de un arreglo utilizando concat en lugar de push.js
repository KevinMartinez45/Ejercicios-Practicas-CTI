function nonMutatingPush(original, newItem) {
    // Cambia solo el código debajo de esta línea
    let newArray = []
    newArray = original.concat(newItem);
  
    return newArray;
  
    // Cambia solo el código encima de esta línea
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);