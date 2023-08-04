// 手写一个数组去重函数
// 1、使用Set
// function removeDuplicates(arr) {
//     return Array.from(new Set(arr))
// }

// 示例使用：
// const originalArray = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = removeDuplicates(originalArray);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// 2、使用filter和indexOf
function removeDuplicates(arr) {
    // self代表数组对象本身
    // filter表示过滤掉的内容就是表达式中符合条件的内容
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// 示例使用：
const originalArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
