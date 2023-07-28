const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(prop); // 输出属性名：a, b, c
  console.log(obj[prop]); // 输出属性值：1, 2, 3
}

// const arr = [1, 2, 3, 4, 5]
// for(let item in arr) {
//   console.log(item); // 可以遍历出来索引值
//   console.log(arr[item]); // 拿到具体的元素
// }
