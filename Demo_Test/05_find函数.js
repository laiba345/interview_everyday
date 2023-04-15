// 在JavaScript中，
// Array.prototype.find()方法用于返回数组中符合指定条件的第一个元素值。
// 这个方法接收一个回调函数作为参数，该回调函数将在数组的每个元素上调用一次，直到找到一个使回调函数返回true的元素为止。
// 如果找到了这样的元素，则find()方法会立即返回该元素的值，否则返回undefined。

// 下面是一个使用find()方法查找数组中大于10的第一个数的示例：
// 关于find函数：其是返回数组中第一个符合要求的元素

const arr = [5, 12, 8, 17, 21];

const result = arr.find((num) => num > 10);

console.log(result); // 输出12