Array.prototype.fakeFlat = function(depth = 1) {
    let result = []
    // 定义递归函数
    const flat = (arr, depth) => {
        arr.forEach((item) => {
            // 判断是否为数组并且未达到最大深度
            if(Array.isArray(item) && depth > 0) {
                // 继续递归扁平化
                flat(item, depth-1)
            }else {
                // 将非数组项推入结果数组中
                result.push(item)
            }
        })
    }
    // 直接调用递归函数
    flat(this, depth)  // this其实就是调用flat函数的对象
    return result
} 

let arr = [1, [2, 3]]
console.log(arr.fakeFlat(Infinity))

