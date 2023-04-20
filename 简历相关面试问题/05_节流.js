/* 
    定时器方法
    参数
        - 参数一；fn 函数
        - 参数二：delay 时间
*/
function throttle(fn, timer) {
    // 重置定时器
    let timer = null
    // 返回闭包函数
    return function() {
        let args = arguments
        // 如果定时器为空
        if(!timer) {
            // 开启定时器
            timer = setTimeout(() => {
                // 执行函数
                fn.apply(this, args)
                // 函数执行完毕后重置定时器
                timer = null
            }, delay);
        }
    }
}