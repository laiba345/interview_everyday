/* 
    节流函数的实现
    - 使用闭包 + 定时器来实现
*/
function throttle(func, delay) {
    let isThrottled = false

    return function (...args) {
        if (!isThrottled) {
            func.apply(this, args)
            isThrottled = true
            // 这样在指定的时间间隔内不会再次执行func函数。
            setTimeout(() => {
                isThrottled = false
            }, delay);
        }
    }
}

function myFunction() {
    console.log("Function executed after throttle");
}

// 创建一个节流函数，时间间隔为500毫秒
const throttledFunction = throttle(myFunction, 500);

// 多次调用节流函数
throttledFunction();
throttledFunction();
throttledFunction();