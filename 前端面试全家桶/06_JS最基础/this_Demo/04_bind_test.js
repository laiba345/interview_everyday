// fn1.__proto__ === Function.prototype
// 模拟 bind
Function.prototype.bind1 = function() {
    // 将参数拆分为数组
    // 将一个列表变为一个数组的常用方式  arguments就是参数
    const args = Array.prototype.slice.call(arguments)
    // 获取this（数组第一项）
    const t = args.shift()
    // fn1.bind(...)中的fn1
    // 谁去执行；谁就是
    const self = this
    // 返回一个函数
    return function() {
        return self.apply(t, args)
    }
}

// bind函数的应用
function fn1(a, b, c) {
    console.log('this', this)
    console.log(a, b, c)
    return 'this is fn1'
}

const fn2 = fn1.bind1({x: 100}, 10, 20, 30)
const res = fn2()
console.log(res)