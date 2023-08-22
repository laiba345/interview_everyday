console.log(Object.is(5, 5));  // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

console.log(typeof NaN) // number 

console.log(NaN === NaN); // false

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// console.log(arr1 === arr2); //false

// 编写自己的比较函数来逐个比较数组和对象的元素或属性
// 对于深度比较来说是一个常用的方法,可以递归比较每个元素或属性
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arraysEqual(arr1, arr2));  // true

// 2、使用库; lodash; 其提供了深度比较de
