// 函数作为返回值
function create() {
    let a = 100
    return function() {
        console.log(a)
    }
}

let fn = create() 
let a = 200
fn() // 100 关键在于自由变量的查找