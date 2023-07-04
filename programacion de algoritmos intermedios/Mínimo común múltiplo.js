function smallestCommons(arr) {
  // Ordenar el rango de forma ascendente
   const [min, max] = arr.sort((a, b) => a - b);
   
   // Calcular el mínimo común múltiplo utilizando el MCD
   const minimoCM = (a, b) => (a * b) / maximoCD(a, b);
 
   // Calcular el máximo común divisor utilizando el algoritmo de Euclides
   const maximoCD = (a, b) => {
     while (b !== 0) {
       let temp = b;
       b = a % b;
       a = temp;
     }
     return a;
   };
 
   // Calcular el mínimo común múltiplo para todos los números en el rango
   let multiplocomun = min;
   for (let i = min + 1; i <= max; i++) {
     multiplocomun = minimoCM(multiplocomun, i);
   }
   
 
   return multiplocomun;
 }
 
 console.log(smallestCommons([1,5]));
 
 