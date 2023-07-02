const squareList = arr => { 
    // Cambia solo el código debajo de esta línea
  
    let newArray = arr.filter(num => num > 0 && Number.isInteger(num))
                  .map(num => num * num);
  
    return newArray;
    // Cambia solo el código encima de esta línea
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);