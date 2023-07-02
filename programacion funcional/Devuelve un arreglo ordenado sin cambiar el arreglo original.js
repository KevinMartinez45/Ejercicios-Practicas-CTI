const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea

  let newArray = [...arr];

  return newArray.sort((a,b)=>{

    return a === b ? 0: a > b ? 1:-1;

  });


  // Cambia solo el código encima de esta línea
}

console.log(nonMutatingSort(globalArray));