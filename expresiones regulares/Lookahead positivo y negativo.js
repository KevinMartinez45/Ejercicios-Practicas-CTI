let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // Cambia esta línea
let result = pwRegex.test(sampleWord);