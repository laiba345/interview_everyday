// 普通函数
function regularFunction(a, b) {
    console.log(arguments); // 访问所有参数
}

// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 生成一个类数组对象
regularFunction(1, 2, 3); // 输出: { '0': 1, '1': 2, '2': 3 }

// 箭头函数
const arrowFunction = (a, b) => {
    console.log(arguments); // 错误，箭头函数没有自己的arguments对象
    console.log(a, b); // 直接访问参数a和b
};

arrowFunction(1, 2); // 输出: 1 2

