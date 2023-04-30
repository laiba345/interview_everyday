/* 
    延迟执行
    - 利用闭包可以延迟函数的执行，可以在回调函数中访问所需的变量
    - 用途：防抖；节流
*/
function delayedExecution(delay, callback) {
    setTimeout(() => {
        callback()
    }, delay);
}

delayedExecution(1000, function() {
    console.log('1s后执行')
})

/* 
    解释
    - 在上述代码中，setTimeout 函数中的回调函数是一个闭包，可以在 1 秒后执行回调函数。
*/
