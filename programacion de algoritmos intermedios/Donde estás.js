function whatIsInAName(collection, source) {

    return collection.filter(objeto => {
     return Object.keys(source).every(key => {
       return objeto.hasOwnProperty(key) && objeto[key] === source[key];
     });
   });
 }
 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });