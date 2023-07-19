const person = {
    name: 'kobe',
    number: 24
}

// console.log(person.toString()) // [object Object]
// 可以通过JSON.stringify() 将一个对象转换成字符串的形式
let jsonPerson = JSON.stringify(person)
console.log(jsonPerson);
console.log(typeof jsonPerson); // string 
// 将一个字符串还原为对象
let personObject = JSON.parse(jsonPerson)
console.log(personObject)
console.log(person.hasOwnProperty('name')) // true