// Declara la variable myGlobal debajo de esta línea
let myGlobal= 10;

function fun1() {
  // Assign 5 to oopsGlobal here
   oopsGlobal = 5;
}

// Cambia solo el código encima de esta línea

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}