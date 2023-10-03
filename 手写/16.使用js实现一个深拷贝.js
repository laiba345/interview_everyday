/* 
    使用js来实现一个深拷贝,可以编写一个递归函数
    来复制对象的所有属性,包括嵌套对象
*/
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    // 根据对象的类型创建一个新的空对象或数组
    const copy = Array.isArray(obj) ? [] : {}
    // 遍历对象的属性,并递归进行深拷贝
    for (const key in obj) {
        // 用于检查一个对象是否拥有指定的属性; 
        if (Object.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key])
        }
    }
    return copy
}

// 示例用法：
const originalObject = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown'
    }
};

const copiedObject = deepCopy(originalObject);

console.log(originalObject); // 原始对象
console.log(copiedObject);   // 深拷贝后的对象