/* 
    防抖：频繁触发，只会触发最后一次

    参数一：sum；当sum函数传入进来，会在定时器时间结束之后在调用，
    参数二：delay；决定返回时间
*/
function antiShake(Sum, delay) {
    // 设置timer的值为空，防止定时器没有被清空
    let timer = null
    // arguments是作为伪数组的形式存放参数，存放的是本省函数的参数
    let args = arguments
    // 返回闭包函数
    return function() {
        // 重复点击就会清除已经在计算的时间
        clearTimeout(timer)
        // 定时器的秒数
        timer = setTimeout(() => {
            // arg是存放当前函数的实参
            // this: 是window，Sum能接收到antiShake的实参
            Sum.apply(this, args)
        }, delay);
    }
}
