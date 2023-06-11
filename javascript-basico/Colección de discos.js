// Configuración
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Cambia solo el código debajo de esta línea
  function updateRecords(records, id, prop, value) {
   if(value === ""){
     delete records[id][prop];
   }else if(value !== "" && prop !== "tracks"){
     records[id][prop] = value;
   }else if(!records[id].tracks && value !== "" && prop === "tracks"){
       records[id].tracks = [value];
   }else if(value !== "" && prop === "tracks"){
       records[id][prop].push(value);
   }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');