function sumFibs(num) {
    let sumFibonacci = 0;
    let aux = 0;
    let aux2 = 1;
  
    while(aux2 <= num) {
  
      if(aux2 % 2 !== 0) sumFibonacci += aux2;
  
      aux2 += aux;
      aux = aux2 - aux;
  
    }
  
    return sumFibonacci;    
  }
  
  console.log(sumFibs(10));
  
  
  