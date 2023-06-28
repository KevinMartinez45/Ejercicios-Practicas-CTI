function confirmEnding(str, target) {


    let final = new RegExp(".?" +target + "$", "i"); //contatenamos la variable para poder usarla
    let result = final.test(str);
  
    return result;
  }
  
  confirmEnding("Bastian", "n");