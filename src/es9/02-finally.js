const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Shit's working");
    } else {
      reject("Shit ain't working");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
  // .finally(() => console.log("Finally"));