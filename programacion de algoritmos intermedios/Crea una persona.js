const Person = function(firstAndLast) {
    let fullName = firstAndLast;
  
    this.getFullName = () => fullName;
  
    this.getFirstName = () => fullName.split(" ")[0];
  
    this.getLastName = () => fullName.split(" ")[1];
  
    this.setFullName = (firstAndLast) => fullName = firstAndLast;
  
    this.setFirstName = (first) => fullName = first + " " + fullName.split(" ")[1];
  
    this.setLastName = (last) => fullName = fullName.split(" ")[0] + " " + last;
  };
  
  const bob = new Person('Bob Ross');
  console.log(bob.getFullName());  