const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Cambia solo el código debajo de esta línea
  
    let onlineCount = 0;
  
    for(const users in allUsers){
      if(allUsers[users].online === true){
        onlineCount++;
      }
    }
  
    return onlineCount;
    // Cambia solo el código encima de esta línea
  }
  
  console.log(countOnline(users));