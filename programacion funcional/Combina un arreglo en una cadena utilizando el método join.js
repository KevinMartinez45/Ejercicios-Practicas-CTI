function sentensify(str) {
    // Cambia solo el código debajo de esta línea
  
    str = str.split(/\W/).join(" ");
  
    return str;
    // Cambia solo el código encima de esta línea
  }
  
  console.log(sentensify("May-the-force-be-with-you"));