/* 
    代码说明
        - *的位置没有限制
        - 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next方法可以得到yield语句后的值
        - yield相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next方法，执行一段代码
        - next方法可以传递实参，作为 yield语句的返回值
*/
function *gen() {
    yield '一只没有耳朵'
    yield '一只没有尾巴'
    return '真奇怪'
}
let iterator = gen()
// 通过done值来判断是否迭代结束
console.log(iterator.next()) // { value: '一只没有耳朵', done: false }
console.log(iterator.next()) // { value: '一只没有尾巴', done: false }
console.log(iterator.next()) // { value: '真奇怪', done: true }