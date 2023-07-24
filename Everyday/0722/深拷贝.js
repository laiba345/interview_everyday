// 深拷贝示例
const originalObj = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'swimming'],
};

// 使用JSON.parse()和JSON.stringify()进行深拷贝
const deepCopyObj = JSON.parse(JSON.stringify(originalObj));

// 修改深拷贝对象的属性
deepCopyObj.name = 'Jane';
deepCopyObj.hobbies.push('running');

console.log(originalObj); // { name: 'John', age: 30, hobbies: ['reading', 'swimming'] }
console.log(deepCopyObj); // { name: 'Jane', age: 30, hobbies: ['reading', 'swimming', 'running'] }

// 解释
// 进行深拷贝以后的新的对象与原始对象完全独立，
// 对新对象的修改不会影响原始对象

// 深度拷贝生成的新的对象就是和原始对象完全独立的