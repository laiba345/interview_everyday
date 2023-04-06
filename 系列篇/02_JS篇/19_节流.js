/* 
    节流函数
        - n秒内只运行一次，若在n秒内重复触发，只有一次生效
        - 参数
            - fn是要被节流的函数
            - wait是规定的时间
*/
function throttled(fn, wait) {
    let timer = null
    return function(...args) {
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, wait);
        }
    }
}