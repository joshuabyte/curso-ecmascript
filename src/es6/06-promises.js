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

//Example to understand promises

const data = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    title: "Spiderman: Homecoming",
    year: 2017,
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    year: 2019,
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
};

getData()
.then((data) => console.log(data))
