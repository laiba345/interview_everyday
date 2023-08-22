// 将方法添加到原型prototype中可能影响整个代码库,少用
/* 
    此代码中,this表示调用该方法的数组对象
*/
Array.prototype.myForEach = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const numbers = [1, 2, 3, 4, 5]
/* 
    其中的箭头函数作为回调函数被传递给myForEach方法,
    而箭头函数内部使用的this将指向调用myForEach方法的数组对象numbers
*/
numbers.myForEach((value, index, array) => {
    console.log(`Value: ${value}, Index: ${index}, Array:[${array}]`);
})