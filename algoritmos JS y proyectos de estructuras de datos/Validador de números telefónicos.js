function telephoneCheck(str) {

    let condicion = /^1? ?(\(\d{3}\)|\d{3})-? ?\d{3}-? ?\d{4}$/;
  
    return condicion.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
  