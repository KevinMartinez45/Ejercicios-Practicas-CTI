function Dog(name) {
    this.name = name;
  }
  
  // Cambia solo el código debajo de esta línea
  function joinDogFraternity(candidate) {
  
    return (candidate.constructor === Dog) ? true:false;
  
  }