/* 
    使用js实现一个防抖函数（Debounce）： 
    要求在指定的等待时间内，如果多次触发同一个函数，只执行最后一次调用。
        - 指定的等待时间内，如果多次触发同一个函数，只执行最后一次调用
*/
// 可以使用闭包 + 定时器来实现
// function debounce(func, delay) {
//     let timerId
//     return function(...args) {
//         clearTimeout(timerId)
//         timerId = setTimeout(() => {
//             func.apply(this, args)
//         }, delay);
//     }
// }
function debounce(func, delay) {
    let timer = null
    let args = arguments
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}
/* 
    解释：
    - debounce函数参数
        - func 需要进行防抖处理的函数
        - delay 指定的等待时间
    - 返回一个新的函数，这个新函数就是经过防抖处理后的函数。(经过防抖处理后的函数)
    - 当新函数被调用时，它会清除之前设置的定时器（如果有的话），然后重新设置一个新的定时器。
    - 只有在等待时间内没有再次调用新函数时，定时器才会触发执行原始的func函数。
*/
function myFunction() {
    console.log('My Function');
}
// 创建一个防抖函数，等待事件为500毫秒 
const debouncedFunction = debounce(myFunction, 2000)

debouncedFunction()
debouncedFunction()
debouncedFunction()
