// OBJECT DESTRUCTURING

// const person = {
//   name: 'Brandon',
//   age: 25,
//   location: {
//     city: 'Vancouver',
//     temp: 10
//   }
// };
//
// const {name = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${name} is ${age}.`);
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName); // Penguin, Self-Published

// ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philly', 'Pennsylvania', 19147];
//
// const [, city, state = 'New York'] = address;
//
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$4.50', '$2.75'];
const [drink, , mediumPrice] = item;


console.log(`A medium ${drink} costs ${mediumPrice}`);
