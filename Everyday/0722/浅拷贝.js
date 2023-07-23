// 浅拷贝示例
const originalObj = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming'],
};

// 使用Object.assign()进行浅拷贝
const shallowCopyObj = Object.assign({}, originalObj);

// 修改浅拷贝对象的属性  
shallowCopyObj.name = 'Jane';
shallowCopyObj.hobbies.push('running');

console.log(originalObj); // { name: 'John', age: 30, hobbies: ['reading', 'swimming', 'running'] }
console.log(shallowCopyObj); // { name: 'Jane', age: 30, hobbies: ['reading', 'swimming', 'running'] }

// 解释
// 虽然修改了浅拷贝对象的name属性，但原始对象的name属性没有受到影响。
// 但是，由于浅拷贝只复制了引用，
// 当修改浅拷贝对象中的引用类型属性（如数组hobbies）时，原始对象也会受到影响。
// name属性为普通属性,但是数组为引用类型,所以对其修改,会影响原始数组

