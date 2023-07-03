function uniteUnique(...arr) {

    let newArray = [].concat(...arr);
  
    newArray = newArray.filter((valor, indice, arreglo) => {
      return arreglo.indexOf(valor) === indice;
    });
      
    return newArray;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  
  