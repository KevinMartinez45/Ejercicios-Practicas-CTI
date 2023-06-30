// La variable global
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookAdd,bookName) {
  let newArr = [...bookAdd]
  newArr.push(bookName);
  return newArr;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(bookRm,bookName) {
  let newArr = [...bookRm]
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Cambia el código encima de esta línea
    }
}