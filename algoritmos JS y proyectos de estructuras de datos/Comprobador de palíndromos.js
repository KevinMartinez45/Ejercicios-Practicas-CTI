function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("");
    let palindromo = [...str].reverse();
  
    str = str.join("");
    palindromo = palindromo.join("");
  
    return (str === palindromo) ? true:false;
  
  }
  
  palindrome("not a palindrome");