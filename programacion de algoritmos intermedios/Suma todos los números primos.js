function sumPrimes(num) {
    let sumPrimos = 0;
  
     for (let i = 2; i <= num; i++) {
      if (numeroPrimo(i)) {
        sumPrimos += i;
      }
    }
    return sumPrimos;
  }
  
  function numeroPrimo(num){
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
     return true;
  }
  
  
  console.log(sumPrimes(10));