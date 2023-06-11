function myLocalScope() {
    // Cambia solo el código debajo de esta línea
    const myVar = "variable local";
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Ejecuta y verifica la consola
  // myVar no está definida afuera de myLocalScope
  console.log('outside myLocalScope', myVar);