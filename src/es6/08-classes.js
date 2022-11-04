//Declaring
class user {}

//Generating class instance
// const newUser = new user();

class user1 {
  //methods
  greeting() {
    return "Hello";
  }
}

const protondk = new user1();
console.log(protondk.greeting());

const josh = new user1();
console.log(josh.greeting());

//constructor
class user1 {
  //constructor
  constructor() {
    console.log("New User");
  }
  greeting() {
    return "Hello";
  }
}

const joshua = new user1();

//this
class user1 {
  constructor(name) {
    this.name = name;
  }
  //methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const anna = new user1("Anna");
console.log(anna.greeting());

//setters & getters
class user1 {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge(){
    return this.age;
  }
  set uAge(n){
    this.age = n;
  }
}

const valeria = new user1("Valeria", 20);
console.log(valeria.uAge);
console.log(valeria.uAge = 25);
