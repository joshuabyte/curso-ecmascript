//var permite reasignacion de variables
var lastName = 'David';
lastName = 'Torres';
console.log(lastName)

//let also allows variable reassignment
let fruit = 'Grapes';
fruit = 'Oranges';
console.log(fruit);

//const doesn't allow variable reassignment
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if (true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();