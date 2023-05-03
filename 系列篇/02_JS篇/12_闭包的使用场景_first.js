/* 
    闭包的使用场景1
        - 封装变量和方法；利用闭包可以创建私有变量和方法，
        可以避免全局变量的污染和命名冲突
        - 即：私有变量的封装

        @ 保存变量状态
*/
function createCounter() {
    let count = 0
    
    return function() {
        count++
        console.log(count)
    }
}

const counter = createCounter()
counter() // 1
counter() // 2

/* 
    解释
    - 在上述代码中，createCounter 函数返回一个闭包，
    - 其中的 count 变量和返回的匿名函数都可以访问该变量。
    - 由于 count 变量在 createCounter 函数内部定义，
    外部无法访问，因此可以实现私有变量的封装。
*/