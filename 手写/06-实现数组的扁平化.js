// 1、使用递归实现
function flattenArray(arr) {
    let result = []
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item))
        } else {
            result.push(item)
        }
    }
    return result 
}

// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// const flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// 2、使用数组的内置方法flat
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
