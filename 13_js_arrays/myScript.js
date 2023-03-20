// const cars = ["volvo","BMW","Fiat","audi","mercedes"]
// console.log(cars)
// console.log(cars[0]) 
// console.log(cars.length)
// console.log(cars[cars.length-1])

// // myList["name"] -> object

// const cars2 = {
//     name: "volvo",
//     age: 20,
// }
// // myList[0] -> array

// console.log(typeof cars)
// console.log(Array.isArray(cars))

// const fruits = ["Banana","Orange","Apple","Mango"]

// console.log(fruits.toString())

// console.log(fruits.join(" - "))

// const value = fruits.pop();
// console.log(fruits, value)

// const value2 = fruits.push("kiwi")
// console.log(fruits,value2)

// const value3 = fruits.shift();
// console.log(fruits,value3)

// const value4 = fruits.unshift("kiwi")
// console.log(fruits,value4)

// const fruits = ["Banana","Orange","Apple","Mango"]

// fruits[0] = "kiwi"
// // console.log(fruits)
// fruits[fruits.length-1] = "kiwi"
// console.log(fruits)
// fruits[fruits.length] = "orange"
// console.log(fruits)
// fruits[fruits.length] = "orange"
// console.log(fruits)

// const girls = ["ayşe","fatma"];
// const boys = ["adem","ayhan"];
// const extra = ["ali","veli"];
// const people = girls.concat(boys,extra)
// console.log(people)

// //splice()
// const fruits = ["Banana","Orange","Apple","Mango"];
// fruits.splice(2,2,"Lemon","Kiwi","apple")
// //ilk rakam başlama endexini veriyor. ikinci rakam ise sağdan silinecek eleman sayısını veriyor. 
// console.log(fruits)

// //slice()
// const fruits = ["Banana","Orange","Apple","Mango"];
// const citrus = fruits.slice(2)
// const citrus2 = fruits.slice(1,3)
// const citrus3 = fruits.slice(-1)
// console.log(citrus)
// console.log(citrus2)
// console.log(citrus3)

//array sort
// const fruits = ["Banana","Orange","Apple","Mango"];
// console.log(fruits.sort())
// console.log(fruits.reverse())

// const numbers = [40,100,1,5,25,10,400,2,33,40,-1,7,356]
// // console.log(numbers.sort())
// console.log(numbers.sort(function (a,b){return a-b}))
// console.log(numbers.reverse(function (a,b){return a-b}))

// console.log(Math.random())
// const points = [40,100,1,5,25,10]
// console.log(points.sort(function(){return 0.5 - Math.random()}))

// const cars = [
//     { type: "Volvo", year:2016},
//     { type: "Mercedes", year:2001},
//     { type: "BMW", year:2010}
// ]
// console.log(cars)
// console.log(cars.sort(
//     function (a,b) {return a.year - b.year}
// ))
// console.log(cars.reverse(
//     function (a,b) {return a.year - b.year}
// ))
// console.log(cars.sort(
//     function (a,b) {
//         let x = a.type.toLowerCase();
//         let y = b.type.toLowerCase();
//         if (x < y) {return -1}
//         if (x > y) {return 1}
//     }
// ))
// console.log(cars.reverse(
//     function (a,b) {
//         let x = a.type.toLowerCase();
//         let y = b.type.toLowerCase();
//         if (x < y) {return -1}
//         if (x > y) {return 1}
//     }
// ))
// alfabetik sıralama type a göre

// array iteration (döngüler)

// const numbers = [45, 4, 9, 16, 25]
// numbers.forEach(
//     function myFunction (value, index, array) {
//         console.log(`${array} dizisi`);
//         console.log(`${index} numaralı eleman ${value}`)
//     }
// )
// const numbers = [45, 4, 9, 16, 25]
// numbers.forEach(
//     function myFunction (a,b) {
//         let deger = a;
//         console.log(deger)
//         // console.log(`${b} index ${a} value`)
//     }
// )
    
// const numbers1 = [45, 4, 9, 16, 25]
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//     return value * 2 ;
// }
// console.log(numbers2)

// const numbers1 = [45, 4, 9, 16, 25]
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//     return value * index ;
// }
// console.log(numbers2)

// const numbers1 = [45, 4, 9, 16, 25]
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//     return value + 1 ;
// }
// console.log(numbers2)

// const number = [45, 4, 9, 16, 25]
// const over18 = number.filter(myFunction)

// function myFunction (value,index,array) {
//     return value > 18 ;
// }

// console.log(over18)

// const number = [45, 4, 9, 16, 25]
// const over18 = number.filter(myFunction)

// function myFunction (value,index,array) {
//     return index > 1 ;
// }

// console.log(over18)

// const fruits = ["Apple","Orange","Kiwi","Mango"]
// let position = fruits.indexOf("Apple") + 1
// console.log(position)

// let position2 = fruits.indexOf("Aple")
// console.log(position2)

// if(fruits.indexOf("Aple") < 0)
// {
//     console.log("böyle bir eleman yoktur")
// }

// const numbers = [4,9,16,25,29]
// let first = numbers.find(myFunction)

// function myFunction (value,index,array) {
//     return value > 18
// }

// console.log(first)

// const numbers = [4,9,16,25,29]
// let first = numbers.findIndex(myFunction)

// function myFunction (value,index,array) {
//     return value > 18
// }

// console.log(first)

// const array = Array.from("Tüm string diziye çevrilecek")
// console.log(array)

// const fruits = ["Banana","Orange","Apple","Mango"]
// console.log(fruits.includes("Mangos"))

// if(fruits.includes("Mango"))
// {
//     console.log("bu eleman dizide bulunmaktadır")
// }

const cars = ["volvo","bmw"]
cars[0] = "toyota"
cars.push("audi")
// cars = ["toyota","fiat"] // bu eklemeyi yapamıyoruz