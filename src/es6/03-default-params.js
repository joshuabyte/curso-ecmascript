//Function with default parameters. The 2 vertical lines (OR) mean that the strings next to them are the default values. 
function newUser(name, age, country){
    var name = name || 'Edgar';
    var age = age || '23';
    var country = country || 'El Salvador';
    console.log(name, age, country);
}

newUser();
newUser('Josue', '25', 'USA')

//ES6 functions with default parameters
function newAdmin (name = 'Edgar', age = '23', country = 'GT'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Josh', '18', 'MX');