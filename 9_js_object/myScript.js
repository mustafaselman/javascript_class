// const person = {
//     firstName: "Ahmet",
//     lastName: "Yılmaz",
//     age: 33,
//     eyeColor: "blue"
//     //properties
// }
// console.log(person)
// console.log(person.age)
// console.log(person["eyeColor"])

const person = {
    firstName: "mustafa",
    lastName: "yılmaz",
    fullname: function myFunction() {
        return this.firstName + " " + this.lastName
    }
}
let name = person.fullname()
console.log(name)

//gösterimler
// fullName: function()
// myFunction()

x = new Date()
y = new String("mustafa");
z = new Number(15)
console.log(z)