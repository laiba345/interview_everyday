// 03-使用一个js的闭包实现一个计数函数,每次调用+1

// 下方的increment函数其实就是一个闭包函数
// 闭包的概念；闭包允许函数捕获并访问其词法作用域外部的变量
function createCounter() {
    let count = 0
    
    function increment() {
        count++
        console.log(count)
    }

    return increment
}

const counter = createCounter() 

counter()
counter()
counter()