/* 
    柯里化问题
*/
function add(x) {
    let sum = x
    function addNext(y) {
        if(typeof y === 'undefined') {
            // 传入后面的参数没有别的内容
            return sum 
        }
        sum += y
        return addNext // 防止有多层次的递归操作
    }
    return addNext
}

// add(1)

/* 
    解释
    - 
*/