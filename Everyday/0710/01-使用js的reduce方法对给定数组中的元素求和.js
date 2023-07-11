// 01-使用js的reduce方法对给定数组中的元素求和
// 第一个参数是一个函数;第二个参数一般是给定初始值
const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 输出：15
