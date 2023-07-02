// Cambia solo el código debajo de esta línea
function urlSlug(title) {

    title = title.trimStart().trimEnd().split(/\W+/).join("-").toLowerCase();
  
    return title;
  }
  // Cambia solo el código encima de esta línea
  console.log(urlSlug(" Winter Is  Coming"));