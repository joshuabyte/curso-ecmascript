function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(["Edgar", "Josh", "Anna", "George", "Adam"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//Exercise
function* getId() {
    for (let id = 1; id <= 10; id++) {
      yield id;
    }
  }




  