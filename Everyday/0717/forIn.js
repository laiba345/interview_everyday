const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(prop); // 输出属性名：a, b, c
  console.log(obj[prop]); // 输出属性值：1, 2, 3
}
