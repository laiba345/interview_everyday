// 02-使用正则表达式从一个字符串里取出数字
// 需要使用match方法结合正则表达式来实现
// 正则表达式是 //g的形式，其中// 当中书写相关要求
const str = "Hello 123 World 456"
const numbers = str.match(/\d+/g)
console.log(numbers) // [ '123', '456' ]