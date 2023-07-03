function pairElement(str) {

    let emparejamiento= [];
    str = str.split("");
  
      for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "A":
          emparejamiento.push([str[i], "T"]);
          break;
        case "T":
          emparejamiento.push([str[i], "A"]);
          break;
        case "C":
          emparejamiento.push([str[i], "G"]);
          break;
        case "G":
          emparejamiento.push([str[i], "C"]);
          break;
      }
     }
  
    return emparejamiento;
  }
  
  console.log(pairElement("ATCGA"));