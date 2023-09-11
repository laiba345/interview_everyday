var x = 10
function msg(x) {
    x = 20
    console.log(x); // 20
}

msg(x) // 20
// 函数外部输出的是全局变量x的值,即为10;
console.log(x); // 10