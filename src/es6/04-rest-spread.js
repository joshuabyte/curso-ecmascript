//Arrays destructuring
let fruits = ['Apple', 'Banana'];
//Values from array get assigned to variables and then printed
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring
let user = {
    username: 'Edgar',
    age: '23',
};
let {username, age} = user;
console.log(username, user.age);

//Spread operator (...)
let person = {
    name: 'Jean',
    age: 'Walsh',
}
let country = 'MX';

let data = {id: 1, ...person, country};
console.log(data);

//Rest parameters
function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

//Exercise with spread operator
let json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  }
  
  let json2 = {
    age: 12,
    color: "Blanco"
  }

let michito = {...json1, ...json2};
console.log(michito);