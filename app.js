// Templete String
const firstName = "Hero Alam";
const lastName = "Uganda";
const fullName = `Hello ${firstName} Welcome to ${lastName}`;
// console.log(fullName);

// Spread operator
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8];
numbers.push(...numbers2);
// console.log(numbers);

const numList = [1, 2, 3];
const numListClone = [...numList];
// console.log(numListClone);

let animal = {
  name: "dog",
  color: "brown",
  age: 7,
};

// const { name, color, age } = animal;
const { age, ...rest } = animal || {};
// console.log(age, rest);

function sum({ age, ...rest }) {
  //   console.log(age, rest);
}
sum(animal);

// nested object
const dreamGirl = [
  {
    dream1: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
        {
          facebook: {
            link: "https://www.facebook.com/",
            followers: "12545",
            status: "single",
            friendsList: [
              { name: "rofik" },
              { name: "jobbar" },
              { name: "salam" },
              { name: "borkot" },
              undefined,
            ],
          },
        },
        { instagram: "https://www.instagram.com/" },
        { twitter: "https://twitter.com/" },
        { github: "https://github.com/" },
        { phone: ["01254823212", "02152457"] },
      ],
    },
  },
];
const friends = dreamGirl[0].dream1.contactInfo[0].facebook.friendsList;
// console.log(friends);
for (const friend of friends) {
  //   console.log(friend?.name);
}

// for loop

const friendName = ["hero", "broo", "china", "angel"];
for (let i = 0; i < friendName.length; i++) {
  const element = friendName[i];
  //   console.log(element);
}

// for of
for (const name of friendName) {
  //   console.log(name);
}

// for in
const object = { a: 1, b: 2, c: 3, name: "bro" };
// console.log(object["name"]);

for (const property in object) {
  //   console.log(property);
  //   console.log(object[property]);
}

// map
// without map
const nums = [1, 2, 4, 6, 5, 10];
const temp = [];
const result = (num) => num * num;
for (const num of nums) {
  const square = result(num);
  temp.push(square);
}
// console.log(temp);

// with map
const resultOfMap = nums.map((num) => num * num);
console.log(resultOfMap);

// filter
const products = [
  { id: 1, name: "apple", price: 500, color: "golden" },
  { id: 2, name: "xiaomi", price: 124, color: "black" },
  { id: 3, name: "samsung", price: 200, color: "black" },
  { id: 4, name: "samsung2", price: 200, color: "black" },
  { id: 5, name: "lenovo", price: 300, color: "pink" },
  { id: 6, name: "xiaomi", price: 100, color: "pink" },
  { id: 7, name: "lenovo", price: 300, color: "pink" },
];

// filter
// const filteredProduct = products.filter((product) => product.name == "xiaomi");
// const filteredProduct = products.filter((product) => product.color != "pink");

// find
// const filteredProduct = products.find((product) => product.name == "xiaomi");
const filteredProduct = products.find((product) => product.color != "golden");
// console.log(filteredProduct);
// for Each
products.forEach((element) => {
  //   console.log(element.price);
});

// tarnery
console.log(true ? "sleep" : "more");
