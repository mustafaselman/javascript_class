// const person = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age:50,
//     eyeColor:"blue"
// }

// const x = person;
// x.age = 10 ;
// console.log(person.age)

// const person = {
//     firstName: "Jhon",
//     lastName: "Doe",
//     age:50,
//     eyeColor:"blue"
// }
// delete person.age;
// console.log(person)

const person = {
    name: "jhon",
    age: 30,
    city: "New York"
}
const myArray = Object.values(person)
console.log(myArray)
const myArray2 = Object.keys(person)
console.log(myArray2)
const myArray3 = Object.entries(person)
console.log(myArray3)
console.log(myArray3[0][1])