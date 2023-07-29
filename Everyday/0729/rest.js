function add(a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
const sum = add(...numbers)
console.log(sum);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // 等同于 [1, 2, 3, 4, 5]

const obj1 = { foo: 1, bar: 2 };
const obj2 = { ...obj1, baz: 3 }

console.log('obj2', obj2); // obj2 { foo: 1, bar: 2, baz: 3 }

