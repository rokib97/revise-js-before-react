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
console.log(friends);
for (const friend of friends) {
  console.log(friend?.name);
}
