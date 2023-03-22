//JSON(javascript object notation)

let text = '{"firstName":"Jhon"}'
console.log(text)

let text2 = '{"firstName":"Ali", "lastName":"Bay"}'
console.log(text2)

let text3 = '{"employees":[{"firstName":"Jhon","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Pan"}]}'

console.log(text3)
// json dan objeye çevirme
console.log(JSON.parse(text3))
console.log(JSON.stringify(JSON.parse(text3)))