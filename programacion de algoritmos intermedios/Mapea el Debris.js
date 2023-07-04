function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
   
    
    function calculateOrbitalPeriod(avgAlt) {
  
      const T = 2 * Math.PI * Math.sqrt(Math.pow((earthRadius + avgAlt), 3) / GM); 
      return Math.round(T); 
  
    }
  
  
    const returnArr = arr.map(function(obj) {
      return {
        name: obj.name,
        orbitalPeriod: calculateOrbitalPeriod(obj.avgAlt)
      };
    });
  
    return returnArr;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));