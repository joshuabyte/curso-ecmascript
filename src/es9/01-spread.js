const user = {username: "protondk", age:"23", country:"SV"};
const {username, ...values} = user;
console.log(username);
console.log(values);