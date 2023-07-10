// 01-使用js的reduce方法对给定数组中的元素求和
const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 输出：15
