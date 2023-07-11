// 要想去掉对象中的null和undefined，可以使用Object.entries()和reduce()方法
const obj = {
    name: 'John',
    age: 30,
    city: null,
    address: undefined
};
console.log(Object.entries(obj)) // 是一个大数组，

const filteredObj = Object.entries(obj).reduce((acc, [key, value]) => {
    console.log('acc', acc) // 就是一开始的初始变量的一次次迭代
    // console.log('key', key)
    // console.log('value', value)
    // [key, value]就是前面一次次迭代的东西
    if (value !== null && value !== undefined) {
        acc[key] = value;
    }
    return acc;
}, {});

console.log(filteredObj);
  // 输出：{ name: 'John', age: 30 }
