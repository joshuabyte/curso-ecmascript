//Prior ES6
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';

//Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//Multi-line strings

let lorem = 'this is a string \n' + 'this is another line';

//Multi-line strings with template literals
let lorem2 = `This is an epic phrase
this is the continuation of the epic phrase.
`;

console.log(lorem);
console.log(lorem2);
