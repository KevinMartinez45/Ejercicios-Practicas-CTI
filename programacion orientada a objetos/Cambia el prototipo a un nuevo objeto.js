function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Cambia solo el código debajo de esta línea
    numLegs: 4,
    eat: function(){
      console.log('nam nam nam');
    },
    describe: function(){
      console.log('My name is ' + this.name + ".")
    }
  };