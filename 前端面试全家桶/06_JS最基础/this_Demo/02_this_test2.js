const zhangsan = {
    name:'张三', 
    sayHi() {
        // this即为当前对象
        console.log(this)
    }, 
    wait() {
        setTimeout(function() {
            console.log(this) // window 
        });
    }
}

zhangsan.sayHi()
zhangsan.wait()

const lisi = {
    name:'张三', 
    sayHi() {
        // this即为当前对象
        console.log(this)
    }, 
    wait() {
        setTimeout(() => {
            // this即为当前对象 => 箭头函数的取值是它的上级作用域的值
            console.log(this)
        });
    }
}