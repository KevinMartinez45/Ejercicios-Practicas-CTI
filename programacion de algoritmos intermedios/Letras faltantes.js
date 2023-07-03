function fearNotLetter(str) {
    let abecedario = "abcdefghijklmnopqrstuvwxyz".split("");
    str = str.split("")
    let inicio = abecedario.indexOf(str[0]);
    let final = abecedario.indexOf(str[str.length - 1])
    let count = 0;
  
    for(let i = inicio;i<=final;i++){
      if(str[count] !== abecedario[i]){
        return abecedario[i];
      }
      count++;
    }
  
    
    return undefined;
  }
  
  console.log(fearNotLetter("stvwx"));