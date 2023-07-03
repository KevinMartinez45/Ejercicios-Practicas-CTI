function spinalCase(str) {

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); 
  //$1 y $2 se refiere a las palabras y se les agrega un espacio
  str = str.split(/\s+|_+/ig).join("-").toLowerCase();

  return str;
}

console.log(spinalCase("thisIsSpinalTap"));