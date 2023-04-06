/* 
    防抖函数
        - 防抖函数在n秒后再执行该事件，若在n秒内被重复触发，则重新计时
        - 参数
            - func 要被防抖的函数
            - wait 规定的时间
*/
function debounce(func, wait) {
    let timeout
    return function() {
        let context = this // 保存this的指向
        let args = arguments // 拿到event对象
        
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}